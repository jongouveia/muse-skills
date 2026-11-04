---
title: "Grocery Price Book"
tagline: "Turns your receipts into a price book: the best price you have paid for each staple, by store, so real sales stand out."
category: "shopping"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/grocery-price-book.md"
source_verified: false
origin: "directory"
includes: ["Price book entries per staple, by store", "Best price paid and usual price range", "Sale check: is this price actually low", "Stock-up suggestions for pantry staples", "Price book template"]
version: "1.0.0"
date_added: "2026-11-02"
safety_notes: "Never shares receipts, shopping lists, or spending details with anyone. Never places orders or charges anything. Prices come only from what the user provides; it never invents a store price."
install_prompt: |
  To install the Grocery Price Book skill, save the skill source below as ~/workspace/skills/grocery-price-book/SKILL.md, then tell Muse to use it whenever you log grocery prices or check whether a sale is actually low.

  --- SOURCE ---
  ---
  name: grocery-price-book
  description: Build and check a grocery price book from receipts and shopping notes. Use when the user says "log this grocery price", "price book", "is this sale actually good", "what do I usually pay for this", "track grocery prices", or shares a receipt and asks whether the prices are low.
  ---

  ## Purpose
  Turn receipts and shopping notes into a price book: for each staple, the best price the user has paid, the usual range, and which store had it, so a sale price can be judged against real history instead of the shelf tag. A price book answers one question well: is this actually cheap, or does it just look cheap.

  ## Workflow
  1. Collect prices: from a receipt, a shopping note, or prices the user types in, with item, store, date, size or weight, and price paid.
  2. Normalize: convert each price to a per-unit price (per ounce, per pound, per count) so different sizes compare fairly, and note the size the price came from.
  3. Update the book: for each item, record the new entry, the best price paid so far, and the usual range across recent entries.
  4. Check a sale: when the user shares a sale price, compare it to the book and say whether it beats the best price, sits in the usual range, or is above it.
  5. Suggest stock-ups: for pantry staples with a long shelf life, flag the ones currently at or below their best price, and only those.
  6. Keep the book tidy: merge duplicate item names, keep store names consistent, and ask when an entry is unclear instead of guessing.

  ## Output Contract
  - A price book update: new entries added, with per-unit prices and any new best price flagged.
  - A sale check: the sale price, the book's best price and usual range for that item, and a plain verdict (beats best, usual, or above usual).
  - A short stock-up list for pantry staples at or below their best price, with the store and price for each.
  - Nothing is ordered or charged. The book is text the user keeps.

  ## Operating Rules
  - Never invent a store price, a sale price, or a past purchase. Every price comes from the user or a receipt the user provided.
  - Never share receipts, lists, or spending details with anyone, and never place an order or charge anything.
  - If size or weight is missing, say the per-unit math cannot be done and ask for it, instead of comparing different sizes as if they match.
  - Keep store names and item names consistent so the same item does not split into two entries.
  - A sale that only matches the usual range is not a stock-up reason. Say so plainly.
  - If a price looks like a data entry error (far outside the item's range), flag it and ask before it changes the best price.
source: |
  ---
  name: grocery-price-book
  description: Build and check a grocery price book from receipts and shopping notes. Use when the user says "log this grocery price", "price book", "is this sale actually good", "what do I usually pay for this", "track grocery prices", or shares a receipt and asks whether the prices are low.
  ---

  ## Purpose
  Turn receipts and shopping notes into a price book: for each staple, the best price the user has paid, the usual range, and which store had it, so a sale price can be judged against real history instead of the shelf tag. A price book answers one question well: is this actually cheap, or does it just look cheap.

  ## Workflow
  1. Collect prices: from a receipt, a shopping note, or prices the user types in, with item, store, date, size or weight, and price paid.
  2. Normalize: convert each price to a per-unit price (per ounce, per pound, per count) so different sizes compare fairly, and note the size the price came from.
  3. Update the book: for each item, record the new entry, the best price paid so far, and the usual range across recent entries.
  4. Check a sale: when the user shares a sale price, compare it to the book and say whether it beats the best price, sits in the usual range, or is above it.
  5. Suggest stock-ups: for pantry staples with a long shelf life, flag the ones currently at or below their best price, and only those.
  6. Keep the book tidy: merge duplicate item names, keep store names consistent, and ask when an entry is unclear instead of guessing.

  ## Output Contract
  - A price book update: new entries added, with per-unit prices and any new best price flagged.
  - A sale check: the sale price, the book's best price and usual range for that item, and a plain verdict (beats best, usual, or above usual).
  - A short stock-up list for pantry staples at or below their best price, with the store and price for each.
  - Nothing is ordered or charged. The book is text the user keeps.

  ## Operating Rules
  - Never invent a store price, a sale price, or a past purchase. Every price comes from the user or a receipt the user provided.
  - Never share receipts, lists, or spending details with anyone, and never place an order or charge anything.
  - If size or weight is missing, say the per-unit math cannot be done and ask for it, instead of comparing different sizes as if they match.
  - Keep store names and item names consistent so the same item does not split into two entries.
  - A sale that only matches the usual range is not a stock-up reason. Say so plainly.
  - If a price looks like a data entry error (far outside the item's range), flag it and ask before it changes the best price.
---

## What it includes

Grocery sales are hard to judge from the shelf tag alone, because a "sale" price is often just the usual price with a bright label. This skill fixes that with a price book built from your own receipts: for each staple, the best price you have paid, the usual range, and the store that had it, all in per-unit terms so different sizes compare fairly. Log prices as you shop, check a sale price against the book before you stock up, and get a short stock-up list limited to pantry staples currently at or below their best price. Nothing is ordered or charged, and every price comes from you, never invented.

## Example

You paste in a receipt with coffee at two stores and olive oil on sale. The skill logs each item with its per-unit price, flags that the olive oil beats your best price so far, and notes the coffee sale only matches your usual range, so it is not a stock-up reason. Next week you ask about a coffee sale at a third store, and the skill checks it against the book and tells you plainly whether it beats your best price or just looks like a deal.
