# ElderLogic website: handover

For whoever works on this next. Written 2 October 2026, against `9aac257`.

`RUNBOOK.md` is the manual: how to run it, change it, check it, and what is
deliberately not done. This file is the context the runbook assumes.

The client's own handover, in plain words, is `for-the-client.md`. That one is
hers. This one is not.

---

## State

**Live at `https://elderlogic.app`.** Clean tree, both remotes and both
branches on the same commit.

---

## Who

**Terrah Shaw**, ElderLogic LLC, Arizona. Non-technical, decisive, reviews by
WhatsApp voice note and screenshot. **Om Singh Chandel**, Delpat LLP, is the
agency.

Om creates every account *for* her and she verifies the email. Do not design
anything that needs her to sign up for a service, hold a credential, or
understand a dashboard.

The product is placement and marketing-visit software for hospice teams, built
on Arizona's licensed residential care homes and the state's AZDHS record.

---

## Repo

Next.js 16.3.4, App Router. The app is in `web/`.

Two remotes, kept identical. `origin` is `roguetitan1703/elderlogic-website`,
`delpat` is `Delpat-Tech/elderlogic-website`. **Push to both, every time.**

Two branches. `main` is the work. `deployments` is what the client's preview
URL points at, and it only ever fast forwards:

```
git checkout deployments && git merge --ff-only main
git push origin deployments && git push delpat deployments
git checkout main
```

A merge that is not a fast forward means somebody committed to `deployments`
directly. Find that commit before forcing anything: it exists nowhere else.

Pushes to `origin` intermittently fail with HTTP 408 on large image commits.
Retry, it succeeds. `delpat` is not affected.

---

## How it is put together

| | |
|---|---|
| Copy | `web/content/copy.ts`, the single source for every user-facing string. Never hardcode text in a component. |
| Legal copy | `web/content/privacy.ts`. Supplied text: **never edit the wording.** The effective date is the one exception and sits in a constant at the top. |
| Tokens | CSS custom properties in `web/public/ds/tokens/`, bundled by `scripts/build-ds.py`. The bundle is **inlined** into the head at build time, read once at module scope in `layout.tsx`. Edit the token files, not the bundle. |
| Images | Pre-built `<picture>` ladders, AVIF then WebP then the original, by `scripts/build-images.py`. Per-image quality overrides in `QUALITY_BY_SOURCE`. |
| Enquiries | `POST /api/contact`. Node runtime: it is the one dynamic route in the build output, and a purely static host breaks the form. |
| Booking | One `<dialog>` at the root, `components/Booking.tsx`. Every CTA calls `useBooking().open(where)`. |
| Analytics | GA4, measurement id hardcoded in `components/Analytics.tsx`, gated on `isProduction`. |

**Images are deliberately not `next/image`.** Its default loader is a Vercel
runtime service, and hosting has to stay portable. A `<picture>` with files
built ahead of time is the same payload saving, works anywhere, costs nothing
per request, and has no runtime that can fail.

**The enquiry route answers before it files.** The sender is blocked only by
their own mistakes: a missing name, an address with no `@`. Everything after
that is ours, so the route answers in about 180ms and writes to Airtable
afterwards with `after()`, three retries, and a dead letter to the logs plus
`ENQUIRY_FALLBACK_URL` if it still fails. Telling somebody their message did
not send when they did nothing wrong is both untrue and a lost enquiry, because
most people do not type it again.

**The booking calendar is warmed on intent, never on load.** First hover, touch
or focus of any Book a demo mounts the iframe inside the still closed dialog;
an iframe inside a `display:none` element loads anyway. A cold open was 806ms
of empty dialog, measured. Warming for everybody would put a request to Google,
and Google's cookies, into every page view for the sake of the few who book,
which is the exact reason Google's own booking button was turned down.

---

## Migration from Wix

**Done, and verified live.** Every URL in the Wix sitemap redirects, 301, from
`web/next.config.mjs`:

| old | now |
|---|---|
| `/how-it-works` | `/#walkthrough` |
| `/routes-field-workflows` | `/#marketing-visits` |
| `/request-a-demo` | `/#book` |
| `/contact-us` | `/#book` |
| `/blank`, `/blank-1` | `/` |

Nothing outside that sitemap is redirected: an invented path would be a guess,
and a 404 is the honest answer to a URL that was never published.

The old links were on `www`, which Vercel 308s to the apex with the path
intact, so `www.elderlogic.app/how-it-works` reaches `/#walkthrough` in two
hops. Both halves have to keep working; testing only the apex tests the half
nobody arrives on.

---

## Accounts

All in Terrah's name. Secrets live in `web/.env.local`, which is gitignored,
and in the Vercel dashboard. None has ever been committed; a scan of the whole
history confirms it.

| | |
|---|---|
| Domain | GoDaddy, registered to her. Nameservers `ns43/ns44.domaincontrol.com`. Nothing routes through Wix any more. |
| Hosting | Vercel, her account, Pro. Apex canonical, `www` 308s to it. |
| Airtable | Her base. Table **Form Responses** (`tbl83C13v56DtAiGl`): Name, Organisation, Email, Message, Received, Source, plus Status kept for triage. |
| Calendar | Her Google appointment schedule, on the elderlogic.app profile, so the dialog carries her name. |
| Analytics | GA4 `G-S6W8DEK3L7`. |
| Email | `hello@elderlogic.app`, `privacypolicy@elderlogic.app`. |

The Vercel CLI on Om's machine is **logged out**. He has to run
`npx vercel login` himself; the device flow cannot be driven from a
non-interactive tool.

Airtable's API **cannot delete a field or a table**. Checked against the live
API, not taken from the documentation: a DELETE on a real field id returns the
same 404 as one that does not exist. Records it will delete. Fields and tables
are UI only.

---

## Hard constraints

The client's, in her words, and they override any design instinct.

- *"We don't ever say text or call. We just say communicate with, or something
  vague so that nobody knows how we're actually doing it."*
- *"Let's make sure we don't give away too much. Competitors have asked some
  questions already."*
- **Never publish the mechanism** behind the record: no *scrape, feed, sync,
  dataset, we compile*, and never "published by AZDHS" as a source description.
- **No score, rating, ranking or status pill on a home.** Ever, in copy or UI.
- **No ElderLogic pricing anywhere.** A home's own monthly rate inside a
  product screenshot is a different thing and is fine.
- **No invented facts.** A number without a source gets cut, not softened.
- **No em dashes or en dashes anywhere**, including meta descriptions.
- **One CTA, worded identically everywhere: Book a demo.**
- Never real patient data in screenshots. The stack behind the product, Zoho
  Creator, Mapsly, Zapier and OpenPhone, must never appear.
- **Commits carry no co-author or tool trailers.**

Two sanctioned exceptions to the channel rule, both already on the page:
*"Your team isn't limited to their phone list."* and *"Marketing visits start
with an invitation, not a cold call."*

---

## How this project works

**Measure, do not assert.** Several wrong guesses early on cost real time.
Google's embed breakpoint, the image diff percentages, Airtable's token scopes,
the contrast ratios, the 806ms cold dialog: all were settled by measuring, and
a claim in a commit message is expected to have a number behind it.

**Copy checks cannot catch missing CSS.** A bad splice once deleted the close
panel's navy while every copy check passed and the build succeeded. Contrast
assertions are what catch that, and there are now three.

**Verify in the rendered page, not the source.** The Playwright suite runs 106
checks; six failures are permanent known artifacts, because a collapsed
`<details>` does not expose its text to `inner_text`. Six failures is a pass.

**Run axe on every route at 1440 and 390 after any visual change.** The
standing result is zero violations and it should stay that way.

**Real hardware finds what headless does not.** The iPhone pass found four bugs
that reproduce in neither Chromium nor WebKit headless at the same viewport: a
tab strip chaining its scroll to the page, a third tab staying hidden, an FAQ
question sticking green after a tap because `:hover` persists on touch, and a
lazy screenshot leaving an empty rectangle on a dark section. Do not treat the
emulated sweep as sufficient. **Android has still not been checked.**

**Commit messages explain why**, including what was tried and rejected. Match
that register; the history is part of the handover.

---

## Standing instruction on copy

From the client, and it has been tested: **do not keep changing copy against a
moving product.** The record section's heading question was closed on 25
September and reopening it needs a reason that is genuinely new. When her
product moves *toward* what the copy already says, that is a reason to leave
the copy alone, not to revisit it.

---

## Outstanding

1. **Android pass.** Ten minutes, nobody has done it. iOS is done.
2. **GA custom dimensions.** `deepest_section` and `cta_location` are being
   sent but stay invisible in reports until declared in Admin, Custom
   definitions. GA only populates a dimension from the moment it is created, so
   this is a day-one job. See RUNBOOK 4b.
3. **GA key events.** Mark `demo_request` and `enquiry_sent` once they have
   fired; they do not appear in the list before that, which looks exactly like
   broken tracking.
4. **GA data retention.** Defaults to 2 months. Change to 14. Nothing recovers
   what the default discards.
5. **Demo video.** Does not exist, and no slot is designed for one. The
   proposal made launching without it her call and she took it; adding it later
   is design work, not a drop-in.
6. **Lighthouse re-measure.** The last public number, mobile 72 and desktop 99,
   predates the performance pass.

Parked deliberately, with reasons, in `parked.md`: rate limiting on
`/api/contact`, an email alert on dead lettered enquiries, Google's own
scheduling button, and the Google chrome inside the dialog.
