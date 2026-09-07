/**
 * Every string on the site lives here.
 *
 * Source of truth: Content/copy.md. Do not edit copy inside components.
 * When the admin panel arrives in a later phase, this file is what it edits.
 */

export const meta = {
  name: "ElderLogic",
  title: "ElderLogic — placement and marketing-visit software for hospice teams in Arizona",
  /** Shown on the share card. Shorter than the meta title, which gets truncated. */
  shareTitle: "Every licensed home in Arizona, on one map",
  description:
    "Every licensed senior living home in Arizona, and shortlists we have already phoned ahead on, with the room found and the price agreed.",
};

export const nav = {
  items: [
    { label: "How it works", href: "/#walkthrough" },
    { label: "Marketing visits", href: "/#marketing-visits" },
    { label: "The record", href: "/#record" },
    { label: "FAQ", href: "/faq" },
  ],
  cta: { label: "Book a demo", href: "/#book" },
};

export const hero = {
  eyebrow: "Hospice placement and marketing visits — Arizona",
  heading: "There are 2,600 licensed homes in Arizona. Most hospice teams work with about a dozen.",
  sub: "ElderLogic is placement and marketing-visit software for hospice teams in Arizona. You get every licensed home in the state, and shortlists we have already phoned ahead on, with the room found and the price agreed.",
  primary: { label: "Book a demo", href: "/#book" },
  secondary: { label: "See how it works", href: "/#walkthrough" },
  image: {
    src: "/product/map-pane.png",
    alt: "Every licensed senior living home in the Phoenix metropolitan area, each one a pin on the ElderLogic map.",
  },
};

export const strip = {
  rule: { label: "What you get" },
  items: [
    {
      icon: "facilities",
      label: "Every licensed home",
      body: "Every licensed senior living home in the state, with its record attached.",
    },
    {
      icon: "placement-search",
      label: "Shortlists",
      body: "A shortlist for one patient, with the rooms and the prices already on it.",
    },
    {
      icon: "pre-tour",
      label: "Routed days",
      body: "A day of stops on a phone, ordered so nobody doubles back.",
    },
  ],
  footnote: "It does not replace an EMR or a CRM.",
};

export const meeting = {
  rule: { label: "Why a home takes the meeting", meta: "A home, unprompted" },
  heading: "You are the visit a home doesn't pay for.",
  body: "Homes pay placement agents to fill rooms. A hospice brings residents and charges nothing for it, so the meeting is easy to get, and the home still remembers you six months later.",
  quote:
    "We do our own placements, saving you from paying any placement agent fees. Can't wait to meet!",
  attribution: "A home, replying to a hospice that got in touch.",
};

export const concierge = {
  rule: { label: "What arrives on your desk", meta: "One placement search" },
  eyebrow: "The outreach",
  heading: "We do the calling.",
  body: "When a patient needs a bed, a search goes out to every licensed home that fits, and we ring them: who has a room, what it costs, what they say, including the no's. We do the same before a marketing day, getting to the homes in that area first with what your hospice can offer, and building the route around the ones that want the meeting. Either way your team opens the app and picks from what came back.",
  aside: "Neither of those costs your team a phone call.",
};

export const territory = {
  rule: { label: "Coverage", meta: "AZDHS licensing file · Aug 2026" },
  eyebrow: "Coverage",
  heading: "Most of this territory has never been worked.",
  body: "Homes decide which hospice to call when a resident starts to decline, and a liaison can only build that with homes they know exist. The rest of the territory has open rooms, homes that would refer, and homes nobody has walked into.",
  // The 150 / 87 pair was pulled 2026-09-04. Neither figure could be sourced,
  // and 87 is within rounding of NHPCO's national all-patient average lifetime
  // length of stay (89.6 days, 2018) -- almost certainly that number relabelled
  // as "referred from home". A hospice executive knows the NHPCO figure, so
  // publishing it as a referral-source comparison is a live credibility risk.
  // The direction is well supported (assisted-living referrals enter earlier
  // and stay longer); the specific days are not. Restore only with a citation.
  stats: [] as { value: string; label: string; note: string | null }[],
  closing: "Census is the number an owner answers for. Every unworked home on this map is a referral that goes somewhere else.",
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
  heading: "A day of visits, in driving order.",
  body: "A rep picks a morning and an area to work. Back comes every home inside it, each with its contact details and its state record, already placed in the day's order.",
  note: "A family's pre-tour runs on the same routing, which means it is a marketing visit as well. The home meets your liaison and a family on the same afternoon.",
  image: {
    src: "/product/phone-visit-form-screen.png",
    alt: "The Marketing Visits Form on a phone: date to visit, start and end time, and the area to work.",
  },
};

/** The walkthrough. Icons resolve to /public/icons/<colourway>/<icon>.svg */
export const walkthrough = {
  rule: { label: "One placement, start to finish", meta: "Eight steps" },
  eyebrow: "",
  heading: "One placement, start to finish.",
  steps: [
    {
      icon: "assessment-form",
      title: "Someone needs a place",
      line: "Your liaison fills one assessment on a phone. The client and power-of-attorney records write themselves from it.",
      shot: { src: "/product/phone-assessment-screen.png", kind: "phone" as const,
        alt: "The assessment form on a phone, showing client name, location type and power-of-attorney fields." },
    },
    {
      icon: "placement-search",
      title: "The search runs",
      line: "Every home in range, measured against what this patient actually needs. The ones your team has ruled out never appear.",
      note: "One rep rules a home out and it stays out of every future search, for everyone.",
      shot: { src: null, kind: "desktop" as const,
        alt: "Placement search results, one licensed home per row, with licence status visible on each." },
    },
    {
      icon: "outreach-log",
      title: "We call the homes",
      line: "Every home in the search gets a call, and every answer lands in one log against that patient, including the homes that never replied.",
      shot: { src: null, kind: "desktop" as const,
        alt: "The outreach log for one placement search, one row per home with the reply recorded against it." },
    },
    {
      icon: "facilities",
      title: "Homes that said yes",
      line: "Five names on a typical search. Each has a room for this patient and a price your team never had to negotiate.",
      shot: { src: null, kind: "desktop" as const,
        alt: "The shortlist for one client: the homes that confirmed a room, each with its agreed price." },
    },
    {
      icon: "pre-tour",
      title: "Routed into a day",
      line: "The stops re-order themselves when the day changes. The same route goes to the family, and opens in their own maps app.",
      shot: { src: "/product/phone-route-screen.png", kind: "phone" as const,
        alt: "The pre-tour route on a phone: numbered stops in driving order, with navigate, room details and the state record at each one." },
    },
    {
      icon: "move-in",
      title: "Move-in",
      line: "Client, home, price, date, on the record.",
      shot: { src: null, kind: "desktop" as const,
        alt: "The move-in record: client, home, agreed price and date." },
    },
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
  heading: "The record is the state's. We keep it current.",
  body: "Every home carries its full AZDHS history, not only what is true today, and one click opens the official state file from anywhere in the workflow. Placing a patient into a home with open enforcement is real exposure. This is where a team sees it.",
  rows: [
    { label: "Licensing", value: "Full history" },
    { label: "Inspections", value: "Full history" },
    { label: "Violations", value: "Full history" },
    { label: "Enforcement", value: "Full history" },
    { label: "Refreshed", value: "Monthly" },
    { label: "Source document", value: "One click to AZDHS" },
  ],
  ruleLine: "We do not score or rank homes. Your team reads the record and decides.",
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
  heading: "Start with an area you already cover.",
  body: "We open the map on that area and you see what is in it: how many licensed homes, what the state has published about each one, and which ones nobody has contacted.",
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
        { label: "The record", href: "/#record" },
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
