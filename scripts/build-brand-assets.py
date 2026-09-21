"""
Build the brand assets the site serves from the client's master files.

Two reasons this exists rather than copying files by hand:

1. The brand green is #00B07D (client, 17 September 2026). Her own master logo
   and favicon files still carry the old #00a676, so a straight copy would put
   two greens on the page. Every served copy is recoloured here; the masters in
   Assets/ are left exactly as she supplied them.
2. The "deep blue" icon set is drawn in a slate, #2c3e50, not the brand navy.
   Recoloured to navy #1c4073 so the icons sit in the same family as the type.

Outputs, all in web/public:
    logo-colour.svg         full-colour lockup, for a light header
    favicon-512.svg         the mark, recoloured
    icon-512.png, icon-192.png, apple-touch-icon.png   re-rendered from it
    icons/<slug>.svg        the product icons

Then run scripts/build-icons.py to rebuild favicon.ico from icon-512.png.

    python scripts/build-brand-assets.py && python scripts/build-icons.py
"""
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
ASSETS = ROOT / "Assets"
PUB = ROOT / "web" / "public"

OLD_GREEN = "#00a676"
GREEN = "#00B07D"
ICON_SLATE = "#2c3e50"
NAVY = "#1c4073"

ICONS = {
    "Assessment Form.svg": "assessment-form",
    "Client.svg": "client",
    "Facilities.svg": "facilities",
    "Family Tour 2.svg": "family-tour",
    "Move-In.svg": "move-in",
    "Outreach Log.svg": "outreach-log",
    "Placement Search.svg": "placement-search",
    "Power of Attorney.svg": "power-of-attorney",
    "Pre-Tour.svg": "pre-tour",
}


def recolour(text: str, old: str, new: str) -> str:
    return re.sub(re.escape(old), new, text, flags=re.IGNORECASE)


def main():
    lockup = (ASSETS / "Logo" / "SVGs" / "Full logo.svg").read_text(encoding="utf-8")
    (PUB / "logo-colour.svg").write_text(recolour(lockup, OLD_GREEN, GREEN), encoding="utf-8")
    print("logo-colour.svg")

    fav = PUB / "favicon-512.svg"
    fav.write_text(recolour(fav.read_text(encoding="utf-8"), OLD_GREEN, GREEN), encoding="utf-8")
    print("favicon-512.svg")

    out = PUB / "icons"
    out.mkdir(exist_ok=True)
    for name, slug in ICONS.items():
        src = (ASSETS / "Icons" / "SVGs" / "deep blue" / name).read_text(encoding="utf-8")
        (out / f"{slug}.svg").write_text(recolour(src, ICON_SLATE, NAVY), encoding="utf-8")
    print(f"icons/ x{len(ICONS)}")

    # Raster icons, rendered from the recoloured SVG so every size agrees.
    from playwright.sync_api import sync_playwright

    svg = fav.read_text(encoding="utf-8")
    with sync_playwright() as p:
        browser = p.chromium.launch()
        for size, name, ground in [
            (512, "icon-512.png", "transparent"),
            (192, "icon-192.png", "transparent"),
            # iOS draws its own rounded mask and fills transparency with black,
            # so the touch icon gets a white ground and a little inset.
            (180, "apple-touch-icon.png", "#ffffff"),
        ]:
            inset = 14 if name == "apple-touch-icon.png" else 0
            page = browser.new_page(viewport={"width": size, "height": size})
            page.set_content(
                f"<html><body style='margin:0;background:{ground}'>"
                f"<div style='width:{size}px;height:{size}px;box-sizing:border-box;"
                f"padding:{inset}px'>"
                f"{svg.replace('<svg ', '<svg style=\"width:100%;height:100%\" ', 1)}"
                f"</div></body></html>"
            )
            page.screenshot(path=str(PUB / name), omit_background=(ground == "transparent"))
            page.close()
            print(name)
        browser.close()


if __name__ == "__main__":
    main()
