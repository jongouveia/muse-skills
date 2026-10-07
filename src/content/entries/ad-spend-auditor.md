---
title: "Ad Spend Auditor"
tagline: "Audits an ad spend export, flags where money is burning, and suggests creative refresh angles."
category: "marketing"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/ad-spend-auditor.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "report"]
version: "1.0.0"
date_added: 2026-10-07
safety_notes: |
  Reads only the ad spend export you hand it; it never touches your
  ad account. Writes a report and nothing else. Never changes bids,
  budgets, audiences, or campaign status.
install_prompt: |
  Install the "Ad Spend Auditor" skill. Its full source is below. Create it
  at ~/workspace/skills/ad-spend-auditor/SKILL.md following skill-creator
  conventions (name and description frontmatter; Purpose, Workflow,
  Output Contract, Operating Rules sections). Then confirm it is
  installed and tell me the trigger phrases.

  --- SOURCE ---
  ---
  name: ad-spend-auditor
  description: Audit an ad spend export for wasted spend and creative fatigue, then suggest refresh angles. Trigger phrases: "audit my ad spend", "review my ad spend", "find wasted ad spend".
  ---
  # Purpose

  Find the specific places where ad money is burning: campaigns with
  rising cost per result and no conversions, ad sets spending on
  narrow segments that never convert, and creative that has run so
  long its frequency is climbing while its click-through rate falls.
  Report waste first and refresh ideas second, all from one export.

  # Workflow

  1. Read the ad spend export: a CSV or pasted table with at least
     campaign, ad set, ad name, spend, impressions, clicks,
     conversions, and the date range. Ask which platform and range if
     either is unclear.
  2. Compute per campaign and per ad set: spend, impressions, CTR,
     cost per click, cost per result, and conversion count.
  3. Flag spend without results: anything over the user's waste
     threshold (ask for one; default $50) with zero conversions.
  4. Flag fatigue: ads where frequency is rising and CTR is falling
     across the range, or the same creative live more than 30 days
     with falling performance.
  5. Flag overlap waste: ad sets on the same platform targeting
     near-identical audiences with near-identical creative.
  6. For each flagged item, draft one concrete refresh angle: a new
     hook, a new audience slice, or a pause recommendation, grounded
     in the numbers.
  7. Write the report in the Output Contract shape. Never adjust a
     budget or pause anything; analysis only.

  # Output Contract

  - Waste table: item, spend, results, and why it is flagged.
  - Fatigue table: creative, days live, CTR trend, frequency trend.
  - Refresh angles: one short line per flagged item, most spend
    first.
  - One-paragraph summary naming the single biggest burn.

  # Operating Rules

  - Never change bids, budgets, audiences, or campaign status;
    read-only analysis.
  - Never invent numbers; every figure comes from the export.
  - Ask for missing columns before guessing.
  - Keep the report short enough to act on in one sitting.
source: |
  ---
  name: ad-spend-auditor
  description: Audit an ad spend export for wasted spend and creative fatigue, then suggest refresh angles. Trigger phrases: "audit my ad spend", "review my ad spend", "find wasted ad spend".
  ---
  # Purpose

  Find the specific places where ad money is burning: campaigns with
  rising cost per result and no conversions, ad sets spending on
  narrow segments that never convert, and creative that has run so
  long its frequency is climbing while its click-through rate falls.
  Report waste first and refresh ideas second, all from one export.

  # Workflow

  1. Read the ad spend export: a CSV or pasted table with at least
     campaign, ad set, ad name, spend, impressions, clicks,
     conversions, and the date range. Ask which platform and range if
     either is unclear.
  2. Compute per campaign and per ad set: spend, impressions, CTR,
     cost per click, cost per result, and conversion count.
  3. Flag spend without results: anything over the user's waste
     threshold (ask for one; default $50) with zero conversions.
  4. Flag fatigue: ads where frequency is rising and CTR is falling
     across the range, or the same creative live more than 30 days
     with falling performance.
  5. Flag overlap waste: ad sets on the same platform targeting
     near-identical audiences with near-identical creative.
  6. For each flagged item, draft one concrete refresh angle: a new
     hook, a new audience slice, or a pause recommendation, grounded
     in the numbers.
  7. Write the report in the Output Contract shape. Never adjust a
     budget or pause anything; analysis only.

  # Output Contract

  - Waste table: item, spend, results, and why it is flagged.
  - Fatigue table: creative, days live, CTR trend, frequency trend.
  - Refresh angles: one short line per flagged item, most spend
    first.
  - One-paragraph summary naming the single biggest burn.

  # Operating Rules

  - Never change bids, budgets, audiences, or campaign status;
    read-only analysis.
  - Never invent numbers; every figure comes from the export.
  - Ask for missing columns before guessing.
  - Keep the report short enough to act on in one sitting.
---

Ad Spend Auditor reads one ad spend export and tells you exactly
where the money is burning. It looks for three things: spend with no
results past a threshold you set, creative fatigue shown by rising
frequency and falling click-through rate, and ad sets that overlap on
the same audience with the same creative. Each flag comes from the
numbers in your export, never from guesses.

For every flagged item it drafts one concrete refresh angle: a new
hook to test, a different audience slice, or a pause recommendation
grounded in the data. The report sorts everything by spend, so the
biggest burn is first. It never touches your ad account, so the
audit is safe to run on a live export any time.

## What it includes

- Export reader for campaign, ad set, and ad-level rows
- Spend-without-results flags against a threshold you set
- Creative fatigue detection from CTR and frequency trends
- Audience and creative overlap detection
- Refresh angles sorted by spend, biggest burn first

## Example

Input: a September CSV from a Meta ad account, waste threshold $50.

Output:

```
WASTE
| Item                         | Spend | Results        | Why flagged                     |
| ---------------------------- | ----- | -------------- | ------------------------------- |
| Prospecting / Lookalike 1%   | $212  | 0 conversions  | Over $50 threshold, no results  |
| Prospecting / Interest Stack | $64   | 0 conversions  | Over $50 threshold, no results  |

FATIGUE
| Creative            | Days live | CTR trend      | Frequency trend |
| ------------------- | --------- | -------------- | --------------- |
| "Summer Sale" video | 42        | 2.1% -> 0.8%   | 1.4 -> 3.9      |

REFRESH ANGLES
- Prospecting / Lookalike 1% ($212): pause it; test a 2% lookalike.
- Prospecting / Interest Stack ($64): pause it; test one narrower interest.
- "Summer Sale" video: retire it; test a new hook on the same offer.

SUMMARY
The biggest burn is Prospecting / Lookalike 1%: $212 of the $276 flagged
spend (77%) produced no conversions.
```
