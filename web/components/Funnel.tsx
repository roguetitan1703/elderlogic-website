"use client";

import { walkthrough } from "@/content/copy";

const { funnel } = walkthrough;
const max = funnel.rows[0].value;

/**
 * The narrowing, as proportional bars: the count outside on the left, what it
 * means inside the bar, the bar's length carrying the fall. Rows stage in once
 * when the step becomes active.
 *
 * Three weights, because the rows are not all the same kind of thing:
 * navy for our reach, pale for the homes the customer had already ruled out,
 * green for what actually lands on their desk.
 *
 * The numbers read as text, not only as a graphic.
 */
export default function Funnel({ active }: { active: boolean }) {
  return (
    <figure
      className="funnel"
      aria-label="How two hundred homes in the radius become two the family tours"
    >
      <ol className="funnel__rows">
        {funnel.rows.map((row, i) => {
          const isResult = row.value <= 5 && i >= funnel.rows.length - 2;
          return (
            <li
              key={row.label}
              className={[
                "funnel__row",
                row.emphasis ? "is-emphasis" : "",
                isResult ? "is-result" : "",
                active ? "is-in" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              style={{ transitionDelay: active ? `${i * 110}ms` : "0ms" }}
            >
              <span className="funnel__value">{row.value}</span>
              <span
                className="funnel__bar"
                style={{ ["--w" as string]: `${Math.max((row.value / max) * 100, 14)}%` }}
              >
                {row.label}
              </span>
            </li>
          );
        })}
      </ol>
      <figcaption>
        <span className="funnel__caption">{funnel.caption}</span>
        <span className="funnel__source">From one Phoenix-area search.</span>
      </figcaption>
    </figure>
  );
}
