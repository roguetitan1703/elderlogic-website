import type { Metadata } from "next";
import { about, close, footer } from "@/content/copy";
import { BookButton } from "@/components/Booking";
import Picture from "@/components/Picture";
import StructuredData from "@/components/StructuredData";
import { pageMetadata } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: about.metaTitle,
  description: about.metaDescription,
  path: "/about",
});

/**
 * About.
 *
 * The page is one column, because it is one argument: these people did the
 * job, so they built the thing. A two column layout would invite a reader to
 * skim it, and skimming is exactly how a founder story stops working.
 *
 * Three sentences carry the whole piece, and the client wrote all three: "We
 * know this work because we've done it", "So we built it", and the closing
 * pair. They are set apart rather than left in the run of paragraphs, because
 * each is a turn in the argument rather than a continuation of one. Nothing
 * was rewritten to make that work; the layout is doing it.
 *
 * The photograph sits where she marked it, between the origin and what came of
 * it, which is the one place in the piece where a reader has just been told
 * "we" and has not yet been shown who that is.
 */
export default function About() {
  return (
    <main id="top" tabIndex={-1}>
      <StructuredData page="about" />

      <section className="section page-head">
        <div className="container">
          <span className="eyebrow">{about.eyebrow}</span>
          <h1 className="display-2 about__heading">{about.heading}</h1>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <div className="about">
            <p className="lead about__lede">{about.lede}</p>

            <p className="about__claim">{about.claim}</p>

            <p className="about__p">{about.origin}</p>

            <p className="about__claim">{about.built}</p>
            <p className="about__p">{about.became}</p>
          </div>

          {/* A sibling of the text rather than a child of it, so it can run
              wider than the measure without being pushed past the container on
              a phone. Text stays at a readable column; the photograph is the
              one thing allowed past it. */}
          <figure className="about__figure">
            <Picture
              src={about.photo.src}
              alt={about.photo.alt}
              sizes="(max-width: 899px) 92vw, 56rem"
            />
            <figcaption className="about__cap mono">{about.photo.caption}</figcaption>
          </figure>

          <div className="about">
            {about.sections.map((section) => (
              <section key={section.heading} className="about__block">
                <h2 className="display-3 about__sub">{section.heading}</h2>
                {section.paras.map((para, i) => (
                  <p key={i} className="about__p">
                    {para}
                  </p>
                ))}
              </section>
            ))}

            <p className="about__close">
              {about.closing.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
          </div>
        </div>
      </section>

      {/* The same close the FAQ page uses. A reader who has just been told
          these people have done the job is the likeliest reader on the site to
          want to meet them. */}
      <section className="section surface-paper">
        <div className="container">
          <div className="ask">
            <div className="ask__copy">
              <h2 className="display-3 ask__heading">{close.heading}</h2>
              <p className="lead ask__body">{close.body}</p>
            </div>
            <div className="ask__do">
              <BookButton className="btn btn--primary btn--lg" where="about-page">
                {close.cta.label}
              </BookButton>
              <p className="ask__alt">
                Rather send a note first?{" "}
                <a href={`mailto:${footer.email}`}>{footer.email}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
