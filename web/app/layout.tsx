import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
    images: [{ url: "/share-card.png", width: 1200, height: 630, alt: meta.shareTitle }],
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
        {/* Design system tokens. Never hard-code a value that has a token. */}
        <link rel="stylesheet" href="/ds/styles.css" />
        <StructuredData />
      </head>
      {/* Header and footer live here rather than in each page, so a route
          added later cannot ship without them. */}
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <ToTop />
        {/* Page views and Core Web Vitals, from Vercel. No cookie, no consent
            banner, no third party: it is first party to the deployment and
            collects nothing that identifies a visitor, which is what keeps it
            compatible with the privacy policy as written. Inert off Vercel. */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
