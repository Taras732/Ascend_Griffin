---
title: "Risk map: how to find what's hidden"
description: "6 risk types that show up in 9 out of 10 IT projects, a 3-column table you keep yourself, and the moment it's time to call in a specialist."
pubDate: 2026-05-22
lang: en
tags: [business-analysis, risk-management, vendor-management, ascend-griffin]
readingTime: "9 min"
series: ba-artifacts
seriesOrder: 5
draft: false
canonical: https://ascendgriffin.org/blog/karta-ryzykiv-prosto/
---

> This is for people who know a project will have risks but don't want to pay consultants for a 40-page "risk register" that nobody ever opens again.

## Why this hurts

The riskiest thing you can hear at the start of an IT project: **"we have no risks, everything's under control."** It's usually said by someone who hasn't yet shipped a product into the real world. Because risks are always there — either we think about them, or they think about us.

On the other end — open a standard "risk register" from a big consultancy and you get a 40-page document listing everything that could theoretically go wrong: from a meteor strike to a key employee's betrayal. It costs a lot, it looks impressive — and it changes nothing in our day-to-day work, because nobody uses it.

Between these two extremes there's a working middle ground — **a simple three-column table** that we can keep ourselves, with no certificates and no consultants. Let me show you.

## What a risk map is — no magic

> It's a **list of things that could go wrong**, together with an **assessment** of how likely and how painful each one is, and a **plan B** for each.

That's all. Not a certification document, not a methodology with a three-letter acronym. Just a list we keep alive — updating it monthly, reviewing it with our vendor before every major milestone.

In English it's called a *risk register* or *risk map*. From here on — just "risk map" or "the table."

## Why standard templates don't work

Because they're written for an **audit**, not for **decisions**. A consultancy template will have a "Likelihood (1-5)" column, "Impact (1-5)," "Risk Score (1-25)," "Mitigation Strategy," "Risk Owner," "Review Cadence," and eight more fields. It looks great in Excel, but we'll never sit down one morning, open it, and do something differently because of those numbers.

What works instead is a minimal model — **3 columns** we can fill in 20 minutes and come back to whenever we need.

| What could go wrong | How bad and how likely | Plan B |

That's it. Add more columns and people stop filling the table in within a month.

## The 6 risk types we see most often

Across 8 years on projects spanning energy to fintech, public sector to aerospace, I've settled on a list of six risk types that show up in 9 out of 10 projects. Here they are — with illustrative examples.

### 1. Technical risks

Things that can break inside the product itself.

- A partner API we depend on goes down for a week — and we can't process payments.
- The legacy code we need to integrate with is undocumented — and the team burns a month just investigating it.
- The database we chose won't hold the 10,000 concurrent users we expect on day one after launch.

**How to find them:** ask the dev team — "what are the 3 things that worry you most on the technical side?" They know. They just don't like talking about it, because it sounds like admitting weakness.

### 2. Regulatory risks

Anything tied to law, licenses, inspections.

- Our app processes personal data — and we haven't signed an agreement with the operator storing that data outside the country.
- We work in fintech — and don't know whether we need a central-bank license for the operations we're planning.
- In a regulated industry (medicine, aviation, energy), launch requires a regulator's review — and it takes 3-6 months, and we found out a week ago.

**How to find them:** consult a lawyer who knows our field. Not a "general-practice lawyer" — one who has done at least one launch in our niche. One hour of that consultation before the start costs less than a fine or a frozen launch.

### 3. Personnel risks

Anything tied to the people on the team.

- A key developer gets sick or goes on vacation at the worst possible moment.
- Half the team are contractors who could switch to another client.
- One person on the team knows how a critical part of the system works — and if they leave, nobody can change anything.
- In wartime — mobilization, relocation, power outages (this is our concrete reality, not a hypothetical).

**How to find them:** ask the project lead — "who on the team is critical, and what happens if that person disappears for a week?" A good lead answers immediately. A bad one dodges.

### 4. Dependency risks

Things that depend on third parties we have no control over.

- The designer we're waiting on for mockups is working on three other projects, all higher priority.
- The bank we're integrating with keeps promising the API "any day now" but hasn't sent documentation in 4 months.
- The cloud provider we want to host on has no official presence in our country — and under sanctions we could get cut off.

**How to find them:** draw up a list of every external party we depend on. For each, ask: "what happens if this party lets us down for a month?"

### 5. Data risks

Anything tied to the information we collect, store, and use.

- Users enter card numbers — and we haven't passed certification to store that kind of data.
- We want to train an AI model on user data — and our privacy policy says nothing about it.
- Our data backup runs once a week — and if something breaks on Wednesday, we lose 5 days of work.
- The backup lives on the same server as the production database (a common mistake).

**How to find them:** ask the technical team: "where is our users' data stored, how often do we back up, who has access?" If the answers are vague — that's risk number one right there.

### 6. Business-model risks

Things tied not to the product, but to whether anyone will use it and pay for it.

- We build an app, and potential users aren't ready to pay for it (this only surfaces after launch, unless you do a briefing before the contract).
- The market moves faster than we build — and by the time we ship in 6 months, competitors are a step ahead.
- Our product's unit economics are negative — we spend more per user than we earn.

**How to find them:** before the project starts, draw the simplest table: "1 customer costs us $X to acquire, $Y to serve, and earns us $Z." If X+Y > Z — we don't have a product, we have a charity.

## What the table actually looks like

Now — how it looks in Google Sheets or Notion. On a real illustrative project I drew on (a financial app with bank integrations — a composite of several projects, not tied to any specific one):

| What could go wrong | How bad and how likely | Plan B |
|---|---|---|
| Bank [A] delays the API by 6+ weeks | Painful (blocks 30% of functionality). Medium likelihood (they've already slipped once) | Prepare an integration with bank [B] in parallel as a fallback. Design the architecture so a new bank can be added in a week |
| The developer who knows the entire backend architecture is on vacation in June | Very painful — launch was planned for June 15. High likelihood (vacation is already approved) | By May 25, write the architecture documentation together with them. Team lead reads it, asks questions. 5 days of buffer |
| The regulator will require reworking the data-processing policy | Painful (2-3 weeks of edits + re-registration). Medium likelihood (rules changed recently) | The lawyer is already consulting. We pay 5 more hours for a preventive audit in May instead of waiting for the first inspection |
| Competitor [C] releases a similar product before us | Moderate (we lose the "first-mover" edge, but not critical). High likelihood | We move to launch faster — cut the first version to 60% of functionality, deliver the rest afterward |

How many rows? As many as there are real risks. A living table usually has 8-15 rows. Fewer than 5 — we're not thinking hard enough. More than 30 — we're overthinking; some can be merged or dropped.

## How often we update it

- **The first time** — at the start of the project, together with the vendor, 1-2 hours.
- **After that** — every 2-3 weeks, 20 minutes: review what's changed, add new ones, close the ones that no longer apply.
- **Before big events** (signing a contract, a release, an integration) — a separate half-hour session on "what else could go wrong at this specific point."

Keeping the table alive matters more than making it perfect at the start. Better 10 rows we review monthly than 50 we opened once every six months.

## When it's time to call a specialist

Three trigger signs:

1. **We're in a regulated industry.** Medicine, fintech, aviation, energy, public sector, personal-data processing. Here the risks are so specific that an internal team won't see them without a specialist. At least one 2-3 hour consultation with someone who has done a launch in our exact niche — non-negotiable.
2. **We don't understand the technical side.** If, in the "technical risks" list above, we simply have no idea what to ask the team — that's fine. It means we need a **buyer-side** specialist who sits on our side of the table and asks those questions for us.
3. **A risk could cost more than the project.** If one data mistake could mean a fine bigger than the project budget — we can't afford to learn on it. Better to bring in a consultant for 5-10 hours than live through the consequences alone.

## Common mistakes at this stage

1. **We make the table and forget it.** Made it, filed it, didn't open it for six months. Then it was better not to make it at all. A living table gets updated monthly — a dead one brings nothing.
2. **We record risks but write no plan B.** Without a plan B it's not risk management, it's a list of fears. Every row without the third column is psychological preparation, not a working tool.
3. **We don't show the table to the vendor.** It's our shared document. The vendor sees risks from their side (technical, personnel), we see them from ours (business, regulatory). Together the picture is complete. Separately, each is half.
4. **We're embarrassed to write "risk: key person on the team."** That's a normal business conversation. A good vendor will be the first to raise it. If we're afraid of offending them — we already have a trust problem, not a communication one.

## What's next

This is the fifth post in the series on business-analysis artifacts. The previous ones covered [acceptance criteria](/blog/akcept-kryteriyi-ponyatnymy-slovamy/), the [pre-contract discovery brief](/blog/dyskaveri-bryf-pered-kontraktom/), [user stories](/blog/user-story-instruktsiya-ponyatno/), and [reading an IT-company estimate](/blog/yak-chytaty-otsinku-it-kompaniyi/).

Next — comparing vendors. How to get 5 commercial proposals from 5 different teams into a single table and make a decision based not on emotion, but on the same questions asked of each one.

If you don't want to miss it — follow me on [LinkedIn](https://www.linkedin.com/in/taras732/), where I announce every piece in the series.

---

*If we're about to start a big project in a regulated industry — it's worth spending one meeting on a risk map with a specialist who knows your niche. At Ascend Griffin we run short [Discovery Sprint](https://cal.com/ascendgriffin/discovery) sessions — a format where we work through the risks together with you and your team as part of the discovery stage.*
