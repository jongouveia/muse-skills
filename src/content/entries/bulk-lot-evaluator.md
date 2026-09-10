---
title: "Bulk Lot Evaluator"
tagline: "Point it at a lot listing; get a max bid and a walk-away price."
category: "deal-hunting"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/bulk-lot-evaluator.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "valuation-method"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Reads the listing you point it at and public sold data. Writes
  only the evaluation back to you. Never contacts the seller, never
  bids, never negotiates. Never needs a marketplace login.
install_prompt: |
  Install the "Bulk Lot Evaluator" skill. Its full source is below.
  Create it at ~/workspace/skills/bulk-lot-evaluator/SKILL.md
  following skill-creator conventions (name and description
  frontmatter; Purpose, Workflow, Output Contract, Operating Rules
  sections). Then confirm it is installed and tell me the trigger
  phrases.

  --- SOURCE ---
  ---
  name: bulk-lot-evaluator
  description: Evaluate a bulk lot listing (records, games, cameras, tools) from its photos and description: per-item value estimate, a max bid, and a walk-away price. Trigger phrases: "evaluate this lot", "what's this lot worth", "should I buy this lot".
  ---
  # Purpose

  Decide fast whether a bulk lot is worth buying, and at what price.
  Built for listings where the seller doesn't know what they have:
  one photo, a vague description, a single asking price.

  # Workflow

  1. Read the listing: photos, description, asking price, location.
  2. Identify every item you can see or reasonably infer. Group
     them: clearly visible, partially visible, described-but-unseen.
  3. For each clearly visible item of value, estimate a conservative
     resale value from recent sold comps (lowest of matches, never
     the average).
  4. For partially visible or unseen items, assign $0 in the base
     case and note the upside only as speculation.
  5. Add the conservative values. Apply the lot discount: multiply
     by 0.6 (you will not sell everything, and condition is
     uncertain).
  6. Set the max bid at 50% of the discounted total. If the asking
     price exceeds the max bid, the call is "negotiate to $X" when
     the gap is small and "walk away" when it is not.
  7. Report in the Output Contract shape.

  # Output Contract

  - Lot: listing title and link
  - Ask: dollar amount
  - Visible value: itemized conservative values, one line each
  - Discounted total: the 0.6-adjusted sum
  - Max bid: dollar amount
  - Walk-away: "buy" / "negotiate to $X" / "walk away", with one line
    of reasoning
  - Speculative upside: items that could add value but were not
    counted

  # Operating Rules

  - Never count value for items you cannot see or verify. Unseen =
    $0 in the base case.
  - Never use asking prices as comps; sold data only, low end of
    the range.
  - If the photos are too poor to identify anything of value, say so
    and stop.
  - Report only. Never contact the seller, bid, or negotiate on the
    user's behalf.
source: |
  ---
  name: bulk-lot-evaluator
  description: Evaluate a bulk lot listing (records, games, cameras, tools) from its photos and description: per-item value estimate, a max bid, and a walk-away price. Trigger phrases: "evaluate this lot", "what's this lot worth", "should I buy this lot".
  ---
  # Purpose

  Decide fast whether a bulk lot is worth buying, and at what price.
  Built for listings where the seller doesn't know what they have:
  one photo, a vague description, a single asking price.

  # Workflow

  1. Read the listing: photos, description, asking price, location.
  2. Identify every item you can see or reasonably infer. Group
     them: clearly visible, partially visible, described-but-unseen.
  3. For each clearly visible item of value, estimate a conservative
     resale value from recent sold comps (lowest of matches, never
     the average).
  4. For partially visible or unseen items, assign $0 in the base
     case and note the upside only as speculation.
  5. Add the conservative values. Apply the lot discount: multiply
     by 0.6 (you will not sell everything, and condition is
     uncertain).
  6. Set the max bid at 50% of the discounted total. If the asking
     price exceeds the max bid, the call is "negotiate to $X" when
     the gap is small and "walk away" when it is not.
  7. Report in the Output Contract shape.

  # Output Contract

  - Lot: listing title and link
  - Ask: dollar amount
  - Visible value: itemized conservative values, one line each
  - Discounted total: the 0.6-adjusted sum
  - Max bid: dollar amount
  - Walk-away: "buy" / "negotiate to $X" / "walk away", with one line
    of reasoning
  - Speculative upside: items that could add value but were not
    counted

  # Operating Rules

  - Never count value for items you cannot see or verify. Unseen =
    $0 in the base case.
  - Never use asking prices as comps; sold data only, low end of
    the range.
  - If the photos are too poor to identify anything of value, say so
    and stop.
  - Report only. Never contact the seller, bid, or negotiate on the
    user's behalf.
---

Bulk Lot Evaluator is for the "200 records, $150, must take all"
listings. It reads the photos and description, values what it can
actually see from sold comps, discounts the total for everything it
can't verify, and hands you a max bid and a walk-away price.

The core discipline: unseen items count as $0. Only what is visible
gets valued.

## What it includes

- Photo-based item identification (visible / partial / unseen)
- Conservative per-item comps from sold data
- The 0.6 lot discount for unsellable and uncertain items
- Max bid at 50% of the discounted total, plus a walk-away call

## Example

Input: a listing photo showing roughly 200 LPs, asking $150.

Output:

```
Lot: "200 vinyl records, rock lot" [link]
Ask: $150
Visible value: ~$310 (12 identifiable titles at conservative comps)
Discounted total: $186 (0.6 lot discount)
Max bid: $93
Walk-away: negotiate to $93; walk away above $120
Speculative upside: two box sets partially visible, not counted
```
