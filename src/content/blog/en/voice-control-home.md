---
title: "Voice commands that work without Google or Alexa"
description: "Where we're heading: voice → text → AI → voice back, without ever leaving the home server. An honest look at what already works and what's still on the way."
pubDate: 2026-05-22
lang: en
tags: [home-lab, voice, whisper, piper, privacy]
readingTime: "8 min"
series: home-lab
seriesOrder: 5
draft: false
canonical: https://ascendgriffin.org/blog/voice-control-home/
---

> This is for anyone who's already a little uneasy that Siri hears a baby cry and Google listens to our mail. And who wants a real voice dialogue with an AI without handing the recording to Big Tech.

## What hurts

We've gotten used to dictating instead of typing. It's faster, more convenient, and sometimes the only option (behind the wheel, in the kitchen, with a child in your arms).

But three things nag:

**First — the voice goes to Big Tech.** When we dictate "a letter to my wife about the hospital" to Siri, that audio recording passes through Apple's servers. When we tell Google Assistant "log a meeting with the lawyer" — it goes to a Google data center. This isn't "they could theoretically pass it on" — it's **a fact under the terms of service** we all signed without reading.

**Second — our language often suffers.** Most voice systems are optimized for English. Other languages — Ukrainian, Polish, Czech, other less common ones — exist, but work worse: they recognize less accurately, don't understand accents, mangle specialized terms. English speakers notice this less; everyone else, daily.

**Third — it's only input, not a conversation partner.** Siri/Google mostly "recognize voice → search Google" or "recognize voice → run a command." It's not a conversation with an AI that knows us. It's an assistant that hears us but doesn't **understand** us.

A home lab offers a different option: **voice → text → AI → voice back**, all of it **on our home server**, never leaving the apartment.

## Where we're heading — and what already works

Let me say it upfront: **the full setup is still on my to-do list**, not a daily driver. There are parts that already work, and parts I'm testing or planning. I'll write honestly about where we are.

**What already works every day:**

- **A Telegram bot that takes voice messages and returns text.** Simple, open, written in a couple of hours (as I described in the first post of the series). I use it regularly — to quickly jot an idea, a reminder, a draft email. The voice is processed on my server, it doesn't go to Telegram's services.
- **Access to Claude via a web interface** from my phone (from the previous post). I can type questions and get answers. It's not voice, but it's the foundation the voice will sit on.

**What I'm testing / preparing:**

- **A full voice dialogue** with the AI (voice in → voice reply back). Technically it's assembled, but I'm **still working out the nuances**: latency, the quality of the synthesized voice, integration with the phone through a convenient interface, reliability.
- **A wake word** ("Hey, [name]") instead of pressing a button. That's a separate story; for now I keep an explicit button — so the server doesn't "listen constantly."

**What's still ahead:**

- Stability "like Siri" — no reboots, no lag, with a decent voice
- Integration into the family's routine (not just mine)
- Documentation simple enough that my wife can use it without me explaining

If you have concrete questions about a specific part of this setup — better to take it as a separate conversation, because there are a lot of situational decisions here.

## Why this isn't Siri or Google

Two key differences — conceptual, no matter what percentage of the setup we've assembled:

**1. The voice goes nowhere third-party.** I dictate → the server listens → the server answers. Between those steps — nothing. No "processing the voice to improve quality." No "anonymous recording to train a model."

**2. The AI knows me.** It's not "log a meeting" → "meeting logged." It's a full Claude with memory of my projects, my clients, my family. I can ask: "What's the next step on the project with Oleksandr?" — and it answers concretely, because it knows who that is and what we're doing.

That's an entirely different level of usefulness. Not voice input — **a voice conversation partner** who knows us.

## The quality we need to look at honestly

**Speech recognition (voice → text).** Modern open-source models (Whisper) work very well. English — practically perfect. Less common languages (Ukrainian, Polish, Czech, and the like) — also good, but names and surnames sometimes need correcting, and technical terminology comes through with a sprinkle of English. All of this improves from model to model.

**Voice synthesis (text → voice).** Here it's still middling. The voice comes out **understandable but mechanical** — it's not Siri's bright female voice. It's more like "Google Translate five years ago." For functional replies — good enough. For long texts — faster to read with your eyes.

**Bottom line:** input works very well, **output is middling**. For most of us that's enough, because we read faster than we listen anyway. If we critically need a "pleasant voice" — for now this setup won't match Apple/Google.

## Scenarios where this setup becomes useful

Let me cover where it genuinely comes in handy (for me — the Telegram variant already now, the full one as it gets ready):

**1. Kitchen / morning routine.** Hands full, need to add a task, set a reminder, check something. Press the mic button on the phone, dictate, get a short answer. More convenient than searching and typing.

**2. Behind the wheel.** Not for AI conversations about philosophy — that's dangerous. But for quick "add a meeting," "remind me to call tomorrow," "save this idea" — perfect. The voice doesn't go to Google Drive.

**3. On a walk with a child.** We have minutes when our hands are busy with the stroller but our head is free. We can talk through an idea, get quick feedback, save it to notes.

**4. In the bath (yes, seriously).** Sounds odd, but it's the best time for thinking. We set the phone on the shelf, talk, get answers through the speaker. The voice does NOT go to Apple/Google, just to our server in the next room.

The common thread — these are **scenarios where the hands are busy but the head is free**. Not "replace the keyboard," but **complement it** where it's out of reach.

## How to set it up (the general outline)

I won't give concrete commands — that's a separate guide. The general logic is this:

1. On the server we run **three Docker containers**: speech recognition, the "glue" between them and the AI, voice synthesis
2. Recognition is **Whisper** (open, free)
3. Synthesis is **Piper** (open, free, with voices for many languages)
4. On the phone — a browser with a bookmark to the server, or a simple web page: "press a button — speak"
5. We connect it all to our Claude or another AI already running on the server

Roughly: **1-2 evenings of setup**, then a few more evenings of polishing (especially the convenient interface on the phone). Set it up once — after that it runs itself.

A detailed step-by-step guide — a separate post, once my full setup is stable and I can describe everything with concrete numbers. If you'd like to go through the setup together on your specific scenario, we can do a one-off [discovery conversation](https://cal.com/ascendgriffin/discovery).

## Limitations worth knowing

What this thing **doesn't** solve:

- **It depends on our server.** If it's off / frozen — no voice. Unlike Siri, which "always works." You have to set the server to restart automatically — a separate small detail
- **Latency of 2-4 seconds.** Between saying something and the AI answering — a pause. Siri is half a second faster. For an adult it's OK; for a child, noticeable
- **It needs Wi-Fi or Tailscale.** Without a private network — it doesn't work. On a plane without Wi-Fi it won't work either (though Siri isn't great there either)
- **The voice output is mechanical.** Not the level of Siri/Alexa. For functional commands — good enough. For long dialogues — faster to read with your eyes

All of this may improve over time — open source catches up fast. But **as of today**, it's worth knowing what we're getting into.

## What's next

Now we have the beginning of a voice dialogue with an AI that doesn't spy. In the next post — how to make that same server serve not just us but **the whole family**: separate accounts for the kids and wife, shared folders for photos, movies without YouTube algorithms.

I'll say it upfront — as with the voice, this is only half set up for me. I'll tell you where I'm heading and what already works, without sugarcoating.

## Common mistakes

1. **Trying to replace Siri/Google entirely.** No need. They have their niche (quick commands, music, calls). A home voice AI has a different niche (longer dialogues, our privacy, our language, our AI with memory). Use both, each for its purpose
2. **Waiting for the perfect voice.** For now, local synthesis is middling. What exists is enough for work, not enough for an audiobook. Don't get blocked on this
3. **Running all of this on the phone**, instead of the server. The phone heats up, the battery drains, the models are large. The server just sits there, running. All the heavy lifting — on it
4. **Installing Whisper directly into the system**, not via Docker. In a month everything gets tangled. As I've written — get used to Docker from the start
5. **Not trying at all**, because "it's all so technical." Running Whisper in Docker — 5 minutes and one command. A simple Telegram bot with voice-to-text — a couple of hours. Integration with the phone — a separate evening. It's less than setting up a new printer
