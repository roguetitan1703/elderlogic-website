import type { Metadata } from "next";
import { questions, close, footer } from "@/content/copy";
import Accordion from "@/components/Accordion";
import StructuredData from "@/components/StructuredData";
import { pageMetadata } from "@/content/site";

export const metadata: Metadata = pageMetadata({
  title: questions.metaTitle,
  description: questions.metaDescription,
  path: "/faq",
});

export default function Questions() {
  return (
    <main id="top" tabIndex={-1}>
      <StructuredData page="faq" />
      <section className="section page-head">
        <div className="container">
          <h1 className="display-2">{questions.heading}</h1>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <Accordion />
        </div>
      </section>

      {/* The foot of a page of answers. It was a heading, a line and a button
          stacked down the left of an otherwise empty band, which read as the
          page running out rather than as an offer. Two columns: the question
          on the left, what to do about it on the right, on one rule.

          A reader who has read every answer and still has a question wants to
          ask it. So the address sits beside the booking instead of being left
          to be hunted for in the footer. */}
      <section className="section surface-paper">
        <div className="container">
          <div className="ask">
            <div className="ask__copy">
              <h2 className="display-3 ask__heading">{questions.closeLead}</h2>
              <p className="lead ask__body">{questions.closeBody}</p>
            </div>
            <div className="ask__do">
              <a className="btn btn--primary btn--lg" href={close.cta.href}>
                {close.cta.label}
              </a>
              <p className="ask__alt">
                {questions.closeAlt}{" "}
                <a href={`mailto:${footer.email}`}>{footer.email}</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
