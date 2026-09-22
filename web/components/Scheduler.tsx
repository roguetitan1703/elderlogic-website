import { schedulerUrl } from "@/content/site";
import { close } from "@/content/copy";

/**
 * The booking calendar.
 *
 * A plain iframe, not Calendly's script widget: the widget injects a second
 * script and a stylesheet of its own, and everything it adds over the iframe
 * is chrome we do not want inside the panel. The iframe is lazy, so nothing is
 * fetched from a third party until the reader has scrolled to the close.
 *
 * With no URL configured the slot renders the note it used to, so the page
 * never ships a dead frame.
 */
export default function Scheduler() {
  if (!schedulerUrl) {
    return (
      <div className="booking" id="scheduler">
        <p className="mono">{close.schedulerPlaceholder}</p>
      </div>
    );
  }

  /* gv=true is Google's own embed parameter. The page carries Google's
     chrome either way: the schedule owner's logo and name at the top, and a
     "create your own appointment page" strip at the foot. Neither can be
     turned off, so the fix for the first is whose account the schedule lives
     on, not a parameter. */
  const src = `${schedulerUrl}${schedulerUrl.includes("?") ? "&" : "?"}gv=true`;

  return (
    <div className="booking booking--live" id="scheduler">
      <iframe
        className="booking__frame"
        src={src}
        title={close.schedulerLabel}
        loading="lazy"
      />
    </div>
  );
}
