# Site spec — the decided page

Route 2's opening, Route 3's middle, best parts throughout. Built to work on a **cold send** — a stranger with no introduction has to understand what this is by section 2 and still be reading at section 6.

Nine sections, header and footer. One narrative animation. One CTA verb.

`SRC` tags say where a line came from. **NEW** means written for this page. Anything marked **OPEN** needs the client before it ships.

---

## Header

Logo left. Nav: How it works · Territory · The record · Questions. One button: **Book a demo**.
Button stays reachable on mobile scroll. `SRC` C1 — the only CTA a cold reader reads without thinking about it.

---

## 1. Hero

> # Arizona has 2,600 licensed homes. Your team can name twelve.
>
> ElderLogic is placement and territory software for hospice teams in Arizona. Every licensed home in the state, and a shortlist that arrives with a room and a price on it.
>
> **Book a demo** · *See how it works*

`SRC` H1, clause order reversed. The reversal is the whole fix: H1 as written led with their failure, this leads with the size of the market and lets the gap land second.

**Why this one and not H3.** A cold send is judged at the hero and nowhere else. Concreteness is what survives a stranger's first three seconds — *licensed homes, Arizona, your team, twelve* names the industry, the geography and the problem before the reader decides whether to keep going. H3's *"every home is choosing a hospice"* is the better stance but a vaguer object, and it left the sub-line doing two jobs at once.

Sub-line is **NEW** and does one job: what it is, who for, where, what arrives.

**Visual:** the Arizona map, held back — enough to read as a map, not enough to explain itself yet.
**Words:** 9 + 30. The two-clause shape is deliberate here and does not count against the section-heading cap.

**Number:** 2,600, as of August 2026 `decisions.md A1`. Provisional — verified in the fact-check pass before go-live.

---

## 2. What this is — *support strip, not a section*

The hero now orients on its own, so this stops being load-bearing and shrinks to a strip directly beneath it. Three short columns, sixty words, no heading of its own.

> **The map** — Every licensed senior living home in Arizona, each carrying its state record.
>
> **The shortlist** — A search covers every home in range. What reaches your team is the handful with a room and an agreed price.
>
> **The field** — Shortlists and territory areas become routed days on a phone. The same route can go to the family.

Closing line: *It does not replace an EMR or a CRM.*

`SRC` DS Website C, S2 — rewritten to remove the labour verbs.
**Visual:** none. Type only.

---

## 3. Why the homes want the meeting

> ## You are the only visitor that day who is not charging them.
>
> Homes pay placement agents to fill rooms. A hospice that brings its own residents costs them nothing. That is why the meeting is easy to get, and why it is still worth something six months later.

`SRC` A1 headline · body **NEW**, from the placement-agent-fee argument that has sat in a subordinate clause in all nine decks.

**Proof, placed here rather than near the close** — a message from a home, as received:

> "We do our own placements, saving you from paying any placement agent fees. Can't wait to meet!"

`SRC` her sales deck, slide 6. This is evidence at the moment the claim is made, not a testimonial block at the bottom. It also fills the RESERVED — CUSTOMER slot three decks have been holding empty.

**Visual:** the message, styled as what it is.

---

## 4. The territory

> ## Your liaisons can name twelve of these.
>
> Homes decide which hospice gets called when a resident starts declining, and a liaison can only build that with homes they know exist. The rest of the territory has open rooms, homes that would refer, and homes nobody has walked into.
>
> **150** average lifetime days on service, referred from assisted living
> **87** average lifetime days on service, referred from home
>
> Coverage is the input to census, and census is what an owner is measured on.

`SRC` heading **NEW** (H1's argument, made to point at the map instead of at the liaison) · body from DS A/comparison C · stats from comparison B/Extended.

**Visual:** the full metro map, every licensed home. This is the image the page is built around.
**Caption:** Licensed homes, Phoenix metro. Around 2,600 statewide, August 2026.

---

## 5. A day in the territory

> ## Ninety homes in a morning, and every one of them expecting you.
>
> A rep picks the date and the area. The homes inside it come back with contact details and their record, in an order they can drive — and they are warm before anyone arrives.

`SRC` heading **NEW**, the ninety from recording 16 (*"I mean, that's like ninety homes"*) · body from T1/T4, with the labour removed.

**Naming** `decisions.md C10`: the product noun is **marketing visits** — it is what the app's own navigation calls it. *Territory* stays as ordinary prose. Section title in the nav: **Marketing visits**.

**Visual:** the Marketing Visits Form — date, time, anchor address — and a one-mile radius opening from the dropped pin, homes inside it lighting up. `phone-visit-form.png` **(have)** + `desk-map.png` **(have)**. No route here; the walkthrough owns routes.

**Correction from the assets layer:** the product takes an *anchor address plus a radius*, not a drawn area. The lasso is the Mapsly path. Copy stands; the visual changes.

---

## 6. One placement, start to finish — **the walkthrough**

The centre of the page and the only animation on it. Eight steps on the nine branded icons from `Assets/Icons/SVGs/` — active in vibrant green, done in deep blue, pending in deep blue at low opacity.

| Step | Icon | Line | Screen |
|---|---|---|---|
| 1 | Assessment Form | One form. The search is out the same day. | `SLOT-01` |
| 2 | Client + Power of Attorney | It writes the client record and the POA record at the same time. | `SLOT-02` |
| 3 | Placement Search | Every licensed home in range, against what this patient needs. | `SLOT-03` |
| 4 | Facilities | Homes your team has already ruled out never enter the list. | `SLOT-04` |
| 5 | Outreach Log | Who had a room, who did not, and at what price — on the record. | `SLOT-05` |
| 6 | Pre-Tour | The shortlist becomes stops in driving order. It re-optimises if the day changes. | `SLOT-06` |
| 7 | Family Tour | The same route goes to the family and opens in Google Maps. | `SLOT-07` |
| 8 | Move-In | Which client, which home, what price, what date. | `SLOT-08` |

**The funnel sits inside step 5**, as a graphic, not a sentence:

> 200 in the radius → **40 already ruled out by your team** → 60 contacted → 20 replied → 5 with a room and a price → 2 the family tours
>
> *Five homes that said yes. Not two hundred that might.*

**On the map, not beside it** `M4`. The funnel is pins going out, not a bar chart: 200 lit, 40 going grey as the customer's own ruled-out homes, then 60, 20, 5 holding, 2 pulsing. Spatial rather than statistical, built from `desk-map.png`, and it turns their blacklist from a bullet into something you watch happen.

`SRC` funnel from recording 15 · caption K2. **Six rows, decided** `decisions.md A3`. The 40-row is her first telling and the one row a competitor cannot copy — the customer's own accumulated knowledge doing work. Provenance line pending the fact-check pass.

**Behaviour:** scroll advances the step; the icon spine is clickable and keyboard-operable. Between steps 6 and 7 the map draws the route between stops — the only decorative motion on the page, and it is carrying information. Under `prefers-reduced-motion` it becomes eight static numbered frames and loses nothing.

**Blacklist line, at step 4**, standing in for the story we are not telling:

> A rep rules a home out once. It stays out of every future search, for everyone.

`SRC` all decks, tightened. The anecdote behind it stays in `extract/10-client-walkthroughs.md`.

---

## 7. The record

> ## The record is the state's. We keep it current.
>
> Every home carries its full AZDHS history, not only what is true today. One click opens the official state file from anywhere in the workflow. Placing a patient into a home with open enforcement is real exposure, and this is where a team sees it.
>
> | Licensing | Full history |
> | Inspections | Full history |
> | Violations | Full history |
> | Enforcement | Full history |
> | Source document | One click to AZDHS |
>
> No scores, no ratings, no rankings. Your team reads it and decides.

`SRC` R1 heading (comparison Extended — the client's own preferred phrasing) · the exposure line from comparison Extended, the only place any deck says *why* the record matters · rule line from DS B, and it matches the design system's `no-rating-rule`.

**Never on this page:** how the file is assembled, refreshed, deduplicated or validated. That is the recipe, and the client raised the rule before we did.

**Visual: built, not captured.** The design system already has `components/data/RecordList` and `SourceNote`, and `guidelines/no-rating-rule.html` shows the compliant layout. Rendering the record natively is on-brand, sharp at any size, never goes stale — and it removes the largest asset dependency on the page. Rows arrive in date order as the card settles `M7`.

---

## 8. Questions

Six. Cold readers ask these in this order.

1. **Which states do you cover?** — Arizona. Every licensed senior living home in the state.
2. **Do we have to contact the homes ourselves?** — No. Your team receives homes that have already confirmed a room and a price, and can contact any home directly at any point.
3. **Do you rate the homes?** — No. The state publishes a record; we show it to you and your team decides.
4. **Does it replace our EMR or CRM?** — No. It handles placement and territory work and sits alongside what you already run.
5. **Does it work on a phone?** — Yes. Assessments, routes, home records and post-visit forms. That is where the work happens.
6. **How is client health information handled?** — The assessment carries patient information, so it is held under the same controls as the client record and visible only to your organisation's users. *Draft — she confirms or corrects this at the presentation, including whether a BAA is offered.*

`SRC` comparison Extended's 14 and DS Extended's 6, cut to the six a stranger actually asks. Setup time, contract length and pricing are deliberately not here — they belong on the call.

**All six answers are drafted by us and taken to her at the presentation** `decisions.md`. That session is the content and PR review, so the FAQ ships complete rather than with gaps in it.

---

## 9. Close

> ## Bring an address you work.
>
> We open the map on the area your liaisons cover, and you see what is in it — how many licensed homes, what the state has published about them, and which ones nobody has contacted.
>
> **Book a demo**

`SRC` comparison C heading — the most concrete of the five · body from comparison Extended. **No duration stated** `decisions.md C12`: an unspecified call length reads as more confident than a stated one.

Secondary path: short contact form — name, organisation, email, message.
**Visual:** scheduling embed. **No video, and no slot held for one.**

---

## Footer

Tagline: *Placement and territory work for hospice teams in Arizona.*
Columns: How it works · Territory · The record · Questions | About · Privacy · Book a demo
Contact: `hello@elderlogic.app` · (480) 685-5657 · **Arizona** — a street address goes in later, when we have one.
Source line: Licensing and inspection records belong to the State of Arizona. ElderLogic keeps them current.
**Corrected.** The previous line said records were "published by the Arizona Department of Health Services", which is the exact source description the client banned. It shipped to the footer from here.
© 2026 ElderLogic · Phoenix, Arizona

---

# What was cut, and why

| Cut | Reason |
|---|---|
| Reserved video slot | She does not want a video carrying the page. It goes on the close if it arrives. |
| "Who does the work" attribution grid | An internal accounting exercise shown to a customer. |
| Reporting and oversight | Two paid add-ons. Not a homepage argument; belongs on the call. |
| "What it costs to start" | Nobody can answer it yet. |
| The family route as its own section | It is step 7. |
| The discharge clock | Speaks to the coordinator; the owner signs. Hold for a second page. |
| The German shepherd story | Right call. Reads as mocking a home, on a page going to executives. |
| Every recipe sentence | Client's own rule, broken by all nine decks. |
| Every line narrating our labour | The call-centre read. Nine of nine decks. |

---

# Budget check

| | Limit | This page |
|---|---|---|
| Sections | 10 | 8, plus the hero support strip |
| Body copy | 700 words | ~430 |
| Narrative animations | 1 | 1 |
| Stats visible at once | 3 | 2 |
| FAQ | 6 | 6 |
| CTA verbs | 1 | 1 |
| "Two clauses, one full stop" headings | 2 | 1 |

---

# Open before build

All decided — see `decisions.md`. What remains:

1. **Fact-check pass**, before go-live: the home count and its date, 150 / 87, and the funnel's provenance.
2. **FAQ sign-off** at the presentation, which doubles as the content and PR review.
3. **Street address** — later. Footer reads *Arizona* until then.

# Build

Next.js, custom. **No CMS this phase** — purely a website, copy in the codebase. Vercel preview for her review; live only after copy review and sign-off. Wix comes down at go-live.

**Missing screens ship as grey placeholder blocks** at final dimensions with real alt text, so the page reviews as complete while she captures them.

# Assets to produce

Full detail in `assets-and-motion.md`. Summary:

**Have:** `desk-map.png` (hero, section 4, the funnel, the zoom spine), `phone-assessment.png` (step 1), `phone-route.png` (step 6), `phone-visit-form.png` (section 5). Nine branded icons, three colourways — the walkthrough spine costs nothing.

**Blocking retouches, both trivial:** remove the *"57 d 3 h 43 min late"* badge and the dog avatar from `phone-route.png`; reseed `desk-clients.png`, which currently reads *Buggs Bunny / Daffy Duck*.

**Four captures needed,** ranked: outreach log (step 5 — without it the funnel is a claim), placement search results (steps 3 and 4 can share one), move-in record (step 8), family route as the family receives it (step 7).

**Not needed:** a facility-detail capture — section 7 is built. Photography — the page barely spends the 18 iStock credits. A video — she does not want one carrying the page.
