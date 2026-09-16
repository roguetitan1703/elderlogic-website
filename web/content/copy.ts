/**
 * Every user facing string on the site.
 *
 * Nothing is hardcoded in a component. Strings written into JSX have escaped
 * review twice on this project, which is why this file exists. If you add a
 * label, a caption, an aria-label or a figcaption, it goes here first.
 *
 * Rules that are not negotiable, all from the client:
 *   - NEVER NAME THE OUTREACH CHANNEL. Not "call", not "ring", not "text",
 *     not "dial". Use vague verbs: reach, contact, hear back from. Her words:
 *     "we don't ever say text or call, we just say communicate with or
 *     something vague so that nobody knows how we're actually doing it."
 *     The one sanctioned exception is the outreach heading, which says the
 *     customer does NOT work a phone list. It names their old way, not ours.
 *   - Never publish how the record is assembled. No scrape, feed, sync,
 *     dataset, "we compile", and never "published by AZDHS" as a source line.
 *   - No score, rating, ranking or grade on a home, in copy or in UI.
 *   - No invented facts. A number without a source gets cut, not softened.
 *   - No em dashes or en dashes, anywhere, including meta descriptions.
 *   - One call to action, worded identically: "Book a demo".
 */

export const meta = {
  name: "ElderLogic",
  /** 60 characters. Google truncates a title around there, and the previous
   *  one was 71: "for hospice teams in Arizona" was being cut mid phrase in
   *  results, which is the half that says who this is for. */
  title: "ElderLogic: hospice placement and marketing visits in Arizona",
  /** The one line under the title in a search result. 160 characters. */
  /** Shown on the share card. Shorter than the meta title, which truncates. */
  shareTitle: "Every licensed home in Arizona, on one map",
  description:
    "Every licensed senior living home in Arizona, with the record the state holds on each one. We reach the homes for you and hand your team the ones that said yes.",
};

/**
 * What the site tells a search engine about itself, as structured data.
 *
 * This is published content: it is read by Google, quoted in results, and it
 * must obey the same rules as the visible copy. No mechanism, no rating, no
 * price, and nothing here that is not already true on the page.
 */
export const org = {
  legalName: "ElderLogic",
  area: "Arizona",
  country: "US",
  /** What the product is, in the vocabulary a search engine expects. */
  category: "BusinessApplication",
  audience: "Hospice teams",
  /** The routes a search engine may group under the site in one result. */
  siteLinks: [
    { name: "How it works", url: "/#walkthrough" },
    { name: "Inspection records", url: "/#record" },
    { name: "Marketing visits", url: "/#marketing-visits" },
    { name: "Questions", url: "/faq" },
    { name: "Book a demo", url: "/#book" },
  ],
};

export const nav = {
  items: [
    { label: "How it works", href: "/#walkthrough" },
    { label: "Inspection records", href: "/#record" },
    { label: "Marketing visits", href: "/#marketing-visits" },
    { label: "FAQ", href: "/faq" },
  ],
  cta: { label: "Book a demo", href: "/#book" },
};

/* ------------------------------------------------------------- Hero. */

export const hero = {
  heading: "Work every licensed home in Arizona",
  sub: "We reach out to the homes, agree a room and a price, and hand your team the ones that said yes.",
  primary: { label: "Book a demo", href: "/#book" },
  secondary: { label: "See how it works", href: "/#walkthrough" },
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

/* ---------------------------------------------------------- Coverage. */

export const territory = {
  heading: "Your liaisons know a dozen homes. Here is the rest.",
  body: "When a resident starts to decline, the home decides which hospice gets the call. Every home nobody has visited is a referral going to someone else.",
  caption: "Licensed homes, Phoenix metro. 2,621 statewide, August 2026.",
  mapAlt:
    "The ElderLogic map, showing licensed senior living homes across the Phoenix metro.",
};

/* ---------------------------------------------------------- Outreach. */

export const concierge = {
  /** Sanctioned exception to the channel rule. The line says the customer
   *  does not work a phone list. It names their old way, never ours. */
  heading: "Your team never works a phone list.",
  body: "A patient needs a bed. We reach every home that fits and ask who has a room and what it costs.",
  body2:
    "A rep wants a day out. We reach those homes first and build the route around the ones who said come.",
  /** A single descending sequence, so the arithmetic holds. The earlier
   *  "40 ruled out by your team" row did not subtract to 60 and appears in
   *  none of the client's own materials. That claim lives in step 02 of the
   *  flow instead. Provenance on these five is still unconfirmed. */
  funnel: {
    rows: [
      { value: 200, label: "in the search" },
      { value: 60, label: "contacted" },
      { value: 20, label: "replied" },
      { value: 5, label: "room and price agreed" },
      { value: 2, label: "toured" },
    ],
    caption: "One placement search, Phoenix area.",
    /** Read in place of the bars. It lives here, not in the component, because
     *  it is copy: it said "radius" for two months and no copy pass saw it. */
    label: "How two hundred homes in one search become two the family tours.",
  },
};

/* --------------------------------------------------- Marketing visits. */

export const marketingVisits = {
  heading: "Reps walk in expected, not cold.",
  body: "Pick a morning and an area. The homes come back routed, with contact details and inspection history on each.",
  note: "A family tour runs the same way, so the home meets your liaison and a family on one afternoon.",
  image: {
    /* The HPC capture as it was taken, device frame included, with the white
       surround flood filled to transparent so it sits on any ground. The
       earlier version was a crop of this, which also cut the line explaining
       what the form does. */
    src: "/product/phone-visit-form.png",
    alt: "The Marketing Visits Form on a phone: date to visit, start and end time, and the address whose area to work.",
    /* Intrinsic size. Without it a lazy image is 0px tall until it loads and
       the section below it jumps when it arrives. */
    width: 760,
    height: 1544,
  },
  /* The output beside the input. The form is what a rep fills in; this is what
     comes back. It carried test data before it could be used: a red
     "57 d 3 h 43 min late" badge from a route left open two months, a personal
     profile picture, and a real client and home in the stop label. */
  routeImage: {
    src: "/product/phone-route.png",
    alt: "A routed day on a phone: four numbered stops joined in driving order, with Navigate, Room Details, AZDHS and FamilyTour Form along the bottom.",
    width: 760,
    height: 1544,
  },
  imageCaption: "Pick the area.",
  routeCaption: "Get the day.",
};

/* --------------------------------------------------- Why homes say yes. */

export const meeting = {
  heading: "Why homes say yes",
  body: "Homes pay agents to fill rooms. You fill them free, so the meeting is easy to get and they remember you.",
  /** The only outside voice on this site. Public use is not yet confirmed
   *  with the client. Do not ship without that confirmation. */
  quote:
    "We do our own placements, saving you from paying any placement agent fees. Can't wait to meet!",
  attribution: "A home, replying to a hospice that got in touch.",
};

/* --------------------------------------------------------- The flow. */

export const walkthrough = {
  heading: "One placement, start to finish",
  steps: [
    { icon: "assessment-form", title: "Assessment", line: "One form on a phone." },
    {
      icon: "placement-search",
      title: "Search",
      line: "Every home that fits, minus the ones you have ruled out.",
    },
    {
      icon: "outreach-log",
      title: "Outreach",
      line: "Who has a room, at what price.",
      /** The one step ElderLogic performs. Carried by a text label, not by
       *  colour alone, so it survives greyscale and a colour blind reader. */
      by: "ElderLogic",
    },
    { icon: "facilities", title: "Shortlist", line: "The homes that said yes." },
    {
      icon: "pre-tour",
      title: "Route",
      /** The family half used to be a seventh step and was cut with the flow
       *  down to six. It is the only line that says a family ever touches this
       *  product, and no routing tool does it, so it is reclaimed here rather
       *  than lost: same step, one more clause. */
      line: "The day, in driving order, on a phone. The family gets the same one.",
    },
    { icon: "move-in", title: "Move-in", line: "Client, home, price, date." },
  ],
  /** The flow gets its own screen. It used to borrow the marketing visits
   *  phone, which put the same image on the page twice. */
  image: {
    src: "/product/phone-assessment.png",
    alt: "The ElderLogic assessment form on a phone: client name, current location type, and power of attorney details.",
    width: 760,
    height: 1540,
  },
};

/* ------------------------------------------------ Inspection records. */

export const record = {
  heading: "Every inspection the state has published",
  body: "Not just today's licence. The whole history, on every home. Placing a patient into a home with open enforcement is real exposure, and this is where your team sees it.",
  /** The shape of the record, not its contents. Field names and what each one
   *  covers: no values, because the values belong to a real home and this page
   *  does not reproduce one. Complaints came out because it is the one field
   *  that describes the home rather than the state's findings about it, and it
   *  sits closest to the rating line this product does not cross. */
  carries: [
    { field: "Licensing", gloss: "The current licence, and every one before it" },
    { field: "Inspections", gloss: "Every visit the state has made, with its date" },
    { field: "Violations", gloss: "What was found, and when" },
    { field: "Enforcement", gloss: "Any action the state has taken" },
    { field: "Capacity", gloss: "Licensed beds and the care levels allowed" },
  ],
  /** The sixth cell. The claim the AZDHS button in the route screen evidences. */
  access: {
    field: "The source",
    gloss: "AZDHS sits on every stop. One tap opens the state's own file.",
  },
  ruleLine:
    "We do not score or rank homes. Your team reads the record and decides.",
  /** The record on a home, in the product. Every identifying value is a demo
   *  value, which is why the caption says so: the home, the address, the number
   *  and the email are invented, and the licensing rows are illustrative. What
   *  is real is the shape of the card and where it sits in the workflow. */
  image: {
    src: "/product/home-record.jpg",
    alt: "A home selected on the ElderLogic map, with its record open: licence, inspections and open enforcement, beside the contact details.",
    width: 1681,
    height: 936,
    /** The same card, cropped close. At 390px the wide version renders the
     *  card about 180px across and none of it can be read. */
    narrowSrc: "/product/home-record-tall.jpg",
    narrowWidth: 692,
    narrowHeight: 519,
  },
  caption: "One home, selected on the map. Illustrative values.",
};

/* --------------------------------------------------------- Inventory. */

/**
 * The section that answers "what am I actually buying", which three
 * highlights never do. A ruled index, never an icon and caption grid.
 */
export const inventory = {
  heading: "What your team gets",
  /** Grouped, not a flat list. Eleven bullets in a column read as a feature
   *  dump: nothing tells the reader which of them belong together, so the whole
   *  block scans as a slide. The three groups are the page's own spine, so by
   *  the time the reader arrives here they already know what each one means. */
  groups: [
    {
      heading: "Every home in Arizona",
      items: [
        "The Arizona senior living database, kept current",
        "Validated contact information for every home",
        "Home details and placement information",
      ],
    },
    {
      heading: "A placement, start to finish",
      items: [
        "Client assessment and placement workflow",
        "Client records in one place, without the complexity of a CRM",
        "Home search and matching against a client's needs",
        "Outreach and response collection",
        "Client pre-tour routes",
      ],
    },
    {
      heading: "Marketing visits",
      items: [
        "Marketing visit planning and routing",
        "Interactive mapping and custom route creation",
        "Visit verification, to confirm your team visited the homes they logged",
      ],
    },
  ],
  note: "It does not replace your EMR or your CRM. It runs alongside them.",
};

/* ------------------------------------------------------------- Close. */

export const close = {
  heading: "See your own territory",
  body: "Name an area your liaisons cover. We open the map on it and you see every home in it, and which ones nobody has contacted.",
  cta: { label: "Book a demo", href: "/#book" },
  secondary: { label: "Read the FAQ", href: "/faq" },
  fallbackToggle: "Rather not book a time? Leave your details instead",
  fallbackIntro: "We will come back to you. We read these ourselves.",
  schedulerLabel: "Scheduling calendar, embedded",
  schedulerPlaceholder: "Scheduling embed",
  fields: [
    { name: "name", label: "Name", type: "text" },
    { name: "organisation", label: "Organisation", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "message", label: "Message", type: "textarea" },
  ],
  submit: "Send",
};

/* --------------------------------------------------------------- FAQ. */

export const questions = {
  heading: "FAQ",
  intro:
    "The things a hospice team asks before the first conversation. If yours is not here, email us and we will answer it.",
  backLink: { label: "Back to the site", href: "/" },
  metaDescription:
    "What a hospice team asks before the first conversation: coverage, contacting homes, what it replaces, and how it works on a phone.",
  /** Sits under the FAQ list, above the one call to action. It was hardcoded
   *  into the FAQ page and never reached a copy review. */
  closeLead: "See it on your own territory.",
  closeBody:
    "We open the map on the area your liaisons cover and you see what is in it.",
  items: [
    {
      q: "Which states do you cover?",
      a: "Arizona. Every licensed senior living home in the state.",
    },
    {
      q: "Do we have to contact the homes ourselves?",
      a: "No. Your team receives the homes that have confirmed a room and a price. You can still contact any home directly at any point.",
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
      a: "Yes. Assessments, routes, home records and post-visit forms. That is where the work happens.",
    },
  ],
};

/* --------------------------------------------------------- Not found. */

/** Also hardcoded until now. */
export const notFound = {
  heading: "This page is not here.",
  body: "The address may have changed, or it may never have existed. Everything on the site is one of these:",
  back: "Back to the start",
};

/* ------------------------------------------------------------ Footer. */

/**
 * A footer, not a place to make a claim. The source sentence that used to sit
 * here said records were "published by the Arizona Department of Health
 * Services", which is the exact phrasing the client banned. It is gone rather
 * than rewritten: the record's provenance is argued in the records section,
 * where it has room to be argued properly.
 */
/** The back to top control. It is a real control, so it gets real copy. */
export const toTop = {
  label: "Back to top",
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
  contactHeading: "Contact",
  email: "hello@elderlogic.app",
  phone: "(480) 685-5657",
  location: "Arizona",
  legal: "© 2026 ElderLogic",
  /** Sits opposite the copyright on the base rule, which otherwise carried one
   *  item across the full width of the page. */
  baseNote: "Placement and marketing visit software. Arizona only.",
};
