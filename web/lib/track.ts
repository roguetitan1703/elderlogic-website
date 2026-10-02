/**
 * Events, and the one piece of context that makes them answer a question.
 *
 * Silent when analytics is not there: nothing on a preview, nothing in
 * development, nothing if the tag fails to load behind a blocker. A missing
 * analytics product must never be able to break a booking or an enquiry, so
 * nothing here throws and nothing returns anything the caller has to handle.
 *
 * Event names are snake_case because that is what GA4 reports on. They and
 * their parameters are listed in RUNBOOK section 4b, so the client's dashboard
 * can be set up from a written list rather than by guessing.
 */
type Params = Record<string, string | number | boolean>;

/**
 * The furthest section the reader reached before the event fired.
 *
 * This is the whole of "reporting on which sections lead to enquiries". GA can
 * count enquiries and it can count page views, but it cannot see a section, so
 * on its own it can never say which part of the page was doing the work. One
 * parameter on the conversion answers it: group enquiries by this and the
 * sections that precede them are the sections that earn them.
 *
 * Deliberately the deepest reached rather than the one in view when the button
 * was pressed. A reader who gets to the bottom, decides, and then scrolls back
 * up to the header button has still been convinced by the bottom of the page,
 * and reporting that as "the header" would be worse than reporting nothing.
 */
let deepest = "hero";

export function recordSection(id: string) {
  deepest = id;
}

export function deepestSection() {
  return deepest;
}

export function track(event: string, params: Params = {}) {
  try {
    const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
    gtag?.("event", event, { deepest_section: deepest, ...params });
  } catch {
    /* analytics is never worth an exception in front of a user */
  }
}
