---
title: "Acceptance criteria: what \"done\" means before we start"
description: "How to define \"done\" so there are no surprises at handover. In plain words, for people who pay for development but don't write it themselves."
pubDate: 2026-05-22
lang: en
tags: [business-analysis, vendor-management, contracts, acceptance-criteria, ascend-griffin]
readingTime: "8 min"
series: ba-artifacts
seriesOrder: 1
draft: false
canonical: https://ascendgriffin.org/blog/akcept-kryteriyi-ponyatnymy-slovamy/
---

> This is for people who commission IT development but don't write the code themselves. If we've ever signed off on a delivery and felt "something's off here, but I can't prove it" — this one's for us.

## Why this hurts

The most expensive line in a development contract sounds perfectly innocent: "the MVP will be ready in 3 months."

That's not an agreement. That's a lottery. Here's why:

- **"MVP"** — we picture one thing, the vendor pictures another, the designer a third.
- **"Ready"** — for a developer that means "runs without errors." For us it means "the user can pay a bill in 30 seconds."
- **"3 months"** — from what date? From signing? From the deposit landing? From the moment "everyone's ready"?

And when, 3 months in, we're looking at something half-working, the worst part of the project begins — the argument about what was actually promised. Without a document where it's written in black and white, whoever is louder wins. And the louder party isn't us.

All of this is cured by one document that, for some reason, often gets skipped. It's called **acceptance criteria**. In plain words: a list of conditions that, when met, mean "the work is delivered."

## What acceptance criteria are — in one sentence

> It's a **list of checks** that we (the client) can run **ourselves**, without the vendor, to confirm that what got built is exactly what we ordered.

The key word is **ourselves**. If verifying it requires a developer to "open the console" or "run a test," that's not an acceptance criterion — it's a technical note. A good criterion is worded so that we (a non-technical person) can click through the app and say "yes" or "no."

## Bad → okay → good

Let's take an illustrative task: **a user pays a utility bill through the app**. Here's the same thing described three ways.

### Bad criterion (don't do this)

> "The user can pay a bill."

The problem: we can't verify it. Can pay it **how, exactly**? With which payment methods? What do they see after success? What if the bank declines? What if the internet drops mid-payment?

### Okay criterion (already better)

> "The user opens the app, sees their bill, taps 'Pay,' selects a bank, confirms — and receives a receipt by email within 1 minute."

What's good here: there's a **sequence of steps** and a **measurable outcome** (a receipt within 1 minute). We can verify it with a watch in hand.

What else we can add to make it **good**:

### Good criterion (with counter-examples)

> The user opens the app, sees their bill, taps "Pay," selects a bank, confirms — and receives a receipt by email **within 1 minute**.
>
> **Additionally:**
> - If the internet drops mid-payment — the app shows "Payment failed. Please try again" and does **not charge twice** once the connection is restored.
> - If the bank declines — we show the reason in plain language (not an error code) and offer a different bank.
> - If the user hasn't entered an email — we ask before "Pay" is tapped, not after.

Now it's an **agreement**. We (the client) can pick up the phone, try paying under normal conditions, try paying with the internet off, try with a bad card — and for each scenario say "works" or "doesn't work" without the developer in the room.

## 5 questions worth asking before the contract

Now the most important part. These are **not questions to ask two months into the project**. These are questions we raise **before signing the contract**.

### 1. "How will we verify that a task is done?"

An honest answer sounds like a list of checks with measurable outcomes. A dishonest one: "well, we'll show you and you'll see."

### 2. "What happens if I check it and it doesn't work?"

There should be a rule that takes effect **before** any money changes hands. For example: "if something fails the acceptance criteria, the task goes to status 'in rework,' and we keep working until it passes, at no extra cost."

### 3. "Who writes these criteria — you or me?"

The best answer: "together, in short 30-minute sessions for each major task." The second-best: "we draft it, you read it and add your own scenarios — especially the ones where things go wrong." If the answer is "don't worry, we've got it all handled" — that's a red flag.

### 4. "What happens when the user does something unexpected?"

A good vendor always has examples of **negative scenarios**: the internet dropped, the user double-tapped, the bank declined. If the conversation only covers "how it'll all work perfectly" — half the project is still ahead of us in the form of surprises.

### 5. "Can I see an example of acceptance criteria from a past project?"

This is the cheapest quality filter there is. A vendor who works with this daily can produce examples in 5 minutes. One who doesn't work with them systematically suddenly can't find any.

## What a "done" file looks like in practice

Nothing fancy needed. A plain Google Sheet with 3 columns. Roughly like this:

| What we check | How we check it | Status |
|---|---|---|
| User can pay with their primary bank | I'll try it myself with my own card. Get a receipt in <1 min | ✅ |
| No double charge when internet is off | I turn off Wi-Fi mid-payment, check the balance | ✅ |
| Errors shown in plain language, not codes | I'll try a card with a 0 balance | ⏳ checking |
| Email required before "Pay" is tapped | I remove the email from the profile, try to pay | ❌ currently allows it without email |

As many rows as it takes. A task like "pay a bill" usually has 5-10 criteria, not 50. If it came out to 50 — either the task is too big and needs splitting, or we're writing technical notes, not acceptance criteria.

## Common mistakes at the start

1. **Assuming acceptance criteria are the developer's job.** They're our shared work. The developer knows **how to build it**. We know **why**. Without our voice, the criteria will be about "technical correctness," not "the user is happy."
2. **Signing criteria in one "package" three months ahead.** No need. It's enough to describe the next wave of tasks and add to it as we go. The contract should allow for this format.
3. **Not writing down "negative" scenarios.** "What happens when" is our main insurance. Anywhere there's money, third parties (banks, operators), or data entry — always add at least one "something went wrong" scenario.
4. **Handing over the project without a checklist.** If we sign off on delivery without running through the acceptance criteria, we're essentially signing "the vendor said it was done and I believed them." There's no rewinding after that.

## What's next

This is the first post in a series on business analysis artifacts — the documents that protect us on the client's side. I'll cover each of the next ones separately, in plain words:

- **Discovery brief** — the document that saves $20K, because without it the vendor can't name an honest price.
- **User story** — how to read the instructions the team works from, so we understand what we're paying for.
- **The estimate from an IT company** — how to read it correctly and where the vendor's interests may differ from ours.
- **Risk map** — how to find what's been hidden.
- **Vendor comparison** — oranges vs. oranges, a table template.
- **AI feature brief** — when AI actually helps, and when it's just trendy.

If we don't want to miss it — follow me on [LinkedIn](https://www.linkedin.com/in/taras732/), I announce each piece there.

---

*If there's a contract on our desk right now without acceptance criteria — this is the moment to hit pause. At Ascend Griffin we run a [Vendor Audit](https://cal.com/ascendgriffin/discovery) — a review before signing, from our side of the table.*
