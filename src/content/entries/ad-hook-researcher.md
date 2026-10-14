---
title: "Ad Hook Researcher"
tagline: "Finds the ad hooks already winning in your niche and turns them into a creative brief."
category: "marketing"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/ad-hook-researcher.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "brief-template"]
version: "1.0.0"
date_added: 2026-10-14
safety_notes: |
  Reads public landing pages and public ad libraries only.
  Writes a creative brief to you and nothing else. Never buys media,
  never posts an ad, never contacts a competitor. It never presents
  persistence as proof of performance: a hook that keeps running is
  flagged as observed, not as proven.
install_prompt: |
  Install the "Ad Hook Researcher" skill. Its full source is below. Create it
  at ~/workspace/skills/ad-hook-researcher/SKILL.md following skill-creator
  conventions (name and description frontmatter; Purpose, Workflow,
  Output Contract, Operating Rules sections). Then confirm it is
  installed and tell me the trigger phrases.

  --- SOURCE ---
  ---
  name: ad-hook-researcher
  description: Collect winning ad hooks in a niche from a product URL into a creative brief. Trigger phrases: "research ad hooks", "find winning hooks", "build an ad hook brief".
  ---
  # Purpose

  Find the ad hooks already winning in your niche and hand them to you
  as a creative brief you can work from. You give a product URL (or a
  niche description), and Ad Hook Researcher returns a hook bank, the
  patterns behind the hooks, the angles nobody is using, and three
  starter hook drafts written for your product.

  # Workflow

  1. Read the product URL or niche description. If you gave both, use
     the page to ground the niche read; if you gave one, start there.
  2. Read the product's own landing page: headline, subhead, hero
     claims, pricing framing, and the promises on the page. This is the
     baseline the brief adapts hooks for.
  3. Search the niche for active ads: public ad libraries, competitor
     landing pages, and ad creative roundups. Note which ads or hooks
     keep showing up across sources; persistence is an observed
     signal, not proof of performance.
  4. Extract each hook: the first five to ten words plus its angle.
     Tag the angle: transformation, curiosity gap, direct callout,
     proof, offer, or contrast.
  5. Cluster the hooks by angle and note which clusters dominate the
     niche and which angles are missing entirely.
  6. Keep only hooks from ads that were actually found. Never invent
     ad text. Quote short hooks verbatim; summarize longer ones.
  7. Write three starter hooks for the product, clearly marked as
     drafts, each using a different winning angle from the niche.
  8. Write the creative brief in the Output Contract shape and send
     it.

  # Output Contract

  The creative brief, in this order:

  - Niche snapshot: what your page leads with today, in three lines
  - Hook bank: 10 to 15 hooks, each with an angle tag and the source
    type it was found in
  - Pattern notes: three to five recurring patterns across the niche
  - Gaps: angles the niche is not using, with one line on why each
    could fit
  - Starter hooks: three drafts for your product, marked as drafts,
    each using a different winning angle
  - Sources checked: a short list of what was actually read

  # Operating Rules

  - Read public pages and public ad libraries only. Never log in, and
    never work around a paywall or a bot check.
  - Never present persistence as proof of performance. Say what was
    observed.
  - Never invent ad copy. Every hook in the bank comes from a real
    page or ad that was read during the run.
  - Never buy media, post an ad, or contact a competitor. Research
    only.
  - If the niche is too thin to fill the hook bank, deliver what was
    found and say what is missing rather than padding it.
  - Run once per request; do not re-run on a schedule unless asked.
source: |
  ---
  name: ad-hook-researcher
  description: Collect winning ad hooks in a niche from a product URL into a creative brief. Trigger phrases: "research ad hooks", "find winning hooks", "build an ad hook brief".
  ---
  # Purpose

  Find the ad hooks already winning in your niche and hand them to you
  as a creative brief you can work from. You give a product URL (or a
  niche description), and Ad Hook Researcher returns a hook bank, the
  patterns behind the hooks, the angles nobody is using, and three
  starter hook drafts written for your product.

  # Workflow

  1. Read the product URL or niche description. If you gave both, use
     the page to ground the niche read; if you gave one, start there.
  2. Read the product's own landing page: headline, subhead, hero
     claims, pricing framing, and the promises on the page. This is the
     baseline the brief adapts hooks for.
  3. Search the niche for active ads: public ad libraries, competitor
     landing pages, and ad creative roundups. Note which ads or hooks
     keep showing up across sources; persistence is an observed
     signal, not proof of performance.
  4. Extract each hook: the first five to ten words plus its angle.
     Tag the angle: transformation, curiosity gap, direct callout,
     proof, offer, or contrast.
  5. Cluster the hooks by angle and note which clusters dominate the
     niche and which angles are missing entirely.
  6. Keep only hooks from ads that were actually found. Never invent
     ad text. Quote short hooks verbatim; summarize longer ones.
  7. Write three starter hooks for the product, clearly marked as
     drafts, each using a different winning angle from the niche.
  8. Write the creative brief in the Output Contract shape and send
     it.

  # Output Contract

  The creative brief, in this order:

  - Niche snapshot: what your page leads with today, in three lines
  - Hook bank: 10 to 15 hooks, each with an angle tag and the source
    type it was found in
  - Pattern notes: three to five recurring patterns across the niche
  - Gaps: angles the niche is not using, with one line on why each
    could fit
  - Starter hooks: three drafts for your product, marked as drafts,
    each using a different winning angle
  - Sources checked: a short list of what was actually read

  # Operating Rules

  - Read public pages and public ad libraries only. Never log in, and
    never work around a paywall or a bot check.
  - Never present persistence as proof of performance. Say what was
    observed.
  - Never invent ad copy. Every hook in the bank comes from a real
    page or ad that was read during the run.
  - Never buy media, post an ad, or contact a competitor. Research
    only.
  - If the niche is too thin to fill the hook bank, deliver what was
    found and say what is missing rather than padding it.
  - Run once per request; do not re-run on a schedule unless asked.
---

Ad Hook Researcher does one job: it studies what is already working in
your niche and hands you a creative brief built from real ads. Give it
a product URL and it reads your landing page first, then scans public
ad libraries and competitor pages for hooks that keep showing up, and
clusters them by angle so you can see the patterns, not just a pile of
quotes.

The brief separates what was observed from what is assumed. Hooks
that run repeatedly are flagged as persistent, never as proven. Every
hook in the bank comes from a page that was actually read; nothing is
invented. It also names the angles your niche is ignoring, which is
often the more useful finding.

The output ends with three starter hooks drafted for your product,
each borrowing a different winning angle from the niche, and a short
list of the sources that were checked so you can verify the work.

## What it includes

- A product page read: headline, hero claims, pricing framing, promises
- A niche scan across public ad libraries and competitor pages
- Hook extraction with angle tags: transformation, curiosity gap, callout, proof, offer, contrast
- A 10 to 15 hook bank with source types
- Pattern notes plus the angles the niche is not using
- Three starter hook drafts for your product, marked as drafts
- A sources-checked list for verification

## Example

Input: "research ad hooks" with the URL of a mattress landing page.

Output: a creative brief with a niche snapshot ("your page leads with
cooling claims; the niche leads with price and trial length"), a hook
bank of 12 hooks tagged by angle, pattern notes (eight of twelve hooks
use a direct callout to side sleepers), gaps (nobody is using contrast
against adjustable bases), three starter drafts ("Side sleeper? This
mattress was built for the way you actually sleep"), and a list of the
ad libraries and pages read.
