---
title: "Fit Finder"
tagline: "Your measurements plus a brand : estimated size and watch-outs."
category: "shopping"
type: "prompt"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/fit-finder.md"
source_verified: false
origin: "directory"
includes: ["instructions", "size-template"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Uses only the measurements you provide. Writes only the size
  estimate back to you. Nothing leaves the chat.
install_prompt: |
  Install the "Fit Finder" prompt pack. Its full source is below. Save it at
  ~/workspace/prompts/fit-finder.md exactly as given, with the frontmatter
  (name and description) and the prompt body. Do not run it now. Then
  confirm it is saved and tell me the trigger phrases: "find my size", "check this brand's fit", "what size should I order".

  --- SOURCE ---
  # Fit Finder

  How to use: give your measurements, the brand, and the item
  (jeans, dress shirt, running shoes , whatever). It looks up the
  brand's size chart and tells you which size to order and what to
  watch for.
  Trigger phrases: "find my size", "check this brand's fit", "what size should I order".

  Save it as a reusable prompt pack named "Fit Finder".

  ## The prompt

  Help me pick a size. I will give you: my key measurements, the
  brand, and the item I want to buy.

  1. Look up the brand's current size chart for this item.
  2. Compare my measurements and name the size to order. If I fall
     between sizes, say so and recommend based on the item type
     (size up for structured jackets, down for stretch denim ,
     state the rule you used).
  3. Add brand-specific watch-outs: "runs small in the shoulders",
     "vanity sized , most people size down", "length runs long".
     Base these on the size chart and general fit reputation, not
     invented reviews.
  4. If the item has fit variants (slim / regular / relaxed, or
     width options for shoes), say which variant suits my
     measurements.

  Rules: if you cannot find the brand's size chart, say so and
  give a best-effort estimate labeled as such. Never state a size
  as certain when it is a guess.
source: |
  # Fit Finder

  How to use: give your measurements, the brand, and the item
  (jeans, dress shirt, running shoes , whatever). It looks up the
  brand's size chart and tells you which size to order and what to
  watch for.
  Trigger phrases: "find my size", "check this brand's fit", "what size should I order".

  Save it as a reusable prompt pack named "Fit Finder".

  ## The prompt

  Help me pick a size. I will give you: my key measurements, the
  brand, and the item I want to buy.

  1. Look up the brand's current size chart for this item.
  2. Compare my measurements and name the size to order. If I fall
     between sizes, say so and recommend based on the item type
     (size up for structured jackets, down for stretch denim ,
     state the rule you used).
  3. Add brand-specific watch-outs: "runs small in the shoulders",
     "vanity sized , most people size down", "length runs long".
     Base these on the size chart and general fit reputation, not
     invented reviews.
  4. If the item has fit variants (slim / regular / relaxed, or
     width options for shoes), say which variant suits my
     measurements.

  Rules: if you cannot find the brand's size chart, say so and
  give a best-effort estimate labeled as such. Never state a size
  as certain when it is a guess.
---

Fit Finder ends the order-two-sizes-and-return-one ritual. Give your
measurements, the brand, and the item; it checks the brand's actual
size chart, names the size to order, and adds the fit quirks worth
knowing , "runs small in the shoulders," "size down, it's vanity
sized."

## What it includes

- Brand size-chart lookup and measurement matching
- Between-sizes rules (stated, not hidden)
- Fit watch-outs from chart and reputation
- Fit-variant picks (slim/regular, widths)

## Example

Input: "34 waist, 32 inseam, Levi's 511 jeans."

Output:

```
Order: 34x32 in 511 Slim.
Watch-outs: 511s run snug in the thigh : if you're between fits,
  try the 514 Slim Straight. Levi's vanity-sizes slightly; the
  34 measures closer to 35.
```
