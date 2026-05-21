---
title: "CLAUDE.md and memory: how the AI remembers us"
description: "How to make the AI remember your name, your projects and your rules — between sessions, without pasting context every single time. In plain words."
pubDate: 2026-05-21
lang: en
tags: [obsidian, ai, claude-code, memory, knowledge-management]
readingTime: "8 min"
series: obsidian-ai
seriesOrder: 2
draft: false
canonical: https://ascendgriffin.org/blog/claude-md-i-memory/
---

> This is a follow-up to the previous post — [Building a Personal Knowledge Base on Obsidian + AI: My Approach](/blog/obsidian-ai-knowledge-base/). If we don't have our own vault with PARA and a basic `CLAUDE.md` yet — start there, otherwise this will be like reading a recipe with no pot.

## Why the AI "forgets us" without `CLAUDE.md`

When we open regular ChatGPT in the browser — there's a history of past chats. That's convenient, but it's **not memory about us**. It's just an archive of conversations. Every new chat starts from scratch: the AI doesn't know our name, our projects, or what language we want answers in.

Claude Code in VS Code works differently. It **reads files**. And among all the files in our folder there's one special one — `CLAUDE.md` in the root of our vault. The AI reads it **every single time** we start a new session. This is not "conversation history." This is an instruction on how to work with us.

In plain words: `CLAUDE.md` is the passport of our system. Without it, the AI behaves like a new intern we have to brief from scratch every single time.

## 7 categories — what to write in `CLAUDE.md`

We can write whatever we want — but there's a battle-tested 7-block scaffold. That covers 90% of cases.

| Category | What goes here |
|---|---|
| **Who I am** | Name or handle, role, city, language. One or two lines. |
| **Response style** | English, no fluff, no intros like "Of course!", markdown, short. |
| **Vault structure** | List of folders and what lives in each. The AI uses this to know where to put new files. |
| **Working rules** | Don't touch `.obsidian/`. No deletions without confirmation. Changes in 2+ files → show the plan first. |
| **Security and passwords** | Passwords, access keys, secrets — **never store them in the vault** and never paste them into AI chat. Keep them in a separate password manager (e.g. KeePass). State explicitly in `CLAUDE.md`: "don't ask for passwords, don't store them in files, don't show them in responses." This is the most critical rule. |
| **My projects** | Active projects with a short context. 2-3 lines each. |
| **My preferences** | How we like our responses formatted, which tools we use, what to avoid. |
| **Forbidden topics** | If there's data the AI should never work with at all — name the folders and files. |

Each category — 3-10 lines. The total size of `CLAUDE.md` should stay within 100-200 lines. If the file grows beyond that — pull parts of it into separate files and just link to them.

## Auto-memory — what it is and how it works

Besides `CLAUDE.md`, Claude Code has a second system called **memory** (sometimes called "auto-memory" or "persistent memory"). This is the place where the AI **itself** writes down important things worth remembering between sessions.

Example: we once told it — "for meeting notes I use a template with Date / Attendees / Decisions / Actions." The AI can record this in memory as a fact. Next time we ask it to create a meeting note, it'll grab our template immediately, no clarifications needed.

Technically it's a separate file (usually `MEMORY.md` in a special system folder outside the vault). We can open it, read it, edit it by hand. But mostly — the AI manages it on its own.

The difference is simple:

- **`CLAUDE.md`** — we write by hand. These are our rules.
- **`memory`** — the AI writes itself. These are its notes about us.

Together they create the effect of "an AI that knows us." Not magic — just two files that get read on startup.

## How to make memory actually work

By default the AI isn't eager to write into memory. We need to tell it: "this is worth remembering." A few tricks:

- **Explicit command.** "Remember: my Weekly Review is every Friday at 17:00." The AI will confirm and add it.
- **Feedback.** If the AI did something wrong — say so. "Don't use underscores for italics, my messenger breaks them." It'll remember.
- **Weekly review.** Once a week we open the memory file and throw out what's outdated. If a project wrapped up — remove it from memory. Otherwise the AI keeps thinking it's still relevant.

## 3 tests — is memory actually working

How to tell whether the system is alive, not just "files sitting there":

**Test 1.** We open a new chat in Claude Code (not a continuation, a fresh one) and ask: "What do you know about me?" The AI should respond concretely — name, language, key projects. If the answer is vague ("I can help with various things") — `CLAUDE.md` isn't being read. We check that the file sits **in the root** of the vault and that the vault folder is open in VS Code.

**Test 2.** We give the AI a task that breaks one of our rules. For example, we ask it to make a change in 3 files. If `CLAUDE.md` says "before changes in 2+ files — show the plan" — the AI should stop and show the plan, not just start working. If it just starts — the rule is being ignored or it's worded unclearly.

**Test 3.** We tell the AI to remember something specific. "Remember: my Weekly Review is every Friday at 17:00." Close VS Code, open it again, in a new chat ask: "When is my Weekly Review?" It should say "Friday, 17:00." If it doesn't remember — memory isn't being written, check the settings.

## Common mistakes

**1. A `CLAUDE.md` 500 lines long.** If the file is that big — the AI reads it slowly and can ignore parts. We split it by category, pull details into separate files under `99_Meta/`, leave only references in `CLAUDE.md`.

**2. Conflict between `CLAUDE.md` and memory.** It happens: `CLAUDE.md` says "be brief," memory has "give detailed explanations" written into it. The `CLAUDE.md` rule wins — it has priority. But it's better to periodically re-read memory and toss out conflicting entries.

**3. Not updating for months.** Projects change. If `CLAUDE.md` mentions a project we closed half a year ago — the AI will keep referring to it. Once a month — a quick review and update.

**4. Recovery after a crash.** If something breaks and the AI behaves weirdly — don't panic. Just open `CLAUDE.md` by hand, make sure the file is intact, readable, with no stray markdown errors. In 9 cases out of 10 the problem is right there.

## What's next

Now we have a vault, the AI knows who we are, and it remembers our rules. The next logical step is to make sure this system **doesn't disappear** if our laptop falls into a lake. Backup to the internet, privately, no terror.


If we don't want to miss it — follow me on [LinkedIn](https://www.linkedin.com/in/taras732/), I announce each next piece there.
