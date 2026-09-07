/**
 * Every string on the site lives here.
 *
 * Source of truth: Content/copy.md. Do not edit copy inside components.
 * When the admin panel arrives in a later phase, this file is what it edits.
 */

export const meta = {
  name: "ElderLogic",
  title: "ElderLogic: placement and marketing-visit software for hospice teams in Arizona",
  /** Shown on the share card. Shorter than the meta title, which gets truncated. */
  shareTitle: "Every licensed home in Arizona, on one map",
  description:
    "Every licensed senior living home in Arizona, and shortlists we have already phoned ahead on, with the room found and the price agreed.",
};

export const nav = {
  items: [
    { label: "How it works", href: "/#walkthrough" },
    { label: "Marketing visits", href: "/#marketing-visits" },
    { label: "Inspection records", href: "/#record" },
    { label: "FAQ", href: "/faq" },
  ],
  cta: { label: "Book a demo", href: "/#book" },
};

export const hero = {
  eyebrow: "Hospice placement and marketing visits in Arizona",
  heading: "There are 2,600 licensed homes in Arizona. Most hospice teams work with about a dozen.",
  sub: "We call the homes, agree a room and a price, and hand your team the ones that said yes.",
  primary: { label: "Book a demo", href: "/#book" },
  secondary: { label: "See how it works", href: "/#walkthrough" },
  image: {
    src: "/product/map-pane.png",
    alt: "Every licensed senior living home in the Phoenix metropolitan area, each one a pin on the ElderLogic map.",
  },
};

/**
 * The recurring object on the page: one home, as the product hands it back.
 * Values are illustrative, and the card says so. No real home is named.
 */
export const homeCard = {
  kind: "Licensed home",
  status: "Room today",
  place: "Assisted living, Mesa",
  rows: [
    { label: "Licence", value: "Current" },
    { label: "Inspections", value: "4 since 2019" },
    { label: "Open enforcement", value: "None" },
    { label: "Room", value: "Available now" },
    { label: "Price agreed", value: "$4,200 / mo" },
  ],
  note: "Illustrative. Every field comes from the state record or the home itself.",
};

export const strip = {
  rule: { label: "What you get" },
  items: [
    {
      icon: "facilities",
      label: "Every licensed home",
      body: "All 2,600 of them, with the state's inspection history on each.",
    },
    {
      icon: "placement-search",
      label: "Shortlists",
      body: "Five homes with a room for your patient and a price agreed.",
    },
    {
      icon: "pre-tour",
      label: "Routed days",
      body: "Your rep's day, routed, with the homes expecting them.",
    },
  ],
  footnote: "It does not replace an EMR or a CRM.",
};

export const meeting = {
  rule: { label: "Why a home takes the meeting", meta: "A home, unprompted" },
  heading: "Why homes say yes",
  body: "Homes pay agents to fill rooms. You fill them free, so the meeting is easy to get and they remember you.",
  quote:
    "We do our own placements, saving you from paying any placement agent fees. Can't wait to meet!",
  attribution: "A home, replying to a hospice that got in touch.",
};

export const concierge = {
  rule: { label: "What arrives on your desk", meta: "One placement search" },
  eyebrow: "The outreach",
  heading: "Your team never picks up the phone.",
  body: "A patient needs a bed. We ring every home that fits and ask who has a room and what it costs.",
  body2: "A rep wants a day out. We reach those homes first and build the route around the ones who said come.",
  aside: "",
};

export const territory = {
  rule: { label: "Coverage", meta: "AZDHS licensing file · Aug 2026" },
  eyebrow: "Coverage",
  heading: "Your liaisons know a dozen homes. Here is the rest.",
  body: "When a resident starts to decline, the home decides which hospice gets the call. Every dot nobody has visited is a referral going to someone else.",
  // The 150 / 87 pair was pulled 2026-09-04. Neither figure could be sourced,
  // and 87 is within rounding of NHPCO's national all-patient average lifetime
  // length of stay (89.6 days, 2018) -- almost certainly that number relabelled
  // as "referred from home". A hospice executive knows the NHPCO figure, so
  // publishing it as a referral-source comparison is a live credibility risk.
  // The direction is well supported (assisted-living referrals enter earlier
  // and stay longer); the specific days are not. Restore only with a citation.
  stats: [] as { value: string; label: string; note: string | null }[],
  closing: "",
  // The map annotation belongs to the heading above it: the lit cluster is the
  // worked part, the dark field is the rest. It must not restate the hero's
  // "about a dozen" -- that claim is made once, in the hero.
  mapAnnotation: "already worked",
  mapAlt:
    "Licensed senior living homes across the Phoenix metro. A small cluster is marked as the part of a territory a team already works; the rest of the field is not.",
  caption: "Licensed homes, Phoenix metro.",
  source: "Around 2,600 statewide, August 2026.",
};

export const marketingVisits = {
  rule: { label: "Marketing visits", meta: null },
  eyebrow: "Marketing visits",
  heading: "Reps walk in expected, not cold.",
  body: "Pick a morning and an area. The homes come back routed, with contact details and inspection history on each.",
  note: "A family tour runs the same way, so the home meets your liaison and a family on one afternoon.",
  image: {
    src: "/product/phone-visit-form-screen.png",
    alt: "The Marketing Visits Form on a phone: date to visit, start and end time, and the area to work.",
  },
};

/** The walkthrough. Icons resolve to /public/icons/<colourway>/<icon>.svg */
export const walkthrough = {
  rule: { label: "One placement, start to finish", meta: "Eight steps" },
  eyebrow: "",
  heading: "One placement, start to finish",
  steps: [
    { icon: "assessment-form", title: "Assessment", line: "One form on a phone." },
    { icon: "placement-search", title: "Search", line: "Every home that fits, minus the ones you have ruled out." },
    { icon: "outreach-log", title: "We call", line: "Who has a room, at what price." },
    { icon: "facilities", title: "Shortlist", line: "Five homes that said yes." },
    { icon: "pre-tour", title: "Route", line: "The day, in driving order, on a phone." },
    { icon: "move-in", title: "Move-in", line: "Client, home, price, date." },
  ],
  funnel: {
    caption: "Five homes with a room and a price already agreed.",
    rows: [
      { value: 200, label: "in the radius" },
      { value: 40, label: "ruled out by your team", emphasis: true },
      { value: 60, label: "contacted" },
      { value: 20, label: "replied" },
      { value: 5, label: "room and price agreed" },
      { value: 2, label: "toured" },
    ],
  },
};

export const record = {
  rule: { label: "The record", meta: "Arizona Dept. of Health Services" },
  eyebrow: "The record",
  heading: "Every inspection the state has published",
  body: "Not just today's licence. The whole history of inspections, violations and enforcement, on every home. One click opens the state's own file.",
  ruleLine: "We do not score or rank homes. Your team reads it and decides.",
};

export const questions = {
  heading: "FAQ",
  intro:
    "The things a hospice team asks before the first call. If yours is not here, email us and we will answer it.",
  backLink: { label: "Back to the site", href: "/" },
  items: [
    {
      q: "Which states do you cover?",
      a: "Arizona. Every licensed senior living home in the state.",
    },
    {
      q: "Do we have to contact the homes ourselves?",
      a: "No. Your team receives homes that have already confirmed a room and a price, and can approach any home directly at any point.",
    },
    {
      q: "Do you rate the homes?",
      a: "No. The state publishes a record, we show it to you, and your team decides.",
    },
    {
      q: "Does it replace our EMR or CRM?",
      a: "No. It handles placement and marketing visits, and sits alongside what you already run.",
    },
    {
      q: "Does it work on a phone?",
      a: "Yes. Assessments, routes, home records and post-visit forms. That is where the work happens.",
    },
  ],
};

export const close = {
  rule: { label: "Book a demo" },
  heading: "See your own territory",
  body: "Name an area your liaisons cover. We open the map on it and you see every home in it, and which ones nobody has called.",
  cta: { label: "Book a demo", href: "/#book" },
  fallbackToggle: "Rather not book a time? Leave your details instead",
  fallbackIntro: "We will come back to you. We read these ourselves.",
  fields: [
    { name: "name", label: "Name", type: "text" },
    { name: "organisation", label: "Organisation", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "message", label: "Message", type: "textarea" },
  ],
  submit: "Send",
};

export const footer = {
  tagline: "Placement and marketing visits for hospice teams in Arizona.",
  columns: [
    {
      heading: "Product",
      links: [
        { label: "How it works", href: "/#walkthrough" },
        { label: "Marketing visits", href: "/#marketing-visits" },
        { label: "Inspection records", href: "/#record" },
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Book a demo", href: "/#book" },
      ],
    },
  ],
  email: "hello@elderlogic.app",
  phone: "(480) 685-5657",
  location: "Arizona",
  source:
    "Home licensing, inspection, violation and enforcement data published by the Arizona Department of Health Services.",
  legal: "© 2026 ElderLogic",
};
