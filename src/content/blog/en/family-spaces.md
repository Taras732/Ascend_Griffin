---
title: "Family spaces — separate accounts that don't spy"
description: "How to give the kids and your spouse their own spaces on your home server, without handing their data to Google and Apple."
pubDate: 2026-05-22
lang: en
tags: [home-lab, family, nextcloud, jellyfin, immich, self-hosting]
readingTime: "9 min"
series: home-lab
seriesOrder: 6
draft: false
canonical: https://ascendgriffin.org/blog/family-spaces/
---

> This is for those who have kids aged 5-12 who already want "their own account," but who still feel uneasy about handing them fully to Google/Apple. And for those for whom 4 family subscriptions are starting to grate.

## What hurts

In our family there are 4 daughters and my wife. Everyone has a little digital life of their own:

- **The eldest (8)** already wants "her own photo folder," "her own tasks," "her own tablet"
- **The middle ones (5, 7)** watch videos, and already want bedtime stories "not from YouTube, because there are ads"
- **The youngest (3)** is still with mom, but watches things too
- **My wife** has her own work, her own documents, her own correspondence

Right now all of this lives in Google/Apple. Every phone photo goes to iCloud. Every video the kids watch is picked by YouTube's algorithm. Every one of my wife's tasks is in her Google Keep. All of it **separate**, in **different places**, **handed to outside companies**.

Here's what we pay for that sprawl: iCloud Family ($10), Google One ($10), YouTube Premium ($15), Netflix Family ($20), a separate kids' app ($5). Easily **$60/month**. And despite the price — we have no ownership over any of it.

The concept of "family spaces on our own server" is a different approach. Here's where I'm headed.

**Straight off:** for me this is still half set up. I have pieces (the Obsidian Bot for my wife's notes, a shared documents folder), but a full configuration with accounts for the kids — not yet. I'm writing this as a plan + what already works.

## The concept

Imagine one box that hosts **several services**, and each service knows which member of our family is reaching it:

- **My wife** — full access to all family folders, her own work zone, her own notes, access to financial documents
- **The eldest daughter (8)** — her own folder for photos from her phone, her own school tasks, access to the family photo album and films
- **The middle ones (5, 7)** — limited access. They can watch films from a special folder (which we fill), their own zone for drawings. No access to the "general internet"
- **The youngest (3)** — mom's account for now
- **A guest** (a visiting relative) — a separate, limited profile

Each of them, from their own device (our laptop, her iPad, a kids' tablet), logs into **the same box** and sees **their own part**. One account = one zone. Overlap exists only where we've allowed it (family photos, family calendar).

All the data lives **in our apartment**. On a box under the desk. Not in Apple, not in Google.

## The programs that do this — three key ones

Let me tell you about three open programs, each in Docker, each supporting multi-user mode, all right on our box:

**Nextcloud — like Google Drive, only ours**. Folders for documents, sync between devices, shared folders. Each user has their own login, their own space, their own permissions. My wife sees her folder in full; the eldest daughter — hers + the shared "Documents"; the middle ones — only "Kids' drawings."

**Immich — like Google Photos, only ours**. A photo gallery, auto-backup from the phone, face recognition ("here are all the photos with the kid"), a timeline. Again — each with their own account, their own photos, shared albums where we've allowed it.

**Jellyfin — like Netflix, only ours**. Cartoons, films, series — everything **we ourselves** uploaded there. No YouTube recommendations, no ads, no "next one plays automatically." The kids see only what mom chose.

All three — free, open, installed in Docker. All three — multi-user, with a proper "limited kids' account" role.

## What it'll look like for us (the plan)

Let me tell you where I'm headed, with an honest label of "what already works" and "what doesn't yet":

**My wife** — logs in from her iPad to Nextcloud, sees her "Work" folder (her projects), the family "Documents" (passports, insurance, contracts), and her own "Personal" (her things). Tasks — via Obsidian, synced with her laptop and mine through the box. **This already works** for notes and documents. The photo folders — not yet.

**The eldest daughter (8)** — gets her own Nextcloud account for photos from her tablet, her folder for schoolwork, access to the family photo gallery. In Immich — her own profile. **This isn't done yet.** The plan — to set it up for her 9th birthday as a gift ("now you have a real account of your own in our family network").

**The middle ones (5, 7)** — limited access. They see in Jellyfin only the cartoons mom added in advance. From their tablets they can draw, and the drawings go automatically to a shared family folder (so grandma can see them from another city). **This isn't done yet.** Technically it's not hard — it's a matter of family coordination on when and how to introduce it.

**The youngest (3)** — still with mom, no separate account needed.

**Guest account** — for relatives. If someone comes over and wants to see our vacation photos — they log into the TV via Jellyfin with their guest account and see only the "Vacation with guests" album, nothing else. **This isn't done yet** — a plan for after we move.

## What this approach gives

There are upsides and real difficulties here. Let's work through them.

**What it gives (the pluses):**

- **Control over what the kids see.** Not YouTube's algorithm, but **us**. There are no random "Cocomelon #472"s that pull you in for 3 hours
- **The photos stay with us.** 10 years of childhood photos — on our box, backups ours, control ours. Google won't "accidentally delete the account"
- **Everyone has their own.** Not "one family folder where everything's dumped," but **separate spaces** with separate permissions
- **Savings of $40-60/month** on family subscriptions. The Apple Family + Google One + YouTube Premium bundle — none of it needed once there's a box
- **The kids learn structure.** "This is my folder. This is our shared one. This is mom's, I don't go in there." Basic digital hygiene

**What's harder (the minuses):**

- **Setup is on us.** Apple/Google do it for us "out of the box." Here — we make the accounts ourselves, set permissions, explain things to the kids
- **If the box goes down — phone photos don't get saved.** We'll have to prove reliability "like Google," or keep a backup channel (for instance, a Nextcloud backup + a monthly one to an encrypted cloud)
- **Tech support is on us too.** A kid says "it won't log me in" — that's **our** job to sort out. Google has a support team; we have — me
- **The kids will eventually want mainstream anyway.** Instagram, TikTok, "everyone at school has it" — and that's normal. Our job is to give a **base** where they understand the alternative

## Who it's genuinely worth it for

**Definitely worth it** if:

- We have kids who'll soon have their own devices
- We already worry about how much data goes to Big Tech
- We're ready to spend 3-5 evenings on setup
- We already have the box from earlier posts (starting from this without it is hard)

**Can wait** if:

- The kids are still very young (under 4), and the question of accounts isn't on the table yet
- We don't yet have a box, don't have Tailscale, don't have Docker — start with the earlier steps of the series
- We have very little time right now — this isn't a "critical" improvement, unlike the basic private network

**Definitely unnecessary** if:

- We're OK with how everything works now through Apple Family/Google One
- We don't want to be the "family server administrator"
- We're scared that "when I'm gone, how will the family keep using it"

That last point matters. **If we're the only "admin"** — it's worth writing down for our spouse, in advance, how to reboot the box and where the passwords are. Otherwise, half a year after we're gone, everything hits a dead end.

## What's next

This was the second-to-last post in the series. In the next, final one — we'll talk about **money**. How much a home lab really costs, what we get for it, when it pays off, and when it's not worth it for anyone.

No marketing numbers, no "save thousands!" My concrete figures from a year or two of experience.

## Common mistakes

1. **Doing everything under one "family" account** where everyone is the same. In a year it's a swamp, no one knows whose photos are whose. Better to go with separate accounts from the start, even if it's 5 extra minutes of setup
2. **Giving kids full access "like adults"** from day one. Better to start limited and add as they grow up
3. **Not making an external backup.** If we have one box and it burns out — 10 years of family photos vanish with it. Always keep one backup **off-site** — an encrypted folder on Backblaze ($7/month) or at a relative's
4. **Not explaining to the kids what the box does.** Let them know that "this thing here is our family's digital home." It's both upbringing and a **backup plan** if we're not around
5. **Getting scared and doing nothing.** It won't be perfect the first time. It'll be OK. In half a year we'll refine it. That's normal
