---
title: "Changelog Compiler"
tagline: "Weekly: commits in, release-notes draft out."
category: "dev"
type: "workflow"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/changelog-compiler.md"
source_verified: true
origin: "directory"
includes: ["instructions", "workflow", "schedule"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Reads your local git history on the schedule you set. Writes only
  the draft back to you. Never commits, tags, or publishes anything.
install_prompt: |
  Set up the "Changelog Compiler" workflow. Its full source is
  below. Default schedule: Friday at 17:00 local time. Ask me to
  confirm or change this time before you create the recurring job.
  Once I confirm, create the job and ask me which repos to include.
  Tell me the job name and the confirmed schedule when it is set
  up.

  --- SOURCE ---
  name: changelog-compiler
  description: Weekly digest of git history turned into a release-notes draft, grouped for humans. Trigger phrases: "compile the changelog", "what shipped this week", "draft the release notes".

  schedule: weekly, Friday at 17:00 local time (cron: 0 17 * * 5). Confirm the time with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "compile the changelog" request.

  repo_list: the repos to include, set once with the user and remembered.

  steps:
    1. Read the commit history since the last run for each repo in the list.
    2. Drop noise: merge commits, version bumps, typo-only commits, and CI config churn, unless the user asks otherwise.
    3. Group the rest for humans: Added, Changed, Fixed. One bullet per change, written as an outcome ("Checkout retries failed payments automatically"), never as a commit message.
    4. Flag anything that looks breaking: migration, removed endpoint, changed default, renamed config. Put these first under a "Heads up" section.
    5. Write the draft in the Output shape and send it. If nothing shippable landed, say so in one line.

  output:
    - Heads up (breaking or migration-worthy changes, if any)
    - Added / Changed / Fixed sections, one outcome-bullet each
    - Quiet weeks: "Nothing shippable this week."

  rules:
    - Never invent a change. Every bullet must trace to a real commit.
    - Outcomes, not commit messages. Rewrite ruthlessly.
    - Never commit, tag, or publish the changelog. Draft only.
    - Run only on the confirmed schedule or when asked.
source: |
  name: changelog-compiler
  description: Weekly digest of git history turned into a release-notes draft, grouped for humans. Trigger phrases: "compile the changelog", "what shipped this week", "draft the release notes".

  schedule: weekly, Friday at 17:00 local time (cron: 0 17 * * 5). Confirm the time with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "compile the changelog" request.

  repo_list: the repos to include, set once with the user and remembered.

  steps:
    1. Read the commit history since the last run for each repo in the list.
    2. Drop noise: merge commits, version bumps, typo-only commits, and CI config churn, unless the user asks otherwise.
    3. Group the rest for humans: Added, Changed, Fixed. One bullet per change, written as an outcome ("Checkout retries failed payments automatically"), never as a commit message.
    4. Flag anything that looks breaking: migration, removed endpoint, changed default, renamed config. Put these first under a "Heads up" section.
    5. Write the draft in the Output shape and send it. If nothing shippable landed, say so in one line.

  output:
    - Heads up (breaking or migration-worthy changes, if any)
    - Added / Changed / Fixed sections, one outcome-bullet each
    - Quiet weeks: "Nothing shippable this week."

  rules:
    - Never invent a change. Every bullet must trace to a real commit.
    - Outcomes, not commit messages. Rewrite ruthlessly.
    - Never commit, tag, or publish the changelog. Draft only.
    - Run only on the confirmed schedule or when asked.
---

Changelog Compiler runs every Friday and turns the week's commits
into a release-notes draft humans actually want to read: grouped as
Added / Changed / Fixed, written as outcomes, with breaking changes
flagged up top.

## What it includes

- Weekly commit digest across your repos
- Noise filtering (merges, version bumps, typo fixes)
- Outcome-style bullets, never raw commit messages
- "Heads up" section for breaking changes

## Example

Output:

```
Heads up: the /v1/orders endpoint now requires an idempotency key.

Added
- Checkout retries failed payments automatically (3 attempts, backoff)
- Export button on the orders table (CSV)

Fixed
- Timezone bug showing yesterday's date on the dashboard after 8pm
```
