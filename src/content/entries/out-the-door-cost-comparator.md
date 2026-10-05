---
title: "Out-the-Door Cost Comparator"
tagline: "Compares the true all-in cost of the same item across stores: price plus tax, shipping, and fees."
category: "shopping"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/out-the-door-cost-comparator.md"
source_verified: true
origin: "directory"
includes: ["instructions", "workflow", "output contract"]
version: "1.0.0"
date_added: 2026-09-29
safety_notes: |
  Compares prices only. Never adds anything to a cart, never checks
  out, never enters payment details. Uses only the stores and
  shipping address you provide.
install_prompt: |
  Install the "Out-the-Door Cost Comparator" skill. Its full source is
  below. Create it at ~/workspace/skills/out-the-door-cost-comparator/SKILL.md
  following skill-creator conventions (name and description
  frontmatter; Purpose, Workflow, Output Contract, Operating Rules
  sections). Then confirm it is installed and tell me the trigger
  phrases.

  --- SOURCE ---
  ---
  name: out-the-door-cost-comparator
  description: Compare the true out-the-door cost of the same item across stores, adding tax, shipping, and fees to each price before ranking. Trigger phrases: "compare out the door price", "which store is cheapest all in", "total cost comparison".
  ---
  # Purpose

  Compare the true out-the-door cost of the same product across
  stores, adding sales tax, shipping, handling fees, and discounts
  to each price before ranking. A lower sticker price can lose once
  delivery and tax are included, so this skill recomputes each
  offer as a single total using the same shipping destination and
  delivery speed, then ranks stores by that total.

  # Workflow

  1. Get the product description or link, the stores to compare,
     and the shipping ZIP code.
  2. For each store, capture: item price, any discount or coupon
     applied, shipping cost, handling or service fees, estimated
     sales tax, and the delivery window.
  3. Normalize to one delivery speed. If one store ships slow for
     free and another charges for fast, compare the speed the user
     picks, not mismatched speeds.
  4. Compute the total per store: price minus discounts, plus
     shipping, plus fees, plus tax.
  5. Rank stores by total cost, cheapest first, and show the dollar
     gap to the next cheapest option.
  6. Flag caveats that change the effective deal: final-sale items,
     restocking fees, return shipping charges, or store credit quirks.

  # Output Contract

  A short table, one row per store, with these columns: Store, Item
  price, Shipping, Tax, Total, Delivery window. Below the table, one
  line naming the cheapest total and the savings versus the most
  expensive option. Keep it to the table plus the one-liner; no essay.

  # Operating Rules

  - Never assume tax or shipping. Look it up for the user's ZIP at
    checkout when possible, or state the assumption plainly.
  - Never compare mismatched delivery speeds. Normalize first.
  - Never invent a coupon. Only apply codes the user provides or
    that appear on the store's own page.
  - Never buy anything. This is a comparison job only.
  - If a store's final fees appear only at checkout, say so and
    label the total as estimated.
source: |
  ---
  name: out-the-door-cost-comparator
  description: Compare the true out-the-door cost of the same item across stores, adding tax, shipping, and fees to each price before ranking. Trigger phrases: "compare out the door price", "which store is cheapest all in", "total cost comparison".
  ---
  # Purpose

  Compare the true out-the-door cost of the same product across
  stores, adding sales tax, shipping, handling fees, and discounts
  to each price before ranking. A lower sticker price can lose once
  delivery and tax are included, so this skill recomputes each
  offer as a single total using the same shipping destination and
  delivery speed, then ranks stores by that total.

  # Workflow

  1. Get the product description or link, the stores to compare,
     and the shipping ZIP code.
  2. For each store, capture: item price, any discount or coupon
     applied, shipping cost, handling or service fees, estimated
     sales tax, and the delivery window.
  3. Normalize to one delivery speed. If one store ships slow for
     free and another charges for fast, compare the speed the user
     picks, not mismatched speeds.
  4. Compute the total per store: price minus discounts, plus
     shipping, plus fees, plus tax.
  5. Rank stores by total cost, cheapest first, and show the dollar
     gap to the next cheapest option.
  6. Flag caveats that change the effective deal: final-sale items,
     restocking fees, return shipping charges, or store credit quirks.

  # Output Contract

  A short table, one row per store, with these columns: Store, Item
  price, Shipping, Tax, Total, Delivery window. Below the table, one
  line naming the cheapest total and the savings versus the most
  expensive option. Keep it to the table plus the one-liner; no essay.

  # Operating Rules

  - Never assume tax or shipping. Look it up for the user's ZIP at
    checkout when possible, or state the assumption plainly.
  - Never compare mismatched delivery speeds. Normalize first.
  - Never invent a coupon. Only apply codes the user provides or
    that appear on the store's own page.
  - Never buy anything. This is a comparison job only.
  - If a store's final fees appear only at checkout, say so and
    label the total as estimated.
---

The cheapest sticker price rarely wins once tax, shipping, and fees
join the picture. Out-the-Door Cost Comparator exists to answer one
question honestly: what will this actually cost me, delivered, from
each store? You name the product, the stores, and your shipping ZIP,
and it recomputes every offer as a single total, so the ranking is
based on money leaving your pocket, not the number on the shelf tag.

It starts by collecting the pieces most shoppers skip: the shipping
charge for your address, the service or handling fees that surface
at checkout, the sales tax, and any discounts you have. It
normalizes delivery speed before comparing, so a free slow option
does not get unfairly stacked against a paid fast one. Then it
ranks stores cheapest first and calls out the dollar gap between
neighbors, plus caveats like final-sale policies or restocking
fees that change the real deal.

It never buys anything and never touches a cart. It is a comparison
job only, and it stays a short table plus one line of conclusion,
never an essay.

## What it includes

- Price, shipping, tax, and fee capture per store for one ZIP code
- Delivery-speed normalization before any comparison
- Ranked out-the-door totals with dollar gaps between options
- Caveat flags for final-sale items, restocking fees, and return costs
- A one-line verdict naming the cheapest total

## Example

Input: the same noise-canceling headphones at three stores, shipping
to 01810, standard delivery.

Output:

```
| Store   | Item price | Shipping | Tax    | Total   | Delivery window |
| ------- | ---------- | -------- | ------ | ------- | --------------- |
| Store C | $209.00    | $0.00    | $0.00  | $209.00 | 3-5 days        |
| Store B | $189.00    | $9.99    | $12.44 | $211.43 | 3-5 days        |
| Store A | $199.00    | $0.00    | $12.44 | $211.44 | 3-5 days        |

Cheapest: Store C at $209.00, saving $2.44 versus the most expensive.
```

Store B looked like the deal on the shelf tag and was not.
