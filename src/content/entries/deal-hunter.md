---
title: "Deal Hunter"
tagline: "Watches new private-seller listings and flags the mispriced ones."
category: "deal-hunting"
type: "skill"
author: "Muse community"
source_url: "https://github.com/muse-skills/directory"
source_verified: false
includes: ["instructions", "workflow", "schedule"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Reads public marketplace listings only, on the schedule you set.
  Writes a report to you and nothing else. Never contacts a seller,
  never bids, never checks out. Never asks for a marketplace login;
  it uses the assistant's own connected browsing session.
install_prompt: |
  Install the "Deal Hunter" skill. Its full source is below. Create it
  at ~/workspace/skills/deal-hunter/SKILL.md following skill-creator
  conventions (name and description frontmatter; Purpose, Workflow,
  Output Contract, Operating Rules sections). Then confirm it is
  installed and tell me the trigger phrases.

  --- SOURCE ---
  ---
  name: deal-hunter
  description: Scan marketplace listings for brand-new, private-seller items priced well below conservative resale value. Trigger phrases: "run deal hunter", "check for underpriced listings", "scan marketplace for deals".
  ---
  # Purpose

  Find listings that are mispriced by a wide margin, not merely cheap.
  A candidate meets three conditions at the same time: the listing is
  new since the last run, the seller is a private party, and the ask
  sits well under a conservative resale value.

  # Workflow

  1. Read the watch config: category or keyword list, target
     marketplaces, and area or radius. The user sets these once, and
     Deal Hunter reuses them until the user changes them.
  2. Pull listings posted since the last successful run. Discard any
     listing already seen in a prior run.
  3. Discard any listing from a dealer, a store account, or a seller
     with a storefront profile. Keep private-party listings only.
  4. For each remaining listing, estimate a conservative sold value.
     Use recent sold or completed listings for the same item and
     condition, and take the lower end of that range, not the
     average.
  5. Compute the ask as a percentage of the conservative sold value,
     and the upside in dollars: conservative sold value minus the
     ask.
  6. Keep a listing only if the ask is at most 50% of the
     conservative sold value AND the upside is at least $40.
  7. Sort the surviving candidates by upside, highest first.
  8. If no candidate survives, end the run. Send nothing.
  9. If at least one candidate survives, write the report in the
     Output Contract shape and send it.
  10. Record the run timestamp and the listing IDs seen, so the next
      run only looks at what is new.

  # Output Contract

  A short list, one line per candidate, in this order:

  - Listing: title and link
  - Ask: dollar amount
  - Conservative comp: dollar amount and how it was set (for example,
    "lowest of 3 sold comps")
  - Upside: dollar amount

  No candidates: no message at all. This is a quiet job by design.

  # Operating Rules

  - Never message, offer on, or contact a seller. Report only.
  - Never place a bid, a hold, or a purchase.
  - Never ask the user for a marketplace login, cookie, or API key.
    Use the assistant's own connected browsing session.
  - Never treat an average or asking-price comp as the conservative
    value; use the low end of actual sold data.
  - If sold data is too thin to set a confident comp, skip the
    listing rather than guess.
  - Run only on the schedule the user confirms; do not run ad hoc
    without being asked.
source: |
  ---
  name: deal-hunter
  description: Scan marketplace listings for brand-new, private-seller items priced well below conservative resale value. Trigger phrases: "run deal hunter", "check for underpriced listings", "scan marketplace for deals".
  ---
  # Purpose

  Find listings that are mispriced by a wide margin, not merely cheap.
  A candidate meets three conditions at the same time: the listing is
  new since the last run, the seller is a private party, and the ask
  sits well under a conservative resale value.

  # Workflow

  1. Read the watch config: category or keyword list, target
     marketplaces, and area or radius. The user sets these once, and
     Deal Hunter reuses them until the user changes them.
  2. Pull listings posted since the last successful run. Discard any
     listing already seen in a prior run.
  3. Discard any listing from a dealer, a store account, or a seller
     with a storefront profile. Keep private-party listings only.
  4. For each remaining listing, estimate a conservative sold value.
     Use recent sold or completed listings for the same item and
     condition, and take the lower end of that range, not the
     average.
  5. Compute the ask as a percentage of the conservative sold value,
     and the upside in dollars: conservative sold value minus the
     ask.
  6. Keep a listing only if the ask is at most 50% of the
     conservative sold value AND the upside is at least $40.
  7. Sort the surviving candidates by upside, highest first.
  8. If no candidate survives, end the run. Send nothing.
  9. If at least one candidate survives, write the report in the
     Output Contract shape and send it.
  10. Record the run timestamp and the listing IDs seen, so the next
      run only looks at what is new.

  # Output Contract

  A short list, one line per candidate, in this order:

  - Listing: title and link
  - Ask: dollar amount
  - Conservative comp: dollar amount and how it was set (for example,
    "lowest of 3 sold comps")
  - Upside: dollar amount

  No candidates: no message at all. This is a quiet job by design.

  # Operating Rules

  - Never message, offer on, or contact a seller. Report only.
  - Never place a bid, a hold, or a purchase.
  - Never ask the user for a marketplace login, cookie, or API key.
    Use the assistant's own connected browsing session.
  - Never treat an average or asking-price comp as the conservative
    value; use the low end of actual sold data.
  - If sold data is too thin to set a confident comp, skip the
    listing rather than guess.
  - Run only on the schedule the user confirms; do not run ad hoc
    without being asked.
---

Deal Hunter watches marketplace listings for one narrow signal: a
brand-new, private-seller listing priced at least half off its
conservative resale value, with at least $40 of upside. It ignores
everything else, including listings from dealers or store accounts.

It runs on a schedule you set, checks only what posted since the last
run, and estimates a conservative resale value from real sold comps,
never from the average asking price. A listing survives the filter
only if both the price bar and the dollar-upside bar clear.

When nothing clears the bar, the run stays quiet. You get a message
only when there's a real candidate to look at, so a scheduled check
never turns into noise.

## What it includes

- Watch config for category, keywords, marketplaces, and area
- New-listing and private-seller filtering
- Conservative comp estimation from sold data
- The 50%-of-value and $40-upside filter
- A short report format, sent only when a candidate survives

## Example

Input: watch config for "road bike, private seller, 20 mile radius",
scheduled to run every morning at 8am.

Output, on a morning with one hit:

```
Listing: 2019 Trek Domane SL5, 56cm. [link]
Ask: $650
Conservative comp: $1,400 (lowest of 4 sold comps, same size/condition)
Upside: $750
```

On a morning with no hits: no message.
