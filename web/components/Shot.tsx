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
}: {
  src: string | null;
  alt: string;
  width?: number;
  height?: number;
  kind?: "phone" | "desktop";
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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
