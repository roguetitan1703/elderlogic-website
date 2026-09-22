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
 * A failure here means the message never left the browser, or the site never
 * took it: a dead connection, a route that is not there. Those are worth
 * telling the sender about, because the message is still theirs to send and
 * the address is the way to send it.
 *
 * What happens to the enquiry after the site has it is not the sender's
 * problem and is not reported to them. Airtable being slow or misconfigured is
 * ours to fix, and the route retries and dead letters it rather than asking
 * somebody who did nothing wrong to type their message again.
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
      if (!res.ok || !payload.ok) {
        setState("failed");
        return;
      }
      setState("sent");
    } catch {
      setState("failed");
    }
  };

  /* The heading and the intro belong to this component, not to the page, so
     that a sent enquiry replaces the whole block. Left in the page they stayed
     behind, and "Tell us what you need" sat directly above "Thank you, we have
     it", which is the form asking for something it has already been given. */
  if (state === "sent") {
    return (
      <p className="cform__done" role="status">
        {close.sent}
      </p>
    );
  }

  return (
    <form className="cform" id="contact" noValidate onSubmit={onSubmit}>
      <div className="cform__head">
        <h3 className="cta__form-heading">{close.formHeading}</h3>
        <p className="cta__form-intro">{close.formIntro}</p>
      </div>
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
