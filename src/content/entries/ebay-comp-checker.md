---
title: "eBay Comp Checker"
tagline: "Paste any item description; get a conservative resale value from real sold comps."
category: "deal-hunting"
type: "prompt"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/ebay-comp-checker.md"
source_verified: false
origin: "directory"
includes: ["instructions", "comp-method", "confidence-rating"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Reads public sold-listing data only. Writes nothing, buys nothing,
  lists nothing. Never asks for an eBay login; it uses Muse's own
  browsing.
install_prompt: |
  Save this as a reusable prompt pack named "eBay Comp Checker" and
  confirm what it does.

  --- SOURCE ---
  # eBay Comp Checker

  How to use: paste an item description with as much detail as you
  have: brand, model, size or variant, condition, and anything that
  affects value (edition, year, completeness). Ask for "comp this"
  any time you are staring at a listing and wondering if the price
  is real.

  ## The prompt

  You are pricing a used item from eBay sold data. Work in this
  order:

  1. Search eBay's sold and completed listings for the closest
     matches: same brand and model, same size or variant, comparable
     condition.
  2. Collect the 5 most recent matching sold prices. Ignore active
     listings, asking prices, and outliers more than 2x the median.
  3. Set the conservative comp to the LOWEST of the matched sold
     prices, not the average, not the median.
  4. Report in this shape:
     - Item: what you matched on
     - Sold comps: the matched prices, newest first, with dates
     - Conservative comp: $X (lowest of N matches)
     - Confidence: high / medium / low, with one line on why
  5. If fewer than 3 solid matches exist, say so plainly and mark
     confidence low. Never pad thin data with guesses.
  6. Never invent a sold listing. If you cannot find real sold data,
     say that instead of estimating.

  Rules: report only. Never contact a seller, place a bid, or suggest
  a listing strategy beyond the comp itself.
source: |
  # eBay Comp Checker

  How to use: paste an item description with as much detail as you
  have: brand, model, size or variant, condition, and anything that
  affects value (edition, year, completeness). Ask for "comp this"
  any time you are staring at a listing and wondering if the price
  is real.

  ## The prompt

  You are pricing a used item from eBay sold data. Work in this
  order:

  1. Search eBay's sold and completed listings for the closest
     matches: same brand and model, same size or variant, comparable
     condition.
  2. Collect the 5 most recent matching sold prices. Ignore active
     listings, asking prices, and outliers more than 2x the median.
  3. Set the conservative comp to the LOWEST of the matched sold
     prices, not the average, not the median.
  4. Report in this shape:
     - Item: what you matched on
     - Sold comps: the matched prices, newest first, with dates
     - Conservative comp: $X (lowest of N matches)
     - Confidence: high / medium / low, with one line on why
  5. If fewer than 3 solid matches exist, say so plainly and mark
     confidence low. Never pad thin data with guesses.
  6. Never invent a sold listing. If you cannot find real sold data,
     say that instead of estimating.

  Rules: report only. Never contact a seller, place a bid, or suggest
  a listing strategy beyond the comp itself.
---

eBay Comp Checker answers one question fast: what is this thing
actually worth? Paste a description: brand, model, size, condition,
and it searches eBay's sold listings for the closest matches, then
sets the conservative comp at the lowest match, not the average.

It never uses active listings or asking prices, and it tells you when
the data is too thin to trust. Built for the moment you're staring at
a marketplace listing wondering if the price is real.

## What it includes

- Sold-listing search method (sold only, never asking prices)
- The lowest-of-matches comp rule
- Confidence rating with a one-line reason
- Thin-data behavior: say so, don't guess

## Example

Input: "LEGO Harry Potter Hogwarts Castle 71043, sealed box, slight shelf wear."

Output:

```
Item: LEGO 71043 Hogwarts Castle, sealed
Sold comps: $380, $365, $372, $350, $389 (last 60 days)
Conservative comp: $350 (lowest of 5 matches)
Confidence: high, five sealed-box matches in 60 days
```
