/**
 * One event, sent to Google Analytics if it is there.
 *
 * Silent when it is not: nothing on a preview, nothing in development, nothing
 * if the tag fails to load behind a blocker. A missing analytics product must
 * never be able to break a booking or an enquiry, so this never throws and
 * returns nothing the caller has to handle.
 *
 * Event names are snake_case because that is what GA4 reports on, and they are
 * listed in RUNBOOK section 4b so the client's dashboard can be set up from a
 * written list rather than by guessing at what the site sends.
 */
type Params = Record<string, string | number | boolean>;

export function track(event: string, params: Params = {}) {
  try {
    const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
    gtag?.("event", event, params);
  } catch {
    /* analytics is never worth an exception in front of a user */
  }
}
