"""Make an Airtable table match what /api/contact writes.

Run it once against a base, and again against the client's base on go live.
It is idempotent throughout: a table that exists is used, fields that exist are
left alone, so re-running it after a partial run finishes the job rather than
erroring.

It does three things. Creates the table if AIRTABLE_TABLE names one that is not
there, which a brand new base never has. Creates any of the six fields that are
missing. Then writes one real enquiry through the same path the site uses and
deletes it again, because a schema that looks right and a write that actually
succeeds are different claims, and only the second one matters on go live.

    cd web && python ../scripts/airtable-setup.py

Reads AIRTABLE_TOKEN, AIRTABLE_BASE_ID and AIRTABLE_TABLE from web/.env.local,
or from the environment if that file is not there. AIRTABLE_TABLE may be the
table name or its tbl... id; the id is better, because renaming the table in
the Airtable UI then does not break the site.

The token needs three scopes. data.records:write to file enquiries, which is
all the site itself needs; schema.bases:read and schema.bases:write so this
script can see and create the fields. A token with only the first will report
exactly that below.
"""

import json
import os
import re
import sys
import urllib.error
import urllib.request
from datetime import datetime, timezone

FIELDS = [
    {"name": "Name", "type": "singleLineText"},
    {"name": "Organisation", "type": "singleLineText"},
    {"name": "Email", "type": "email"},
    {"name": "Message", "type": "multilineText"},
    {
        "name": "Received",
        "type": "dateTime",
        "options": {
            "timeZone": "America/Phoenix",
            "dateFormat": {"name": "iso"},
            "timeFormat": {"name": "24hour"},
        },
    },
    {"name": "Source", "type": "singleLineText"},
]


def env():
    """web/.env.local supplies defaults; the real environment wins.

    That order matters twice. It is Next's own order, so the script and the
    site cannot disagree about which base they are pointed at. And it is what
    lets a one off run be aimed somewhere else, which is how the client's base
    gets set up from a machine that already has a .env.local for ours:

        AIRTABLE_BASE_ID=appHERS AIRTABLE_TOKEN=... python ../scripts/airtable-setup.py
    """
    here = os.path.dirname(os.path.abspath(__file__))
    local = os.path.join(here, "..", "web", ".env.local")
    values = {}
    if os.path.exists(local):
        with open(local, encoding="utf-8") as handle:
            values.update(dict(re.findall(r"^(\w+)=(.*)$", handle.read(), re.M)))
    values.update({k: v for k, v in os.environ.items() if v})
    missing = [k for k in ("AIRTABLE_TOKEN", "AIRTABLE_BASE_ID", "AIRTABLE_TABLE") if not values.get(k)]
    if missing:
        sys.exit(f"missing: {', '.join(missing)}. See web/.env.example.")
    return values["AIRTABLE_TOKEN"], values["AIRTABLE_BASE_ID"], values["AIRTABLE_TABLE"]


def call(token, method, url, payload=None):
    request = urllib.request.Request(
        url,
        data=json.dumps(payload).encode() if payload else None,
        headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"},
        method=method,
    )
    try:
        return 200, json.loads(urllib.request.urlopen(request, timeout=30).read().decode())
    except urllib.error.HTTPError as error:
        body = error.read().decode()
        try:
            return error.code, json.loads(body)
        except ValueError:
            return error.code, {"raw": body[:400]}


def main():
    token, base, table = env()

    status, body = call(token, "GET", f"https://api.airtable.com/v0/meta/bases/{base}/tables")
    if status == 401:
        sys.exit("401: Airtable does not recognise this token. It is wrong, revoked or\n"
                 "     expired. This is not a scope problem.")
    if status == 403:
        sys.exit(f"403: the token is valid but cannot read this base ({base}). Either it\n"
                 "     lacks schema.bases:read, or the base was never added to its access\n"
                 "     list, which is a separate setting on the token.")
    if status == 404:
        sys.exit(f"404: no base {base}. Check AIRTABLE_BASE_ID: it is the app... segment\n"
                 "     of the Airtable URL, not the workspace and not the table.")
    if status != 200:
        sys.exit(f"cannot read the base schema ({status}).\n{body}")

    match = next((t for t in body["tables"] if table in (t["id"], t["name"])), None)

    if not match:
        names = ", ".join(f"{t['name']} ({t['id']})" for t in body["tables"])
        # A tbl... id cannot be conjured: it is assigned by Airtable, so being
        # given one that is not there means the wrong base or a typo, not a
        # table waiting to be made.
        if re.fullmatch(r"tbl[A-Za-z0-9]+", table):
            sys.exit(f"no table with id {table} in this base. It holds: {names}")
        status, body = call(
            token,
            "POST",
            f"https://api.airtable.com/v0/meta/bases/{base}/tables",
            {"name": table, "fields": FIELDS},
        )
        if status == 403:
            wanted = ", ".join(f"{f['name']} ({f['type']})" for f in FIELDS)
            sys.exit(
                f"no table {table!r} in this base, and the token cannot create one:\n"
                "  it has no schema.bases:write. Either add that scope, or make a\n"
                f"  table called {table!r} by hand with these fields:\n"
                f"    {wanted}\n"
                f"  The base currently holds: {names}"
            )
        if status != 200:
            sys.exit(f"could not create the table {table!r}: {status} {body}")
        match = body
        print(f"created table {match['name']} ({match['id']})")
    else:
        print(f"{match['name']} ({match['id']})")
    have = {f["name"] for f in match["fields"]}

    created = 0
    for field in FIELDS:
        if field["name"] in have:
            print(f"  ok       {field['name']}")
            continue
        status, body = call(
            token,
            "POST",
            f"https://api.airtable.com/v0/meta/bases/{base}/tables/{match['id']}/fields",
            field,
        )
        if status == 200:
            print(f"  created  {field['name']}")
            created += 1
        elif status == 403:
            sys.exit(
                f"  cannot create {field['name']}: the token has no schema.bases:write.\n"
                "  Either add that scope to the token, or add these fields by hand:\n    "
                + ", ".join(f"{f['name']} ({f['type']})" for f in FIELDS if f["name"] not in have)
            )
        else:
            sys.exit(f"  {field['name']}: {status} {body}")

    spare = have - {f["name"] for f in FIELDS}
    print(f"\n{created} field(s) created.")
    if spare:
        print("Unused fields, left alone: " + ", ".join(sorted(spare)))

    if "--no-smoke" in sys.argv:
        print("\nSmoke test skipped.")
        return

    # The part that actually proves it. A schema that looks right and a write
    # that succeeds are different claims, and on go live only the second one
    # matters: a token missing data.records:write passes every check above and
    # fails here, which is exactly how it would fail for a real enquiry.
    #
    # This posts what web/app/api/contact/route.ts posts, typecast included, so
    # a failure here is a failure the site would have had.
    print("\nSmoke test: writing one enquiry the way the site writes it.")
    probe = {
        "Name": "Setup check",
        "Organisation": "ElderLogic website setup",
        "Email": "setup-check@example.com",
        "Message": "Written by scripts/airtable-setup.py to prove the token can "
                   "write. Safe to delete.",
        "Received": datetime.now(timezone.utc).isoformat(),
        "Source": "airtable-setup.py",
    }
    status, body = call(
        token,
        "POST",
        f"https://api.airtable.com/v0/{base}/{match['id']}",
        {"records": [{"fields": probe}], "typecast": True},
    )
    if status != 200:
        sys.exit(
            f"  the write FAILED: {status} {body}\n"
            "  The site would fail the same way. 401 is the wrong token, 403 is a\n"
            "  missing data.records:write scope, and UNKNOWN_FIELD_NAME is a field\n"
            "  spelled differently from the six above."
        )
    record = body["records"][0]["id"]
    print(f"  wrote {record}")

    if "--keep" in sys.argv:
        print("  kept, because --keep was passed. Delete that row before go live.")
    else:
        status, body = call(
            token, "DELETE", f"https://api.airtable.com/v0/{base}/{match['id']}/{record}")
        if status == 200:
            print("  deleted it again. The table is empty and ready.")
        else:
            print(f"  could NOT delete {record} ({status}). Remove that row by hand.")

    print("\nStill to do by hand, in Airtable: the automation that emails a new")
    print("enquiry to hello@elderlogic.app. RUNBOOK section 4a has the steps. It")
    print("belongs to this base, so it does not travel with the token.")


if __name__ == "__main__":
    main()
