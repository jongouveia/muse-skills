---
title: "Git Commit Writer"
tagline: "Your diff in, conventional-commit message out."
category: "dev"
type: "prompt"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/git-commit-writer.md"
source_verified: false
origin: "directory"
includes: ["prompt-text"]
version: "1.0.0"
date_added: 2026-09-14
safety_notes: |
  Drafts a commit message from the diff you paste. Never commits
  or pushes anything.
install_prompt: |
  Install the "Git Commit Writer" prompt pack. Its full source is
  below. Save it to ~/workspace/prompts/git-commit-writer.md
  (create the folder if needed). Then confirm it is installed and
  show me the full text.

  --- SOURCE ---
  This prompt pack writes a conventional commit message from your diff.
  Paste it into Muse along with the diff.

  > Write a conventional commit message for this diff. Format:
  > type(scope): short imperative summary, max 72 chars. Then a
  > body of 2-4 lines explaining what changed and why, not how,
  > the diff shows the how. Rules: (1) pick the right type
  > (feat, fix, docs, refactor, test, chore), (2) if the diff
  > mixes unrelated changes, say so and suggest splitting into
  > two commits instead of writing one message, (3) flag anything
  > that looks like a secret or credential in the diff before
  > anything else, (4) no filler words like "various" or
  > "updates". Do not commit; just write the message.
source: |
  This prompt pack writes a conventional commit message from your diff.
  Paste it into Muse along with the diff.

  > Write a conventional commit message for this diff. Format:
  > type(scope): short imperative summary, max 72 chars. Then a
  > body of 2-4 lines explaining what changed and why, not how,
  > the diff shows the how. Rules: (1) pick the right type
  > (feat, fix, docs, refactor, test, chore), (2) if the diff
  > mixes unrelated changes, say so and suggest splitting into
  > two commits instead of writing one message, (3) flag anything
  > that looks like a secret or credential in the diff before
  > anything else, (4) no filler words like "various" or
  > "updates". Do not commit; just write the message.
---

Git Commit Writer is a prompt pack for the blank commit-message
moment. Paste your diff; get a conventional commit message with the
right type, a short imperative summary, and a body that explains
what and why. Mixed unrelated changes get flagged for splitting,
and anything looking like a secret gets called out first.

## What it includes

- Conventional-commit format with the right type
- What-and-why body, no filler
- Mixed-change split suggestion
- Secret scan before anything else

## Example

Input: a diff adding retry logic to an API client.

Output:

```
feat(api): retry failed requests with backoff

The client gave up on the first 500. Now it retries up to
3 times with exponential backoff, then surfaces the error.
```
