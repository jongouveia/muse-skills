---
title: "Bill Due Radar"
tagline: "Weekly inbox scan; one list of every bill due in the next 14 days."
category: "money"
type: "workflow"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/bill-due-radar.md"
source_verified: true
origin: "directory"
includes: ["instructions", "workflow", "schedule"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Reads your inbox through the assistant's own connected accounts,
  on the schedule you set. Writes only the report back to you.
  Never pays a bill, never opens a payment page, never moves money.
install_prompt: |
  Set up the "Bill Due Radar" workflow. Its full source is below.
  Default schedule: Sunday at 18:00 local time. Ask me to confirm or
  change this time before you create the recurring job. Once I
  confirm, create the job. Tell me the job name and the confirmed
  schedule when it is set up.

  --- SOURCE ---
  name: bill-due-radar
  description: Weekly scan of the inbox for bills and statements; one list of what is due in the next 14 days, with amounts and due dates. Trigger phrases: "what bills are due", "check upcoming bills", "run bill radar".

  schedule: weekly, Sunday at 18:00 local time (cron: 0 18 * * 0). Confirm the time with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "what bills are due" request.

  steps:
    1. Search the inbox for billing statements, payment reminders, and autopay notices from the last 30 days, through the assistant's own connected accounts.
    2. For each biller, take the most recent statement: amount due and due date.
    3. Keep only bills due within the next 14 days. Drop anything already marked paid or covered by an autopay confirmation.
    4. Sort by due date, soonest first.
    5. Write the report in the Output shape and send it. If nothing is due, send the all-clear line and nothing else.

  output:
    - One line per bill: biller, amount, due date, autopay status (yes / no / unknown)
    - Total due across the list
    - All-clear line when nothing is due: "Nothing due in the next 14 days."

  rules:
    - Read only. Never pay a bill, open a payment page, or move money.
    - Never ask the user for banking logins or payment credentials.
    - If a statement is ambiguous about the amount or date, mark it "check manually" rather than guess.
    - Run only on the confirmed schedule or when asked.
source: |
  name: bill-due-radar
  description: Weekly scan of the inbox for bills and statements; one list of what is due in the next 14 days, with amounts and due dates. Trigger phrases: "what bills are due", "check upcoming bills", "run bill radar".

  schedule: weekly, Sunday at 18:00 local time (cron: 0 18 * * 0). Confirm the time with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "what bills are due" request.

  steps:
    1. Search the inbox for billing statements, payment reminders, and autopay notices from the last 30 days, through the assistant's own connected accounts.
    2. For each biller, take the most recent statement: amount due and due date.
    3. Keep only bills due within the next 14 days. Drop anything already marked paid or covered by an autopay confirmation.
    4. Sort by due date, soonest first.
    5. Write the report in the Output shape and send it. If nothing is due, send the all-clear line and nothing else.

  output:
    - One line per bill: biller, amount, due date, autopay status (yes / no / unknown)
    - Total due across the list
    - All-clear line when nothing is due: "Nothing due in the next 14 days."

  rules:
    - Read only. Never pay a bill, open a payment page, or move money.
    - Never ask the user for banking logins or payment credentials.
    - If a statement is ambiguous about the amount or date, mark it "check manually" rather than guess.
    - Run only on the confirmed schedule or when asked.
---

Bill Due Radar runs every Sunday evening and reads your inbox for
billing statements, then gives you one list: every bill due in the
next 14 days, with amounts and due dates, soonest first.
Autopay-confirmed bills are filtered out.

## What it includes

- Weekly inbox sweep for statements and reminders
- 14-day due window, sorted soonest first
- Autopay detection so paid bills don't clutter the list
- One-line all-clear when nothing is due

## Example

Output:

```
Bills due in the next 14 days
- National Grid: $84.12, due Sep 18, autopay: no
- City water: $46.00, due Sep 22, autopay: yes
Total due: $130.12
```
