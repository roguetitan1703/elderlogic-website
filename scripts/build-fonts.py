"""
Self-host the webfonts.

Google Fonts was a render-blocking third-party request: DNS, TLS, a stylesheet,
then the binaries, all before a character could paint, and worth ~870ms of
blocked render on throttled mobile. It also sends every visitor's IP address to
Google, which is not a thing to do casually for a healthcare client.

Only the weights the site actually renders are fetched. Measured, not guessed:

    Source Serif 4   450, 600   -> one variable file, 400..600
    IBM Plex Sans    450, 500, 600
    IBM Plex Mono    400, 600   (the mono is set at --fw-text: 450, which has
                                 no cut on Google Fonts and resolves to 400)

If a new weight is introduced in the tokens, add it here and re-run, otherwise
the browser will synthesize it and the type will look subtly wrong.

    python scripts/build-fonts.py   then   python scripts/build-ds.py
"""
import pathlib, re, subprocess, sys, urllib.request

UA = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                    "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"}
URL = ("https://fonts.googleapis.com/css2"
       "?family=Source+Serif+4:opsz,wght@8..60,400..600"
       "&family=IBM+Plex+Sans:wght@450;500;600"
       "&family=IBM+Plex+Mono:wght@400;600"
       "&display=swap")
# English copy on a US site. The other subsets have unicode-ranges that never
# match, so they would never be fetched, but they are not shipped either.
SUBSETS = ("latin", "latin-ext")

# Every face is then subset to the characters a Latin site can actually print.
# Google's "latin" cut carries the full Latin-1 repertoire plus a long tail of
# typographic and currency glyphs; Source Serif 4's variable file is 120 KB of
# it, on the critical path, for a page that uses about ninety characters. The
# range below is deliberately wider than the current copy so that adding a
# word never silently produces a missing glyph: all of ASCII, the Latin-1
# accents, curly quotes, dashes, the bullet, ellipsis, the common currency
# symbols, degree and the arrow the page draws in its links.
UNICODES = "U+0020-007E,U+00A0-00FF,U+2010-2015,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039,U+203A,U+2044,U+20AC,U+2122,U+2190-2193,U+00B0,U+2212,U+FEFF,U+FFFD"


# Variable axis ranges to keep, per family. Source Serif 4 ships an optical
# size axis covering 8pt to 60pt, and the deltas for the sizes this site never
# sets are most of the file: trimming opsz to the range the page actually
# renders (measured at 18px to 56px across all three routes and both
# breakpoints) takes the file from 102 KB to 46 KB. Pinning opsz outright would
# take it to 28 KB, and is rejected: the same face is set at 18px and at 56px,
# and a single optical size makes the small headings too delicate and the
# large one too coarse. Typography is this brand's identity, so the axis stays.
AXES = {"SourceSerif4": ["opsz=20:60", "wght=400:600"]}


def instance(path: pathlib.Path, axes: list[str]) -> None:
    """Narrow a variable font's axes. woff2 in, woff2 out."""
    from fontTools.ttLib import TTFont
    ttf, out = path.with_suffix(".tmp.ttf"), path.with_suffix(".out.ttf")
    f = TTFont(path); f.flavor = None; f.save(ttf)
    subprocess.run([sys.executable, "-m", "fontTools.varLib.instancer",
                    str(ttf), *axes, "-o", str(out)], check=True, capture_output=True)
    f = TTFont(out); f.flavor = "woff2"; f.save(path)
    ttf.unlink(); out.unlink()


def shrink(path: pathlib.Path) -> None:
    """Narrow the axes, then subset to the characters the site can print."""
    before = path.stat().st_size
    for family, axes in AXES.items():
        if path.name.startswith(family):
            instance(path, axes)
    tmp = path.with_suffix(".subset.woff2")
    subprocess.run(
        [sys.executable, "-m", "fontTools.subset", str(path),
         f"--unicodes={UNICODES}",
         "--layout-features=kern,liga,calt,tnum,onum,frac",
         "--flavor=woff2", "--retain-gids=0", "--desubroutinize",
         f"--output-file={tmp}"],
        check=True, capture_output=True,
    )
    tmp.replace(path)
    print(f"    subset {before / 1024:6.1f} -> {path.stat().st_size / 1024:5.1f} KB  {path.name}")

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "web" / "public" / "ds" / "fonts"


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    css = urllib.request.urlopen(urllib.request.Request(URL, headers=UA)).read().decode()
    faces, written = [], {}
    for subset, face in re.findall(r"/\*\s*([\w\[\]-]+)\s*\*/\s*(@font-face\s*\{.*?\})", css, re.S):
        if subset not in SUBSETS:
            continue
        fam = re.search(r"font-family:\s*'([^']+)'", face).group(1)
        wght = re.search(r"font-weight:\s*([^;]+);", face).group(1).strip().replace(" ", "_")
        url = re.search(r"url\((https://[^)]+\.woff2)\)", face).group(1)
        name = f"{fam.replace(' ', '')}-{wght}-{subset}.woff2"
        if name not in written:
            (OUT / name).write_bytes(urllib.request.urlopen(urllib.request.Request(url, headers=UA)).read())
            shrink(OUT / name)
            written[name] = (OUT / name).stat().st_size
        faces.append(face.replace(url, f"/ds/fonts/{name}"))

    (ROOT / "web" / "public" / "ds" / "tokens" / "fonts.css").write_text(
        "/* GENERATED by scripts/build-fonts.py. Do not edit by hand.\n"
        " * Self-hosted so nothing render-blocking is fetched cross-origin and\n"
        " * no visitor IP reaches a third party. font-display: swap is Google's\n"
        " * own, and is what stops the page holding text back while a face loads.\n"
        " *\n"
        " * The wordmark is an SVG, so the logo's own face is never needed here.\n"
        " * Body and interface text is IBM Plex Sans, headlines are Source Serif 4,\n"
        " * record data is IBM Plex Mono. */\n\n" + "\n".join(faces) + "\n",
        encoding="utf-8")

    print(f"{len(written)} files, {sum(written.values()) / 1024:.0f} KB")
    for k, v in sorted(written.items()):
        print(f"  {v / 1024:6.1f} KB  {k}")


if __name__ == "__main__":
    main()
