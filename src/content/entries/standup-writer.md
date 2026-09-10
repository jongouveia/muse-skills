---
title: "Standup Writer"
tagline: "Yesterday's commits plus today's calendar become a tight standup update."
category: "dev"
type: "prompt"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/standup-writer.md"
source_verified: false
origin: "directory"
includes: ["instructions", "standup-template"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Reads your local git history and your calendar through the
  assistant's own connected accounts. Writes only the draft back to
  you. Never commits, pushes, or posts anything anywhere.
install_prompt: |
  Save this as a reusable prompt pack named "Standup Writer" and
  confirm what it does.

  --- SOURCE ---
  # Standup Writer

  How to use: run each morning before standup. It reads yesterday's
  git history and today's calendar, then drafts the update in
  yesterday / today / blockers shape.

  ## The prompt

  Draft my standup update. Read the git log for the last working day
  across my active repos, and my calendar for today.

  Write it in this exact shape:

  - **Yesterday:** 2-4 bullets, grouped by repo or project. Describe
    outcomes, not commit messages ("finished the checkout retry
    logic", not "fix tests").
  - **Today:** 2-3 bullets from today's calendar and the natural next
    steps of yesterday's work.
  - **Blockers:** only real blockers. If none, write "None."

  Rules: never invent work. If a commit message is unclear, describe
  it plainly or omit it. Keep the whole update under 150 words. Ask
  which repos count as "active" the first time; remember the answer
  for future runs.
source: |
  # Standup Writer

  How to use: run each morning before standup. It reads yesterday's
  git history and today's calendar, then drafts the update in
  yesterday / today / blockers shape.

  ## The prompt

  Draft my standup update. Read the git log for the last working day
  across my active repos, and my calendar for today.

  Write it in this exact shape:

  - **Yesterday:** 2-4 bullets, grouped by repo or project. Describe
    outcomes, not commit messages ("finished the checkout retry
    logic", not "fix tests").
  - **Today:** 2-3 bullets from today's calendar and the natural next
    steps of yesterday's work.
  - **Blockers:** only real blockers. If none, write "None."

  Rules: never invent work. If a commit message is unclear, describe
  it plainly or omit it. Keep the whole update under 150 words. Ask
  which repos count as "active" the first time; remember the answer
  for future runs.
---

Standup Writer runs each morning before standup. It reads yesterday's
git history across your active repos and today's calendar, then
drafts the update in yesterday / today / blockers shape: outcomes,
not commit messages, under 150 words.

## What it includes

- Git log summarization (grouped by repo, outcomes not messages)
- Today section from the calendar plus natural next steps
- Honest blockers only: "None" when there are none
- Active-repo list, set once and remembered

## Example

Output:

```
Yesterday: finished the checkout retry logic (web); reviewed and merged Priya's auth PR (api).
Today: wire the retry logic into the staging deploy; 1:1 with Sam at 11.
Blockers: none.
```
