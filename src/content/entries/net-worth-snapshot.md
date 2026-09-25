---
title: "Net Worth Snapshot"
tagline: "Monthly one-page net worth with the month-over-month change."
category: "money"
type: "workflow"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/net-worth-snapshot.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "schedule"]
version: "1.0.0"
date_added: 2026-09-14
safety_notes: |
  Reads your connected financial accounts through the assistant's
  own access, on the schedule you set. Writes the snapshot to you
  and nothing else. Never moves money or shares anything.
install_prompt: |
  Set up the "Net Worth Snapshot" workflow. Its full source is
  below. Default schedule: first of each month at 09:00 local
  time. Ask me to confirm or change this time before you create
  the recurring job. Once I confirm, create the job. Tell me the
  job name and the confirmed schedule when it is set up.

  --- SOURCE ---
  name: net-worth-snapshot
  description: Monthly net worth snapshot, every account in one page, with the month-over-month change and what moved. Trigger phrases: "net worth snapshot", "what is my net worth", "monthly money summary".

  schedule: monthly, first of the month at 09:00 local time. Confirm the time with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "net worth snapshot" request.

  steps:
    1. Pull balances from the user's connected accounts: checking, savings, investments, retirement, debts.
    2. Compute total assets, total liabilities, net worth.
    3. Compare against last month's snapshot. Note the change in dollars and percent, and which accounts moved the most.
    4. One line per account: name, balance, change. Then the totals.
    5. Write the snapshot in the Output shape and send it. Save it for next month's comparison.

  output:
    - Net worth: total, with month-over-month change
    - Assets: one line per account with balance and change
    - Liabilities: one line per account with balance and change
    - What moved: the 2-3 biggest movers, one line each

  rules:
    - Read only. Never move money or change anything.
    - Balances come from connected accounts, not estimates. If an account can't be read, list it as "unavailable" rather than guessing.
    - Keep the first snapshot as the baseline even if it's partial; note what's missing.
    - Run only on the confirmed schedule or when asked.
source: |
  name: net-worth-snapshot
  description: Monthly net worth snapshot, every account in one page, with the month-over-month change and what moved. Trigger phrases: "net worth snapshot", "what is my net worth", "monthly money summary".

  schedule: monthly, first of the month at 09:00 local time. Confirm the time with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "net worth snapshot" request.

  steps:
    1. Pull balances from the user's connected accounts: checking, savings, investments, retirement, debts.
    2. Compute total assets, total liabilities, net worth.
    3. Compare against last month's snapshot. Note the change in dollars and percent, and which accounts moved the most.
    4. One line per account: name, balance, change. Then the totals.
    5. Write the snapshot in the Output shape and send it. Save it for next month's comparison.

  output:
    - Net worth: total, with month-over-month change
    - Assets: one line per account with balance and change
    - Liabilities: one line per account with balance and change
    - What moved: the 2-3 biggest movers, one line each

  rules:
    - Read only. Never move money or change anything.
    - Balances come from connected accounts, not estimates. If an account can't be read, list it as "unavailable" rather than guessing.
    - Keep the first snapshot as the baseline even if it's partial; note what's missing.
    - Run only on the confirmed schedule or when asked.
---

Net Worth Snapshot runs on the first of the month and puts every
account on one page: assets, liabilities, net worth, and the
month-over-month change with the biggest movers called out. Twelve
of these a year is a financial picture you can actually act on.

## What it includes

- Monthly balance pull across connected accounts
- Assets, liabilities, and net worth totals
- Month-over-month change with biggest movers
- Saved history for trend comparison

## Example

Output:

```
Net worth, September: $142,300 (+$3,100, +2.2%)

Assets:
- Brokerage: $61,200 (+$2,400)
- Savings: $18,500 (+$800)

Liabilities:
- Mortgage: $212,000 (-$400 principal)

What moved: brokerage gains, steady savings deposits.
```
