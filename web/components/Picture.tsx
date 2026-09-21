import { images } from "@/content/images.generated";

/**
 * One raster image, served in the smallest format and size the browser will
 * take.
 *
 * Deliberately not next/image. The default Next loader is a Vercel runtime
 * service, and hosting moves to the client's own account: a <picture> with
 * files built ahead of time is the same payload saving, works on any host,
 * costs nothing per request and has no runtime that can fail. AVIF first,
 * then WebP, then the original jpg or png, which is what an old browser gets.
 *
 * `sizes` is not optional in practice. Without it the browser assumes the
 * image fills the viewport and picks the widest candidate, which is the whole
 * saving thrown away. Pass the width the layout actually gives the image.
 *
 * Intrinsic width and height always go on the <img>: a lazy image with no
 * dimensions is 0px tall until it loads, and the section under it jumps.
 */
export default function Picture({
  src,
  alt,
  sizes,
  className,
  width,
  height,
  priority = false,
  ...rest
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
} & { "aria-hidden"?: boolean }) {
  const entry = images[src];
  const w = width ?? entry?.width;
  const h = height ?? entry?.height;

  const srcSet = (variants?: [number, string][]) =>
    variants?.map(([vw, path]) => `${path} ${vw}w`).join(", ");

  return (
    <picture>
      {entry && <source type="image/avif" srcSet={srcSet(entry.avif)} sizes={sizes} />}
      {entry && <source type="image/webp" srcSet={srcSet(entry.webp)} sizes={sizes} />}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={className}
        src={src}
        alt={alt}
        width={w}
        height={h}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : undefined}
        {...rest}
      />
    </picture>
  );
}
