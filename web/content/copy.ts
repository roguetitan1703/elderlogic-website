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
  /** Metadata is not a place to be interesting. A search result and an
   *  unwrapped link are both read by someone who has never heard of us, in
   *  one second, next to nine competitors. Every title and description on
   *  this site therefore says what the product is before it says anything
   *  clever about it. The three share surfaces show together, so they must
   *  not repeat each other either:
   *    card image  what it is, big
   *    shareTitle  what it is, for search-shaped reading
   *    description what it is, plus what is actually in it */
  shareTitle: "ElderLogic: hospice placement software for Arizona",
  /** Describes the card, which carries its own headline. */
  shareImageAlt: "ElderLogic. Placement and marketing visits for hospice teams.",
  /** The one line under the title in a search result. 160 characters. */
  /** The client's own sentence, from the close of her pricing sheet. It says
   *  what the product is better than ours did, so it is used as written. It
   *  does not name Arizona; the title does. Shared with footer.tagline. */
  description:
    "ElderLogic Concierge provides hospice teams with the tools, data and support to simplify senior living placement and grow community relationships.",
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
    { name: "How It Works", url: "/#walkthrough" },
    { name: "Inspection Records", url: "/#record" },
    { name: "Marketing Visits", url: "/#marketing-visits" },
    { name: "Questions", url: "/faq" },
    { name: "Book a demo", url: "/#book" },
  ],
};

export const nav = {
  items: [
    { label: "How It Works", href: "/#walkthrough" },
    { label: "Inspection Records", href: "/#record" },
    { label: "Marketing Visits", href: "/#marketing-visits" },
    { label: "FAQ", href: "/faq" },
  ],
  cta: { label: "Book a demo", href: "/#book" },
  /** The phone menu. It is a panel, not a dropdown, so it has room for the
   *  things a dropdown never has room for. */
  menu: {
    /** First thing in the tab order on every page. Visible only on focus. */
    skip: "Skip to content",
    open: "Menu",
    close: "Close",
    /** Sits above the contact details at the foot of the panel. */
    contactLead: "Or reach us directly",
  },
};

/* ------------------------------------------------------------- Hero. */

export const hero = {
  heading: "Work Every Licensed Home in Arizona",
  sub: "We reach out to the homes, confirm room availability and pricing, and hand your team the ones that said yes.",
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
    { label: "License", value: "Current" },
    { label: "Inspections", value: "4 since 2019" },
    { label: "Open enforcement", value: "None" },
    { label: "Room", value: "Available now" },
    /* "Confirmed", not "agreed": the hero line now says we confirm room
       availability and pricing, and the card uses the same verb. */
    { label: "Price confirmed", value: "$4,200 / mo" },
  ],
  /** The old note said every field came from the state record or the home
   *  itself. The client corrected it: room and price come from ElderLogic,
   *  not the state. They stay on the card because they are the two fields that
   *  show what ElderLogic adds; without them this is only a state record. The
   *  note says whose each field is, and nothing about how it was got. */
  note: "Illustrative. License and inspection fields are the state’s. Room and price are confirmed by ElderLogic.",
};

/* ---------------------------------------------------------- Coverage. */

export const territory = {
  heading: "Your liaisons know a dozen homes. Here is the rest.",
  body: "When a resident needs hospice care, relationships matter. Every residential care home your team hasn’t visited is a potential referral relationship being built by someone else.",
  caption: "Licensed residential care homes, Phoenix metro. 2,621 statewide, August 2026.",
  mapAlt:
    "The ElderLogic map, showing licensed residential care homes across the Phoenix metro.",
};

/* ---------------------------------------------------------- Outreach. */

export const concierge = {
  /** Still the sanctioned exception to the channel rule: it names the
   *  customer's old way, never ours. The client's rewording. */
  heading: "Your team isn’t limited to their phone list.",
  body: "A patient needs a bed. We reach every residential care home in the area, then filter the results based on the patient’s needs, availability, and cost.",
  body2:
    "Your team is planning a day of outreach. We reach those homes first and build the route around the ones interested in meeting.",
  /** The client's own figures, which closes the provenance question these rows
   *  carried for weeks. Row count and values are data: the component draws
   *  whatever is here. `result` marks the rows that land on the customer's
   *  team, from viable options onward.
   */
  funnel: {
    rows: [
      { value: 200, label: "In the search grid" },
      { value: 60, label: "Qualified for outreach" },
      { value: 20, label: "Replied" },
      /* Her list had "viable options" and "pre-tour" as two rows of ten. Two
         bars of identical length read as a drawing error, when the point is
         the opposite: nothing is lost here, every viable option is visited.
         One row, both labels, and the flat step said out loud. */
      { value: 10, label: "Viable options", also: "every one pre-toured", result: true },
      { value: 3, label: "Family tour", result: true },
      { value: 1, label: "Family’s perfect fit", result: true },
    ],
    /** "Phoenix area" came off: these are the client's numbers now, and nothing
     *  says they come from one Phoenix search. */
    caption: "One placement search.",
    /** Read in place of the bars. It lives here, not in the component, because
     *  it is copy: it said "radius" for two months and no copy pass saw it. */
    label: "How two hundred residential care homes in one search become one family’s perfect fit.",
  },
};

/* --------------------------------------------------- Marketing visits. */

export const marketingVisits = {
  /** "Cold call" contains the word the channel rule bans. It is an idiom for
   *  the old way of doing it, the same kind of exception as the phone list
   *  heading, and it is the client's line. */
  heading: "Marketing visits start with an invitation, not a cold call.",
  body: "Pick a morning and an area. We contact the homes first and build the route around those interested in meeting, with contact details and inspection history for each.",
  note: "Family tours work the same way. Your team pre-tours the viable options first, then families tour the homes they want to see.",
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
  heading: "Why homes say yes to a marketing visit",
  body: "The right message warms up the introduction before your team ever walks through the door. Instead of asking for a meeting cold, we lead with something residential care homes value: the opportunity for future placements without placement agent fees.",
  /** ElderLogic's own outreach message, in the client's words. It was carried
   *  for weeks as a home's testimonial awaiting permission to publish. It is
   *  not one and never was: it is what we lead with. So it is set as our
   *  message, with no endorsement styling and no attribution to a home. */
  message:
    "“We do our own placements, saving you from paying any placement agent fees. Can’t wait to meet!”",
  hook: "The hook that turns a cold visit into a warm introduction.",
};

/* --------------------------------------------------------- The flow. */

export const walkthrough = {
  heading: "One placement, start to finish",
  /** Seven steps, the client's. The arc now ends on the family, not on a
   *  record being updated, and the list is built to let that land. */
  steps: [
    { icon: "assessment-form", title: "Assessment", line: "One form, mobile or desktop." },
    { icon: "placement-search", title: "Search", line: "Every residential care home in the area." },
    {
      icon: "outreach-log",
      title: "Concierge Outreach Service",
      line: "We contact the homes and filter the responses.",
      /** The one step ElderLogic performs. Carried by a text label, not by
       *  colour alone, so it survives greyscale and a colour blind reader. */
      by: "ElderLogic",
    },
    { icon: "facilities", title: "Viable options", line: "Room, price, and resident needs confirmed." },
    { icon: "pre-tour", title: "Pre-tour", line: "Your team visits the viable options first." },
    { icon: "family-tour", title: "Family tour", line: "Your team tours selected homes with the family." },
    {
      icon: "move-in",
      title: "Family’s perfect fit",
      line: "The family chooses the home that’s right for them.",
      /** The end of the arc. Marked so the list can give it room. */
      end: true,
    },
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
  body: "Not just today’s license. The whole history, on every residential care home. Placing a patient into a home with open enforcement is real exposure, and this is where your team sees it.",
  /** Four fields and the source, in the client's words. Capacity came out with
   *  her rewrite, and Complaints before it. Four plus the source is five cells,
   *  so the source spans two columns wherever the grid has more than one: it is
   *  the cell that points outward, so it earns the room. */
  carries: [
    { field: "Licensing", gloss: "Current license and licensing history." },
    { field: "Inspections", gloss: "Every AZDHS inspection, with its date." },
    { field: "Violations", gloss: "What the state found, and when." },
    { field: "Enforcement", gloss: "Any enforcement action taken by the state." },
  ],
  access: {
    field: "The source",
    gloss: "AZDHS is one tap away at every stop, opening the state’s own record.",
  },
  ruleLine:
    "ElderLogic displays the state’s findings as reported. We don’t score or rank homes. Your team reviews the record and decides.",
  /** The record on a home, in the product. Every identifying value is a demo
   *  value, which is why the caption says so: the home, the address, the number
   *  and the email are invented, and the licensing rows are illustrative. What
   *  is real is the shape of the card and where it sits in the workflow. */
  image: {
    src: "/product/home-record.jpg",
    alt: "A residential care home selected on the ElderLogic map, with its record open: license, inspections and open enforcement, beside the contact details.",
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
  /** Each group is a panel with its own branded icon and a count, so the
   *  section reads as three things you get rather than one long list. On a
   *  phone the panels sit side by side in a row the reader swipes through at
   *  their own pace, with the next one always showing at the edge.
   *
   *  Groups one and two are the client's, verbatim. The third is kept although
   *  her review rewrote only two: both its lines are core on her own pricing
   *  sheet, and dropping it would leave marketing visits out of the inventory
   *  altogether. Visit verification came out of it: on the pricing sheet it is
   *  a paid add-on, and it now lives in the reporting section. */
  groups: [
    {
      heading: "Every residential care home in Arizona",
      icon: "facilities",
      items: [
        "A statewide database, continuously maintained and updated",
        "Owner and licensing information from AZDHS",
        /* Settled 19 September: "Good call. Vague." Her pricing sheet's line
           replaces "Mobile numbers researched and validated by ElderLogic",
           which named the outreach channel to any competitor reading the
           page, against her own standing rule. The ampersand becomes "and" to
           match the rest of the list. */
        "Community contact information and historical AZDHS data",
        "Inspection, violation, and enforcement history",
      ],
    },
    {
      /* Her own review gave two groups, not three. Marketing visits had been
         split out as a third, which left a panel carrying two lines beside
         panels carrying four and five: it read as a section we ran out of
         material for. Her heading, widened by three words to cover both
         halves of the day, and the two marketing lines joined the list. */
      heading: "Placement and marketing visits, start to finish",
      icon: "placement-search",
      items: [
        "Client assessment and placement workflow",
        "Client records in one place, without the clutter of a CRM",
        "Search every residential care home in the area",
        "Concierge Outreach Service to gather availability, pricing, and details",
        "Viable options and pre-tour planning in one place",
        "Marketing visit planning and routing",
        "Interactive mapping and custom route creation",
      ],
    },
  ],
  /** Read by a screen reader as the swipeable row's name. */
  railLabel: "What your team gets, by area",
  note: "ElderLogic does not replace your EMR or your CRM. It runs alongside them.",
};

/* ---------------------------------------------------------- Reporting. */

/**
 * Optional, and a thing leadership asks for. The client's heading and her three
 * blocks. Written as content, not as a list of priced add-ons: her pricing sheet
 * sells two and splits verification differently, which does not matter here.
 * No pricing, which is the site's standing rule and does not bend for this
 * section. Not in the top nav, by her instruction.
 */
export const reporting = {
  heading: "Need more visibility? Add reporting.",
  /** Replaces the "Optional" pill, which was a label doing a sentence's job.
   *  It also says the thing that makes three short reports feel deliberate
   *  rather than thin: the work is already recorded, this is the showing. */
  lede:
    "Every placement and every visit is already recorded as your team works. Reporting is how you show it to the people who ask.",
  /** Each report is written as the question it answers, in the words the
   *  person asking uses. The question is the content; the name is the label
   *  on the thing they buy. Her three names, unchanged. */
  blocks: [
    {
      ask: "How many placements did we make, and how long did each one take?",
      title: "Placement reporting",
      line: "Activity and outcomes, from assessment through to the family’s perfect fit.",
    },
    {
      ask: "Which homes did our team visit, and how much of the plan got done?",
      title: "Marketing visit reporting",
      line: "Planned against completed marketing visits, and the field activity behind them.",
    },
    {
      ask: "Did the pre-tour happen before the family toured?",
      title: "Pre-tour visit verification and reporting",
      line: "Planned against completed pre-tour visits, with verification of the visit itself.",
    },
  ],
};

/* ------------------------------------------------------------- Close. */

export const close = {
  /** "See your own territory" is gone: it offered to open the map on a named
   *  area, and that is not something the product does yet. The invitation now
   *  promises only a walkthrough of what the page has already shown. */
  heading: "See one placement, from assessment to the family’s perfect fit.",
  body: "Book a demo and we will walk your team through a placement and a marketing visit day in ElderLogic, and answer what your team needs to know.",
  cta: { label: "Book a demo", href: "/#book" },
  secondary: { label: "Read the FAQ", href: "/faq" },
  /** The form is the booking, so it carries the site's one CTA wording and
   *  says what happens next. The empty white calendar card that used to sit
   *  here was the largest thing in the closing argument and it was blank.
   *  When the scheduling account exists the calendar takes this column and
   *  the form moves under it. */
  formHeading: "Tell us where to reach you",
  formIntro: "We will come back with a time. We read these ourselves.",
  fields: [
    { name: "name", label: "Name", type: "text" },
    { name: "organisation", label: "Organisation", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "message", label: "Message", type: "textarea" },
  ],
  submit: "Book a demo",
};

/* --------------------------------------------------------------- FAQ. */

export const questions = {
  heading: "FAQ",
  /** The browser tab and the search result, which "FAQ" alone tells nobody
   *  anything about. The brand is appended by the layout's title template. */
  metaTitle: "Questions about placement and marketing visits",
  backLink: { label: "Back to the site", href: "/" },
  metaDescription:
    "Answers about ElderLogic placement and marketing visit software: coverage in Arizona, contacting homes, what it replaces, and how it works on a phone.",
  /** Sits under the FAQ list, above the one call to action. It was hardcoded
   *  into the FAQ page and never reached a copy review. */
  closeLead: "Still have a question?",
  closeBody:
    "Book a demo and ask it directly. We walk you through ElderLogic on the questions your team actually has.",
  /** Ordered the way a hospice executive actually asks them: what is it and
   *  where, then what my team has to do, then what is inside it, then how we
   *  begin. Five answers are the client's, verbatim, marked below. The rest are
   *  ours, and she has not seen them yet: they should go to her before launch.
   *  "Can we see which homes nobody has worked?" came out with the territory
   *  close: it offered the same feature, which the product does not have. */
  items: [
    {
      /* Client's. */
      q: "Which states do you cover?",
      a: "Arizona. We maintain statewide residential care home records, with active licensed homes available for search and outreach.",
    },
    {
      q: "Who on our team uses it?",
      a: "Liaisons and reps in the field, and whoever handles placement. It is built to be used on a phone between stops, not written up afterwards at a desk.",
    },
    {
      /* Client's, including the change to the question itself. */
      q: "Do we have to contact the homes ourselves for availability?",
      a: "Not initially. Our Concierge Outreach Service contacts the homes for you and gathers availability, pricing, and responses. Your team also has the contact information and can reach any home directly whenever needed.",
    },
    {
      q: "What does a marketing visit day look like?",
      a: "Pick a morning and an area. We contact the homes first and build the route around those interested in meeting, with contact details and inspection history for each. Family tours work the same way.",
    },
    {
      q: "What is in a residential care home’s record?",
      a: "Current license and licensing history, every AZDHS inspection with its date, what the state found and when, and any enforcement action taken by the state. AZDHS is one tap away at every stop, opening the state’s own record.",
    },
    {
      q: "How current is the record?",
      a: "The record belongs to the state. We keep ours current against it, and the state’s own record is always one tap away, so you are never taking our word for it.",
    },
    {
      /* Client's. */
      q: "Do you rate the homes?",
      a: "No. The State of Arizona reports its findings, and ElderLogic displays them as reported. We don’t score or rank homes. Your team reviews the information and decides.",
    },
    {
      q: "What is visit verification?",
      a: "It confirms your team visited the homes they logged, so the visits you report on are the visits that happened. It comes with the optional reporting.",
    },
    {
      /* Client's, including the question. The em dash in her answer is a
         comma here: the site carries no dashes. */
      q: "Does it replace our existing CRM or EMR?",
      a: "No. ElderLogic is purpose-built for placement and marketing visits, work your EMR or CRM wasn’t designed to handle.",
    },
    {
      /* Client's. */
      q: "Does it work on a phone?",
      a: "Absolutely. Your team works in the field, so ElderLogic goes with them. Assessments, home records, search results, and routes are all accessible right from their phone.",
    },
    {
      q: "How do we start?",
      a: "Book a demo. We walk your team through a placement and a marketing visit day in ElderLogic, and answer what you need to know before anything else.",
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
  /** The client's line, word for word the close of her pricing sheet, so the
   *  site and the sheet now say the same thing. Also the meta description. */
  tagline:
    "ElderLogic Concierge provides hospice teams with the tools, data and support to simplify senior living placement and grow community relationships.",
  columns: [
    {
      heading: "Product",
      links: [
        { label: "How It Works", href: "/#walkthrough" },
        { label: "Marketing Visits", href: "/#marketing-visits" },
        { label: "Inspection Records", href: "/#record" },
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
  baseNote: "Serving hospice teams across Arizona.",
};
