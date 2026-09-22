# Parked

Decided against, or decided later. Not forgotten, and not silently dropped.

Each entry says what it is, why it is not being done now, and what would make
it worth doing. Anything genuinely outstanding for launch lives in RUNBOOK
section 6, not here: this file is for things we looked at and chose to set
down.

---

## Rate limiting on /api/contact

**What.** Nothing throttles the enquiry endpoint. The honeypot stops a bot that
fills every field it finds; it does nothing against somebody posting the route
in a loop, which would fill the Airtable base and, past the free row limit,
start losing real enquiries behind noise.

**Why parked.** In-memory counters are useless here. The route is a serverless
function: instances are ephemeral and run in parallel, so each one counts to
its own limit and none of them see each other. Real rate limiting needs shared
state, which means either a paid Vercel plan or another service, and the site
has not launched yet.

**What it would take.**

- **Vercel WAF rate limiting.** No code at all, configured in the dashboard.
  Needs the Pro plan.
- **Upstash Redis.** Works on the free plan, about twenty lines with
  `@upstash/ratelimit`, one more account to hold for the client.

Either is an afternoon. The trigger to do it is launch day, or the first time
the base fills with junk.

---

## An email alert on a dead lettered enquiry

**What.** When Airtable will not take an enquiry, the route logs
`ENQUIRY_UNSTORED` with the whole message and POSTs it to
`ENQUIRY_FALLBACK_URL` if one is set. Nobody is told. Somebody has to be
watching the logs or the webhook to know.

**Why parked.** No email provider is chosen for this project yet, and choosing
one for a single alert is the wrong order to do it in. The existing outputs
already make the enquiry recoverable, which was the part that mattered.

**What it would take.** Whatever provider ends up sending mail for the site,
plus three lines in `deadLetter()`. Alternatively, point
`ENQUIRY_FALLBACK_URL` at anything that already alerts: a Slack incoming
webhook works as it is, with no code change.

---

## Google's own scheduling button

**What.** Google publishes a script that renders a "Book an appointment"
button which opens the appointment page in a popup.

**Why parked, and unlikely to be unparked.** It draws its own button, in its
own blue, with its own label, which would put a second wording and a second
colour on the one action this site has. It also loads a script and a
stylesheet from Google into every page view whether or not anybody books. The
dialog we build instead has our button and our label, and fetches nothing from
Google until it is opened.

---

## The Google chrome inside the booking dialog

**What.** The appointment page carries the schedule owner's logo and name, a
"Google Calendar" mark opposite it, and a "create your own appointment page"
strip at the foot. None of it can be turned off by parameter.

**Why parked.** The first of the three is not a styling problem, it is whose
account the schedule lives on: when the client creates hers, her own branding
appears. The other two are the price of a free scheduling tool, and the
alternative is paying for one.

**What it would take.** A paid scheduler, if the promo strip is ever judged to
cost more than the subscription.
