---
title: "Git without the terror: a safe copy of your vault online"
description: "How to make a private copy of your notes on GitHub via the Obsidian Git plugin — no terminal, no fear. Step by step, for non-technical people."
pubDate: 2026-07-01
lang: en
tags: [obsidian, git, github, backup, knowledge-management]
readingTime: "9 min"
series: obsidian-ai
seriesOrder: 3
draft: false
canonical: https://ascendgriffin.org/blog/git-for-obsidian/
---

> The word "git" sounds like something for programmers. In reality — it's just a way to keep a private copy of your files online, with a history of changes. Not a single line of terminal code in this article, I promise.

## 3 scenarios that happen more often than you'd think

Before we talk about "how" — let's be honest about "why." Backup feels paranoid until one of three things happens:

1. **The laptop dies.** The most banal one. Spilled coffee, dropped it, dead drive, stolen. Any one of these — and your notes from half a year of work vanish with the device. iCloud Drive and OneDrive sometimes save you, but they often sync poorly and you end up with half the files.
2. **A file accidentally deleted.** You, or one of the family members who shares the laptop. Clicked the wrong thing, emptied the trash, file gone. Obsidian has a local history, but it's not eternal.
3. **The vault breaks after an update.** Rare, but it happens: a plugin update, a sync conflict between devices, a weird combination of glitches — and the files are there but read as corrupted.

In all three cases one thing saves you: **a second copy that isn't on your laptop**. Not on the same drive, not in the same house. Online, in private storage, with a history — so you can roll back to a state from a week ago.

## GitHub — private storage online

GitHub is a service where you can keep **private** repositories for free. "Private" means — only you see the contents, no one else. It's not publishing, it's backup.

Signup:

1. Go to [github.com](https://github.com), click **Sign up**.
2. Email, password, username. Done.
3. On the free plan you get unlimited private repositories. That's enough for a vault for years to come.

Create a **private** repository (e.g. named `obsidian-vault`):

1. Click **+** in the upper right → **New repository**.
2. Name: `obsidian-vault` (or whatever you want).
3. Check **Private** — critical, not Public.
4. Don't add README, .gitignore, or license — create it empty.
5. **Create repository**.

Remember this repository's URL — something like `https://github.com/[your-username]/obsidian-vault`. You'll need it in Step 4 below.

## Obsidian Git plugin — setup via UI

Now the best part: you'll be using neither the terminal nor the command line. Everything goes through regular Obsidian settings.

### Step 1 — Install the plugin

1. In Obsidian, click the gear in the lower left — that's **Settings**.
2. On the left, pick **Community plugins**.
3. First time — click **Turn on community plugins** (Obsidian warns you're running third-party code — agree).
4. Click **Browse**, search for "**Obsidian Git**". This is the plugin from `denolehov` / `Vinzent03`.
5. **Install** → **Enable**.

### Step 2 — Install Git on your laptop

The plugin technically needs the Git program on your computer. This is a one-time install, after which you forget about it.

- **Windows:** download from [git-scm.com/download/win](https://git-scm.com/download/win), run the installer, all defaults — OK. Just Next-Next-Install.
- **Mac:** open Terminal once (Spotlight → Terminal), type `git --version` and hit Enter. Mac will offer to install **Command Line Tools** — agree.

After installation, **close and reopen Obsidian** — so the plugin can see Git.

### Step 3 — SSH key, painless

An SSH key is like a "key to your apartment" that lets your laptop connect securely to GitHub. Without it, you'd have to type a password every time.

The easiest way to generate one — ask Claude:

```
Generate an SSH key for connecting to GitHub.
1. Create a new ed25519 key with the email [your email].
2. Show me where it lives and what to do next —
   where to paste the public key on GitHub.
3. Do not print the private key in the response.
```

The AI will create the key, show the file path, open the public part for copying. You grab that public string, copy it, head to GitHub → Settings (your avatar) → **SSH and GPG keys** → **New SSH key** → paste → **Add**.

Done. Now your laptop and GitHub know each other.

### Step 4 — Link the vault to the repository

1. In Obsidian open the Command Palette (`Ctrl+P` / `Cmd+P`).
2. Type "**Obsidian Git: Clone an existing remote repo**".
3. The plugin will ask for a URL. Enter the SSH variant: `git@github.com:[your-username]/obsidian-vault.git` (notice: `git@`, not `https://`).
4. Run the command.

Alternatively — if the vault already exists and you don't want to start from scratch, it's easier to ask Claude:

```
My vault already contains files. Link it to an existing
private repo on GitHub: [URL]. Make the first commit
with all current files and push to the repository.
```

The AI will initialize, make the first commit, and push to GitHub. Check on the repository page in your browser — the files should appear.

## Auto-commit every 10 minutes

Now the nice part: configure things so you don't have to think about backup at all. The plugin will do it for you.

In Obsidian: **Settings → Obsidian Git**. Find the **Auto** section and configure:

- **Vault backup interval (minutes)**: `10` — commit and push every 10 minutes.
- **Auto pull interval (minutes)**: `10` — if you edit from another device (more on that in upcoming articles), it pulls in the changes.
- **Pull updates on startup**: `enabled`.
- **Commit message**: leave the default or use something custom like `vault: {{date}}`.

Done. Now every 10 minutes your vault quietly backs itself up. No terminal, no attention needed from you.

## How to roll back to a week-old state

The best thing about git is the **history**. Each commit is a snapshot of the whole vault at a moment in time. If you accidentally deleted something important three days ago — you can bring it back.

Easiest way — ask Claude:

```
I accidentally deleted the file [file path] a few days ago
and have already made commits after that. Find the latest
version of this file in git history and restore it into
the current state of the vault.
```

The AI walks the history, finds it, restores it. If you want to do it yourself — Obsidian Git has a **Show diff** command in the Command Palette, where you can scroll through commit history. But for the first time — it's easier via AI, it knows the syntax.

## Common mistakes

**1. Made the repository public instead of private.** The worst mistake — the whole internet sees your notes. Check right now: go to the repo page on GitHub. There should be a **Private** badge. If it says **Public** — Settings → at the bottom **Danger Zone** → **Change visibility** → Private.

**2. Put big files in the vault (videos, ISOs, dumps).** Git was built for text. If you push a 500 MB file — commits get slow, you hit GitHub limits. Big files — separately, in the cloud (Google Drive, Dropbox), not in the vault.

**3. Conflicts when working from two devices at once.** If you're editing the same file on a laptop and a phone without sync between them — git creates a conflict. Not scary, but worth understanding. More on that in the sync article.

## What's next

Now the vault backs itself up. You can exhale — even if the laptop falls into a river, your notes from half a year of work sit in safe private storage with history. But there's another question worth closing **before** you start dumping client documents in there: what you can and can't put in the vault.


If you don't want to miss it — follow me on [LinkedIn](https://www.linkedin.com/in/taras732/), I announce each next piece there.
