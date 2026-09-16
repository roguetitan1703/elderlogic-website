import type { Metadata } from "next";
import { questions, close } from "@/content/copy";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: questions.heading,
  description: questions.metaDescription,
  openGraph: {
    title: questions.heading,
    description: questions.metaDescription,
    url: "/faq",
  },
  alternates: { canonical: "/faq" },
};

export default function Questions() {
  return (
    <main id="top" tabIndex={-1}>
      <StructuredData page="faq" />
      <section className="section page-head">
        <div className="container stack">
          <h1 className="display-2">{questions.heading}</h1>
          <p className="lead measure">{questions.intro}</p>
        </div>
      </section>

      <section className="section--tight">
        <div className="container">
          <dl className="qa-list">
            {questions.items.map((item) => (
              <div key={item.q} className="qa-list__item">
                <dt className="qa-list__q">{item.q}</dt>
                <dd className="qa-list__a">{item.a}</dd>
              </div>
            ))}
          </dl>
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
