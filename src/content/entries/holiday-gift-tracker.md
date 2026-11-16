---
title: "Holiday Gift Tracker"
tagline: "Tell it your gift list and budget; it tracks every gift, price, and wrap status."
category: "shopping"
type: "space"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/holiday-gift-tracker.md"
source_verified: true
origin: "directory"
includes:
  - "Gift list grouped by person"
  - "Budget bar"
  - "Status counts"
version: "1.0.0"
date_added: "2026-11-12"
safety_notes: "The Space never buys a gift, places an order, or shares the list or any person's details outside the Space."
install_prompt: |
  Build a Space named "Holiday Gift Tracker". Its full spec is below. Build the sections, fields, and views the spec names. Ask me before you connect any app. Confirm when the Space is in my sidebar.

  --- SOURCE ---
  # Holiday Gift Tracker
  ## Purpose
  Keep every holiday gift in one place: who it is for, the budget, what was bought, and whether it is wrapped, so nothing is forgotten or bought twice.
  ## Layout
  - Gift list grouped by person. Each gift holds: person, gift idea, budget amount, actual price, store or link, status (idea, bought, wrapped, given), and a notes field.
  - Budget bar at the top: total budget, total spent, and amount left, updated from the actual prices entered.
  - Summary counts: gifts still to buy, bought but not wrapped, and done.
  ## Updates
  None. Manual edits only.
  ## Connections
  None.
  ## Rules
  - Never buys a gift or places an order.
  - Never shares the list or any person's details outside the Space.
  - Shows budget totals from the prices entered, and flags a person when the actual prices of their gifts total more than their gift budgets.
source: |
  # Holiday Gift Tracker
  ## Purpose
  Keep every holiday gift in one place: who it is for, the budget, what was bought, and whether it is wrapped, so nothing is forgotten or bought twice.
  ## Layout
  - Gift list grouped by person. Each gift holds: person, gift idea, budget amount, actual price, store or link, status (idea, bought, wrapped, given), and a notes field.
  - Budget bar at the top: total budget, total spent, and amount left, updated from the actual prices entered.
  - Summary counts: gifts still to buy, bought but not wrapped, and done.
  ## Updates
  None. Manual edits only.
  ## Connections
  None.
  ## Rules
  - Never buys a gift or places an order.
  - Never shares the list or any person's details outside the Space.
  - Shows budget totals from the prices entered, and flags a person when the actual prices of their gifts total more than their gift budgets.
---

Holiday shopping spreads across notes, receipts, and memory, and by mid December nobody is sure who is covered, what was spent, or which boxes still need wrapping. This Space keeps the whole season in one view in your sidebar: a gift list grouped by person, a budget bar that totals what you have spent against what you planned, and counts of what is left to buy and wrap.

You add each gift with its person, budget, and store, then move it from idea to bought to wrapped to given as you go. The budget bar updates from the prices you enter, and a person whose gifts pass their budget gets flagged before the overspend grows. Nothing connects to an outside app, so the Space stays current through your own edits, which take seconds at the kitchen counter.

It pairs well with the price-history-checker skill: check a gift's price history in chat before you buy, then log the gift here once it is yours.

## What it includes

- Gift list grouped by person, with budget, actual price, store, status, and notes per gift
- Budget bar showing total budget, total spent, and amount left
- Summary counts for gifts still to buy, bought but not wrapped, and done

## Example

You add nine people and a $600 total budget in November. By December 10 the Space shows $412 spent, three gifts still at idea stage, and two bought gifts waiting to be wrapped, with one person flagged at $95 spent against a $75 budget.
