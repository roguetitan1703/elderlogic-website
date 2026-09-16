import { territory } from "@/content/copy";

/**
 * The coverage field.
 *
 * This was a drawn map: nine hundred invented coordinates out of
 * map-field.json, six real place names pinned to made up positions, and a ring
 * around twelve of the dots labelled "already worked", sized so the hero's
 * "about a dozen" landed visually. It looked good and it was a specific claim
 * about a specific territory, made up. Under a caption reading "licensed homes,
 * Phoenix metro" it was a false factual statement, so it is gone.
 *
 * What replaces it is the map the product actually draws, in the same frame.
 * Nothing here identifies a home: it is density, not a directory.
 */
export default function CoverageField() {
  return (
    <div className="cvg cvg--shot">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/product/map-2x.jpg"
        alt={territory.mapAlt}
        width={2320}
        height={1290}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
