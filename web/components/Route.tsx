"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { walkthrough } from "@/content/copy";
import Shot from "./Shot";

const { steps } = walkthrough;
const LAST = steps.length - 1;

/**
 * One placement, as a route.
 *
 * This is a drive: six stops, in order, and the line between them fills as you
 * go. That is not decoration — routing homes into a day is what the product
 * actually does, so the section's shape is the product's shape.
 *
 * It replaced two earlier attempts. A pinned stepper hid seven of eight steps
 * behind interaction; laying all of them out flat ran to six screens of mostly
 * placeholder. A snapping track keeps every stop reachable in one screen and
 * gives the motion back.
 *
 * Scroll, swipe, click a stop, or use the arrow keys — all four move the same
 * state. Without JavaScript the track is still a horizontally scrollable list,
 * so nothing here is required to read the section.
 */
export default function Route() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  // The track is the source of truth: whichever card is nearest the left edge
  // is the active stop, however the reader got there.
  const syncFromScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children) as HTMLElement[];
    let nearest = 0;
    let best = Infinity;
    cards.forEach((card, i) => {
      const d = Math.abs(card.offsetLeft - track.scrollLeft);
      if (d < best) {
        best = d;
        nearest = i;
      }
    });
    setIndex(nearest);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(syncFromScroll);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [syncFromScroll]);

  const goTo = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const target = track.children[Math.max(0, Math.min(LAST, i))] as HTMLElement;
    if (!target) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: target.offsetLeft, behavior: reduce ? "auto" : "smooth" });
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(index + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(index - 1);
    }
  };

  const progress = LAST > 0 ? (index / LAST) * 100 : 0;

  return (
    <div className="route">
      {/* The rail is the route: stops joined by a line that fills as you drive. */}
      <div className="route__rail" role="tablist" aria-label="Steps in one placement">
        <span className="route__line" aria-hidden="true" />
        <span
          className="route__line route__line--fill"
          style={{ width: `${progress}%` }}
          aria-hidden="true"
        />
        {steps.map((step, i) => (
          <button
            key={step.icon}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-controls={`stop-${i}`}
            className={`route__stop ${i === index ? "is-active" : ""} ${i < index ? "is-done" : ""}`}
            onClick={() => goTo(i)}
          >
            <span className="route__pin" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="route__stop-label">{step.title}</span>
          </button>
        ))}
      </div>

      <div
        className="route__track"
        ref={trackRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        aria-label="Use the left and right arrow keys to move between steps"
      >
        {steps.map((step, i) => (
          <section
            key={step.icon}
            id={`stop-${i}`}
            className="route__card"
            aria-hidden={i !== index}
          >
            <div className="route__copy">
              <span className="route__count mono">
                {String(i + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
              </span>
              <h3 className="route__title">{step.title}</h3>
              <p className="lead measure">{step.line}</p>
              {"note" in step && step.note ? <p className="step__note">{step.note}</p> : null}
            </div>
            <div className="route__media">
              <Shot src={step.shot.src} alt={step.shot.alt} kind={step.shot.kind} />
            </div>
          </section>
        ))}
      </div>

      <div className="route__controls">
        <button
          type="button"
          className="btn btn--quiet btn--sm"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn btn--quiet btn--sm"
          onClick={() => goTo(index + 1)}
          disabled={index === LAST}
        >
          Next
        </button>
      </div>
    </div>
  );
}
