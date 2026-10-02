import Script from "next/script";
import { isProduction } from "@/content/site";

/**
 * Google Analytics 4, under the client's own account.
 *
 * The measurement id is written here rather than held in a variable. It is not
 * a secret: it is in the page source of every site that uses GA, and anyone
 * can read it off this one. It never changes. And a variable is one more thing
 * that can be absent, which is a failure that looks exactly like broken
 * tracking and loses days of data before anyone notices.
 *
 * What a variable was really buying was keeping previews and local builds out
 * of her reporting, and `isProduction` already says that. It is the same
 * switch that turns off `noindex`, so analytics and indexing cannot disagree
 * about whether this is the real site, and there is one thing to get right
 * instead of two.
 *
 * Rendered from the root layout, so it is on every route including the 404
 * page. Google's instruction to paste the snippet into every page is written
 * for hand built HTML.
 *
 * This sets cookies and is a third party, which the Vercel tag it replaced was
 * not. The privacy policy already covers it: "Our Sites may use Tracking
 * Technologies (e.g., cookies, web beacons, pixel tags and other tracking
 * technologies)", and it lists what they collect. GA4 truncates IP addresses
 * on collection and the site has no login, so nothing here is tied to a named
 * person.
 */
const MEASUREMENT_ID = "G-S6W8DEK3L7";

export default function Analytics() {
  if (!isProduction) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());gtag('config','${MEASUREMENT_ID}');`}
      </Script>
    </>
  );
}
