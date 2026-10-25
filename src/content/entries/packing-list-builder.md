---
title: "Packing List Builder"
tagline: "Turns trip details, weather, and activities into a checked packing list grouped by bag, so nothing important stays home."
category: "productivity"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/packing-list-builder.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "packing-template", "last-check-list"]
version: "1.0.0"
date_added: 2026-10-24
safety_notes: |
  It never books flights, hotels, or transport, and it never
  shares your trip details with anyone. It flags items you must
  confirm yourself, such as a passport, medication, and chargers,
  rather than assuming you own them or that they are packed.
install_prompt: |
  Install the "Packing List Builder" skill. Its full source is
  below. Create it at ~/workspace/skills/packing-list-builder/SKILL.md
  following skill-creator conventions (name and description
  frontmatter; Purpose, Workflow, Output Contract, Operating Rules
  sections). Then confirm it is installed and tell me the trigger
  phrases.

  --- SOURCE ---
  ---
  name: packing-list-builder
  description: Turns trip details, weather, and planned activities into a checked packing list grouped by bag, with a last-check list for the items people most often forget. Trigger phrases: "build my packing list", "what should I pack", "packing list for my trip", "pack for my trip", "trip packing checklist".
  ---
  # Purpose

  Do one narrow job: turn the facts of a trip into a packing
  list you can actually check off. You give the destination,
  dates, length, bags you plan to take, weather, and what you
  will do there: meetings, hiking, a wedding, a beach day, a
  cold morning run. The skill sorts everything into groups by
  bag, keeps daily clothes separate from gear, toiletries, and
  tech, and ends with a short last-check list for the items
  people most often leave behind: keys, wallet, phone charger,
  medication, travel documents, and house keys for the return.

  # Workflow

  1. Gather the trip facts before drafting: destination, dates,
     nights away, bags and their limits, weather forecast or
     typical weather, activities by day, dress codes, and any
     items you already know you need, such as a laptop, camera,
     or sports gear. Ask for what is missing; never guess a
     dress code or a bag limit.
  2. Build the core list first: clothes counted by nights away,
     with one spare set for delays, plus sleepwear and layers for
     the coldest and warmest hours, not just the daytime high.
  3. Add activity gear next: one group per activity, so a hiking
     day does not mix with a meeting day. Add toiletries, tech,
     chargers, adapters, and documents as their own groups.
  4. Sort the whole list by bag: carry-on, checked bag, personal
     item, and day bag. Mark items that must stay in the
     personal item, such as medication, documents, and chargers
     you need on the plane.
  5. Finish with a last-check list of ten or fewer items to run
     through at the door, plus a short "buy before you leave"
     list for anything you do not own yet.

  # Output Contract

  - A packing list grouped by bag, with checkboxes
  - Clothes counted by nights away, with a spare set noted
  - One group per activity, plus toiletries, tech, and documents
  - A last-check list of ten or fewer door items
  - A "buy before you leave" list, kept separate from the packed list
  - A note on anything you still need to confirm, such as a bag limit or a dress code

  # Operating Rules

  - Never guess weather, bag limits, dress codes, or what an
    activity requires. Ask, or mark the item as unconfirmed.
  - Count clothes by nights away, not by vague trip length.
  - Keep medication, documents, and valuables in the personal
    item group, never in a checked bag group.
  - Keep the last-check list short. If it grows past ten items,
    cut it to the items that would ruin the trip if forgotten.
  - Ask for missing facts instead of filling them in.
source: |
  ---
  name: packing-list-builder
  description: Turns trip details, weather, and planned activities into a checked packing list grouped by bag, with a last-check list for the items people most often forget. Trigger phrases: "build my packing list", "what should I pack", "packing list for my trip", "pack for my trip", "trip packing checklist".
  ---
  # Purpose

  Do one narrow job: turn the facts of a trip into a packing
  list you can actually check off. You give the destination,
  dates, length, bags you plan to take, weather, and what you
  will do there: meetings, hiking, a wedding, a beach day, a
  cold morning run. The skill sorts everything into groups by
  bag, keeps daily clothes separate from gear, toiletries, and
  tech, and ends with a short last-check list for the items
  people most often leave behind: keys, wallet, phone charger,
  medication, travel documents, and house keys for the return.

  # Workflow

  1. Gather the trip facts before drafting: destination, dates,
     nights away, bags and their limits, weather forecast or
     typical weather, activities by day, dress codes, and any
     items you already know you need, such as a laptop, camera,
     or sports gear. Ask for what is missing; never guess a
     dress code or a bag limit.
  2. Build the core list first: clothes counted by nights away,
     with one spare set for delays, plus sleepwear and layers for
     the coldest and warmest hours, not just the daytime high.
  3. Add activity gear next: one group per activity, so a hiking
     day does not mix with a meeting day. Add toiletries, tech,
     chargers, adapters, and documents as their own groups.
  4. Sort the whole list by bag: carry-on, checked bag, personal
     item, and day bag. Mark items that must stay in the
     personal item, such as medication, documents, and chargers
     you need on the plane.
  5. Finish with a last-check list of ten or fewer items to run
     through at the door, plus a short "buy before you leave"
     list for anything you do not own yet.

  # Output Contract

  - A packing list grouped by bag, with checkboxes
  - Clothes counted by nights away, with a spare set noted
  - One group per activity, plus toiletries, tech, and documents
  - A last-check list of ten or fewer door items
  - A "buy before you leave" list, kept separate from the packed list
  - A note on anything you still need to confirm, such as a bag limit or a dress code

  # Operating Rules

  - Never guess weather, bag limits, dress codes, or what an
    activity requires. Ask, or mark the item as unconfirmed.
  - Count clothes by nights away, not by vague trip length.
  - Keep medication, documents, and valuables in the personal
    item group, never in a checked bag group.
  - Keep the last-check list short. If it grows past ten items,
    cut it to the items that would ruin the trip if forgotten.
  - Ask for missing facts instead of filling them in.
---

Most packing lists fail in the same way: they are one long
pile of items, with no sense of which bag anything goes in,
and no count tied to the nights away. Packing List Builder
starts with the trip itself, destination, dates, weather,
bags, and what you will actually do each day, then builds a
list grouped by bag, with clothes counted by nights away and a
spare set for delays. Activity gear stays in its own group, so
meeting clothes never mix with hiking gear, and toiletries,
tech, chargers, and documents each get a group of their own.

The list ends where most lists should start: a short last
check at the door, ten items or fewer, covering the things
that would hurt most to forget. Anything you do not own yet
goes on a separate buy list, so it never looks packed when
it is not. Give it the trip facts once, and you get a list
you can check off bag by bag, instead of a pile you have to
sort at the suitcase.

## What it includes

- A packing list grouped by bag, with checkboxes
- Clothes counted by nights away, with a spare set for delays
- One gear group per activity, plus toiletries, tech, and documents
- A last-check list of ten or fewer door items
- A separate "buy before you leave" list

## Example

Input: "Minneapolis, 2 nights, late October, one carry-on plus a personal item, meetings by day, cold mornings, rain possible."

Output:

```
Carry-on:
Clothes, 2 nights:
[ ] 2 shirts, 2 pairs of pants
[ ] Spare set for delays: 1 shirt, 1 pair of pants
[ ] Warm layer for cold mornings, sleepwear
Toiletries:
[ ] Toothbrush, toothpaste, deodorant
Meetings:
[ ] Meeting outfit, kept flat on top

Personal item:
Tech:
[ ] Laptop, laptop charger, phone charger
Documents and valuables:
[ ] Travel documents, wallet, keys
[ ] Medication, in original container

Last check at the door (5 items):
[ ] Phone charger
[ ] Keys
[ ] Wallet
[ ] Travel documents
[ ] Medication

Buy before you leave:
[ ] Rain jacket

Still need to confirm:
- Carry-on size and weight limit: not stated, so unconfirmed
- Meeting dress code: not stated, so the meeting outfit is unconfirmed
- Whether you already own a rain jacket: buy only if you do not
