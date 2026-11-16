---
title: "Trip Planner Board"
tagline: "Give it one trip; it keeps the bookings, packing list, and dates in one view."
category: "productivity"
type: "space"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/trip-planner-board.md"
source_verified: true
origin: "directory"
includes:
  - "Trip header"
  - "Booking cards"
  - "Packing list"
  - "Day-by-day plan"
  - "Cost tally"
version: "1.0.0"
date_added: "2026-11-13"
safety_notes: "The Space never books, changes, or cancels a booking and never shares trip details outside the Space."
install_prompt: |
  Build a Space named "Trip Planner Board". Its full spec is below. Build the sections, fields, and views the spec names. Ask me before you connect any app. Confirm when the Space is in my sidebar.

  --- SOURCE ---
  # Trip Planner Board
  ## Purpose
  Keep one trip in a single view: its bookings, its day plan, its packing list, and its running cost, checked daily while traveling so nothing is missed.
  ## Layout
  - Trip header: destination, dates, travelers, and confirmation numbers.
  - Booking cards for flights, stays, and transport: date, time, cost, paid or unpaid, confirmation number, and a link to the confirmation.
  - Packing list grouped by person, with a check-off per item.
  - Day-by-day plan: one line per date with the activities planned and any notes.
  - Cost tally: total paid against the trip budget, plus the total still unpaid, from the costs entered.
  ## Updates
  None. Manual edits only.
  ## Connections
  None.
  ## Rules
  - Never books, changes, or cancels a booking.
  - Never shares trip details outside the Space.
  - Cost figures come only from the amounts entered.
source: |
  # Trip Planner Board
  ## Purpose
  Keep one trip in a single view: its bookings, its day plan, its packing list, and its running cost, checked daily while traveling so nothing is missed.
  ## Layout
  - Trip header: destination, dates, travelers, and confirmation numbers.
  - Booking cards for flights, stays, and transport: date, time, cost, paid or unpaid, confirmation number, and a link to the confirmation.
  - Packing list grouped by person, with a check-off per item.
  - Day-by-day plan: one line per date with the activities planned and any notes.
  - Cost tally: total paid against the trip budget, plus the total still unpaid, from the costs entered.
  ## Updates
  None. Manual edits only.
  ## Connections
  None.
  ## Rules
  - Never books, changes, or cancels a booking.
  - Never shares trip details outside the Space.
  - Cost figures come only from the amounts entered.
---

A trip scatters across confirmation emails, a notes app, and a packing list on the kitchen counter, and by departure morning nobody is sure which booking is paid, what time the flight leaves, or whether the chargers are packed. This Space puts one trip in a single view in your sidebar: the bookings, the day plan, the packing list, and the running cost, all in the same place.

You start with the trip header: destination, dates, travelers, and the confirmation numbers that matter at check-in. Each booking gets its own card with date, time, cost, paid or unpaid, and a link back to the confirmation. The packing list groups items by person with a check-off, and the day plan holds one line per date with what is planned and any notes. The cost tally totals what is paid against the trip budget and shows what is still unpaid, so the spend stays visible while you are still traveling.

It pairs well with the trip-expense-reimbursement skill: keep the trip here while you travel, then hand the receipts to that skill when you get home.

## What it includes

- Trip header with destination, dates, travelers, and confirmation numbers
- Booking cards for flights, stays, and transport with date, time, cost, paid status, and link
- Packing list grouped by person with check-off
- Day-by-day plan with activities and notes per date
- Cost tally showing total paid against the trip budget and total still unpaid

## Example

You set up a three-night New York trip for three people with a $1,600 budget. By departure day the board shows the train and the stay booked, two packing items still unchecked, and $1,450 spent, with Saturday holding the museum visit and the dinner reservation.
