import type { Metadata } from "next";
import { questions, close } from "@/content/copy";
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

      <section className="section surface-paper">
        <div className="container stack">
          <h2 className="display-3">{questions.closeLead}</h2>
          <p className="lead measure">{questions.closeBody}</p>
          <div>
            <a className="btn btn--primary" href={close.cta.href}>
              {close.cta.label}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
