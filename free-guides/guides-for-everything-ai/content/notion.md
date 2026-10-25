---
title: Notion
subtitle: One workspace for notes, docs, projects, and databases, with AI built in. A complete beginner's manual
volume: 7
edition_label: Claude Edition
edition_note: "Expanded edition written by Claude (Anthropic's AI) in Claude Code and published in GuidesForEverything PR #4."
glossary_compact: true
edition: October 2026
accent: "#C2711B"
accent2: "#2E8C74"
motif: pages
blurb: |
  Notion is a flexible workspace where you write notes and documents, manage projects and to-do lists, build simple databases, and share it all with others. Think of it as digital LEGO: a handful of simple pieces (pages, blocks, and databases) that snap together into almost anything, from a personal journal to a whole company wiki.

  This manual assumes you have never used Notion. It starts with the screen and the building blocks, then teaches databases in depth: every property type, every view, filters, relations, rollups, and Formula 2.0 with more than twenty worked examples. Along the way you'll build eleven real systems step by step, from a habit tracker and a budget to a CRM and a team wiki. Later chapters cover Notion AI, AI Meeting Notes, Custom Agents, forms, Notion Sites, Notion Calendar, sharing and permissions, import and export, the API, the Notion MCP server for AI assistants, the apps, plans and prices, and a large troubleshooting table.
---

# Welcome to Notion

Notion is one app that can replace a notebook, a word processor, a to-do list, a spreadsheet, and a simple website builder. You don't need to learn all of it at once. Most people start with a single page of notes and grow from there, one small piece at a time.

:::summary In this chapter
- What Notion is good for, and what it isn't
- The six words you need to know before you start
- Creating your account and workspace
- Finding your way around the screen
- How to use this manual
:::

## What people use Notion for

- **Notes and journals**: class notes, meeting notes, daily logs.
- **Documents and wikis**: how-to guides, company handbooks, recipes.
- **Task and project management**: to-do lists, Kanban boards, content calendars.
- **Databases**: reading lists, client lists (a simple CRM), inventories, habit trackers.
- **Websites**: publish any page to the web with Notion Sites.
- **Forms**: collect sign-ups, requests, and survey answers straight into a database.
- **AI help**: write, summarize, answer questions about your workspace, take meeting notes, and automate busywork.

## What Notion is not

Notion is a great all-rounder, but it's honest to say where it isn't the best tool:

| If you need… | Consider instead | Why |
|---|---|---|
| Heavy number crunching | A spreadsheet (Excel, Google Sheets) | Notion formulas work per row, not across a grid |
| Pixel-perfect print layouts | A word processor or design tool | Notion pages are built for screens |
| A huge public website | A website builder | Notion Sites suits simple sites best |
| Real-time chat | Slack, Teams | Notion has comments, not chat rooms |

Many people use Notion *alongside* these tools, and Notion connects to most of them (Chapter 24).

## Six words to know

You'll meet these words on every page of this manual. Don't worry about memorizing them; they'll become natural quickly.

| Word | Plain-English meaning |
|---|---|
| **Workspace** | Your whole Notion space: every page, every member, every setting |
| **Page** | A document. It can hold text, images, and other pages |
| **Block** | One piece of content on a page, such as a paragraph or an image |
| **Database** | A collection of pages that share the same fields, shown as a table, board, calendar, and more |
| **Property** | One field on a database item, such as a due date or a status |
| **View** | One way of looking at a database, with its own filters and layout |

## Get started

:::steps Create your account
1. **Go to notion.com** and click **Get Notion free**, or download the desktop and mobile apps from notion.com/download.
2. **Sign up** with your email, Google, or Apple account.
3. **Choose how you'll use it**: for yourself, with a team, or for school. This just picks starter templates.
4. **Name your workspace.** A **workspace** is your whole Notion account space; you can create more later (for example, one personal, one for work).
5. **Look around before deleting anything.** Notion usually adds a few starter pages. Read them: they're short tutorials, and you can delete them later.
:::

> [!TIP]
> Students and teachers can get the **Plus** plan free by signing up with a school email address. Thousands of school domains qualify, not just ones ending in .edu. See Chapter 28 for all the plans.

## The Notion screen

| Area | What it is |
|---|---|
| **Sidebar** (left) | Your pages in sections: **Teamspaces** (shared), **Private** (just you), and **Shared** (pages others shared with you); plus Search, Home, Inbox, and Settings |
| **Page** (center) | Whatever you're working on |
| **Top bar** | The page's location (its "breadcrumb"), **Share**, comments, updates, and the **•••** menu |
| **Notion AI** | The AI face at the bottom right, or press <kbd>Space</kbd> on an empty line |

The next chapter walks through each of these areas in detail.

> [!TIP]
> Press <kbd>Cmd</kbd> + <kbd>P</kbd> (Mac) or <kbd>Ctrl</kbd> + <kbd>P</kbd> (Windows) to search everything. It's the fastest way to jump to any page. <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>K</kbd> opens the same search.

## Your first page in two minutes

:::steps Make a page
1. **Click New page** in the sidebar (or press <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>N</kbd>).
2. **Type a title**, such as "My first page".
3. **Press Enter** to move into the page body and start typing.
4. **Type `/todo`** and press Enter to add a checkbox. Write "Learn Notion basics".
5. **Close the page.** There's no Save button: Notion saves every keystroke automatically.
:::

> [!NOTE]
> Notion stores everything in the cloud, so your pages appear on every device where you sign in. Notion also keeps its own backups. Chapter 23 shows how to make your own copies too.

## How to use this manual

- **Chapters 1–4** cover the basics: the screen, pages, blocks, and writing fast.
- **Chapters 5–11** teach databases from the ground up, including views, filters, relations, formulas, and automations.
- **Chapters 12–15** are hands-on builds: follow the steps and you'll end up with working systems.
- **Chapters 16–18** cover Notion AI, meeting notes, and agents.
- **Chapters 19–28** cover forms, sharing, websites, the calendar, moving data in and out, connections, the API, MCP, the apps, and plans.
- **Chapters 29–30** are reference: shortcuts and troubleshooting.

:::checklist
- I have a Notion account and a workspace
- I can find the sidebar, the page area, and the Share button
- I made a page with a to-do checkbox
- I know <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>P</kbd> opens search
:::

# Finding Your Way Around

Before you build anything, it helps to know where things live. This chapter is a guided tour of the workspace: the sidebar, Home, search, the Inbox, teamspaces, and the parts of a page.

:::summary In this chapter
- Workspaces, and how to switch between them
- The sidebar: tabs, sections, Library, Favorites, and Trash
- Home, Search, and the Inbox
- Teamspaces, and Private vs Shared pages
- The parts of a page, and the ••• menu
:::

## Workspaces

A **workspace** is a self-contained Notion world with its own pages, members, settings, and plan. You can belong to several. A common setup is one personal workspace and one for your job.

- **Switch workspaces:** click the workspace name in the sidebar to open the **workspace switcher**. From there you can also create a new workspace, add another account, log out, and open **Settings**.
- **Billing is per workspace.** Upgrading your work workspace doesn't upgrade your personal one.
- **Pages don't cross workspaces by themselves.** To move a page to another workspace, use **Move to** and pick the destination workspace.

## The sidebar

The **sidebar** is the panel on the left. Show or hide it with <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>\</kbd>, or the **<<** and **>>** buttons.

The sidebar is organized into **tabs**. Each tab has an icon, shortcut buttons at the top (such as **New page** or **My Tasks**), and **sections** that list your content. Your workspace may set up some tabs for you; you can show, hide, reorder, and reset them.

| Sidebar item | What it does |
|---|---|
| **Search** | Find any page, or jump to a recent one |
| **Home** | Upcoming events, recent pages, favorites, and tasks that need you |
| **Chats with Notion AI** | Your AI conversations and Custom Agents |
| **Meetings** | Upcoming meetings and past AI meeting notes |
| **Inbox** (top-right corner) | Mentions, comments, page updates, and reminders |
| **New item menu** (next to Inbox) | Start a page, an AI chat, or a meeting note |
| **Library** | Browse and manage every page you can access |
| **Workspace name** (bottom) | The workspace switcher and Settings |

> [!NOTE]
> Notion redesigns the sidebar from time to time, so yours may look slightly different. The Inbox always stays in the top-right corner of the sidebar, and your workspace name sits at the bottom.

### The Home tab's sections

The **Home** tab lists your content in sections such as **Upcoming events**, **Recents**, **Favorites**, **Agents**, **Teamspaces**, **Shared**, and **Private**. **My Tasks**, **Library**, **Marketplace**, **Help**, and **Trash** are always at the bottom.

- **Collapse a section** by clicking its name.
- **Customize a section** with the **•••** next to it: choose how many items show, move it up or down, or hide it.
- **Open in Library** with the book icon next to a section, to see its full list.

## Private, Shared, and Teamspaces

Where a page lives decides who can see it.

| Section | Who can see pages here |
|---|---|
| **Private** | Only you |
| **Shared** | You and the specific people you shared each page with |
| **Teamspaces** | Members of that teamspace |

Drag a page between sections to change who can see it. For example, drag a draft from **Private** into your team's teamspace when it's ready.

> [!CAUTION]
> Dragging a page into a teamspace shares it, and everything inside it, with every member of that teamspace. Check what's inside first.

### Teamspaces

A **teamspace** is a shared area for one group, such as Marketing or Family, with its own members and settings. Every team workspace has at least one teamspace that everyone belongs to.

:::steps Create a teamspace
1. **Find the Teamspaces label** in the sidebar and click the **+** next to it.
2. **Give it a name, a description, and an icon.**
3. **Choose its access:** **Open** (anyone in the workspace can join), **Closed** (visible to everyone, but you must be invited), or **Private** (hidden from non-members; Business and Enterprise plans only).
4. **Click Create teamspace.**
5. **Add people:** click **•••** next to the teamspace name, then **Add members**, and choose whether each person is a teamspace **member** or **owner**.
:::

Teamspace **owners** can see and edit everything in it and change its settings; **members** get the access the owners set. A **default teamspace** automatically includes everyone in the workspace. Notion recommends no more than three default teamspaces, even for large companies.

## Favorites, Recents, and Library

- **Favorites:** right-click any page in the sidebar and choose **Add to Favorites**. Favorites appear in their own sidebar section, and on paid plans they're kept available offline automatically.
- **Recents:** pages you opened lately, in order.
- **Library:** select **Library** in the sidebar to browse everything in tabs: Teamspaces, Recents, Favorites, Shared, Private, AI Meeting Notes, Agents, and Skills. You can select several pages at once and move, delete, or unfavorite them together.

## Search

Press <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>P</kbd> or <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>K</kbd>, or click **Search**. Start typing and results appear as you go. With no query, you'll see recently visited pages.

> [!TIP]
> To search *inside* the current page, use <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>F</kbd> instead.

## The Inbox

The **Inbox** collects your notifications: mentions of you, comments, changes to pages you created, assignments, and reminders. A red badge means something is unread. Icons at the top let you **Mark all as read**, **Archive all**, or filter by notification type. Click any notification to jump to its page.

## The parts of a page

| Part | How to use it |
|---|---|
| **Icon** | Hover above the title and click **Add icon**: an emoji or an image |
| **Cover** | Hover above the title and click **Add cover**: a banner image |
| **Title** | The page's name. It shows in the sidebar and in links |
| **Body** | Where your blocks go |
| **Breadcrumb** | The path at the top left, such as *Work › Projects › Launch*. Click any part to go there |
| **Share** | Who can see the page (Chapter 20) |
| **•••** | The page menu (below) |

### The ••• page menu

The **•••** at the top right of a page holds most page-level options:

- **Style:** pick a font (**Default**, **Serif**, or **Mono**). Under **Appearance & layout**, switch on **Small text** or **Full width**.
- **Copy link**, **Duplicate**, **Move to**, and **Move to Trash**.
- **Version history:** see and restore earlier versions (Chapter 20).
- **Available offline** (desktop and mobile apps): keep the page on your device (Chapter 27).
- **More:** includes **Import**, **Export**, and **Connections**.

## Trash

Deleted pages go to **Trash** (at the bottom of the Home tab). Pages stay there for **30 days**, then disappear for good. To bring one back, open Trash and click the curved arrow next to it; it returns to where it was.

> [!TIP]
> Accidentally deleted something more than 30 days ago? Notion keeps its own backups and support can sometimes restore a snapshot from the past 30 days. Click **?** at the bottom of the desktop app to message support.

## Settings

Open **Settings** from the workspace switcher. The sections you'll use most:

| Section | What's there |
|---|---|
| **Account** and **Preferences** | Your name, photo, theme (light or dark), language, start-up page |
| **Notifications** | Which alerts you get by email, desktop, and mobile |
| **People** or **Members** | Invite people and change roles (team plans) |
| **Teamspaces** | Teamspace defaults and rules |
| **Connections** | Apps and integrations linked to the workspace |
| **Notion AI** | AI connectors and model settings |
| **Sites** | Your Notion Sites domains |
| **Import** | Bring content in from other apps |
| **Billing** | Plan, invoices, and payment method |

> [!NOTE]
> Exact names vary a little by plan and by whether you're an owner. If you can't see a section, you may not have permission; ask a workspace owner.

:::checklist
- I can switch workspaces and open Settings
- I know the difference between Private, Shared, and Teamspaces
- I added one page to Favorites
- I found Trash and Library
- I opened a page's ••• menu and tried Full width
:::

# Pages and Blocks

Everything in Notion is made of **pages**, and every page is made of **blocks**. Once you understand blocks, the rest of Notion is just combining them in new ways.

:::summary In this chapter
- What a block is, and the three editing tools
- Every kind of block, by category
- Moving, nesting, and turning blocks into other types
- Columns, colors, toggles, and callouts
- Synced blocks: one block in many places
- Pages inside pages
:::

## Blocks: the LEGO bricks

A **block** is any single piece of content: a paragraph, a heading, a to-do checkbox, an image, a table, an embedded video. Each block can be moved, turned into another type, or nested inside another.

- Hover over any block and drag the **⋮⋮** handle to move it.
- Click the handle to **Turn into** another type, change its color, or duplicate or delete it.
- Drag a block to the far right of another block to create **columns**.

## The three editing tools

| Tool | Where it appears | What it does |
|---|---|---|
| **+** | Left margin, when you hover over a new line | Opens the menu of block types to add |
| **⋮⋮** (the "drag handle") | Left margin, when you hover over a block | Drag to move; click for the block menu |
| **/** (slash) | Wherever you type it | The keyboard way to add blocks or run actions |

The **⋮⋮ block menu** includes: **Turn into**, **Color**, **Copy link to block**, **Duplicate**, **Move to**, **Delete**, **Comment**, **Suggest edits**, and **Ask AI**. When you select several blocks, it also shows a word and character count.

## Every kind of block

### Basic blocks

| Block | What it's for | Quick way to add |
|---|---|---|
| **Text** | Ordinary paragraphs | Just type |
| **Page** | A subpage inside this page | `/page` |
| **To-do list** | Checkboxes | `[]` |
| **Heading 1, 2, 3** | Section titles, large to small | `#`, `##`, `###` + space |
| **Table** | A simple grid of rows and columns | `/table` |
| **Bulleted list** | Bullets | `-` + space |
| **Numbered list** | Numbered steps | `1.` + space |
| **Toggle list** | Hide content under a clickable arrow | `>` + space |
| **Quote** | A large pull-quote | `"` + space |
| **Divider** | A thin gray line | `---` |
| **Link to page** | A block that links to another page | `/link` |
| **Callout** | A boxed note with an icon | `/callout` |

### Media blocks

| Block | What it's for |
|---|---|
| **Image** | Upload, paste a link, or pick from Unsplash |
| **Video** | Upload a file, or embed from YouTube or Vimeo |
| **Audio** | Upload a recording, or embed from Spotify or SoundCloud |
| **File** | Attach any file |
| **Code** | Code with syntax highlighting and a copy button |
| **Web bookmark** | A link preview card for any web page (`/book`) |

> [!NOTE]
> On the Free plan, each uploaded file can be up to 5 MB. Paid plans allow unlimited uploads, up to about 5 GB per file.

### Embeds

An **embed** shows live content from another app inside your page. Notion works with 500+ embeds. Named shortcuts include Google Drive, Google Maps, Figma, Loom, Typeform, GitHub Gist, CodePen, Whimsical, and PDF. For anything else, type `/embed` and paste the link.

### Advanced blocks

| Block | What it does |
|---|---|
| **Table of contents** (`/toc`) | Links to every heading on the page, updated automatically |
| **Block equation** (`/math`) | A full-width math formula written in TeX |
| **Inline equation** (`/equation`) | A formula inside a sentence |
| **Button** (`/button`) | Runs actions when clicked (Chapter 11) |
| **Breadcrumb** (`/bread`) | Shows where this page lives in the workspace |
| **Synced block** | The same content shown in several places (below) |
| **Columns** (`/2`, `/3`…) | Side-by-side layout |
| **Toggle heading 1, 2, 3** | A heading that opens and closes like a toggle |

### Databases and views

You can also add a database right inside a page: `/table view`, `/board view`, `/calendar view`, `/gallery view`, `/list view`, `/timeline view`, `/chart`, `/form`, `/map`, and more. Chapters 5 to 8 explain databases fully.

## Moving and nesting blocks

- **Move:** drag the **⋮⋮** handle up or down. A blue line shows where it will land.
- **Move to another page:** drag it onto a page in the sidebar, or use **⋮⋮ › Move to**.
- **Nest:** press <kbd>Tab</kbd> to indent a block under the one above; <kbd>Shift</kbd> + <kbd>Tab</kbd> to un-indent. Nested blocks move with their parent.
- **Duplicate:** select the block (press <kbd>Esc</kbd>) and press <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>D</kbd>, or hold <kbd>Option</kbd>/<kbd>Alt</kbd> while you drag.
- **Turn into:** click **⋮⋮ › Turn into**, or type `/turn` at the start of a block.

> [!TIP]
> Made a mistake? <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>Z</kbd> undoes it, just like in any other app.

## Columns

:::steps Put two blocks side by side
1. **Hover over a block** until the ⋮⋮ handle appears.
2. **Drag it to the right edge** of another block. A vertical blue line appears.
3. **Let go.** The two blocks now sit in columns.
4. **Resize** by dragging the faint line between the columns.
:::

Or type `/2` and choose **2 columns**. You can drag in as many columns as fit across the page. To undo columns, drag the blocks back out underneath each other. On phones, columns are shown one under the other.

## Colors and highlights

- **Text color:** select text, click the **A** in the toolbar, and pick a text or background color.
- **Whole block:** **⋮⋮ › Color**, or type `/red`, `/blue background`, and so on. `/default` removes color.
- **Repeat your last color:** <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>H</kbd>.

## Toggles and toggle headings

A **toggle** hides its contents until you click its arrow. Use toggles for FAQs, long details, or answers to quiz questions. Type `>` and a space to start one, then press <kbd>Tab</kbd> on the next line to put content inside it.

You can also make a heading collapsible: turn a heading into a **toggle heading** with **⋮⋮ › Turn into**. Open or close every toggle on a page at once with <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>Option</kbd>/<kbd>Alt</kbd> + <kbd>T</kbd>.

## Callouts

A **callout** is a colored box with an icon, good for tips, warnings, and summaries. Type `/callout`, then click the icon to change it. You can put any blocks inside a callout, including lists and images.

## Simple tables vs databases

The `/table` block is a **simple table**: a plain grid, like one in a word processor. It's perfect for a small comparison. A **database** (`/table view`) is far more powerful: every row is a page with typed properties, and you can filter, sort, and show it in many views. If you catch yourself wanting to filter or sort a simple table, it's time to use a database instead.

## Synced blocks

A **synced block** shows the same content in several places. Edit any copy and every copy updates. Use it for a team mission statement, a contact list, or a disclaimer that appears on many pages.

:::steps Create a synced block
1. **Select the blocks** you want to reuse by dragging across them.
2. **Click ⋮⋮ › Turn into › Synced block.** A colored border appears around them.
3. **Copy the synced block** with the copy icon.
4. **Paste it** on another page. Both copies now stay in step.
:::

> [!WARNING]
> People who can't open the page with the original synced block won't see its contents in the copies. Share the original page with them first.

## Pages inside pages

Any page can contain other pages, so you can organize everything like folders. Type `/page` to create a subpage, or `[[` and a name to link to an existing page (or create a new one). Type `@` to mention a person, a page, or a date such as `@tomorrow`; dates can carry reminders.

> [!TIP]
> Keep your sidebar tidy with a few top-level "home" pages, such as **Home**, **Projects**, **Notes**, **Areas**, and **Archive**, and put everything else inside them.

## Worked example: a recipe page

:::steps Build a recipe page
1. **Create a page** called "Lemon pancakes" and add a food emoji icon and a cover photo.
2. **Add a callout** at the top: "Serves 4 · 20 minutes".
3. **Add two columns.** Left: an H2 "Ingredients" with a to-do list (tick items off as you shop). Right: an H2 "Method" with a numbered list.
4. **Add a toggle** called "Tips and variations" and put extra notes inside.
5. **Add an image block** at the bottom for a photo of your result.
:::

:::checklist
- I can add blocks with **+** and with `/`
- I moved a block with ⋮⋮ and nested one with <kbd>Tab</kbd>
- I made two columns
- I tried a toggle, a callout, and a divider
- I know the difference between a simple table and a database
:::

# Writing Faster

You can do almost everything in Notion with the mouse. But a few keyboard habits make writing much quicker, and they're easy to pick up. This chapter collects them: slash commands, Markdown shortcuts, mentions, links, and comments.

:::summary In this chapter
- The slash menu, and the commands worth memorizing
- Markdown shortcuts that format as you type
- Keyboard shortcuts for styling text
- Mentions with `@`, links with `[[` and `+`, and backlinks
- Comments, suggested edits, and reminders
:::

## The slash command

Type `/` anywhere to open a menu of every block and action. Keep typing to filter it, then press <kbd>Enter</kbd>. Press <kbd>Esc</kbd> if you just wanted a slash character.

| Type | To get |
|---|---|
| `/text` or `/plain` | A plain text block |
| `/h1`, `/h2`, `/h3` | Headings (`/#`, `/##`, `/###` also work) |
| `/todo` | A to-do checkbox |
| `/bullet`, `/num` | Bulleted or numbered lists |
| `/toggle` | A collapsible section |
| `/quote` | A quote block |
| `/div` | A divider line |
| `/callout` | A highlighted box with an icon |
| `/code` | A code block |
| `/table` | A simple table |
| `/database` | A full database (Chapter 5) |
| `/image`, `/video`, `/audio`, `/file` | Media and files |
| `/pdf` | Show a PDF inline |
| `/book` | A web bookmark card |
| `/embed` | Embed a map, form, Figma file, and more |
| `/page` | A new page inside this one |
| `/link` | A link to another page |
| `/toc` | A table of contents |
| `/math` or `/latex` | A block equation |
| `/button` | A button that runs actions when clicked |
| `/meet` | AI Meeting Notes (Chapter 17) |

### Action commands

The slash menu also *does* things to the current block:

| Type | What happens |
|---|---|
| `/turn` | Turn the block into another type |
| `/duplicate` | Copy the block |
| `/moveto` | Move the block to another page |
| `/delete` | Delete the block |
| `/red`, `/blue background` | Change color (`/default` removes it) |
| `/mention`, `/date`, `/emoji` | Insert a mention, a date, or an emoji |

## Markdown shortcuts

**Markdown** is a simple way of formatting text with symbols. Type these at the start of a line for instant formatting:

| Type | Result |
|---|---|
| `#` then space | Heading 1 (`##` for H2, `###` for H3) |
| `-`, `*`, or `+` then space | Bullet |
| `1.`, `a.`, or `i.` then space | Numbered list |
| `[]` | To-do checkbox |
| `>` then space | Toggle |
| `"` then space | Quote |
| `---` | Divider line |
| ```` ``` ```` | Code block |

And these work while you type, around a word or phrase:

| Type | Result |
|---|---|
| `**text**` | **Bold** |
| `*text*` | *Italic* |
| `` `text` `` | Inline code |
| `~text~` | Strikethrough |

> [!TIP]
> Pasting Markdown from another app (for example, text an AI chatbot gave you) usually converts it into proper Notion blocks automatically.

## Styling text with the keyboard

Select some text first, then:

| Shortcut (Mac / Windows) | Effect |
|---|---|
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>B</kbd> | Bold |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>I</kbd> | Italic |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>U</kbd> | Underline |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> | Strikethrough |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>E</kbd> | Inline code |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>K</kbd> | Add a link |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd> | Add a comment |

You can also paste a web address over selected text to turn it into a link. Press <kbd>Shift</kbd> + <kbd>Enter</kbd> for a line break *inside* a block, rather than a new block.

## Emoji

Type `:` followed by a word, such as `:apple` or `:clapping`, to insert an emoji. You can also use your computer's emoji picker: <kbd>Ctrl</kbd> + <kbd>Cmd</kbd> + <kbd>Space</kbd> on a Mac, or <kbd>Win</kbd> + <kbd>.</kbd> on Windows.

## Mentions with @

Type `@` to open the mention menu:

- **Mention a person:** `@` and a name. They get a notification. Great in comments.
- **Mention a page:** `@` and a page name. This creates an inline link that updates if the page is renamed.
- **Mention a date:** `@today`, `@tomorrow`, `@next Wednesday`, or any date.
- **Add a reminder:** `@remind` followed by a date and time, such as `@remind tomorrow 9am`. Notion notifies you when it's due.

Press <kbd>Esc</kbd> to dismiss the menu if you just wanted an @ sign.

## Links with [[ and +

| Type | Shows first | Use it to |
|---|---|---|
| `[[` + a name | Links to existing pages | Link to a page, or create one |
| `+` + a name | Options to create a page | Create a subpage, or a page somewhere else |

Both menus offer **+ Add new sub-page** (create a page inside this one) and **↗ Add new page in…** (create it somewhere else).

## Backlinks

When you mention a page, Notion automatically records a **backlink** on the page you mentioned. Backlinks appear under the page title as "*N* backlinks". Click them to see every page that links here. This is a handy way to find related notes without any extra work.

## Comments and suggestions

- **Comment on text:** select it and click **Comment**, or press <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd>.
- **Comment on a block:** use **⋮⋮ › Comment**.
- **Comment on the whole page:** hover near the title and click **Add comment**.
- **Mention someone** in a comment with `@` so they're notified.
- **Resolve** a finished discussion by hovering over the comment and clicking the ✔️. Reopen resolved comments from the 💬 icon at the top of the page.
- **Suggest edits:** use **⋮⋮ › Suggest edits** to propose changes that the page owner can accept or reject, like "track changes" in a word processor.

## Word count

Select one or more blocks and the menu shows how many words and characters they contain.

## Worked example: clean up messy notes in two minutes

:::steps From scribbles to a tidy page
1. **Paste your raw notes** into a new page.
2. **Add structure:** put `#` and a space in front of the main topics to make headings.
3. **Make lists:** put `-` and a space in front of each point; press <kbd>Tab</kbd> to nest details.
4. **Turn tasks into checkboxes:** put `[]` in front of anything you need to do.
5. **Hide long details** under toggles with `>` and a space.
6. **Link related pages** with `@` so they show up as backlinks.
7. **Add a reminder** to follow up: `@remind next Monday 10am`.
:::

## When shortcuts don't work

| Problem | Try this |
|---|---|
| `/` just types a slash | You're inside a code block or a database cell; click into a normal text line |
| Markdown didn't convert | Type the symbol at the very *start* of a line, then a space |
| `@` menu keeps popping up | Press <kbd>Esc</kbd> to type a plain @ |
| Shortcut does nothing on Windows | Another app may use <kbd>Ctrl</kbd> + <kbd>Shift</kbd>; try the slash command instead |

:::checklist
- I can open the slash menu and filter it by typing
- I know at least five Markdown shortcuts
- I can bold, italicize, and link with the keyboard
- I've mentioned a page and a date with `@`
- I left a comment and resolved it
:::

# Pages vs Databases

New Notion users often ask: "Should this be a page or a database?" This chapter answers that question, then explains how databases are put together: full-page and inline databases, data sources, and linked views.

:::summary In this chapter
- The difference between a page and a database, in plain English
- A simple test for choosing between them
- Full-page vs inline databases
- Data sources and linked views
- Creating, duplicating, and locking a database
:::

## The short answer

- A **page** is a document. Use it for things you *read and write*: notes, guides, essays, plans.
- A **database** is a collection of similar pages. Use it for things you *track, sort, or count*: tasks, books, clients, expenses.

Here's the clever part: every item in a database is *also* a page. Open any row and you get a full page to write in, with the item's properties (date, status, owner…) shown at the top.

## A simple test

Ask yourself three questions:

1. **Will I have many of these?** (Ten books, fifty tasks, two hundred clients.)
2. **Do they share the same details?** (Every book has an author and a rating.)
3. **Will I want to sort, filter, or see them in different ways?** (Only unread books; tasks by due date.)

If you answered yes to two or more, use a **database**. If not, a plain **page** is fine. You can always change your mind later.

| You're making… | Use | Why |
|---|---|---|
| Meeting notes for one meeting | Page (inside a database of meetings) | One document, but you'll have many meetings |
| A company handbook | Pages | Mostly reading |
| A to-do list for today | Page with to-do blocks | Short-lived and simple |
| All your tasks for the year | Database | Many items with dates and statuses |
| A recipe | Page | One document |
| A recipe collection | Database (gallery view) | Many recipes with tags and photos |
| Contacts or clients | Database | Many items with the same fields |

> [!TIP]
> A good rule of thumb: if you find yourself copying and pasting the same headings or checklist into page after page, that's a sign you want a database with a template (Chapter 11).

## How a database is built

| Part | What it is | Example (a reading list) |
|---|---|---|
| **Database** | The container | "Reading list" |
| **Item** (row, card, or page) | One entry | "The Hobbit" |
| **Property** | A field every item has | Author, Status, Rating |
| **Value** | What's in one property for one item | "J.R.R. Tolkien" |
| **View** | One way of displaying the items | A table of everything; a board by status |

## Full-page vs inline databases

| Type | Where it lives | Best for |
|---|---|---|
| **Full-page database** | It *is* a page, listed in the sidebar | Main databases you open often |
| **Inline database** | Inside another page, between other blocks | Small databases next to related notes |

- **Expand** an inline database to full screen with the **⤡** icon at its top.
- **Turn inline into full page:** drag it with **⋮⋮** into the sidebar as a top-level page.
- **Turn full page into inline:** drag it into another page in the sidebar, open that page, then click **⋮⋮ › Turn into inline**.

## Create a database

:::steps Three ways to start
1. **From a new page.** Create a page and, under **Get started with**, choose **Table** (or another layout).
2. **With the slash command.** On any page, type `/database` and pick inline or full page.
3. **With AI.** When you create a database, choose **Build with AI** and describe what you need, such as "a reading list with author, genre, status, and rating". Notion AI builds the properties for you.
:::

You can also start from a **Suggested template**, or base the new database on an existing one in your workspace.

## Data sources

A **data source** is the actual collection of items and properties behind a database. Most databases have one data source. But a single database can hold *several* data sources, each with its own properties. For example, a CRM database might hold separate Contacts, Companies, and Deals data sources, all managed in one place.

You don't need to think about data sources for simple setups. They matter when you build advanced systems or use the API (Chapter 25), which talks to data sources directly.

## Linked views

A **linked view** shows a database that lives somewhere else, with its own filters and layout. Changes you make in a linked view change the original data, because it *is* the same data.

:::steps Add a linked view
1. **Open the page** where you want the view, such as your Home page.
2. **Type `/linked`** and choose the **linked view** option.
3. **Pick the database** you want to show.
4. **Set up the view:** choose a layout and add filters, such as *Assignee is Me*.
:::

> [!NOTE]
> Deleting a linked view only removes that view. The original database and its items are untouched.

## Duplicate or lock a database

- **Duplicate:** for an inline database, use **⋮⋮ › Duplicate**; for a full-page database, use **••• › Duplicate**. Choose **Duplicate with content** to copy everything, or **Duplicate without content** to reuse just the structure.
- **Lock:** on a full-page database, choose **••• › Lock database** so others can't change its properties and options by accident.

:::checklist
- I can explain the difference between a page and a database
- I used the three-question test on something I want to track
- I know full-page vs inline databases
- I added a linked view of a database to another page
:::

# Database Properties

A **database** is a collection of pages that share the same set of **properties** (fields). Each item is a full page you can open and write in, *and* a row with data like a date, a status, or a person. This chapter covers every property type and how to set each one up.

:::summary In this chapter
- Build your first database: a reading list
- Every property type, with examples
- Editing, hiding, and reordering properties
- Status groups, date options, number formats
- Conditional color, and letting AI fill in properties
:::

## Create a database

:::steps Your first database: a reading list
1. **Create a new page** called "Reading list".
2. **Type `/database`** and choose an inline or full-page database.
3. **Rename the default columns.** "Name" holds the book title.
4. **Add properties.** Click **+** at the end of the header row. Add **Author** (Text), **Status** (Status: Not started / In progress / Done), **Rating** (Select: ★ to ★★★★★), and **Finished** (Date).
5. **Add a few books.** Click **New** or the empty row at the bottom.
6. **Open a book** by hovering over its name and clicking **Open**, and write your notes inside it. Every row is a page!
:::

## Property types

| Property | Holds | Example use |
|---|---|---|
| **Text** | Words, with formatting | Author, notes |
| **Number** | Numbers, money, percentages | Price, hours |
| **Select** | One tag from a list | Genre, priority |
| **Multi-select** | Several tags from a list | Topics, skills |
| **Status** | To-do / In progress / Complete groups | Task progress |
| **Date** | A date or range, with optional time and reminder | Due date |
| **Person** | Workspace members or groups | Assignee |
| **Files & media** | Uploaded files and images | Contract PDF, cover photo |
| **Checkbox** | Yes or no | Paid? |
| **URL** | A web link that opens in a new tab | Website |
| **Email** | An address that opens your mail app | Contact email |
| **Phone** | A number your device can call | Client phone |
| **Relation** | Links to items in another database | Tasks ↔ Projects |
| **Rollup** | Summarizes data through a relation | % of tasks done |
| **Formula** | Calculates from other properties | Days until due |
| **Button** | Runs actions with one click | "Mark done" |
| **ID** | An automatic unique number | TASK-42 |
| **Place** | A location or address | Office, venue |
| **Created time**, **Created by** | Set automatically when an item is made | Audit trail |
| **Last edited time**, **Last edited by** | Updated automatically on every edit | "Stale" check |

The first column, usually called **Name**, is the item's title. Every database has exactly one.

> [!NOTE]
> Each database can have up to 500 properties. You'll almost certainly never hit that, but if you do, delete or combine unused ones.

## Adding and editing properties

- **Add:** click **+** to the right of the last column, or in a table click a column name and choose **Insert left** or **Insert right**. Give it a name and pick a type.
- **Edit:** click a column name to rename it, change its type, filter or sort by it, or run calculations.
- **Manage all properties:** open the database's settings menu (the slider icon at the top) and choose **Edit properties**. Here you can search, add, duplicate, or delete properties.
- **Hide or show** a property in the current view: settings menu › **Property visibility**, then click the 👁️ next to it.
- **Reorder** columns by dragging their headers.

> [!TIP]
> Hiding a property only hides it in *that view*. The data is still there. Use this to keep each view focused.

## The important types, in more detail

### Select and multi-select

Type an option and press <kbd>Enter</kbd> to create it; Notion assigns a random color. Click **•••** next to an option to rename it, change its color, or delete it. Drag options by their **⋮⋮** to reorder them, which also controls how they sort.

> [!TIP]
> Choose **Select** when an item can only be one thing (a task has one priority), and **Multi-select** when it can be many (a recipe can be both "vegetarian" and "quick").

### Status

A **Status** property sorts its options into three groups: **To-do**, **In progress**, and **Complete**. You can rename options and add more inside each group (for example "Blocked" under In progress). Board views and progress rollups understand these groups, which makes Status better than Select for tracking work.

### Date

Click a date cell to open the date picker:

- **Remind:** get a notification at a date and time.
- **End date:** turn it into a range, such as a trip from Monday to Friday. Timeline views need ranges.
- **Include time:** add a time, not just a day.
- **Date format & timezone:** choose how the date looks.
- **Clear:** remove the date.

### Number

Numbers can be formatted as plain numbers, with commas, as percentages, or as currencies. You can also show a number as a **progress bar**, which is great for tracking completion (store 0.75 with the percent format and it shows as 75%).

### Person

Type a name and press <kbd>Enter</kbd> to tag someone. Tagged people are notified by default. Person properties also power filters like *Assignee is Me*, and, on Business and Enterprise plans, permissions that let people see only their own items (Chapter 20).

### Files & media

Click the cell to upload, paste a link, or drag files in. A gallery view can show the first image as each card's cover.

### ID

An **ID** property numbers each item automatically: 1, 2, 3… You can add a prefix, such as `BUG`, to get `BUG-1`, `BUG-2`. IDs are unique and can't be edited by hand, which makes them perfect for tickets and invoices.

### Place

A **Place** property holds a location: your current location, a place name, or an address. It powers the **Map** view (Chapter 7).

## Conditional color

**Conditional color** colors items that match a rule, such as showing overdue tasks in red.

:::steps Color overdue tasks red
1. **Open the settings menu** (slider icon) at the top of the view.
2. **Choose Conditional color › New color setting.**
3. **Pick the property**, such as **Due**.
4. **Set the rule**, such as *Due is before Today*.
5. **Choose a background color**, such as red. In a table, choose whether to color the whole row or just that cell.
:::

Conditional color works in table, board, calendar, timeline, list, and feed views. You need edit access to the database to set it up.

## Let AI fill in properties

Notion AI can **autofill** certain properties for every item: a one-line summary, keywords, a translation, or a category based on the page's content. Create the property, choose an AI autofill option in its settings, and describe what you want. On Free and Plus plans this is part of the limited AI trial (Chapter 16).

## Page layouts

Open any database item and you'll see its properties at the top. You can design a **layout** that applies to every page in the database, choosing which properties appear first and how they're arranged. Open an item and look for the option to customize its layout near the properties.

## Worked example: a property plan

Before you build, sketch your properties on paper. Here's a plan for a simple **home inventory**:

| Property | Type | Why |
|---|---|---|
| Name | Title | "Washing machine" |
| Room | Select | Kitchen, Garage… |
| Bought | Date | For warranty dates |
| Price | Number (currency) | For insurance |
| Receipt | Files & media | Proof of purchase |
| Warranty ends | Date | Reminders before expiry |
| Photo | Files & media | Gallery covers |

:::checklist
- I built a reading list with four properties
- I know when to use Select, Multi-select, and Status
- I set a date with a reminder
- I hid a property in one view
- I set up a conditional color rule
:::

# Database Views

A **view** is one way of looking at a database. The same tasks can appear as a table for editing, a board for tracking progress, and a calendar for deadlines, all at once, all showing the same data. Change an item in one view and it changes everywhere.

:::summary In this chapter
- Every view type and what it's best for
- Creating, renaming, and switching views
- How pages open from a view
- The special settings of each view
- Dashboards: many views on one screen
:::

## Views: the same data, many ways

Click **+** next to the existing view's name, at the top left of the database, to add a view:

| View | Shows items as… | Great for |
|---|---|---|
| **Table** | Rows and columns | Editing lots of data |
| **Board** | Cards in columns, grouped by status or tag | Kanban task tracking |
| **Calendar** | Items on their dates | Content calendars, deadlines |
| **Timeline** | Bars across time | Project schedules |
| **List** | A clean list of pages | Notes, docs |
| **Gallery** | Cards with cover images | Recipes, portfolios, moodboards |
| **Chart** | Bar, line, donut, or number charts | Reports |
| **Feed** | Stacked posts, like a blog or social feed | Team updates, announcements |
| **Map** | Pins from a Place property | Places, travel plans |
| **Form** | A fill-in form that creates items | Requests, sign-ups, surveys |
| **Dashboard** | Several views side by side (Business and Enterprise) | Status overviews |

Each view has its own **Filter** (show only some items), **Sort** (order them), and **Group** (split into sections). For example, make a "Currently reading" board view filtered to *Status is In progress*. Chapter 8 covers these in depth.

## Create and manage views

:::steps Add a view
1. **Click + next to your current view's name** at the top left of the database. On a narrow screen, click the current view's name and choose **New view**.
2. **Choose a layout**, such as Board.
3. **Name the view**, such as "By status".
4. **Set it up**: pick the property to group or plot by, then add any filters.
:::

- **Rename, duplicate, or delete** a view: click its name.
- **Reorder views** by dragging their tabs.
- **Show tabs as icons, text, or both:** click a view tab › **Display as**. This only changes what *you* see.
- **Link to a view:** settings menu › **Copy link to view**. Share it so people land on exactly the right view.

> [!NOTE]
> Each view has its own settings. Changing filters or hidden properties in one view doesn't affect the others.

## How pages open

Each view decides how an item opens when you click it. In the settings menu, choose **Layout › Open pages in**:

| Option | What happens | Default for |
|---|---|---|
| **Side peek** | Opens on the right; the database stays usable on the left | Table, board, list, timeline |
| **Center peek** | Opens in a focused window in the middle | Gallery, calendar |
| **Full page** | Opens as a normal page | Nothing by default |

In peek view, jump to the next or previous item with <kbd>Ctrl</kbd> + <kbd>J</kbd> / <kbd>Ctrl</kbd> + <kbd>K</kbd> on Windows, or <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>J</kbd> / <kbd>K</kbd> on a Mac.

## Each view in detail

### Table

The classic grid. Useful extras:

- **Calculate:** at the bottom of a column, choose a calculation such as Sum, Average, Count, or Percent checked.
- **Wrap text:** click a column name › **Wrap text** to show long text on several lines.
- **Freeze columns:** click a column name › **Freeze up to column** so it stays visible as you scroll sideways.
- **Fill down:** select several cells and press <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>D</kbd> to copy the top value down.

### Board

Cards arranged in columns, one column per value of a property (usually Status). Drag a card to another column to change its value. In the settings menu you can:

- **Group by** a different property, and **sub-group** by another, such as Status columns with Priority rows.
- Change the **Card size** (small, medium, large) and the **Card preview** (page cover, page content, or an image from a Files property). Toggle **Fit image** to avoid cropping.

### Calendar

Shows each item on its date. Choose which date property to use with **Show calendar by**. Hover over a day and click **+** to add an item on that date. Drag items to reschedule them.

> [!TIP]
> Want your Notion deadlines next to your real meetings? Add the database to Notion Calendar (Chapter 22).

### Timeline

Shows items as bars from their start to end date, like a Gantt chart. It needs a date property that holds a **range**. Use the dropdown near **Today** to zoom from hours to years. Drag a bar's ends to change its dates. Timelines can also show **dependencies** between tasks (Chapter 9).

### List

A minimal list of page titles, with any properties you choose shown at the right. Perfect for notes and documents where the content matters more than the fields.

### Gallery

A grid of cards, each with a preview image. Like boards, galleries have **Card preview**, **Card size**, and **Fit image** settings. Choose a Files & media property as the preview to show photos you've uploaded.

### Chart

Turns your data into a **vertical bar**, **horizontal bar**, **line**, **donut**, or **number** chart. Type `/chart` on a page, or add a Chart view to an existing database. You pick what goes on each axis, such as *Status* on the X axis and *Count* on the Y axis.

> [!NOTE]
> The Free plan includes one chart to try; paid plans get unlimited charts. Charts show up to 200 groups at a time, and you can't edit items from a chart view.

### Feed

Shows items as stacked posts you scroll through, like a blog. Readers can comment on each post directly, and authors can see view counts. Type `/feed view` on a page, or add a Feed view to a database. Use it for weekly team updates or a family news page.

### Map

Shows items as pins on a map, using a **Place** property (one is created for you if needed). Type `/map` on a page, or add a Map view. Click a pin to open its page. A map shows up to 100 items at once.

### Form

Turns the database into a form that anyone you choose can fill in. Each answer becomes a new item. Forms have a whole chapter of their own (Chapter 19).

## Dashboards

A **dashboard view** (Business and Enterprise plans) arranges several **widgets** in one layout. Each widget shows a view, such as a chart of tasks by status, a board of this week's work, and a calendar of deadlines.

:::steps Build a dashboard view
1. **Open a database** and click **+** to add a view, then choose **Dashboard**. Or type `/dash` on a page.
2. **Click Edit** in the database header to enter edit mode.
3. **Add a widget** with the **+** on a row, and pick an existing view or create a new one.
4. **Arrange widgets:** drag them into rows; drag the dividers to change widths and heights.
5. **Leave edit mode** to use the dashboard.
:::

Dashboards hold up to 4 widgets per row and 12 in total, and can mix views from several databases. You can also ask Notion Agent: "Create a dashboard for my Tasks database that shows key metrics."

> [!TIP]
> On Free and Plus plans, you can build a dashboard *page* instead: a normal page with several linked views arranged in columns. Chapter 13 shows how.

## Worked example: one database, four views

Take a **Tasks** database with Name, Status, Due, Priority, and Assignee:

| View | Layout | Settings |
|---|---|---|
| All tasks | Table | Sorted by Due, ascending |
| Board | Board | Grouped by Status, sub-grouped by Priority |
| Deadlines | Calendar | Show calendar by Due |
| My week | List | Filter: Assignee is Me, Due is this week |

:::checklist
- I added a board view grouped by Status
- I added a calendar view using a date property
- I changed how pages open in one view
- I tried a chart or gallery view
- I know dashboards need Business or Enterprise
:::

# Filters, Sorts, and Groups

A database with fifty items is useful. A database that shows you *just the five you need right now* is wonderful. Filters, sorts, and groups do that, and each view keeps its own.

:::summary In this chapter
- Simple filters, and advanced filters with AND and OR
- Saving filters for everyone or just for you
- Sorting by one or several properties
- Grouping and sub-grouping
- Searching inside a database
:::

## Filters

A **filter** shows only the items that match a rule, such as *Status is not Done*.

:::steps Add a filter
1. **Open the settings menu** (the slider icon) at the top of the database.
2. **Choose Filter** under View settings.
3. **Pick a property**, such as Status.
4. **Set the rule**, such as *is not* › *Done*.
5. **Choose Save for everyone** if everyone should see the filter in this view. Leave it unselected to keep the filter just for you.
:::

The rules you can choose depend on the property type:

| Property | Example rules |
|---|---|
| Text | contains, does not contain, starts with, is empty |
| Number | =, ≠, >, <, is empty |
| Select / Status | is, is not, is empty |
| Multi-select | contains, does not contain |
| Date | is today, is before, is within *next week*, is relative to today |
| Person | contains *Me*, is empty |
| Checkbox | is checked, is not checked |

> [!TIP]
> Filters like *Assignee contains Me* and *Due is relative to today* adjust automatically for whoever is looking and whatever day it is. Use them to build views that never need updating.

### Advanced filters

An **advanced filter** combines rules with **AND** (all must be true) and **OR** (any can be true), in groups nested up to three layers deep.

:::steps Build an advanced filter
1. **Open the settings menu › Filter › Add advanced filter.**
2. **Add your first rule**, such as *Status is not Done*.
3. **Add a second rule** and choose **And** or **Or** between them.
4. **Add a filter group** for rules that belong together.
:::

For example, "urgent work that's mine":

```text
Status is not Done
AND ( Priority is High
      OR Due is before Today )
AND Assignee contains Me
```

To delete a filter, open it and choose **••• › Delete filter**.

## Sorts

A **sort** orders items by a property, ascending or descending.

- **Text** sorts alphabetically; **numbers** numerically; **dates** by time.
- **Select and multi-select** sort in the order of their options. Drag options in the property menu to change that order, such as High, Medium, Low.
- **Multiple sorts:** add several and drag them by **⋮⋮** to set which applies first. For example, sort by Priority, then by Due.

Like filters, sorts can be saved for everyone or kept for you. Remove one with the **X** next to it.

## Groups

**Grouping** splits a view into sections by a property's values, such as one section per Status. Board views are always grouped; other views can be too.

- Settings menu › **Group** › choose a property.
- **Hide** groups you don't need with 👁️, and sort the groups manually or alphabetically.
- **Hide empty groups** to reduce clutter.
- **Sub-group** for a second layer: Status columns with Priority rows, for example.
- **Remove grouping** from the same menu.

## Search inside a database

Databases with at least three items get a 🔍 icon at the top. Click it and type: the view shrinks to matching items as you type.

## Recipes for common views

| View name | Filter | Sort or group |
|---|---|---|
| Today | Due is today | Sort by Priority |
| Overdue | Due is before today AND Status is not Done | Sort by Due |
| This week | Due is within this week | Group by Status |
| Waiting on others | Status is Blocked | Group by Assignee |
| Recently edited | Last edited time is within past week | Sort by Last edited, descending |
| Unread books | Status is Not started | Sort by Created time |

> [!NOTE]
> Filters hide items; they never delete them. If something seems to have vanished, check the view's filters first, or switch to an unfiltered view.

:::checklist
- I added a filter and chose whether to save it for everyone
- I built an advanced filter with AND and OR
- I sorted by two properties
- I grouped a table by Status and hid empty groups
- I made a "My tasks" view filtered to Me
:::

# Relations, Rollups, and Sub-items

Real life is connected. Tasks belong to projects, books have authors, invoices belong to clients. **Relations** connect databases so each item knows its partners, and **rollups** summarize across those connections.

:::summary In this chapter
- What relations are, with a plain example
- One-way and two-way relations, and limits
- Rollups and their calculations
- Sub-items and dependencies for tasks
:::

## Relations and rollups, simply

A **relation** connects two databases. Link a **Tasks** database to a **Projects** database and each task knows its project, and each project lists its tasks. A **rollup** then summarizes across that link, such as "count of tasks" or "percent of tasks done," shown right on the project.

Think of a relation like a string tied between two index cards. A rollup reads something off every card at the other end of the string and adds it up.

## Create a relation

:::steps Link Tasks to Projects
1. **Open the Tasks database** and add a property. Choose **Relation**.
2. **Pick the database to connect to:** Projects.
3. **Decide on two-way.** Switch on **Show on Projects** (two-way relation) so each project also gets a "Tasks" property listing its tasks.
4. **Optional limit.** Choose **1 page** if each task should belong to only one project, or **No limit**.
5. **Click Add relation.**
6. **Fill it in:** click a task's Project cell and choose a project.
:::

| Setting | Meaning |
|---|---|
| **One-way** | Only Tasks shows the link |
| **Two-way** | Both databases get a property and stay in sync |
| **Limit: 1 page** | Each item links to one item at most |
| **Self-relation** | A database related to itself, such as "Parent task" or "Next / Previous" |

> [!TIP]
> Name both sides clearly: "Project" on Tasks and "Tasks" on Projects. You'll thank yourself when you build rollups and formulas.

## Rollups

A **rollup** looks through a relation at one property of the related items and calculates something.

:::steps Show project progress
1. **In Projects, add a Rollup property** called "Progress".
2. **Relation:** Tasks.
3. **Property:** Status.
4. **Calculate:** **Percent per group › Complete**.
5. **Show as** a bar for a visual progress meter.
:::

Common rollup calculations:

| Calculation | Gives you | Example |
|---|---|---|
| **Show original** | The related values themselves | All task names |
| **Count all** | How many related items | 12 tasks |
| **Count values / unique values** | How many values or distinct values | 3 assignees |
| **Percent empty / not empty** | Share with or without a value | 40% have due dates |
| **Sum, average, median, min, max** | Number maths | Total hours |
| **Earliest / latest date, date range** | Date summaries | Next deadline |
| **Percent per group** | Share in a Status group | 75% Complete |

## Sub-items

**Sub-items** break a big task into smaller tasks inside the same database.

:::steps Turn on sub-items
1. **Open the settings menu** at the top of the database.
2. **Under Database settings, choose More settings.**
3. **Choose Sub-items › Turn on sub-items.**
:::

You can then show sub-items **nested in a toggle** under their parent, or as a **flattened list**. Filter options let you show parents only, parents and sub-items, or sub-items only.

> [!CAUTION]
> Deleting a parent item deletes all of its sub-items too. Move the sub-items out first if you want to keep them.

## Dependencies

**Dependencies** record that one task is *blocked by* another, such as "Print flyers" is blocked by "Design flyers". Turn them on in the same **More settings** menu. In a timeline view, dependencies appear as arrows between bars, so you can see what has to happen first.

## Worked example: a tiny book club

:::steps Books and Members
1. **Create two databases:** Books (Title, Month) and Members (Name).
2. **Add a two-way relation** from Books to Members called "Read by".
3. **Tick off readers** for each book in its "Read by" cell.
4. **In Members, add a rollup** "Books read": relation *Books*, calculate **Count all**.
5. **In Books, add a rollup** "Readers": relation *Read by*, **Count all**.
:::

Now each member shows how many books they've read, and each book shows how many people read it.

:::checklist
- I created a two-way relation between two databases
- I added a rollup that counts related items
- I built a progress rollup using Percent per group
- I turned on sub-items in a task database
:::

# Formulas

A **formula** property calculates a value from other properties, like a spreadsheet formula that runs on every row. Notion's current formula language (often called **Formula 2.0**) can work with text, numbers, dates, people, and even related pages. This chapter starts gently and ends with more than twenty recipes you can copy.

:::summary In this chapter
- How the formula editor works
- The building blocks: properties, operators, functions
- Data types, and why they matter
- 22 worked examples to copy
- Getting Notion AI to write formulas, and fixing errors
:::

## Create a formula

:::steps Add a formula property
1. **Open the settings menu › Edit properties › New property.**
2. **Choose Formula** and give it a name.
3. **Click Edit formula.** The formula editor opens.
4. **Type your formula** in the box at the top.
5. **Check the preview.** If you opened the editor from a row, you'll see that row's result live.
:::

The editor has three parts: the formula box at the top, a list of properties and functions on the left, and an explanation with examples on the right for whatever you hover over. If something's missing, the editor tells you what it expects.

## The building blocks

| Part | Examples | What it does |
|---|---|---|
| **Properties** | `prop("Due")`, `prop("Price")` | Reads a property's value |
| **Maths operators** | `+ - * / % ^` | Arithmetic (`+` also joins text) |
| **Comparisons** | `== != > >= < <=` | True or false checks |
| **Logic** | `and`, `or`, `not` | Combine checks |
| **Ternary** | `X ? Y : Z` | Short for `if(X, Y, Z)` |
| **Functions** | `if()`, `round()`, `dateAdd()` | Do a job and return a result |

When you type `prop("Due")`, the editor shows it as a neat property chip. You can also click properties in the left panel instead of typing.

**Dot notation** lets you chain functions: `prop("Name").length()` is the same as `length(prop("Name"))`.

## Data types

Every value has a **type**, and functions expect particular types:

| Type | Example | Comes from |
|---|---|---|
| Text | `"Hello"` | Text, Select, Status, URL |
| Number | `42` | Number, rollups |
| Boolean | `true` / `false` | Checkbox, comparisons |
| Date | `@October 16, 2026` | Date, Created time |
| Person | A workspace member | Person, Created by |
| List | `[1, 2, 3]` | Multi-select, Relation |
| Page | A related page | Relation |

Use `format()` to turn anything into text, and `toNumber()` to turn text into a number.

## Useful functions at a glance

:::compact
| Group | Functions |
|---|---|
| Logic | `if`, `ifs`, `empty`, `and`, `or`, `not` |
| Text | `length`, `contains`, `substring`, `replace`, `replaceAll`, `lower`, `upper`, `trim`, `split`, `join`, `repeat`, `style`, `link`, `format` |
| Numbers | `round`, `ceil`, `floor`, `abs`, `min`, `max`, `sum`, `mean`, `median`, `sqrt`, `pow`, `mod`, `formatNumber` |
| Dates | `now`, `today`, `dateAdd`, `dateSubtract`, `dateBetween`, `dateStart`, `dateEnd`, `formatDate`, `parseDate`, `week`, `month`, `year`, `day` |
| Lists | `at`, `first`, `last`, `filter`, `map`, `find`, `some`, `every`, `includes`, `unique`, `sort`, `reverse`, `slice`, `concat`, `flat` |
| People | `name`, `email` |
| Variables | `let`, `lets` |
:::

In list functions, the word `current` means "the item being looked at right now".

## Worked examples: dates

**1. Days until due.** Negative numbers mean overdue.

```text title=Days left
dateBetween(prop("Due"), today(), "days")
```

**2. Overdue flag.**

```text title=Overdue
if(prop("Due") < now() and prop("Status") != "Done", "⚠️ Overdue", "")
```

**3. Overdue, in bold red.** `style()` takes styles (`"b"` bold, `"i"` italic, `"u"` underline) and colors.

```text title=Overdue (styled)
if(and(now() > prop("Due"), prop("Status") != "Done"),
  style("Overdue", "red", "b"), "")
```

**4. Due date two weeks after the start.**

```text title=Due
dateAdd(prop("Start"), 2, "weeks")
```

**5. A friendly date.**

```text title=Nice date
formatDate(prop("Date"), "MMMM D, YYYY")
```

**6. Week label**, handy for grouping journal entries.

```text title=Week
"Week " + format(week(prop("Date")))
```

**7. Age in years.**

```text title=Age
dateBetween(today(), prop("Birthday"), "years")
```

**8. Length of a date range in days.**

```text title=Trip length
dateBetween(dateEnd(prop("Dates")), dateStart(prop("Dates")), "days")
```

## Worked examples: text and numbers

**9. Full name.**

```text title=Full name
prop("First name") + " " + prop("Last name")
```

**10. Price with 20% tax**, rounded to two decimals.

```text title=Gross
round(prop("Price") * 1.2, 2)
```

**11. Show money nicely.**

```text title=Revenue label
"Revenue: " + formatNumber(prop("Revenue"), "usd", 0)
```

**12. Reading progress as a percentage.**

```text title=Progress
format(round(prop("Pages read") / prop("Total pages") * 100)) + "%"
```

**13. A text progress bar** from a 0–1 number.

```text title=Bar
repeat("●", round(prop("Progress") * 10)) +
  repeat("○", 10 - round(prop("Progress") * 10))
```

**14. Priority score with `ifs`** (cleaner than nested ifs).

```text title=Score
ifs(prop("Priority") == "High", 3,
    prop("Priority") == "Medium", 2,
    1)
```

**15. RICE prioritization** (Reach × Impact × Confidence ÷ Effort).

```text title=RICE
prop("Reach") * prop("Impact") * prop("Confidence") / prop("Effort")
```

**16. A clickable link.**

```text title=Open site
link("Open site", prop("URL"))
```

**17. Turn a title into a web-friendly slug.**

```text title=Slug
lower(replaceAll(trim(prop("Name")), " ", "-"))
```

## Worked examples: lists, people, and relations

**18. Has the "Urgent" tag?**

```text title=Urgent?
prop("Tags").includes("Urgent")
```

**19. Names of everyone assigned.**

```text title=Assignees
prop("Assignee").map(current.name()).join(", ")
```

**20. Count related tasks.**

```text title=Task count
prop("Tasks").length()
```

**21. Count open tasks** using `filter` and `current`.

```text title=Open tasks
prop("Tasks").filter(current.prop("Status") != "Done").length()
```

**22. Percent of tasks done, safe when there are none.** `lets` names values so the formula reads like a sentence.

```text title=% done
lets(
  total, prop("Tasks").length(),
  done, prop("Tasks").filter(current.prop("Status") == "Done").length(),
  if(total == 0, "–", format(round(done / total * 100)) + "%")
)
```

**23. Total spent from a related Expenses database.**

```text title=Spent
sum(prop("Expenses").map(current.prop("Amount")))
```

> [!TIP]
> Long formulas can span several lines in the editor. Line breaks and indentation make them much easier to read.

## Let Notion AI write it

On Business and Enterprise plans, the formula editor has a Notion AI field. Describe what you want in plain English:

```prompt
Return ⚠️ if the due date has passed and the status isn't Done.
```

```prompt
Turn the title property into a URL slug.
```

```prompt
Fix the errors in this formula, and make it handle empty dates.
```

Notion AI can also explain a formula ("What does this formula do?"). It can't do loops or random numbers, because Notion formulas don't have them.

## Where else formulas work

Besides formula properties, you can use formulas inside **button actions**, **database button actions**, and **database automation actions** (Chapter 11), for example to set a date to "today plus 3 days".

## Fixing common formula errors

| Message or symptom | Likely cause | Fix |
|---|---|---|
| Type mismatch | Joining a number to text | Wrap the number in `format()` |
| Property not found | Property renamed or deleted | Re-insert it from the left panel |
| Result is blank | An input is empty | Check with `empty()` first |
| Division error or odd result | Dividing by zero | Guard with `if(x == 0, …)` |
| Wrong date difference sign | Dates in the wrong order | Swap the two dates in `dateBetween` |
| Text comparison fails | Typo or different capitals | Copy the option name exactly |

:::checklist
- I created a formula property and saw the live preview
- I copied a date formula and a text formula
- I used `if` or `ifs` to show a label
- I used `filter` and `current` on a relation
- I know where to ask AI for help with formulas
:::

# Templates, Buttons, and Automations

Once your databases are set up, Notion can do the repetitive work for you. **Templates** give every new item the same starting layout, **buttons** do several things with one click, and **automations** react to changes on their own.

:::summary In this chapter
- Database templates, and making them repeat
- Buttons and every button action
- Button properties inside databases
- Database automations: triggers and actions
- Webhooks, Slack, and Gmail actions
- What each plan allows
:::

## Database templates

A **database template** is a pre-made page for one database: its properties are pre-filled and its body already holds headings, checklists, or anything else.

:::steps Make a template
1. **Click the arrow next to New** at the top right of the database.
2. **Choose + New template.** A bar at the top shows which database it belongs to.
3. **Title it** with the template's name, such as "Bug report".
4. **Pre-fill properties**, such as Priority = P1.
5. **Add body content**, such as headings "Steps to reproduce", "Expected", "Actual", and a checklist.
:::

To use it, click the arrow next to **New** and pick the template, or create a new item and choose it from the gray menu inside the empty page. Use **•••** next to a template to edit, duplicate, or delete it.

> [!WARNING]
> Don't fill in a relation property in a template unless every new item should link to that same page.

### Repeating templates

A **repeating template** creates a new item on a schedule, such as a "Weekly review" page every Friday at 4 pm.

:::steps Make a template repeat
1. **Open the dropdown next to New.**
2. **Click ••• next to the template.**
3. **Open the Repeat dropdown** and choose daily, weekly, monthly, or yearly.
4. **Set the interval, start date, and time.**
:::

## Buttons

A **button** block runs a list of actions when someone clicks it. Buttons are available on every plan; a few actions need a paid plan.

:::steps Create a button
1. **Type `/button`** and press Enter.
2. **Name it and pick an emoji**, such as "➕ New task".
3. **Click New action** and choose one (table below).
4. **Add more actions** if you like; they run in order.
5. **Click Done**, then try it.
:::

| Action | What it does | Plan |
|---|---|---|
| **Insert blocks** | Adds blocks above or below the button, or at the top or bottom of the page | All |
| **Add page to** | Creates an item in a database with set properties | All |
| **Edit pages in** | Changes properties of items in a database | All |
| **Send notification to** | Notifies up to 20 people, or a Person property | All |
| **Show confirmation** | Asks "Are you sure?" first | All |
| **Open page or URL** | Opens a page or link | All |
| **Define variables** | Stores a value for later actions | All |
| **Send mail to** | Sends an email from your Gmail | Paid |
| **Send webhook** | Sends data to another app's URL | Paid |
| **Send Slack notification to** | Posts in a Slack channel | Plus and up |

> [!NOTE]
> Buttons can only add or edit pages in databases that aren't in your **Private** or **Shared** sections. Put them in a teamspace.

### Button properties

You can also add a **Button** property to a database, so every row gets its own button, such as "✅ Mark done" that sets Status to Done and Completed to today. Button property actions can act on *that row*.

## Database automations

A **database automation** watches a database and runs actions when something happens, without anyone clicking. Open it from the **⚡** icon at the top of a database.

:::steps Create an automation
1. **Click ⚡ › New automation.**
2. **Name it**, such as "Stamp completion date".
3. **Click New trigger** and choose what starts it.
4. **Click New action** and choose what happens.
5. **Click Create.**
:::

**Triggers** (you can combine several, with *any* or *all*):

| Trigger | Fires when… |
|---|---|
| **Page added** | A new item is created |
| **Property edited** | A chosen property changes, optionally to a specific value |
| **Every {frequency}** | On a schedule: daily, weekly, monthly, with a time and timezone |

**Actions** include **Edit property**, **Add page to**, **Edit pages in**, **Send notification to**, **Send mail to** (Gmail), **Send webhook**, **Send Slack notification to**, and **Define variables**.

### Three automations to copy

| Name | Trigger | Action |
|---|---|---|
| Done date | Status set to Done | Edit property: Completed = Today |
| New request alert | Page added | Send Slack notification to #requests |
| Monday digest | Every week, Monday 9:00 | Send notification to the team |

> [!IMPORTANT]
> Automations don't trigger other automations (to prevent loops). A person clicking a button that creates a page *does* trigger them.

### Webhooks

The **Send webhook** action sends an HTTP POST request (a small package of data) to a web address whenever it runs. Tools like n8n, Zapier, and Make give you a URL to receive it, which lets a Notion change kick off work in hundreds of other apps.

## What each plan allows

| Feature | Free | Plus and up |
|---|---|---|
| Templates and repeating templates | Yes | Yes |
| Button blocks (basic actions) | Yes | Yes |
| Database automations | Slack notifications only | All triggers and actions |
| Send mail, Send webhook | No | Yes |

Free plan users can still *use* automations that come in templates, but can't edit them. Creating automations needs full access to the database.

## When automations misbehave

| Problem | Try this |
|---|---|
| Nothing happens | Check the trigger conditions, and that pages aren't in Private |
| It ran twice | Two automations share a trigger; combine them |
| A multi-trigger rule never fires | "All of these" edits must happen within about three seconds; use a more specific trigger |
| Gmail action is greyed out | Only the person who linked Gmail can edit that action |

:::checklist
- I made a database template with a checklist
- I set a template to repeat weekly
- I made a button that adds a pre-filled task
- I created an automation that stamps a completion date
:::

# Build a Project Tracker

Let's combine everything into a small but real system: projects with tasks. This is the most popular Notion setup in the world, and once you've built it, you'll understand how every other system works.

:::summary In this chapter
- Two linked databases: Projects and Tasks
- Progress bars with a rollup
- Useful views for daily work
- A task template and two automations
:::

## The plan

| Database | Properties |
|---|---|
| **Projects** | Name, Status, Owner (Person), Deadline (Date), Tasks (Relation), Progress (Rollup) |
| **Tasks** | Name, Status, Assignee (Person), Due (Date), Priority (Select), Project (Relation), Days left (Formula) |

## Build it

:::steps Build Projects + Tasks
1. **Create a page** called "Work hub".
2. **Add a Projects database** (`/database`, full page). Properties: **Status** (Status), **Owner** (Person), **Deadline** (Date).
3. **Add a Tasks database** inside Work hub. Properties: **Status** (Status), **Assignee** (Person), **Due** (Date), **Priority** (Select: High, Medium, Low).
4. **Link them.** In Tasks, add a **Relation** property pointing to **Projects**, and switch on **Show on Projects** so both sides see the link.
5. **Add progress.** In Projects, add a **Rollup**: relation *Tasks*, property *Status*, calculate *Percent per group › Complete*. Show it as a bar.
6. **Add a countdown.** In Tasks, add a **Formula** called "Days left": `dateBetween(prop("Due"), today(), "days")`.
7. **Create useful views of Tasks:** a **Board** grouped by Status, a **Calendar** by Due date, and a **My tasks** table filtered to *Assignee contains Me*.
8. **Add a template.** In Tasks, click the arrow next to **New**, choose **+ New template**, and add a checklist ("Definition of done") that every new task starts with.
:::

## Make it work for you

:::steps Finishing touches
1. **Sort Priority options** High, Medium, Low in the property menu, then sort the board by Priority.
2. **Color overdue tasks:** Conditional color › *Due is before Today* › red.
3. **Add an "Overdue" view:** filter *Due is before today* AND *Status is not Done*.
4. **Turn on sub-items** for big tasks (Chapter 9).
5. **Add a timeline view** of Projects using a Dates range property, so you can see them across the quarter.
:::

> [!NOTE]
> Prefer not to build from scratch? The **Templates** gallery (in the sidebar, or notion.com/templates) has thousands of ready-made systems: project trackers, CRMs, habit trackers, and more. Duplicate one, then customize it.

## Automate the busywork

- **Buttons** (`/button`): one click to add a pre-filled task, change several properties, or open a page.
- **Database automations** (paid plans): "when Status changes to Done, set Completed date to today and notify the owner in Slack." Find them under the ⚡ icon at the top right of a database.
- **Recurring templates:** make a template repeat, such as "Weekly review every Friday."

## A weekly routine

:::checklist
- Monday: open **My tasks**, set this week's Due dates
- Daily: work from the **Board**, drag cards as you go
- Friday: check the **Overdue** view and each project's Progress bar
- Friday: archive finished projects by setting Status to Done
:::

# A Personal Dashboard

A **dashboard** is a home page that pulls your important stuff into one view. Instead of hunting through databases, you open one page and see today's tasks, upcoming dates, and quick links.

:::summary In this chapter
- Build a Home page with columns and linked views
- Filters that keep it up to date automatically
- Quick-capture buttons
- Dashboard views on Business plans
:::

:::steps Make a "Home" dashboard
1. **Create a page called Home** and give it an icon and a cover image (hover near the title to add them).
2. **Add columns.** Type `/2` and choose **2 columns**, or drag blocks side by side.
3. **Left column:** add a **linked view** of your Tasks database (`/linked`), filtered to *Assignee is Me* and *Due is this week*, shown as a **List**.
4. **Right column:** a linked **Calendar** view, a callout with this week's focus, and a few quick links (`[[` to link pages).
5. **Add a Chart view** of tasks by status for a visual check-in.
6. **Pin it.** Right-click the page in the sidebar and choose **Add to Favorites**.
:::

A **linked view** shows a database that lives elsewhere, filtered and styled for this spot. Changes made there update the original.

## Add quick-capture buttons

:::steps Two handy buttons
1. **"➕ Quick task":** a button with the action **Add page to › Tasks**, setting Assignee to *Whoever clicked* and Due to today.
2. **"📓 Today's journal":** a button that adds a page to a Journal database with today's date, then opens it.
:::

## Ideas for sections

| Section | What to put there |
|---|---|
| Today | List view: Due is today, Status is not Done |
| Upcoming | Calendar view of the next two weeks |
| Focus | A callout with this week's three priorities |
| Reading | Gallery of books In progress |
| Habits | Today's habit checkboxes (Chapter 14) |
| Links | Your most-used pages and websites |

> [!TIP]
> In Settings › Preferences you can choose which page Notion opens on start-up. Set it to your Home dashboard.

## Dashboard views

On **Business and Enterprise** plans, you can use a true **dashboard view** instead (Chapter 7): type `/dash`, then add up to 12 widgets, such as charts, boards, and calendars, in a drag-and-drop grid. It's tidier than columns, but the column method works on every plan.

:::checklist
- My Home page has two columns and at least two linked views
- The views filter themselves by Me and by date
- I added a quick-task button
- Home is in my Favorites
:::

# Recipes for Your Own Life

These step-by-step builds use only what you've learned so far. Each takes 15 to 30 minutes. Build one, use it for a week, then tweak it: the best Notion systems grow out of real use.

:::summary In this chapter
- A second brain using the PARA method
- A reading list with progress
- A habit tracker
- A budget tracker
- A job application tracker
:::

## Recipe 1: a second brain (PARA)

A **second brain** is a trusted place for everything you want to remember. **PARA** is a popular way to organize it, using four buckets:

| Bucket | Holds | Example |
|---|---|---|
| **Projects** | Short efforts with a goal and an end | "Plan the wedding" |
| **Areas** | Ongoing responsibilities | Health, Finances, Home |
| **Resources** | Topics you're interested in | Recipes, Photography |
| **Archive** | Anything finished or inactive | Last year's projects |

:::steps Build PARA
1. **Create a page "Second brain"** with four linked sections, or one database per bucket.
2. **Create a Notes database** with properties: Type (Select: Note, Idea, Clipping), Project (Relation), Area (Relation), Resource (Relation), Created time.
3. **Create Projects and Areas databases.** Projects: Status, Deadline, Area (Relation). Areas: just a name and icon.
4. **Add an Inbox view** of Notes filtered to *Project is empty AND Area is empty AND Resource is empty*. New notes land here until you file them.
5. **Add a "➕ Capture" button** that adds a page to Notes and opens it.
6. **Install the Web Clipper** (Chapter 27) to save web pages straight into Notes.
7. **Weekly:** empty the Inbox by linking each note to a Project, Area, or Resource. Set finished projects to Done and filter them into an Archive view.
:::

> [!TIP]
> Don't over-organize. A note that's linked to *one* sensible place is findable; search and Notion AI will do the rest.

## Recipe 2: a reading list

:::steps Build a reading list
1. **Create a full-page database "Books".** Properties: Author (Text), Status (Status: Want to read, Reading, Finished), Rating (Select: ★ to ★★★★★), Genre (Multi-select), Cover (Files & media), Pages (Number), Pages read (Number), Finished (Date).
2. **Add a Progress formula:** `format(round(prop("Pages read") / prop("Pages") * 100)) + "%"`.
3. **Add a Gallery view** with Cover as the card preview: your bookshelf.
4. **Add a Board** grouped by Status.
5. **Add a Chart view:** books finished per month (X axis Finished, grouped by month).
6. **Make a template** with headings: Summary, Favorite quotes, What I'll do differently.
:::

## Recipe 3: a habit tracker

:::steps Build a habit tracker
1. **Create a database "Habits log"** where each item is one day. Title: the date as text, or use a Date property called Day.
2. **Add a Checkbox for each habit:** Exercise, Read, Water, Sleep by 11.
3. **Add a Score formula:**
   ```text
   toNumber(prop("Exercise")) + toNumber(prop("Read")) +
     toNumber(prop("Water")) + toNumber(prop("Sleep by 11"))
   ```
4. **Add a repeating template** that creates a new day every morning (daily repeat).
5. **Add a table view** sorted by Day, descending, with column **Calculate › Percent checked** under each habit.
6. **Add a line chart** of Score over Day to see your trend.
:::

## Recipe 4: a budget tracker

:::steps Build a budget
1. **Create a Categories database:** Name (Groceries, Rent, Fun…), Monthly budget (Number, currency).
2. **Create a Transactions database:** Amount (Number, currency), Date, Type (Select: Income, Expense), Category (Relation to Categories), Account (Select).
3. **In Categories, add a rollup "Spent":** relation *Transactions*, property *Amount*, calculate **Sum**.
4. **Add a "Left" formula** in Categories: `prop("Monthly budget") - prop("Spent")`.
5. **Color categories** with Left below 0 in red (conditional color).
6. **Add views of Transactions:** This month (Date is within this month), by Category (grouped), and a donut chart of spending by category.
7. **Add a "➖ Expense" button** that adds a transaction with Type = Expense and Date = today.
:::

> [!NOTE]
> The "Spent" rollup adds up *all* transactions in a category, not just this month's. For monthly totals, start a new set of Categories each month from a template, or filter your Transactions views by month.

## Recipe 5: a job application tracker

:::steps Build a job hunt board
1. **Create a database "Applications".** Properties: Company (Text), Role (Text), Status (Status: Saved, Applied, Interviewing, Offer, Rejected), Applied (Date), Salary (Number), Link (URL), Contact (Email), Next step (Date).
2. **Add a Board** grouped by Status: drag each application along as it progresses.
3. **Add "Days since applied":** `dateBetween(today(), prop("Applied"), "days")`.
4. **Add a "Follow up" view:** Status is Applied AND Days since applied > 7.
5. **Make a template** with sections: Job description (paste it in), Why I fit, Questions to ask, Interview notes.
6. **Set reminders** on Next step dates so Notion nudges you.
:::

```prompt
Using the job description on this page and my CV page, draft a short,
friendly cover letter and five questions I could ask in the interview.
```

:::checklist
- I built at least one of these recipes
- I used it for a few days and changed one thing
- I added a template or a button to speed up daily entry
:::

# Recipes for Work and Teams

These builds suit small businesses, clubs, and teams. Each one is a starting point; adapt the property names to how your group talks.

:::summary In this chapter
- A simple CRM
- A content calendar
- A team wiki
- A meeting notes system
- A shared request queue
:::

## Recipe 6: a simple CRM

A **CRM** (customer relationship manager) tracks the people and companies you work with, and your conversations with them.

:::steps Build a CRM
1. **Create three databases:** Companies, Contacts, and Interactions.
2. **Companies:** Industry (Select), Website (URL), Owner (Person), Status (Status: Lead, Active, Past).
3. **Contacts:** Company (Relation to Companies, two-way), Email, Phone, Role (Text), Last contacted (Rollup, below).
4. **Interactions:** Date, Type (Select: Call, Email, Meeting), Contact (Relation to Contacts, two-way), Notes in the page body.
5. **In Contacts, add a rollup "Last contacted":** relation *Interactions*, property *Date*, calculate **Latest date**.
6. **Add a "Going cold" view** of Contacts: Last contacted is before *one month ago*.
7. **Add a Deals board** if you sell: a Deals database with Value (Number), Stage (Status), Company (Relation), and a chart of value by stage.
:::

## Recipe 7: a content calendar

:::steps Build a content calendar
1. **Create a database "Content".** Properties: Status (Status: Idea, Drafting, Editing, Scheduled, Published), Publish date (Date), Channel (Multi-select: Blog, Newsletter, Instagram, LinkedIn), Author (Person), Link (URL).
2. **Add a Calendar view** by Publish date.
3. **Add a Board** grouped by Status.
4. **Add an "Ideas" list:** Status is Idea, sorted by Created time.
5. **Make a template** with a brief: Goal, Audience, Key points, Call to action.
6. **Automation (paid):** when Status is set to Editing, notify the editor.
:::

```prompt
Look at the Content database and suggest four blog post ideas for next
month that fill the gaps in our calendar. Add each as an Idea.
```

## Recipe 8: a team wiki

A **wiki** is a shared library of how-to pages that everyone can read and improve.

:::steps Build a wiki
1. **Create a teamspace** (or a top-level page) called "Wiki".
2. **Create a database "Docs"** with: Category (Select: Onboarding, Policies, How-to, Tools), Owner (Person), Last reviewed (Date), Last edited time.
3. **Add a List view** grouped by Category as the wiki's front page.
4. **Add a "Needs review" view:** Last reviewed is before six months ago.
5. **Make a doc template** with sections: Purpose, Steps, Who to ask.
6. **Use synced blocks** for content that appears on many pages, such as support contacts.
7. **On Business plans, verify pages:** mark trusted pages as **verified** so they show a badge in search and AI answers.
:::

> [!TIP]
> Put a short "Start here" page at the top of the wiki that links the five pages a new person needs first.

## Recipe 9: a meeting notes system

:::steps Build meeting notes
1. **Create a database "Meetings".** Properties: Date, Type (Select: 1:1, Team, Client), Attendees (Person), Project (Relation to Projects).
2. **Make a template per type**, each with Agenda, Notes, Decisions, and Action items (to-dos).
3. **On Business plans, add AI Meeting Notes:** type `/meet` in the template body so each meeting can be transcribed and summarized (Chapter 17).
4. **Add views:** a Calendar by Date, and "This week" filtered by Date.
5. **Make a weekly 1:1 template repeat** every week.
6. **After each meeting,** turn action items into tasks with Notion AI.
:::

```prompt
Read this meeting page and add every action item to my Tasks database,
with the right assignee, a due date if one was mentioned, and a link back
to this meeting.
```

## Recipe 10: a shared request queue

:::steps Build a request queue
1. **Create a database "Requests"** with Status, Requester (Created by), Priority (Select), Assigned to (Person), and an ID property with the prefix `REQ`.
2. **Add a Form view** (Chapter 19) with questions for the title, details, and priority.
3. **Share the form** with your workspace or the web.
4. **Add a Board** for the team, grouped by Status.
5. **Automation:** when a page is added, notify the team or post in Slack.
:::

## Recipe 11: the project tracker

Recipe 11 is the Projects + Tasks system from Chapter 12. Link it to Meetings and Docs with relations, and you have the core of a small company's workspace.

:::checklist
- I built one work recipe and shared it with one other person
- I added a template so every new item starts the same way
- I tried an AI prompt on the system I built
:::

# Notion AI

Notion AI is built into the workspace. It can write and edit, answer questions using your pages (and connected apps), take meeting notes, build databases, and carry out multi-step tasks as an **agent**. This chapter covers the everyday AI tools; the next two cover meetings, search, and Custom Agents.

:::summary In this chapter
- What's included on each plan
- Five ways to use Notion AI
- Notion Agent: what it can and can't do
- Choosing an AI model
- Personalizing your Agent, and reusable skills
- Prompts to copy
:::

## What's included

| Plan | AI features |
|---|---|
| **Free**, **Plus** | A limited trial of Notion AI features |
| **Business**, **Enterprise** | Notion Agent, AI Meeting Notes, Enterprise Search across connected apps, and the full set of AI writing tools, within a usage allowance |
| **Custom Agents** | Free to try, then paid with **Notion credits** (an add-on: $10 per 1,000 credits per month) |

> [!NOTE]
> Notion says it doesn't use your data to train its AI models unless you opt in, and its AI providers are contractually barred from training on customer data. On Enterprise, the AI providers keep no copy of your data (zero data retention).

## Ways to use Notion AI

- **On an empty line:** press <kbd>Space</kbd> and ask: "Draft a project kickoff agenda."
- **On selected text:** select it, then choose **Ask AI** to improve, shorten, translate, or change the tone. Built-in skills such as **Improve writing**, **Proofread**, **Explain**, and **Reformat** appear in the selection menu.
- **In the AI chat** (the AI face at the bottom right): ask questions across your workspace. "What did we decide about the launch date?" It answers with links to the source pages.
- **AI Meeting Notes:** type `/meet` to transcribe and summarize a meeting with action items (Chapter 17).
- **AI in databases:** add AI-generated properties such as summaries, keywords, or translations that fill in automatically for every row, and ask AI to write formulas.

## Notion Agent

The **Notion Agent** is your AI teammate. It uses the same permissions as you: if you can't see a page, neither can it. By default it looks at the page you're on; select blocks to focus it, or click **@** to add pages or people as context. Click **📎** to upload a file.

What it can do:

- **Multi-step work:** search, then create pages or databases from what it finds.
- **Answer questions** about your workspace, databases, comments, and version history, and connected apps such as Slack.
- **Create and edit pages and databases**, including views, properties, relations, maps, and forms.
- **Work with files:** read PDFs, CSVs, spreadsheets, Word and PowerPoint files, do calculations, and create downloadable files.
- **Manage your Inbox:** group, summarize, and archive notifications.
- **Use connected apps:** post in Slack, draft and send Gmail messages (after you confirm), and find meeting times in your calendar, once you connect them in [[Settings > Notion AI > AI connectors]].
- **Connect other apps through MCP servers:** in the chat, choose **All sources › MCP servers › Add MCP server**.

What it can't do (at the time of writing): create database automations, templates, or advanced properties like formulas, rollups, and buttons; create comments; share pages or change permissions; start AI Meeting Notes; set reminders; or change workspace settings.

```prompt
Look through my meeting notes from the last two weeks, find every action
item assigned to me, and add each one to my Tasks database with a due
date and a link back to the meeting.
```

```prompt
Turn this brainstorm page into a Projects database with a row for each
idea, and fill in a one-sentence summary and an estimated effort.
```

```prompt
Analyze the customer feedback in this CSV. Give me the top five themes,
the overall sentiment, and three recommendations, citing examples.
```

## Choosing a model

Click **Auto** in the chat to pick a different AI model. Notion offers models from Anthropic (Claude), OpenAI (GPT), Google (Gemini), and others. **Auto** lets Notion choose the best model for each task, and is a good default.

> [!IMPORTANT]
> **Premium models** spend Notion credits, and a workspace admin must turn each one on in [[Settings > Notion AI]]. Some models can only use the web, not your workspace, so check the note in the model menu.

## Personalize your Agent

:::steps Give your Agent instructions
1. **Click the Agent's face** at the bottom of Notion, then click the face again in the chat window.
2. **Give it a name and accessories**, if you like.
3. **Choose Add instructions** and pick an existing page, a template, or **Create your own page** (a private page called *My Notion AI*).
4. **Write your preferences:** your role, how you like answers formatted, and which pages or channels to check first.
:::

## Skills

A **skill** is a page of reusable instructions for one kind of job, such as "Turn notes into a recap email". Mark any page as a skill and run it from the chat; Notion Agent can also pick a skill by itself when it fits. Find your skills in the **Skills** tab of **Library**.

> [!TIP]
> A good rule: if you'd paste the same prompt twice, make it a skill.

## Chat tips

- **Switch chat mode** between a sidebar and a floating window.
- **Pin** chats you return to often.
- **Find old chats** by hovering over Notion AI in the sidebar and clicking 🕘.
- **Give feedback** with thumbs up or down. Feedback isn't used to train your Agent.

## Prompts that work well

| Goal | Prompt |
|---|---|
| Summarize | "Summarize this page in five bullets for a busy manager." |
| Rewrite | "Rewrite this in plain English for a 12-year-old." |
| Translate | "Translate this page into Spanish, keeping the headings." |
| Build | "Create a database to track my house plants, with watering dates." |
| Find | "Which pages mention the Berlin office? Link them." |
| Plan | "Make a four-week study plan for my exam on the date in this page." |

:::checklist
- I asked AI to draft something on an empty line
- I improved a paragraph with Ask AI
- I asked the AI chat a question about my workspace
- I wrote personal instructions for my Agent
:::

# AI Meeting Notes and Enterprise Search

Two Notion AI features save time every single day on Business and Enterprise plans: **AI Meeting Notes**, which listens to a meeting and writes it up, and **Enterprise Search**, which finds answers across Notion and your other apps.

:::summary In this chapter
- Recording and summarizing a meeting
- Uploading audio, speaker labels, and custom summaries
- Searching across connected apps with citations
- Connecting Slack, Google Drive, and more
:::

## AI Meeting Notes

**AI Meeting Notes** transcribes a meeting (turns speech into text), then writes a summary with key points and action items. It's included on Business and Enterprise plans; Free and Plus get a limited trial.

| Where | What it hears | Best for |
|---|---|---|
| **Desktop app** | Your microphone *and* your computer's sound | Video calls |
| **Browser** | Only your microphone | In-person meetings |
| **Mobile app** | Only your phone's microphone | In-person meetings |

:::steps Take AI meeting notes
1. **Type `/meet`** on any page in the desktop app (or start one from **Upcoming events** on Home).
2. **Jot agenda items** under **Notes** before the meeting. The summary will take them into account.
3. **Click Start transcribing** when the meeting starts. This confirms everyone has agreed to be recorded.
4. **Click Stop** at the end. The summary starts writing automatically (you need at least one minute of audio).
5. **Review the summary.** Hover over a citation to see the exact part of the transcript it came from.
:::

> [!IMPORTANT]
> Always tell people you're transcribing and get their consent. Laws on recording conversations differ between countries and states.

### More options

- **Upload a recording:** open the meeting notes block's settings and choose **Upload audio** (AAC, M4A, MP3, or WAV).
- **Speaker labels:** the desktop app labels who said what, best in one-to-one video calls. For Google Meet in Chrome, the Notion Meetings browser extension improves labels.
- **Change the summary style:** under **Instructions** at the bottom of the block, switch from **Auto** to a format such as a sales call or standup, or click **+ Add custom instructions** to design your own.
- **Calendar link:** connect Notion Calendar to start notes from an event in one click (Chapter 22).
- **Automatic sharing:** in [[Settings > Notion AI]] you can auto-share notes with workspace members who were invited to the event. Otherwise notes are private to you.

```prompt
From this meeting's notes, write a short follow-up email to the client
that thanks them, confirms the three decisions, and lists next steps.
```

## Enterprise Search

**Enterprise Search** answers questions using your Notion workspace, your connected apps, and the web, and always cites its sources. Open **Home** and type your question in the search window.

- **Narrow the scope:** click **All sources** to switch off web search, or to search only your workspace, one teamspace, or one app such as Slack.
- **Add context:** click **Add context** or `@`-mention pages, teamspaces, and people.
- **Databases count too:** it can read views, relations, and properties.

### Connect your other apps

**Notion AI Connectors** let AI search other tools. Set them up in [[Settings > Notion AI > AI connectors]]. Available connectors include Slack, Microsoft Teams, Google Drive, Gmail, Google Calendar, Microsoft Outlook, GitHub, and more; Notion lists Jira, Box, OneDrive, Salesforce, and Asana as beta.

> [!NOTE]
> Connectors respect permissions: you'll only get answers from content you could already open in that app.

## Research mode

For bigger questions, **Research mode** (beta) uses deeper reasoning to write a detailed report from your workspace, connected tools, and current web information. It's available on Business and Enterprise, with a limited trial elsewhere.

```prompt
Research what our customers said about onboarding in the last quarter,
using Slack, support notes, and meeting notes. Write a two-page report
with quotes and recommendations.
```

:::checklist
- I know which app to use for video calls vs in-person meetings
- I recorded or uploaded a meeting and read its summary
- I asked Enterprise Search a question and checked its citations
- I connected at least one other app, or know where to do it
:::

# Custom Agents and Notion Credits

**Custom Agents** are AI teammates that run on their own: on a schedule, or when something happens. You set them up once, and they keep doing a job, such as writing a weekly report or sorting incoming requests, in the background.

:::summary In this chapter
- Notion Agent vs Custom Agents
- Building your first Custom Agent
- Triggers, access, and models
- Safety: permissions, logs, and reviews
- Notion credits: what they cost and how to track them
- Claude agents in Notion (beta)
:::

## Notion Agent vs Custom Agents

| | Notion Agent | Custom Agent |
|---|---|---|
| **Starts when** | You ask in chat | A schedule, an event, or a mention |
| **Sees** | Everything you can see | Only what you grant it |
| **Good for** | One-off tasks | Recurring jobs |
| **Plan** | Business, Enterprise | Business, Enterprise, plus credits |

## Build your first Custom Agent

:::steps Create an agent
1. **Go to Agents** in the sidebar and click **+** (you'll need the desktop or web app).
2. **Choose how to start:** describe the job in an **AI chat**, pick a **template**, or **Create blank**.
3. **Review the draft** instructions, triggers, and access that Notion suggests. Edit until they match what you want.
4. **Test it** in the agent's chat: ask it to do a one-off run and watch what it does.
5. **Save and publish.** From now on it runs whenever its triggers fire.
:::

Write instructions like a brief for a new colleague: the job, the outcome you want, the steps, and an example of good output.

```prompt
Every Friday at 3pm, read all pages in the Projects database that were
edited this week. Write a status update with one section per project:
what changed, risks, and next steps. Post it as a new page in the
Weekly updates database and keep it under 400 words.
```

## Triggers

| Trigger type | Examples |
|---|---|
| **Recurring schedule** | Every day at 9:00, every Monday, monthly, with a timezone |
| **Notion events** | A page is added to a database, a property is updated, a comment is added, a page is removed, an AI Meeting Note finishes |
| **Slack events** | A message in a channel, an emoji reaction, the agent is @-mentioned |

You can add filters, such as "only when Status is New" or "only messages containing *bug*". Slack triggers need a Slack admin to connect Slack to Notion first.

## Access and tools

An agent only touches what you give it. In **Settings › Tools and access**:

- **Add specific pages and databases**, such as "Support tickets".
- **Web access:** switch on if the job needs the internet; keep it off for internal work.
- **Slack:** pick exactly which channels it can read and post in.
- **MCP connections:** link other apps.
- **Other agents:** let it hand parts of a job to other Custom Agents.

> [!NOTE]
> Linking a page inside the instructions doesn't grant access to it. Add it under Tools and access.

## Models

Leave the model on **Auto** to start. You can pick a stronger model for planning and checking, and lighter, faster models for simple jobs. Premium models cost more credits.

## Safety by design

- **Permission levels:** **Full access** (configure everything and see logs), **Can edit** (change instructions), **Can view and interact** (run and chat with it).
- **Activity log:** every run is recorded: what triggered it, what it did, and any errors.
- **Version history:** restore an earlier setup if a change goes wrong.
- **Enterprise audit log:** configuration changes are recorded for admins.

> [!TIP]
> Give agents narrow, specific jobs and limited access ("only the Support database and the #help channel"). Review their logs for the first week before trusting them fully.

## Notion credits

**Notion credits** are a paid add-on for Business and Enterprise plans. They're shared across the workspace and pay for Custom Agents, Workers (custom code), premium AI models, and AI use beyond your plan's allowance.

| Type | Price | How it works |
|---|---|---|
| **Monthly credits** | $10 per 1,000 credits | Billed monthly; reset each month; unused credits don't carry over |
| **Annual credits** | $13 per 1,000 credits | Paid upfront; use any time in the year; expire at renewal |

Admins buy credits and watch usage in the **Notion credits dashboard**, and can set a credit limit for each person. Longer jobs, more reading, and premium models use more credits. Custom Agents are free to try before you need credits.

> [!WARNING]
> Sub-agents and hand-offs also spend credits. Check each agent's **Activity** and **Insights** tabs after testing to see what a run really costs.

## Claude agents in Notion (beta)

On Business and Enterprise, some workspaces can add **Claude agents**: agents from Anthropic that you chat with and assign work to inside Notion. Create one from **Agents › New Agent › Claude**. They're paid with Notion credits (no Anthropic account needed), see only what you share with them, and can't browse the web. They're off by default on Enterprise and HIPAA workspaces; owners switch them on under [[Settings > Notion AI]].

## Agent ideas

| Agent | Trigger | Job |
|---|---|---|
| Request triage | Page added to Requests | Set priority, assign an owner, reply with next steps |
| Weekly report | Every Friday | Summarize project changes |
| Q&A helper | Mentioned in #help | Answer from the wiki, with links |
| Meeting follow-up | AI Meeting Note finished | Create tasks from action items |
| Wiki gardener | Monthly | List docs not reviewed in six months |

:::checklist
- I know the difference between Notion Agent and Custom Agents
- I drafted instructions for one recurring job
- I limited the agent's access to the pages it needs
- I know how credits are priced and where usage is shown
:::

# Forms

A **form** collects answers from people, even people who don't use Notion, and drops each response into a database as a new item. Forms are available on every plan.

:::summary In this chapter
- Creating a form, new or from a database
- Question types and settings
- Sharing your form and its submission settings
- What each plan adds
:::

## Create a form

:::steps A new form
1. **Type `/form`** on a page and choose **Form**.
2. **Give it a title and description**, and hover over the title to add an icon or cover.
3. **Click into each question** to edit it, and use **+** below the last one to add more.
4. **Click Preview** to see it as a respondent will.
:::

A **Respondent** property is created automatically to record who answered (unless you allow anonymous answers).

To add a form to an **existing database**, click **+** next to its views and choose **Form**, then **Create questions**. You need full access to the database.

## Questions and properties

Every question *is* a database property. Add a question "What's your favorite color?" and a property with that name appears. Rename the question and the property is renamed too, unless you switch off **Sync with property name**.

Click **•••** on a question to:

- Make it **Required**.
- Add a **Description**.
- Change its **Question type** (text, multiple choice, date, person, file, and more).
- Allow a **Long answer** for text.
- Show choices as a **list or dropdown**, and limit how many can be chosen.
- Add **conditional logic** (Business and Enterprise): show different follow-up questions depending on an answer.

**Form settings › Submit screen** lets you change the button's text and color, the thank-you message, and get an email copy of each submission.

## Share your form

:::steps Publish a form
1. **Click Share form** at the top of the form builder.
2. **Choose Who can fill out:** *Anyone at your workspace with link*, *Anyone on the web with link*, or *No access* (closes the form).
3. **Copy the link** and send it, or embed it on a website.
:::

For workspace-only forms with names recorded, **Access to submission** decides what respondents can do with their answer afterwards: nothing, view, comment, edit, or full access.

| Plan | Forms |
|---|---|
| Free | Basic forms |
| Plus | Custom forms, and no Notion branding on public forms |
| Business, Enterprise | Custom forms plus conditional logic |

> [!TIP]
> Pair a form with an automation: when a page is added, notify the right person or post in Slack. You've built a request system in five minutes.

> [!NOTE]
> You can't create or customize forms on a phone, and the Form view itself can't be exported. Export responses from a table view instead.

## Form ideas

- Event RSVP: name, attending (yes or no), dietary needs.
- Bug report: summary, steps, screenshot (file), severity.
- Customer feedback: rating (select 1–5), comments, may we contact you?
- Content pitch: title, angle, deadline.

:::checklist
- I created a form and previewed it
- I made one question required
- I shared it with a link and submitted a test response
:::

# Sharing, Permissions, and Guests

Notion is built for working with others, but you stay in control of who sees what. This chapter explains the Share menu, the access levels, members and guests, and how to work together with comments and version history.

:::summary In this chapter
- Sharing a page with people, teamspaces, or the web
- Every access level, explained
- Members, admins, owners, and guests
- Database permissions by person
- Comments, notifications, and version history
:::

## Sharing a page

Click **Share** at the top right of any page:

- **Invite** people by email and choose their access: **Full access**, **Can edit**, **Can comment**, or **Can view**.
- **General access**: decide whether only invited people, everyone in your workspace, or anyone with the link can open it.
- **Publish** (the **Publish** tab in the Share menu): turn the page into a public website with **Notion Sites** (Chapter 21).

Pages inherit sharing from their parent: share a parent page and everything inside it is shared too.

:::steps Share with a few people
1. **Click Share.**
2. **Type names or email addresses.** People outside your workspace become guests.
3. **Pick an access level** from the dropdown next to them.
4. **Click Invite.** They get an email, and the page appears in their **Shared** section.
:::

## Access levels

| Level | Can view | Can comment | Can edit | Can share |
|---|---|---|---|---|
| **Full access** | Yes | Yes | Yes | Yes |
| **Can edit** | Yes | Yes | Yes | No |
| **Can edit content** (databases) | Yes | Yes | Items only | No |
| **Can comment** | Yes | Yes | No | No |
| **Can view** | Yes | No | No | No |

**Can edit content** lets people add and edit database items without changing the database's structure, views, or filters. **Can create** (Business and Enterprise) lets people add new items to a database without seeing other people's items, which is ideal for tickets and submissions.

## General access

| Setting | Who can open the page |
|---|---|
| **Only people invited** | You and the people you've added |
| **Everyone at your workspace** | Any workspace member, by search or link (you can hide it from search) |
| **Anyone on the web with link** | Anyone with the link, even without a Notion account |

For web links you can set an expiry under **Link expires**. Visitors need to log in to comment or edit.

> [!CAUTION]
> "Anyone on the web with link" means *anyone*. Links get forwarded. Don't use it for private information, and set an expiry for temporary sharing.

## Members, admins, owners, and guests

| Role | What they can do | Paid seat? |
|---|---|---|
| **Workspace owner** | Everything, including billing and security settings | Yes |
| **Membership admin** | Add and remove members and groups | Yes |
| **Member** | Use teamspaces and create content | Yes |
| **Guest** | Only the specific pages shared with them | No |

Add members in [[Settings > People]] (called **Members** on some plans): choose **Add members**, enter an email, pick a role, and click **Invite**. You can also share an invite link, or let anyone with your company email domain join automatically under **Allowed email domains**.

To add a **guest**, share a page with their email and choose **Skip for now** so they're added as a guest, not a member. Guests need their own (free) Notion account. The Free plan allows up to 10 guests; paid plans allow more.

> [!TIP]
> Use guests for clients, contractors, and family members who only need a few pages. They don't cost a seat.

## Groups

On team plans, **groups** (such as "Design" or "Managers") let you share with many people at once. Share a page with the group and everyone in it gets access; add someone to the group later and they get access automatically.

## Database permissions by person

On Business and Enterprise plans, a database with a Person property (or Created by) can give people access only to *their* items. Open the source database, click **Share**, and under **Page-level access** choose **Add a new rule**. For example: people in the *Assignee* property can edit those tasks, and nothing else.

## Stop sharing

- Drag the page into your **Private** section, or
- Open **Share** and choose **Remove** next to a person, group, or teamspace.

## Working together

- **Comments:** select text and click **Comment**, or hover over a block and use its comment icon. Mention teammates with `@`.
- **Page history:** **•••** menu, then **Version history**, to see and restore earlier versions. The history length depends on your plan: 7 days on Free, 30 on Plus, 90 on Business, and unlimited on Enterprise.
- **Notifications:** the **Inbox** in the sidebar collects mentions, comments, and reminders.
- **Access requests:** if someone asks for more access to your page, you can approve or reject it from your Inbox.

> [!WARNING]
> Before publishing a page to the web, check the subpages inside it. They're published too, unless you change their settings.

:::checklist
- I shared a page with one person at Can comment
- I checked the General access setting on an important page
- I know the difference between a member and a guest
- I restored an earlier version from Version history
:::

# Notion Sites

**Notion Sites** turns any page into a public website with one click: a portfolio, a résumé, a blog, an event page, or a help center. The site updates automatically whenever you edit the page.

:::summary In this chapter
- Publishing a page as a site
- Slugs, search engines, and embedding
- Customizing on paid plans
- Using your own domain, and what it costs
:::

## Publish a site

:::steps Publish a page
1. **Open the page** and click **Share**.
2. **Open the Publish tab** and click **Publish**.
3. **Click View site** to see it live at a `notion.site` address.
:::

> [!WARNING]
> Publishing a page also publishes all of its subpages. Check them first, and remember that a site's metadata can include the names and photos of people who edited it.

## Site settings

After publishing, open **Share › Publish** again:

- **Copy the link** to share it.
- **Slug** (paid plans): the part after the domain, as in `notion.site/my-slug`. Letters, numbers, and hyphens only, up to 60 characters.
- **Search engine indexing:** switch on **Discoverable on the web** so Google can find it. It can take up to four weeks to appear. Paid plans can edit the title and description search engines show.
- **Duplicate as template:** let visitors copy your page into their own workspace.
- **Embed this page:** copy code to put the page, a form, or a chart on another website.
- **All published sites:** see everything you've published.

## Customize your site (paid plans)

Open **Share › Publish › Site customization**:

| Setting | What it changes |
|---|---|
| **Share preview** | The image and text shown when the link is shared |
| **Theme** | System, Light, or Dark |
| **Favicon** | The little icon in the browser tab |
| **Header** | Breadcrumbs, search, navigation links, and the Notion watermark |
| **Google Analytics** | Add a measurement ID to count visitors |

Click **Publish changes** when you're done.

## Plans and domains

| Feature | Free | Paid plans |
|---|---|---|
| Published sites | Unlimited | Unlimited |
| `notion.site` domains | 1 | Up to 5 |
| Search engine indexing | Yes | Yes, with custom title and description |
| Homepage, customization, analytics | No | Yes |
| Your own domain | No | Add-on: $10/month per domain, or $8/month billed yearly |

### Use your own domain

:::steps Connect a custom domain
1. **Buy a domain** from a domain provider if you don't have one. Notion doesn't sell domains.
2. **Go to [[Settings > Sites]]** and click **New domain › Custom domain**.
3. **Enter the domain with a subdomain**, such as `www.mysite.com`.
4. **Add a CNAME record** at your domain provider pointing to `external.notion.site.` (note the final period).
5. **Wait for it to connect**, then set the page as the domain's homepage.
:::

With a custom domain you can also remove the "Built with Notion" watermark. You can connect up to 25 custom domains.

> [!TIP]
> To make `mysite.com` (without www) work too, set up a redirect to `www.mysite.com` at your domain provider.

:::checklist
- I published a test page and opened it in a private browser window
- I checked which subpages were published with it
- I know how to turn search indexing on or off
:::

# Notion Calendar (and Notion Mail)

**Notion Calendar** is a free calendar app that shows your Google, iCloud, or Microsoft Outlook calendars alongside your Notion databases. It's a separate app that signs in with your Notion account.

:::summary In this chapter
- Getting Notion Calendar on every device
- Connecting calendars and Notion workspaces
- Showing Notion databases on your calendar
- Starting AI Meeting Notes from an event
- What happened to Notion Mail
:::

## Get Notion Calendar

Notion Calendar runs on **Mac**, **Windows**, the **web**, **iPhone and iPad**, and **Android**. Download it from the Notion website or your app store. {{Free}}

:::steps Set it up
1. **Sign up with your Notion account.** If you don't have one, Notion creates one with the same email.
2. **Connect a calendar:** Google, iCloud, or Microsoft Outlook. You can add several accounts.
3. **Connect your Notion workspace:** open **Settings**, and under **Notion workspaces** choose **Add Notion workspace**. Repeat for each workspace.
:::

> [!TIP]
> Sign up with an email you'll always have, such as a personal address. You can add work calendars afterwards.

## Show a Notion database on your calendar

Any database with a **Date** property can appear in Notion Calendar, so tasks, content, and deadlines sit next to your meetings.

:::steps Add a database
1. **Find your Notion workspace** at the bottom of Notion Calendar's left sidebar.
2. **Hover over it and click ••• › Add Notion database.**
3. **Search for the database** and select it.
:::

You need at least **Can view** access to show a database, and **Can edit content** access to add or move items from the calendar.

## Meetings and notes

When you create an event, use **Add AI meeting notes** to create a new meeting page or attach an existing one. Notes made this way are private by default; you can share them automatically with workspace members who are invited (Chapter 17).

## Mobile widgets

Notion Calendar has home screen widgets on iOS and Android, and lock screen widgets on iOS. Customize them in the app's settings.

## What happened to Notion Mail?

**Notion Mail**, an email app for Gmail, shut down on **September 22, 2026**. Your emails were always stored in Gmail, so they're safe there. Notion now handles email through **Notion Agent**: connect Gmail in [[Settings > Notion AI > AI connectors]], and the Agent can search your inbox, draft replies, and send messages after you confirm.

```prompt
Search my Gmail for emails from Acme about the contract this month,
summarize where things stand, and draft a polite reply to the latest one.
```

## Tips for a calm calendar

- **Color-code** each calendar and database so you can tell work, home, and deadlines apart at a glance.
- **Hide** calendars you only need occasionally, rather than disconnecting them.
- **Drag a Notion item** to a new day to reschedule it in the database too (you need Can edit content access).
- **Start meeting notes from the event** so the notes page is named and dated for you.

:::checklist
- I installed Notion Calendar and connected a calendar
- I connected my Notion workspace
- I added a database with dates to the calendar
:::

# Import, Export, and Backups

Your content belongs to you. Notion can bring in notes and documents from other apps, and it can export everything so you always have your own copy.

:::summary In this chapter
- Importing files and other apps
- Exporting pages as PDF, HTML, or Markdown & CSV
- Backing up your whole workspace
- Trash, version history, and recovery
:::

## Import

Imports work on desktop and web (not mobile). Start one in any of three ways:

- [[Settings > Import]], then choose an app or file type.
- Type `/` on a page and search for the importer, such as `/csv` or `/trello`.
- **••• › More › Import** on the page you want to import into.

| You can import | Becomes |
|---|---|
| Text and Markdown (.txt, .md) | Pages |
| Microsoft Word (.docx), HTML, PDF | Pages |
| CSV | A database |
| ZIP of files | Pages and folders |
| Evernote | Notebooks become pages; notes become database items |
| Trello | Boards become databases; cards become items; lists become groups |
| Confluence, Asana, Monday.com, Google Docs, Dropbox Paper, Excel, and more | See the importer for each |

Track progress under [[Settings > Import]] in the **In progress** and **Complete** tabs.

> [!TIP]
> Importing a lot? Try a small batch first and check how it looks. Trello and Evernote imports are reliable up to about 5,000 cards or notes; split anything bigger.

## Export a page

:::steps Export a page
1. **Click ••• › More › Export** on the page.
2. **Choose a format:** PDF, HTML, or Markdown & CSV.
3. **Choose options:** whether to include files and images, and whether to **Include subpages**.
4. **Click Export.** Big exports arrive as an emailed download link.
:::

| Format | Best for |
|---|---|
| **PDF** | Printing and sharing a fixed copy |
| **HTML** | A browsable offline copy, including comments |
| **Markdown & CSV** | Moving to other apps; databases become CSV files |

> [!NOTE]
> PDF export with subpages needs a Business or Enterprise plan. You can't print a full-page database directly: export it as PDF first.

## Back up your whole workspace

:::steps Export everything
1. **Open [[Settings > General]].**
2. **Click Export all workspace content.**
3. **Choose HTML or Markdown & CSV.**
4. **Check your email** for the download link. It expires after 7 days, and big workspaces can take up to 30 hours.
:::

The export only includes pages *you* can access. It can't be re-imported to rebuild the workspace instantly, but it keeps your words safe. There's no built-in automatic backup schedule.

> [!TIP]
> Windows can't open very deep ZIP folders. If your export won't unzip, untick **Create folders for subpages**, or use a tool like 7-Zip.

## Recovery

| Problem | Fix |
|---|---|
| Deleted a page | **Trash**: restore within 30 days |
| Broke a page | **••• › Version history**: restore an earlier version |
| Deleted longer ago | Contact Notion support; they keep backups for 30 days |

:::checklist
- I imported a file or a CSV
- I exported one page as PDF and one as Markdown
- I know how to export my whole workspace
:::

# Connect Notion to Other Tools

Notion works best when it talks to the other apps you use. This chapter covers built-in connections, link previews, the Web Clipper, and automation tools such as Zapier, Make, and n8n.

:::summary In this chapter
- Connections in Settings
- Link previews and embeds
- Slack and other popular connections
- No-code automation tools
:::

## Built-in connections

Notion connects with Slack, Google Drive, GitHub, Jira, Figma, and many more. Paste a link from those apps and choose **Paste as preview** for a live card. Manage connections under [[Settings > Connections]].

:::steps Add a connection
1. **Open [[Settings > Connections]].**
2. **Search or filter** for the app.
3. **Open it and follow the steps** to sign in and approve access.
4. **Add it to pages:** on a page, click **••• › More**, find **Connections**, and choose **Add connections**.
:::

> [!NOTE]
> On Enterprise plans, workspace owners can limit which connections members may install. If you can't find one, ask an owner.

## Link previews and embeds

| Paste option | Shows |
|---|---|
| **Mention** | A small inline link with the app's icon |
| **Paste as preview** | A live card (a GitHub pull request, a Figma frame, a Jira ticket) |
| **Embed** | The content itself, inside the page |
| **Bookmark** | A link card with a title and image |

## Popular connections

| App | What it does |
|---|---|
| **Slack** | Notifications from automations; AI search and actions in Slack |
| **Google Drive** | Previews and embeds of Docs, Sheets, and Slides; AI search |
| **GitHub, Jira, Asana** | Previews, and on Business plans synced databases |
| **Figma** | Live previews of designs |
| **Gmail** | Send mail from buttons and automations; Agent actions |

## No-code automation tools

Zapier, Make, and n8n all have Notion integrations (for example, "add every new form response to a Notion database"; see the *n8n* manual). Typical recipes:

- New email with a label → new item in a Notion database.
- New row in a Google Sheet → new Notion page.
- Notion item set to Done → message in a chat app.
- Notion **Send webhook** action → start a workflow in n8n.

These tools sign in to Notion with **OAuth** (a "log in and approve" screen) and ask which pages they may access. Pick only the pages they need.

> [!TIP]
> If a tool says it "can't find" your database, open the database's **••• › More › Connections** and check the tool is listed. Chapter 25 explains why.

## Choosing a no-code tool

| Tool | Good for | Notes |
|---|---|---|
| **Zapier** | The widest range of apps | Easiest for beginners |
| **Make** | Visual, multi-step scenarios | Drag-and-drop builder |
| **n8n** | Self-hosting and complex logic | See the *n8n* manual |

:::checklist
- I opened Settings › Connections
- I pasted a link as a preview
- I know which automation tool I'd use, and how it gets access
:::

# The Notion API: A Beginner Example

The **API** (application programming interface) is how programs talk to Notion: reading pages, adding database items, and reacting to changes. You don't need to be a developer to try it. This chapter walks you through your first API call, step by step.

:::summary In this chapter
- Connections, tokens, and why sharing matters
- Creating an internal connection
- Your first request with curl
- Adding a database item from the command line and from JavaScript
- API versions, webhooks, and personal access tokens
:::

## Key words

| Word | Meaning |
|---|---|
| **Connection** | A program's identity in Notion, formerly called an *integration* |
| **Internal connection** | A connection for your own workspace only |
| **API token** | A secret password the program sends with every request |
| **Endpoint** | A web address the API answers at, such as `https://api.notion.com/v1/pages` |
| **Data source** | The collection of items behind a database (Chapter 5) |
| **JSON** | The text format the API uses for data |

## Step 1: create a connection

For Zapier, Make, n8n, or your own scripts, create a **connection** (Notion's developer docs call it an *internal connection*, formerly an *integration*):

:::steps Create an API connection
1. **Open the developer portal** at app.notion.com/developers/connections. You need to be a workspace owner.
2. **In the Build section, choose Internal connections**, then **Create a new connection**. Give it a name and pick the workspace.
3. **Copy the API token** from its **Configuration** tab. Treat it like a password. Here you can also choose its **capabilities**, such as read, update, and insert content.
4. **Grant access to pages.** Either add pages in the connection's **Content access** tab, or open a page, click **••• › More › Connections › Add connections**, and pick your connection.
5. **Paste the token** into n8n, Zapier, or your script's credentials.
:::

> [!NOTE]
> A new connection can't see *anything* until you share pages with it. Sharing a parent page also shares its subpages. If an automation says "object not found," this is almost always why.

> [!CAUTION]
> Never paste your token into a web page, a shared document, or code you upload to GitHub. Store it in an **environment variable** (a setting on your computer that programs can read). If a token leaks, create a new one.

## Step 2: test the token

Open a terminal (Terminal on a Mac, PowerShell on Windows). First, store your token in an environment variable so it doesn't appear in your commands. On a Mac or Linux:

```bash
export NOTION_API_KEY="paste-your-token-here"
```

Now ask Notion who your connection is:

```bash
curl https://api.notion.com/v1/users/me \
  -H "Authorization: Bearer $NOTION_API_KEY" \
  -H "Notion-Version: 2026-03-11"
```

If it works, you'll get back a short JSON answer describing your connection's **bot user**. An error saying `unauthorized` means the token is wrong.

> [!IMPORTANT]
> Every request must include a `Notion-Version` header. Notion names versions by date; the latest is `2026-03-11`. Older versions keep working, but new examples in the docs use the latest one.

## Step 3: add an item to a database

Make a small database called "Groceries" with three properties: **Grocery item** (the title), **Price** (Number), and **Last ordered** (Date). Share it with your connection (Step 1, item 4).

Next you need the **data source ID**, a long code identifying the database's data source. Copy it from the database's **Manage data sources** option in Notion, then store it:

```bash
export NOTION_DATA_SOURCE_ID="paste-the-id-here"
```

Now create a page (an item) in it:

```bash
curl https://api.notion.com/v1/pages \
  -H "Authorization: Bearer $NOTION_API_KEY" \
  -H "Content-Type: application/json" \
  -H "Notion-Version: 2026-03-11" \
  --data "{
    \"parent\": { \"data_source_id\": \"$NOTION_DATA_SOURCE_ID\" },
    \"properties\": {
      \"Grocery item\": {
        \"title\": [{ \"text\": { \"content\": \"Tomatoes\" } }]
      },
      \"Price\": { \"number\": 1.49 },
      \"Last ordered\": { \"date\": { \"start\": \"2026-09-01\" } }
    }
  }"
```

Open the database: "Tomatoes" is there. Running the command again adds another copy.

| Error | Usually means |
|---|---|
| `400` validation error | A property name or value doesn't match the database |
| `401` unauthorized | The token is wrong or missing |
| `403` | The connection lacks a capability, such as insert content |
| `404` not found | Wrong ID, or the database isn't shared with the connection |

## The same thing in JavaScript

If you have Node.js installed, Notion's official SDK (a ready-made code library) makes this tidier. Install it in a new folder:

```bash
npm install @notionhq/client
```

Save this as `create-page.mjs`:

```javascript title=create-page.mjs
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const page = await notion.pages.create({
  parent: { data_source_id: process.env.NOTION_DATA_SOURCE_ID },
  properties: {
    "Grocery item": { title: [{ text: { content: "Bread" } }] },
    Price: { number: 2.5 },
    "Last ordered": { date: { start: "2026-10-16" } },
  },
});

console.log("Created page:", page.id);
```

Run it with `node create-page.mjs`. The SDK sets the version header for you.

```prompt
Using the Notion API version 2026-03-11 and the @notionhq/client SDK,
write a Node.js script that reads every item in my data source and
prints the titles of items whose Price is over 5. Explain each line.
```

## More you can do

- **Query a data source** to read items with filters and sorts.
- **Append blocks** to add content to a page.
- **Webhooks:** let Notion send your server a message when content changes, instead of checking constantly.
- **Public connections** use OAuth so other people can install your app in *their* workspaces.
- **Personal access tokens** (from the developer portal) act as *you*, with your own permissions, for personal scripts and trusted tools.

The full reference lives at developers.notion.com.

:::checklist
- I created an internal connection and copied its token safely
- I shared a database with the connection
- I ran the "who am I" request
- I added an item with curl or JavaScript
:::

# Notion MCP: Connect AI Assistants

**MCP** (Model Context Protocol) is a standard way for AI apps to use other tools. Notion runs an official **MCP server**, so assistants like Claude, ChatGPT, Cursor, and Claude Code can search, read, create, and update your Notion pages and databases (see the *MCP* manual in this series).

:::summary In this chapter
- What Notion MCP does, and how it differs from the API
- Connecting Claude, Claude Code, Codex, Cursor, and others
- What an assistant can do once connected
- Security and admin controls
:::

## How it works

Notion MCP is a **remote** server hosted by Notion at `https://mcp.notion.com/mcp`. Your AI app connects to it, you sign in with **OAuth** (a Notion "approve access" screen), and the assistant can then use Notion tools: search, fetch pages, create pages and databases, update properties, add comments, and more.

| | Notion MCP | Notion API |
|---|---|---|
| **Built for** | AI assistants | Programs you write |
| **Sign-in** | OAuth, as you | Token for a connection |
| **Sees** | Everything *you* can see | Only pages shared with the connection |
| **Setup** | Minutes, no code | Code required |

## Connect your assistant

- **Claude:** [[Settings > Connectors]], find **Notion**, click **Connect**, and approve.
- **Claude Code:** `claude mcp add --transport http notion https://mcp.notion.com/mcp`, then `/mcp` to sign in.
- **Cursor and others:** add a remote server with the URL `https://mcp.notion.com/mcp`.

### Codex

Add this to `~/.codex/config.toml`, then run `codex mcp login notion`:

```toml title=config.toml
[mcp_servers.notion]
url = "https://mcp.notion.com/mcp"
```

### Cursor

Create `.cursor/mcp.json` in your project (or `~/.cursor/mcp.json` for every project), then enable Notion in Cursor and complete the sign-in:

```json title=mcp.json
{
  "mcpServers": {
    "notion": {
      "url": "https://mcp.notion.com/mcp"
    }
  }
}
```

### Any other MCP client

| Option | Use when |
|---|---|
| Streamable HTTP: `https://mcp.notion.com/mcp` | The default; try this first |
| SSE: `https://mcp.notion.com/sse` | The app doesn't support Streamable HTTP |
| `npx -y mcp-remote https://mcp.notion.com/mcp` | The app only supports local (stdio) servers |

> [!TIP]
> In Claude Code, `--scope user` makes the Notion server available in every project, and `--scope project` shares it with your team through a `.mcp.json` file.

## Things to ask once connected

```prompt
Search my Notion for the Q3 launch plan and summarize the open risks.
```

```prompt
Create a Notion page called "Release notes 2.4" in my Engineering
teamspace from the changes in this repository's last ten commits.
```

```prompt
Add these five customer requests to my Requests database in Notion,
setting Priority to Medium and linking each to the right company.
```

## Security

You sign in with OAuth, and the AI can only see pages *you* can see. That also means it can see *everything* you can see, so:

- **Start with personal use** before rolling it out to a team.
- **Use clear page titles**, because AI relies on them to find things.
- **Review what the assistant changes**, especially bulk edits.
- **Disconnect** apps you no longer use from your workspace settings.

Workspace owners can review and restrict these connections in [[Settings > Connections]]. On the **Enterprise** plan, owners can allow only approved AI apps: under **Permissions**, set **Restrict AI apps members can connect** to **Only from approved list**.

> [!NOTE]
> Notion also offers an older, open-source MCP server you run yourself, but Notion says it's no longer actively maintained. Use the hosted server unless you have a special reason.

:::checklist
- I connected one AI app to Notion MCP
- I asked it to search and summarize a page
- I know the assistant sees everything I can see
:::

# Notion on Desktop and Mobile

Notion runs in a web browser, as a desktop app for Mac and Windows, and as a mobile app for iPhone, iPad, and Android. Everything syncs between them.

:::summary In this chapter
- Why use the desktop app
- Tabs, windows, and Command Search
- Working offline
- The mobile app and widgets
- The Web Clipper
:::

## Which app to use

| App | Strengths |
|---|---|
| **Web** (notion.so in a browser) | Nothing to install; works anywhere |
| **Desktop** (Mac, Windows) | Tabs, notifications, offline pages, AI Meeting Notes that hear call audio, spell check |
| **Mobile** (iOS, Android) | Quick capture, widgets, offline pages, meeting notes in person |

Download them from notion.com/download.

## The desktop app

- **Tabs:** <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>T</kbd> opens a new tab; <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + click opens a link in a new tab. New tabs open search by default (change this in [[Settings > Preferences]]).
- **Windows:** <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> opens a new window.
- **Command Search:** search Notion or ask Notion AI from anywhere on your computer, with a keyboard shortcut or the menu bar (Mac) or taskbar (Windows). Adjust it in [[Settings > Preferences]].
- **Notifications:** desktop alerts for mentions, assignments, and reminders.
- **Spell check:** built in; right-click a word to switch it off or on.

## Working offline

:::steps Make a page available offline
1. **Open the page** in the desktop or mobile app.
2. **Click ••• and switch on Available offline.** A progress bar shows the download.
3. **Repeat on each device**: offline pages are stored per device.
:::

On Plus, Business, and Enterprise, your recent and favorite pages are downloaded automatically. See and remove offline pages in [[Settings > Offline]].

> [!NOTE]
> Offline, you can read and edit most blocks. Embeds, forms, buttons, sharing, and AI Meeting Notes need a connection. Offline isn't available in a web browser.

## The mobile app

- **Capture fast:** tap the new page button, or share a link or photo into Notion from other apps.
- **Columns** show one under the other on phones.
- **Widgets:** long-press your home screen, add a Notion widget, and choose a page, or the **AI widget** to jump straight into Notion AI by chat, camera, or voice.
- **Meeting notes** on mobile record through the phone's microphone, so they suit in-person meetings.

Forms and some advanced settings can only be created on desktop or web.

## The Web Clipper

The **Web Clipper** saves web pages into Notion, perfect for reading lists and research. It's a browser extension for Chrome and Safari (from notion.com/web-clipper).

:::steps Clip a page
1. **Install the extension** and log in to Notion in your browser.
2. **Click the Notion icon** next to the address bar on any web page.
3. **Choose the workspace and the page or database** to save it in, or click **+ New links database**.
4. **Click Save page.**
:::

:::checklist
- I installed the desktop or mobile app
- I made one important page available offline
- I added a widget or the Web Clipper
:::

# Plans and Pricing

Notion has four plans. You pay per **member** (someone in your workspace); guests are free. Most individuals never need more than the Free plan.

:::summary In this chapter
- The four plans and their prices
- What changes between plans
- Add-ons: Notion credits and custom domains
- Students, billing, and refunds
:::

## The plans

| Plan | Price per member | Good for |
|---|---|---|
| **Free** | $0 | Individuals: unlimited pages and blocks; limited file uploads and history; an AI trial |
| **Plus** | $10/month billed yearly ($12 monthly) | Small teams and power users: unlimited uploads, longer history, more guests |
| **Business** | $20/month billed yearly ($24 monthly) | Teams that want Notion AI and agents, SSO, and private teamspaces |
| **Enterprise** | Custom | Advanced security, admin controls, and AI data protections |

From notion.com/pricing, October 2026. Students and teachers can often get Plus free with a school email.

## What changes between plans

:::compact
| Feature | Free | Plus | Business | Enterprise |
|---|---|---|---|---|
| Pages and blocks | Unlimited alone; limited with 2+ members | Unlimited | Unlimited | Unlimited |
| File uploads | 5 MB per file | Unlimited | Unlimited | Unlimited |
| Page history | 7 days | 30 days | 90 days | Unlimited |
| Guests | 10 | More | More | More |
| Charts | 1 | Unlimited | Unlimited | Unlimited |
| Forms | Basic | Custom | + conditional logic | + conditional logic |
| Automations | Basic buttons | Database automations | Same | Same |
| `notion.site` domains | 1 | 5 | 5 | 5 |
| Notion AI | Trial | Trial | Included | Included |
| AI Meeting Notes, Enterprise Search | Trial | Trial | Yes | Yes |
| Private teamspaces, SAML SSO | No | No | Yes | Yes |
| Dashboard views, row-level permissions | No | No | Yes | Yes |
| SCIM, audit log, zero data retention for AI | No | No | No | Yes |
:::

## Add-ons

| Add-on | Price | Plans |
|---|---|---|
| **Notion credits** (Custom Agents, premium models, Workers) | $10 per 1,000 monthly, or $13 per 1,000 annual | Business, Enterprise |
| **Custom domain for Sites** | $10/month per domain, or $8/month billed yearly | Paid plans |

## Which plan should I choose?

- **Just me:** Free. Upgrade to Plus only if you need big file uploads or longer history.
- **Student or teacher:** Plus, free with a school email (one member).
- **Small team:** Plus.
- **Team that wants AI, meeting notes, and agents:** Business.
- **Large company with security needs:** Enterprise.

## Billing basics

- **Change plans** in [[Settings > Billing]]. Upgrades apply immediately (pro-rated); downgrades at the end of the billing period.
- **Adding members** mid-cycle creates a pro-rated charge. Removing one frees the seat for someone else until renewal.
- **Invoices** are under [[Settings > Billing]] › Invoices.
- **Refunds:** Notion refunds in full if you downgrade within three days of a monthly sign-up, or 30 days of a yearly one (longer where local law requires, such as 14 days in the EU).

> [!TIP]
> Not sure? Notion offers trials of paid plans. Try Business with your team for a couple of weeks before committing.

:::checklist
- I know which plan I'm on (Settings › Billing)
- I know whether I need AI features, and which plan includes them
- I know guests don't cost a seat
:::

# Keyboard Shortcuts Cheatsheet

On a Mac use <kbd>Cmd</kbd>; on Windows and Linux use <kbd>Ctrl</kbd>. Where Mac uses <kbd>Option</kbd>, Windows uses <kbd>Shift</kbd> (or <kbd>Alt</kbd>, as noted).

## Getting around

| Shortcut | Action |
|---|---|
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>P</kbd> or <kbd>K</kbd> | Search, or jump to a recent page |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>F</kbd> | Find on this page |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>N</kbd> | New page |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>T</kbd> | New tab (desktop) |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> | New window (desktop) |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>[</kbd> / <kbd>]</kbd> | Back / forward |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> | Go up to the parent page |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>L</kbd> | Copy the page link |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>\</kbd> | Show or hide the sidebar |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> | Toggle dark mode |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>+</kbd> / <kbd>-</kbd> | Zoom in / out |

## Writing and styling

| Shortcut | Action |
|---|---|
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>B</kbd> / <kbd>I</kbd> / <kbd>U</kbd> | Bold / italic / underline |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> | Strikethrough |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>E</kbd> | Inline code |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>K</kbd> (text selected) | Add a link |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd> | Comment |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>H</kbd> | Reapply last color |
| <kbd>Shift</kbd> + <kbd>Enter</kbd> | Line break inside a block |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | Indent / un-indent |

## Turn the current line into…

Press <kbd>Cmd</kbd> + <kbd>Option</kbd> (Mac) or <kbd>Ctrl</kbd> + <kbd>Shift</kbd> (Windows) plus a number:

:::cols
- <kbd>0</kbd> Text
- <kbd>1</kbd> Heading 1
- <kbd>2</kbd> Heading 2
- <kbd>3</kbd> Heading 3
- <kbd>4</kbd> To-do
- <kbd>5</kbd> Bullet
- <kbd>6</kbd> Numbered list
- <kbd>7</kbd> Toggle
- <kbd>8</kbd> Code
- <kbd>9</kbd> Page
:::

## Working with blocks

| Shortcut | Action |
|---|---|
| <kbd>Esc</kbd> | Select the current block (or clear selection) |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>A</kbd> | Select the block your cursor is in |
| <kbd>Shift</kbd> + <kbd>↑</kbd>/<kbd>↓</kbd> | Extend the selection |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>D</kbd> | Duplicate selected blocks |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>/</kbd> | Turn into, recolor, or move selected blocks |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + arrows | Move the selected block |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>Enter</kbd> | Open a page, tick a to-do, open a toggle |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>Option</kbd>/<kbd>Alt</kbd> + <kbd>T</kbd> | Expand or collapse all toggles |
| <kbd>Backspace</kbd> | Delete selected blocks |

## Typing tricks

:::cheatsheet
**Insert anything:** `/` · **Mention or date:** `@` · **Reminder:** `@remind` · **Link a page:** `[[` · **Create a page:** `+` · **Emoji:** `:` + name

**Markdown:** `#` `##` `###` headings · `-` bullet · `1.` number · `[]` to-do · `>` toggle · `"` quote · `---` divider · ```` ``` ```` code

**Inline:** `**bold**` · `*italic*` · `` `code` `` · `~strike~`
:::

# Tips and Troubleshooting

Most Notion problems have a simple cause: a filter, a permission, or a setting. Find your symptom below.

## Finding things

:::compact
| Problem | Try this |
|---|---|
| Can't find a page | <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>P</kbd> to search; check **Trash** in the sidebar (deleted pages are kept for 30 days) |
| A page vanished from the sidebar | It may be inside another page; search for it and check its breadcrumb |
| Search doesn't show a page | You may not have access, or it's set to Hide in search; ask the owner |
| Database items are "missing" | A view filter is hiding them; check **Filter** or switch views |
| New items appear in the middle | Large databases (1,000+ items) may sort new items oddly; add a sort |
:::

## Sharing and access

:::compact
| Problem | Try this |
|---|---|
| Someone can't open a shared link | Check **Share** settings; they may need an invitation, or general access widened |
| Can't invite a guest | Guest limit reached, guests disabled, or their email domain isn't allowed |
| Teammate sees a page they shouldn't | It inherits sharing from a parent or teamspace; move it to Private or change Share |
| Synced block looks empty to others | They can't access the page with the original block |
| Can't edit a database's properties | You have Can edit content, or the database is locked |
| Export option missing | An Enterprise owner disabled export, or a guest needs Full access |
:::

## Databases and formulas

:::compact
| Problem | Try this |
|---|---|
| Database feels cluttered | Create views with filters instead of deleting data |
| Timeline is empty | It needs a date property with a range (start and end) |
| Map is empty | Add a Place property and real addresses |
| Rollup shows nothing | Check the relation is filled in and the right property is chosen |
| Formula error | Check property names, wrap numbers in `format()`, guard empty values |
| Board won't group by a property | Boards group by Select, Status, Person, and similar types |
| Chart limit reached | Free has one chart; upgrade or delete an old chart |
:::

## Automations and connections

:::compact
| Problem | Try this |
|---|---|
| Automation can't find my page | Share the page with the connection (••• › More › Connections) |
| API returns 404 "object not found" | The database isn't shared with the connection, or the ID is wrong |
| API returns 400 validation error | Property names or types don't match the database |
| Database automation didn't run | It was triggered by another automation, or targets a Private page |
| Button does nothing | The target database is in Private or Shared; move it to a teamspace |
| Slack action unavailable | Needs Plus or above, and a connected Slack workspace |
| AI app can't see Notion | Reconnect Notion MCP and sign in again; check Enterprise allowlists |
:::

## Notion AI and agents

:::compact
| Problem | Try this |
|---|---|
| AI says it's unavailable | Your workspace may have hit its usage allowance; it refreshes within hours |
| A model is missing | An admin must enable premium models, or you hit your credit limit |
| Meeting notes didn't hear others | Use the desktop app for calls; the browser and phone only hear your mic |
| No summary after a meeting | At least one minute of audio is needed |
| Custom Agent did the wrong thing | Open its Activity log, then tighten its instructions and access |
| Custom Agent ignores a page | Add it under Tools and access; links in instructions don't grant access |
:::

## Apps, sync, and performance

:::compact
| Problem | Try this |
|---|---|
| Page is slow | Very large databases or embeds slow things down; split them or use filtered views |
| Want to work offline | Use the desktop or mobile app and mark key pages **Available offline** |
| Offline page isn't on my phone | Offline is per device; turn it on there too |
| App behaves strangely | Update it, log out and in, or reset the app's cache from its help menu |
| Can't log in | Check you're using the same sign-in method (email, Google, or Apple) as before |
| Exported ZIP won't open on Windows | Untick Create folders for subpages, or use 7-Zip |
| Site not on Google | Turn on search indexing and wait up to four weeks |
:::

> [!TIP]
> Still stuck? Click **?** at the bottom of the desktop app to message Notion support, check status.notion.so for outages, or ask Notion AI: "How do I…?"

# Keyboard Shortcuts and Slash Commands

Notion is much faster from the keyboard. On Windows and Linux, read <kbd>Cmd</kbd> as <kbd>Ctrl</kbd>. For block-type shortcuts, read <kbd>Option</kbd> as <kbd>Shift</kbd>.

:::summary In this chapter
- App-wide shortcuts
- Editing shortcuts
- Markdown-style typing shortcuts
- The `/` command menu
:::

## App-wide

Source: Notion Help Center, [notion.com/help/keyboard-shortcuts](https://www.notion.com/help/keyboard-shortcuts), checked October 2026.

:::compact
| Keys | Action |
|---|---|
| <kbd>Cmd</kbd> + <kbd>P</kbd> or <kbd>Cmd</kbd> + <kbd>K</kbd> | Open search or jump to a recent page |
| <kbd>Cmd</kbd> + <kbd>F</kbd> | Search inside the current page |
| <kbd>Cmd</kbd> + <kbd>N</kbd> | New page (desktop app) |
| <kbd>Cmd</kbd> + <kbd>T</kbd> | New Notion tab (desktop app) |
| <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>N</kbd> | New Notion window (desktop app) |
| <kbd>Cmd</kbd> + click | Open a link in a new Notion tab |
| <kbd>Cmd</kbd> + <kbd>[</kbd> / <kbd>]</kbd> | Back / forward |
| <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>U</kbd> | Go up one level in the page hierarchy |
| <kbd>Cmd</kbd> + <kbd>L</kbd> | Copy the page's link |
| <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> | Toggle dark / light mode |
| <kbd>Cmd</kbd> + <kbd>+</kbd> / <kbd>-</kbd> | Zoom in / out |
:::

## Editing

:::compact
| Keys | Action |
|---|---|
| <kbd>Shift</kbd> + <kbd>Enter</kbd> | Line break inside a block |
| <kbd>Esc</kbd> | Select the current block (or clear the selection) |
| <kbd>Cmd</kbd> + <kbd>A</kbd> | Select the block your cursor is in |
| <kbd>Cmd</kbd> + <kbd>D</kbd> | Duplicate selected blocks |
| <kbd>Cmd</kbd> + <kbd>Shift</kbd> + arrow keys | Move selected blocks |
| <kbd>Tab</kbd> / <kbd>Shift</kbd> + <kbd>Tab</kbd> | Indent (nest) / un-nest |
| <kbd>Cmd</kbd> + <kbd>/</kbd> | Change type, colour, or move selected blocks (also edits many database rows at once) |
| <kbd>Cmd</kbd> + <kbd>Enter</kbd> | Open a page, tick a to-do, open or close a toggle |
| <kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>T</kbd> | Expand or close all toggles |
| <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>H</kbd> | Apply the last text or highlight colour |
| <kbd>Cmd</kbd> + <kbd>B</kbd> / <kbd>I</kbd> / <kbd>U</kbd> | Bold / italic / underline |
| <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> | Strikethrough |
| <kbd>Cmd</kbd> + <kbd>E</kbd> | Inline code |
| <kbd>Cmd</kbd> + <kbd>K</kbd> (text selected) | Add a link |
| <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>M</kbd> | Comment |
| <kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>0</kbd>–<kbd>9</kbd> (Windows: <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>0</kbd>–<kbd>9</kbd>) | 0 text, 1–3 headings, 4 to-do, 5 bullets, 6 numbers, 7 toggle, 8 code, 9 page |
| <kbd>Option</kbd>/<kbd>Alt</kbd> + drag | Duplicate content by dragging |
:::

## Type-to-format (Markdown shortcuts)

Type these at the start of a line:

:::compact
| Type | You get |
|---|---|
| `#` + space | Heading 1 (`##` H2, `###` H3) |
| `-` or `*` + space | Bulleted list |
| `1.` + space | Numbered list |
| `[]` | To-do checkbox |
| `>` + space | Toggle list |
| `"` + space | Quote |
| `---` | Divider |
| ` ``` ` | Code block |
| `**text**`, `*text*`, `` `text` ``, `~text~` | Bold, italic, code, strikethrough (inline) |
| `@` | Mention a person, page, or date |
| `[[` | Link to (or create) a page |
| `+` | Create a new sub-page inline |
| `:` + a word | Emoji, e.g. `:rocket` |
:::

## The `/` menu

Type `/` anywhere and start typing to filter. Commands documented in the Help Center:

:::compact
| Command | Inserts |
|---|---|
| `/text`, `/page`, `/bullet`, `/num`, `/todo`, `/toggle` | Basic blocks |
| `/h1`, `/h2`, `/h3` (or `/#`, `/##`, `/###`) | Headings |
| `/div`, `/quote`, `/link` | Divider, quote, link to a page |
| `/mention`, `/date`, `/reminder`, `/equation`, `/emoji` | Inline items |
| `/image`, `/pdf`, `/book`, `/video`, `/audio`, `/file`, `/embed`, `/code` | Media |
| `/duplicate`, `/moveto`, `/delete` | Act on the current block |
| `/toc`, `/bread`, `/button`, `/template`, `/math` | Table of contents, breadcrumb, button, TeX |
| `/turn`, `/color` (e.g. `/blue`, `/blue background`, `/default`) | Change block type or colour |
:::

Database blocks (table, board, calendar, etc.) also appear when you type their names in the `/` menu.

# Formulas Reference

**Formula** properties calculate a value from other properties in the same database row. Notion's formula language (Formulas 2.0) is close to a spreadsheet's. Function names below were checked against Notion's formula syntax help page ([notion.com/help/formula-syntax](https://www.notion.com/help/formula-syntax)) in October 2026.

:::summary In this chapter
- How to write a formula
- The functions you'll actually use, by category
- Twelve ready-made formulas
:::

## Basics

Add a property, choose **Formula**, and click to edit. Refer to other properties by clicking them, or typing `prop("Name")`. Formulas can span several lines, and you can store intermediate values with `let`.

## Functions by category

:::compact
| Category | Functions | Example |
|---|---|---|
| Logic | `if`, `ifs`, `and`, `or`, `not`, `empty` | `if(prop("Done"), "✅", "⏳")` |
| Comparison | `==`, `!=`, `>`, `<`, `>=`, `<=` | `prop("Score") >= 80` |
| Math | `+ - * / %`, `round`, `floor`, `ceil`, `abs`, `min`, `max`, `sum`, `sqrt` | `round(prop("Price") * 1.07 * 100) / 100` |
| Text | `length`, `lower`, `upper`, `contains`, `test`, `replace`, `replaceAll`, `split`, `join`, `repeat`, `format`, `formatNumber`, `style`, `unstyle`, `link` | `upper(prop("Code"))` |
| Dates | `now`, `today`, `dateAdd`, `dateSubtract`, `dateBetween`, `dateStart`, `dateEnd`, `formatDate`, `parseDate`, `timestamp`, `week`, `month`, `year` | `dateBetween(prop("Due"), today(), "days")` |
| Lists | `at`, `first`, `last`, `slice`, `sort`, `reverse`, `unique`, `map`, `filter`, `find`, `some`, `every`, `includes` | `prop("Tasks").filter(current.prop("Done")).length()` |
| Variables | `let`, `lets` | `let(d, dateBetween(prop("Due"), today(), "days"), d + " days")` |
| Convert | `toNumber`, `format` | `toNumber(prop("Text number"))` |
:::

## Twelve ready-made formulas

```text title=Days until due
dateBetween(prop("Due"), today(), "days")
```

```text title=Overdue flag
if(and(not(prop("Done")), prop("Due") < today()), "🔴 Overdue", "")
```

```text title=Progress bar from a Rollup percentage (0–1)
let(p, round(prop("Progress") * 10), repeat("▓", p) + repeat("░", 10 - p))
```

```text title=Status emoji
ifs(prop("Status") == "Done", "✅", prop("Status") == "In progress", "🟡", "⚪")
```

```text title=Full name
prop("First") + " " + prop("Last")
```

```text title=Price with tax
round(prop("Price") * 1.07 * 100) / 100
```

```text title=Week number label
"Week " + format(week(prop("Date")))
```

```text title=Age in years
dateBetween(today(), prop("Birthday"), "years")
```

```text title=Count of completed related tasks
prop("Tasks").filter(current.prop("Done")).length()
```

```text title=Next review date (30 days after last)
dateAdd(prop("Last reviewed"), 30, "days")
```

```text title=Coloured priority
style(prop("Priority"), if(prop("Priority") == "High", "red", "gray"))
```

```text title=Word count of a text property
prop("Notes").split(" ").filter(current != "").length()
```

> [!TIP]
> If a formula shows an error, hover over the red underline. Usually it's a type mismatch, such as comparing text with a number. Use `toNumber()` or `format()` to convert. You can also ask Notion AI to "write a formula that…" if your plan includes AI.

# Ten Templates to Build Yourself

Building templates yourself teaches you more than duplicating them. Each recipe lists the properties and views to create.

:::compact
| Template | Database properties | Views |
|---|---|---|
| **Habit tracker** | Date (date), one checkbox per habit, Score (formula: count ticked) | Calendar; table this week |
| **Reading list** | Title, Author (text), Status (status), Rating (select ★–★★★★★), Finished (date), Notes | Board by Status; gallery with covers |
| **Personal CRM** | Name, Company, Email, Last contacted (date), Next follow-up (formula: +30 days), Tags | Table sorted by Next follow-up |
| **Content calendar** | Title, Channel (multi-select), Publish date, Status, Owner (person), Link (URL) | Calendar by Publish date; board by Status |
| **Meeting notes** | Title, Date, Attendees (person), Project (relation), Action items (to-dos in the page) | List sorted by date; filter "this week" |
| **Recipe book** | Name, Cuisine (select), Time (number, minutes), Ingredients (text), Rating | Gallery; filter Time ≤ 30 |
| **Job applications** | Company, Role, Stage (status), Applied (date), Contact, Salary range, Days since applied (formula) | Board by Stage |
| **Budget tracker** | Item, Amount (number, $), Category (select), Date, Type (Income/Expense) | Table grouped by Category with Sum; chart view if available |
| **Team wiki** | Page (title), Owner (person), Verified (checkbox), Last edited time | List; filter Verified = false |
| **Travel planner** | Place, Date, Booking ref, Cost, Type (Flight/Hotel/Activity), Map link | Timeline; table grouped by Type |
:::

:::steps Build any of them
1. **Create a full-page database.** Type `/database` and choose *Full page*.
2. **Add the properties** from the table above.
3. **Add the views.** Click **+** next to the view tabs.
4. **Make a page template.** Use the arrow next to **New** → **+ New template**, and add the headings and checklists every entry should have.
5. **Add five real entries** and adjust anything that feels awkward.
:::

# The Notion API for Beginners

The Notion API lets scripts and tools like n8n read and write your pages. Official docs: [developers.notion.com](https://developers.notion.com).

:::steps First API call
1. **Get a token.** Create an internal integration at [notion.so/profile/integrations](https://www.notion.so/profile/integrations) and copy its secret. Notion's Help Center also describes personal access tokens: turn on **Developer Mode** in Settings, then open the developer section of the sidebar. Use whichever your workspace offers.
2. **Share a page with it.** Open the page, then use **•••** → **Connections** → add your integration. The API can only see pages you share this way.
3. **Find the database ID.** It's the long ID in the database's URL.
4. **Query it.**
   ```bash
   curl -X POST https://api.notion.com/v1/databases/DATABASE_ID/query \
     -H "Authorization: Bearer $NOTION_TOKEN" \
     -H "Notion-Version: 2022-06-28" \
     -H "Content-Type: application/json"
   ```
:::

> [!NOTE]
> Notion versions its API with the `Notion-Version` header, and newer versions introduce changes such as data sources. Check the docs for the current version before you build anything long-lived.

> [!CAUTION]
> The integration secret gives access to everything shared with it. Keep it in an environment variable or a secret store, and share only the pages the integration needs.

# Database Deep Dive: Every Property, View, and Filter

Databases are where Notion gets powerful. This chapter is a reference you can return to every time you build one.

:::summary In this chapter
- Every property type and when to use it
- Relations and rollups, step by step
- Views, filters, sorts, and grouping
- Automations and buttons
:::

## Property types

:::compact
| Property | Holds | Use it for |
|---|---|---|
| **Title** | The page name (every database has one) | Task name, book title |
| **Text** | Free text | Notes, short descriptions |
| **Number** | Numbers with a format (%, $, bar, ring) | Prices, scores, progress |
| **Select** | One option from a list | Priority, category |
| **Multi-select** | Several options | Tags |
| **Status** | To-do / In progress / Complete groups | Workflow stages |
| **Date** | A date or date range, optional time and reminder | Due dates, events |
| **Person** | Workspace members | Owner, assignee |
| **Files & media** | Uploads or links | Attachments, covers |
| **Checkbox** | Yes/no | Done, verified |
| **URL / Email / Phone** | Clickable contact data | Links, contacts |
| **Formula** | A calculated value (Chapter 12) | Days left, labels |
| **Relation** | Links to rows in another database | Tasks ↔ Projects |
| **Rollup** | A summary of related rows | % of tasks done |
| **Created time / by, Last edited time / by** | Automatic metadata | Auditing |
| **Unique ID** | An auto-incrementing number with an optional prefix | Ticket numbers like `BUG-42` |
| **Button** | Runs actions when clicked | "Mark done and archive" |
:::

## Relations and rollups

:::steps Projects ↔ Tasks
1. **Make two databases:** *Projects* and *Tasks*.
2. **In Tasks, add a Relation property** pointing to Projects. Turn on **Show on Projects** so the link goes both ways.
3. **Link a few tasks to projects** by clicking the relation cell.
4. **In Projects, add a Rollup.** Choose Relation = Tasks, Property = Done (checkbox), and Calculate = **Percent checked**.
5. **Format it** as a bar or ring. Now each project shows its progress automatically.
:::

## Rollup calculations

:::compact
| Calculation | Result |
|---|---|
| Show original | The related values themselves |
| Count all / values / unique | How many related rows or values |
| Count empty / not empty | Gaps in the data |
| Percent empty / not empty / checked | Completion percentage |
| Sum, Average, Median, Min, Max, Range | Number summaries |
| Earliest / Latest date, Date range | Date summaries |
:::

## Views

| View | Best for |
|---|---|
| **Table** | Spreadsheet-style editing |
| **Board** | Kanban columns by Status or Select |
| **Calendar** | Anything with a date |
| **Timeline** | Projects with start and end dates |
| **List** | Clean, document-style lists |
| **Gallery** | Visual cards with cover images |
| **Chart** | Bar, line, and donut charts (on plans that include them) |
| **Form** | Collect entries from people (on plans that include forms) |

## Filters, sorts, and groups

:::compact
| Property type | Filter conditions you'll see |
|---|---|
| Text | is, is not, contains, does not contain, starts with, ends with, is empty, is not empty |
| Number | =, ≠, >, <, ≥, ≤, is empty, is not empty |
| Select / Status | is, is not, is empty, is not empty |
| Multi-select | contains, does not contain, is empty, is not empty |
| Date | is, is before, is after, is on or before, is on or after, is within (past week, next month…), is empty |
| Checkbox | is checked, is not checked |
| Person | contains, does not contain, *Me* |
:::

**Advanced filters** combine rules with *And*/*Or* groups. A classic "My open tasks" view is: Assignee *contains* Me **and** Status *is not* Done. Sort by Due ascending. Group by Project.

## Buttons and automations

A **button** (`/button`) can insert blocks, add or edit database pages, open a page, or send notifications. **Database automations** (the ⚡ icon on a database, on plans that include them) run actions when a property changes, for example "When Status is set to Done, set Completed date to today." Availability depends on your plan.

# Organise Your Whole Workspace

A tidy structure makes everything easier to find. This chapter gives you one proven layout to copy.

:::steps Set up a simple PARA workspace
1. **Create four top-level pages:** Projects, Areas, Resources, Archive.
2. **Projects:** one database of active projects, each with a goal and a deadline.
3. **Areas:** ongoing responsibilities with no end date, such as Health, Finances, and Home.
4. **Resources:** reference material, notes, and saved articles.
5. **Archive:** anything finished or inactive. Move pages here rather than deleting them.
6. **Create a Home dashboard** (Chapter 5) with linked views of "My open tasks" and "Active projects."
7. **Favourite the Home page** so it's always at the top of your sidebar.
:::

:::checklist
- Every database has an owner and a clear purpose
- Use linked views instead of copying databases
- Use templates for anything you create more than twice
- Do a weekly review: archive finished projects, clear your inbox page
- Use consistent icons and emoji for scanning
:::

# Troubleshooting and FAQ

:::compact
| Problem | Fix |
|---|---|
| Can't find a page | <kbd>Cmd</kbd> + <kbd>P</kbd> search. Check **Trash** at the bottom of the sidebar (pages stay there for 30 days by default) |
| A page disappeared after a teammate edited it | Open **•••** → **Version history** (history length depends on plan) |
| Someone can't see a page | Click **Share** and check their access level, and whether the parent page restricts it |
| Database is slow | Add filters to views, cut down on complex rollups and formulas, and split very large databases |
| Formula error | Hover over the red underline. Usually a type mismatch, so use `toNumber()` or `format()` |
| Relation doesn't show on the other side | Turn on **Show on [other database]** in the relation settings |
| Import from another app looks wrong | Try [[Settings > Import]] with a different format (CSV, Markdown, HTML) |
| Offline edits didn't sync | Reconnect and keep the app open. Check for a sync-conflict notice |
:::

**Is my data private?** Pages are private until you share them. Workspace admins on team plans may have additional access. Read Notion's current privacy and security pages for details.

**Can I export everything?** Yes. [[Settings > General > Export all workspace content]] (under *Workspace*) exports Markdown & CSV, HTML, or PDF (PDF depends on plan).

**Does Notion work offline?** The desktop and mobile apps can work with pages offline, but how much is available offline has changed over time and varies by plan. Check Notion's help centre for the current behaviour.

# Notion AI Prompt Cookbook

Prompts for Notion AI (Chapter 6), on plans that include it. Press <kbd>Space</kbd> on an empty line, or select text and choose **Ask AI**.

:::compact
| Goal | Prompt |
|---|---|
| Summarise a page | "Summarise this page in 5 bullets and list open questions." |
| Meeting notes → actions | "Extract action items with owner and due date as a to-do list." |
| Draft from outline | "Turn these bullets into a one-page project brief." |
| Rewrite | "Make this clearer and shorter. Keep my tone." |
| Translate | "Translate this page to Spanish, keeping formatting." |
| Brainstorm | "Give 15 ideas for [x], grouped by theme." |
| Database fill | Use an **AI autofill** property: "Summarise the page in one sentence" or "Extract the company name." |
| Search the workspace | "What did we decide about [topic] last month? Cite the pages." |
| Weekly update | "Write a weekly status update from the Done tasks in this database." |
| Template | "Create a reusable template for [weekly review] with headings and checklists." |
:::

> [!TIP]
> Ask Notion AI to **cite pages** when it answers from your workspace, then click the citations to check them.

# Moving to Notion From Other Apps

:::steps Import your old notes
1. **Open [[Settings > Import]]** (desktop or web; you can also type `/` on a page and search for the importer). Notion lists the supported sources, such as Evernote, Google Docs, Confluence, Trello, Asana, Word, Markdown, CSV, and HTML. The list varies over time.
2. **Start with one small notebook or folder** as a test.
3. **Check formatting, images, and links** on a few pages.
4. **Import the rest,** then move pages into your PARA structure (Chapter 16).
5. **Keep the old app read-only for a month** before deleting anything.
:::

| From | Tip |
|---|---|
| Google Docs | Imports as pages. Comments and suggestions may not come across |
| Evernote | Notebooks become pages. Tags may need re-creating as a multi-select |
| Trello / Asana | Boards become databases. Check that due dates and assignees mapped correctly |
| Spreadsheets | Import CSV as a database, then change property types (date, select, number) |
| Markdown folders | Zip the folder and import. Linked files may need re-linking |

# Project: A Simple CRM for Clients and Leads

A CRM (customer relationship manager) tracks who you know, where each deal stands and what to do next. This project builds one in about an hour with three linked databases. It works for freelancers, small businesses and job seekers, where the "deals" are applications.

:::summary
- **Databases:** Companies, Contacts and Deals, plus an optional Interactions log.
- **Key skills:** relations, rollups, formulas, board views, filtered linked views and templates.
- **Result:** a Pipeline board, a "follow up today" list, and a page for each company showing everything about it.
:::

## Step 1: Create the databases

Make a page called **CRM**. Inside it, type `/database` and choose a full-page or inline database. Make three of them:

| Database | Properties to add |
|---|---|
| **Companies** | Name (title), Website (URL), Industry (select), Size (select), Notes (text) |
| **Contacts** | Name (title), Email (email), Phone (phone), Role (text), Company (relation → Companies), Last contacted (date), Next follow-up (date) |
| **Deals** | Deal (title), Company (relation → Companies), Contact (relation → Contacts), Stage (status), Value (number, currency), Expected close (date), Owner (person) |

When you create each **relation**, switch on the option to show it on the other database too. Companies then automatically lists its Contacts and Deals.

## Step 2: Set up the pipeline stages

Edit the **Stage** status property in Deals. Status properties have three groups: To-do, In progress and Complete. Arrange your options like this:

| Group | Options |
|---|---|
| To-do | Lead |
| In progress | Contacted, Meeting, Proposal sent, Negotiating |
| Complete | Won, Lost |

## Step 3: Add rollups and formulas

| Where | Add | Settings |
|---|---|---|
| Companies | **Total deal value** (rollup) | Relation: Deals. Property: Value. Calculate: Sum |
| Companies | **Deal count** (rollup) | Relation: Deals. Calculate: Count all |
| Contacts | **Follow-up due** (formula) | `if(empty(prop("Next follow-up")), false, prop("Next follow-up") <= now())` |
| Deals | **Days to close** (formula) | `if(empty(prop("Expected close")), "", format(dateBetween(prop("Expected close"), now(), "days")) + " days")` |

> [!TIP]
> Formulas are case-sensitive about property names. If a formula shows an error, retype the property name using the property picker inside the formula editor.

## Step 4: Build the views

| View | Database | Type | Setup |
|---|---|---|---|
| **Pipeline** | Deals | Board | Group by Stage. Hide the Won and Lost columns, or move them to the end |
| **Closing this month** | Deals | Table | Filter: Expected close is within this month. Sort by Value, descending |
| **Follow up today** | Contacts | List | Filter: Follow-up due is checked. Sort by Next follow-up |
| **By company** | Contacts | Table | Group by Company |
| **Won** | Deals | Table | Filter: Stage is Won. Show a Value sum in the footer calculation |

## Step 5: Templates for speed

:::steps
1. In **Deals**, click the arrow next to **New** and create a template named "New deal". Pre-set Stage to **Lead**, and add a page body with these headings: *Context*, *Needs*, *Next step*, *Notes*.
2. In **Contacts**, create a "Met at event" template with a checklist: send thank-you, connect online, set a follow-up date.
3. Set each template as the default for its database, so every new item starts filled in.
:::

## Step 6: The daily routine (5 minutes)

1. Open **Follow up today** and contact each person. Update **Last contacted**, then set a new **Next follow-up**.
2. Open **Pipeline** and drag any cards that moved forward.
3. On Fridays, open **Closing this month** and update the expected dates honestly.

## Variations

| Use case | Change |
|---|---|
| Job search | Companies = employers, Deals = applications. Stages: Applied, Screen, Interview, Offer, Rejected |
| Fundraising | Deals = asks. Value = pledge amount. Stages: Prospect, Asked, Pledged, Received |
| Freelance | Add an **Invoices** database related to Deals with Amount, Sent and Paid date |

# Project: A Team Wiki People Actually Use

A wiki fails when nobody can find anything or nobody trusts it to be current. This structure fixes both problems.

## Structure

| Top-level page | What goes in it |
|---|---|
| **Start here** | What the team does, who's who, how to ask for help, and links to the 10 most used pages |
| **How we work** | Meetings, communication norms, tools and access |
| **Processes** | One page per repeatable process (onboarding, releases, expenses) |
| **Projects** | Linked view of the Projects database (see *Build a Project Tracker*) |
| **Decisions** | Database: Decision, Date, Owner, Status, Context, Link |
| **Reference** | Glossary, templates and brand assets |

## Build it

:::steps
1. Create a teamspace for the team (or one top-level page if you're on a personal plan) and add the six pages above.
2. On **Start here**, add `/toc` for a table of contents, and a callout (`/callout`) saying who maintains the wiki.
3. Make **Processes** a database instead of loose pages. Give it the properties Owner (person), Last reviewed (date), Status (select: Current, Needs review, Outdated) and Area (select).
4. Add a formula property **Stale** to Processes: `dateBetween(now(), prop("Last reviewed"), "days") > 90`
5. Create a view **Needs review**, filtered to Stale is checked or Status is Needs review, and sorted by Last reviewed.
6. Give each process page the same template: *Purpose*, *When to use*, *Steps*, *Owner*, *Related*.
7. Use **synced blocks** for text that appears on many pages, such as a support contact. Edit it once and it updates everywhere.
:::

## Keep it alive

:::checklist
- [ ] Every page has one named owner
- [ ] The owner reviews their pages when the **Needs review** view shows them, and updates **Last reviewed**
- [ ] New questions in chat are answered with a link to a wiki page. If none exists, someone writes one
- [ ] Outdated pages are moved to an **Archive** page rather than deleted, so their links still work
- [ ] Use Notion AI or search to find duplicates once a quarter, and merge them
:::

# Project: The Weekly Review System

A weekly review is 30 minutes on Friday or Sunday to close loops and plan the next week. This Notion setup makes it repeatable.

## Databases

| Database | Properties |
|---|---|
| **Tasks** (reuse yours) | Name, Status, Due (date), Priority (select), Area (select) |
| **Weekly reviews** | Week (title), Date (date), Wins (text), Energy (select: Low/OK/High), Focus next week (text) |

## The review template

In **Weekly reviews**, make a template with the sections below, and set it to **repeat weekly** on your review day so it appears automatically.

```text title=Weekly review template body
## 1. Clear (10 min)
- [ ] Empty email/chat inbox into Tasks
- [ ] Process notes and loose papers
- [ ] Clear downloads/desktop

## 2. Review (10 min)
<linked view: Tasks — Done this week>
<linked view: Tasks — Overdue>
- What went well?
- What didn't, and why?

## 3. Plan (10 min)
<linked view: Tasks — Due next 7 days>
- Top 3 outcomes for next week:
  1.
  2.
  3.
```

To add the linked views, type `/linked` inside the template and pick **Tasks**. Then set a filter on each one:

| Linked view | Filter |
|---|---|
| Done this week | Status is Done, and the last-edited date is within the past week (add a **Last edited time** property to Tasks first) |
| Overdue | Due is before today, and Status is not Done |
| Due next 7 days | Due is within the next week |

## Make it stick

- Block the time in your calendar as a recurring event.
- Keep the same order every week. The routine matters more than the tool.
- Every 4 weeks, read your last four reviews, and ask Notion AI: "What patterns do you see in my wins and problems across these reviews?"

# Automations, Buttons, and Reminders: Recipes

Notion can do small automations without outside tools. What's available depends on your plan. Some database automations need a paid plan, so check notion.com/pricing.

| Goal | Tool | Recipe |
|---|---|---|
| One-click new task with defaults | Button (`/button`) | Action: Add page to Tasks, with Status = To do, Due = today, and Assignee = the person who clicked |
| Mark several items done | Button on a database page | Action: Edit pages in Tasks, filtered to the current project, setting Status = Done |
| Remind me before a deadline | Date reminder | Click a date property value and set a reminder. Notion notifies you |
| Recurring checklist | Repeating template | Database template → set to repeat daily, weekly or monthly |
| Notify the team when a status changes | Database automation | Trigger: Status set to *Needs review*. Action: send a notification, or a Slack message if connected |
| Fill a date when done | Database automation | Trigger: Status set to *Done*. Action: set Completed = today |
| Anything across apps | Integrations | Use the Notion API, or n8n (see the n8n manual) |

> [!NOTE]
> Buttons and automations act with your permissions, so test them on a copy of the database first. An "edit pages" action can change many pages at once.

# Notion for Students

| Need | Setup |
|---|---|
| Course hub | A **Courses** database (Name, Term, Instructor, Schedule) with a page per course containing notes and a linked view of Assignments |
| Assignments | Name, Course (relation), Due, Status, Grade (number), Weight (number). Board grouped by Status, and calendar by Due |
| Grade calculator | In Courses, a rollup of Grade × Weight. Or add a formula in Assignments, `prop("Grade") * prop("Weight")`, then roll up the sum |
| Lecture notes | Use a template with headings *Key ideas*, *Questions* and *Summary*. Afterwards ask Notion AI: "Make 10 quiz questions from these notes" |
| Reading tracker | Title, Author, Course, Pages, Status, Key quote |
| Exam countdown | A formula: `format(dateBetween(prop("Exam date"), now(), "days")) + " days left"` |

> [!TIP]
> Notion offers education pricing for eligible students and teachers. Check notion.com/pricing for the current terms. Don't rely on any price you read in a manual, this one included.

# Quick Reference {.unnumbered}

:::cheatsheet
**Insert anything:** `/` · **Link a page:** `[[` · **Mention a person, page, or date:** `@` · **Ask AI:** <kbd>Space</kbd> on an empty line

**Formatting:** `#` heading · `-` bullet · `[]` to-do · `>` toggle · `---` divider

**Databases:** properties = fields · views = Table / Board / Calendar / Timeline / List / Gallery / Chart / Feed / Map / Form / Dashboard · filter, sort, group per view · relation + rollup to connect databases

**Formulas:** `prop("Name")` · `if()` / `ifs()` · `dateBetween(a, b, "days")` · `format()` · `.filter(current…)`

**Automation:** templates (repeatable) · `/button` · ⚡ database automations (paid)

**Share:** Share › invite or publish · sharing a parent shares its subpages · guests are free

**AI:** Notion Agent (chat) · `/meet` meeting notes · Enterprise Search on Home · Custom Agents with Notion credits

**AI connections:** Notion MCP `https://mcp.notion.com/mcp` · API: create a connection, then share pages with it · header `Notion-Version: 2026-03-11`
:::

# Glossary {.unnumbered}

:::glossary
Advanced filter
: A filter that combines rules with AND and OR, in nested groups.

AI Meeting Notes
: A Notion AI feature that transcribes a meeting and writes a summary with action items.

API
: Application programming interface: the way programs read and change Notion content.

API token
: A secret password a connection sends with every API request.

Backlink
: An automatic link back to a page from every page that mentions it.

Block
: Any single piece of content on a page, such as a paragraph, heading, image, or to-do.

Button
: A block that performs set actions, like adding a pre-filled task, when clicked.

Callout
: A boxed block with an icon, used for tips, warnings, and summaries.

Conditional color
: A view setting that colors items matching a rule, such as overdue tasks in red.

Connection
: A link between Notion and another app or script, which needs pages shared with it. Formerly called an integration.

CRM
: Customer relationship manager: a system for tracking contacts, companies, and conversations.

Custom Agent
: A Notion AI agent that runs on a schedule or trigger to do a recurring job.

Dashboard
: A page that collects important views and links in one place.

Dashboard view
: A Business and Enterprise view that arranges several database views as widgets.

Data source
: The collection of items and properties behind a database. A database can hold several.

Database
: A collection of pages that share the same properties, viewable in many layouts.

Database automation
: A rule that runs actions automatically when a database changes or on a schedule.

Database template
: A pre-made page layout and property values for new items in one database.

Dependency
: A link recording that one task is blocked by another.

Embed
: Live content from another app shown inside a page.

Endpoint
: A web address where the API answers a particular kind of request.

Enterprise Search
: Notion AI search across your workspace, connected apps, and the web, with citations.

Environment variable
: A named setting on your computer that programs can read, used to keep tokens out of code.

Filter
: A rule that shows only database items that match, such as Status is In progress.

Form
: A database view that collects answers from people as new items.

Formula
: A property that calculates its value from other properties.

Guest
: Someone outside your workspace who can only access pages shared with them. Guests don't use a paid seat.

Inbox
: The sidebar area that collects mentions, comments, updates, and reminders.

Inline database
: A database that sits inside another page, between other blocks.

JSON
: A text format for structured data, used by the Notion API.

Library
: The sidebar area for browsing and managing every page you can access.

Linked view
: A view of a database placed on a different page.

Markdown shortcut
: Typing symbols like `#` or `-` to format text instantly.

MCP
: Model Context Protocol, the standard that lets AI apps connect to Notion and other tools.

Member
: A person who belongs to a workspace and uses a paid seat on paid plans.

Notion Agent
: Notion AI's ability to carry out multi-step tasks in your workspace.

Notion Calendar
: Notion's free calendar app that shows your calendars and Notion databases together.

Notion credits
: A paid add-on that funds Custom Agents, premium models, and extra AI use.

Notion Sites
: Notion's feature for publishing pages as public websites.

OAuth
: A sign-in-and-approve process that lets one app access another without sharing your password.

Page
: A document in Notion that can contain blocks and other pages.

PARA
: A way to organize notes into Projects, Areas, Resources, and Archive.

Peek
: Opening a database item in a side or center panel without leaving the view.

Personal access token
: A token that lets a script act as you, with your own permissions.

Property
: A field on a database item, such as Date, Status, or Person.

Relation
: A property that links items in one database to items in another.

Rollup
: A property that summarizes related items, such as counting tasks or averaging values.

Skill
: A Notion page of reusable instructions that Notion AI can run.

Slug
: The part of a web address after the domain, such as `my-page` in `notion.site/my-page`.

Sort
: A view setting that orders items by a property.

Status
: A property type that groups options into To-do, In progress, and Complete.

Sub-item
: A smaller item nested under a parent item in the same database.

Synced block
: A block whose content appears and updates in several places at once.

Template
: A reusable starting layout for a page or database item.

Teamspace
: A shared area of a workspace for a specific team, with its own members.

Toggle
: A block that hides its contents until you click its arrow.

Version history
: A record of earlier versions of a page that you can restore.

View
: One way of displaying a database: table, board, calendar, timeline, and more.

Web Clipper
: A browser extension that saves web pages into Notion.

Webhook
: A message one app sends to a web address to tell another app something happened.

Workspace
: Your whole Notion environment, containing all your pages and members.
:::
