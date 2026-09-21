"""
Accessibility audit: axe-core over every route, at phone and desktop widths.

Run against a PRODUCTION build, not the dev server: dev ships extra DOM and
different class names.

    cd web && npx next build && npx next start -p 3190
    python scripts/a11y-audit.py

Reduced motion is forced on. The reveal-on-scroll animation fades sections in
from opacity 0, and axe computes contrast against the composited colour, so
auditing mid-transition reports every revealed paragraph as a contrast failure
at whatever opacity it happened to be caught at. Reduced motion pins them at
opacity 1, which is the state the text is actually read in.

Needs: pip install playwright && playwright install chromium
       npm i axe-core   (in this directory, or set AXE to its path)
"""
import json, os, pathlib, sys
from playwright.sync_api import sync_playwright

AXE = pathlib.Path(os.environ.get("AXE", "node_modules/axe-core/axe.min.js"))
BASE = os.environ.get("BASE", "http://localhost:3190")
ROUTES = ["/", "/faq", "/privacy", "/this-route-does-not-exist"]
VIEWS = [("desktop", {"width": 1440, "height": 900}), ("phone", {"width": 390, "height": 844})]
TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"]

RUN = r"""async (tags) => (await axe.run(document, { runOnly: { type: 'tag', values: tags } }))
  .violations.map(v => ({ id: v.id, impact: v.impact, help: v.help,
    nodes: v.nodes.slice(0, 8).map(n => ({
      target: n.target.join(' '),
      why: (n.failureSummary || '').replace(/\s+/g, ' ').slice(0, 220) })) }))"""


def main():
    if not AXE.exists():
        sys.exit(f"axe-core not found at {AXE}. npm i axe-core, or set AXE=<path>.")
    axe_src = AXE.read_text(encoding="utf-8")
    found = []
    with sync_playwright() as p:
        browser = p.chromium.launch()
        for vname, viewport in VIEWS:
            page = browser.new_page(viewport=viewport, reduced_motion="reduce")
            for route in ROUTES:
                page.goto(BASE + route, wait_until="networkidle")
                # Everything below the fold is lazy: walk the whole page first.
                for _ in range(20):
                    page.mouse.wheel(0, 1200)
                    page.wait_for_timeout(100)
                page.wait_for_timeout(600)
                page.evaluate(axe_src)
                for v in page.evaluate(RUN, TAGS):
                    found.append({"view": vname, "route": route, **v})
            page.close()
        browser.close()

    pathlib.Path("a11y-report.json").write_text(json.dumps(found, indent=1), encoding="utf-8")
    for v in found:
        print(f"{v['impact'] or '-':9} {v['view']:8} {v['route']:12} {v['id']}  {v['help']}")
        for n in v["nodes"][:5]:
            print(f"    {n['target']}\n      {n['why']}")
    print(f"\n{len(found)} violations. Full detail in a11y-report.json")
    return 1 if found else 0


if __name__ == "__main__":
    sys.exit(main())
