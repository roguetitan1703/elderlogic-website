import { placement } from "@/content/copy";

/**
 * The run sheet: one placement as a numbered, ordered run.
 *
 * This is the Run Manifest page type inside the chart. Numbers are earned here
 * and nowhere else on the page, because the order is information the reader
 * needs: an assessment precedes a search, a search precedes the calls.
 *
 * Three earlier versions of this section were a pinned scroll stepper, then a
 * snapping carousel, then a plain list. The first two hid most of the flow
 * behind an interaction nobody performs on a phone. This shows the whole run at
 * once, which is the only presentation that survives a reader who is scanning.
 *
 * The step ElderLogic performs carries a text label, not just a colour, so the
 * one claim that matters survives greyscale, a colour blind reader, and a
 * printout.
 */
export default function RunSheet() {
  return (
    <ol className="run">
      {placement.steps.map((step, i) => (
        <li key={step.title} className={step.by ? "run__step run__step--ours" : "run__step"}>
          <span className="run__num">{String(i + 1).padStart(2, "0")}</span>
          <div className="run__body">
            <h3 className="run__title">
              {step.title}
              {step.by ? <span className="run__by">{step.by}</span> : null}
            </h3>
            <p className="run__line">{step.line}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
