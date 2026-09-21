import { walkthrough } from "@/content/copy";
import Shot from "./Shot";

const { steps } = walkthrough;

/**
 * One placement, as a short list.
 *
 * Seven steps, the client's. The arc ends on the family choosing a home, not
 * on a record being updated, so the last step is given room: a larger marker
 * and the display face, so the list resolves instead of just stopping.
 *
 * Previous versions were a pinned stepper and then a snapping carousel. Both
 * were wrong for the same reason: they hid five of six steps behind an
 * interaction nobody performs on a phone. Six short lines read faster than any
 * of it, and the whole flow is visible at once.
 *
 * One screen beside the list, not one per step: five of six were placeholders,
 * which made the section look unfinished rather than proven. It used to borrow
 * the marketing visits phone, which put the same image on the page twice.
 */
export default function Route() {
  return (
    <div className="flow">
      <ol className="flow__list">
        {steps.map((step, i) => (
          <li
            key={step.icon}
            className={`flow__step${"end" in step && step.end ? " flow__step--end" : ""}`}
          >
            <span className="flow__num mono">{String(i + 1).padStart(2, "0")}</span>
            <div>
              {/* The badge sits beside the heading, not inside it. Inside,
                  the heading's accessible name became "OutreachElderLogic",
                  which is what a screen reader announces when a user walks the
                  page by heading. It is also a text label rather than a
                  colour, so it survives greyscale and a colour blind reader. */}
              <div className="flow__head">
                <h3 className="flow__title">{step.title}</h3>
                {step.by ? (
                  <span className="flow__by mono">
                    <span className="sr-only">Performed by </span>
                    {step.by}
                  </span>
                ) : null}
              </div>
              <p className="flow__line">{step.line}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="flow__media">
        <Shot
          src={walkthrough.image.src}
          alt={walkthrough.image.alt}
          width={walkthrough.image.width}
          height={walkthrough.image.height}
          kind="phone"
        />
      </div>
    </div>
  );
}
