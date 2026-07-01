---
title: "The discovery brief: the document that saves us $20K"
description: "Why a vendor can't quote an honest price without a discovery phase — and how to buy that phase as a small standalone service before signing the big contract."
pubDate: 2026-05-22
lang: en
tags: [business-analysis, vendor-management, discovery, contracts, ascend-griffin]
readingTime: "9 min"
series: ba-artifacts
seriesOrder: 2
draft: false
canonical: https://ascendgriffin.org/blog/dyskaveri-bryf-pered-kontraktom/
---

> This is for people who have an idea and are looking for a vendor. If we've already been asked to sign a "turnkey" contract right away — and our gut said it was too soon — this one's for us.

## Why we're writing this post

In the previous piece we talked about acceptance criteria — the document that defines what "done" means. But there's a moment that comes even before criteria. It's the moment when we don't yet know **what exactly** we're ordering.

The most expensive mistake for a person with an idea is signing a development contract before anyone has honestly laid out what we're building, for whom, and what we can skip entirely. In that case the vendor has only one way to name a price: pad it with a big "unknowns" buffer. Sometimes that buffer is 2x, sometimes 3x.

This is cured by one small document and one small contract. The document is the **discovery brief**. In the IT world it's often called a *discovery brief* or the **output of the discovery phase**. I'll use both terms interchangeably below.

## Why "turnkey" without a brief is a lottery

Imagine we go to an architect and say: "build me a house." An architect who respects themselves and us won't name a price. They'll ask: for how many people? With a garage? On what plot? What are the winters like? Are we planning to rent it out? Only after those questions, after a sketch, and after a rough estimate of materials does the conversation about money begin.

In IT it's the same, only with more questions, because software has no foundation you can see with the naked eye.

When a vendor agrees to sign a contract "to build the app" without a brief, it means one of two things:

- They've already done 30 identical projects and are simply selling a template (in which case the price may be honest, but our product will be like those 30, without our specifics).
- They've covered their own uncertainty with a big budget and added a "just in case" buffer — and we pay for that buffer whether or not it's ever needed.

In one illustrative project I saw over 8 years as a business analyst across various industries — from energy to fintech — a team saved roughly $20-30K simply because the client insisted on a two-week brief before signing the big contract. After the brief it was clear that two of the four "must-have" features didn't need building at all — users didn't want them. The money went back into the budget before development even started.

## What a discovery brief is — in plain words

> It's a **short phase** (usually 2-4 weeks), at the end of which we get a **10-20 page document** that honestly records: what we're building, for whom, why, what we're **not** building, with which risks, roughly how much it'll cost, and how long it'll take.

The key word is "roughly." A brief doesn't give an exact price. It gives a **range** in which the price is realistic — for example, "$80K to $120K, with a rationale for the 30% spread." No one who hasn't been through this phase can give anything tighter than an honest range.

And this is the most important part: the brief is a **separate small contract** that we sign **before** the big one. Not "we'll do discovery for free, and then you'll sign development with us." Free means we're already on the hook, because otherwise it feels awkward to go to a competitor. Paid means we're free.

## 7 sections a brief should contain

If someone brings us an 80-page brief — that's a problem. If it's 3 pages — also a problem. The target is 10-20 pages, with 7 sections:

### 1. Context

One page on **why** this project exists. Not "we want an app." But: "our clients currently lose 40 minutes a week on something that could take 5 minutes — and it costs us [X] clients a year." If the brief has no such number, or at least an estimate, it's not a brief — it's the intro to a brochure.

### 2. Users

Who **specifically** will be clicking on our product. Not "the user" or "the customer," but **3-5 personas** with names and circumstances: "Maria, 42, an accountant at a small business, opens the app twice a week in the evening on her phone; her biggest pain is finding a past payment."

### 3. The job (jobs-to-be-done)

What the user is **trying to do**. Not "view a dashboard," but "make sure everything's paid today before going to bed." The difference between those two phrasings is the difference between a project that launched and a project no one uses.

### 4. Assumptions

The things we **believe but haven't proven**. Every assumption is a risk. Example: "we assume users are willing to enter card numbers in our app." Until we've tested it on 10 people, that's a hypothesis, not a fact. A brief has 5-10 of these. Without a list of assumptions, we're just building on sand.

### 5. Constraints

Everything we **can't** change: budget ($X), deadline (3 months), regulatory requirements (bank, ATC, medical), tech stack (because of integration with an existing system). Without an honest list of constraints, the price is a lie in both directions.

### 6. Artifacts to be produced

Exactly what we get for our money. Not "we'll build you an app," but concretely: a Figma design of 25 screens / 80 user stories with acceptance criteria / an architecture diagram / a list of external integrations with a complexity estimate.

### 7. Next step

What happens **after** the brief. The most honest version sounds like this: "based on the results we make one of three decisions — (a) we go into development with us at $X-Y, (b) we go into development with a different vendor using this document, (c) we pause the project because the brief showed the idea isn't worth the money." All three are fine. If the next step has the vendor "automatically" continuing into a development contract — that's not a brief, it's a presale.

## Illustrative example: an energy app

On one project where I helped prepare a brief for an app in the energy sector (this is an illustrative composite from my experience, with no reference to a specific client), here's how it went.

The client wanted "an app for paying utility bills." He held a budget in his head of around $150K, timeline 6 months.

After 3 weeks of discovery, the picture changed:

- It turned out **70%** of users open the app not to pay, but to check their meter readings. Payment was a secondary function.
- Two "must-have" features (cashback and a support chat) turned out to be unnecessary — 12 short interviews with real users showed it.
- Meanwhile a critical need emerged — **a reminder the day before the payment deadline**. Without it, 30% of users missed the date and paid a penalty.

Bottom line: the budget shrank to ~$95K, the timeline to 3.5 months. The launch had a measurable result: the key action (submitting readings) got ~35% faster, and support call volume dropped ~20%.

The brief cost the client around $12K. The savings versus the original plan — tens of thousands, plus a product people actually use.

## How to pay for a brief

Three practical rules:

1. **Fixed price, not "hourly."** A 2-4 week brief with concrete artifacts. If they offer hourly, it means the vendor hasn't scoped the work — and therefore won't scope our idea either.
2. **Separate contract.** Not "an addendum to future development." A separate half-page document: dates, price, what we get, and that we're not obligated to continue specifically with them.
3. **Pay in full before or after, with no in-between hostage-taking.** The standard is 50% at the start, 50% after acceptance of the document. No "70/30 because that's what we're used to."

The amount to expect: for a small project (a web app or mobile app), $8-20K for the discovery phase. If it's less — we're probably being sold a template document. If it's substantially more — worth asking what's so complex about it.

## Common mistakes at this stage

1. **"We don't need discovery — the idea is simple."** If the idea really is simple, the brief takes 2 weeks instead of 4, and costs 8K instead of 20K. Simplicity doesn't cancel the phase — it just shortens it.
2. **Taking a free "presale brief."** It's free because it's the vendor's marketing, not our document. It'll be about them, not us. And we'll feel psychologically "obligated" to continue the partnership.
3. **Not asking about ownership of the document.** The brief contract must state: the document is ours. We can take it and go to any vendor.
4. **Giving up after the brief and not demanding a range.** A brief without a cost and timeline range is a half-finished brief. If the vendor says "we can't name it, too many factors" — either the document is written poorly, or we're choosing the wrong team.

## What's next

This is the second post in a series on business analysis artifacts — the documents that protect us on the client's side. If you missed the first one, it's about acceptance criteria: what "done" means before we start.

The next piece is about the instructions a dev team works from (user story). How to read those lines in Jira or Notion and understand what we're paying for, and where we're being asked to pay twice.

If we don't want to miss it — follow me on [LinkedIn](https://www.linkedin.com/in/taras732/), I announce each piece in the series there.

---

*If we've got an idea right now and a vendor offering to sign a "turnkey" contract straight away — this is a moment to pause. At Ascend Griffin we run a [Discovery Sprint](https://cal.com/ascendgriffin/discovery) — a two-week brief before the contract, after which we go into development with numbers in hand rather than gut feelings.*
