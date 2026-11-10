---
title: "Costume Coordinator"
tagline: "Plans a group costume theme and assigns each person a look within your budget."
category: "creative"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/costume-coordinator.md"
source_verified: false
origin: "directory"
includes:
  - "Group costume theme shortlist matched to your people and occasion"
  - "One costume assigned to each person, with sizes and comfort notes"
  - "Buy links for each piece, with a running budget tally"
  - "Timeline that leaves time for shipping, fitting, and fixes"
  - "Backup plan when a piece is out of stock or does not fit"
version: "1.0.0"
date_added: "2026-11-10"
safety_notes: "Never buys anything. Links are suggestions for the user to approve and order. Asks about sizes, sensitivities, and comfort before assigning a costume, and keeps the budget visible at every step."
install_prompt: |
  To install the Costume Coordinator skill, save the skill source below as ~/workspace/skills/costume-coordinator/SKILL.md, then tell Muse to use it whenever you are planning a group or family costume theme for a holiday and want each person assigned a look within a budget.

  --- SOURCE ---
  ---
  name: costume-coordinator
  description: Plan a group or family costume theme for a holiday. Use when the user wants a theme, a costume assigned to each person, buy links, a budget tally, and a timeline that leaves time for shipping.
  ---

  ## Purpose
  Turn a holiday costume idea into a finished plan for the whole group. The skill picks a theme that fits the people involved, assigns one costume to each person, finds buy links for each piece, keeps a running tally against the budget, and builds a timeline that leaves time for shipping, fitting, and fixes before the day arrives.

  ## Workflow
  1. Take the occasion, the people, and the budget: names, ages, sizes, and anything anyone will not wear.
  2. Suggest two or three themes that fit the group, and let the user pick one.
  3. Assign one costume to each person in the theme, matching the role to the person where it matters, such as the tallest person playing the tallest character.
  4. Find a buy link for each piece, with a price, and tally the total against the budget. Flag the plan when it runs over, and suggest a swap or a homemade piece to bring it back.
  5. Build a timeline working back from the event date: order by date, fitting and fix time, and a final check the day before.
  6. Name a backup for each piece that could sell out or arrive in the wrong size.

  ## Output Contract
  - The chosen theme and a one line reason it fits the group.
  - A per-person assignment: name, character, pieces, sizes, and buy link with price.
  - A budget tally: total, per-person cost, and the amount left or over.
  - A timeline: order-by date, fitting window, and final check.
  - A backup option for each piece that could sell out or misfit.

  ## Operating Rules
  - Never buy anything. Links are suggestions for the user to approve and order.
  - Ask about sizes, sensitivities, and comfort before assigning a costume.
  - Keep the budget visible at every step, and flag the moment the plan runs over.
  - Leave shipping and fitting time in the timeline; never plan an order to arrive the day before.
  - Offer a homemade or reuse option before suggesting a spend over budget.
source: |
  ---
  name: costume-coordinator
  description: Plan a group or family costume theme for a holiday. Use when the user wants a theme, a costume assigned to each person, buy links, a budget tally, and a timeline that leaves time for shipping.
  ---

  ## Purpose
  Turn a holiday costume idea into a finished plan for the whole group. The skill picks a theme that fits the people involved, assigns one costume to each person, finds buy links for each piece, keeps a running tally against the budget, and builds a timeline that leaves time for shipping, fitting, and fixes before the day arrives.

  ## Workflow
  1. Take the occasion, the people, and the budget: names, ages, sizes, and anything anyone will not wear.
  2. Suggest two or three themes that fit the group, and let the user pick one.
  3. Assign one costume to each person in the theme, matching the role to the person where it matters, such as the tallest person playing the tallest character.
  4. Find a buy link for each piece, with a price, and tally the total against the budget. Flag the plan when it runs over, and suggest a swap or a homemade piece to bring it back.
  5. Build a timeline working back from the event date: order by date, fitting and fix time, and a final check the day before.
  6. Name a backup for each piece that could sell out or arrive in the wrong size.

  ## Output Contract
  - The chosen theme and a one line reason it fits the group.
  - A per-person assignment: name, character, pieces, sizes, and buy link with price.
  - A budget tally: total, per-person cost, and the amount left or over.
  - A timeline: order-by date, fitting window, and final check.
  - A backup option for each piece that could sell out or misfit.

  ## Operating Rules
  - Never buy anything. Links are suggestions for the user to approve and order.
  - Ask about sizes, sensitivities, and comfort before assigning a costume.
  - Keep the budget visible at every step, and flag the moment the plan runs over.
  - Leave shipping and fitting time in the timeline; never plan an order to arrive the day before.
  - Offer a homemade or reuse option before suggesting a spend over budget.
---

## What it includes

A group costume works when the theme fits the people wearing it and nothing is left to the last minute. This skill starts with the occasion, the people, and the budget, then suggests two or three themes and lets you pick one. It assigns one costume to each person in the theme, matching roles to people where it matters, and asks about sizes, sensitivities, and comfort before anything is assigned. Each piece gets a buy link with a price, and a running tally shows the total against the budget, with a swap or a homemade piece suggested the moment the plan runs over. The timeline works back from the event date, with an order-by date, a fitting window, and a final check the day before, plus a backup for any piece that could sell out or arrive in the wrong size. It never buys anything; you approve and order each piece yourself.

## Example

Your family of four wants a matching theme for Halloween with a $120 budget. The skill suggests a wizard school, a pirate crew, and a space team, and you pick the pirate crew. It assigns the captain to you, the first mate to your partner, and two crew members to the kids, with a buy link and price for each piece. The tally comes to $108, leaving $12 spare, and the timeline says to order by October 10 so there is time to swap a hat that arrives in the wrong size.
