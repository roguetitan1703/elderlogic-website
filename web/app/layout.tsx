import type { Metadata, Viewport } from "next";
import Analytics from "@/components/Analytics";
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
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
        {/* Design system tokens. Never hard-code a value that has a token.
            One file, built by scripts/build-ds.py from ds/tokens/. Edit the
            token files, not this bundle, and re-run the script. */}
        <link rel="stylesheet" href="/ds/tokens.css" />
        <StructuredData />
      </head>
      {/* Header and footer live here rather than in each page, so a route
          added later cannot ship without them. */}
      <body>
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
      </body>
    </html>
  );
}
