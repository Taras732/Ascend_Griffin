---
title: "Building a Personal Knowledge Base on Obsidian + AI: My Approach"
description: "How I keep notes across multiple projects at once — no cloud services, with an AI helper that lives on my laptop. Plain words for non-technical people."
pubDate: 2026-05-20
lang: en
tags: [obsidian, ai, knowledge-management, para, claude-code]
readingTime: "8 min"
series: obsidian-ai
seriesOrder: 1
canonical: https://ascendgriffin.org/blog/obsidian-ai-knowledge-base/
---

> This is for people who have never opened a single line of "code" in their life and have no intention to start. If you can use Word and Google Drive — that's already enough.

## Why this hurts

Let me say it upfront — this is not about "yet another note-taking app." It's about specific pains that keep repeating:

- **You're looking for one important thing and can't remember where it is.** In email? In Google Docs? In Notion? In a Telegram chat with yourself?
- **You have three versions of the same file** — `_final`, `_final2`, `_final_v3_FINAL`. And you have no idea which one is the fresh one.
- **You want to let AI read your documents to help you** — but you're scared, because there's client data, NDAs, contracts, personal stuff in there.
- **You once made nice notes in Notion** — and now, to "move out" of it, you need to hire someone and pay.

All of this gets solved by one approach: your notes live on your laptop as plain text files, and AI reads them **locally**, sending nothing into model training.

## How it works — one folder and three apps

Imagine Word documents sitting in a simple folder on your laptop. One folder — everything lives there. On top of this folder you have **three apps**: one for viewing notes nicely, the second for working with the same files through an AI chat, the third is the AI itself.

| App | What it does | Price |
|---|---|---|
| **Obsidian** | A pleasant app for notes. Looks like Word, but stores files as plain text — they'll open anywhere, even ten years from now. | Free |
| **VS Code** | A regular app from Microsoft. Don't be scared of the word "Code" — it just knows how to "understand folders" and plays well with AI. No programming required. | Free |
| **Claude Code** | An extension for VS Code (like an app inside an app). This is the AI chat — like ChatGPT, but it sees files in your folder and can work with them. | Included in your regular Claude subscription — no extra charges |

The key thing to remember: **all three work with the same folder**. You create a note in Obsidian — the AI in VS Code sees it instantly. You ask the AI to create a new one — it appears in Obsidian. One vault — three views into it.

## Install order — step by step

One thing at a time. It'll take about 30 minutes.

### Step 1 — Obsidian and your folder

1. Open [obsidian.md](https://obsidian.md) in your browser, click the big **Download** button, run the downloaded file.
2. On first launch, Obsidian will ask where to store notes. Create a folder, for example `D:/Obsidian/MyVault` (on Mac — under `Documents/MyVault`). Name it whatever you want — this is your "base."
3. Done. This folder is now your storage. Remember its path, you'll need it in Step 4.

### Step 2 — VS Code

1. Download from [code.visualstudio.com](https://code.visualstudio.com), run the installer. All defaults — OK.
2. Launch VS Code. The first time — an empty gray screen. That's normal, we'll fill it now.

### Step 3 — Claude extension in VS Code

1. In VS Code, find the **Extensions** icon on the left (the little squares). Or press `Ctrl+Shift+X`.
2. Type "**Claude Code**" into the search. Click **Install** next to the official extension from Anthropic.
3. After installation, the extension will ask you to log in. Click the login button — your browser will open. Sign in with your claude.ai account. If you already have a Claude subscription — Claude Code is included automatically, you don't pay anything extra.

### Step 4 — Open your folder in VS Code

1. In VS Code: `File → Open Folder` (or `Cmd+O` on Mac).
2. Pick the same folder you created for Obsidian (from Step 1, e.g. `D:/Obsidian/MyVault`).
3. On the right, open the Claude pane (the extension icon in the upper right corner, or `Ctrl+Esc`). This is your AI chat that sees your folder.

That's it. Now you have everything you need. Time to start filling it.

## How to organize — the PARA system

PARA is 5 base folders inside your vault. Imagine a big wardrobe with 5 drawers:

- **00_Inbox** — drop any new note here when you have no time to think where it belongs. Sort it later, once a week.
- **10_Projects** — anything with a deadline and a concrete outcome. Launching a site, writing a book, closing a client deal.
- **20_Areas** — areas of life that go on forever. Health, finances, family, career.
- **30_Resources** — useful materials, book notes, articles, templates.
- **40_Archive** — anything finished or no longer relevant. **Don't delete — move here.**

The method is called [PARA](https://fortelabs.com/blog/para/), invented by Tiago Forte. Battle-tested by millions.

**Two ways to set it up:**

**Option A — by hand** (5 minutes). Right in Obsidian, left panel → right click → New folder. Create one by one: `00_Inbox`, `10_Projects`, `20_Areas`, `30_Resources`, `40_Archive`. Plus a separate `99_Meta` (for templates and meta stuff).

**Option B — ask the AI** (10 seconds). If you've already done Steps 1-4 — your folder is open in VS Code with Claude. Just write to it in the chat:

```
Create a PARA structure in the current folder:
- 5 base folders: 00_Inbox, 10_Projects, 20_Areas, 30_Resources, 40_Archive
- a 99_Meta folder with a Templates subfolder
- an empty 00_Dashboard.md file in the root
After that — show me the tree of what you created.
```

The AI will build the structure in a couple of seconds and show you the result. If something's off — just tell it to fix it, and it will.

## The most important setting — CLAUDE.md

One last detail, without which the AI will behave like "just a chat that knows nothing about you." In the root of your folder, create a file called `CLAUDE.md`. The AI reads it **every single time** you start a session — it's like a "passport" of your system.

What to write — a starter scaffold (replace the bracketed placeholders with your data):

```markdown
# My vault

## Who I am
[Name or handle], [role — e.g. founder, lawyer, marketer].
Running [number] projects + personal.

## Language and style
- English in all responses
- Short, to the point, no fluff
- Changes in 2+ files → show the plan first, then execute

## Folder structure (PARA)
- 00_Inbox — new notes go here
- 10_Projects — active projects
- 20_Areas — ongoing areas
- 30_Resources — reference materials
- 40_Archive — finished
- 99_Meta — templates

## Rules
- Don't touch the .obsidian/ folder
- No deletions without confirmation
- Use [[wikilinks]] between notes
```

Replace the brackets with your real data — literally a few lines. This is your minimum. The AI will start treating you as a specific person, not as an "anonymous chat user."

There's also **memory** — a system that lets the AI automatically remember important things between sessions (your preferences, project history, decisions). This is another powerful tool and deserves its own post — *(in the works, will appear here).*

## What's next

A base vault is the foundation. The real power kicks in when you build a rhythm and understand how the AI works with memory. I'll cover each next block separately, in plain words:

- **CLAUDE.md and memory in depth** — how the AI remembers you between conversations and how that differs from ChatGPT.
- **How to keep a copy online (privately)** — so you don't lose your notes if your laptop dies. No mention of the term "git," I promise.
- **Security: what we DON'T put in the vault** — passwords, cards, other people's NDAs. A concrete list and alternatives.
- **Sync between laptop and phone** — three options, pros and cons of each.
- **Which plugins actually help** — and which are a waste of time.
- **Daily and weekly rhythm** — 10 minutes a day, 30 a week. Without this, even the best structure is dead.

If you don't want to miss it — follow me on [LinkedIn](https://www.linkedin.com/in/taras732/), I announce each piece there.

## Common mistakes at the start

1. **You want a "perfect" structure with 50 folders right away.** Don't. Start with PARA and Inbox. The rest will grow in a month.
2. **You create files in the root of the vault.** Don't — only inside folders. In the root — only the dashboard and `CLAUDE.md`.
3. **You delete an old note because "it's junk."** Don't delete — move it to Archive. You'll need it in a year.
4. **You don't start because "I haven't figured it out yet."** You'll figure it out as you go. The first 10 notes are an experiment anyway.
