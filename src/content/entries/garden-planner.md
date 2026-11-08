---
title: "Garden Planner"
tagline: "Plans garden beds for your zone, sun, and space, with a season-by-season schedule."
category: "home"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/garden-planner.md"
source_verified: false
origin: "directory"
includes:
  - "Bed layout sized to the space and sun"
  - "Plant choices rated for the hardiness zone"
  - "Season-by-season planting and care schedule"
  - "Watering, mulching, and problem notes"
  - "Shopping list with quantities for plants, seed, soil, and mulch"
version: "1.0.0"
date_added: "2026-11-08"
safety_notes: "Never recommends a plant outside its rated hardiness zone without saying so. Never recommends a plant known to be invasive in the user's region without flagging it. Flags plants toxic to pets and children when they appear in the plan."
install_prompt: |
  To install the Garden Planner skill, save the skill source below as ~/workspace/skills/garden-planner/SKILL.md, then tell Muse to use it whenever you want to plan garden beds or landscaping for your zone, sun, and space.

  --- SOURCE ---
  ---
  name: garden-planner
  description: Plan garden beds and landscaping for your zone, sun, and space. Use when the user wants a bed layout, plant choices for their hardiness zone, or a season-by-season planting and care schedule.
  ---

  ## Purpose
  Turn a yard, a patch of sun, and a hardiness zone into a garden plan you can actually plant. The skill matches plants to the light and soil you have, lays out beds that fit the space, and spreads the work across the seasons so nothing is planted at the wrong time.

  ## Workflow
  1. Collect the facts: hardiness zone, bed size and shape, hours of direct sun, soil type if known, and what the user wants to grow or see.
  2. Map the space: divide the area into beds, leave paths wide enough to walk and reach the middle, and place tall plants where they will not shade short ones.
  3. Choose the plants: pick varieties rated for the zone, matched to the sun each bed gets, and grouped by water needs.
  4. Build the schedule: a season-by-season plan for sowing, transplanting, feeding, pruning, and harvest, with the dates for the user's zone.
  5. Add the care notes: watering, mulching, and the first signs of trouble to watch for.
  6. List the shopping: plants, seed, soil, and mulch with quantities for the beds as drawn.

  ## Output Contract
  - A bed layout with dimensions, paths, and where each plant goes.
  - A plant list with variety names, zone ratings, sun needs, and spacing.
  - A season-by-season schedule: sow, transplant, feed, prune, and harvest dates.
  - Care notes for watering, mulching, and common problems.
  - A shopping list with quantities for plants, seed, soil, and mulch.

  ## Operating Rules
  - Never recommend a plant outside its rated hardiness zone without saying so plainly.
  - Never recommend a plant known to be invasive in the user's region without flagging it.
  - Flag plants that are toxic to pets and children when they appear in the plan.
  - Keep the schedule tied to the user's zone, not a generic calendar.
  - Ask about sun and space before choosing plants; do not guess the light a bed gets.
source: |
  ---
  name: garden-planner
  description: Plan garden beds and landscaping for your zone, sun, and space. Use when the user wants a bed layout, plant choices for their hardiness zone, or a season-by-season planting and care schedule.
  ---

  ## Purpose
  Turn a yard, a patch of sun, and a hardiness zone into a garden plan you can actually plant. The skill matches plants to the light and soil you have, lays out beds that fit the space, and spreads the work across the seasons so nothing is planted at the wrong time.

  ## Workflow
  1. Collect the facts: hardiness zone, bed size and shape, hours of direct sun, soil type if known, and what the user wants to grow or see.
  2. Map the space: divide the area into beds, leave paths wide enough to walk and reach the middle, and place tall plants where they will not shade short ones.
  3. Choose the plants: pick varieties rated for the zone, matched to the sun each bed gets, and grouped by water needs.
  4. Build the schedule: a season-by-season plan for sowing, transplanting, feeding, pruning, and harvest, with the dates for the user's zone.
  5. Add the care notes: watering, mulching, and the first signs of trouble to watch for.
  6. List the shopping: plants, seed, soil, and mulch with quantities for the beds as drawn.

  ## Output Contract
  - A bed layout with dimensions, paths, and where each plant goes.
  - A plant list with variety names, zone ratings, sun needs, and spacing.
  - A season-by-season schedule: sow, transplant, feed, prune, and harvest dates.
  - Care notes for watering, mulching, and common problems.
  - A shopping list with quantities for plants, seed, soil, and mulch.

  ## Operating Rules
  - Never recommend a plant outside its rated hardiness zone without saying so plainly.
  - Never recommend a plant known to be invasive in the user's region without flagging it.
  - Flag plants that are toxic to pets and children when they appear in the plan.
  - Keep the schedule tied to the user's zone, not a generic calendar.
  - Ask about sun and space before choosing plants; do not guess the light a bed gets.
---

## What it includes

A garden plan starts with what you actually have: a zone, a patch of sun, and a space with edges. This skill takes those facts and returns a bed layout with paths you can walk, plant choices rated for your hardiness zone and matched to the sun each bed gets, and a season-by-season schedule for sowing, transplanting, feeding, pruning, and harvest. Tall plants go where they will not shade short ones, and plants with similar water needs sit together so watering stays simple. It adds care notes for watering, mulching, and the first signs of trouble, plus a shopping list with quantities for plants, seed, soil, and mulch. It never recommends a plant outside its rated zone without saying so, and it flags invasive plants and ones toxic to pets and children.

## Example

You have a 10 by 4 foot bed in Andover that gets six hours of morning sun, and you want tomatoes, basil, and marigolds. The skill lays out two rows with a path down the middle, puts the tomatoes on the north side so they do not shade the basil, and sets the marigolds along the edges. The schedule says to start tomato seed indoors in March, move plants out after the last frost in mid May, and feed every two weeks through August. The shopping list names the varieties, the seed count, and the bags of compost the bed needs.
