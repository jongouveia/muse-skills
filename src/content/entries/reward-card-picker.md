---
title: "Reward Card Picker"
tagline: "Picks the best card in your wallet for a purchase, based on rewards rates and active offers."
category: "money"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/reward-card-picker.md"
source_verified: true
origin: "directory"
includes: ["instructions", "workflow", "card-wallet-profile"]
version: "1.0.0"
date_added: 2026-10-03
safety_notes: |
  Works only from the cards and rates you provide; it never asks for,
  stores, or displays full card numbers, CVVs, or account logins.
  It never recommends opening, closing, or carrying a balance on a
  card. It answers one question: which card in your wallet pays you
  back the most for this purchase, right now.
install_prompt: |
  Install the "Reward Card Picker" skill. Its full source is below. Create it
  at ~/workspace/skills/reward-card-picker/SKILL.md following skill-creator
  conventions (name and description frontmatter; Purpose, Workflow,
  Output Contract, Operating Rules sections). Then confirm it is
  installed and tell me the trigger phrases.

  --- SOURCE ---
  ---
  name: reward-card-picker
  description: Choose the best rewards card from your wallet for a specific purchase. Trigger phrases: "which card should I use", "best card for this purchase", "reward card picker".
  ---
  # Purpose

  Answer one narrow question: of the cards already in your wallet,
  which one pays back the most for this specific purchase, given each
  card's rewards rates, active offers, and category caps? It never
  advises on which cards to get or drop; it picks from what you have.

  # Workflow

  1. Read your card profile: each card's flat earn rate, bonus
     categories, rotating category status, annual fee, and any active
     offer such as a welcome spend target or 0% APR period. You set
     this up once and update it when a card changes.
  2. Ask for the purchase: store or merchant, category (for example
     groceries, gas, travel, dining), and the amount.
  3. For each card, compute the expected return: apply the card's rate
     for that category, check whether a quarterly cap or rotating
     category applies, and check active offers that change the math,
     such as a welcome spend threshold close to being met.
  4. If a card has a 0% APR window and the user says the purchase will
     be carried, note it separately; it does not change the rewards
     math.
  5. Rank the cards by expected dollar return, highest first. Break a
     tie by preferring the card with the simpler earn structure, so
     the user does not have to juggle portals or bonus clocks.
  6. If the purchase category does not match any bonus, recommend the
     highest flat-rate card and say so plainly.
  7. If the expected return differs by less than fifty cents between
     the top two cards, say they are effectively tied and name both.

  # Output Contract

  - Winner: the card to use, named exactly as in your profile
  - Expected return: dollar amount and rate applied (for example,
    "$4.60 at 4x on groceries")
  - Why it wins: one line on the category, offer, or cap that made
    the difference
  - Runner-up: the second-best card and its expected return, so you
    have a fallback
  - If effectively tied: say so and name both cards

  Keep it to five lines or fewer unless the user asks for more.

  # Operating Rules

  - Only pick from the cards in the user's profile. Never recommend
    applying for a new card or closing one.
  - Never ask for or store full card numbers, CVVs, or login
    credentials. Last four digits are enough for naming.
  - Never encourage carrying a balance to chase rewards. Interest
    wipes out cash back every time.
  - If the card profile is missing a rate for the purchase category,
    ask the user rather than guess.
  - Do not factor in lounge access, insurance, or other perks in the
    rewards math. Mention them only if the user asks.
  - If a rotating category is not activated in the profile, treat it
    as not active. Never assume the user activated it.
source: |
  ---
  name: reward-card-picker
  description: Choose the best rewards card from your wallet for a specific purchase. Trigger phrases: "which card should I use", "best card for this purchase", "reward card picker".
  ---
  # Purpose

  Answer one narrow question: of the cards already in your wallet,
  which one pays back the most for this specific purchase, given each
  card's rewards rates, active offers, and category caps? It never
  advises on which cards to get or drop; it picks from what you have.

  # Workflow

  1. Read your card profile: each card's flat earn rate, bonus
     categories, rotating category status, annual fee, and any active
     offer such as a welcome spend target or 0% APR period. You set
     this up once and update it when a card changes.
  2. Ask for the purchase: store or merchant, category (for example
     groceries, gas, travel, dining), and the amount.
  3. For each card, compute the expected return: apply the card's rate
     for that category, check whether a quarterly cap or rotating
     category applies, and check active offers that change the math,
     such as a welcome spend threshold close to being met.
  4. If a card has a 0% APR window and the user says the purchase will
     be carried, note it separately; it does not change the rewards
     math.
  5. Rank the cards by expected dollar return, highest first. Break a
     tie by preferring the card with the simpler earn structure, so
     the user does not have to juggle portals or bonus clocks.
  6. If the purchase category does not match any bonus, recommend the
     highest flat-rate card and say so plainly.
  7. If the expected return differs by less than fifty cents between
     the top two cards, say they are effectively tied and name both.

  # Output Contract

  - Winner: the card to use, named exactly as in your profile
  - Expected return: dollar amount and rate applied (for example,
    "$4.60 at 4x on groceries")
  - Why it wins: one line on the category, offer, or cap that made
    the difference
  - Runner-up: the second-best card and its expected return, so you
    have a fallback
  - If effectively tied: say so and name both cards

  Keep it to five lines or fewer unless the user asks for more.

  # Operating Rules

  - Only pick from the cards in the user's profile. Never recommend
    applying for a new card or closing one.
  - Never ask for or store full card numbers, CVVs, or login
    credentials. Last four digits are enough for naming.
  - Never encourage carrying a balance to chase rewards. Interest
    wipes out cash back every time.
  - If the card profile is missing a rate for the purchase category,
    ask the user rather than guess.
  - Do not factor in lounge access, insurance, or other perks in the
    rewards math. Mention them only if the user asks.
  - If a rotating category is not activated in the profile, treat it
    as not active. Never assume the user activated it.
---

Reward Card Picker answers one question: which card in your wallet
pays you back the most for the purchase in front of you. You tell it
your cards once, with their flat rates, bonus categories, rotating
category status, and any active offers, and it keeps that profile
until something changes.

Before a purchase, you give it the store, the category, and the
amount. It computes the expected dollar return for each card, checks
quarterly caps and rotating categories, and weighs active offers such
as a welcome spend threshold you are close to hitting. Then it names
a winner, the expected return, and a one-line reason, plus a
runner-up so you have a fallback. When the top two cards land within
fifty cents of each other, it says so and names both, so you never
stand at the register doing math.

It only ever picks from the cards you already carry. It never asks
for full card numbers, CVVs, or logins, and it never advises you to
open, close, or carry a balance on a card.

## What it includes

- A card wallet profile with rates, bonus categories, caps, and offers
- Category, cap, and rotating-bonus math per purchase
- Welcome-spend and 0% APR offer handling
- Winner, expected return, reason, and runner-up output format
- A tie rule for returns within fifty cents

## Example

Input: profile has three cards; purchase is $230 in groceries. Card A
earns 4x on groceries with no cap. Card B earns 2% flat. Card C earns
5x on groceries up to $1,500 per quarter, and the user has spent $800
this quarter.

Output:

```
Winner: Card C
Expected return: $11.50 at 5x on groceries
Why it wins: 5x rate applies; $700 of the quarterly cap remains
Runner-up: Card A, $9.20 at 4x on groceries
```
