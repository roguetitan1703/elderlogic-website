"use client";

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { schedulerUrl } from "@/content/site";
import { close as closeCopy } from "@/content/copy";
import { track } from "@/lib/track";

/**
 * The booking calendar, in a dialog, shared by every call to action on the
 * site.
 *
 * It used to be one button that owned its own dialog, sitting in the close
 * section, while the header, the hero, the menu, the footer and the FAQ page
 * all linked to `/#book` instead. That made booking from anywhere but the
 * bottom of the home page a two step journey: a jump, sometimes a page load,
 * and then a second click on the button that actually opens the calendar.
 *
 * So the dialog lives once, at the root, and every button asks it to open.
 *
 * Nothing is requested from Google until the first open: the iframe is not
 * rendered before then, and once mounted it stays, so a second open is
 * instant. That property is why the dialog is shared rather than repeated.
 *
 * Not Google's own scheduling-button script. That draws its own button, in its
 * own blue, labelled "Book an appointment", which would put a second wording
 * and a second colour on the one action this site has, and it loads a script
 * and a stylesheet from Google into every page view whether or not anybody
 * books. Our button, our label, and the same page of Google's inside.
 *
 * The dialog is the platform's own. showModal() gives the focus trap, the
 * inert background, Escape and the ::backdrop scrim without any of it being
 * reimplemented, and focus returns to the button that opened it because that
 * is what the element does. Clicking the backdrop closes it too, which
 * <dialog> does not do by itself: the click lands on the dialog element rather
 * than on anything inside it, which is what the bounds test below reads.
 */
const BookingContext = createContext<(() => void) | null>(null);

/** Opens the booking dialog. Null outside the provider, so a button can still
 *  render and fall back to the anchor rather than throwing. */
export function useBooking() {
  return useContext(BookingContext);
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onClose = () => document.body.classList.remove("has-dialog");
    el.addEventListener("close", onClose);
    return () => el.removeEventListener("close", onClose);
  }, []);

  const open = () => {
    setMounted(true);
    document.body.classList.add("has-dialog");
    ref.current?.showModal();
    /* Opening the calendar is the closest thing the site has to a demo
       request: the booking itself happens on Google's page, which we cannot
       see into. So this counts intent, and the bookings are counted in her
       calendar. Both numbers are needed to read either. */
    track("demo_request");
  };

  const src = `${schedulerUrl}${schedulerUrl.includes("?") ? "&" : "?"}gv=true`;

  return (
    <BookingContext.Provider value={open}>
      {children}

      <dialog
        ref={ref}
        className="sheet"
        aria-label={closeCopy.schedulerLabel}
        onClick={(e) => {
          const el = ref.current;
          if (!el || e.target !== el) return;
          const b = el.getBoundingClientRect();
          const inside =
            e.clientX >= b.left &&
            e.clientX <= b.right &&
            e.clientY >= b.top &&
            e.clientY <= b.bottom;
          if (!inside) el.close();
        }}
      >
        <div className="sheet__head">
          <h2 className="sheet__title">{closeCopy.schedulerLabel}</h2>
          <button
            type="button"
            className="sheet__close"
            onClick={() => ref.current?.close()}
          >
            <span className="sr-only">{closeCopy.schedulerClose}</span>
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                d="M6 6l12 12M18 6L6 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <div className="sheet__body">
          {mounted ? (
            <iframe className="sheet__frame" src={src} title={closeCopy.schedulerLabel} />
          ) : null}
        </div>
      </dialog>
    </BookingContext.Provider>
  );
}

/**
 * Any "Book a demo" on the site.
 *
 * Renders a real <a href="/#book"> until the provider is in place, so without
 * JavaScript, and during hydration, the link still goes somewhere useful: the
 * close section, which has the same calendar and the contact form. With the
 * provider it is a button that opens the dialog where the reader already is.
 */
export function BookButton({
  className,
  children,
  onActivate,
}: {
  className: string;
  children: React.ReactNode;
  /** Runs before the dialog opens. The header menu uses it to close itself. */
  onActivate?: () => void;
}) {
  const open = useBooking();

  if (!open) {
    return (
      <a className={className} href="/#book" onClick={onActivate}>
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onActivate?.();
        open();
      }}
    >
      {children}
    </button>
  );
}
