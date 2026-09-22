"use client";

import { useState } from "react";
import { close, footer } from "@/content/copy";

type State = "idle" | "sending" | "sent" | "failed";

/**
 * The enquiry form.
 *
 * It posts to /api/contact, which validates and writes the enquiry away. The
 * old version intercepted its own submit and handed the reader an email
 * address, because a form with no action does a GET to its own URL and puts
 * the sender's name and email in the query string. That is gone.
 *
 * Three things the reader is never lied to about. A field that is wrong is
 * named, not just outlined. A send that fails says so and gives the address
 * to use instead. And if the endpoint accepts the enquiry but cannot store it
 * yet, that is a failure here too: a success message the site cannot back up
 * is worse than no form.
 */
export default function ContactForm() {
  const [state, setState] = useState<State>("idle");
  const [invalid, setInvalid] = useState<string[]>([]);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (state === "sending") return;
    setState("sending");
    setInvalid([]);

    const data = Object.fromEntries(new FormData(event.currentTarget).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const payload = await res.json().catch(() => ({}));

      if (res.status === 422 && Array.isArray(payload.fields)) {
        setInvalid(payload.fields);
        setState("idle");
        return;
      }
      if (!res.ok || !payload.ok || payload.stored === false) {
        setState("failed");
        return;
      }
      setState("sent");
    } catch {
      setState("failed");
    }
  };

  if (state === "sent") {
    return (
      <p className="cform__done" role="status">
        {close.sent}
      </p>
    );
  }

  return (
    <form className="cform" id="contact" noValidate onSubmit={onSubmit}>
      {close.fields.map((f) => {
        const bad = invalid.includes(f.name);
        return (
          <label
            key={f.name}
            className={`field ${f.type === "textarea" ? "field--wide" : ""}`.trim()}
          >
            <span className="field__label">{f.label}</span>
            {f.type === "textarea" ? (
              <textarea
                name={f.name}
                rows={4}
                className="field__input"
                aria-invalid={bad || undefined}
                aria-describedby={bad ? `err-${f.name}` : undefined}
              />
            ) : (
              <input
                type={f.type}
                name={f.name}
                className="field__input"
                autoComplete={
                  f.name === "email" ? "email" : f.name === "name" ? "name" : "organization"
                }
                aria-invalid={bad || undefined}
                aria-describedby={bad ? `err-${f.name}` : undefined}
              />
            )}
            {bad ? (
              <span className="field__error" id={`err-${f.name}`}>
                {f.name === "email" ? close.errors.email : close.errors.required}
              </span>
            ) : null}
          </label>
        );
      })}

      {/* Not display:none, which some bots skip. Off the page, out of the tab
          order, and hidden from assistive technology. */}
      <div className="cform__trap" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="cform__foot">
        <button type="submit" className="btn btn--quiet" disabled={state === "sending"}>
          {state === "sending" ? close.sending : close.submit}
        </button>
      </div>

      <p className="field__notice cform__notice" role="status" aria-live="polite">
        {state === "failed" ? (
          <>
            {close.failed}{" "}
            <a href={`mailto:${footer.email}`}>{footer.email}</a>.
          </>
        ) : null}
      </p>
    </form>
  );
}
