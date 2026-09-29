/** @type {import('next').NextConfig} */

/**
 * What the old Wix site published, and where each of those URLs goes now.
 *
 * Taken from the Wix sitemap, which is the only record of what was actually
 * indexed. Nothing is invented: a path that was not in that sitemap is not
 * here, and falls through to the 404 page as it should.
 *
 * The two "blank" paths were Wix's own placeholder pages. They had no content
 * to preserve, so they go to the top of the site rather than to a section that
 * would misrepresent what the visitor clicked.
 *
 * These are 301 and not Next's default 308. Both are permanent and Google
 * treats them alike, but 301 is the one every crawler, proxy and link checker
 * has understood for twenty five years, and this runs once per old link.
 */
const wixRedirects = [
  ["/how-it-works", "/#walkthrough"],
  ["/routes-field-workflows", "/#marketing-visits"],
  ["/request-a-demo", "/#book"],
  ["/contact-us", "/#book"],
  ["/blank", "/"],
  ["/blank-1", "/"],
];

const nextConfig = {
  reactStrictMode: true,
  agentRules: false,
  /* Dev only. Without this, opening the site on 127.0.0.1 instead of localhost
     fails the HMR websocket handshake, React never hydrates, and every client
     component silently stops working: the header never takes its scrolled
     background, the menu button does nothing, and the page looks like a CSS
     bug that is not there. Same machine, same port, different hostname. */
  allowedDevOrigins: [
    "127.0.0.1",
    "localhost",
    "0.0.0.0",
  ],
  async redirects() {
    return wixRedirects.map(([source, destination]) => ({
      source,
      destination,
      statusCode: 301,
    }));
  },
};
export default nextConfig;
