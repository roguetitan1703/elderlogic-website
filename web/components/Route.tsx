import { walkthrough } from "@/content/copy";
import Shot from "./Shot";

const { steps } = walkthrough;

/**
 * One placement, as a short list.
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
          <li key={step.icon} className="flow__step">
            <span className="flow__num mono">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="flow__title">
                {step.title}
                {/* The one step we perform. A text label, not a colour, so it
                    survives greyscale and a colour blind reader. */}
                {step.by ? <span className="flow__by mono">{step.by}</span> : null}
              </h3>
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
