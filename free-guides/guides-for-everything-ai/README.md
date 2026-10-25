# Guides for Everything

Beautifully designed, print-ready beginner manuals, written in Markdown and rendered to US Letter PDFs through one shared template.

Each manual gets a designed cover, an inside cover with a reading legend, a table of contents with real page numbers, running headers and page numbers, numbered chapters and sections, tip/warning callouts, numbered step blocks, readable code blocks, tables, checklists, price badges, menu-path chips, and an alphabetized glossary.

## The manuals

Vols 1–10 come in **two editions**, published side by side and labelled on every cover, title page and page footer:

- **Claude Edition**: the expanded edition (roughly 100–150 pages each), written by Claude (Anthropic's AI) in Claude Code and published in GuidesForEverything PR #4. It keeps the original file names, so older links still work.
- **Grok Edition**: the concise edition (roughly 40–90 pages each), revised and fact-checked by Grok Bot in GrokAllManualsV1. Its files end in `-grok`.

Vols 11–21 exist in the Grok Edition only, written by Grok Bot.

### Vols 1–10: two editions

| # | Manual | Claude Edition | Grok Edition |
|---|---|---|---|
| 1 | Claude Code | [`content/claude-code.md`](content/claude-code.md) · [PDF](output/claude-code.pdf) | [`content/claude-code-grok.md`](content/claude-code-grok.md) · [PDF](output/claude-code-grok.pdf) |
| 2 | GitHub | [`content/github.md`](content/github.md) · [PDF](output/github.pdf) | [`content/github-grok.md`](content/github-grok.md) · [PDF](output/github-grok.pdf) |
| 3 | Vibe Coding | [`content/vibe-coding.md`](content/vibe-coding.md) · [PDF](output/vibe-coding.pdf) | [`content/vibe-coding-grok.md`](content/vibe-coding-grok.md) · [PDF](output/vibe-coding-grok.pdf) |
| 4 | Everyday AI Tools | [`content/ai-tools.md`](content/ai-tools.md) · [PDF](output/ai-tools.pdf) | [`content/ai-tools-grok.md`](content/ai-tools-grok.md) · [PDF](output/ai-tools-grok.pdf) |
| 5 | MCP (Model Context Protocol) | [`content/mcp.md`](content/mcp.md) · [PDF](output/mcp.pdf) | [`content/mcp-grok.md`](content/mcp-grok.md) · [PDF](output/mcp-grok.pdf) |
| 6 | n8n | [`content/n8n.md`](content/n8n.md) · [PDF](output/n8n.pdf) | [`content/n8n-grok.md`](content/n8n-grok.md) · [PDF](output/n8n-grok.pdf) |
| 7 | Notion | [`content/notion.md`](content/notion.md) · [PDF](output/notion.pdf) | [`content/notion-grok.md`](content/notion-grok.md) · [PDF](output/notion-grok.pdf) |
| 8 | Maximum Autonomy | [`content/maximum-autonomy.md`](content/maximum-autonomy.md) · [PDF](output/maximum-autonomy.pdf) | [`content/maximum-autonomy-grok.md`](content/maximum-autonomy-grok.md) · [PDF](output/maximum-autonomy-grok.pdf) |
| 9 | AI Tools, Connectors & MCP Directory | [`content/ai-tools-directory.md`](content/ai-tools-directory.md) · [PDF](output/ai-tools-directory.pdf) | [`content/ai-tools-directory-grok.md`](content/ai-tools-directory-grok.md) · [PDF](output/ai-tools-directory-grok.pdf) |
| 10 | Autonomous AI Trading | [`content/ai-trading.md`](content/ai-trading.md) · [PDF](output/ai-trading.pdf) | [`content/ai-trading-grok.md`](content/ai-trading-grok.md) · [PDF](output/ai-trading-grok.pdf) |

### Vols 11–21: Grok Edition

| # | Manual | Source | PDF |
|---|---|---|---|
| 11 | Running AI Locally | [`content/local-ai.md`](content/local-ai.md) | [`output/local-ai.pdf`](output/local-ai.pdf) |
| 12 | Custom GPTs, Gems & Claude Projects | [`content/custom-assistants.md`](content/custom-assistants.md) | [`output/custom-assistants.pdf`](output/custom-assistants.pdf) |
| 13 | AI Agents & Multi-Agent Workflows | [`content/ai-agents.md`](content/ai-agents.md) | [`output/ai-agents.pdf`](output/ai-agents.pdf) |
| 14 | Python for AI Beginners | [`content/python-ai.md`](content/python-ai.md) | [`output/python-ai.pdf`](output/python-ai.pdf) |
| 15 | AI APIs & Costs | [`content/ai-apis.md`](content/ai-apis.md) | [`output/ai-apis.pdf`](output/ai-apis.pdf) |
| 16 | Zapier & Make | [`content/zapier-make.md`](content/zapier-make.md) | [`output/zapier-make.pdf`](output/zapier-make.pdf) |
| 17 | AI for Personal Finance & Admin | [`content/ai-personal-finance.md`](content/ai-personal-finance.md) | [`output/ai-personal-finance.pdf`](output/ai-personal-finance.pdf) |
| 18 | AI Privacy & Security | [`content/ai-privacy-security.md`](content/ai-privacy-security.md) | [`output/ai-privacy-security.pdf`](output/ai-privacy-security.pdf) |
| 19 | AI for Healthcare Workers | [`content/ai-healthcare.md`](content/ai-healthcare.md) | [`output/ai-healthcare.pdf`](output/ai-healthcare.pdf) |
| 20 | Get the Most from Every AI Plan | [`content/prompt-maximization.md`](content/prompt-maximization.md) | [`output/prompt-maximization.pdf`](output/prompt-maximization.pdf) |
| 21 | AWS for Beginners | [`content/aws-beginners.md`](content/aws-beginners.md) | [`output/aws-beginners.pdf`](output/aws-beginners.pdf) |

Facts (install commands, settings, menu paths, flags, pricing) were checked against official documentation in October 2026.

## The website

Every build also writes **`index.html`**, a landing page with every manual's cover, page count, and Read/Download links, generated from `output/manifest.json` and [`templates/site.html`](templates/site.html). Covers are saved to `output/covers/`. The landing page is near-black with hot-pink accents and an animated halftone aurora (a WebGL dot grid lit by flowing pink and violet light, with a 2D glow fallback, static under reduced motion) behind the page. Headings use Bluu Next (self-hosted from `assets/fonts/`, SIL OFL 1.1, licence included) and text uses Hanken Grotesk. The Claude Edition shelf comes first and the Grok Edition sits at the bottom. The PDFs stay print-friendly white.

To publish it with **GitHub Pages** (free for public repos), do this once: repository **Settings › Pages**, then under **Build and deployment** set **Source** to **Deploy from a branch**, choose **`main`** and **`/ (root)`**, and click **Save**. The live site is **https://guidesforeverythingai.github.io/**, served from the `main` branch of [`guidesforeverythingai/guidesforeverythingai.github.io`](https://github.com/guidesforeverythingai/guidesforeverythingai.github.io); it updates every time you push rebuilt manuals there. (The old address, `https://atlasrearden8.github.io/GuidesForEverything/`, is being retired.) For a fork, a repo named `<name>.github.io` serves at `https://<name>.github.io/`, and any other repo name serves at `https://<name>.github.io/<repo>/`; every link on the page is relative, so both work.

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
| `edition_label`, `edition_note` | Edition name (for example `Claude Edition` or `Grok Edition`) shown on the cover, the title page and every page footer, plus a one-line note on who wrote it |
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
| `index.html` | Generated landing page (GitHub Pages serves it from the repo root) |
| `assets/fonts/` | Bluu Next webfonts (WOFF2 converted from Velvetyne's OTFs) with `OFL-BluuNext.txt` |
| `output/manifest.json`, `output/covers/` | Generated manual details and cover images for the site |
| `styles/manual.css` | The whole design: page setup, typography, components |
| `styles/fonts.css` | Self-hosted fonts (Fraunces, Inter, Source Serif 4, JetBrains Mono; all SIL Open Font License) |
| `styles/code.css` | Print-friendly syntax colors |
| `content/` | One Markdown file per manual |
| `output/` | Generated PDFs |
