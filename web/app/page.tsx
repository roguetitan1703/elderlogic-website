import {
  inventory,
  hero,
  concierge,
  meeting,
  territory,
  marketingVisits,
  record,
  close,
  walkthrough,
  reporting,
} from "@/content/copy";
import Inventory from "@/components/Inventory";
import Route from "@/components/Route";
import ContactForm from "@/components/ContactForm";
import Picture from "@/components/Picture";
import Reveal from "@/components/Reveal";
import Shot from "@/components/Shot";
import Funnel from "@/components/Funnel";
import CoverageField from "@/components/CoverageField";
import HeroField from "@/components/HeroField";
import HomeCard from "@/components/HomeCard";

/**
 * One alignment discipline: everything sits on the left grid. Rhythm comes from
 * column ratio, background and media: never from switching to centred.
 *
 * Section intros use the same asymmetry throughout: heading left, body right.
 *
 * The header and footer are rendered by the layout, not here, so a route added
 * later cannot ship without them.
 */
export default function Home() {
  return (
    <main id="top" tabIndex={-1}>
      {/* Hero: the territory as ground. Same map as Coverage, scrimmed back
          and unlabelled; Coverage shows it plainly. */}
      <section className="hero">
        <div className="hero__inner">
          <div className="hero__copy">
            <h1 className="display-1 hero__heading">{hero.heading}</h1>
            <p className="lead hero__sub">{hero.sub}</p>
            <div className="actions">
              <a className="btn btn--primary" href={hero.primary.href}>
                {hero.primary.label}
              </a>
              <a className="arrow-link" href={hero.secondary.href}>
                {hero.secondary.label} <span aria-hidden="true">&#8594;</span>
              </a>
            </div>
          </div>

          {/* The atom, in the hero: the page opens on the thing it delivers. */}
          <div className="hero__card">
            <HomeCard />
          </div>
        </div>
        <div className="hero__media">
          <HeroField />
        </div>
      </section>

      {/* Coverage: the problem, then the field. */}
      <section className="section" id="territory">
        <div className="container">
          <Reveal className="intro">
            <h2 className="display-2 intro__heading">{territory.heading}</h2>
            <p className="lead intro__body">{territory.body}</p>
          </Reveal>

          <Reveal>
            <CoverageField />
          </Reveal>

          <p className="caption source-note mono">{territory.caption}</p>
        </div>
      </section>

      {/* The outreach: what arrives, with the funnel carrying the effort. */}
      <section className="section surface-paper" id="concierge">
        <div className="container">
          <div className="split">
            <Reveal className="stack">
              <h2 className="display-2 intro__heading">{concierge.heading}</h2>
              <p className="lead measure">{concierge.body}</p>
              <p className="lead measure">{concierge.body2}</p>
            </Reveal>
            <Reveal>
              <Funnel active />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Marketing visits: copy left, the screen right. White, not paper: paper
          appears exactly twice on this page, on the outreach section and the
          close, and it was adjacent to outreach here so the two read as one. */}
      <section className="section" id="marketing-visits">
        <div className="container">
          <div className="split split--wide-media">
            <Reveal className="stack">
              <h2 className="display-2 intro__heading">{marketingVisits.heading}</h2>
              <p className="lead measure">{marketingVisits.body}</p>
              <p className="step__note">{marketingVisits.note}</p>
            </Reveal>
            <Reveal className="pair">
              <figure className="pair__item">
                <Shot
                  src={marketingVisits.image.src}
                  alt={marketingVisits.image.alt}
                  width={marketingVisits.image.width}
                  height={marketingVisits.image.height}
                  kind="phone"
                  /* Two of these side by side, so half the column each. */
                  sizes="(max-width: 899px) 46vw, 16rem"
                />
                <figcaption className="pair__cap">{marketingVisits.imageCaption}</figcaption>
              </figure>
              <figure className="pair__item">
                <Shot
                  src={marketingVisits.routeImage.src}
                  alt={marketingVisits.routeImage.alt}
                  width={marketingVisits.routeImage.width}
                  height={marketingVisits.routeImage.height}
                  kind="phone"
                  /* Two of these side by side, so half the column each. */
                  sizes="(max-width: 899px) 46vw, 16rem"
                />
                <figcaption className="pair__cap">{marketingVisits.routeCaption}</figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why a home takes the meeting. The line on the right is ElderLogic's
          own opening message, not a home's testimonial, so it is set as ours:
          no blockquote, no attribution, no endorsement styling. */}
      <section className="section section--ruled">
        <div className="container">
          <div className="split">
            <Reveal className="stack">
              <h2 className="display-2 intro__heading">{meeting.heading}</h2>
              <p className="lead measure">{meeting.body}</p>
            </Reveal>
            <Reveal className="opener">
              <p className="opener__text">{meeting.message}</p>
              <p className="opener__hook">{meeting.hook}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* One placement, start to finish. */}
      <section className="section section--ruled" id="walkthrough">
        <div className="container">
          <Reveal className="intro">
            <h2 className="display-2 intro__heading">{walkthrough.heading}</h2>
          </Reveal>
          <Route />
        </div>
      </section>

      {/* The record: the page's one dark weight. Intro on the grid, then the
          record's own shape across the full width beneath it. It used to be
          three paragraphs about a record the reader never saw the shape of. */}
      <section className="section surface-dark" id="record">
        <div className="container">
          <Reveal className="intro">
            <h2 className="display-2 intro__heading">{record.heading}</h2>
            <p className="lead intro__body">{record.body}</p>
          </Reveal>

          <Reveal>
            <ul className="rec">
              {record.carries.map((row) => (
                <li key={row.field} className="rec__cell">
                  <h3 className="rec__field">{row.field}</h3>
                  <p className="rec__gloss">{row.gloss}</p>
                </li>
              ))}
              <li className="rec__cell rec__cell--source">
                <h3 className="rec__field">{record.access.field}</h3>
                <p className="rec__gloss">{record.access.gloss}</p>
              </li>
            </ul>
            <p className="record__rule rec__note">{record.ruleLine}</p>
          </Reveal>

          <Reveal>
            <figure className="exhibit exhibit--dark">
              {/* Below 760px the wide crop renders the card at about 180px
                  across and none of it can be read, so the phone gets a crop
                  of the same file framed on the card. Two separate images, so
                  each gets its own format and width ladder. */}
              <div className="exhibit__wide">
                <Picture
                  src={record.image.src}
                  alt={record.image.alt}
                  sizes="(max-width: 1100px) 92vw, 1000px"
                />
              </div>
              <div className="exhibit__narrow">
                <Picture
                  src={record.image.narrowSrc}
                  alt={record.image.alt}
                  sizes="92vw"
                />
              </div>
              <figcaption className="exhibit__cap mono">{record.caption}</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* What is actually being bought, as panels a reader can take in at
          their own pace. Side by side on a wide screen; one swipeable row on
          a phone, with the next panel always in view. */}
      <section className="section surface-subtle" id="inventory">
        <div className="container">
          <Reveal className="intro">
            <h2 className="display-2 intro__heading">{inventory.heading}</h2>
          </Reveal>
          <Reveal>
            <Inventory />
            <p className="inv__note">{inventory.note}</p>
          </Reveal>
        </div>
      </section>

      {/* Reporting: the thing leadership asks about. Not in the top nav, by
          the client's instruction. No pricing: this is content, not a list of
          priced add-ons.

          Deliberately not a row of three cards. The section above it is
          already panels, and a second identical grid made the foot of the
          page read as one long card wall. This is a ledger instead: the
          question a leader actually asks, set as the content, with the report
          that answers it named underneath. Hairlines, no boxes. */}
      <section className="section surface-paper" id="reporting">
        <div className="container">
          <div className="split">
            <Reveal className="stack">
              <h2 className="display-2 reporting__heading">{reporting.heading}</h2>
              <p className="lead measure">{reporting.lede}</p>
            </Reveal>
            <Reveal>
              <ul className="reports">
                {reporting.blocks.map((block) => (
                  <li key={block.title} className="reports__item">
                    <p className="reports__ask">{block.ask}</p>
                    <h3 className="reports__title">{block.title}</h3>
                    <p className="reports__line">{block.line}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Close: the one place on the page a reader is asked to act, so it is
          the strongest block on it. A dark panel that bookends the hero.

          One panel, one card. What used to sit on the right was a white card
          inside this card, 450px of it, saying the calendar was not connected:
          the largest single element in the closing argument and it was blank.
          Underneath, behind a rule and a disclosure, sat the form that is the
          only thing here that actually works. They have swapped places. The
          form is the booking now, it carries the site's one CTA wording, and
          nothing hangs off the bottom of the panel.

          When the scheduling account exists the calendar takes this column and
          the form moves beneath it. */}
      <section className="section surface-paper" id="book">
        <div className="container">
          <div className="cta">
            <div className="cta__ground" aria-hidden="true" />
            <Reveal className="cta__copy">
              <h2 className="display-2 cta__heading">{close.heading}</h2>
              <p className="lead cta__body">{close.body}</p>
              <a className="arrow-link cta__link" href={close.secondary.href}>
                {close.secondary.label} <span aria-hidden="true">&#8594;</span>
              </a>
            </Reveal>

            <Reveal className="cta__book">
              <h3 className="cta__form-heading">{close.formHeading}</h3>
              <p className="cta__form-intro">{close.formIntro}</p>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
