import Picture from "@/components/Picture";

/** A product screenshot, or the grey block standing in for one the client
 *  has yet to capture. Alt text is real in both cases.
 *
 *  Intrinsic width and height are required, not optional: a lazy image with no
 *  dimensions is 0px tall until it loads, so the section under it jumps when it
 *  arrives and the block reads as broken in any screenshot taken before then. */
export default function Shot({
  src,
  alt,
  width,
  height,
  kind = "desktop",
  sizes,
}: {
  src: string | null;
  alt: string;
  width?: number;
  height?: number;
  kind?: "phone" | "desktop";
  /** The CSS width of the slot this image lands in, as the browser sees it,
   *  NOT the width of the file to fetch. Two phone captures side by side in a
   *  .pair are about half the column each, so the default is wrong for them
   *  and they must say so. */
  sizes?: string;
}) {
  if (!src) {
    return (
      <div
        className={`placeholder placeholder--${kind}`}
        role="img"
        aria-label={alt}
        title={alt}
      >
        <span>
          Screen to come
          <br />
          {alt}
        </span>
      </div>
    );
  }
  return (
    <div className={`shot ${kind === "phone" ? "shot--phone" : ""}`}>
      <Picture
        src={src}
        alt={alt}
        width={width}
        height={height}
        /* Default: a phone capture is capped near 368 CSS px by .shot--phone,
           and a desktop shot takes one column of the two-up, or the full
           column below 900. A caller in a tighter slot overrides it. */
        sizes={
          sizes ??
          (kind === "phone"
            ? "(max-width: 899px) 22rem, 23rem"
            : "(max-width: 899px) 92vw, 640px")
        }
      />
    </div>
  );
}
