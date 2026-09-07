# ElderLogic Design System

**Marketing website only.** The ElderLogic product is built separately and is not changing; this
system exists so that marketing pages, decks and one-off assets look like they came from the same
company as the software.

---

## 1. The company

ElderLogic is a **senior living placement and outreach platform for hospice teams in Arizona**.

- It runs on a **monthly-refreshed database of every licensed senior living home in the state** —
  2,621 facilities at the time of writing — carrying each home's licensing, inspection, violation and
  enforcement history as published by the Arizona Department of Health Services (AZDHS).
- A **concierge team does the calling and negotiating**, so a hospice receives a shortlist of homes
  that will actually take their patient.
- The same map lets **community liaisons work a territory** instead of a contact list: a rep picks a
  date, time and anchor address; ElderLogic calls the homes within a mile and builds the route around
  the ones that want the meeting.
- Commercials (published): **$2,000 / month platform + $100 / user / month**, with two optional
  add-ons — visit verification **$500 / month** and placement outreach reporting **$250 / month**.
- Contact: elderlogic.app · hello@elderlogic.app · (480) 685-5657

### Audience

| Who | What they need from the page |
| --- | --- |
| Hospice owners / executive directors | Proof this is real software from people who know the industry, and a price. |
| Business development managers | Territory coverage, outreach volume, reporting. |
| Community liaisons | That it works on a phone, in the field, between visits. |
| **The forwarded-link executive** | Has never met the founder, had no demo. Decides in 40 seconds whether this looks real. **Design for this person first.** |

Liaisons live in the field, so **a forwarded link opens on a phone**. Mobile is the primary
composition, not a breakpoint.

### The no-rating rule

**ElderLogic never rates, scores or ranks a home.** It shows what the state has published.
Therefore this system contains — and must never gain — star ratings, score badges, letter grades,
"top 10" rankings, or red/amber/green status treatments applied to homes. Published figures are set
in mono, verbatim, with a `SourceNote` naming the file and the refresh date. See
`guidelines/no-rating-rule.html`.

---

## 2. Sources this system was built from

Everything here was derived from material supplied by the client. There was **no codebase and no
Figma file**, so component structure was authored from the brand assets, the two sales PDFs and the
five product screenshots. Values were taken from the assets, not from a framework default.

| Source | Used for |
| --- | --- |
| `uploads/Full logo.svg`, `Full logo Black.svg`, `Full Logo white .svg` | Logo lockups; brand colours #00a676 and #1c4073 |
| `uploads/Favicon 16px.svg`, `Favicon 512px.svg` | Shield mark / favicon |
| `uploads/Hospice Concierge Platform.pdf` (6 pp, Canva) | Product narrative, section structure, all capability copy, the "2,621" figure |
| `uploads/Concierge Pricing.pdf` (1 p, Canva) | Pricing model, plan and add-on inclusions |
| `uploads/HPC Desk 1.png`, `HCP Desk 2.png` | Desktop product screenshots (map, clients) |
| `uploads/HPC Phone 1/2/3.png` | Phone product screenshots (assessment, visit form, route) |

Screenshots were **alpha-cut** (white background flood-removed) so they can sit on any surface;
the originals remain in `uploads/`.

**Not available, and therefore not attempted:** the product's own component code, its design tokens,
any photography, any icon set, any font binaries. See CAVEATS at the end.

---

## 3. Content fundamentals

**Voice.** Serious, quiet, dignified, competent. The reader is a professional under time pressure who
has been sold to badly before. Write the way a good operations person talks: state the fact, then stop.

**Person.** "We" for ElderLogic, "your team" / "your reps" for the customer. Never "our clients".
Never first-person singular — the founder is not the brand.

**Sentences.** Short declaratives. One idea each. A two-sentence paragraph is a normal paragraph.
Cut adverbs before you cut nouns.

**Headlines.** Sentence case with a full stop. They make a claim the page then substantiates:

- "A shortlist of homes that will actually take your patient."
- "We don't rate homes. We show the record."
- "Your liaisons work from a phone. So does ElderLogic."
- "Plan the day. Work the territory. Build the relationships."
- "Every client. One place."

**Eyebrows.** Two to four words, uppercased by CSS (write them in sentence case in the markup):
`Updated monthly`, `Historical AZDHS data`, `Interactive mapping`, `Built for the field`.

**Capability labels.** The deck's own convention, kept: an uppercase label plus one sentence.
`BUILT-IN VALIDATION` — "Helps reduce errors and ensures speed with data consistency."

**Numbers.** Only figures ElderLogic can actually count: facilities in the database, the refresh
cadence, the search radius, the price. Never an outcome percentage, never a testimonial statistic,
never "up to". Prices carry the dollar sign and a thousands separator: `$2,000`. Dates in running
copy read `1 Aug 2026`; dates inside a record read `2026-06-18`.

**Provenance.** Any published figure carries a `SourceNote`: source · what happened · date, lower
case except acronyms — "AZDHS licensing & enforcement file · refreshed 1 Aug 2026".

**Words we use:** home, community, licensed, published, record, inspection, enforcement, placement,
liaison, territory, route, pre-tour, concierge, shortlist.
**Words we don't:** best, top-rated, trusted, seamless, revolutionary, AI-powered, effortless,
loved-one, journey, peace of mind, unlock, supercharge, "smart" as an adjective for ourselves.

**Never:** emoji, exclamation marks, ALL-CAPS sentences, rhetorical questions as headlines,
sentimental eldercare language, or anything that implies ElderLogic judges a home's quality.

**CTAs.** Verb-first, specific, repeated verbatim across the site: "Request a walkthrough",
"See pricing", "Full pricing". One primary button per view.

---

## 4. Visual foundations

**Colour.** Two brand colours, both taken from the logo: **green `#00a676`** (`--green-500`) and
**navy `#1c4073`** (`--navy-600`). Green is the accent — actions, rules, links, ticks — never a large
field except in the logo tile. Navy is the ink and the one dark surface (`--navy-800` sections). A
cool, faintly navy-tinted neutral ramp does everything else. One warm surface exists, `--paper-100`
`#f5f1e9`, used as an alternate section background; **two background colours per page maximum**
(white or paper, plus one navy section). Feedback colours (brick `#a8331f`, ochre `#8a6d1f`) are for
**form validation only** and never touch a home.

**Type.** Three families, each with a job:
- **Source Serif 4** (`--font-display`) — headlines, statistics, pull quotes. Sturdy and
  institutional rather than literary; it is what makes the page read as considered rather than
  startup-bright.
- **IBM Plex Sans** (`--font-sans`) — body, UI, labels, eyebrows. Weight 450 for body (the
  `--fw-text` token), 500/600 for labels. Excellent at 15–16px on a phone.
- **IBM Plex Mono** (`--font-mono`) — published record values, provenance lines, phone numbers and
  email addresses. Mono is a semantic choice: it means *this is the record, not our words.*
- **Poppins** (`--font-brand`) is loaded at 500 only, as the nearest match to the logo's geometric
  lettering, for the rare case a wordmark must be set in live text. Prefer the SVG.

Headlines are sentence case, weight 600, `-0.02em` tracking, `1.06–1.18` line height. Body is
`1.62`. Eyebrows are 12px/600 uppercase at `.11em`. Nothing else is ever uppercased.

**Layout.** Content maxes at 1160px (`--container-max`), prose at 46–64ch. Vertical rhythm is
`--section-y` (clamps 56→112px). The page is a single column below 900px and two columns above; the
mobile column order is always content, then device shot. The header is the only fixed element:
sticky, translucent white (`rgba(255,255,255,.92)` + `--blur-panel`), hairline bottom border,
collapsing to a full-width sheet below 900px. No sticky CTAs, no floating chat bubbles, no
scroll-jacking.

**Backgrounds.** Flat colour. No photography (deliberately — sentimental eldercare stock is off-brand
and none was supplied), no gradients, no patterns, no textures, no illustration. Interest comes from
the product screenshots and from the rhythm of white → paper → navy sections.

**Product imagery.** The screenshots are the only imagery, and they are the hero.
**Phone screens are presented at full weight** (`PhoneShot`, `PhoneRow`) — 280–340px wide, three
across, never as a small inset beside a big desktop shot. Device shots carry a
`drop-shadow(0 24px 48px rgba(11,26,48,.22))` and sit on white, paper or navy (they are alpha-cut).
Never crop a bezel, never tilt or perspective a device, never scale a phone below 260px.
Colour vibe: cool, neutral, unfiltered — the product's own greens and blues, no grain, no duotone,
no colour wash.

**Borders, radii, shadows.** Border-first system. Cards are a 1px `--border-hairline` with a **10px**
radius and **no resting shadow**; `--shadow-2` appears on hover only when the card is genuinely a
link. Controls are **6px**. On navy, borders are `rgba(255,255,255,.14)`. The only coloured border in
the system is the **3px green hanging rule** on `FeatureItem` and `PullQuote` — a rounded card with a
coloured left border is not a pattern here.

**Transparency & blur.** Exactly one use: the sticky header. Nothing else is translucent, and there
are no glass panels or scrim overlays outside a modal.

**States.** Hover **darkens** (green-600 → green-700; white → n-50) and never lightens or lifts.
Press nudges 1px down — nothing scales, nothing bounces. Focus is a 2px green outline at 2px offset,
plus a `--shadow-focus` ring on inputs. Disabled is 45% opacity, no colour change. Links are
green-700 with a green-200 underline that goes green-500 on hover.

**Motion.** 120ms for hover/focus/press, 180ms for the arrow slide, 280ms for the mobile sheet,
420ms for a one-time section reveal, all on `cubic-bezier(.2,0,.2,1)`. There is no scroll animation,
no parallax, no counting-up numbers. All of it collapses under `prefers-reduced-motion`.

**Tap targets.** 44px minimum everywhere a rep might touch it; the `sm` button (36px) is
desktop-only chrome.

---

## 5. Iconography

**There is no ElderLogic icon set.** The supplied assets contain the logo and favicon only; the
product screenshots show a handful of glyphs but no extractable sprite, font or SVG source.

The system therefore **uses almost no icons**, which suits the tone. Three functional glyphs are
drawn inline as hairline SVG paths inside the components that need them, and nothing else:

| Glyph | Where | Spec |
| --- | --- | --- |
| Check | `CheckList` | 16×16, 1.75px stroke, `--green-600`, round caps, no circle behind it |
| Chevron | `SelectInput` | 14×14, 1.5px stroke, `--n-500` |
| Menu / close | `SiteHeader` | 18×14, 1.75px stroke, `--navy-700` |

**If a page needs more icons — FLAGGED SUBSTITUTION.** Use **Lucide** (`https://unpkg.com/lucide-static`)
at **1.75px stroke, 20 or 24px, `--navy-700` or `--n-500`, no fill**, which matches the three glyphs
above. This is a substitution, not a brand asset: if ElderLogic has an icon set, send it and this
section should be rewritten.

**Emoji are never used.** Unicode is used as an icon in exactly one place: the `&#8594;` arrow in
`ArrowLink`. No decorative dingbats, no check-mark emoji in lists.

---

## 6. What is in this project

| Path | What it is |
| --- | --- |
| `styles.css` | The one file consumers link. `@import` list only. |
| `tokens/` | `fonts`, `colors`, `typography`, `spacing`, `radius`, `elevation`, `motion`, `layout`, `base` |
| `assets/` | `logo.svg`, `logo-white.svg`, `logo-black.svg`, `favicon-16.svg`, `favicon-512.svg`, `product/*.png` |
| `components/` | React primitives, grouped by concern (below) |
| `ui_kits/marketing-site/` | The full click-through marketing site |
| `guidelines/` | 19 foundation specimen cards (colour, type, spacing, brand) |
| `thumbnail.html` | Project tile |
| `SKILL.md` | Agent-skill entry point |

### Components

**brand/** — `Logo`
**actions/** — `Button`, `ArrowLink`
**content/** — `Eyebrow`, `SectionHeading`, `FeatureItem`, `StatBlock`, `Card`, `PullQuote`
**product/** — `PhoneShot`, `PhoneRow`, `DesktopShot`, `PhoneFrame`
**commerce/** — `PriceCard`, `CheckList`
**forms/** — `Field`, `TextInput`, `SelectInput`
**data/** — `RecordList`, `SourceNote`
**navigation/** — `SiteHeader`, `SiteFooter`

Each directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one `@dsCard` HTML.

**Intentional additions.** No source defined a component inventory, so this set was authored from the
brand material. Three entries deserve a note:
- `PhoneShot` / `PhoneRow` / `PhoneFrame` — a mobile-first system needs a way to present phone UI at
  full weight; this is the brief's explicit requirement, expressed as components.
- `RecordList` / `SourceNote` — the no-rating rule needs a *positive* pattern, not just a
  prohibition. These are the sanctioned way to show state data.
- `SiteHeader` / `SiteFooter` — a marketing site has exactly one of each; keeping them as components
  stops every page reinventing the nav.

### UI kit

`ui_kits/marketing-site/` — home, platform, concierge, pricing and contact, click-through, composed
entirely from the components above. `index.html` is the desktop view; `mobile.html` frames the same
site at 390px because that is how a forwarded link arrives.

---

## CAVEATS — please read

1. **Fonts are substitutions.** No font binaries were supplied. The logo's lettering was matched by
   eye to a geometric sans (Poppins is the closest Google Font); Source Serif 4, IBM Plex Sans and
   IBM Plex Mono were chosen for the tone, not inherited from an existing ElderLogic spec.
   **If ElderLogic has real brand fonts, send them.**
2. **Icons are a documented substitution** (Lucide). No icon set was supplied.
3. **No photography.** None was supplied and none was generated. Sections that would carry imagery on
   many sites carry product screenshots or nothing.
4. **Product screenshots are the only product truth.** With no access to the product's code, the UI
   kit reproduces the *marketing* surface only; it does not attempt to recreate app screens.
5. **The "15 counties" style of claim was removed** wherever the source did not support it. Only
   figures traceable to the supplied PDFs appear on the pages.
