"use client";

import { concierge } from "@/content/copy";

const { funnel } = concierge;
const max = Math.max(...funnel.rows.map((row) => row.value));

/**
 * The narrowing, as a proportional chart.
 *
 * Each row is the count, what it means, and a track whose fill is the count's
 * share of the first row. The fill length is exactly proportional and nothing
 * else is allowed to change it.
 *
 * That is the fix for the version before this one, which put the label inside
 * the bar and set the bar to `min-width: max-content`. With five rows it only
 * distorted the short end. With the client's seven rows it inverted it: the bar
 * reading "family's perfect fit" for a count of 1 drew wider than the bar for
 * 20, because the bar had to fit its words. A chart whose shape contradicts its
 * numbers is worse than no chart. So the words sit above the track, and the
 * track only ever carries the number.
 *
 * The steepness is the point. A count of 1 is half a percent of 200 and is
 * drawn as the smallest visible mark, not rounded up to look respectable.
 *
 * Rows and values are data in copy.ts. `result` rows, from viable options
 * onward, are the ones that land on the customer's team, and carry the green.
 */
export default function Funnel({ active }: { active: boolean }) {
  return (
    <figure className="funnel" aria-label={funnel.label}>
      <ol className="funnel__rows">
        {funnel.rows.map((row, i) => (
          <li
            key={`${row.value}-${row.label}`}
            className={[
              "funnel__row",
              "result" in row && row.result ? "is-result" : "",
              active ? "is-in" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            style={{ transitionDelay: active ? `${i * 90}ms` : "0ms" }}
          >
            <span className="funnel__value">{row.value}</span>
            <span className="funnel__body">
              <span className="funnel__label">{row.label}</span>
              <span className="funnel__track" aria-hidden="true">
                <span
                  className="funnel__fill"
                  style={{ ["--w" as string]: `${(row.value / max) * 100}%` }}
                />
              </span>
            </span>
          </li>
        ))}
      </ol>
      <figcaption>
        <span className="funnel__caption">{funnel.caption}</span>
      </figcaption>
    </figure>
  );
}
