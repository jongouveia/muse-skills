---
title: "Price History Checker"
tagline: "'Is this a good price?' answered from history, not the strikethrough."
category: "shopping"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/price-history-checker.md"
source_verified: true
origin: "directory"
includes: ["instructions", "workflow", "verdict-format"]
version: "1.0.0"
date_added: 2026-09-10
safety_notes: |
  Reads public product and price-history pages only. Writes the
  verdict to you and nothing else. Never buys anything or signs
  you up for trackers.
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
  description: Answer "is this a good price?" from price history, not the strikethrough, historical low, average, and whether to buy now or wait. Trigger phrases: "is this a good price", "should I buy this now", "check the price history".
  ---
  # Purpose

  Strikethrough prices lie. This skill checks what an item has
  actually sold for over time and gives a buy-now-or-wait
  verdict grounded in that history.

  # Workflow

  1. Ask the user for the product link or exact model name.
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

  # Output Contract

  - Verdict: buy, fair, or wait, one word, then one line why
  - Price history: current, 90-day average, historical low
    (with date), sale pattern if any
  - Caveats: thin history, refurbished vs. new mismatch, or
    regional pricing differences

  # Operating Rules

  - History comes from trackers and sold listings, not from
    the merchant's "was" price. Say the source.
  - "Wait" needs a reason: a dated sale window or a pattern,
    not vibes.
  - Thin history gets a caveat, not a confident verdict.
  - Read only. Never buy, never sign up for price trackers.
source: |
  ---
  name: price-history-checker
  description: Answer "is this a good price?" from price history, not the strikethrough, historical low, average, and whether to buy now or wait. Trigger phrases: "is this a good price", "should I buy this now", "check the price history".
  ---
  # Purpose

  Strikethrough prices lie. This skill checks what an item has
  actually sold for over time and gives a buy-now-or-wait
  verdict grounded in that history.

  # Workflow

  1. Ask the user for the product link or exact model name.
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

  # Output Contract

  - Verdict: buy, fair, or wait, one word, then one line why
  - Price history: current, 90-day average, historical low
    (with date), sale pattern if any
  - Caveats: thin history, refurbished vs. new mismatch, or
    regional pricing differences

  # Operating Rules

  - History comes from trackers and sold listings, not from
    the merchant's "was" price. Say the source.
  - "Wait" needs a reason: a dated sale window or a pattern,
    not vibes.
  - Thin history gets a caveat, not a confident verdict.
  - Read only. Never buy, never sign up for price trackers.
---

Price History Checker answers "is this a good price?" from what the
item actually sold for, current price, 90-day average, historical
low: and gives a buy, fair, or wait verdict. A "wait" always comes
with a reason: a dated sale window, not vibes.

## What it includes

- Price-history lookup from trackers and sold listings
- Current vs. average vs. historical low
- Buy / fair / wait verdict with the reason
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
