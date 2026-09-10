---
title: "Record Fair Battle Plan"
tagline: "Your wantlist plus your budget becomes a one-page fair plan with max prices."
category: "creative"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/record-fair-battle-plan.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "wantlist"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Reads your wantlist and public sold data. Writes only the plan
  back to you. Never buys, bids, or contacts a vendor. Never needs
  a marketplace login.
install_prompt: |
  Install the "Record Fair Battle Plan" skill. Its full source is
  below. Create it at ~/workspace/skills/record-fair-battle-plan/SKILL.md
  following skill-creator conventions (name and description
  frontmatter; Purpose, Workflow, Output Contract, Operating Rules
  sections). Then confirm it is installed and tell me the trigger
  phrases.

  --- SOURCE ---
  ---
  name: record-fair-battle-plan
  description: Turn a wantlist, a budget, and a fair's vendor list into a one-page battle plan: priority targets with max prices so you never overpay. Trigger phrases: "plan my fair", "record fair plan", "prep for the fair".
  ---
  # Purpose

  Walk into a record fair with a plan instead of a vague hope. The
  skill takes the wantlist, the budget, and whatever is known about
  the fair, and produces a one-page sheet: what to hunt, what to
  pay, what to skip.

  # Workflow

  1. Read the user's wantlist (artist, title, pressing details where
     known) and the total budget for the fair.
  2. For each wantlist item, look up recent sold prices for the
     matching pressing. Set the max price at the low end of recent
     solds, minus 10% (fair haggling margin).
  3. Rank the wants: top targets (rarely seen for sale, fairly
     priced max), opportunistic (buy only if under max), skip-at-fair
     (cheaper online: say so).
  4. If a vendor list is available, note which vendors are most
     likely to carry the top targets (genre specialists first).
  5. Divide the budget across the top targets; show the running
     total so the user sees what fits.
  6. Write the one-page plan in the Output Contract shape.

  # Output Contract

  A single page:
  - **Top targets:** up to 5, each with max price and one line on
    why
  - **Opportunistic:** the rest of the wantlist with max prices
  - **Skip at the fair:** items cheaper or easier to find online,
    with the online price noted
  - **Budget:** total budget, allocated across top targets,
    remainder shown

  # Operating Rules

  - Max prices come from sold data, low end of the range, never
    asking prices.
  - Never inflate a max price because the user "really wants it".
    The number is the number.
  - If sold data is too thin for an item, mark it "no comp: set
    your own ceiling" rather than guessing.
  - The plan is advice only. It never buys, bids, or contacts a
    vendor.
source: |
  ---
  name: record-fair-battle-plan
  description: Turn a wantlist, a budget, and a fair's vendor list into a one-page battle plan: priority targets with max prices so you never overpay. Trigger phrases: "plan my fair", "record fair plan", "prep for the fair".
  ---
  # Purpose

  Walk into a record fair with a plan instead of a vague hope. The
  skill takes the wantlist, the budget, and whatever is known about
  the fair, and produces a one-page sheet: what to hunt, what to
  pay, what to skip.

  # Workflow

  1. Read the user's wantlist (artist, title, pressing details where
     known) and the total budget for the fair.
  2. For each wantlist item, look up recent sold prices for the
     matching pressing. Set the max price at the low end of recent
     solds, minus 10% (fair haggling margin).
  3. Rank the wants: top targets (rarely seen for sale, fairly
     priced max), opportunistic (buy only if under max), skip-at-fair
     (cheaper online: say so).
  4. If a vendor list is available, note which vendors are most
     likely to carry the top targets (genre specialists first).
  5. Divide the budget across the top targets; show the running
     total so the user sees what fits.
  6. Write the one-page plan in the Output Contract shape.

  # Output Contract

  A single page:
  - **Top targets:** up to 5, each with max price and one line on
    why
  - **Opportunistic:** the rest of the wantlist with max prices
  - **Skip at the fair:** items cheaper or easier to find online,
    with the online price noted
  - **Budget:** total budget, allocated across top targets,
    remainder shown

  # Operating Rules

  - Max prices come from sold data, low end of the range, never
    asking prices.
  - Never inflate a max price because the user "really wants it".
    The number is the number.
  - If sold data is too thin for an item, mark it "no comp: set
    your own ceiling" rather than guessing.
  - The plan is advice only. It never buys, bids, or contacts a
    vendor.
---

Record Fair Battle Plan turns your wantlist and budget into a
one-page sheet before you walk in: priority targets with max prices
set from sold data (minus haggling margin), opportunistic buys, and
the items to skip because they're cheaper online. The budget gets
allocated across targets so you can see what fits.

## What it includes

- Wantlist intake with pressing details
- Max prices from sold data, low end minus 10%
- Target tiers: hunt / opportunistic / skip-at-fair
- Budget allocation with a running total

## Example

Output (abridged):

```
Top targets (max prices)
- Fleetwood Mac – Rumours, US pressing, VG+: max $28
- Miles Davis – Kind of Blue, stereo reissue: max $35
Opportunistic: the remaining 14 wants with max prices attached.
Skip at the fair: 3 titles cheaper on Discogs right now.
Budget: $150, targets total $121, remainder $29
```
