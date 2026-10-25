# dylanasdale.github.io

Dylan Asdale's hub site: books, free guides, projects and links. Plain static HTML, CSS and JavaScript served by GitHub Pages. There is no build step.

The look is adapted from the **Guides for Everything v3** design (guidesforeverythingai.github.io): Bluu Next headings, Hanken Grotesk text, a near-black canvas, a hot-pink accent, and the animated halftone aurora behind the page.

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

Lists: `books`, `guides`, `projects`, `freebuilds`, `links`. Entries in `links` use `label`, `handle`, `href` and `icon` (`x`, `threads`, `bluesky`, `tiktok`, `book` or `globe`).

When `projects` (or any list) is empty, the site shows a tasteful "More coming soon" panel automatically. Never add placeholder or made-up items.

Each page also contains a plain-HTML copy of its shelf so the content is readable without JavaScript. `site.js` replaces it with the version from `items.json`, so the JSON file is the one to edit.

Where each list shows:

- Home (`index.html`): two hand-written featured cards (the book and the free library), then the first 3 guide highlights, projects, and the first 3 links.
- Home also shows the first 3 `freebuilds` cards.
- `books/`, `free-guides/`, `projects/`, `free-builds/`, `brand/`, `connect/`: the full lists. `free-guides/guides-for-everything-ai/` is the full Guides for Everything AI library (its own build, see its README) and `free-guides/aws-guides/` holds the AWS guides.

### Free Builds (automatic)

`free-builds/` lists the public repos in the OpenCode-Projects-AtlasRearden8 GitHub org (free tools, guides and apps built by AI coding tools during free model periods). `python3 tools/sync_freebuilds.py` appends a card for any new public repo (existing cards and hand edits are left alone), turns on GitHub Pages for repos with a top-level `index.html` and adds an "Open it" button once that page is live, refreshes the no-JavaScript copies between the `freebuilds:start`/`freebuilds:end` markers, then commits and pushes. The OpenCode publisher runs it automatically each time it makes a repo public. Add `--dry-run` to preview or `--no-push` to commit locally only.

## Add a new page

Copy `projects/index.html` to `newpage/index.html`, change the title, description, canonical and `og:url` tags, the heading and the `data-list`. Add the page to the nav in every page's header and footer, and to `sitemap.xml`.

## Files

```
index.html            home
books/ free-guides/ projects/ free-builds/ brand/ connect/   section pages
404.html              not-found page (GitHub Pages serves it automatically)
data/items.json       all shelf content
assets/site.css       the design system
assets/site.js        renders shelves from items.json
assets/aurora.js      the animated halftone background (from Guides for Everything v3)
assets/fonts/         Bluu Next (SIL OFL 1.1, license included)
tools/sync_freebuilds.py  keeps the Free Builds shelf in sync with GitHub
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

Repository `dylanasdale/dylanasdale.github.io`, Settings › Pages › Deploy from a branch › `main` / `(root)`. The site appears at https://dylanasdale.github.io/.
