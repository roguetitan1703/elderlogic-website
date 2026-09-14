# Shape brief: ElderLogic home page

Confirmed direction, not yet built. Seed `d5849aa4`, assigned card taken.
Scope is the home page only. No code was written to produce this.

---

## 1. Job and audience

A hospice executive or director of business development, usually after Terrah
has already spoken to them, opening a forwarded link on a phone. Mode is
Persuade. Success is one action: **Book a demo**.

The page must survive a cold reader who has met nobody, but it is written for
the warm one.

## 2. Outcome and proof

The reader must come away believing five things, in this order:

1. This is real software, not a deck.
2. It covers every licensed home in the state, not a list somebody built.
3. Somebody other than my staff makes the calls.
4. My reps' days come back planned.
5. It works in a car park.

Proof available: real product screens, which the client can capture on request.
No customers, no quotes, no benchmarks, no usage statistics. Terrah's own
background is usable only on an About page, and nothing on the home page may
depend on it.

## 3. Selected direction: The Chart

A placement genuinely produces a chart, and the reader reads charts all day, so
the grammar is native rather than borrowed. **The chart is a structural logic,
never a texture.** No ruled-line backgrounds, torn edges, carbon, grain, drop
shadows, or skeuomorphic clipboards.

The Run Manifest lives inside it as one page type, the flow sheet where the day
is a numbered run. It does not govern the whole page.

**A chart page is portrait, so the phone is this direction's native aspect and
the desktop is the adaptation.** Design at 380px first. On desktop the document
holds a reading measure rather than stretching, and the three full bleeds take
the full width. That contrast is where desktop gets its dynamic range.

**Dynamic range is the whole game.** Institutional is the trap, and one volume
from top to bottom is what failed before. Three moments break the chart grammar
completely and go full bleed. Everything else stays quiet so those land:

- the dense pin field, with no copy on it at all
- the routed day
- one phone screen at life size

**Mono is for record values only.** Licensing dates, violation counts, AZDHS
values, counts and figures. Never labels, never prose, never section headings.

**Navy and green stay.** The chart must not turn the page monochrome or beige.
Paper is an accent, not a section background.

## 4. Section plan

**The section list lives in `section-coverage.md` and that file is the single
authority.** It carries every topic the project holds, tagged to the section,
FAQ, About page, or to nothing at all. Do not add a section without adding its
topics there first.

Eleven sections. Three carry no copy, so the reading load is eight blocks
against the nine on the page the client rejected. Full bleeds fall at 3, 6 and
9, which gives the page a pulse instead of one volume top to bottom.

This replaced an earlier nine-section plan that was found, on reading the
sources rather than recalling them, to be an app tour that had lost the only
voiced proof the project owns, the reason homes agree to meet at all, the
blacklist, the funnel, and the site's actual job of being forwarded up a ladder.

Navigation is tab dividers and ruled structure. **No small-caps eyebrow above
any section.** Where a section needs identifying, the tab divider does it.

**No icon-and-caption grid anywhere**, including section 10.

## 5. States and ranges

- Section 2 must hold roughly 2,600 marks without becoming mush at 380px.
- Section 4 runs six to eight entries. It must read with two and with twelve.
- Section 6 must survive a home with a clean record and one with a long
  inspection history. **No score, grade, rank or status pill in either case.**
- Section 9 needs a pre-embed, loaded, and failed state for the scheduler, and
  the contact form still has no submission endpoint.

## 6. Screens to request from the client

The client can capture any screen, so these are specified by what they must
prove rather than chosen from what exists.

| Slot | Screen | Must show |
|---|---|---|
| A | Placement search results | Dense rows, real homes, licence status per row |
| B | Outreach log | Replies logged against one search, with times |
| C | Routed day map | The optimised route, numbered stops. **Recapture:** the current one shows "57 d 3 h 43 min late" test data and a personal avatar |
| D | Room details | Phone, for the life-size section |
| E | Assessment form | Have it: `Screen A form.png`, `HPC Phone 1.png` |
| F | AZDHS record view | Licence dates and inspection history for one home |

## 7. Constraints

Carried from PRODUCT.md and binding: no mechanism behind the record, no
ratings, no pricing, no invented facts, no em or en dashes, all strings in
`web/content/copy.ts`, Next.js with three dependencies.

**Radius language is permitted inside real screenshots** and still banned in
our own copy. Client decision: the ban is on our writing, the screens are truth.

Accessibility floor: AA contrast, 16px body minimum, 44px tap targets, visible
keyboard focus, `prefers-reduced-motion` honoured, and every state legible
without colour.

One CTA site-wide, worded identically: **Book a demo**. Contact sits under the
scheduling embed, never beside it.

## 8. Open decisions a builder must not invent

Kept current in `section-coverage.md`. Nothing on the list blocks the build.

1. **The home count.** 2,621 in the client's sales deck, ~2,700 in the
   positioning document, ~2,600 in the website decks. One number, with a date,
   before go live.
2. **The home's message.** Confirm it can be quoted publicly and whether it is
   anonymised. Build with it, cut it if the answer is no.
3. **Which scheduling tool** the embed in section 11 uses.
4. **Which screen goes life size** in section 6.
5. The contact form still has no submission endpoint.

Settled: coordinates for the licensed homes exist, so section 3 is real data.
Visit verification appears in section 10 as a capability, never with a price.
