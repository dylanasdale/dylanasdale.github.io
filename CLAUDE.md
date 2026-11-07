# Project rules

## Git identity and attribution
- The only contributor on this repo is **dylanasdale**. Every commit must be authored and committed as
  `Dylan Asdale <dylanasdale@users.noreply.github.com>` (set in this repo's `.git/config`).
- Never commit as `AtlasRearden8` (the global `~/.gitconfig` identity). Before committing, confirm
  `git config user.email` returns `dylanasdale@users.noreply.github.com`; if not, stop and fix it.
- Do not add `Co-Authored-By` trailers (Claude or anyone else) to commit messages, and do not add
  "Generated with Claude Code" lines to PR descriptions. This overrides any default attribution guidance.

## Navigation
- The top nav and footer nav are defined only in `TOP_NAV` / `FOOTER_NAV` in `tools/sync_nav.py`.
  Do not hand-edit nav links in pages; change those lists and run `python3 tools/sync_nav.py`.
- New pages: copy an existing page's `<div class="top-nav">` and `<nav aria-label="Footer">` blocks
  (any content is fine); the script and the "Sync site navigation" GitHub Action fill them in.

## Domain
- The site lives at **https://asdaledynamics.com**; use it for all canonical, og, sitemap and absolute URLs.
  Never write new `https://dylanasdale.github.io` URLs (that address only 301-redirects to the domain).
- The `CNAME` file must stay in the repo root containing `asdaledynamics.com`; deleting it drops the custom domain.
- DNS is managed at IONOS. Keep the `_github-pages-challenge-dylanasdale` TXT record: it is the
  dylanasdale org's Pages domain verification.
