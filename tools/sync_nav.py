#!/usr/bin/env python3
"""sync_nav.py: keeps the top navigation and footer navigation identical on every page of the site.

The nav is defined ONCE, in TOP_NAV and FOOTER_NAV below. To add, rename or reorder a nav link, edit
those lists and run this script (or just push: the "Sync site navigation" GitHub Action runs it on
every push to main and commits any fixes).

It rewrites every `<div class="top-nav">...</div>` and `<nav aria-label="Footer">...</nav>` block in
every .html file in the repo, including templates such as
free-guides/guides-for-everything-ai/templates/site.html, so generated pages keep the nav when rebuilt.
The link for the section a page belongs to gets aria-current="page" (worked out from the page's path).
Pages without those blocks (redirect stubs, PDF templates, verification files) are left alone.

Usage:
  python3 tools/sync_nav.py           # fix every page in place
  python3 tools/sync_nav.py --check   # change nothing; exit 1 and list pages that are out of sync
Idempotent: running it twice changes nothing the second time.
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

# (href, label) in display order. Edit here, and only here.
TOP_NAV = [
    ("/books/", "Books"),
    ("/free-guides/", "Free Guides"),
    ("/ai-deals/", "Free/Discounted AI Deals"),
    ("/projects/", "Projects"),
    ("/brand/", "Brand"),
    ("/connect/", "Connect"),
]
FOOTER_NAV = [
    ("/books/", "Books"),
    ("/free-guides/", "Free Guides"),
    ("/ai-deals/", "Free/Discounted AI Deals"),
    ("/projects/", "Projects"),
    ("/brand/", "Brand"),
    ("/company/", "Company"),
    ("/connect/", "Connect"),
]

SKIP_DIRS = {".git", "node_modules", ".github", ".claude"}
TOP_RE = re.compile(r'<div class="top-nav">.*?</div>', re.S)
FOOT_RE = re.compile(r'<nav aria-label="Footer">.*?</nav>', re.S)


def section_of(path: Path) -> str:
    """The URL section a file belongs to: free-guides/aws-guides/index.html -> /free-guides/."""
    parts = path.relative_to(ROOT).parts
    return f"/{parts[0]}/" if len(parts) > 1 else "/"


def top_nav(current: str) -> str:
    here = ' aria-current="page"'
    links = "".join(
        f'<a class="top-link" href="{href}"{here if href == current else ""}>{label}</a>'
        for href, label in TOP_NAV
    )
    return f'<div class="top-nav">{links}</div>'


def footer_nav() -> str:
    return '<nav aria-label="Footer">' + "".join(f'<a href="{h}">{l}</a>' for h, l in FOOTER_NAV) + "</nav>"


def html_files():
    for p in sorted(ROOT.rglob("*.html")):
        if not SKIP_DIRS.intersection(p.relative_to(ROOT).parts):
            yield p


def main() -> int:
    check = "--check" in sys.argv
    changed = []
    for path in html_files():
        raw = path.read_bytes().decode("utf-8")
        new = TOP_RE.sub(lambda _: top_nav(section_of(path)), raw)
        new = FOOT_RE.sub(lambda _: footer_nav(), new)
        if new != raw:
            changed.append(path.relative_to(ROOT).as_posix())
            if not check:
                path.write_bytes(new.encode("utf-8"))  # bytes in, bytes out: line endings are preserved
    verb = "out of sync" if check else "updated"
    for c in changed:
        print(f"{verb}: {c}")
    print(f"{len(changed)} page(s) {verb}." if changed else "All pages already have the current navigation.")
    return 1 if (check and changed) else 0


if __name__ == "__main__":
    sys.exit(main())
