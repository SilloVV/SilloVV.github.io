"""Generate WebP derivatives of the site's raster assets.

Run from the repository root: python tools/optimize_images.py
Source files are left untouched so they stay available as <picture> fallbacks.
"""

from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent

# Max rendered width per asset family, derived from the CSS layout so we never
# ship pixels the browser will throw away.
TARGETS: list[tuple[str, int, int]] = [
    ("assets/about_me_images/*.png", 1400, 80),
    ("assets/certificates/*.jpg", 800, 78),
    ("assets/projects/*.png", 760, 80),
    ("assets/screenshots/*.png", 1100, 78),
    ("assets/face-animation-light/*.png", 700, 82),
    ("assets/logos/*.png", 640, 85),
    ("assets/logos/*.jpeg", 320, 85),
    ("assets/icons/*.png", 400, 85),
]


def convert(src: Path, max_width: int, quality: int) -> tuple[int, int] | None:
    dst = src.with_suffix(".webp")
    with Image.open(src) as im:
        im = im.convert("RGBA" if "A" in im.getbands() else "RGB")
        if im.width > max_width:
            height = round(im.height * max_width / im.width)
            im = im.resize((max_width, height), Image.LANCZOS)
        im.save(dst, "WEBP", quality=quality, method=6)
    return src.stat().st_size, dst.stat().st_size


def main() -> int:
    before = after = 0
    for pattern, max_width, quality in TARGETS:
        for src in sorted(ROOT.glob(pattern)):
            result = convert(src, max_width, quality)
            if result is None:
                continue
            src_size, dst_size = result
            before += src_size
            after += dst_size
            rel = src.relative_to(ROOT).as_posix()
            saved = 100 - dst_size * 100 / src_size
            print(f"{rel:<52} {src_size // 1024:>5} KB -> {dst_size // 1024:>5} KB  ({saved:.0f}%)")

    print(f"\nTotal: {before // 1024} KB -> {after // 1024} KB "
          f"({100 - after * 100 / before:.0f}% smaller)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
