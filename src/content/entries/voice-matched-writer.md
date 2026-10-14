---
title: "Voice Matched Writer"
tagline: "Learns your voice from writing samples, then drafts new posts in it."
category: "creative"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/voice-matched-writer.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "voice-profile"]
version: "1.0.0"
date_added: 2026-10-09
safety_notes: |
  Drafts only; it never publishes or sends anything anywhere. It
  studies only the samples you hand it, and it never trains on or
  imitates anyone else's voice. Your voice profile stays in your
  workspace.
install_prompt: |
  Install the "Voice Matched Writer" skill. Its full source is below. Create it
  at ~/workspace/skills/voice-matched-writer/SKILL.md following skill-creator
  conventions (name and description frontmatter; Purpose, Workflow,
  Output Contract, Operating Rules sections). Then confirm it is
  installed and tell me the trigger phrases.

  --- SOURCE ---
  ---
  name: voice-matched-writer
  description: Learn a writer's voice from their samples, then draft new posts in it. Trigger phrases: "write this in my voice", "match my voice", "draft a post like me".
  ---
  # Purpose

  Write like yourself on a busy day. Voice Matched Writer builds a
  voice profile from writing samples you provide, then drafts new
  posts, captions, or updates that sound like you wrote them:
  your sentence rhythms, your vocabulary habits, your humor level,
  your openings and closings. The goal is a draft that needs light
  edits, not a rewrite.

  # Workflow

  1. The user provides 5 to 15 samples of their own writing in the
     target form: posts, captions, scripts, newsletters. More than
     15 dilutes the profile; fewer than 5 makes it generic.
  2. Read the samples and extract a voice profile: sentence length
     patterns, favorite words and phrases, punctuation habits,
     rhythm, humor style, how pieces open and close, what the
     voice never does.
  3. Save the voice profile. It persists until the user replaces
     it or adds more samples.
  4. When the user asks for a draft, read their brief: topic, key
     points, length, platform, and anything to avoid.
  5. Draft to the brief first, then apply the voice profile.
     Accuracy on the content always outranks style matching.
  6. Deliver the draft with a short note on the two or three
     voice traits applied most strongly, so the user can judge
     whether the match feels right.

  # Output Contract

  Each draft comes with:

  - The draft itself, sized to the platform
  - The brief it answers, restated in one line
  - Two or three voice traits applied, named briefly

  The user edits or approves. Nothing publishes on its own.

  # Operating Rules

  - Never publish, post, schedule, or send a draft anywhere. Draft
    only, every time.
  - Never learn a voice from anyone else's writing. Samples must
    be the user's own, or work they have the right to reuse.
  - Never use the samples for anything besides building the
    profile, and never quote them back in new drafts.
  - If the samples show two or more distinct voices, say so and
    ask which one to keep before writing.
  - If the brief conflicts with the voice (a formal topic in a
    casual voice), flag the tension instead of forcing the match.
  - Keep the user's voice profile in their workspace, and treat it
    as private: never copy it to another user or skill.
source: |
  ---
  name: voice-matched-writer
  description: Learn a writer's voice from their samples, then draft new posts in it. Trigger phrases: "write this in my voice", "match my voice", "draft a post like me".
  ---
  # Purpose

  Write like yourself on a busy day. Voice Matched Writer builds a
  voice profile from writing samples you provide, then drafts new
  posts, captions, or updates that sound like you wrote them:
  your sentence rhythms, your vocabulary habits, your humor level,
  your openings and closings. The goal is a draft that needs light
  edits, not a rewrite.

  # Workflow

  1. The user provides 5 to 15 samples of their own writing in the
     target form: posts, captions, scripts, newsletters. More than
     15 dilutes the profile; fewer than 5 makes it generic.
  2. Read the samples and extract a voice profile: sentence length
     patterns, favorite words and phrases, punctuation habits,
     rhythm, humor style, how pieces open and close, what the
     voice never does.
  3. Save the voice profile. It persists until the user replaces
     it or adds more samples.
  4. When the user asks for a draft, read their brief: topic, key
     points, length, platform, and anything to avoid.
  5. Draft to the brief first, then apply the voice profile.
     Accuracy on the content always outranks style matching.
  6. Deliver the draft with a short note on the two or three
     voice traits applied most strongly, so the user can judge
     whether the match feels right.

  # Output Contract

  Each draft comes with:

  - The draft itself, sized to the platform
  - The brief it answers, restated in one line
  - Two or three voice traits applied, named briefly

  The user edits or approves. Nothing publishes on its own.

  # Operating Rules

  - Never publish, post, schedule, or send a draft anywhere. Draft
    only, every time.
  - Never learn a voice from anyone else's writing. Samples must
    be the user's own, or work they have the right to reuse.
  - Never use the samples for anything besides building the
    profile, and never quote them back in new drafts.
  - If the samples show two or more distinct voices, say so and
    ask which one to keep before writing.
  - If the brief conflicts with the voice (a formal topic in a
    casual voice), flag the tension instead of forcing the match.
  - Keep the user's voice profile in their workspace, and treat it
    as private: never copy it to another user or skill.
---

Voice Matched Writer is a ghostwriter that sounds like you. Hand
it 5 to 15 pieces of your own writing, and it extracts a voice
profile: your sentence rhythms, your favorite words, your humor
level, how you open and close, what your voice never does. Then,
when you need a post, caption, or update, it drafts to your brief
and applies your profile on top, so the result needs light edits
rather than a rewrite.

The profile persists until you replace it, and it improves as you
feed it more samples. Because it studies your writing first and
your brief second, the content stays accurate and the voice stays
yours; if the brief clashes with the voice, it says so instead of
forcing a bad match.

It drafts only. Nothing publishes or sends on its own, and your
voice profile stays private in your workspace.

## What it includes

- Sample intake, 5 to 15 of your own pieces
- A voice profile: rhythm, vocabulary, humor, openings, closings
- Brief-first drafting, then voice applied on top
- The two or three voice traits used, named with each draft
- Conflict flagging when the brief fights the voice

## Example

Input: 10 of your past video scripts, then a brief: "a 30 second
script about the garage shelf project, key point: it holds 800
pounds, casual, for TikTok."

Output:

```
Brief: a casual 30 second TikTok script about the garage shelf
project, key point: it holds 800 pounds.
Hook: "I built this shelf to hold 800 pounds. My tools finally
have a home." [in your short-sentence style]
Body: 40 words in your cadence, closing with your usual one-line
signoff.
Voice traits applied: short declarative sentences, dry opener,
one-line signoff.
```

You edit, then you post it yourself.
