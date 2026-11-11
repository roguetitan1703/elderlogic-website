"use client";

import { useEffect } from "react";
import { track } from "@/lib/track";

/**
 * Counts presses on the email address and the phone number.
 *
 * Month one had no enquiries and no bookings, and the one route nobody could
 * see was a reader who took the number or the address and got in touch
 * directly. GA's enhanced measurement counts links to other sites, not mailto
 * or tel links, so without this a lead from the footer is invisible.
 *
 * One delegated listener at the root rather than an onClick on each link: the
 * links live in five places, some of them server components, and a sixth added
 * later is counted without anyone remembering to wire it.
 *
 * `method` is email or phone. `link_location` is the landmark the link sits
 * in: header (the phone menu), footer, or main (the FAQ, about page and form).
 * Analytics vocabulary only; none of it is shown to a reader.
 */
export default function ContactTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]");
      if (!link) return;
      const href = link.getAttribute("href") ?? "";
      const method = href.startsWith("mailto:")
        ? "email"
        : href.startsWith("tel:")
          ? "phone"
          : null;
      if (!method) return;
      const where = link.closest("header, footer, main")?.tagName.toLowerCase() ?? "other";
      track("contact_click", { method, link_location: where });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
