---
title: "Bedtime Story Weaver"
tagline: "Turns a child's details into a short tale with a recurring hero."
category: "creative"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/bedtime-story-weaver.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "continuity-log"]
version: "1.0.0"
date_added: 2026-10-12
safety_notes: |
  Writes fictional stories for a child you name. It never stores
  sensitive details outside the hero profile you approve, never
  writes frightening or age-inappropriate content, and never
  replaces a parent's judgment: you can edit or skip any story.
install_prompt: |
  Install the "Bedtime Story Weaver" skill. Its full source is below.
  Create it at ~/workspace/skills/bedtime-story-weaver/SKILL.md
  following skill-creator conventions (name and description
  frontmatter; Purpose, Workflow, Output Contract, Operating Rules
  sections). Then confirm it is installed and tell me the trigger
  phrases.

  --- SOURCE ---
  ---
  name: bedtime-story-weaver
  description: Weave a personalized bedtime story for a child, starring a recurring hero across nights. Trigger phrases: "weave a bedtime story", "tell a story with our hero", "continue last night's story".
  ---
  # Purpose

  Turn a child's details into a short, cozy tale starring a recurring
  protagonist who grows with the child. The hero persists across
  nights: names, friends, and favorite places carry over, so each new
  story feels like the next chapter of one ongoing adventure.

  # Workflow

  1. Ask for the child (first name, age), the hero (name, species or
     kind, one personality trait), and tonight's theme or setting
     if the user has one.
  2. Load the hero profile and continuity log from prior runs: who
     the hero knows, where they have been, what they learned.
  3. Build tonight's outline: one small quest or problem, one
     helper character (new or returning), one gentle lesson, and a
     calm ending that winds the energy down.
  4. Draft the story for reading aloud: 5 to 8 minutes of reading,
     simple sentences for younger ages, slightly richer language
     for older kids.
  5. End with an optional soft cliffhanger: a hint of tomorrow's
     adventure that invites sleep, never suspense.
  6. Update the continuity log with new characters, places, and
     lessons so the next story can reference them.

  # Output Contract

  The story text, ready to read aloud, followed by three lines:

  - Hero update: what changed for the hero tonight
  - Tonight's gentle point: the lesson, stated simply
  - Tomorrow's hint: one sentence, only if a cliffhanger was
    requested

  First run also returns the hero profile card for approval before
  the first story is written.

  # Operating Rules

  - Never write frightening, violent, or age-inappropriate content.
    If a theme is too dark, steer it gentle and say why.
  - Never introduce real people without the user's permission; use
    the hero and fictional friends.
  - Never keep personal details the user has not approved for the
    hero profile. Ask before adding anything new to the profile.
  - Keep the story length right for reading aloud: under ten
    minutes unless the user asks for more.
  - If the child is scared or restless mid-story, offer a shorter,
    calmer ending instead of pushing through.
source: |
  ---
  name: bedtime-story-weaver
  description: Weave a personalized bedtime story for a child, starring a recurring hero across nights. Trigger phrases: "weave a bedtime story", "tell a story with our hero", "continue last night's story".
  ---
  # Purpose

  Turn a child's details into a short, cozy tale starring a recurring
  protagonist who grows with the child. The hero persists across
  nights: names, friends, and favorite places carry over, so each new
  story feels like the next chapter of one ongoing adventure.

  # Workflow

  1. Ask for the child (first name, age), the hero (name, species or
     kind, one personality trait), and tonight's theme or setting
     if the user has one.
  2. Load the hero profile and continuity log from prior runs: who
     the hero knows, where they have been, what they learned.
  3. Build tonight's outline: one small quest or problem, one
     helper character (new or returning), one gentle lesson, and a
     calm ending that winds the energy down.
  4. Draft the story for reading aloud: 5 to 8 minutes of reading,
     simple sentences for younger ages, slightly richer language
     for older kids.
  5. End with an optional soft cliffhanger: a hint of tomorrow's
     adventure that invites sleep, never suspense.
  6. Update the continuity log with new characters, places, and
     lessons so the next story can reference them.

  # Output Contract

  The story text, ready to read aloud, followed by three lines:

  - Hero update: what changed for the hero tonight
  - Tonight's gentle point: the lesson, stated simply
  - Tomorrow's hint: one sentence, only if a cliffhanger was
    requested

  First run also returns the hero profile card for approval before
  the first story is written.

  # Operating Rules

  - Never write frightening, violent, or age-inappropriate content.
    If a theme is too dark, steer it gentle and say why.
  - Never introduce real people without the user's permission; use
    the hero and fictional friends.
  - Never keep personal details the user has not approved for the
    hero profile. Ask before adding anything new to the profile.
  - Keep the story length right for reading aloud: under ten
    minutes unless the user asks for more.
  - If the child is scared or restless mid-story, offer a shorter,
    calmer ending instead of pushing through.
---

Bedtime Story Weaver turns a child's name, age, and a chosen hero
into a short tale built for reading aloud, about five to eight
minutes long. The hero recurs night after night, so each story is
the next chapter of one ongoing adventure rather than a one-off.

On the first run it drafts a hero profile card for the parent's
approval: the hero's name, kind, one defining trait, and a starting
place. After that, a continuity log keeps track of friends, places,
and lessons learned, and every new story weaves those threads back
in. The child gets a hero who remembers them.

Each story follows a calm arc: one small quest, one helper
character, one gentle point, and an ending that winds the energy
down toward sleep. An optional soft cliffhanger hints at tomorrow's
adventure without suspense, and a frightened listener gets a
shorter, calmer ending instead.

## What it includes

- Hero profile card drafted for approval on first run
- Continuity log: friends, places, and lessons across nights
- A calm five-act story arc tuned for reading aloud
- Age-adjusted language, simple for young kids, richer for older
- Optional soft cliffhanger that invites sleep, never suspense
- Safety rules: nothing frightening or age-inappropriate

## Example

Input: child "Maya, 5", hero "Pip the pocket fox, brave but shy",
tonight's theme "a thunderstorm".

Output, after the hero profile card is approved:

```
Tonight Pip hears thunder over Fern Hollow and hides under the
big oak, until firefly friend Lumi shows him how to count between
flashes. When the storm passes, Pip leaves a glowing pebble at the
oak so no one else has to be scared there again. The forest yawns.
Pip yawns. And so do you.

Hero update: Pip faced thunder and left the pebble path started.
Tonight's gentle point: being brave can mean helping others feel safe.
Tomorrow's hint: Lumi has a map, and it glows.
```
