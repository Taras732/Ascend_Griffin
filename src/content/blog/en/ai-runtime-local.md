---
title: "AI running at home — when you need it, and when you don't"
description: "When local AI on a home server makes sense, and when it's better to keep a Claude or ChatGPT subscription. With my own setup and real numbers."
pubDate: 2026-05-22
lang: en
tags: [home-lab, ai, llm, claude-code, self-hosting]
readingTime: "10 min"
series: home-lab
seriesOrder: 4
draft: false
canonical: https://ascendgriffin.org/blog/ai-runtime-local/
---

> This is for those who feel a bit uneasy about Big Tech subscriptions but aren't yet sure it's realistic to have AI at home that runs without the cloud. I'll tell you how it works for me right now.

## Two situations where cloud AI hurts

Most days — it's all fine. We open Claude or ChatGPT, it helps, we pay $20/month and don't think about it. Everything works.

But there are two situations where it stings:

**First — no internet.** A plane, a train, a country house, a power cut, "switching to backup 4G with 1 GB a month." In those moments our most useful assistant goes silent. Even though our laptop has all the files and all the memory it needs.

**Second — sensitive data.** Client documents. Contracts not yet signed. Personal correspondence with a doctor. The company's financial figures. Honestly, all of this makes us **a little wary** about dropping it into Claude or ChatGPT, even if the terms of service "reassure" us.

Let's work out what a home lab does about this — and what it doesn't.

## What already works at my home

Let me tell you about a concrete thing that works for me every day and that **doesn't require a local LLM**. This is the most important part, because a lot of people think "local AI = you have to buy a $2,000 GPU." That's not true.

On my home server (the same little box from earlier posts) lives **Claude Code via a web interface**. It's the same Claude I work with on my laptop — but accessed through a **browser** from any of my devices.

How it works:

- The server runs a web interface that connects to my Claude subscription
- Over a private network (Tailscale, from the earlier post) I open an address like `home-box:8444` from my phone
- I see a full AI chat in the browser on my phone
- The AI has access to all my files on the server — notes, documents, projects
- Memory, settings, history — all right there, on my server

This is **not a local LLM**. It's **local control over access to a cloud LLM**. Claude itself (the model) lives in Anthropic's data center. But access to it, the context, the files — all on my network, on my server.

The cost of this specifically: **$0**. It's included in the regular Claude subscription I have anyway. No extra fee — not for the server, not for the service, not for hosting.

This is **80% of what we need** from "AI in a home lab."

## Why this is already a lot

It might seem like a "hack" — "well, it's still cloud AI." Let's look at what we actually get:

**1. Access from any family device.** No need to buy a $20/month subscription for each person. I have one subscription, accessed from my laptop, my phone, my wife's iPad. Over our private network.

**2. The AI's files go nowhere.** When I work in the browser on my phone, the AI reads files from my box. Yes, it sends them to the Claude API for a response — but **only what I've deliberately handed to that chat**, not the whole folder. And nothing gets "remembered" by the AI on Anthropic's side — it's all local.

**3. Memory and context are ours.** The AI knows about my projects, my clients, my family — not because "Anthropic remembered," but because that memory is stored in a file on my box and loaded into every chat.

**4. It works even when I'm not at my desk.** From a phone, from a tablet, from a guest laptop — all the same. Because it's a browser open to my box.

This does **not** solve the "no internet" problem. It does **not** solve the "I don't want my prompt going to Anthropic" problem. But **it does solve the "I want one controlled point of access to AI from all my devices" problem**. And for most of us, that's **enough**.

## Where I'm headed — a fully local LLM

Now for what I **haven't fully field-tested yet**, but am moving toward.

There are **local LLMs** — the same kind of language models (like Claude or ChatGPT), but living entirely on our server. They send nothing to a data center. Free in terms of licensing (more precisely, we pay only for electricity + setup time).

Names you'll hear: **Ollama** (the program that runs them), **Llama 3** and **Qwen** (the models themselves). All free, open, installed in Docker with one command.

### What you honestly need to know about small/private models

**They don't replace the current top models (Claude, the latest GPT).** This has to be accepted. Complex tasks — deep analysis, writing long text, nuanced decisions — Claude, as of 2026, does noticeably better.

**BUT they're constantly improving.** What only Claude could do six months ago, Llama or Qwen now handle fine. The gap shrinks every month.

**And they handle routine tasks brilliantly**, as long as we **describe in detail what we want**. Categorize email, extract data from a PDF, translate text between languages, summarize a document — small models are plenty for that.

Here's how I do it now: **important / complex things — through the latest Claude** (a fresh subscription), **routine tasks — with older models or via Ollama, free**. That's economy + privacy at once. Big questions go to the "expensive" one, small background chores to the "free" one.

### What this gives us in daily life

- **Works offline.** A plane, a country house, a forest cabin — the AI is with us
- **Not a single byte goes anywhere.** Your own data center
- **No subscription limits.** As many requests as we like
- **Experiments are safe.** Sensitive things — with zero leak risk

### What it does **not** give (let's be honest)

- **Quality on serious tasks is worse** than the best cloud model (as of 2026). A year or two — and they'll be level, but **right now** — no
- **Speed depends on the server.** On a regular mini PC — fine for short requests and routine, but for long code or analyzing a large database — patience
- **Serious use requires a hardware upgrade.** A regular mini PC won't run Llama 3 70B. You need either a $500-1,500 GPU, or a newer CPU with plenty of memory

### What it actually costs

A "free model" is only formally free. In reality we pay:

- **Electricity** (~$3-7/month extra if the server carries a load)
- **Setup time** (1-2 evenings to get a working install)
- **Hardware** ($300-1,500 for extra memory/GPU, if what we have can't handle it)
- **Quality** (we give up 1-2 steps to the best cloud models)

**Is it worth it?** Depends on the tasks.

- **If we work with people where security comes first** (lawyers, doctors, financiers, journalists with sources) — **yes, a very practical case**. What can't be shown to Claude, a local LLM handles. The cost is inverted — it's an investment in security.
- **If we write content, ask questions, process notes** — for now it's cheaper and better through a cloud subscription.
- **If we want a mixed mode** (like me right now): routine tasks — locally / with older models, important — via Claude. Then the local setup pays for itself in half a year to a year.

**Why I write "where I'm headed" and not "how I did it":** I haven't field-tested it fully yet. I've set it up in tests, it works, but I don't yet use it daily as my main tool. As soon as I switch over fully — I'll write a separate post with real numbers and concrete scenarios.

## How to decide — do we need a local LLM too?

Filter questions:

**1. Do we have data that genuinely can't be shown to Claude/ChatGPT?**

If we're a lawyer with client contracts, a doctor with medical histories, a financier with confidential figures — **yes, we need it**. If we write letters, process notes, ask questions — **no, we don't**.

**2. Are we often without internet?**

If we travel a lot, work from a country house, live somewhere with a weak connection — **yes, useful**. If we're mostly in the city with Wi-Fi — **no, a rare case**.

**3. Are we ready to invest in a box?**

A local LLM = an extra $300-1,500 in hardware (a GPU or a beefier CPU). If the savings from dropping subscriptions cover that within a year — **it pays off**. If not — **better to keep the subscription**.

**4. Are we ready for the answers to be worse?**

This is the hardest one. A 2026 local LLM ≠ 2026 Claude. The quality gap is noticeable. If we're used to Claude's quality — going back to Qwen is painful. If we're ready for it — it's all fine.

My own answer: 1 — yes (sometimes), 2 — no (rarely), 3 — not yet, 4 — ready for specific tasks. So **I'm in no rush**. I'll have a local LLM, but as a **second tool**, not the main one.

## What's next

Now we have AI on the server — in my case via a cloud subscription, but with full local control. It works with a keyboard, from any device, over a private network.

In the next post we'll cover another function the home server enables: **voice**. How to talk to our AI in Ukrainian, without handing our voice to Big Tech. It works for me, and it's a story of its own.

## Common mistakes

1. **Thinking "AI at home" = "buy a $2,000 GPU."** No. Most of what we need works via a regular subscription + access control through a home server
2. **Wanting a fully local LLM right away**, without trying the intermediate step. Better to first roll out Claude access via the server — and see whether that's enough. In 80% of cases — it is
3. **Paying for 3-4 separate subscriptions** (Claude, ChatGPT, Perplexity, Copilot) because "everyone in the family has their own account." One subscription via a home server — everyone in the family gets access, $0 extra
4. **Believing in "full privacy with cloud AI."** No, it's not full. If we **definitely** need full privacy — that's a local LLM. If we need **controlled access and no leaking of everything indiscriminately** — that's a server + cloud AI. These are different things; let's not confuse them
5. **Waiting until "local AI becomes like Claude."** Maybe it will, in a year or two. For now — we build what works today: hand routine to a local model, important work to the latest Claude, and keep the balance of security and quality in our own hands
