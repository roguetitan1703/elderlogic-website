import type { Metadata } from "next";
import { questions, close } from "@/content/copy";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "The things a hospice team asks before the first call: coverage, contacting homes, what it replaces, and how it works on a phone.",
  openGraph: { title: "FAQ", description: "The things a hospice team asks before the first call: coverage, contacting homes, what it replaces, and how it works on a phone.", url: "/faq" },
  alternates: { canonical: "/faq" },
};

export default function Questions() {
  return (
    <>
      <SiteHeader />

      <main id="top">
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
                <Reveal key={item.q} as="div" className="qa-list__item">
                  <dt className="qa-list__q">{item.q}</dt>
                  <dd className="qa-list__a">{item.a}</dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        <section className="section surface-paper">
          <div className="container stack">
            <h2 className="display-3">See it on your own territory.</h2>
            <p className="lead measure">
              We open the map on the area your liaisons cover and you see what is in it.
            </p>
            <div>
              <a className="btn btn--primary" href="/#book">
                {close.cta.label}
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
