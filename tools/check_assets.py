"""Verify every local asset referenced by the site exists, case-sensitively.

GitHub Pages serves from a case-sensitive filesystem while Windows does not, so
a wrong-case path only breaks in production. Run from the repository root:
python tools/check_assets.py
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOURCES = ["index.html", "css/style.css", "js/typing.js", "js/main.js"]
REFERENCE = re.compile(r'(?:src|srcset|href)="([^"]+)"|url\(([^)]+)\)')


def candidates(text: str):
    for m in REFERENCE.finditer(text):
        yield (m.group(1) or m.group(2)).strip("'\" ")


def main() -> int:
    # Real on-disk paths, so a case mismatch fails the lookup
    on_disk = {p.relative_to(ROOT).as_posix() for p in ROOT.rglob("*") if p.is_file()}
    missing: list[str] = []

    for source in SOURCES:
        path = ROOT / source
        # CSS resolves against its own location; JS strings resolve against the document
        base = path.parent if path.suffix == ".css" else ROOT
        for ref in candidates(path.read_text(encoding="utf-8")):
            if ref.startswith(("http", "data:", "mailto:", "#")):
                continue
            resolved = (ROOT if ref.startswith("/") else base) / ref.lstrip("/")
            try:
                rel = resolved.resolve().relative_to(ROOT).as_posix()
            except ValueError:
                continue
            if rel not in on_disk:
                missing.append(f"{source}: {ref}")

    if missing:
        print("Broken references:")
        for entry in missing:
            print(f"  {entry}")
        return 1

    print("All local references resolve.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
