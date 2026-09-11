---
title: "Coupon Stacker"
tagline: "Before checkout, finds stackable codes and the best combo."
category: "shopping"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/coupon-stacker.md"
source_verified: true
origin: "directory"
includes: ["instructions", "workflow", "code-testing"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Reads public coupon listings only. Never checks out, never buys,
  never enters payment details. Never asks for store logins.
install_prompt: |
  Install the "Coupon Stacker" skill. Its full source is below.
  Create it at ~/workspace/skills/coupon-stacker/SKILL.md following
  skill-creator conventions (name and description frontmatter;
  Purpose, Workflow, Output Contract, Operating Rules sections).
  Then confirm it is installed and tell me the trigger phrases.

  --- SOURCE ---
  ---
  name: coupon-stacker
  description: Before an online checkout, find stackable discount codes for the store and report the best working combo. Trigger phrases: "find coupons for this store", "any codes for checkout", "stack coupons for".
  ---
  # Purpose

  Never pay full price out of laziness. Before a checkout, the
  skill hunts down discount codes for the store, figures out which
  ones stack, and reports the best working combination.

  # Workflow

  1. The user names the store (and pastes the cart total if they
     want the math done).
  2. Search public coupon sources for current codes: the store's
     own promotions page, newsletter signup discounts, and
     reputable coupon aggregators. Note each code's terms
     (minimum spend, exclusions, expiry).
  3. Determine stacking: most stores allow one sitewide code plus
     category codes, or a student/military discount on top. Read
     the terms; don't assume.
  4. Report in the Output Contract shape, ranked by total savings.

  # Output Contract

  - Store and cart total (if given)
  - Codes found: one line each with terms and expiry
  - Best combo: the codes to use together and the expected total
    savings
  - Duds: codes that are expired or excluded, marked so the user
    doesn't waste time trying them

  # Operating Rules

  - Public sources only. Never use leaked, stolen, or
    employee-only codes.
  - Never apply codes, check out, or enter payment details. Report
    only : the user pastes the codes themselves.
  - If no working codes exist, say so in one line instead of
    listing dead ones.
  - Never ask for a store login or account credentials.
source: |
  ---
  name: coupon-stacker
  description: Before an online checkout, find stackable discount codes for the store and report the best working combo. Trigger phrases: "find coupons for this store", "any codes for checkout", "stack coupons for".
  ---
  # Purpose

  Never pay full price out of laziness. Before a checkout, the
  skill hunts down discount codes for the store, figures out which
  ones stack, and reports the best working combination.

  # Workflow

  1. The user names the store (and pastes the cart total if they
     want the math done).
  2. Search public coupon sources for current codes: the store's
     own promotions page, newsletter signup discounts, and
     reputable coupon aggregators. Note each code's terms
     (minimum spend, exclusions, expiry).
  3. Determine stacking: most stores allow one sitewide code plus
     category codes, or a student/military discount on top. Read
     the terms; don't assume.
  4. Report in the Output Contract shape, ranked by total savings.

  # Output Contract

  - Store and cart total (if given)
  - Codes found: one line each with terms and expiry
  - Best combo: the codes to use together and the expected total
    savings
  - Duds: codes that are expired or excluded, marked so the user
    doesn't waste time trying them

  # Operating Rules

  - Public sources only. Never use leaked, stolen, or
    employee-only codes.
  - Never apply codes, check out, or enter payment details. Report
    only : the user pastes the codes themselves.
  - If no working codes exist, say so in one line instead of
    listing dead ones.
  - Never ask for a store login or account credentials.
---

Coupon Stacker is the two-minute check before you pay full price. Name
the store, and it hunts down current discount codes from public
sources, reads the fine print on what stacks with what, and reports
the best working combo : with the dead codes marked so you don't
waste time on them.

## What it includes

- Public coupon sweep (store promos, newsletter discounts, aggregators)
- Terms reading: minimums, exclusions, expiries
- Stacking logic for the best combo
- Dud marking so dead codes don't waste your time

## Example

Input: "any codes for Backcountry, cart is $220."

Output:

```
Backcountry , cart $220
Codes: SAVE15 (15% off, no minimum, exp Sep 30), FREESHIP (free
  shipping over $50)
Best combo: SAVE15 + FREESHIP → saves ~$33 + shipping
Duds: WELCOME20 (new accounts only, expired Aug 1)
```
