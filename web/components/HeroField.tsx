/**
 * The hero ground.
 *
 * Was nine hundred invented coordinates drawn over a composited base. Now the
 * real map, toned back by the scrim above it so type stays legible. Decorative:
 * the coverage section carries the accessible description.
 */
export default function HeroField() {
  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      className="hero__field"
      src="/product/map-2x.jpg"
      alt=""
      aria-hidden="true"
      width={2320}
      height={1290}
      fetchPriority="high"
    />
  );
}
