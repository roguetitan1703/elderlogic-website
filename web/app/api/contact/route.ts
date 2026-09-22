import { after, NextResponse } from "next/server";

/**
 * Where an enquiry goes.
 *
 * Two jobs, and they are separated on purpose.
 *
 * The first is the sender's: is this a message we can act on. A missing name,
 * an address with no @ in it, an empty message. Those are the sender's to fix,
 * so they are checked before anything else and reported straight back.
 *
 * The second is ours: getting the message into Airtable. Airtable being slow,
 * rate limiting us, or the table being misconfigured has nothing to do with
 * the person who filled the form, and telling them "that did not send" when
 * they did nothing wrong is both a lie and a lost enquiry: most people do not
 * type it again. So once the message is ours, the answer is yes, and the
 * filing happens after the response, with retries, and with a dead letter that
 * fires if it still fails.
 *
 * after() keeps the function alive past the response on Vercel, so this is not
 * a promise abandoned at the edge of a request.
 *
 * Nothing here is ever dropped silently. Every path that does not end in a
 * stored record ends in ENQUIRY_UNSTORED in the logs with the whole message in
 * it, and in a POST to ENQUIRY_FALLBACK_URL if one is set, so the enquiry can
 * be recovered from either.
 */
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const LIMITS = { name: 120, organisation: 160, email: 200, message: 4000 };

/** Deliberately permissive. The point is to catch a typo, not to adjudicate
 *  what is a valid address: anything stricter rejects real ones. */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** 0.5s, 2s, 6s. Three attempts inside ten seconds, well short of any
 *  function timeout, and long enough to cross a rate limit window. */
const BACKOFF = [500, 2000, 6000];

type Body = {
  name?: unknown;
  organisation?: unknown;
  email?: unknown;
  message?: unknown;
  /** Hidden field. A human never sees it, so anything in it is a bot. */
  website?: unknown;
};

type Enquiry = Record<string, string>;

function clean(value: unknown, max: number) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms + Math.random() * 250));

/** Worth trying again, or not. A 429 or a 5xx is Airtable having a moment. A
 *  401 is the wrong token and a 422 is the wrong field names: both will fail
 *  identically three seconds later, so they go straight to the dead letter
 *  rather than spending the retries. */
const worthRetrying = (status: number) => status === 429 || status >= 500;

/**
 * The last resort. The enquiry is printed whole, on one line, behind a token
 * that can be searched for or alerted on, and posted to a webhook if one is
 * configured. Either is enough to recover the message by hand.
 */
async function deadLetter(reason: string, enquiry: Enquiry) {
  console.error("ENQUIRY_UNSTORED", JSON.stringify({ reason, enquiry }));

  const url = process.env.ENQUIRY_FALLBACK_URL;
  if (!url) return;
  try {
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reason, enquiry }),
      signal: AbortSignal.timeout(8000),
    });
  } catch (error) {
    console.error("ENQUIRY_FALLBACK_FAILED", error);
  }
}

async function store(enquiry: Enquiry) {
  const token = process.env.AIRTABLE_TOKEN;
  const base = process.env.AIRTABLE_BASE_ID;
  const table = process.env.AIRTABLE_TABLE ?? "Enquiries";

  if (!token || !base) {
    await deadLetter("airtable not configured", enquiry);
    return;
  }

  const endpoint = `https://api.airtable.com/v0/${base}/${encodeURIComponent(table)}`;
  let last = "unknown";

  for (let attempt = 0; attempt < BACKOFF.length; attempt++) {
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ records: [{ fields: enquiry }], typecast: true }),
        cache: "no-store",
        signal: AbortSignal.timeout(10000),
      });

      if (res.ok) {
        if (attempt > 0) console.warn(`enquiry stored on attempt ${attempt + 1}`);
        return;
      }

      last = `airtable ${res.status}: ${(await res.text().catch(() => "")).slice(0, 300)}`;
      if (!worthRetrying(res.status)) break;
    } catch (error) {
      last = `network: ${error instanceof Error ? error.message : String(error)}`;
    }

    if (attempt < BACKOFF.length - 1) await wait(BACKOFF[attempt]);
  }

  await deadLetter(last, enquiry);
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
    return NextResponse.json({ ok: true });
  }

  const enquiry: Enquiry = {
    Name: clean(body.name, LIMITS.name),
    Organisation: clean(body.organisation, LIMITS.organisation),
    Email: clean(body.email, LIMITS.email),
    Message: clean(body.message, LIMITS.message),
  };

  /* The only things the sender can be asked to fix. */
  const invalid: string[] = [];
  if (!enquiry.Name) invalid.push("name");
  if (!enquiry.Email || !EMAIL.test(enquiry.Email)) invalid.push("email");
  if (!enquiry.Message) invalid.push("message");
  if (invalid.length) {
    return NextResponse.json({ ok: false, error: "invalid", fields: invalid }, { status: 422 });
  }

  enquiry.Received = new Date().toISOString();
  enquiry.Source = "elderlogic.app";

  /* Ours now. Answer first; file it after, and never lose it. */
  after(() => store(enquiry));

  return NextResponse.json({ ok: true });
}
