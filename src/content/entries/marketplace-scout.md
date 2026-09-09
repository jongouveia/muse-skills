---
title: "Marketplace Scout"
tagline: "Finds flip candidates for your watchlist across Facebook, Craigslist, and eBay."
category: "deal-hunting"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/marketplace-scout.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "watchlist"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Reads public listings on Facebook Marketplace, Craigslist, and eBay.
  Writes a report to you only, never a bid or a purchase. Never
  contacts a seller. Never asks for a marketplace login; it uses the
  assistant's own connected browsing session.
install_prompt: |
  Install the "Marketplace Scout" skill. Its full source is below.
  Create it at ~/workspace/skills/marketplace-scout/SKILL.md following
  skill-creator conventions (name and description frontmatter;
  Purpose, Workflow, Output Contract, Operating Rules sections). Then
  confirm it is installed and tell me the trigger phrases.

  --- SOURCE ---
  ---
  name: marketplace-scout
  description: Search Facebook Marketplace, Craigslist, and eBay for a watchlist of items and report flip candidates by margin after fees and shipping. Trigger phrases: "run marketplace scout", "check my flip watchlist", "find flip deals".
  ---
  # Purpose

  Turn a plain list of item names into a ranked list of listings worth
  buying to resell, after fees and shipping are subtracted from the
  expected sale price.

  # Workflow

  1. Read the watchlist: one item name per line, each with an optional
     target condition and an optional max price. The user maintains
     this list.
  2. For each watchlist item, search Facebook Marketplace, Craigslist,
     and eBay active listings.
  3. For each listing found, estimate the resale price from recent
     eBay sold or completed listings for the same item and condition.
     Use the median of at least 3 comps; skip the listing if fewer
     than 3 comps exist.
  4. Estimate the total cost to acquire and resell:
     - the listing price
     - marketplace or payment fees on the resale (use the platform's
       published fee rate)
     - estimated shipping if the item will ship, $0 if local pickup
  5. Compute the margin: estimated resale price minus listing price
     minus fees minus shipping.
  6. Keep a listing only if the margin is positive and at least $25.
  7. If the watchlist item set a max price, discard any listing above
     it.
  8. Sort surviving candidates by margin, highest first, grouped by
     watchlist item.
  9. If nothing survives, end the run and send nothing.
  10. If something survives, write the report in the Output Contract
      shape and send it.

  # Output Contract

  Grouped by watchlist item, one line per candidate:

  - Listing: title, source (Facebook, Craigslist, or eBay), and link
  - Price: listing price
  - Est. resale: median of the sold comps used
  - Margin: dollar amount after fees and shipping

  No candidates: no message at all.

  # Operating Rules

  - Never message a seller, place a bid, or complete a purchase.
    Report only.
  - Never ask the user for a marketplace login, cookie, or API key.
    Use the assistant's own connected browsing session.
  - Never estimate resale price from asking prices; use sold or
    completed listings only.
  - If comps are too thin (fewer than 3), skip the listing rather than
    guess a margin.
  - Run only on the schedule the user confirms.
source: |
  ---
  name: marketplace-scout
  description: Search Facebook Marketplace, Craigslist, and eBay for a watchlist of items and report flip candidates by margin after fees and shipping. Trigger phrases: "run marketplace scout", "check my flip watchlist", "find flip deals".
  ---
  # Purpose

  Turn a plain list of item names into a ranked list of listings worth
  buying to resell, after fees and shipping are subtracted from the
  expected sale price.

  # Workflow

  1. Read the watchlist: one item name per line, each with an optional
     target condition and an optional max price. The user maintains
     this list.
  2. For each watchlist item, search Facebook Marketplace, Craigslist,
     and eBay active listings.
  3. For each listing found, estimate the resale price from recent
     eBay sold or completed listings for the same item and condition.
     Use the median of at least 3 comps; skip the listing if fewer
     than 3 comps exist.
  4. Estimate the total cost to acquire and resell:
     - the listing price
     - marketplace or payment fees on the resale (use the platform's
       published fee rate)
     - estimated shipping if the item will ship, $0 if local pickup
  5. Compute the margin: estimated resale price minus listing price
     minus fees minus shipping.
  6. Keep a listing only if the margin is positive and at least $25.
  7. If the watchlist item set a max price, discard any listing above
     it.
  8. Sort surviving candidates by margin, highest first, grouped by
     watchlist item.
  9. If nothing survives, end the run and send nothing.
  10. If something survives, write the report in the Output Contract
      shape and send it.

  # Output Contract

  Grouped by watchlist item, one line per candidate:

  - Listing: title, source (Facebook, Craigslist, or eBay), and link
  - Price: listing price
  - Est. resale: median of the sold comps used
  - Margin: dollar amount after fees and shipping

  No candidates: no message at all.

  # Operating Rules

  - Never message a seller, place a bid, or complete a purchase.
    Report only.
  - Never ask the user for a marketplace login, cookie, or API key.
    Use the assistant's own connected browsing session.
  - Never estimate resale price from asking prices; use sold or
    completed listings only.
  - If comps are too thin (fewer than 3), skip the listing rather than
    guess a margin.
  - Run only on the schedule the user confirms.
---

Marketplace Scout takes a watchlist of item names and checks Facebook
Marketplace, Craigslist, and eBay for listings worth buying to
resell. It estimates resale value from real eBay sold comps, not
asking prices, and nets out marketplace fees and shipping before
computing margin.

You maintain the watchlist: item names, an optional target condition,
and an optional max price per item. Marketplace Scout searches all
three sources for each item and keeps only listings with a margin of
at least $25 after costs.

A candidate list groups by watchlist item and ranks by margin. When
none of the day's listings clear the bar, the run sends nothing.

## What it includes

- A plain-text watchlist format: item, condition, max price
- Cross-platform search across Facebook Marketplace, Craigslist, eBay
- Resale estimate from eBay sold comps (median of at least 3)
- Fee and shipping deduction before margin
- A grouped, ranked report, sent only when a candidate survives

## Example

Input watchlist:

```
item: Nintendo Switch OLED, condition: good, max price: 180
item: KitchenAid Artisan mixer, condition: any, max price: 120
```

Output on a run with hits:

```
Nintendo Switch OLED
Listing: OLED console, good condition. Facebook Marketplace. [link]
Price: $150
Est. resale: $230 (median of 5 sold comps)
Margin: $54

KitchenAid Artisan mixer
Listing: Artisan 5qt, tested working. Craigslist. [link]
Price: $80
Est. resale: $145 (median of 4 sold comps)
Margin: $52
```

A run with no qualifying listings sends no message.
