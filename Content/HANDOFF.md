# Handoff

Written at the end of a long session. Read this before touching anything.

The point of this file is to pass on **what is true**, not what the previous
session came to believe. Where those differ, the facts win. Several ideas below
are marked as rejected: they were mine, the client did not like them, and they
should not be revived because they appear in old code.

---

## 1. What this is

A marketing site for **ElderLogic**: placement and marketing-visit software for
hospice teams in Arizona. Client is Terrah. Budget $2,000. Built by Delpat.

The product does two things:

1. **Placement.** A patient needs a bed. A search covers every licensed home
   that fits, ElderLogic staff ring those homes, and the hospice team gets back
   the ones with a room and an agreed price.
2. **Marketing visits.** A rep picks a morning and an area. ElderLogic contacts
   those homes first, and the day comes back routed with the homes expecting
   the visit.

The fee is justified by the calling. That is the differentiator.

## 2. Hard rules that do not change

- **Never publish the mechanism behind the record.** No scrape, sync, feed,
  dataset, "we compile", and never "published by AZDHS" as a source
  description. Say the record is the state's and that we keep it current.
  Delpat runs a monthly AZDHS scrape; this may never appear anywhere.
- **No scores, ratings, rankings or status pills on a home.** Ever, in copy or
  UI. From the client: *"I didn't say they're nice or not nice. The state is
  saying what they are."*
- **No radius parameters.** "Within a mile", "anchor address" and the screenshot
  line "Homes within 1 mile of this address will be included" are all off the
  site. It also understates the product.
- **Do not invent facts.** No fabricated statistics, no invented security or
  compliance claims, no made-up citations. Cut, or ask.
- **Every user-facing string lives in `web/content/copy.ts`.** Strings hardcoded
  in components have escaped review twice already.
- **No em dashes or en dashes anywhere.** Client asked explicitly. Currently
  zero across all pages, CSS and comments.
- **One CTA, worded identically: "Book a demo."** The contact form is a
  secondary option, not a second CTA.

## 3. Decisions already made

| | |
|---|---|
| Concierge voice | Say plainly that we make the calls. Active voice. This reversed an earlier "never narrate our own labour" rule. |
| About section | Not having one. |
| Pricing | Never on the site. |
| FAQ | Leave as-is. Not a priority before preview. |
| 150 / 87 day stats | **Cut.** Unsourceable, and 87 is within rounding of NHPCO's national average (89.6 days), so it looks like that number relabelled. Reasoning is a comment in `copy.ts`. Do not restore without a citation. |
| Deployment | Vercel, Delpat team, project `elderlogic-website`, root directory `web`. |

## 4. Where things are

```
web/                  Next.js 16 App Router, React 19, TS. Three deps.
  content/copy.ts     every string
  content/site.ts     origin + indexing resolution per deployment
  app/                page.tsx, faq, privacy, not-found, sitemap, robots
  components/         SiteHeader, SiteFooter, Route, Funnel, CoverageField,
                      HeroField, HomeCard, ContactForm, Shot, Reveal
Content/              research, extraction of the 8 decks, decisions, copy
Pdfs/, Website options/, ElderLogic Design System/   the reference material
push.sh               commits once, pushes to both remotes, no trailers
```

Two remotes: `delpat` (Delpat-Tech, the record) and `origin` (roguetitan1703,
what Vercel builds). **Client asked to stop pushing; work local for now.**
There are uncommitted changes in `page.tsx`, `sections.css`, `Route.tsx`,
`copy.ts`.

Deploy plumbing is done and verified: metadata, Open Graph, share card, sitemap,
robots, 404, favicons, manifest. Previews are `noindex` until
`NEXT_PUBLIC_SITE_URL` is set to a real domain.

## 5. The honest state of the work

The client's verdict on the current site: **the design does not appeal, and the
copy does not read calm.** Both are fair. Specifically:

**Design.** Every section is the same shape: serif heading top-left, sans
paragraph under it, media right, repeated eight times. Large dead gaps between
sections. `--paper-100` beige used as the background of four sections, so the
design system's one warm accent became the site's colour. The header, footer and
mobile menu are generic.

**Copy.** Every heading was written to land, so nothing lands. Sections stacked
heading, body, second body, aside, note and caption: "dialogues after dialogues."
The concierge section had ten text blocks. Being fixed at the end of this
session: headings became plain labels, one body per section.

## 6. Ideas the client rejected. Do not revive them.

- The drawn/vector map behind the hero. Called hacky. Either drop it or offer a
  version to choose from.
- `HomeCard` in the hero. "Pure imagination", because its values are invented.
- A full-width left-aligned nav bar. Out of proportion.
- The pinned scroll stepper, and the snapping carousel that replaced it. Nobody
  taps through six cards on a phone. It is now a plain list, which is right.
- Per-step "who does what" labels. The spec cut this as *"an internal accounting
  exercise shown to a customer"*, and writing it out proved the spec right:
  ElderLogic did 1 of 8 steps, which undersells the service.
- Section eyebrows. They restated the heading below them.

## 7. What the client actually wants next

> "the websites created by the design system as alternative options were okay"

The previous session studied the eight design-system website decks, extracted
their layout system, built against it, and then drifted into inventing its own
direction. That drift is the root cause of the design problem.

**So: rebuild the visual layer from the decks in `Website options/` and
`ElderLogic Design System/`, not from taste.** Ask which of the options is
closest before building; the client has seen all eight.

Screenshots to replace the placeholders are coming from the client by end of
day. They are explicitly *not* part of the criticism, so do not wait on them and
do not treat placeholder slots as the problem.

## 8. Tooling worth knowing

- `~/.claude/skills/web-copy/` audits rendered copy: AI patterns, banned
  vocabulary, rule-of-three, punctuation ties, unsourced numbers, CTA drift.
  Run `python ~/.claude/skills/web-copy/scripts/audit.py <url>`.
  **Caution:** it measures rule compliance, not whether copy is interesting.
  The site scored 0 blockers while being boring. Do not use it as the target.
- Playwright is installed in the session scratchpad for rendering and measuring.
- `Content/copy-as-rendered.txt` is the whole site's copy in reading order,
  regenerated from the running site.
