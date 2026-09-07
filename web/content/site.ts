/**
 * The public origin, resolved per deployment.
 *
 * Open Graph images must be absolute URLs. If this is wrong, the share card
 * silently fails to render in Slack, LinkedIn and iMessage — they fetch the
 * URL we print, not the one we are served from. So on a preview it has to be
 * the preview's own host, not the eventual production domain.
 *
 * Order:
 *   1. NEXT_PUBLIC_SITE_URL  — set it and nothing else is consulted
 *   2. Vercel production     — the project's real domain
 *   3. Vercel preview        — this deployment's own generated host
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
 * Only the real production deployment should be indexable. A preview on a
 * temporary host must never be crawled — it competes with the real site and
 * puts an unfinished page in front of search users.
 */
export const isProduction =
  process.env.VERCEL_ENV === "production" ||
  (!process.env.VERCEL_ENV && !!process.env.NEXT_PUBLIC_SITE_URL);
