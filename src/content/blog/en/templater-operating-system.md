---
title: "Templater: your vault as an operating system"
description: "How to turn your Obsidian vault into a working system through templates: daily note, meeting notes, project setup, post draft. Concrete templates + how I build them."
pubDate: 2026-09-23
lang: en
tags: [obsidian, templater, productivity, templates, knowledge-management]
readingTime: "9 min"
series: obsidian-ai
seriesOrder: 7
draft: false
canonical: https://ascendgriffin.org/blog/templater-operating-system/
---

> If you start every daily note from a blank file and think "what should I write here" — you're burning energy in the wrong place. A template removes that question once and for all. In this article — my actual templates that have been running in the vault for years.

## Why templates aren't "bureaucracy"

The word "template" sounds bureaucratic. In reality — it's a **thinking protocol**. A tested form that asks you the right questions while you're tired or in a hurry. Without templates:

- Daily notes come out different every day. Sometimes there's "how I feel," sometimes there isn't. Sometimes "what I did," sometimes you forgot.
- Meeting notes — no one can read them later, the structure is different every time.
- A new project starts from a blank file and you burn two hours on "how to organize this."

With templates:

- Press one button — get a daily note with the date pre-filled, weather, 3 sections (intention for the day, what got done, reflection).
- New project — in 10 seconds a ready folder with README, taskboard, decisions log, decisions template.
- Meeting notes — identical sections (attendees, agenda, decisions, action items), easy to find anything a month later.

This is the "operating system" — repeatable processes without having to reinvent the form every single time.

## Templater — the foundation

In the previous article about plugins I mentioned **Templater**. This is **the** plugin that makes templates alive. Plain Obsidian templates (built-in) are just static files that get copied. Templater gives you variables: substitute date, time, file name, your name, a random example, anything.

Basic syntax:

```
<% tp.date.now("YYYY-MM-DD") %>     -> 2026-09-23
<% tp.date.now("dddd") %>            -> Wednesday
<% tp.file.title %>                  -> current file name
<% tp.system.prompt("Project name") %>  -> prompts you for input
```

Looks like code, but really it's just a set of "placeholders" that get filled in at file creation time.

**Setup:** Settings → Templater → **Template folder location** — pick `99_Meta/Templates`. This is where your templates will live. Another important option: **Trigger Templater on new file creation** + **Folder Templates** — this lets a template fire automatically when you create a file in a specific folder.

## Template 1 — Daily Note

My actual daily note (simplified for the example — drop your own details in place of `[placeholders]`):

```markdown
---
date: <% tp.date.now("YYYY-MM-DD") %>
day: <% tp.date.now("dddd") %>
tags: [daily-note]
---

# <% tp.date.now("YYYY-MM-DD, dddd") %>

## Intention for the day
> What's the one important outcome that will make today a success?

[your one main thing for today]

## Top 3
- [ ] 
- [ ] 
- [ ] 

## What got done (evening)
- 

## Reflection (2-3 sentences)
- 

## Links
- [[<% tp.date.yesterday("YYYY-MM-DD") %>|← yesterday]] | [[<% tp.date.tomorrow("YYYY-MM-DD") %>|tomorrow →]]
```

What happens:
- On file creation — date and weekday get substituted.
- At the bottom, links to yesterday's and tomorrow's daily notes appear automatically — one-click navigation between days.

Setup in Periodic Notes (the plugin from the previous article): point it at this template as **Daily note template** — and when you click on a day in Calendar, Obsidian creates a new note already with this structure.

## Template 2 — Meeting Notes

```markdown
---
date: <% tp.date.now("YYYY-MM-DD") %>
type: meeting
attendees: []
status: draft
tags: [meeting-notes]
---

# <% tp.system.prompt("Meeting topic") %> — <% tp.date.now("YYYY-MM-DD") %>

## Attendees
- 

## Context
Why is this meeting happening? What do we want to achieve?

## Agenda
1. 
2. 
3. 

## Notes

## Decisions
- 

## Action items
- [ ] **[name]** — [what to do] — by [date]

## Next steps
- 

## Links
- 
```

What happens:
- On creation — a popup asks "Meeting topic?", you type — the file name and heading fill in immediately.
- Same structure for every meeting — months later, searching for "what did we decide with [client X] in July" — click, "Decisions" section — it's all there.

## Template 3 — Project Setup

The most useful template. When I start a new project, I don't create one note. I want a folder with 4 files at once:

- `README.md` — project overview
- `Tasks.md` — current tasks
- `Decisions.md` — log of key decisions
- `Notes.md` — running notes

Templater lets you do this via **scripted templates** — a template that runs JavaScript and creates several files at once. It's a bit more complex than the previous two, but configure it once — use it for years.

A simplified version — create a template that asks for the project name and generates `README.md`, while you create the rest of the files by hand in a minute. Like this:

```markdown
---
project: <% tp.system.prompt("Project name") %>
status: active
start_date: <% tp.date.now("YYYY-MM-DD") %>
tags: [project]
---

# <% tp.frontmatter.project %>

## Context and goal
[why this project, what you want to get]

## Definition of success
[what the finished project looks like — concretely]

## Stakeholders
- 

## High-level plan
- [ ] 
- [ ] 
- [ ] 

## Deadline
[Date] — [what should be ready]

## Risks
- 

## Links
- [[Tasks]]
- [[Decisions]]
- [[Notes]]
```

How to use it: create a folder `10_Projects/[Project name]/`, inside — a new file, pick this template (via the Templater command in the Command Palette), it asks for the name, generates the file. The other 3 files — by hand in a minute.

If you want — you can ask Claude:

```
In my vault at the path 99_Meta/Templates there's a template
project-setup.md. Create a new folder 10_Projects/[Name],
inside — 4 files (README from the template + empty Tasks.md,
Decisions.md, Notes.md). Show me the result.
```

The AI will build the structure in one move.

## Template 4 — Weekly Review

Once a week, on Friday evening or Sunday — a note summing things up. Without it, the vault quickly turns into a junkyard, because nothing gets closed.

```markdown
---
week: <% tp.date.now("YYYY-[W]ww") %>
date_start: <% tp.date.weekday("YYYY-MM-DD", 1) %>
date_end: <% tp.date.weekday("YYYY-MM-DD", 7) %>
tags: [weekly-review]
---

# Week <% tp.date.now("YYYY-[W]ww") %>

## What happened — main events

## What got done (by category)
### Work
- 

### Personal
- 

### Health
- 

## What didn't get done and why
- 

## Lessons of the week
- 

## Focus for next week — top 3
1. 
2. 
3. 

## Links to daily notes
- 
```

If you have Periodic Notes — it'll create this file automatically on Friday/Sunday, whichever you pick.

## How I build a new template — the process

1. **Do it by hand 3-5 times.** Don't start with a template. The first weeks you do daily/meeting/project by hand. You'll notice what repeats.
2. **Capture the common elements.** What's always there? What do you always forget and regret later? What's structurally important?
3. **Create the template — minimal.** 5-7 sections max to start. No heroics.
4. **Use it for 2 weeks.** You'll figure out what to add and what's unnecessary.
5. **Iteration.** Every 2-3 months review your templates. Toss sections that are always empty. Add what always shows up.

## Common mistakes

**1. A template with 50 sections.** Oversized templates have the opposite effect — you don't fill them in at all, because it's a 30-minute task. Keep it under 10 sections.

**2. Copying someone else's YouTube template without adapting.** Other people's templates are other people's questions. Work with your own.

**3. Template in `00_Inbox/` instead of `99_Meta/Templates/`.** Templater looks for templates in a defined folder. Don't scatter them across the vault — that's chaos.

**4. Forgetting about Folder Template.** You can configure it so that creating a file in a specific folder automatically applies a template. Without that, you have to pick it manually every time — and often you forget.

## What's next

Now you have templates — the vault isn't just a "note base," it's a working system. The last thing left is the ritual that **keeps this system alive**. Without 10 min a day and 30 min a week, even the best structure turns into a notes graveyard within a month.


If you don't want to miss it — follow me on [LinkedIn](https://www.linkedin.com/in/taras732/), I announce each next piece there.
