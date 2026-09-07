# Layer: assets and motion — coverage

What we actually hold, what each thing can carry, what it can be animated into, and what is genuinely missing. Nothing here assumes a screenshot that does not exist.

---

# 1. What we hold

## 1.1 Product screens — five, and one is mislabelled

| File | What it actually shows | Condition |
|---|---|---|
| `desk-map.png` | Phoenix metro, **every licensed home as a pin**, app nav down the left: Map · Assessment Form · Clients · Marketing Visits Form · All Marketing Visits | **The money asset.** High density, wide crop, reads at any size. Pins are purple — off-brand against navy/green. |
| `phone-route.png` | The pre-tour route: four numbered stops, drawn polyline, bottom bar **Navigate · Room Details · AZDHS · FamilyTour Form · More** | Strong. Two blockers: a red **"57 d 3 h 43 min late"** badge, and her dog as the account avatar. |
| `phone-assessment.png` | Assessment Form — Name & Locale, Client Name, Current Location Type, POA block (name, relationship, type, phone, email) | Clean. Empty state, which is honest and safe. |
| `desk-clients.png` | Clients table — name, DOB, age, gender, height, weight, POA name, POA phone | **Unusable as-is.** One row, and it reads *Buggs Bunny / Daffy Duck / +15551112233*. |
| `phone-visit-form.png` | **Not a visit form.** It is the **Marketing Visits Form**: date to visit, start time, end time, and a *search anchor address* — *"Homes within 1 mile of this address will be included."* | Usable. Mislabelled in the design system, and it corrects our copy — see 1.2. |

## 1.2 What the screens correct in our copy

**Territory setup is an anchor address plus a radius, not a lasso.** The app asks for a date, a start and end time, and an address, and returns homes within a mile. The lasso is the Mapsly path. Section 5 of the spec says *"a rep picks the date and the area"* — still true, but the visual must be the anchor-and-radius, not a drawn shape.

**"Marketing Visits" is the app's own word for territory work.** It is in the navigation, twice. We have been calling it *territory*. Worth deciding which word the site uses, because the product uses hers.

**The route screen already has the four actions** comparison B annotated as callouts — Navigate, Room Details, AZDHS, FamilyTour Form. That deck was drawing a real screen without saying so.

## 1.3 Brand and icons

| | |
|---|---|
| **Workflow icons** | 9 — Assessment Form, Client, Power of Attorney, Placement Search, Facilities, Outreach Log, Pre-Tour, Family Tour, Move-In — in **deep blue, vibrant green, white**, SVG and PNG. Active / done / pending states are already drawn for us. |
| **Logo** | Full logo in colour, black, white. SVG and PNG. Favicons at 16 and 512. |
| **Generic icon PNGs** | A stock set — map-marker, van-fast, users-speaking, tasks, portfolio, url, fraud-prevention. **Do not use.** The nine branded ones cover everything the page needs. |

## 1.4 Design system components already built

Relevant to this page, so we do not rebuild them:

- `product/` — **DesktopShot, PhoneFrame, PhoneShot, PhoneRow.** Framing is solved; the shots above drop straight in.
- `data/` — **RecordList, SourceNote.** This matters more than it looks; see 3.2.
- `content/` — StatBlock, FeatureItem, SectionHeading, Eyebrow, PullQuote, Card.
- `actions/` — Button, ArrowLink. `forms/` — Field, TextInput, SelectInput. `navigation/` — SiteHeader, SiteFooter.
- `tokens/motion.css` — easings and four durations, all zeroed under `prefers-reduced-motion`.
- `guidelines/no-rating-rule.html` — binding on marketing copy, not just product UI.

## 1.5 Other

- **18 iStock credits.** On current plan, the page needs close to none.
- **Privacy policy** supplied.
- **No demo video**, and she does not want one carrying the page.

---

# 2. Coverage map — spec section against what exists

| Spec section | Needs | Have | Status |
|---|---|---|---|
| Hero | map fragment, far out | `desk-map.png` | **Covered** — crop |
| Strip | none | — | Covered |
| 3 · Why homes want the meeting | the home's message | text | Covered |
| 4 · The territory | full metro, every home | `desk-map.png` | **Covered** — the asset this section was built for |
| 5 · A day in it | anchor + radius, homes returning | `phone-visit-form.png` + `desk-map.png` | **Covered** — see 1.2 |
| 6 · Walkthrough step 1 | assessment | `phone-assessment.png` | Covered |
| 6 · step 2 | client + POA records | `desk-clients.png` | **Blocked** — cartoon data |
| 6 · step 3 | placement search | — | **Missing** |
| 6 · step 4 | results, ruled-out homes gone | — | **Missing** |
| 6 · step 5 | outreach log | — | **Missing** |
| 6 · step 6 | pre-tour route | `phone-route.png` | Covered — after retouch |
| 6 · step 7 | family route | — | **Missing** |
| 6 · step 8 | move-in record | — | **Missing** |
| 7 · The record | facility detail, AZDHS history | — | **Missing — and it is the credibility section** |
| 9 · Close | scheduling embed | — | Third-party |

**Five of thirteen slots covered outright. One blocked on test data. Six missing.**

---

# 3. Closing the gaps

## 3.1 Retouch, not reshoot — cheap, do first

1. `phone-route.png` — remove the **"57 d 3 h 43 min late"** badge and replace the dog avatar. Both are two-minute fixes and both are disqualifying as they stand.
2. `desk-clients.png` — reseed with plausible names and eight to ten rows. Cartoon data on a page going to hospice executives is worse than no screenshot.
3. `desk-map.png` — decide whether purple pins stay. They are the app's, so changing them on the site makes the site a lie. Recommend keeping them and letting the design system's navy and green hold everything around the map.

## 3.2 The record section does not need a screenshot

Section 7 is the one gap that actually threatens the page, and the design system already solves it. `components/data/RecordList` plus `SourceNote` render a licensing / inspections / violations / enforcement record natively, in brand, with the source line attached — and `guidelines/no-rating-rule.html` shows exactly the DO layout: *Last inspection 2026-06-18 · Substantiated violations, 24 mo: 2 · Enforcement actions on file: 0 · AZDHS file, refreshed 1 Aug 2026.*

Built rather than captured, it is on-brand, retina at any size, and never goes stale. **This removes the biggest asset dependency on the page.**

## 3.3 Genuinely must be captured

Ranked by how much the page suffers without them:

1. **Outreach log** — step 5. The artefact behind the funnel. Without it the funnel is a claim.
2. **Placement search results** — steps 3 and 4, ideally one screen showing the count and ruled-out homes already gone.
3. **Move-in record** — step 8. The ending.
4. **Family route as the family receives it** — step 7. Also the only family-facing surface in the product.

Steps 3 and 4 can share one screen. So four captures, not six.

---

# 4. Motion coverage — what we can animate with what we already have

The important finding: **the page's entire motion design can be built from `desk-map.png` and the nine icons.** Not one of the animations below waits on a missing screenshot.

### M1 · Pin bloom — hero
Pins render in as the map settles, then all but twelve fade to a neutral tint. The twelve stay in brand green.
*Carries the hero's whole argument without a second sentence. Asset: `desk-map.png`. Under reduced motion, it renders in its final state.*

### M2 · The zoom spine — sections 4 → 5 → 6 → 7
One map, descending: metro → anchor and radius → the route between stops → one home's record. Never the same state twice.
*This is comparison Extended's four-level zoom, distributed down the page instead of crammed into one section. It gives the scroll a single continuous object, which is the coherence the page has been missing.*

### M3 · Radius draw — section 5
The anchor address drops, a one-mile circle opens from it, the homes inside light up and count.
*True to the actual product, now that we know it is a radius and not a lasso.*

### M4 · The narrowing — the funnel, on the map
The funnel stops being a bar chart and becomes pins going out: 200 lit → 40 grey as *already ruled out by your team* → 60 → 20 → 5 hold → 2 pulse.
*Spatial, not statistical. Uses the map we already have, and it makes the customer's own blacklist visible as an act rather than a bullet.*

### M5 · Route draw — walkthrough steps 6–7
The polyline draws stop to stop, numbered markers landing in order.
*Redrawn as vector from `phone-route.png`, so it is accurate to the product and sharp at any size.*

### M6 · The icon spine — the walkthrough
Nine icons, three states, all three colourways already sitting in `Assets/Icons/SVGs/`. Active green, done deep blue, pending deep blue at low opacity.
*Zero production. This is the cheapest strong thing on the page.*

### M7 · Record reveal — section 7
The record rows arrive in date order, oldest first, as the card settles.
*Built from `RecordList`. Makes "full history, not only current status" legible in a way a sentence cannot.*

**Everything else on the page is reveal-on-scroll: fade plus an 8px rise, `--dur-reveal` 420ms, `--ease-standard`.**

---

# 5. The hard line on motion

| Allowed | Not allowed |
|---|---|
| One narrative animation — the walkthrough | Parallax of any kind |
| The map zoom spine, because it carries information | Numbers counting up |
| Reveal on scroll: fade + 8px, 420ms | Autoplay carousels |
| Hover and focus transitions on controls, 120ms | Anything that moves without being scrolled to or clicked |
| Route and radius draws, once, on entry | Looping ambient motion |
| | Motion that carries information available nowhere else |

`prefers-reduced-motion` zeroes every duration through the design system's existing tokens. Under it: pins render in final state, the map shows static frames, the walkthrough becomes eight numbered steps. Nothing is lost, because no argument on this page lives only in movement.

---

# 6. What this layer changes in the spec

1. **Section 5's visual is an anchor address and a radius**, not a drawn area. The product does it that way.
2. **Section 7 gets built, not captured** — and stops being the page's biggest risk.
3. **The funnel moves onto the map** (M4) rather than sitting beside it as a chart.
4. **The capture list is four screens, not six.**
5. **Two retouches are blocking** and both are trivial: the *57 days late* badge and the cartoon client data.
6. **Open question for the client:** does the site say *territory* or *marketing visits*? The app says marketing visits, in its own navigation.
