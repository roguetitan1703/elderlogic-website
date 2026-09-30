"use client";

import { useEffect, useRef, useState } from "react";
import { schedulerUrl } from "@/content/site";
import { close as closeCopy } from "@/content/copy";
import { track } from "@/lib/track";

/**
 * The booking calendar, in a dialog.
 *
 * Not Google's own scheduling-button script. That script draws its own button,
 * in its own blue, labelled "Book an appointment", which would put a second
 * wording and a second colour on the one action this site has. It also loads a
 * stylesheet and a script from Google into every page view, whether or not
 * anybody books. Our button, our label, and the same page of Google's inside.
 *
 * Nothing is requested from Google until the dialog is opened for the first
 * time: the iframe is not rendered before then, and once mounted it stays so a
 * second open is instant.
 *
 * The dialog is the platform's own. showModal() gives the focus trap, the
 * inert background, Escape, and the ::backdrop scrim without any of it being
 * reimplemented, and focus returns to the button on close because that is what
 * the element does. Clicking the backdrop closes it too, which <dialog> does
 * not do by itself: the click lands on the dialog element rather than on
 * anything inside it, which is what the bounds test below is reading.
 */
export default function BookDialog() {
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
       see. So this counts intent, and the bookings are counted in her
       calendar. Both numbers are needed to read either. */
    track("demo_request");
  };

  const src = `${schedulerUrl}${schedulerUrl.includes("?") ? "&" : "?"}gv=true`;

  return (
    <>
      <button type="button" className="btn btn--primary btn--lg" onClick={open}>
        {closeCopy.cta.label}
      </button>

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
    </>
  );
}
