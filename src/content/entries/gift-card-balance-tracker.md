---
title: "Gift Card Balance Tracker"
tagline: "Tracks every gift card balance and expiry date, and nudges you before the money runs out."
category: "shopping"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/gift-card-balance-tracker.md"
source_verified: false
origin: "directory"
includes:
  - "A card list with store, balance, expiry date, and location for each gift card"
  - "Expiry flags for cards due within 30 days, soonest first"
  - "A small-balance list with the leftover amount per card"
  - "A running total of money held across all gift cards"
  - "A pick for which card to spend first at a named store"
version: "1.0.0"
date_added: "2026-11-26"
safety_notes: "Never asks for or stores full card numbers, PINs, or activation codes; last four digits are enough. It never spends a balance, checks a balance online, or contacts a store; the user reports balances and spends. It keeps the math exact to the cent."
install_prompt: |
  To install the Gift Card Balance Tracker skill, save the skill source below as ~/workspace/skills/gift-card-balance-tracker/SKILL.md, then tell Muse to use it whenever you want to track gift card balances, check what is left on a gift card, find expiring gift cards, or plan how to spend store credit.

  --- SOURCE ---
  ---
  name: gift-card-balance-tracker
  description: Track gift card balances, expiry dates, and store credit in one list, and get nudged before a card expires or a balance goes stale. Use when the user wants to track gift card balances, check what is left on a gift card, find expiring gift cards, or plan how to spend store credit.
  ---

  ## Purpose
  Gift cards are easy to lose track of: one in a drawer, one in a wallet, one in an email inbox, each with a balance nobody remembers. This skill keeps every card in one list with its store, balance, expiry date, and where the card lives, then flags the ones that expire soon and the small balances worth using up. When the user names a store or a purchase, it picks the card to spend first, the one that expires soonest. The user reports balances and spends; the skill does the tracking and the math.

  ## Workflow
  1. Take each card: store or brand, last four digits, balance, expiry date if any, and where the card lives.
  2. Keep a running list sorted by expiry date, with cards that never expire at the end.
  3. Flag cards expiring within 30 days and cards with small balances under a threshold the user sets.
  4. When the user spends on a card, subtract the amount and update the balance, keeping a short spend history per card.
  5. Suggest which card to use first when the user names a store or a purchase, picking the one that expires soonest.
  6. Return the card list, the expiry flags, the small-balance list, and a one-line total of money held in cards.

  ## Output Contract
  - A card list with store, balance, expiry date, and location for each card.
  - Expiry flags for cards due within 30 days, soonest first.
  - A small-balance list with the leftover amount per card.
  - A total of money held across all cards, exact to the cent.
  - A pick for which card to spend first at a named store.

  ## Operating Rules
  - Never ask for or store full card numbers, PINs, or activation codes. Last four digits are enough.
  - Never spend a balance, check a balance online, or contact a store on the user's behalf. The user reports balances and spends.
  - Ask once for a missing balance or expiry date, then work with what you have.
  - Keep the math exact to the cent; show the running total after each update.
  - Treat store credit and gift cards the same way, and keep them in one list.
source: |
  ---
  name: gift-card-balance-tracker
  description: Track gift card balances, expiry dates, and store credit in one list, and get nudged before a card expires or a balance goes stale. Use when the user wants to track gift card balances, check what is left on a gift card, find expiring gift cards, or plan how to spend store credit.
  ---

  ## Purpose
  Gift cards are easy to lose track of: one in a drawer, one in a wallet, one in an email inbox, each with a balance nobody remembers. This skill keeps every card in one list with its store, balance, expiry date, and where the card lives, then flags the ones that expire soon and the small balances worth using up. When the user names a store or a purchase, it picks the card to spend first, the one that expires soonest. The user reports balances and spends; the skill does the tracking and the math.

  ## Workflow
  1. Take each card: store or brand, last four digits, balance, expiry date if any, and where the card lives.
  2. Keep a running list sorted by expiry date, with cards that never expire at the end.
  3. Flag cards expiring within 30 days and cards with small balances under a threshold the user sets.
  4. When the user spends on a card, subtract the amount and update the balance, keeping a short spend history per card.
  5. Suggest which card to use first when the user names a store or a purchase, picking the one that expires soonest.
  6. Return the card list, the expiry flags, the small-balance list, and a one-line total of money held in cards.

  ## Output Contract
  - A card list with store, balance, expiry date, and location for each card.
  - Expiry flags for cards due within 30 days, soonest first.
  - A small-balance list with the leftover amount per card.
  - A total of money held across all cards, exact to the cent.
  - A pick for which card to spend first at a named store.

  ## Operating Rules
  - Never ask for or store full card numbers, PINs, or activation codes. Last four digits are enough.
  - Never spend a balance, check a balance online, or contact a store on the user's behalf. The user reports balances and spends.
  - Ask once for a missing balance or expiry date, then work with what you have.
  - Keep the math exact to the cent; show the running total after each update.
  - Treat store credit and gift cards the same way, and keep them in one list.
---

Gift cards are easy to lose track of: one in a drawer, one in a wallet, one in an email inbox, each with a balance nobody remembers. This skill keeps every card in one list with its store, balance, expiry date, and where the card lives, then flags the ones that expire soon and the small balances worth using up. When you name a store or a purchase, it picks the card to spend first, the one that expires soonest. You report balances and spends; the skill does the tracking and the math, so no card quietly goes stale.

## What it includes

- A card list with store, balance, expiry date, and location for each gift card
- Expiry flags for cards due within 30 days, soonest first
- A small-balance list with the leftover amount per card
- A running total of money held across all gift cards
- A pick for which card to spend first at a named store

## Example

Jon has four gift cards scattered around: a bookstore card with $42.50 left, a coffee card with $8.25, a hardware store card with $60 that expires January 15, and a restaurant card with $25 that never expires. He gives the skill the four cards with their balances and dates. It totals $135.75 held in cards, flags the hardware store card as expiring soonest, and tells him to spend that one first. He uses $35 of it on a tool, reports the spend, and the skill updates the balance to $25 and the total to $100.75.
