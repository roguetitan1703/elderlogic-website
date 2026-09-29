/**
 * The public origin, resolved per deployment.
 *
 * Open Graph images must be absolute URLs. If this is wrong, the share card
 * silently fails to render in Slack, LinkedIn and iMessage: they fetch the
 * URL we print, not the one we are served from. So on a preview it has to be
 * the preview's own host, not the eventual production domain.
 *
 * Order:
 *   1. NEXT_PUBLIC_SITE_URL : set it and nothing else is consulted
 *   2. Vercel production    : the project's real domain
 *   3. Vercel preview       : this deployment's own generated host
 *   4. local development
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit;

  const isProd = process.env.VERCEL_ENV === "production";
  const prodHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const deployHost = process.env.VERCEL_URL;

  if (isProd && prodHost) return `https://${prodHost}`;
  if (deployHost) return `https://${deployHost}`;

  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl().replace(/\/+$/, "");

/**
 * Indexable only once a real domain has been declared through
 * NEXT_PUBLIC_SITE_URL. Vercel marks a project's first deployment as
 * "production" even on a throwaway *.vercel.app host, so keying off VERCEL_ENV
 * alone would put a temporary URL into Google: competing with the real site
 * later and showing search users an unfinished page. Setting the variable is
 * the deliberate act that turns indexing on.
 */
export const isProduction =
  !!process.env.NEXT_PUBLIC_SITE_URL &&
  (process.env.VERCEL_ENV === "production" || !process.env.VERCEL_ENV);

/**
 * Metadata for a sub-page.
 *
 * Next does NOT deep-merge `openGraph`: a page that declares its own replaces
 * the root's outright. Both sub-pages declared a title, a description and a
 * url, and so silently dropped og:image, og:type, og:site_name and og:locale.
 * Posting the FAQ link anywhere showed no card at all. `twitter` was the
 * mirror image: neither page declared one, so both inherited the home page's
 * title and description and contradicted their own og tags in the same head.
 *
 * So neither block is written by hand any more. Give this a title, a
 * description and a path; it returns a complete, consistent pair.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  /** Leading slash, no origin. */
  path: string;
}) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website" as const,
      siteName: "ElderLogic",
      locale: "en_US",
      url: path,
      title,
      description,
      images: [
        {
          url: "/share-card.png",
          width: 1200,
          height: 630,
          alt: "ElderLogic. Placement and marketing visits for hospice teams.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: ["/share-card.png"],
    },
  };
}

/**
 * Which header the site ships with.
 *
 * "light" is the client's choice: a white bar carrying the full-colour logo.
 * "dark" is the header as originally built, which dissolves into the navy hero
 * and takes a surface only once you scroll. Both are kept so the two can still
 * be compared, but light is what the site ships.
 *
 * Either can be previewed on any build by adding ?header=light or ?header=dark
 * to the URL. The choice then holds for the rest of that browser tab. Once she
 * has decided, set it here and the query becomes irrelevant.
 */
export const headerTheme: "dark" | "light" = "light";

/**
 * The scheduling link the booking slot embeds.
 *
 * A Google Calendar appointment schedule. It frames without an X-Frame-Options
 * or frame-ancestors block, checked against the live endpoint, so it needs no
 * script of Google's to sit on the page.
 *
 * This is the client's own schedule, on the elderlogic.app Google profile, so
 * the dialog carries her name and not ours. Set it to "" and the slot falls
 * back to the placeholder note.
 */
export const schedulerUrl = "https://calendar.app.google/fMsMmLKX8JkLSGXP6";
