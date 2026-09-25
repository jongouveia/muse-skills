---
title: "Recall Checker"
tagline: "Checks your owned products against CPSC recalls; flags anything dangerous."
category: "shopping"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/recall-checker.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "report-format"]
version: "1.0.0"
date_added: 2026-09-14
safety_notes: |
  Reads public CPSC recall data and the product list you provide.
  Writes the report to you and nothing else. Never files a claim
  on your behalf.
install_prompt: |
  Install the "Recall Checker" skill. Its full source is below.
  Create it at ~/workspace/skills/recall-checker/SKILL.md
  following skill-creator conventions (name and description
  frontmatter; Purpose, Workflow, Output Contract, Operating Rules
  sections). Then confirm it is installed and tell me the trigger
  phrases.

  --- SOURCE ---
  ---
  name: recall-checker
  description: Check products you own against CPSC recalls, what's been recalled, how serious it is, and what the remedy is. Trigger phrases: "check my products for recalls", "is this recalled", "any recalls on my stuff".
  ---
  # Purpose

  Recalls get announced and forgotten. This skill checks the
  products you own against the CPSC database and tells you
  what's been recalled, how serious the hazard is, and what
  the remedy looks like.

  # Workflow

  1. Ask the user for the product list: brand, model, and
     approximate purchase date for the items they care about
     (appliances, kids' gear, power tools, and anything with
     a battery are the high-value categories).
  2. Check each against CPSC recalls (cpsc.gov/Recalls).
  3. For each hit: product, recall date, the hazard, how many
     incidents were reported, and the remedy (refund, repair,
     replacement) with the official link.
  4. Rank by severity: injury-causing hazards first, then
     everything else.
  5. Report in the Output Contract shape.

  # Output Contract

  - Recalled: one block per hit, product, hazard, incidents,
    remedy, official link
  - Clear: the items with no recall found, one line total
  - What to do: the remedy steps for the most serious hit

  # Operating Rules

  - CPSC data only for US products. Say so if the product is
    outside CPSC scope.
  - Severity comes from the recall notice (injuries reported),
    not from speculation.
  - Never file a claim for the user. Link the official remedy
    page and let them file.
  - "No recall found" is not a safety certificate. Say that
    once, plainly.
source: |
  ---
  name: recall-checker
  description: Check products you own against CPSC recalls, what's been recalled, how serious it is, and what the remedy is. Trigger phrases: "check my products for recalls", "is this recalled", "any recalls on my stuff".
  ---
  # Purpose

  Recalls get announced and forgotten. This skill checks the
  products you own against the CPSC database and tells you
  what's been recalled, how serious the hazard is, and what
  the remedy looks like.

  # Workflow

  1. Ask the user for the product list: brand, model, and
     approximate purchase date for the items they care about
     (appliances, kids' gear, power tools, and anything with
     a battery are the high-value categories).
  2. Check each against CPSC recalls (cpsc.gov/Recalls).
  3. For each hit: product, recall date, the hazard, how many
     incidents were reported, and the remedy (refund, repair,
     replacement) with the official link.
  4. Rank by severity: injury-causing hazards first, then
     everything else.
  5. Report in the Output Contract shape.

  # Output Contract

  - Recalled: one block per hit, product, hazard, incidents,
    remedy, official link
  - Clear: the items with no recall found, one line total
  - What to do: the remedy steps for the most serious hit

  # Operating Rules

  - CPSC data only for US products. Say so if the product is
    outside CPSC scope.
  - Severity comes from the recall notice (injuries reported),
    not from speculation.
  - Never file a claim for the user. Link the official remedy
    page and let them file.
  - "No recall found" is not a safety certificate. Say that
    once, plainly.
---

Recall Checker runs your owned products against the CPSC recall
database: what's been recalled, how serious the hazard is, and the
remedy with the official link. Injury-causing hazards go first; the
rest goes in one line.

## What it includes

- CPSC recall check by brand and model
- Hazard severity ranking from the recall notice
- Remedy steps with official links
- Honest "no recall found" limits

## Example

Output:

```
Recalled:
- Brand X space heater (2022), fire hazard, 14 incidents.
  Remedy: full refund. File: cpsc.gov link.
  What to do: unplug it today; the refund takes 10 minutes.

Clear: coffee maker, drill, baby monitor, no recalls found.
(No recall found is not a safety certificate.)
```
