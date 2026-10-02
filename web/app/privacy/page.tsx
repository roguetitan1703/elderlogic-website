import type { Metadata } from "next";
import { privacy } from "@/content/privacy";
import { pageMetadata } from "@/content/site";

/**
 * Legal copy is supplied text and its wording is never edited here. Making an
 * address clickable is not editing it: the characters are identical, the
 * paragraph is split on them and the same string is put back inside an anchor.
 * A policy that tells somebody to write to an address, and then makes them
 * select and copy it by hand on a phone, is a policy nobody writes to.
 */
const LINKABLE = /([\w.+-]+@[\w-]+\.[\w.]+[\w]|https?:\/\/[^\s,)]+[^\s,.)])/g;

function linkify(text: string) {
  return text.split(LINKABLE).map((part, i) => {
    if (i % 2 === 0) return part;
    const href = part.includes("@") ? `mailto:${part}` : part;
    return (
      <a key={i} className="legal__link" href={href}>
        {part}
      </a>
    );
  });
}

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How ElderLogic collects, uses and shares information through its sites and app.",
  path: "/privacy",
});

export default function Privacy() {
  return (
    <>

      <main id="top" tabIndex={-1}>
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
                      {linkify(para)}
                    </p>
                  ))}
                </section>
              ))}
            </article>
          </div>
        </section>
      </main>

    </>
  );
}
