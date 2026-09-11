---
title: "Meal Macro Estimator"
tagline: "Photo a meal; get rough calories and macros logged to a daily file."
category: "productivity"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/meal-macro-estimator.md"
source_verified: true
origin: "directory"
includes: ["instructions", "workflow", "daily-log"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Reads only the meal photos you give it in the chat. Writes one
  log file per day in your workspace. Gives estimates only, never
  medical or diet advice. Nothing is sent anywhere.
install_prompt: |
  Install the "Meal Macro Estimator" skill. Its full source is below.
  Create it at ~/workspace/skills/meal-macro-estimator/SKILL.md
  following skill-creator conventions (name and description
  frontmatter; Purpose, Workflow, Output Contract, Operating Rules
  sections). Then confirm it is installed and tell me the trigger
  phrases.

  --- SOURCE ---
  ---
  name: meal-macro-estimator
  description: Estimate calories and macros from a meal photo and log them to a daily file, with a running daily total. Trigger phrases: "log this meal", "what are the macros", "track this food".
  ---
  # Purpose

  Frictionless food logging. The user photos a meal; the skill
  estimates calories, protein, carbs, and fat, appends the entry to
  today's log, and reports the running daily total.

  # Workflow

  1. Look at the meal photo. Identify the foods and estimate
     portions in familiar units (a palm of chicken, a cup of rice).
  2. Estimate calories, protein (g), carbs (g), and fat (g) per
     item. Mark every number as an estimate; never present it as
     measured.
  3. Append one entry to food-log/YYYY-MM-DD.md in the workspace:
     time, foods, and the four numbers.
  4. Report the meal's totals plus the running daily total in one
     short block.
  5. On request ("how did I eat today"), summarize the day: total
     calories and macros, no judgment, no advice unless asked.

  # Output Contract

  - food-log/YYYY-MM-DD.md: one entry per meal with time, foods,
    calories, protein, carbs, fat
  - Each report: meal totals, then "Day so far: X cal | P xg |
    C xg | F xg"

  # Operating Rules

  - Every number is an estimate. Say so every time.
  - Never give medical or diet advice. If the user asks for advice,
    suggest talking to a professional.
  - Never shame or praise food choices. Report the numbers, nothing
    else.
  - The log stays in the user's workspace. Nothing is sent anywhere.
source: |
  ---
  name: meal-macro-estimator
  description: Estimate calories and macros from a meal photo and log them to a daily file, with a running daily total. Trigger phrases: "log this meal", "what are the macros", "track this food".
  ---
  # Purpose

  Frictionless food logging. The user photos a meal; the skill
  estimates calories, protein, carbs, and fat, appends the entry to
  today's log, and reports the running daily total.

  # Workflow

  1. Look at the meal photo. Identify the foods and estimate
     portions in familiar units (a palm of chicken, a cup of rice).
  2. Estimate calories, protein (g), carbs (g), and fat (g) per
     item. Mark every number as an estimate; never present it as
     measured.
  3. Append one entry to food-log/YYYY-MM-DD.md in the workspace:
     time, foods, and the four numbers.
  4. Report the meal's totals plus the running daily total in one
     short block.
  5. On request ("how did I eat today"), summarize the day: total
     calories and macros, no judgment, no advice unless asked.

  # Output Contract

  - food-log/YYYY-MM-DD.md: one entry per meal with time, foods,
    calories, protein, carbs, fat
  - Each report: meal totals, then "Day so far: X cal | P xg |
    C xg | F xg"

  # Operating Rules

  - Every number is an estimate. Say so every time.
  - Never give medical or diet advice. If the user asks for advice,
    suggest talking to a professional.
  - Never shame or praise food choices. Report the numbers, nothing
    else.
  - The log stays in the user's workspace. Nothing is sent anywhere.
---

Meal Macro Estimator is frictionless food logging. Photo a meal and
it estimates calories, protein, carbs, and fat, appends the entry to
today's log, and reports the running daily total. Every number is
labeled an estimate, and it never lectures. It gives you just the numbers.

## What it includes

- Photo-based portion and macro estimation
- Daily log files (food-log/YYYY-MM-DD.md) in the workspace
- Running daily totals with every entry
- Day summaries on request, judgment-free

## Example

Input: photo of grilled chicken, rice, and broccoli.

Output:

```
Logged: grilled chicken (~6 oz), rice (~1 cup), broccoli (~1 cup)
Meal: 520 cal | P 48g | C 52g | F 9g (estimates)
Day so far: 1,140 cal | P 92g | C 118g | F 28g
```
