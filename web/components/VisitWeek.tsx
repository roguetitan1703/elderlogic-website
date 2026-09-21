import { reporting } from "@/content/copy";

const { week } = reporting;

/**
 * Planned against completed, drawn.
 *
 * One week of marketing visits as a five column grid: each day holds the
 * visits planned for it, a hollow circle for one that was planned and a filled
 * one for a visit that happened, with a check on the two that were verified.
 *
 * It is a diagram of the idea, not a screen. No counts and no names, because
 * neither can be shown without inventing them, and the question leadership
 * actually asks needs neither: did the visits happen.
 *
 * Still, like everything else in this section. The circles carry no
 * information a reader has to wait for.
 */
export default function VisitWeek() {
  return (
    <figure className="visits">
      <div className="visits__grid" role="img" aria-label={week.alt}>
        {week.days.map((day) => (
          <div key={day.day} className="visits__day">
            <span className="visits__label" aria-hidden="true">
              {day.day}
            </span>
            <span className="visits__dots">
              {day.visits.map((state, i) => (
                <span
                  key={i}
                  className={`visits__dot visits__dot--${state}`}
                  aria-hidden="true"
                >
                  {state === "verified" ? (
                    <svg viewBox="0 0 16 16" focusable="false" aria-hidden="true">
                      <path
                        d="M4.5 8.4l2.4 2.4 4.6-5.4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : null}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>

      <figcaption className="visits__foot">
        <span className="visits__cap">{week.caption}</span>
        <span className="visits__legend">
          {week.legend.map((item) => (
            <span key={item.state} className="visits__key">
              <span
                className={`visits__dot visits__dot--${item.state}`}
                aria-hidden="true"
              />
              {item.label}
            </span>
          ))}
        </span>
      </figcaption>
    </figure>
  );
}
