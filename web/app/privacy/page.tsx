import type { Metadata } from "next";
import { privacy } from "@/content/privacy";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How ElderLogic collects, uses and shares information through its sites and app.",
  openGraph: { title: "Privacy Policy", description: "How ElderLogic collects, uses and shares information through its sites and app.", url: "/privacy" },
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        <section className="section page-head">
          <div className="container">
            <h1 className="display-3">{privacy.title}</h1>
          </div>
        </section>

        <section className="section--tight">
          <div className="container">
            <article className="legal">
              {privacy.sections.map((section, i) => (
                <section key={section.heading ?? `intro-${i}`}>
                  {section.heading && <h2 className="legal__h">{section.heading}</h2>}
                  {section.paras.map((para, j) => (
                    <p key={j} className="legal__p">
                      {para}
                    </p>
                  ))}
                </section>
              ))}
            </article>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
