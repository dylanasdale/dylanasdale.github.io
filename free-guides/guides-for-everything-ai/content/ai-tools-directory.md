---
title: AI Tools, Connectors & MCP Directory
title_html: AI Tools, Connectors <span class="soft">&amp;</span> MCP Directory
subtitle: More than 1,500 AI tools, connectors, and MCP servers, sorted into 23 categories, each with a plain-English description and a price label
volume: 9
edition_label: Claude Edition
edition_note: "Expanded edition written by Claude (Anthropic's AI) in Claude Code and published in GuidesForEverything PR #4."
toc_compact: true
edition: October 2026
kicker: A Field Guide
audience: For curious beginners and power users
accent: "#5B4BDB"
accent2: "#2BB3A3"
motif: orbits
chapter_break: false
blurb: |
  This directory is a map of the AI landscape as it stands in October 2026: chat assistants, coding and vibe-coding tools, image, video, audio, writing, research, productivity, business, automation, agents, developer infrastructure, connectors, and MCP servers.

  Every entry has a one-line description and a **price label**, so you can scan a category, spot what fits, and try it the same afternoon.
disclaimer: Price labels and product details were checked against vendors' sites and public information in October 2026. The AI market changes weekly. Products get renamed, acquired, re-priced, or shut down, so always confirm on the vendor's site before you buy. Inclusion is not an endorsement.
---

# How to Use This Directory {.unnumbered}

## The three price labels

| Label | Meaning |
|---|---|
| {{Free}} | Free to use. Often open source. There may be optional donations, self-hosting costs, or paid cloud versions, but the core product costs nothing |
| {{Freemium}} | A genuinely useful free tier or free plan, with paid upgrades for more usage or features |
| {{Paid}} | Requires a paid plan (sometimes after a short free trial) |

For **connectors** and **MCP servers**, the label reflects what it costs *you* to use, including the service it connects to. An open-source server for a paid service is labeled by the service.

## Tips for exploring

- **Start with the free tier.** Most tools let you try before you pay.
- **One tool per job.** Pick a favorite in each category rather than subscribing to everything.
- **Check privacy settings** before uploading personal or work data.
- **Watch for bundles.** Many AI features now come inside things you already pay for (Google, Microsoft, Notion, Adobe, Canva).

> [!TIP]
> New to a category? The other manuals in this series explain how to use the main tools: *Everyday AI Tools*, *Vibe Coding*, *Claude Code*, *MCP*, *n8n*, and *Notion*.


## How to read this directory

Each chapter covers one kind of job, such as making images or answering customer emails. Inside each chapter, small tables list the tools. Every row has three parts:

| Part | What it tells you |
|---|---|
| **Name** (maker) | The product, with the company behind it in brackets when the name alone is unclear |
| What it does | One plain-English line about the main job it is good at |
| Price label | Whether you can start for free (see the labels above) |

A few words come up again and again. Here they are in plain English (the Glossary at the back has more):

- **Model**: the "brain" behind an AI tool. Several apps can use the same model.
- **Open source** or **open-weight**: the code or the model itself is published, so anyone can download and run it.
- **Local**: runs on your own computer instead of on a company's servers. Private, but needs a capable machine.
- **API**: a way for programs (not people) to use a service. API tools are for developers and usually charge per use.
- **Agent**: an AI that can take several steps on its own, such as browsing, clicking, and filling in forms.
- **Connector** and **MCP server**: plug-ins that let an assistant read and act in your other apps.

:::steps Find the right tool in five minutes
1. **Name the job.** Write one sentence: "I want to turn my meeting recordings into notes."
2. **Open the matching chapter.** Use the table of contents or the category index at the back.
3. **Shortlist two or three.** Prefer {{Free}} or {{Freemium}} rows so you can test before paying.
4. **Try the same task in each.** Use one real example, not a toy one, and compare results.
5. **Check privacy and price.** Read the vendor's pricing page and data policy before you upload anything personal.
6. **Keep one, drop the rest.** Cancel trials you will not use, so you are not charged later.
:::

> [!NOTE]
> "Free" rarely means unlimited. Free tiers usually cap how much you can use per day or month, add watermarks, or keep the newest models for paying users.

## Quick picks for beginners

Not sure where to start? These are safe first choices in the most common categories.

:::compact
| If you want to… | Start with | Price |
|---|---|---|
| Ask questions and write | ChatGPT, Claude, or Gemini | {{Freemium}} |
| Research with sources | Perplexity or Gemini Notebook | {{Freemium}} |
| Make an image | ChatGPT Images or Gemini | {{Freemium}} |
| Make a short video | Google Veo (Flow) or Kling | {{Freemium}} |
| Transcribe a meeting | Otter or Fathom | {{Freemium}} |
| Build a simple app | Lovable or Bolt | {{Freemium}} |
| Automate a chore | Zapier or n8n | {{Freemium}} |
| Run AI privately offline | LM Studio or Ollama | {{Free}} |
| Connect AI to your apps | Your assistant's connector directory | {{Free}} |
:::

> [!CAUTION]
> Never paste passwords, bank details, medical records, or confidential work files into a tool you have not checked. When in doubt, use your employer's approved tools.

# Chat Assistants

General-purpose AI you talk to: ask questions, write, analyze files, brainstorm, and more.

:::compact
| Tool | What it does | Price |
|---|---|---|
| **ChatGPT** (OpenAI) | The most popular assistant: chat, images, voice, agents, apps, deep research | {{Freemium}} |
| **Claude** (Anthropic) | Thoughtful writing and reasoning, long documents, Artifacts, desktop agent (formerly Cowork), connectors | {{Freemium}} |
| **Gemini** (Google) | Google's assistant, built into Android, Gmail, Docs, and Search; image and video generation | {{Freemium}} |
| **Microsoft Copilot** | Microsoft's assistant in Windows, Edge, and Microsoft 365 apps | {{Freemium}} |
| **Meta AI** | Free assistant inside WhatsApp, Instagram, Messenger, and Ray-Ban Meta glasses | {{Free}} |
| **Grok** (xAI) | Assistant with real-time X data; bundled with X and Cursor in "The X Subscription" | {{Freemium}} |
| **Perplexity** | Answer engine with cited web sources; Comet AI browser | {{Freemium}} |
| **Vibe** (Mistral, formerly Le Chat) | Fast European assistant with web search, documents, and agents | {{Freemium}} |
| **DeepSeek** | Strong free reasoning models from China | {{Free}} |
| **Qwen Chat** (Alibaba) | Alibaba's assistant with open-weight models | {{Free}} |
| **Kimi** (Moonshot AI) | Long-context assistant and research agent | {{Freemium}} |
| **Duck.ai** (DuckDuckGo) | Private, anonymous access to several chat models | {{Freemium}} |
| **Poe** (Quora) | One app to chat with many different models and custom bots | {{Freemium}} |
| **HuggingChat** | Chat with open-source models from Hugging Face | {{Free}} |
| **Pi** (Inflection) | Friendly, conversational personal assistant | {{Free}} |
| **Character.AI** | Chat with user-created characters for fun and role-play | {{Freemium}} |
| **Venice** | Privacy-focused, uncensored chat and images | {{Freemium}} |
| **T3 Chat**, **TypingMind** | Fast multi-model chat apps for power users | {{Freemium}} |
| **LibreChat**, **Open WebUI** | Self-hosted, open-source ChatGPT-style interfaces | {{Free}} |
| **Apple Intelligence** | Writing tools, Siri, and image features built into Apple devices | {{Free}} |
| **Samsung Galaxy AI** | Translation, photo editing, and summaries on Galaxy phones | {{Free}} |
:::

## More assistants from around the world

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Doubao** (ByteDance) | China's most-used consumer chat assistant | {{Free}} |
| **Yuanbao** (Tencent) | Tencent's assistant, linked to WeChat content | {{Free}} |
| **ERNIE** (Baidu) | Baidu's assistant and model family | {{Free}} |
| **Z.ai Chat** (Zhipu) | Chat with the open GLM models | {{Freemium}} |
| **MiniMax Agent** | Assistant and agent from MiniMax | {{Freemium}} |
| **Lumo** (Proton) | Privacy-first assistant that keeps no chat logs | {{Freemium}} |
| **Brave Leo** | Assistant built into the Brave browser | {{Freemium}} |
| **Kagi Assistant** | Multi-model chat included with Kagi search plans | {{Paid}} |
| **Alexa+** (Amazon) | Upgraded voice assistant on Echo devices; included with Prime | {{Paid}} |
| **Siri** (Apple) | Apple's voice assistant, with optional ChatGPT help | {{Free}} |
| **Abacus.AI ChatLLM** | Many top models in one low-cost subscription | {{Paid}} |
| **Mammouth** | Several leading models for one monthly price | {{Paid}} |
| **Cohere North** | Secure workplace assistant for enterprises | {{Paid}} |
:::

## Browser sidebars and helper extensions

These add an AI panel to your web browser, so you can summarize a page or draft a reply without switching tabs.

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Monica** | Sidebar chat, page summaries, and writing help | {{Freemium}} |
| **Sider** | Sidebar with many models, PDF chat, and translation | {{Freemium}} |
| **Merlin** | Summarize pages, YouTube videos, and emails | {{Freemium}} |
| **HARPA AI** | Page-aware assistant with web automations | {{Freemium}} |
| **MaxAI** | One-click AI on any page or text box | {{Freemium}} |
| **ChatHub** | Compare answers from several chatbots side by side | {{Freemium}} |
| **Glasp** | Highlight the web and get AI summaries | {{Free}} |
:::

## Desktop and self-hosted chat apps

**Self-hosted** means you install it yourself, on your computer or your own server, and plug in a model or an API key.

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Msty** | Desktop app for local and online models, side by side | {{Freemium}} |
| **AnythingLLM** | Chat with your documents locally; all-in-one desktop app | {{Free}} |
| **Chatbox AI** | Cross-platform chat client for many providers | {{Freemium}} |
| **Cherry Studio** | Desktop client for many models and assistants | {{Free}} |
| **LobeChat** (LobeHub) | Open-source chat interface with plugins | {{Freemium}} |
| **BoltAI** | Native Mac chat app with many providers | {{Paid}} |
| **big-AGI** | Power-user web chat with multi-model "beam" answers | {{Free}} |
| **Khoj** | Open-source personal assistant over your notes | {{Freemium}} |
| **SillyTavern** | Open-source front end for role-play and characters | {{Free}} |
:::

## Companion apps

Companion apps are built for friendly, ongoing conversation rather than work. Use them thoughtfully, and talk to a real person if you are struggling.

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Replika** | Long-running AI friend with memory | {{Freemium}} |
| **Nomi** | Companions with memory and voice | {{Paid}} |
| **Kindroid** | Customizable companions with voice calls | {{Freemium}} |
| **Talkie** | Chat with community-made characters | {{Freemium}} |
| **Chai** | Social app for chatting with bots | {{Freemium}} |
:::

> [!TIP]
> Try the same question in two assistants. You quickly learn which one "thinks" the way you like, and that matters more than any benchmark.

```prompt
I'm new to AI assistants. Ask me five quick questions about how I work,
then suggest three everyday tasks you could help me with this week.
```

# Coding and Vibe Coding

## AI code editors

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Cursor** | Most popular AI-first editor (VS Code-based) with agents, tab completion, cloud agents | {{Freemium}} |
| **VS Code + GitHub Copilot** | Microsoft's free editor with Copilot chat, agents, and completions | {{Freemium}} |
| **Devin Desktop** (formerly Windsurf) | Cognition's AI editor with an agentic assistant | {{Freemium}} |
| **Google Antigravity** | Google's agent-first development environment | {{Freemium}} |
| **Kiro** (AWS) | Spec-driven AI IDE: plans requirements before writing code | {{Freemium}} |
| **Zed** | Very fast, open-source editor with built-in AI agents | {{Freemium}} |
| **JetBrains AI** + **Junie** | AI assistant and coding agent inside IntelliJ, PyCharm, and others | {{Freemium}} |
| **Trae** (ByteDance) | AI IDE with chat and builder modes | {{Freemium}} |
| **Void** | Open-source Cursor alternative | {{Free}} |
| **Xcode Intelligence** | Apple's coding assistant built into Xcode | {{Free}} |
:::

## Coding agents

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Claude Code** | Anthropic's agent for terminal, desktop, IDE, web, and Slack | {{Paid}} |
| **OpenAI Codex** | OpenAI's agent for terminal, IDE, app, and cloud; included in ChatGPT plans | {{Paid}} |
| **Gemini CLI** | Google's open-source terminal agent with a generous free tier | {{Freemium}} |
| **Jules** (Google) | Asynchronous cloud coding agent working on your GitHub repos | {{Freemium}} |
| **GitHub Copilot coding agent** | Assign an issue to Copilot and get a pull request | {{Paid}} |
| **Copilot CLI** | GitHub Copilot's terminal agent | {{Freemium}} |
| **Devin** (Cognition) | Autonomous cloud software engineer | {{Paid}} |
| **Amp** | Agentic coding tool for terminal and editors | {{Freemium}} |
| **Cline** | Open-source agent extension for VS Code; bring your own model | {{Free}} |
| **Roo Code**, **Kilo Code** | Open-source agent extensions with custom modes | {{Free}} |
| **Continue** | Open-source assistant and agents for VS Code and JetBrains | {{Free}} |
| **Aider** | Open-source pair programmer in your terminal, Git-aware | {{Free}} |
| **OpenHands** | Open-source autonomous coding agent platform | {{Free}} |
| **Goose** (Block) | Open-source, extensible local AI agent | {{Free}} |
| **opencode** | Open-source terminal coding agent for any model | {{Free}} |
| **Warp** | Terminal with built-in AI agents | {{Freemium}} |
| **Factory** | "Droids" that automate software tasks across the dev lifecycle | {{Paid}} |
| **Tabnine** | Privacy-focused completions and chat; self-hostable | {{Paid}} |
| **Amazon Q Developer** | AWS's coding assistant and agent | {{Freemium}} |
:::

## App builders (vibe coding)

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Lovable** | Full-stack web apps from a prompt, with backend and GitHub sync | {{Freemium}} |
| **Bolt** (StackBlitz) | Web and mobile apps built and run in the browser | {{Freemium}} |
| **v0** (Vercel) | Polished interfaces and apps, one-click deploy to Vercel | {{Freemium}} |
| **Replit** | Cloud IDE whose Agent builds, hosts, and deploys apps | {{Paid}} |
| **Base44** (Wix) | All-in-one apps with database, auth, and hosting | {{Freemium}} |
| **Google AI Studio (Build)** | Prompt-to-app with Gemini and Firebase backends | {{Free}} |
| **GitHub Spark** | Build and share micro-apps from natural language | {{Paid}} |
| **Create / Anything** | Prompt-to-app builder for web and mobile | {{Freemium}} |
| **Rork** | AI builder for native mobile apps | {{Freemium}} |
| **Bubble AI** | No-code platform with AI app generation | {{Freemium}} |
| **Softr**, **Glide** | AI-assisted business apps on top of spreadsheets and databases | {{Freemium}} |
| **Framer AI** | Generate and publish marketing websites | {{Freemium}} |
| **Durable**, **10Web** | AI website builders for small businesses | {{Freemium}} |
| **Webflow AI** | AI site generation and assistance inside Webflow | {{Freemium}} |
| **Wix AI website builder** | Conversational website creation | {{Freemium}} |
:::

## Code review, testing, and quality

:::compact
| Tool | What it does | Price |
|---|---|---|
| **CodeRabbit** | AI pull request reviews with line-by-line comments | {{Freemium}} |
| **Greptile** | Codebase-aware AI code review | {{Paid}} |
| **Qodo** | Code review and test generation | {{Freemium}} |
| **Graphite** | Stacked pull requests with AI review | {{Freemium}} |
| **Cursor Bugbot** | Automatic bug-finding reviews on pull requests | {{Paid}} |
| **Claude Code Review** / **Ultrareview** | Anthropic's multi-agent code review | {{Paid}} |
| **Copilot code review** | GitHub's built-in AI PR reviewer | {{Paid}} |
| **Snyk** (DeepCode AI) | Security scanning with AI fixes | {{Freemium}} |
| **Sourcery** | Code review and refactoring suggestions | {{Freemium}} |
| **QA Wolf**, **Momentic** | AI-driven end-to-end testing | {{Paid}} |
:::

## Design to code

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Figma Make** | Turn prompts and designs into working prototypes inside Figma | {{Freemium}} |
| **Claude Design** | Draft UI mockups, flows, and landing pages as artifacts | {{Paid}} |
| **Builder.io (Fusion)** | Visual AI development connected to your codebase | {{Freemium}} |
| **Locofy**, **Anima** | Convert Figma designs to front-end code | {{Freemium}} |
| **Uizard** | Turn sketches and screenshots into UI designs | {{Freemium}} |
| **Galileo / Stitch** (Google) | Generate UI designs from text prompts | {{Free}} |
:::

## More coding agents and terminal tools

A **terminal agent** works in the text window where developers type commands. You describe a change; it reads your files, edits them, and runs tests.

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Cursor CLI** | Cursor's agent in the terminal | {{Freemium}} |
| **Qwen Code** | Open-source terminal agent tuned for Qwen models | {{Free}} |
| **Crush** (Charm) | Stylish open-source terminal agent for any model | {{Free}} |
| **Droid** (Factory) | Factory's agent in terminal and IDE | {{Paid}} |
| **Augment Code** | Context-aware agent for large codebases; Auggie CLI | {{Paid}} |
| **Rovo Dev** (Atlassian) | Coding agent tied to Jira and Bitbucket | {{Paid}} |
| **GitLab Duo** | AI chat, review, and agents inside GitLab | {{Paid}} |
| **Gemini Code Assist** | Google's IDE assistant; free for individuals | {{Freemium}} |
| **Mistral Vibe** | Mistral's terminal coding agent | {{Freemium}} |
| **Plandex** | Open-source agent for big multi-file tasks | {{Free}} |
| **SWE-agent** | Research agent that fixes GitHub issues | {{Free}} |
| **Refact.ai** | Open-source agent; self-hostable | {{Freemium}} |
| **Tabby** | Self-hosted open-source code completion server | {{Free}} |
| **CodeGeeX** | Free multilingual code assistant | {{Free}} |
| **Pieces** | Saves snippets and context with an on-device copilot | {{Freemium}} |
| **Sourcegraph** | Code search across huge codebases with AI answers | {{Paid}} |
:::

## IDE extensions

An **IDE** (integrated development environment) is the app programmers write code in. An **extension** adds features to it.

:::compact
| Extension | Works in | Price |
|---|---|---|
| **Claude Code for VS Code / JetBrains** | VS Code, Cursor, JetBrains IDEs | {{Paid}} |
| **Codex IDE extension** | VS Code, Cursor, Windsurf | {{Paid}} |
| **GitHub Copilot** | VS Code, Visual Studio, JetBrains, Xcode, Eclipse | {{Freemium}} |
| **Gemini Code Assist** | VS Code, JetBrains, Android Studio | {{Freemium}} |
| **Amazon Q Developer** | VS Code, JetBrains, Visual Studio | {{Freemium}} |
| **Cline**, **Roo Code**, **Kilo Code** | VS Code and forks | {{Free}} |
| **Continue** | VS Code, JetBrains | {{Free}} |
| **Tabnine** | Most major IDEs | {{Paid}} |
| **Qodo Gen** | VS Code, JetBrains | {{Freemium}} |
| **Gemini in Android Studio** | Android Studio | {{Free}} |
| **Copilot for Xcode** | Xcode | {{Freemium}} |
:::

## More app builders

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Emergent** | Agent that builds and deploys full-stack apps | {{Freemium}} |
| **Mocha** | No-code app builder with database and auth included | {{Freemium}} |
| **Dyad** | Free, open-source, local Lovable-style builder | {{Free}} |
| **Chef** (Convex) | Builds full-stack apps on a Convex backend | {{Freemium}} |
| **Hostinger Horizons** | Prompt-to-web-app with hosting included | {{Paid}} |
| **Databutton** | AI developer for business apps | {{Paid}} |
| **FlutterFlow** | Visual mobile app builder with AI generation | {{Freemium}} |
| **Adalo**, **Thunkable** | No-code mobile apps with AI helpers | {{Freemium}} |
| **AppSheet** (Google) | No-code apps from spreadsheets with Gemini | {{Freemium}} |
| **Power Apps** (Microsoft) | Business apps with Copilot | {{Paid}} |
| **Retool** | Internal tools and AI apps on your data | {{Freemium}} |
| **Appsmith**, **Budibase** | Open-source internal-tool builders | {{Freemium}} |
| **Claude Artifacts** | Small apps and pages made right in chat | {{Freemium}} |
| **ChatGPT Canvas** | Write and run code side by side in ChatGPT | {{Freemium}} |
| **Gemini Canvas** | Build and preview apps inside Gemini | {{Freemium}} |
| **Websim** | Generate and share playful web pages | {{Freemium}} |
:::

## Website builders with AI

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Squarespace Blueprint AI** | Guided AI site setup | {{Paid}} |
| **GoDaddy Airo** | AI site, logo, and marketing help | {{Freemium}} |
| **Hostinger AI Website Builder** | Site from a short description | {{Paid}} |
| **Shopify Magic / Sidekick** | AI store setup and assistant for merchants | {{Paid}} |
| **Relume** | AI sitemaps and wireframes for web designers | {{Freemium}} |
| **B12** | AI websites for professional services | {{Freemium}} |
| **Unicorn Platform** | Landing pages for startups | {{Freemium}} |
:::

## Docs, testing, and security for code

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Mintlify** | Developer docs sites with an AI assistant | {{Freemium}} |
| **GitBook** | Product docs with AI search | {{Freemium}} |
| **DeepWiki** (Cognition) | Auto-written wiki for any public GitHub repo | {{Free}} |
| **Swimm** | Code documentation kept in sync | {{Paid}} |
| **Bito** | AI code review in Git and IDEs | {{Freemium}} |
| **Testim**, **mabl** | AI-assisted test automation | {{Paid}} |
| **Applitools** | Visual AI testing | {{Freemium}} |
| **Diffblue** | Writes Java unit tests automatically | {{Freemium}} |
| **Semgrep** | Code scanning with an AI assistant | {{Freemium}} |
| **Socket** | Catches risky open-source packages | {{Freemium}} |
| **GitHub Copilot Autofix** | Suggests fixes for security alerts | {{Paid}} |
| **SonarQube** | Code quality with AI CodeFix | {{Freemium}} |
:::

> [!TIP]
> New to coding? Start with an app builder such as Lovable or Bolt. Move to an editor like Cursor or an agent like Claude Code once you want to own and change the code yourself.

# Images and Graphic Design

:::compact
| Tool | What it does | Price |
|---|---|---|
| **ChatGPT Images** | Detailed, instruction-following images and edits in chat | {{Freemium}} |
| **Gemini / Nano Banana** | Google's fast image generation and conversational photo editing | {{Freemium}} |
| **Midjourney** | Artistic, highly aesthetic images; also video | {{Paid}} |
| **Adobe Firefly** | Commercially safe generation; Photoshop Generative Fill | {{Freemium}} |
| **Ideogram** | Images with accurate text: logos, posters, social graphics | {{Freemium}} |
| **Leonardo.ai** | Image and video generation with fine control, for creators and games | {{Freemium}} |
| **Krea** | Real-time generation, enhancement, and many models in one place | {{Freemium}} |
| **Recraft** | Vector graphics, icons, and brand-consistent illustrations | {{Freemium}} |
| **FLUX** (Black Forest Labs) | High-quality open and pro image models | {{Freemium}} |
| **Stable Diffusion** (Stability AI) | Open image models you can run locally | {{Free}} |
| **Reve** | Image model with strong prompt adherence | {{Freemium}} |
| **Seedream** (ByteDance) | High-resolution image generation and editing | {{Freemium}} |
| **Qwen-Image** | Open-weight image generation and editing | {{Free}} |
| **Microsoft Designer / Bing Image Creator** | Free image generation from Microsoft | {{Free}} |
| **Canva AI** (Magic Studio) | AI design, image generation, and editing in Canva | {{Freemium}} |
| **Freepik AI Suite** | Image, video, and upscaling tools in one subscription | {{Freemium}} |
| **Photoroom** | Product photos, background removal, and edits | {{Freemium}} |
| **remove.bg** | One-click background removal | {{Freemium}} |
| **Magnific** | Creative upscaling and enhancement | {{Paid}} |
| **Topaz Photo** | Professional AI upscaling, denoise, and sharpening | {{Paid}} |
| **Clipdrop** | Quick image tools: relight, clean up, upscale | {{Freemium}} |
| **Looka**, **Brandmark** | AI logo and brand kit generators | {{Paid}} |
| **Lensa**, **Remini** | Photo enhancement and AI portraits on mobile | {{Freemium}} |
| **ComfyUI** | Node-based open-source interface for image and video models | {{Free}} |
| **Automatic1111 / Forge** | Popular local Stable Diffusion interfaces | {{Free}} |
:::

## More image generators

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Meta AI Imagine** | Free image generation in Meta's apps | {{Free}} |
| **Image Playground** (Apple) | Playful images and Genmoji on Apple devices | {{Free}} |
| **Playground** | Design-focused generator for graphics and social posts | {{Freemium}} |
| **NightCafe** | Community generator with many models and daily credits | {{Freemium}} |
| **OpenArt** | Many models, character consistency, and workflows | {{Freemium}} |
| **SeaArt**, **Tensor.Art** | Community image platforms with shared models | {{Freemium}} |
| **Civitai** | Hub for community Stable Diffusion and FLUX models | {{Freemium}} |
| **Dzine** | Image design tool with layers and style control | {{Freemium}} |
| **Getimg.ai** | Generation, editing, and custom models | {{Freemium}} |
| **ImagineArt** | Image and video generator for creators | {{Freemium}} |
| **Artbreeder** | Blend and evolve images and portraits | {{Freemium}} |
| **Craiyon** | Simple, free image generator | {{Freemium}} |
| **Kaiber** | Creative canvas for images, video, and music visuals | {{Paid}} |
| **Luma Photon** | Luma's image model | {{Freemium}} |
| **Higgsfield Soul** | Fashion-grade, realistic photo generation | {{Freemium}} |
| **Getty Images Generative AI** | Commercially safe images from licensed content | {{Paid}} |
| **Shutterstock AI** | Generate licensable stock images | {{Paid}} |
| **Adobe Stock** generative | Generate and license stock inside Adobe | {{Paid}} |
| **HiDream**, **HunyuanImage** | Open-weight image models | {{Free}} |
:::

## Photo editing and enhancement

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Adobe Photoshop** | Generative Fill, Expand, and Remove in the pro editor | {{Paid}} |
| **Adobe Lightroom** | AI masking, denoise, and distraction removal | {{Paid}} |
| **Google Photos Magic Editor** | Move, erase, and reimagine parts of a photo | {{Free}} |
| **Snapseed** (Google) | Free mobile photo editor | {{Free}} |
| **Luminar Neo** | Desktop editor with one-click AI tools | {{Paid}} |
| **Pixlr** | Browser photo editor with AI tools | {{Freemium}} |
| **Fotor** | Quick online editing and AI effects | {{Freemium}} |
| **Picsart** | Mobile and web editor with AI tools | {{Freemium}} |
| **Pixelcut** | Product photos and background removal | {{Freemium}} |
| **PicWish** | Background removal and photo restoration | {{Freemium}} |
| **Cleanup.pictures** | Remove objects and people from photos | {{Freemium}} |
| **Upscayl** | Free open-source image upscaler | {{Free}} |
| **Let's Enhance** | Upscale and improve image quality | {{Freemium}} |
| **Vectorizer.AI** | Turn pixel images into clean vector files | {{Paid}} |
| **FaceApp** | Face filters and edits on mobile | {{Freemium}} |
| **Aragon AI**, **HeadshotPro** | Professional headshots from selfies | {{Paid}} |
:::

## Design, diagrams, and visuals

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Figma AI** | Generate, rename, and search designs in Figma | {{Freemium}} |
| **Adobe Express** | Quick designs with Firefly built in | {{Freemium}} |
| **Kittl** | Graphic design for merch, logos, and posters | {{Freemium}} |
| **Visme** | Infographics, reports, and presentations | {{Freemium}} |
| **Piktochart** | Infographics from text | {{Freemium}} |
| **Venngage** | Infographics and reports with AI | {{Freemium}} |
| **Napkin AI** | Turns text into diagrams and visuals | {{Freemium}} |
| **Whimsical** | Flowcharts, mind maps, and wireframes with AI | {{Freemium}} |
| **Miro AI** | AI on a collaborative whiteboard | {{Freemium}} |
| **Lucid** (Lucidchart) | Diagrams generated from prompts | {{Freemium}} |
| **Eraser** | Technical diagrams from text or code | {{Freemium}} |
| **Mermaid Chart** | Diagram-as-code with an AI helper | {{Freemium}} |
| **Excalidraw** | Hand-drawn style whiteboard; text to diagram | {{Freemium}} |
| **tldraw** | Infinite canvas with "make real" AI demos | {{Freemium}} |
| **draw.io** | Free diagramming app | {{Free}} |
| **Visily** | Wireframes and UI from screenshots | {{Freemium}} |
| **Motiff** | AI-powered interface design tool | {{Freemium}} |
| **Penpot** | Open-source design and prototyping | {{Free}} |
| **Khroma**, **Coolors** | AI color palette generators | {{Freemium}} |
:::

## Worlds, 3D models, and game assets

**3D generation** turns a prompt or a photo into a model you can spin around, print, or drop into a game.

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Meshy** | Text and image to textured 3D models | {{Freemium}} |
| **Tripo** | Fast 3D models from images and prompts | {{Freemium}} |
| **Rodin** (Hyper3D) | High-detail 3D asset generation | {{Freemium}} |
| **Hunyuan3D** (Tencent) | Open-weight image-to-3D models | {{Free}} |
| **TRELLIS** (Microsoft) | Open-source 3D asset generation | {{Free}} |
| **Spline** | Web 3D design with AI generation | {{Freemium}} |
| **Sloyd** | Game-ready 3D props from presets | {{Freemium}} |
| **Kaedim** | Production 3D assets for studios | {{Paid}} |
| **World Labs Marble** | Explorable 3D worlds from text or images | {{Freemium}} |
| **Skybox AI** (Blockade Labs) | 360° environments from prompts | {{Freemium}} |
| **Polycam** | 3D scans and Gaussian splats with your phone | {{Freemium}} |
| **Scaniverse** | Free phone 3D scanning | {{Free}} |
| **KIRI Engine** | Photo-to-3D scanning app | {{Freemium}} |
| **Autodesk Flow Studio** | Swap actors for CG characters (formerly Wonder Studio) | {{Freemium}} |
| **Move.ai** | Markerless motion capture from video | {{Freemium}} |
| **Rokoko Vision** | Free AI motion capture from a webcam | {{Free}} |
| **DeepMotion** | Turn videos into 3D animation | {{Freemium}} |
| **Cascadeur** | AI-assisted character animation | {{Freemium}} |
| **Scenario** | Consistent game art trained on your style | {{Freemium}} |
| **Unity AI** | AI assistant and generators in the Unity editor | {{Paid}} |
| **Roblox Assistant** | AI help for building Roblox experiences | {{Free}} |
| **Inworld AI** | Voices and characters for games and apps | {{Freemium}} |
:::

> [!IMPORTANT]
> Check the license before using AI images commercially. Some free tiers forbid commercial use, and some models were trained on data that makes their output risky for brand work. Adobe Firefly and Getty are designed for commercial safety.

# Video

## Video generation

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Google Veo** (Gemini, **Flow**) | Realistic video with native sound; Flow is Google's filmmaking tool | {{Freemium}} |
| **Runway** | Video generation plus pro editing and effects | {{Freemium}} |
| **Kling** (Kuaishou) | High-quality text- and image-to-video | {{Freemium}} |
| **Luma Dream Machine / Ray** | Fast, fluid video generation | {{Freemium}} |
| **Pika** | Playful video effects and generation | {{Freemium}} |
| **Hailuo** (MiniMax) | Expressive text-to-video | {{Freemium}} |
| **Seedance** (ByteDance) | Multi-shot video generation | {{Freemium}} |
| **Wan** (Alibaba) | Open-weight video models | {{Free}} |
| **LTX Studio** | Storyboard-to-video production | {{Freemium}} |
| **Higgsfield** | Camera-move presets and cinematic effects | {{Freemium}} |
| **Grok Imagine** | xAI's image and video generator | {{Freemium}} |
| **Midjourney Video** | Animate Midjourney images | {{Paid}} |
:::

## Avatars, presenters, and dubbing

:::compact
| Tool | What it does | Price |
|---|---|---|
| **HeyGen** | Talking avatars, video translation, and lip-sync | {{Freemium}} |
| **Synthesia** | Avatar presenters for training and corporate video | {{Freemium}} |
| **D-ID** | Animate photos into talking presenters | {{Freemium}} |
| **Captions** | Talking-head editing, AI captions, and dubbing | {{Freemium}} |
| **Rask AI** | Video translation and voice dubbing | {{Freemium}} |
:::

## Editing and repurposing

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Descript** | Edit video and audio by editing the transcript | {{Freemium}} |
| **CapCut** | Free editor with AI captions, effects, and templates | {{Freemium}} |
| **OpusClip** | Turns long videos into viral short clips | {{Freemium}} |
| **Veed** | Online editor with subtitles, avatars, and AI tools | {{Freemium}} |
| **Kapwing** | Collaborative online editor with AI features | {{Freemium}} |
| **InVideo AI** | Script-to-video with stock footage and voiceover | {{Freemium}} |
| **Pictory** | Turn articles and scripts into videos | {{Paid}} |
| **Adobe Premiere (Generative Extend)** | AI features in Adobe's pro editor | {{Paid}} |
| **DaVinci Resolve (Neural Engine)** | Pro editor with AI masking, voice isolation, and more | {{Freemium}} |
| **Topaz Video** | AI upscaling and frame interpolation | {{Paid}} |
:::

## More video generators

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Adobe Firefly Video** | Commercially safe video clips and extensions | {{Freemium}} |
| **Vidu** (Shengshu) | Fast text- and image-to-video with reference control | {{Freemium}} |
| **PixVerse** | Quick effects and stylized clips | {{Freemium}} |
| **Hedra** | Expressive talking characters from a photo and audio | {{Freemium}} |
| **Viggle** | Make characters dance and move from a template video | {{Freemium}} |
| **Moonvalley Marey** | Video model trained on licensed footage | {{Paid}} |
| **Krea Video** | Many video models in one interface | {{Freemium}} |
| **Pollo AI** | Access many video models in one place | {{Freemium}} |
| **Domo AI** | Turn videos into anime and other styles | {{Freemium}} |
| **LTX-2** (Lightricks) | Open-weight video model with audio | {{Free}} |
| **HunyuanVideo** (Tencent) | Open-weight video model | {{Free}} |
| **Mochi** (Genmo) | Open-source video model | {{Free}} |
:::

## More avatars and explainer video

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Colossyan** | Training videos with avatars and quizzes | {{Paid}} |
| **Elai** | Presenter videos from text or slides | {{Freemium}} |
| **DeepBrain AI Studios** | Realistic avatars for news and training | {{Freemium}} |
| **Tavus** | Personalized avatar video and real-time video agents | {{Freemium}} |
| **Argil** | Your own avatar for social-media clips | {{Paid}} |
| **Arcads** | AI actors for user-style video ads | {{Paid}} |
| **Creatify** | Product-link-to-video ads | {{Freemium}} |
| **Vidnoz** | Free avatars and templates | {{Freemium}} |
| **Fliki** | Text to video with voiceovers | {{Freemium}} |
| **Lumen5** | Blog posts into social videos | {{Freemium}} |
| **Steve AI**, **Animaker** | Animated explainer videos | {{Freemium}} |
:::

## More editing, clipping, and screen recording

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Submagic** | Animated captions and short-form edits | {{Paid}} |
| **Klap** | Turn long videos into TikToks and Shorts | {{Paid}} |
| **Vizard** | Clip, caption, and schedule short videos | {{Freemium}} |
| **Gling** | Removes silences and bad takes for YouTubers | {{Freemium}} |
| **Wisecut** | Automatic cuts, music, and subtitles | {{Freemium}} |
| **FireCut** | AI editing plugin for Premiere | {{Paid}} |
| **AutoPod** | Automatic multicam podcast edits in Premiere | {{Paid}} |
| **Wondershare Filmora** | Easy editor with AI tools | {{Freemium}} |
| **Clipchamp** (Microsoft) | Browser editor with auto-captions | {{Freemium}} |
| **Adobe Express video** | Quick social videos with Firefly | {{Freemium}} |
| **Canva Video** | Template-based video with Magic tools | {{Freemium}} |
| **Loom** (Atlassian) | Screen recordings with AI titles and summaries | {{Freemium}} |
| **Tella** | Polished screen recordings | {{Paid}} |
| **Camtasia** | Screen recording and editing with AI | {{Paid}} |
| **Scribe**, **Tango** | Turn clicks into step-by-step guides | {{Freemium}} |
| **Flowframes** | Free frame interpolation for smooth slow-motion | {{Free}} |
:::

## Dubbing and subtitles

:::compact
| Tool | What it does | Price |
|---|---|---|
| **ElevenLabs Dubbing** | Translate video while keeping the speaker's voice | {{Freemium}} |
| **YouTube auto-dubbing** | Automatic dubbed audio tracks for creators | {{Free}} |
| **CAMB.AI** | Voice-preserving dubbing in many languages | {{Freemium}} |
| **Dubverse** | Quick AI dubbing and subtitles | {{Freemium}} |
| **Maestra** | Transcription, subtitles, and voiceover | {{Freemium}} |
| **Deepdub** | Studio-grade dubbing for media companies | {{Paid}} |
| **Subtitle Edit** | Free subtitle editor with Whisper transcription | {{Free}} |
:::

> [!WARNING]
> Only clone or animate a real person's face or voice with their clear permission. Many platforms ban impersonation, and some places have laws against it.

# Audio, Voice, and Music

## Voice and speech

:::compact
| Tool | What it does | Price |
|---|---|---|
| **ElevenLabs** | Lifelike text-to-speech, voice cloning, dubbing, sound effects, music, voice agents | {{Freemium}} |
| **OpenAI voice** (ChatGPT, API) | Natural voice conversations and text-to-speech | {{Freemium}} |
| **Cartesia** | Ultra-low-latency voices for real-time agents | {{Freemium}} |
| **Hume** | Emotionally expressive voice AI | {{Freemium}} |
| **Murf** | Studio voiceovers for videos and presentations | {{Freemium}} |
| **WellSaid** | Professional voiceover for teams | {{Paid}} |
| **Resemble AI** | Voice cloning with deepfake detection | {{Paid}} |
| **Speechify** | Listen to any text read aloud | {{Freemium}} |
| **NaturalReader** | Text-to-speech reader for documents | {{Freemium}} |
:::

## Transcription and meetings

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Otter** | Live transcription and meeting notes | {{Freemium}} |
| **Granola** | AI notepad that enhances your own meeting notes | {{Freemium}} |
| **Fireflies** | Meeting recorder with searchable transcripts and CRM sync | {{Freemium}} |
| **Fathom** | Free meeting recorder with instant summaries | {{Freemium}} |
| **tl;dv**, **Read AI** | Meeting notes, highlights, and analytics | {{Freemium}} |
| **Zoom AI Companion** | Summaries and action items in Zoom | {{Paid}} |
| **Microsoft Teams Copilot / Google Meet Gemini** | Built-in meeting recaps | {{Paid}} |
| **Rev** | Human and AI transcription and captions | {{Freemium}} |
| **Notta** | Multilingual transcription | {{Freemium}} |
| **MacWhisper**, **Superwhisper**, **Wispr Flow** | Fast dictation and transcription on your computer | {{Freemium}} |
| **Whisper** (OpenAI) | Open-source speech recognition model | {{Free}} |
:::

## Music and audio production

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Suno** | Full songs with vocals from a prompt or your lyrics | {{Freemium}} |
| **Udio** | Song generation and remixing | {{Freemium}} |
| **ElevenLabs Music** | Commercially licensed AI music | {{Freemium}} |
| **Stable Audio** | Music and sound effect generation | {{Freemium}} |
| **AIVA** | Composes instrumental music in many styles | {{Freemium}} |
| **Soundraw**, **Mubert** | Royalty-free background music generators | {{Freemium}} |
| **Moises**, **LALAL.AI** | Separate vocals and instruments, AI mastering | {{Freemium}} |
| **Adobe Podcast** | Make recordings sound studio-quality | {{Freemium}} |
| **Krisp** | Noise cancellation and meeting notes | {{Freemium}} |
| **Riverside**, **Podcastle** | Record and edit podcasts with AI tools | {{Freemium}} |
| **Auphonic** | Automatic audio leveling and cleanup | {{Freemium}} |
:::

## More voices and speech tools

**Text-to-speech** (TTS) reads text aloud. **Speech-to-text** (STT) writes down what is said. **Voice cloning** copies a voice from a short sample.

:::compact
| Tool | What it does | Price |
|---|---|---|
| **ElevenReader** | Listen to articles, PDFs, and books in natural voices | {{Freemium}} |
| **LOVO** (Genny) | Voiceover and video editor | {{Freemium}} |
| **Listnr** | Voiceovers and podcasts from text | {{Freemium}} |
| **Narakeet** | Turn slides and scripts into narrated video | {{Paid}} |
| **Fish Audio** | Voice cloning and TTS with a big voice library | {{Freemium}} |
| **Respeecher** | Studio voice conversion for film and games | {{Paid}} |
| **Voicemod** | Real-time voice changer for streaming and calls | {{Freemium}} |
| **Kokoro**, **Piper** | Small, free open-source TTS voices | {{Free}} |
| **Chatterbox** (Resemble) | Open-source TTS with voice cloning | {{Free}} |
| **Azure AI Speech** | Microsoft's TTS and STT for developers | {{Freemium}} |
| **Google Cloud Text-to-Speech** | Google's voices via API | {{Freemium}} |
| **Amazon Polly** | AWS text-to-speech | {{Freemium}} |
:::

## Speech-to-text APIs

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Deepgram** | Fast transcription and voice-agent APIs | {{Freemium}} |
| **AssemblyAI** | Accurate transcription with speech understanding | {{Freemium}} |
| **Speechmatics** | Transcription in many languages and accents | {{Freemium}} |
| **Gladia** | Real-time multilingual transcription API | {{Freemium}} |
| **Soniox** | Low-latency multilingual STT | {{Paid}} |
| **Rev AI** | Developer API from Rev | {{Paid}} |
:::

## More transcription and meeting notes

:::compact
| Tool | What it does | Price |
|---|---|---|
| **MeetGeek** | Meeting recordings, notes, and highlights | {{Freemium}} |
| **Supernormal** | Notes and follow-ups for Meet, Zoom, and Teams | {{Freemium}} |
| **Tactiq** | Live transcripts in Google Meet, Zoom, and Teams | {{Freemium}} |
| **Circleback** | Detailed notes and action items, CRM sync | {{Paid}} |
| **Fellow** | Meeting agendas, notes, and recordings | {{Freemium}} |
| **Avoma** | Notes and conversation intelligence for sales | {{Paid}} |
| **Sembly** | Notes and insights across meetings | {{Freemium}} |
| **Jamie** | Bot-free meeting notes on your device | {{Freemium}} |
| **Bluedot** | Bot-free recorder as a browser extension | {{Freemium}} |
| **Grain** | Recordings and clips for customer teams | {{Freemium}} |
| **Claap** | Video wiki and meeting recorder | {{Freemium}} |
| **Spinach AI** | Meeting assistant that updates your tools | {{Freemium}} |
| **Noota** | Meeting notes for recruiting and sales | {{Freemium}} |
| **Notion AI Meeting Notes** | Transcribe and summarize inside Notion | {{Paid}} |
| **Google Meet "Take notes for me"** | Gemini notes saved to Docs | {{Paid}} |
| **Webex AI Assistant** | Summaries and translation in Webex | {{Paid}} |
| **Plaud Note** | Pocket recorder with AI summaries | {{Paid}} |
| **Happy Scribe** | Transcripts and subtitles in many languages | {{Freemium}} |
| **Sonix**, **Trint** | Transcription for journalists and media | {{Paid}} |
:::

## More music and sound

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Lyria** / **MusicFX DJ** (Google) | Google's music models and live music mixing | {{Free}} |
| **Beatoven.ai** | Royalty-free background music by mood | {{Freemium}} |
| **Loudly** | AI music for creators and brands | {{Freemium}} |
| **Soundful** | Royalty-free tracks for creators | {{Freemium}} |
| **Boomy** | Make songs and release them to streaming | {{Freemium}} |
| **Producer.ai** (Riffusion) | Chat-based song creation | {{Freemium}} |
| **ACE Studio** | AI singing voices for music producers | {{Paid}} |
| **Synthesizer V** | Realistic singing voice synthesis | {{Paid}} |
| **Kits.ai** | AI voice models for musicians | {{Freemium}} |
| **LANDR** | AI mastering and music tools | {{Paid}} |
| **iZotope Ozone** | Assisted mixing and mastering plugins | {{Paid}} |
| **BandLab** | Free studio with AI mastering and SongStarter | {{Free}} |
| **Splice** | Sample library with AI search and Create | {{Paid}} |
| **Demucs**, **Ultimate Vocal Remover** | Free, open-source stem separation | {{Free}} |
| **NVIDIA Broadcast** | Free noise removal for RTX graphics cards | {{Free}} |
| **Wondercraft** | AI podcasts and audio ads | {{Freemium}} |
| **Castmagic** | Show notes and posts from podcast audio | {{Paid}} |
| **Cleanvoice** | Removes filler words and mouth sounds | {{Freemium}} |
:::

> [!TIP]
> For podcasts, a cheap microphone in a quiet room plus Adobe Podcast or Auphonic beats an expensive mic in an echoey room.

# Writing and Content

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Grammarly** | Grammar, tone, and AI rewriting everywhere you type | {{Freemium}} |
| **QuillBot** | Paraphrasing, grammar checking, and summarizing | {{Freemium}} |
| **Wordtune** | Rewrites sentences in different tones | {{Freemium}} |
| **ProWritingAid** | In-depth style and grammar reports | {{Freemium}} |
| **Hemingway Editor** | Makes writing bold and clear; AI rewrites | {{Freemium}} |
| **Jasper** | Brand-voice marketing content for teams | {{Paid}} |
| **Copy.ai** | Go-to-market content and workflows | {{Freemium}} |
| **Writesonic** | SEO articles and AI-search visibility | {{Freemium}} |
| **Rytr** | Budget-friendly short-form copy | {{Freemium}} |
| **Sudowrite** | Fiction-writing partner for novelists | {{Paid}} |
| **NovelAI** | Story writing and anime-style images | {{Paid}} |
| **Lex** | AI-native word processor for writers | {{Freemium}} |
| **Surfer SEO**, **Clearscope**, **Frase** | Optimize content to rank in search | {{Paid}} |
| **DeepL Write** / **DeepL Translator** | High-quality translation and rewriting | {{Freemium}} |
| **Google Translate** | Free translation with AI-powered conversation mode | {{Free}} |
:::

## More writing assistants

:::compact
| Tool | What it does | Price |
|---|---|---|
| **LanguageTool** | Grammar and style checker for many languages | {{Freemium}} |
| **Writer** | Enterprise writing platform with its own models | {{Paid}} |
| **Anyword** | Marketing copy with performance predictions | {{Paid}} |
| **Hypotenuse AI** | Product descriptions and e-commerce content | {{Paid}} |
| **Simplified** | Copy, design, and social scheduling in one | {{Freemium}} |
| **Koala AI** | Long SEO blog posts | {{Paid}} |
| **Squibler** | Book and script writing assistant | {{Freemium}} |
| **Novelcrafter** | Plan and write novels with AI help | {{Paid}} |
| **Jenni AI** | Academic writing with citations | {{Freemium}} |
| **Paperpal** | Language help for researchers | {{Freemium}} |
| **Writefull** | Academic English feedback | {{Freemium}} |
| **Trinka** | Grammar for academic and technical writing | {{Freemium}} |
| **Text Blaze** | Snippets and AI templates you type with shortcuts | {{Freemium}} |
| **Magical** | Text expander and form-filling AI | {{Freemium}} |
:::

## Translation and localization

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Microsoft Translator** | Free text, voice, and conversation translation | {{Free}} |
| **Papago** (Naver) | Strong Korean, Japanese, and Chinese translation | {{Free}} |
| **Reverso** | Translations with examples in context | {{Freemium}} |
| **Lara Translate** | Context-aware translation with explanations | {{Freemium}} |
| **Smartcat** | Translation platform for teams | {{Freemium}} |
| **Phrase** | Localization platform with AI translation | {{Paid}} |
| **Lokalise** | App and website localization | {{Paid}} |
| **Crowdin** | Localization with AI pre-translation | {{Freemium}} |
| **Weglot** | Translate a website in minutes | {{Freemium}} |
:::

## AI-text detectors

Detectors guess whether text was written by AI. They are often wrong, so never treat a score as proof.

:::compact
| Tool | What it does | Price |
|---|---|---|
| **GPTZero** | AI detection for teachers and writers | {{Freemium}} |
| **Originality.ai** | AI and plagiarism checks for publishers | {{Paid}} |
| **Copyleaks** | AI and plagiarism detection | {{Freemium}} |
| **Pangram** | AI-text detection with low false positives | {{Freemium}} |
| **Turnitin** | Plagiarism and AI checks for schools | {{Paid}} |
:::

```prompt
Here is my draft. Keep my voice. Fix grammar, cut repetition, and list
the three biggest changes you made and why.
```

# Research, Search, and Learning

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Perplexity** | Cited answers, deep research, finance, and shopping | {{Freemium}} |
| **Gemini Notebook** (formerly NotebookLM) | AI grounded in your sources: audio and video overviews, quizzes | {{Freemium}} |
| **Google AI Mode** | Conversational answers in Google Search | {{Free}} |
| **ChatGPT / Claude / Gemini Deep Research** | Long, cited research reports | {{Freemium}} |
| **Kagi** | Ad-free search with an AI assistant | {{Paid}} |
| **You.com** | AI search and research agents | {{Freemium}} |
| **Elicit** | Finds and summarizes academic papers; extracts data | {{Freemium}} |
| **Consensus** | Answers questions from peer-reviewed research | {{Freemium}} |
| **Scite** | Shows how papers have been cited: supporting or contrasting | {{Paid}} |
| **Semantic Scholar** | Free AI-powered academic search | {{Free}} |
| **SciSpace** | Read and understand papers with an AI copilot | {{Freemium}} |
| **Research Rabbit**, **Connected Papers** | Visual maps of related research | {{Freemium}} |
| **Undermind** | Deep scientific literature search agent | {{Freemium}} |
| **Exa**, **Tavily** | AI-native search engines and APIs for agents | {{Freemium}} |
| **Khanmigo** (Khan Academy) | AI tutor for students and teachers | {{Freemium}} |
| **Duolingo Max** | AI conversation practice in language learning | {{Paid}} |
| **Quizlet AI** | Flashcards and study guides from your notes | {{Freemium}} |
| **Coursera Coach** | AI learning assistant inside courses | {{Freemium}} |
:::

## More search engines and answer tools

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Microsoft Copilot Search** (Bing) | AI answers with sources in Bing | {{Free}} |
| **Brave Search** | Independent search with AI answers | {{Free}} |
| **Liner** | Research assistant with reliable sources | {{Freemium}} |
| **Felo** | Multilingual AI search and slides | {{Freemium}} |
| **Andi** | Ad-free conversational search | {{Free}} |
| **iAsk** | Free AI search engine | {{Freemium}} |
| **WolframAlpha** | Computes answers in math, science, and data | {{Freemium}} |
| **Arc Search** | Mobile browser that builds a page of answers | {{Free}} |
| **Morphic** | Open-source AI answer engine | {{Free}} |
:::

## More tools for academic research

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Google Scholar** | Free search across academic papers | {{Free}} |
| **Ai2 Asta** | Free AI research assistant for scientific literature | {{Free}} |
| **alphaXiv** | Discuss and get AI explanations of arXiv papers | {{Free}} |
| **Scholarcy** | Summary flashcards for papers | {{Freemium}} |
| **Litmaps** | Citation maps and alerts | {{Freemium}} |
| **Inciteful** | Free citation network explorer | {{Free}} |
| **Keenious** | Finds papers related to what you are writing | {{Freemium}} |
| **Iris.ai** | Research workspace for R&D teams | {{Paid}} |
| **Zotero** | Free reference manager with AI plugins | {{Free}} |
| **Readwise Reader** | Read-later app with an AI helper | {{Paid}} |
| **Recall** | Summarize anything into a knowledge base | {{Freemium}} |
| **Statista AI** | Ask questions of Statista's statistics | {{Paid}} |
:::

> [!TIP]
> Always click through to the source. AI search tools can misread a page or cite something that does not say what they claim.

# Education and Learning

AI tutors explain things at your pace, quiz you, and practice languages with you. The best ones ask you questions instead of just giving answers.

## Tutors and study tools

:::compact
| Tool | What it does | Price |
|---|---|---|
| **ChatGPT study mode** | Step-by-step tutoring instead of straight answers | {{Freemium}} |
| **Claude learning mode** | Guides you to work things out yourself | {{Freemium}} |
| **Gemini Guided Learning** | Gemini as a patient tutor | {{Freemium}} |
| **Gemini Notebook** | Study guides, quizzes, and audio from your notes | {{Freemium}} |
| **Khanmigo** | Khan Academy's tutor; free for teachers | {{Freemium}} |
| **Photomath** | Step-by-step math help from a photo | {{Freemium}} |
| **Google Lens** | Point your camera at homework for help | {{Free}} |
| **Gauth** | Photo homework help across subjects | {{Freemium}} |
| **Brainly** | Homework answers and AI explanations | {{Freemium}} |
| **Mathway**, **Symbolab** | Math solvers with steps | {{Freemium}} |
| **Knowt** | Free flashcards and quizzes from notes | {{Freemium}} |
| **StudyFetch** | Turns course material into an AI tutor | {{Freemium}} |
| **RemNote** | Notes and spaced-repetition flashcards | {{Freemium}} |
| **Anki** | Free flashcard app; AI add-ons available | {{Free}} |
| **Coursera** | Courses with an AI coach and dialogues | {{Freemium}} |
| **Codecademy** | Coding lessons with AI help | {{Freemium}} |
| **Synthesis Tutor** | AI math tutor for kids | {{Paid}} |
:::

## Language learning

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Duolingo** | Bite-size lessons; Max adds AI video calls | {{Freemium}} |
| **Speak** | Speaking practice with an AI tutor | {{Paid}} |
| **Praktika** | AI avatar tutors for conversation | {{Freemium}} |
| **ELSA Speak** | English pronunciation coach | {{Freemium}} |
| **Babbel** | Lessons with AI speaking practice | {{Paid}} |
| **Memrise** | Vocabulary with AI conversation | {{Freemium}} |
| **Talkpal** | Chat and talk with an AI language partner | {{Freemium}} |
:::

## For teachers

:::compact
| Tool | What it does | Price |
|---|---|---|
| **MagicSchool** | 80+ AI tools for lesson plans and feedback | {{Freemium}} |
| **Brisk Teaching** | Chrome extension for feedback and resources | {{Freemium}} |
| **Diffit** | Adapts any text to different reading levels | {{Freemium}} |
| **Eduaide** | Lesson and activity generator | {{Freemium}} |
| **Curipod** | Interactive lessons from a topic | {{Freemium}} |
| **SchoolAI** | Safe AI spaces for students | {{Freemium}} |
| **Wayground** (formerly Quizizz) | Quizzes and lessons with AI | {{Freemium}} |
| **Kahoot!** | Game quizzes with an AI question generator | {{Freemium}} |
| **Gradescope** | AI-assisted grading | {{Paid}} |
| **Gemini for Education** | Gemini in Google Workspace for schools | {{Free}} |
| **ChatGPT Edu**, **Claude for Education** | Campus-wide AI plans | {{Paid}} |
:::

```prompt
Teach me the basics of compound interest. Explain one idea at a time,
then ask me a question to check I understood before moving on.
```

:::checklist
- I asked the tutor to quiz me, not just explain
- I checked important facts against a textbook or teacher
- I know my school's rules on using AI for assignments
:::

# Health and Wellbeing

AI health tools can explain test results, track habits, and take notes for doctors. They do not replace a professional.

> [!CAUTION]
> Nothing in this chapter is medical advice. In an emergency, call your local emergency number. Ask a doctor before acting on anything an AI tells you about your health.

## For everyone

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Ada** | Symptom checker that suggests next steps | {{Free}} |
| **K Health** | AI-assisted chat with real doctors | {{Paid}} |
| **Wysa** | Self-help conversations for stress and mood | {{Freemium}} |
| **Youper** | Mood tracking and guided self-help | {{Freemium}} |
| **WHOOP Coach** | AI coaching from your WHOOP data | {{Paid}} |
| **Oura Advisor** | AI insights from your Oura ring | {{Paid}} |
| **Strava Athlete Intelligence** | Plain-English summaries of workouts | {{Paid}} |
| **Fitbod** | AI strength-training plans | {{Paid}} |
| **Cal AI** | Count calories from a photo of your meal | {{Paid}} |
| **MyFitnessPal** | Food logging with meal scan | {{Freemium}} |
:::

## For clinicians

**Ambient scribes** listen to a consultation (with consent) and draft the clinical note.

:::compact
| Tool | What it does | Price |
|---|---|---|
| **OpenEvidence** | Medical answers from journals; free for professionals | {{Free}} |
| **Doximity GPT** | Clinical writing help for US clinicians | {{Free}} |
| **Glass Health** | Diagnosis and plan drafting for clinicians | {{Freemium}} |
| **UpToDate Expert AI** | AI answers from UpToDate content | {{Paid}} |
| **Abridge** | Ambient clinical notes for health systems | {{Paid}} |
| **Microsoft Dragon Copilot** | Ambient notes (formerly DAX Copilot) | {{Paid}} |
| **Heidi Health** | AI scribe for clinicians | {{Freemium}} |
| **Freed** | AI scribe for small practices | {{Paid}} |
| **Nabla**, **Suki**, **Ambience** | Ambient documentation assistants | {{Paid}} |
:::

# Productivity and Office

## Workspaces and notes

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Notion AI** | Writing, search, meeting notes, and agents in Notion | {{Freemium}} |
| **Microsoft 365 Copilot** | AI in Word, Excel, PowerPoint, Outlook, and Teams | {{Paid}} |
| **Gemini in Google Workspace** | AI in Gmail, Docs, Sheets, Slides, and Meet | {{Paid}} |
| **Coda AI** | AI inside docs-meet-apps | {{Freemium}} |
| **ClickUp Brain** | AI across tasks, docs, and chat | {{Paid}} |
| **Obsidian** (+ AI plugins) | Local Markdown notes; community AI plugins | {{Free}} |
| **Mem** | Self-organizing AI notes | {{Freemium}} |
| **Reflect** | Networked notes with AI and transcription | {{Paid}} |
| **Craft** | Beautiful documents with an AI assistant | {{Freemium}} |
| **Evernote AI** | Search and AI edit in Evernote | {{Freemium}} |
| **Raycast AI** | Mac launcher with AI chat and commands | {{Freemium}} |
:::

## Email, calendar, and tasks

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Superhuman** | Fast email with AI drafting and triage | {{Paid}} |
| **Shortwave** | AI-first Gmail client | {{Freemium}} |
| **Spark** | Smart inbox with AI writing | {{Freemium}} |
| **Notion Mail / Calendar** | AI email and calendar connected to Notion | {{Free}} |
| **Motion** | AI that plans your calendar and tasks automatically | {{Paid}} |
| **Reclaim** | Smart scheduling for habits, tasks, and meetings | {{Freemium}} |
| **Todoist AI**, **TickTick** | To-do apps with AI task breakdowns | {{Freemium}} |
| **Asana AI**, **monday AI** | AI in project management platforms | {{Paid}} |
:::

## Presentations, spreadsheets, and documents

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Gamma** | Decks, documents, and web pages from a prompt | {{Freemium}} |
| **Beautiful.ai** | Smart slide templates that format themselves | {{Paid}} |
| **Pitch** | Collaborative decks with AI generation | {{Freemium}} |
| **Canva Presentations** | Design-first slides with Magic Design | {{Freemium}} |
| **Claude / ChatGPT file creation** | Create Excel, Word, and PowerPoint files from chat | {{Freemium}} |
| **Excel Copilot / Agent Mode** | AI formulas, analysis, and charts in Excel | {{Paid}} |
| **Rows** | Spreadsheet with built-in AI analyst | {{Freemium}} |
| **Julius AI** | Chat with your data; charts and analysis | {{Freemium}} |
| **ChatPDF**, **Humata** | Ask questions about PDFs | {{Freemium}} |
| **Adobe Acrobat AI Assistant** | Summaries and Q&A in PDFs | {{Paid}} |
:::

## More notes and knowledge tools

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Tana** | Outliner notes with AI and meeting capture | {{Freemium}} |
| **Capacities** | Object-based notes with an AI assistant | {{Freemium}} |
| **Heptabase** | Visual whiteboards for research notes | {{Paid}} |
| **Logseq** | Free, open-source outliner; AI plugins | {{Free}} |
| **Saner.ai** | AI notes and to-dos for scattered minds | {{Freemium}} |
| **Microsoft Loop** | Collaborative pages with Copilot | {{Freemium}} |
| **Google Keep** | Quick notes with Gemini help | {{Free}} |
| **Apple Notes** | Notes with Apple Intelligence writing tools | {{Free}} |
| **Taskade** | Tasks, docs, and AI agents in one | {{Freemium}} |
| **Mapify** | Mind maps from documents and videos | {{Freemium}} |
| **Xmind**, **MindMeister** | Mind mapping with AI | {{Freemium}} |
| **Screenpipe** | Open-source, searchable record of your screen | {{Freemium}} |
| **Glean** | AI search across all your work apps | {{Paid}} |
| **Guru** | Company knowledge base with AI answers | {{Paid}} |
:::

## More email tools

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Gmail with Gemini** | Summaries, smart replies, and drafting | {{Freemium}} |
| **Outlook with Copilot** | Drafts, summaries, and coaching | {{Paid}} |
| **Fyxer AI** | Sorts your inbox and drafts replies in your voice | {{Paid}} |
| **Canary Mail** | Secure email with an AI copilot | {{Freemium}} |
| **Missive** | Shared team inbox with AI | {{Paid}} |
| **SaneBox** | Filters unimportant mail automatically | {{Paid}} |
| **Mailbutler** | Assistant for Gmail, Outlook, and Apple Mail | {{Freemium}} |
| **Inbox Zero** | Open-source AI email assistant | {{Freemium}} |
:::

## Calendar and scheduling

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Calendly** | Booking links with AI scheduling help | {{Freemium}} |
| **Cal.com** | Open-source scheduling | {{Freemium}} |
| **Akiflow** | Tasks and calendar in one place | {{Paid}} |
| **Sunsama** | Calm daily planner | {{Paid}} |
| **Morgen** | Calendar with an AI planner | {{Freemium}} |
| **Vimcal** | Fast calendar for busy people | {{Paid}} |
| **Dola** | AI calendar assistant in your messaging apps | {{Free}} |
| **Howie** | Email-based AI scheduling assistant | {{Paid}} |
| **Google Calendar** | Gemini can create and find events | {{Free}} |
:::

## Project and work management

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Linear** | Issue tracking with AI triage and agents | {{Freemium}} |
| **Jira with Rovo** | Atlassian's AI across Jira and Confluence | {{Freemium}} |
| **Trello** | Boards with Atlassian AI | {{Freemium}} |
| **Wrike** | Project management with AI | {{Paid}} |
| **Smartsheet** | Spreadsheet-style projects with AI | {{Paid}} |
| **Airtable** | Databases with AI fields and app building | {{Freemium}} |
| **Slack AI** | Summaries, search answers, and recaps | {{Paid}} |
| **Zoom Workplace** | Docs, chat, and AI Companion | {{Freemium}} |
:::

## More presentations

:::compact
| Tool | What it does | Price |
|---|---|---|
| **PowerPoint Copilot** | Draft and redesign decks in PowerPoint | {{Paid}} |
| **Google Slides with Gemini** | Generate slides and images | {{Paid}} |
| **Prezi AI** | Zooming presentations from a prompt | {{Freemium}} |
| **Plus AI** | AI slides inside Google Slides and PowerPoint | {{Paid}} |
| **Decktopus** | Quick decks from a topic | {{Freemium}} |
| **SlidesAI** | Text to slides in Google Slides | {{Freemium}} |
| **Presentations.AI** | Brand-aware deck generator | {{Freemium}} |
| **MagicSlides** | Slides from text, PDFs, or videos | {{Freemium}} |
| **Skywork** | Agent that makes slides, docs, and sheets | {{Freemium}} |
| **Storydoc** | Interactive scrolling decks | {{Paid}} |
:::

## Spreadsheets and data analysis

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Google Sheets with Gemini** | Formulas, tables, and the AI function | {{Paid}} |
| **Quadratic** | AI spreadsheet with Python and SQL | {{Freemium}} |
| **GPT for Sheets and Docs** | Run AI on thousands of cells | {{Freemium}} |
| **Formula Bot** | Formulas and analysis from plain English | {{Freemium}} |
| **Ajelix** | Excel and Sheets AI helpers | {{Freemium}} |
| **Hex** | Data notebooks with AI | {{Freemium}} |
| **Deepnote** | Collaborative data notebooks with AI | {{Freemium}} |
| **Power BI Copilot** | AI reports in Microsoft Power BI | {{Paid}} |
| **Tableau Agent** | AI analysis in Tableau | {{Paid}} |
| **Looker with Gemini** | Conversational analytics on Google Cloud | {{Paid}} |
| **ThoughtSpot Spotter** | Ask questions of business data | {{Paid}} |
| **Databricks AI/BI Genie** | Chat with your lakehouse data | {{Paid}} |
| **Metabase** | Open-source BI with an AI helper | {{Freemium}} |
| **Zoho Analytics** | BI with the Zia assistant | {{Freemium}} |
:::

## PDFs and document processing

**OCR** (optical character recognition) turns pictures of text, such as scans, into real text.

:::compact
| Tool | What it does | Price |
|---|---|---|
| **PDF.ai** | Chat with PDFs | {{Freemium}} |
| **Smallpdf** | PDF tools with an AI summarizer | {{Freemium}} |
| **UPDF** | PDF editor with AI chat | {{Paid}} |
| **PDFelement** | PDF editor with AI | {{Paid}} |
| **Foxit PDF Editor** | PDF editing with AI assistant | {{Paid}} |
| **PopAi** | Chat with documents and make slides | {{Freemium}} |
| **Docling** (IBM) | Open-source document-to-Markdown converter | {{Free}} |
| **Marker**, **MinerU** | Open-source PDF-to-text tools | {{Free}} |
| **LlamaParse** | Document parsing for AI apps | {{Freemium}} |
| **Unstructured** | Prepares documents for AI pipelines | {{Freemium}} |
| **Reducto** | Accurate parsing of complex documents | {{Paid}} |
| **Mistral OCR** | OCR API from Mistral | {{Paid}} |
| **Azure Document Intelligence** | Extract fields from forms and invoices | {{Freemium}} |
| **Google Document AI** | Document extraction on Google Cloud | {{Paid}} |
| **Amazon Textract** | AWS document text extraction | {{Paid}} |
| **Nanonets** | Invoice and document automation | {{Freemium}} |
| **Parseur** | Pull data out of emails and PDFs | {{Freemium}} |
| **PandaDoc** | Proposals and contracts with AI | {{Paid}} |
:::

:::checklist
- I picked one notes app and one task app, not five
- I turned on AI features only where my data is allowed to go
- I tried AI summaries on a real meeting or document this week
:::

# Business and Work

:::compact
| Tool | What it does | Price |
|---|---|---|
| **HubSpot Breeze** | AI agents and assistants across HubSpot CRM | {{Freemium}} |
| **Salesforce Agentforce** | Autonomous agents in Salesforce | {{Paid}} |
| **Clay** | Data enrichment and AI research for outbound sales | {{Freemium}} |
| **Apollo** | Prospect database with AI email writing | {{Freemium}} |
| **Gong** | Revenue intelligence from sales calls | {{Paid}} |
| **Lavender** | AI email coach for sales | {{Freemium}} |
| **Intercom Fin** | AI customer-service agent | {{Paid}} |
| **Zendesk AI** | AI agents and copilot for support teams | {{Paid}} |
| **Decagon**, **Sierra** | Enterprise customer-experience AI agents | {{Paid}} |
| **Tidio Lyro** | AI chatbot for small online stores | {{Freemium}} |
| **Harvey** | AI for law firms and legal teams | {{Paid}} |
| **Spellbook** | Contract drafting and review in Word | {{Paid}} |
| **CoCounsel** (Thomson Reuters) | Legal research and document review | {{Paid}} |
| **Ramp**, **Brex** | Finance platforms with AI expense and accounting agents | {{Freemium}} |
| **QuickBooks Intuit Assist** | AI bookkeeping help for small businesses | {{Paid}} |
| **Rogo**, **Hebbia** | AI research for finance professionals | {{Paid}} |
| **AdCreative.ai** | Generate ad creatives and copy | {{Paid}} |
| **Semrush AI**, **Ahrefs AI** | SEO and AI-search visibility tools | {{Paid}} |
| **Eightfold**, **Paradox** | AI recruiting and hiring | {{Paid}} |
| **Textio** | Inclusive job posts and feedback | {{Paid}} |
:::

# Sales and CRM

A **CRM** (customer relationship management) system is where a business keeps track of customers, deals, and conversations. AI sales tools find leads, write outreach, and take call notes.

## CRMs with AI

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Attio** | Flexible AI-native CRM | {{Freemium}} |
| **Pipedrive** | Deal pipeline with an AI sales assistant | {{Paid}} |
| **Zoho CRM** | CRM with the Zia assistant | {{Freemium}} |
| **Freshsales** | CRM with Freddy AI | {{Freemium}} |
| **Close** | CRM for calling and email-heavy teams | {{Paid}} |
| **folk** | Lightweight CRM for relationships | {{Paid}} |
| **monday CRM** | Sales CRM on monday.com | {{Paid}} |
| **Microsoft Dynamics 365 Sales** | Enterprise CRM with Copilot | {{Paid}} |
:::

## Prospecting and data

**Enrichment** means filling in missing details about a contact or company, such as job title or company size.

:::compact
| Tool | What it does | Price |
|---|---|---|
| **ZoomInfo Copilot** | Company and contact data with AI insights | {{Paid}} |
| **Lusha** | Contact data and prospecting | {{Freemium}} |
| **Cognism** | B2B contact data with phone numbers | {{Paid}} |
| **Seamless.AI** | Searchable contact database | {{Freemium}} |
| **Explorium** | Company and people data for agents | {{Freemium}} |
| **Common Room** | Buying signals from communities and the web | {{Freemium}} |
| **Persana** | AI prospecting and enrichment | {{Freemium}} |
| **Unify** | Signal-based outbound | {{Paid}} |
| **Warmly** | Identifies website visitors and engages them | {{Freemium}} |
| **RB2B** | Names the people visiting your site (US) | {{Freemium}} |
| **Crystal** | Personality insights for selling | {{Freemium}} |
:::

## Outreach, calls, and coaching

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Outreach** | Sales engagement with AI agents | {{Paid}} |
| **Salesloft** | Cadences and deal management | {{Paid}} |
| **Clari** | Forecasting and revenue intelligence | {{Paid}} |
| **Instantly** | Cold email at scale with AI | {{Paid}} |
| **Smartlead** | Cold email infrastructure | {{Paid}} |
| **lemlist** | Personalized multichannel outreach | {{Paid}} |
| **Reply.io** | Outreach with an AI SDR | {{Paid}} |
| **Amplemarket** | AI sales copilot and data | {{Paid}} |
| **Regie.ai** | AI prospecting agents and content | {{Paid}} |
| **11x** | AI "digital workers" for sales | {{Paid}} |
| **Artisan** | AI BDR named Ava | {{Paid}} |
| **Nooks**, **Orum** | AI-assisted parallel dialing | {{Paid}} |
| **Momentum** | Captures call insights into the CRM | {{Paid}} |
| **Attention** | Call notes and CRM updates | {{Paid}} |
| **Hyperbound**, **Second Nature** | Practice sales calls with AI buyers | {{Paid}} |
| **Highspot**, **Seismic** | Sales content and enablement with AI | {{Paid}} |
:::

# Marketing and SEO

**SEO** (search engine optimization) helps your pages show up in search. **GEO** or AEO (generative or answer engine optimization) is the newer job of showing up in AI answers.

## SEO and AI visibility

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Similarweb** | Website traffic and AI-search insights | {{Freemium}} |
| **Moz** | SEO toolkit with AI features | {{Freemium}} |
| **SE Ranking** | Rank tracking and AI-search tracking | {{Paid}} |
| **Ubersuggest** | Budget keyword research | {{Freemium}} |
| **AnswerThePublic**, **AlsoAsked** | Questions people search for | {{Freemium}} |
| **Screaming Frog** | Website crawler for SEO audits | {{Freemium}} |
| **MarketMuse** | Content planning and briefs | {{Freemium}} |
| **NeuronWriter** | Content optimization for search | {{Paid}} |
| **Search Atlas** | SEO platform with automation | {{Paid}} |
| **Profound** | Tracks how AI assistants mention your brand | {{Paid}} |
| **Peec AI** | AI-search visibility analytics | {{Paid}} |
| **Otterly.AI** | Monitors brand mentions in AI answers | {{Paid}} |
| **Scrunch AI** | Optimizes brands for AI search | {{Paid}} |
| **AthenaHQ** | Generative engine optimization | {{Paid}} |
:::

## Social media and content

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Buffer** | Scheduling with an AI assistant | {{Freemium}} |
| **Hootsuite** | Social management with OwlyWriter AI | {{Paid}} |
| **Later** | Instagram and TikTok scheduling with AI captions | {{Paid}} |
| **Sprout Social** | Social suite with AI listening | {{Paid}} |
| **Metricool** | Scheduling and analytics | {{Freemium}} |
| **Publer** | Social scheduler with AI assist | {{Freemium}} |
| **Postiz** | Open-source social scheduler with AI | {{Freemium}} |
| **Predis.ai** | Social posts and ads from a prompt | {{Freemium}} |
| **Typefully** | Write and schedule threads | {{Freemium}} |
| **Taplio** | LinkedIn growth and post writing | {{Paid}} |
:::

## Ads, email, and analytics

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Meta Advantage+** | AI campaign automation in Meta ads | {{Paid}} |
| **Google Performance Max** | AI-driven Google ad campaigns | {{Paid}} |
| **Pencil** | Generates and tests ad creatives | {{Paid}} |
| **Madgicx** | AI for Meta ad optimization | {{Paid}} |
| **Mailchimp** | Email marketing with AI tools | {{Freemium}} |
| **Klaviyo** | E-commerce email and SMS with AI | {{Freemium}} |
| **Brevo** | Email, SMS, and CRM with AI | {{Freemium}} |
| **beehiiv** | Newsletters with an AI writer | {{Freemium}} |
| **Kit** | Creator email marketing | {{Freemium}} |
| **ActiveCampaign** | Automation with AI suggestions | {{Paid}} |
| **Unbounce** | Landing pages with AI copy | {{Paid}} |
| **Amplitude**, **Mixpanel** | Product analytics with AI answers | {{Freemium}} |
| **PostHog** | Open-source product analytics with an AI assistant | {{Freemium}} |
| **Microsoft Clarity** | Free heatmaps with Copilot summaries | {{Free}} |
| **Hotjar** | Heatmaps and surveys with AI | {{Freemium}} |
| **Brand24**, **Meltwater** | Brand monitoring and sentiment | {{Paid}} |
| **Modash** | Find and vet influencers | {{Paid}} |
:::

# Customer Support

AI support agents answer customer questions from your help articles, day and night, and hand hard cases to a human. A **help desk** is the software where support tickets are tracked.

## Help desks and chat agents

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Ada** | Enterprise AI customer-service agent | {{Paid}} |
| **Forethought** | AI agents for support teams | {{Paid}} |
| **Freshdesk** | Help desk with Freddy AI | {{Freemium}} |
| **Gorgias** | E-commerce help desk with AI agent | {{Paid}} |
| **Help Scout** | Friendly help desk with AI answers | {{Freemium}} |
| **Front** | Shared inbox with AI copilot | {{Paid}} |
| **Kustomer**, **Gladly** | Customer-centric support platforms | {{Paid}} |
| **HubSpot Customer Agent** | Breeze AI agent for service | {{Paid}} |
| **Chatbase** | Custom chatbot from your website and docs | {{Freemium}} |
| **CustomGPT.ai** | No-code chatbot on your content | {{Paid}} |
| **Botpress** | Build support and sales bots | {{Freemium}} |
| **Crisp** | Live chat with an AI agent | {{Freemium}} |
| **Kore.ai** | Enterprise conversational AI | {{Paid}} |
| **Yellow.ai** | Multilingual customer-service agents | {{Paid}} |
| **Siena AI** | Empathetic support agent for brands | {{Paid}} |
| **eesel AI** | AI agent that learns from past tickets | {{Paid}} |
| **Pylon**, **Plain** | B2B support platforms with AI | {{Paid}} |
| **Zendesk QA** | AI quality scoring of conversations | {{Paid}} |
:::

## Phone agents and receptionists

:::compact
| Tool | What it does | Price |
|---|---|---|
| **PolyAI** | Natural voice agents for call centers | {{Paid}} |
| **Parloa** | Enterprise voice AI | {{Paid}} |
| **Cognigy** (NICE) | Contact-center AI agents | {{Paid}} |
| **Synthflow** | No-code phone agents | {{Freemium}} |
| **Bland AI** | Programmable phone agents | {{Freemium}} |
| **Dialpad** | Business phone with built-in AI | {{Paid}} |
| **Aircall** | Cloud phone with AI summaries | {{Paid}} |
| **Talkdesk**, **Five9** | Contact-center platforms with AI | {{Paid}} |
| **Smith.ai** | AI plus human receptionists | {{Paid}} |
| **Goodcall**, **Rosie** | AI phone answering for small businesses | {{Paid}} |
| **Slang.ai** | AI phone host for restaurants | {{Paid}} |
:::

# HR and Recruiting

**ATS** stands for applicant tracking system: the software employers use to manage job applications.

## For employers

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Workday Illuminate** | AI agents across Workday HR | {{Paid}} |
| **Greenhouse** | ATS with AI sourcing and summaries | {{Paid}} |
| **Ashby** | All-in-one recruiting with AI | {{Paid}} |
| **Lever** | ATS and CRM for talent | {{Paid}} |
| **Gem** | AI recruiting platform | {{Paid}} |
| **SeekOut**, **hireEZ** | AI candidate sourcing | {{Paid}} |
| **Juicebox** (PeopleGPT) | Search for candidates in plain English | {{Freemium}} |
| **Findem** | Talent data and sourcing | {{Paid}} |
| **HireVue** | Video interviews and assessments | {{Paid}} |
| **Metaview** | AI interview notes for recruiters | {{Freemium}} |
| **LinkedIn Hiring Assistant** | AI agent for LinkedIn Recruiter | {{Paid}} |
| **Rippling**, **Deel**, **Gusto** | HR and payroll with AI help | {{Paid}} |
| **BambooHR** | HR for small businesses with AI | {{Paid}} |
| **Lattice**, **Culture Amp**, **15Five** | Performance and engagement with AI | {{Paid}} |
| **Leena AI**, **Moveworks** | AI help desks for employees | {{Paid}} |
:::

## For job seekers

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Teal** | Résumé builder and job tracker | {{Freemium}} |
| **Kickresume**, **Rezi** | AI résumé and cover-letter writers | {{Freemium}} |
| **Jobscan** | Checks your résumé against a job post | {{Freemium}} |
| **Huntr** | Job tracker with AI tailoring | {{Freemium}} |
| **Simplify** | Autofill job applications | {{Freemium}} |
| **Careerflow** | LinkedIn and résumé optimization | {{Freemium}} |
| **Yoodli** | Practice interviews and speeches | {{Freemium}} |
:::

```prompt
Here is a job ad and my résumé. List the five requirements I match best,
the gaps I should address, and three tailored bullet points I could add.
```

# Legal

> [!CAUTION]
> AI legal tools help professionals work faster. They are not a lawyer. Have a qualified lawyer check anything with real consequences.

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Lexis+ AI** | Legal research and drafting on LexisNexis | {{Paid}} |
| **Westlaw** (CoCounsel) | Thomson Reuters research with AI | {{Paid}} |
| **Legora** | Collaborative AI for law firms | {{Paid}} |
| **Luminance** | Contract review and negotiation | {{Paid}} |
| **Ironclad** | Contract management with AI | {{Paid}} |
| **Juro** | AI contract platform for in-house teams | {{Paid}} |
| **LegalOn** | AI contract review | {{Paid}} |
| **Clio** | Practice management with Clio Duo AI | {{Paid}} |
| **vLex Vincent AI** | Research across many jurisdictions | {{Paid}} |
| **EvenUp** | Demand letters for injury lawyers | {{Paid}} |
| **Eve** | AI for plaintiff law firms | {{Paid}} |
| **Supio** | Case-file analysis for litigators | {{Paid}} |
| **Paxton** | Legal research and drafting for small firms | {{Paid}} |
| **GC AI** | Assistant for in-house counsel | {{Paid}} |
| **Genie AI** | Contract drafting and templates | {{Freemium}} |
| **Docusign IAM** | Agreement management with AI | {{Paid}} |
:::

# Finance and Accounting

## Accounting and finance teams

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Xero** | Small-business accounting with the JAX assistant | {{Paid}} |
| **Sage Copilot** | AI in Sage accounting | {{Paid}} |
| **FreshBooks** | Invoicing and accounting for freelancers | {{Paid}} |
| **Zeni**, **Pilot** | Bookkeeping services powered by AI | {{Paid}} |
| **Digits** | AI-native accounting | {{Paid}} |
| **Puzzle** | Startup accounting with AI | {{Freemium}} |
| **Vic.ai** | Automates accounts payable | {{Paid}} |
| **Booke AI** | Bookkeeping automation | {{Paid}} |
| **Basis** | AI agents for accounting firms | {{Paid}} |
| **Numeric** | Month-end close with AI | {{Paid}} |
| **Datarails** | FP&A with an AI assistant | {{Paid}} |
| **Cube**, **Pigment** | Planning and forecasting with AI | {{Paid}} |
| **NetSuite** (Oracle) | ERP with AI assistance | {{Paid}} |
| **Bill**, **Stampli** | AI bill pay and invoice processing | {{Paid}} |
| **Expensify** | Expenses with the Concierge assistant | {{Freemium}} |
| **Navan** | Travel and expenses with AI | {{Paid}} |
| **Mercury** | Business banking with AI features | {{Free}} |
| **Airwallex** | Global payments with AI tools | {{Freemium}} |
| **TurboTax** | Taxes with Intuit Assist (US) | {{Freemium}} |
| **H&R Block AI Tax Assist** | AI tax help (US) | {{Freemium}} |
:::

## Personal finance

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Cleo** | Chatty budgeting assistant | {{Freemium}} |
| **Monarch Money** | Budgeting with an AI assistant | {{Paid}} |
| **Copilot Money** | Smart budgeting for Apple devices | {{Paid}} |
| **Rocket Money** | Track subscriptions and cut bills | {{Freemium}} |
| **Origin** | Money tracking with an AI financial adviser | {{Paid}} |
| **Credit Karma** | Free credit scores and insights (US) | {{Free}} |
:::

# Trading and Investing Research

> [!CAUTION]
> These tools help you research. None of them can predict markets. Never invest money you cannot afford to lose, and be wary of anyone selling guaranteed AI trading profits.

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Perplexity Finance** | Free market data and cited answers | {{Free}} |
| **Fiscal.ai** (formerly FinChat) | Company data and AI research | {{Freemium}} |
| **Koyfin** | Charts and fundamentals for investors | {{Freemium}} |
| **TradingView** | Charts, screeners, and community ideas | {{Freemium}} |
| **Simply Wall St** | Visual company analysis | {{Freemium}} |
| **Seeking Alpha** | Research with AI summaries | {{Paid}} |
| **Quartr** | Earnings calls and transcripts | {{Freemium}} |
| **Danelfin** | AI stock scores | {{Freemium}} |
| **TrendSpider** | Automated technical analysis | {{Paid}} |
| **Trade Ideas** | AI stock scanning for traders | {{Paid}} |
| **Composer** | Build trading strategies in plain English | {{Paid}} |
| **Public** | Brokerage with the Alpha AI assistant | {{Free}} |
| **AlphaSense** | Market intelligence for professionals | {{Paid}} |
| **Bloomberg Terminal** | Pro data with AI summaries | {{Paid}} |
| **Daloopa** | Financial data for analyst models | {{Paid}} |
| **Bigdata.com** | AI research over news and filings | {{Paid}} |
| **Aiera** | Event and earnings-call intelligence | {{Paid}} |
| **Fintool** | AI analyst for SEC filings | {{Paid}} |
| **Kavout** | AI stock rankings | {{Freemium}} |
:::

# Automation and Workflows

:::compact
| Tool | What it does | Price |
|---|---|---|
| **n8n** | Visual workflows and AI agents; self-host free | {{Freemium}} |
| **Zapier** | Connect 8,000+ apps; AI agents, Copilot, and MCP | {{Freemium}} |
| **Make** | Visual scenario builder with AI agents | {{Freemium}} |
| **Pipedream** | Code-friendly workflows and connect APIs for agents | {{Freemium}} |
| **Microsoft Power Automate** | Automation across Microsoft 365 and desktop | {{Freemium}} |
| **Gumloop** | No-code AI automation pipelines | {{Freemium}} |
| **Relay.app** | Workflows with built-in human-in-the-loop steps | {{Freemium}} |
| **Lindy** | AI assistants that run email, scheduling, and outreach | {{Freemium}} |
| **Activepieces** | Open-source Zapier alternative | {{Freemium}} |
| **IFTTT** | Simple consumer and smart-home automations | {{Freemium}} |
| **Bardeen** | Browser automations for GTM teams | {{Freemium}} |
| **Workato**, **Tray.ai** | Enterprise integration and automation | {{Paid}} |
| **UiPath** | Enterprise RPA plus agentic automation | {{Paid}} |
| **Apple Shortcuts** | Automations on iPhone and Mac, with Apple Intelligence | {{Free}} |
:::

## More automation tools

**RPA** (robotic process automation) is software that clicks through apps the way a person would, for tasks with no API.

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Zapier Agents** | AI teammates that act across your apps | {{Freemium}} |
| **Zapier Copilot** | Builds Zaps from a description | {{Freemium}} |
| **Zapier Tables**, **Interfaces** | Simple databases and forms for automations | {{Freemium}} |
| **Make AI Agents** | Agents inside Make scenarios | {{Freemium}} |
| **Power Automate Desktop** | Free desktop RPA for Windows | {{Free}} |
| **Automation Anywhere** | Enterprise RPA with AI agents | {{Paid}} |
| **Microsoft Copilot Studio flows** | Agent flows in Microsoft 365 | {{Paid}} |
| **Google Workspace Flows** | Gemini-powered automations in Workspace | {{Paid}} |
| **Pabbly Connect** | Low-cost Zapier alternative | {{Paid}} |
| **Integrately** | One-click integrations | {{Freemium}} |
| **Bika.ai** | AI agents and automation databases | {{Freemium}} |
| **Val Town** | Run small scripts and webhooks in the cloud | {{Freemium}} |
| **Windmill** | Open-source scripts, flows, and apps | {{Freemium}} |
| **Node-RED** | Free flow-based automation for devices | {{Free}} |
| **Home Assistant** | Open-source smart home with AI voice | {{Free}} |
| **Tasker** | Android automation | {{Paid}} |
| **Keyboard Maestro** | Mac automation | {{Paid}} |
:::

> [!TIP]
> Start with one boring weekly task, such as copying form answers into a spreadsheet. Automate only that, run it for a week, then add the next one.

:::steps Plan your first automation
1. **Write the trigger.** "When a new form response arrives…"
2. **Write the steps.** "…summarize it with AI, add a row to my sheet, and message me."
3. **Pick a platform.** Zapier for the fastest start; n8n for free self-hosting.
4. **Test with real data.** Run it on three real examples and read the AI output.
5. **Add a human check.** Have it ask for approval before anything is sent to a customer.
:::

# Agents and Agent Platforms

## Agents you can use

:::compact
| Tool | What it does | Price |
|---|---|---|
| **ChatGPT agent** | Browses, uses apps, and completes multi-step tasks | {{Paid}} |
| **Claude desktop agent** (formerly Cowork) | Agent in the Claude app that works on your files, browser, and connectors | {{Paid}} |
| **Gemini Agent** | Google's multi-step task agent | {{Paid}} |
| **Manus** | General autonomous agent for research and building | {{Freemium}} |
| **Genspark** | Super-agent for slides, sheets, calls, and research | {{Freemium}} |
| **Microsoft Copilot Actions** | Agentic tasks in Copilot and Windows | {{Freemium}} |
| **Notion Custom Agents** | Agents that run on schedules or triggers in Notion | {{Paid}} |
:::

## AI browsers and browser agents

:::compact
| Tool | What it does | Price |
|---|---|---|
| **ChatGPT Atlas** | OpenAI's browser with ChatGPT and agent mode built in | {{Freemium}} |
| **Perplexity Comet** | AI browser that researches and acts on pages | {{Free}} |
| **Claude in Chrome** | Claude extension that navigates and acts in Chrome | {{Paid}} |
| **Gemini in Chrome** | Google's assistant built into Chrome | {{Freemium}} |
| **Dia** | AI browser from The Browser Company (now Atlassian) | {{Freemium}} |
| **Opera Neon** | Agentic browser from Opera | {{Paid}} |
| **Browser Use** | Open-source library and cloud for AI browser agents | {{Freemium}} |
| **Browserbase**, **Steel** | Cloud browsers for running agents | {{Freemium}} |
:::

## Build your own agents

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Claude Agent SDK** | Build agents on Claude Code's engine | {{Free}} |
| **OpenAI Agents SDK** / **AgentKit** | OpenAI's toolkit for building and deploying agents | {{Free}} |
| **Google ADK** | Google's open-source Agent Development Kit | {{Free}} |
| **Microsoft Agent Framework** | Successor to AutoGen and Semantic Kernel | {{Free}} |
| **LangGraph** (LangChain) | Stateful, controllable agent workflows | {{Free}} |
| **CrewAI** | Teams of role-playing agents | {{Freemium}} |
| **Mastra** | TypeScript agent framework | {{Free}} |
| **Pydantic AI**, **Agno** | Python agent frameworks | {{Free}} |
| **Letta** | Agents with long-term memory | {{Freemium}} |
| **Dify**, **Flowise**, **Langflow** | Visual builders for LLM apps and agents | {{Freemium}} |
| **Relevance AI** | No-code AI workforce builder | {{Freemium}} |
| **Microsoft Copilot Studio** | Build agents for Microsoft 365 and Teams | {{Paid}} |
| **Amazon Bedrock AgentCore** | Deploy and run agents on AWS | {{Paid}} |
| **Vertex AI Agent Builder** | Google Cloud's agent platform | {{Paid}} |
| **Voiceflow**, **Vapi**, **Retell** | Build chat and phone voice agents | {{Freemium}} |
:::

## More ready-made agents

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Perplexity Labs** | Builds reports, dashboards, and simple apps | {{Paid}} |
| **Flowith** | Canvas-based agent for big research tasks | {{Freemium}} |
| **Kimi Agent** (OK Computer) | Moonshot's agent for sites and slides | {{Freemium}} |
| **Microsoft 365 Copilot agents** | Researcher and Analyst agents | {{Paid}} |
| **Agentforce for Slack** | Salesforce agents in Slack | {{Paid}} |
| **Lindy** | Personal assistant agents for email and calls | {{Freemium}} |
| **Devin**, **Claude Code**, **Codex** | Coding agents (see Coding) | {{Paid}} |
:::

## More browser agents and web data

A **headless browser** is a web browser with no window, controlled by code. **Scraping** means pulling information out of web pages automatically. Respect each site's terms.

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Stagehand** (Browserbase) | Open-source SDK for AI browser automation | {{Free}} |
| **Skyvern** | Automates browser workflows with vision | {{Freemium}} |
| **Hyperbrowser** | Cloud browsers for agents | {{Freemium}} |
| **Anchor Browser** | Agent-ready cloud browsers | {{Freemium}} |
| **Browserless** | Hosted headless Chrome | {{Freemium}} |
| **Kernel** | Fast cloud browsers for agents | {{Freemium}} |
| **Airtop** | Cloud browsers controlled in plain English | {{Freemium}} |
| **Nanobrowser** | Open-source agent in a Chrome extension | {{Free}} |
| **Magnitude** | Open-source vision-based browser agent | {{Free}} |
| **TinyFish** | Enterprise web agents at scale | {{Paid}} |
| **Firecrawl** | Turn websites into clean data for AI | {{Freemium}} |
| **Apify** | Marketplace of scrapers and actors | {{Freemium}} |
| **Bright Data** | Proxies, scrapers, and web datasets | {{Paid}} |
| **Crawl4AI** | Open-source crawler built for LLMs | {{Free}} |
| **Jina Reader** | Turns any URL into LLM-friendly text | {{Freemium}} |
| **ScrapingBee**, **ScraperAPI** | Scraping APIs that handle blocking | {{Paid}} |
| **Zyte**, **Oxylabs** | Enterprise web data | {{Paid}} |
| **Diffbot** | Structured data and a knowledge graph of the web | {{Paid}} |
| **Browse AI** | No-code website monitoring and scraping | {{Freemium}} |
| **Octoparse** | Point-and-click scraper | {{Freemium}} |
| **Thunderbit** | AI web scraper Chrome extension | {{Freemium}} |
:::

## More AI browsers

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Microsoft Edge Copilot Mode** | Edge with Copilot that can act on tabs | {{Free}} |
| **Brave** with **Leo** | Private browser with an AI assistant | {{Freemium}} |
| **Opera One** with **Aria** | Free AI built into Opera | {{Free}} |
| **Fellou** | Agentic browser that does tasks for you | {{Freemium}} |
| **Genspark Browser** | Browser with Genspark's agents | {{Freemium}} |
| **Norton Neo** | AI browser from Norton | {{Free}} |
| **Arc** | Browser with AI tab tidy and summaries | {{Free}} |
| **Firefox** AI features | Sidebar chatbot of your choice and summaries | {{Free}} |
:::

> [!WARNING]
> Agentic browsers can be tricked by hidden instructions on web pages (**prompt injection**). Do not let an agent use logged-in accounts for banking or shopping without watching it, and approve each payment yourself.

## More agent frameworks and SDKs

An **SDK** (software development kit) is a ready-made code library for building on a platform. A **framework** gives you the structure for an app so you only fill in the details.

:::compact
| Tool | What it does | Price |
|---|---|---|
| **smolagents** (Hugging Face) | Tiny Python library for code-writing agents | {{Free}} |
| **Strands Agents** (AWS) | Model-driven open-source agent SDK | {{Free}} |
| **BeeAI** (IBM) | Open-source agent framework | {{Free}} |
| **CAMEL**, **MetaGPT** | Multi-agent research frameworks | {{Free}} |
| **AutoGPT** | Open-source autonomous agent platform | {{Free}} |
| **Langroid** | Multi-agent Python framework | {{Free}} |
| **Inngest AgentKit** | TypeScript agent networks | {{Free}} |
| **VoltAgent** | Open-source TypeScript agent framework | {{Free}} |
| **Rasa** | Conversational AI framework | {{Freemium}} |
| **CopilotKit** | In-app copilots for React; AG-UI protocol | {{Freemium}} |
| **assistant-ui** | React components for AI chat | {{Free}} |
| **Chainlit**, **Streamlit**, **Gradio** | Quick Python UIs for AI apps | {{Free}} |
| **LiveKit Agents** | Real-time voice and video agents | {{Freemium}} |
| **Pipecat** (Daily) | Open-source voice agent framework | {{Free}} |
| **ElevenLabs Agents** | Voice agents with ElevenLabs voices | {{Freemium}} |
| **Ultravox** | Speech-native voice agent model and API | {{Freemium}} |
| **Agent2Agent (A2A)** | Open protocol for agents to talk to each other | {{Free}} |
:::

## Memory, tools, and sandboxes for agents

A **sandbox** is a safe, sealed-off computer where an agent can run code without touching yours.

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Mem0** | Long-term memory layer for agents | {{Freemium}} |
| **Zep** | Memory with a temporal knowledge graph | {{Freemium}} |
| **Supermemory** | Memory API and personal memory app | {{Freemium}} |
| **Cognee** | Open-source memory for AI apps | {{Freemium}} |
| **Composio** | Hundreds of tool integrations with auth | {{Freemium}} |
| **Arcade** | Secure tool calling with user sign-in | {{Freemium}} |
| **E2B** | Cloud sandboxes for AI-written code | {{Freemium}} |
| **Daytona** | Fast sandboxes for agents | {{Freemium}} |
| **Vercel Sandbox** | Run untrusted code on Vercel | {{Freemium}} |
| **Cloudflare Sandbox** | Containers for agents on Cloudflare | {{Paid}} |
| **Temporal** | Durable execution for long agent jobs | {{Freemium}} |
| **Trigger.dev** | Background jobs for AI tasks | {{Freemium}} |
| **Inngest** | Durable workflows and queues | {{Freemium}} |
:::

# Developer Infrastructure

## Model providers and APIs

:::compact
| Provider | What it offers | Price |
|---|---|---|
| **Anthropic API** (Claude Platform) | Claude models, tools, agents, prompt caching | {{Paid}} |
| **OpenAI API** | GPT models, images, audio, realtime, Responses API | {{Paid}} |
| **Google Gemini API** (AI Studio, Vertex AI) | Gemini models with a free developer tier | {{Freemium}} |
| **Amazon Bedrock** | Many models (Claude, Llama, Nova…) on AWS | {{Paid}} |
| **Microsoft Foundry** (Azure) | OpenAI, Claude, and open models on Azure | {{Paid}} |
| **Mistral AI** | Efficient open and commercial models | {{Freemium}} |
| **Cohere** | Enterprise models for RAG, search, and reranking | {{Freemium}} |
| **xAI API** | Grok models | {{Paid}} |
| **DeepSeek API** | Low-cost reasoning models | {{Paid}} |
| **Meta Llama** | Open-weight models | {{Free}} |
| **Qwen** (Alibaba) | Open-weight model family | {{Free}} |
| **OpenRouter** | One API for hundreds of models | {{Freemium}} |
:::

## Inference, hosting, and compute

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Groq**, **Cerebras** | Extremely fast inference on custom chips | {{Freemium}} |
| **Together AI**, **Fireworks AI** | Fast hosting for open models; fine-tuning | {{Paid}} |
| **Replicate** | Run thousands of community models via API | {{Paid}} |
| **Hugging Face** | Model hub, datasets, Spaces, and inference | {{Freemium}} |
| **Modal**, **Baseten**, **RunPod** | Serverless GPUs for running your own models | {{Paid}} |
| **Cloudflare Workers AI** | Run models at the network edge | {{Freemium}} |
| **Ollama** | Run open models locally with one command | {{Free}} |
| **LM Studio** | Desktop app to download and chat with local models | {{Free}} |
| **llama.cpp**, **vLLM** | Open-source local and server inference engines | {{Free}} |
| **Jan**, **GPT4All** | Private, offline chat apps | {{Free}} |
:::

## Frameworks, data, and observability

:::compact
| Tool | What it does | Price |
|---|---|---|
| **LangChain**, **LlamaIndex** | Frameworks for LLM apps, RAG, and agents | {{Free}} |
| **Vercel AI SDK** | TypeScript toolkit for AI apps and streaming UIs | {{Free}} |
| **DSPy**, **Haystack** | Programmatic prompting and search pipelines | {{Free}} |
| **Pinecone** | Managed vector database | {{Freemium}} |
| **Weaviate**, **Qdrant**, **Milvus / Zilliz** | Vector databases, open source and cloud | {{Freemium}} |
| **Chroma** | Open-source embedding database | {{Freemium}} |
| **pgvector** | Vector search inside PostgreSQL | {{Free}} |
| **Turbopuffer** | Serverless vector and full-text search | {{Paid}} |
| **LangSmith** | Tracing, evals, and monitoring for LLM apps | {{Freemium}} |
| **Langfuse** | Open-source LLM observability and evals | {{Freemium}} |
| **Helicone**, **Braintrust**, **Arize Phoenix**, **W&B Weave** | Logging, evals, and prompt management | {{Freemium}} |
:::

## App backends and deployment

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Vercel** | Front-end hosting, AI Gateway, and v0 | {{Freemium}} |
| **Netlify** | Web hosting with AI-friendly deploys | {{Freemium}} |
| **Cloudflare** (Pages, Workers) | Edge hosting, storage, and AI | {{Freemium}} |
| **Supabase** | Postgres database, auth, storage, and edge functions | {{Freemium}} |
| **Firebase** | Google's app backend with AI Logic | {{Freemium}} |
| **Neon** | Serverless Postgres, popular with AI app builders | {{Freemium}} |
| **Convex** | Reactive backend for TypeScript apps | {{Freemium}} |
| **Render**, **Railway**, **Fly.io** | Simple app and container hosting | {{Freemium}} |
| **Clerk**, **Auth0** | Authentication and user management | {{Freemium}} |
| **Stripe** | Payments, billing, and agentic commerce | {{Freemium}} |
:::

## More model APIs

:::compact
| Provider | What it offers | Price |
|---|---|---|
| **Perplexity Sonar API** | Search-grounded answers via API | {{Paid}} |
| **AI21** | Jamba models for long documents | {{Paid}} |
| **Z.ai API** (Zhipu) | GLM models | {{Paid}} |
| **Moonshot API** | Kimi models | {{Paid}} |
| **MiniMax API** | Text, speech, and video models | {{Paid}} |
| **Alibaba Cloud Model Studio** | Qwen models via API | {{Freemium}} |
| **IBM watsonx.ai** | Granite and other models for business | {{Freemium}} |
| **NVIDIA NIM** | Optimized model containers and a free trial API | {{Freemium}} |
| **Oracle OCI Generative AI** | Models on Oracle Cloud | {{Paid}} |
| **Snowflake Cortex AI** | LLM functions inside Snowflake | {{Paid}} |
| **Writer Palmyra** | Enterprise models via API | {{Paid}} |
| **Inception** (Mercury) | Very fast diffusion language models | {{Freemium}} |
| **fal** | Fast image, video, and audio model APIs | {{Paid}} |
| **Runware** | Low-cost image and video generation API | {{Paid}} |
| **Stability AI API** | Image, 3D, and audio models | {{Paid}} |
:::

## Open-weight model families

**Open-weight** models can be downloaded and run on your own hardware. Check each license: some limit commercial use.

:::compact
| Model family | From | Price |
|---|---|---|
| **gpt-oss** | OpenAI | {{Free}} |
| **Gemma** | Google | {{Free}} |
| **Llama** | Meta | {{Free}} |
| **Qwen** | Alibaba | {{Free}} |
| **DeepSeek** | DeepSeek | {{Free}} |
| **Mistral** and **Devstral** | Mistral AI | {{Free}} |
| **Kimi K2** | Moonshot AI | {{Free}} |
| **GLM** | Zhipu (Z.ai) | {{Free}} |
| **MiniMax M** series | MiniMax | {{Free}} |
| **Phi** | Microsoft | {{Free}} |
| **Granite** | IBM | {{Free}} |
| **Nemotron** | NVIDIA | {{Free}} |
| **OLMo** | Ai2 (fully open, including data) | {{Free}} |
| **SmolLM** | Hugging Face | {{Free}} |
| **Liquid LFM** | Liquid AI | {{Free}} |
| **Falcon** | TII | {{Free}} |
:::

## Model routers and gateways

A **gateway** sits between your app and many model providers. It handles keys, fallbacks, caching, and spending limits in one place.

:::compact
| Tool | What it does | Price |
|---|---|---|
| **LiteLLM** | Open-source proxy for 100+ model APIs | {{Free}} |
| **Portkey** | AI gateway with guardrails and logs | {{Freemium}} |
| **Vercel AI Gateway** | One endpoint for many models | {{Freemium}} |
| **Cloudflare AI Gateway** | Caching, rate limits, and analytics | {{Free}} |
| **Kong AI Gateway** | Enterprise API and AI gateway | {{Freemium}} |
| **Requesty** | Router with cost controls | {{Freemium}} |
| **Not Diamond** | Picks the best model for each prompt | {{Freemium}} |
| **Eden AI** | One API for many AI services | {{Freemium}} |
:::

## More inference and GPU clouds

:::compact
| Tool | What it does | Price |
|---|---|---|
| **SambaNova Cloud** | Fast inference on custom chips | {{Freemium}} |
| **DeepInfra** | Cheap hosted open models | {{Paid}} |
| **Novita AI** | Model APIs and GPU instances | {{Paid}} |
| **Hyperbolic** | Low-cost GPUs and inference | {{Paid}} |
| **Nebius AI Studio** | Open-model inference and fine-tuning | {{Paid}} |
| **Lambda** | GPU cloud for training and inference | {{Paid}} |
| **CoreWeave**, **Crusoe** | Large-scale GPU clouds | {{Paid}} |
| **Vast.ai** | Marketplace of rentable GPUs | {{Paid}} |
| **Anyscale** | Managed Ray for scaling AI | {{Paid}} |
| **DigitalOcean Gradient AI** | Simple GPUs and agent hosting | {{Paid}} |
| **Cerebrium**, **Beam** | Serverless GPU apps | {{Freemium}} |
| **Google Colab** | Free notebooks with GPU time | {{Freemium}} |
| **Kaggle** | Free notebooks, GPUs, and datasets | {{Free}} |
| **Lightning AI** | Cloud studios for AI development | {{Freemium}} |
:::

## Local and open-source runners

Running a model **locally** keeps your data on your machine. **Quantization** shrinks a model so it fits in less memory, with a small loss in quality. **GGUF** is a popular file format for these smaller models.

:::compact
| Tool | What it does | Price |
|---|---|---|
| **LocalAI** | Drop-in local replacement for the OpenAI API | {{Free}} |
| **KoboldCpp** | One-file local runner, popular for stories | {{Free}} |
| **text-generation-webui** | Feature-rich local web interface | {{Free}} |
| **llamafile** (Mozilla) | A model and runner in one file | {{Free}} |
| **MLX** / **mlx-lm** (Apple) | Fast local models on Apple silicon | {{Free}} |
| **MLC LLM** | Run models on phones and browsers | {{Free}} |
| **SGLang** | Fast open-source serving engine | {{Free}} |
| **TensorRT-LLM** (NVIDIA) | Optimized inference on NVIDIA GPUs | {{Free}} |
| **ExLlamaV2** | Fast quantized inference on GPUs | {{Free}} |
| **Docker Model Runner** | Pull and run models like containers | {{Free}} |
| **RamaLama** | Run models in containers | {{Free}} |
| **Foundry Local** (Microsoft) | Local models on Windows and Mac | {{Free}} |
| **Lemonade** (AMD) | Local inference tuned for AMD hardware | {{Free}} |
| **PrivateGPT** | Private document Q&A, fully offline | {{Free}} |
| **PocketPal AI** | Run small models on your phone | {{Free}} |
| **Google AI Edge Gallery** | Try on-device models on Android | {{Free}} |
| **Private LLM** | Offline models for iPhone and Mac | {{Paid}} |
| **LLM** (Simon Willison) | Command-line tool for many models | {{Free}} |
| **Unsloth** | Faster, lower-memory fine-tuning | {{Free}} |
| **Axolotl**, **LLaMA-Factory** | Open-source fine-tuning toolkits | {{Free}} |
| **TRL**, **PEFT** (Hugging Face) | Libraries for training and adapters | {{Free}} |
:::

> [!TIP]
> Rough rule: a computer with 16 GB of memory runs 7–8 billion parameter models comfortably; 32 GB or more opens up much stronger ones. Start with a small model in LM Studio and work up.

## More vector databases and search

An **embedding** turns text into a list of numbers that captures its meaning. A **vector database** stores embeddings so an app can find similar text fast. Together they power **RAG** (retrieval-augmented generation): looking up your documents before the AI answers.

:::compact
| Tool | What it does | Price |
|---|---|---|
| **LanceDB** | Embedded, open-source vector database | {{Freemium}} |
| **Vespa** | Search and recommendation engine | {{Freemium}} |
| **Elasticsearch** | Search with vector and hybrid retrieval | {{Freemium}} |
| **OpenSearch** | Open-source search with vectors | {{Free}} |
| **Redis** | In-memory database with vector search | {{Freemium}} |
| **MongoDB Atlas Vector Search** | Vectors next to your documents | {{Freemium}} |
| **Supabase Vector** | pgvector managed by Supabase | {{Freemium}} |
| **Upstash Vector** | Serverless vector database | {{Freemium}} |
| **Cloudflare Vectorize** | Vector search on Cloudflare | {{Freemium}} |
| **Amazon S3 Vectors** | Cheap vector storage in S3 | {{Paid}} |
| **Azure AI Search** | Microsoft's search with vectors | {{Paid}} |
| **Vertex AI Vector Search** | Google Cloud vector search | {{Paid}} |
| **Astra DB** (DataStax) | Serverless vector database | {{Freemium}} |
| **SingleStore**, **Couchbase** | Databases with vector search | {{Freemium}} |
| **FAISS** (Meta) | Free library for similarity search | {{Free}} |
| **Typesense**, **Meilisearch** | Fast search engines with AI search | {{Freemium}} |
| **Algolia** | Hosted search with AI ranking | {{Freemium}} |
:::

## Embeddings, rerankers, and RAG platforms

A **reranker** re-sorts search results so the most relevant come first.

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Voyage AI** | High-quality embeddings and rerankers | {{Freemium}} |
| **Jina AI** | Embeddings, rerankers, and reader API | {{Freemium}} |
| **Cohere Embed** / **Rerank** | Multilingual embeddings and reranking | {{Freemium}} |
| **Nomic Embed** | Open embedding models | {{Freemium}} |
| **Mixedbread** | Open embeddings and search API | {{Freemium}} |
| **Vectara** | RAG-as-a-service with hallucination checks | {{Freemium}} |
| **Ragie** | Managed RAG for developers | {{Freemium}} |
| **Pinecone Assistant** | Upload files, get a cited chat API | {{Freemium}} |
| **LlamaCloud** | Managed parsing and indexing | {{Freemium}} |
| **RAGFlow** | Open-source RAG engine | {{Free}} |
| **Onyx** | Open-source enterprise search and chat | {{Freemium}} |
:::

## More observability, evals, and guardrails

An **eval** is a repeatable test of AI output quality. **Observability** means recording what your AI app did so you can debug it. **Guardrails** block unsafe inputs or outputs.

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Arize AX** | Enterprise LLM observability | {{Freemium}} |
| **Datadog LLM Observability** | Traces and costs in Datadog | {{Paid}} |
| **Galileo** | Evals and guardrail metrics | {{Freemium}} |
| **HoneyHive** | Testing and monitoring for agents | {{Freemium}} |
| **Opik** (Comet) | Open-source tracing and evals | {{Freemium}} |
| **Promptfoo** | Open-source prompt testing and red teaming | {{Freemium}} |
| **Confident AI** / **DeepEval** | Unit tests for LLM apps | {{Freemium}} |
| **Ragas** | Open-source RAG evaluation | {{Free}} |
| **Laminar** | Open-source agent tracing | {{Freemium}} |
| **Agenta** | Prompt management and evals | {{Freemium}} |
| **PromptLayer** | Prompt registry and logging | {{Freemium}} |
| **Pydantic Logfire** | Observability with AI tracing | {{Freemium}} |
| **MLflow** | Open-source ML and LLM tracking | {{Free}} |
| **Weights & Biases** | Experiment tracking for training | {{Freemium}} |
| **Inspect** (UK AISI) | Open-source evaluation framework | {{Free}} |
| **LMArena** | Public leaderboard from blind votes | {{Free}} |
| **Artificial Analysis** | Independent model speed and quality benchmarks | {{Free}} |
| **Guardrails AI** | Open-source output validation | {{Free}} |
| **NeMo Guardrails** (NVIDIA) | Programmable rails for chatbots | {{Free}} |
| **Llama Guard** | Open safety classifier model | {{Free}} |
| **Lakera** | Prompt-injection protection | {{Paid}} |
:::

## More hosting, backends, and auth

:::compact
| Tool | What it does | Price |
|---|---|---|
| **AWS Amplify** | Full-stack hosting on AWS | {{Freemium}} |
| **Heroku** | Simple app platform with AI add-ons | {{Paid}} |
| **DigitalOcean App Platform** | Easy app hosting | {{Freemium}} |
| **Appwrite** | Open-source backend platform | {{Freemium}} |
| **PocketBase** | One-file open-source backend | {{Free}} |
| **Turso** | Edge SQLite database | {{Freemium}} |
| **PlanetScale** | Managed MySQL and Postgres | {{Paid}} |
| **Prisma Postgres** | Serverless Postgres with Prisma | {{Freemium}} |
| **Upstash** | Serverless Redis, queues, and vectors | {{Freemium}} |
| **WorkOS** | Enterprise sign-in and agent auth | {{Freemium}} |
| **Stytch**, **Descope** | Authentication APIs | {{Freemium}} |
| **Better Auth** | Open-source TypeScript auth library | {{Free}} |
| **Resend** | Email API for developers | {{Freemium}} |
| **Twilio** | SMS, voice, and WhatsApp APIs | {{Paid}} |
| **Sentry** | Error monitoring with AI root-cause help | {{Freemium}} |
:::

# Connectors

**Connectors** link an AI assistant to the apps you use, so it can read and act in them. Claude calls them *connectors*, ChatGPT calls them *apps*, and Gemini calls them *extensions* or *apps*. Many are built on MCP. Availability differs by assistant and plan, so check each assistant's connector directory (in Claude: [[Settings > Connectors]]).

## Productivity and files

:::compact
| Connector | What the AI can do | Price |
|---|---|---|
| **Google Drive** | Search and read Docs, Sheets, Slides, and PDFs | {{Free}} |
| **Gmail** | Search, read, and draft email | {{Free}} |
| **Google Calendar** | Check availability; create and update events | {{Free}} |
| **Microsoft 365** (Outlook, SharePoint, OneDrive, Teams) | Search mail, files, and chats; draft messages | {{Paid}} |
| **Notion** | Search, read, create, and update pages and databases | {{Freemium}} |
| **Box**, **Dropbox** | Find, read, and organize files | {{Freemium}} |
| **Slack** | Search channels, read threads, and post messages | {{Freemium}} |
| **Zoom** | Meeting summaries and scheduling | {{Freemium}} |
| **Granola**, **Fireflies** | Bring meeting notes and transcripts into chat | {{Freemium}} |
| **Todoist** | Manage tasks and projects | {{Freemium}} |
:::

## Work management and CRM

:::compact
| Connector | What the AI can do | Price |
|---|---|---|
| **Asana**, **monday.com**, **ClickUp** | Read and update tasks and projects | {{Freemium}} |
| **Linear** | Create and update issues and projects | {{Freemium}} |
| **Atlassian** (Jira, Confluence) | Search, create, and update issues and pages | {{Freemium}} |
| **Airtable** | Query and update bases | {{Freemium}} |
| **HubSpot** | Look up contacts, deals, and companies; log activity | {{Freemium}} |
| **Salesforce** | Query and update CRM records | {{Paid}} |
| **Intercom** | Search conversations and customer data | {{Paid}} |
| **Zapier** | Run actions in thousands of apps | {{Freemium}} |
:::

## Developer and design

:::compact
| Connector | What the AI can do | Price |
|---|---|---|
| **GitHub** | Read code, manage issues and pull requests | {{Freemium}} |
| **Vercel**, **Netlify**, **Cloudflare** | Inspect and manage deployments and projects | {{Freemium}} |
| **Sentry** | Investigate errors and performance issues | {{Freemium}} |
| **Supabase**, **Neon** | Manage databases and run queries | {{Freemium}} |
| **Hugging Face** | Search models, datasets, Spaces, and papers | {{Free}} |
| **Figma** | Read designs, components, and variables | {{Freemium}} |
| **Canva** | Create, edit, and export designs | {{Freemium}} |
| **Adobe** (Express, Acrobat, Photoshop) | Edit images and PDFs, create designs | {{Freemium}} |
| **Webflow**, **Wix** | Manage site content and pages | {{Freemium}} |
:::

## Commerce, finance, and travel

:::compact
| Connector | What the AI can do | Price |
|---|---|---|
| **Stripe** | Look up payments, customers, and invoices | {{Freemium}} |
| **PayPal**, **Square** | Manage invoices, payments, and catalog | {{Freemium}} |
| **Shopify** | Store data, products, and orders | {{Paid}} |
| **QuickBooks** | Financial reports and transactions | {{Paid}} |
| **DocuSign** | Prepare and track agreements | {{Paid}} |
| **Booking.com**, **Expedia** | Search stays and travel | {{Free}} |
| **Spotify** | Make playlists and find music | {{Freemium}} |
| **Instacart**, **DoorDash** | Shop groceries and order food from chat | {{Free}} |
| **Zillow** | Search homes for sale and rent | {{Free}} |
:::

## More Claude connectors

Claude's directory lists connectors from many companies. A selection beyond the ones above, grouped by use:

:::compact
| Connector | What Claude can do | Price |
|---|---|---|
| **Miro**, **Lucid** | Read and create boards and diagrams | {{Freemium}} |
| **Monday.com** | Boards, items, and docs | {{Freemium}} |
| **Gumloop** | Run and build AI automations | {{Freemium}} |
| **n8n** | Search, build, and run workflows | {{Freemium}} |
| **Docusign** | Create envelopes and track agreements | {{Paid}} |
| **Apollo**, **Lusha**, **Common Room** | Prospect and enrich contacts | {{Freemium}} |
| **Gong** | Search call recordings and insights | {{Paid}} |
| **Guru** | Search company knowledge | {{Paid}} |
| **Datadog**, **PagerDuty** | Investigate incidents and alerts | {{Paid}} |
| **Honeycomb**, **Grafana**, **SigNoz** | Query traces, logs, and dashboards | {{Freemium}} |
| **ClickHouse**, **BigQuery**, **PlanetScale** | Query databases and warehouses | {{Freemium}} |
| **Exa**, **Tavily**, **Bright Data** | Web search and extraction | {{Freemium}} |
| **Airtable**, **Box**, **Dropbox** | Bases and files | {{Freemium}} |
| **Wix**, **Base44**, **Sanity** | Sites, apps, and content | {{Freemium}} |
| **Intuit QuickBooks**, **Credit Karma** | Business books and credit insights | {{Freemium}} |
| **Carta** | Cap tables, funds, and investor CRM | {{Paid}} |
| **S&P Global**, **LSEG**, **Daloopa** | Financial data for analysts | {{Paid}} |
| **Bigdata.com** | News and filings research | {{Paid}} |
| **PubMed**, **bioRxiv** | Search biomedical papers and preprints | {{Free}} |
| **ClinicalTrials.gov**, **ChEMBL**, **Open Targets** | Trials, compounds, and drug targets | {{Free}} |
| **Consensus** | Search peer-reviewed research | {{Freemium}} |
| **CMS Coverage**, **ICD-10 Codes**, **NPI Registry** | US health coverage, codes, and providers | {{Free}} |
| **Coursera** | Find and learn from courses | {{Freemium}} |
:::

## Claude plugins

**Plugins** bundle skills (written know-how), connectors, and commands for one kind of work. Anthropic publishes these for knowledge workers, and companies publish their own.

:::compact
| Plugin | What it adds | Price |
|---|---|---|
| **Productivity** | Task and memory management | {{Paid}} |
| **Sales** | Call prep, pipeline reviews, outreach drafts | {{Paid}} |
| **Marketing** | Campaign plans, briefs, SEO audits | {{Paid}} |
| **Customer Support** | Ticket triage, replies, knowledge articles | {{Paid}} |
| **Legal** | Contract and NDA review, risk checks | {{Paid}} |
| **Finance** | Reconciliations, journal entries, close | {{Paid}} |
| **Human Resources** | Offers, reviews, onboarding | {{Paid}} |
| **Engineering** | Code review, incidents, system design | {{Paid}} |
| **Design** | Critiques, handoffs, UX copy | {{Paid}} |
| **Product Management** | Specs, roadmaps, research synthesis | {{Paid}} |
| **Operations** | Runbooks, process docs, vendor reviews | {{Paid}} |
| **Enterprise Search** | Search across connected tools | {{Paid}} |
| **Bio-Research** | Literature, trials, and lab-data workflows | {{Paid}} |
| **Small Business** | Invoices, payroll prep, marketing for owners | {{Paid}} |
| Vendor plugins | Figma, Canva, Adobe, HubSpot, Twilio, Unity, and more | {{Paid}} |
:::

## ChatGPT apps

ChatGPT "apps" open an interactive panel inside the chat. Mention one by name, or pick it from [[Apps]] in ChatGPT.

:::compact
| App | What you can do in ChatGPT | Price |
|---|---|---|
| **Canva** | Turn an outline into a design | {{Freemium}} |
| **Figma** | Make diagrams and FigJam boards | {{Freemium}} |
| **Adobe Photoshop**, **Express**, **Acrobat** | Edit photos, designs, and PDFs | {{Freemium}} |
| **Coursera** | Watch and ask about courses | {{Freemium}} |
| **Booking.com**, **Expedia** | Find hotels and trips | {{Free}} |
| **Tripadvisor**, **AllTrails** | Plan trips and hikes | {{Free}} |
| **Spotify**, **Apple Music** | Build playlists | {{Freemium}} |
| **Zillow** | Browse homes on a map | {{Free}} |
| **Instacart**, **DoorDash** | Shop groceries and order food | {{Free}} |
| **OpenTable** | Book restaurants | {{Free}} |
| **Peloton** | Find classes | {{Paid}} |
| **Replit** | Build an app from chat | {{Freemium}} |
| Workplace apps | Google Drive, SharePoint, GitHub, Notion, Linear, HubSpot | {{Freemium}} |
:::

## AI apps in Zapier and n8n

Both platforms let you drop AI steps into workflows. In Zapier you pick an app; in n8n you add a **node** (one box in the workflow).

:::compact
| Integration | Where | What it does | Price |
|---|---|---|---|
| **AI by Zapier** | Zapier | Built-in AI step, no API key needed | {{Freemium}} |
| **ChatGPT (OpenAI)** | Both | Generate, classify, and transcribe | {{Paid}} |
| **Anthropic (Claude)** | Both | Claude models in a step | {{Paid}} |
| **Google Gemini** | Both | Gemini models in a step | {{Freemium}} |
| **Perplexity** | Both | Search-backed answers | {{Paid}} |
| **Mistral AI**, **DeepSeek**, **Groq** | n8n | Chat-model nodes | {{Paid}} |
| **Ollama** | n8n | Local models in workflows | {{Free}} |
| **OpenRouter** | n8n | Many models through one key | {{Freemium}} |
| **AI Agent** node | n8n | An agent with tools and memory | {{Free}} |
| **MCP Client Tool** / **MCP Server Trigger** | n8n | Use or expose MCP tools | {{Free}} |
| **Pinecone**, **Qdrant**, **Supabase** vector stores | n8n | RAG over your documents | {{Freemium}} |
| **ElevenLabs** | Both | Voiceovers from text | {{Freemium}} |
| **AssemblyAI** | Zapier | Transcribe audio files | {{Freemium}} |
| **Fireflies**, **Fathom**, **Otter** | Zapier | Send meeting notes onward | {{Freemium}} |
| **Zapier Chatbots** | Zapier | Chatbots that trigger Zaps | {{Freemium}} |
:::

:::steps Connect your first app to an assistant
1. **Open the directory.** In Claude: [[Settings > Connectors]]. In ChatGPT: [[Settings > Apps]].
2. **Pick one app you use daily.** Google Drive or your calendar is a good first choice.
3. **Sign in and review permissions.** Grant read-only access first if you can.
4. **Ask a real question.** "What's on my calendar on Thursday, and what should I prepare?"
5. **Disconnect what you don't use.** Fewer connections means less risk.
:::

# MCP Servers

**MCP servers** extend any MCP-compatible AI app (Claude, ChatGPT, Cursor, VS Code, Claude Code, Gemini CLI, n8n…). "Remote" servers are web addresses you sign in to; "local" servers run on your computer. See the *MCP* manual for setup, and prefer official servers from the vendor.

## Official reference servers

:::compact
| Server | What it does | Price |
|---|---|---|
| **Filesystem** | Read and write files in folders you choose (local) | {{Free}} |
| **Fetch** | Fetch web pages and convert them to text (local) | {{Free}} |
| **Git** | Read and work with local Git repositories (local) | {{Free}} |
| **Memory** | A knowledge-graph memory the AI can store facts in (local) | {{Free}} |
| **Sequential Thinking** | Structured step-by-step problem solving (local) | {{Free}} |
| **Time** | Time and time-zone conversion (local) | {{Free}} |
| **Everything** | Test server showing every MCP feature (local) | {{Free}} |
:::

## Developer tools and code

:::compact
| Server | What it does | Price |
|---|---|---|
| **GitHub MCP** | Repos, issues, PRs, Actions, code security (remote and local) | {{Freemium}} |
| **GitLab MCP** | Issues, merge requests, and pipelines | {{Freemium}} |
| **Context7** (Upstash) | Up-to-date library documentation for coding agents | {{Freemium}} |
| **Chrome DevTools MCP** (Google) | Debug and inspect pages in a live Chrome | {{Free}} |
| **Playwright MCP** (Microsoft) | Drive a real browser: click, type, screenshot | {{Free}} |
| **Microsoft Learn MCP** | Search official Microsoft documentation | {{Free}} |
| **AWS Labs MCP servers** | Docs, CDK, cost, and service tools for AWS | {{Freemium}} |
| **Azure MCP**, **Google Cloud MCP** | Manage cloud resources by conversation | {{Freemium}} |
| **Cloudflare MCP** | Workers, DNS, logs, and docs | {{Freemium}} |
| **Vercel MCP**, **Netlify MCP** | Deployments, logs, and project settings | {{Freemium}} |
| **Docker MCP Toolkit** | Catalog and gateway of containerized MCP servers | {{Free}} |
| **Kubernetes MCP** | Inspect and manage clusters | {{Free}} |
| **Terraform MCP** (HashiCorp) | Registry docs and infrastructure workflows | {{Free}} |
| **Sentry MCP** | Error and issue investigation | {{Freemium}} |
| **Datadog**, **Grafana**, **Honeycomb** MCP | Observability queries, dashboards, and alerts | {{Freemium}} |
| **PagerDuty MCP** | Incidents and on-call | {{Paid}} |
| **Figma Dev Mode MCP** | Design context for code generation | {{Freemium}} |
| **Shopify Dev MCP** | Shopify API docs and schema help | {{Free}} |
| **Stripe MCP** | Payments data, docs, and actions | {{Freemium}} |
| **Desktop Commander** | Terminal, files, and processes on your computer (community) | {{Free}} |
| **Serena** | Semantic code search and editing for agents (community) | {{Free}} |
:::

## Data and databases

:::compact
| Server | What it does | Price |
|---|---|---|
| **Supabase MCP** | Manage projects, run SQL, and generate types | {{Freemium}} |
| **Neon MCP**, **PlanetScale MCP** | Serverless database management | {{Freemium}} |
| **MongoDB MCP** | Query and manage MongoDB and Atlas | {{Freemium}} |
| **Redis MCP** | Work with Redis data | {{Freemium}} |
| **MCP Toolbox for Databases** (Google) | Secure database tools for Postgres, BigQuery, and more | {{Free}} |
| **Snowflake**, **Databricks** MCP | Query warehouses and lakehouses | {{Paid}} |
| **ClickHouse MCP** | Analytics queries | {{Freemium}} |
| **Pinecone**, **Qdrant**, **Chroma** MCP | Vector search and memory for agents | {{Freemium}} |
| **Elasticsearch MCP** | Search and analytics | {{Freemium}} |
| **Airtable MCP** | Bases, tables, and records | {{Freemium}} |
:::

## Productivity and business

:::compact
| Server | What it does | Price |
|---|---|---|
| **Notion MCP** | Search, read, and write pages and databases | {{Freemium}} |
| **Atlassian Remote MCP** | Jira and Confluence | {{Freemium}} |
| **Linear MCP** | Issues, projects, and cycles | {{Freemium}} |
| **Asana MCP**, **monday.com MCP**, **ClickUp MCP** | Work management | {{Freemium}} |
| **Slack MCP** | Search and post in your workspace | {{Freemium}} |
| **HubSpot MCP** | CRM records and activity | {{Freemium}} |
| **Salesforce MCP** | CRM data and actions | {{Paid}} |
| **Intercom MCP** | Customer conversations | {{Paid}} |
| **Box MCP**, **Dropbox MCP** | Files and folders | {{Freemium}} |
| **Canva MCP** | Create and edit designs | {{Freemium}} |
| **Webflow MCP**, **Wix MCP** | Website content management | {{Freemium}} |
| **PayPal MCP**, **Square MCP** | Payments, invoices, catalog | {{Freemium}} |
| **Plaid MCP** | Financial account data for developers | {{Paid}} |
| **Twilio MCP** | SMS, voice, and messaging APIs | {{Paid}} |
| **Resend MCP** | Send email from agents | {{Freemium}} |
| **Obsidian MCP** | Read and write your local vault (community) | {{Free}} |
:::

## Search, web, and media

:::compact
| Server | What it does | Price |
|---|---|---|
| **Brave Search MCP** | Web and local search | {{Freemium}} |
| **Exa MCP**, **Tavily MCP** | AI-native web search and extraction | {{Freemium}} |
| **Perplexity (Sonar) MCP** | Cited web answers for agents | {{Paid}} |
| **Firecrawl MCP** | Crawl and scrape websites into clean Markdown | {{Freemium}} |
| **Apify MCP** | Thousands of ready-made scrapers | {{Freemium}} |
| **Bright Data MCP** | Web access and data at scale | {{Freemium}} |
| **Browserbase MCP** | Cloud browsers for agents | {{Freemium}} |
| **ElevenLabs MCP** | Text-to-speech and audio tools | {{Freemium}} |
| **Hugging Face MCP** | Models, datasets, Spaces, and papers | {{Free}} |
| **YouTube transcript MCP** | Fetch video transcripts (community) | {{Free}} |
:::

## Automation platforms as MCP

:::compact
| Server | What it does | Price |
|---|---|---|
| **Zapier MCP** | Thousands of app actions through one server | {{Freemium}} |
| **n8n instance MCP** | Search, run, and build n8n workflows | {{Freemium}} |
| **Make MCP** | Run Make scenarios as tools | {{Freemium}} |
| **Pipedream MCP** | Thousands of APIs with managed auth | {{Freemium}} |
| **Composio** | Managed MCP and tool integrations for agents | {{Freemium}} |
:::

> [!NOTE]
> Find more servers in the official **MCP Registry**, Anthropic's connector directory at claude.ai/directory, the `modelcontextprotocol/servers` repository on GitHub, and each vendor's documentation.

## More developer MCP servers

:::compact
| Server | What it does | Price |
|---|---|---|
| **DeepWiki MCP** (Cognition) | Ask questions about any public GitHub repo | {{Free}} |
| **GitMCP** | Turns any GitHub repo into a docs server | {{Free}} |
| **Ref** | Token-efficient documentation search | {{Freemium}} |
| **Next.js DevTools MCP** (Vercel) | Errors and routes from a running Next.js app | {{Free}} |
| **shadcn MCP** | Browse and install UI components | {{Free}} |
| **Svelte MCP**, **Angular CLI MCP** | Framework docs and helpers | {{Free}} |
| **Nx MCP** | Monorepo structure for agents | {{Free}} |
| **Storybook MCP** | Component stories as context | {{Free}} |
| **Prisma MCP** | Database schema and migrations | {{Freemium}} |
| **Postman MCP** | APIs, collections, and tests | {{Freemium}} |
| **Apollo MCP Server** | Expose GraphQL operations as tools | {{Free}} |
| **Buildkite MCP**, **CircleCI MCP** | CI pipelines and build logs | {{Freemium}} |
| **Azure DevOps MCP** | Work items, repos, and pipelines | {{Freemium}} |
| **Pulumi MCP** | Infrastructure as code | {{Freemium}} |
| **Heroku MCP**, **Render MCP**, **Railway MCP** | Deploy and inspect apps | {{Freemium}} |
| **DigitalOcean MCP** | Manage droplets and apps | {{Paid}} |
| **Firebase MCP** | Firebase projects through the CLI | {{Freemium}} |
| **Expo MCP** | React Native app help | {{Freemium}} |
| **XcodeBuildMCP** | Build and run iOS apps (community) | {{Free}} |
| **Unity MCP** | Control the Unity editor | {{Paid}} |
| **Blender MCP** | Build 3D scenes by prompt (community) | {{Free}} |
| **LaunchDarkly MCP**, **GrowthBook MCP** | Feature flags and experiments | {{Freemium}} |
| **PostHog MCP**, **Amplitude MCP**, **Mixpanel MCP** | Product analytics queries | {{Freemium}} |
| **Auth0 MCP** | Manage apps and users | {{Freemium}} |
| **Fastly MCP** | CDN services and stats | {{Paid}} |
| **Cloudinary MCP** | Upload, transform, and search media | {{Freemium}} |
| **Mux MCP** | Video assets and analytics | {{Paid}} |
| **Sanity MCP**, **Contentful MCP**, **Storyblok MCP** | Headless CMS content | {{Freemium}} |
| **WordPress MCP** | Posts and site management | {{Free}} |
| **Mailgun MCP**, **Postmark MCP** | Transactional email | {{Freemium}} |
| **Claude Code as MCP** (`claude mcp serve`) | Use Claude Code's tools from another app | {{Paid}} |
:::

## Security MCP servers

:::compact
| Server | What it does | Price |
|---|---|---|
| **Snyk MCP** | Scan code and dependencies | {{Freemium}} |
| **Semgrep MCP** | Static analysis for security bugs | {{Freemium}} |
| **SonarQube MCP** | Code quality and security issues | {{Freemium}} |
| **Socket MCP** | Check package risk before installing | {{Free}} |
| **StackHawk MCP** | API security testing | {{Paid}} |
| **Vanta MCP** | Compliance tests and remediation | {{Paid}} |
| **GitGuardian MCP** | Find leaked secrets | {{Freemium}} |
| **HashiCorp Vault MCP** | Secrets management | {{Freemium}} |
| **Burp Suite MCP** (PortSwigger) | Web security testing | {{Freemium}} |
:::

## More data MCP servers

:::compact
| Server | What it does | Price |
|---|---|---|
| **BigQuery MCP** (Google) | Query BigQuery datasets | {{Paid}} |
| **Postgres MCP Pro** | Postgres tuning and safe SQL (community) | {{Free}} |
| **MotherDuck / DuckDB MCP** | Fast analytics on local or cloud data | {{Freemium}} |
| **Neo4j MCP** | Graph database queries | {{Freemium}} |
| **Couchbase MCP**, **SingleStore MCP** | Database queries | {{Freemium}} |
| **Upstash MCP** | Redis and queues | {{Freemium}} |
| **Convex MCP** | Inspect Convex backends | {{Freemium}} |
| **dbt MCP** | Models, lineage, and metrics | {{Freemium}} |
| **Atlan MCP** | Data catalog search | {{Paid}} |
| **Tableau MCP**, **Power BI MCP** | Dashboards and semantic models | {{Paid}} |
| **Algolia MCP**, **Meilisearch MCP** | Search indexes | {{Freemium}} |
| **Weaviate MCP**, **Milvus MCP** | Vector stores | {{Freemium}} |
| **Data Commons MCP** (Google) | Public statistics | {{Free}} |
| **Pixeltable MCP** | Multimodal data tables | {{Free}} |
| **DataRobot MCP** | Predictive models | {{Paid}} |
:::

## More productivity and communication servers

:::compact
| Server | What it does | Price |
|---|---|---|
| **Google Drive**, **Gmail**, **Calendar** MCP (Google) | Files, mail, and events | {{Free}} |
| **Todoist MCP** | Tasks and projects | {{Freemium}} |
| **Miro MCP** | Boards and diagrams | {{Freemium}} |
| **Smartsheet MCP** | Sheets and projects | {{Paid}} |
| **Egnyte MCP** | Business files | {{Paid}} |
| **Guru MCP**, **Glean MCP** | Company knowledge | {{Paid}} |
| **Fireflies MCP**, **Granola MCP** | Meeting transcripts | {{Freemium}} |
| **Docusign MCP** | Envelopes and agreements | {{Paid}} |
| **Cal.com MCP** | Bookings and availability | {{Freemium}} |
| **Google Maps MCP** | Places and directions | {{Freemium}} |
| **Mapbox MCP** | Maps, geocoding, and routes | {{Freemium}} |
| **ServiceNow MCP** | IT tickets and workflows | {{Paid}} |
| **Zendesk MCP** | Support tickets | {{Paid}} |
| **Postiz MCP** | Schedule social posts | {{Freemium}} |
| **Discord**, **Telegram**, **WhatsApp** MCP | Messaging (community) | {{Free}} |
| **Apple MCP** | Notes, Reminders, and Messages on a Mac (community) | {{Free}} |
| **Home Assistant MCP** | Control your smart home | {{Free}} |
| **Basic Memory** | Persistent Markdown memory (community) | {{Free}} |
| **Mem0 MCP** (OpenMemory) | Shared memory across AI apps | {{Freemium}} |
:::

## Sales, finance, and commerce servers

:::compact
| Server | What it does | Price |
|---|---|---|
| **Attio MCP**, **Close MCP** | CRM records | {{Freemium}} |
| **Apollo MCP**, **Lusha MCP**, **ZoomInfo MCP** | Prospect data | {{Freemium}} |
| **Explorium MCP** | Company and contact data | {{Freemium}} |
| **Common Room MCP** | Buyer signals | {{Freemium}} |
| **Gong MCP** | Call insights | {{Paid}} |
| **QuickBooks MCP**, **Xero MCP** | Accounting data | {{Paid}} |
| **NetSuite MCP** | ERP records | {{Paid}} |
| **Ramp MCP**, **Mercury MCP** | Spend and banking | {{Free}} |
| **Airwallex MCP** | Payments and cards | {{Freemium}} |
| **Adyen MCP**, **Razorpay MCP**, **Paddle MCP** | Payments | {{Paid}} |
| **Alpaca MCP** | Market data and paper trading | {{Freemium}} |
| **Coinbase AgentKit** | Crypto wallets for agents | {{Free}} |
| **CoinGecko MCP** | Crypto prices | {{Freemium}} |
| **Daloopa**, **S&P Global**, **LSEG**, **FactSet** MCP | Professional financial data | {{Paid}} |
| **Shopify Storefront MCP** | Let shoppers search a store | {{Free}} |
| **commercetools MCP** | Commerce catalogs | {{Paid}} |
:::

## Science and health servers

:::compact
| Server | What it does | Price |
|---|---|---|
| **PubMed** | Biomedical literature | {{Free}} |
| **bioRxiv / medRxiv** | Preprints | {{Free}} |
| **ClinicalTrials.gov** | Trial registry search | {{Free}} |
| **ChEMBL** | Bioactive compounds | {{Free}} |
| **Open Targets** | Drug-target evidence | {{Free}} |
| **ICD-10 Codes**, **NPI Registry**, **CMS Coverage** | US medical codes, providers, and Medicare policy | {{Free}} |
| **Synapse**, **BioRender**, **Benchling** | Research data, figures, and lab notebooks | {{Freemium}} |
| **Wiley Scholar Gateway** | Peer-reviewed content | {{Paid}} |
:::

## More search, scraping, and media servers

:::compact
| Server | What it does | Price |
|---|---|---|
| **Kagi MCP** | Kagi search and summarizer | {{Paid}} |
| **Linkup MCP**, **Parallel MCP** | Web search APIs for agents | {{Freemium}} |
| **Jina AI MCP** | Read URLs and search | {{Freemium}} |
| **SerpApi MCP** | Google and other search results | {{Freemium}} |
| **Oxylabs MCP**, **ScrapeGraphAI MCP** | Scraping with AI extraction | {{Freemium}} |
| **Hyperbrowser MCP**, **Browser Use MCP** | Cloud browser control | {{Freemium}} |
| **Nimble MCP**, **TinyFish MCP** | Enterprise web data | {{Paid}} |
| **fal MCP**, **Replicate MCP** | Run image and video models | {{Paid}} |
| **Adobe MCP** | Photoshop, Express, and Acrobat actions | {{Freemium}} |
| **Wikipedia**, **arXiv** MCP | Reference lookups (community) | {{Free}} |
:::

## Finding, hosting, and managing servers
# Find a Tool by Task

Don't know the category? Start from what you want to do. Each row points you to the chapter to browse. The examples are tools listed in this directory, not rankings.

:::compact
| I want to… | Look in | Examples to try first |
|---|---|---|
| Ask questions, write, brainstorm | Chat Assistants | ChatGPT, Claude, Gemini, Copilot |
| Get answers with sources | Research, Search, and Learning | Perplexity, NotebookLM, Elicit, Consensus |
| Build a website or app without coding | Coding and Vibe Coding | Lovable, Bolt, Replit, v0 |
| Code faster as a developer | Coding and Vibe Coding | Cursor, GitHub Copilot, Claude Code |
| Make an image or logo | Images and Graphic Design | ChatGPT images, Midjourney, Canva, Adobe Firefly |
| Make a short video | Video | Veo (Gemini), Runway, Kling, CapCut |
| Edit a podcast or video by editing text | Audio, Voice, and Music / Video | Descript |
| Turn text into natural speech | Audio, Voice, and Music | ElevenLabs, Speechify |
| Dictate instead of typing | Audio, Voice, and Music | Wispr Flow, Superwhisper |
| Take meeting notes automatically | Productivity and Office | Granola, Otter, Fireflies, Fathom |
| Make slides | Productivity and Office | Gamma, Copilot in PowerPoint, Canva |
| Translate documents | Writing and Content | DeepL |
| Fix grammar and tone | Writing and Content | Grammarly |
| Learn a language or subject | Research, Search, and Learning | Duolingo, Khanmigo, Quizlet |
| Analyse a spreadsheet | Productivity and Office / Business | Julius, Rows, ChatGPT data analysis |
| Automate tasks between apps | Automation and Workflows | n8n, Zapier, Make |
| Build an AI agent | Agents and Agent Platforms | n8n AI Agent, Lindy, Relevance AI |
| Answer customer questions | Business and Work | Intercom Fin, Zendesk AI, Tidio |
| Run AI models on my own computer | Developer Infrastructure | Ollama, LM Studio, GPT4All |
| Connect AI to my apps | Connectors / MCP Servers | Notion, GitHub, Google Drive connectors |
:::

# How to Evaluate Any AI Tool

New AI tools launch every day. Use this fifteen-minute checklist before you trust one with your time, money, or data.

:::steps The 15-minute evaluation
1. **Define the job.** Write one sentence: "I need a tool that ___ so that ___."
2. **Check who makes it.** Is the company identifiable, with a real website, a privacy policy, and contact details?
3. **Read the pricing page.** Note free-tier limits, what counts as "usage" or "credits," and how cancellation works.
4. **Read the data policy.** Is your content used for training? Can you opt out? Where is the data stored?
5. **Run your real test.** Use a realistic but non-sensitive sample of your actual work.
6. **Compare against your current tool.** Run the same task in a general assistant you already use. Is the new tool clearly better?
7. **Check the exit.** Can you export your data in a standard format?
8. **Decide and set a reminder.** If you start a trial, put the cancellation date in your calendar.
:::

## Scorecard

| Question | Score 0–2 |
|---|---|
| Does it do my job better than what I already have? | |
| Is the output accurate in my test? | |
| Is the pricing clear and predictable? | |
| Is the privacy policy acceptable for my data? | |
| Can I export my work? | |
| Is the company established, or the project well maintained? | |
| **Total (≥ 9 = worth adopting)** | |

## Red flags

:::checklist
- Promises of guaranteed income, profits, or "passive money"
- No pricing page, or pricing only "on request" for a consumer tool
- Asks for passwords to other services instead of using official sign-in (OAuth)
- Browser extensions requesting access to "all websites" without a clear reason
- No way to delete your account or data
- Fake-looking reviews, or a brand-new site with celebrity endorsements
:::

# More Categories

Smaller categories that don't fit neatly elsewhere. Price labels follow the same rules as the rest of the directory. Confirm details on the vendor's site.

## Accessibility

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Be My Eyes** | Describes surroundings, labels, and screens for blind and low-vision users, with an AI assistant and volunteer video calls | {{Free}} |
| **Seeing AI** (Microsoft) | Phone app that narrates text, documents, people, and scenes | {{Free}} |
| **Live Captions** (Android, iOS, Windows) | Built-in, on-device captions for any audio | {{Free}} |
:::

## Spatial and 3D design

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Spline** | Browser-based 3D design with AI generation features | {{Freemium}} |
| **Meshy** | Text- or image-to-3D models for games and printing | {{Freemium}} |
| **Tripo** | Fast image- and text-to-3D model generation | {{Freemium}} |
:::

## Math and science

:::compact
| Tool | What it does | Price |
|---|---|---|
| **WolframAlpha** | Computational answers for math, science, and data, with step-by-step solutions on paid plans | {{Freemium}} |
| **Photomath** | Point your camera at a math problem for step-by-step explanations | {{Freemium}} |
:::

## Data and analytics

:::compact
| Tool | What it does | Price |
|---|---|---|
| **Hex** | Collaborative data notebooks with an AI assistant for SQL and Python | {{Freemium}} |
| **Read AI** | Meeting summaries, plus analytics on meetings, email, and messages | {{Freemium}} |
:::

## Creative video

:::compact
| Tool | What it does | Price |
|---|---|---|
| **MCP Registry** | Official public list of servers | {{Free}} |
| **Smithery** | Directory and hosting for MCP servers | {{Freemium}} |
| **Glama** | MCP directory and hosted gateway | {{Freemium}} |
| **PulseMCP**, **mcp.so** | Community directories | {{Free}} |
| **MCP Inspector** | Official tool to test a server | {{Free}} |
| **FastMCP** | Build Python servers quickly | {{Free}} |
| **mcp-use** | Connect any model to any server | {{Free}} |
| **mcp-remote** | Bridge remote servers to local-only apps | {{Free}} |
| **MetaMCP** | Combine many servers behind one | {{Free}} |
| **Klavis AI** | Hosted MCP integrations | {{Freemium}} |
| **Cloudflare remote MCP** | Host your own remote server | {{Freemium}} |
:::

> [!CAUTION]
> An MCP server can read and change whatever you let it reach. Install community servers only from sources you trust, give the narrowest access possible, and review what an agent wants to do before you approve it.
| **Kaiber** | Stylised music videos and animations from images and audio | {{Paid}} |
:::

# Starter Stacks by Persona

These stacks combine tools from this directory. Each one starts with **free or freemium options**, labeled as in the main listings, so you can try it without paying. Plans and limits change, so check each tool's pricing page before you commit. These are suggestions, not endorsements. Start with one tool per row and add more only when you hit a real limit.

## Student

| Need | Start with | Notes |
|---|---|---|
| Ask and explain | **ChatGPT**, **Claude** or **Gemini** {{Freemium}} | Use "quiz me" and "explain step by step", and follow your school's AI rules |
| Study from your own materials | **NotebookLM** {{Freemium}} | Answers are grounded in the sources you upload |
| Math and science | **WolframAlpha** {{Freemium}}, **Photomath** {{Freemium}} | Use them to check working, not to skip it |
| Research papers | **Elicit** or **Consensus** {{Freemium}} | Always open and read the actual paper |
| Notes and planning | **Notion** {{Freemium}} | See the Notion manual's *Notion for Students* chapter |
| Writing polish | **Grammarly** {{Freemium}} | Fix grammar, but keep your own voice |

## Small business owner

| Need | Start with | Notes |
|---|---|---|
| Everyday assistant | **ChatGPT**, **Claude** or **Gemini** {{Freemium}} | Use business or team plans if you'll share customer data |
| Marketing graphics | **Canva** {{Freemium}} | Set up your brand colors once |
| Presentations | **Gamma** {{Freemium}} | Edit every claim before presenting |
| Meeting notes | **Otter**, **Fireflies** or **Granola** {{Freemium}} | Get consent before recording |
| Automations | **Zapier**, **Make** or **n8n** {{Freemium}} | See the n8n manual for self-hosting |
| Website | **Webflow** {{Freemium}} or an app builder such as **Lovable** {{Freemium}} | Connect your own domain |

## Content creator

| Need | Start with | Notes |
|---|---|---|
| Scripts and ideas | **ChatGPT**, **Claude** or **Gemini** {{Freemium}} | Give it your past posts to match your voice |
| Video editing | **CapCut** {{Freemium}}, **Descript** {{Freemium}} | Descript edits video by editing the transcript |
| Generated video | **Runway** or **Kling** {{Freemium}} | Credits run out fast, so plan shots first |
| Voice | **ElevenLabs** {{Freemium}} | Clone only your own voice, or with written consent |
| Music | **Suno** {{Freemium}} | Check the plan's commercial-use terms before monetizing |
| Images | **Canva** {{Freemium}}, **Midjourney** {{Paid}} | Disclose AI imagery where platforms require it |

## Beginner builder (vibe coder)

| Need | Start with | Notes |
|---|---|---|
| Build in the browser | **Lovable** or **Bolt** {{Freemium}} | See the Vibe Coding manual |
| AI code editor | **Cursor** {{Freemium}} | Move here once you outgrow the browser builders |
| Backend and database | **Supabase** {{Freemium}} | Turn on row-level security |
| Hosting | **Vercel** {{Freemium}} | Use preview deployments for every branch |
| Design | **Figma** {{Freemium}} | Prototype screens before you prompt |

## Accessibility-first

| Need | Start with | Notes |
|---|---|---|
| Describe the world | **Be My Eyes** {{Free}}, **Seeing AI** {{Free}} | Phone camera to spoken description |
| Cleaner audio on calls | **Krisp** {{Freemium}} | Noise and echo removal |
| Captions and transcripts | **Otter** {{Freemium}} | Many video-call apps also have built-in captions |
| Read and summarize | Any chat assistant's voice mode {{Freemium}} | Ask for a plain-language summary |

## Data and analytics

| Need | Start with | Notes |
|---|---|---|
| Notebook-style analysis | **Hex** {{Freemium}} | The Community plan is free |
| Quick questions on a spreadsheet | A chat assistant with file upload {{Freemium}} | Remove personal data first, and check totals by hand |
| Research synthesis | **Perplexity** {{Freemium}} | Click through to every source |

# Choosing Between Similar Tools: Decision Guides

When three tools look the same, these questions usually settle it.

| If you're choosing between… | Ask | Lean toward |
|---|---|---|
| Chat assistants | Which ecosystem do you already live in? | The assistant built into it (Google → Gemini, Microsoft → Copilot), or try two for a week |
| App builders vs AI editors | Do you want to see or touch code? | No: an app builder. Yes: an AI editor or coding agent |
| Automation platforms | Do you need self-hosting or code steps? | Yes: n8n. Simplest setup: Zapier. Visual branching on a budget: Make |
| Meeting note-takers | Bot in the call, or bot-free? | Granola-style bot-free capture if guests dislike bots, otherwise whichever integrates with your calendar and CRM |
| Image generators | Photoreal, illustration, or text in images? | Run the same prompt on each one's free tier, and compare |
| Research tools | Academic papers or the general web? | Papers: Elicit or Consensus. Web: Perplexity or a search-enabled chat assistant |

## A two-week trial method

:::steps
1. Write down **3 real tasks** you'll do in the next two weeks.
2. Run every task in **two candidate tools**. Same input, same time limit.
3. Score each one 1–5 on quality, speed, ease of use and cost (use the *Scorecard* in *How to Evaluate Any AI Tool*).
4. Check the privacy settings and data-retention policy before uploading anything sensitive.
5. Keep the winner, cancel the other before the trial bills you, and set a calendar reminder to re-evaluate in 6 months.
:::

# Index of Categories {.unnumbered}

:::compact
| Category | What you will find |
|---|---|
| **Chat Assistants** | general AI, extensions, desktop apps, companions |
| **Coding** | editors, agents, IDE extensions, app and site builders, review, testing |
| **Images and Design** | generation, photo editing, diagrams, 3D, game assets |
| **Video** | generation, avatars, editing, dubbing |
| **Audio** | voices, speech APIs, meeting notes, music |
| **Writing** | grammar, copy, translation, AI detectors |
| **Research** | search engines, academic tools |
| **Education** | tutors, languages, teacher tools |
| **Health** | wellbeing apps, clinician tools |
| **Productivity** | notes, email, calendar, projects, slides, data, PDFs |
| **Business** | overview of AI at work |
| **Sales and CRM** | CRMs, prospecting, outreach |
| **Marketing and SEO** | SEO, AI visibility, social, ads, email |
| **Customer Support** | help desks, phone agents |
| **HR and Recruiting** | employer tools, job seekers |
| **Legal** | research, contracts, practice tools |
| **Finance** | accounting, personal finance |
| **Investing Research** | market data and research |
| **Automation** | workflow platforms and RPA |
| **Agents** | ready-made agents, browsers, frameworks, sandboxes |
| **Developer Infrastructure** | APIs, open models, inference, local runners, vectors, evals, hosting |
| **Connectors** | Claude connectors and plugins, ChatGPT apps, Zapier and n8n |
| **MCP Servers** | by domain, plus registries and tools |
:::

# Alphabetical Index {.unnumbered}

Every tool in the directory, with the chapter where you will find it. Some tools appear in more than one chapter.

:::cols
- **10Web**: Coding
- **11x**: Sales
- **15Five**: HR
- **Abacus.AI ChatLLM**: Chat
- **Abridge**: Health
- **ACE Studio**: Audio
- **Acrobat**: Connectors
- **ActiveCampaign**: Marketing
- **Activepieces**: Automation
- **Ada**: Health, Support
- **Adalo**: Coding
- **AdCreative.ai**: Business
- **Adobe**: Connectors
- **Adobe Acrobat AI Assistant**: Productivity
- **Adobe Express**: Images
- **Adobe Express video**: Video
- **Adobe Firefly**: Images
- **Adobe Firefly Video**: Video
- **Adobe Lightroom**: Images
- **Adobe MCP**: MCP
- **Adobe Photoshop**: Images, Connectors
- **Adobe Podcast**: Audio
- **Adobe Premiere (Generative Extend)**: Video
- **Adobe Stock**: Images
- **Adyen MCP**: MCP
- **Agent2Agent (A2A)**: Agents
- **Agenta**: Dev infra
- **Agentforce for Slack**: Agents
- **AgentKit**: Agents
- **Agno**: Agents
- **Ahrefs AI**: Business
- **AI21**: Dev infra
- **Ai2 Asta**: Research
- **AI Agent**: Connectors
- **AI by Zapier**: Connectors
- **Aider**: Coding
- **Aiera**: Investing
- **Aircall**: Support
- **Airtable**: Productivity, Connectors
- **Airtable MCP**: MCP
- **Airtop**: Agents
- **Airwallex**: Finance
- **Airwallex MCP**: MCP
- **AIVA**: Audio
- **Ajelix**: Productivity
- **Akiflow**: Productivity
- **Alexa+**: Chat
- **Algolia**: Dev infra
- **Algolia MCP**: MCP
- **Alibaba Cloud Model Studio**: Dev infra
- **AllTrails**: Connectors
- **Alpaca MCP**: MCP
- **AlphaSense**: Investing
- **alphaXiv**: Research
- **AlsoAsked**: Marketing
- **Amazon Bedrock**: Dev infra
- **Amazon Bedrock AgentCore**: Agents
- **Amazon Polly**: Audio
- **Amazon Q Developer**: Coding
- **Amazon S3 Vectors**: Dev infra
- **Amazon Textract**: Productivity
- **Ambience**: Health
- **Amp**: Coding
- **Amplemarket**: Sales
- **Amplitude**: Marketing
- **Amplitude MCP**: MCP
- **Anchor Browser**: Agents
- **Andi**: Research
- **Angular CLI MCP**: MCP
- **Anima**: Coding
- **Animaker**: Video
- **Anki**: Education
- **AnswerThePublic**: Marketing
- **Anthropic API**: Dev infra
- **Anthropic (Claude)**: Connectors
- **Anyscale**: Dev infra
- **AnythingLLM**: Chat
- **Anyword**: Writing
- **Apify**: Agents
- **Apify MCP**: MCP
- **Apollo**: Business, Connectors
- **Apollo MCP**: MCP
- **Apollo MCP Server**: MCP
- **Apple Intelligence**: Chat
- **Apple MCP**: MCP
- **Apple Music**: Connectors
- **Apple Notes**: Productivity
- **Apple Shortcuts**: Automation
- **Applitools**: Coding
- **AppSheet**: Coding
- **Appsmith**: Coding
- **Appwrite**: Dev infra
- **Aragon AI**: Images
- **Arc**: Agents
- **Arcade**: Agents
- **Arcads**: Video
- **Arc Search**: Research
- **Argil**: Video
- **Aria**: Agents
- **Arize AX**: Dev infra
- **Arize Phoenix**: Dev infra
- **Artbreeder**: Images
- **Artificial Analysis**: Dev infra
- **Artisan**: Sales
- **arXiv**: MCP
- **Asana**: Connectors
- **Asana AI**: Productivity
- **Asana MCP**: MCP
- **Ashby**: HR
- **AssemblyAI**: Audio, Connectors
- **assistant-ui**: Agents
- **Astra DB**: Dev infra
- **AthenaHQ**: Marketing
- **Atlan MCP**: MCP
- **Atlassian**: Connectors
- **Atlassian Remote MCP**: MCP
- **Attention**: Sales
- **Attio**: Sales
- **Attio MCP**: MCP
- **Augment Code**: Coding
- **Auphonic**: Audio
- **Auth0**: Dev infra
- **Auth0 MCP**: MCP
- **Autodesk Flow Studio**: Images
- **AutoGPT**: Agents
- **Automatic1111 / Forge**: Images
- **Automation Anywhere**: Automation
- **AutoPod**: Video
- **Avoma**: Audio
- **AWS Amplify**: Dev infra
- **AWS Labs MCP servers**: MCP
- **Axolotl**: Dev infra
- **Azure AI Search**: Dev infra
- **Azure AI Speech**: Audio
- **Azure DevOps MCP**: MCP
- **Azure Document Intelligence**: Productivity
- **Azure MCP**: MCP
- **B12**: Coding
- **Babbel**: Education
- **BambooHR**: HR
- **BandLab**: Audio
- **Bardeen**: Automation
- **Base44**: Coding, Connectors
- **Baseten**: Dev infra
- **Basic Memory**: MCP
- **Basis**: Finance
- **Beam**: Dev infra
- **Beatoven.ai**: Audio
- **Beautiful.ai**: Productivity
- **BeeAI**: Agents
- **beehiiv**: Marketing
- **Benchling**: MCP
- **Better Auth**: Dev infra
- **big-AGI**: Chat
- **Bigdata.com**: Investing, Connectors
- **BigQuery**: Connectors
- **BigQuery MCP**: MCP
- **Bika.ai**: Automation
- **Bill**: Finance
- **BioRender**: MCP
- **Bio-Research**: Connectors
- **bioRxiv**: Connectors
- **bioRxiv / medRxiv**: MCP
- **Bito**: Coding
- **Bland AI**: Support
- **Blender MCP**: MCP
- **Bloomberg Terminal**: Investing
- **Bluedot**: Audio
- **Bolt**: Coding
- **BoltAI**: Chat
- **Booke AI**: Finance
- **Booking.com**: Connectors
- **Boomy**: Audio
- **Botpress**: Support
- **Box**: Connectors
- **Box MCP**: MCP
- **Brainly**: Education
- **Braintrust**: Dev infra
- **Brand24**: Marketing
- **Brandmark**: Images
- **Brave**: Agents
- **Brave Leo**: Chat
- **Brave Search**: Research
- **Brave Search MCP**: MCP
- **Brevo**: Marketing
- **Brex**: Business
- **Bright Data**: Agents, Connectors
- **Bright Data MCP**: MCP
- **Brisk Teaching**: Education
- **Browse AI**: Agents
- **Browserbase**: Agents
- **Browserbase MCP**: MCP
- **Browserless**: Agents
- **Browser Use**: Agents
- **Browser Use MCP**: MCP
- **Bubble AI**: Coding
- **Budibase**: Coding
- **Buffer**: Marketing
- **Builder.io (Fusion)**: Coding
- **Buildkite MCP**: MCP
- **Burp Suite MCP**: MCP
- **Cal AI**: Health
- **Cal.com**: Productivity
- **Cal.com MCP**: MCP
- **Calendar**: MCP
- **Calendly**: Productivity
- **CAMB.AI**: Video
- **CAMEL**: Agents
- **Camtasia**: Video
- **Canary Mail**: Productivity
- **Canva**: Connectors
- **Canva AI**: Images
- **Canva MCP**: MCP
- **Canva Presentations**: Productivity
- **Canva Video**: Video
- **Capacities**: Productivity
- **CapCut**: Video
- **Captions**: Video
- **Careerflow**: HR
- **Carta**: Connectors
- **Cartesia**: Audio
- **Cascadeur**: Images
- **Castmagic**: Audio
- **Cerebras**: Dev infra
- **Cerebrium**: Dev infra
- **Chai**: Chat
- **Chainlit**: Agents
- **Character.AI**: Chat
- **Chatbase**: Support
- **Chatbox AI**: Chat
- **ChatGPT**: Chat
- **ChatGPT agent**: Agents
- **ChatGPT Atlas**: Agents
- **ChatGPT Canvas**: Coding
- **ChatGPT / Claude / Gemini Deep Research**: Research
- **ChatGPT Edu**: Education
- **ChatGPT Images**: Images
- **ChatGPT (OpenAI)**: Connectors
- **ChatGPT study mode**: Education
- **ChatHub**: Chat
- **ChatPDF**: Productivity
- **Chatterbox**: Audio
- **Chef**: Coding
- **ChEMBL**: Connectors, MCP
- **Cherry Studio**: Chat
- **Chroma**: Dev infra, MCP
- **Chrome DevTools MCP**: MCP
- **Circleback**: Audio
- **CircleCI MCP**: MCP
- **Civitai**: Images
- **Claap**: Audio
- **Clari**: Sales
- **Claude**: Chat
- **Claude Agent SDK**: Agents
- **Claude Artifacts**: Coding
- **Claude / ChatGPT file creation**: Productivity
- **Claude Code**: Coding, Agents
- **Claude Code as MCP**: MCP
- **Claude Code for VS Code / JetBrains**: Coding
- **Claude Code Review**: Coding
- **Claude Design**: Coding
- **Claude desktop agent**: Agents
- **Claude for Education**: Education
- **Claude in Chrome**: Agents
- **Claude learning mode**: Education
- **Clay**: Business
- **Cleanup.pictures**: Images
- **Cleanvoice**: Audio
- **Clearscope**: Writing
- **Cleo**: Finance
- **Clerk**: Dev infra
- **ClickHouse**: Connectors
- **ClickHouse MCP**: MCP
- **ClickUp**: Connectors
- **ClickUp Brain**: Productivity
- **ClickUp MCP**: MCP
- **Cline**: Coding
- **ClinicalTrials.gov**: Connectors, MCP
- **Clio**: Legal
- **Clipchamp**: Video
- **Clipdrop**: Images
- **Close**: Sales
- **Close MCP**: MCP
- **Cloudflare**: Dev infra, Connectors
- **Cloudflare AI Gateway**: Dev infra
- **Cloudflare MCP**: MCP
- **Cloudflare remote MCP**: MCP
- **Cloudflare Sandbox**: Agents
- **Cloudflare Vectorize**: Dev infra
- **Cloudflare Workers AI**: Dev infra
- **Cloudinary MCP**: MCP
- **CMS Coverage**: Connectors, MCP
- **CoCounsel**: Business
- **Coda AI**: Productivity
- **Codecademy**: Education
- **CodeGeeX**: Coding
- **CodeRabbit**: Coding
- **Codex**: Agents
- **Codex IDE extension**: Coding
- **Cognee**: Agents
- **Cognigy**: Support
- **Cognism**: Sales
- **Cohere**: Dev infra
- **Cohere Embed**: Dev infra
- **Cohere North**: Chat
- **Coinbase AgentKit**: MCP
- **CoinGecko MCP**: MCP
- **Colossyan**: Video
- **ComfyUI**: Images
- **commercetools MCP**: MCP
- **Common Room**: Sales, Connectors
- **Common Room MCP**: MCP
- **Composer**: Investing
- **Composio**: Agents, MCP
- **Confident AI**: Dev infra
- **Connected Papers**: Research
- **Consensus**: Research, Connectors
- **Contentful MCP**: MCP
- **Context7**: MCP
- **Continue**: Coding
- **Convex**: Dev infra
- **Convex MCP**: MCP
- **Coolors**: Images
- **Copilot CLI**: Coding
- **Copilot code review**: Coding
- **Copilot for Xcode**: Coding
- **CopilotKit**: Agents
- **Copilot Money**: Finance
- **Copy.ai**: Writing
- **Copyleaks**: Writing
- **CoreWeave**: Dev infra
- **Couchbase**: Dev infra
- **Couchbase MCP**: MCP
- **Coursera**: Education, Connectors
- **Coursera Coach**: Research
- **Craft**: Productivity
- **Craiyon**: Images
- **Crawl4AI**: Agents
- **Create / Anything**: Coding
- **Creatify**: Video
- **Credit Karma**: Finance, Connectors
- **CrewAI**: Agents
- **Crisp**: Support
- **Crowdin**: Writing
- **Crush**: Coding
- **Crusoe**: Dev infra
- **Crystal**: Sales
- **Cube**: Finance
- **Culture Amp**: HR
- **Curipod**: Education
- **Cursor**: Coding
- **Cursor Bugbot**: Coding
- **Cursor CLI**: Coding
- **Customer Support**: Connectors
- **CustomGPT.ai**: Support
- **Daloopa**: Investing, Connectors, MCP
- **Danelfin**: Investing
- **Databricks**: MCP
- **Databricks AI/BI Genie**: Productivity
- **Databutton**: Coding
- **Data Commons MCP**: MCP
- **Datadog**: Connectors, MCP
- **Datadog LLM Observability**: Dev infra
- **Datarails**: Finance
- **DataRobot MCP**: MCP
- **DaVinci Resolve (Neural Engine)**: Video
- **Daytona**: Agents
- **dbt MCP**: MCP
- **Decagon**: Business
- **Decktopus**: Productivity
- **Deel**: HR
- **DeepBrain AI Studios**: Video
- **Deepdub**: Video
- **DeepEval**: Dev infra
- **Deepgram**: Audio
- **DeepInfra**: Dev infra
- **DeepL Translator**: Writing
- **DeepL Write**: Writing
- **DeepMotion**: Images
- **Deepnote**: Productivity
- **DeepSeek**: Chat, Dev infra, Connectors
- **DeepSeek API**: Dev infra
- **DeepWiki**: Coding
- **DeepWiki MCP**: MCP
- **Demucs**: Audio
- **Descope**: Dev infra
- **Descript**: Video
- **Design**: Connectors
- **Desktop Commander**: MCP
- **Devin**: Coding, Agents
- **Devin Desktop**: Coding
- **Devstral**: Dev infra
- **Dia**: Agents
- **Dialpad**: Support
- **D-ID**: Video
- **Diffblue**: Coding
- **Diffbot**: Agents
- **Diffit**: Education
- **Dify**: Agents
- **DigitalOcean App Platform**: Dev infra
- **DigitalOcean Gradient AI**: Dev infra
- **DigitalOcean MCP**: MCP
- **Digits**: Finance
- **Discord**: MCP
- **Docker MCP Toolkit**: MCP
- **Docker Model Runner**: Dev infra
- **Docling**: Productivity
- **DocuSign**: Connectors
- **Docusign**: Connectors
- **Docusign IAM**: Legal
- **Docusign MCP**: MCP
- **Dola**: Productivity
- **Domo AI**: Video
- **DoorDash**: Connectors
- **Doubao**: Chat
- **Doximity GPT**: Health
- **draw.io**: Images
- **Droid**: Coding
- **Dropbox**: Connectors
- **Dropbox MCP**: MCP
- **DSPy**: Dev infra
- **Dubverse**: Video
- **Duck.ai**: Chat
- **Duolingo**: Education
- **Duolingo Max**: Research
- **Durable**: Coding
- **Dyad**: Coding
- **Dzine**: Images
- **E2B**: Agents
- **Eden AI**: Dev infra
- **Eduaide**: Education
- **eesel AI**: Support
- **Egnyte MCP**: MCP
- **Eightfold**: Business
- **Elai**: Video
- **Elasticsearch**: Dev infra
- **Elasticsearch MCP**: MCP
- **ElevenLabs**: Audio, Connectors
- **ElevenLabs Agents**: Agents
- **ElevenLabs Dubbing**: Video
- **ElevenLabs MCP**: MCP
- **ElevenLabs Music**: Audio
- **ElevenReader**: Audio
- **Elicit**: Research
- **ELSA Speak**: Education
- **Emergent**: Coding
- **Engineering**: Connectors
- **Enterprise Search**: Connectors
- **Eraser**: Images
- **ERNIE**: Chat
- **Eve**: Legal
- **EvenUp**: Legal
- **Evernote AI**: Productivity
- **Everything**: MCP
- **Exa**: Research, Connectors
- **Exa MCP**: MCP
- **Excalidraw**: Images
- **Excel Copilot / Agent Mode**: Productivity
- **ExLlamaV2**: Dev infra
- **Expedia**: Connectors
- **Expensify**: Finance
- **Explorium**: Sales
- **Explorium MCP**: MCP
- **Expo MCP**: MCP
- **Express**: Connectors
- **FaceApp**: Images
- **Factory**: Coding
- **FactSet**: MCP
- **FAISS**: Dev infra
- **fal**: Dev infra
- **Falcon**: Dev infra
- **fal MCP**: MCP
- **Fastly MCP**: MCP
- **FastMCP**: MCP
- **Fathom**: Audio, Connectors
- **Fellou**: Agents
- **Fellow**: Audio
- **Felo**: Research
- **Fetch**: MCP
- **Figma**: Connectors
- **Figma AI**: Images
- **Figma Dev Mode MCP**: MCP
- **Figma Make**: Coding
- **Filesystem**: MCP
- **Finance**: Connectors
- **Findem**: HR
- **Fintool**: Investing
- **Firebase**: Dev infra
- **Firebase MCP**: MCP
- **Firecrawl**: Agents
- **Firecrawl MCP**: MCP
- **FireCut**: Video
- **Fireflies**: Audio, Connectors
- **Fireflies MCP**: MCP
- **Firefox**: Agents
- **Fireworks AI**: Dev infra
- **Fiscal.ai**: Investing
- **Fish Audio**: Audio
- **Fitbod**: Health
- **Five9**: Support
- **Fliki**: Video
- **Flow**: Video
- **Flowframes**: Video
- **Flowise**: Agents
- **Flowith**: Agents
- **FlutterFlow**: Coding
- **FLUX**: Images
- **Fly.io**: Dev infra
- **folk**: Sales
- **Forethought**: Support
- **Formula Bot**: Productivity
- **Fotor**: Images
- **Foundry Local**: Dev infra
- **Foxit PDF Editor**: Productivity
- **Framer AI**: Coding
- **Frase**: Writing
- **Freed**: Health
- **Freepik AI Suite**: Images
- **FreshBooks**: Finance
- **Freshdesk**: Support
- **Freshsales**: Sales
- **Front**: Support
- **Fyxer AI**: Productivity
- **Galileo**: Dev infra
- **Galileo / Stitch**: Coding
- **Gamma**: Productivity
- **Gauth**: Education
- **GC AI**: Legal
- **Gem**: HR
- **Gemini**: Chat
- **Gemini Agent**: Agents
- **Gemini Canvas**: Coding
- **Gemini CLI**: Coding
- **Gemini Code Assist**: Coding
- **Gemini for Education**: Education
- **Gemini Guided Learning**: Education
- **Gemini in Android Studio**: Coding
- **Gemini in Chrome**: Agents
- **Gemini in Google Workspace**: Productivity
- **Gemini / Nano Banana**: Images
- **Gemini Notebook**: Research, Education
- **Gemma**: Dev infra
- **Genie AI**: Legal
- **Genspark**: Agents
- **Genspark Browser**: Agents
- **Getimg.ai**: Images
- **Getty Images Generative AI**: Images
- **Git**: MCP
- **GitBook**: Coding
- **GitGuardian MCP**: MCP
- **GitHub**: Connectors
- **GitHub Copilot**: Coding
- **GitHub Copilot Autofix**: Coding
- **GitHub Copilot coding agent**: Coding
- **GitHub MCP**: MCP
- **GitHub Spark**: Coding
- **GitLab Duo**: Coding
- **GitLab MCP**: MCP
- **GitMCP**: MCP
- **Gladia**: Audio
- **Gladly**: Support
- **Glama**: MCP
- **Glasp**: Chat
- **Glass Health**: Health
- **Glean**: Productivity
- **Glean MCP**: MCP
- **Glide**: Coding
- **Gling**: Video
- **GLM**: Dev infra
- **Gmail**: Connectors, MCP
- **Gmail with Gemini**: Productivity
- **GoDaddy Airo**: Coding
- **Gong**: Business, Connectors
- **Gong MCP**: MCP
- **Goodcall**: Support
- **Google ADK**: Agents
- **Google AI Edge Gallery**: Dev infra
- **Google AI Mode**: Research
- **Google AI Studio (Build)**: Coding
- **Google Antigravity**: Coding
- **Google Calendar**: Productivity, Connectors
- **Google Cloud MCP**: MCP
- **Google Cloud Text-to-Speech**: Audio
- **Google Colab**: Dev infra
- **Google Document AI**: Productivity
- **Google Drive**: Connectors, MCP
- **Google Gemini**: Connectors
- **Google Gemini API**: Dev infra
- **Google Keep**: Productivity
- **Google Lens**: Education
- **Google Maps MCP**: MCP
- **Google Meet "Take notes for me"**: Audio
- **Google Performance Max**: Marketing
- **Google Photos Magic Editor**: Images
- **Google Scholar**: Research
- **Google Sheets with Gemini**: Productivity
- **Google Slides with Gemini**: Productivity
- **Google Translate**: Writing
- **Google Veo**: Video
- **Google Workspace Flows**: Automation
- **Goose**: Coding
- **Gorgias**: Support
- **GPT4All**: Dev infra
- **GPT for Sheets and Docs**: Productivity
- **gpt-oss**: Dev infra
- **GPTZero**: Writing
- **Gradescope**: Education
- **Gradio**: Agents
- **Grafana**: Connectors, MCP
- **Grain**: Audio
- **Grammarly**: Writing
- **Granite**: Dev infra
- **Granola**: Audio, Connectors
- **Granola MCP**: MCP
- **Graphite**: Coding
- **Greenhouse**: HR
- **Greptile**: Coding
- **Grok**: Chat
- **Grok Imagine**: Video
- **Groq**: Dev infra, Connectors
- **GrowthBook MCP**: MCP
- **Guardrails AI**: Dev infra
- **Gumloop**: Automation, Connectors
- **Guru**: Productivity, Connectors
- **Guru MCP**: MCP
- **Gusto**: HR
- **Hailuo**: Video
- **Happy Scribe**: Audio
- **HARPA AI**: Chat
- **Harvey**: Business
- **HashiCorp Vault MCP**: MCP
- **Haystack**: Dev infra
- **HeadshotPro**: Images
- **Hebbia**: Business
- **Hedra**: Video
- **Heidi Health**: Health
- **Helicone**: Dev infra
- **Help Scout**: Support
- **Hemingway Editor**: Writing
- **Heptabase**: Productivity
- **Heroku**: Dev infra
- **Heroku MCP**: MCP
- **Hex**: Productivity
- **HeyGen**: Video
- **HiDream**: Images
- **Higgsfield**: Video
- **Higgsfield Soul**: Images
- **Highspot**: Sales
- **hireEZ**: HR
- **HireVue**: HR
- **Home Assistant**: Automation
- **Home Assistant MCP**: MCP
- **Honeycomb**: Connectors, MCP
- **HoneyHive**: Dev infra
- **Hootsuite**: Marketing
- **Hostinger AI Website Builder**: Coding
- **Hostinger Horizons**: Coding
- **Hotjar**: Marketing
- **Howie**: Productivity
- **H&R Block AI Tax Assist**: Finance
- **HubSpot**: Connectors
- **HubSpot Breeze**: Business
- **HubSpot Customer Agent**: Support
- **HubSpot MCP**: MCP
- **HuggingChat**: Chat
- **Hugging Face**: Dev infra, Connectors
- **Hugging Face MCP**: MCP
- **Human Resources**: Connectors
- **Humata**: Productivity
- **Hume**: Audio
- **Huntr**: HR
- **Hunyuan3D**: Images
- **HunyuanImage**: Images
- **HunyuanVideo**: Video
- **Hyperbolic**: Dev infra
- **Hyperbound**: Sales
- **Hyperbrowser**: Agents
- **Hyperbrowser MCP**: MCP
- **Hypotenuse AI**: Writing
- **iAsk**: Research
- **IBM watsonx.ai**: Dev infra
- **ICD-10 Codes**: Connectors, MCP
- **Ideogram**: Images
- **IFTTT**: Automation
- **Image Playground**: Images
- **ImagineArt**: Images
- **Inbox Zero**: Productivity
- **Inception**: Dev infra
- **Inciteful**: Research
- **Inngest**: Agents
- **Inngest AgentKit**: Agents
- **Inspect**: Dev infra
- **Instacart**: Connectors
- **Instantly**: Sales
- **Integrately**: Automation
- **Intercom**: Connectors
- **Intercom Fin**: Business
- **Intercom MCP**: MCP
- **Interfaces**: Automation
- **Intuit QuickBooks**: Connectors
- **InVideo AI**: Video
- **Inworld AI**: Images
- **Iris.ai**: Research
- **Ironclad**: Legal
- **iZotope Ozone**: Audio
- **Jamie**: Audio
- **Jan**: Dev infra
- **Jasper**: Writing
- **Jenni AI**: Writing
- **JetBrains AI**: Coding
- **Jina AI**: Dev infra
- **Jina AI MCP**: MCP
- **Jina Reader**: Agents
- **Jira with Rovo**: Productivity
- **Jobscan**: HR
- **Juicebox**: HR
- **Jules**: Coding
- **Julius AI**: Productivity
- **Junie**: Coding
- **Juro**: Legal
- **Kaedim**: Images
- **Kaggle**: Dev infra
- **Kagi**: Research
- **Kagi Assistant**: Chat
- **Kagi MCP**: MCP
- **Kahoot!**: Education
- **Kaiber**: Images
- **Kapwing**: Video
- **Kavout**: Investing
- **Keenious**: Research
- **Kernel**: Agents
- **Keyboard Maestro**: Automation
- **Khanmigo**: Research, Education
- **K Health**: Health
- **Khoj**: Chat
- **Khroma**: Images
- **Kickresume**: HR
- **Kilo Code**: Coding
- **Kimi**: Chat
- **Kimi Agent**: Agents
- **Kimi K2**: Dev infra
- **Kindroid**: Chat
- **KIRI Engine**: Images
- **Kiro**: Coding
- **Kit**: Marketing
- **Kits.ai**: Audio
- **Kittl**: Images
- **Klap**: Video
- **Klavis AI**: MCP
- **Klaviyo**: Marketing
- **Kling**: Video
- **Knowt**: Education
- **Koala AI**: Writing
- **KoboldCpp**: Dev infra
- **Kokoro**: Audio
- **Kong AI Gateway**: Dev infra
- **Kore.ai**: Support
- **Koyfin**: Investing
- **Krea**: Images
- **Krea Video**: Video
- **Krisp**: Audio
- **Kubernetes MCP**: MCP
- **Kustomer**: Support
- **Lakera**: Dev infra
- **LALAL.AI**: Audio
- **Lambda**: Dev infra
- **Laminar**: Dev infra
- **LanceDB**: Dev infra
- **LANDR**: Audio
- **LangChain**: Dev infra
- **Langflow**: Agents
- **Langfuse**: Dev infra
- **LangGraph**: Agents
- **Langroid**: Agents
- **LangSmith**: Dev infra
- **LanguageTool**: Writing
- **Lara Translate**: Writing
- **Later**: Marketing
- **Lattice**: HR
- **LaunchDarkly MCP**: MCP
- **Lavender**: Business
- **Leena AI**: HR
- **Legal**: Connectors
- **LegalOn**: Legal
- **Legora**: Legal
- **lemlist**: Sales
- **Lemonade**: Dev infra
- **Lensa**: Images
- **Leo**: Agents
- **Leonardo.ai**: Images
- **Let's Enhance**: Images
- **Letta**: Agents
- **Lever**: HR
- **Lex**: Writing
- **Lexis+ AI**: Legal
- **LibreChat**: Chat
- **Lightning AI**: Dev infra
- **Lindy**: Automation, Agents
- **Linear**: Productivity, Connectors
- **Linear MCP**: MCP
- **Liner**: Research
- **LinkedIn Hiring Assistant**: HR
- **Linkup MCP**: MCP
- **Liquid LFM**: Dev infra
- **Listnr**: Audio
- **LiteLLM**: Dev infra
- **Litmaps**: Research
- **LiveKit Agents**: Agents
- **Llama**: Dev infra
- **LlamaCloud**: Dev infra
- **llama.cpp**: Dev infra
- **LLaMA-Factory**: Dev infra
- **llamafile**: Dev infra
- **Llama Guard**: Dev infra
- **LlamaIndex**: Dev infra
- **LlamaParse**: Productivity
- **LLM**: Dev infra
- **LMArena**: Dev infra
- **LM Studio**: Dev infra
- **LobeChat**: Chat
- **LocalAI**: Dev infra
- **Locofy**: Coding
- **Logseq**: Productivity
- **Lokalise**: Writing
- **Looka**: Images
- **Looker with Gemini**: Productivity
- **Loom**: Video
- **Loudly**: Audio
- **Lovable**: Coding
- **LOVO**: Audio
- **LSEG**: Connectors, MCP
- **LTX-2**: Video
- **LTX Studio**: Video
- **Lucid**: Images, Connectors
- **Luma Dream Machine / Ray**: Video
- **Luma Photon**: Images
- **Lumen5**: Video
- **Luminance**: Legal
- **Luminar Neo**: Images
- **Lumo**: Chat
- **Lusha**: Sales, Connectors
- **Lusha MCP**: MCP
- **Lyria**: Audio
- **mabl**: Coding
- **MacWhisper**: Audio
- **Madgicx**: Marketing
- **Maestra**: Video
- **Magical**: Writing
- **MagicSchool**: Education
- **MagicSlides**: Productivity
- **Magnific**: Images
- **Magnitude**: Agents
- **Mailbutler**: Productivity
- **Mailchimp**: Marketing
- **Mailgun MCP**: MCP
- **Make**: Automation
- **Make AI Agents**: Automation
- **Make MCP**: MCP
- **Mammouth**: Chat
- **Manus**: Agents
- **Mapbox MCP**: MCP
- **Mapify**: Productivity
- **Marker**: Productivity
- **Marketing**: Connectors
- **MarketMuse**: Marketing
- **Mastra**: Agents
- **Mathway**: Education
- **MaxAI**: Chat
- **MCP Client Tool**: Connectors
- **MCP Inspector**: MCP
- **MCP Registry**: MCP
- **mcp-remote**: MCP
- **MCP Server Trigger**: Connectors
- **mcp.so**: MCP
- **MCP Toolbox for Databases**: MCP
- **mcp-use**: MCP
- **MeetGeek**: Audio
- **Meilisearch**: Dev infra
- **Meilisearch MCP**: MCP
- **Meltwater**: Marketing
- **Mem**: Productivity
- **Mem0**: Agents
- **Mem0 MCP**: MCP
- **Memory**: MCP
- **Memrise**: Education
- **Mercury**: Finance
- **Mercury MCP**: MCP
- **Merlin**: Chat
- **Mermaid Chart**: Images
- **Meshy**: Images
- **Meta Advantage+**: Marketing
- **Meta AI**: Chat
- **Meta AI Imagine**: Images
- **Metabase**: Productivity
- **MetaGPT**: Agents
- **Meta Llama**: Dev infra
- **MetaMCP**: MCP
- **Metaview**: HR
- **Metricool**: Marketing
- **Microsoft 365**: Connectors
- **Microsoft 365 Copilot**: Productivity
- **Microsoft 365 Copilot agents**: Agents
- **Microsoft Agent Framework**: Agents
- **Microsoft Clarity**: Marketing
- **Microsoft Copilot**: Chat
- **Microsoft Copilot Actions**: Agents
- **Microsoft Copilot Search**: Research
- **Microsoft Copilot Studio**: Agents
- **Microsoft Copilot Studio flows**: Automation
- **Microsoft Designer / Bing Image Creator**: Images
- **Microsoft Dragon Copilot**: Health
- **Microsoft Dynamics 365 Sales**: Sales
- **Microsoft Edge Copilot Mode**: Agents
- **Microsoft Foundry**: Dev infra
- **Microsoft Learn MCP**: MCP
- **Microsoft Loop**: Productivity
- **Microsoft Power Automate**: Automation
- **Microsoft Teams Copilot / Google Meet Gemini**: Audio
- **Microsoft Translator**: Writing
- **Midjourney**: Images
- **Midjourney Video**: Video
- **Milvus MCP**: MCP
- **Milvus / Zilliz**: Dev infra
- **MindMeister**: Productivity
- **MinerU**: Productivity
- **MiniMax Agent**: Chat
- **MiniMax API**: Dev infra
- **MiniMax M**: Dev infra
- **Mintlify**: Coding
- **Miro**: Connectors
- **Miro AI**: Images
- **Miro MCP**: MCP
- **Missive**: Productivity
- **Mistral**: Dev infra
- **Mistral AI**: Dev infra, Connectors
- **Mistral OCR**: Productivity
- **Mistral Vibe**: Coding
- **Mixedbread**: Dev infra
- **Mixpanel**: Marketing
- **Mixpanel MCP**: MCP
- **MLC LLM**: Dev infra
- **MLflow**: Dev infra
- **MLX**: Dev infra
- **mlx-lm**: Dev infra
- **Mocha**: Coding
- **Mochi**: Video
- **Modal**: Dev infra
- **Modash**: Marketing
- **Moises**: Audio
- **Momentic**: Coding
- **Momentum**: Sales
- **Monarch Money**: Finance
- **monday AI**: Productivity
- **monday.com**: Connectors
- **Monday.com**: Connectors
- **monday.com MCP**: MCP
- **monday CRM**: Sales
- **MongoDB Atlas Vector Search**: Dev infra
- **MongoDB MCP**: MCP
- **Monica**: Chat
- **Moonshot API**: Dev infra
- **Moonvalley Marey**: Video
- **Morgen**: Productivity
- **Morphic**: Research
- **MotherDuck / DuckDB MCP**: MCP
- **Motiff**: Images
- **Motion**: Productivity
- **Move.ai**: Images
- **Moveworks**: HR
- **Moz**: Marketing
- **Msty**: Chat
- **Mubert**: Audio
- **Murf**: Audio
- **MusicFX DJ**: Audio
- **Mux MCP**: MCP
- **MyFitnessPal**: Health
- **n8n**: Automation, Connectors
- **n8n instance MCP**: MCP
- **Nabla**: Health
- **Nanobrowser**: Agents
- **Nanonets**: Productivity
- **Napkin AI**: Images
- **Narakeet**: Audio
- **NaturalReader**: Audio
- **Navan**: Finance
- **Nebius AI Studio**: Dev infra
- **NeMo Guardrails**: Dev infra
- **Nemotron**: Dev infra
- **Neo4j MCP**: MCP
- **Neon**: Dev infra, Connectors
- **Neon MCP**: MCP
- **Netlify**: Dev infra, Connectors
- **Netlify MCP**: MCP
- **NetSuite**: Finance
- **NetSuite MCP**: MCP
- **NeuronWriter**: Marketing
- **Next.js DevTools MCP**: MCP
- **NightCafe**: Images
- **Nimble MCP**: MCP
- **Node-RED**: Automation
- **Nomi**: Chat
- **Nomic Embed**: Dev infra
- **Nooks**: Sales
- **Noota**: Audio
- **Norton Neo**: Agents
- **Not Diamond**: Dev infra
- **Notion**: Connectors
- **Notion AI**: Productivity
- **Notion AI Meeting Notes**: Audio
- **Notion Custom Agents**: Agents
- **Notion Mail / Calendar**: Productivity
- **Notion MCP**: MCP
- **Notta**: Audio
- **NovelAI**: Writing
- **Novelcrafter**: Writing
- **Novita AI**: Dev infra
- **NPI Registry**: Connectors, MCP
- **Numeric**: Finance
- **NVIDIA Broadcast**: Audio
- **NVIDIA NIM**: Dev infra
- **Nx MCP**: MCP
- **Obsidian**: Productivity
- **Obsidian MCP**: MCP
- **Octoparse**: Agents
- **Ollama**: Dev infra, Connectors
- **OLMo**: Dev infra
- **Onyx**: Dev infra
- **OpenAI Agents SDK**: Agents
- **OpenAI API**: Dev infra
- **OpenAI Codex**: Coding
- **OpenAI voice**: Audio
- **OpenArt**: Images
- **opencode**: Coding
- **OpenEvidence**: Health
- **OpenHands**: Coding
- **OpenRouter**: Dev infra, Connectors
- **OpenSearch**: Dev infra
- **OpenTable**: Connectors
- **Open Targets**: Connectors, MCP
- **Open WebUI**: Chat
- **Opera Neon**: Agents
- **Opera One**: Agents
- **Operations**: Connectors
- **Opik**: Dev infra
- **OpusClip**: Video
- **Oracle OCI Generative AI**: Dev infra
- **Origin**: Finance
- **Originality.ai**: Writing
- **Orum**: Sales
- **Otter**: Audio, Connectors
- **Otterly.AI**: Marketing
- **Oura Advisor**: Health
- **Outlook with Copilot**: Productivity
- **Outreach**: Sales
- **Oxylabs**: Agents
- **Oxylabs MCP**: MCP
- **Pabbly Connect**: Automation
- **Paddle MCP**: MCP
- **PagerDuty**: Connectors
- **PagerDuty MCP**: MCP
- **PandaDoc**: Productivity
- **Pangram**: Writing
- **Papago**: Writing
- **Paperpal**: Writing
- **Paradox**: Business
- **Parallel MCP**: MCP
- **Parloa**: Support
- **Parseur**: Productivity
- **Paxton**: Legal
- **PayPal**: Connectors
- **PayPal MCP**: MCP
- **PDF.ai**: Productivity
- **PDFelement**: Productivity
- **Peec AI**: Marketing
- **PEFT**: Dev infra
- **Peloton**: Connectors
- **Pencil**: Marketing
- **Penpot**: Images
- **Perplexity**: Chat, Research, Connectors
- **Perplexity Comet**: Agents
- **Perplexity Finance**: Investing
- **Perplexity Labs**: Agents
- **Perplexity Sonar API**: Dev infra
- **Perplexity (Sonar) MCP**: MCP
- **Persana**: Sales
- **pgvector**: Dev infra
- **Phi**: Dev infra
- **Photomath**: Education
- **Photoroom**: Images
- **Phrase**: Writing
- **Pi**: Chat
- **Picsart**: Images
- **Pictory**: Video
- **PicWish**: Images
- **Pieces**: Coding
- **Pigment**: Finance
- **Pika**: Video
- **Piktochart**: Images
- **Pilot**: Finance
- **Pinecone**: Dev infra, Connectors, MCP
- **Pinecone Assistant**: Dev infra
- **Pipecat**: Agents
- **Pipedream**: Automation
- **Pipedream MCP**: MCP
- **Pipedrive**: Sales
- **Piper**: Audio
- **Pitch**: Productivity
- **Pixelcut**: Images
- **Pixeltable MCP**: MCP
- **Pixlr**: Images
- **PixVerse**: Video
- **Plaid MCP**: MCP
- **Plain**: Support
- **Plandex**: Coding
- **PlanetScale**: Dev infra, Connectors
- **PlanetScale MCP**: MCP
- **Plaud Note**: Audio
- **Playground**: Images
- **Playwright MCP**: MCP
- **Plus AI**: Productivity
- **PocketBase**: Dev infra
- **PocketPal AI**: Dev infra
- **Podcastle**: Audio
- **Poe**: Chat
- **Pollo AI**: Video
- **PolyAI**: Support
- **Polycam**: Images
- **PopAi**: Productivity
- **Portkey**: Dev infra
- **Postgres MCP Pro**: MCP
- **PostHog**: Marketing
- **PostHog MCP**: MCP
- **Postiz**: Marketing
- **Postiz MCP**: MCP
- **Postman MCP**: MCP
- **Postmark MCP**: MCP
- **Power Apps**: Coding
- **Power Automate Desktop**: Automation
- **Power BI Copilot**: Productivity
- **Power BI MCP**: MCP
- **PowerPoint Copilot**: Productivity
- **Praktika**: Education
- **Predis.ai**: Marketing
- **Presentations.AI**: Productivity
- **Prezi AI**: Productivity
- **Prisma MCP**: MCP
- **Prisma Postgres**: Dev infra
- **PrivateGPT**: Dev infra
- **Private LLM**: Dev infra
- **Producer.ai**: Audio
- **Productivity**: Connectors
- **Product Management**: Connectors
- **Profound**: Marketing
- **Promptfoo**: Dev infra
- **PromptLayer**: Dev infra
- **ProWritingAid**: Writing
- **Publer**: Marketing
- **Public**: Investing
- **PubMed**: Connectors, MCP
- **PulseMCP**: MCP
- **Pulumi MCP**: MCP
- **Puzzle**: Finance
- **Pydantic AI**: Agents
- **Pydantic Logfire**: Dev infra
- **Pylon**: Support
- **QA Wolf**: Coding
- **Qdrant**: Dev infra, Connectors, MCP
- **Qodo**: Coding
- **Qodo Gen**: Coding
- **Quadratic**: Productivity
- **Quartr**: Investing
- **QuickBooks**: Connectors
- **QuickBooks Intuit Assist**: Business
- **QuickBooks MCP**: MCP
- **QuillBot**: Writing
- **Quizlet AI**: Research
- **Qwen**: Dev infra
- **Qwen Chat**: Chat
- **Qwen Code**: Coding
- **Qwen-Image**: Images
- **Ragas**: Dev infra
- **RAGFlow**: Dev infra
- **Ragie**: Dev infra
- **Railway**: Dev infra
- **Railway MCP**: MCP
- **RamaLama**: Dev infra
- **Ramp**: Business
- **Ramp MCP**: MCP
- **Rasa**: Agents
- **Rask AI**: Video
- **Raycast AI**: Productivity
- **Razorpay MCP**: MCP
- **RB2B**: Sales
- **Read AI**: Audio
- **Readwise Reader**: Research
- **Recall**: Research
- **Reclaim**: Productivity
- **Recraft**: Images
- **Redis**: Dev infra
- **Redis MCP**: MCP
- **Reducto**: Productivity
- **Ref**: MCP
- **Refact.ai**: Coding
- **Reflect**: Productivity
- **Regie.ai**: Sales
- **Relay.app**: Automation
- **Relevance AI**: Agents
- **Relume**: Coding
- **Remini**: Images
- **RemNote**: Education
- **remove.bg**: Images
- **Render**: Dev infra
- **Render MCP**: MCP
- **Replicate**: Dev infra
- **Replicate MCP**: MCP
- **Replika**: Chat
- **Replit**: Coding, Connectors
- **Reply.io**: Sales
- **Requesty**: Dev infra
- **Rerank**: Dev infra
- **Research Rabbit**: Research
- **Resemble AI**: Audio
- **Resend**: Dev infra
- **Resend MCP**: MCP
- **Respeecher**: Audio
- **Retell**: Agents
- **Retool**: Coding
- **Rev**: Audio
- **Rev AI**: Audio
- **Reve**: Images
- **Reverso**: Writing
- **Rezi**: HR
- **Rippling**: HR
- **Riverside**: Audio
- **Roblox Assistant**: Images
- **Rocket Money**: Finance
- **Rodin**: Images
- **Rogo**: Business
- **Rokoko Vision**: Images
- **Roo Code**: Coding
- **Rork**: Coding
- **Rosie**: Support
- **Rovo Dev**: Coding
- **Rows**: Productivity
- **RunPod**: Dev infra
- **Runware**: Dev infra
- **Runway**: Video
- **Rytr**: Writing
- **Sage Copilot**: Finance
- **Sales**: Connectors
- **Salesforce**: Connectors
- **Salesforce Agentforce**: Business
- **Salesforce MCP**: MCP
- **Salesloft**: Sales
- **SambaNova Cloud**: Dev infra
- **Samsung Galaxy AI**: Chat
- **SaneBox**: Productivity
- **Saner.ai**: Productivity
- **Sanity**: Connectors
- **Sanity MCP**: MCP
- **Scaniverse**: Images
- **Scenario**: Images
- **Scholarcy**: Research
- **SchoolAI**: Education
- **SciSpace**: Research
- **Scite**: Research
- **ScrapeGraphAI MCP**: MCP
- **ScraperAPI**: Agents
- **ScrapingBee**: Agents
- **Screaming Frog**: Marketing
- **Screenpipe**: Productivity
- **Scribe**: Video
- **Scrunch AI**: Marketing
- **SeaArt**: Images
- **Seamless.AI**: Sales
- **Search Atlas**: Marketing
- **Second Nature**: Sales
- **Seedance**: Video
- **Seedream**: Images
- **Seeking Alpha**: Investing
- **SeekOut**: HR
- **Seismic**: Sales
- **Semantic Scholar**: Research
- **Sembly**: Audio
- **Semgrep**: Coding
- **Semgrep MCP**: MCP
- **Semrush AI**: Business
- **Sentry**: Dev infra, Connectors
- **Sentry MCP**: MCP
- **Sequential Thinking**: MCP
- **SE Ranking**: Marketing
- **Serena**: MCP
- **SerpApi MCP**: MCP
- **ServiceNow MCP**: MCP
- **SGLang**: Dev infra
- **shadcn MCP**: MCP
- **Shopify**: Connectors
- **Shopify Dev MCP**: MCP
- **Shopify Magic / Sidekick**: Coding
- **Shopify Storefront MCP**: MCP
- **Shortwave**: Productivity
- **Shutterstock AI**: Images
- **Sider**: Chat
- **Siena AI**: Support
- **Sierra**: Business
- **SigNoz**: Connectors
- **SillyTavern**: Chat
- **Similarweb**: Marketing
- **Simplified**: Writing
- **Simplify**: HR
- **Simply Wall St**: Investing
- **SingleStore**: Dev infra
- **SingleStore MCP**: MCP
- **Siri**: Chat
- **Skybox AI**: Images
- **Skyvern**: Agents
- **Skywork**: Productivity
- **Slack**: Connectors
- **Slack AI**: Productivity
- **Slack MCP**: MCP
- **Slang.ai**: Support
- **SlidesAI**: Productivity
- **Sloyd**: Images
- **Small Business**: Connectors
- **Smallpdf**: Productivity
- **Smartcat**: Writing
- **Smartlead**: Sales
- **Smartsheet**: Productivity
- **Smartsheet MCP**: MCP
- **Smith.ai**: Support
- **Smithery**: MCP
- **smolagents**: Agents
- **SmolLM**: Dev infra
- **Snapseed**: Images
- **Snowflake**: MCP
- **Snowflake Cortex AI**: Dev infra
- **Snyk**: Coding
- **Snyk MCP**: MCP
- **Socket**: Coding
- **Socket MCP**: MCP
- **Softr**: Coding
- **SonarQube**: Coding
- **SonarQube MCP**: MCP
- **Soniox**: Audio
- **Sonix**: Audio
- **Soundful**: Audio
- **Soundraw**: Audio
- **Sourcegraph**: Coding
- **Sourcery**: Coding
- **Spark**: Productivity
- **Speak**: Education
- **Speechify**: Audio
- **Speechmatics**: Audio
- **Spellbook**: Business
- **S&P Global**: Connectors, MCP
- **Spinach AI**: Audio
- **Splice**: Audio
- **Spline**: Images
- **Spotify**: Connectors
- **Sprout Social**: Marketing
- **Square**: Connectors
- **Square MCP**: MCP
- **Squarespace Blueprint AI**: Coding
- **Squibler**: Writing
- **Stability AI API**: Dev infra
- **Stable Audio**: Audio
- **Stable Diffusion**: Images
- **StackHawk MCP**: MCP
- **Stagehand**: Agents
- **Stampli**: Finance
- **Statista AI**: Research
- **Steel**: Agents
- **Steve AI**: Video
- **Storyblok MCP**: MCP
- **Storybook MCP**: MCP
- **Storydoc**: Productivity
- **Strands Agents**: Agents
- **Strava Athlete Intelligence**: Health
- **Streamlit**: Agents
- **Stripe**: Dev infra, Connectors
- **Stripe MCP**: MCP
- **StudyFetch**: Education
- **Stytch**: Dev infra
- **Submagic**: Video
- **Subtitle Edit**: Video
- **Sudowrite**: Writing
- **Suki**: Health
- **Suno**: Audio
- **Sunsama**: Productivity
- **Supabase**: Dev infra, Connectors
- **Supabase MCP**: MCP
- **Supabase Vector**: Dev infra
- **Superhuman**: Productivity
- **Supermemory**: Agents
- **Supernormal**: Audio
- **Superwhisper**: Audio
- **Supio**: Legal
- **Surfer SEO**: Writing
- **Svelte MCP**: MCP
- **SWE-agent**: Coding
- **Swimm**: Coding
- **Symbolab**: Education
- **Synapse**: MCP
- **Synthesia**: Video
- **Synthesis Tutor**: Education
- **Synthesizer V**: Audio
- **Synthflow**: Support
- **T3 Chat**: Chat
- **Tabby**: Coding
- **Tableau Agent**: Productivity
- **Tableau MCP**: MCP
- **Tabnine**: Coding
- **Tactiq**: Audio
- **Talkdesk**: Support
- **Talkie**: Chat
- **Talkpal**: Education
- **Tana**: Productivity
- **Tango**: Video
- **Taplio**: Marketing
- **Taskade**: Productivity
- **Tasker**: Automation
- **Tavily**: Research, Connectors
- **Tavily MCP**: MCP
- **Tavus**: Video
- **Teal**: HR
- **Telegram**: MCP
- **Tella**: Video
- **Temporal**: Agents
- **Tensor.Art**: Images
- **TensorRT-LLM**: Dev infra
- **Terraform MCP**: MCP
- **Testim**: Coding
- **Text Blaze**: Writing
- **text-generation-webui**: Dev infra
- **Textio**: Business
- **ThoughtSpot Spotter**: Productivity
- **Thunderbit**: Agents
- **Thunkable**: Coding
- **TickTick**: Productivity
- **Tidio Lyro**: Business
- **Time**: MCP
- **TinyFish**: Agents
- **TinyFish MCP**: MCP
- **tldraw**: Images
- **tl;dv**: Audio
- **Todoist**: Connectors
- **Todoist AI**: Productivity
- **Todoist MCP**: MCP
- **Together AI**: Dev infra
- **Topaz Photo**: Images
- **Topaz Video**: Video
- **Trade Ideas**: Investing
- **TradingView**: Investing
- **Trae**: Coding
- **Tray.ai**: Automation
- **TRELLIS**: Images
- **Trello**: Productivity
- **TrendSpider**: Investing
- **Trigger.dev**: Agents
- **Trinka**: Writing
- **Trint**: Audio
- **Tripadvisor**: Connectors
- **Tripo**: Images
- **TRL**: Dev infra
- **Turbopuffer**: Dev infra
- **TurboTax**: Finance
- **Turnitin**: Writing
- **Turso**: Dev infra
- **Twilio**: Dev infra
- **Twilio MCP**: MCP
- **Typefully**: Marketing
- **Typesense**: Dev infra
- **TypingMind**: Chat
- **Ubersuggest**: Marketing
- **Udio**: Audio
- **UiPath**: Automation
- **Uizard**: Coding
- **Ultimate Vocal Remover**: Audio
- **Ultrareview**: Coding
- **Ultravox**: Agents
- **Unbounce**: Marketing
- **Undermind**: Research
- **Unicorn Platform**: Coding
- **Unify**: Sales
- **Unity AI**: Images
- **Unity MCP**: MCP
- **Unsloth**: Dev infra
- **Unstructured**: Productivity
- **UPDF**: Productivity
- **Upscayl**: Images
- **Upstash**: Dev infra
- **Upstash MCP**: MCP
- **Upstash Vector**: Dev infra
- **UpToDate Expert AI**: Health
- **v0**: Coding
- **Val Town**: Automation
- **Vanta MCP**: MCP
- **Vapi**: Agents
- **Vast.ai**: Dev infra
- **Vectara**: Dev infra
- **Vectorizer.AI**: Images
- **Veed**: Video
- **Venice**: Chat
- **Venngage**: Images
- **Vercel**: Dev infra, Connectors
- **Vercel AI Gateway**: Dev infra
- **Vercel AI SDK**: Dev infra
- **Vercel MCP**: MCP
- **Vercel Sandbox**: Agents
- **Vertex AI Agent Builder**: Agents
- **Vertex AI Vector Search**: Dev infra
- **Vespa**: Dev infra
- **Vibe**: Chat
- **Vic.ai**: Finance
- **Vidnoz**: Video
- **Vidu**: Video
- **Viggle**: Video
- **Vimcal**: Productivity
- **Visily**: Images
- **Visme**: Images
- **Vizard**: Video
- **vLex Vincent AI**: Legal
- **vLLM**: Dev infra
- **Voiceflow**: Agents
- **Voicemod**: Audio
- **Void**: Coding
- **VoltAgent**: Agents
- **Voyage AI**: Dev infra
- **VS Code + GitHub Copilot**: Coding
- **Wan**: Video
- **Warmly**: Sales
- **Warp**: Coding
- **Wayground**: Education
- **W&B Weave**: Dev infra
- **Weaviate**: Dev infra
- **Weaviate MCP**: MCP
- **Webex AI Assistant**: Audio
- **Webflow**: Connectors
- **Webflow AI**: Coding
- **Webflow MCP**: MCP
- **Websim**: Coding
- **Weglot**: Writing
- **Weights & Biases**: Dev infra
- **WellSaid**: Audio
- **Westlaw**: Legal
- **WhatsApp**: MCP
- **Whimsical**: Images
- **Whisper**: Audio
- **WHOOP Coach**: Health
- **Wikipedia**: MCP
- **Wiley Scholar Gateway**: MCP
- **Windmill**: Automation
- **Wisecut**: Video
- **Wispr Flow**: Audio
- **Wix**: Connectors
- **Wix AI website builder**: Coding
- **Wix MCP**: MCP
- **WolframAlpha**: Research
- **Wondercraft**: Audio
- **Wondershare Filmora**: Video
- **WordPress MCP**: MCP
- **Wordtune**: Writing
- **Workato**: Automation
- **Workday Illuminate**: HR
- **WorkOS**: Dev infra
- **World Labs Marble**: Images
- **Wrike**: Productivity
- **Writefull**: Writing
- **Writer**: Writing
- **Writer Palmyra**: Dev infra
- **Writesonic**: Writing
- **Wysa**: Health
- **xAI API**: Dev infra
- **XcodeBuildMCP**: MCP
- **Xcode Intelligence**: Coding
- **Xero**: Finance
- **Xero MCP**: MCP
- **Xmind**: Productivity
- **Yellow.ai**: Support
- **Yoodli**: HR
- **You.com**: Research
- **Youper**: Health
- **YouTube auto-dubbing**: Video
- **YouTube transcript MCP**: MCP
- **Yuanbao**: Chat
- **Z.ai API**: Dev infra
- **Z.ai Chat**: Chat
- **Zapier**: Automation, Connectors
- **Zapier Agents**: Automation
- **Zapier Chatbots**: Connectors
- **Zapier Copilot**: Automation
- **Zapier MCP**: MCP
- **Zapier Tables**: Automation
- **Zed**: Coding
- **Zendesk AI**: Business
- **Zendesk MCP**: MCP
- **Zendesk QA**: Support
- **Zeni**: Finance
- **Zep**: Agents
- **Zillow**: Connectors
- **Zoho Analytics**: Productivity
- **Zoho CRM**: Sales
- **Zoom**: Connectors
- **Zoom AI Companion**: Audio
- **ZoomInfo Copilot**: Sales
- **ZoomInfo MCP**: MCP
- **Zoom Workplace**: Productivity
- **Zotero**: Research
- **Zyte**: Agents
:::

# Glossary {.unnumbered}

:::glossary
Agent
: An AI that takes several steps on its own, such as searching, clicking, and filling in forms, to finish a task.

Ambient scribe
: A tool that listens to a conversation, with consent, and drafts notes from it. Common in healthcare.

API
: A way for programs to use a service. Developers usually pay per use.

ATS
: Applicant tracking system: software employers use to manage job applications.

Connector
: A link between an AI assistant and another app, so the assistant can read and act in it. ChatGPT calls these apps.

Context window
: How much text an AI can consider at once.

Credits
: A tool's own unit for metering usage. Check how fast tasks use them up.

Deep research
: A mode where an AI searches many sources over several minutes and writes a cited report.

CRM
: Customer relationship management: software that tracks customers, deals, and conversations.

Embedding
: A list of numbers that captures the meaning of a piece of text, used to find similar text.

Enrichment
: Filling in missing details about a contact or company, such as job title or company size.

Eval
: A repeatable test that checks the quality of an AI's output.

Fine-tuning
: Further training a model on your own examples.

Framework
: Ready-made code structure for building an app, so you only fill in the details.

Freemium
: A product with a useful free tier and paid upgrades.

Gateway
: A service between your app and many AI providers that handles keys, fallbacks, and spending limits.

GEO
: Generative engine optimization: helping your brand appear in AI assistants' answers. Also called AEO.

GGUF
: A popular file format for compressed models you run locally.

Guardrails
: Checks that block unsafe or unwanted AI inputs and outputs.

Hallucination
: A confident but false AI output.

Headless browser
: A web browser with no window, controlled by code.

Help desk
: Software where customer support tickets are tracked and answered.

IDE
: Integrated development environment: the app programmers write code in.

Extension
: An add-on that gives an app, such as a browser or code editor, new features.

LLM
: Large language model, the technology behind chat assistants.

Local model
: An AI model that runs on your own computer instead of in the cloud.

Local
: Running on your own computer rather than a company's servers.

MCP
: Model Context Protocol: an open standard that lets AI apps connect to tools and data through "servers".

MCP server
: A small program or web address that gives an AI app a set of tools, such as searching a database.

Model
: The trained AI "brain" behind a tool. Many apps can use the same model.

Multimodal
: Able to handle more than text, such as images, audio, and video.

Node
: One box, or step, in a visual workflow tool such as n8n.

Observability
: Recording what an AI app did, step by step, so you can debug and improve it.

OCR
: Optical character recognition: turning pictures of text into real text.

Open source
: Software whose code is published so anyone can use, change, and share it.

Open-weight
: A model whose trained weights can be downloaded and run yourself. Check the license for limits.

Plugin
: A bundle of skills, connectors, and commands that adds a kind of work to Claude.

Prompt injection
: Hidden instructions in a web page or file that try to trick an AI into doing something you did not ask for.

Quantization
: Shrinking a model so it fits in less memory, with a small loss in quality.

RAG
: Retrieval-augmented generation: looking up relevant documents before the AI answers.

Reranker
: A model that re-sorts search results so the most relevant come first.

RPA
: Robotic process automation: software that clicks through apps the way a person would.

Sandbox
: A sealed-off computer where an agent can run code safely.

Scraping
: Pulling information out of web pages automatically.

SDK
: Software development kit: a code library for building on a platform.

Self-hosted
: Installed and run by you, on your own computer or server.

SEO
: Search engine optimization: helping pages rank in search results.

Speech-to-text
: Turning spoken audio into written text. Also called transcription or STT.

Terminal agent
: A coding agent that works in the text window where developers type commands.

Text-to-speech
: Reading text aloud in a synthetic voice. Also called TTS.

Token
: A chunk of text, roughly three-quarters of a word, used to measure and bill AI usage.

Vector database
: A database that stores embeddings so apps can find similar content quickly.

Vibe coding
: Building software by describing what you want to an AI, rather than writing the code yourself.

Voice cloning
: Copying a person's voice from a short sample. Use only with permission.
:::

# A–Z Index of Every Tool {.unnumbered}

Every tool, connector, and server in this directory, sorted alphabetically, with the category where you'll find it and its price label.

## Numbers and symbols

:::compact
| Tool | Category | Price |
|---|---|---|
| 10Web | Coding and Vibe Coding › App builders (vibe coding) | {{Freemium}} |
:::

## A

:::compact
| Tool | Category | Price |
|---|---|---|
| Activepieces | Automation and Workflows | {{Freemium}} |
| AdCreative.ai | Business and Work | {{Paid}} |
| Adobe | Connectors › Developer and design | {{Freemium}} |
| Adobe Acrobat AI Assistant | Productivity and Office › Presentations, spreadsheets, and documents | {{Paid}} |
| Adobe Firefly | Images and Graphic Design | {{Freemium}} |
| Adobe Podcast | Audio, Voice, and Music › Music and audio production | {{Freemium}} |
| Adobe Premiere (Generative Extend) | Video › Editing and repurposing | {{Paid}} |
| AgentKit | Agents and Agent Platforms › Build your own agents | {{Free}} |
| Agno | Agents and Agent Platforms › Build your own agents | {{Free}} |
| Ahrefs AI | Business and Work | {{Paid}} |
| Aider | Coding and Vibe Coding › Coding agents | {{Free}} |
| Airtable | Connectors › Work management and CRM | {{Freemium}} |
| Airtable MCP | MCP Servers › Data and databases | {{Freemium}} |
| AIVA | Audio, Voice, and Music › Music and audio production | {{Freemium}} |
| Amazon Bedrock | Developer Infrastructure › Model providers and APIs | {{Paid}} |
| Amazon Bedrock AgentCore | Agents and Agent Platforms › Build your own agents | {{Paid}} |
| Amazon Q Developer | Coding and Vibe Coding › Coding agents | {{Freemium}} |
| Amp | Coding and Vibe Coding › Coding agents | {{Freemium}} |
| Anima | Coding and Vibe Coding › Design to code | {{Freemium}} |
| Anthropic API | Developer Infrastructure › Model providers and APIs | {{Paid}} |
| Apify MCP | MCP Servers › Search, web, and media | {{Freemium}} |
| Apollo | Business and Work | {{Freemium}} |
| Apple Intelligence | Chat Assistants | {{Free}} |
| Apple Shortcuts | Automation and Workflows | {{Free}} |
| Arize Phoenix | Developer Infrastructure › Frameworks, data, and observability | {{Freemium}} |
| Asana | Connectors › Work management and CRM | {{Freemium}} |
| Asana AI | Productivity and Office › Email, calendar, and tasks | {{Paid}} |
| Asana MCP | MCP Servers › Productivity and business | {{Freemium}} |
| Atlassian | Connectors › Work management and CRM | {{Freemium}} |
| Atlassian Remote MCP | MCP Servers › Productivity and business | {{Freemium}} |
| Auphonic | Audio, Voice, and Music › Music and audio production | {{Freemium}} |
| Auth0 | Developer Infrastructure › App backends and deployment | {{Freemium}} |
| Automatic1111 / Forge | Images and Graphic Design | {{Free}} |
| AWS Labs MCP servers | MCP Servers › Developer tools and code | {{Freemium}} |
| Azure MCP | MCP Servers › Developer tools and code | {{Freemium}} |
:::

## B

:::compact
| Tool | Category | Price |
|---|---|---|
| Bardeen | Automation and Workflows | {{Freemium}} |
| Base44 | Coding and Vibe Coding › App builders (vibe coding) | {{Freemium}} |
| Baseten | Developer Infrastructure › Inference, hosting, and compute | {{Paid}} |
| Be My Eyes | More Categories › Accessibility | {{Free}} |
| Beautiful.ai | Productivity and Office › Presentations, spreadsheets, and documents | {{Paid}} |
| Bolt | Coding and Vibe Coding › App builders (vibe coding) | {{Freemium}} |
| Booking.com | Connectors › Commerce, finance, and travel | {{Free}} |
| Box | Connectors › Productivity and files | {{Freemium}} |
| Box MCP | MCP Servers › Productivity and business | {{Freemium}} |
| Braintrust | Developer Infrastructure › Frameworks, data, and observability | {{Freemium}} |
| Brandmark | Images and Graphic Design | {{Paid}} |
| Brave Search MCP | MCP Servers › Search, web, and media | {{Freemium}} |
| Brex | Business and Work | {{Freemium}} |
| Bright Data MCP | MCP Servers › Search, web, and media | {{Freemium}} |
| Browser Use | Agents and Agent Platforms › AI browsers and browser agents | {{Freemium}} |
| Browserbase | Agents and Agent Platforms › AI browsers and browser agents | {{Freemium}} |
| Browserbase MCP | MCP Servers › Search, web, and media | {{Freemium}} |
| Bubble AI | Coding and Vibe Coding › App builders (vibe coding) | {{Freemium}} |
| Builder.io (Fusion) | Coding and Vibe Coding › Design to code | {{Freemium}} |
:::

## C

:::compact
| Tool | Category | Price |
|---|---|---|
| Canva | Connectors › Developer and design | {{Freemium}} |
| Canva AI | Images and Graphic Design | {{Freemium}} |
| Canva MCP | MCP Servers › Productivity and business | {{Freemium}} |
| Canva Presentations | Productivity and Office › Presentations, spreadsheets, and documents | {{Freemium}} |
| CapCut | Video › Editing and repurposing | {{Freemium}} |
| Captions | Video › Avatars, presenters, and dubbing | {{Freemium}} |
| Cartesia | Audio, Voice, and Music › Voice and speech | {{Freemium}} |
| Cerebras | Developer Infrastructure › Inference, hosting, and compute | {{Freemium}} |
| Character.AI | Chat Assistants | {{Freemium}} |
| ChatGPT | Chat Assistants | {{Freemium}} |
| ChatGPT / Claude / Gemini Deep Research | Research, Search, and Learning | {{Freemium}} |
| ChatGPT agent | Agents and Agent Platforms › Agents you can use | {{Paid}} |
| ChatGPT Atlas | Agents and Agent Platforms › AI browsers and browser agents | {{Freemium}} |
| ChatGPT Images | Images and Graphic Design | {{Freemium}} |
| ChatPDF | Productivity and Office › Presentations, spreadsheets, and documents | {{Freemium}} |
| Chroma | Developer Infrastructure › Frameworks, data, and observability | {{Freemium}} |
| Chroma | MCP Servers › Data and databases | {{Freemium}} |
| Chrome DevTools MCP | MCP Servers › Developer tools and code | {{Free}} |
| Claude | Chat Assistants | {{Freemium}} |
| Claude / ChatGPT file creation | Productivity and Office › Presentations, spreadsheets, and documents | {{Freemium}} |
| Claude Agent SDK | Agents and Agent Platforms › Build your own agents | {{Free}} |
| Claude Code | Coding and Vibe Coding › Coding agents | {{Paid}} |
| Claude Code Review | Coding and Vibe Coding › Code review, testing, and quality | {{Paid}} |
| Claude Cowork | Agents and Agent Platforms › Agents you can use | {{Paid}} |
| Claude Design | Coding and Vibe Coding › Design to code | {{Paid}} |
| Claude in Chrome | Agents and Agent Platforms › AI browsers and browser agents | {{Paid}} |
| Clay | Business and Work | {{Freemium}} |
| Clearscope | Writing and Content | {{Paid}} |
| Clerk | Developer Infrastructure › App backends and deployment | {{Freemium}} |
| ClickHouse MCP | MCP Servers › Data and databases | {{Freemium}} |
| ClickUp | Connectors › Work management and CRM | {{Freemium}} |
| ClickUp Brain | Productivity and Office › Workspaces and notes | {{Paid}} |
| ClickUp MCP | MCP Servers › Productivity and business | {{Freemium}} |
| Cline | Coding and Vibe Coding › Coding agents | {{Free}} |
| Clipdrop | Images and Graphic Design | {{Freemium}} |
| Cloudflare | Developer Infrastructure › App backends and deployment | {{Freemium}} |
| Cloudflare | Connectors › Developer and design | {{Freemium}} |
| Cloudflare MCP | MCP Servers › Developer tools and code | {{Freemium}} |
| Cloudflare Workers AI | Developer Infrastructure › Inference, hosting, and compute | {{Freemium}} |
| CoCounsel | Business and Work | {{Paid}} |
| Coda AI | Productivity and Office › Workspaces and notes | {{Freemium}} |
| CodeRabbit | Coding and Vibe Coding › Code review, testing, and quality | {{Freemium}} |
| Cohere | Developer Infrastructure › Model providers and APIs | {{Freemium}} |
| ComfyUI | Images and Graphic Design | {{Free}} |
| Composio | MCP Servers › Automation platforms as MCP | {{Freemium}} |
| Connected Papers | Research, Search, and Learning | {{Freemium}} |
| Consensus | Research, Search, and Learning | {{Freemium}} |
| Context7 | MCP Servers › Developer tools and code | {{Freemium}} |
| Continue | Coding and Vibe Coding › Coding agents | {{Free}} |
| Convex | Developer Infrastructure › App backends and deployment | {{Freemium}} |
| Copilot CLI | Coding and Vibe Coding › Coding agents | {{Freemium}} |
| Copilot code review | Coding and Vibe Coding › Code review, testing, and quality | {{Paid}} |
| Copy.ai | Writing and Content | {{Freemium}} |
| Coursera Coach | Research, Search, and Learning | {{Freemium}} |
| Craft | Productivity and Office › Workspaces and notes | {{Freemium}} |
| Create / Anything | Coding and Vibe Coding › App builders (vibe coding) | {{Freemium}} |
| CrewAI | Agents and Agent Platforms › Build your own agents | {{Freemium}} |
| Cursor | Coding and Vibe Coding › AI code editors | {{Freemium}} |
| Cursor Bugbot | Coding and Vibe Coding › Code review, testing, and quality | {{Paid}} |
:::

## D

:::compact
| Tool | Category | Price |
|---|---|---|
| D-ID | Video › Avatars, presenters, and dubbing | {{Freemium}} |
| Databricks | MCP Servers › Data and databases | {{Paid}} |
| Datadog | MCP Servers › Developer tools and code | {{Freemium}} |
| DaVinci Resolve (Neural Engine) | Video › Editing and repurposing | {{Freemium}} |
| Decagon | Business and Work | {{Paid}} |
| DeepL Translator | Writing and Content | {{Freemium}} |
| DeepL Write | Writing and Content | {{Freemium}} |
| DeepSeek | Chat Assistants | {{Free}} |
| DeepSeek API | Developer Infrastructure › Model providers and APIs | {{Paid}} |
| Descript | Video › Editing and repurposing | {{Freemium}} |
| Desktop Commander | MCP Servers › Developer tools and code | {{Free}} |
| Devin | Coding and Vibe Coding › Coding agents | {{Paid}} |
| Devin Desktop | Coding and Vibe Coding › AI code editors | {{Freemium}} |
| Dia | Agents and Agent Platforms › AI browsers and browser agents | {{Freemium}} |
| Dify | Agents and Agent Platforms › Build your own agents | {{Freemium}} |
| Docker MCP Toolkit | MCP Servers › Developer tools and code | {{Free}} |
| DocuSign | Connectors › Commerce, finance, and travel | {{Paid}} |
| DoorDash | Connectors › Commerce, finance, and travel | {{Free}} |
| Dropbox | Connectors › Productivity and files | {{Freemium}} |
| Dropbox MCP | MCP Servers › Productivity and business | {{Freemium}} |
| DSPy | Developer Infrastructure › Frameworks, data, and observability | {{Free}} |
| Duck.ai | Chat Assistants | {{Freemium}} |
| Duolingo Max | Research, Search, and Learning | {{Paid}} |
| Durable | Coding and Vibe Coding › App builders (vibe coding) | {{Freemium}} |
:::

## E

:::compact
| Tool | Category | Price |
|---|---|---|
| Eightfold | Business and Work | {{Paid}} |
| Elasticsearch MCP | MCP Servers › Data and databases | {{Freemium}} |
| ElevenLabs | Audio, Voice, and Music › Voice and speech | {{Freemium}} |
| ElevenLabs MCP | MCP Servers › Search, web, and media | {{Freemium}} |
| ElevenLabs Music | Audio, Voice, and Music › Music and audio production | {{Freemium}} |
| Elicit | Research, Search, and Learning | {{Freemium}} |
| Evernote AI | Productivity and Office › Workspaces and notes | {{Freemium}} |
| Everything | MCP Servers › Official reference servers | {{Free}} |
| Exa | Research, Search, and Learning | {{Freemium}} |
| Exa MCP | MCP Servers › Search, web, and media | {{Freemium}} |
| Excel Copilot / Agent Mode | Productivity and Office › Presentations, spreadsheets, and documents | {{Paid}} |
| Expedia | Connectors › Commerce, finance, and travel | {{Free}} |
:::

## F

:::compact
| Tool | Category | Price |
|---|---|---|
| Factory | Coding and Vibe Coding › Coding agents | {{Paid}} |
| Fathom | Audio, Voice, and Music › Transcription and meetings | {{Freemium}} |
| Fetch | MCP Servers › Official reference servers | {{Free}} |
| Figma | Connectors › Developer and design | {{Freemium}} |
| Figma Dev Mode MCP | MCP Servers › Developer tools and code | {{Freemium}} |
| Figma Make | Coding and Vibe Coding › Design to code | {{Freemium}} |
| Filesystem | MCP Servers › Official reference servers | {{Free}} |
| Firebase | Developer Infrastructure › App backends and deployment | {{Freemium}} |
| Firecrawl MCP | MCP Servers › Search, web, and media | {{Freemium}} |
| Fireflies | Audio, Voice, and Music › Transcription and meetings | {{Freemium}} |
| Fireflies | Connectors › Productivity and files | {{Freemium}} |
| Fireworks AI | Developer Infrastructure › Inference, hosting, and compute | {{Paid}} |
| Flow | Video › Video generation | {{Freemium}} |
| Flowise | Agents and Agent Platforms › Build your own agents | {{Freemium}} |
| FLUX | Images and Graphic Design | {{Freemium}} |
| Fly.io | Developer Infrastructure › App backends and deployment | {{Freemium}} |
| Framer AI | Coding and Vibe Coding › App builders (vibe coding) | {{Freemium}} |
| Frase | Writing and Content | {{Paid}} |
| Freepik AI Suite | Images and Graphic Design | {{Freemium}} |
:::

## G

:::compact
| Tool | Category | Price |
|---|---|---|
| Galileo / Stitch | Coding and Vibe Coding › Design to code | {{Free}} |
| Gamma | Productivity and Office › Presentations, spreadsheets, and documents | {{Freemium}} |
| Gemini | Chat Assistants | {{Freemium}} |
| Gemini / Nano Banana | Images and Graphic Design | {{Freemium}} |
| Gemini Agent | Agents and Agent Platforms › Agents you can use | {{Paid}} |
| Gemini CLI | Coding and Vibe Coding › Coding agents | {{Freemium}} |
| Gemini in Chrome | Agents and Agent Platforms › AI browsers and browser agents | {{Freemium}} |
| Gemini in Google Workspace | Productivity and Office › Workspaces and notes | {{Paid}} |
| Genspark | Agents and Agent Platforms › Agents you can use | {{Freemium}} |
| Git | MCP Servers › Official reference servers | {{Free}} |
| GitHub | Connectors › Developer and design | {{Freemium}} |
| GitHub Copilot coding agent | Coding and Vibe Coding › Coding agents | {{Paid}} |
| GitHub MCP | MCP Servers › Developer tools and code | {{Freemium}} |
| GitHub Spark | Coding and Vibe Coding › App builders (vibe coding) | {{Paid}} |
| GitLab MCP | MCP Servers › Developer tools and code | {{Freemium}} |
| Glide | Coding and Vibe Coding › App builders (vibe coding) | {{Freemium}} |
| Gmail | Connectors › Productivity and files | {{Free}} |
| Gong | Business and Work | {{Paid}} |
| Google ADK | Agents and Agent Platforms › Build your own agents | {{Free}} |
| Google AI Mode | Research, Search, and Learning | {{Free}} |
| Google AI Studio (Build) | Coding and Vibe Coding › App builders (vibe coding) | {{Free}} |
| Google Antigravity | Coding and Vibe Coding › AI code editors | {{Freemium}} |
| Google Calendar | Connectors › Productivity and files | {{Free}} |
| Google Cloud MCP | MCP Servers › Developer tools and code | {{Freemium}} |
| Google Drive | Connectors › Productivity and files | {{Free}} |
| Google Gemini API | Developer Infrastructure › Model providers and APIs | {{Freemium}} |
| Google Translate | Writing and Content | {{Free}} |
| Google Veo | Video › Video generation | {{Freemium}} |
| Goose | Coding and Vibe Coding › Coding agents | {{Free}} |
| GPT4All | Developer Infrastructure › Inference, hosting, and compute | {{Free}} |
| Grafana | MCP Servers › Developer tools and code | {{Freemium}} |
| Grammarly | Writing and Content | {{Freemium}} |
| Granola | Audio, Voice, and Music › Transcription and meetings | {{Freemium}} |
| Granola | Connectors › Productivity and files | {{Freemium}} |
| Graphite | Coding and Vibe Coding › Code review, testing, and quality | {{Freemium}} |
| Greptile | Coding and Vibe Coding › Code review, testing, and quality | {{Paid}} |
| Grok | Chat Assistants | {{Freemium}} |
| Grok Imagine | Video › Video generation | {{Freemium}} |
| Groq | Developer Infrastructure › Inference, hosting, and compute | {{Freemium}} |
| Gumloop | Automation and Workflows | {{Freemium}} |
:::

## H

:::compact
| Tool | Category | Price |
|---|---|---|
| Hailuo | Video › Video generation | {{Freemium}} |
| Harvey | Business and Work | {{Paid}} |
| Haystack | Developer Infrastructure › Frameworks, data, and observability | {{Free}} |
| Hebbia | Business and Work | {{Paid}} |
| Helicone | Developer Infrastructure › Frameworks, data, and observability | {{Freemium}} |
| Hemingway Editor | Writing and Content | {{Freemium}} |
| Hex | More Categories › Data and analytics | {{Freemium}} |
| HeyGen | Video › Avatars, presenters, and dubbing | {{Freemium}} |
| Higgsfield | Video › Video generation | {{Freemium}} |
| Honeycomb | MCP Servers › Developer tools and code | {{Freemium}} |
| HubSpot | Connectors › Work management and CRM | {{Freemium}} |
| HubSpot Breeze | Business and Work | {{Freemium}} |
| HubSpot MCP | MCP Servers › Productivity and business | {{Freemium}} |
| Hugging Face | Developer Infrastructure › Inference, hosting, and compute | {{Freemium}} |
| Hugging Face | Connectors › Developer and design | {{Free}} |
| Hugging Face MCP | MCP Servers › Search, web, and media | {{Free}} |
| HuggingChat | Chat Assistants | {{Free}} |
| Humata | Productivity and Office › Presentations, spreadsheets, and documents | {{Freemium}} |
| Hume | Audio, Voice, and Music › Voice and speech | {{Freemium}} |
:::

## I

:::compact
| Tool | Category | Price |
|---|---|---|
| Ideogram | Images and Graphic Design | {{Freemium}} |
| IFTTT | Automation and Workflows | {{Freemium}} |
| Instacart | Connectors › Commerce, finance, and travel | {{Free}} |
| Intercom | Connectors › Work management and CRM | {{Paid}} |
| Intercom Fin | Business and Work | {{Paid}} |
| Intercom MCP | MCP Servers › Productivity and business | {{Paid}} |
| InVideo AI | Video › Editing and repurposing | {{Freemium}} |
:::

## J

:::compact
| Tool | Category | Price |
|---|---|---|
| Jan | Developer Infrastructure › Inference, hosting, and compute | {{Free}} |
| Jasper | Writing and Content | {{Paid}} |
| JetBrains AI | Coding and Vibe Coding › AI code editors | {{Freemium}} |
| Jules | Coding and Vibe Coding › Coding agents | {{Freemium}} |
| Julius AI | Productivity and Office › Presentations, spreadsheets, and documents | {{Freemium}} |
| Junie | Coding and Vibe Coding › AI code editors | {{Freemium}} |
:::

## K

:::compact
| Tool | Category | Price |
|---|---|---|
| Kagi | Research, Search, and Learning | {{Paid}} |
| Kaiber | More Categories › Creative video | {{Paid}} |
| Kapwing | Video › Editing and repurposing | {{Freemium}} |
| Khanmigo | Research, Search, and Learning | {{Freemium}} |
| Kilo Code | Coding and Vibe Coding › Coding agents | {{Free}} |
| Kimi | Chat Assistants | {{Freemium}} |
| Kiro | Coding and Vibe Coding › AI code editors | {{Freemium}} |
| Kling | Video › Video generation | {{Freemium}} |
| Krea | Images and Graphic Design | {{Freemium}} |
| Krisp | Audio, Voice, and Music › Music and audio production | {{Freemium}} |
| Kubernetes MCP | MCP Servers › Developer tools and code | {{Free}} |
:::

## L

:::compact
| Tool | Category | Price |
|---|---|---|
| LALAL.AI | Audio, Voice, and Music › Music and audio production | {{Freemium}} |
| LangChain | Developer Infrastructure › Frameworks, data, and observability | {{Free}} |
| Langflow | Agents and Agent Platforms › Build your own agents | {{Freemium}} |
| Langfuse | Developer Infrastructure › Frameworks, data, and observability | {{Freemium}} |
| LangGraph | Agents and Agent Platforms › Build your own agents | {{Free}} |
| LangSmith | Developer Infrastructure › Frameworks, data, and observability | {{Freemium}} |
| Lavender | Business and Work | {{Freemium}} |
| Le Chat | Chat Assistants | {{Freemium}} |
| Lensa | Images and Graphic Design | {{Freemium}} |
| Leonardo.ai | Images and Graphic Design | {{Freemium}} |
| Letta | Agents and Agent Platforms › Build your own agents | {{Freemium}} |
| Lex | Writing and Content | {{Freemium}} |
| LibreChat | Chat Assistants | {{Free}} |
| Lindy | Automation and Workflows | {{Freemium}} |
| Linear | Connectors › Work management and CRM | {{Freemium}} |
| Linear MCP | MCP Servers › Productivity and business | {{Freemium}} |
| Live Captions | More Categories › Accessibility | {{Free}} |
| llama.cpp | Developer Infrastructure › Inference, hosting, and compute | {{Free}} |
| LlamaIndex | Developer Infrastructure › Frameworks, data, and observability | {{Free}} |
| LM Studio | Developer Infrastructure › Inference, hosting, and compute | {{Free}} |
| Locofy | Coding and Vibe Coding › Design to code | {{Freemium}} |
| Looka | Images and Graphic Design | {{Paid}} |
| Lovable | Coding and Vibe Coding › App builders (vibe coding) | {{Freemium}} |
| LTX Studio | Video › Video generation | {{Freemium}} |
| Luma Dream Machine / Ray | Video › Video generation | {{Freemium}} |
:::

## M

:::compact
| Tool | Category | Price |
|---|---|---|
| MacWhisper | Audio, Voice, and Music › Transcription and meetings | {{Freemium}} |
| Magnific | Images and Graphic Design | {{Paid}} |
| Make | Automation and Workflows | {{Freemium}} |
| Make MCP | MCP Servers › Automation platforms as MCP | {{Freemium}} |
| Manus | Agents and Agent Platforms › Agents you can use | {{Freemium}} |
| Mastra | Agents and Agent Platforms › Build your own agents | {{Free}} |
| MCP Toolbox for Databases | MCP Servers › Data and databases | {{Free}} |
| Mem | Productivity and Office › Workspaces and notes | {{Freemium}} |
| Memory | MCP Servers › Official reference servers | {{Free}} |
| Meshy | More Categories › 3D and spatial | {{Freemium}} |
| Meta AI | Chat Assistants | {{Free}} |
| Meta Llama | Developer Infrastructure › Model providers and APIs | {{Free}} |
| Microsoft 365 | Connectors › Productivity and files | {{Paid}} |
| Microsoft 365 Copilot | Productivity and Office › Workspaces and notes | {{Paid}} |
| Microsoft Agent Framework | Agents and Agent Platforms › Build your own agents | {{Free}} |
| Microsoft Copilot | Chat Assistants | {{Freemium}} |
| Microsoft Copilot Actions | Agents and Agent Platforms › Agents you can use | {{Freemium}} |
| Microsoft Copilot Studio | Agents and Agent Platforms › Build your own agents | {{Paid}} |
| Microsoft Designer / Bing Image Creator | Images and Graphic Design | {{Free}} |
| Microsoft Foundry | Developer Infrastructure › Model providers and APIs | {{Paid}} |
| Microsoft Learn MCP | MCP Servers › Developer tools and code | {{Free}} |
| Microsoft Power Automate | Automation and Workflows | {{Freemium}} |
| Microsoft Teams Copilot / Google Meet Gemini | Audio, Voice, and Music › Transcription and meetings | {{Paid}} |
| Midjourney | Images and Graphic Design | {{Paid}} |
| Midjourney Video | Video › Video generation | {{Paid}} |
| Milvus / Zilliz | Developer Infrastructure › Frameworks, data, and observability | {{Freemium}} |
| Mistral AI | Developer Infrastructure › Model providers and APIs | {{Freemium}} |
| Modal | Developer Infrastructure › Inference, hosting, and compute | {{Paid}} |
| Moises | Audio, Voice, and Music › Music and audio production | {{Freemium}} |
| Momentic | Coding and Vibe Coding › Code review, testing, and quality | {{Paid}} |
| monday AI | Productivity and Office › Email, calendar, and tasks | {{Paid}} |
| monday.com | Connectors › Work management and CRM | {{Freemium}} |
| monday.com MCP | MCP Servers › Productivity and business | {{Freemium}} |
| MongoDB MCP | MCP Servers › Data and databases | {{Freemium}} |
| Motion | Productivity and Office › Email, calendar, and tasks | {{Paid}} |
| Mubert | Audio, Voice, and Music › Music and audio production | {{Freemium}} |
| Murf | Audio, Voice, and Music › Voice and speech | {{Freemium}} |
:::

## N

:::compact
| Tool | Category | Price |
|---|---|---|
| n8n | Automation and Workflows | {{Freemium}} |
| n8n instance MCP | MCP Servers › Automation platforms as MCP | {{Freemium}} |
| NaturalReader | Audio, Voice, and Music › Voice and speech | {{Freemium}} |
| Neon | Developer Infrastructure › App backends and deployment | {{Freemium}} |
| Neon | Connectors › Developer and design | {{Freemium}} |
| Neon MCP | MCP Servers › Data and databases | {{Freemium}} |
| Netlify | Developer Infrastructure › App backends and deployment | {{Freemium}} |
| Netlify | Connectors › Developer and design | {{Freemium}} |
| Netlify MCP | MCP Servers › Developer tools and code | {{Freemium}} |
| NotebookLM | Research, Search, and Learning | {{Freemium}} |
| Notion | Connectors › Productivity and files | {{Freemium}} |
| Notion AI | Productivity and Office › Workspaces and notes | {{Freemium}} |
| Notion Custom Agents | Agents and Agent Platforms › Agents you can use | {{Paid}} |
| Notion Mail / Calendar | Productivity and Office › Email, calendar, and tasks | {{Free}} |
| Notion MCP | MCP Servers › Productivity and business | {{Freemium}} |
| Notta | Audio, Voice, and Music › Transcription and meetings | {{Freemium}} |
| NovelAI | Writing and Content | {{Paid}} |
:::

## O

:::compact
| Tool | Category | Price |
|---|---|---|
| Obsidian | Productivity and Office › Workspaces and notes | {{Free}} |
| Obsidian MCP | MCP Servers › Productivity and business | {{Free}} |
| Ollama | Developer Infrastructure › Inference, hosting, and compute | {{Free}} |
| Open WebUI | Chat Assistants | {{Free}} |
| OpenAI Agents SDK | Agents and Agent Platforms › Build your own agents | {{Free}} |
| OpenAI API | Developer Infrastructure › Model providers and APIs | {{Paid}} |
| OpenAI Codex | Coding and Vibe Coding › Coding agents | {{Paid}} |
| OpenAI Sora | Video › Video generation | {{Freemium}} |
| OpenAI voice | Audio, Voice, and Music › Voice and speech | {{Freemium}} |
| opencode | Coding and Vibe Coding › Coding agents | {{Free}} |
| OpenHands | Coding and Vibe Coding › Coding agents | {{Free}} |
| OpenRouter | Developer Infrastructure › Model providers and APIs | {{Freemium}} |
| Opera Neon | Agents and Agent Platforms › AI browsers and browser agents | {{Paid}} |
| OpusClip | Video › Editing and repurposing | {{Freemium}} |
| Otter | Audio, Voice, and Music › Transcription and meetings | {{Freemium}} |
:::

## P

:::compact
| Tool | Category | Price |
|---|---|---|
| PagerDuty MCP | MCP Servers › Developer tools and code | {{Paid}} |
| Paradox | Business and Work | {{Paid}} |
| PayPal | Connectors › Commerce, finance, and travel | {{Freemium}} |
| PayPal MCP | MCP Servers › Productivity and business | {{Freemium}} |
| Perplexity | Chat Assistants | {{Freemium}} |
| Perplexity | Research, Search, and Learning | {{Freemium}} |
| Perplexity (Sonar) MCP | MCP Servers › Search, web, and media | {{Paid}} |
| Perplexity Comet | Agents and Agent Platforms › AI browsers and browser agents | {{Free}} |
| pgvector | Developer Infrastructure › Frameworks, data, and observability | {{Free}} |
| Photomath | More Categories › Math and science | {{Freemium}} |
| Photoroom | Images and Graphic Design | {{Freemium}} |
| Pi | Chat Assistants | {{Free}} |
| Pictory | Video › Editing and repurposing | {{Paid}} |
| Pika | Video › Video generation | {{Freemium}} |
| Pinecone | Developer Infrastructure › Frameworks, data, and observability | {{Freemium}} |
| Pinecone | MCP Servers › Data and databases | {{Freemium}} |
| Pipedream | Automation and Workflows | {{Freemium}} |
| Pipedream MCP | MCP Servers › Automation platforms as MCP | {{Freemium}} |
| Pitch | Productivity and Office › Presentations, spreadsheets, and documents | {{Freemium}} |
| Plaid MCP | MCP Servers › Productivity and business | {{Paid}} |
| PlanetScale MCP | MCP Servers › Data and databases | {{Freemium}} |
| Playwright MCP | MCP Servers › Developer tools and code | {{Free}} |
| Podcastle | Audio, Voice, and Music › Music and audio production | {{Freemium}} |
| Poe | Chat Assistants | {{Freemium}} |
| ProWritingAid | Writing and Content | {{Freemium}} |
| Pydantic AI | Agents and Agent Platforms › Build your own agents | {{Free}} |
:::

## Q

:::compact
| Tool | Category | Price |
|---|---|---|
| QA Wolf | Coding and Vibe Coding › Code review, testing, and quality | {{Paid}} |
| Qdrant | Developer Infrastructure › Frameworks, data, and observability | {{Freemium}} |
| Qdrant | MCP Servers › Data and databases | {{Freemium}} |
| Qodo | Coding and Vibe Coding › Code review, testing, and quality | {{Freemium}} |
| QuickBooks | Connectors › Commerce, finance, and travel | {{Paid}} |
| QuickBooks Intuit Assist | Business and Work | {{Paid}} |
| QuillBot | Writing and Content | {{Freemium}} |
| Quizlet AI | Research, Search, and Learning | {{Freemium}} |
| Qwen | Developer Infrastructure › Model providers and APIs | {{Free}} |
| Qwen Chat | Chat Assistants | {{Free}} |
| Qwen-Image | Images and Graphic Design | {{Free}} |
:::

## R

:::compact
| Tool | Category | Price |
|---|---|---|
| Railway | Developer Infrastructure › App backends and deployment | {{Freemium}} |
| Ramp | Business and Work | {{Freemium}} |
| Rask AI | Video › Avatars, presenters, and dubbing | {{Freemium}} |
| Raycast AI | Productivity and Office › Workspaces and notes | {{Freemium}} |
| Read AI | Audio, Voice, and Music › Transcription and meetings | {{Freemium}} |
| Read AI | More Categories › Data and analytics | {{Freemium}} |
| Reclaim | Productivity and Office › Email, calendar, and tasks | {{Freemium}} |
| Recraft | Images and Graphic Design | {{Freemium}} |
| Redis MCP | MCP Servers › Data and databases | {{Freemium}} |
| Reflect | Productivity and Office › Workspaces and notes | {{Paid}} |
| Relay.app | Automation and Workflows | {{Freemium}} |
| Relevance AI | Agents and Agent Platforms › Build your own agents | {{Freemium}} |
| Remini | Images and Graphic Design | {{Freemium}} |
| remove.bg | Images and Graphic Design | {{Freemium}} |
| Render | Developer Infrastructure › App backends and deployment | {{Freemium}} |
| Replicate | Developer Infrastructure › Inference, hosting, and compute | {{Paid}} |
| Replit | Coding and Vibe Coding › App builders (vibe coding) | {{Paid}} |
| Research Rabbit | Research, Search, and Learning | {{Freemium}} |
| Resemble AI | Audio, Voice, and Music › Voice and speech | {{Paid}} |
| Resend MCP | MCP Servers › Productivity and business | {{Freemium}} |
| Retell | Agents and Agent Platforms › Build your own agents | {{Freemium}} |
| Rev | Audio, Voice, and Music › Transcription and meetings | {{Freemium}} |
| Reve | Images and Graphic Design | {{Freemium}} |
| Riverside | Audio, Voice, and Music › Music and audio production | {{Freemium}} |
| Rogo | Business and Work | {{Paid}} |
| Roo Code | Coding and Vibe Coding › Coding agents | {{Free}} |
| Rork | Coding and Vibe Coding › App builders (vibe coding) | {{Freemium}} |
| Rows | Productivity and Office › Presentations, spreadsheets, and documents | {{Freemium}} |
| RunPod | Developer Infrastructure › Inference, hosting, and compute | {{Paid}} |
| Runway | Video › Video generation | {{Freemium}} |
| Rytr | Writing and Content | {{Freemium}} |
:::

## S

:::compact
| Tool | Category | Price |
|---|---|---|
| Salesforce | Connectors › Work management and CRM | {{Paid}} |
| Salesforce Agentforce | Business and Work | {{Paid}} |
| Salesforce MCP | MCP Servers › Productivity and business | {{Paid}} |
| Samsung Galaxy AI | Chat Assistants | {{Free}} |
| SciSpace | Research, Search, and Learning | {{Freemium}} |
| Scite | Research, Search, and Learning | {{Paid}} |
| Seedance | Video › Video generation | {{Freemium}} |
| Seedream | Images and Graphic Design | {{Freemium}} |
| Seeing AI | More Categories › Accessibility | {{Free}} |
| Semantic Scholar | Research, Search, and Learning | {{Free}} |
| Semrush AI | Business and Work | {{Paid}} |
| Sentry | Connectors › Developer and design | {{Freemium}} |
| Sentry MCP | MCP Servers › Developer tools and code | {{Freemium}} |
| Sequential Thinking | MCP Servers › Official reference servers | {{Free}} |
| Serena | MCP Servers › Developer tools and code | {{Free}} |
| Shopify | Connectors › Commerce, finance, and travel | {{Paid}} |
| Shopify Dev MCP | MCP Servers › Developer tools and code | {{Free}} |
| Shortwave | Productivity and Office › Email, calendar, and tasks | {{Freemium}} |
| Sierra | Business and Work | {{Paid}} |
| Slack | Connectors › Productivity and files | {{Freemium}} |
| Slack MCP | MCP Servers › Productivity and business | {{Freemium}} |
| Snowflake | MCP Servers › Data and databases | {{Paid}} |
| Snyk | Coding and Vibe Coding › Code review, testing, and quality | {{Freemium}} |
| Softr | Coding and Vibe Coding › App builders (vibe coding) | {{Freemium}} |
| Soundraw | Audio, Voice, and Music › Music and audio production | {{Freemium}} |
| Sourcery | Coding and Vibe Coding › Code review, testing, and quality | {{Freemium}} |
| Spark | Productivity and Office › Email, calendar, and tasks | {{Freemium}} |
| Speechify | Audio, Voice, and Music › Voice and speech | {{Freemium}} |
| Spellbook | Business and Work | {{Paid}} |
| Spline | More Categories › 3D and spatial | {{Freemium}} |
| Spotify | Connectors › Commerce, finance, and travel | {{Freemium}} |
| Square | Connectors › Commerce, finance, and travel | {{Freemium}} |
| Square MCP | MCP Servers › Productivity and business | {{Freemium}} |
| Stable Audio | Audio, Voice, and Music › Music and audio production | {{Freemium}} |
| Stable Diffusion | Images and Graphic Design | {{Free}} |
| Steel | Agents and Agent Platforms › AI browsers and browser agents | {{Freemium}} |
| Stripe | Developer Infrastructure › App backends and deployment | {{Freemium}} |
| Stripe | Connectors › Commerce, finance, and travel | {{Freemium}} |
| Stripe MCP | MCP Servers › Developer tools and code | {{Freemium}} |
| Sudowrite | Writing and Content | {{Paid}} |
| Suno | Audio, Voice, and Music › Music and audio production | {{Freemium}} |
| Supabase | Developer Infrastructure › App backends and deployment | {{Freemium}} |
| Supabase | Connectors › Developer and design | {{Freemium}} |
| Supabase MCP | MCP Servers › Data and databases | {{Freemium}} |
| Superhuman | Productivity and Office › Email, calendar, and tasks | {{Paid}} |
| Superwhisper | Audio, Voice, and Music › Transcription and meetings | {{Freemium}} |
| Surfer SEO | Writing and Content | {{Paid}} |
| Synthesia | Video › Avatars, presenters, and dubbing | {{Freemium}} |
:::

## T

:::compact
| Tool | Category | Price |
|---|---|---|
| T3 Chat | Chat Assistants | {{Freemium}} |
| Tabnine | Coding and Vibe Coding › Coding agents | {{Paid}} |
| Tavily | Research, Search, and Learning | {{Freemium}} |
| Tavily MCP | MCP Servers › Search, web, and media | {{Freemium}} |
| Terraform MCP | MCP Servers › Developer tools and code | {{Free}} |
| Textio | Business and Work | {{Paid}} |
| TickTick | Productivity and Office › Email, calendar, and tasks | {{Freemium}} |
| Tidio Lyro | Business and Work | {{Freemium}} |
| Time | MCP Servers › Official reference servers | {{Free}} |
| tl;dv | Audio, Voice, and Music › Transcription and meetings | {{Freemium}} |
| Todoist | Connectors › Productivity and files | {{Freemium}} |
| Todoist AI | Productivity and Office › Email, calendar, and tasks | {{Freemium}} |
| Together AI | Developer Infrastructure › Inference, hosting, and compute | {{Paid}} |
| Topaz Photo | Images and Graphic Design | {{Paid}} |
| Topaz Video | Video › Editing and repurposing | {{Paid}} |
| Trae | Coding and Vibe Coding › AI code editors | {{Freemium}} |
| Tray.ai | Automation and Workflows | {{Paid}} |
| Tripo | More Categories › 3D and spatial | {{Freemium}} |
| Turbopuffer | Developer Infrastructure › Frameworks, data, and observability | {{Paid}} |
| Twilio MCP | MCP Servers › Productivity and business | {{Paid}} |
| TypingMind | Chat Assistants | {{Freemium}} |
:::

## U

:::compact
| Tool | Category | Price |
|---|---|---|
| Udio | Audio, Voice, and Music › Music and audio production | {{Freemium}} |
| UiPath | Automation and Workflows | {{Paid}} |
| Uizard | Coding and Vibe Coding › Design to code | {{Freemium}} |
| Ultrareview | Coding and Vibe Coding › Code review, testing, and quality | {{Paid}} |
| Undermind | Research, Search, and Learning | {{Freemium}} |
:::

## V

:::compact
| Tool | Category | Price |
|---|---|---|
| v0 | Coding and Vibe Coding › App builders (vibe coding) | {{Freemium}} |
| Vapi | Agents and Agent Platforms › Build your own agents | {{Freemium}} |
| Veed | Video › Editing and repurposing | {{Freemium}} |
| Venice | Chat Assistants | {{Freemium}} |
| Vercel | Developer Infrastructure › App backends and deployment | {{Freemium}} |
| Vercel | Connectors › Developer and design | {{Freemium}} |
| Vercel AI SDK | Developer Infrastructure › Frameworks, data, and observability | {{Free}} |
| Vercel MCP | MCP Servers › Developer tools and code | {{Freemium}} |
| Vertex AI Agent Builder | Agents and Agent Platforms › Build your own agents | {{Paid}} |
| vLLM | Developer Infrastructure › Inference, hosting, and compute | {{Free}} |
| Voiceflow | Agents and Agent Platforms › Build your own agents | {{Freemium}} |
| Void | Coding and Vibe Coding › AI code editors | {{Free}} |
| VS Code + GitHub Copilot | Coding and Vibe Coding › AI code editors | {{Freemium}} |
:::

## W

:::compact
| Tool | Category | Price |
|---|---|---|
| W&B Weave | Developer Infrastructure › Frameworks, data, and observability | {{Freemium}} |
| Wan | Video › Video generation | {{Free}} |
| Warp | Coding and Vibe Coding › Coding agents | {{Freemium}} |
| Weaviate | Developer Infrastructure › Frameworks, data, and observability | {{Freemium}} |
| Webflow | Connectors › Developer and design | {{Freemium}} |
| Webflow AI | Coding and Vibe Coding › App builders (vibe coding) | {{Freemium}} |
| Webflow MCP | MCP Servers › Productivity and business | {{Freemium}} |
| WellSaid | Audio, Voice, and Music › Voice and speech | {{Paid}} |
| Whisper | Audio, Voice, and Music › Transcription and meetings | {{Free}} |
| Wispr Flow | Audio, Voice, and Music › Transcription and meetings | {{Freemium}} |
| Wix | Connectors › Developer and design | {{Freemium}} |
| Wix AI website builder | Coding and Vibe Coding › App builders (vibe coding) | {{Freemium}} |
| Wix MCP | MCP Servers › Productivity and business | {{Freemium}} |
| Wordtune | Writing and Content | {{Freemium}} |
| Workato | Automation and Workflows | {{Paid}} |
| Writesonic | Writing and Content | {{Freemium}} |
:::

## X

:::compact
| Tool | Category | Price |
|---|---|---|
| xAI API | Developer Infrastructure › Model providers and APIs | {{Paid}} |
| Xcode Intelligence | Coding and Vibe Coding › AI code editors | {{Free}} |
:::

## Y

:::compact
| Tool | Category | Price |
|---|---|---|
| You.com | Research, Search, and Learning | {{Freemium}} |
| YouTube transcript MCP | MCP Servers › Search, web, and media | {{Free}} |
:::

## Z

:::compact
| Tool | Category | Price |
|---|---|---|
| Zapier | Automation and Workflows | {{Freemium}} |
| Zapier | Connectors › Work management and CRM | {{Freemium}} |
| Zapier MCP | MCP Servers › Automation platforms as MCP | {{Freemium}} |
| Zed | Coding and Vibe Coding › AI code editors | {{Freemium}} |
| Zendesk AI | Business and Work | {{Paid}} |
| Zillow | Connectors › Commerce, finance, and travel | {{Free}} |
| Zoom | Connectors › Productivity and files | {{Freemium}} |
| Zoom AI Companion | Audio, Voice, and Music › Transcription and meetings | {{Paid}} |
:::
