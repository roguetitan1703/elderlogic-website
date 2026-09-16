import {
  hero,
  concierge,
  meeting,
  territory,
  marketingVisits,
  record,
  inventory,
  close,
  walkthrough,
} from "@/content/copy";
import Route from "@/components/Route";
import ContactForm from "@/components/ContactForm";
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
                />
                <figcaption className="pair__cap">{marketingVisits.routeCaption}</figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why a home takes the meeting: the payoff, with the home's own words. */}
      <section className="section section--ruled">
        <div className="container">
          <div className="split">
            <Reveal className="stack">
              <h2 className="display-2 intro__heading">{meeting.heading}</h2>
              <p className="lead measure">{meeting.body}</p>
            </Reveal>
            <Reveal className="testimony">
              <blockquote className="testimony__text">{meeting.quote}</blockquote>
              <p className="testimony__attr">{meeting.attribution}</p>
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
              <picture>
                {/* Below 760px the wide crop renders the card at about 180px
                    across and none of it can be read, so the phone gets a crop
                    of the same file framed on the card. */}
                <source
                  media="(max-width: 760px)"
                  srcSet={record.image.narrowSrc}
                  width={record.image.narrowWidth}
                  height={record.image.narrowHeight}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={record.image.src}
                  alt={record.image.alt}
                  width={record.image.width}
                  height={record.image.height}
                  loading="lazy"
                  decoding="async"
                />
              </picture>
              <figcaption className="exhibit__cap mono">{record.caption}</figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* What is actually being bought. A ruled index, never an icon grid. */}
      <section className="section" id="inventory">
        <div className="container">
          <Reveal className="intro">
            <h2 className="display-2 intro__heading">{inventory.heading}</h2>
          </Reveal>
          <Reveal>
            <div className="spec">
              {inventory.groups.map((group) => (
                <section key={group.heading} className="spec__group">
                  <h3 className="spec__heading">{group.heading}</h3>
                  <ul className="spec__list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
            <p className="caption inv__note">{inventory.note}</p>
          </Reveal>
        </div>
      </section>

      {/* Close: one path. Booking is the action; the form is a fallback for
          someone who will not pick a time, folded away until they ask for it.
          <details> so it works with no script. */}
      <section className="section surface-paper" id="book">
        <div className="container">
          <div className="split">
            <Reveal className="stack close__intro">
              <h2 className="display-2 intro__heading">{close.heading}</h2>
              <p className="lead measure">{close.body}</p>
              <a className="btn btn--primary btn--lg" href="#scheduler">
                {close.cta.label}
              </a>
              <a className="arrow-link" href={close.secondary.href}>
                {close.secondary.label} <span aria-hidden="true">&#8594;</span>
              </a>
            </Reveal>

            <Reveal className="stack">
              <div
                className="placeholder"
                id="scheduler"
                role="img"
                aria-label={close.schedulerLabel}
              >
                <span>{close.schedulerPlaceholder}</span>
              </div>
            </Reveal>
          </div>

          {/* The fallback sits under the split, not inside its right column.
              Folded away it is one line either way, but opened inside the
              column it squeezed four fields into half the page while the other
              half sat empty. Full width, and the fields pair up. */}
          <details className="fallback">
            <summary className="fallback__summary">{close.fallbackToggle}</summary>
            <div className="fallback__body">
              <p className="caption">{close.fallbackIntro}</p>
              <ContactForm />
            </div>
          </details>
        </div>
      </section>
    </main>
  );
}
