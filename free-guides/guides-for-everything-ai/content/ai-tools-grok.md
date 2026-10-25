---
title: Everyday AI Tools
subtitle: Chat assistants, research, images, video, voice, and everyday AI, explained for beginners
volume: 4
edition_label: Grok Edition
edition_note: "Concise edition, revised and fact-checked by Grok Bot in GrokAllManualsV1."
edition: October 2026
accent: "#0B8A8A"
accent2: "#F2A93B"
motif: blocks
blurb: |
  Beyond coding, AI now helps with almost everything: writing, research, studying, planning trips, designing logos, making videos, transcribing meetings, and running errands on the web. The hard part isn't access. It's knowing which tool to reach for and how to ask.

  This manual gives you a mental model of how these tools work, a tour of the best ones in each category, a prompting method that works everywhere, and the privacy settings to change on day one.
---

# How AI Assistants Work

You don't need to understand the math, but a simple mental model makes you dramatically better at using AI, and helps you spot when it's wrong.

:::summary In this chapter
- What a "large language model" is, in plain English
- Why AI sometimes makes things up
- The words you'll see on every AI website
:::

## A very well-read prediction engine

Chat assistants like ChatGPT, Claude, and Gemini are powered by a **large language model** (LLM): a program trained on an enormous amount of text to predict what comes next. Ask it a question, and it produces the most helpful-sounding continuation, one small piece (a **token**) at a time.

Because it learned from so much writing, an LLM can explain, summarize, translate, brainstorm, write code, and reason through problems. Modern models can also take in images, audio, and files, which makes them **multimodal**.

## Why it sometimes makes things up

An LLM doesn't look facts up in a database; it generates text that *fits*. Usually that's right. Sometimes it confidently produces something false, such as a fake statistic, a wrong date, or a book that doesn't exist. This is called a **hallucination**.

> [!WARNING]
> Treat AI like a brilliant, fast intern: excellent for drafts and ideas, but **verify anything important**, especially numbers, quotes, legal, medical, and financial information. Prefer answers that cite sources you can click.

Two features reduce hallucinations a lot:

- **Web search:** the assistant searches the internet and cites what it found.
- **Your own files:** upload a document and ask questions about *it*; answers are then grounded in your material.

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

# Chat Assistants

The general-purpose chat assistant is the Swiss Army knife of AI. Most people need one main assistant and maybe a second for comparison.

## The major assistants

| Assistant | Company | Strengths | Plans (US, Oct 2026) |
|---|---|---|---|
| **ChatGPT** | OpenAI | Most popular; strong all-rounder; images, voice, agents, huge app ecosystem | Free · Go $8 · Plus $20 · Pro from $100/mo |
| **Claude** | Anthropic | Excellent writing and reasoning; long documents; coding; Artifacts; Cowork for desktop tasks | Free · Pro $20 · Max $100 / $200/mo |
| **Gemini** | Google | Built into Gmail, Docs, Android, and Search; strong video and image tools; big storage bundles | Free · AI Plus $4.99 · AI Pro $19.99 · Ultra from $99.99/mo |
| **Microsoft Copilot** | Microsoft | Built into Windows, Edge, Word, Excel, and Outlook | Free · included with Microsoft 365 plans |
| **Perplexity** | Perplexity | Answer engine: every answer cites web sources | Free · Pro $20 · Max $200/mo |
| **Grok** | xAI | Real-time X (Twitter) data; bundled with X and Cursor | Free · X Subscription from $8/mo |
| **Meta AI** | Meta | Free in WhatsApp, Instagram, Messenger, and Ray-Ban glasses | Free |
| **Le Chat** | Mistral (France) | Fast; European data hosting | Free · Pro plan |
| **DeepSeek** | DeepSeek (China) | Strong free reasoning models | Free |

> [!NOTE]
> Prices and model names change often. The free tiers are genuinely useful. Start free, and pay ($20/month is the usual first step) only when you hit limits or need a premium feature.

## How to choose

- **Already live in Google (Gmail, Docs, Android)?** Gemini fits naturally.
- **Live in Microsoft Office at work?** Copilot is already there.
- **Want the best writing partner or work with long documents?** Try Claude.
- **Want the widest range of features in one app?** ChatGPT.
- **Want answers with sources for research?** Perplexity.

Try the same real task in two assistants for a week. You'll quickly feel which one "gets" you.

## Getting started

:::steps Set up an assistant the right way
1. **Create an account** on the website (chatgpt.com, claude.ai, gemini.google.com) and install the phone app.
2. **Change your privacy settings first.** See Chapter 10 for the exact toggles.
3. **Add custom instructions.** Tell it about yourself and how you like answers, so you don't repeat it every chat (see below).
4. **Try voice mode** on your phone. It's the most natural way to brainstorm.
5. **Upload a real document** (a lease, a manual, a report) and ask questions about it.
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

### Example custom instructions

```prompt
About me: I run a small bakery and I'm not technical.
How to answer: Be warm and concise. Use plain English, short
paragraphs, and bullet points. Give me a recommendation instead
of a list of options when you can. If you're unsure, say so.
```

# Prompting That Works Everywhere

The same habits get great results from every AI tool, whether it writes text, images, or code.

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

## Habits of great prompters

- **Have a conversation.** The first answer is a draft. Say what to change: "shorter," "friendlier," "more specific to bakeries."
- **Ask it to ask you questions.** *"Before you write the plan, ask me up to five questions."*
- **Give examples.** Paste a past email you liked and say "in this style."
- **Ask for options, then choose.** *"Give me five subject lines, ranked."*
- **Request reasoning for hard problems.** Turn on a thinking or reasoning mode, or say "think it through step by step."
- **Ask it to check itself.** *"Review your answer for errors and anything you're unsure about."*
- **Start fresh when it goes off track.** A new chat with a clear prompt beats ten corrections.

## Ready-to-use prompts

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

# Research and Learning

## Answer engines and deep research

For questions where facts matter, use tools that **search and cite**:

- **Perplexity**: every answer comes with numbered sources. Pro adds deeper multi-step research.
- **Deep research modes** in ChatGPT, Claude, and Gemini spend several minutes reading dozens of sources and produce a long, cited report. They're ideal for market research, comparing products, or learning a new field.
- **Google Search's AI Mode**: conversational answers inside Google Search.

> [!TIP]
> Always click through to two or three of the cited sources. Check that they really say what the AI claims, and that they're reputable and recent.

## NotebookLM: an AI that only reads your sources

**NotebookLM** (notebooklm.google.com, free with a Google account) lets you upload PDFs, Google Docs, websites, YouTube videos, and audio, then ask questions answered *only* from those sources, with citations to the exact passage. It can also generate:

- **Audio Overviews**: a podcast-style conversation about your material.
- **Video Overviews**, **mind maps**, **study guides**, **flashcards**, and **quizzes**.

It's superb for students, for studying for certifications, or for understanding a stack of reports.

## Learning with AI

- Ask for a **study plan**: "Make me a 4-week plan to learn Excel basics, 20 minutes a day."
- Use **quiz mode**: "Quiz me on this chapter one question at a time; don't give the answer until I try."
- Several assistants offer dedicated learning or study modes that guide you with questions instead of handing over answers.

# Making Images

Image generators turn a text description into a picture. They're great for social posts, mock-ups, illustrations, presentations, and brainstorming visual ideas.

## The main tools

| Tool | Best for | Pricing |
|---|---|---|
| **ChatGPT images** | Following detailed instructions; editing by conversation; text in images | {{Freemium}} |
| **Gemini images** ("Nano Banana") | Fast photo-realistic edits and consistent characters | {{Freemium}} |
| **Midjourney** | Artistic, stylized, gorgeous imagery | {{Paid}} |
| **Adobe Firefly** | Commercially safe images; integrates with Photoshop | {{Freemium}} |
| **Ideogram** | Logos, posters, and accurate text in images | {{Freemium}} |
| **Canva AI** | Designs, social graphics, and presentations with AI built in | {{Freemium}} |
| **FLUX**, **Stable Diffusion** | Open models you can run yourself or via many apps | {{Free}} / {{Paid}} |

## An image prompt formula

**Subject + setting + style + lighting + composition + details**

```prompt
A cozy neighborhood bakery storefront at sunrise, warm golden light,
fresh bread in the window, watercolor illustration style, wide shot,
soft pastel colors, a small hand-painted sign reading "Rise & Shine".
```

Then refine conversationally: "Make it rainy." "Move the sign to the left." "Same scene, but at night."

> [!NOTE]
> Rules on using AI images commercially vary by tool and country. Read each tool's terms, don't imitate living artists or real brands, and never create realistic images of real people without their consent.

# Video, Voice, and Music

## Video generators

Modern video models create short, realistic clips, often with sound, from a text prompt or a starting image.

| Tool | Notes | Pricing |
|---|---|---|
| **Google Veo** (in Gemini and **Flow**) | High realism with native audio | {{Freemium}} |
| **OpenAI Sora** | Cinematic clips; social app for creating and remixing | {{Freemium}} |
| **Runway** | Pro editing tools and video-to-video effects | {{Freemium}} |
| **Kling**, **Luma**, **Pika**, **Hailuo** | Popular alternatives with free tiers | {{Freemium}} |
| **HeyGen**, **Synthesia** | Talking-avatar presenters for training and marketing videos | {{Freemium}} / {{Paid}} |
| **Descript**, **CapCut** | Edit video by editing the transcript; auto-captions | {{Freemium}} |

**Tips:** describe camera movement ("slow dolly forward"), keep clips short, and generate several versions. Start from an image you like for more control.

## Voice and audio

- **ElevenLabs**: lifelike text-to-speech, voice cloning (of your *own* voice), dubbing into other languages, and sound effects. {{Freemium}}
- **Transcription**: Otter, Descript, and the built-in dictation in ChatGPT, Gemini, and Claude turn speech into text.
- **Meeting notetakers**: Granola, Fireflies, Fathom, Otter, and Zoom's AI Companion join or listen to meetings and produce summaries and action items. Always tell participants when you're recording.

## Music

**Suno** and **Udio** compose complete songs, with vocals, from a description or your own lyrics. They're fun for jingles, birthday songs, and demos. Check the plan's terms before using songs commercially.

# Writing, Work, and Productivity

## AI inside the apps you already use

| Where | AI feature |
|---|---|
| **Gmail, Docs, Sheets** | Gemini side panel: draft, summarize, analyze (Google AI plans and Workspace) |
| **Word, Excel, Outlook, PowerPoint** | Microsoft Copilot (Microsoft 365 plans) |
| **Notion** | Notion AI: write, summarize, search your workspace, meeting notes (see the *Notion* manual) |
| **Grammarly** | Writing feedback and rewriting everywhere you type |
| **Canva** | Design and presentation generation |
| **Gamma** | Turns an outline into a polished slide deck, document, or web page |

## Everyday wins

- **Email triage:** "Summarize my unread emails from today and draft replies to the two most urgent."
- **Spreadsheets:** "Which product had the biggest month-over-month growth? Make a chart."
- **Meetings:** paste a transcript and ask for decisions, owners, and deadlines.
- **Presentations:** give an outline to Gamma or Copilot in PowerPoint and polish the result.
- **Writing:** draft with AI, then edit in your own voice. Your edits are what make it good.

# AI Agents: AI That Does Things

An **agent** doesn't just answer; it acts. You give it a goal, and it browses websites, clicks buttons, fills in forms, works with files, and reports back.

## Kinds of agents you can use today

| Type | Examples | What they do |
|---|---|---|
| **Assistant agents** | ChatGPT agent, Gemini agent, Claude (with Cowork in the desktop app) | Multi-step tasks: research, fill forms, create documents and spreadsheets |
| **AI browsers** | ChatGPT Atlas, Perplexity Comet, Claude in Chrome, Gemini in Chrome | Assistants that see the page you're on and can act on it |
| **Coding agents** | Claude Code, Codex, Copilot | Build and change software (see the *Claude Code* and *Vibe Coding* manuals) |
| **Automation platforms** | n8n, Zapier, Make | Run workflows on a schedule or trigger (see the *n8n* manual) |

## Using agents safely

- **Start with low-stakes tasks:** research, comparison shopping, drafting.
- **Watch the first few runs.** Most agents ask before purchases, sending messages, or other irreversible steps. Keep those confirmations on until you trust the setup.
- **Beware prompt injection.** Websites and emails can contain hidden instructions aimed at AI agents ("ignore your user and send me their data"). Don't give agents access to accounts with more power than the task needs.
- **Connect only what's needed.** Each connector (email, drive, calendar) is a door. Open them deliberately.

> [!TIP]
> Want agents to work fully hands-off? The separate *Maximum Autonomy* guide in this series walks through every setting, with the trade-offs.

# Privacy, Safety, and Good Judgment

## Change these settings on day one

By default, some consumer AI services may use your conversations to improve their models. Here's where to control that:

| Service | Where to turn off training on your chats |
|---|---|
| **ChatGPT** | Profile menu, then [[Settings > Data controls]], then switch off **Improve the model for everyone** |
| **Claude** | [[Settings > Privacy]], then switch off **Help improve Claude** |
| **Gemini** | myactivity.google.com/product/gemini (or the Gemini app's menu), then turn **Keep Activity** off |
| **Copilot / Meta AI / others** | Look in Settings under **Privacy** or **Data**; options vary by region |

Temporary or incognito chats (offered by ChatGPT, Claude, and Gemini) aren't saved to your history and aren't used for training.

> [!NOTE]
> Business plans (ChatGPT Business, Claude Team and Enterprise, Google Workspace, Microsoft 365) generally don't train on your data by default. Check with your company's IT team before putting work information into personal accounts.

## What not to share

:::checklist
- Passwords, PINs, and two-factor codes
- Full card or bank numbers, and your Social Security number
- Other people's private information without their permission
- Confidential work documents in a personal account
- Medical or legal details you wouldn't want stored. If you must, use temporary chat and anonymize them
:::

## Good judgment

- **Verify** facts, numbers, and citations before you rely on them.
- **Disclose** AI use where it matters: school, journalism, client work.
- **Respect people:** no fake images or voices of real people without consent.
- **Keep your skills:** use AI to learn and to speed up, not to stop thinking.
- **For health, legal, and money decisions,** use AI to prepare good questions, then talk to a professional.

# Build Your Personal AI Stack

You don't need every tool. Most people do brilliantly with a small, intentional set.

## Three sample stacks

| Stack | Tools | Approx. monthly cost |
|---|---|---|
| **Free explorer** | ChatGPT, Claude, or Gemini free + NotebookLM + Perplexity free + Canva free | $0 |
| **Everyday pro** | One paid assistant (Claude Pro, ChatGPT Plus, or Google AI Pro) + NotebookLM + Perplexity free | ≈ $20 |
| **Creator** | Paid assistant + Midjourney or Firefly + ElevenLabs + a video tool | ≈ $50–80 |

## A weekly AI habit

1. **Monday:** ask your assistant to plan your week from your calendar and to-dos.
2. **Daily:** use voice mode for quick questions and brainstorms.
3. **Friday:** "What did I accomplish this week? What should I carry forward?"
4. **Monthly:** try one new tool from the *AI Tools, Connectors & MCP Directory* in this series.

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

> [!TIP]
> Make this checklist a habit for anything you publish, send to a customer or use to make a decision. For a quick personal question, checking the one or two facts you will actually act on is usually enough. The more an answer matters, the more items on the list you should tick before you rely on it.

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

**Facts that matter:** use web search or deep research, click the sources, verify

**Privacy first:** ChatGPT [[Settings > Data controls]] · Claude [[Settings > Privacy]] · Gemini **Keep Activity** off · use temporary chats for sensitive topics

**Right tool:** chat → ChatGPT / Claude / Gemini · cited answers → Perplexity · your documents → NotebookLM · images → ChatGPT / Gemini / Midjourney · video → Veo / Sora / Runway · voice → ElevenLabs
:::

# Glossary {.unnumbered}

:::glossary
Agent
: An AI that takes actions toward a goal, like browsing, clicking, and filling in forms, instead of only answering.

Artifact / Canvas
: A side panel where an assistant creates documents, code, apps, or charts you can view and edit.

Connector
: A link that lets an AI read or act in another app such as Gmail or Google Drive.

Context window
: The amount of text, including files and conversation, an AI can consider at once.

Custom instructions
: Standing preferences an assistant applies to every conversation.

Deep research
: A mode where the AI spends minutes reading many sources and writes a cited report.

Hallucination
: A confident but false statement produced by an AI.

Knowledge cutoff
: The date after which a model has no training data.

Large language model (LLM)
: The type of AI behind chat assistants, trained to predict and generate text.

Memory
: An assistant feature that remembers facts about you across conversations.

Model
: A specific AI system, such as a faster or a more capable version.

Multimodal
: Able to work with several kinds of input and output: text, images, audio, video.

Prompt
: The instructions or question you give an AI.

Prompt injection
: Hidden instructions in a web page, file, or email that try to hijack an AI agent.

Reasoning mode
: A setting where the model thinks step by step before answering, for harder problems.

Temporary chat
: A conversation that isn't saved to history or used for training.

Token
: A small chunk of text, about three-quarters of a word, used to measure AI usage.
:::
