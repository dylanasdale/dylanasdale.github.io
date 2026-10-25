---
title: Everyday AI Tools
subtitle: Chat assistants, prompting, research, writing, images, video, voice, phones, agents, privacy, and everyday recipes, explained for complete beginners
volume: 4
edition_label: Claude Edition
edition_note: "Expanded edition written by Claude (Anthropic's AI) in Claude Code and published in GuidesForEverything PR #4."
toc_compact: dense
edition: October 2026
accent: "#0B8A8A"
accent2: "#F2A93B"
motif: blocks
blurb: |
  Beyond coding, AI now helps with almost everything: writing, research, studying, planning trips, designing logos, making videos, transcribing meetings, analyzing spreadsheets, and running errands on the web. The hard part isn't access. It's knowing which tool to reach for, how to ask, and when not to trust the answer.

  This manual starts from zero. It explains how these tools work in plain English, tours every major assistant (ChatGPT, Claude, Gemini, Copilot, Perplexity, Grok, Meta AI and more) with their plans and key settings, teaches a prompting method that works everywhere, and gives you more than 40 copy-paste prompts. Later chapters cover each kind of task, from images and music to spreadsheets and email, plus your phone, agents, privacy, scams, choosing a plan, and a big troubleshooting table.
---

# How AI Assistants Work

You don't need to understand the math, but a simple mental model makes you dramatically better at using AI, and helps you spot when it's wrong.

:::summary In this chapter
- What a "large language model" is, in plain English
- How these models learn, and what they can and can't do
- Why AI sometimes makes things up, and how to catch it
- The words you'll see on every AI website
:::

## A very well-read prediction engine

Chat assistants like ChatGPT, Claude, and Gemini are powered by a **large language model** (LLM): a program trained on an enormous amount of text to predict what comes next. Ask it a question, and it produces the most helpful-sounding continuation, one small piece (a **token**) at a time.

Because it learned from so much writing, an LLM can explain, summarize, translate, brainstorm, write code, and reason through problems. Modern models can also take in images, audio, and files, which makes them **multimodal**.

### An analogy that helps

Imagine someone who has read most of a giant library, but who has no notes, no internet, and a slightly fuzzy memory. Ask them anything and they'll answer fluently and instantly. Most of the time they're right. But when they half-remember something, they don't say "I'm not sure." They fill the gap with something that *sounds* right. That is roughly what an LLM is like when it isn't connected to search or your files.

## How a model is made

You'll hear a few stages mentioned in the news. In plain English:

:::steps From raw text to helpful assistant
1. **Training.** The model reads a huge collection of text (books, websites, code, and other material) and learns patterns by predicting missing or next words billions of times. This is where its general knowledge comes from.
2. **Tuning.** People then show it examples of good answers and rate its replies. This teaches it to follow instructions, be polite, refuse harmful requests, and format answers helpfully.
3. **Tools.** Finally, the company connects the model to tools: web search, a calculator or code runner, image generation, your files, and apps. Tools let it look things up and act, instead of relying only on memory.
:::

Training is expensive and happens rarely, which is why each model has a **knowledge cutoff**: a date after which it learned nothing new. Anything more recent, it can only know by searching.

## What it's good at, and what it isn't

| Usually great at | Often weak at |
|---|---|
| Explaining, summarizing, rephrasing | Exact facts it hasn't looked up |
| First drafts of almost anything | Very recent events (without search) |
| Brainstorming and options | Precise counting and arithmetic in its head |
| Translating and changing tone | Knowing what it doesn't know |
| Reading your documents and images | Your personal situation, unless you explain it |
| Step-by-step reasoning (in thinking modes) | Judgment calls that need a professional |

> [!TIP]
> When a question needs math, ask the assistant to "use code to calculate this." Most assistants can run small programs, which are far more reliable than mental arithmetic.

## Why it sometimes makes things up

An LLM doesn't look facts up in a database; it generates text that *fits*. Usually that's right. Sometimes it confidently produces something false, such as a fake statistic, a wrong date, or a book that doesn't exist. This is called a **hallucination**.

> [!WARNING]
> Treat AI like a brilliant, fast intern: excellent for drafts and ideas, but **verify anything important**, especially numbers, quotes, legal, medical, and financial information. Prefer answers that cite sources you can click.

Two features reduce hallucinations a lot:

- **Web search:** the assistant searches the internet and cites what it found.
- **Your own files:** upload a document and ask questions about *it*; answers are then grounded in your material. Basing answers on real sources like this is called **grounding**.

### Common kinds of mistakes

| Mistake | What it looks like | How to catch it |
|---|---|---|
| **Invented sources** | A real-sounding article, case, or study that doesn't exist | Click every citation; search the exact title |
| **Wrong details** | Correct story, wrong date, price, or number | Check numbers against an official page |
| **Outdated facts** | Last year's prices, old product names | Ask it to search; check the date on sources |
| **Agreeing too much** | It flips its answer the moment you push back | Ask "what's the strongest case against this?" |
| **Overconfidence** | No hedging, even on guesses | Ask "how sure are you, and why?" |
| **Misreading you** | Answers a slightly different question | Restate what you need; give an example |

The tendency to tell you what you seem to want to hear has a name: **sycophancy**. Good assistants try to avoid it, but you'll get more honest answers if you ask neutral questions ("Is this a good plan?") rather than leading ones ("This is a great plan, right?").

### Bias

Models learn from human writing, so they can repeat human **bias**: stereotypes, one-sided views, or a tilt toward English-speaking and Western perspectives. When it matters (hiring, health, history, politics), ask for several perspectives and check who the sources are.

## Words you'll see everywhere

| Term | Meaning |
|---|---|
| **Model** | The specific AI "brain." Companies offer several, e.g. a fast one and a smarter one |
| **Prompt** | What you type to the AI |
| **Context window** | How much text the AI can consider at once, including your files and the conversation so far |
| **Knowledge cutoff** | The date the model's training data ends; it won't know about later events unless it searches |
| **Reasoning / thinking** | A mode where the model works through a problem step by step before answering: slower, but smarter |
| **Agent** | An AI that takes actions, such as browsing, clicking, or filling forms, not just answering |
| **Connector** | A link that lets an AI read or act in another app (Gmail, Drive, Notion…) |
| **Usage limit** | How much you can use an assistant in a period of time before you must wait or upgrade |

### Fast models, smart models

Most assistants let you pick between models, or pick for you automatically. A rough rule:

- **Fast or "light" models** are great for quick questions, rewording, and simple tasks.
- **Smart or "thinking" models** are better for planning, analysis, math, tricky writing, and anything with several steps. They take longer and use more of your plan's allowance.

If an answer feels shallow, switching to a thinking model is often the single biggest improvement you can make.

## Context: why long chats go wrong

Everything in the current conversation (your messages, its replies, and any files) has to fit in the context window. In very long chats, early details may get less attention, and a wrong assumption made early can echo through every later answer.

> [!TIP]
> One topic per chat. When a conversation gets long or confused, ask for "a summary of everything we've decided so far," then paste that summary into a fresh chat.

## A quick self-check before you trust an answer

:::checklist
- Does this answer depend on facts, numbers, or dates? If so, did it cite sources?
- Did I open at least one source and confirm it says what the AI claims?
- Is the information recent enough, or could it have changed since the cutoff?
- Would being wrong cost me money, health, a grade, or my reputation? If so, verify with an expert or official source.
- Did I ask a neutral question, or did I lead it to the answer I wanted?
:::
# Chat Assistants at a Glance

The general-purpose chat assistant is the Swiss Army knife of AI. Most people need one main assistant and maybe a second for comparison. This chapter is the overview; the next six chapters go deep on each one.

:::summary In this chapter
- The major assistants side by side, with US prices
- How to choose your first (or second) assistant
- A tour of the screen you'll see in every app
- The features worth learning first, and good custom instructions
:::

## The major assistants

| Assistant | Company | Strengths | Plans (US, Oct 2026) |
|---|---|---|---|
| **ChatGPT** | OpenAI | Most popular; strong all-rounder; images, voice, agents, huge app ecosystem | Free · Go $8 · Plus $20 · Pro from $100/mo |
| **Claude** | Anthropic | Excellent writing and reasoning; long documents; Docs, Slides, and Artifacts; hands-off tasks | Free · Pro $20 · Max $100 / $200/mo |
| **Gemini** | Google | Built into Gmail, Docs, Android, Chrome, and Search; strong video and image tools; big storage bundles | Free · AI Plus $4.99 · AI Pro $19.99 · Ultra from $99.99/mo |
| **Microsoft Copilot** | Microsoft | Built into Windows, Edge, Word, Excel, and Outlook | Free · included with Microsoft 365 plans from $9.99/mo |
| **Perplexity** | Perplexity | Answer engine: every answer cites web sources | Free · Pro $20 · Max $200/mo |
| **Grok** | xAI | Real-time X (Twitter) data; bundled with X and Cursor | Free · The X Subscription from $8/mo |
| **Meta AI** | Meta | Free in WhatsApp, Instagram, Messenger, and Meta's glasses | Free |
| **Vibe** (formerly Le Chat) | Mistral (France) | Fast; European company; chat plus coding | Free · Pro $14.99/mo |
| **DeepSeek** | DeepSeek (China) | Strong free reasoning models | Free |

> [!NOTE]
> Prices and model names change often. The free tiers are genuinely useful. Start free, and pay ($20/month is the usual first step) only when you hit limits or need a premium feature. The *Choosing a Plan* chapter walks through the decision.

## How to choose

- **Already live in Google (Gmail, Docs, Android)?** Gemini fits naturally.
- **Live in Microsoft Office at work or home?** Copilot is already there.
- **Want the best writing partner or work with long documents?** Try Claude.
- **Want the widest range of features in one app?** ChatGPT.
- **Want answers with sources for research?** Perplexity.
- **Want something free inside the apps you already chat in?** Meta AI.

Try the same real task in two assistants for a week. You'll quickly feel which one "gets" you.

> [!TIP]
> Many people end up with one paid assistant for daily work plus one or two free ones for a second opinion. Asking two different assistants the same important question is a cheap way to catch mistakes.

## A tour of the screen

Every assistant looks a little different, but the parts are the same.

| Part | Where it usually is | What it does |
|---|---|---|
| **Message box** | Bottom of the screen | Type your prompt; press <kbd>Enter</kbd> to send, <kbd>Shift</kbd> + <kbd>Enter</kbd> for a new line |
| **"+" or paperclip** | Left of the message box | Attach files and photos, or turn on tools such as search |
| **Model picker** | Top of the screen or in the message box | Switch between fast and smarter models |
| **Microphone / waveform** | Right of the message box | Dictate a message, or start a live voice conversation |
| **Sidebar** | Left edge (tap ☰ on phones) | Past chats, projects, search, and settings |
| **Profile menu** | Bottom-left or top-right | Settings, plan, privacy, sign out |
| **Response buttons** | Under each answer | Copy, retry, edit, read aloud, thumbs up or down |

Two buttons beginners often miss:

- **Edit your message.** Hover over (or long-press) your own message and choose edit. The assistant re-answers from that point, which is cleaner than adding corrections.
- **Retry / regenerate.** Asks for a fresh answer to the same prompt. Useful when the first one misses.

## Getting started

:::steps Set up an assistant the right way
1. **Create an account** on the website (chatgpt.com, claude.ai, gemini.google.com) and install the phone app.
2. **Change your privacy settings first.** The *Privacy and Safety* chapter has the exact toggles for every assistant.
3. **Add custom instructions.** Tell it about yourself and how you like answers, so you don't repeat it every chat (see below).
4. **Try voice mode** on your phone. It's the most natural way to brainstorm.
5. **Upload a real document** (a lease, a manual, a report) and ask questions about it.
6. **Make one project** for something ongoing, such as a house move, a class, or your small business, so related chats and files live together.
:::

## Features worth learning

| Feature | What it does | Where you'll find it |
|---|---|---|
| **Custom instructions / personalization** | Standing preferences applied to every chat | Settings, under Personalization or Profile |
| **Memory** | The assistant remembers facts about you across chats; you can view and delete them | Settings, under Personalization or Memory |
| **Projects** | A folder of chats plus shared files and instructions for one topic | Sidebar, **Projects** |
| **Custom assistants** | Reusable mini-assistants with their own instructions (GPTs in ChatGPT, Gems in Gemini) | Sidebar or Explore |
| **Canvas / Artifacts** | A side panel for editing documents and code, or seeing a live app or chart | Appears automatically, or ask for it |
| **Deep research** | The AI researches for several minutes across many sources and writes a cited report | Tools menu or mode picker |
| **Connectors / apps** | Read your Gmail, Calendar, Drive, Notion, and more | Settings, under Connectors or Apps |
| **Voice** | Speak and listen in real time; many apps can also see through your camera | Microphone or waveform icon |
| **Temporary / incognito chat** | A chat that isn't saved to history or used for memory | Usually a ghost or dashed-bubble icon near the top |

### Example custom instructions

```prompt
About me: I run a small bakery and I'm not technical.
How to answer: Be warm and concise. Use plain English, short
paragraphs, and bullet points. Give me a recommendation instead
of a list of options when you can. If you're unsure, say so.
```

Here's a second example for someone who wants a different style:

```prompt
About me: Retired teacher in Leeds, UK. I use British spelling
and metric units. I'm learning to use a computer for photos,
email, and family history research.
How to answer: Explain one step at a time and tell me exactly
which button to press. Check that I'm ready before moving on.
Never assume I know a technical word; define it in brackets.
```

> [!TIP]
> Revisit your custom instructions after a month. Add what annoyed you ("don't use so many headings") and remove what you never needed.

## Usage limits, in plain English

Every plan, free or paid, has a **usage limit**: a cap on how much you can do in a window of time. Long chats, big files, images, thinking models, and deep research all use up more of it. When you hit the limit, the app tells you when it resets (often a few hours) or offers an upgrade.

Ways to stretch any plan:

- Start a new chat for each new topic instead of continuing one huge conversation.
- Use the fast model for simple tasks; save the thinking model for hard ones.
- Upload only the pages of a document you need.
- Ask for shorter answers when you just need the gist.

:::checklist
- I've picked one main assistant and installed its phone app
- I've changed its training and memory settings to what I'm comfortable with
- I've written custom instructions
- I've tried voice mode, a file upload, and one project
- I know how to edit a message and retry an answer
:::
# ChatGPT in Depth

ChatGPT, made by OpenAI, is the assistant most people try first. It does a bit of everything: chat, images, voice, files, research, coding, and agents that act on the web.

:::summary In this chapter
- ChatGPT's plans and what each one adds
- The features that matter most, and where to find them
- Privacy and memory settings, step by step
- Five things to try in your first hour
:::

## Plans and prices

| Plan | Price (US) | Good for |
|---|---|---|
| **Free** | $0 | Trying it out; everyday questions with limits |
| **Go** | $8/month | Higher limits for images, file uploads, and data analysis; longer memory; projects |
| **Plus** | $20/month | Most individuals: more usage, thinking models, deep research, agent mode |
| **Pro** | From $100/month (tiers at $100, $200, and $500) | Heavy daily users who need the highest limits |
| **Business** | $25 per user/month, or $20 billed annually | Teams of 2 or more; your data isn't used for training by default |

> [!NOTE]
> Local prices differ outside the US, and OpenAI adjusts plans often. Check chatgpt.com/pricing before you subscribe. Go may show ads in some countries.

## Standout features

| Feature | What it does | Where to find it |
|---|---|---|
| **Thinking models** | Work through hard problems step by step before answering | Model picker at the top of the chat |
| **Search** | Looks things up on the web and cites sources | Turns on automatically, or choose it from the **+** menu |
| **Projects** | Group related chats with shared files and instructions | Sidebar, **Projects** |
| **Memory** | Remembers facts and preferences across chats | [[Settings > Personalization > Memory]] |
| **Custom GPTs** | Reusable assistants with their own instructions and files | Sidebar, **GPTs** |
| **Canvas** | Edit a document or code side by side with ChatGPT | Ask "open this in canvas" |
| **Images** | Create and edit pictures by describing them | Just ask, or choose **Create image** |
| **Voice** | Real-time spoken conversation; can use your camera | Waveform icon by the message box |
| **Deep research** | Multi-minute research across many sources, with a cited report | **+** menu or tools menu |
| **Agent mode** | ChatGPT uses its own browser to complete tasks | **+** menu (paid plans) |
| **Apps** | Connect Gmail, Google Drive, Calendar, and more | [[Settings > Apps]] (called *Plugins* in some versions) |
| **Codex** | OpenAI's coding agent, included with ChatGPT plans | chatgpt.com/codex |

### Projects: your filing cabinet

A **project** is a folder with a memory of its own. Put the chats, files, and instructions for one topic inside it, and every new chat in the project starts already knowing the background.

:::steps Create a project
1. **Click Projects in the sidebar,** then **New project.** Give it a clear name, such as "Kitchen renovation."
2. **Add files.** Upload quotes, floor plans, or notes. On Go and Plus you can add up to 25 files per project.
3. **Add instructions.** For example: "I'm comparing contractors. Always show costs in a table."
4. **Start chatting inside it.** New chats here can use the files and instructions automatically.
:::

### Custom GPTs

A **custom GPT** is a mini-assistant you set up once and reuse. Examples: a "Recipe Scaler" that always converts to metric, a "Cover Letter Coach" that knows your résumé, or a "Kids' Homework Helper" that gives hints, not answers. Browse other people's GPTs in the GPT store, or make your own with **Create** and describe what you want in plain English.

> [!CAUTION]
> Anyone can publish a GPT. Don't upload private files to a GPT you didn't make, and be wary of GPTs that ask you to sign in to other services.

### Agent mode

In **agent mode**, ChatGPT opens a virtual browser and works through a task: searching, clicking, filling forms, and building files. It asks before important steps like purchases or sending messages, and you can watch or take over at any time. Good first tasks: "Find three dentists near me who take my insurance and have evening hours," or "Compare these four laptops and make a spreadsheet." Agent mode is for paid plans and has a monthly allowance. See the *AI Agents and Browsers* chapter for safety tips.

### ChatGPT Atlas

**ChatGPT Atlas** is OpenAI's web browser with ChatGPT built in. It can summarize the page you're on, answer questions about it, and, in agent mode, carry out tasks in your tabs. Treat it like any agent: start with low-stakes tasks.

## Privacy and memory settings

:::steps Choose what ChatGPT keeps
1. **Open settings.** Click your profile picture, then **Settings**.
2. **Training.** Go to [[Settings > Data controls]] and switch off **Improve the model for everyone** if you don't want your chats used to train OpenAI's models. Your chats still appear in your history.
3. **Memory.** Go to [[Settings > Personalization > Memory]]. You may see **Reference saved memories** (facts it has saved) and **Reference chat history** (using past chats). Turn either off, or open the memory list to delete single items.
4. **Temporary chats.** For a sensitive one-off question, start a **Temporary Chat** from the top of a new chat. It stays out of your history, doesn't create or use memories, and isn't used for training. OpenAI may keep a copy for up to 30 days for safety.
:::

> [!IMPORTANT]
> Deleting a chat doesn't automatically delete a memory that came from it, and turning off memory doesn't delete your chats. To fully remove something, delete both the chat and the saved memory.

## Your first hour with ChatGPT

:::checklist
- Turn training and memory settings to what you're comfortable with
- Add custom instructions under [[Settings > Personalization]]
- Ask a question that needs current information and click a cited source
- Upload a PDF and ask for a five-bullet summary plus anything unusual
- Have a two-minute voice conversation on your phone
- Create one project for something ongoing in your life
:::
# Claude in Depth

Claude, made by Anthropic, is known for thoughtful writing, careful reasoning, and handling long documents. It has grown into a place to make finished work too: documents, slide decks, designs, and small apps, all from a conversation.

:::summary In this chapter
- Claude's plans and models
- Projects, Artifacts, Docs, Slides, and handing off bigger tasks
- Memory, incognito chats, and the training setting
- A first-hour checklist
:::

## Plans and prices

| Plan | Price (US) | Good for |
|---|---|---|
| **Free** | $0 | Chat, web search, memory, connectors, Artifacts, and up to 5 projects |
| **Pro** | $20/month, or $17/month billed annually ($200 up front) | Everyday work: more usage, Research, Claude Code, Claude in Chrome, more models |
| **Max** | $100/month (5x Pro usage) or $200/month (20x) | People who use Claude all day; priority access; monthly API credits |
| **Team** | $25 per seat/month, or $20 billed annually | Teams of 2 to 150, with admin controls |
| **Enterprise** | Contact sales | Large organizations needing security and compliance features |

### The models

Claude comes in a family of models. **Haiku** is the fastest and lightest, **Sonnet** is the balanced everyday model, and **Opus** is the most capable of the three for hard, long tasks. Paid plans can also use **Fable**, Anthropic's newest top model (on Pro it draws on extra usage credits). Pick a model from the menu in the message box; when in doubt, the default is a good choice.

> [!NOTE]
> Prices exclude tax and can change. Check claude.com/pricing for the current list.

## Standout features

| Feature | What it does | Plans |
|---|---|---|
| **Projects** | Chats, files, and instructions for one topic, with their own memory | Free (up to 5) and paid |
| **Artifacts** | Documents, code, charts, and small apps shown in a side panel | All |
| **Claude Docs, Slides, Design** | Write a document, build a deck, or mock up a design with Claude; edit, share, or download as PowerPoint or PDF | All |
| **Web search** | Looks things up and cites sources | All |
| **Research** | Runs a longer, multi-source investigation and writes a cited report | Paid |
| **Connectors** | Link Gmail, Google Calendar, Drive, Notion, and many more apps | All |
| **Skills** | Reusable know-how packages, such as making spreadsheets in a set style | All |
| **Files and code** | Creates and edits Excel, Word, PowerPoint, and PDF files by running code | All |
| **Voice mode** | Talk to Claude on your phone or computer | All |
| **Hand off and schedule tasks** | Give Claude a bigger job, let it work on its own, and set it to repeat | Paid |
| **Claude in Chrome** | An extension that lets Claude navigate and act in your browser | Paid |
| **Claude for Microsoft 365** | Use Claude inside Word, Excel, PowerPoint, and Outlook | Paid |

### One Claude for small and big jobs

Anthropic used to offer a separate desktop mode, called Cowork, for bigger tasks. It is being merged into the main Claude app, starting with Pro and Max. You can now ask a quick question or hand over a whole report in the same conversation, and Claude figures out what the task needs. By default it asks before taking actions; you can let it keep working and check in only when something needs a closer look. You can check progress from your phone.

```prompt
Before Friday, pull last week's sales emails from my inbox,
summarize what moved and what slipped, and draft a one-page
report plus five slides for Monday's meeting. Ask me if
anything is unclear.
```

### Projects and Artifacts

:::steps Build your first project
1. **Click Projects in the sidebar,** then **New project.** Name it, for example "Thesis" or "Bakery marketing."
2. **Add knowledge.** Upload documents, or connect files from Google Drive.
3. **Set project instructions.** For example: "I'm a first-year history student. Always cite page numbers from my uploaded sources."
4. **Chat inside the project.** Each project has its own memory, so what you discuss stays with that project.
:::

When you ask for something you'll reuse, such as a checklist, a budget calculator, or a chart, Claude often creates an **Artifact** in a side panel. You can edit it, download it, or publish it as a link. Ask "make this an interactive tool" to turn a table into a small app.

> [!TIP]
> Claude is especially good with long material. Upload a long contract or several reports at once and ask it to compare them, quoting the exact passages it relies on.

## Privacy and memory settings

:::steps Choose what Claude keeps
1. **Training.** Open [[Settings > Privacy]] and switch off **Help improve Claude** if you don't want your chats used to improve its models.
2. **Memory.** Open [[Settings > Memory]]. **Generate memory from chats** lets Claude save useful context as you go; **Search and reference chats** lets it look back through past conversations. Choose **Pause memory** to stop using it, or **Reset memory** to delete everything permanently.
3. **One chat without memory.** In a new chat, open the **+** menu and switch off **Memory**. Claude won't use or add to memory in that chat.
4. **Incognito chats.** Click the ghost icon for a conversation that isn't saved to your history and isn't used to improve Claude.
:::

> [!NOTE]
> If you rate an answer with thumbs up or down, Anthropic stores that whole conversation for up to 5 years for feedback, even if training is off. Skip the thumbs on anything private.

## Your first hour with Claude

:::checklist
- Set **Help improve Claude** and memory to what you're comfortable with
- Fill in your profile preferences so Claude knows how you like answers
- Upload a long document and ask for a summary with quoted evidence
- Ask for a one-page document or a short slide deck and edit it with Claude
- Connect one app you use daily, such as your calendar
- Create a project for an ongoing topic
:::
# Gemini in Depth

Gemini is Google's assistant. Its superpower is that it lives inside the Google products you may already use every day: Gmail, Docs, Drive, Android phones, Chrome, and Search. Google's paid AI plans also bundle a lot of cloud storage.

:::summary In this chapter
- Google's AI plans, including storage and extras
- Gems, Deep Research, Canvas, Gemini Live, and Personal Intelligence
- Gemini Notebook (formerly NotebookLM)
- The Keep Activity setting and what it really controls
:::

## Plans and prices

| Plan | Price (US) | What it adds | Storage |
|---|---|---|---|
| **Free** | $0 | Gemini app, image generation and editing, Deep Research, Gemini Live, Canvas, Gems | 15 GB |
| **Google AI Plus** | $4.99/month | 2x the free usage, video generation, Daily Brief, Gemini in Gmail and other apps | 400 GB |
| **Google AI Pro** | $19.99/month | 4x the free usage, the Pro model, Gemini in Gmail and Docs, Chrome auto browse, YouTube Premium Lite | 5 TB |
| **Google AI Ultra** | $99.99 or $199.99/month | 5x or 20x Pro's usage, first access to new features, YouTube Premium | From 20 TB |

The storage is shared across Gmail, Google Drive, and Google Photos, so if you already pay Google for storage, an AI plan may replace that bill.

> [!NOTE]
> Gemini's usage limits refresh every 5 hours until you reach a weekly limit, and you can buy extra **AI credits** if you run out. Check gemini.google/subscriptions for current details in your country.

## Standout features

| Feature | What it does |
|---|---|
| **Gemini Live** | Talk naturally, interrupt, and share your camera or screen so Gemini can see what you see |
| **Gems** | Custom assistants with saved instructions and files, like a "Meal Planner" or "Writing Coach" |
| **Deep Research** | Browses many websites for several minutes and writes a cited report you can export to Google Docs |
| **Canvas** | A side-by-side editor for documents, code, and small web apps |
| **Images** | Create and edit photos by describing changes (Google's image model is nicknamed *Nano Banana*) |
| **Video** | Make short clips with sound using Google's Veo models (paid plans) |
| **Personal Intelligence** | Lets Gemini use your connected Google apps, such as Gmail, Calendar, and Photos, for more personal answers |
| **Daily Brief** | A personalized morning summary (paid plans) |
| **Gemini in Chrome** | Ask about the page you're on; on paid plans, *auto browse* can complete tasks for you |
| **Flow** | Google's AI filmmaking studio for creating scenes and stories, using monthly Flow credits |

### Make a Gem

:::steps Create a reusable assistant
1. **Open Gemini** at gemini.google.com and find **Gems** in the sidebar (on some layouts under **Explore Gems**).
2. **Choose New Gem.** Give it a name, such as "Kids' Lunch Planner."
3. **Write instructions.** For example: "Suggest five school lunches for the week. No nuts. Under 15 minutes each. Include a shopping list."
4. **Add files if useful,** such as your family's favorite recipes.
5. **Save and chat.** Your Gem is waiting in the sidebar whenever you need it.
:::

### Deep Research, step by step

1. Choose **Deep Research** from the tools in the message box.
2. Describe your question with context: "Compare heat pumps vs. gas boilers for a 3-bedroom house in Chicago. Include running costs and incentives."
3. Gemini shows a research plan. Edit it if needed, then start.
4. After a few minutes you get a report with sources. Open it in Google Docs, or ask follow-up questions.

> [!TIP]
> Deep Research is available on the free plan, with lower limits. It's one of the best free AI features anywhere for big questions.

## Gemini Notebook (formerly NotebookLM)

In July 2026 Google renamed **NotebookLM** to **Gemini Notebook**. It's the same tool at a new address, notebook.google, and your old notebooks carried over. You upload your own sources (PDFs, Google Docs, websites, YouTube videos, audio) and it answers *only* from them, with citations to the exact passage. The *Research and Fact-Checking* chapter shows how to use it.

## Gemini in Gmail, Docs, and Android

- **Gmail and Docs:** on paid plans, a Gemini button or side panel helps you draft, summarize threads, and rewrite. See *AI in Email, Calendar, and Office Suites*.
- **Android:** on most recent Android phones, Gemini is the built-in assistant. Hold the power button or say "Hey Google." See *AI on Your Phone*.
- **Search:** Google Search's **AI Mode** gives conversational answers with links.

## Privacy: the Keep Activity setting

Gemini's main privacy control is called **Keep Activity**. When it's on (the default for adults), Google saves your Gemini chats to your account, and some may be read by human reviewers to improve Google's AI.

:::steps Turn off Keep Activity on a computer
1. **Go to gemini.google.com** and sign in.
2. **Click Settings & help,** then **Activity.**
3. **Near the top, click On,** then choose **Turn off** or **Turn off and delete activity.**
:::

You can also manage this at myactivity.google.com/product/gemini, or in the Gemini app's menu.

| Good to know | Detail |
|---|---|
| **Auto-delete** | By default, activity older than 18 months is deleted; you can choose 3 or 36 months instead |
| **With Keep Activity off** | Chats are still kept for up to 72 hours to run the service, but aren't used to improve Google's AI |
| **Temporary chats** | Not saved to your activity and not used to train Google's models |
| **Human review** | Chats a reviewer has seen are kept for up to three years, even if you delete your activity |
| **Gems** | Gems you create are saved even with Keep Activity off, but chats with them aren't |

> [!WARNING]
> Google's own advice: don't enter confidential information you wouldn't want a reviewer to see. For sensitive questions, use a temporary chat or turn Keep Activity off first.

:::checklist
- Decide on Keep Activity and the auto-delete period
- Try Gemini Live with your camera on something around the house
- Make one Gem for a repeating chore
- Run one Deep Research report on a decision you're facing
- Open Gemini Notebook and upload a document you need to understand
:::
# Microsoft Copilot in Depth

**Microsoft Copilot** is Microsoft's assistant. You can use it free at copilot.microsoft.com or in the Copilot app, and it's built into Windows, the Edge browser, and, with a Microsoft 365 subscription, Word, Excel, PowerPoint, Outlook, and OneNote.

:::summary In this chapter
- Free Copilot vs. Copilot in Microsoft 365 plans
- What Copilot does inside Word, Excel, PowerPoint, and Outlook
- Memory and training settings on every device
- Work accounts vs. personal accounts
:::

## Plans and prices

| Plan | Price (US) | Copilot features |
|---|---|---|
| **Copilot (free)** | $0 | Chat, voice, image creation, and help with your screen or camera, with standard limits |
| **Microsoft 365 Personal** | $9.99/month or $99.99/year | Copilot in Word, Excel, PowerPoint, Outlook, and OneNote; higher usage than free; 1 TB storage |
| **Microsoft 365 Family** | $12.99/month or $129.99/year | Same, for up to 6 people; Copilot features are for the subscription owner only |
| **Microsoft 365 Premium** | $19.99/month or $199.99/year | Extensive Copilot usage plus agent-style research and analysis features |

All three paid plans offer a one-month free trial. Paying yearly saves money.

> [!NOTE]
> At work or school you may have **Microsoft 365 Copilot**, a separate business product your organization pays for. It follows your employer's rules and security settings, and its controls are managed by IT, not by you.

## Where you'll meet Copilot

| Place | How to open it | Good for |
|---|---|---|
| **copilot.microsoft.com** | Any browser | General chat, research, images |
| **Copilot app** | Windows, Mac, iPhone, Android | Voice chats, quick questions, camera help |
| **Windows** | The Copilot key on newer keyboards, or the Copilot app from the Start menu | Help with what's on your screen |
| **Edge browser** | Copilot icon in the top-right corner | Summarize or ask about the current page |
| **Word, Excel, PowerPoint, Outlook** | Copilot button on the ribbon (with a Microsoft 365 plan) | Draft, rewrite, analyze, and summarize your own files |

## Copilot inside the Office apps

With a Microsoft 365 Personal, Family, or Premium plan, Copilot works directly in your documents.

| App | Try asking |
|---|---|
| **Word** | "Draft a one-page letter to my landlord about the broken heater, firm but polite." · "Summarize this document in five bullets." |
| **Excel** | "Which month had the highest spending?" · "Add a column that categorizes each expense." · "Make a chart of this." |
| **PowerPoint** | "Create a 6-slide presentation from this Word document." · "Add speaker notes to every slide." |
| **Outlook** | "Summarize this email thread." · "Draft a reply accepting the meeting and suggesting Thursday instead." |
| **OneNote** | "Turn these notes into a to-do list with deadlines." |

> [!TIP]
> Copilot in Word and PowerPoint can work from another file. Use its option to reference a file, and point it at a document you've saved in OneDrive, to turn notes into a draft or a report into slides.

## Personalization and memory

Copilot can remember things about you to personalize answers. To see what it knows, simply ask: *"What do you know about me?"* To add something, say *"Remember that I'm vegetarian."* To remove something, say *"Forget that I like science fiction."*

:::steps Turn memory off or on
1. **On copilot.com, Windows, or Mac:** select your profile icon, then your profile name, then [[Memory > Personalization and memory]].
2. **In the mobile app:** open the menu, select your profile icon, then [[Memory > Personalization and memory]].
3. **Switch it off** if you prefer. Copilot forgets what it had learned about you, but your past conversations stay in your history.
:::

## Training settings

Copilot has two separate switches for model training: one for typed conversations and one for voice.

:::steps Opt out of training
1. **On copilot.com:** select your profile icon, your profile name, then [[Privacy]].
2. **In Copilot for Windows or Mac:** select your profile icon, then [[Settings > Privacy]].
3. **In the mobile app:** open the menu, select your profile icon, then [[Account > Privacy]].
4. **Switch off both** **Training on conversation activity** and **Training on voice conversations.**
:::

Opting out applies to future conversations only. You can keep personalization on and still opt out of training. Microsoft keeps your conversation history for 18 months unless you delete it, and you can delete single chats or your whole history at any time.

> [!NOTE]
> Microsoft says Copilot doesn't train on conversations from people signed in with a work or school account, Microsoft 365 Personal and Family app users, signed-in users under 18, or signed-out users. Training is also off for users in some countries.

:::checklist
- Decide on the two training switches and the memory setting
- Ask Copilot "What do you know about me?"
- If you have Microsoft 365, try Copilot in one Word document and one Excel sheet
- Open Copilot in Edge on a long article and ask for the key points
- Keep work files in your work account, not a personal Copilot chat
:::
# Perplexity in Depth

**Perplexity** calls itself an **answer engine**: a search engine that writes you an answer instead of a list of links, with numbered citations for every claim. It's the tool to reach for when you care where the information came from.

:::summary In this chapter
- Perplexity's plans, including a student discount
- Search modes: quick answers, Pro Search, Research, and creating files and apps
- Spaces for ongoing topics, and the Comet browser
- How to turn off AI data retention
:::

## Plans and prices

| Plan | Price (US) | What you get |
|---|---|---|
| **Free** | $0 | Practically unlimited basic searches, a few Pro Searches, limited file uploads |
| **Pro** | $20/month | Much more Pro Search, a choice of advanced AI models, image and video generation, more uploads |
| **Education Pro** | $10/month for verified students and educators | Everything in Pro, plus Learn Mode and study-focused tips |
| **Max** | $200/month or $2,000/year | The highest limits, newest models first, and the most file and app creation |
| **Enterprise Pro** | From $40 per seat/month | Teams; your data isn't used for training |

## How to ask Perplexity

Perplexity has several ways to search, chosen from the menu in the search box:

| Mode | Best for | Speed |
|---|---|---|
| **Quick search** | Simple facts: "What time does the Louvre close on Fridays?" | Seconds |
| **Pro Search** | Questions with several parts; it searches more widely and shows its steps | Under a minute |
| **Research** | Big questions that need a long, cited report | A few minutes |
| **Create files and apps** | Turning research into a spreadsheet, dashboard, slide deck, or small web app | Several minutes |

You can also narrow where it looks, for example academic papers, social discussions, or finance data, from the source options in the search box.

### Reading an answer

Each sentence ends with small numbers like **[1]** or **[2]**. Hover over or tap a number to see the source. Under the answer you'll find the full source list and suggested follow-up questions.

> [!TIP]
> Before trusting an important answer, open the two most-cited sources. Check that each one really says what the summary claims, and look at the date. Perplexity is only as good as the pages it found.

### Example prompts

```prompt
What changed in US federal student loan repayment rules in the
past 12 months? Use official government sources where possible,
and give me a dated timeline.
```

```prompt
Compare the three best-reviewed cordless vacuums under $300 for
a home with pets. Make a table: price, battery life, weight,
bin size, common complaints. Cite reviews from the last year.
```

## Spaces: research folders

A **Space** groups your searches on one topic, with your own instructions and uploaded files. For example, a "Moving to Denver" Space could hold searches about neighborhoods, schools, and costs, plus your budget spreadsheet. Find Spaces in the sidebar and choose to create a new one.

## Comet: Perplexity's browser

**Comet** is Perplexity's free web browser with an AI assistant built in. It can summarize the page you're on, compare tabs, and carry out tasks such as filling in forms or finding a product across shops. Download it from perplexity.ai/comet. Treat it like any AI agent: start with low-stakes tasks and keep confirmations on (see *AI Agents and Browsers*).

## Privacy: AI data retention

By default, Perplexity may use your searches to improve its AI. To stop that:

:::steps Turn off AI data retention
1. **Open Settings** from your profile or account menu.
2. **Go to Preferences.**
3. **Switch off AI data retention.** This also covers the memory feature.
:::

The opt-out applies from that day forward; data collected earlier can't be removed from past training. Enterprise plans are excluded from training automatically.

> [!NOTE]
> Perplexity can also remember your preferences between searches. Turning off AI data retention stops your data from being used for that as well as for training.

:::checklist
- Turn off AI data retention if you prefer
- Ask a question about something that changed recently, then open two sources
- Try Pro Search on a comparison you care about
- Create a Space for an ongoing project
- If you're a student or teacher, check the Education Pro discount
:::
# Grok, Meta AI, and Other Assistants

Beyond the big four, several other assistants are worth knowing: some because they're free inside apps you already use, some for privacy, and some for their particular strengths.

:::summary In this chapter
- Grok and The X Subscription
- Meta AI inside WhatsApp, Instagram, and Messenger
- Mistral's Vibe, DeepSeek, and privacy-focused options
- Running AI on your own computer
:::

## Grok (xAI)

**Grok** is made by xAI and is closely tied to X (formerly Twitter). Use it at grok.com, in the Grok app, or inside the X app. Its distinctive feature is access to real-time posts on X, which helps with breaking news and "what are people saying about…" questions. It also creates images and short videos with **Grok Imagine**, and has a voice mode.

### Plans: The X Subscription

New customers choose from **The X Subscription**, which bundles Grok, the Cursor coding app, and X Premium benefits:

| Plan | Monthly | Yearly |
|---|---|---|
| **Free** | $0 | $0 |
| **Plus** | $8 | $80 |
| **Premium** | $30 | $300 |
| **Super** | $100 | $1,000 |
| **Ultra** | $200 | $2,000 |

Higher tiers give more usage, and Premium and above include **Grok Bot**, an AI teammate that can carry out tasks. Older SuperGrok and X Premium plans keep working if you already have one.

### Grok privacy settings

- **In the Grok app or grok.com:** open Settings, then **Data Controls** (on the web it may say **Data**), and switch off **Improve the model**.
- **In X:** open [[Settings > Privacy and safety > Data sharing and personalization > Grok & Third-party Collaborators]] and opt out.
- **Private Chat:** start a private chat for conversations you don't want used for training.

> [!CAUTION]
> Posts on X are a mix of news, opinion, and misinformation. When Grok summarizes "what people are saying," that isn't the same as what's true. Check important claims with reliable news sources.

> [!NOTE]
> Even if you opt out, giving a thumbs up or down on a Grok answer may allow that conversation to be used for training.

## Meta AI

**Meta AI** is free and built into WhatsApp, Instagram, Messenger, and Facebook, plus its own Meta AI app and Meta's smart glasses. Look for the blue-and-purple ring icon, or type **@Meta AI** in a chat. It answers questions, makes images, and can join group chats when you mention it. The Meta AI app also has **Vibes**, a feed of short AI-generated videos.

Good uses: quick questions without leaving WhatsApp, planning a group trip in a group chat, or making a fun image for a birthday message.

### What's private and what's public

| Item | Who can see it |
|---|---|
| **Your prompts and chats with Meta AI** | Only you (and Meta) |
| **Your Meta AI profile details** | Public |
| **Videos you post to Vibes** | Public, until you remove them |
| **A chat you share as a link** | Anyone with the link, until you delete it |

:::steps Delete your Meta AI chats
1. **Open the Meta AI app** and tap the menu.
2. **Go to Settings, then Data & privacy, then Manage your information.**
3. **Choose Delete all chats and media.** Your chats, prompts, and images disappear from your history.
:::

> [!WARNING]
> Anything you send to Meta AI, including messages in a group chat where you've invoked it, is processed by Meta. Don't share other people's private details in those chats.

## Vibe (Mistral, formerly Le Chat)

**Mistral** is a French AI company. Its assistant, long called **Le Chat**, was renamed **Vibe** in May 2026. It's still at chat.mistral.ai and your old chats carried over. Vibe has two modes: a general work assistant, and **Vibe Code** for programming.

| Plan | Price (US) |
|---|---|
| **Free** | $0: limited messages, web search, basic images, 100+ connectors |
| **Pro** | $14.99/month ($5.99 for verified students) |
| **Team** | $24.99 per user/month |

It's a good choice if you prefer a European provider or want a fast, capable free option.

## DeepSeek

**DeepSeek** is a Chinese company whose free app offers strong reasoning models. It's popular for math and logic problems. Its privacy policy says data is stored on servers in China, and many employers and some governments don't allow it on work devices. Avoid putting personal or work information into it.

## Privacy-focused options

:::compact
| Tool | What's different | Price |
|---|---|---|
| **Duck.ai** (DuckDuckGo) | Private AI chat that hides your identity from the AI providers; no account needed | {{Free}} |
| **Lumo** (Proton) | Privacy-first assistant from the makers of Proton Mail; chats are encrypted | {{Freemium}} |
| **Apple Intelligence** | Much processing happens on your device; see *AI on Your Phone* | {{Free}} |
:::

## Other names you'll hear

- **Qwen** (Alibaba) and **Kimi** (Moonshot AI): capable Chinese assistants, with the same data cautions as DeepSeek.
- **Poe** (Quora): one app that gives access to many different models.
- **Open-weight models**: models whose files are published so anyone can run them, such as Meta's Llama, Mistral's open models, and Qwen.

## Running AI on your own computer

You can run open-weight models on your own computer, with no internet needed after download. Apps such as **Ollama** {{Free}} make this fairly easy. These **local models** are less capable than the top cloud assistants and need a reasonably powerful computer, but nothing you type leaves your machine. It's a fun weekend project for the curious, and useful for very private material.

:::checklist
- I know which of these assistants I already have inside apps I use
- If I use Grok or Meta AI, I've checked their privacy settings
- I don't put personal or work data into assistants I haven't checked
- I've considered a privacy-focused option for sensitive questions
:::
# Prompting That Works Everywhere

The same habits get great results from every AI tool, whether it writes text, images, or code. You don't need special tricks or magic words. You need to explain what you want the way you would to a smart new colleague who knows nothing about your situation.

:::summary In this chapter
- The five ingredients of a strong prompt
- Before-and-after examples
- Follow-up phrases that fix almost any answer
- Common mistakes, and a reusable prompt template
:::

## The five ingredients

A strong prompt usually contains some of these:

1. **Role**: who the AI should act as. *"You're an experienced small-business accountant."*
2. **Context**: the situation and background. *"I'm a freelance designer in Ohio with irregular income."*
3. **Task**: exactly what you want. *"Draft a simple monthly budget."*
4. **Format**: how the answer should look. *"A table with categories, amounts, and notes. Under 200 words."*
5. **Examples or constraints**: what good looks like, and what to avoid. *"Assume $4,000 average monthly income. No jargon."*

```prompt
You're an experienced small-business accountant. I'm a freelance
designer in Ohio with irregular income (about $4,000/month on average).
Draft a simple monthly budget as a table with categories, amounts,
and notes, including a line for quarterly taxes. Under 200 words,
no jargon.
```

> [!TIP]
> Context is the ingredient beginners skip most, and it matters most. The AI can't see your life. Two extra sentences about your situation usually beat any clever wording.

## Before and after

| Vague prompt | Better prompt |
|---|---|
| "Write a birthday message." | "Write a warm, funny birthday message for my sister Ana, turning 40. She loves gardening and bad puns. Two sentences, for a card." |
| "Plan a trip to Italy." | "Plan 7 days in Italy for two adults in late May, flying into Rome. We like food and history, not nightlife. Moderate budget, trains only. Day-by-day table." |
| "Help with my résumé." | "Here's my résumé and a job ad. List the five most important gaps between them, then rewrite my summary section to fit this job. Don't invent experience." |
| "Explain inflation." | "Explain inflation to a 15-year-old using a pizza example, in under 150 words, then give one question to check they understood." |

## Habits of great prompters

- **Have a conversation.** The first answer is a draft. Say what to change: "shorter," "friendlier," "more specific to bakeries."
- **Ask it to ask you questions.** *"Before you write the plan, ask me up to five questions."*
- **Give examples.** Paste a past email you liked and say "in this style." Showing one or two examples of what you want is called **few-shot prompting**, and it works remarkably well.
- **Ask for options, then choose.** *"Give me five subject lines, ranked."*
- **Request reasoning for hard problems.** Turn on a thinking or reasoning mode, or say "think it through step by step."
- **Ask it to check itself.** *"Review your answer for errors and anything you're unsure about."*
- **Start fresh when it goes off track.** A new chat with a clear prompt beats ten corrections.

## Follow-up phrases that fix almost anything

| If the answer is… | Say |
|---|---|
| Too long | "Cut this to half the length. Keep only what matters most." |
| Too generic | "Make this specific to my situation: [details]." |
| Too formal or stiff | "Rewrite this the way a friendly person would say it out loud." |
| Missing something | "What did you leave out? Add the most important missing point." |
| Possibly wrong | "Which parts of this are you least sure about? Search and check them." |
| Hard to scan | "Turn this into a table" or "Use short bullet points." |
| Not quite right | "Give me three different versions so I can pick." |
| Good, but one part is off | "Keep everything except paragraph 2. Rewrite that to…" |

## Working with files and images

When you attach a document, photo, or screenshot, tell the AI what it is and what you want from it:

```prompt
This is a photo of a letter from my insurance company. Explain
in plain English what it's asking me to do, by when, and what
happens if I don't. Then list any phone numbers or reference
numbers in it.
```

- **Point to the part you mean.** "Look at the table on page 4."
- **Ask for quotes.** "Quote the exact sentences you're relying on." This makes it easy to check the answer and reduces made-up details.
- **Screenshots work.** Stuck on a confusing website or error message? Take a screenshot and ask, "What should I click next?"

## Common mistakes

| Mistake | Why it hurts | Fix |
|---|---|---|
| One-line prompts for complex tasks | The AI fills gaps with guesses | Add context, goal, and format |
| Asking several unrelated things at once | Each gets a shallow answer | One task per message, or number them |
| Accepting the first answer | First drafts are rarely the best | Iterate with follow-ups |
| Leading questions | You get agreement, not honesty | Ask neutrally; ask for counterarguments |
| Pasting private data you don't need to | Privacy risk | Remove names and numbers first |
| Arguing in a long, confused chat | Old mistakes keep echoing | Start a fresh chat with a summary |

## A reusable prompt template

Save this somewhere handy and fill in the brackets:

```prompt
You are [role/expert].
Context: [who I am, my situation, what I've tried].
Task: [exactly what I want].
Audience: [who will read or use this].
Format: [table / bullets / email / steps], about [length].
Constraints: [must include, must avoid, tone].
Before you start, ask me any questions you need answered.
```

### Starter prompts

#### Understand something

```prompt
Explain [topic] to me like I'm a smart 12-year-old. Then give me
a real-world example and three questions to test my understanding.
```

#### Decide something

```prompt
I'm deciding between [option A] and [option B] for [goal].
Compare them on cost, time, risk, and long-term value in a table,
then give me your recommendation and why.
```

#### Write something

```prompt
Draft a [type of message] to [who] about [topic]. Goal: [what you
want them to do]. Tone: [friendly/formal/firm]. Keep it under
[N] words. Give me two versions.
```

#### Learn from a document

```prompt
Here's a [contract/report/manual]. Summarize it in five bullets,
then list anything unusual, risky, or that I should ask about.
Quote the exact sections you're referring to.
```

> [!NOTE]
> Speaking works too. In voice mode, just talk as you would to a person: "I'm trying to figure out…" Rambling is fine; the AI will sort it out, and you can say "now summarize what I want in one sentence" to check it understood.

:::checklist
- My prompts include context about my situation
- I say what format and length I want
- I iterate instead of accepting the first draft
- I ask for sources or quotes when facts matter
- I've saved the reusable template somewhere I can find it
:::
# The Prompt Library

Here are more than 35 prompts you can copy, paste, and adapt. Replace anything in [square brackets] with your own details. They work in ChatGPT, Claude, Gemini, Copilot, and most other assistants.

:::summary In this chapter
- Prompts for home, money, work, writing, learning, travel, tech help, and creativity
- Careful prompts for health and legal questions
- Tips for turning a prompt you love into a one-click shortcut
:::

> [!TIP]
> The more detail you add in the brackets, the better the result. "My 9-year-old who loves dinosaurs" beats "my child."

## Home and everyday life

#### 1. Weekly meal plan

```prompt
Plan 5 weeknight dinners for [number] people. Constraints:
[allergies/diet], under [30] minutes, budget about [$80] total.
Reuse ingredients to cut waste. End with a shopping list grouped
by store section.
```

#### 2. Use up what's in the fridge

```prompt
I have [list ingredients]. Suggest three dinners I can make
tonight with these plus basic pantry items. Give the simplest
one full step-by-step instructions.
```

#### 3. Declutter plan

```prompt
Make me a 4-week decluttering plan for a [2-bedroom apartment],
15 minutes a day. One small area per day, with a rule for
deciding what to keep, donate, or toss.
```

#### 4. Fix something at home

```prompt
[Describe the problem, e.g. "My kitchen tap drips even when
closed."] I'm a beginner with basic tools. Explain the likely
causes, what I can safely fix myself step by step, and when I
should call a professional.
```

#### 5. Chore chart for a family

```prompt
Create a fair weekly chore chart for [2 adults and kids aged 8
and 12]. Age-appropriate tasks, about [20] minutes a day each,
as a table by day. Add a simple reward idea for the kids.
```

## Money

#### 6. Understand a bill or statement

```prompt
Here is my [phone/energy/medical] bill. Explain each charge in
plain English, flag anything that looks unusual or worth
questioning, and draft a short, polite message to ask about it.
```

#### 7. Simple budget

```prompt
My take-home pay is [$X] a month. Fixed costs: [list]. Help me
build a simple budget using the 50/30/20 idea, adjusted to my
numbers, and suggest three realistic places to save.
```

#### 8. Compare two big purchases

```prompt
I'm choosing between [option A] and [option B]. Compare total
cost over [5] years, including running costs, resale value, and
risks, in a table. Ask me any questions you need first.
```

#### 9. Negotiation script

```prompt
I want to ask [my internet provider] for a lower price. I've
been a customer for [3] years and pay [$X]. Write a short phone
script, including what to say if they refuse at first.
```

## Work

#### 10. Meeting notes to actions

```prompt
Here are my rough notes from a meeting. Turn them into: a
3-sentence summary, a list of decisions, and an action table
with owner, task, and deadline. Flag anything unclear.
```

#### 11. Prepare for a hard conversation

```prompt
I need to tell [my manager] that [I can't meet the deadline].
Help me plan the conversation: an opening line, the key points,
two likely reactions, and how I'd respond to each.
```

#### 12. Plan a project

```prompt
I'm organizing [a team offsite for 20 people in 6 weeks]. Make a
week-by-week plan with tasks, owners (use roles), and risks.
Keep it to one page.
```

#### 13. Explain a spreadsheet

```prompt
Here's a spreadsheet [attach]. Tell me in plain English what it
shows, the three most important patterns, and anything that
looks like an error or outlier.
```

#### 14. Turn expertise into a how-to

```prompt
Interview me, one question at a time, about how I do [my
monthly payroll process]. When you have enough, write it up as
a clear step-by-step guide a new colleague could follow.
```

#### 15. Rewrite for a busy reader

```prompt
Rewrite this update for a busy executive: lead with the
decision I need, then three bullets of context, under 120
words. [paste text]
```

## Writing and communication

#### 16. Polite but firm email

```prompt
Write a polite but firm email to [a contractor] who is [two
weeks late]. Remind them of [the agreed date], ask for a new
firm date by [Friday], and mention [next steps if not].
Under 150 words.
```

#### 17. Say no gracefully

```prompt
Help me decline [an invitation to join a committee] without
burning the bridge. Warm, brief, and no made-up excuses.
Give me two versions: one for email and one for text.
```

#### 18. Edit without changing my voice

```prompt
Edit this for clarity, grammar, and flow, but keep my voice and
word choices where possible. Show the edited version, then list
the five most important changes you made and why.
```

#### 19. Thank-you note

```prompt
Write a heartfelt thank-you note to [my neighbor] who [watered
my plants for two weeks]. Mention [a specific detail]. Short
enough for a small card.
```

#### 20. Social media post

```prompt
Write three versions of a post announcing [our bakery's new
Sunday hours] for [Instagram]. Friendly, under 50 words, with
one clear call to action. Suggest an image idea for each.
```

## Learning

#### 21. Learn anything in 30 days

```prompt
Create a 30-day plan to learn [basic Spanish for travel],
[20] minutes a day. Each day: one goal, one activity, and a
2-minute self-test. I learn best by [listening/doing].
```

#### 22. Quiz me

```prompt
Quiz me on [topic or pasted notes], one question at a time.
Wait for my answer, tell me if I'm right, explain briefly, and
make the next question harder or easier depending on how I did.
```

#### 23. Explain my mistake

```prompt
Here's a [math problem] and my answer. Don't just give the
right answer. Show me where my thinking went wrong and give me
a similar problem to try.
```

#### 24. Summarize a book or article

```prompt
Summarize [this article/chapter] in five bullets, then give me
the three ideas most worth remembering and one question it
leaves unanswered.
```

## Travel and events

#### 25. Trip itinerary

```prompt
Plan [4] days in [Lisbon] for [a couple in their 60s] in
[October]. We like [food, gardens, history] and walk about
[8 km] a day. Day-by-day table with a rainy-day backup each day.
```

#### 26. Packing list

```prompt
Make a packing list for [5 days in Scotland in April] with
[hiking and one nice dinner]. Carry-on only. Group by category
and mark the items people most often forget.
```

#### 27. Party planner

```prompt
Plan a [7-year-old's] birthday party for [12 kids] at home,
[2 hours], budget [$150]. Include a timeline, three games,
simple food, and a shopping list.
```

## Tech help

#### 28. Explain an error

```prompt
I got this error message on my [Windows laptop/iPhone]:
"[paste message]". Explain what it means in plain English and
give me the safest steps to fix it, one at a time.
```

#### 29. Choose a gadget

```prompt
Help me choose [a laptop] for [email, photos, and video calls].
Budget [$700]. Ask me up to five questions first, then
recommend three options with pros and cons. Search for current
prices.
```

#### 30. Set up something new

```prompt
I just bought [a smart thermostat, model X]. Walk me through
setup one step at a time. Wait for me to say "done" before
giving the next step.
```

## Creativity and fun

#### 31. Bedtime story

```prompt
Write a 5-minute bedtime story for [my 6-year-old, Leo] about
[a shy dragon who learns to swim]. Gentle, funny, and ending
with everyone feeling safe and sleepy.
```

#### 32. Gift ideas

```prompt
Suggest 10 gift ideas for [my dad, 70, loves birdwatching and
jazz], budget [$50]. Mix practical and thoughtful, and include
two experiences rather than objects.
```

#### 33. Brainstorm names

```prompt
Brainstorm 20 names for [a dog-walking business in Austin].
Short, friendly, easy to spell. Group them by style, then pick
your top three and explain why.
```

## Health and legal questions (with care)

AI can help you understand and prepare, but it can't examine you, know your full history, or give legal advice for your situation. Use these to get ready for a conversation with a professional.

#### 34. Prepare for a doctor's appointment

```prompt
I have an appointment about [ongoing knee pain]. Help me
prepare: a short timeline of my symptoms from my notes below,
questions to ask, and what information the doctor will likely
want. Don't diagnose me. [notes]
```

#### 35. Understand a medical term or result

```prompt
My report says "[term or result]". Explain in plain English
what this term generally means and what questions I should ask
my doctor about it. Remind me what you can't know.
```

#### 36. Understand a contract or legal letter

```prompt
Explain this [lease clause/letter] in plain English. What does
it require me to do, what are the deadlines, and what should I
ask a lawyer or tenant advice service about? Quote the parts you
mean.
```

> [!WARNING]
> In an emergency, call your local emergency number. Never change medication, skip treatment, or ignore a legal deadline because of something an AI said. See *Everyday Recipes* for more on using AI safely for health questions.

## Bonus: prompts about prompts

#### 37. Improve my prompt

```prompt
Here's a prompt I want to use: "[your prompt]". Ask me questions
to fill in what's missing, then rewrite it to get the best
possible result.
```

#### 38. Teach me to ask better

```prompt
Look at the questions I've asked you in this chat. What could I
have included to get better answers faster? Be specific.
```

## Make your favorites one click away

- **Save them as a custom assistant:** a GPT in ChatGPT, a Gem in Gemini, or a project with instructions in Claude.
- **Use your phone's text replacement:** on iPhone, [[Settings > General > Keyboard > Text Replacement]] lets a short code like "mealplan" expand into a full prompt.
- **Keep a prompt note** in your notes app, with your best versions at the top.

:::checklist
- I've tried at least five prompts from this library
- I've adapted one to my own life and saved it
- I've turned one favorite into a custom assistant or shortcut
:::
# Research and Fact-Checking

AI can read faster than any person, which makes it a superb research assistant. But it can also be confidently wrong, so good research with AI is half asking and half checking. This chapter teaches both.

:::summary In this chapter
- Answer engines, AI Mode, and deep research tools compared
- Gemini Notebook: an AI that only reads your sources
- A simple four-step method for checking any claim
- Research prompts you can reuse
:::

## Answer engines and deep research

For questions where facts matter, use tools that **search and cite**:

- **Perplexity**: every answer comes with numbered sources. Pro adds deeper multi-step research.
- **Deep research modes** in ChatGPT, Claude, and Gemini spend several minutes reading dozens of sources and produce a long, cited report. They're ideal for market research, comparing products, or learning a new field.
- **Google Search's AI Mode**: conversational answers inside Google Search, with links to dig deeper.

> [!TIP]
> Always click through to two or three of the cited sources. Check that they really say what the AI claims, and that they're reputable and recent.

### Which research tool when?

| Your question | Reach for | Why |
|---|---|---|
| A quick fact with a source | Perplexity, or any assistant with search on | Fast, cited |
| "Compare the options for…" | Deep research (ChatGPT, Gemini, Claude, Perplexity) | Reads widely, writes a structured report |
| Questions about *your* documents | Gemini Notebook, or a project in your assistant | Answers only from your files |
| Breaking news or public reaction | Perplexity or Grok, then a reliable news site | Up-to-the-minute, but needs checking |
| Academic papers | Perplexity with academic sources, or a scholarly tool | Finds real, citable studies |

> [!NOTE]
> Gemini's Deep Research works on the free plan with limits; Claude's **Research** feature needs a paid plan. ChatGPT and Perplexity offer some deep research on free plans and much more on paid ones. Limits change often.

### Getting a great deep research report

:::steps Run a deep research job
1. **Write a clear brief.** Say what you want to know, why, and for whom. Mention places, dates, and budget if relevant.
2. **Say what sources you trust.** "Prefer government sites, peer-reviewed studies, and established news outlets. Avoid forums."
3. **Ask for a format.** "Start with a one-paragraph answer, then a comparison table, then details with citations."
4. **Review the plan.** Many tools show a research plan first; edit it before you start.
5. **Read the report critically.** Check the key numbers against the original sources before you rely on them.
:::

```prompt
Research the pros and cons of solar panels for a 1970s house in
Manchester, UK, with a south-facing roof. Include typical costs,
payback time, available grants, and common problems. Prefer
government and consumer-group sources from the last two years.
Start with a summary, then a table, then cited details.
```

## Gemini Notebook: an AI that only reads your sources

**Gemini Notebook** (formerly called NotebookLM; at notebook.google, free with a Google account) lets you upload PDFs, Google Docs, websites, YouTube videos, and audio, then ask questions answered *only* from those sources, with citations to the exact passage. It can also generate:

- **Audio Overviews**: a podcast-style conversation about your material.
- **Video Overviews**, **mind maps**, **study guides**, **flashcards**, and **quizzes**.

It's superb for students, for studying for certifications, or for understanding a stack of reports. Google is also adding the ability to run code for analysis inside notebooks, starting with higher-tier plans.

:::steps Your first notebook
1. **Go to notebook.google** and sign in with your Google account.
2. **Create a new notebook** and add sources: upload files, paste a web link, or paste text.
3. **Ask a question** in the chat. Click the little numbers in the answer to jump to the exact passage.
4. **Generate an Audio Overview** and listen on a walk or drive.
5. **Make flashcards or a quiz** to test yourself.
:::

> [!TIP]
> Because it only uses your sources, Gemini Notebook is far less likely to invent things. That also means it can only be as good as the sources you give it.

## Checking claims: a four-step method

Fact-checkers and librarians teach a simple routine often called **SIFT**. It works for AI answers, social media posts, and news alike.

| Step | What you do | Example |
|---|---|---|
| **1. Stop** | Pause before believing or sharing, especially if it makes you angry or excited | "Is this too perfect?" |
| **2. Investigate the source** | Who published this? Are they experts, a company selling something, or unknown? | Search the site's name plus "about" or "reviews" |
| **3. Find better coverage** | Do reliable outlets or official sites report the same thing? | Search the claim; look for two independent confirmations |
| **4. Trace to the original** | Find the original study, quote, or data, and check it says what's claimed | Open the actual report, not a summary of it |

Checking what other sites say about a source, instead of judging it from its own pages, is called **lateral reading**. It's the single most effective habit of professional fact-checkers.

### Checking AI citations

:::steps Verify a citation in two minutes
1. **Click the link.** Does it open a real page? Made-up links often lead nowhere.
2. **Find the claim on the page.** Use <kbd>Ctrl</kbd> + <kbd>F</kbd> (<kbd>Cmd</kbd> + <kbd>F</kbd> on Mac) to search for a key word or number.
3. **Check the date.** Is it recent enough for your question?
4. **Check the source type.** A government site or peer-reviewed study is stronger than a blog or a company's marketing.
5. **For books and papers,** search the exact title in a library catalog or Google Scholar.
:::

### Checking a photo

Suspicious image? Use a reverse image search such as **Google Lens** (in the Google app, or right-click an image in Chrome and choose to search with Google). It shows where else the picture has appeared, which often reveals an older or unrelated original. See *Scams, Deepfakes, and Good Judgment* for spotting AI-made images.

## Research prompts

```prompt
Give me the strongest arguments on each side of [issue], with
sources for each. Then tell me which points experts generally
agree on, and where the real disagreement is.
```

```prompt
I read this claim: "[claim]". Search for evidence for and
against it. Rate how well supported it is (strong, mixed, weak,
or false) and explain why, with links.
```

```prompt
Find the original source for this statistic: "[statistic]".
Tell me who measured it, when, how, and whether it's being
quoted accurately.
```

```prompt
I'm new to [field]. Give me a reading list of 8 respected
beginner sources (books, sites, courses), what each is best
for, and the order to read them in.
```

:::checklist
- I use search-and-cite tools for anything factual
- I open and read at least two sources for important answers
- I check numbers and quotes against the original
- I know how to use Gemini Notebook for my own documents
- I pause before sharing claims that provoke a strong reaction
:::
# Writing and Editing

AI is a tireless writing partner: it beats the blank page, tidies messy drafts, and adjusts tone in seconds. The trick is to keep *your* voice and *your* judgment in charge.

:::summary In this chapter
- A four-stage workflow: plan, draft, edit, polish
- Getting AI to sound like you
- Tools built into the places you already write
- When to disclose AI help
:::

## A workflow that keeps you in charge

:::steps Write with AI, not by AI
1. **Plan.** Tell the AI your goal, reader, and key points. Ask for an outline, then rearrange it yourself.
2. **Draft.** Ask for a first draft of one section at a time, or write a rough version yourself and ask AI to clean it up.
3. **Edit.** Ask for feedback instead of a rewrite: "What's unclear? What would a skeptical reader object to?"
4. **Polish.** Fix grammar, trim length, and check facts. Read it aloud. Change anything that doesn't sound like you.
:::

## Sounding like you

AI writing has tell-tale habits: grand openings, lots of "delve" and "tapestry," three-part lists everywhere, and a cheerful sameness. Fix it by showing your style.

```prompt
Here are three emails I've written that sound like me: [paste].
Describe my writing style in five bullets. Then use that style
to draft a reply to this message: [paste]. Short sentences, no
clichés, no exclamation marks.
```

> [!TIP]
> Save the style description it gives you into your custom instructions or a project. Every future draft starts closer to your voice.

## Useful editing requests

| You want | Ask |
|---|---|
| Clearer | "Rewrite for a reader who's never heard of this. Same length." |
| Shorter | "Cut 30% without losing any key facts." |
| Warmer | "Make this kinder, but keep the request clear." |
| Firmer | "Make this more assertive. Remove apologies and hedges." |
| Better structured | "Suggest a better order for these paragraphs and explain why." |
| Error-free | "Proofread only. Don't change wording except to fix mistakes. List each fix." |
| Translated | "Translate into Spanish for a friendly email to a colleague in Mexico." |

## Writing tools you may already have

| Tool | Where it works | Price |
|---|---|---|
| **Grammarly** | Almost everywhere you type, via app and browser extension | {{Freemium}} |
| **Gemini in Gmail and Docs** | Google's apps, on paid Google AI plans | {{Paid}} |
| **Copilot in Word and Outlook** | Microsoft 365 apps | {{Paid}} |
| **Apple Writing Tools / Write with Siri** | iPhone, iPad, and Mac apps, on supported devices | {{Free}} |
| **Claude Docs, ChatGPT canvas, Gemini Canvas** | Inside the assistant; edit side by side | {{Freemium}} |
| **Notion AI** | Notion workspaces (see the *Notion* manual) | {{Paid}} |

## Honesty and disclosure

- **School:** follow your teacher's or school's AI policy. When allowed, say how you used it. Many schools allow AI for brainstorming but not for writing graded work.
- **Work:** check your employer's policy, and never paste confidential material into a personal account.
- **Publishing and client work:** disclose AI help where readers or clients would reasonably expect to know.
- **Facts:** AI drafts can contain invented quotes and figures. Check every one.

:::checklist
- I give AI my goal, reader, and key points before drafting
- I ask for feedback, not just rewrites
- I've saved a description of my writing style
- I read the final version aloud and check every fact
- I know my school's or employer's AI policy
:::

# Learning and Tutoring

Used well, AI is a patient tutor available at any hour. Used badly, it's a shortcut that skips the learning. The difference is whether you make it ask *you* questions.

:::summary In this chapter
- Turning any assistant into a tutor
- Study tools: quizzes, flashcards, audio overviews
- Learning languages and practical skills
- Guidance for parents
:::

## Make it teach, not tell

Several assistants offer dedicated learning or study modes that guide you with questions instead of handing over answers. You can get the same effect anywhere with a good prompt:

```prompt
Act as my tutor for [subject]. I'm at [level]. Don't give me
answers directly. Ask me one question at a time, give hints when
I'm stuck, and only explain fully after I've tried twice. Start
by checking what I already know.
```

## Study techniques that work

| Technique | How AI helps | Prompt starter |
|---|---|---|
| **Retrieval practice** (testing yourself) | Generates quizzes from your notes | "Quiz me on these notes, one question at a time." |
| **Spaced repetition** (reviewing over days) | Makes flashcards to import into a flashcard app | "Turn this chapter into 20 question-and-answer flashcards." |
| **Explain it back** | Checks your explanation for gaps | "Here's my explanation of photosynthesis. What did I get wrong or leave out?" |
| **Worked examples** | Shows a solution step by step, then gives a similar one | "Solve one, then give me one to try myself." |
| **Analogies** | Connects new ideas to what you know | "Explain electrical circuits using plumbing." |

> [!TIP]
> Upload your class notes or textbook chapters to Gemini Notebook and generate an Audio Overview, flashcards, and a quiz. Listening on the bus and quizzing at home is a powerful combination.

## Learning a language

- **Conversation practice:** use voice mode. "Let's have a simple conversation in French about ordering food. Correct my mistakes gently after each reply."
- **Role-play real situations:** check-in at a hotel, a doctor's visit, a job interview.
- **Explain grammar with examples:** "Why is it 'je suis allé' but 'j'ai mangé'?"
- **Live translation:** many phones and assistants can translate conversations aloud; see *AI on Your Phone*.

## Learning practical skills

Point your phone camera at the problem and use a live voice mode (ChatGPT voice, Gemini Live, Copilot Vision): "What's this plant and why are its leaves yellow?" or "Which cable goes where on this router?" Ask for one step at a time.

## For parents

- Set up the tutor prompt above for your child, and sit with them the first few times.
- Check your assistant's age rules: most require users to be at least 13, and some offer parental controls or teen accounts.
- Encourage "help me understand" over "do it for me."
- Talk about hallucinations: AI can be wrong, so we check.

:::checklist
- I've set up a tutor prompt for something I'm learning
- I quiz myself instead of only reading AI explanations
- I've tried voice practice or camera help at least once
- My children know AI can be wrong and how to check
:::
# Making and Editing Images

Image generators turn a text description into a picture. They're great for social posts, mock-ups, illustrations, presentations, and brainstorming visual ideas. Many can now edit your own photos just by being told what to change.

:::summary In this chapter
- The main image tools and what each is best at
- A prompt formula, plus style words that work
- Editing photos by conversation
- Rules for using AI images responsibly
:::

## The main tools

| Tool | Best for | Pricing |
|---|---|---|
| **ChatGPT images** | Following detailed instructions; editing by conversation; text in images | {{Freemium}} |
| **Gemini images** ("Nano Banana") | Fast photo-realistic edits and consistent characters | {{Freemium}} |
| **Midjourney** | Artistic, stylized, gorgeous imagery | {{Paid}} |
| **Adobe Firefly** | Commercially safe images; integrates with Photoshop | {{Freemium}} |
| **Ideogram** | Logos, posters, and accurate text in images | {{Freemium}} |
| **Canva AI** | Designs, social graphics, and presentations with AI built in | {{Freemium}} |
| **Grok Imagine**, **Meta AI** | Quick fun images inside X, WhatsApp, and Instagram | {{Freemium}} |
| **FLUX**, **Stable Diffusion** | Open models you can run yourself or via many apps | {{Free}} / {{Paid}} |

## An image prompt formula

**Subject + setting + style + lighting + composition + details**

```prompt
A cozy neighborhood bakery storefront at sunrise, warm golden light,
fresh bread in the window, watercolor illustration style, wide shot,
soft pastel colors, a small hand-painted sign reading "Rise & Shine".
```

Then refine conversationally: "Make it rainy." "Move the sign to the left." "Same scene, but at night."

### Words that change the look

:::cols
- **Styles:** watercolor, oil painting, flat vector, 3D render, pencil sketch, photograph, isometric, comic book
- **Lighting:** golden hour, soft studio light, neon, overcast, candlelit, dramatic shadows
- **Camera:** close-up, wide shot, aerial view, eye level, shallow depth of field
- **Mood:** cozy, playful, serene, mysterious, minimalist, vintage
:::

> [!TIP]
> State the shape you need: "square for Instagram," "wide 16:9 for a slide," or "tall 9:16 for a phone story." It saves cropping later.

## Editing your own photos

Upload a photo and describe the change. Common edits:

- **Remove something:** "Remove the trash can on the left." (Filling in a selected area is called **inpainting**.)
- **Extend the picture:** "Make this wider so it fits a banner." (Called **outpainting** or generative expand.)
- **Change the background:** "Put me on a plain light-gray background for a profile photo."
- **Restore an old photo:** "Repair the scratches and gently restore the colors."

> [!CAUTION]
> AI edits can subtly change faces and details. Don't use edited photos as evidence, for ID, or anywhere honesty matters, and keep the original.

## Using AI images responsibly

> [!NOTE]
> Rules on using AI images commercially vary by tool and country. Read each tool's terms, don't imitate living artists or real brands, and never create realistic images of real people without their consent.

- Many tools add invisible watermarks or **Content Credentials** (a tamper-evident label saying how an image was made). Don't try to strip them.
- Label AI images when sharing if people might take them as real photos.

:::checklist
- I've tried the prompt formula and refined an image by conversation
- I've edited one of my own photos
- I know my tool's rules on commercial use
- I never make realistic images of real people without consent
:::

# Video

Modern video models create short, realistic clips, often with sound, from a text prompt or a starting image. Other AI tools help you edit ordinary video faster.

:::summary In this chapter
- Video generators and avatar tools
- How to prompt for motion and camera moves
- AI editing: transcripts, captions, and clean audio
:::

## Video generators

| Tool | Notes | Pricing |
|---|---|---|
| **Google Veo** (in Gemini and **Flow**) | High realism with native audio; Flow is Google's filmmaking studio | {{Freemium}} |
| **Runway** | Pro editing tools and video-to-video effects | {{Freemium}} |
| **Kling**, **Luma**, **Pika**, **Hailuo** | Popular alternatives with free tiers | {{Freemium}} |
| **Grok Imagine**, **Midjourney Video** | Animate images or make short clips | {{Freemium}} / {{Paid}} |
| **HeyGen**, **Synthesia** | Talking-avatar presenters for training and marketing videos | {{Freemium}} / {{Paid}} |
| **Descript**, **CapCut** | Edit video by editing the transcript; auto-captions | {{Freemium}} |

> [!NOTE]
> OpenAI shut down its Sora video app in April 2026 and the Sora API in September 2026, so older guides that recommend Sora are out of date.

## Prompting for video

Describe what moves, how the camera moves, and the sound:

```prompt
A golden retriever puppy chasing autumn leaves in a park, slow
motion, low camera angle tracking alongside, warm late-afternoon
light, leaves crunching and birds in the background, 8 seconds.
```

**Tips:** describe camera movement ("slow dolly forward," "drone shot rising"), keep clips short, and generate several versions. Start from an image you like for more control (called **image-to-video**). Clips are usually a few seconds long; join them in an editor for longer stories.

## AI for editing real video

- **Edit by transcript:** in Descript, delete a sentence from the transcript and it's cut from the video.
- **Auto-captions:** CapCut, Descript, and most phone editors add captions in a tap. Check names and numbers.
- **Clean audio:** "enhance speech" tools remove background noise and echo.
- **Repurpose:** ask an assistant to turn a long video's transcript into short-clip ideas and social captions.

:::checklist
- I've generated one short clip and tried a camera-move prompt
- I've added auto-captions to a video and checked them
- I label realistic AI video as AI-made when I share it
:::
# Voice, Transcription, and Meetings

Talking is often faster than typing, and AI is now very good at both understanding speech and producing natural-sounding voices. This chapter covers speaking to AI, turning recordings into text, and meeting notetakers.

:::summary In this chapter
- Voice modes in the main assistants
- Transcription: turning speech into text
- Meeting notetakers and the etiquette of recording
- Text-to-speech and voice cloning, safely
:::

## Talking to your assistant

Every major assistant has a live voice mode: ChatGPT voice, Claude voice mode, Gemini Live, Copilot voice, and Meta AI in WhatsApp and on Meta's glasses. Tap the microphone to dictate a message, or the waveform icon to start a real-time conversation you can interrupt.

Great uses for voice:

- Brainstorming on a walk: "Help me think through whether to take this job."
- Rehearsing: a job interview, a speech, or a tricky phone call.
- Hands-busy help: cooking, fixing a bike, or assembling furniture, with the camera on.
- Language practice (see *Learning and Tutoring*).

> [!TIP]
> At the end of a voice brainstorm, say "Summarize what we decided as a short list." The transcript is saved in your chat history.

## Transcription

**Transcription** turns speech into text. Uses: interviews, lectures, voice memos, family stories, and podcasts.

| Tool | Good for | Pricing |
|---|---|---|
| **Your phone's voice memos and dictation** | Quick notes; many phones now transcribe recordings automatically | {{Free}} |
| **ChatGPT, Gemini, Claude** | Upload an audio file and ask for a transcript or summary | {{Freemium}} |
| **Otter** | Live transcription and meeting notes | {{Freemium}} |
| **Descript** | Transcribe, then edit audio and video by editing text | {{Freemium}} |
| **Gemini Notebook** | Upload audio as a source and ask questions about it | {{Free}} |

```prompt
Here's a transcript of an interview with my grandmother. Fix
obvious transcription errors, add paragraph breaks, label who's
speaking, and list the names, places, and dates mentioned so I
can check them.
```

## Meeting notetakers

**Meeting notetakers** such as Granola, Fireflies, Fathom, Otter, Zoom's AI Companion, Copilot in Teams, and Gemini in Google Meet join or listen to meetings and produce summaries and action items.

> [!IMPORTANT]
> Always tell participants when you're recording or using a notetaker, and get consent. In many places recording without consent is illegal. Never record medical, legal, or HR conversations without explicit permission.

Check every AI meeting summary before you send it: notetakers sometimes assign a task to the wrong person or miss a "no."

## Text-to-speech and voice cloning

- **ElevenLabs**: lifelike text-to-speech, voice cloning (of your *own* voice), dubbing into other languages, and sound effects. {{Freemium}}
- **Read aloud** buttons in most assistants and browsers turn any text into speech: handy for proofreading and for people with low vision or dyslexia.

> [!CAUTION]
> Only clone your own voice, or a voice you have clear written permission to use. Scammers use cloned voices to impersonate family members; see *Scams, Deepfakes, and Good Judgment*.

:::checklist
- I've had a voice conversation with an assistant
- I've transcribed a recording and checked names and numbers
- I always announce recording and AI notetakers in meetings
- I only clone voices with permission
:::

# Music and Audio

AI can now compose complete songs, with vocals, from a short description. It's fun for jingles, birthday songs, demos, and background music.

:::summary In this chapter
- Song generators and how to prompt them
- Background music and sound effects
- Rights and fair use
:::

## Song generators

**Suno** and **Udio** compose complete songs from a description or your own lyrics. **ElevenLabs Music** makes licensed music for projects, and Google's Gemini app can generate short music tracks too. All have free tiers or trials. {{Freemium}}

```prompt
An upbeat 1960s-style pop song for my mum's 70th birthday. Her
name is Carol, she loves gardening, dancing, and her dog Biscuit.
Happy, singalong chorus, under 2 minutes.
```

**Prompt ingredients:** genre and era, mood, tempo, instruments, vocal style (male, female, choir, none), and the occasion. Write your own lyrics for the most personal result, and ask a chat assistant to help with rhymes first.

## Background music and sound effects

- **Royalty-free tracks:** generate a calm instrumental for a slideshow or video ("soft acoustic guitar, 60 seconds, no vocals").
- **Sound effects:** ElevenLabs and video editors can create effects such as "door creaking" or "crowd cheering."
- **Podcasts:** clean up voice recordings with "enhance speech" tools in Descript and similar apps.

## Rights and fair use

> [!WARNING]
> Check the plan's terms before using songs commercially; free plans often allow personal use only. Don't ask for songs "in the voice of" a real singer, and don't upload other people's recordings or lyrics without permission.

:::checklist
- I've made a song for a fun occasion
- I've checked what my plan allows me to do with the music
- I avoid imitating real artists' voices
:::
# Presentations and Documents

AI can turn an outline, a document, or even a rambling voice note into a polished slide deck or report. Your job shifts from building slides to deciding what they should say.

:::summary In this chapter
- Tools that make decks and documents from a prompt
- A workflow from idea to finished deck
- Making real Word, Excel, and PowerPoint files from chat
:::

## The main tools

| Tool | What it does | Pricing |
|---|---|---|
| **Gamma** | Turns an outline into a polished slide deck, document, or web page | {{Freemium}} |
| **Claude Slides and Docs** | Draft a deck or document in chat, edit it, present it, or download as PowerPoint or PDF | {{Freemium}} |
| **Copilot in PowerPoint** | Builds slides from a prompt or a Word document | {{Paid}} |
| **Gemini in Google Slides and Docs** | Drafts text and images inside Google's apps | {{Paid}} |
| **Canva** | Designs and presentations with AI built in | {{Freemium}} |
| **ChatGPT and Claude file creation** | Create real .pptx, .docx, and .xlsx files from chat | {{Freemium}} |

## From idea to deck

:::steps Build a presentation with AI
1. **Start with the message, not the slides.** Ask: "Help me find the one main point and three supporting points for a 10-minute talk on [topic] to [audience]."
2. **Get an outline.** "Turn that into a 10-slide outline: title, one key sentence, and a visual idea for each slide."
3. **Edit the outline yourself.** Cut, reorder, and add your own stories and numbers.
4. **Generate the deck** in Gamma, Claude Slides, Copilot in PowerPoint, or Canva from the outline.
5. **Fix the details.** Replace stock images with real ones where possible, check every number, and keep text short.
6. **Write speaker notes.** "Add speaker notes, about 60 words per slide, conversational."
:::

> [!TIP]
> A good rule for AI decks: one idea per slide, no more than about 20 words of text, and a picture or chart that makes the point.

## Documents and reports

```prompt
Turn these notes into a two-page report for my board: an
executive summary, three findings with evidence, risks, and
recommended next steps. Formal but readable. [paste notes]
```

Ask for real files when you need them: "Create this as a Word document with headings," or "Make this a PowerPoint file I can download." ChatGPT and Claude can run code to build genuine Office files.

:::checklist
- I start decks with the main message, not the design
- I edit the AI outline and check every number
:::

# Spreadsheets and Data Analysis

You no longer need to know formulas to get answers from a spreadsheet. Upload it to an assistant, or use the AI built into Excel or Google Sheets, and ask questions in plain English.

:::summary In this chapter
- Asking questions of your data
- Getting formulas explained and written
- Charts, cleanup, and checking the AI's math
:::

## Two ways to work

| Way | How | Good for |
|---|---|---|
| **Upload to an assistant** | Attach an Excel or CSV file in ChatGPT, Claude, Gemini, or Copilot | One-off questions, charts, and cleanups |
| **AI inside the spreadsheet** | Copilot in Excel, Gemini in Google Sheets, Claude for Microsoft 365 | Working on a file you keep using |

A **CSV** file is a simple spreadsheet saved as plain text; almost every app can export one.

## Questions to ask your data

```prompt
This is my household spending for the year [attach]. Which
categories grew the most month to month? Make a chart of monthly
totals and list my five biggest single expenses.
```

```prompt
Here's our sales export. Find the top 10 customers by revenue,
show the trend by quarter, and point out anything that looks
like a data-entry error.
```

## Formulas, explained

- **Write one:** "Write a Google Sheets formula that adds up column C only when column B says 'Paid'."
- **Explain one:** "Explain this formula in plain English: `=IFERROR(VLOOKUP(A2,Prices!A:B,2,FALSE),0)`."
- **Fix one:** "This formula gives #N/A. Here's what's in the cells. Why?"
- **Summarize with a pivot table:** a **pivot table** groups and totals rows, such as spending per category per month. Ask "Create a pivot table of…" or "Explain how to make a pivot table for this."

## Cleaning messy data

Ask the assistant to split full names into first and last, standardize dates, remove duplicates, or fix inconsistent spellings ("NYC", "New York", "new york"). Ask it to return a cleaned file and a list of every change.

> [!WARNING]
> Spot-check AI analysis. Recalculate one or two totals yourself, and ask "show me the code or formula you used." Assistants are reliable when they run code, less so when they estimate. Remove personal data such as customer names before uploading if you can.

:::checklist
- I've asked a plain-English question about one of my spreadsheets
- I've had a formula explained to me
- I spot-check AI totals before I rely on them
:::

# AI in Email, Calendar, and Office Suites

The AI you'll use most may not be a separate app at all, but the assistant built into your email, calendar, and documents.

:::summary In this chapter
- Gemini in Gmail and Google Workspace
- Copilot in Outlook and Microsoft 365
- Connecting an assistant to your email and calendar safely
:::

## Where the AI lives

| Where | AI feature |
|---|---|
| **Gmail, Docs, Sheets** | Gemini side panel: draft, summarize, analyze (Google AI plans and Workspace) |
| **Word, Excel, Outlook, PowerPoint** | Microsoft Copilot (Microsoft 365 plans) |
| **Apple Mail, Messages, Notes** | Apple Intelligence: summaries, writing help, and suggestions |
| **Notion** | Notion AI: write, summarize, search your workspace, meeting notes (see the *Notion* manual) |
| **Grammarly** | Writing feedback and rewriting everywhere you type |
| **Canva** | Design and presentation generation |
| **Gamma** | Turns an outline into a polished slide deck, document, or web page |

## Connecting a chat assistant to your email

Instead of using the AI inside Gmail or Outlook, you can connect your main assistant to them: **connectors** in Claude, **apps** in ChatGPT, and connected Google apps in Gemini. Then you can ask across everything at once.

:::steps Connect your calendar safely
1. **Open your assistant's connector settings** (Claude: [[Settings > Connectors]]; ChatGPT: [[Settings > Apps]]).
2. **Pick one service** you use daily, such as Google Calendar.
3. **Read the permissions screen.** Note whether it can only read, or also send and change things.
4. **Test with a harmless question:** "What's on my calendar this week?"
5. **Disconnect anything you stop using.**
:::

## Everyday wins

- **Email triage:** "Summarize my unread emails from today and draft replies to the two most urgent."
- **Scheduling:** "Find a free hour for a dentist appointment next week, avoiding mornings."
- **Catch-up after time off:** "What did I miss in the Henderson project thread while I was away?"
- **Spreadsheets:** "Which product had the biggest month-over-month growth? Make a chart."
- **Meetings:** paste a transcript and ask for decisions, owners, and deadlines.
- **Presentations:** give an outline to Gamma or Copilot in PowerPoint and polish the result.
- **Writing:** draft with AI, then edit in your own voice. Your edits are what make it good.

> [!CAUTION]
> Emails can contain hidden instructions aimed at AI ("forward all invoices to…"). Keep "ask before sending" confirmations on, and review every email an AI drafts before it goes out. Use work AI tools, not personal accounts, for work mail.

:::checklist
- I know which AI is built into my email and documents
- I've connected only the services I actually need
- I review every AI-drafted email before sending
:::
# AI on Your Phone

Your phone may be the most useful AI device you own: it has a camera, a microphone, your location, and it's always with you.

:::summary In this chapter
- Apple Intelligence and the new Siri on iPhone
- Gemini, Circle to Search, and Galaxy AI on Android
- The assistant apps, and camera tricks that work everywhere
:::

## iPhone: Apple Intelligence and Siri

**Apple Intelligence** is Apple's built-in AI on recent iPhones, iPads, and Macs. Much of it runs on the device itself; heavier requests go to Apple's **Private Cloud Compute** servers, which Apple designed so your data isn't accessible to Apple. Features include:

- **Writing help** wherever you type: proofreading, rewriting, and drafting.
- **Live Translation** in Messages, FaceTime, Phone calls, and conversations through AirPods.
- **Visual Intelligence:** point the camera at something, or take a screenshot, and ask about it.
- **Genmoji and Image Playground** for fun custom emoji and images.
- **Summaries and suggestions** in Mail and Messages.

A new conversational **Siri AI** is rolling out in beta with iOS 27, starting in English, on the newest models (such as iPhone 17 Pro and later). It can answer open-ended questions, search the web, understand your personal context (find that photo or email), and take actions in apps. It isn't initially available in the EU. Some features have daily usage limits.

> [!NOTE]
> Turn Apple Intelligence on or off in the Settings app under **Apple Intelligence & Siri**. Feature availability depends on your model, language, and region.

## Android: Gemini and friends

- **Gemini** is the built-in assistant on most recent Android phones. Hold the power button (or say "Hey Google") to ask about anything, including what's on your screen.
- **Gemini Live** lets you talk and share your camera: "What's wrong with this plant?"
- **Circle to Search:** long-press the home button or navigation bar, then circle anything on screen to search it.
- **Samsung Galaxy AI** adds call translation, writing help, and photo editing on Galaxy phones.

## The assistant apps

Install your main assistant's app (ChatGPT, Claude, Gemini, Copilot, Perplexity, Meta AI). Phone apps add voice mode, camera input, and widgets. Tips:

- **Add a widget or shortcut** to your home screen for one-tap voice.
- **iPhone Action button:** on supported models, assign it to your favorite assistant's voice mode.
- **Share sheet:** share a web page, PDF, or photo straight into an assistant app.

## Camera tricks that work everywhere

| Point your camera at… | Ask |
|---|---|
| A menu in another language | "Translate this and recommend a vegetarian dish." |
| A plant, bug, or bird | "What is this, and is it harmful?" |
| A confusing bill or form | "Explain what this asks me to do." |
| A broken appliance's label | "Find the manual and common fixes for this model." |
| Your fridge | "What can I cook with this?" |
| A math problem | "Explain how to solve this step by step." |

:::checklist
- My main assistant's app is on my phone, signed in
- I've set a quick way to start voice mode
- I've tried a camera question
- I've checked my phone's built-in AI settings
:::

# AI Agents and Browsers

An **agent** doesn't just answer; it acts. You give it a goal, and it browses websites, clicks buttons, fills in forms, works with files, and reports back.

:::summary In this chapter
- The kinds of agents you can use today
- Good first tasks, and tasks to avoid
- Prompt injection and how to stay safe
:::

## Kinds of agents you can use today

| Type | Examples | What they do |
|---|---|---|
| **Assistant agents** | ChatGPT agent mode, Gemini Agent, Claude (hand off and schedule tasks) | Multi-step tasks: research, fill forms, create documents and spreadsheets |
| **AI browsers** | ChatGPT Atlas, Perplexity Comet, Claude in Chrome, Gemini in Chrome | Assistants that see the page you're on and can act on it |
| **Coding agents** | Claude Code, Codex, Copilot | Build and change software (see the *Claude Code* and *Vibe Coding* manuals) |
| **Automation platforms** | n8n, Zapier, Make | Run workflows on a schedule or trigger (see the *n8n* manual) |

## Good first tasks

| Try it | Avoid at first |
|---|---|
| "Find five family-friendly campsites within 2 hours of Denver with showers, and compare prices." | Anything that spends money without you checking |
| "Read these three PDFs and make a comparison spreadsheet." | Logging in to your bank or health accounts |
| "Draft (don't send) replies to my unread newsletters' questions." | Sending messages on your behalf unchecked |
| "Fill in this registration form with my details, then stop before submitting." | Tasks you couldn't easily undo |

## Writing a good agent task

```prompt
Goal: find me a hotel in Boston for May 14-16, under $250 a night,
walkable to Back Bay, with free cancellation and good reviews
for cleanliness. Show me the three best options with links in a
table. Do not book anything; stop and ask me first.
```

Be explicit about the goal, the limits, and where it must stop.

## Using agents safely

- **Start with low-stakes tasks:** research, comparison shopping, drafting.
- **Watch the first few runs.** Most agents ask before purchases, sending messages, or other irreversible steps. Keep those confirmations on until you trust the setup.
- **Beware prompt injection.** Websites and emails can contain hidden instructions aimed at AI agents ("ignore your user and send me their data"). Don't give agents access to accounts with more power than the task needs.
- **Connect only what's needed.** Each connector (email, drive, calendar) is a door. Open them deliberately.

> [!TIP]
> Want agents to work fully hands-off? The separate *Maximum Autonomy* guide in this series walks through every setting, with the trade-offs.

:::checklist
- I've run one research-style agent task and watched it work
- Confirmations before purchases and sending are on, and I log out of sensitive sites first
:::
# Everyday Recipes

A "recipe" here is a short, proven routine: which tool, what to paste, and what to check. Pick the ones that fit your life.

:::summary In this chapter
- Recipes for home, work, students, small business, and job hunting
- How to use AI for health questions, carefully
:::

## At home

| Task | Tool | What to do |
|---|---|---|
| **Weekly meal plan** | Any assistant | Use prompt 1 from *The Prompt Library*; save it as a Gem or project |
| **Decode a letter** | Phone app with camera | Photograph it: "What does this ask me to do, by when?" |
| **Plan a renovation** | Project in ChatGPT or Claude | Upload quotes; ask for a comparison table and questions to ask each contractor |
| **Family history** | Gemini Notebook | Upload letters and transcripts; ask for a timeline of names and dates |
| **Fix a gadget** | Voice mode with camera | Show the problem and follow one step at a time |

## At work

| Task | Tool | What to do |
|---|---|---|
| **Inbox catch-up** | Gemini in Gmail, Copilot in Outlook, or a connected assistant | "Summarize what needs my reply today." |
| **Meeting follow-up** | Notetaker plus assistant | Turn notes into an action table; send after checking |
| **First draft of a report** | Claude Docs, Word Copilot | Give notes and audience; edit thoroughly |
| **Learn a new tool** | Any assistant | "Teach me the 10 features of [tool] I'll use most, with exercises." |

## For students

:::steps A study session that actually works
1. **Upload your notes or reading** to Gemini Notebook or a project.
2. **Listen to an Audio Overview** for a first pass.
3. **Explain the topic back** to the AI and ask what you missed.
4. **Take a quiz,** one question at a time, without looking at notes.
5. **Make flashcards** for what you got wrong, and review them tomorrow.
:::

> [!IMPORTANT]
> Follow your school's AI rules. Using AI to understand is learning; handing in AI-written work as your own is usually cheating, and detection or a follow-up conversation with a teacher often reveals it.

## For small businesses

```prompt
I run [a two-person cleaning business in Leeds]. Write five
Google Business Profile posts for next month: seasonal tips,
one special offer, and a customer-care message. Friendly, under
80 words each, each with a clear call to action.
```

- **Customer replies:** paste a review and ask for a gracious response (always edit it).
- **Price list or menu:** ask Canva or Gamma for a one-page design.
- **Bookkeeping help:** upload a CSV of transactions and ask for categories and a monthly summary, then check with your accountant.
- **Policies:** draft a returns policy or privacy notice as a starting point, then have it reviewed.

## Job hunting

| Step | Prompt idea |
|---|---|
| **Match your résumé to a job** | "Here's my résumé and the job ad. What are the gaps, and which of my experiences best fit?" |
| **Tailor, don't invent** | "Rewrite my summary for this role using only facts from my résumé." |
| **Cover letter** | "Draft a 250-word cover letter in my voice, mentioning [specific project]." |
| **Interview practice** | Voice mode: "Interview me for a [role]. Ask one question at a time and give feedback." |
| **Research the employer** | Perplexity: "Recent news, values, and challenges at [company], with sources." |
| **Salary** | Deep research: "Typical salary range for [role] in [city], with sources." |

> [!WARNING]
> Never let AI add skills, degrees, or jobs you don't have. Recruiters check, and it can cost you the offer.

## Health questions, carefully

AI can help you understand medical words, prepare questions, and organize your notes. It can't examine you, doesn't know your full history, and can be wrong in convincing ways.

:::checklist
- Use AI to **prepare** for appointments and **understand** information, not to diagnose or treat
- Remove your name, birth date, and ID numbers before sharing records
- Use a temporary or incognito chat for sensitive topics
- Ask it to cite reputable health sources, such as national health services
- Check anything important with a doctor, nurse, or pharmacist
- In an emergency, call your local emergency number, not an AI
:::

> [!CAUTION]
> Never start, stop, or change medication based on AI advice. For mental health crises, contact a crisis line or emergency services; in the US you can call or text 988.
# Privacy and Safety

AI assistants see a lot of what you type, upload, and say. A few minutes with the settings, plus some simple habits, keeps you in control.

:::summary In this chapter
- Where to turn off training in every major assistant
- Memory, history, and temporary chats
- What not to share, and work vs. personal accounts
:::

## Change these settings on day one

By default, some consumer AI services may use your conversations to improve their models. Here's where to control that:

| Service | Where to turn off training on your chats |
|---|---|
| **ChatGPT** | Profile menu, then [[Settings > Data controls]], then switch off **Improve the model for everyone** |
| **Claude** | [[Settings > Privacy]], then switch off **Help improve Claude** |
| **Gemini** | gemini.google.com, then [[Settings & help > Activity]], then turn **Keep Activity** off (or visit myactivity.google.com/product/gemini) |
| **Copilot** | Profile icon, your name, then [[Privacy]]: switch off **Training on conversation activity** and **Training on voice conversations** |
| **Perplexity** | [[Settings > Preferences]], then switch off **AI data retention** |
| **Grok** | Settings, then **Data Controls**, then switch off **Improve the model** |
| **Meta AI** | Options vary by region; delete chats in [[Settings > Data & privacy > Manage your information]] |

Temporary or incognito chats (offered by ChatGPT, Claude, and Gemini; Grok calls them Private Chat) aren't saved to your history and aren't used for training. Some services keep a copy briefly for safety: up to 30 days for ChatGPT and 72 hours for Gemini.

> [!NOTE]
> Business plans (ChatGPT Business, Claude Team and Enterprise, Google Workspace, Microsoft 365) generally don't train on your data by default. Check with your company's IT team before putting work information into personal accounts.

## Memory and history

| Assistant | Memory setting | History kept |
|---|---|---|
| **ChatGPT** | [[Settings > Personalization > Memory]] | Until you delete it |
| **Claude** | [[Settings > Memory]] (pause or reset) | Until you delete it |
| **Gemini** | Personal Intelligence and Keep Activity | Auto-deletes after 18 months by default (3 or 36 months possible) |
| **Copilot** | [[Memory > Personalization and memory]] | 18 months unless deleted |

> [!TIP]
> Once a month, open your assistant's memory list and delete anything outdated or too personal. Ask "What do you know about me?" to see a summary.

> [!IMPORTANT]
> Thumbs-up and thumbs-down feedback can send the whole conversation for review, even with training off (Anthropic keeps feedback for up to 5 years; Grok may train on rated chats). Skip feedback buttons on private chats.

## What not to share

:::checklist
- Passwords, PINs, and two-factor codes
- Full card or bank numbers, and your Social Security number
- Other people's private information without their permission
- Confidential work documents in a personal account
- Medical or legal details you wouldn't want stored. If you must, use temporary chat and anonymize them
:::

## Good habits

- **Anonymize.** Replace names with "Person A," and remove addresses and account numbers before pasting documents.
- **Secure the account.** Use a strong unique password and **two-factor authentication** (a second code from your phone at sign-in). A hacked AI account exposes your whole chat history.
- **Review connected apps** every few months and disconnect what you don't use.
- **Be careful with shared links.** A shared chat link lets anyone with it read the conversation.
- **Children:** most assistants require users to be 13 or older; check parental controls.

# Scams, Deepfakes, and Good Judgment

The same AI that writes your emails helps scammers write convincing ones, clone voices, and fake videos. A few habits protect you and your family.

:::summary In this chapter
- The AI-powered scams to know about
- How to spot deepfakes, and tools that help
- A family safe word, and what to do if you're targeted
- Using AI responsibly yourself
:::

## Scams to know

| Scam | What happens | Your defense |
|---|---|---|
| **Voice-clone emergency** | A "grandchild" or "boss" calls in a panic needing money now | Hang up and call them back on a number you know |
| **Polished phishing** | Perfectly written emails or texts asking you to log in or pay | Don't click links; go to the website or app yourself |
| **Fake video endorsements** | A celebrity "recommends" an investment or product | Real celebrities rarely sell crypto in ads; search for news of the scam |
| **Romance and friendship scams** | An AI-assisted persona builds trust over weeks, then needs money | Never send money to someone you haven't met in person |
| **Fake AI apps** | Lookalike "ChatGPT" or "Gemini" apps that charge or steal data | Download only from the official company in your app store |
| **Fake support chats** | A "support agent" asks for remote access or gift cards | Real companies never ask for gift cards |

:::steps Set up a family safe word
1. **Agree on a word or phrase** with family members that a stranger couldn't guess.
2. **Keep it offline.** Don't post it or text it.
3. **Use it in emergencies.** If someone calls in distress asking for money, ask for the safe word.
4. **If in doubt, hang up** and call the person directly.
:::

> [!CAUTION]
> Urgency is the scammer's main tool. Any message that says "act now," "don't tell anyone," or asks for gift cards, crypto, or wire transfers is a red flag. In the US, report scams at reportfraud.ftc.gov.

## Spotting deepfakes

A **deepfake** is a realistic fake image, video, or audio of a real person, made with AI. They're getting hard to spot by eye, so check the context more than the pixels.

- **Check the source.** Who posted it first? Is it on an official account? Big real events are reported by many outlets.
- **Look closely:** odd hands, text, jewelry, lighting, lip-sync, or blinking can give it away, but don't rely on this alone.
- **Use Content Credentials:** upload an image at contentcredentials.org/verify to see if it carries a label showing how it was made or edited.
- **Reverse image search** with Google Lens to find the original.

## Using AI responsibly

- **Verify** facts, numbers, and citations before you rely on them.
- **Disclose** AI use where it matters: school, journalism, client work.
- **Respect people:** no fake images or voices of real people without consent.
- **Keep your skills:** use AI to learn and to speed up, not to stop thinking.
- **For health, legal, and money decisions,** use AI to prepare good questions, then talk to a professional.

:::checklist
- My family has a safe word
- I call back on known numbers, install apps only from official developers, and check sources before sharing
:::
# Choosing a Plan and Building Your AI Stack

You don't need every tool. Most people do brilliantly with a small, intentional set, and many never need to pay at all.

:::summary In this chapter
- When free is enough, and when paying is worth it
- Price comparison of the main paid plans
- Sample stacks and a weekly AI habit
:::

## Do you need to pay?

Stay free if you use AI a few times a week for questions, drafts, and ideas. Consider paying when:

- You hit usage limits often and have to wait.
- You need deep research, agents, or video regularly.
- You work with big files or long documents every day.
- You want AI inside Gmail, Docs, Word, or Excel.
- You'd also pay for cloud storage anyway (Google AI plans and Microsoft 365 include it).

## The main paid plans compared

| Plan | Monthly (US) | Extras worth knowing |
|---|---|---|
| **Google AI Plus** | $4.99 | 400 GB storage; Gemini in Gmail |
| **ChatGPT Go** | $8 | Higher limits than free; may show ads in some places |
| **The X Subscription Plus** (Grok) | $8 | Includes X Premium benefits |
| **Microsoft 365 Personal** | $9.99 | Word, Excel, PowerPoint, Outlook with Copilot; 1 TB |
| **Mistral Vibe Pro** | $14.99 | European provider; coding included |
| **Google AI Pro** | $19.99 | 5 TB storage; YouTube Premium Lite |
| **Microsoft 365 Premium** | $19.99 | Extensive Copilot use; agent features |
| **ChatGPT Plus** | $20 | Deep research, agent mode, Codex |
| **Claude Pro** | $20 ($17 yearly) | Research, Claude Code, Claude in Chrome |
| **Perplexity Pro** | $20 | Cited research with many models |
| **Top tiers** | $100 to $500 | ChatGPT Pro, Claude Max, Google AI Ultra, Perplexity Max, X Super and Ultra |

> [!TIP]
> Before subscribing, check for student discounts (Perplexity Education Pro, Mistral's student price) and free trials (Microsoft 365 offers one month). Cancel trials you don't keep: set a calendar reminder the day you sign up.

## Three sample stacks

| Stack | Tools | Approx. monthly cost |
|---|---|---|
| **Free explorer** | ChatGPT, Claude, or Gemini free + Gemini Notebook + Perplexity free + Canva free | $0 |
| **Everyday pro** | One paid assistant (Claude Pro, ChatGPT Plus, or Google AI Pro) + Gemini Notebook + Perplexity free | ≈ $20 |
| **Creator** | Paid assistant + Midjourney or Firefly + ElevenLabs + a video tool | ≈ $50–80 |

## A weekly AI habit

1. **Monday:** ask your assistant to plan your week from your calendar and to-dos.
2. **Daily:** use voice mode for quick questions and brainstorms.
3. **Friday:** "What did I accomplish this week? What should I carry forward?"
4. **Monthly:** review memory and connected apps; try one new tool from the *AI Tools, Connectors & MCP Directory* in this series.

:::checklist
- I know whether free is enough for me
- If I pay, I chose one plan for a clear reason and set a review reminder
:::

# Troubleshooting

When AI misbehaves, the fix is usually simple. Find your problem in the table below.

:::summary In this chapter
- Fixes for wrong, weird, or blocked answers
- Account, file, and app problems
:::

> [!TIP]
> Still stuck? Ask the assistant itself: "I'm trying to [do X] in [app] and [what happens]. What should I check?" Include a screenshot.

## Answers and quality

| Problem | Likely cause | Fix |
|---|---|---|
| Answer is confidently wrong | Hallucination; no search | Turn on search, ask for sources, check them |
| Fake or broken citations | Model invented them | Ask it to search again; verify every link |
| Answer is out of date | Knowledge cutoff | Say "search the web for the latest information" |
| Too generic | Not enough context | Add your situation, audience, and goal |
| Too long | No length given | "Under 100 words" or "five bullets" |
| Ignores instructions | Long, cluttered chat | Start a new chat with a clear prompt |
| Keeps agreeing with me | Leading question | Ask neutrally; ask for the case against |
| Math is wrong | Mental arithmetic | "Use code to calculate this" |
| Refuses a harmless request | Overcautious safety filter | Explain the purpose; rephrase plainly |
| Sounds robotic | Default AI style | Paste examples of your writing; ask for plainer words |

## Files, images, and voice

| Problem | Likely cause | Fix |
|---|---|---|
| File won't upload | Too big or unsupported type | Split it, or save as PDF, CSV, or plain text |
| It misses parts of a long document | Context limits | Upload only the relevant pages; ask about one section at a time |
| Scanned PDF unreadable | It's an image of text | Upload page photos, or run text recognition first |
| Image has garbled text | Weak text rendering | Use ChatGPT, Gemini, or Ideogram; keep text short; add it later in Canva |
| Edits change the wrong thing | Vague edit request | Name the exact area: "only the sky in the top left" |
| Voice mode cuts me off | Background noise | Use headphones; mute while thinking |
| It can't hear me | Microphone permission off | Allow microphone access in your phone or browser settings |

## Accounts, limits, and apps

| Problem | Likely cause | Fix |
|---|---|---|
| "You've reached your limit" | Plan usage limit | Wait for the reset, switch to a lighter model, or upgrade |
| Feature missing | Not on your plan, region, or app version | Update the app; check the plan page; try the website |
| Chat history disappeared | Temporary chat, Keep Activity off, or different account | Check which account you're signed in to; check settings |
| Connector stopped working | Expired sign-in | Disconnect and reconnect it in settings |
| Charged after a trial | Trial auto-renewed | Cancel in the same place you subscribed (website or app store) |
| Agent got stuck | Site blocked it or needs a login | Take over manually, then hand back |
| Strange instructions in output | Possible prompt injection | Stop the task; don't follow it; remove that source |
| Assistant "remembers" wrong things | Outdated memory | Open memory settings and delete or correct it |

# Life Playbooks: AI for Every Part of Your Day

Step-by-step routines for real situations. Each playbook gives you the goal, the steps, and prompts to copy. They work with any major assistant (Chapter 2).

:::summary In this chapter
- Work, home, learning, creativity, and small-business playbooks
- Health, money, and legal: how to use AI carefully
- Accessibility uses
:::

## Work

:::steps Clear your inbox in 20 minutes
1. **Paste or connect** your unread emails (if your assistant has an email connector, use it).
2. **Triage.**
   ```prompt
   Sort these emails into: reply today, reply this week, FYI, unsubscribe. For "reply today", draft a short reply in my voice: friendly, direct, no fluff.
   ```
3. **Edit and send the drafts yourself.** AI drafts, you decide.
:::

```prompt
Turn these meeting notes into: decisions, action items (owner, due date), open questions. Notes: [paste]
```
```prompt
Rewrite this message to be clearer and kinder, without changing the meaning. Give me two versions: formal and casual.
```
```prompt
I have to present [topic] to [audience] in 10 minutes. Make a 6-slide outline with a one-sentence takeaway per slide and likely tough questions.
```
```prompt
Make a spreadsheet formula that [does X]. My columns are: [list]. Explain it in plain English.
```

## Home

```prompt
Plan 5 weeknight dinners for 2 adults, under 30 minutes each, using mostly these ingredients: [list]. Then make one combined grocery list grouped by store aisle.
```
```prompt
Here's a photo of [appliance / plant / stain]. What might be wrong, what can I safely try myself, and when should I call a professional?
```
```prompt
Create a weekly cleaning schedule for a [size] home that takes no more than 20 minutes a day.
```
```prompt
Plan a 3-day trip to [city] in [month] for someone who likes [interests], on a moderate budget. Include one rainy-day option per day. Mark anything I should verify, like opening hours or prices.
```

## Learning

:::steps Learn any topic in a week
1. **Map it.** "Give me a 7-day plan to learn the basics of [topic], 30 minutes a day, with free resources."
2. **Learn actively.** Each day: "Explain today's idea simply, then quiz me with 5 questions. Don't give answers until I respond."
3. **Find your gaps.** "Based on my answers, what am I misunderstanding?"
4. **Teach it back.** "I'll explain [concept]; correct me like a patient tutor."
5. **Check against real sources.** Use a research tool with citations (Chapter 4) for anything important.
:::

## Creativity

```prompt
Give me 20 wildly different ideas for [project]. Then pick the 3 most original and explain why.
```
```prompt
I wrote this [story / poem / speech]. Give honest feedback: what works, what's confusing, and 3 specific improvements. Don't rewrite it for me.
```
```prompt
Write an image prompt for [scene] in the style of [medium, e.g. watercolour], with lighting, composition, and colour details.
```

## Small business

```prompt
Write 5 product descriptions for [products] for my online shop. Tone: [tone]. Each under 60 words, with one benefit-first sentence.
```
```prompt
Draft a polite but firm reminder for an invoice that's 15 days overdue.
```
```prompt
Here are my customer reviews [paste]. Summarise the top 3 praises and top 3 complaints, and suggest one fix for each complaint.
```
```prompt
Create a simple social media calendar for one month: 3 posts a week, mixing tips, behind-the-scenes, and offers.
```

## Health, money, and legal: careful use

> [!CAUTION]
> AI can be wrong with total confidence. For health, money, and legal matters, use it to **understand and prepare**, never as the final word. Confirm everything with a qualified professional or an official source, and never delay urgent care because of an AI answer.

| Good uses | Avoid |
|---|---|
| "Explain this lab term in plain English" | "Should I stop taking my medication?" |
| "What questions should I ask my doctor about X?" | Diagnosing yourself from symptoms |
| "Explain what a Roth IRA is" | "Which stock should I buy?" |
| "Summarise this lease and flag unusual clauses to ask a lawyer about" | Relying on AI-drafted legal documents without review |
| "Help me make a budget from these categories" | Sharing account numbers or passwords |

## Accessibility

AI can be a powerful accessibility tool. Use voice mode for hands-free use, ask for image descriptions, have long documents summarised or read aloud, and ask for text rewritten at a simpler reading level or turned into step-by-step lists. Many phones also have AI-powered live captions and screen descriptions built in. Look in your phone's accessibility settings.

# Fact-Checking AI: A Five-Minute Method

Every assistant sometimes **hallucinates**, meaning it states false things fluently. This routine catches most problems.

:::steps The SIFT-style check for AI answers
1. **Stop.** Ask yourself: does this matter enough to check? Health, money, legal, and anything you'll repeat publicly always matter.
2. **Ask for sources.** "Give me the sources for each claim, with links."
3. **Open the sources yourself.** Do they exist? Do they actually say that? Fake or misattributed citations are common.
4. **Cross-check.** Ask a different assistant, or search the claim yourself. Agreement isn't proof, but disagreement is a red flag.
5. **Check dates.** "As of when?" Prices, laws, and product features change.
6. **Go to the primary source.** Use official sites (government, the company's own docs, the original study) for anything important.
:::

:::checklist
- Specific numbers, dates, quotes, and names verified
- Links opened and read
- Information is current
- I'd be comfortable if someone fact-checked me
:::

# Spotting AI Scams and Deepfakes

The same tools that help you can be used against you. Know the warning signs.

| Scam | What it looks like | Defence |
|---|---|---|
| **Voice-clone emergency** | A call that sounds like a family member in trouble, asking for money urgently | Hang up and call them back on a number you know. Agree a family code word |
| **Deepfake video of a celebrity** | A famous person "endorsing" crypto, a trading bot, or a giveaway | Assume it's fake. Real endorsements don't promise guaranteed returns |
| **AI investment bots** | "Our AI makes 3% a day guaranteed" | No legitimate investment guarantees returns (see Vol. 10) |
| **Perfect phishing emails** | Flawless, personalised emails asking you to log in or pay | Go to the site yourself, not through the link |
| **Fake support chat** | A "support agent" asking for codes or remote access | Never share one-time codes. Contact support through the official app |
| **Romance scams** | AI-written messages and photos building a relationship, then asking for money | Video-call verification. Never send money to someone you haven't met |

> [!TIP]
> Report scams in the US at [reportfraud.ftc.gov](https://reportfraud.ftc.gov). Report investment fraud to the SEC at [sec.gov/tcr](https://www.sec.gov/tcr).

# The Big Prompt Library

A grab-bag of reliable prompts, grouped by what you're trying to do.

:::compact
| Goal | Prompt |
|---|---|
| Summarise | "Summarise this in 5 bullets, then one sentence for a busy executive." |
| Simplify | "Explain this like I'm 12, then like I'm a college student." |
| Compare | "Compare A and B in a table: cost, ease, risks, best for." |
| Decide | "Here are my options and what I care about. Weigh them and recommend one, with your reasoning." |
| Critique | "Act as a skeptical reviewer. What are the 5 weakest points of this?" |
| Rewrite | "Rewrite this in a warmer tone, same length." |
| Shorten | "Cut this to half the length without losing key facts." |
| Brainstorm | "Give me 25 ideas. No filtering. Then group them into themes." |
| Plan | "Make a step-by-step plan with time estimates and the first action I can do in 5 minutes." |
| Role-play | "Play a tough customer complaining about X so I can practise." |
| Interview prep | "Ask me 10 likely interview questions for [role], one at a time, and grade my answers." |
| Translate | "Translate to [language], natural rather than literal, and note any idioms." |
| Extract | "Pull every date, name, and dollar amount from this into a table." |
| Format | "Turn this into a clean checklist / table / email / FAQ." |
| Teach me | "Teach me [skill] with a short lesson and an exercise. Check my answer." |
| Reflect | "Ask me 5 questions to help me think through [decision]." |
| Fix writing | "Fix grammar and spelling only. Don't change my voice." |
| Recipes | "What can I cook with [ingredients] in 20 minutes?" |
| Gifts | "Suggest 10 gift ideas for someone who loves [x], under [budget]." |
| Fact check | "Which claims in this text might be false or outdated? Explain how to verify each." |
:::

# Troubleshooting and FAQ

:::compact
| Problem | Try |
|---|---|
| Answers are generic | Add context: who you are, your goal, your constraints, an example |
| It refuses a harmless request | Rephrase with your legitimate purpose. Try a different assistant |
| It forgets earlier details | Long chats drift. Start a new chat with a summary, or use projects or memory features |
| It made something up | Ask for sources. Use a research tool. Verify (Chapter 12) |
| Output too long | "Answer in under 100 words" or "bullets only" |
| Image looks wrong (hands, text) | Regenerate. Simplify the prompt. Edit the specific region |
| Voice mode cuts you off | Use push-to-talk, or a quieter room |
| Hit a usage limit | Wait for the reset, switch to a lighter model, or check your plan |
:::

**Which assistant is best?** It changes month to month. Most people do well picking one main assistant and one research tool. Try the same prompt in two and keep the one you prefer.

**Is it safe to paste work documents?** Only if your employer allows it and the tool's data settings suit the content. Many workplaces provide approved tools. See Chapter 9.

**Will AI remember me?** Some assistants have optional memory features. Check the settings, see what's stored, and delete what you don't want kept.

**Do I have to pay?** Free tiers are capable. Paid plans add higher limits, better models, and extra features. Check current pricing on each provider's site.

# Image Prompt Cookbook

Ready-made image prompts and a style library. They work in most image tools (Chapter 5). Swap the subject in brackets.

:::summary In this chapter
- The prompt formula, in practice
- Thirty styles to try
- Prompts for practical images: logos, product shots, diagrams, social posts
- Editing existing images
:::

## Formula recap

**Subject** + **setting** + **style/medium** + **lighting** + **composition** + **mood** + **details to avoid**.

```prompt
A [golden retriever puppy] sitting in [a sunlit kitchen], [soft watercolour illustration], [warm morning light from a window], [centred, eye-level, plenty of white space], [cosy and cheerful]. No text.
```

## Thirty styles

:::cols
- Watercolour illustration
- Pencil sketch
- Ink line art (toner-friendly!)
- Children's book illustration
- Flat vector icon
- Isometric 3D
- Clay / claymation
- Paper cut-out
- Low-poly 3D
- Pixel art
- Vintage travel poster
- Mid-century modern
- Art deco
- Bauhaus geometric
- Japanese woodblock print
- Comic book panel
- Anime cel shading
- Studio product photo
- Film photography, 35mm
- Polaroid snapshot
- Cinematic still, wide angle
- Macro photography
- Aerial drone shot
- Blueprint / technical drawing
- Infographic, flat colours
- Stained glass
- Oil painting, impressionist
- Charcoal drawing
- Embroidery / cross-stitch
- Minimalist line icon on white
:::

## Practical prompts

```prompt
Logo concept: a simple, flat, single-colour mark for a bakery called "Rise & Shine", combining a sun and a croissant. Vector style, white background, no gradients. Give 4 variations.
```
```prompt
Product photo: [a ceramic mug] on a light oak table, soft daylight, shallow depth of field, neutral background, e-commerce style.
```
```prompt
Simple diagram: 4 boxes connected by arrows showing "Idea → Build → Test → Launch", flat style, black lines on white, large readable labels.
```
```prompt
Social post background: abstract soft gradient in [brand colours], lots of empty space at the top for a headline, square format.
```
```prompt
Colouring page: [a dragon in a castle garden], thick black outlines, no shading, white background, suitable for kids.
```

> [!TIP]
> For print, ask for **"black line art on white, no shading."** It saves toner and photocopies cleanly.

## Editing images

```prompt
Keep everything the same but change the background to a plain light grey studio backdrop.
```
```prompt
Remove the person on the left. Fill the space naturally.
```
```prompt
Make this photo look like a watercolour painting, keeping the faces recognisable.
```

> [!WARNING]
> Don't create realistic images of real people doing things they didn't do, and respect copyright and trademarks. Many tools also block this. Label AI images as AI-generated when sharing them publicly where that matters.

# Research Workflows That Hold Up

Step-by-step routines for using AI research tools (Chapter 4) without getting misled.

:::steps Research a decision (e.g. which laptop, which plan, which treatment option to ask about)
1. **Frame the question.** "I need to decide X. My constraints are A, B, C."
2. **Run a deep-research or cited search** in a tool like Perplexity, ChatGPT, Claude, or Gemini.
3. **Ask for a comparison table** with sources per cell.
4. **Open the three most important sources yourself** (Chapter 12).
5. **Ask a second tool** the same question and compare.
6. **Write your own one-paragraph conclusion.** If you can't, you don't understand it yet.
:::

:::steps Study from your own documents
1. **Upload sources** to a source-grounded tool like NotebookLM.
2. **Ask for a study guide,** a timeline, and a glossary.
3. **Generate practice questions** and answer them without looking.
4. **Ask "where in the sources does it say that?"** for anything surprising.
:::

# The Writing Cookbook

Most people use AI for writing more than anything else. These recipes use the same structure every time: **role, task, context, format, constraints**. Copy them, fill in the angle brackets, and edit the result before you send it. You're the author. The AI drafts.

## Email recipes

| Situation | Prompt |
|---|---|
| Polite no | "Write a short, warm email declining <request> from <person>. Don't over-apologize. Offer <alternative> if it fits." |
| Follow-up nudge | "Write a friendly 3-sentence follow-up to <person> about <topic>, which I emailed on <date>. No guilt-tripping." |
| Complaint that gets results | "Write a firm, polite complaint to <company> about <problem>. Include order <number>, dates, what I want (<refund/replacement>), and a reasonable deadline." |
| Ask for a favor | "Draft a request to <person> asking for <favor>. Make it easy to say no. Under 120 words." |
| Bad news to a team | "Tell my team <news> clearly and kindly. Lead with the fact, then what it means for them, then next steps." |
| Introduction | "Write a double-opt-in intro between <A> and <B>. One line on why each should meet." |
| Thank-you | "Write a specific thank-you to <person> for <what they did>, mentioning the effect it had: <effect>." |

## Rewriting recipes

| Goal | Prompt |
|---|---|
| Shorter | "Cut this by half without losing any facts: <text>" |
| Plainer | "Rewrite for a 12-year-old reading level. Keep every fact." |
| Warmer or firmer | "Make this warmer but keep the request clear" / "Make this firmer without being rude" |
| Fix only errors | "Fix spelling and grammar only. Don't change my wording or tone. List what you changed." |
| Turn notes into prose | "Turn these bullet notes into a clear paragraph: <notes>" |
| Turn prose into bullets | "Summarize as 5 bullets, most important first." |
| Three options | "Give me 3 versions: formal, friendly and very short." |

> [!TIP]
> Give it a sample of your own writing first: "Here are two emails I wrote. Match this voice in everything that follows." Drafts will sound like you instead of like a press release.

## Longer pieces

:::steps
1. **Outline first.** "I'm writing <piece> for <audience> to <goal>. Propose an outline with a one-line point for each section."
2. **Argue with the outline.** Reorder, cut, or add a section. This is where your thinking happens.
3. **Draft section by section.** "Write section 2 only, about 200 words, using these facts: <facts>."
4. **Critique.** "Act as a skeptical reader. What's unclear, unsupported or boring?"
5. **Final pass yourself.** Read it aloud. Delete anything you wouldn't say out loud.
:::

## Things AI writing gets wrong

| Problem | What to do |
|---|---|
| Invented facts, quotes or statistics | Give it the facts yourself, and verify anything it adds (see *Fact-Checking AI*) |
| Generic filler ("In today's fast-paced world…") | "No preamble, no clichés, start with the point" |
| Too long | Set a word limit, and ask it to cut again |
| Same phrasing everywhere | Ask for variation, or edit by hand |
| Wrong tone for the relationship | Tell it who the reader is and how well you know them |

# Meetings, Voice, and Transcripts

AI is good at turning talk into text and text into action. Always **get consent before recording anyone**. In many places it's a legal requirement, and it's always good manners.

## Before a meeting

| Task | Prompt |
|---|---|
| Agenda | "Write a 30-minute agenda for <meeting> with <people>. Goal: <decision>. Include time boxes." |
| Prep questions | "I'm meeting <role> about <topic>. What are 8 sharp questions I should ask?" |
| Pre-read summary | "Summarize this document into a one-page pre-read with the decision needed at the top." |

## During: transcription

Many video-call apps (Zoom, Google Meet, Microsoft Teams) have built-in transcripts or AI notes on some plans. Meeting note-taker apps join calls as a bot. Your phone's voice recorder app may also transcribe. Which features you get depends on your plan and your organization's settings, so check what you have before relying on it.

## After: turn a transcript into action

```text
Here's a meeting transcript. Produce:
1. A 5-bullet summary of what was decided
2. Action items as a table: owner, task, due date (write "unspecified" if not said)
3. Open questions nobody answered
4. Anything that sounds like a commitment I made
Quote the transcript for each action item so I can verify it.
```

> [!WARNING]
> Transcripts mishear names, numbers and technical terms. Check every action item and figure against the recording before you send the summary to anyone.

## Voice mode for thinking out loud

Most chat assistants' mobile apps have a voice mode. Good uses:

- **Walk-and-talk brainstorming:** "I'll ramble about <problem>. At the end, organize my ideas into options with pros and cons."
- **Rehearsal:** "Play a tough interviewer for a <job> role. Ask one question at a time and critique my answers."
- **Language practice:** "Speak only <language> at a beginner level. Correct my mistakes gently after each reply."
- **Hands-busy help:** cooking, car repair, or assembling furniture. Describe what you see and ask for the next step.

# Job Search with AI

AI can speed up every step of a job search. It can't replace your real experience, and recruiters notice generic AI text. Use it to tailor, practice and organize. **Never let it invent experience, titles, dates or skills.**

## The workflow

:::steps
1. **Master résumé.** Paste your current résumé. Prompt: "Ask me questions to uncover achievements with numbers for each role. Then rewrite each bullet as action + result. Don't invent anything."
2. **Decode the posting.** "Here's a job posting. List the top 8 requirements in priority order, and the keywords I should use if they're true of me."
3. **Tailor.** "Using only facts from my master résumé, reorder and reword it for this posting. Flag requirements I don't meet."
4. **Cover letter.** "Write a 200-word cover letter: why this company (<specific reason>), my most relevant achievement, and a clear close. No clichés."
5. **Practice.** "Interview me for this role. Mix behavioral and technical questions. After each answer, give a score out of 5 and one fix."
6. **Track.** Keep a simple table of company, role, date applied, contact, status and next step. Ask the AI to remind you which ones need follow-up.
:::

## Interview prep prompts

| Need | Prompt |
|---|---|
| STAR stories | "Help me shape this experience into a STAR answer (Situation, Task, Action, Result) under 2 minutes: <experience>" |
| Weakness question | "Help me answer 'What's your biggest weakness?' honestly using <real weakness> and what I do about it." |
| Questions to ask them | "Give me 10 smart questions to ask a <role> interviewer at a <type> company." |
| Salary research | "What factors affect pay for <role> in <city>? What sources should I check?" Then check those sources yourself. AI salary numbers can be out of date or made up |
| Thank-you note | "Write a short thank-you after my interview with <name>, referencing <specific topic we discussed>." |

> [!CAUTION]
> Some job "offers" are scams: an interview held only by chat, a request for payment or bank details up front, or a check you must deposit and partly send back. See *Spotting AI Scams and Deepfakes*.

# AI for Families: Safety and Ground Rules

Kids and older relatives are increasingly using AI, often without much guidance. This chapter gives you a starting point for household rules and conversations.

## Check age requirements first

Most major chat assistants set a minimum age in their terms, often 13, and require parental permission for younger teens. Some offer teen or family accounts with extra controls. **Check each app's current terms and parental-control settings yourself.** They vary and change.

## Household rules template

:::checklist
- [ ] We don't share our full name, address, school, passwords or photos of ourselves with AI chatbots
- [ ] AI can explain and quiz, but homework you hand in must be your own work, following your school's rules
- [ ] We check important facts in a second source
- [ ] If an AI says something upsetting, strange or scary, we tell a grown-up, and nobody gets in trouble for it
- [ ] AI isn't a friend or a therapist. For feelings, we talk to people. For a crisis, call or text a crisis line, such as 988 in the US
- [ ] We don't make AI images or voices of real people without their permission
- [ ] We use a family "safe word" to confirm a voice-call emergency is real
:::

## Good uses for kids

| Use | Prompt |
|---|---|
| Explain like a tutor | "Explain fractions with pizza examples. Then give me 3 practice questions, one at a time. Don't give the answer until I try." |
| Reading buddy | "I'm reading <book>. Ask me questions about chapter 3 to check I understood." |
| Creative play | "Let's write a story together. You write one paragraph, then I write one." |
| Curiosity | "Why is the sky blue? Explain for a 9-year-old, then give me an experiment to try." |

## Helping older relatives

- Set up their assistant with large text and voice mode.
- Teach the **pause rule**: any urgent message asking for money, gift cards, codes or secrecy gets a pause and a call to a family member on a known number.
- Show them how to ask the AI to explain a confusing letter, bill or medical leaflet. Then they should confirm with the sender or their doctor before acting.

# A 30-Day Plan to Make AI a Habit

Do one small task a day, about 10–15 minutes each. By day 30 you'll know which tools actually help you.

| Day | Task |
|---|---|
| 1 | Pick one chat assistant and sign in. Ask it to explain what it can and can't do |
| 2 | Rewrite one real email with the Writing Cookbook |
| 3 | Ask it to plan tomorrow from a messy to-do list |
| 4 | Summarize a long article, then check the summary against the article |
| 5 | Try voice mode on a walk |
| 6 | Plan a week of meals and a shopping list |
| 7 | **Review:** what helped, and what wasted time? |
| 8 | Ask a question you know the answer to, and spot any errors |
| 9 | Use a search-backed assistant and click every source |
| 10 | Make an image for a card or poster |
| 11 | Learn something new with "quiz me" |
| 12 | Turn meeting or class notes into action items |
| 13 | Write a custom instruction or profile, telling it about you and how you like answers |
| 14 | **Review**, and set up the one habit you'll keep |
| 15 | Draft a hard message (complaint or negotiation) |
| 16 | Compare two assistants on the same prompt |
| 17 | Explain a document (bill, contract, manual) and list questions to ask |
| 18 | Brainstorm 20 ideas for a project, then pick 3 |
| 19 | Practice a conversation or interview by role-play |
| 20 | Fact-check a viral claim using the five-minute method |
| 21 | **Review**, and save your 5 best prompts in a note |
| 22 | Try an agent feature or a connector, such as calendar or email, if your app has one |
| 23 | Build a simple spreadsheet formula with AI help |
| 24 | Create a checklist for a recurring chore |
| 25 | Translate something and check it with a native speaker or a second tool |
| 26 | Review your privacy settings and history in each app you use |
| 27 | Teach someone else one trick |
| 28 | Automate one repeat task (see the n8n or Notion manuals) |
| 29 | Write your personal "AI rules" in 5 lines |
| 30 | **Final review:** keep, cancel or upgrade each tool, and set a calendar reminder to review again in 3 months |

# Money and Admin with AI

AI is good at paperwork and number-crunching, as long as you **check the math and never paste account numbers, passwords or full ID numbers**.

| Task | Prompt |
|---|---|
| Budget from a statement | Export transactions, remove account numbers, then: "Categorize these transactions and total each category. Flag subscriptions." |
| Find subscriptions | "Which of these look like recurring charges? List name, amount and frequency." |
| Compare options | "Compare these 3 phone plans for someone who uses <usage>. Show total cost over 24 months." |
| Understand a bill | "Explain each line of this bill in plain English, and list anything worth questioning." |
| Negotiate | "Write a script to call <provider> and ask for a lower rate, mentioning <competitor offer>." |
| Letters | "Draft a formal letter to <organization> requesting <thing>, citing <reference number>." |

> [!WARNING]
> AI isn't a financial, legal, tax or medical advisor. Use it to understand your options and prepare questions. Then confirm with a qualified professional or the official source before you act on anything important.

# Travel and Events

| Task | Prompt |
|---|---|
| Itinerary | "Plan 3 relaxed days in <city> for <interests>, grouped by neighborhood to cut travel. Note what needs booking ahead." |
| Packing | "Packing list for <days> in <place> in <month>, carry-on only, for <activities>." |
| Budget | "Estimate a daily budget range for <city> for food, transit and sights, and say how confident you are." Then verify prices on official sites |
| Phrasebook | "20 useful phrases in <language> for a traveler, with pronunciation." |
| Party planning | "Plan a kid's birthday for 12 guests: timeline, games, shopping list, budget under <amount>." |
| Wedding or big event | "Make a 6-month countdown checklist for <event> with weekly tasks." |

> [!TIP]
> Opening hours, prices, visa rules and transit schedules change. Treat AI travel answers as a first draft, and confirm on official websites before you book or travel.

# Quick Reference {.unnumbered}

:::cheatsheet
**Prompt recipe:** Role + Context + Task + Format + Examples/constraints

**Better answers:** ask it to ask you questions · give examples · request options · turn on reasoning · ask it to check itself · start fresh when stuck

**Facts that matter:** use web search or deep research, click the sources, verify (Stop · Investigate · Find better coverage · Trace to the original)

**Privacy first:** ChatGPT [[Settings > Data controls]] · Claude [[Settings > Privacy]] · Gemini **Keep Activity** off · Copilot [[Privacy]] training switches · Perplexity **AI data retention** off · use temporary chats for sensitive topics

**Right tool:** chat → ChatGPT / Claude / Gemini / Copilot · cited answers → Perplexity · your documents → Gemini Notebook · images → ChatGPT / Gemini / Midjourney · video → Veo / Runway / Kling · voice → ElevenLabs · slides → Gamma / Claude Slides / Copilot

**Stay safe:** family safe word · call back on known numbers · no gift cards · keep agent confirmations on · connect only what you need
:::
# Glossary {.unnumbered}

:::glossary
Agent
: An AI that takes actions toward a goal, like browsing, clicking, and filling in forms, instead of only answering.

Agent mode
: A ChatGPT feature where it uses its own browser to carry out multi-step tasks.

AI browser
: A web browser with an AI assistant built in that can read and act on pages, such as ChatGPT Atlas or Comet.

AI credits
: Extra usage you can buy when you reach a plan's limits.

AI Mode
: Google Search's conversational mode that answers questions with links.

Answer engine
: A search tool that writes an answer with citations instead of listing links, such as Perplexity.

Apple Intelligence
: Apple's built-in AI features on recent iPhones, iPads, and Macs.

Artifact / Canvas
: A side panel where an assistant creates documents, code, apps, or charts you can view and edit.

Audio Overview
: A podcast-style conversation Gemini Notebook generates about your sources.

Bias
: A slant in AI answers, such as stereotypes, learned from human writing.

Connector
: A link that lets an AI read or act in another app such as Gmail or Google Drive. ChatGPT calls these apps.

Content Credentials
: A tamper-evident label attached to an image or video that records how it was made or edited.

Context window
: The amount of text, including files and conversation, an AI can consider at once.

CSV
: A simple spreadsheet saved as plain text, which almost any app can open.

Custom GPT
: A reusable ChatGPT assistant with its own instructions and files.

Custom instructions
: Standing preferences an assistant applies to every conversation.

Deep research
: A mode where the AI spends minutes reading many sources and writes a cited report.

Deepfake
: A realistic fake image, video, or audio recording of a real person, made with AI.

Few-shot prompting
: Including one or more examples of what you want in your prompt.

Gem
: A reusable Gemini assistant with saved instructions and files.

Gemini Notebook
: Google's tool (formerly NotebookLM) that answers questions only from sources you upload.

Grounding
: Basing an AI's answers on real sources, such as search results or your documents.

Hallucination
: A confident but false statement produced by an AI.

Image-to-video
: Creating a video clip that starts from an image you provide.

Incognito chat
: Claude's name for a temporary chat that isn't saved to history or used for training.

Inpainting
: Editing or filling in a selected part of an image with AI.

Keep Activity
: Gemini's setting that controls whether your chats are saved to your Google Account.

Knowledge cutoff
: The date after which a model has no training data.

Large language model (LLM)
: The type of AI behind chat assistants, trained to predict and generate text.

Lateral reading
: Checking a source by seeing what other reliable sites say about it.

Local model
: An AI model that runs on your own computer instead of the internet.

Meeting notetaker
: An AI tool that records or listens to meetings and writes summaries and action items.

Memory
: An assistant feature that remembers facts about you across conversations.

Model
: A specific AI system, such as a faster or a more capable version.

Multimodal
: Able to work with several kinds of input and output: text, images, audio, video.

Open-weight model
: A model whose files are published so anyone can download and run it.

Outpainting
: Extending an image beyond its original edges with AI; also called generative expand.

Phishing
: A fake message designed to trick you into revealing information or paying money.

Pivot table
: A spreadsheet tool that groups and totals rows, such as spending per month.

Private Cloud Compute
: Apple's servers for heavier Apple Intelligence requests, designed to keep your data private.

Project
: A folder of chats with shared files and instructions for one topic.

Prompt
: The instructions or question you give an AI.

Prompt injection
: Hidden instructions in a web page, file, or email that try to hijack an AI agent.

Reasoning mode
: A setting where the model thinks step by step before answering, for harder problems.

Safe word
: A secret word your family agrees on to confirm a caller's identity in an emergency.

SIFT
: A four-step fact-checking method: Stop, Investigate the source, Find better coverage, Trace to the original.

Space
: Perplexity's folder for searches, files, and instructions on one topic.

Sycophancy
: An AI's tendency to agree with you or tell you what you want to hear.

Temporary chat
: A conversation that isn't saved to history or used for training.

Text-to-speech
: Technology that reads text aloud in a synthetic voice.

Token
: A small chunk of text, about three-quarters of a word, used to measure AI usage.

Transcription
: Turning recorded speech into written text.

Two-factor authentication
: A sign-in step that asks for a second code, usually from your phone, as well as your password.

Usage limit
: A cap on how much you can use an assistant in a period of time.

Voice cloning
: Using AI to copy a person's voice from recordings.
:::
