# ElderLogic site: running it, changing it, checking it

The operational handover. HANDOFF.md says what the site is and which rules may
never be broken; this says how to work on it.

---

## 1. Run it

```
cd web
npm install
npm run dev          # http://localhost:3000
```

Production build, which is what anything is measured against:

```
cd web
rm -rf .next && npm run build && npx next start -p 3195
```

Never run `next build` while `next dev` is running against the same folder.
They share `.next` and the result is a corrupted build that fails in ways that
look like code bugs. Stop one before starting the other.

---

## 2. Where things live

| What | Where |
|---|---|
| Every word on the site | `web/content/copy.ts` |
| Privacy policy text | `web/content/privacy.ts` |
| The public origin, and whether the site may be indexed | `web/content/site.ts` |
| Page structure | `web/app/page.tsx`, `web/app/faq/`, `web/app/privacy/` |
| Header, footer, and every reusable piece | `web/components/` |
| Design tokens: colour, type, spacing, radius, motion | `web/public/ds/tokens/` |
| Page layout CSS | `web/app/sections.css`, `web/app/globals.css` |
| Screenshots and the map | `web/public/product/` |
| Webfonts | `web/public/ds/fonts/` |

**No user-facing string may be typed into a component.** Labels, captions,
`alt` text and `aria-label`s all go in `copy.ts` first. This is not style: it
is the only reason a copy review can be done by reading one file, and strings
written straight into JSX have escaped review twice on this project.

---

## 3. Changing things

### Copy
Edit `web/content/copy.ts`. Nothing else. Re-read the rules at the top of that
file before you change a heading: the outreach channel is never named, the
record's mechanism is never published, and there is one call to action worded
"Book a demo" everywhere.

### Colour, type, spacing
Edit the file in `web/public/ds/tokens/`, then:

```
python scripts/build-ds.py
```

The browser loads one bundled `ds/tokens.css`, not the nine token files. If you
edit a token and skip the script, nothing changes on the page and it looks like
the token is broken.

**Before lightening any text colour, read the note above `--text-strong` in
`tokens/colors.css` and re-run `scripts/a11y-audit.py`.** Two of those tokens
are darker than they look like they should be, for a reason.

### A screenshot or the map
Replace the file in `web/public/product/`, keeping the name, then:

```
python scripts/build-images.py
```

This writes the AVIF and WebP variants the page actually serves and regenerates
`web/content/images.generated.ts`. Replacing the jpg without running it means
the site keeps serving the old picture, because the old variants are still on
disk and are what the browser prefers.

If the new file is a different shape, check `sizes` at its call site: it
declares how wide the image is **on the page**, not which file to fetch.
Getting that wrong is invisible and quietly triples the page weight.

### The share card
Edit `scripts/share-card.html`, then re-render:

```
python - <<'EOF'
from playwright.sync_api import sync_playwright
import pathlib
src = pathlib.Path("scripts/share-card.html").resolve()
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width": 1200, "height": 630}, device_scale_factor=1)
    pg.goto(src.as_uri()); pg.wait_for_timeout(2500)
    pg.screenshot(path="web/public/share-card.png"); b.close()
EOF
```

The card, the share title and the meta description must each say a different
thing. They appear together in Slack and LinkedIn, and they previously said the
same sentence three times. See the note above `shareTitle` in `copy.ts`.

### A new page
Use `pageMetadata()` from `web/content/site.ts`. Do not hand-write an
`openGraph` block: Next replaces the root's outright rather than merging into
it, so a hand-written one silently drops `og:image`, `og:type`, `og:site_name`
and `og:locale`, and the page shares with no card at all. The helper returns a
matching `twitter` block too, which is the other half of the same trap.

Then add the route to `web/app/sitemap.ts`.

### Icons
The mark lives in `web/public/icon-512.png`. After replacing it:

```
python scripts/build-icons.py
```

That rebuilds `favicon.ico` at 16, 32, 48 and 64 px. The `.ico` is the one icon
a browser fetches without being told to, and it is what shows in bookmarks and
history, so it is not optional even though the SVG icon covers modern browsers.

### Fonts
```
python scripts/build-fonts.py && python scripts/build-ds.py
```

Only the weights the site renders are downloaded, and each face is subset to
the characters a Latin page can print. **If you introduce a new font weight in
the tokens, add it to that script**, or the browser will fake it and the type
will look subtly wrong in a way nobody can name.

---

## 4. Checking it

All three want a production build running. Install once:

```
pip install playwright pillow pillow-avif-plugin fonttools brotli
python -m playwright install chromium firefox webkit
npm i axe-core
```

| Check | Command | Expect |
|---|---|---|
| Accessibility | `python scripts/a11y-audit.py` | 0 violations |
| Cross-browser and device | `python scripts/device-matrix.py` | no findings |
| Performance | `npx lighthouse http://localhost:3195/ --preset=desktop` | see below |

Both scripts assume the site is on port 3195; set `BASE` to change it.

The device sweep also prints which image file each engine chose. Expect
Chromium and Firefox to take AVIF and WebKit to take WebP: that is the reason
both formats are built, and a run where WebKit takes a `.jpg` means the WebP
variants are missing and `scripts/build-images.py` needs running.

Measured on this build, production, throttled by Lighthouse:

| | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|
| Desktop | 99 | 100 | 96 | 100 |
| Mobile | 87 | 100 | 96 | 100 |

Two things about those numbers. SEO reads 69 on any preview host, because the
site deliberately serves `noindex` until `NEXT_PUBLIC_SITE_URL` is set; it is
100 with the variable set. Best practices loses points locally for two 404s on
Vercel's analytics scripts, which only exist when deployed.

---

## 4a. Enquiries and booking

**Booking** is a Google Calendar appointment schedule. One constant,
`schedulerUrl` in `web/content/site.ts`. The calendar opens in a dialog behind
the "Book a demo" button rather than being embedded in the page, so nothing is
requested from Google until a reader means to book. It is the client's own
schedule, on the elderlogic.app Google profile, so the dialog carries her name.
Swap the URL and nothing else changes; empty it and the button still works, it
simply has nothing to show.

Google's page carries its own chrome and none of it can be turned off: the
schedule owner's logo and name at the top, "Google Calendar" opposite, and a
"create your own appointment page" strip at the foot. The first of those is
now hers; the other two are the price of a free scheduler.

**Enquiries** post to `/api/contact`, which validates them and writes them to
Airtable. Three variables, set on the host, never in the repo:

| | |
|---|---|
| `AIRTABLE_TOKEN` | personal access token on the base. The site needs `data.records:write` and nothing else |
| `AIRTABLE_BASE_ID` | the base id, `app...`: the first path segment of the Airtable URL |
| `AIRTABLE_TABLE` | the table id, `tbl...`: the second segment. The name works too, but the id survives a rename |
| `ENQUIRY_FALLBACK_URL` | optional. Any webhook that should receive an enquiry Airtable would not take |

The table needs these fields, spelled exactly: **Name, Organisation, Email,
Message, Received, Source**. `typecast` is on, so Airtable will coerce a text
value into a select option that already exists, but it will not invent a field
that is missing: a wrong spelling fails the write with `UNKNOWN_FIELD_NAME`.

```
cd web && python ../scripts/airtable-setup.py
```

creates whatever is missing and leaves everything else alone, so it is safe to
re-run and it is how the client's own base gets set up on go live. For that it
needs `schema.bases:read` and `schema.bases:write` on the token as well; with
only `data.records:write` it stops and prints the fields to add by hand.

Real values live in `web/.env.local`, which is gitignored, and in the host's
environment settings. They are never committed.

**The sender is only ever blocked by their own mistakes.** A missing name, an
address with no `@`, an empty message: those come back instantly, naming the
field. Everything after that is ours. The route answers in about 180ms and
files the enquiry after the response, using `after()`, which Vercel keeps
alive past the response.

Airtable being slow, rate limiting us or misconfigured has nothing to do with
the person who filled the form, and telling them "that did not send" when they
did nothing wrong is both untrue and a lost enquiry, because most people do not
type it again. So the write is retried three times, at 0.5s, 2s and 6s with
jitter. A 429 or a 5xx is worth retrying; a 401 or an `UNKNOWN_FIELD_NAME` will
fail identically three seconds later, so those skip straight to the end.

**Nothing is ever dropped silently.** If the write still fails, or the
variables are not set at all, the enquiry goes to the dead letter: one line in
the logs beginning `ENQUIRY_UNSTORED` with the whole message in it, and a POST
to `ENQUIRY_FALLBACK_URL` if that is set. Either recovers the enquiry by hand.
A Slack incoming webhook works as that URL with no code change, and is the
cheapest way to be told.

Both paths are tested: a valid enquiry answers in 180ms and appears in Airtable
a moment later, and a deliberately broken token still answers the sender 200
and delivers the full enquiry to the fallback.

**Being told an enquiry arrived.** Airtable is where an enquiry is kept; it is
not where anybody looks. The mail goes out of Airtable itself rather than out
of this route, for three reasons: it needs no third mail vendor, no DNS record
and no secret in our environment; Airtable retries its own sends; and it keeps
working if the site is redeployed, rolled back or moved. The cost is the from
address, which is Airtable's, not `elderlogic.app`.

In the base, **Automations, Create automation**:

| | |
|---|---|
| Trigger | *When record created*, table **Enquiries** |
| Action | *Send email* |
| To | `hello@elderlogic.app` |
| Subject | `Website enquiry: ` + the record's **Name** |
| Body | **Name**, **Organisation**, **Email**, **Message**, **Received** |

Turn it on, then submit the real form once and confirm the mail lands. This has
to be built again on the client's own base, because an automation belongs to a
base and does not travel with the token.

If the from address ever has to read `elderlogic.app`, that is a mail provider
and two DNS records on the domain, and the send moves into the route beside the
Airtable write. It is not needed to launch.

The route needs a Node runtime. It is `ƒ /api/contact` in the build output. On
a purely static host it does not exist and every enquiry reports a failure, so
whatever the site is deployed to has to run server code.

`web/.env.example` carries all of this next to the code.

---

## 4b. Analytics

**Google Analytics 4, under the client's own account.** The two Vercel tags
that were here before are gone: they only worked on Vercel, and they reported
to us rather than to her. One variable, `NEXT_PUBLIC_GA_ID`, the measurement id
from Admin, Data streams, the web stream. Unset, the tag does not render at
all, so local builds and previews send nothing and her reporting stays clean.

The id is public by design. It is in the page source of every site that uses
GA, which is why it is a `NEXT_PUBLIC_` variable and not a secret.

**Access.** GA charges nothing per user and has no seat limit. She owns the
property; Admin, Property access management, add whoever needs it as
Administrator or Editor. Implementing the tag needs only the id, not access to
her account, so she can send the id and add people later.

**The events the site sends.** Two, both in `web/lib/track.ts`:

| event | fires when |
|---|---|
| `demo_request` | the booking dialog opens |
| `enquiry_sent` | the contact form gets an answer the sender was told was a success |

`demo_request` counts intent, not bookings. The booking itself happens on
Google's page inside an iframe, which we cannot see into, so the completed
bookings are counted in her calendar and the two numbers are read together.

`enquiry_sent` fires only on success. A 422 is the sender fixing their own
typo and is not an enquiry; a failed send is not one either. Counting either
would overstate her numbers.

Both go through `track()`, which is silent when the tag is not there. Analytics
must never be able to break a booking or an enquiry, so it never throws.

**Video plays are contracted and there is no video on the site.** If one is
added, it gets a third event here.

**Cookies.** GA sets them and is a third party, which the Vercel tag was not.
The privacy policy already covers this: it names cookies, web beacons and pixel
tags, and lists what they collect. No new clause is needed. GA4 truncates IP
addresses on collection, and the site has no login, so nothing it records is
tied to a named person.

---

## 4c. Branches, and the preview the client sees

Two branches, and the difference matters because one of them is a URL you have
given to somebody.

`main` is the work. Every commit lands here first.

`deployments` is what the client is looking at. Vercel builds a preview for it
and gives it a stable URL that does not change between builds, so the link she
was sent keeps working. Nothing is developed on this branch; it only ever
fast forwards to `main` when the work is ready to be seen.

```
git checkout deployments && git merge --ff-only main
git push origin deployments && git push delpat deployments
git checkout main
```

If that merge is not a fast forward, something was committed to `deployments`
directly. Find it before forcing anything: it is a change that exists nowhere
else.

Previews serve `noindex` regardless, because `NEXT_PUBLIC_SITE_URL` is set on
the production deployment only and Vercel marks a branch build
`VERCEL_ENV=preview`. So the preview cannot compete with the real site in
search, and it cannot be found by anyone who was not sent the link.

---

## 5. Going live

`NEXT_PUBLIC_SITE_URL` is the switch. Until it is set to the real domain, every
page serves `noindex, nofollow` and `robots.txt` reflects that.

This is deliberate. Vercel marks a project's first deployment "production" even
on a throwaway `*.vercel.app` host, so keying off the environment alone would
put a temporary URL into Google, competing with the real site later and showing
searchers an unfinished page. Setting the variable is the act that turns
indexing on, and it is the last thing to do, not the first.

Setting it also fixes the canonical URLs, the sitemap, and the absolute URL on
the share card, which social networks fetch by URL rather than from the page.

### The old Wix URLs

Every path in the Wix sitemap redirects, 301, from `web/next.config.mjs`:

| old | now |
|---|---|
| `/how-it-works` | `/#walkthrough` |
| `/routes-field-workflows` | `/#marketing-visits` |
| `/request-a-demo` | `/#book` |
| `/contact-us` | `/#book` |
| `/blank`, `/blank-1` | `/` |

The two `blank` paths were Wix placeholders with nothing to preserve, so they
go to the top of the site rather than to a section that would misrepresent what
was clicked. Nothing outside that sitemap is redirected: an invented path would
be a guess, and a 404 is the honest answer to a URL that was never published.

These are 301 rather than Next's default 308. Both are permanent and Google
treats them alike, but 301 is the one every crawler and link checker has
understood for twenty five years.

---

## 6. Not done

Tracked so nothing is lost between sessions; see HANDOFF.md for detail.

- **Enquiry handling.** Done, pending credentials. The route, the validation,
  the honeypot and the confirmation are built; the Airtable base and token are
  not created yet, so the form currently reports that it could not send.
- **Booking.** Done. It points at the client's own Google Calendar schedule on
  the elderlogic.app profile.
- **Rate limiting.** Nothing throttles `/api/contact`. See `parked.md` for why,
  and for the two ways to add it.
- **Analytics.** Google Analytics is wired and inert until
  `NEXT_PUBLIC_GA_ID` is set. Demo requests and form submissions are sent; see
  section 4b. Video plays are contracted and there is no video on the site.
- **Migration.** Redirects are in place for every URL in the Wix sitemap. What
  remains is pointing the domain at this deployment, which is the cutover
  itself.
- **Real hardware.** The device sweep runs three engines headless. WebKit shares
  Safari's engine, so it catches engine bugs, but it is not an iPhone. Someone
  has to open the site on one before launch.
