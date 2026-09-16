import { footer, meta, org, questions } from "@/content/copy";
import { siteUrl } from "@/content/site";

/**
 * JSON-LD, so a search engine knows what this site is rather than guessing.
 *
 * Three graphs, one script:
 *
 *   Organization       who is publishing, and how to reach them
 *   WebSite            the site itself, plus the routes worth grouping under
 *                      one result. Sitelinks cannot be forced, but a clean
 *                      sitemap, unambiguous titles and a declared navigation
 *                      are what Google builds them from
 *   SoftwareApplication  what the product actually is
 *
 * Every value comes from copy.ts. Nothing is asserted here that the page does
 * not already say: no pricing, no rating, and no claim about how the record is
 * assembled. Structured data is published copy, and it is quoted in results.
 *
 * `offers` is deliberately absent. Declaring a price, or `price: "0"`, would
 * both be false, and an aggregateRating would break the rule this product is
 * built on.
 */
export default function StructuredData({ page }: { page?: "faq" }) {
  const orgId = `${siteUrl}/#organization`;
  const siteId = `${siteUrl}/#website`;

  /* The FAQ route renders this a second time, inside a page that the layout
     has already described. Emitting the site nodes again there would put a
     duplicate Organization, WebSite and SoftwareApplication in the same
     document. The page variant adds its own node and points at the rest by id. */
  const graph: Record<string, unknown>[] = page
    ? []
    : [
    {
      "@type": "Organization",
      "@id": orgId,
      name: meta.name,
      legalName: org.legalName,
      url: siteUrl,
      logo: `${siteUrl}/icon-512.png`,
      image: `${siteUrl}/share-card.png`,
      description: footer.tagline,
      email: footer.email,
      telephone: footer.phone,
      areaServed: {
        "@type": "State",
        name: org.area,
      },
      address: {
        "@type": "PostalAddress",
        addressRegion: org.area,
        addressCountry: org.country,
      },
    },
    {
      "@type": "WebSite",
      "@id": siteId,
      url: siteUrl,
      name: meta.name,
      description: meta.description,
      publisher: { "@id": orgId },
      inLanguage: "en-US",
      hasPart: org.siteLinks.map((link) => ({
        "@type": "SiteNavigationElement",
        name: link.name,
        url: `${siteUrl}${link.url}`,
      })),
    },
    {
      "@type": "SoftwareApplication",
      name: meta.name,
      applicationCategory: org.category,
      operatingSystem: "Web, iOS, Android",
      url: siteUrl,
      publisher: { "@id": orgId },
      description: meta.description,
      audience: {
        "@type": "Audience",
        audienceType: org.audience,
        geographicArea: { "@type": "State", name: org.area },
      },
    },
  ];

  /* The FAQ page answers five questions in full on the page itself, which is
     exactly what FAQPage is for. Marking up questions that are not visible, or
     that are answered elsewhere, is what gets the markup ignored. */
  if (page === "faq") {
    graph.push({
      "@type": "FAQPage",
      "@id": `${siteUrl}/faq#faq`,
      url: `${siteUrl}/faq`,
      isPartOf: { "@id": siteId },
      mainEntity: questions.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    });
  }

  return (
    <script
      type="application/ld+json"
      // Values are our own copy, not user input, and JSON.stringify escapes
      // the quotes. The one character it does not escape that matters inside a
      // script element is "<", so close it off.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(
          /</g,
          "\\u003c"
        ),
      }}
    />
  );
}
