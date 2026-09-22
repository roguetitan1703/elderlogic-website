"""Make an Airtable table match what /api/contact writes.

Run it once against a base, and again against the client's base on go live.
It is idempotent: fields that already exist are left alone, so re-running it
after a partial run finishes the job rather than erroring.

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
    here = os.path.dirname(os.path.abspath(__file__))
    local = os.path.join(here, "..", "web", ".env.local")
    values = dict(os.environ)
    if os.path.exists(local):
        with open(local, encoding="utf-8") as handle:
            values.update(dict(re.findall(r"^(\w+)=(.*)$", handle.read(), re.M)))
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
    if status != 200:
        sys.exit(f"cannot read the base schema ({status}). The token needs schema.bases:read.\n{body}")

    match = next((t for t in body["tables"] if table in (t["id"], t["name"])), None)
    if not match:
        names = ", ".join(f"{t['name']} ({t['id']})" for t in body["tables"])
        sys.exit(f"no table {table!r} in this base. It holds: {names}")

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
    print(f"\n{created} created. The table is ready.")
    if spare:
        print("Unused fields, left alone: " + ", ".join(sorted(spare)))


if __name__ == "__main__":
    main()
