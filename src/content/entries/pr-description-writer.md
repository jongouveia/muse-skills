---
title: "PR Description Writer"
tagline: "Paste a diff; get a clear PR title and description."
category: "dev"
type: "prompt"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/pr-description-writer.md"
source_verified: false
origin: "directory"
includes: ["instructions", "pr-template"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Uses only the diff or summary you paste in. Writes only the draft
  back to you. Never opens a PR or pushes code.
install_prompt: |
  Save this as a reusable prompt pack named "PR Description Writer"
  and confirm what it does.

  --- SOURCE ---
  # PR Description Writer

  How to use: paste a diff, a commit list, or a plain-English
  summary of what changed. It returns a PR title and description
  in the template below.
  Save it as a reusable prompt pack named "PR Description Writer".

  ## The prompt

  Write the title and description for this pull request. Read the
  diff or summary I paste and produce:

  **Title:** one line, imperative mood, under 72 characters
  ("Add retry logic to checkout", not "fixed stuff").

  **Description, in this shape:**
  - **What:** 2-3 sentences on what changed and why.
  - **How:** the approach in one short paragraph. Name the key
    files or modules touched.
  - **Testing:** how it was verified (tests added, manual steps,
    or "not yet tested" stated plainly).
  - **Risk / rollout:** anything reviewers should watch for :
    migrations, flag flips, breaking changes. Write "None" if
    there is nothing.

  Rules: describe outcomes, not file-by-file narration. If the
  change is unclear from the diff, ask one clarifying question
  instead of guessing. Keep the whole description under 250 words.
source: |
  # PR Description Writer

  How to use: paste a diff, a commit list, or a plain-English
  summary of what changed. It returns a PR title and description
  in the template below.
  Save it as a reusable prompt pack named "PR Description Writer".

  ## The prompt

  Write the title and description for this pull request. Read the
  diff or summary I paste and produce:

  **Title:** one line, imperative mood, under 72 characters
  ("Add retry logic to checkout", not "fixed stuff").

  **Description, in this shape:**
  - **What:** 2-3 sentences on what changed and why.
  - **How:** the approach in one short paragraph. Name the key
    files or modules touched.
  - **Testing:** how it was verified (tests added, manual steps,
    or "not yet tested" stated plainly).
  - **Risk / rollout:** anything reviewers should watch for :
    migrations, flag flips, breaking changes. Write "None" if
    there is nothing.

  Rules: describe outcomes, not file-by-file narration. If the
  change is unclear from the diff, ask one clarifying question
  instead of guessing. Keep the whole description under 250 words.
---

PR Description Writer turns a diff into a review-ready pull request:
an imperative-mood title plus a description covering what changed,
the approach, testing, and rollout risk. No more "fixed stuff" PRs.

## What it includes

- Title rules (imperative, under 72 characters)
- The what / how / testing / risk template
- Honest "not yet tested" handling
- One clarifying question instead of guessing

## Example

Input: a diff adding exponential-backoff retries to the checkout API client.

Output:

```
Title: Add exponential-backoff retries to checkout client

What: The checkout client now retries failed requests with
exponential backoff (3 attempts) instead of failing on the first
timeout. Motivated by last week's spike in gateway 502s.

How: Wrapped the existing fetch call in `withRetry` in
`lib/checkout-client.ts`; backoff intervals are configurable.

Testing: Added unit tests for the backoff intervals; manually
verified against the staging gateway.

Risk / rollout: None : retries are bounded and idempotency keys
are already sent.
```
