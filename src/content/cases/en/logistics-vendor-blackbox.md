---
title: "A logistics company pays a vendor $8K/mo and can't name what he does"
description: "How to check whether an external IT team is actually building something or just billing hours — without a falling-out and without breaking the contract."
service: audit
domain: logistics
icp: rescue
complexity: medium
duration: "10 days"
budgetRange: "$1K (Audit format)"
illustrative: true
year: "over the last 2 years"
lang: en
draft: false
---

## Context

A logistics company, ~30 employees, operating across western Ukraine plus EU transit. Two years ago they commissioned "digitalization" from an external vendor — a dispatch system, integration with 1C, a client portal for counterparties. The vendor — a small IT team of 5, billing $8K/mo on T&M.

## The pain

The company's owner senses something is off but can't put it into words. The vendor sends time reports listing tasks like "request-handling optimization," "refactoring the routing service." The owner reads them and can't tell whether this is real work worth 160 hours a month, or 40. Asking directly — he's afraid to: the contract has no clear exit, and if there's a falling-out the system stops and the business is held hostage. There's no internal CTO, or even a team lead, at the company. Worst of all — customers use the dispatch system every day, so "just cut it all off and start from scratch" isn't an option.

## Approach

Ten days. The first three — with no contact with the vendor. We went in, through the owner, to the git repository (we had credentials), looked at 6 months of commit history, at test coverage, at the code structure. In parallel — 4 interviews with people who use the system daily: the dispatcher, the accountant, two logistics managers. Concrete questions: what works as it should, what breaks every month, what's missing. The next three days — comparison: what people complain about against what the vendor reports. Two patterns emerged: 60% of the tasks in the reports had nothing to do with what hurts the users; 30% of the hours were repeat fixes on the same module. The last two days — we prepared three documents for the owner: a real assessment of the system's state, a list of 12 unnecessary tasks over the last 6 months, and a draft conversation with the vendor (how to talk without wrecking the relationship).

## Result

The owner held the conversation with the vendor, backed by the document. No drama, no accusations — just specifics: "here's a list of 12 items that didn't help users, we paid $14K for them in total, let's redistribute the next 3 months around real needs." The vendor agreed, because the alternative was losing the contract entirely. The monthly invoice stayed at $8K, but the 6-month work pipeline became transparent, with finalized acceptance criteria. The owner got a document he can refer to every month when reviewing invoices.

## What it taught

A vendor almost never "deceives on purpose" — more often it's a consequence of there being no single person between the client and the team who translates business pains into technical tasks. A 10-day external review plays that role once, and hands the client a vocabulary they can go on using themselves.

---

*This is an illustrative composite pattern from 8 years of work in IT — not a specific client. AG is in a validation phase.*
