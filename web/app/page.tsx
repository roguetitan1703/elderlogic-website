import CallLog from "@/components/CallLog";
import ChartIndex from "@/components/ChartIndex";
import ContactForm from "@/components/ContactForm";
import RunSheet from "@/components/RunSheet";
import {
  calls,
  close,
  field,
  homes,
  identity,
  inField,
  inventory,
  chartIndex,
  nav,
  placement,
  problem,
  record,
  routedDay,
} from "@/content/copy";

/**
 * The home page, as a chart.
 *
 * Eleven sections, eleven different shapes. No two share a template. The
 * previous build was eight sections of heading left, paragraph under, media
 * right, which is what the client rejected and what must never come back.
 *
 * Three sections break the grammar and go full bleed: the map field, one phone
 * at life size, and the routed day. They fall at 3, 6 and 9, one every third
 * section, so the page has a pulse instead of a single volume.
 *
 * Section and topic coverage is decided in Content/section-coverage.md.
 */
export default function Home() {
  return (
    <main className="chart">
      <ChartIndex />
      {/* 1. Identity line. The chart header, not a hero. */}
      <section className="sheet id">
        <h1 className="id__head">{identity.heading}</h1>
        <p className="id__body">{identity.body}</p>
        <a className="btn btn--primary" href={nav.ctaHref}>
          {identity.cta}
        </a>
      </section>

      {/* 2. Presenting problem. A chart opens with the reason for admission. */}
      <section className="sheet say">
        <div className="sheet__inner">
          <h2 className="say__head">{problem.heading}</h2>
          <p className="say__body">{problem.body}</p>
        </div>
      </section>

      {/* 3. Full bleed. No copy sits on the image. */}
      <figure className="bleed bleed--wide">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/product/map.jpg" alt={field.alt} width={1672} height={941} />
        <figcaption className="bleed__cap">
          <span className="bleed__figure">{field.figure}</span>
          <span className="bleed__note">{field.figureNote}</span>
          <span className="bleed__text">{field.caption}</span>
        </figcaption>
      </figure>

      {/* 4. The attached exhibit: what the state holds on every home. */}
      <section className="sheet rec" id="record">
        <h2 className="rec__head">{record.heading}</h2>
        <p className="rec__body">{record.body}</p>
        <ul className="rec__list">
          {record.carries.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="rec__source">{record.source}</p>
        <p className="rec__rule">{record.rule}</p>
      </section>

      {/* 5. The run sheet. The one place numbers are earned. */}
      <section className="sheet sheet--tint plan" id="placement">
        <div className="sheet__inner">
          <h2 className="plan__head">{placement.heading}</h2>
          <RunSheet />
      
        </div>
      </section>

      {/* 6. Full bleed. One phone at the size it is actually used. */}
      <figure className="bleed bleed--life">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/product/phone-assessment-screen.png"
          alt={inField.alt}
          width={329}
          height={667}
          loading="lazy"
          decoding="async"
        />
        <figcaption className="bleed__cap bleed__cap--life">{inField.caption}</figcaption>
      </figure>

      {/* 7. The calls. The differentiator, with the funnel on it. */}
      <section className="sheet log" id="outreach">
        <h2 className="log__head">{calls.heading}</h2>
        <p className="log__body">{calls.body}</p>
        <CallLog />
      </section>

      {/* 8. The only voiced proof this project holds. */}
      <section className="sheet sheet--ink why">
        <div className="sheet__inner">
          <h2 className="why__head">{homes.heading}</h2>
          <p className="why__body">{homes.body}</p>
          <blockquote className="why__quote">
            <p>{homes.quote}</p>
            <cite>{homes.attribution}</cite>
          </blockquote>
      
        </div>
      </section>

      {/* 9. Full bleed. The routed day. */}
      <section className="sheet day" id="visits">
        <h2 className="day__head">{routedDay.heading}</h2>
        <p className="day__body">{routedDay.body}</p>
      </section>
      <figure className="bleed bleed--dark">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/product/route.png"
          alt={routedDay.alt}
          width={1272}
          height={1940}
          loading="lazy"
          decoding="async"
        />
        <figcaption className="bleed__cap bleed__cap--dark">{routedDay.caption}</figcaption>
      </figure>

      {/* 10. The inventory. Never an icon and caption grid. */}
      <section className="sheet sheet--tint inv" id="contents">
        <div className="sheet__inner">
          <h2 className="inv__head">{inventory.heading}</h2>
          <ul className="inv__list">
            {inventory.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="inv__note">{inventory.note}</p>
      
        </div>
      </section>

      {/* 11. The signature block. Contact is subordinate, never beside. */}
      <section className="sheet sign" id="book">
        <h2 className="sign__head">{close.heading}</h2>
        <p className="sign__body">{close.body}</p>
        <a className="btn btn--primary sign__cta" href="mailto:hello@elderlogic.app?subject=Demo">
          {close.cta}
        </a>

        <details className="sign__alt">
          <summary>{close.fallbackLead}</summary>
          <ContactForm />
        </details>
      </section>
    </main>
  );
}
