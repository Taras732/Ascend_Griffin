---
title: "Comparing vendors: oranges against oranges"
description: "An 8-column table template, a method of asking everyone the same questions, and three red flags visible only in comparison — not in a single proposal."
pubDate: 2026-05-22
lang: en
tags: [business-analysis, vendor-management, contracts, procurement, ascend-griffin]
readingTime: "10 min"
series: ba-artifacts
seriesOrder: 6
draft: false
canonical: https://ascendgriffin.org/blog/vyber-postaclalnyka-it-honchak/
---

> This is for people who've gathered 3-5 commercial proposals from different IT teams and are looking at them thinking: "they're all talking about different things — how do I even compare them?"

## Why this hurts

We did everything right. Sent a request to 5 teams. A week or two later we got 5 PDFs with proposals. Opened the first — 12 pages, price $48K, timeline 4 months. Opened the second — 6 pages, price "from $35K," timeline "depending on clarifications." The third — 24 pages of beautiful design, price $72K, and an unexpectedly detailed section on certification. The fourth — half a page and "$24K, let's meet and discuss."

Now imagine comparing that. The numbers differ. The structures differ. The words differ too: some write "development," others "implementation," others "delivery of functionality." In the first three weeks the decision often gets made on "who I liked more" — and that's a normal brain reaction to chaos.

But there's a better way. It has two parts: **an 8-column table** and **a method of asking everyone the same questions**. Let me show you both.

## Why "cheapest" almost always = most expensive

The first instinct of anyone looking at 5 proposals is to circle the cheapest. It's almost always a mistake, and here's why.

The team that gives the lowest number does it for one of three reasons:

1. **They underestimated the project.** They'll sign the contract, then start coming back with "oh, we didn't account for this and that" — and the final sum grows 40-80%.
2. **They're cutting corners on quality.** Less experienced developers, less testing, less documentation. We won't see it at launch. In 4-6 months — we will.
3. **They want to "get into" our market or segment.** And they're willing to lose money on their first clients. Sometimes that's a good opportunity for us. But more often it means the team is learning on our money.

In one illustrative project I saw (a composite of several cases across 8 years on projects from energy to fintech, not tied to any specific client), the client chose the cheapest proposal — $35K versus $48-55K from the others. Five months later the real cost was $78K, after 6 additional agreements about "clarifying the project scope." The gap against the average proposal — roughly $25K of lost money plus 2 months of launch delay.

Price is the fourth criterion of choice, not the first. What the first three are — below.

## The 8-column table template

We take Google Sheets or Notion. Create a table. In the rows — our vendors. In the columns:

### 1. Scope of work

What the vendor **specifically** promises to do. Not "an app," but a list of the main tasks: "registration + personal account + 3 bank integrations + admin dashboard." Some vendors write it out as a list in their proposal. Others hide it inside paragraphs. We write it out the same way for everyone — to spot who "forgot" some feature.

### 2. Timeline

How many weeks from signing the contract to a working version. **Not** "4 months," but "16-20 weeks." If the proposal gives an exact number with no range — that's a marker: either the vendor has a template and knows exactly how long it'll take (ask whether they've done this before), or they've pinned down a timeline they'll later push without explanation.

### 3. Team

**Who specifically** will work on the project. Not "our development team," but: 2 backend developers, 1 frontend, 1 QA, 1 BA/PM half-time, 1 designer for 2 months. With experience in years. If the vendor refuses to name the lineup before signing — either they don't have a standing team (they'll search for one per project), or the people will be resold to another project in a month.

### 4. Deliverables

What we **get in hand** for our money. Not just a working app, but: a design in Figma with some number of screens, architecture documentation, a set of team briefs with acceptance criteria (covered in the [first post of the series](/blog/akcept-kryteriyi-ponyatnymy-slovamy/)), deployment scripts, an administration guide. A good team writes this list into the proposal. With a bad one — we'll have to guess.

### 5. SLA / guarantees

What happens if something breaks after launch. A good proposal has a section like "Warranty support: 3 months after launch, critical bug fixes free of charge, response to a request within 4 business hours." A weak one — either has none at all, or has the phrase "all post-launch matters — a separate support contract."

### 6. Dependencies outside our control

What the vendor requires **from us** to do their part. Design mockups, access to partner APIs, a person on our side available daily for questions, a specific deadline by which we provide content. The best teams write this list out explicitly. The worse ones don't, then blame us for delays.

### 7. Hidden cost (out-of-pocket)

What's **not included** in the main number but will have to be paid separately. Hosting, licenses for third-party libraries, licenses for design assets, payment for third-party integrations (e.g., an SMS provider, a bank aggregator). In good proposals this is a separate section — in weak ones the surprise arrives in month three.

### 8. Price

And only now — the price. As a range, broken down by the discovery stage and the development stage, with an explanation of what pushes it up (estimates were covered in the [fourth post of the series](/blog/yak-chytaty-otsinku-it-kompaniyi/)).

## The "same questions for everyone" method

Here's the most important rule people often skip: **5 proposals can only be compared when we've asked all 5 vendors the same questions.** If we told one in detail about the regulatory requirements, mentioned them in passing to another, and forgot them with a third — we get chaos that can't be reduced to a table.

So before the first calls — we write a 1-2 page document **identical for everyone**:

- The project's context and goal.
- Target users (3-5 personas).
- The list of core features that must exist.
- Key constraints (budget range, timeline, regulatory requirements).
- 5 identical questions we ask each vendor to answer in the commercial proposal.

**5 questions worth asking everyone:**

1. **"Show a breakdown of the estimate by task, not just by role."** Whoever shows it within a day — a good sign. Whoever says "that's confidential" — also an answer.
2. **"What are the 3 biggest risks of this project from your point of view?"** An honest vendor names 3-5 concrete things. A dishonest one says "no risks, everything's fine." The second answer is the biggest red flag there is.
3. **"Who personally will work on the project? Give 2-3 key names with experience."** Teams that resell people within a week or two don't like this question.
4. **"What is NOT included in the estimate?"** A good team has a ready "out of scope" list. A bad one starts improvising.
5. **"Show a documentation example from a past project — team briefs, a design system, an architecture diagram. Anything we can see live."** Whoever has real examples in 5-10 minutes — a good sign. Whoever searches for a week and sends an "example" that smells freshly prepared — bad.

Same questions — same answers. Then the comparison becomes fair.

## Three red flags visible only in comparison

Once the table is filled in and we look at 5 rows, three types of problems appear that aren't noticeable in a single proposal.

### Flag 1: a spread in timelines of more than 2x

If one team promises 12 weeks, another 28, and a third "depending on clarifications" — then either one is significantly underestimating, or another is significantly over-hedging. Usually, between the shortest and longest timeline, the right number is closer to the middle or the larger figure. The shortest — almost always gets blown.

### Flag 2: one vendor forgot a feature the others named

If we asked for "an app with bank payment, push reminders, and PDF export," and one vendor's proposal describes only the first two — it's worth asking: "did you forget to write it, or is it not included?" The answer will show either care, or a plan to sell us "PDF export" as a separate $5K feature.

### Flag 3: very different team compositions at the same price

One writes "1 developer + QA half-time," another — "3 developers + DevOps + QA + PM + designer." The sum is the same. That means one of them isn't telling the whole truth about the team — either the first is charging above market for one person-month, or the second wrote in "virtual" people who will actually work 5% of the time.

## Why price is the fourth criterion, not the first

The order of criteria that works in real life:

1. **The team we'll spend 4-6 months of our life with.** Whether it's pleasant to talk to them. Whether they answer questions honestly or maneuver. Whether they respect our time. Half a project's success isn't the code — it's the weekly calls where someone has to say uncomfortable things. With a bad team, that won't happen.
2. **The realism of the promises.** What's written in the proposal is what we already see. If there's already exaggeration here, assume there'll be even more in the actual work.
3. **Deliverables and transparency.** What we get in hand, how often, in what form. How the task system is organized, what the reporting looks like. This determines whether we can control the project — or sit in the dark with an invoice at the end.
4. **Price.** Only now. Between two teams that passed the first three filters, go with the cheaper. Among teams that didn't pass — no price fixes that.

## Common mistakes at this stage

1. **Not writing an identical brief for everyone.** We tell each vendor the project in our own way, then wonder why the proposals aren't comparable. One 1-2 page document sent to everyone is 2 hours of work that saves weeks of analysis.
2. **Approaching 1-2 vendors.** Fewer than three isn't a choice, it's a random contact. More than five is exhausting and often unproductive. The golden number is 3-5.
3. **Asking only those recommended by friends.** Great for trust, but it narrows the pool. At least 1-2 proposals should come "from the market" — from teams we don't know. Otherwise we won't see market prices and alternatives.
4. **Not keeping the proposals from those we didn't pick.** These people can become a fallback if things don't work out with the main vendor. Or a point of comparison for the next project.

## What's next

This is the sixth post in the series on business-analysis artifacts. The previous ones covered [acceptance criteria](/blog/akcept-kryteriyi-ponyatnymy-slovamy/), the [pre-contract discovery brief](/blog/dyskaveri-bryf-pered-kontraktom/), [user stories](/blog/user-story-instruktsiya-ponyatno/), [reading an IT-company estimate](/blog/yak-chytaty-otsinku-it-kompaniyi/), and the [risk map](/blog/karta-ryzykiv-prosto/).

The last post in the series — the brief for an AI feature. When AI is genuinely needed, and when it's being proposed just because it's trendy. Three filter questions and a list of red flags.

If you don't want to miss it — follow me on [LinkedIn](https://www.linkedin.com/in/taras732/), where I announce every piece in the series.

---

*If we've got 3-5 proposals on the table right now and we're stuck comparing them — at Ascend Griffin we run a [Vendor Audit](https://cal.com/ascendgriffin/discovery) for groups of proposals. We ask the same questions, fill in the table, flag the red flags. It usually costs less than the difference between the first and second vendor on a single large deal.*
