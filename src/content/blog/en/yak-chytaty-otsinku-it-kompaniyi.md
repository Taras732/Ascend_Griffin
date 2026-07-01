---
title: "The IT-company estimate: how to read it right, and where the vendor's interests differ from ours"
description: "4 signs of a solid estimate, 4 signs of a padded one, and why fixed price isn't always cheaper than hourly. For people who pay for development but don't write code themselves."
pubDate: 2026-05-22
lang: en
tags: [business-analysis, vendor-management, estimates, contracts, ascend-griffin]
readingTime: "10 min"
series: ba-artifacts
seriesOrder: 4
draft: false
canonical: https://ascendgriffin.org/blog/yak-chytaty-otsinku-it-kompaniyi/
---

> This is for people who got a commercial proposal with an estimate of "200 hours · $25K" and don't know how to check whether it's an honest figure or two numbers pulled out of the air.

## Why this hurts

An IT-company estimate is possibly the most expensive PDF in our life after the notarized deed for buying an apartment. It has one number in it — and we decide whether to hand it over or not.

The worst part is that we don't know how to read this PDF. They write "200 hours of development, 40 hours of QA, 30 hours of management, 20 hours of design" — and that's it. What's inside? Why 200 and not 150? Why 40 on QA when we have no payment transactions? Asking feels embarrassing: they'll think we're haggling or don't trust them.

Don't be embarrassed. A good vendor will happily explain every number — it's their job. A bad one will get annoyed at the questions — and that's an answer too.

Across 8 years on projects from energy to fintech, from the public sector to AI logistics, I've built up a set of simple signs that reveal a solid estimate — and a set of signs that reveal a padded one. Let me share them.

## 4 signs of a solid estimate

### Sign 1: a breakdown by task, not by role

**Honest:**

| Task | Estimate |
|---|---|
| User registration (email + SMS confirmation) | 25 h |
| Personal account (view profile, change password) | 15 h |
| Integration with bank [name] for payment | 40 h |
| ... |

**Dishonest:**

| Role | Estimate |
|---|---|
| Frontend development | 120 h |
| Backend development | 180 h |
| QA | 60 h |
| PM | 40 h |

The second table tells us nothing. The first tells us everything. If we only see the second, the first question should be: "Can you show which **tasks** make up these 120 hours of frontend?"

### Sign 2: ranges, not exact figures

> "User registration: **18-28 hours**, depending on whether bank validation is needed."

It sounds odd — how come "you don't know exactly?" In fact it's the most honest thing a vendor can write. Programming isn't nut-and-bolt manufacturing. Half the tasks contain assumptions that get verified only in the code. A vendor who writes "exactly 23 hours" — either has done it 30 times (then they should say "we have a template"), or is guessing without admitting it.

### Sign 3: explicit assumptions

An honest estimate has a section "**Assumptions this figure is based on**." Examples:

- "The client provides the design in Figma; we don't do UI/UX from scratch."
- "Integration with bank [name] — we assume the API documentation is publicly available. If an NDA is required — an additional 8 hours for coordination."
- "Testing — functional and manual. Automated tests — a separate line item, not included."

If the estimate has no such section — it means one of two things: either the vendor has already baked all the assumptions into a "buffer" (an extra 30%), or they plan to hit us with additional invoices for everything they didn't do.

### Sign 4: a separate "uncertainty" line item

Good teams write it like this:

> "Total estimate: $20-28K. The 30% spread is because we haven't yet seen the partner's working API. After the discovery stage (2 weeks, $5K) the spread will narrow to ±10%."

That's honest and valuable. The vendor doesn't pretend to know what they don't — and offers a way to reduce the uncertainty before we sign a big contract. The discovery stage was covered in the [second post of the series](/blog/dyskaveri-bryf-pered-kontraktom/) — in detail there.

## 4 signs of a padded estimate

### Sign 1: a 50% "buffer" with no explanation

> "Development: 200 hours. Management and risks: +100 hours."

Management is 5-15% of development. 50% is either fear (the vendor doesn't understand our task) or greed. An honest buffer is written as "10% for coordination and unforeseen edits" — and that's fine. 50% means we're paying for someone else's uncertainty.

### Sign 2: "QA separate, design separate, documentation separate, devops separate, security separate"

When an estimate is built from 8 sections, each of which "isn't included in the previous one," the final sum becomes 2-3 times the development cost. It's a classic tactic: show a small number on the first page, add everything else in fine print further down.

Honest is when the estimate says right away: "The sum includes development, testing, design, basic documentation, and devops for launch. Doesn't include: post-release support (separate contract), marketing, content."

### Sign 3: no "what we DON'T do"

In one illustrative project I saw, a vendor submitted an estimate of $80K for a "full-fledged MVP in 4 months." When asked to clarify what was **not** included — there was no answer for a week. To the direct counter-question "do you do the 1C integration?" — "yes, but that's a separate line item, $15K." And so on: every feature turned out to be separate. The real cost after all the "excepts" was $140K.

An honest estimate has a section "Outside the scope of this proposal." If it doesn't — assume that outside the scope is **everything we didn't name explicitly**. And that's a problem.

### Sign 4: "fast, high-quality, cheap" — all together

If the vendor doesn't trade off at least one of the three — that's a warning. A realistic conversation sounds like: "We can do it cheaper, but then it'll take longer" or "We can do it faster, but we need to double the team — that'll cost more." If we're promised cheap, fast, AND high-quality — either it's a setup, or the vendor is already planning extra invoices halfway through.

## "Buffer" — normal or not?

In short: **yes, within 10-20% of the base sum, with a clear explanation of what for.**

A normal buffer looks like this:

> "We add 15% to the estimate for coordination, minor edits after the demo, and unforeseen dependencies. If the buffer isn't used — we return it as a discount on the next stage, or don't charge it at all (under a T&M contract format)."

An abnormal buffer looks like this:

> "Risks: +30%."

No breakdown of which risks exactly. No rule for what happens if the risks don't materialize. Just +30% on top.

## Fixed price vs T&M in plain words

The two main payment models we'll meet:

**Fixed price** (a fixed price for the whole project):
- We agree: "$50K for the whole app."
- If it took the vendor more — that's their problem.
- If it went faster — that's their profit.
- **What actually happens:** the vendor bakes a large buffer into the price (20-40%), because the risk is on them. We pay for that buffer even if it isn't used.

**T&M (Time & Materials, hourly):**
- We pay for the hours **actually worked**.
- If it went faster — we pay less.
- If longer — we pay more.
- **What actually happens:** the risk is on us. Without an honest vendor and our attention to weekly reports — it can stretch out for months.

**Tip:** for small projects with a clear task (up to 3 months) — fixed price is often more honest. For long or uncertain ones — T&M, but with weekly reporting and the right to pause at any moment.

And most important — **fixed price isn't always cheaper**. In one illustrative project I saw, a fixed price of $80K ended up at $120K in the final bill, through 12 additional agreements about "scope changes" over 4 months. T&M for the same task with weekly reporting would probably have finished at $90K.

## Questions worth asking before "Yes"

When we've received an estimate and want to hit pause — here are 5 questions that help see what's inside:

1. **"Show a breakdown of the 200 development hours by task — 5-10 hours per task."** If the vendor has such a breakdown — a good sign. If "we don't do it that detailed" — bad.
2. **"What are the 3 biggest assumptions in this estimate? What happens if one of them doesn't hold?"** An honest answer should contain concrete examples.
3. **"What is NOT included in this figure?"** A good vendor lists 5-10 items in a second.
4. **"If we do a discovery stage for $5-10K — how much could this estimate change?"** Honest answer: "plus-minus 20-30%." Dishonest: "we already know everything, discovery isn't needed."
5. **"How do you calculate complexity — from our words, or after talking with your technical team?"** If the commercial proposal was written by a sales manager without developers — it almost always ends badly.

## Common mistakes at this stage

1. **Signing the cheapest proposal.** "Cheapest" almost always ends up most expensive — either through quality or through additional agreements.
2. **Not comparing estimates against the same set of questions.** If we told each vendor a different story — we're not comparing. There'll be a separate post in the series about this.
3. **Being embarrassed to ask about the buffer.** A 30%+ buffer with no explanation is our main point of negotiation. A good vendor either justifies it or reduces it. If they just get angry — that's an answer too.
4. **Not demanding a written "what's NOT included" list.** A verbal "well, we agreed" won't save you in 3 months when the edits-for-extra-pay start.

## What's next

This is the fourth post in the series on business-analysis artifacts. The previous ones covered [acceptance criteria](/blog/akcept-kryteriyi-ponyatnymy-slovamy/), the [pre-contract discovery brief](/blog/dyskaveri-bryf-pered-kontraktom/), and [user stories](/blog/user-story-instruktsiya-ponyatno/).

Next — the risk map. 6 risk types we see most often, and a three-column table we can keep ourselves without a single consultant.

If you don't want to miss it — follow me on [LinkedIn](https://www.linkedin.com/in/taras732/), where I announce every piece in the series.

---

*If we've got an IT-company estimate on the table right now and our gut says "too much" — that's a reason to hit pause. At Ascend Griffin we run a [Vendor Audit](https://cal.com/ascendgriffin/discovery) — a review of a commercial proposal before signing, on our side of the table. It usually costs less than the sum of a single additional agreement about a "scope change."*
