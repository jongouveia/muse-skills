---
title: Unit Price Comparator
tagline: "Does the unit-price math on your shopping list so the cheapest sticker stops winning."
category: shopping
type: skill
author: Muse Skills editors
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/unit-price-comparator.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "unit-normalizer", "shrinkflation-checklist"]
version: "1.0.0"
date_added: 2026-10-21
safety_notes: |
  Never places orders or checks live prices; it works only from the data you paste in.
  Never recommends bulk perishables beyond what you say you can finish.
install_prompt: |
  Paste this entire block into a Muse chat to install the Unit Price Comparator skill. Muse will create the skill file at ~/workspace/skills/unit-price-comparator/SKILL.md using the source after the marker below.

  --- SOURCE ---
  ---
  name: unit-price-comparator
  description: Compares unit prices (per oz, per lb, per sheet) across stores and package sizes so you always buy the cheapest per-unit option. Trigger phrases: unit price, price per unit, bulk deal, cheapest per ounce, grocery math, compare sizes.
  ---

  ## Purpose
  Sticker prices mislead. A family-size bag that costs more can be cheaper per ounce, and a sale item can cost more per unit than the regular brand beside it. This skill does the unit-price math on a shopping list and tells you which option costs least per usable unit, after adjusting for packaging tricks like concentrated formulas and different serving counts.

  ## Workflow
  1. Ask for the shopping list and the candidate products or stores: paste labels, photos, links, or receipt lines.
  2. For each item, collect the price and the net quantity (oz, lb, count, fl oz, sheets, loads, servings).
  3. Normalize to a common unit per product type (per oz for coffee, per sheet for paper towels, per load for detergent).
  4. Flag traps: shrinkflation (same package, less product), concentrated or diluted products, and club-pack quantities you cannot finish before they spoil.
  5. Rank options cheapest-per-unit first, then give a final pick per item and the total expected spend.

  ## Output Contract
  Reply with a table per product: product, size, price, unit price, and a verdict column naming the winner. Follow with two lines: the total for the full list under the recommended picks, and the difference versus the worst per-unit option.

  ## Operating Rules
  - Never assume a size or a price; if a quantity is missing, ask or mark it unknown.
  - Use the units the shopper thinks in; convert only when the comparison requires it.
  - Do not recommend bulk buys of perishables beyond what the user says they can finish.
  - Do not place orders or check live prices; work from the data the user provides.
source: |
  ---
  name: unit-price-comparator
  description: Compares unit prices (per oz, per lb, per sheet) across stores and package sizes so you always buy the cheapest per-unit option. Trigger phrases: unit price, price per unit, bulk deal, cheapest per ounce, grocery math, compare sizes.
  ---

  ## Purpose
  Sticker prices mislead. A family-size bag that costs more can be cheaper per ounce, and a sale item can cost more per unit than the regular brand beside it. This skill does the unit-price math on a shopping list and tells you which option costs least per usable unit, after adjusting for packaging tricks like concentrated formulas and different serving counts.

  ## Workflow
  1. Ask for the shopping list and the candidate products or stores: paste labels, photos, links, or receipt lines.
  2. For each item, collect the price and the net quantity (oz, lb, count, fl oz, sheets, loads, servings).
  3. Normalize to a common unit per product type (per oz for coffee, per sheet for paper towels, per load for detergent).
  4. Flag traps: shrinkflation (same package, less product), concentrated or diluted products, and club-pack quantities you cannot finish before they spoil.
  5. Rank options cheapest-per-unit first, then give a final pick per item and the total expected spend.

  ## Output Contract
  Reply with a table per product: product, size, price, unit price, and a verdict column naming the winner. Follow with two lines: the total for the full list under the recommended picks, and the difference versus the worst per-unit option.

  ## Operating Rules
  - Never assume a size or a price; if a quantity is missing, ask or mark it unknown.
  - Use the units the shopper thinks in; convert only when the comparison requires it.
  - Do not recommend bulk buys of perishables beyond what the user says they can finish.
  - Do not place orders or check live prices; work from the data the user provides.
---

## What it includes

Big packages are not always better value, and small discounts are not always discounts. This skill turns your grocery or household list into a unit-price comparison: you paste in the prices and sizes you see on the shelf, and it tells you which option costs the least per usable unit. It normalizes across ounces, pounds, counts, and sheets so a jumbo bag can be judged fairly against a standard one, and it calls out shrinkflation when the package looks the same but holds less than it used to. It also guards against false bulk wins: concentrated detergents, single-serve snacks, and perishables you cannot finish before they spoil.

## Example

You are choosing between two olive oils: a 16.9 fl oz bottle at $8.49 and a 33.8 fl oz bottle at $14.99. The skill replies:

```
Olive oil

| Product      | Size       | Price  | Unit price    | Verdict |
|--------------|------------|--------|---------------|---------|
| Small bottle | 16.9 fl oz | $8.49  | $0.50 / fl oz |         |
| Large bottle | 33.8 fl oz | $14.99 | $0.44 / fl oz | Winner  |

Total with recommended picks: $14.99
Difference versus the worst option: $1.99 less than two small bottles ($16.98) for the same 33.8 fl oz
```
