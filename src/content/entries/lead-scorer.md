---
title: "Lead Scorer"
tagline: "Scores a list of public leads against your ideal customer profile and ranks them."
category: "marketing"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/lead-scorer.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "scoring-rubric"]
version: "1.0.0"
date_added: 2026-10-10
safety_notes: |
  Scores only public lead data and profiles you provide; it never
  scrapes private accounts or bought data. Scores are judgment
  calls, not verdicts, and every lead keeps its evidence trail.
  It drafts no outreach and contacts nobody; a human sends every
  message.
install_prompt: |
  Install the "Lead Scorer" skill. Its full source is below. Create it
  at ~/workspace/skills/lead-scorer/SKILL.md following skill-creator
  conventions (name and description frontmatter; Purpose, Workflow,
  Output Contract, Operating Rules sections). Then confirm it is
  installed and tell me the trigger phrases.

  --- SOURCE ---
  ---
  name: lead-scorer
  description: Score public leads against your ideal customer profile and rank them. Trigger phrases: "score these leads", "rank my leads", "which leads first".
  ---
  # Purpose

  Stop working your lead list in alphabetical order. Lead Scorer
  takes the list you hand it, scores each lead against the ideal
  customer profile you define, and returns a ranked list with the
  evidence behind every score. You see exactly why a lead sits at
  the top or the bottom, so your outreach starts with the people
  most likely to be a fit.

  # Workflow

  1. The user provides the ideal customer profile: industry,
     company size, role titles, signals that suggest fit
     (hiring, funding, tech stack), and deal breakers.
  2. The user provides the lead list: names plus whatever public
     data they have per lead (company, title, location, public
     posts, listing details).
  3. Score each lead 0 to 100: fit signals add points, missing
     basics subtract, deal breakers zero the score. Record the
     evidence for every point.
  4. Rank the list high to low. Group obvious tiers: reach out
     now, nurture later, skip.
  5. Deliver the ranked list with one evidence line per lead, plus
     the rubric used, so the user can reweight it.

  # Output Contract

  Each run delivers:

  - The ranked lead list with 0-100 scores
  - One evidence line per lead showing why it scored that way
  - Three tiers: reach out now, nurture later, skip
  - The rubric, written out, so scoring stays repeatable

  A score is a ranking aid, not a verdict. The user reviews the
  evidence before acting on it.

  # Operating Rules

  - Score only public data and what the user provides. Never
    scrape private accounts, and never use bought or breached
    data.
  - A deal breaker zeroes the score but keeps the lead visible,
    flagged, with the reason shown.
  - Never inflate a score to be encouraging. A weak list gets
    weak scores, honestly.
  - The rubric is fixed for the whole list. Never reweight
    mid-list to favor one lead.
  - Draft no outreach and contact nobody. Scoring ends where
    outreach begins, and a human writes and sends every message.
  - Keep the user's lead list private to their workspace.
source: |
  ---
  name: lead-scorer
  description: Score public leads against your ideal customer profile and rank them. Trigger phrases: "score these leads", "rank my leads", "which leads first".
  ---
  # Purpose

  Stop working your lead list in alphabetical order. Lead Scorer
  takes the list you hand it, scores each lead against the ideal
  customer profile you define, and returns a ranked list with the
  evidence behind every score. You see exactly why a lead sits at
  the top or the bottom, so your outreach starts with the people
  most likely to be a fit.

  # Workflow

  1. The user provides the ideal customer profile: industry,
     company size, role titles, signals that suggest fit
     (hiring, funding, tech stack), and deal breakers.
  2. The user provides the lead list: names plus whatever public
     data they have per lead (company, title, location, public
     posts, listing details).
  3. Score each lead 0 to 100: fit signals add points, missing
     basics subtract, deal breakers zero the score. Record the
     evidence for every point.
  4. Rank the list high to low. Group obvious tiers: reach out
     now, nurture later, skip.
  5. Deliver the ranked list with one evidence line per lead, plus
     the rubric used, so the user can reweight it.

  # Output Contract

  Each run delivers:

  - The ranked lead list with 0-100 scores
  - One evidence line per lead showing why it scored that way
  - Three tiers: reach out now, nurture later, skip
  - The rubric, written out, so scoring stays repeatable

  A score is a ranking aid, not a verdict. The user reviews the
  evidence before acting on it.

  # Operating Rules

  - Score only public data and what the user provides. Never
    scrape private accounts, and never use bought or breached
    data.
  - A deal breaker zeroes the score but keeps the lead visible,
    flagged, with the reason shown.
  - Never inflate a score to be encouraging. A weak list gets
    weak scores, honestly.
  - The rubric is fixed for the whole list. Never reweight
    mid-list to favor one lead.
  - Draft no outreach and contact nobody. Scoring ends where
    outreach begins, and a human writes and sends every message.
  - Keep the user's lead list private to their workspace.
---

Lead Scorer answers the question "who do I contact first?" with
evidence instead of gut feel. You define your ideal customer
profile: industry, company size, the roles you sell to, the
signals that suggest fit like hiring or funding, and the deal
breakers that rule someone out. Then you hand it your list, and
it scores every lead 0 to 100 against that profile.

The output is a ranked list with one evidence line per lead, so
the reasoning is visible: why this one is an 87, why that one is
a 24. Leads sort into three tiers, reach out now, nurture later,
and skip, and the full rubric is written out so the scoring stays
repeatable and you can adjust the weights for next time.

It scores only public data and what you provide, never scrapes
private accounts, and never reaches out on its own. Scores are a
ranking aid, not a verdict; you review the evidence before you
write a single message.

## What it includes

- An ideal customer profile intake: industry, size, roles, signals, deal breakers
- A 0 to 100 scoring rubric, fixed for the whole list
- A ranked list with one evidence line per lead
- Three tiers: reach out now, nurture later, skip
- The rubric written out for repeat runs

## Example

Input: profile: "independent record stores, 1-10 staff, owner or
buyer role, sells online, deal breaker: major-chain franchise."
List: 8 stores with public profiles.

Output:

```
Rubric (100 points, fixed for this list):
  Independent record store: 20
  Staff: 1-3 = 15, 4-6 = 10, 7-10 = 5
  Role: owner = 20, buyer = 15, no role named = -10
  Sells online: active webstore = 30, marketplace listing only = 15, none = 0
  Public socials: active = 15, quiet = 5, none = 0
  Deal breaker (major-chain franchise): score set to 0
Tiers: reach out now = 75-100. Nurture later = 40-74. Skip = below 40 or deal breaker.

Rank 1. Groove Yard Records, Maya R. (owner) - 95
  Evidence: independent 20 + 4 staff 10 + owner 20 + active webstore 30 + posts about reissue drops 15.
Rank 2. Static Bloom Records, D. Chen (buyer) - 80
  Evidence: independent 20 + 6 staff 10 + buyer 15 + webstore 30 + quiet socials 5.
Rank 3. Corner Crate Records, T. Alvarez (buyer) - 75
  Evidence: independent 20 + 7 staff 5 + buyer 15 + webstore 30 + quiet socials 5.
Rank 4. Second Spin Records, K. Bell (owner) - 70
  Evidence: independent 20 + 2 staff 15 + owner 20 + marketplace listing only 15 + no socials 0.
Rank 5. Lowlight Records, P. Nguyen (buyer) - 65
  Evidence: independent 20 + 5 staff 10 + buyer 15 + marketplace listing only 15 + quiet socials 5.
Rank 6. Pressed & Found, S. Okafor (owner) - 60
  Evidence: independent 20 + 9 staff 5 + owner 20 + no online sales 0 + active socials 15.
Rank 7. Dust Jacket Records, no role named - 25
  Evidence: independent 20 + 3 staff 15 + no role named -10 + no online sales 0 + no socials 0. Skipped.
Rank 8. Vinyl Warehouse chain location - 0
  Evidence: deal breaker, franchise location. Skipped.

Reach out now: 1-3 (95, 80, 75). Nurture later: 4-6 (70, 65, 60). Skip: 7-8 (25, 0).
```
