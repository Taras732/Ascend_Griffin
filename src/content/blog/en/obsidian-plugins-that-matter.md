---
title: "The plugins I actually use"
description: "No cargo cult: 9 Obsidian plugins that genuinely save time every day, plus what NOT to install. Tested on a vault with hundreds of files and a dozen projects."
pubDate: 2026-09-02
lang: en
tags: [obsidian, plugins, productivity, knowledge-management]
readingTime: "9 min"
series: obsidian-ai
seriesOrder: 6
draft: false
canonical: https://ascendgriffin.org/blog/obsidian-plugins-that-matter/
---

> Obsidian has 2000+ community plugins. Most of them you don't need. Here's my actual working set — 9 plugins that have been with me for years and still work. Plus — a list of trendy plugins I installed and threw out.

## Why "fewer plugins" is better

The first instinct after you've set up a basic vault: head into Community plugins and install 30 interesting ones. **Don't.** Reasons:

- **Every plugin is a point of failure.** One breaks after an Obsidian update, and your vault lags in weird ways.
- **Conflicts between plugins.** Two plugins do similar things slightly differently — the vault starts behaving unpredictably.
- **Cognitive load.** If you have 30 plugins, each with settings — you're burning energy on configuration instead of working with notes.
- **Interest decay.** Half of the good plugins die in a year (author stops maintaining). Fewer plugins — fewer dependencies.

The rule: **a plugin must save you at least 1 minute a day, otherwise it's not worth installing**. Over a year that's 6 hours — that's meaningful. If it saves you 10 seconds once a week — throw it out.

## My working set — 9 plugins

### 1. Obsidian Git

Covered in a separate article. Auto-commit + push to a private GitHub repo. Backup + change history. No debate — this is a must-have.

**What it does:** automatic commits every 10 min + push to your repo.
**Savings:** you forget about backup as a problem.

### 2. Templater

Templates for repeatable tasks. Daily note, meeting notes, project setup, post draft — you create them not from scratch but from a ready scaffold.

**What it does:** lets you create files from a pre-built template with variable substitution (date, project name, etc.).
**Savings:** 5-10 min a day if you keep a daily ritual.

A separate article in the series is dedicated specifically to Templater — I'll go deeper there.

### 3. Dataview

Magical thing. Builds "queries" across the vault — like "show me all active projects," "show all meeting notes from this month," "show all tasks tagged #waiting."

**What it does:** gives you a query language (similar to SQL but simpler) you can drop right into a note. The result updates automatically.
**Savings:** instead of walking through 50 files by hand and collecting a list — you get a dashboard that updates itself.

### 4. Calendar

A small widget on the side: current month's calendar, days with notes highlighted, click on a day — creates or opens a daily note.

**What it does:** visual navigation through daily notes.
**Savings:** 30 seconds every time you need to find a record from a week ago.

### 5. Periodic Notes

Works in tandem with Calendar. Extends daily notes to weekly, monthly, quarterly, yearly. Each with its own template (via Templater).

**What it does:** gives you weekly review, monthly review in one click.
**Savings:** structures your time. Without it, weekly review keeps being "I'll get to it sometime."

### 6. QuickAdd

Quickly add notes and tasks with hotkeys. Example: press `Ctrl+Shift+A` → it asks "what to add?" → you type → it automatically lands in `00_Inbox/` in the right format.

**What it does:** catches ideas without breaking your current context.
**Savings:** 1-2 min a day, plus ideas don't get lost.

### 7. Tag Wrangler

Helps manage tags: rename a tag across all files at once, see the full tag list with usage counts, delete unused ones.

**What it does:** brings order to tags, which naturally grow chaotic.
**Savings:** minimal daily, but once a quarter it saves you from chaos.

### 8. Outliner

Improves work with nested bullets. Tab/Shift+Tab for nesting, dragging entire branches, fold/unfold — like Workflowy or Roam.

**What it does:** makes bullet lists in Obsidian actually pleasant.
**Savings:** if you write a lot in outline format (brainstorming, plans) — significant.

### 9. Excalidraw (optional — for those who think in diagrams)

Drawing right in Obsidian — quick sketches, flowcharts, mind-maps. No need to switch to Miro or Figma. If you don't think visually — you can skip it. If you do — it's the best you'll find in the Obsidian ecosystem. This plugin really needs screenshots to convey its power — a separate article with examples is in the works.

## What I installed and threw out

A few popular plugins I installed and tossed within 2-4 weeks. Not because they're bad — just not for me. Maybe not for you either.

**Kanban.** Looks cool, but in the end I always come back to lists with checkboxes. A Kanban board is work about organizing work, not the work itself.

**Heatmap Calendar.** Visually nice (squares like GitHub contributions), but less information than a regular Calendar. Tossed.

**Citations / Zotero integration.** If you're an academic or write research-heavy texts — useful. For most — overhead.

**Smart Connections / AI plugins in Obsidian.** Here's the nuance: I get AI features through Claude Code in VS Code, which works with the same folder. Separate AI plugins in Obsidian duplicate and conflict, for me. If you're not using Claude Code — the situation's different, it might make sense.

**Advanced Tables.** Hints when working with markdown tables. Sounds useful, but I realized that 80% of tables are easier to ask AI to build than to edit by hand. Tossed.

**Tasks plugin (with full syntax for deadlines, recurrences, etc.).** Tries to turn Obsidian into Todoist. More complicated than it needs to be. I went back to plain `- [ ]` checkboxes + Dataview queries on them.

**Various themes and CSS-snippet plugins.** First 2 weeks with the vault — you want to customize. After a month — you realize the default theme works and you're burning energy in the wrong place.

## How I install new plugins — my process

When I see a new interesting plugin, I apply the "3-week rule":

1. **Day 0.** Install it. Configure the basics.
2. **Week 1.** Use it actively. If I'm not using it — toss immediately.
3. **Week 3.** Check: am I really using it daily? Can I easily describe what exactly it saves me? If both are "yes" — keep it. If either is "no" — toss.

It's strict, but it works. The vault doesn't get cluttered.

## Safe rule: install one at a time

If you want to test several plugins — install them **one at a time**, with a week's pause. If something breaks — you immediately know who's guilty. If you installed 5 at once and the vault starts lagging — start disabling them one by one until you find the bad one. That's hours.

## What's next

Now you have a set of plugins that actually work. One of them — Templater — deserves its own article. Templates turn the vault from "just folders with files" into a real operating system: press a button → get a ready scaffold for a new project/day/meeting.


If you don't want to miss it — follow me on [LinkedIn](https://www.linkedin.com/in/taras732/), I announce each next piece there.
