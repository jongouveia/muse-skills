---
title: "Auction Bid Calculator"
tagline: "Sets a hard bid ceiling for an auction lot after fees, tax, shipping, and your margin."
category: "deal-hunting"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/auction-bid-calculator.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "calculator"]
version: "1.0.0"
date_added: 2026-10-06
safety_notes: |
  Math and planning only. Never places a bid, never accesses an
  auction account, never recommends bidding above the computed
  ceiling. Buyer premium, tax rate, and shipping are always taken
  from the auction's terms or from values the user confirms; the
  skill never invents them.
install_prompt: |
  Install the "Auction Bid Calculator" skill. Its full source is
  below. Create it at ~/workspace/skills/auction-bid-calculator/SKILL.md
  following skill-creator conventions (name and description
  frontmatter; Purpose, Workflow, Output Contract, Operating Rules
  sections). Then confirm it is installed and tell me the trigger
  phrases.

  --- SOURCE ---
  ---
  name: auction-bid-calculator
  description: Computes your maximum bid for an estate or online auction lot, accounting for buyer premium, sales tax, shipping, and your target margin. Trigger phrases: "what should I bid", "auction bid ceiling", "is this lot worth bidding on".
  ---
  # Purpose

  Set a hard ceiling for an auction lot before the bidding starts,
  so the fees and taxes do not turn a win into a loss.

  # Workflow

  1. Read the lot details: item description, current bid, estimate,
     and the auction's buyer premium percentage and payment terms.
  2. Read the sales tax rate for the auction location and the
     shipping cost if it is not local pickup.
  3. Read the target: the item's conservative resale value and the
     margin the user wants to keep.
  4. Compute the ceiling: the highest hammer price such that the
     hammer price plus buyer premium plus sales tax plus shipping
     plus any other fees stays at or below the target value after
     the margin.
  5. Show the math line by line, then the ceiling as one bold
     number.
  6. Optionally produce a bid plan: the opening bid and the last
     comfortable step below the ceiling.

  # Output Contract

  - One-line verdict: the maximum hammer price to bid, plus the
    all-in cost at that price.
  - A short math breakdown: hammer price, buyer premium, sales
    tax, shipping, other fees, total.
  - Target resale value and the dollar margin the plan protects.
  - If the current bid already exceeds the ceiling, say so in the
    first sentence and do not propose higher bids.

  # Operating Rules

  - Never guess the buyer premium, tax rate, or shipping cost; ask
    for each value if the user has not supplied it, and mark any
    assumption plainly when the user approves a default.
  - Never recommend bidding above the computed ceiling.
  - Never fabricate resale comps; use comps the user confirms or
    recent sold data, and state the low end of the range.
  - Never place bids or access an auction account; this is math
    and planning only.
source: |
  ---
  name: auction-bid-calculator
  description: Computes your maximum bid for an estate or online auction lot, accounting for buyer premium, sales tax, shipping, and your target margin. Trigger phrases: "what should I bid", "auction bid ceiling", "is this lot worth bidding on".
  ---
  # Purpose

  Set a hard ceiling for an auction lot before the bidding starts,
  so the fees and taxes do not turn a win into a loss.

  # Workflow

  1. Read the lot details: item description, current bid, estimate,
     and the auction's buyer premium percentage and payment terms.
  2. Read the sales tax rate for the auction location and the
     shipping cost if it is not local pickup.
  3. Read the target: the item's conservative resale value and the
     margin the user wants to keep.
  4. Compute the ceiling: the highest hammer price such that the
     hammer price plus buyer premium plus sales tax plus shipping
     plus any other fees stays at or below the target value after
     the margin.
  5. Show the math line by line, then the ceiling as one bold
     number.
  6. Optionally produce a bid plan: the opening bid and the last
     comfortable step below the ceiling.

  # Output Contract

  - One-line verdict: the maximum hammer price to bid, plus the
    all-in cost at that price.
  - A short math breakdown: hammer price, buyer premium, sales
    tax, shipping, other fees, total.
  - Target resale value and the dollar margin the plan protects.
  - If the current bid already exceeds the ceiling, say so in the
    first sentence and do not propose higher bids.

  # Operating Rules

  - Never guess the buyer premium, tax rate, or shipping cost; ask
    for each value if the user has not supplied it, and mark any
    assumption plainly when the user approves a default.
  - Never recommend bidding above the computed ceiling.
  - Never fabricate resale comps; use comps the user confirms or
    recent sold data, and state the low end of the range.
  - Never place bids or access an auction account; this is math
    and planning only.
---

Auction houses make their money on the fine print. A lot that
hammers at $200 with an 18 percent buyer premium, state sales tax,
and a $40 shipping charge actually costs you well over $280, and
that is before you resell it. The Auction Bid Calculator works
backwards from the number that matters: the conservative resale
value minus the profit you want to keep. You give it the buyer
premium, the tax rate, the shipping cost, and your target margin,
and it returns one hard ceiling, the all-in cost at that price,
and a line-by-line breakdown so you can check the math. If the
current bid is already above your ceiling, it tells you that up
front and stops, so auction fever never turns a smart flip into a
loss.

## What it includes

- A calculator that turns lot details, fees, tax, and shipping
  into a single maximum hammer price.
- Line-by-line cost breakdowns you can verify against the
  auction's published terms.
- A margin guard: the ceiling protects the dollar profit you set,
  and the skill never recommends bidding past it.
- An optional bid plan with an opening bid and the last
  comfortable step before the ceiling.
- A first-sentence stop signal when the current bid already
  beats your ceiling.

## Example

A vintage receiver lot sits at $150 with an 18 percent buyer
premium, 6.25 percent sales tax, and $35 shipping. Conservative
sold comps put the receiver at $400, and you want to keep at
least $100. The skill works backwards: $300 minus $35 shipping,
minus tax and premium on the hammer price, lands a ceiling of
$225. Bidding at $225 leaves you $100 ahead after fees; one more
bid wipes the margin, so you stop there.
