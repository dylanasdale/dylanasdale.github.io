---
title: Notion
subtitle: One workspace for notes, docs, projects, and databases, with AI built in
volume: 7
edition_label: Grok Edition
edition_note: "Concise edition, revised and fact-checked by Grok Bot in GrokAllManualsV1."
edition: October 2026
accent: "#C2711B"
accent2: "#2E8C74"
motif: pages
blurb: |
  Notion is a flexible workspace where you write notes and documents, manage projects and to-do lists, build simple databases, and share it all with others. Think of it as digital LEGO: a handful of simple pieces (pages, blocks, and databases) that snap together into almost anything, from a personal journal to a whole company wiki.

  This manual starts with the building blocks, teaches the database features that make Notion powerful, sets up a real project tracker and a personal dashboard, and covers Notion AI, agents, sharing, and connecting Notion to other AI tools.
---

# Welcome to Notion

:::summary In this chapter
- What Notion is good for
- Creating your account and workspace
- Finding your way around the screen
:::

## What people use Notion for

- **Notes and journals**: class notes, meeting notes, daily logs.
- **Documents and wikis**: how-to guides, company handbooks, recipes.
- **Task and project management**: to-do lists, Kanban boards, content calendars.
- **Databases**: reading lists, client lists (a simple CRM), inventories, habit trackers.
- **Websites**: publish any page to the web with Notion Sites.
- **AI help**: write, summarize, answer questions about your workspace, and automate busywork.

## Get started

:::steps Create your account
1. **Go to notion.com** and click **Get Notion free**, or download the desktop and mobile apps from notion.com/download.
2. **Sign up** with your email, Google, or Apple account.
3. **Choose how you'll use it**: for yourself, with a team, or for school. This just picks starter templates.
4. **Name your workspace.** A **workspace** is your whole Notion account space; you can create more later (for example, one personal, one for work).
:::

## The Notion screen

| Area | What it is |
|---|---|
| **Sidebar** (left) | Your pages in sections: **Teamspaces** (shared), **Private** (just you), and **Shared** (pages others shared with you); plus Search, Home, Inbox, and Settings |
| **Page** (center) | Whatever you're working on |
| **Top bar** | The page's location (its "breadcrumb"), **Share**, comments, updates, and the **•••** menu |
| **Notion AI** | The AI icon at the bottom right, or press <kbd>Space</kbd> on an empty line |

> [!TIP]
> Press <kbd>Cmd</kbd> + <kbd>P</kbd> (Mac) or <kbd>Ctrl</kbd> + <kbd>P</kbd> (Windows) to search everything. It's the fastest way to jump to any page.

# Pages and Blocks

Everything in Notion is made of **pages**, and every page is made of **blocks**.

## Blocks: the LEGO bricks

A **block** is any single piece of content: a paragraph, a heading, a to-do checkbox, an image, a table, an embedded video. Each block can be moved, turned into another type, or nested inside another.

- Hover over any block and drag the **⋮⋮** handle to move it.
- Click the handle to **Turn into** another type, change its color, or duplicate or delete it.
- Drag a block to the far right of another block to create **columns**.

## The slash command

Type `/` anywhere to insert any block:

| Type | To get |
|---|---|
| `/h1`, `/h2`, `/h3` | Headings |
| `/todo` | A to-do checkbox |
| `/bullet`, `/num` | Bulleted or numbered lists |
| `/toggle` | A collapsible section |
| `/callout` | A highlighted box with an icon |
| `/code` | A code block |
| `/table` | A simple table |
| `/database` | A full database (Chapter 4) |
| `/image`, `/video`, `/file` | Media and files |
| `/embed` | Embed a map, form, Figma file, and more |
| `/page` | A new page inside this one |
| `/button` | A button that runs actions when clicked |

## Markdown shortcuts

Type these at the start of a line for instant formatting:

| Type | Result |
|---|---|
| `#` then space | Heading 1 (`##` for H2, `###` for H3) |
| `-` or `*` then space | Bullet |
| `1.` then space | Numbered list |
| `[]` | To-do checkbox |
| `>` then space | Toggle |
| `"` then space | Quote |
| `---` | Divider line |
| ```` ``` ```` | Code block |
| `**text**` | **Bold** |
| `` `text` `` | Inline code |

## Pages inside pages

Any page can contain other pages, so you can organize everything like folders. Type `/page` to create a subpage, or `[[` and a name to link to an existing page (or create a new one). Type `@` to mention a person, a page, or a date such as `@tomorrow`; dates can carry reminders.

> [!TIP]
> Keep your sidebar tidy with a few top-level "home" pages, such as **Home**, **Projects**, **Notes**, **Areas**, and **Archive**, and put everything else inside them.

# Databases: Notion's Superpower

A **database** is a collection of pages that share the same set of **properties** (fields). Each item is a full page you can open and write in, *and* a row with data like a date, a status, or a person. The same database can be shown many different ways.

## Create a database

:::steps Your first database: a reading list
1. **Create a new page** called "Reading list".
2. **Type `/database`** and choose **Database – Inline** (or **Full page**).
3. **Rename the default columns.** "Name" holds the book title.
4. **Add properties.** Click **+** at the end of the header row. Add **Author** (Text), **Status** (Status: Not started / In progress / Done), **Rating** (Select: ★ to ★★★★★), and **Finished** (Date).
5. **Add a few books.** Click **New** or the empty row at the bottom.
6. **Open a book** by hovering over its name and clicking **Open**, and write your notes inside it. Every row is a page!
:::

## Property types

| Property | Holds | Example use |
|---|---|---|
| **Text** | Words | Author, notes |
| **Number** | Numbers, money, percentages | Price, hours |
| **Select** / **Multi-select** | One or several tags from a list | Genre, priority |
| **Status** | To-do / In progress / Complete groups | Task progress |
| **Date** | A date or range, with optional reminder | Due date |
| **Person** | Workspace members | Assignee |
| **Checkbox** | Yes or no | Paid? |
| **URL**, **Email**, **Phone** | Links and contacts | Website |
| **Files & media** | Uploaded files | Contract PDF |
| **Relation** | Links to items in another database | Tasks ↔ Projects |
| **Rollup** | Summarizes data through a relation | % of tasks done |
| **Formula** | Calculates from other properties | Days until due |
| **Created time**, **Last edited** | Automatic timestamps | Audit trail |

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
| **Chart** | Bar, line, or donut charts | Dashboards |
| **Form** | A fill-in form that creates items | Requests, sign-ups, surveys |
| **Map** | Pins from an address property | Places, travel plans |

Each view has its own **Filter** (show only some items), **Sort** (order them), and **Group** (split into sections). For example, make a "Currently reading" board view filtered to *Status is In progress*.

## Relations and rollups, simply

A **relation** connects two databases. Link a **Tasks** database to a **Projects** database and each task knows its project, and each project lists its tasks. A **rollup** then summarizes across that link, such as "count of tasks" or "percent of tasks done," shown right on the project.

## Formulas, simply

A **formula** property calculates a value. Two useful ones:

```text title=Days until due
dateBetween(prop("Due"), now(), "days")
```

```text title=Overdue flag
if(prop("Due") < now() and prop("Status") != "Done", "⚠️ Overdue", "")
```

> [!TIP]
> Don't know the formula? Ask Notion AI: "Write a formula that shows how many days are left until the Due date."

# Build a Project Tracker

Let's combine everything into a small but real system: projects with tasks.

:::steps Build Projects + Tasks
1. **Create a page** called "Work hub".
2. **Add a Projects database** (`/database`, full page). Properties: **Status** (Status), **Owner** (Person), **Deadline** (Date).
3. **Add a Tasks database** inside Work hub. Properties: **Status** (Status), **Assignee** (Person), **Due** (Date), **Priority** (Select: High, Medium, Low).
4. **Link them.** In Tasks, add a **Relation** property pointing to **Projects**, and switch on **Show on Projects** so both sides see the link.
5. **Add progress.** In Projects, add a **Rollup**: relation *Tasks*, property *Status*, calculate *Percent per group › Complete*. Show it as a bar.
6. **Create useful views of Tasks:** a **Board** grouped by Status, a **Calendar** by Due date, and a **My tasks** table filtered to *Assignee contains Me*.
7. **Add a template.** In Tasks, click the arrow next to **New**, choose **+ New template**, and add a checklist ("Definition of done") that every new task starts with.
:::

> [!NOTE]
> Prefer not to build from scratch? The **Templates** gallery (in the sidebar, or notion.com/templates) has thousands of ready-made systems: project trackers, CRMs, habit trackers, and more. Duplicate one, then customize it.

## Automate the busywork

- **Buttons** (`/button`): one click to add a pre-filled task, change several properties, or open a page.
- **Database automations** (paid plans): "when Status changes to Done, set Completed date to today and notify the owner in Slack." Find them under the ⚡ icon at the top right of a database.
- **Recurring templates:** make a template repeat, such as "Weekly review every Friday."

# A Personal Dashboard

A **dashboard** is a home page that pulls your important stuff into one view.

:::steps Make a "Home" dashboard
1. **Create a page called Home** and give it an icon and a cover image (hover near the title to add them).
2. **Add columns.** Type `/2` and choose **2 columns**, or drag blocks side by side.
3. **Left column:** add a **linked view** of your Tasks database (`/linked`), filtered to *Assignee is Me* and *Due is this week*, shown as a **List**.
4. **Right column:** a linked **Calendar** view, a callout with this week's focus, and a few quick links (`[[` to link pages).
5. **Add a Chart view** of tasks by status for a visual check-in.
6. **Pin it.** Right-click the page in the sidebar and choose **Add to Favorites**.
:::

A **linked view** shows a database that lives elsewhere, filtered and styled for this spot. Changes made there update the original.

# Notion AI and Agents

Notion AI is built into the workspace. It can write and edit, answer questions using your pages (and connected apps), take meeting notes, build databases, and carry out multi-step tasks as an **agent**.

## What's included

| Plan | AI features |
|---|---|
| **Free**, **Plus** | A limited trial of Notion AI features |
| **Business**, **Enterprise** | Notion Agent, AI Meeting Notes, Enterprise Search across connected apps, and the full set of AI writing tools |
| **Custom Agents** | Free to try, then paid with **Notion credits** (an add-on: $10 per 1,000 credits per month) |

## Ways to use Notion AI

- **On an empty line:** press <kbd>Space</kbd> and ask: "Draft a project kickoff agenda."
- **On selected text:** select it, then choose **Ask AI** to improve, shorten, translate, or change the tone.
- **In the AI panel** (AI icon at the bottom right): ask questions across your workspace. "What did we decide about the launch date?" It answers with links to the source pages.
- **AI Meeting Notes:** type `/meeting` to transcribe and summarize a meeting with action items.
- **AI in databases:** add AI-generated properties such as summaries, keywords, or translations that fill in automatically for every row.

## Notion Agent

The **Notion Agent** can take on multi-step jobs inside your workspace:

```prompt
Look through my meeting notes from the last two weeks, find every action
item assigned to me, and add each one to my Tasks database with a due
date and a link back to the meeting.
```

```prompt
Turn this brainstorm page into a Projects database with a row for each
idea, and fill in a one-sentence summary and an estimated effort.
```

## Custom Agents

**Custom Agents** run on their own: on a schedule or when something happens, such as a new database item or a message. They follow your plain-English instructions, use the sources and tools you allow (including Slack, Linear, and other apps via MCP), and log every run so you can review and undo changes. Typical uses: answering team questions, routing incoming requests, and writing weekly status updates.

> [!TIP]
> Give agents narrow, specific jobs and limited access ("only the Support database and the #help channel"). Review their logs for the first week before trusting them fully.

# Sharing and Collaboration

## Sharing a page

Click **Share** at the top right of any page:

- **Invite** people by email and choose their access: **Full access**, **Can edit**, **Can comment**, or **Can view**.
- **General access**: decide whether only invited people, everyone in your workspace, or anyone with the link can open it.
- **Publish** (the **Publish** tab in the Share menu): turn the page into a public website with **Notion Sites**, at a `notion.site` address or your own domain on paid plans.

Pages inherit sharing from their parent: share a parent page and everything inside it is shared too.

## Teamspaces

On team plans, **Teamspaces** organize work by group (Marketing, Engineering…), each with its own members and permissions.

## Working together

- **Comments:** select text and click **Comment**, or hover over a block and use its comment icon. Mention teammates with `@`.
- **Page history:** **•••** menu, then **Version history**, to see and restore earlier versions. The history length depends on your plan.
- **Notifications:** the **Inbox** in the sidebar collects mentions, comments, and reminders.

> [!WARNING]
> Before publishing a page to the web, check the subpages inside it. They're published too, unless you change their settings.

# Connect Notion to Other Tools

## Built-in connections

Notion connects with Slack, Google Drive, GitHub, Jira, Figma, and many more. Paste a link from those apps and choose **Paste as preview** for a live card. Manage connections under [[Settings > Connections]].

**Notion Mail** and **Notion Calendar** are free companion apps that link your inbox and calendar to your Notion pages.

## Connect AI tools with Notion MCP

Notion runs an official **MCP server**, so assistants like Claude, ChatGPT, Cursor, and Claude Code can search, read, create, and update your Notion pages and databases (see the *MCP* manual in this series):

- **Claude:** [[Settings > Connectors]], find **Notion**, click **Connect**, and approve.
- **Claude Code:** `claude mcp add --transport http notion https://mcp.notion.com/mcp`, then `/mcp` to sign in.
- **Cursor and others:** add a remote server with the URL `https://mcp.notion.com/mcp`.

You sign in with OAuth, and the AI can only see pages *you* can see. Workspace owners can review and restrict these connections in [[Settings > Connections]].

## Automation tools and the API

Zapier, Make, and n8n all have Notion integrations (for example, "add every new form response to a Notion database"; see the *n8n* manual). For these, or for your own scripts, create a **connection** (Notion's developer docs call it an *internal connection*, formerly an *integration*):

:::steps Create an API connection
1. **Open the developer portal** at notion.com/profile/integrations, or [[Settings > Connections > Develop or manage integrations]].
2. **Create a new connection** for your workspace and give it a name.
3. **Copy the API token** from its configuration page. Treat it like a password.
4. **Grant access to pages.** Either add pages in the connection's **Content access** tab, or open a page, click **•••**, then **Connections**, and add your connection.
5. **Paste the token** into n8n, Zapier, or your script's credentials.
:::

> [!NOTE]
> A new connection can't see *anything* until you share pages with it. Sharing a parent page also shares its subpages. If an automation says "object not found," this is almost always why.

# Plans and Pricing

| Plan | Price per member | Good for |
|---|---|---|
| **Free** | $0 | Individuals: unlimited pages and blocks; limited file uploads and history; an AI trial |
| **Plus** | $10/month billed yearly ($12 monthly) | Small teams and power users: unlimited uploads, longer history, more guests |
| **Business** | $20/month billed yearly ($24 monthly) | Teams that want Notion AI and agents, SSO, and private teamspaces |
| **Enterprise** | Custom | Advanced security, admin controls, and AI data protections |

From notion.com/pricing, October 2026. Students and teachers can often get Plus free with a school email.

# Tips and Troubleshooting

| Problem | Try this |
|---|---|
| Can't find a page | <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>P</kbd> to search; check **Trash** in the sidebar (deleted pages are kept for a while) |
| Database feels cluttered | Create views with filters instead of deleting data |
| Someone can't open a shared link | Check **Share** settings; they may need an invitation, or general access widened |
| Automation can't find my page | Share the page with the connection (••• › Connections) |
| Page is slow | Very large databases or embeds slow things down; split them or use filtered views |
| Want to work offline | Use the desktop or mobile app and mark key pages available offline |

## Keyboard shortcuts worth learning

| Shortcut (Mac / Windows) | Action |
|---|---|
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>N</kbd> | New page |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>P</kbd> | Search |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>K</kbd> | Add a link |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>L</kbd> | Toggle dark mode |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>\</kbd> | Show or hide the sidebar |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>D</kbd> | Duplicate the selected block |
| <kbd>Esc</kbd> | Select the current block |
| <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>/</kbd> | Turn the selected block into another type |

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

> [!TIP]
> You do not need to adopt every habit at once. Pick the two that would fix your biggest annoyance today, such as a messy sidebar or duplicated databases, and practice them for a couple of weeks. Add one more habit each month and your workspace stays tidy without a big cleanup weekend.

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

**Databases:** properties = fields · views = Table / Board / Calendar / Timeline / Gallery / Chart / Form · filter, sort, group per view · relation + rollup to connect databases

**Share:** Share › invite or publish · sharing a parent shares its subpages

**AI connections:** Notion MCP `https://mcp.notion.com/mcp` · API: create a connection, then share pages with it
:::

# Glossary {.unnumbered}

:::glossary
Block
: Any single piece of content on a page, such as a paragraph, heading, image, or to-do.

Button
: A block that performs set actions, like adding a pre-filled task, when clicked.

Connection
: A link between Notion and another app or script, which needs pages shared with it. Formerly called an integration.

Custom Agent
: A Notion AI agent that runs on a schedule or trigger to do a recurring job.

Dashboard
: A page that collects important views and links in one place.

Database
: A collection of pages that share the same properties, viewable in many layouts.

Filter
: A rule that shows only database items that match, such as Status is In progress.

Formula
: A property that calculates its value from other properties.

Linked view
: A view of a database placed on a different page.

Markdown shortcut
: Typing symbols like `#` or `-` to format text instantly.

MCP
: Model Context Protocol, the standard that lets AI apps connect to Notion and other tools.

Notion Agent
: Notion AI's ability to carry out multi-step tasks in your workspace.

Notion Sites
: Notion's feature for publishing pages as public websites.

Page
: A document in Notion that can contain blocks and other pages.

Property
: A field on a database item, such as Date, Status, or Person.

Relation
: A property that links items in one database to items in another.

Rollup
: A property that summarizes related items, such as counting tasks or averaging values.

Template
: A reusable starting layout for a page or database item.

Teamspace
: A shared area of a workspace for a specific team, with its own members.

View
: One way of displaying a database: table, board, calendar, timeline, and more.

Workspace
: Your whole Notion environment, containing all your pages and members.
:::
