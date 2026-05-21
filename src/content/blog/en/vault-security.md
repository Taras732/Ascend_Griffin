---
title: "Security: what we DON'T put in the vault"
description: "4 categories of data that should never end up in your Obsidian vault. Anthropic's privacy policy in plain words + alternatives for passwords and client NDAs."
pubDate: 2026-07-22
lang: en
tags: [obsidian, security, privacy, nda, knowledge-management]
readingTime: "9 min"
series: obsidian-ai
seriesOrder: 4
draft: false
canonical: https://ascendgriffin.org/blog/vault-security/
---

> If you work with clients, have NDAs, or just don't want to wake up one day and find your passwords in some model's training data — this article is worth reading **before** you start dumping documents into the vault. Five minutes now = half a year of calm later.

## Why this isn't paranoia

I'm not the kind of person who throws "confidentiality" around as a scare tactic. But there are a few real risks worth understanding if you're putting serious materials in your vault:

- **AI companies can change their policies** — what's "we don't train models on your data" today can become "we use anonymized fragments to improve the service" tomorrow.
- **Your vault is backed up to GitHub** (as we did in the previous article). GitHub is Microsoft. They have their own policy.
- **A laptop can get stolen, forgotten at the airport, sent in for repairs.** If the vault isn't encrypted — everything is served on a platter.
- **Family and coworkers** sometimes use your laptop. A stray letter about selling client data is one of those things you don't really want a random guest to see.

So the base rule: **the vault is a desk, not a safe**. A working surface that your AI helper can see and that backs up to the internet. Anything that shouldn't end up there — doesn't go in.

## 4 categories of data

A simple framework that works:

| Category | Examples | Where to put it |
|---|---|---|
| **OK** | Your own notes, ideas, plans, drafts, book notes, your CV, links. | Vault, no restrictions. |
| **OK-but-careful** | Working documents, contract drafts, non-confidential client memos, analytics. | Vault, but **not** in public folders. Encrypted laptop. |
| **NOT OK** | Passwords, banking data, full card numbers, CVV, passport scans, other people's personal data without consent. | **Never**. Dedicated tools (below). |
| **Encrypt separately** | Client NDA material, contracts under strict confidentiality, medical data. | A separate encrypted volume, **outside** the vault. |

A simple rule for the doubt: **if I ask you "are you OK with an AI company or GitHub having the technical ability to see this?" — and the answer is "no" — it doesn't go in the vault**.

## Anthropic's privacy policy for non-coders

Anthropic is the company that makes Claude (and therefore Claude Code). Their official policy — as of the moment of writing this article:

- **Claude Code, which runs locally through VS Code**, sends your prompts and file fragments to Anthropic's servers so the model can respond. This is a mandatory part of how it works — the model lives on their servers, not on your laptop.
- **By default** (on paid plans) this data is **not used** for training models.
- Anthropic may retain prompts for safety and abuse monitoring — for a limited period, without using them for training.
- Enterprise plans have additional guarantees and full opt-out options.

In plain words: for most tasks — this is OK. The AI sees your files at the moment you ask it to do something. It doesn't sit there reading them in the background. But — and this is important — **policies can change**, and that's outside your control. So the **NOT OK** and **Encrypt separately** categories should be off-limits in principle, regardless of what the current policy says.

Before working with the most sensitive data — it's worth checking the [current Anthropic privacy policy](https://www.anthropic.com/legal/privacy). It's not long, written in human language.

## Passwords — password managers

First rule: **passwords don't live in the vault. Ever. None of them.**

Instead — a separate tool built for it:

- **[KeePass](https://keepass.info)** — the one I use myself. Free, open-source, local (the database sits on your laptop as a single encrypted `.kdbx` file). The same file can be synced between devices via cloud storage — Google Drive, Dropbox, Tailscale — your call. Master password on the file itself, plus 2FA via keyfile or YubiKey. There are clients for every platform: KeePassXC (Win/Mac/Linux), Strongbox (iOS), KeePassDX (Android).
- **[Bitwarden](https://bitwarden.com)** — a free alternative with cloud sync out of the box. More convenient for those who don't want to deal with self-managed sync.
- **[1Password](https://1password.com)** — paid, $3-5/mo, the smoothest UX. Fits if a team needs to share passwords.

Any of them: master password + 2FA + browser autofill. No password in the vault, in a note, in a Telegram chat with yourself, in a Google Doc — **ever**. This is one of those rules where the compromise isn't worth it.

If you have passwords in Excel or a text file right now — close this article, install KeePass (or any of the three), move them. Seriously. You can come back later.

## Encrypted volumes — VeraCrypt, Cryptomator

For materials in the **Encrypt separately** category (client NDAs, contracts, medical data) — create a separate encrypted volume. It's like a "safe" that lives as one big file but only opens with a password.

- **[VeraCrypt](https://www.veracrypt.fr)** — free, battle-tested, powerful. You create a container file of 10 GB, mount it as a separate drive, work with it like a regular folder. Unmount — back to one encrypted file.
- **[Cryptomator](https://cryptomator.org)** — simpler than VeraCrypt, tailored for encrypting folders in the cloud (Dropbox, Google Drive). If you already store files in the cloud and want to encrypt them — this is your option.

A simple pattern:

1. Create an encrypted volume with a 20+ character password (generated in your password manager).
2. Put NDA-protected client materials in there.
3. Work with them only when you need to — unmount when done.
4. In the vault, put **only your notes/conclusions** from those materials — without copying the sensitive files themselves.

## Working with client NDAs — practical patterns

If you're a consultant, lawyer, or service provider — clients will give you materials under NDA. How do you work with them in a system with AI?

**Pattern 1 — full isolation.** The safest. Client files live in an encrypted volume, completely outside the vault. The AI doesn't see them at all. You work with them in a regular PDF reader, Word, Excel — without Claude. In the vault you keep only your **deliverables** (reports, presentations you create for the client).

**Pattern 2 — anonymization.** You work with materials in the vault, but **before** uploading anything, you strip names, company names, concrete numbers, replacing them with placeholders (`[Client]`, `[Company X]`, `[$N]`). The AI sees the structure, doesn't see identifying data.

**Pattern 3 — separate vault for the client.** You set up a separate Obsidian vault for a specific client, with its own `CLAUDE.md`, separate repo (or no repo at all, local-only). You work with it as a temporary workspace. Wrap up the engagement — archive the whole vault.

Which one you pick — depends on sensitivity. For most business NDAs (commercial terms, product plans), Pattern 2 is enough. For medical, financial, criminal-legal data — Pattern 1 only.

And important: **read your NDAs**. Some explicitly forbid using AI tools with client materials. If so — Pattern 1 with no exceptions, and let the client know your practices before starting the engagement.

## Checklist before dropping into the vault

If a file passes all four questions — it can go in:

1. Is this **my own** data or material that I **have the right** to use with AI tools?
2. There's no **password, full card number, passport data, medical details** in here?
3. If it's client material — do I have **verbal or written confirmation** that the client is OK with AI processing?
4. Am I OK with this file sitting on GitHub (privately) and Anthropic technically having the ability to see it at request time?

If any answer is "no" — either don't put it in, or put it in after anonymization, or put it in an encrypted volume outside the vault.

## What's next

Now the vault is safe — you know what can go in, what can't, and how to work with client data without losing sleep. The next practical question is how to edit these notes not just on the laptop, but from the phone too, when you're walking around the city and an idea hits.


If you don't want to miss it — follow me on [LinkedIn](https://www.linkedin.com/in/taras732/), I announce each next piece there.
