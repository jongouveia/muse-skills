---
title: "Pantry Cook"
tagline: "Photo the fridge; get three things you can make tonight."
category: "creative"
type: "prompt"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/pantry-cook.md"
source_verified: false
origin: "directory"
includes: ["instructions", "recipe-template"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Uses only the photo or list you provide in the chat. Writes only
  the suggestions back to you. Nothing leaves the chat.
install_prompt: |
  Install the "Pantry Cook" prompt pack. Its full source is below. Save it at
  ~/workspace/prompts/pantry-cook.md exactly as given, with the frontmatter
  (name and description) and the prompt body. Do not run it now. Then
  confirm it is saved and tell me the trigger phrases: "cook from my pantry", "what can I make with these ingredients", "suggest pantry dinners".

  --- SOURCE ---
  # Pantry Cook

  How to use: photo your fridge, pantry, or both, or paste a list of
  what you have. It suggests three dinners you can make right now,
  ranked by how little you are missing.

  Trigger phrases: "cook from my pantry", "what can I make with these ingredients", "suggest pantry dinners".

  ## The prompt

  Look at my ingredients and suggest 3 dinners I can make tonight.

  1. List what you can see, grouped loosely: proteins, vegetables,
     carbs, dairy, sauces and seasonings.
  2. Suggest 3 meals, ranked by fewest missing ingredients first.
  3. For each meal: name, the 3-5 key steps (short), time estimate,
     and any missing ingredient clearly marked as "you'd need to
     buy: X".
  4. At least one suggestion must use only what is visible: no
     missing ingredients at all.
  5. Keep each recipe to 5 steps or fewer. No preamble about your
     love of cooking.

  Rules: never assume an ingredient that is not visible or listed.
  If the photo is unclear, ask about the 2-3 items that matter most
  instead of guessing.
source: |
  # Pantry Cook

  How to use: photo your fridge, pantry, or both, or paste a list of
  what you have. It suggests three dinners you can make right now,
  ranked by how little you are missing.

  Trigger phrases: "cook from my pantry", "what can I make with these ingredients", "suggest pantry dinners".

  ## The prompt

  Look at my ingredients and suggest 3 dinners I can make tonight.

  1. List what you can see, grouped loosely: proteins, vegetables,
     carbs, dairy, sauces and seasonings.
  2. Suggest 3 meals, ranked by fewest missing ingredients first.
  3. For each meal: name, the 3-5 key steps (short), time estimate,
     and any missing ingredient clearly marked as "you'd need to
     buy: X".
  4. At least one suggestion must use only what is visible: no
     missing ingredients at all.
  5. Keep each recipe to 5 steps or fewer. No preamble about your
     love of cooking.

  Rules: never assume an ingredient that is not visible or listed.
  If the photo is unclear, ask about the 2-3 items that matter most
  instead of guessing.
---

Pantry Cook answers "what's for dinner" from what you actually have.
Photo the fridge or pantry, or paste a list, and it suggests three
dinners ranked by fewest missing ingredients first. At least one
suggestion always uses only what is visible.

## What it includes

- Ingredient inventory from a photo or list
- Three ranked dinner suggestions with short steps and time estimates
- Missing ingredients clearly marked per meal
- A no-shopping-required option when the visible ingredients support it

## Example

Input: fridge photo showing chicken thighs, broccoli, rice, eggs, soy sauce.

Output (abridged):

```
1. Teriyaki chicken rice bowls: 25 min, nothing missing
   Sear thighs, steam broccoli, simmer soy-sugar glaze, serve over rice.
2. Chicken fried rice: 20 min, nothing missing
3. Broccoli cheddar omelets: 15 min, you'd need to buy: cheddar
```
