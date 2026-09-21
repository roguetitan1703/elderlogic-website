import Picture from "@/components/Picture";

/**
 * The hero ground.
 *
 * Was nine hundred invented coordinates drawn over a composited base. Now the
 * real map, toned back by the scrim above it so type stays legible. Decorative:
 * the coverage section carries the accessible description.
 *
 * The only image on the page that is not lazy. It is the largest paint in the
 * first viewport, so it is fetched eagerly and at high priority; everything
 * else waits until it is scrolled near.
 */
export default function HeroField() {
  return (
    <Picture
      className="hero__field"
      src="/product/map-2x.jpg"
      alt=""
      aria-hidden
      /* Deliberately understated. This is not the slot width: the map
          fills the viewport. It is desaturated, darkened to 52% and blended
          behind a scrim, so a phone at DPR 2.6 asking for a 2320px file is
          paying 180 KB for detail the filter destroys. Halving the declared
          slot buys a quarter of the pixels and looks identical. The coverage
          section, where the map IS the content, declares its real width. */
      sizes="(max-width: 899px) 50vw, 100vw"
      priority
    />
  );
}
