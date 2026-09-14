/**
 * Every user facing string on the site.
 *
 * Nothing is hardcoded in a component. Strings written into JSX have escaped
 * review twice on this project, which is why this file exists.
 *
 * The section order and the topics each section owns are decided in
 * `Content/section-coverage.md`. That file is the authority: if a topic is not
 * in it, it does not belong on the page, and if a section is added here it is
 * added there first.
 *
 * Rules that are not negotiable, all from the client:
 *   - Never publish how the record is assembled. It is the state's record and
 *     we keep it current. Nothing about scrapes, feeds, syncs or datasets.
 *   - No score, rating, ranking or grade on a home, in copy or in UI.
 *   - NEVER NAME THE OUTREACH CHANNEL. Not "call", not "text", not "phone
 *     list", not "ring" or "dial". Use vague verbs: reach, contact, hear back
 *     from. Client's words: "we don't ever say text or call, we just say
 *     communicate with or something vague so that nobody knows how we're
 *     actually doing it." Competitors have already been asking her questions.
 *   - No pricing anywhere.
 *   - No invented facts. A number without a source gets cut, not softened.
 *   - No em dashes or en dashes, anywhere, including meta descriptions.
 *   - One call to action, worded identically: "Book a demo".
 */

export const meta = {
  name: "ElderLogic",
  title:
    "ElderLogic: placement and marketing visits for hospice teams in Arizona",
  shareTitle: "ElderLogic",
  description:
    "Every licensed senior living home in Arizona, with its state record. We reach the homes for you and your day comes back routed. Built for a phone, in the field.",
};

export const nav = {
  /** Deliberately short. A one page site with a single action does not need a
   *  menu, and the client called the previous hamburger bad. On a phone this
   *  collapses to the mark plus the action, with no menu at all. */
  links: [
    { label: "How it works", href: "#placement" },
    { label: "The state record", href: "#record" },
    { label: "Questions", href: "/faq" },
  ],
  cta: "Book a demo",
  /** One href for every instance of the call to action on the site. */
  ctaHref: "#book",
};

/**
 * The chart's tabs. The page's index and, below 760px, its only navigation.
 * Labels are the tab, not a sentence: short enough to read on an edge.
 */
export const chartIndex = [
  { label: "The record", href: "#record" },
  { label: "Placement", href: "#placement" },
  { label: "Outreach", href: "#outreach" },
  { label: "Visits", href: "#visits" },
  { label: "Contents", href: "#contents" },
  { label: "Book", href: "#book" },
];

/* ---------------------------------------------------------------- 1. */

export const identity = {
  heading: "Work every licensed home in Arizona",
  body:
    "ElderLogic covers every licensed senior living home in Arizona, with the record the state holds on each one. We reach out to the homes. Your day comes back routed.",
  cta: "Book a demo",
};

/* ---------------------------------------------------------------- 2. */

export const problem = {
  heading: "You can only refer to a home you know exists",
  /** Phrased as a structural fact, never as a failing of the liaison. The
   *  person forwarding this page upward may well manage them. */
  body:
    "A liaison can only build a relationship with a home they know exists, and a working list is usually a couple of dozen. Everything outside it is a room that never gets offered and a referral that never comes back.",
};

/* ---------------------------------------------------------------- 3. */

export const field = {
  /** Full bleed. No copy sits on the image.
   *  The caption says metro because the image shows the metro. An earlier
   *  version claimed Arizona over a picture of Phoenix, which is the kind of
   *  small mismatch a sceptical reader catches first. */
  caption: "The Phoenix metro. Every home on it carries the record the state holds.",
  figure: "2,621",
  figureNote: "licensed homes across Arizona",
  alt: "The ElderLogic map, showing licensed senior living homes across the Phoenix metro.",
};

/* ---------------------------------------------------------------- 4. */

export const record = {
  /** The client's own preferred line, "The record is the state's. We keep it
   *  current.", now opens the body. The heading tells the reader what they
   *  get, which is the pattern her own sales deck uses throughout. */
  heading: "See what the state holds on every home",
  body:
    "The record is the state's and we keep it current. Every home carries its full history, not only what is true today. One click opens the official state file from anywhere in the workflow. Placing a patient into a home with open enforcement is real exposure, and this is where your team sees it.",
  /** What the record carries. Field names only, no values: the values belong to
   *  a real home and this page does not reproduce one. An earlier version put
   *  four identical "Full history" rows beside these, which the client called
   *  out, correctly. */
  carries: [
    "Licensing",
    "Inspections",
    "Violations",
    "Enforcement",
    "Complaints",
    "Capacity",
  ],
  source: "One click opens the state file.",
  /** The no-rating rule, stated as the differentiator it actually is. */
  rule: "No scores, no rankings. Your team reads the record and decides.",
};

/* ---------------------------------------------------------------- 5. */

export const placement = {
  heading: "See one placement, from the first form to the move in",
  /** A numbered run. The numbers are earned here because the order is
   *  information the reader needs. They appear nowhere else on the page. */
  steps: [
    {
      title: "Assessment",
      line: "One assessment covers medical, mobility, budget and room, so a home can answer without coming back for more.",
    },
    {
      title: "Client record",
      line: "The client record and the power of attorney record are created together.",
    },
    {
      title: "Search",
      line: "Every licensed home that fits what this patient needs.",
    },
    {
      title: "Ruled out",
      line: "A rep rules a home out once. It stays out of every future search, for everyone on the team.",
    },
    {
      title: "Outreach",
      line: "We reach out to every home on the search and ask about this patient.",
      /** The one step ElderLogic performs. Marked with a label, not only a
       *  colour, so the distinction survives a greyscale print and a
       *  colour blind reader. */
      by: "ElderLogic",
    },
    {
      title: "Shortlist",
      line: "The homes that have a room, at a price already agreed.",
    },
    {
      title: "Pre-tour",
      line: "The shortlist becomes stops in driving order, and re-optimises when the day changes.",
    },
    {
      title: "Family tour",
      line: "The same route goes to the family and opens in their own maps app.",
    },
    {
      title: "Move in",
      line: "Client, home, price and date, on the record.",
    },
  ],
};

/* ---------------------------------------------------------------- 6. */

export const inField = {
  /** Full bleed, one phone screen at physical size.
   *
   *  This previously read "a long form never gets filled in a car park", which
   *  was the best line in the material and also false: the assessment runs to
   *  fifty plus fields across medical, mental health, ADLs, assets, budget and
   *  room, and the screenshot directly beneath the caption showed it. Thorough
   *  is the true claim, and a better one than brief. */
  caption:
    "The assessment, at the size it is filled in. It asks a lot, once, so nobody has to go back for a missing detail.",
  alt: "The ElderLogic assessment form on a phone.",
};

/* ---------------------------------------------------------------- 7. */

export const calls = {
  heading: "Get back only the homes that said yes",
  body:
    "Your team never chases a home. We reach every home the search returns, ask about this patient, and log what each one says. What comes back is the homes with a room, at a price already agreed with them.",
  /** Client sourced, from her own account of a Phoenix search. Provenance is
   *  confirmed with her before go live; see Content/section-coverage.md. */
  /** A single descending sequence, so the arithmetic holds. An earlier
   *  version carried a "40 already ruled out by your team" row between 200 and
   *  60, which does not subtract to 60 and invited the reader to conclude we
   *  contact a third of the homes. That claim lives at step 04 of the run
   *  sheet instead. */
  funnel: [
    { value: "200", label: "homes in the search" },
    { value: "60", label: "contacted" },
    { value: "20", label: "replied" },
    { value: "5", label: "with a room and a price" },
    { value: "2", label: "the family tours" },
  ],
  /** Timed by the client on a real placement: the request came in at 12:12
   *  and the pre-tour went back at 1:54. The only figure on this site that
   *  came with a source attached. */
  funnelNote: "One search in the Phoenix metro. The request came in at 12:12 and the pre-tour went back at 1:54.",
};

/* ---------------------------------------------------------------- 8. */

export const homes = {
  heading: "Homes want to meet you",
  body:
    "A placement agent costs a home a fee every time they fill a room. A hospice that brings its own residents costs them nothing. That is why the meeting is easy to get, and why it is still worth something six months later.",
  /** The only voiced proof this project holds. A real reply from a home,
   *  from the client's sales deck. Confirm public use before go live. */
  quote:
    "We do our own placements, saving you from paying any placement agent fees. Can't wait to meet!",
  attribution: "A senior living home, replying to an outreach message.",
};

/* ---------------------------------------------------------------- 9. */

export const routedDay = {
  heading: "Pick the morning. Arrive expected.",
  body:
    "A rep picks the date, the time and the area they want to work. We contact the homes inside it first, and the day arrives in driving order with the homes expecting them.",
  caption: "A morning in the west valley, in driving order.",
  alt: "The ElderLogic route map on a phone, showing numbered stops in driving order.",
};

/* --------------------------------------------------------------- 10. */

export const inventory = {
  heading: "What your team gets",
  /** A ruled index, in chart contents grammar. Never an icon and caption grid.
   *  This is the section that answers "what am I actually buying", which three
   *  highlights never do. */
  items: [
    "The Arizona senior living database, kept current",
    "Validated contact information for every home",
    "Client assessment and placement workflow",
    "Client records in one place, without the complexity of a CRM",
    "Home search and matching against a client's needs",
    "Outreach and response collection",
    "Client pre-tour routes",
    "Interactive mapping and custom route creation",
    "Marketing visit planning and routing",
    "Home details and placement information",
    "Visit verification, to confirm your team visited the homes they logged",
  ],
  note: "It does not replace your EMR or your CRM. It runs alongside them.",
};

/* --------------------------------------------------------------- 11. */

export const close = {
  heading: "Book a demo",
  body:
    "Bring an address your team works. We open the map on it and you see what is in it: how many licensed homes, what the state has published about them, and which ones nobody has contacted.",
  cta: "Book a demo",
  /** Subordinate to the scheduling embed, never beside it. */
  fallbackLead: "Would rather send a note first?",
  fields: [
    { name: "name", label: "Name", type: "text" },
    { name: "organisation", label: "Organisation", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "message", label: "Message", type: "textarea" },
  ],
  submit: "Send",
};

/* ------------------------------------------------------------- FAQ. */

export const questions = {
  heading: "Questions",
  intro:
    "What hospice teams ask before the first conversation. Anything else, ask on the demo.",
  items: [
    {
      q: "Which states do you cover?",
      a: "Arizona. Every licensed senior living home in the state.",
    },
    {
      q: "Do we have to contact the homes ourselves?",
      a: "No. Your team receives homes that have already confirmed a room and a price. You can still contact any home directly at any point.",
    },
    {
      q: "Do you rate the homes?",
      a: "No. The state publishes a record, we show it to you, and your team decides.",
    },
    {
      q: "Does it replace our EMR or CRM?",
      a: "No. It handles placement and marketing visit work and runs alongside what you already have.",
    },
    {
      q: "Does it work on a phone?",
      a: "Yes. Assessments, routes, home records and post visit forms. That is where the work happens.",
    },
  ],
};

/* ---------------------------------------------------------- Footer. */

export const footer = {
  tagline: "Placement and marketing visit work for hospice teams in Arizona.",
  email: "hello@elderlogic.app",
  phone: "(480) 685-5657",
  location: "Arizona",
  columns: [
    {
      heading: "Product",
      links: [
        { label: "How it works", href: "#placement" },
        { label: "The state record", href: "#record" },
        { label: "Marketing visits", href: "#visits" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "Questions", href: "/faq" },
        { label: "Privacy", href: "/privacy" },
        { label: "Book a demo", href: "#book" },
      ],
    },
  ],
  /** States ownership and currency, never the mechanism and never a source
   *  description. The previous wording said records were "published by the
   *  Arizona Department of Health Services", which is the exact phrasing the
   *  client banned. It reached the footer from Content/site-spec.md:202, where
   *  it is still written; that line is wrong too. */
  sourceNote:
    "Licensing and inspection records belong to the State of Arizona. ElderLogic keeps them current.",
  legal: "2026 ElderLogic, Phoenix, Arizona",
};
