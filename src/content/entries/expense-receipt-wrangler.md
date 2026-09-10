---
title: "Expense Receipt Wrangler"
tagline: "Photo a receipt; it logs merchant, date, total, and category."
category: "money"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/expense-receipt-wrangler.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "expense-log"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Reads only the receipt photos you give it in the chat. Writes one
  CSV log in your workspace. Never moves or deletes your photos.
  Nothing is sent anywhere.
install_prompt: |
  Install the "Expense Receipt Wrangler" skill. Its full source is
  below. Create it at ~/workspace/skills/expense-receipt-wrangler/SKILL.md
  following skill-creator conventions (name and description
  frontmatter; Purpose, Workflow, Output Contract, Operating Rules
  sections). Then confirm it is installed and tell me the trigger
  phrases.

  --- SOURCE ---
  ---
  name: expense-receipt-wrangler
  description: Turn receipt photos into a running expense log: merchant, date, total, and category appended to one CSV. Trigger phrases: "log this receipt", "add this expense", "track this receipt".
  ---
  # Purpose

  Keep a running expense log with zero bookkeeping effort. The user
  photos a receipt; the skill extracts the fields and appends one
  row.

  # Workflow

  1. Read the receipt photo. Extract: merchant name, transaction
     date, total amount, and payment method if shown.
  2. Assign a category from the user's category list. Ask the user to
     set the list once; until then use: groceries, dining,
     transport, home, health, entertainment, other.
  3. If any field is unreadable, ask the user for that field only.
     Never guess an amount.
  4. Append one row to expenses.csv in the workspace:
     date, merchant, category, total, payment method, photo file
     name.
  5. Confirm back in one line: merchant, total, category.
  6. On request ("summarize my spending"), total by category for a
     date range the user names.

  # Output Contract

  - expenses.csv: date,merchant,category,total,payment_method,photo
  - Confirmations: one line per receipt
  - Summaries: category totals for the requested range, plain text

  # Operating Rules

  - Never guess a total or a date. Ask when the photo is unclear.
  - Never move, rename, or delete the receipt photo.
  - The log lives in the user's workspace only. Nothing is sent
    anywhere.
  - Never ask for banking logins or card numbers; the photo is the
    only input.
source: |
  ---
  name: expense-receipt-wrangler
  description: Turn receipt photos into a running expense log: merchant, date, total, and category appended to one CSV. Trigger phrases: "log this receipt", "add this expense", "track this receipt".
  ---
  # Purpose

  Keep a running expense log with zero bookkeeping effort. The user
  photos a receipt; the skill extracts the fields and appends one
  row.

  # Workflow

  1. Read the receipt photo. Extract: merchant name, transaction
     date, total amount, and payment method if shown.
  2. Assign a category from the user's category list. Ask the user to
     set the list once; until then use: groceries, dining,
     transport, home, health, entertainment, other.
  3. If any field is unreadable, ask the user for that field only.
     Never guess an amount.
  4. Append one row to expenses.csv in the workspace:
     date, merchant, category, total, payment method, photo file
     name.
  5. Confirm back in one line: merchant, total, category.
  6. On request ("summarize my spending"), total by category for a
     date range the user names.

  # Output Contract

  - expenses.csv: date,merchant,category,total,payment_method,photo
  - Confirmations: one line per receipt
  - Summaries: category totals for the requested range, plain text

  # Operating Rules

  - Never guess a total or a date. Ask when the photo is unclear.
  - Never move, rename, or delete the receipt photo.
  - The log lives in the user's workspace only. Nothing is sent
    anywhere.
  - Never ask for banking logins or card numbers; the photo is the
    only input.
---

Expense Receipt Wrangler turns receipt photos into a running CSV log.
Photo the receipt, it pulls merchant, date, total, and category,
appends one row to expenses.csv, and confirms in a single line. Ask
for a spending summary any time.

## What it includes

- Receipt field extraction (merchant, date, total, payment method)
- Your category list (set once, reused)
- expenses.csv log in the workspace
- Spending summaries by category on request

## Example

Input: photo of a Market Basket receipt.

Output:

```
Logged: Market Basket, $87.43, groceries
```

And expenses.csv gains one row:

```
2026-09-09,Market Basket,groceries,87.43,debit,receipt-0912.jpg
```
