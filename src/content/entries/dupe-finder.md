---
title: "Dupe Finder"
tagline: "Name a product; get cheaper alternatives that don't suck."
category: "shopping"
type: "prompt"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/dupe-finder.md"
source_verified: true
origin: "directory"
includes: ["prompt-text"]
version: "1.0.0"
date_added: 2026-09-10
safety_notes: |
  Compares products from public listings and reviews. Never buys
  anything.
install_prompt: |
  Install the "Dupe Finder" prompt pack. Its full source is below.
  Save it to ~/workspace/prompts/dupe-finder.md (create the
  folder if needed). Then confirm it is installed and show me the
  full text.

  --- SOURCE ---
  This prompt pack finds cheaper alternatives ("dupes") for a product.
  Paste it into Muse along with the product name.

  > Find me cheaper alternatives ("dupes") for [product]. For
  > each alternative give: name, price, what it matches the
  > original on, and where it falls short , be honest about the
  > trade-offs. Rank by value, not by price alone. Rules:
  > (1) only suggest products with real reviews behind them,
  > no obscure no-name listings with 3 reviews, (2) say what
  > the original does better : if nothing cheaper comes
  > close, say so and tell me to buy the original, (3) no
  > counterfeits or knockoffs pretending to be the brand.
source: |
  This prompt pack finds cheaper alternatives ("dupes") for a product.
  Paste it into Muse along with the product name.

  > Find me cheaper alternatives ("dupes") for [product]. For
  > each alternative give: name, price, what it matches the
  > original on, and where it falls short , be honest about the
  > trade-offs. Rank by value, not by price alone. Rules:
  > (1) only suggest products with real reviews behind them,
  > no obscure no-name listings with 3 reviews, (2) say what
  > the original does better : if nothing cheaper comes
  > close, say so and tell me to buy the original, (3) no
  > counterfeits or knockoffs pretending to be the brand.
---

Dupe Finder is a prompt pack for the "do I really need the brand
name?" question. Name the product; get ranked cheaper alternatives
with honest trade-offs : and if nothing cheaper comes close, it says
so and tells you to buy the original.

## What it includes

- Ranked alternatives by value, not price alone
- Honest match-vs-falls-short breakdown per pick
- Real-review minimum; no counterfeits

## Example

Input: "Dupe Finder for the Dyson V15."

Output (abridged):

```
1. Shark Stratos , $299 vs $749
   Matches: suction, laser head. Falls short: bin size,
   battery by ~15 min.
2. Tineco S11 , $249 ...
   Matches: weight, attachments. Falls short: filtration.

Verdict: the Shark gets you 85% there for 40% of the price.
```
