# Project rules

## Git identity and attribution
- The only contributor on this repo is **dylanasdale**. Every commit must be authored and committed as
  `Dylan Asdale <dylanasdale@users.noreply.github.com>` (set in this repo's `.git/config`).
- Never commit as `AtlasRearden8` (the global `~/.gitconfig` identity). Before committing, confirm
  `git config user.email` returns `dylanasdale@users.noreply.github.com`; if not, stop and fix it.
- Do not add `Co-Authored-By` trailers (Claude or anyone else) to commit messages, and do not add
  "Generated with Claude Code" lines to PR descriptions. This overrides any default attribution guidance.

## Domain
- The site lives at **https://asdaledynamics.com**; use it for all canonical, og, sitemap and absolute URLs.
  Never write new `https://dylanasdale.github.io` URLs (that address only 301-redirects to the domain).
- The `CNAME` file must stay in the repo root containing `asdaledynamics.com`; deleting it drops the custom domain.
- DNS is managed at IONOS. Keep the `_github-pages-challenge-dylanasdale` TXT record: it is the
  dylanasdale org's Pages domain verification.
