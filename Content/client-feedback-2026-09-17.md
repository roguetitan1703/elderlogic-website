# Client feedback, 16 to 17 September 2026

Terrah's WhatsApp review of the preview, in the order she sent it, with what Om
has settled against each message and what still needs her.

Nothing in this round has been built yet. This file is the agreed reading of
the batch, so the build can start without re-litigating any of it.

**Settled** build it as written. **Open** blocked on Terrah. **Proposed** our
recommendation, not yet agreed.

What she reviewed is commit `8f0056b`, confirmed on both remotes. The FAQ
accordion, metadata and performance work done since are local and she has not
seen them.

---

## Standing rule changes this batch makes

Three of her messages change rules the site has been built under. Recorded
once here so nobody applies the old rule to her new copy.

1. **Her copy uses "residential care home"** where the site says "home". Take it
   in her copy as written. Do not propagate it into copy she did not touch
   without asking.
2. **"Concierge Outreach Service" is a named service**, capitalised, and must be
   written identically everywhere: inventory, flow step 03, FAQ.
3. **The outreach quote is now cleared.** She supplied it herself in the "why
   homes say yes" copy, which closes the long-standing permission blocker.

---

## 23:55. Hero card disclaimer

Her words: "These 2 fields don't come from the state; that's what we do on the
backend so that illustrative disclaimer isn't exactly accurate. We can reword
it though." About **Room** and **Price agreed** on the hero card.

Today the note reads: "Illustrative. Every field comes from the state record or
the home itself."

**Proposed.** Say which field comes from where, without saying how:

> Illustrative. Licence and inspection fields are the state's. Room and price
> are confirmed by ElderLogic.

Two knock-on changes, both **Proposed**:

- The label **"Price agreed"** becomes **"Price confirmed"**. Her new hero line
  says "confirm room availability and pricing"; the card should use her verb.
- The card also shows three AZDHS values. See 00:31 for why those may need to
  come out.

---

## 23:56. Coverage section, right-hand copy

**Settled.** Replaces the body beside "Your liaisons know a dozen homes. Here is
the rest."

> When a resident needs hospice care, relationships matter. Every residential
> care home your team hasn't visited is a potential referral relationship being
> built by someone else.

---

## 23:59. Outreach section

**Settled.** Heading and both paragraphs replaced.

> **Your team isn't limited to their phone list.**
>
> A patient needs a bed. We reach every residential care home in the area, then
> filter the results based on the patient's needs, availability, and cost.
>
> Your team is planning a day of outreach. We reach those homes first and build
> the route around the ones interested in meeting.

The heading keeps the sanctioned exception to the channel rule: it names the
customer's old way, not ours.

---

## 00:03. The funnel

**Settled.** Seven rows replace five, labels in sentence case as she asked.

| Value | Label |
|---|---|
| 200 | In the search grid |
| 60 | Qualified for outreach |
| 20 | Replied |
| 10 | Viable options |
| 10 | Pre-tour |
| 3 | Family tour |
| 1 | Family's perfect fit |

This also closes the funnel provenance blocker: the numbers are now hers.

Two things change with it:

- The screen reader label, "How two hundred homes in one search become two the
  family tours", no longer matches. It becomes "How two hundred homes in one
  search become one family's perfect fit."
- Viable options and pre-tour are both 10, so two bars will be the same length.
  That is correct and should stay visibly equal rather than be nudged.

---

## 00:05. Marketing visits section

**Settled.** Heading, body, and the family tour line replaced.

> **Marketing visits start with an invitation, not a cold call.**
>
> Pick a morning and an area. We contact the homes first and build the route
> around those interested in meeting, with contact details and inspection
> history for each.
>
> Family tours work the same way. Your team pre-tours the viable options first,
> then families tour the homes they want to see.

"Cold call" contains the word the channel rule bans. It is an idiom naming the
old way of doing it, the same kind of exception as the phone list heading, and
it is her line. Taken as written.

---

## 00:08. Why homes say yes

**Settled.**

> **Why homes say yes to a marketing visit**
>
> The right message warms up the introduction before your team ever walks
> through the door. Instead of asking for a meeting cold, we lead with something
> residential care homes value: the opportunity for future placements without
> placement agent fees.
>
> "We do our own placements, saving you from paying any placement agent fees.
> Can't wait to meet!"
>
> The hook that turns a cold visit into a warm introduction.

The last line replaces the current attribution, "A home, replying to a hospice
that got in touch." It sits under the quote as its caption.

---

## 00:14. The flow: seven steps, not six

**Settled.** Titles in sentence case per 00:03, except the named service.

| # | Step | Line | Icon |
|---|---|---|---|
| 01 | Assessment | One form, mobile or desktop. | Assessment Form |
| 02 | Search | Every residential care home in the area. | Placement Search |
| 03 | Concierge Outreach Service | We contact the homes and filter the responses. | Outreach Log |
| 04 | Viable options | Room, price, and resident needs confirmed. | Facilities |
| 05 | Pre-tour | Your team visits the viable options first. | Pre-Tour |
| 06 | Family tour | Your team tours selected homes with the family. | Family Tour |
| 07 | Family's perfect fit | The family chooses the home that's right for them. | Move-In |

All seven have a branded icon already in `Assets/Icons/SVGs/`. Step 03 keeps
the "ElderLogic" badge, since it is still the one step we perform.

---

## 00:18. Inspection records

**Settled.** Five cells, and **Capacity is dropped**.

| Field | Line |
|---|---|
| Licensing | Current license and licensing history. |
| Inspections | Every AZDHS inspection, with its date. |
| Violations | What the state found, and when. |
| Enforcement | Any enforcement action taken by the state. |
| The source | AZDHS is one tap away at every stop, opening the state's own record. |

Under the grid, replacing the current rule line:

> ElderLogic displays the state's findings as reported. We don't score or rank
> homes. Your team reviews the record and decides.

She spells it "license", American. The site has been writing "licence". Take
hers, and correct the other instances on the site to match.

---

## 00:31. The map popup

Her words: "Make this a fake home for the Mapsly popup. IDK if I can display
the AZDHS metrics due to permissions and stuff on their side yet."

**Part one, the fake home: already done.** Om's finding: the screenshot she
sent with this message shows **Sunrise Cares Homes**, which is not in the image
on the site. The site image, committed in `be455a7` and live on both remotes,
was edited before publication:

| | Original | On the site |
|---|---|---|
| Home | Sun View Estates Home Care | Sun Ridge Assisted Living |
| Address | 701 West Solano Drive, Phoenix | 4120 N Recker Rd, Mesa |
| Mobile | (602) 717-8296 | (480) 555-0176 |
| Email | a real yahoo.com address | contact@sunridgeal.example.com |

The image she is reacting to did not come from the site. Om is asking her where
it came from, and telling her we already replace names and numbers for display.

**One check only she can do.** We have no home list locally, so we cannot
confirm "Sun Ridge Assisted Living" is not a real Arizona home. It is a
plausible name on a real Mesa road. She can search her database for it in
seconds. If it exists, it gets renamed.

**Part two, the AZDHS metrics: Open.** Three rows in that popup were added by
us, not captured: Licence Current, Inspections 4 since 2019, Open enforcement
None. The same three appear as HTML on the hero card. If she is not yet sure
she may display AZDHS metrics, both should come out until she is. Removing them
is cheap in both places. Her call.

**Our own defects in the same image**, found while checking hers:

1. **The image brief was wrong.** Item 07.8 told the editor to keep
   `Website: Empty` and `Tags: Nothing selected`, calling them record fields.
   They are the tool's empty-state placeholders, so the product's strongest
   image tells a buyer its data has gaps. The pencil icon beside Website is the
   tool's inline-edit control, and with Tags, Copy address and the close cross
   the popup is recognisable to anyone who has used it. Both rows come out.
2. **Ghost text under the retouch.** At 4x, remnants of the original wording
   sit beneath "Yes", "Current", "4 since 2019", "None" and the email. The new
   values were typed over the old without clearing them.

All of this goes back to the editor as one corrected brief for that asset.

---

## What your team gets: design, not only copy

Om's brief, attached to the inventory messages: the section reads as a list,
worst on a phone. It needs an icon or a creative element so it reads as
designed, and a way for the reader to see all of it at their own discretion,
the way an accordion lets them, **without being an accordion**.

**Settled as a task.** Options to be shown, not picked silently.

## 00:33. Inventory, group one

Heading: **Every residential care home in Arizona**, sentence case. She typed
it in capitals because the site renders group headings in capitals; see 00:46.

- A statewide database, continuously maintained and updated
- Owner and licensing information from AZDHS
- Community contact information and historical AZDHS data
- Inspection, violation, and enforcement history

**Settled 19 September.** The third line as she first wrote it, "Mobile numbers
researched and validated by ElderLogic", contradicted her own standing rule:
"we don't ever say text or call, we just say communicate with or something
vague so that nobody knows how we're actually doing it." Mobile numbers names
the channel to any competitor reading the page.

Om put the choice to her against her pricing sheet's own line. Her answer:
**"Good call. Vague."** So the site now carries **"Community contact
information and historical AZDHS data"**, the ampersand written out to match
the rest of the list.

## 00:34. Inventory, group two

**Settled, verbatim.**

- Client assessment and placement workflow
- Client records in one place, without the clutter of a CRM
- Search every residential care home in the area
- Concierge Outreach Service to gather availability, pricing, and details
- Viable options and pre-tour planning in one place

## 00:35. "ElderLogic does not"

**Settled.** "It does not replace your EMR or your CRM" becomes "ElderLogic does
not replace your EMR or your CRM."

---

## 00:35. "See your own territory" comes out

Her words: "Not providing this feature yet."

**Settled.** The section was written so that opening a map on a named
territory read as a feature on offer, and it is not one.

It is the page's only call to action, so this is a rewrite of the invitation,
not a deletion. She also asked for the section to look **better visually**,
which is design work on the same block. Directions to be shown.

---

## 00:37 to 00:43. FAQ answers

**Settled**, in her words.

| Question | Change |
|---|---|
| Which states do you cover? | "Arizona. We maintain statewide residential care home records, with active licensed homes available for search and outreach." |
| Do we have to contact the homes ourselves **for availability**? | The question gains "for availability". Answer opens "Not initially" and names the Concierge Outreach Service |
| Do you rate the homes? | "The State of Arizona reports its findings, and ElderLogic displays them as reported." |
| Does it work on a phone? | "Absolutely. Your team works in the field, so ElderLogic goes with them." |
| Does it replace our EMR or CRM? | Hers, with the em dash replaced by a colon |

Her EMR answer uses "purpose-built", which is on our banned-vocabulary list and
appears twice in her own platform PDF. Her wording wins.

The seven questions added since the preview are ours and she has not seen them.
They should go to her before launch.

## 00:43. FAQ caption

**Settled.** The line under the FAQ heading comes out.

## 00:45. Footer text under the logo

**Settled.** Word for word the closing line of her pricing sheet:

> ElderLogic Concierge provides hospice teams with the tools, data and support
> to simplify senior living placement and grow community relationships.

**Two knock-ons, raised by Om. Proposed.**

1. **The footer's bottom row changes too.** It reads "Placement and marketing
   visit software. Arizona only." With her tagline directly above it, the row
   restates the same thing worse. Recommendation: drop the sentence and leave
   the copyright alone on that row.
2. **Her line becomes the meta description.** It says what the product is
   better than ours does, which is what the metadata pass was for. It is 141
   characters, so it fits whole. It does not say Arizona, but the page title
   already does, so nothing is lost in search.

---

## 00:46. Brand green becomes #00B07D

**Settled, with one constraint.** Om confirmed she means **button
backgrounds**.

White text on #00B07D measures **2.80:1**. The accessibility standard the
proposal commits to needs 4.5:1.

| Option | Contrast | Passes |
|---|---|---|
| White text on #00B07D | 2.80 | no |
| **Navy #0b1a30 text on #00B07D** | **6.23** | yes |
| White on #00825B, a darkened #00B07D | 4.83 | yes |
| White on #006b4c, what buttons use today | 6.55 | yes |

#00B07D becomes the brand hex everywhere it does not carry text. For the
button, recommendation is **navy text on the bright green**: her colour at full
strength, and it passes comfortably.

---

## 00:46. "Sentence case these", and 00:03 "Sentence case everything"

Her words, on the nav: "Sentence Case these - the inspection records and
marketing visits nav title." The deployed nav already reads "Inspection
records" and "Marketing visits".

**Om's reading: Title Case for the nav**, so "Inspection Records" and
"Marketing Visits".

**What the site renders, for the rest.** Several elements are set in capitals
by CSS, not by their copy: the inventory group headings, "LICENSED HOME" on the
hero card, the "ELDERLOGIC" step badge, the footer column headings, the menu
button. She typed the inventory headings back to us in capitals, which is how
she saw them. The funnel labels are all lower case. "Sentence case everything"
reads naturally as: no all-capitals labels, and capitalise the first word of
every label.

**Settled 19 September.** Om asked whether she meant "Inspection records" or
"Inspection Records". Her answer: "Right. I mean Title Case; you're right."
The two readings do not conflict:

- **Nav items in Title Case**, per Om. Common for short nav labels.
- **Everything else in true sentence case.** Capitals transforms come off, and
  lower-case labels get a capital first letter.
- **The hero heading stays as she typed it**, "Work every licensed home in
  Arizona". She wrote it out in sentence case in the same message.
- **Her reporting heading** becomes "Need more visibility? Add reporting." to
  match.

Scope, as shipped: the three nav titles and their copies in the footer and in
the structured data. Section headings, the hero and the funnel labels stay in
sentence case, which is how she typed them herself. The one CTA keeps its
single wording, "Book a demo", across the whole site.

---

## 00:50. White navbar and the colour logo

Her words: "AI incorrect details but can we do that for the top banner? I like
the colorful logo better."

She was sending an AI mockup of a white navbar as a reference for what she
wants. "AI incorrect details" is her disclaiming the mockup's content, not
reporting a fault on our page.

**Open.** The colour lockup exists at `Assets/Logo/SVGs/Full logo.svg`. But the
header currently dissolves into the navy hero map and only takes a background
on scroll, so a white bar is a different hero, not a colour swap. Build it,
show it beside the current one, and let her choose.

## 00:52. Hero banner

**Settled for the sub-line:**

> We reach out to the homes, confirm room availability and pricing, and hand
> your team the ones that said yes.

The heading stays "Work every licensed home in Arizona". See 00:46.

---

## 01:16. Reporting section

New section before the close. Not in the top nav.

**Settled, as content.** Om's call: not structured as the priced add-ons, and
**no pricing**.

**Need more visibility? Add reporting.**

| Block | Line |
|---|---|
| Placement reporting | Placement activity and outcomes from assessment through placement. |
| Marketing visit reporting | Planned versus completed marketing visits and field activity. |
| Pre-tour visit verification and reporting | Planned versus completed pre-tour visits with verification of field activity. |

She asked us to check the pricing sheet for language. It sells two add-ons,
not three; her split across marketing visits and pre-tours is fine as content.
Useful phrasing from the sheet:

- "See the full scope of outreach behind every client placement."
- "Verify that your team visits the communities they say they visit."

She put it "right before the FAQ section". The FAQ is its own page, so on the
home page this means after the inventory and before the close.

---

## Needs Terrah

| # | Question | Status |
|---|---|---|
| 1 | "Mobile numbers researched and validated by ElderLogic": keep, or her pricing sheet's "Community contact information"? | **Answered 19 Sep.** "Good call. Vague." Her pricing sheet line ships |
| 2 | Can the site show AZDHS values in illustrations yet? Decides whether three rows come off the popup and the hero card | Open |
| 3 | Is "Sun Ridge Assisted Living" a real home in her database? | **Closed.** Om confirmed to her that every name and number in the images is swapped for a fake; the real ones exist only in what she sent us |
| 4 | Where did the Sunrise Cares Homes screenshot come from? | **Closed** by the same answer |
| 5 | Title Case on the nav and sentence case everywhere else: right? | **Answered 19 Sep.** "Right. I mean Title Case; you're right." Nav items are Title Case; see 00:46 |
| 6 | Her white navbar mockup, as the brief for that change | Open |

## 22 September: reporting, the close, and the calendar

The reporting section failed twice because it had three report names and no
reason to exist. The reason is who asks for it, so it is written for them:
"For leadership: planned against completed, across your whole team." Her three
names and lines sit under that, and the section is a band rather than a peer
of the sections above it, because it is an optional add-on.

Her phrase is also the graphic. One week of marketing visits, Monday to
Friday: hollow circle planned, filled circle completed, a check on the two
that were verified. No counts and no names, so nothing is invented, and a
reader answers the only question leadership is asking in one glance.

The close heading restated the flow section's own heading, so it read as one
more section rather than the invitation at the end of one. It is now "Walk
through a placement with us."

The booking calendar is connected to the agency's Calendly while hers is being
made. One constant in site.ts.

---

## 19 September: the domain

Registered under the original **elderlogic.biz** account and managed through
**Google Admin** with that credential. She wants everything moved to
**elderlogic.app**, which is the domain the site is already written against.
Still needed from her: whether a Google Analytics account exists.
