---
title: "Price History Checker"
tagline: "'Is this a good price?' answered from price history and your receipts, not the tag."
category: "shopping"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/price-history-checker.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "verdict-format", "price-log"]
version: "1.1.0"
date_added: 2026-09-10
safety_notes: |
  Reads public product and price-history pages only.
  Saves receipt prices to one local file, ~/workspace/price-log.md.
  Never shares the log or your receipts with anyone.
  Never buys anything or signs you up for trackers.
install_prompt: |
  Install the "Price History Checker" skill. Its full source is
  below. Create it at
  ~/workspace/skills/price-history-checker/SKILL.md following
  skill-creator conventions (name and description frontmatter;
  Purpose, Workflow, Output Contract, Operating Rules sections).
  Then confirm it is installed and tell me the trigger phrases.

  --- SOURCE ---
  ---
  name: price-history-checker
  description: Answer "is this a good price?" from price history and the user's own receipts, not the strikethrough: historical low, average, and whether to buy now or wait. Trigger phrases: "is this a good price", "should I buy this now", "check the price history", "log this receipt", "what do I usually pay for this".
  ---
  # Purpose

  Strikethrough prices lie. This skill checks what an item has
  actually sold for over time and gives a buy-now-or-wait
  verdict grounded in that history. It also keeps a price log
  from the user's receipts. The log shows what the user
  actually paid for staples, such as groceries.

  # Workflow

  1. Ask the user for the product link or exact model name.
     If the user shares a receipt, go to step 6.
  2. Find price history: camelcamelcamel-style trackers for
     Amazon items, manufacturer price pages, and recent sold
     listings for marketplace items.
  3. Record: current price, 90-day average, historical low and
     when it hit it, and any predictable sale pattern (Prime
     Day, Black Friday, model refresh).
  4. Verdict rules:
     - At or near historical low: "buy"
     - Within 10% of average with no pattern: "fair: buy if
       you need it now"
     - Above average with a known sale window within 60 days:
       "wait"
  5. Report in the Output Contract shape.
  6. Log the receipt in ~/workspace/price-log.md. For each
     item, write the item name, store, date, size, and price
     paid. Create the file if it does not exist.
  7. Calculate one unit price for each item. Use per pound for
     weight, per fluid ounce for liquid, or per count. Use the
     same unit for all entries of one item.
  8. For a multi-buy deal ("2 for $5") or a discount on a
     separate receipt line, record the price paid for one unit.
  9. When the user asks about a logged item, use the log as
     the price history. Compare the current unit price to the
     lowest price paid and the usual range. Then apply the
     rules in step 4.

  # Output Contract

  - Verdict: buy, fair, or wait, one word, then one line why
  - Price history: current, 90-day average, historical low
    (with date), sale pattern if any
  - Log update: the items added, the unit price of each item,
    and each new lowest price
  - Caveats: thin history, refurbished vs. new mismatch, or
    regional pricing differences

  # Operating Rules

  - History comes from trackers and sold listings, not from
    the merchant's "was" price. Say the source.
  - "Wait" needs a reason: a dated sale window or a pattern,
    not vibes.
  - Thin history gets a caveat, not a confident verdict. A
    logged item with fewer than 3 entries has thin history.
  - Receipt prices come only from receipts the user shares.
    Never invent a price or a past purchase.
  - If the size is missing, ask for it. Do not compare unit
    prices without a size.
  - Keep the log in ~/workspace/price-log.md only. Never send
    the log or a receipt to anyone.
  - Read only on the web. Never buy, never sign up for price
    trackers.
source: |
  ---
  name: price-history-checker
  description: Answer "is this a good price?" from price history and the user's own receipts, not the strikethrough: historical low, average, and whether to buy now or wait. Trigger phrases: "is this a good price", "should I buy this now", "check the price history", "log this receipt", "what do I usually pay for this".
  ---
  # Purpose

  Strikethrough prices lie. This skill checks what an item has
  actually sold for over time and gives a buy-now-or-wait
  verdict grounded in that history. It also keeps a price log
  from the user's receipts. The log shows what the user
  actually paid for staples, such as groceries.

  # Workflow

  1. Ask the user for the product link or exact model name.
     If the user shares a receipt, go to step 6.
  2. Find price history: camelcamelcamel-style trackers for
     Amazon items, manufacturer price pages, and recent sold
     listings for marketplace items.
  3. Record: current price, 90-day average, historical low and
     when it hit it, and any predictable sale pattern (Prime
     Day, Black Friday, model refresh).
  4. Verdict rules:
     - At or near historical low: "buy"
     - Within 10% of average with no pattern: "fair: buy if
       you need it now"
     - Above average with a known sale window within 60 days:
       "wait"
  5. Report in the Output Contract shape.
  6. Log the receipt in ~/workspace/price-log.md. For each
     item, write the item name, store, date, size, and price
     paid. Create the file if it does not exist.
  7. Calculate one unit price for each item. Use per pound for
     weight, per fluid ounce for liquid, or per count. Use the
     same unit for all entries of one item.
  8. For a multi-buy deal ("2 for $5") or a discount on a
     separate receipt line, record the price paid for one unit.
  9. When the user asks about a logged item, use the log as
     the price history. Compare the current unit price to the
     lowest price paid and the usual range. Then apply the
     rules in step 4.

  # Output Contract

  - Verdict: buy, fair, or wait, one word, then one line why
  - Price history: current, 90-day average, historical low
    (with date), sale pattern if any
  - Log update: the items added, the unit price of each item,
    and each new lowest price
  - Caveats: thin history, refurbished vs. new mismatch, or
    regional pricing differences

  # Operating Rules

  - History comes from trackers and sold listings, not from
    the merchant's "was" price. Say the source.
  - "Wait" needs a reason: a dated sale window or a pattern,
    not vibes.
  - Thin history gets a caveat, not a confident verdict. A
    logged item with fewer than 3 entries has thin history.
  - Receipt prices come only from receipts the user shares.
    Never invent a price or a past purchase.
  - If the size is missing, ask for it. Do not compare unit
    prices without a size.
  - Keep the log in ~/workspace/price-log.md only. Never send
    the log or a receipt to anyone.
  - Read only on the web. Never buy, never sign up for price
    trackers.
---

Price History Checker answers "is this a good price?" from what the
item actually sold for, current price, 90-day average, historical
low: and gives a buy, fair, or wait verdict. A "wait" always comes
with a reason: a dated sale window, not vibes.

It also keeps a price log from your own receipts. Share a receipt and
it records the unit price of each item. Ask about a staple later and it
compares the shelf price to what you actually paid.

## What it includes

- Price-history lookup from trackers and sold listings
- Current vs. average vs. historical low
- Buy / fair / wait verdict with the reason
- Price log from your receipts, in unit prices
- Caveats for thin history

## Example

Input: a headphone listing at $199, "was $349."

Output:

```
Verdict: WAIT: hits $149 every Black Friday.

Price history:
- Current: $199 | 90-day average: $219
- Historical low: $149 (Nov 2025)
- Pattern: drops to $149–159 each November

Caveat: none, 18 months of history.
```
