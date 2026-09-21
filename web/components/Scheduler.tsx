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

  /* hide_event_type_details drops the name and duration header, which is the
     agency's name until the client's own account exists; hide_gdpr_banner
     drops the cookie notice that otherwise covers the calendar on a first
     visit. Both are available on every Calendly plan. Colour parameters are
     not, so the calendar keeps Calendly's own blue. */
  const src = `${schedulerUrl}${schedulerUrl.includes("?") ? "&" : "?"}hide_event_type_details=1&hide_gdpr_banner=1`;

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
