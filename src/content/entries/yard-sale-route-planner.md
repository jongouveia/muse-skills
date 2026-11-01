---
title: "Yard Sale Route Planner"
tagline: "Turns yard sale and garage sale listings into one morning route, ordered by opening time and location."
category: "deal-hunting"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/yard-sale-route-planner.md"
source_verified: false
origin: "directory"
includes: ["route ordering", "conflict flags", "skip-first list", "route sheet template"]
version: "1.0.0"
date_added: "2026-10-25"
safety_notes: "Never messages sellers, places holds, or negotiates prices. Never invents addresses, times, or items for sale. Never shares the user's home address or route with anyone."
install_prompt: |
  To install the Yard Sale Route Planner skill, save the skill source below as ~/workspace/skills/yard-sale-route-planner/SKILL.md, then tell Muse to use it whenever you plan a yard sale morning.

  --- SOURCE ---
  ---
  name: yard-sale-route-planner
  description: Plan a morning route across yard sales, garage sales, and estate sales from a list of listings. Use when the user says "plan my yard sale route", "yard sale route", "map my garage sales", "plan Saturday garage sales", or shares a list of sale listings with addresses and times.
  ---

  ## Purpose
  Turn a pile of sale listings into one sensible driving route for a morning, ordered by opening time and geography, so the user hits the best sales first and wastes no time backtracking.

  ## Workflow
  1. Collect listings: ask for or accept a pasted list, links, or screenshots with address, start time, end time, and any notes on what is for sale.
  2. Normalize each listing: address, start time, rough category of goods, and any must-visit flag the user names.
  3. Order the route: cluster sales that sit near each other, start with the earliest openers, and keep travel between stops short. Note any sale that opens later so the user can loop back if time allows.
  4. Check for conflicts: flag sales that overlap in a way that forces a choice, and mark which one the user ranked higher.
  5. Produce the route sheet (see Output Contract) plus a short note on what to skip if the morning runs short.

  ## Output Contract
  - A numbered stop list, each stop with: address, start time, what to look for there, and drive time from the previous stop.
  - A one-line total: number of stops, estimated start and finish times.
  - A short "skip first" list for when time runs short, ordered by lowest priority.
  - Nothing is sent, booked, or messaged to sellers. The route sheet is text only.

  ## Operating Rules
  - Never invent addresses, times, or items for sale. If a listing lacks an address or time, mark it "details missing" and leave it off the ordered route until the user supplies them.
  - Never message sellers, place holds, or negotiate prices.
  - Never share the user's home address or route with anyone.
  - Keep the route to what fits in a morning unless the user asks for a full day.
  - If two sales open at the same time in opposite directions, ask the user which matters more instead of guessing.
source: |
  ---
  name: yard-sale-route-planner
  description: Plan a morning route across yard sales, garage sales, and estate sales from a list of listings. Use when the user says "plan my yard sale route", "yard sale route", "map my garage sales", "plan Saturday garage sales", or shares a list of sale listings with addresses and times.
  ---

  ## Purpose
  Turn a pile of sale listings into one sensible driving route for a morning, ordered by opening time and geography, so the user hits the best sales first and wastes no time backtracking.

  ## Workflow
  1. Collect listings: ask for or accept a pasted list, links, or screenshots with address, start time, end time, and any notes on what is for sale.
  2. Normalize each listing: address, start time, rough category of goods, and any must-visit flag the user names.
  3. Order the route: cluster sales that sit near each other, start with the earliest openers, and keep travel between stops short. Note any sale that opens later so the user can loop back if time allows.
  4. Check for conflicts: flag sales that overlap in a way that forces a choice, and mark which one the user ranked higher.
  5. Produce the route sheet (see Output Contract) plus a short note on what to skip if the morning runs short.

  ## Output Contract
  - A numbered stop list, each stop with: address, start time, what to look for there, and drive time from the previous stop.
  - A one-line total: number of stops, estimated start and finish times.
  - A short "skip first" list for when time runs short, ordered by lowest priority.
  - Nothing is sent, booked, or messaged to sellers. The route sheet is text only.

  ## Operating Rules
  - Never invent addresses, times, or items for sale. If a listing lacks an address or time, mark it "details missing" and leave it off the ordered route until the user supplies them.
  - Never message sellers, place holds, or negotiate prices.
  - Never share the user's home address or route with anyone.
  - Keep the route to what fits in a morning unless the user asks for a full day.
  - If two sales open at the same time in opposite directions, ask the user which matters more instead of guessing.
---

## What it includes

Saturday mornings fill up fast with yard sales, and the difference between a good haul and a wasted drive is the order you visit them in. This skill takes whatever list you have, pasted text, links, or screenshots, and turns it into a single route: earliest openers first, nearby sales clustered together, and drive time between stops kept short. It flags sales that force a hard choice when two open at once in opposite directions, and it builds a skip-first list so that if the morning runs short, you already know what to drop. It works from your own listings only, so it never invents an address or a start time, and anything missing details stays off the route until you fill it in.

## Example

You paste in eight Saturday listings with addresses and start times, and note that you care most about vinyl and old cameras. The skill returns a numbered route: stop one at 7:30 AM for the estate sale with records, stop two nearby for tools, and so on, with drive times between stops and a finish estimate around noon. Two sales open at 8:00 AM on opposite sides of town, so it flags the conflict and asks which one matters more to you. The record-heavy sale wins, and the other lands at the top of the skip-first list in case the morning runs long.
