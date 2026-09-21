import { questions } from "@/content/copy";

/**
 * The FAQ, as an accordion.
 *
 * Built on <details> and <summary> rather than buttons and state. That is not
 * a shortcut: the browser gives us the expanded/collapsed semantics, keyboard
 * operation and screen reader announcement for free and gets them right, and
 * the answers stay in the DOM when closed, which is what the FAQPage
 * structured data requires. Marking up an answer a crawler cannot find is what
 * gets the markup ignored.
 *
 * Everything starts closed. Twelve answers opened at once is not a list of
 * questions, it is an essay nobody scans.
 *
 * The height is deliberately not animated. Doing that to a <details> means
 * either fighting the element's own show/hide or replacing it with divs and
 * rebuilding the semantics by hand, and the honest version of that trade is
 * that a reader gains nothing from a 200ms height tween. The answer fades and
 * rises instead, which reads as considered and cannot break the layout.
 */
export default function Accordion() {
  return (
    <div className="qa">
      {questions.items.map((item) => (
        <details key={item.q} className="qa__item" name="faq">
          <summary className="qa__q">
            <span>{item.q}</span>
            <span className="qa__mark" aria-hidden="true" />
          </summary>
          <div className="qa__a">
            <p>{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
