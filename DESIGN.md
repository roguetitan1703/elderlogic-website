---
name: ElderLogic
description: The chart. A placement produces a record, so the marketing site is built as one.
colors:
  ink: "#102544"
  ink-strong: "#0b1a30"
  body: "#35404e"
  muted: "#667283"
  green: "#00a676"
  green-ink: "#006b4c"
  paper: "#f5f1e9"
  page: "#ffffff"
  rule: "#d5dbe4"
  rule-hair: "#e8ecf2"
typography:
  display:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(1.75rem, 3.4vw, 2.5rem)"
    fontWeight: 400
    lineHeight: 1.18
    letterSpacing: "-0.02em"
  body:
    fontFamily: "IBM Plex Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 450
    lineHeight: 1.62
    letterSpacing: "0"
  record:
    fontFamily: "IBM Plex Mono, ui-monospace, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.01em"
rounded:
  none: "0"
  control: "4px"
spacing:
  hair: "4px"
  row: "12px"
  block: "32px"
  section: "72px"
components:
  button-primary:
    backgroundColor: "{colors.green-ink}"
    textColor: "{colors.page}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "48px"
  entry-row:
    backgroundColor: "{colors.page}"
    textColor: "{colors.body}"
    rounded: "{rounded.none}"
    padding: "12px 0"
---

## Overview

**The chart.** A placement genuinely produces a record: an assessment, dated
entries, outreach logged with times, a state file attached, a move-in noted.
The reader reads charts all day. So the page is a chart, and the grammar is
native rather than borrowed.

**The chart is a structural logic, never a texture.** No ruled-line
backgrounds, torn edges, carbon, paper grain, drop shadows, or skeuomorphic
clipboards. What makes it a chart is how information is organised: fixed-field
blocks, timed entries, attached exhibits, a signature block.

**A chart page is portrait**, so the phone is the native aspect and desktop is
the adaptation. Design at 380px first.

**The signature is the index.** If one thing is remembered, it is the tabs.
Everything else stays quiet so that it reads. Boldness is spent here and
nowhere else.

**Dynamic range is the point.** Institutional is the trap, and one volume from
top to bottom is what failed before. Three moments break the grammar completely
and go full bleed: the map field, one phone at life size, the routed day. They
fall at sections 3, 6 and 9. Everything else stays quiet so those land.

## Colors

Navy is ink, not a brand wash. Green is the annotation colour: a flag, a rule,
a signed initial, the primary action. It is never a section background and
never decorative.

Paper (`#f5f1e9`) is one accent surface, used at most twice on the page. It was
previously the background of four sections, which turned the design system's
single warm note into the site's colour. That is the failure to avoid.

White is the working ground. Full-bleed sections carry their own image or ink.

Every state must be legible without colour. Nothing on this site scores, rates,
ranks or grades a home, in copy or in UI.

## Typography

Three faces, three jobs, no overlap.

- **Source Serif 4** is the company speaking. Section headings only. A chart has
  no serif display, which is exactly why the serif reads as a voice over the
  record rather than as decoration.
- **IBM Plex Sans** is reading text. Body, labels, navigation, controls.
- **IBM Plex Mono is the record, and nothing else.** Licensing dates, violation
  counts, AZDHS values, counts, times, figures. Never labels, never prose,
  never section headings, never navigation. Mono as a costume for "technical"
  is the single easiest way to make this page look like a developer wrote it,
  and the reader is a hospice owner.

Body measure 65 to 75 characters. Headings balanced.

## Layout

Phone first at 380px, and the phone layout is the better of the two. Three of
the product screens are phone screens and a forwarded link opens on a phone.

On desktop the document holds a reading measure rather than stretching, and the
three full bleeds take the full viewport width. That contrast is where desktop
gets its dynamic range.

**Section shape is driven by the workflow the section describes.** No two
sections share a template. A repeated two-column heading-left media-right block
is what the client rejected, and reintroducing it anywhere reintroduces the
failure. The page's shapes are: header block, plain text, full bleed, fixed
field block, timed run sheet, full bleed, log with a funnel, quoted message,
full bleed, ruled index, signature block.

Navigation is the chart index and ruled structure.

## Elevation & Depth

**There is none.** Depth on this page is rules and space, not shadow. No cards,
no elevation, no soft rounded rectangles standing in for content. A hairline
rule and a change of measure separate things.

The only exception is the browser's own focus ring, themed green.

## Shapes

Square by default. Radius appears only on controls, at 4px, and on nothing
else. No pills, no rounded cards, no circles behind icons.

Rules come in two weights: a hairline for grouping inside a block, and a full
rule for separating blocks.

## Components

- **The chart index.** THE SIGNATURE ELEMENT. A physical chart is navigated by
  the tabs on its edge, so the page is too. A sticky tab strip at the top, at
  every width. A fixed column down the right edge was built and removed: it
  either sat on top of the section grounds, where dark labels vanish on navy,
  or it needed a gutter that stopped the grounds short of the viewport edge and
  read as a background that failed to load. Grounds reaching the edge matters
  more than tabs being on the edge. It is real navigation, not
  decoration: it is the only navigation below 760px and the only answer to
  "where am I" in a long scroll. The active tab is carried by weight and a
  green edge, never by colour alone. It replaced the inline tab divider, which
  labelled sections without ever helping anyone move between them.
- **Fixed-field block.** Label left, mono value right, hairline between rows.
  Carries record data natively without inventing a card for it.
- **Run sheet.** A numbered, timed sequence. Numbers are earned here because the
  order is information the reader needs. They are not used anywhere else.
- **Attached exhibit.** A full-bleed product screen with a caption beneath it,
  never inside a device frame illustration.
- **Signature block.** The close. Scheduling embed with contact subordinate
  beneath it, never beside it.

One call to action site wide, worded identically everywhere: **Book a demo**.

## Do's and Don'ts

**Do** let each section take its own shape from its content.
**Do** keep mono for record values and figures only.
**Do** make the phone layout the better one.
**Do** put density next to quiet, so the quiet reads as chosen.

**Don't** use an eyebrow or kicker above any heading. The chart index names the
sections; the heading carries its own weight.
**Don't** build an icon-and-caption grid anywhere, including the capability
inventory.
**Don't** use paper as a section background more than twice.
**Don't** write a heading that tries to land. Every heading landing means none
of them do, which is the note the client gave on the previous build.
**Don't** stack heading, body, second body, aside, note and caption in one
section. One body per section.
**Don't** publish the mechanism behind the record, any rating, any price, any
invented fact, or an em or en dash.
