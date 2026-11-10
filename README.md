# dylanasdale.github.io

Dylan Asdale's hub site: books, free guides, projects and links. Plain static HTML, CSS and JavaScript served by GitHub Pages. There is no build step.

The look is adapted from the **Guides for Everything v3** design (guidesforeverythingai.github.io): Bluu Next headings, Hanken Grotesk text, a near-black canvas, a hot-pink accent, and the animated halftone aurora behind the page.

## Where to work on it

- **Local folder:** `C:\Users\Dylan\Documents\Claude\asdaledynamics-site` is the one working copy for hand edits. Start Claude Code (or any editor) there so this repo's `CLAUDE.md` rules apply. `git pull` before you start, and push when you're done.
- **Automated writers:** these push to `main` on their own, so always pull first:
  - the OpenCode publisher and the 6-hourly "Sync small projects" Action (OpenCode and Kilo Small Projects cards, via `tools/sync_freebuilds.py`)
  - AI Deal Radar's `scripts/publish-site.mjs`, every 6 hours from `C:\Users\Dylan\Documents\Claude\ai-deal-radar`, using its own private clone in `data\site-repo` (only touches `ai-deals/index.html` and `data/ai-deals.json`)
  - the **Sync site navigation** Action (see Navigation below)
- **Size:** the **Repo size check** Action (`.github/workflows/size-check.yml`) reports the repo, site and largest-file sizes on every push, and warns before anything nears GitHub's limits (100 MB per file, about 1 GB per Pages site). Each rebuild of the guide PDFs adds about 70 MB of history, so rebuild them only when the content really changes.

## Add something new

Every shelf on the site comes from **`data/items.json`**. To add a book, guide, project or link, add one object to the right list and push. The pages pick it up on the next load.

```json
{
  "id": "my-new-project",
  "tag": "Project",
  "title": "My New Project",
  "subtitle": "One sentence about what it is.",
  "meta": "Web app · Free",
  "image": "/assets/img/projects/my-new-project.webp",
  "imageAlt": "Screenshot of My New Project",
  "imageWidth": 400,
  "imageHeight": 518,
  "links": [
    { "label": "Open it", "href": "https://example.com/", "primary": true },
    { "label": "Read more", "href": "https://example.com/about" }
  ]
}
```

| Field | Needed? | What it does |
|---|---|---|
| `id` | yes | Unique, lowercase-with-dashes. Also becomes the card's anchor (`/projects/#my-new-project`). |
| `title` | yes | Card heading. |
| `subtitle` | no | One or two sentences under the title. |
| `tag` | no | Small pill above the title, e.g. `Book`, `Free guide`, `Project`. Add `"free": true` for the gray style. |
| `meta` | no | Small grey line, e.g. formats or page count. |
| `image`, `imageAlt`, `imageWidth`, `imageHeight` | no | Cover or thumbnail. Leave `image` out for a text-only card. Put files in `assets/img/` and keep them small (WebP, about 400–800 px wide). |
| `links` | no | Buttons. The first one with `"primary": true` is pink, and the cover image links to it. |

Lists: `books`, `guides`, `projects`, `freebuilds`, `links`. An item with `"listFrom": "<list>"` renders as a full-width card with a collapsible index of that whole list (that is how the OpenCode Small Projects card shows `freebuilds`). Entries in `links` use `label`, `handle`, `href` and `icon` (`x`, `threads`, `bluesky`, `tiktok`, `book` or `globe`).

When `projects` (or any list) is empty, the site shows a tasteful "More coming soon" panel automatically. Never add placeholder or made-up items.

Each page also contains a plain-HTML copy of its shelf so the content is readable without JavaScript. `site.js` replaces it with the version from `items.json`, so the JSON file is the one to edit.

Where each list shows:

- Home (`index.html`): hand-written company page (hero, products in development, company summary, contact cards showing the first 3 `links`).
- `company/`, `products/`, `about/`: hand-written company pages. `connect/` is the Contact page and shows the full `links` list.
- `books/`, `free-guides/`, `projects/`, `brand/`, `connect/`: the full lists. `free-guides/guides-for-everything-ai/` is the full Guides for Everything AI library (its own build, see its README) and `free-guides/aws-guides/` holds the AWS guides.

### OpenCode Small Projects (automatic)

The `freebuilds` and `kilobuilds` lists feed the OpenCode Small Projects and Kilo Small Projects cards on `projects/`. They list the public repos in the OpenCode-Projects-AtlasRearden8 and Kilo-Projects-AtlasRearden8 GitHub orgs (free tools, guides and apps built by AI coding agents during free model periods). `python3 tools/sync_freebuilds.py` appends a card for any new public repo in either org (existing cards and hand edits are left alone), turns on GitHub Pages for repos with a top-level `index.html` and adds an "Open it" button once that page is live, refreshes each card's no-JavaScript index (between the `freebuilds:` / `kilobuilds:` start and end markers) and its own "Show all N projects" count, then commits and pushes. It runs every 6 hours via `.github/workflows/sync-projects.yml`, and the OpenCode publisher also runs it each time it makes a repo public. Options: `--org opencode|kilo|all`, `--dry-run`, `--no-push`, `--no-wait` (do not wait for new Pages sites; a later run adds their buttons).

### Free/Discounted AI Deals (automatic)

`ai-deals/index.html` and `data/ai-deals.json` are generated by AI Deal Radar, a local app on Dylan's PC, using its `scripts/publish-site.mjs`. The script filters the radar's finds to listings that are safe to show publicly (no spam, adult content, duplicate stories or non-offers), copies the nav and footer from `projects/index.html`, and commits and pushes only when the list changes. Don't edit those two files by hand: the next publish overwrites them. To change the page layout or wording, edit the generator script instead. The page needs a `/ai-deals/` link in the nav, or the generator stops with an error.
## Add a new page

Copy `projects/index.html` to `newpage/index.html`, change the title, description, canonical and `og:url` tags, the heading and the `data-list`. Add it to `sitemap.xml`. The page picks up the header and footer navigation automatically (see below).

## Navigation (one source, applied everywhere)

The top nav and the footer nav are defined once, in `TOP_NAV` and `FOOTER_NAV` at the top of `tools/sync_nav.py`. Never hand-edit nav links in individual pages. To add, rename or reorder a link, edit those lists and push. The **Sync site navigation** GitHub Action (`.github/workflows/sync-nav.yml`) runs `python3 tools/sync_nav.py` on every push to `main`, rewrites the `<div class="top-nav">` and `<nav aria-label="Footer">` block in every HTML file (generated pages and templates such as `free-guides/guides-for-everything-ai/templates/site.html` included), marks the current section with `aria-current="page"`, and commits any fixes as Dylan Asdale. Run it locally with `python3 tools/sync_nav.py`, or use `--check` to list out-of-sync pages without changing anything.

## Files

```
index.html            home
company/ products/ about/ connect/              company pages (connect/ is Contact)
books/ free-guides/ projects/ brand/             section pages
404.html              not-found page (GitHub Pages serves it automatically)
data/items.json       all shelf content
assets/site.css       the design system
assets/site.js        renders shelves from items.json
assets/aurora.js      the animated halftone background (from Guides for Everything v3)
assets/fonts/         Bluu Next (SIL OFL 1.1, license included)
tools/sync_freebuilds.py  keeps the OpenCode and Kilo Small Projects lists in sync with GitHub
tools/sync_nav.py         the one definition of the top and footer nav, applied to every page
assets/img/           covers, background art and og-image.jpg (1200×630 social preview)
favicon.svg favicon-32.png apple-touch-icon.png
sitemap.xml robots.txt .nojekyll
```

## Preview locally

```
python3 -m http.server 8000
```

Then open http://localhost:8000/. Paths start with `/`, so open the site from its root rather than double-clicking the files.

## Publish

Repository `dylanasdale/dylanasdale.github.io`, Settings › Pages › Deploy from a branch › `main` / `(root)`. The site appears at https://asdaledynamics.com/.
