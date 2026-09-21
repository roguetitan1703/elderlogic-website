import Picture from "@/components/Picture";
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
      <Picture
        src="/product/map-2x.jpg"
        alt={territory.mapAlt}
        /* Slot width, not file width: writing "960px" here told the
             browser the image occupies 960 CSS px, and a phone at DPR 2.6
             then fetched the 2320px file, 181 KB, for a 412px panel.
             Understated on purpose at 70vw: the map is a density field, not
             something anyone reads a street name off, so roughly 1.8x is
             plenty and buys a quarter of the bytes. */
        sizes="(max-width: 899px) 70vw, min(1400px, 100vw)"
      />
    </div>
  );
}
