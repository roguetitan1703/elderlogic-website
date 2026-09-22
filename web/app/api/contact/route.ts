import { NextResponse } from "next/server";

/**
 * Where an enquiry goes.
 *
 * The form used to intercept its own submit and hand the reader an email
 * address, because a form with no action does a GET to its own URL and puts
 * the sender's name and email in the query string: visible, logged and
 * shareable. That was a placeholder. This is the endpoint.
 *
 * It runs on the server, so the Airtable token is never in the bundle. That
 * also means the site needs a Node runtime where it is hosted: on a purely
 * static host this route does not exist and the form will report that it
 * could not send rather than pretending it did.
 *
 * With no Airtable credentials configured the enquiry is logged and the
 * response says it was not stored, so the form can tell the reader the truth
 * instead of showing a success it cannot back up.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const LIMITS = { name: 120, organisation: 160, email: 200, message: 4000 };

/** Deliberately permissive. The point is to catch a typo, not to adjudicate
 *  what is a valid address: anything stricter rejects real ones. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Body = {
  name?: unknown;
  organisation?: unknown;
  email?: unknown;
  message?: unknown;
  /** Hidden field. A human never sees it, so anything in it is a bot. */
  website?: unknown;
};

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

async function toAirtable(fields: Record<string, string>) {
  const token = process.env.AIRTABLE_TOKEN;
  const base = process.env.AIRTABLE_BASE_ID;
  const table = process.env.AIRTABLE_TABLE ?? "Enquiries";
  if (!token || !base) return { stored: false, reason: "not configured" };

  const res = await fetch(
    `https://api.airtable.com/v0/${base}/${encodeURIComponent(table)}`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ records: [{ fields }], typecast: true }),
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    /* The reader is never shown this. It says which of the three things is
       wrong: the token, the base, or the field names in the table. */
    console.error("airtable rejected the enquiry", res.status, detail.slice(0, 500));
    return { stored: false, reason: `airtable ${res.status}` };
  }
  return { stored: true };
}

export async function POST(request: Request) {
  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad-request" }, { status: 400 });
  }

  /* Answered honeypot: accepted and dropped. A bot told it was rejected tries
     again with the field empty. */
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true, stored: false });
  }

  const fields = {
    Name: clean(body.name, LIMITS.name),
    Organisation: clean(body.organisation, LIMITS.organisation),
    Email: clean(body.email, LIMITS.email),
    Message: clean(body.message, LIMITS.message),
  };

  const invalid: string[] = [];
  if (!fields.Name) invalid.push("name");
  if (!fields.Email) invalid.push("email");
  else if (!EMAIL.test(fields.Email)) invalid.push("email");
  if (!fields.Message) invalid.push("message");
  if (invalid.length) {
    return NextResponse.json({ ok: false, error: "invalid", fields: invalid }, { status: 422 });
  }

  try {
    const result = await toAirtable({
      ...fields,
      Received: new Date().toISOString(),
      Source: "elderlogic.app",
    });
    if (!result.stored) {
      console.warn("enquiry not stored:", result.reason, fields.Email);
    }
    return NextResponse.json({ ok: true, stored: result.stored });
  } catch (error) {
    console.error("enquiry failed", error);
    return NextResponse.json({ ok: false, error: "upstream" }, { status: 502 });
  }
}
