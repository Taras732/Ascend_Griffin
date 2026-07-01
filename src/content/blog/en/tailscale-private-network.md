---
title: "A private network between our own devices — no VPN providers"
description: "Tailscale: laptop, phone, and home box on one network, as if they were in the same room. Works from any country. Free."
pubDate: 2026-05-22
lang: en
tags: [home-lab, tailscale, vpn, networking, self-hosting]
readingTime: "7 min"
series: home-lab
seriesOrder: 3
draft: false
canonical: https://ascendgriffin.org/blog/tailscale-private-network/
---

> This is for anyone who once wanted to "reach into their laptop back home" while on a business trip, but got scared off by paid VPN providers and fiddly router settings. It's simpler than it sounds.

## What hurts

Picture a familiar situation. We're on a business trip, on a plane, at a client's office, in another country. Half of what we need is on the laptop. The other half is on the home box: an AI with our memory, our notes, a backup of important files, the family photo gallery.

How do we reach them right now? Usually like this:

- Through cloud services (Google Drive, Dropbox, iCloud) that can see our files
- Through a commercial VPN ($5-15/mo) that knows where we "go online"
- By opening router ports to the open internet (scary, risky, don't recommend it)
- Or **not at all** — we wait until we get home

Every option is either paid, or leaks data to a third party, or complicated. There ought to be a normal way.

The normal way is **a private network between our own devices**.

## What Tailscale is in two sentences

Imagine our home Wi-Fi somehow "stretched" across the internet. Now our laptop in Kyiv, phone in Lviv, and box at home in Lviv are **all on one network**. They see each other. They pass files. They log into each other.

Technically, a program called **Tailscale** makes this happen. We install it on each of our devices, sign in with one account — and all those devices are now on our little private network. There's nothing else to do.

An everyday analogy: it's like a **private Telegram chat**, only not for messages but for devices. Whoever's in the chat sees everyone else. Whoever isn't in the chat doesn't even know it exists.

## What it gives us

Let me explain through concrete scenarios from my own life:

**Scenario 1: I'm at a client's, and I need to show something from my home laptop.** I open the app on my phone, see the address of my box at home (say, `home-box`). I connect through it to the AI, ask a question — it answers from the home box. Not a single client file goes anywhere in the process.

**Scenario 2: my wife is at the children's hospital and needs a document from our home folder.** I'm not home and can't send it to her. But her iPad is also on our private network — she opens the app, sees our home folder, finds the document. No Google Drive, no forwarding by email.

**Scenario 3: I'm on a plane, dictating a note by voice.** There's a caveat here — without internet, Tailscale doesn't work either. But **on the laptop itself**, everything works locally (Obsidian, partly the AI). The moment in-flight Wi-Fi appears — it all syncs to the home box right away.

**Scenario 4: I've left for a week, and the home box runs itself.** Automatic backups arrive from my laptop, the AI processes something in the background, the voice service stands ready to take commands from my phone. All of it — with no involvement from me.

**The common thread across all scenarios:** our devices talk **directly to each other**, not through cloud middlemen. Tailscale helps them find each other across the internet, but the data between them travels directly, encrypted.

## How we set it up

No screenshots — I'll describe the process, because it's equally simple on every system:

**On the home box** (Linux):

```
curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up
```

A link prints out, we open it in a browser, log in with Google/Microsoft/Apple. Done, the box is on the network.

**On the laptop** (Mac/Windows): download the app from [tailscale.com](https://tailscale.com), install it, sign in with the same account. Done.

**On the phone** (iPhone/Android): from the App Store / Google Play, same account. Done.

**Check:** on any device, open the box's address (a name like `home-box.your-tailnet.ts.net`) — and we're on its network. We can open its services, get into files, transfer data.

That's it. That's the **whole** process. 5-10 minutes to start, then — zero maintenance.

## Price and limits

**Free** for personal use — up to 100 devices and 3 users. For our family and our usage, that's **tens of times more** than we'll ever need.

Paid plans start at $6/mo per user — that's when you're a company with 20+ people. For home use — forget about it.

This is one of the rare cases where "free" doesn't mean "we're selling your data." Tailscale earns from corporate clients. Personal users are essentially freeloaders — because without them, there'd be no network for the corporate ones.

## What Tailscale **doesn't** see

Now — what Tailscale knows about us:

- **Knows:** which devices we have, when they're online, our account
- **Doesn't know:** what we pass between those devices. Encryption is end-to-end, the keys live on our devices
- **Doesn't know:** our files, our messages, our AI

This isn't "take my word for it" — it's **open source**: security researchers can verify it, and regularly do. The reports are public, and there have been no major issues over years of operation.

If that's still not enough for us (say, lawyers, journalists protecting sources) — we can stand up **our own server instead of Tailscale**, with a program called **Headscale**. That's for the technically inclined. For most of us, Tailscale is more than enough.

## Our example — the network in my family

Here's how it looks for us:

- **home-box** — the main home box in the corner of the office
- **MacBook** — my work laptop
- **iPhone** — my phone
- **iPad** — my wife's (for notes and documents)
- **Old laptop** — sits in the bedroom, works as a second backup device (important data is backed up via git, as we already described in the earlier series on Obsidian + AI)

All 5 — on one network. Each sees each. If I want to reach the home AI from my phone in Kyiv — I do. If my wife wants to look at photos from our box on her iPad — she does. None of these connections **goes through a third-party server holding our data**.

## What's next

Now we have a physical box, an operating system, Docker for "boxes of programs," and a private network connecting all our devices. That's a complete foundation.

In the next post we'll get into what interesting things you can already do with this. More precisely — how exactly the AI runs on this setup for us. Whether you need to run a local LLM, or whether you can just neatly "wrap" an existing Claude subscription. We work through both paths.

## Common mistakes

1. **Opening router ports to the open internet** instead of Tailscale. It works, but it's **a hole in our security**: anyone on the internet can try to get in. Tailscale gives the same thing (access to the box from anywhere) — but without the hole
2. **Paying for a commercial VPN** to reach home things. NordVPN, ExpressVPN, ProtonVPN — those are for other tasks (changing country, bypassing blocks). For a private network between our own devices — Tailscale, free
3. **Not installing Tailscale on the phone**, because "it's all there through iCloud anyway." And we don't notice half our data going to Apple. The phone on the network — mandatory
4. **Being afraid to log in via Google/Apple.** Tailscale sees only our account, not our data from Google. It's a separate "key to the entrance," not "the key to everything"
5. **Waiting for "the right moment."** 10 minutes now — and we already have a foundation to build everything else on
