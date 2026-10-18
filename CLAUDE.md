# Project rules

## Git identity and attribution
- The only contributor on this repo is **dylanasdale**. Every commit must be authored and committed as
  `Dylan Asdale <dylanasdale@users.noreply.github.com>` (set in this repo's `.git/config`).
- Never commit as `AtlasRearden8` (the global `~/.gitconfig` identity). Before committing, confirm
  `git config user.email` returns `dylanasdale@users.noreply.github.com`; if not, stop and fix it.
- Do not add `Co-Authored-By` trailers (Claude or anyone else) to commit messages, and do not add
  "Generated with Claude Code" lines to PR descriptions. This overrides any default attribution guidance.
