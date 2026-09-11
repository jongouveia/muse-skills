---
title: "Packing List Generator"
tagline: "Trip details in, complete packing checklist out."
category: "productivity"
type: "prompt"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/packing-list-generator.md"
source_verified: false
origin: "directory"
includes: ["instructions", "list-template"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Uses only the trip details you provide. Writes only the list back
  to you. Nothing leaves the chat.
install_prompt: |
  Install the "Packing List Generator" prompt pack. Its full source is below. Save it at
  ~/workspace/prompts/packing-list-generator.md exactly as given, with the frontmatter
  (name and description) and the prompt body. Do not run it now. Then
  confirm it is saved and tell me the trigger phrases: "make a packing list", "what should I pack", "pack for this trip".

  --- SOURCE ---
  # Packing List Generator

  How to use: give the destination, dates, trip type, and anything
  special (a wedding, hiking, a work presentation). It returns a
  complete checklist grouped by category, adjusted for weather and
  trip length.
  Trigger phrases: "make a packing list", "what should I pack", "pack for this trip".

  Save it as a reusable prompt pack named "Packing List Generator".

  ## The prompt

  Build my packing list. I will give you: destination, dates, trip
  type (beach / city / hiking / business / family visit), and any
  special events.

  1. Check the weather forecast for the destination and dates.
  2. Scale clothing quantities to the trip length (a 3-day trip and
     a 10-day trip pack differently; say which assumption you used).
  3. Group the list: Documents & money, Clothing, Toiletries &
     health, Tech, Extras for the trip type.
  4. Add a "day before" section: charge devices, water plants,
     take out trash, hold mail , the leaving-the-house checklist.
  5. Flag anything easy to forget that is hard to replace at the
     destination (medications, chargers, ID).

  Rules: no generic filler. Every item should earn its place for
  this specific trip. Keep it to one page.
source: |
  # Packing List Generator

  How to use: give the destination, dates, trip type, and anything
  special (a wedding, hiking, a work presentation). It returns a
  complete checklist grouped by category, adjusted for weather and
  trip length.
  Trigger phrases: "make a packing list", "what should I pack", "pack for this trip".

  Save it as a reusable prompt pack named "Packing List Generator".

  ## The prompt

  Build my packing list. I will give you: destination, dates, trip
  type (beach / city / hiking / business / family visit), and any
  special events.

  1. Check the weather forecast for the destination and dates.
  2. Scale clothing quantities to the trip length (a 3-day trip and
     a 10-day trip pack differently; say which assumption you used).
  3. Group the list: Documents & money, Clothing, Toiletries &
     health, Tech, Extras for the trip type.
  4. Add a "day before" section: charge devices, water plants,
     take out trash, hold mail , the leaving-the-house checklist.
  5. Flag anything easy to forget that is hard to replace at the
     destination (medications, chargers, ID).

  Rules: no generic filler. Every item should earn its place for
  this specific trip. Keep it to one page.
---

Packing List Generator takes your destination, dates, and trip type
and returns a complete checklist : weather-adjusted, scaled to trip
length, grouped by category, with a "day before" leaving-the-house
section.

## What it includes

- Weather-aware clothing picks
- Trip-length quantity scaling
- Grouped checklist (documents, clothing, tech, trip extras)
- Day-before home checklist and hard-to-replace flags

## Example

Input: "Portland, 4 days, city trip, one nice dinner."

Output (abridged):

```
Documents & money: ID, insurance card, one backup card
Clothing (4 days, 60s and rain): 4 tops, 2 pants, 1 shorts, rain shell,
  1 nice outfit for dinner, broken-in walking shoes
Tech: phone charger, laptop + charger, earbuds
Day before: charge everything, water plants, take out trash
Don't forget: rain shell (Portland in September), dinner outfit
```
