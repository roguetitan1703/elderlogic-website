import fieldData from "../public/product/map-field.json";
import { territory } from "@/content/copy";

/**
 * The coverage field.
 *
 * The ground is the real Phoenix metro — roads, water and open land traced out
 * of the map the product actually draws, toned all the way back so it reads as
 * context rather than content. Every dot on top of it is a licensed home,
 * placed from the real distribution. Twelve are lit, because that is the
 * sentence this section makes: a small part of a territory is worked and the
 * rest of it is dark. The count is deliberately not restated here -- the hero
 * makes that claim once.
 *
 * Drawn rather than screenshotted, so the page keeps its own palette and no
 * product chrome leaks onto a marketing page. Nothing here identifies a home
 * or says anything about one — it is density, not a directory.
 */
const { points, labels, highlight, ring, aspect } = fieldData as unknown as {
  points: [number, number][];
  labels: Record<string, [number, number]>;
  highlight: number[];
  ring: [number, number, number];
  aspect: number;
};

const W = 1000;
const H = Math.round(W / aspect);
const lit = new Set(highlight);
const [rx, ry, rr] = ring;

export default function CoverageField() {
  return (
    <div className="cvg">
      <svg
        className="cvg__svg"
        viewBox={`0 0 ${W} ${H}`}
        role="img"
        aria-label={territory.mapAlt}
        preserveAspectRatio="xMidYMid slice"
      >
        <image
          className="cvg__ground"
          href="/product/map-ground.png"
          x="0"
          y="0"
          width={W}
          height={H}
          preserveAspectRatio="xMidYMid slice"
        />

        <g className="cvg__dots">
          {points.map(([x, y], i) =>
            lit.has(i) ? null : (
              <circle key={i} cx={(x * W).toFixed(1)} cy={(y * H).toFixed(1)} r="2.6" />
            ),
          )}
        </g>

        {/* The place name sits where the place is, so it needs no separate
            marker. Anchoring flips near the edges so nothing gets clipped. */}
        <g className="cvg__labels">
          {Object.entries(labels).map(([name, [x, y]]) => {
            const anchor = x > 0.74 ? "end" : x < 0.14 ? "start" : "middle";
            return (
              <text
                key={name}
                x={(x * W).toFixed(1)}
                y={(y * H).toFixed(1)}
                textAnchor={anchor}
              >
                {name}
              </text>
            );
          })}
        </g>

        <g className="cvg__mark">
          <circle
            className="cvg__ring"
            cx={(rx * W).toFixed(1)}
            cy={(ry * H).toFixed(1)}
            r={(rr * W).toFixed(1)}
          />
          {highlight.map((i) => {
            const [x, y] = points[i];
            return (
              <circle
                key={i}
                className="cvg__lit"
                cx={(x * W).toFixed(1)}
                cy={(y * H).toFixed(1)}
                r="4.2"
              />
            );
          })}
          <line
            className="cvg__leader"
            x1={((rx + rr) * W).toFixed(1)}
            y1={(ry * H).toFixed(1)}
            x2={((rx + rr) * W + 54).toFixed(1)}
            y2={(ry * H - 34).toFixed(1)}
          />
          <text
            className="cvg__annot"
            x={((rx + rr) * W + 60).toFixed(1)}
            y={(ry * H - 36).toFixed(1)}
          >
            {territory.mapAnnotation}
          </text>
        </g>
      </svg>
    </div>
  );
}
