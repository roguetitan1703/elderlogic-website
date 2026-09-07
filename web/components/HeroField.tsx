import fieldData from "../public/product/map-field.json";

/**
 * The hero ground: the same territory as the coverage section, at the same
 * coordinates, drawn from the same data — but dark, unlabelled and quiet,
 * because type sits on top of it. Coverage then zooms in and annotates it.
 *
 * Decorative here: the coverage section carries the accessible description.
 */
const { points, aspect } = fieldData as unknown as {
  points: [number, number][];
  aspect: number;
};

const W = 1000;
const H = Math.round(W / aspect);

export default function HeroField() {
  return (
    <svg
      className="hero__field"
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <image href="/product/hero-ground.png" x="0" y="0" width={W} height={H} />
      <g className="hero__dots">
        {points.map(([x, y], i) => (
          <circle key={i} cx={(x * W).toFixed(1)} cy={(y * H).toFixed(1)} r="2.4" />
        ))}
      </g>
    </svg>
  );
}
