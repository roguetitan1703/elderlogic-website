import {
  hero,
  concierge,
  strip,
  meeting,
  territory,
  marketingVisits,
  record,
  close,
  walkthrough,
} from "@/content/copy";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Route from "@/components/Route";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import Shot from "@/components/Shot";
import CoverageField from "@/components/CoverageField";
import Funnel from "@/components/Funnel";
import HeroField from "@/components/HeroField";

/**
 * One alignment discipline: everything sits on the left grid. Rhythm comes from
 * column ratio, background and media: never from switching to centred.
 *
 * Section intros use the same asymmetry throughout: heading left, body right.
 */
export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        {/* Hero: the territory as ground. Same data as Coverage, zoomed out and
            unlabelled; Coverage zooms in and names things. */}
        <section className="hero">
          <div className="hero__inner">
            <div className="hero__copy">
              <span className="eyebrow">{hero.eyebrow}</span>
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
          </div>
          <div className="hero__media">
            <HeroField />
          </div>
        </section>

        {/* What it is: three columns, orientation for a cold reader. */}
        <section className="section--tight">
          <div className="container">
            <span className="eyebrow">{strip.rule.label}</span>
            <div className="strip">
              {strip.items.map((item) => (
                <div key={item.label} className="strip__item">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="strip__icon"
                    src={`/icons/deep-blue/${item.icon}.svg`}
                    alt=""
                    aria-hidden="true"
                    width={26}
                    height={26}
                  />
                  <h2 className="strip__label">{item.label}</h2>
                  <p className="body-sm">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage: the problem, then the field. Container width, like everything else. */}
        <section className="section" id="territory">
          <div className="container">
            <span className="eyebrow">{territory.eyebrow}</span>
            <Reveal className="intro">
              <h2 className="display-2 intro__heading">{territory.heading}</h2>
              <p className="lead intro__body">{territory.body}</p>
            </Reveal>

            <Reveal>
              <CoverageField />
            </Reveal>

            <p className="caption source-note mono">
              {territory.caption} {territory.source}
            </p>

            {/* With no sourced figures the two-column split would leave a dead
                right column, so the closing line stands on its own. */}
            {territory.stats.length > 0 ? (
              <Reveal className="intro territory__figures">
                <p className="lead intro__heading">{territory.closing}</p>
                <div className="figures">
                  {territory.stats.map((s, i) => (
                    <div
                      key={s.value}
                      className={`figure-stat ${i === 0 ? "figure-stat--lead" : "figure-stat--quiet"}`}
                    >
                      <div className="figure-stat__value">{s.value}</div>
                      <p className="figure-stat__label">{s.label}</p>
                      {s.note && <p className="figure-stat__note">{s.note}</p>}
                    </div>
                  ))}
                </div>
              </Reveal>
            ) : (
              <Reveal className="territory__figures">
                <p className="lead measure">{territory.closing}</p>
              </Reveal>
            )}
          </div>
        </section>

        {/* The concierge: the work the fee pays for, in active voice. The
            funnel lives here rather than inside the walkthrough: it is this
            section's argument, and behind a stepper nobody saw it. */}
        <section className="section surface-paper" id="concierge">
          <div className="container">
            <span className="eyebrow">{concierge.eyebrow}</span>
            <div className="split">
              <Reveal className="stack">
                <h2 className="display-2 intro__heading">{concierge.heading}</h2>
                <p className="lead measure">{concierge.body}</p>
                <p className="testimony__text">{concierge.aside}</p>
              </Reveal>
              <Reveal>
                <Funnel active />
                <p className="caption mono">{concierge.rule.meta}</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Marketing visits: copy left, the screen right. */}
        <section className="section surface-paper" id="marketing-visits">
          <div className="container">
            <span className="eyebrow">{marketingVisits.eyebrow}</span>
            <div className="split split--wide-media">
              <Reveal className="stack">
                <h2 className="display-2 intro__heading">{marketingVisits.heading}</h2>
                <p className="lead measure">{marketingVisits.body}</p>
                <p className="step__note">{marketingVisits.note}</p>
              </Reveal>
              <Reveal>
                <Shot
                  src={marketingVisits.image.src}
                  alt={marketingVisits.image.alt}
                  kind="phone"
                />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Why a home takes the meeting: the payoff, with the home's own words. */}
        <section className="section">
          <div className="container">
            <span className="eyebrow">Why a home takes the meeting</span>
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

        {/* One placement, as a route: stops on a snapping track. */}
        <section className="section" id="walkthrough">
          <div className="container">
            <Reveal className="intro">
              <h2 className="display-2 intro__heading">{walkthrough.heading}</h2>
            </Reveal>
            <Route />
          </div>
        </section>

        {/* The record: the page's one dark weight. */}
        <section className="section surface-dark" id="record">
          <div className="container">
            <span className="eyebrow">{record.eyebrow}</span>
            <div className="split">
              <Reveal className="stack">
                <h2 className="display-2 intro__heading">{record.heading}</h2>
                <p className="lead measure record__body">{record.body}</p>
                <p className="record__rule">{record.ruleLine}</p>
              </Reveal>
              <Reveal>
                <dl className="record-list">
                  {record.rows.map((row) => (
                    <div key={row.label} className="record-list__row">
                      <dt>{row.label}</dt>
                      <dd className="mono">{row.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="record__source mono">{record.rule.meta}</p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Close: one path. Booking is the action; the form is a fallback for
            someone who will not pick a time, folded away until they ask for it.
            <details> so it works with no script. */}
        <section className="section surface-paper" id="book">
          <div className="container">
            <span className="eyebrow">{close.rule.label}</span>
            <div className="split">
              <Reveal className="stack close__intro">
                <h2 className="display-2 intro__heading">{close.heading}</h2>
                <p className="lead measure">{close.body}</p>
                <a className="btn btn--primary btn--lg" href="#scheduler">
                  {close.cta.label}
                </a>
                <a className="arrow-link" href="/faq">
                  Read the FAQ <span aria-hidden="true">&#8594;</span>
                </a>
              </Reveal>

              <Reveal className="stack">
                <div
                  className="placeholder"
                  id="scheduler"
                  role="img"
                  aria-label="Scheduling calendar, embedded"
                >
                  <span>Scheduling embed</span>
                </div>

                <details className="fallback">
                  <summary className="fallback__summary">{close.fallbackToggle}</summary>
                  <div className="fallback__body">
                    <p className="caption">{close.fallbackIntro}</p>
                    <ContactForm />
                  </div>
                </details>
              </Reveal>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </>
  );
}
