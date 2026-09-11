---
title: "Grocery List Builder"
tagline: "Name three or four meals; get one consolidated list grouped by aisle."
category: "shopping"
type: "prompt"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/grocery-list-builder.md"
source_verified: false
origin: "directory"
includes: ["instructions", "list-template"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Uses only the meals and staples you paste in. Writes only the list
  back to you. Nothing leaves the chat.
install_prompt: |
  Install the "Grocery List Builder" prompt pack. Its full source is below. Save it at
  ~/workspace/prompts/grocery-list-builder.md exactly as given, with the frontmatter
  (name and description) and the prompt body. Do not run it now. Then
  confirm it is saved and tell me the trigger phrases: "build my grocery list", "organize my shopping list", "make a grocery list".

  --- SOURCE ---
  # Grocery List Builder

  How to use: list the meals you plan to cook this week, the number
  of servings for each, and any household staples you are low on. It
  returns one consolidated list grouped by store section, with
  quantities merged.

  Trigger phrases: "build my grocery list", "organize my shopping list", "make a grocery list".

  ## The prompt

  Build my grocery list. I will give you 3-4 meals I plan to cook,
  the number of servings for each, and any staples I am low on.

  1. Break each meal into ingredients with quantities for my serving
     count.
  2. Merge duplicates across meals (two meals needing onions = one
     line, combined quantity).
  3. Add my staples.
  4. Group the final list by store section: Produce, Meat & Seafood,
     Dairy & Eggs, Bakery, Dry Goods & Canned, Frozen, Household.
  5. Flag pantry basics the recipes assume (oil, salt, spices) in a
     separate "check your pantry" note instead of the buy list.

  Rules: use standard US grocery units. If a quantity is ambiguous,
  pick the common package size and note it. Keep the list to one
  page.
source: |
  # Grocery List Builder

  How to use: list the meals you plan to cook this week, the number
  of servings for each, and any household staples you are low on. It
  returns one consolidated list grouped by store section, with
  quantities merged.

  Trigger phrases: "build my grocery list", "organize my shopping list", "make a grocery list".

  ## The prompt

  Build my grocery list. I will give you 3-4 meals I plan to cook,
  the number of servings for each, and any staples I am low on.

  1. Break each meal into ingredients with quantities for my serving
     count.
  2. Merge duplicates across meals (two meals needing onions = one
     line, combined quantity).
  3. Add my staples.
  4. Group the final list by store section: Produce, Meat & Seafood,
     Dairy & Eggs, Bakery, Dry Goods & Canned, Frozen, Household.
  5. Flag pantry basics the recipes assume (oil, salt, spices) in a
     separate "check your pantry" note instead of the buy list.

  Rules: use standard US grocery units. If a quantity is ambiguous,
  pick the common package size and note it. Keep the list to one
  page.
---

Grocery List Builder takes three or four planned meals plus your low
staples and returns one consolidated list: quantities merged across
meals, grouped by store section, with a separate "check your pantry"
note for the basics recipes assume you own.

## What it includes

- Per-meal ingredient breakdowns with serving math
- Duplicate merging across meals
- Store-section grouping (produce, meat, dairy, dry goods, frozen, household)
- Pantry-basics check note, kept off the buy list

## Example

Input: "chicken stir-fry (4 servings), spaghetti bolognese (6 servings), low on: eggs, paper towels."

Output (abridged):

```
Produce: broccoli 2 heads, bell peppers 3, yellow onions 2, garlic 1 head
Meat: chicken breast 1.5 lb, ground beef 1.5 lb
Dry goods: spaghetti 1 lb, soy sauce (check pantry first)
Dairy & eggs: eggs 1 dozen, parmesan 1 wedge
Check your pantry: olive oil, salt, black pepper, red pepper flakes
```
