# Guides for Everything

Beautifully designed, print-ready beginner manuals, written in Markdown and rendered to US Letter PDFs through one shared template.

Each manual gets a designed cover, an inside cover with a reading legend, a table of contents with real page numbers, running headers and page numbers, numbered chapters and sections, tip/warning callouts, numbered step blocks, readable code blocks, tables, checklists, price badges, menu-path chips, and an alphabetized glossary.

## The manuals

The library has ten volumes, all in the **Claude Edition**: expanded manuals (roughly 110–200 pages each) written by Claude (Anthropic's AI) in Claude Code. The edition name is printed on every cover, title page and page footer.

| # | Manual | Source | PDF |
|---|---|---|---|
| 1 | Claude Code | [`content/claude-code.md`](content/claude-code.md) | [`output/claude-code.pdf`](output/claude-code.pdf) |
| 2 | GitHub | [`content/github.md`](content/github.md) | [`output/github.pdf`](output/github.pdf) |
| 3 | Vibe Coding | [`content/vibe-coding.md`](content/vibe-coding.md) | [`output/vibe-coding.pdf`](output/vibe-coding.pdf) |
| 4 | Everyday AI Tools | [`content/ai-tools.md`](content/ai-tools.md) | [`output/ai-tools.pdf`](output/ai-tools.pdf) |
| 5 | MCP (Model Context Protocol) | [`content/mcp.md`](content/mcp.md) | [`output/mcp.pdf`](output/mcp.pdf) |
| 6 | n8n | [`content/n8n.md`](content/n8n.md) | [`output/n8n.pdf`](output/n8n.pdf) |
| 7 | Notion | [`content/notion.md`](content/notion.md) | [`output/notion.pdf`](output/notion.pdf) |
| 8 | Maximum Autonomy | [`content/maximum-autonomy.md`](content/maximum-autonomy.md) | [`output/maximum-autonomy.pdf`](output/maximum-autonomy.pdf) |
| 9 | AI Tools, Connectors & MCP Directory | [`content/ai-tools-directory.md`](content/ai-tools-directory.md) | [`output/ai-tools-directory.pdf`](output/ai-tools-directory.pdf) |
| 10 | Autonomous AI Trading | [`content/ai-trading.md`](content/ai-trading.md) | [`output/ai-trading.pdf`](output/ai-trading.pdf) |

The Grok Edition (concise versions of Vols 1–10, and Vols 11–21) was retired in November 2026 and is no longer published.

Facts (install commands, settings, menu paths, flags, pricing) were checked against official documentation in October 2026.

## The website

Every build also writes **`index.html`**, a landing page with every manual's cover, page count, and Read/Download links, generated from `output/manifest.json` and [`templates/site.html`](templates/site.html). Covers are saved to `output/covers/`. The landing page is near-black with hot-pink accents and an animated halftone aurora (a WebGL dot grid lit by flowing pink and violet light, with a 2D glow fallback, static under reduced motion) behind the page. Headings use Bluu Next (self-hosted from `assets/fonts/`, SIL OFL 1.1, licence included) and text uses Hanken Grotesk. The PDFs stay print-friendly white.

The library is published as part of Dylan's hub site at **https://asdaledynamics.com/free-guides/guides-for-everything-ai/**, served by GitHub Pages from the `main` branch of [`dylanasdale/dylanasdale.github.io`](https://github.com/dylanasdale/dylanasdale.github.io) (this folder). Rebuild here and push that repo to update it. The old addresses only redirect: **https://guidesforeverythingai.github.io/** (the [`guidesforeverythingai/guidesforeverythingai.github.io`](https://github.com/guidesforeverythingai/guidesforeverythingai.github.io) repo, whose `index.html` and `404.html` forward visitors and deep links such as `/output/<slug>.pdf` to the same path here) and `https://atlasrearden8.github.io/GuidesForEverything/`. Don't publish new builds to those repos. The top and footer navigation in `templates/site.html` comes from the hub site's `tools/sync_nav.py`, so don't edit it here. Every link on the page is relative, so the page also works if you serve this folder on its own.

Regenerate only the page (no PDF rebuild) with `node build.mjs --site`.

## Build

Requires Node.js 20+.

```bash
npm install                 # once
node build.mjs              # build every manual in content/
node build.mjs github       # build one manual by slug (its file name)
node build.mjs --list       # list manuals
node build.mjs mcp --html   # also keep the intermediate HTML in output/ for debugging
node build.mjs --site       # regenerate only the landing page (index.html)
```

The build uses Playwright's bundled Chromium. If it isn't installed yet, run `npx playwright install chromium`, or use a browser you already have:

```bash
BROWSER_CHANNEL=msedge node build.mjs        # Microsoft Edge
BROWSER_CHANNEL=chrome node build.mjs        # Google Chrome
CHROME_PATH=/path/to/chrome node build.mjs   # any Chromium executable
```

Preview pages as images (handy for checking layout):

```bash
pdftoppm -png -r 50 output/github.pdf /tmp/github
```

## Add a new manual

1. Copy [`content/_template.md`](content/_template.md) to `content/<slug>.md`. The template documents every option and shows every building block.
2. Edit the front matter (title, subtitle, volume, accent colors, cover motif) and write the content.
3. Run `node build.mjs <slug>`. Your PDF appears at `output/<slug>.pdf`, and the landing page picks it up automatically.

That's it. No template or stylesheet changes are needed. Files whose names start with `_` are skipped when building everything.

## Writing reference

### Front matter

| Key | Purpose |
|---|---|
| `title`, `subtitle` | Cover, inside cover, running header, PDF metadata |
| `title_html` | Optional rich cover title (e.g. `<span class="soft">&amp;</span>` colors a word) |
| `volume` | Shows "Vol. NN" on the cover |
| `edition` | Month the facts were checked (cover and disclaimer) |
| `kicker`, `audience` | Small cover label and cover footer text |
| `edition_label`, `edition_note` | Edition name (for example `Claude Edition`) shown on the cover, the title page and every page footer, plus a one-line note on who wrote it |
| `accent`, `accent2` | Main and secondary colors |
| `motif` | Cover art: `orbits`, `grid`, `waves`, `blocks`, `network`, `pages` |
| `cover: dark` | Dark cover (the default is a white, toner-friendly cover) |
| `chapter_break: false` | Chapters flow continuously (good for directories) |
| `toc_depth: 1` | Contents shows chapters only |
| `toc_compact: true` | Tightens Contents spacing (use if the last Contents page is nearly empty) |
| `toc_compact: dense` | Tightens Contents spacing further, for very long manuals |
| `glossary_compact: true` | Tightens Glossary spacing (use if the last Glossary page is nearly empty) |
| `numbered: false` | No chapter/section numbers |
| `blurb`, `disclaimer` | Inside-cover text (Markdown allowed in `blurb`) |

### Structure

- `# Chapter title` starts a numbered chapter on a new page; `## Section` is numbered `N.M` and listed in the contents.
- Add `{.unnumbered}` to a heading for unnumbered chapters such as `# Glossary {.unnumbered}`.
- The first paragraph after a chapter title is styled as a lead-in.

### Building blocks

| You write | You get |
|---|---|
| `> [!TIP]` / `[!NOTE]` / `[!IMPORTANT]` / `[!WARNING]` / `[!CAUTION]` (or `[!DANGER]`), optional title after it | Colored callout box with icon |
| `:::steps Title` + numbered list + `:::` | Numbered step block; a bold phrase ending in a period becomes each step's title |
| `:::summary In this chapter` … `:::` | Tinted "in this chapter" box |
| `:::checklist` … `:::` | Printable tick-box list |
| `:::cheatsheet` … `:::` | Boxed quick-reference panel |
| `:::compact` + table + `:::` | Dense table (for directories) |
| `:::cols` … `:::` | Two-column layout |
| `:::glossary` + `Term` / `: Definition` lines + `:::` | Alphabetized glossary |
| ` ```bash ` (or `json`, `yaml`, `powershell`, `python`, …) | Labeled, syntax-highlighted code block |
| ` ```json title=settings.json ` | Code block labeled with a file name |
| ` ```prompt ` | A prompt to paste into an AI tool |
| `{{Free}}`, `{{Freemium}}`, `{{Paid}}` | Price badges |
| `[[Settings > Privacy > Data]]` | Menu-path chips |
| `<kbd>Ctrl</kbd>` | Keyboard key |

Straight quotes become typographic quotes automatically (never inside code).

## How it works

```
content/<slug>.md
   │  build.mjs: front matter (gray-matter) + Markdown (marked) + custom blocks,
   │             highlight.js for code, generated cover art, table of contents
   ▼
templates/manual.html  +  styles/manual.css, fonts.css, code.css
   │  templates/layout.js keeps headings with their content and splits long
   │  tables and step lists so nothing is stranded at the bottom of a page
   ▼
Paged.js (in headless Chromium via Playwright) paginates for print:
   named pages, running headers, page counters, target-counter() for the TOC
   ▼
output/<slug>.pdf   (US Letter, embedded fonts, PDF bookmarks)
```

| File | Role |
|---|---|
| `build.mjs` | The build: Markdown → HTML → PDF |
| `templates/manual.html` | Page skeleton: cover, inside cover, contents, body |
| `templates/layout.js` | Pre-pagination layout fixes (keep-with-next, table and step splitting) |
| `templates/site.html` | The landing page template; `build.mjs` fills in the manuals |
| `index.html` | Generated landing page, served at asdaledynamics.com/free-guides/guides-for-everything-ai/ |
| `assets/fonts/` | Bluu Next webfonts (WOFF2 converted from Velvetyne's OTFs) with `OFL-BluuNext.txt` |
| `output/manifest.json`, `output/covers/` | Generated manual details and cover images for the site |
| `styles/manual.css` | The whole design: page setup, typography, components |
| `styles/fonts.css` | Self-hosted fonts (Fraunces, Inter, Source Serif 4, JetBrains Mono; all SIL Open Font License) |
| `styles/code.css` | Print-friendly syntax colors |
| `content/` | One Markdown file per manual |
| `output/` | Generated PDFs |
