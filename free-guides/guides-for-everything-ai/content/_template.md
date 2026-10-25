---
# ── Copy this file to content/<slug>.md to start a new manual. ──────────────
# Files starting with "_" are skipped by `node build.mjs` (build one with
# `node build.mjs _template`).
title: Template Manual                 # cover title, running header, PDF title
# title_html: Template <span class="soft">Manual</span>   # optional rich cover title
subtitle: Every building block of the template, on one page
volume: 10                             # shows "Vol. 10" on the cover (omit to hide)
edition: October 2026                  # month the facts were checked
# kicker: A Beginner's Manual          # small boxed label above the cover title
# audience: For complete beginners     # cover footer text
accent: "#D97757"                      # main colour (headings, steps, rules)
accent2: "#F2C14E"                     # secondary colour (cover art highlights)
motif: orbits                          # cover art: orbits | grid | waves | blocks | network | pages
# cover: dark                          # dark cover (default is white, toner-friendly)
# chapter_break: false                 # let chapters flow instead of new pages
# toc_depth: 1                         # 1 = chapters only, 2 = chapters + sections
# numbered: false                      # turn off chapter/section numbers
blurb: |
  Shown on the inside cover. Two short paragraphs that say what the manual
  covers and who it's for. **Markdown** works here.
# disclaimer: Custom text for the bottom of the inside cover.
---

# Getting Started

The first paragraph after a chapter title is styled as a larger lead-in.

:::summary In this chapter
- What a terminal is
- How to install the tool
:::

## Inline elements

A **bold term** the first time a word appears (add it to the glossary too). Keys: <kbd>Ctrl</kbd> + <kbd>C</kbd>. Menu path: [[Settings > Privacy > Data controls]]. Price badges: {{Free}} {{Freemium}} {{Paid}}. Inline `code`.

## Callouts

> [!TIP]
> A shortcut or good habit.

> [!NOTE]
> Useful background.

> [!IMPORTANT]
> Something not to miss.

> [!WARNING] Custom title
> Easy to get wrong.

> [!CAUTION]
> Can lose data, money, or access. (`[!DANGER]` works too.)

## Steps

Bold text ending in a period becomes the step's title.

:::steps Install it
1. **Open a terminal.** On a Mac press <kbd>Cmd</kbd> + <kbd>Space</kbd> and type Terminal.
2. **Run the installer.**
   ```bash
   curl -fsSL https://example.com/install.sh | bash
   ```
3. **Check it worked.** Type `tool --version`.
:::

## Code

```json title=settings.json
{
  "permissions": { "defaultMode": "acceptEdits" }
}
```

```prompt
A "prompt" block: text to paste into an AI tool, shown in the body font.
```

## Tables

| Plan | Price | Good for |
|---|---|---|
| Free | $0 | Trying it |
| Pro | $20/mo | Daily use |

:::compact
| Dense table | For directories | Price |
|---|---|---|
| **Tool** | Smaller type and padding | {{Freemium}} |
:::

## Other blocks

:::checklist
- Printable tick-boxes
- One per line
:::

:::cheatsheet
A boxed quick-reference panel.
:::

:::cols
- Two-column
- list
- for short
- items
:::

# Glossary {.unnumbered}

:::glossary
Terminal
: A text window for typing commands. Entries are sorted automatically.

API key
: A secret password that lets a program use a service.
:::
