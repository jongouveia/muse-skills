---
title: "Flip Tracker"
tagline: "Give it each item you buy to resell; it tracks costs, sale price, and profit per flip."
category: "deal-hunting"
type: "space"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/flip-tracker.md"
source_verified: true
origin: "directory"
includes:
  - "Item board"
  - "Profit view"
  - "Source tally"
version: "1.0.0"
date_added: "2026-11-12"
safety_notes: "The Space never lists, buys, or sells an item and never contacts a buyer or seller."
install_prompt: |
  Build a Space named "Flip Tracker". Its full spec is below. Build the sections, fields, and views the spec names. Ask me before you connect any app. Confirm when the Space is in my sidebar.

  --- SOURCE ---
  # Flip Tracker
  ## Purpose
  Track every item bought to resell, from purchase to sale, so the profit on each flip and each month is always visible.
  ## Layout
  - Item board with one card per item: item name, source (where it was bought), buy price, fees, shipping cost, list price, sale price, status (bought, listed, sold), date bought, and date sold.
  - Profit view: profit per sold item, total profit this month, and average days from bought to sold.
  - Source tally: total profit grouped by where items came from.
  ## Updates
  None. Manual edits only.
  ## Connections
  None.
  ## Rules
  - Never lists, buys, or sells an item.
  - Never contacts a buyer or seller.
  - Profit figures come only from the prices and costs entered.
source: |
  # Flip Tracker
  ## Purpose
  Track every item bought to resell, from purchase to sale, so the profit on each flip and each month is always visible.
  ## Layout
  - Item board with one card per item: item name, source (where it was bought), buy price, fees, shipping cost, list price, sale price, status (bought, listed, sold), date bought, and date sold.
  - Profit view: profit per sold item, total profit this month, and average days from bought to sold.
  - Source tally: total profit grouped by where items came from.
  ## Updates
  None. Manual edits only.
  ## Connections
  None.
  ## Rules
  - Never lists, buys, or sells an item.
  - Never contacts a buyer or seller.
  - Profit figures come only from the prices and costs entered.
---

Buying to resell feels profitable right up until the fees, shipping, and the item that sat for two months come due. This Space keeps one board for the whole operation in your sidebar: every item from the day you buy it to the day it sells, with the costs that decide whether the flip actually made money.

Each item carries its buy price, fees, shipping cost, list price, and sale price, plus a status of bought, listed, or sold. The profit view totals the month, shows profit per item, and averages how many days items take to sell, so slow categories stand out. The source tally groups profit by where items came from, which tells you which yard sales, shops, and marketplaces are worth your Saturday.

It pairs well with the marketplace-listing-builder skill: draft the listing in chat, then track the item here from listed to sold.

## What it includes

- Item board with buy price, fees, shipping, list price, sale price, status, and dates per item
- Profit view with profit per item, monthly totals, and average days to sell
- Source tally grouping profit by where items were bought

## Example

After a month of use the board holds 14 items: 9 sold, 3 listed, 2 waiting. The profit view shows $386 total profit for the month, an average of 11 days from bought to sold, and the source tally shows estate sales ahead of marketplace buys by $140.
