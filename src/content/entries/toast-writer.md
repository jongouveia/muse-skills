---
title: "Toast Writer"
tagline: "Turns a few real anecdotes into a short, warm toast or celebration speech."
category: "creative"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/toast-writer.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "examples"]
version: "1.0.0"
date_added: 2026-10-01
safety_notes: |
  Writes drafts only, in your voice and tone. Never invents stories
  about real people, never roasts anyone you flag as off limits, and
  never sends or publishes anything. You review every line first.
install_prompt: |
  Install the "Toast Writer" skill. Its full source is below. Create it
  at ~/workspace/skills/toast-writer/SKILL.md following skill-creator
  conventions (name and description frontmatter; Purpose, Workflow,
  Output Contract, Operating Rules sections). Then confirm it is
  installed and tell me the trigger phrases.

  --- SOURCE ---
  ---
  name: toast-writer
  description: Turn a few real anecdotes into a short, personal toast or celebration speech, timed to your slot and tuned to your tone. Trigger phrases: "write my toast", "help with my wedding speech", "draft a best man speech".
  ---
  # Purpose

  Write a toast or short celebration speech that sounds like you,
  not like a greeting card. It takes the occasion, the people, your
  real anecdotes, and the tone you want, then drafts a speech that
  fits your time slot and lands the ending on a genuine wish.

  # Workflow

  1. Ask for the occasion (wedding, birthday, retirement, holiday
     dinner), the speaker's role (best man, parent, friend, host),
     and who is being toasted.
  2. Ask for 3 to 5 real anecdotes or facts about the person, in the
     user's own words. If they get stuck, offer simple prompts: how
     you met, a funny moment, a quality you admire.
  3. Ask for the tone: warm, funny, sentimental, or a mix. Ask for
     any lines, jokes, or topics that are off limits.
  4. Ask for the time slot (for example, two minutes, five minutes)
     and convert it to a target word count at about 130 words per
     minute of speaking.
  5. Draft the speech in this shape: a short opener naming the
     occasion, two or three anecdote beats in the user's tone, then a
     closing toast line that raises the wish. Keep sentences short
     enough to say out loud.
  6. Note the estimated speaking time next to the draft.
  7. Offer up to two revision passes on tone, length, or a single
     anecdote, then stop and hand the draft back.

  # Output Contract

  - Draft speech in paragraph form, with the final toast line set
    apart.
  - Estimated speaking time, based on 130 words per minute.
  - Revision options: tone, length, or one anecdote, two passes max.

  # Operating Rules

  - Never invent anecdotes, facts, or backstories about real people.
    If the user provides nothing, ask again; do not fill the gap
    with fiction.
  - Never name or roast anyone the user flagged as off limits.
  - Never publish, send, or read the speech to anyone. The draft
    stays with the user.
  - Keep the draft within 15% of the target word count.
  - Prefer concrete detail from the user's own stories over
    greeting-card lines.
source: |
  ---
  name: toast-writer
  description: Turn a few real anecdotes into a short, personal toast or celebration speech, timed to your slot and tuned to your tone. Trigger phrases: "write my toast", "help with my wedding speech", "draft a best man speech".
  ---
  # Purpose

  Write a toast or short celebration speech that sounds like you,
  not like a greeting card. It takes the occasion, the people, your
  real anecdotes, and the tone you want, then drafts a speech that
  fits your time slot and lands the ending on a genuine wish.

  # Workflow

  1. Ask for the occasion (wedding, birthday, retirement, holiday
     dinner), the speaker's role (best man, parent, friend, host),
     and who is being toasted.
  2. Ask for 3 to 5 real anecdotes or facts about the person, in the
     user's own words. If they get stuck, offer simple prompts: how
     you met, a funny moment, a quality you admire.
  3. Ask for the tone: warm, funny, sentimental, or a mix. Ask for
     any lines, jokes, or topics that are off limits.
  4. Ask for the time slot (for example, two minutes, five minutes)
     and convert it to a target word count at about 130 words per
     minute of speaking.
  5. Draft the speech in this shape: a short opener naming the
     occasion, two or three anecdote beats in the user's tone, then a
     closing toast line that raises the wish. Keep sentences short
     enough to say out loud.
  6. Note the estimated speaking time next to the draft.
  7. Offer up to two revision passes on tone, length, or a single
     anecdote, then stop and hand the draft back.

  # Output Contract

  - Draft speech in paragraph form, with the final toast line set
    apart.
  - Estimated speaking time, based on 130 words per minute.
  - Revision options: tone, length, or one anecdote, two passes max.

  # Operating Rules

  - Never invent anecdotes, facts, or backstories about real people.
    If the user provides nothing, ask again; do not fill the gap
    with fiction.
  - Never name or roast anyone the user flagged as off limits.
  - Never publish, send, or read the speech to anyone. The draft
    stays with the user.
  - Keep the draft within 15% of the target word count.
  - Prefer concrete detail from the user's own stories over
    greeting-card lines.
---

Toast Writer turns a handful of real memories into a short,
speakable speech for weddings, birthdays, retirements, and holiday
tables. You supply the occasion, your role, the person being
honored, and 3 to 5 true anecdotes in your own words; it shapes them
into an opener, two or three story beats in your tone, and a closing
line that raises the wish.

It works to your time slot, estimating word count at about 130 words
per minute of speaking, so a two-minute toast comes back at roughly
260 words instead of a rambling page. Tell it your tone (warm, funny,
sentimental, or a mix) and anything off limits, and it keeps the
speech inside those lines.

The hard rule it never breaks: it will not invent stories about real
people. If you give it nothing to work with, it asks again rather
than filling the gap with fiction.

## What it includes

- Occasion, role, and tone prompts to gather what it needs
- Anecdote prompts for when you know the person but not the story
- Time-slot to word-count conversion at 130 words per minute
- A draft shape: opener, two to three story beats, closing toast line
- Up to two revision passes on tone, length, or one anecdote

## Example

Input: "draft a best man speech, funny but warm, 3 minutes, no college stories."

Output: a 380 to 400 word draft opening with the wedding setting,
two anecdote beats built only from the stories you gave it, a clear
final toast line, and an estimated speaking time, ready for your
revisions.
