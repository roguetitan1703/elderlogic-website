/** A product screenshot, or the grey block standing in for one the client
 *  has yet to capture. Alt text is real in both cases. */
export default function Shot({
  src,
  alt,
  kind = "desktop",
}: {
  src: string | null;
  alt: string;
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
        <span>Screen to come<br />{alt}</span>
      </div>
    );
  }
  return (
    <div className={`shot ${kind === "phone" ? "shot--phone" : ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </div>
  );
}
