---
title: "The brief for the team (user story): how to read it and know what we're paying for"
description: "How to tell a well-written task from a bad one. The formula, three signs of a weak story, and the phrase to ask for a rewrite without friction with the team."
pubDate: 2026-05-22
lang: en
tags: [business-analysis, user-stories, vendor-management, ascend-griffin]
readingTime: "7 min"
series: ba-artifacts
seriesOrder: 3
draft: false
canonical: https://ascendgriffin.org/blog/user-story-instruktsiya-ponyatno/
---

> This is for people who see lines like "As a user I want to..." in Jira, Notion, or an email from their vendor, and can't tell whether that's normal or whether they're starting to get played.

## Why this hurts

We commissioned development work. The team gave us access to their task system. We logged in — and saw a list of dozens of cards, each starting with "As [someone] I want [something]..." It sounds like magic. It looks complicated. And the contract says we're paying for it.

The question that's painful to ask out loud, but has to be asked: **how do we know this text is worth anything at all?**

Because sometimes cards in a task system are just decoration. Someone ticked the "BA is working on the backlog" box, sent an invoice, moved on. And we're paying for lines that explain nothing to anyone, because the dev team will just walk up to the team lead and ask in plain words anyway.

The good news: telling a normal brief from a bad one takes 30 seconds. No technical background needed. Let me show you how.

## What a user story is — no magic

> It's a **short template** in which one task is described from the **user's** side, not the developer's.

In IT it's called a **user story**. It's not encrypted code or a "methodology." It's simply an agreed-upon format in which every team member describes work the same way — so nobody gets confused.

From here on I'll use "brief" and "user story" as synonyms. The English term — so we recognize it in an email; the plain word — so we think about it without awe.

## The formula: who / what / why

The classic template looks like this:

> **As** [a user role], **I want** [to perform an action], **so that** [I get a result].

Let's break it down with an example. Imagine we're commissioning an app for paying utility bills.

> **As** a user who pays utilities every month, **I want** to see a reminder 2 days before the payment deadline, **so that** I don't miss the deadline and don't pay a late fee.

What's good here:

- **"As a user who pays every month"** — this isn't "as a user," it's a person with circumstances. The developer now knows this is someone who logs in rarely, not someone who lives in the app.
- **"See a reminder 2 days before"** — a concrete action, with a concrete number.
- **"Don't pay a late fee"** — this is the **reason**, not a repeat of the action. And it's exactly the reason that helps the team when they hit a technical constraint and need to find an alternative.

If we know these three parts — we can already tell a normal story from a flimsy one.

## Three signs of a weak story

### Sign 1: vague

> "As a user I want a convenient interface."

That's not a brief. It's a wish. **"Convenient"** is a subjective word. **"Interface"** is not an action, but an abstraction. A card like this gives the developer no reference point — so they'll build it as they imagine it. Then we'll say "not what I meant," and the rework starts, on our dime.

### Sign 2: no criteria

> "As a user I want to pay a bill in one click."

Better already. There's an action. But there's no answer to the question: **what does "paid" mean?** With which banks? What does the user see after success? What happens if the bank declines? Without acceptance criteria, a story is the start of a conversation, not an agreement. Acceptance criteria were covered in the [first post of the series](/blog/akcept-kryteriyi-ponyatnymy-slovamy/) — worth a re-read if you haven't.

### Sign 3: no context

> "As an admin I want to delete a user."

Technically a complete formula. But — why? In which cases does the admin delete a user? What happens to the data after deletion? Can it be recovered? Without the reason, the team builds the simplest version (a single "delete forever" button), and later a regulatory problem blows up on us, because under GDPR/data-protection law the data should have been kept for 3 years.

Context saves you from this. A single "so that..." sentence closes half the questions before they even come up.

## Before / after example

Take a real line that often gets written in tasks:

### Before (don't do this)

> "Add Apple Pay payment."

That's not a story. It's a technical task written from the developer's side. There's no user, no reason, no readiness criterion.

### After (do this)

> **As** an iPhone user who pays utilities from their phone, **I want** an Apple Pay button next to the "Pay by card" button, **so that** I don't have to enter card details every month.
>
> **Acceptance criteria:**
> - The Apple Pay button is visible only on iPhone (not shown on Android).
> - Tapping it opens the standard Apple Pay interface.
> - After confirmation, the user gets a receipt by email within 1 minute.
> - If Apple Pay is unavailable on the device — the button isn't shown (rather than showing an error).

The second version is an **agreement**. We can pick up the phone, open the app, and verify in a minute whether what we ordered got done.

## How to ask for a rewrite without a fight

This is the most delicate part. If we tell the team "your stories are badly written" — we'll be seen either as a toxic client or as someone meddling outside their lane. Both spoil the relationship for months.

This phrase works better:

> *"I want to navigate the tasks more easily. Could you add, for [specific task], the **reason** ('so that...') and **3-5 acceptance criteria**? I need it so I can later check for myself whether what we agreed on got done."*

What's happening in this phrase:

- We're not criticizing the team. We're describing **our own** need.
- We're not asking to "rewrite everything" — just to fill in **one specific** task.
- We explain **why** we need it — so we can verify it ourselves. That's a normal, understandable request, not "teaching the team how to do their job."

In 9 cases out of 10 the team will do it — and often say thanks. Because it's easier for the team lead too when the cards in the task system are written like human language.

## Common mistakes at this stage

1. **Thinking we write the user stories.** Usually a BA or team lead writes them. Our job is to **read and ask questions**. If we're being pushed to write them ourselves — either a strong team wants to teach us (good), or a weak team is offloading their work onto us (bad).
2. **Ignoring the "so that" reason.** It's the weakest part in 70% of the stories I've seen. Without it, the team builds to their own assumption, not to our business goal. Always ask: "but why?" — and record the answer in the card.
3. **Not splitting big stories.** If a brief runs more than two screens — it's not one story, it's a package of 3-5. Splitting them before the start is cheaper than reworking after.
4. **Signing off the backlog as one "package" for 3 months.** No need. It's enough to describe the next 2-3 sprints, and add more as specifics emerge. The contract should allow this format.

## What's next

This is the third post in the series on business-analysis artifacts. The previous ones covered [acceptance criteria](/blog/akcept-kryteriyi-ponyatnymy-slovamy/) and the [pre-contract discovery brief](/blog/dyskaveri-bryf-pered-kontraktom/).

Next — the IT-company estimate. How to read the line "200 hours · $25K," where the vendor may have interests different from ours, and why "fixed price" isn't always cheaper than hourly work.

If you don't want to miss it — follow me on [LinkedIn](https://www.linkedin.com/in/taras732/), where I announce every piece in the series.

---

*If we're staring at a backlog from a vendor right now and can't tell whether these are real stories or decoration — that's a reason to hit pause. At Ascend Griffin we run short [Discovery Calls](https://cal.com/ascendgriffin/discovery) — 30 minutes to look at your documents together and tell you honestly where the risks are.*
