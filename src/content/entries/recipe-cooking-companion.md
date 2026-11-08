---
title: "Recipe Cooking Companion"
tagline: "Turns how you cook a dish into a repeatable recipe and rescales it for any headcount."
category: "creative"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/recipe-cooking-companion.md"
source_verified: false
origin: "directory"
includes:
  - "Writes a dish you cook from memory as a repeatable recipe"
  - "Rescales rubs, sauces, and sides together for a new weight or headcount"
  - "Shopping list for the scaled amounts"
  - "Short timing and technique answers during the cook"
version: "1.0.0"
date_added: "2026-11-08"
safety_notes: "Never changes a step the user swears by without asking first. Marks guessed amounts as guesses and gives the range to taste. Says when a time or temperature does not scale in a straight line, and gives the new range."
install_prompt: |
  To install the Recipe Cooking Companion skill, save the skill source below as ~/workspace/skills/recipe-cooking-companion/SKILL.md, then tell Muse to use it whenever you want to write down a dish you cook from memory, rescale a recipe, or ask a timing question mid-cook.

  --- SOURCE ---
  ---
  name: recipe-cooking-companion
  description: Turn how you already cook a dish into a repeatable recipe, or rescale a recipe for a new weight or headcount. Use when the user describes a dish they cook from memory, gives a recipe to scale up or down, or asks a timing or technique question mid-cook.
  ---

  ## Purpose
  Keep the dishes you already cook, and make them repeatable. The skill writes the way you cook a dish as a written recipe with amounts, order, and times, or rescales a recipe you hand it so the rubs, sauces, and sides all fit the new weight or headcount. During the cook it answers timing and technique questions in short replies, so you can keep your hands on the food.

  ## Workflow
  1. Take the dish as the user cooks it: ingredients in rough amounts, the steps in order, and the cues they use to judge doneness.
  2. Write it as a repeatable recipe: exact amounts, steps in order, times, temperatures, and the doneness cues.
  3. For a rescale, take the recipe and the real weight or headcount, and scale the rubs, sauces, and sides together so the ratios hold.
  4. Check the scaled recipe: pan sizes, cooking times, and seasoning, which do not always scale in a straight line.
  5. Give the shopping list for the scaled amounts.
  6. During the cook, answer timing and technique questions in short replies, one answer at a time.

  ## Output Contract
  - A repeatable recipe: ingredients with amounts, steps in order, times, temperatures, and doneness cues.
  - A rescaled recipe with rubs, sauces, and sides scaled together, plus the pan size and time changes the scale forces.
  - A shopping list for the scaled amounts.
  - Short answers to timing and technique questions during the cook.

  ## Operating Rules
  - Never change a step the user swears by without asking first.
  - Scale rubs, sauces, and sides together; a sauce scaled alone throws the dish off.
  - Say when a time or temperature does not scale in a straight line, and give the new range.
  - Keep mid-cook answers short: one answer, no lecture.
  - If an amount is a guess, mark it as a guess and give the range to taste.
source: |
  ---
  name: recipe-cooking-companion
  description: Turn how you already cook a dish into a repeatable recipe, or rescale a recipe for a new weight or headcount. Use when the user describes a dish they cook from memory, gives a recipe to scale up or down, or asks a timing or technique question mid-cook.
  ---

  ## Purpose
  Keep the dishes you already cook, and make them repeatable. The skill writes the way you cook a dish as a written recipe with amounts, order, and times, or rescales a recipe you hand it so the rubs, sauces, and sides all fit the new weight or headcount. During the cook it answers timing and technique questions in short replies, so you can keep your hands on the food.

  ## Workflow
  1. Take the dish as the user cooks it: ingredients in rough amounts, the steps in order, and the cues they use to judge doneness.
  2. Write it as a repeatable recipe: exact amounts, steps in order, times, temperatures, and the doneness cues.
  3. For a rescale, take the recipe and the real weight or headcount, and scale the rubs, sauces, and sides together so the ratios hold.
  4. Check the scaled recipe: pan sizes, cooking times, and seasoning, which do not always scale in a straight line.
  5. Give the shopping list for the scaled amounts.
  6. During the cook, answer timing and technique questions in short replies, one answer at a time.

  ## Output Contract
  - A repeatable recipe: ingredients with amounts, steps in order, times, temperatures, and doneness cues.
  - A rescaled recipe with rubs, sauces, and sides scaled together, plus the pan size and time changes the scale forces.
  - A shopping list for the scaled amounts.
  - Short answers to timing and technique questions during the cook.

  ## Operating Rules
  - Never change a step the user swears by without asking first.
  - Scale rubs, sauces, and sides together; a sauce scaled alone throws the dish off.
  - Say when a time or temperature does not scale in a straight line, and give the new range.
  - Keep mid-cook answers short: one answer, no lecture.
  - If an amount is a guess, mark it as a guess and give the range to taste.
---

## What it includes

Some dishes live only in your hands: a pinch of this, a hot pan, a cue you can see but never wrote down. This skill turns the way you already cook a dish into a written recipe you can repeat, with amounts, steps in order, times, temperatures, and the doneness cues you actually use. Or hand it a recipe and your real ingredient weight or headcount, and it rescales the rubs, sauces, and sides together so the ratios hold, and tells you when a time or a pan size has to change because the scale changed. It gives you a shopping list for the scaled amounts, and during the cook it answers timing and technique questions in short replies, one answer at a time, so you can keep cooking. It never changes a step you swear by without asking, and it marks any guessed amount as a guess.

## Example

You cook a pork shoulder by feel, about four pounds, with a dry rub, low and slow until it pulls apart. The skill writes it down: the rub in tablespoons, the oven at 275 degrees, about six hours, and the pull test as the doneness cue. Then you say the next shoulder is seven pounds, and it scales the rub and the sauce together by 1.75 (7 divided by 4), stretches the time to about nine hours instead of the 10.5 a straight scale would give, and tells you the roasting pan needs to be bigger. It then gives the shopping list: one 7 pound pork shoulder, plus the rub and sauce ingredients at 1.75 times your original amounts. Mid-cook you ask when to wrap it, and it answers in one line: wrap at 165 degrees internal, when the bark is set.
