"""
Build favicon.ico from the master mark.

The file that shipped was a 97-byte, 16x16, single-colour placeholder: blank.
It is also the one icon a browser asks for without being told to, so it is what
shows in a bookmark bar, in history, and in every browser that ignores the
SVG icon. The SVG covers modern browsers and was fine; nothing covered the ico.

The mark is a green shield on transparent. At 16px the shield outline is about
one pixel wide, so it is rendered from the 512px master with LANCZOS at each
size rather than scaled once, and composited on white: an .ico with alpha
renders unpredictably in older Windows surfaces, and the mark is designed for
a light ground.

    python scripts/build-icons.py
"""
import pathlib
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
PUB = ROOT / "web" / "public"
MASTER = PUB / "icon-512.png"
SIZES = [16, 32, 48, 64]


def main():
    master = Image.open(MASTER).convert("RGBA")
    # Composite on white first, at full resolution: an .ico carrying alpha
    # renders unpredictably on older Windows surfaces, and the mark is drawn
    # for a light ground.
    ground = Image.new("RGBA", master.size, (255, 255, 255, 255))
    ground.alpha_composite(master)
    flat = ground.convert("RGB")

    out = PUB / "favicon.ico"
    flat.save(out, format="ICO", sizes=[(s, s) for s in SIZES])

    print(f"{out.relative_to(ROOT)}  {out.stat().st_size / 1024:.1f} KB  "
          f"sizes {', '.join(f'{s}x{s}' for s in SIZES)}")


if __name__ == "__main__":
    main()
