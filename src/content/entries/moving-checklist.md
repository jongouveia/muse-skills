---
title: "Moving Checklist"
tagline: "8-week moving plan: what to do each week, from movers to address changes."
category: "home"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/moving-checklist.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "checklist"]
version: "1.0.0"
date_added: 2026-09-14
safety_notes: |
  Builds a moving plan from the details you provide. Writes the
  plan to you and nothing else. Never books movers or changes
  your address anywhere.
install_prompt: |
  Install the "Moving Checklist" skill. Its full source is below.
  Create it at ~/workspace/skills/moving-checklist/SKILL.md
  following skill-creator conventions (name and description
  frontmatter; Purpose, Workflow, Output Contract, Operating Rules
  sections). Then confirm it is installed and tell me the trigger
  phrases.

  --- SOURCE ---
  ---
  name: moving-checklist
  description: Build an 8-week moving plan, week-by-week tasks from booking movers to the last address change, sized to your home. Trigger phrases: "moving checklist", "plan my move", "we're moving in two months".
  ---
  # Purpose

  Moves go wrong in the last two weeks because the first six
  had no plan. This skill builds the 8-week plan up front:
  what to do each week, in order, sized to the home you're
  leaving.

  # Workflow

  1. Ask the user for: move date, current home size, moving
     distance (local vs. long-distance), and whether they're
     hiring movers or DIY.
  2. Build the 8-week plan:
     - Weeks 8-6: book movers or truck, declutter room by room,
       gather records (medical, school, vet)
     - Weeks 5-3: address changes (USPS, banks, subscriptions,
       voter registration), transfer utilities, pack non-
       essentials
     - Weeks 2-1: confirm movers, pack essentials, the "first
       night" box, defrost the freezer
     - Moving week: final walkthrough checklist, meter
       readings, keys and handoff
  3. Size it: studio apartments skip the declutter month;
     long-distance moves get the records and car-shipping
     items earlier.
  4. Report in the Output Contract shape.

  # Output Contract

  - 8-week plan: week by week, tasks in order, one line each
  - Book now: the 2-3 things to book this week (movers sell out)
  - First-night box: the packing list for night one in the
    new place

  # Operating Rules

  - The plan fits the move date given. If the date is under
    8 weeks out, compress honestly, say what's cut.
  - "Book now" items are the time-sensitive ones. Everything
    else can slip a week.
  - Never book movers, change addresses, or contact anyone.
    The user executes.
  - One plan per move. Update it when the date changes.
source: |
  ---
  name: moving-checklist
  description: Build an 8-week moving plan, week-by-week tasks from booking movers to the last address change, sized to your home. Trigger phrases: "moving checklist", "plan my move", "we're moving in two months".
  ---
  # Purpose

  Moves go wrong in the last two weeks because the first six
  had no plan. This skill builds the 8-week plan up front:
  what to do each week, in order, sized to the home you're
  leaving.

  # Workflow

  1. Ask the user for: move date, current home size, moving
     distance (local vs. long-distance), and whether they're
     hiring movers or DIY.
  2. Build the 8-week plan:
     - Weeks 8-6: book movers or truck, declutter room by room,
       gather records (medical, school, vet)
     - Weeks 5-3: address changes (USPS, banks, subscriptions,
       voter registration), transfer utilities, pack non-
       essentials
     - Weeks 2-1: confirm movers, pack essentials, the "first
       night" box, defrost the freezer
     - Moving week: final walkthrough checklist, meter
       readings, keys and handoff
  3. Size it: studio apartments skip the declutter month;
     long-distance moves get the records and car-shipping
     items earlier.
  4. Report in the Output Contract shape.

  # Output Contract

  - 8-week plan: week by week, tasks in order, one line each
  - Book now: the 2-3 things to book this week (movers sell out)
  - First-night box: the packing list for night one in the
    new place

  # Operating Rules

  - The plan fits the move date given. If the date is under
    8 weeks out, compress honestly, say what's cut.
  - "Book now" items are the time-sensitive ones. Everything
    else can slip a week.
  - Never book movers, change addresses, or contact anyone.
    The user executes.
  - One plan per move. Update it when the date changes.
---

Moving Checklist builds your 8-week moving plan: week-by-week tasks
from booking movers to the last address change, sized to your home
and distance. Short on time? It compresses honestly and says what's
cut, plus the first-night box list so night one isn't chaos.

## What it includes

- 8-week task plan in order
- Book-now flags for time-sensitive items
- First-night box packing list
- Honest compression for short timelines

## Example

Output (abridged):

```
Move: Nov 7 (8 weeks out), 2-bed apartment, local, hiring movers

Book now: movers (Saturdays sell out), elevator reservation.
Week 8: declutter closets; gather medical/vet records.
Week 5: USPS change of address; transfer electric and internet.
Week 1: pack the first-night box; defrost the freezer.

First-night box: sheets, towels, toiletries, chargers, coffee,
basic tools, toilet paper.
```
