"use client";

import { useState } from "react";
import { close, footer } from "@/content/copy";

/**
 * The fallback contact form.
 *
 * There is no submission endpoint yet, because no email provider has been
 * chosen, so this must not pretend to send. A form with no action does a GET to its own
 * URL on submit, which reloads the page with the sender's name and email in
 * the query string: visible, logged, and shareable. That is a real leak, so
 * submission is intercepted and the reader is handed the address instead.
 *
 * When an endpoint exists, replace the onSubmit handler with the POST and drop the
 * fallback message. Nothing else here needs to change.
 */
export default function ContactForm() {
  const [handedOff, setHandedOff] = useState(false);

  return (
    <form
      className="cform"
      id="contact"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        setHandedOff(true);
      }}
    >
      {close.fields.map((f) => (
        <label
          key={f.name}
          className={`field ${f.type === "textarea" ? "field--wide" : ""}`.trim()}
        >
          <span className="field__label">{f.label}</span>
          {f.type === "textarea" ? (
            <textarea name={f.name} rows={4} className="field__input" />
          ) : (
            <input type={f.type} name={f.name} className="field__input" />
          )}
        </label>
      ))}

      <div className="cform__foot">
        <button type="submit" className="btn btn--quiet">
          {close.submit}
        </button>
      </div>

      {handedOff && (
        <p className="field__notice cform__notice" role="status">
          Sending is not connected yet. Email{" "}
          <a href={`mailto:${footer.email}`}>{footer.email}</a> and we will pick it up
          from there.
        </p>
      )}
    </form>
  );
}
