# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hospice teams in Arizona. Three people, one product:

- **The liaison or placement professional.** The primary user. Spends the day
  driving, visiting homes, and making decisions between stops. Works from a
  phone, standing in a car park or sitting in a car, not at a desk.
- **The director of business development.** Owns referral relationships and the
  visit schedule. Wants the field day to be planned rather than improvised.
- **The hospice executive.** The buyer. Measured on census: patients on service.
  Sceptical of software vendors and has seen a great many decks.

They arrive at the site having usually already spoken to Terrah. The site is a
leave behind first and a cold explanation second.

## Product Purpose

Operational clarity for senior placement, built for the field.

A mobile first platform for people who spend their days driving, visiting homes,
and deciding in real time. It turns assessments into routed field days, tracked
outreach, and documented outcomes, in one system meant to be used on a phone.

Two workflows sit inside that:

1. **Placement.** A patient needs a bed. A search covers every licensed home
   that fits. ElderLogic staff ring those homes. The team gets back the ones
   with a room and an agreed price.
2. **Marketing visits.** A rep picks a morning and an area. ElderLogic contacts
   those homes first. The day comes back routed, with the homes expecting the
   visit.

Success is a hospice executive booking a demo.

## Positioning

**A person at ElderLogic makes the calls.** The software finds the homes and
routes the day; the calling is what the fee buys. A competitor shipping a search
tool cannot truthfully write that sentence, and this remains the differentiator
even though the field platform is what the page leads with.

The record of licensed homes belongs to the state. ElderLogic keeps it current.

## Operating Context

The work happens between stops, not at a desk. Phone in hand, often outdoors,
often with a few minutes before the next visit. A long form never gets filled in
a car park.

What the incumbent looks like: a liaison's personal list of a dozen homes they
already know, worked by phone, plus whatever spreadsheet or CRM the agency
already runs. The thing being displaced is relationships held in one person's
head, not a competing product.

The state's licensing and inspection record is the underlying reference for
every home.

## Capabilities and Constraints

Confirmed functionality: assessment intake, placement search across licensed
homes, outreach tracking against a search, route optimisation for a chosen area
and morning, and outcome documentation through to move in.

Hard product constraints, all client set:

- **Never publish the mechanism behind the record.** No scrape, feed, sync,
  dataset, "we compile", and never "published by AZDHS" as a source
  description. The record is the state's and we keep it current.
- **No score, rating, ranking or status pill on a home.** Ever, in copy or UI.
  From the client: *"I didn't say they're nice or not nice. The state is saying
  what they are."*
- **No radius parameters.** No "within a mile", no "anchor address". It also
  understates the product.
- **No pricing on the site.**
- **Nothing invented.** No fabricated statistics, no unsubstantiated security or
  compliance claims, no made up citations. Cut, or ask.

Technical: Next.js 16 App Router, React 19, TypeScript, three dependencies.
Every user facing string lives in `web/content/copy.ts`.

Undecided: the published count of licensed homes in Arizona. The client's sales
deck says 2,621, our positioning document says ~2,700, the website decks say
~2,600. One number, with a date, before launch.

## Brand Commitments

Name: ElderLogic. Design tokens exist and are binding: Source Serif 4 display,
IBM Plex Sans body, IBM Plex Mono for record data, navy #1c4073, green #00a676,
paper #f5f1e9. See `ElderLogic Design System/`.

Voice: plain, specific, unhurried. Second person. Written by someone who has
done the job. Not clinical, not warm, not clever. The benchmark line from the
existing material is *"a long form never gets filled in a car park."*

One call to action site wide: **Book a demo**, worded identically everywhere.
A contact form may exist as a subordinate fallback, never as a second call to
action of equal weight.

No em dashes or en dashes anywhere, including titles and meta descriptions.
Client asked explicitly.

## Evidence on Hand

- **Real product screenshots.** Coming from the client. These are the proof.
  Placeholders currently stand in for them.
- **Terrah's own background in hospice.** Usable, but confined to an About page.
  The home page must stand up without it, so nothing load bearing may depend on
  it.
- The state licensing and inspection record.

Absences that must not be filled by invention: no customer quotes, no case
studies, no named customers, no usage statistics, no benchmarks.

The 150 and 87 lifetime day figures were cut and must not return without a
citation. They are unsourceable, and 87 is within rounding of NHPCO's national
average of 89.6 days, so it reads as that number relabelled.

## Product Principles

1. **The field is the setting.** Everything is designed for someone holding a
   phone between two visits, not reading at a desk.
2. **Say who does the work.** The calling is the differentiator, so the person
   doing it is named rather than hidden behind passive voice.
3. **The record is the state's.** We claim currency and access, never authorship
   and never judgement.
4. **Show, do not assert.** Real screens carry the argument. Where no evidence
   exists, the claim is cut rather than dressed.
5. **Written for a reader who already met us.** Confidence over explanation,
   without stranding someone who arrived cold.

## Accessibility & Inclusion

Read on a phone, outdoors, in daylight, often quickly. AA contrast minimum,
16px minimum body text, 44px tap targets, visible keyboard focus, and
`prefers-reduced-motion` honoured. No information carried by colour or motion
alone.
