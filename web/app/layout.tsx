import fs from "node:fs";
import path from "node:path";
import type { Metadata, Viewport } from "next";
import Analytics from "@/components/Analytics";
import { BookingProvider } from "@/components/Booking";
import SectionTracker from "@/components/SectionTracker";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import StructuredData from "@/components/StructuredData";
import ToTop from "@/components/ToTop";
import { meta } from "@/content/copy";
import { siteUrl, isProduction } from "@/content/site";
import "./globals.css";
import "./sections.css";

export const metadata: Metadata = {
  // Absolute URLs for Open Graph and canonicals are resolved against this.
  metadataBase: new URL(siteUrl),
  title: {
    default: meta.title,
    // Sub-pages set only their own name; the brand is appended here so it is
    // never hardcoded twice and never drifts.
    template: `%s | ${meta.name}`,
  },
  description: meta.description,
  applicationName: meta.name,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-512.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: meta.name,
    locale: "en_US",
    url: "/",
    title: meta.shareTitle,
    description: meta.description,
    images: [{ url: "/share-card.png", width: 1200, height: 630, alt: meta.shareImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.shareTitle,
    description: meta.description,
    images: ["/share-card.png"],
  },
  // A preview on a temporary host must not be indexed.
  robots: isProduction
    ? { index: true, follow: true }
    : { index: false, follow: false, nocache: true },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f1e9" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1a30" },
  ],
};

/**
 * The token bundle, read at build time and inlined below.
 *
 * It was a <link> until Lighthouse put 450ms of the mobile critical path on
 * it: 15KB that every first paint waits for, fetched only after the HTML that
 * references it has arrived and been parsed. Inlining removes that round trip
 * entirely. It costs ~15KB on every HTML response, which is cheaper than a
 * blocking request on a phone, and the file still has one source of truth:
 * ds/tokens/, built by scripts/build-ds.py.
 *
 * Read once at module scope, so it happens at build time for the static pages
 * rather than per request.
 */
const tokens = fs.readFileSync(
  path.join(process.cwd(), "public", "ds", "tokens.css"),
  "utf8",
);

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google's tag is the heaviest thing on the page and the last thing
            discovered, because nothing references it until the script runs.
            Opening the connection early overlaps DNS, TCP and TLS with work
            the page is doing anyway. Only this one origin: preconnect is a
            cost per entry, and Lighthouse caps the useful number at four. */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        {/* The booking calendar's two origins. The short link lives on the
            first and redirects to the second, which is where the page it
            actually shows comes from, so both connections are worth having
            open before anybody books. A preconnect opens a socket and nothing
            more: no request, no cookie, no page. Four is the useful ceiling
            and this is three. */}
        <link rel="preconnect" href="https://calendar.app.google" />
        <link rel="preconnect" href="https://calendar.google.com" />
        {/* The two faces the first viewport is set in, fetched in parallel
            with the stylesheet instead of after it. Everything else the page
            needs is declared in ds/tokens.css and loads normally. Preloading
            more than the critical faces makes the page slower, not faster. */}
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/ds/fonts/SourceSerif4-400_600-latin.woff2"
          crossOrigin=""
        />
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="/ds/fonts/IBMPlexSans-450-latin.woff2"
          crossOrigin=""
        />
        {/* Design system tokens, inlined rather than linked. Never hard-code a
            value that has a token. One file, built by scripts/build-ds.py from
            ds/tokens/. Edit the token files, not this bundle, and re-run the
            script. See the note above the constant for why it is not a link. */}
        <style dangerouslySetInnerHTML={{ __html: tokens }} />
        <StructuredData />
      </head>
      {/* Header and footer live here rather than in each page, so a route
          added later cannot ship without them. */}
      <body>
        {/* One booking dialog for the whole site. Every "Book a demo" asks
            this to open, so the calendar appears where the reader already is
            instead of sending them to the bottom of the home page to press a
            second button. Nothing is fetched from Google until it is opened. */}
        <BookingProvider>
          <SiteHeader />
          {children}
          <SiteFooter />
          <ToTop />
        {/* Google Analytics, under the client's own account, so the numbers
            belong to her and survive a change of host. Renders nothing at all
            unless NEXT_PUBLIC_GA_ID is set, which keeps previews out of her
            reporting. Replaced the two Vercel tags, which only worked on
            Vercel and reported to us rather than to her. */}
          <Analytics />
          <SectionTracker />
        </BookingProvider>
      </body>
    </html>
  );
}
