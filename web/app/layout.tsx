import type { Metadata, Viewport } from "next";
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
    /* The .js class is set by the inline script below, before React hydrates,
       so the server HTML and the client DOM differ on <html> by design. That is
       the point of the technique, and it is the one place where suppressing the
       warning is correct. */
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Design system tokens. Never hard-code a value that has a token. */}
        <link rel="stylesheet" href="/ds/styles.css" />
        {/* Reveals are progressive enhancement: without this class every
            section renders visible. Nothing on this page depends on script. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
