---
title: "School Dashboard"
tagline: "Give it the school year's forms, fees, and dates; it keeps them in one board."
category: "productivity"
type: "space"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/school-dashboard.md"
source_verified: true
origin: "directory"
includes:
  - "Forms list with due dates and status"
  - "Fees list with amounts and paid status"
  - "Dates list with games and events"
version: "1.0.0"
date_added: "2026-11-15"
safety_notes: "The Space never emails the school, pays a fee, or shares family or school details outside the Space."
install_prompt: |
  Build a Space named "School Dashboard". Its full spec is below. Build the sections, fields, and views the spec names. Ask me before you connect any app. Confirm when the Space is in my sidebar.

  --- SOURCE ---
  # School Dashboard
  ## Purpose
  Hold a school year's forms, fees, dates, and game schedule in one board, so nothing due is missed and the week ahead is visible at a glance.
  ## Layout
  - Forms list: each form holds a name, due date, and status, done or pending.
  - Fees list: each fee holds a name, amount, due date, and paid status, with a total still owed.
  - Dates list: school events, holidays, and game schedule, each with a date, time, and place.
  ## Updates
  Optional Gmail read-only connection, to pull dates from school emails, only if you connect it. Manual edits always work.
  ## Connections
  Optional Gmail, read-only, only with your approval.
  ## Rules
  - Never emails the school or pays a fee.
  - Never shares family or school details outside the Space.
  - Entries come only from the ones added by hand or pulled from connected school emails.
source: |
  # School Dashboard
  ## Purpose
  Hold a school year's forms, fees, dates, and game schedule in one board, so nothing due is missed and the week ahead is visible at a glance.
  ## Layout
  - Forms list: each form holds a name, due date, and status, done or pending.
  - Fees list: each fee holds a name, amount, due date, and paid status, with a total still owed.
  - Dates list: school events, holidays, and game schedule, each with a date, time, and place.
  ## Updates
  Optional Gmail read-only connection, to pull dates from school emails, only if you connect it. Manual edits always work.
  ## Connections
  Optional Gmail, read-only, only with your approval.
  ## Rules
  - Never emails the school or pays a fee.
  - Never shares family or school details outside the Space.
  - Entries come only from the ones added by hand or pulled from connected school emails.
---

A school year runs on forms, fees, and dates that arrive in a steady stream of emails, papers in backpacks, and portal notices, and the cost of missing one is a late fee or a missed game. This Space puts the whole year in one board in your sidebar: forms with due dates and status, fees with amounts and paid status, and a dates list holding school events, holidays, and the game schedule.

The forms list shows what is still pending and when it is due, so a permission slip never surfaces the night before a trip. The fees list totals what is still owed, so the year's costs are visible instead of surprising you one charge at a time. The dates list holds each event with its date, time, and place, including games, so the week ahead is plain to see. Dates can be added by hand or pulled from school emails through an optional read-only Gmail connection, and nothing is emailed to the school or paid from the Space.

It pairs well with a weekly check of the board each Sunday night: five minutes keeps the forms, fees, and games straight for the week ahead.

## What it includes

- Forms list with name, due date, and done or pending status per form
- Fees list with name, amount, due date, and paid status, plus a total still owed
- Dates list with school events, holidays, and game schedule, each with date, time, and place

## Example

In September you add 6 forms, 4 fees totaling $185, and the fall game schedule. By October the board shows 2 forms still pending, $60 still owed, and Saturday's 10 AM away game at the middle school field.
