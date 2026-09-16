"use client";

import { concierge } from "@/content/copy";

const { funnel } = concierge;
const max = funnel.rows[0].value;

/**
 * The narrowing, as proportional bars: the count outside on the left, what it
 * means inside the bar, the bar's length carrying the fall. Rows stage in once.
 *
 * Two weights, because the last two rows are a different kind of thing: navy
 * for the reach, green for what lands on the customer's desk. The pale weight
 * went with the "40 ruled out" row, which did not subtract and is gone.
 *
 * Every string here comes from copy.ts. The aria-label and the caption used to
 * be written into this file and said "in the radius" for two months, which no
 * copy review ever saw because no copy review reads components.
 */
export default function Funnel({ active }: { active: boolean }) {
  return (
    <figure className="funnel" aria-label={funnel.label}>
      <ol className="funnel__rows">
        {funnel.rows.map((row, i) => {
          const isResult = i >= funnel.rows.length - 2;
          return (
            <li
              key={row.label}
              className={[
                "funnel__row",
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
      </figcaption>
    </figure>
  );
}
