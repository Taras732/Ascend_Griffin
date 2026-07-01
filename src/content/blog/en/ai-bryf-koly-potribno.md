---
title: "The AI feature brief: when AI actually helps, and when it's just trendy"
description: "Three filter questions, an AI feature brief checklist, and the red flags for when it's better not to add AI at all. For people who hear 'let's add AI' and don't know whether they need it."
pubDate: 2026-05-22
lang: en
tags: [business-analysis, ai, product, vendor-management, ascend-griffin]
readingTime: "8 min"
series: ba-artifacts
seriesOrder: 7
draft: false
canonical: https://ascendgriffin.org/blog/ai-bryf-koly-potribno/
---

> This is for people who hear "let's add AI" from their team, investors, or partners, and feel a certain discomfort: as if they're supposed to agree, or else be seen as behind the times.

## Why this hurts

"Let's add AI" may be the single most expensive phrase of 2026 in IT projects. Behind it there's always one of three motives:

- **The team wants to try something new** — a perfectly normal desire, but we're the ones paying for it.
- **An investor or partner wants to see "AI" in the pitch deck** — a buzzword that opens conversations. Whether it opens them for us is another question.
- **Someone genuinely sees how AI will solve our specific problem** — the third case, which shows up less often than the first two.

The problem is that from the outside all three look identical: "let's add AI." How do we tell them apart?

I work on AI projects every day — from production AI systems to using AI in my own workflow. And over 8 years in business analysis, the last 3 of them on AI-oriented projects, I've seen enough "let's add AI" situations to build a simple filter of 3 questions. Here it is.

## 3 filter questions: do we actually need AI

Before any "we're adding AI" decision, we ask these three questions. If the answer to even one is "no" or "don't know" — we either rethink the decision, or run a small experiment instead of a full integration.

### Filter 1: will AI move the desired outcome?

Not "is it trendy," not "is it 'a trend,'" but: **which specific business outcome improves** if the AI feature works well?

A weak argument:
> "Our chatbot will be smarter — users will like it."

A strong argument:
> "Right now our support team answers 200 questions a day. 70% of them are repetitive (how to top up a balance, how to find a receipt). If an AI assistant can handle that 70% — we free up 4 of 6 agents, saving $X a month."

The difference between those two framings is the difference between "interesting to try" and "we're doing this because we know it returns $X on $Y invested."

Without a business metric to aim at, an AI feature turns into an endless "improvement" project. Because it's never "smart enough."

### Filter 2: do we have the data?

AI models don't guess — they extract patterns from data they've seen. If we don't have data for a specific task, AI won't work, no matter how much money we throw at it.

A simple test: could we collect 200-500 examples of **what a correct answer looks like** within a week?

- "Classify incoming requests into 5 categories" — we probably already have months of history with manual classification. AI can be trained.
- "Predict which customer will churn in 3 months" — we need a history of past churn with context. If we've run a CRM for 2+ years — there's a chance. If we started 4 months ago — no.
- "An AI assistant that writes unique replies to customers in our tone of voice" — the model is general, the data is limited. Here the realistic move is to use an off-the-shelf model (Claude, GPT) with a prompt, not "train our own."

If there's no clear "here's our data" in the conversation, the AI feature will be an expensive experiment.

### Filter 3: can we tolerate mistakes?

AI makes mistakes. Always. The only questions are **how often** and **how painfully** each mistake costs.

Picture two scenarios:

**Scenario A:** AI suggests which recipe to try for dinner. A mistake — the user didn't like the suggestion. The pain — minimal.

**Scenario B:** AI decides whether to grant a customer a loan. A mistake — either we didn't lend to someone who deserved it, or we lent to someone who won't repay. The pain — real money or reputational fallout.

In scenario A we calmly ship AI into production at 70-80% accuracy and improve over time. In scenario B, 70-80% accuracy is unacceptable. Here we need either 95%+, or **AI as an assistant to a human** (it shows a recommendation, the human decides), or to wait on AI altogether.

Before saying "yes," we answer ourselves honestly: **how much does one mistake cost?** If the price is user satisfaction, we can go boldly. If the price is money, reputation, or lives — we either raise the accuracy bar or build an AI assistant, not an AI decision-maker.

## The AI feature brief: 5 items

If we've passed the three filters and want to move forward, then before signing a contract for an AI feature, it's worth asking the vendor for a 2-3 page document with five sections. That's the AI feature brief.

### 1. The task in one sentence

> "An AI assistant classifies incoming support requests into 5 categories with at least 85% accuracy."

Not "AI will make our support smarter," but a concrete task we can verify with a watch in hand.

### 2. Success metric and baseline

What accuracy does the manual process have right now? What will we consider "it worked"? What will we consider "it didn't — we're shutting it down"?

If the brief has none of these numbers, the AI feature turns into an endless "improve it a little more" project.

### 3. Data for training and testing

Where do we get the data? How many examples do we have now? How do we ensure data quality? Do we have the right to use it (especially personal data)?

This is often the weakest section in AI proposals. Teams love talking about the model and the algorithms — and underestimate how much work goes into the data.

### 4. A plan for when AI gets it wrong

What does the user see when AI produces something dumb? How can they report a mistake? Is there a human who reviews the hard cases? Who updates the model, and on what schedule?

Without this plan, the AI feature works fine for the first 2 weeks, then starts degrading, and a month later we're figuring out how to switch it off without losing face.

### 5. Legal questions

Are we processing personal data? Are we compliant with GDPR / local data protection law? If AI makes a decision about a user (a loan, access to a service) — do we have the right to do that automatically, or do we need human consent for each decision?

This is a question for a lawyer, not a dev team. An honest vendor says: "that's a question for your lawyer, here's a list of things worth discussing with them." A dishonest one says: "it'll be fine, don't worry."

## Red flags: when it's better not to add AI

Three situations where AI is almost always a mistake:

### Flag 1: the data is raw or nonexistent

If we're offered an AI feature and the question "what data will we use?" has no clear answer — that's AI marketing, not an AI product. Without data there's no model, no matter how much we pay.

### Flag 2: mistakes cost lives or serious money

Medicine, transport safety (I personally worked in a safety-critical field for several years, so I treat these cases with particular caution), justice, finance with large sums. AI isn't ruled out in these fields — but the format is always the same: **AI as a human's assistant**, not an AI decision-maker. And that has to be spelled out clearly in the brief.

### Flag 3: the ROI doesn't add up

If the question "how will we know the AI feature paid off?" gets the answer "well, users will like it" — that's not a business case. AI costs money. Development, infrastructure (cloud compute for models is expensive), maintenance, constant retraining of the model. Without a clear picture of how it pays back, we open an endless expense line.

## The cheap alternative: a prompt-based prototype in a week

Here's the most useful advice I can give. Before commissioning a full AI feature at $30-50K, it's worth spending **1 week and $1-2K** on a prompt-based prototype.

The idea is simple: take an off-the-shelf model (Claude, GPT-4, equivalents), write a smart prompt that wraps it around our task, and run it on 50-100 real examples. In a week we get:

- A realistic assessment of how AI handles our specific task.
- The first mistakes and their categories.
- A clean answer to the question: "is this worth scaling or not."

In one illustrative project I saw, the client wanted a $40K AI feature. Before starting, we built a prompt-based prototype in a week for $1.5K. Result: AI handled 60% of the tasks, but on 40% it failed in an unacceptable way (it invented numbers that weren't in the data). The client changed his mind about building the full AI feature, saved $38.5K, and swapped the plan for simple automation without AI that cost $8K and delivered 80% of the needed value.

This doesn't mean AI is bad. It means a full AI feature should be approached through a **small, cheap experiment**, not straight into a big contract.

## Common mistakes at this stage

1. **Commissioning an AI feature because competitors are.** Competitors can be wrong. In one project I saw a client "add AI too" because a competitor had. A year later it turned out the competitor's AI hadn't worked either — they'd just used marketing to create the impression that it had.
2. **Not asking about data before signing the contract.** Then it turns out there's either no data or the wrong data, and we're paying a team that "collects" it for three months instead of building the product.
3. **Expecting the magic of 100% accuracy.** AI makes mistakes. Always. If we have no plan for when it errs — we have no product.
4. **Not trying a prompt-based prototype before "full" development.** It's the cheapest step, and it saves us half the budget in 6 projects out of 10.
5. **Overselling AI to users.** If the interface says "our brilliant AI will help you with everything" — and it makes 30% mistakes — users will feel cheated. Better to be modest: "an AI-based assistant, works in most situations, double-check important decisions with an agent."

## What's next

This is the last post in the series on business analysis artifacts. All 7 pieces together are a short map of the documents that help us, as IT buyers, avoid being deceived (often unknowingly), avoid overpaying (often with good intentions on both sides), and avoid getting lost (often from simple unfamiliarity with the language).

Previous posts in the series, in case you missed any:

1. [Acceptance criteria](/blog/akcept-kryteriyi-ponyatnymy-slovamy/) — what "done" means.
2. [The discovery brief](/blog/dyskaveri-bryf-pered-kontraktom/) — the document before the big contract.
3. [User story](/blog/user-story-instruktsiya-ponyatno/) — how to read the instructions for the team.
4. [The estimate from an IT company](/blog/yak-chytaty-otsinku-it-kompaniyi/) — how to read it honestly.
5. [Risk map](/blog/karta-ryzykiv-prosto/) — how to find what's hidden.
6. [Vendor comparison](/blog/vyber-postaclalnyka-it-honchak/) — oranges vs. oranges.

If the series helped — share it with someone who's starting their own IT project right now and doesn't know which end to approach it from. Sometimes one article, read at the right time, saves tens of thousands.

---

*If we're thinking about an AI feature in our product right now — it's worth spending one meeting on an honest conversation about whether we actually need it. At Ascend Griffin we run an [AI Workflow Audit](https://cal.com/ascendgriffin/discovery) — 2-3 hours of conversation, after which it's clear where AI genuinely helps and where we're being offered "AI" just to look trendy. Often the audit's conclusion is a recommendation **not** to build the AI feature now and save the budget for something more important.*
