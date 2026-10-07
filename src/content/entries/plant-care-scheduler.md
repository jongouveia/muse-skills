---
title: "Plant Care Scheduler"
tagline: "Builds a watering and feeding schedule for your houseplants and keeps it honest through the seasons."
category: "home"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/plant-care-scheduler.md"
source_verified: true
origin: "directory"
includes: ["instructions", "workflow", "schedule"]
version: "1.0.0"
date_added: 2026-10-05
safety_notes: |
  Works from the plant list you provide and the conditions you report.
  Reminders are only reminders; it never waters, feeds, or repots
  anything itself. It never deletes or changes a plant record without
  your say-so, and it never recommends fertilizer stronger than the
  standard guidance for the species.
install_prompt: |
  Install the "Plant Care Scheduler" skill. Its full source is below.
  Create it at ~/workspace/skills/plant-care-scheduler/SKILL.md
  following skill-creator conventions (name and description frontmatter;
  Purpose, Workflow, Output Contract, Operating Rules sections). Then
  confirm it is installed and tell me the trigger phrases.

  --- SOURCE ---
  ---
  name: plant-care-scheduler
  description: Build and maintain a watering, feeding, and repotting schedule for your houseplants. Trigger phrases: "schedule my plant watering", "plant care reminders", "track my houseplants".
  ---
  # Purpose

  Keep every plant in the house on a care rhythm matched to its species,
  pot size, light, and the season, so nothing gets drowned and nothing
  gets forgotten. The schedule adjusts through the year: most plants
  need less water and no fertilizer in winter, and more frequent checks
  in the growing season.

  # Workflow

  1. Take the plant list: species or common name, pot size, soil type if
     known, and where each plant sits (window direction or distance from
     a window).
  2. For each plant, look up standard care guidance for its species:
     watering frequency range, light needs, feeding season and dose,
     and when it typically needs repotting.
  3. Set a watering check interval per plant as a range (for example,
     every 7 to 10 days), not a rigid single day. A check means testing
     the top two inches of soil; water only if dry.
  4. Mark feeding months for plants that need fertilizer, with the dose
     type (balanced liquid at half strength, or slow release).
  5. Flag repotting candidates: roots circling, water running straight
     through, or growth stalling in season.
  6. Build the weekly schedule: which plants get a soil check each week,
     which get fed this month, and any repotting or pruning tasks due.
  7. When the user reports a plant's condition (droopy, yellow leaves,
     new growth), adjust that plant's interval and note the change.
  8. Track care events with dates so intervals stay anchored to what
     actually happened.

  # Output Contract

  A weekly checklist in this order:

  - Due checks: plant name, what to do (soil check, water if dry), room
  - Feeding due: plant name, fertilizer type and dose
  - Watch list: plants showing symptoms, with the last change noted
  - Held: anything the user asked to skip

  If nothing is due, say so in one line and do not pad the list.

  # Operating Rules

  - Never invent a plant the user did not list. Ask before adding one.
  - Never change an interval without noting what changed and why.
  - Never recommend a fertilizer dose stronger than the standard
    guidance for the species.
  - A schedule day is a check day, not a pour day: watering is always
    conditional on the soil check.
  - If a plant shows possible disease or pests, describe what it looks
    like and suggest isolation and identification before any treatment.
  - Keep the plant list as the single source of truth; confirm before
    removing a plant that died or was given away.
source: |
  ---
  name: plant-care-scheduler
  description: Build and maintain a watering, feeding, and repotting schedule for your houseplants. Trigger phrases: "schedule my plant watering", "plant care reminders", "track my houseplants".
  ---
  # Purpose

  Keep every plant in the house on a care rhythm matched to its species,
  pot size, light, and the season, so nothing gets drowned and nothing
  gets forgotten. The schedule adjusts through the year: most plants
  need less water and no fertilizer in winter, and more frequent checks
  in the growing season.

  # Workflow

  1. Take the plant list: species or common name, pot size, soil type if
     known, and where each plant sits (window direction or distance from
     a window).
  2. For each plant, look up standard care guidance for its species:
     watering frequency range, light needs, feeding season and dose,
     and when it typically needs repotting.
  3. Set a watering check interval per plant as a range (for example,
     every 7 to 10 days), not a rigid single day. A check means testing
     the top two inches of soil; water only if dry.
  4. Mark feeding months for plants that need fertilizer, with the dose
     type (balanced liquid at half strength, or slow release).
  5. Flag repotting candidates: roots circling, water running straight
     through, or growth stalling in season.
  6. Build the weekly schedule: which plants get a soil check each week,
     which get fed this month, and any repotting or pruning tasks due.
  7. When the user reports a plant's condition (droopy, yellow leaves,
     new growth), adjust that plant's interval and note the change.
  8. Track care events with dates so intervals stay anchored to what
     actually happened.

  # Output Contract

  A weekly checklist in this order:

  - Due checks: plant name, what to do (soil check, water if dry), room
  - Feeding due: plant name, fertilizer type and dose
  - Watch list: plants showing symptoms, with the last change noted
  - Held: anything the user asked to skip

  If nothing is due, say so in one line and do not pad the list.

  # Operating Rules

  - Never invent a plant the user did not list. Ask before adding one.
  - Never change an interval without noting what changed and why.
  - Never recommend a fertilizer dose stronger than the standard
    guidance for the species.
  - A schedule day is a check day, not a pour day: watering is always
    conditional on the soil check.
  - If a plant shows possible disease or pests, describe what it looks
    like and suggest isolation and identification before any treatment.
  - Keep the plant list as the single source of truth; confirm before
    removing a plant that died or was given away.
---

Plant Care Scheduler keeps a roster of your houseplants and turns it
into a care calendar that follows the real rules of plant care: check
the soil before you water, feed only in the growing season, and adjust
everything when the plant tells you something changed.

You give it the plant list once: species or common name, pot size, and
where each plant sits relative to the light. It looks up standard care
guidance for each species and sets a watering check interval as a
range, not a rigid day, because a pothos in a north window and a ficus
in a south window are on different clocks. Feeding months get marked
with the dose type, and it flags plants that look ready for repotting:
roots circling, water running straight through, or growth stalling in
season.

Each week you get a short checklist of soil checks, feedings due, and
a watch list for anything showing symptoms. When you report a change,
droopy leaves, new growth, a move to a brighter spot, it adjusts that
plant's interval and records why, so the schedule stays anchored to
what actually happened instead of drifting into habit.

## What it includes

- Plant roster with species, pot size, soil, and light placement
- Watering check intervals set as ranges per plant
- Seasonal feeding calendar with fertilizer type and dose
- Repotting and pruning flags
- Symptom reporting that adjusts intervals and logs the change
- A weekly checklist that stays quiet when nothing is due

## Example

Input: "Here are my plants: monstera in a 10 inch pot by the east
window, snake plant in a 6 inch pot in the bedroom corner, pothos on
the kitchen shelf."

Output, a weekly checklist:

```
Due checks:
- Monstera (living room): soil check, water if top 2 inches dry
- Snake plant (bedroom): soil check, likely still moist, skip if firm

Feeding due: none this month

Watch list:
- Pothos: yellowing on two leaves noted 2026-09-28, interval widened
  to 10-14 days, watching
```
