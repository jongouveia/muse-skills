---
title: "Instagram Saved Reels Sort"
tagline: "Files your Instagram saved reels into your own topic collections, two pages at a time."
category: "productivity"
type: "skill"
author: "chinami-michaels"
source_url: "https://github.com/chinami-michaels/instagram-saved-reels-sort"
source_verified: false
origin: "shared"
includes: ["instructions", "python scripts", "setup", "review files"]
version: "1.0.0"
date_added: "2026-11-04"
safety_notes: |
  Not a pure one-paste skill. The source below is SKILL.md only. It runs three
  Python scripts from the author's GitHub repo, which you must clone. In the
  submission, the scripts call only instagram-cli and write only under
  ~/.instagram-saved-reels-sort/. The repo may have changed since then.
  Needs an Instagram account connected through instagram-cli. It never asks for
  a password or token.
  Setup can create new collections on your Instagram account. Sorting adds saved
  reels to your collections. The source says nothing is deleted, unpublished, or
  unsaved, and the scripts contain no delete call.
  Muse reads reel summaries from instagram-cli media-understanding, so reel
  content is processed by that tool.
  You confirm the first batch. After that, a recurring run can file reels without
  a review of each batch.
install_prompt: |
  Install the "Instagram Saved Reels Sort" skill. Its full source is below. Create it at ~/workspace/skills/instagram-saved-reels-sort/SKILL.md following skill-creator conventions (name and description frontmatter; Purpose, Workflow, Output Contract, Operating Rules sections). Then confirm it is installed and tell me the trigger phrases.

  This skill also runs scripts from https://github.com/chinami-michaels/instagram-saved-reels-sort that the source below does not contain. Before you clone anything, tell me what you will download, and wait for my yes. Clone the repository into ~/workspace/skills/instagram-saved-reels-sort, compare its SKILL.md with the source below, and tell me if they differ. Read each script in bin/ and tell me what it does before you run it. Do not run setup until I say go.

  --- SOURCE ---
  ---
  name: "instagram_saved_reels_sort"
  description: "Sort Instagram saved reels into the user's topic collections, in small reviewable batches. Use when the user asks to sort saved reels, run a recurring sort, or work through a saved-reels backlog. Requires a connected Instagram account (instagram-cli)."
  ---

  # Instagram Saved Reels Sort

  ## Purpose
  Move saved Instagram reels out of the unsorted Saved bucket into the user's
  own topic collections, two pages at a time, with a human review step before
  anything moves. Built for backlogs of hundreds or thousands of saved reels,
  and for a light recurring run that keeps new saves filed.

  ## Requirements
  - An agent environment with the `instagram-cli` tool available and the user's
    Instagram account connected (`instagram-cli accounts` must return an
    account). This skill was built for Muse; on other platforms, substitute the
    equivalent commands for listing saved posts, describing media, managing
    saved collections, and moving posts between collections.
  - Python 3 (standard library only).

  ## Setup (one time)
  1. Run `python3 bin/setup.py`. It verifies the Instagram connection, lists the
     user's existing saved collections, and walks through defining topics.
  2. The user picks a short theme key per topic (e.g. `ai`, `recipes`,
     `travel`). Collections that don't exist yet are created on Instagram.
  3. Setup writes `~/.instagram-saved-reels-sort/config.json` (account id and
     the key → collection-id map) and a starter
     `~/.instagram-saved-reels-sort/my-collections.md`.
  4. The user writes their routing rules (which reels go where, plus the edge
     cases) into `my-collections.md`. See
     `references/collections-template.md` for a worked example. This file is the
     source of truth for every batch; keep it current as tastes change.

  ## Tooling
  Helpers live in `bin/`; all state (config, cursor, batch files) lives in
  `~/.instagram-saved-reels-sort/`, never in `/tmp`, which can be wiped without
  warning and would lose your place mid-sort.

  - Fetch a batch: `python3 bin/fetch_batch.py fetch 2 <label>`: pulls 2 pages
    of saved posts (50/page), keeps reels, runs media-understanding, writes
    `<label>_reels.json` and `<label>_review.txt`, advances `cursor.txt`.
  - Re-sync a lost cursor: `python3 bin/fetch_batch.py advance <pages>`: walks
    forward N pages without processing.
  - Sort a batch: `python3 bin/sort_batch.py --batch <label> --map <map.json>`:
    moves reels into collections per a `{media_id: theme_key}` map.

  Collection map and routing rules: the user's `my-collections.md` (template:
  `references/collections-template.md`). Step-by-step with examples and
  troubleshooting: `references/batch-procedure.md`. Dining dossiers (opt-in
  per-restaurant health-inspection + review-trend reports for food-spot reels):
  `references/dining-dossier.md`.

  ## Workflow
  1. Fetch one batch (`fetch 2 <label>`), then read `<label>_review.txt`.
  2. Assign every reel a theme key per the user's `my-collections.md`, or leave
     it unassigned (stays in Saved).
  3. Write the map to `<label>_map.json` (`{"<media_id>": "<theme_key>"}`), run
     the sorter.
  4. Report per-collection move counts plus the unsorted leftovers with reasons.
     Repeat these steps for each batch.

  ## Output Contract
  After each batch: counts moved into each collection + list of reels left
  unsorted (with reason, e.g. no description).

  ## Operating Rules
  1. Two pages per batch: keeps reviews human-sized. Continue to the next batch
     only when asked, or during a full scheduled run.
  2. Never move a reel with no usable description and no inferable content;
     unsortable reels stay in Saved.
  3. Write actions only move posts between collections: nothing is deleted,
     unpublished, or unsaved globally. Say that plainly to the user before the
     first sort.
  4. The cursor file is the source of truth for progress; if it looks stale,
     re-sync with `advance` rather than guessing pages.
  5. Confirm the first batch's moves with the user before running unattended.
     After that, a recurring run (e.g. weekly) can process everything saved
     since the last batch until caught up.
  6. Dining dossiers are opt-in: after a batch, offer one for any reel filed
     into a food/dining collection that's about a specific restaurant, or run
     one on demand. Never auto-run them for every food reel.
source: |
  ---
  name: "instagram_saved_reels_sort"
  description: "Sort Instagram saved reels into the user's topic collections, in small reviewable batches. Use when the user asks to sort saved reels, run a recurring sort, or work through a saved-reels backlog. Requires a connected Instagram account (instagram-cli)."
  ---

  # Instagram Saved Reels Sort

  ## Purpose
  Move saved Instagram reels out of the unsorted Saved bucket into the user's
  own topic collections, two pages at a time, with a human review step before
  anything moves. Built for backlogs of hundreds or thousands of saved reels,
  and for a light recurring run that keeps new saves filed.

  ## Requirements
  - An agent environment with the `instagram-cli` tool available and the user's
    Instagram account connected (`instagram-cli accounts` must return an
    account). This skill was built for Muse; on other platforms, substitute the
    equivalent commands for listing saved posts, describing media, managing
    saved collections, and moving posts between collections.
  - Python 3 (standard library only).

  ## Setup (one time)
  1. Run `python3 bin/setup.py`. It verifies the Instagram connection, lists the
     user's existing saved collections, and walks through defining topics.
  2. The user picks a short theme key per topic (e.g. `ai`, `recipes`,
     `travel`). Collections that don't exist yet are created on Instagram.
  3. Setup writes `~/.instagram-saved-reels-sort/config.json` (account id and
     the key → collection-id map) and a starter
     `~/.instagram-saved-reels-sort/my-collections.md`.
  4. The user writes their routing rules (which reels go where, plus the edge
     cases) into `my-collections.md`. See
     `references/collections-template.md` for a worked example. This file is the
     source of truth for every batch; keep it current as tastes change.

  ## Tooling
  Helpers live in `bin/`; all state (config, cursor, batch files) lives in
  `~/.instagram-saved-reels-sort/`, never in `/tmp`, which can be wiped without
  warning and would lose your place mid-sort.

  - Fetch a batch: `python3 bin/fetch_batch.py fetch 2 <label>`: pulls 2 pages
    of saved posts (50/page), keeps reels, runs media-understanding, writes
    `<label>_reels.json` and `<label>_review.txt`, advances `cursor.txt`.
  - Re-sync a lost cursor: `python3 bin/fetch_batch.py advance <pages>`: walks
    forward N pages without processing.
  - Sort a batch: `python3 bin/sort_batch.py --batch <label> --map <map.json>`:
    moves reels into collections per a `{media_id: theme_key}` map.

  Collection map and routing rules: the user's `my-collections.md` (template:
  `references/collections-template.md`). Step-by-step with examples and
  troubleshooting: `references/batch-procedure.md`. Dining dossiers (opt-in
  per-restaurant health-inspection + review-trend reports for food-spot reels):
  `references/dining-dossier.md`.

  ## Workflow
  1. Fetch one batch (`fetch 2 <label>`), then read `<label>_review.txt`.
  2. Assign every reel a theme key per the user's `my-collections.md`, or leave
     it unassigned (stays in Saved).
  3. Write the map to `<label>_map.json` (`{"<media_id>": "<theme_key>"}`), run
     the sorter.
  4. Report per-collection move counts plus the unsorted leftovers with reasons.
     Repeat these steps for each batch.

  ## Output Contract
  After each batch: counts moved into each collection + list of reels left
  unsorted (with reason, e.g. no description).

  ## Operating Rules
  1. Two pages per batch: keeps reviews human-sized. Continue to the next batch
     only when asked, or during a full scheduled run.
  2. Never move a reel with no usable description and no inferable content;
     unsortable reels stay in Saved.
  3. Write actions only move posts between collections: nothing is deleted,
     unpublished, or unsaved globally. Say that plainly to the user before the
     first sort.
  4. The cursor file is the source of truth for progress; if it looks stale,
     re-sync with `advance` rather than guessing pages.
  5. Confirm the first batch's moves with the user before running unattended.
     After that, a recurring run (e.g. weekly) can process everything saved
     since the last batch until caught up.
  6. Dining dossiers are opt-in: after a batch, offer one for any reel filed
     into a food/dining collection that's about a specific restaurant, or run
     one on demand. Never auto-run them for every food reel.
---

Instagram Saved Reels Sort files your saved reels into topic collections that you define. It works in small batches. It fetches two pages of your saved posts, keeps the reels, and writes a one-line summary of each for review. Muse assigns each reel a topic from your own routing rules, then moves the mapped reels into your Instagram collections.

You set the topics once. Setup lists your existing collections, creates any missing ones on Instagram, and saves your rules in a file that you edit. Reels with no usable description stay in Saved. After each batch, Muse reports how many reels moved into each collection and which reels it left alone, with the reason.

The skill needs an Instagram account connected through instagram-cli. It also needs the author's scripts from GitHub, which are not part of the source below. After you confirm the first batch, a recurring run can file new saves, for example once a week.

## What it includes

- One-time setup script for topics, collections, and a routing rules file
- Batch fetch with a plain-text review file
- Sort step that moves reels from a map you approve
- Progress state kept in ~/.instagram-saved-reels-sort/, not in /tmp
- Opt-in dining dossier for restaurant reels

## Example

Input: "Sort my saved reels."

Output, after the first batch:

```
Moved: AI 14, Recipes 9, Travel 6
Left in Saved: 5 (3 with no description, 2 with no clear topic)
```
