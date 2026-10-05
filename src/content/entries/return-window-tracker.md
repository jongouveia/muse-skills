---
title: "Return Window Tracker"
tagline: "Logs your purchases, computes each store's return deadline, and warns you before the window closes."
category: "shopping"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/return-window-tracker.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "return-ledger"]
version: "1.0.0"
date_added: 2026-10-04
safety_notes: |
  Works only from the purchases and policies you provide. It never
  invents a store's return policy, never stores payment details, and
  marks final-sale items as non-returnable instead of guessing. It
  tracks deadlines; it never tells you whether to keep an item.
install_prompt: |
  Install the "Return Window Tracker" skill. Its full source is below.
  Create it at ~/workspace/skills/return-window-tracker/SKILL.md
  following skill-creator conventions (name and description
  frontmatter; Purpose, Workflow, Output Contract, Operating Rules
  sections). Then confirm it is installed and tell me the trigger
  phrases.

  --- SOURCE ---
  ---
  name: return-window-tracker
  description: Log online and in-store purchases with each store's return policy, track return deadlines, and get warned before a window closes. Trigger phrases: "track my returns", "return deadline", "when do I need to return this".
  ---
  # Purpose

  Do one narrow job: never let a return window expire unnoticed. You
  tell it what you bought, where, when, and the store's return policy
  (or share a receipt photo), and it records the deadline, keeps a
  receipt reference, and warns you before the window closes. When you
  return, exchange, or keep an item, it closes the record.

  # Workflow

  1. Log the purchase: store, item, purchase date, price, and order
     number or receipt reference. If you share a receipt photo,
     extract the policy lines into the record: return days,
     final-sale flags, restocking fees.
  2. Set the window from the store's stated policy, which you provide
     or the receipt confirms. Never guess a policy. If the policy is
     unknown, record it as "policy unknown" and set a conservative
     14-day review nudge, not a fake deadline.
  3. Compute the deadline: purchase date plus the policy's return
     days. Mark final-sale or non-returnable items as closed from the
     start, with the reason.
  4. On request, review active returns sorted by deadline, with days
     remaining; flag anything at seven days or fewer.
  5. Close out: when you return, exchange, or decide to keep an item,
     mark the record closed with the date and outcome so it leaves
     the active list.
  6. If a deadline passes without action, archive the record as
     expired instead of deleting it, so the history stays honest.

  # Output Contract

  - Active list: item, store, deadline (date), days left, receipt on
    file (yes/no)
  - Watch list: anything with seven or fewer days left, shown first
  - Policy unknown: shown separately with a review date, never a
    fabricated deadline
  - Closed: returned, exchanged, kept, or expired, with date and
    reason

  Keep a check-in under ten lines unless the user asks for detail.

  # Operating Rules

  - Never invent a store's return policy. If the user has not
    provided it, say "unknown" and ask.
  - A "policy unknown" record gets a review nudge, not a deadline.
    Say plainly which is which.
  - Final-sale items are never listed as returnable.
  - Never delete history. Archive expired or closed records with a
    date.
  - Do not store full payment details. Order number and last four
    digits are enough.
  - Reminders are warnings, not advice. It does not tell the user
    whether to keep an item.
source: |
  ---
  name: return-window-tracker
  description: Log online and in-store purchases with each store's return policy, track return deadlines, and get warned before a window closes. Trigger phrases: "track my returns", "return deadline", "when do I need to return this".
  ---
  # Purpose

  Do one narrow job: never let a return window expire unnoticed. You
  tell it what you bought, where, when, and the store's return policy
  (or share a receipt photo), and it records the deadline, keeps a
  receipt reference, and warns you before the window closes. When you
  return, exchange, or keep an item, it closes the record.

  # Workflow

  1. Log the purchase: store, item, purchase date, price, and order
     number or receipt reference. If you share a receipt photo,
     extract the policy lines into the record: return days,
     final-sale flags, restocking fees.
  2. Set the window from the store's stated policy, which you provide
     or the receipt confirms. Never guess a policy. If the policy is
     unknown, record it as "policy unknown" and set a conservative
     14-day review nudge, not a fake deadline.
  3. Compute the deadline: purchase date plus the policy's return
     days. Mark final-sale or non-returnable items as closed from the
     start, with the reason.
  4. On request, review active returns sorted by deadline, with days
     remaining; flag anything at seven days or fewer.
  5. Close out: when you return, exchange, or decide to keep an item,
     mark the record closed with the date and outcome so it leaves
     the active list.
  6. If a deadline passes without action, archive the record as
     expired instead of deleting it, so the history stays honest.

  # Output Contract

  - Active list: item, store, deadline (date), days left, receipt on
    file (yes/no)
  - Watch list: anything with seven or fewer days left, shown first
  - Policy unknown: shown separately with a review date, never a
    fabricated deadline
  - Closed: returned, exchanged, kept, or expired, with date and
    reason

  Keep a check-in under ten lines unless the user asks for detail.

  # Operating Rules

  - Never invent a store's return policy. If the user has not
    provided it, say "unknown" and ask.
  - A "policy unknown" record gets a review nudge, not a deadline.
    Say plainly which is which.
  - Final-sale items are never listed as returnable.
  - Never delete history. Archive expired or closed records with a
    date.
  - Do not store full payment details. Order number and last four
    digits are enough.
  - Reminders are warnings, not advice. It does not tell the user
    whether to keep an item.
---

Return Window Tracker exists for one moment of regret: finding a
receipt in a drawer after the return window already closed. You tell
it what you bought, where, when, and the store's return policy, or
you share a photo of the receipt and it reads the policy lines
itself. It computes the deadline, keeps a receipt reference, and
warns you before the window closes.

The ledger stays honest in the gaps. If a store's policy is unknown,
it does not guess; it records the item with a conservative review
nudge instead of a fake deadline. Final-sale items are marked
non-returnable from the start. When you return, exchange, or decide
to keep something, the record closes with a date and outcome, and
expired windows archive instead of vanishing, so the history is
trustworthy.

Each check-in sorts active returns by deadline and shows days left,
with the ones inside seven days shown first. Receipt on file or not,
each line tells you exactly what you need to find before you head
to the store.

## What it includes

- A purchase ledger with store, item, price, date, and receipt reference
- Return window computation from the store's stated policy
- Policy-unknown handling with review nudges, never fabricated deadlines
- Seven-day watch list for windows closing soon
- Closed and expired records with dates and reasons
- A compact check-in format under ten lines

## Example

Input: bought a coffee maker at Target on Sep 28, 2026, price $89,
receipt photo shared. Target's policy: 90 days.

Output:

```
Active returns (sorted by deadline):
- Coffee maker, Target, deadline Dec 27, 2026, 84 days left, receipt on file

Watch list: nothing within seven days.
```
