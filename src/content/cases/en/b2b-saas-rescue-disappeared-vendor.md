---
title: "The vendor vanished for 3 weeks — and half the product and every access credential were with him"
description: "How to regain control of a project when the external team goes silent and you have no passwords, no documentation, and no plan B."
service: rescue
domain: b2b-saas
icp: rescue
complexity: high
duration: "3-month retainer"
budgetRange: "$2.5K/mo × 3 mo = $7.5K"
illustrative: true
year: "over the last 2 years"
lang: en
draft: false
---

## Context

A B2B SaaS in a niche field (document workflow for construction companies). The founder — a former site foreman, non-technical. The team used to be a 4-person in-house crew, but was let go a year and a half earlier (COVID plus a downturn in the industry), and product development was handed to an external fixed-price vendor. At the time they reached out, the product was about 60% done, the first 3 clients were paying, but they were only using half of the functionality.

## The pain

The vendor stopped answering messages. Three weeks — silence. There was no reason for a falling-out: the last batch of work had been accepted, the invoice paid. He just — vanished. The founder tried calling, messaging on LinkedIn — nothing. The vendor held everything: server access, the GitHub repositories, the domain, client correspondence through a company email, even the password for the payment provider. The founder was in a panic — clients were paying, the product was running, but if anything broke, he'd be unable to do a thing. There was no documentation. No contract describing an exit procedure, either.

## Approach

Three months of retainer work, ~30 hours a month. Month 1 — stabilization: we build an inventory of exactly what the vendor holds, which credentials can be recovered through the providers (hosting, domain — re-registered to a new owner via the providers' documented procedures), and which cannot. In parallel — finding a junior developer part-time to work with the code (through trusted contacts, not off the open market). Month 2 — reverse-understanding the product: the junior and I walked through the code together, built a technical map (what's made of what, where the dangerous spots are), and documented what even the vendor hadn't documented. Weekly meetings with the founder — we translate the technical decisions into business consequences for him. Month 3 — the continuation plan: we laid out what the junior does over the next 6 months, what counts as critical service and maintenance, and what counts as gradual feature expansion.

## Result

The founder got back: control over all credentials, working system documentation, a vetted junior on part-time ($2K/mo instead of the previous $5K fixed-price), and a clear plan for the next 6 months. Not one of the 3 clients disconnected over those 3 months — the product kept running. The vendor, by the way, resurfaced on his own after 2 months — it turned out he'd lost someone close to him. The founder parted with him on human terms. The budget for the next 12 months of development: ~$30K instead of the ~$60K it would have been under the old model.

## What it taught

"The vendor disappeared" isn't a catastrophe if you act systematically in the first week: inventory → credential recovery → reverse-understanding → plan. Without panic moves like "rewrite everything from scratch with a different team" (~$80K). The biggest risk in a situation like this isn't the vanished vendor — it's the founder's panic, which pushes him toward fast, expensive decisions.

---

*This is an illustrative composite pattern from 8 years of work in IT — not a specific client. AG is in a validation phase.*
