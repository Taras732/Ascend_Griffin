---
title: "Sync between laptop and phone: 3 options"
description: "Obsidian Sync, GitHub-based, or self-hosted via Tailscale? A comparison of three working options for syncing your vault between laptop and phone — pros, cons, and prices."
pubDate: 2026-08-12
lang: en
tags: [obsidian, sync, mobile, tailscale, knowledge-management]
readingTime: "8 min"
series: obsidian-ai
seriesOrder: 5
draft: false
canonical: https://ascendgriffin.org/blog/obsidian-sync-options/
---

> If you already have a working vault on the laptop and you're thinking "how do I edit it from the phone" — there are three battle-tested paths. None is perfect, each has its own trade-offs. Pick after reading all three.

## Why one "cloud" folder isn't enough

The first instinct: drop the vault folder into iCloud Drive or OneDrive and "let it sync itself." That **doesn't** work well. Reasons:

- **Speed.** Cloud folders sync slowly and unpredictably. You edit on the phone, switch to the laptop — and the file isn't updated yet.
- **Conflicts.** If you edit on two devices at once — you get files like `note (conflict copy).md`. The vault gets cluttered.
- **Plugins and `.obsidian/`.** Obsidian's settings folder contains lots of small files that change often. Cloud services break them or sync them slowly.
- **iOS.** On the iPhone, Obsidian doesn't play nicely with iCloud Drive outside its "official" location — sometimes the mobile app just doesn't see the vault.

So below — three options that **actually** work. Each with a different balance between price, setup complexity, and control.

## Option 1 — Obsidian Sync (official)

**What it is.** A paid service from Obsidian itself. You pay — they sync between devices through their servers, end-to-end encrypted (the key is only with you).

**Price.** About $4-8/mo depending on the plan.

**How to set up.** In Obsidian: Settings → Sync → enable → log in with your Obsidian account → pick a vault → done. On the phone — same thing. Download Obsidian iOS / Android, log in, turn on Sync — the vault appears.

**Pros:**
- Works out of the box, no fiddling.
- E2E encryption — Obsidian doesn't see your files.
- Fast.
- 1-year versioning — you can roll back any file.

**Cons:**
- Paid (though $4-8/mo isn't a disaster).
- Vendor dependency: if Obsidian ever shuts the service down — you'd need to migrate. Unlikely, but theoretically possible.
- Doesn't replace GitHub backup — Sync and Git run in parallel, don't conflict, but they're separate things.

**Who it fits.** Those who want simplicity and are willing to pay a small fee for "just works." Most people.

## Option 2 — GitHub-based sync

**What it is.** The same private GitHub repository we set up in the backup article. Only now — we also install Obsidian + a git-compatible tool on the phone that pulls and pushes changes.

**Price.** Free (on GitHub's free plan).

**How to set up.**

1. On the laptop — everything is already configured from the previous git article (Obsidian Git plugin, auto-commit every 10 min).
2. On iPhone/iPad — install **Working Copy** (paid one-time, around $20) or **a-Shell** (free, more complicated) for git on iOS.
3. On Android — simpler: the Obsidian Git plugin works there too.
4. In Obsidian mobile, set up the same vault, but via a local folder that the git app syncs.

**Pros:**
- Free.
- Full history of all changes — you can roll back anything at any moment.
- The same backup you already made in article 3 — one solution solves two problems.
- Works without vendor lock-in.

**Cons:**
- Setting up the iOS side — the hardest of the three options. Working Copy has a learning curve.
- Conflicts happen if you forget to push from the laptop before opening on the phone.
- Not real realtime — you explicitly pull and push, or you set up auto-pull/push that adds a delay.

**Who it fits.** Those who already set up backup via git and don't want to pay separately for Obsidian Sync. Willing to spend an evening on the iOS setup.

## Option 3 — Self-hosted via Tailscale

**What it is.** The geekiest option. You have a separate little machine (an old laptop, Raspberry Pi, a $150 mini-PC from Aliexpress, a NAS) that holds a copy of the vault. The laptop and phone connect to it via [Tailscale](https://tailscale.com) — a private VPN network visible only to you.

**Price.** Tailscale is free for personal use (up to 100 devices). Hardware — from $0 (an old laptop sitting at home) to $200 (a new mini-PC).

**How it works technically.** On the "server" (your old laptop) you run [Syncthing](https://syncthing.net) — a free program that syncs folders between devices. Tailscale ensures your phone, your laptop, and your server can see each other even when you're in a café, traveling, or at the office. Syncthing syncs the vault. Everything is encrypted, nothing goes out into the "big cloud."

**Pros:**
- Full control. Your files — on your hardware.
- No monthly fees.
- Fast (direct device-to-device sync).
- You can add other services to the same server: photo backup, home media library, etc.

**Cons:**
- The hardest to set up. Linux, terminal, Docker — you'll meet them at some point for sure.
- If the server goes down — no sync until you fix it.
- You have to think about hardware reliability: power supplies, drives, blackouts.

**Who it fits.** Those who either already have a home lab and these pieces are in place, or are ready to invest 1-2 days into learning and get full control. Don't do this if you just want it to "work" — pay the $5/mo for Obsidian Sync.

## Quick comparison

| Parameter | Obsidian Sync | GitHub-based | Self-hosted Tailscale |
|---|---|---|---|
| **Price** | $4-8/mo | $0 | $0-200 one-time |
| **Setup complexity** | Low (15 min) | Medium (1-2 h) | High (1-2 days) |
| **Realtime sync** | Yes | Almost (auto-pull every 10 min) | Yes |
| **Control over data** | Encrypted at Obsidian | On GitHub (Microsoft) | Full (your hardware) |
| **iOS convenience** | Excellent | Hard (Working Copy) | Good |
| **Subscription dependency** | Yes | No | No |
| **Works offline** | Caches, syncs on reconnect | Caches | Only if your server is on the same network |

## My choice — and why

Honestly — I use a hybrid. The vault backs up to GitHub (privately, free, year-long change history) — that covers the catastrophic scenarios from the previous article. Between laptop and phone — Syncthing over Tailscale (because I already have a home lab with other services on it).

**If you don't have that home lab** — I'd start with Obsidian Sync. Yes, $5/mo isn't zero, but it buys you an evening of free time you'd otherwise burn fighting Working Copy on iPhone. Time is more expensive.

**The GitHub-based option** is for those who refuse to pay for Obsidian Sync on principle and are ready to spend an evening on iOS setup. It works, but not "magically."

## Common mistakes

**1. Trying to sync the vault via iCloud Drive or OneDrive.** Don't. `.obsidian/` breaks, conflicts, slow. One of the three options above — and that's it.

**2. Enabling two sync methods at once.** If Obsidian Sync, Git, and Syncthing all run in parallel on one folder — chaos with conflicts. One method for realtime sync, git separately as backup (they don't conflict, because git doesn't "sync," it makes snapshots).

**3. Not setting up conflict resolution.** You edit a file on the phone, then on the laptop — the same file, not waiting for sync. Conflicts still happen. Build the habit: "opened the device → waited 30 seconds → started editing."

## What's next

Now the vault works on two devices. Time to look at plugins — Obsidian has thousands of community plugins, of which you actually need 7-10. The rest are either marginally useful or just attention drains. I'll save you the search.


If you don't want to miss it — follow me on [LinkedIn](https://www.linkedin.com/in/taras732/), I announce each next piece there.
