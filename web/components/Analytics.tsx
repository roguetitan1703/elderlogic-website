import Script from "next/script";

/**
 * Google Analytics 4, under the client's own account.
 *
 * Hand written rather than pulled from @next/third-parties: it is nine lines,
 * it adds no dependency, and it does not assume a host. The site has already
 * had one analytics product removed from it; the next one should not be
 * welded on either.
 *
 * Nothing renders unless NEXT_PUBLIC_GA_ID is set, so previews and local
 * builds send nothing and the client's numbers stay clean. The id is public by
 * design: it appears in the page source of every site that uses GA, which is
 * why it is a NEXT_PUBLIC_ variable and not a secret.
 *
 * This does set cookies and it is a third party, which the Vercel tag it
 * replaces was not. The privacy policy already covers it: "Our Sites may use
 * Tracking Technologies (e.g., cookies, web beacons, pixel tags and other
 * tracking technologies)", and it lists what they collect. No new clause is
 * needed. GA4 truncates IP addresses on collection and the site has no login,
 * so nothing here is tied to a named person.
 */
export default function Analytics() {
  const id = process.env.NEXT_PUBLIC_GA_ID;
  if (!id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());gtag('config','${id}');`}
      </Script>
    </>
  );
}
