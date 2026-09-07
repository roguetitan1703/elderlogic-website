# Build reference

One document the build follows. Tokens, component map, motion, accessibility, definition of done.

**The design system is a toolkit, not an authority.** It was authored from the same brand assets and two PDFs we have since gone far past — it has never seen the walkthrough transcripts, the client thread, or a single one of the decisions in `decisions.md`. Where it helps, we use it exactly. Where it disagrees with a decision made here, **the decision wins and the system gets revised.**

We keep its rules for one reason only: because they are right for this page. Not because they are written down.

Copy comes from `copy.md`. Reasoning lives in `site-spec.md`. Decisions in `decisions.md`.

---

# 1. The system, in short

Link `ElderLogic Design System/styles.css`. It imports everything below. **Never hard-code a value that has a token.**

## Colour

Two brand colours, both from the logo: **green `#00a676`** (`--green-500`) and **navy `#1c4073`** (`--navy-600`).

- Green is the accent — actions, rules, links, the active icon state. **Never a large field.**
- Navy is the ink and the one dark surface (`--navy-800`).
- One warm surface: `--paper-100` `#f5f1e9`.
- **Two background colours per page maximum**, plus one navy section. On this page: white, paper, and navy once.
- Feedback colours (`--feedback-error` brick, `--feedback-notice` ochre) are **form validation only** and never touch a home.

## Type — three families, three jobs

| Family | Token | Job |
|---|---|---|
| **Source Serif 4** | `--font-display` | Headlines, statistics, pull quotes. This is what makes the page read as considered rather than startup-bright. |
| **IBM Plex Sans** | `--font-sans` | Body at weight 450 (`--fw-text`), labels and eyebrows at 500/600. |
| **IBM Plex Mono** | `--font-mono` | **Published record values, provenance lines, phone numbers, email.** Mono is semantic here: it means *this is the record, not our words.* |
| Poppins | `--font-brand` | Wordmark fallback only. Prefer the SVG. |

Headlines: sentence case, weight 600, `--ls-display` −0.02em, line-height 1.06–1.18. Body 1.62. Eyebrows 12px/600 uppercase at `.11em` — **written sentence case in the markup, uppercased by CSS.** Nothing else is ever uppercased.

## Layout

`--container-max` 1160px · prose at `--measure-narrow` 46ch to `--measure` 64ch · `--section-y` clamps 56→112px · single column below 900px, two above, and **the mobile order is always content, then device shot.**

Header is the only fixed element: sticky, `rgba(255,255,255,.92)` plus `--blur-panel`, hairline bottom border, full-width sheet below 900px. **No sticky CTAs. No floating chat bubbles.**

## Surfaces

Border-first. Cards are 1px `--border-hairline` at `--radius-card` 10px with **no resting shadow**; `--shadow-2` on hover only if the card is genuinely a link. Controls 6px. The only coloured border in the system is the **3px green hanging rule** on `FeatureItem` and `PullQuote`.

Transparency is used **exactly once** — the sticky header. No glass panels anywhere else.

## States

Hover **darkens**, never lightens or lifts. Press nudges 1px down; nothing scales, nothing bounces. Focus is a 2px green outline at 2px offset. **44px minimum tap target** everywhere.

---

# 2. Component map — section by section

Everything on this page is built from existing components. Nothing new is authored.

| Section | Components |
|---|---|
| Header | `navigation/SiteHeader`, `brand/Logo`, `actions/Button` |
| 1 · Hero | `content/Eyebrow`, `SectionHeading`, `actions/Button`, `ArrowLink`, `product/DesktopShot` |
| Support strip | `content/FeatureItem` ×3 — this is what the 3px green hanging rule is for |
| 2 · Homes want the meeting | `content/SectionHeading`, `PullQuote` for the home's message |
| 3 · The territory | `SectionHeading`, `content/StatBlock` ×2, `product/DesktopShot`, `data/SourceNote` for the caption |
| 4 · Marketing visits | `SectionHeading`, `product/PhoneShot` |
| 5 · Walkthrough | `SectionHeading`, `product/PhoneShot` / `DesktopShot` per step, branded icons, funnel drawn inline |
| 6 · The record | `SectionHeading`, **`data/RecordList` + `data/SourceNote`** — built, not captured |
| 7 · Questions | `content/Card` or a plain definition list |
| 8 · Close | `SectionHeading`, `forms/Field` + `TextInput`, `actions/Button` |
| Footer | `navigation/SiteFooter` |

`RecordList` and `SourceNote` exist specifically because the no-rating rule needs a *positive* pattern, not only a prohibition. Section 6 is what they were built for.

---

# 3. Where our plan collides with the design system

Four real conflicts. Each resolved, with the reasoning, so nobody re-litigates them mid-build.

## 3.1 Icons — the system says there are none. There are.

> readme §5: *"There is no ElderLogic icon set… If a page needs more icons — FLAGGED SUBSTITUTION. Use Lucide."*

**That caveat is now void.** `Assets/Icons/SVGs/` holds nine branded icons — Assessment Form, Client, Power of Attorney, Placement Search, Facilities, Outreach Log, Pre-Tour, Family Tour, Move-In — in deep blue, vibrant green and white.

**Resolution:** use the branded nine. **Lucide is not used on this page.** The design system's caveat 2 should be struck when the system is next revised.

The three inline hairline glyphs stay as they are — check, chevron, menu — because they are UI furniture, not content.

## 3.2 Scroll animation — overruled

> readme §4: *"There is no scroll animation, no parallax, no counting-up numbers."* And: *"no scroll-jacking."*

**Overruled.** That rule was written for a page with nothing to walk through. It is a rule against decoration, and it is correct against decoration. The walkthrough is not decoration — it is the argument, and it is the one thing on this page that has to be felt rather than read.

**The walkthrough is scroll-linked and reader-operable, both.** The section pins for a bounded distance and the steps advance as you move through it; prev/next, a clickable icon spine and arrow keys drive it just as well. Neither path is the fallback for the other.

**The line I hold instead**, because it is the part of that rule that was actually right:

- Scroll **advances** the sequence. It never **hijacks** speed, never traps the reader, never disables normal scrolling.
- The pin has a bounded length and visible progress. You can always see how much is left, and you can always leave.
- Nothing else on the page moves on scroll. One section earns it. Everything else is a one-time reveal.
- No parallax and no counting-up numbers — those I keep, because they are tacky, not because the file says so.

Everything else in the system's motion guidance stands, and `--dur-reveal` 420ms is exactly the right one-time reveal.

## 3.3 CTA verb

The system's examples say *"Request a walkthrough"* and *"See pricing"*. We decided **Book a demo**, and pricing is off the page entirely.

**Resolution:** ours wins — `decisions.md` C13, and pricing was ruled off by the client. The system's rule that matters is the structural one, and we honour it: **verb-first, specific, repeated verbatim, one primary button per view.**

## 3.4 The 150 / 87 statistics

The system says only publish figures ElderLogic can count. 150 and 87 are industry outcome statistics with no source anywhere in our material.

**Kept — on our own reasoning, not the system's.** An unsourced number on a page going to executives is a liability whoever wrote the rule. They stay per `decisions.md` A2, and they get a named source and a date in a `SourceNote`, or section 3 keeps its argument and drops the numbers. **Build proceeds either way. This is a go-live blocker.**

**The no-rating rule is the one thing here that is genuinely non-negotiable** — and not because the system says so. It is the client's own posture, in her own words: *"I didn't say they're nice or not nice. The state is saying what they are."* No stars, grades, scores, rankings or status pills on a home, in copy or in UI, ever.

## 3.5 Also worth noting

The system states the count as **2,621**, from her deck. We chose **~2,600, August 2026** (`decisions.md` A1). Whichever survives the fact-check is applied in both places.

---

# 4. Motion — final spec

| What | Duration | Easing | Where |
|---|---|---|---|
| Hover, focus, press | `--dur-fast` 120ms | `--ease-standard` | All controls |
| Arrow slide | `--dur-base` 180ms | `--ease-standard` | `ArrowLink` |
| Mobile sheet | `--dur-slow` 280ms | `--ease-standard` | `SiteHeader` |
| Section reveal, once | `--dur-reveal` 420ms | `--ease-out` | Fade + 8px rise, on entry |
| Walkthrough step change | 280ms | `--ease-standard` | Scroll-linked and reader-driven |
| Route draw | 600ms | `--ease-out` | Once, on the step becoming active |
| Radius open | 420ms | `--ease-out` | Section 4, once |
| Funnel narrowing | staged, 200ms per stage | `--ease-standard` | Step 5, once, reader-driven |

**Allowed:** the four map states (metro → radius → route → one record), the icon spine's three states, one-time reveals, control transitions.

**Allowed, deliberately, against the system's written rule:** the walkthrough advances on scroll inside a bounded pin. One section only.

**Not allowed:** parallax, counting-up numbers, autoplay, looping ambient motion, hijacked scroll speed, an unbounded or inescapable pin, anything else on the page that moves on scroll, any information that exists only in movement.

`prefers-reduced-motion` zeroes `--dur-fast`, `--dur-base`, `--dur-slow` and `--dur-reveal` in the system already. Under it: pins render final, the map shows static frames, the walkthrough is eight numbered steps. **Nothing is lost, because no argument on this page lives only in motion.**

---

# 5. Accessibility floor

- **Mobile is the primary composition, not a breakpoint.** A forwarded link opens on a phone. Compose at 390px first.
- AA contrast on all text, including over the map. Text never sits directly on pin clusters.
- 16px minimum body. 44px minimum tap target.
- The walkthrough is fully keyboard-operable: tab to the spine, arrows between steps, visible focus, `aria-current` on the active step. Step content is announced, not just shown.
- Placeholder image blocks carry **real alt text** describing the screen that will replace them, not "placeholder".
- The funnel's numbers are readable as text, not only as a graphic.
- No information carried by colour alone — the icon spine's three states differ in opacity and label, not only hue.
- `prefers-reduced-motion` honoured through the tokens, not bespoke media queries.

---

# 6. Section rhythm

Two backgrounds plus one navy, per the system's maximum.

| Section | Surface |
|---|---|
| Header | White, translucent |
| 1 · Hero | `--surface-page` white |
| Strip | White |
| 2 · Homes want the meeting | `--surface-paper` |
| 3 · The territory | White — the map needs a neutral ground |
| 4 · Marketing visits | `--surface-paper` |
| 5 · Walkthrough | White |
| 6 · The record | **`--surface-dark` navy — the one dark section** |
| 7 · Questions | White |
| 8 · Close | `--surface-paper` |
| Footer | Navy |

The record earns the dark section: it is the credibility beat, mono type reads well on navy, and it gives the page one moment of weight before the questions.

---

# 7. Build

**Next.js**, custom, no CMS this phase — copy lives in the codebase. Vercel preview for her review. Wix comes down at go-live.

```
app/                    page, layout, metadata
components/             thin wrappers over the DS components
content/                copy.ts — every string, one file, so it is editable in one place
public/
  ds/                   styles.css + tokens, copied from the design system
  icons/                the nine branded SVGs, three colourways
  product/              desk-map, phone-assessment, phone-route, phone-visit-form
  placeholders/         four grey blocks at final dimensions
```

Copy in one `content/copy.ts` matters: when the admin panel arrives in a later phase, that file is what it edits. Nothing is scattered through JSX.

**Retouches before first build:** strip the *"57 d 3 h 43 min late"* badge and the dog avatar from `phone-route.png`; reseed `desk-clients.png` off *Buggs Bunny / Daffy Duck*.

---

# 8. Definition of done

- [ ] Every value comes from a token. No hard-coded hex, spacing or duration.
- [ ] No component authored that the design system already provides.
- [ ] The nine branded icons used; **no Lucide, no generic icon PNGs, no emoji**.
- [ ] Two background colours plus one navy section. No third.
- [ ] Published values in `--font-mono` with a `SourceNote`. No stars, grades, scores, rankings or status pills on a home, anywhere.
- [ ] Walkthrough works three ways — scroll, click, keyboard — and none is the fallback.
- [ ] The pin is bounded, progress is visible, scroll speed is never hijacked.
- [ ] Composed at 390px first, verified at 1160px.
- [ ] `prefers-reduced-motion` verified — the page loses no argument.
- [ ] Four placeholder blocks at final dimensions with real alt text.
- [ ] Copy matches `copy.md` exactly, and lives in one file.
- [ ] Banned vocabulary grep returns nothing.

**Go-live blockers, separate from build:** the fact-check pass on the home count, 150 / 87, and the funnel's provenance; FAQ sign-off at the presentation; the street address.

---

# 9. The design direction — the record grammar

Added after the first build read as plain: every section was the same shape, and
nothing on the page encoded what ElderLogic actually is.

**The signature.** ElderLogic's native artifact is a record row — a label, a
value, a source and a date, under a hairline. So that is the page's grammar.
Sections open as file dividers (`RuleHead`): a hairline with a mono tab on the
left and, where the section makes a claim, its provenance on the right. Figures
are `.record-stat` rows with their source attached, not floating big numbers.
The page reads as evidence, which is the same promise the product makes about
every home it shows.

**Deliberately not done:** numbered section eyebrows. The sections are not a
sequence — the walkthrough is, and it already carries numbers. Numbering
everything would be decoration pretending to be structure.

**Rhythm.** The fix for same-shape sections is a varied cadence, one per beat:

| Section | Shape |
|---|---|
| Hero | Full-bleed, atmospheric — map as ground |
| Strip | Dense three-column band, branded icons |
| Why a home takes the meeting | Centred, narrow — the one intimate moment |
| Coverage | Full-bleed map, then figures as record rows |
| Marketing visits | Mirrored — media leads, copy answers |
| Walkthrough | Interactive |
| The record | Dark, two-column, data-dominant |
| Close | Centred, echoing the earlier centred beat |

**Two bugs this pass fixed, worth remembering:**

1. `.reveal` started at `opacity: 0` and depended on JavaScript to become
   visible — so without script the page was headings above nothing. Reveals are
   now progressive enhancement, gated on a `.js` class set in `<head>`.
2. `.bleed` used `transform: translateX(-50%)` while `.reveal.is-in` sets
   `transform: none`, so the full-bleed map was shunted half a viewport right
   and vanished behind `overflow-x: hidden`. Bleed is margin-based now.
