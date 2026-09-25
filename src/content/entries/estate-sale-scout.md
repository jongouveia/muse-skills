---
title: "Estate Sale Scout"
tagline: "Thursday-night scan of weekend estate sales, ranked by your categories."
category: "deal-hunting"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/estate-sale-scout.md"
source_verified: true
origin: "directory"
includes: ["instructions", "workflow", "report-format"]
version: "1.0.0"
date_added: 2026-09-10
safety_notes: |
  Reads public estate-sale listings only, on the schedule you set.
  Writes a ranked shortlist to you and nothing else. Never contacts
  organizers or buys anything.
install_prompt: |
  Install the "Estate Sale Scout" skill. Its full source is below.
  Create it at ~/workspace/skills/estate-sale-scout/SKILL.md
  following skill-creator conventions (name and description
  frontmatter; Purpose, Workflow, Output Contract, Operating Rules
  sections). Then confirm it is installed and tell me the trigger
  phrases.

  --- SOURCE ---
  ---
  name: estate-sale-scout
  description: Scan weekend estate-sale listings Thursday night and rank them by your collecting categories, so Friday morning you know where to go. Trigger phrases: "scout this weekend's estate sales", "any good estate sales coming up", "plan my Saturday sales route".
  ---
  # Purpose

  Estate sales reward the early and the informed. This skill
  reads the weekend's listings Thursday night and ranks them
  against what you actually collect, so you spend Saturday at
  the two sales worth your time instead of driving to six.

  # Workflow

  1. Ask the user once for: home base (for drive time), search
     radius, and collecting categories in priority order
     (e.g. vinyl, cameras, tools, mid-century furniture).
  2. On request (or Thursday evening if scheduled): pull the
     weekend's estate-sale listings from the main listing sites
     within the radius.
  3. Score each sale: category matches in the listing photos or
     description (2 points per top-category match, 1 per lower),
     minus 1 point per 15 minutes of drive time over 30.
  4. Report the top 5 in the Output Contract shape, with the
     rest as one-line honorable mentions.

  # Output Contract

  - Weekend shortlist: top 5 sales, ranked: address, day/hours,
    why it scored (which categories matched), drive time
  - Honorable mentions: one line each for the rest
  - Suggested route: the order to hit the top picks on Saturday
    morning
  - Slow weekends: "Nothing in your categories this week."

  # Operating Rules

  - Public listings only. Never contact organizers or RSVP.
  - Scores come from the listing text and photos, not from
    assumptions. If a listing is vague, say so instead of
    inflating it.
  - Drive time is an estimate. Name the source (maps); never present it as exact.
  - One scan per request or per scheduled Thursday run. No
    drip-feed alerts through the weekend.
source: |
  ---
  name: estate-sale-scout
  description: Scan weekend estate-sale listings Thursday night and rank them by your collecting categories, so Friday morning you know where to go. Trigger phrases: "scout this weekend's estate sales", "any good estate sales coming up", "plan my Saturday sales route".
  ---
  # Purpose

  Estate sales reward the early and the informed. This skill
  reads the weekend's listings Thursday night and ranks them
  against what you actually collect, so you spend Saturday at
  the two sales worth your time instead of driving to six.

  # Workflow

  1. Ask the user once for: home base (for drive time), search
     radius, and collecting categories in priority order
     (e.g. vinyl, cameras, tools, mid-century furniture).
  2. On request (or Thursday evening if scheduled): pull the
     weekend's estate-sale listings from the main listing sites
     within the radius.
  3. Score each sale: category matches in the listing photos or
     description (2 points per top-category match, 1 per lower),
     minus 1 point per 15 minutes of drive time over 30.
  4. Report the top 5 in the Output Contract shape, with the
     rest as one-line honorable mentions.

  # Output Contract

  - Weekend shortlist: top 5 sales, ranked: address, day/hours,
    why it scored (which categories matched), drive time
  - Honorable mentions: one line each for the rest
  - Suggested route: the order to hit the top picks on Saturday
    morning
  - Slow weekends: "Nothing in your categories this week."

  # Operating Rules

  - Public listings only. Never contact organizers or RSVP.
  - Scores come from the listing text and photos, not from
    assumptions. If a listing is vague, say so instead of
    inflating it.
  - Drive time is an estimate. Name the source (maps); never present it as exact.
  - One scan per request or per scheduled Thursday run. No
    drip-feed alerts through the weekend.
---

Estate Sale Scout reads the weekend's estate-sale listings Thursday
night and ranks them against your collecting categories: so Friday
morning you get a shortlist of the sales worth your Saturday, in
route order, instead of driving to six and finding nothing.

## What it includes

- Weekend estate-sale scan within your radius
- Category-match scoring from listing text and photos
- Top-5 shortlist with drive times and a Saturday route
- Honest "nothing this week" on slow weekends

## Example

Output:

```
Weekend shortlist (Sat Sep 12)

1. 42 Elm St, Tewksbury, Sat 9-3
   Vinyl + cameras in photos. 18 min drive.
2. 9 Birch Ave, Andover, Sat 8-2
   Tools and stereo gear listed. 6 min drive.

Suggested route: Birch Ave at 8, Elm St by 9:30.
Honorable mentions: 3 more, none in your categories.
```
