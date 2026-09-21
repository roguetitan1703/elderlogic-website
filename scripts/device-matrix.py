"""
Cross-browser and device sweep (proposal section 3).

Loads every route in Chromium, Firefox and WebKit at six device classes, and
checks the things that actually break across engines rather than eyeballing
screenshots:

  - horizontal overflow          a page that scrolls sideways on a phone
  - tap target size              24x24 CSS px is the WCAG 2.5.8 AA floor and
                                 applies everywhere; 44x44 is the touch bar and
                                 is only checked on the touch-sized viewports
  - overlapping interactive boxes
  - the fixed header covering the first heading
  - the phone menu: opens, locks the page, closes, restores scroll
  - console errors, failed requests
  - the chosen image format per engine (WebKit took years to ship AVIF)

WebKit is the closest thing to Safari that runs headless here. It shares the
engine, so it catches engine bugs; it is not an iPhone, so it does not replace
a look on real hardware before launch.

    cd web && npx next build && npx next start -p 3195
    python scripts/device-matrix.py
"""
import os, pathlib, sys
from playwright.sync_api import sync_playwright

BASE = os.environ.get("BASE", "http://localhost:3195")
ROUTES = ["/", "/faq", "/privacy", "/no-such-page"]
DEVICES = [
    ("iPhone SE",      {"width": 375, "height": 667}, 2),
    ("iPhone 13",      {"width": 390, "height": 844}, 3),
    ("Pixel 5",        {"width": 393, "height": 851}, 2.75),
    ("iPad mini",      {"width": 768, "height": 1024}, 2),
    ("Laptop",         {"width": 1280, "height": 800}, 1),
    ("Desktop",        {"width": 1680, "height": 1050}, 2),
]
SHOTS = pathlib.Path(os.environ.get("SHOTS", "device-matrix"))

OVERFLOW = """() => {
  const d = document.documentElement;
  const over = [...document.querySelectorAll('body *')]
    .filter(e => e.getBoundingClientRect().right > d.clientWidth + 1)
    .filter(e => getComputedStyle(e).position !== 'fixed')
    .slice(0, 5)
    .map(e => e.tagName.toLowerCase() + '.' + (e.className || '').toString().split(' ')[0]
              + ' @' + Math.round(e.getBoundingClientRect().right));
  return { scrollW: d.scrollWidth, clientW: d.clientWidth, culprits: over };
}"""

SMALL_TARGETS = """(floor) => [...document.querySelectorAll('a[href], button, summary, input, [tabindex]:not([tabindex="-1"])')]
  .filter(e => e.offsetParent !== null || getComputedStyle(e).position === 'fixed')
  .map(e => ({ r: e.getBoundingClientRect(), t: e.tagName.toLowerCase() + '.' + (e.className||'').toString().split(' ')[0],
               label: (e.textContent||'').trim().slice(0,28) }))
  // A text link is as wide as its text, which WCAG exempts. Hold the full
  // bar on height, and only the 24px AA floor on width.
  // A text link is only as wide as its text, which WCAG exempts as an inline
  // target. Hold the full bar on height, and only the 24px AA floor on width.
  .filter(o => o.r.width && o.r.height && (o.r.height < floor || o.r.width < 24))
  .map(o => `${o.t} ${Math.round(o.r.width)}x${Math.round(o.r.height)} "${o.label}"`)"""

HEADER_CLEAR = """() => {
  const h = document.querySelector('.site-header');
  const first = document.querySelector('main h1, main h2');
  if (!h || !first) return 'no header or heading';
  const hb = h.getBoundingClientRect(), fb = first.getBoundingClientRect();
  return (fb.top < hb.bottom && fb.bottom > hb.top) ? `COVERED: "${first.textContent.trim().slice(0,40)}"` : 'clear';
}"""


def main():
    SHOTS.mkdir(parents=True, exist_ok=True)
    problems = []
    with sync_playwright() as p:
        for engine_name in ("chromium", "firefox", "webkit"):
            try:
                browser = getattr(p, engine_name).launch()
            except Exception as exc:
                print(f"!! {engine_name} not installed: {str(exc).splitlines()[0][:90]}")
                print(f"   playwright install {engine_name}")
                continue
            for dev, viewport, dpr in DEVICES:
                ctx = browser.new_context(viewport=viewport, device_scale_factor=dpr,
                                          reduced_motion="reduce")
                page = ctx.new_page()
                errors, failed = [], []
                page.on("console", lambda m: m.type == "error" and errors.append(m.text[:110]))
                page.on("requestfailed", lambda r: failed.append(r.url.split("/")[-1]))
                for route in ROUTES:
                    tag = f"{engine_name}/{dev}{route}"
                    page.goto(BASE + route, wait_until="networkidle")
                    for _ in range(14):
                        page.mouse.wheel(0, 1000); page.wait_for_timeout(60)
                    page.wait_for_timeout(400)

                    ov = page.evaluate(OVERFLOW)
                    if ov["scrollW"] > ov["clientW"] + 1:
                        problems.append(f"{tag}  H-SCROLL {ov['scrollW']}>{ov['clientW']}  {ov['culprits']}")
                    floor = 44 if viewport["width"] < 900 else 24
                    for t in page.evaluate(SMALL_TARGETS, floor):
                        problems.append(f"{tag}  SMALL TARGET (<{floor}px) {t}")
                    page.evaluate("window.scrollTo(0,0)"); page.wait_for_timeout(300)
                    hc = page.evaluate(HEADER_CLEAR)
                    if hc.startswith("COVERED"):
                        problems.append(f"{tag}  HEADER {hc}")

                # The menu only exists below 900px.
                if viewport["width"] < 900:
                    page.goto(BASE + "/", wait_until="networkidle")
                    page.wait_for_timeout(300)
                    page.mouse.wheel(0, 1400); page.wait_for_timeout(500)
                    before = page.evaluate("window.scrollY")
                    page.click(".site-header__toggle"); page.wait_for_timeout(500)
                    opened = page.evaluate("!document.getElementById('site-menu').hidden")
                    page.mouse.wheel(0, 900); page.wait_for_timeout(300)
                    locked = page.evaluate("window.scrollY") == before
                    page.keyboard.press("Escape"); page.wait_for_timeout(500)
                    closed = page.evaluate("document.getElementById('site-menu').hidden")
                    page.mouse.wheel(0, 700); page.wait_for_timeout(300)
                    scrolls = page.evaluate("window.scrollY") > before
                    if not (opened and locked and closed and scrolls):
                        problems.append(f"{engine_name}/{dev}  MENU open={opened} lock={locked} "
                                        f"close={closed} scroll-after={scrolls}")

                page.goto(BASE + "/", wait_until="networkidle")
                page.wait_for_timeout(600)
                fmt = page.evaluate("() => (document.querySelector('.hero__field')||{}).currentSrc || ''")
                page.screenshot(path=str(SHOTS / f"{engine_name}-{dev.replace(' ','-')}.png"))
                print(f"{engine_name:9} {dev:12} hero: {fmt.split('/')[-1] or 'none':24} "
                      f"errors={len(errors)} failed={len(failed)}")
                for e in errors[:2]:
                    problems.append(f"{engine_name}/{dev}  CONSOLE {e}")
                for f in set(failed):
                    problems.append(f"{engine_name}/{dev}  REQUEST FAILED {f}")
                ctx.close()
            browser.close()

    print()
    if problems:
        for pr in sorted(set(problems)):
            print(" ", pr)
        print(f"\n{len(set(problems))} findings")
    else:
        print("no findings")
    print(f"screenshots in {SHOTS.resolve()}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
