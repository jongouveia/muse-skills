---
title: "Trip Expense Reimbursement"
tagline: "Turns trip receipts and mileage into a clean expense report ready to submit."
category: "money"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/trip-expense-reimbursement.md"
source_verified: false
origin: "directory"
includes:
  - "Expense report draft from receipts and mileage"
  - "Category totals with per diem handling"
  - "Mileage log with rate math"
  - "Policy flags for missing receipts and limits"
  - "Expense report template"
version: "1.0.0"
date_added: "2026-11-05"
safety_notes: "Never submits an expense report or contacts an employer or finance team. Never invents a receipt amount or a mileage figure. All amounts come from receipts and numbers the user provides, and the report is a draft for the user to review."
install_prompt: |
  To install the Trip Expense Reimbursement skill, save the skill source below as ~/workspace/skills/trip-expense-reimbursement/SKILL.md, then tell Muse to use it whenever you come back from a trip with receipts or ask how to file expenses.

  --- SOURCE ---
  ---
  name: trip-expense-reimbursement
  description: Build an expense reimbursement report from trip receipts, mileage, and per diem. Use when the user says "file my trip expenses", "expense report", "reimbursement", "mileage log", "trip receipts", or comes back from a trip with receipts to sort out.
  ---

  ## Purpose
  Turn a pile of trip receipts and a mileage note into a clean expense report: every cost categorized, mileage totaled at the right rate, per diem handled, and anything that breaks policy flagged before the user submits it. The report is a draft the user reviews, never a submission.

  ## Workflow
  1. Collect receipts: for each one, the date, vendor, amount, and category (lodging, meals, transport, parking, other). Ask for a photo or a typed line for each receipt.
  2. Collect mileage: start and end points, miles driven, and the reimbursement rate. Multiply miles by the rate for the mileage total.
  3. Handle per diem: if the user gets a daily meal allowance, apply it per travel day instead of itemizing meals, and note which days it covers.
  4. Total by category and check the policy the user states: daily meal caps, lodging caps, and any categories that need a receipt above a set amount.
  5. Flag gaps: receipts missing, amounts without a category, mileage without a rate, and any line over a cap.
  6. Build the report draft: a dated table of every line, category totals, the mileage log, and the grand total, with flagged lines marked for the user to fix.

  ## Output Contract
  - An expense table: date, vendor, category, amount, and receipt status for every line.
  - Category totals and a grand total, with per diem shown as its own line.
  - A mileage log: trips, miles, rate, and the mileage total.
  - A flags list: missing receipts, uncapped lines, and anything over a stated limit.
  - Nothing is submitted. The report is a draft the user reviews and files.

  ## Operating Rules
  - Never invent an amount, a mileage figure, or a receipt. If a number is missing, ask for it or mark the line as incomplete.
  - Never submit the report or contact an employer, a finance team, or a booking system.
  - Keep one currency through the whole report; convert foreign amounts only when the user gives the rate or the converted figure.
  - Per diem and itemized meals never mix on the same day; pick one and note the choice.
  - State the rate and the policy limits used, so the user can check them against the real policy.
source: |
  ---
  name: trip-expense-reimbursement
  description: Build an expense reimbursement report from trip receipts, mileage, and per diem. Use when the user says "file my trip expenses", "expense report", "reimbursement", "mileage log", "trip receipts", or comes back from a trip with receipts to sort out.
  ---

  ## Purpose
  Turn a pile of trip receipts and a mileage note into a clean expense report: every cost categorized, mileage totaled at the right rate, per diem handled, and anything that breaks policy flagged before the user submits it. The report is a draft the user reviews, never a submission.

  ## Workflow
  1. Collect receipts: for each one, the date, vendor, amount, and category (lodging, meals, transport, parking, other). Ask for a photo or a typed line for each receipt.
  2. Collect mileage: start and end points, miles driven, and the reimbursement rate. Multiply miles by the rate for the mileage total.
  3. Handle per diem: if the user gets a daily meal allowance, apply it per travel day instead of itemizing meals, and note which days it covers.
  4. Total by category and check the policy the user states: daily meal caps, lodging caps, and any categories that need a receipt above a set amount.
  5. Flag gaps: receipts missing, amounts without a category, mileage without a rate, and any line over a cap.
  6. Build the report draft: a dated table of every line, category totals, the mileage log, and the grand total, with flagged lines marked for the user to fix.

  ## Output Contract
  - An expense table: date, vendor, category, amount, and receipt status for every line.
  - Category totals and a grand total, with per diem shown as its own line.
  - A mileage log: trips, miles, rate, and the mileage total.
  - A flags list: missing receipts, uncapped lines, and anything over a stated limit.
  - Nothing is submitted. The report is a draft the user reviews and files.

  ## Operating Rules
  - Never invent an amount, a mileage figure, or a receipt. If a number is missing, ask for it or mark the line as incomplete.
  - Never submit the report or contact an employer, a finance team, or a booking system.
  - Keep one currency through the whole report; convert foreign amounts only when the user gives the rate or the converted figure.
  - Per diem and itemized meals never mix on the same day; pick one and note the choice.
  - State the rate and the policy limits used, so the user can check them against the real policy.
---

## What it includes

Coming home from a trip with a pocket full of receipts is the worst part of traveling for work, because every receipt needs a date, a vendor, a category, and an amount before finance will touch it. This skill takes the receipts one at a time, sorts them into lodging, meals, transport, parking, and other, and adds a mileage log with the rate math done for you. If your trip pays a daily meal allowance instead of itemized meals, it applies the per diem per travel day and keeps it separate from the receipted lines. It totals everything by category, checks the totals against the policy limits you state, and flags the gaps: a missing receipt, a line over a cap, mileage with no rate. The result is a dated expense report draft with a grand total, ready for you to review and file. Nothing is submitted anywhere; the report stays a draft until you send it.

## Example

You return from a three-day client trip (Oct 13 to Oct 15) with nine receipts and 214 miles driven. You type in the receipts and the mileage, plus a meal per diem of 65 dollars a day, a lodging cap of 180 dollars a night, and a mileage rate of 0.70 dollars a mile. The skill returns this draft:

**Expense table**

| Date | Vendor | Category | Amount | Receipt status |
|---|---|---|---|---|
| Oct 13 | Harbor Inn | Lodging | $200.00 | Attached, flagged (over cap) |
| Oct 14 | Harbor Inn | Lodging | $175.00 | Attached |
| Oct 13 | Metro Cab | Transport | $28.50 | Attached |
| Oct 14 | Rideco | Transport | $34.00 | Attached |
| Oct 14 | Rideco | Transport | $22.50 | Attached |
| Oct 15 | Metro Cab | Transport | $15.00 | Attached |
| Oct 13 | Central Garage | Parking | $18.00 | Attached |
| Oct 14 | Central Garage | Parking | $18.00 | Attached |
| Oct 15 | Central Garage | Parking | $24.00 | Missing, flagged (amount from card statement) |
| Oct 13 to Oct 15 | Per diem, 3 days at $65.00 | Per diem | $195.00 | Not required |
| Oct 13 to Oct 15 | Mileage, 214 mi at $0.70 | Mileage | $149.80 | Not required |

**Category totals**

| Category | Total |
|---|---|
| Lodging | $375.00 |
| Transport | $100.00 |
| Parking | $60.00 |
| Per diem (own line, no itemized meals) | $195.00 |
| Mileage | $149.80 |
| **Grand total** | **$879.80** |

**Mileage log**

| Trip | Miles | Rate | Amount |
|---|---|---|---|
| Oct 13, home to client site | 107 | $0.70 | $74.90 |
| Oct 15, client site to home | 107 | $0.70 | $74.90 |
| **Total** | **214** | $0.70 | **$149.80** |

**Flags**

- Missing receipt: Oct 15 parking at Central Garage, $24.00. Attach the card statement before you file.
- Over a stated limit: Oct 13 lodging at Harbor Inn is $200.00 against the $180.00 nightly cap, which is $20.00 over. Note the overage before you file.
- Uncapped: transport and parking lines have no stated cap, so they are not checked against a limit.

Nothing is submitted. The report is a draft for you to review and file.
