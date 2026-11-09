---
title: "Grocery List Deduper"
tagline: "Merges every grocery list and recipe into one clean list with nothing counted twice."
category: "shopping"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/grocery-list-deduper.md"
source_verified: false
origin: "directory"
includes:
  - "Merge of lists from every person, recipe, and note into one list"
  - "Duplicate items combined with quantities added together"
  - "Items grouped by store section so the shop is one pass"
  - "Conflict flags when two entries disagree on brand or size"
  - "Pantry check that drops what you already have at home"
version: "1.0.0"
date_added: "2026-11-09"
safety_notes: "Never drops an item without saying so. Asks when two entries conflict instead of picking one silently. Keeps the user's wording for brands and sizes so the list still matches the shelf."
install_prompt: |
  To install the Grocery List Deduper skill, save the skill source below as ~/workspace/skills/grocery-list-deduper/SKILL.md, then tell Muse to use it whenever you have grocery lists from several people or recipes and want one clean list before you shop.

  --- SOURCE ---
  ---
  name: grocery-list-deduper
  description: Merge multiple grocery lists and recipes into one clean shopping list. Use when the user has lists from several people, recipes, or notes and wants one deduped list with quantities added together before shopping.
  ---

  ## Purpose
  Turn a pile of grocery lists, recipe ingredient lists, and stray notes into one list you can shop from in a single pass. The skill normalizes item names, combines duplicates with their quantities added together, groups everything by store section, and flags the places where two entries disagree so nothing gets bought twice or left out.

  ## Workflow
  1. Collect every list: notes from each person, ingredient lists from each recipe, and any pantry or fridge notes.
  2. Normalize the items: match the same item across lists even when the wording differs, such as tomatoes and tomato, and keep brand and size wording as the user wrote it.
  3. Combine duplicates: add quantities together, convert units where the math is plain, and keep a note of which list each item came from.
  4. Flag conflicts: when two entries disagree on brand, size, or amount, list the conflict and ask the user to pick, instead of choosing silently.
  5. Apply the pantry check: drop items the user already has at home, and say what was dropped and why.
  6. Group the final list by store section, such as produce, dairy, meat, pantry, and frozen, in the order the user walks the store.

  ## Output Contract
  - One shopping list with each item once, quantities added together, grouped by store section.
  - A merged-from note on each item showing which lists it came from.
  - A conflicts list with the choices the user needs to make.
  - A dropped list naming what was removed by the pantry check and why.

  ## Operating Rules
  - Never drop an item without saying so and naming the reason.
  - Ask when two entries conflict instead of picking one silently.
  - Keep the user's wording for brands and sizes so the list still matches the shelf.
  - Add quantities only when the units match or convert plainly; otherwise keep both amounts and flag it.
  - If a quantity is vague, such as some or a few, keep it vague and mark it as an estimate.
source: |
  ---
  name: grocery-list-deduper
  description: Merge multiple grocery lists and recipes into one clean shopping list. Use when the user has lists from several people, recipes, or notes and wants one deduped list with quantities added together before shopping.
  ---

  ## Purpose
  Turn a pile of grocery lists, recipe ingredient lists, and stray notes into one list you can shop from in a single pass. The skill normalizes item names, combines duplicates with their quantities added together, groups everything by store section, and flags the places where two entries disagree so nothing gets bought twice or left out.

  ## Workflow
  1. Collect every list: notes from each person, ingredient lists from each recipe, and any pantry or fridge notes.
  2. Normalize the items: match the same item across lists even when the wording differs, such as tomatoes and tomato, and keep brand and size wording as the user wrote it.
  3. Combine duplicates: add quantities together, convert units where the math is plain, and keep a note of which list each item came from.
  4. Flag conflicts: when two entries disagree on brand, size, or amount, list the conflict and ask the user to pick, instead of choosing silently.
  5. Apply the pantry check: drop items the user already has at home, and say what was dropped and why.
  6. Group the final list by store section, such as produce, dairy, meat, pantry, and frozen, in the order the user walks the store.

  ## Output Contract
  - One shopping list with each item once, quantities added together, grouped by store section.
  - A merged-from note on each item showing which lists it came from.
  - A conflicts list with the choices the user needs to make.
  - A dropped list naming what was removed by the pantry check and why.

  ## Operating Rules
  - Never drop an item without saying so and naming the reason.
  - Ask when two entries conflict instead of picking one silently.
  - Keep the user's wording for brands and sizes so the list still matches the shelf.
  - Add quantities only when the units match or convert plainly; otherwise keep both amounts and flag it.
  - If a quantity is vague, such as some or a few, keep it vague and mark it as an estimate.
---

## What it includes

A household shop usually starts with three or four lists: yours, someone else in the house, the ingredients from two recipes, and a note stuck to the fridge. This skill takes all of them and returns one list you can shop in a single pass. It matches the same item across lists even when the wording differs, adds the quantities together, and keeps a note of which list each item came from. When two entries disagree on brand, size, or amount, it flags the conflict and asks you to pick instead of choosing silently. A pantry check drops what you already have at home and names what was dropped and why. The final list is grouped by store section, produce, dairy, meat, pantry, and frozen, in the order you walk the store. It never drops an item without saying so, it keeps your wording for brands and sizes so the list still matches the shelf, and it marks vague amounts as estimates instead of inventing a number.

## Example

You are cooking tacos for six and pasta for four, and your partner added milk and eggs to a shared note. The skill merges the taco and pasta ingredient lists with the note, combines the two onion entries into three onions total, flags that one recipe asks for shredded cheddar and the other for a block, and drops the milk because you already have a full gallon at home. The final list is grouped by section, with produce first and dairy last, and each item notes which list it came from.
