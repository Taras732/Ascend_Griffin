---
title: "What we need to put together — one box and three programs"
description: "A concrete set of three programs on a single box. No server rack, no $5,000 of hardware. In plain words."
pubDate: 2026-05-22
lang: en
tags: [home-lab, docker, debian, tailscale, self-hosting]
readingTime: "9 min"
series: home-lab
seriesOrder: 2
draft: false
canonical: https://ascendgriffin.org/blog/home-lab-stack/
---

> This is for those who read the previous post and thought "okay, you've convinced me — but where do I start?" Let's lay it out concretely.

## The big picture — in plain words

We need **one box** (a physical device) and **three programs** running on top of it:

1. **An operating system** (Debian) — like Windows, only quieter and free. It runs everything that happens on the box.
2. **Docker** — a way to keep programs in separate "containers" so they don't interfere with one another.
3. **A private network** (Tailscale) — so our laptop, phone, and box can see each other even when we're away from home.

In this post we'll cover the first and second programs plus the box itself. **The third layer — Tailscale — gets its own post** (there's some interesting logic there worth going through calmly).

On this frame you can already live for years, adding new things one at a time.

## Layer 1 — the box

The first thing we need is a physical device that sits in our home and runs 24/7. That's our "box."

There are three options:

**An old laptop we already have.** If we've got a laptop we "used to use," with 8 GB of RAM — that's a **ready-made start**. Close the lid, put it in a corner, forget about it. Whether the battery works doesn't matter — the point is that it powers on and runs (the box stays plugged in constantly). Cost: $0.

**An office-class mini PC.** This is a small box about the size of a large book. Usually these are machines companies used for office workstations and then retired. On eBay or a local marketplace — $150-300. Quiet, small, low power draw.

Mine is an **HP EliteDesk 705 G4 DM**. I originally bought it for a completely different purpose — so the kids could watch YouTube and cartoons on the TV, because the standard Android boxes kept breaking, freezing, and drowning everything in ads. For a couple of years it sat in the living room as a "smart TV box." When I got into local AI, it turned out this same device was perfect as a home server — I bought nothing specifically for the lab.

**Raspberry Pi or similar.** A tiny computer the size of a credit card, $50-100. It works, but slower. Fine to start with, but a bit weak for AI. We'll keep it as an option for those who want to start with the cheapest thing.

Important: **we don't need a server.** Not a server rack, not "professional" $2,000 hardware, not special room cooling. Just a small box sitting in a corner. It draws about as much power as a desk lamp — from $3 to $7 a month on the bill.

## Layer 2 — the operating system

The box needs an operating system. That's the program that decides "who works when" — like a store manager.

For a home lab the standard is **Debian** or **Ubuntu**. These are free systems that do one thing: run quietly for weeks without reboots, without ads, without "please update in the middle of a meeting."

**What it looks like for us.** The installation itself is a separate step-by-step guide we'll do in detail later. For now:

- YouTube has **plenty of videos** for our system (Debian, Ubuntu) walking through the whole process step by step — from the inserted USB to the first settings.
- Honestly — installing it is no harder than installing a new game. Read the instructions, click "Next" a few times, set a password.
- With a video guide, a six-year-old could do it — that's not an exaggeration, it's been tested.

After installation we log into the box from our laptop over the private network — the way we'd log into a remote desktop. We never physically touch the box again.

Do we need to be a "Linux guru"? No. For the basics it's enough to know a dozen commands we learn in one evening. Everything else — we copy from ready-made instructions or ask AI to explain.

## Layer 3 — Docker, "boxes for programs"

This is the layer that changes everything. It deserves its own explanation.

Imagine an ordinary apartment where everything sits on one shelf: books, documents, a phone cable, medicine, kids' toys. If one thing breaks — say, the medicine spills — the documents and books suffer too.

Now imagine the same apartment, but each category of things is in a **separate container** with its own lid. The medicine spills — it stays in its container, doesn't touch the documents.

**Docker is boxes for programs.** Every program we install on our box lives in its own "little box" with its own rules and its own dependencies. AI — separate. The bot — separate. The voice service — separate. If one breaks something — the others keep running.

Why this matters for us:

- **Install with one command.** Instead of "install this, then install that too, then configure it" — one command, and the program works.
- **Remove with one command.** If we don't like it — remove it, and no junk is left in the system.
- **Everything works the same.** What works on mine works on yours, without "somehow it won't launch on my machine."
- **Updates are safe.** If a new version breaks something — we roll back to the previous one in a minute.

**And how exactly to do it — it's not scary.** For each program you write a short text file (10-20 lines) describing "here's the program, here are its settings, here's its data." Luckily, **we don't have to write these files by hand**. If we went through the previous series on Obsidian + AI — we already have Claude in VS Code, which can write and configure such files itself. It's enough to describe in plain words what we want ("set up service X, open network access for it, keep its data in this folder"), and Claude prepares the file, explains what's in it, and helps launch it.

Examples of concrete configurations for concrete services (AI, voice, bot, notes) we'll add in separate posts — where they start to make sense. For now it's enough to grasp the idea.

## What it looks like in my home

So this doesn't stay theory, here's what currently sits on one box in the corner of my study:

- **The box itself** — an HP EliteDesk 705 G4 DM, draws ~15 watts, quieter than a router
- **Debian** — the operating system, runs 24/7 without reboots
- **Docker** with 5-6 "little boxes" inside:
  - The AI stack (Claude Code via a web interface)
  - The voice service (speech recognition + synthesis in Ukrainian)
  - A notes bot in Telegram
  - A service for syncing between devices
  - A database for AI memory
- **Tailscale** — the private network (its own post coming)

That's it. One box, a few "little boxes," one private network. This took me **3-4 hours to set up** and ~30 min/month to maintain now.

## What's not required at the start

Many guides online scare you with "you also need this and this." Let's set the record straight — what we, the non-technical, **really don't need**:

- **RAID** (a special multi-disk setup where data is stored in two copies at once for loss protection) — useful, but not for the start. Simpler and cheaper: set up an **automatic backup** of important data to an external location — an external drive or an encrypted cloud service. Same effect (loss protection), no extra hardware.
- **UPS** (a battery backup for power outages) — with regular outages in Ukraine this is **worth considering**, since the box shuts down abruptly with the power. But it's **not critical**: if the box goes off — the AI agents and some services just stop temporarily, **the data doesn't disappear**. Power comes back — we turn the box back on, and everything continues from where it was. A UPS is more about comfort than safety.
- **A server rack** — that's for people running 10+ boxes at once. We have one, and it sits on a shelf or a desk.
- **A separate air-conditioned room** — the box doesn't run hotter than a laptop. A corner of the study is enough.
- **Sysadmin-level Linux knowledge** — for the basic 5-10 operations there are ready-made instructions. Deeper — as needed, in a year or two.

All of this may become useful someday. But **not at the start**. Let's not let ourselves get to "I'm not starting because I don't have everything I need yet." We start with what we have.

## What's next

In this post we understood the structure: box + operating system + Docker. That's the foundation. But without the fourth layer — **the private network** — all of this works only when we're at home, on the same Wi-Fi as the box.

In the next post we'll cover how to make our laptop, phone, and box see each other even when we're on a plane or on a business trip. Without cloud VPNs, without exposing our stuff to the open internet. For free.

## Common mistakes at the start

1. **Buying expensive hardware "to grow into."** No need. Start with what we have. If in a year something falls short — then we upgrade.
2. **Installing Windows Server.** That's for offices, not for home. For us — Debian or Ubuntu: free and easier to maintain.
3. **Installing programs "directly," without Docker.** In a month everything gets tangled and nothing can be cleanly removed. Get used to Docker from the start — it'll save your nerves.
4. **Trying to "understand how it works inside."** No need. Like a fridge — it just keeps things cold, and that's fine. We learn what's needed for our task, no more.
5. **Being afraid to break it.** The worst that can happen — we reinstall the system in one evening. Everything important is kept both on the box and in a backup at once. Experiment boldly.
