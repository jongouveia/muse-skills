---
title: "Car Maintenance Log"
tagline: "Logs oil changes, tires, and repairs for each car, and flags the next service due."
category: "home"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/car-maintenance-log.md"
source_verified: false
origin: "directory"
includes:
  - "A log for each car with service history, mileage, and receipts"
  - "A flag for oil changes, tire rotations, and inspections due soon"
  - "A cost tally per car with the total spent this year"
  - "A service history with the date, the shop, and what was done"
  - "A short list of what is due next, with one line per item"
version: "1.0.0"
date_added: "2026-11-23"
safety_notes: "Never gives repair advice or diagnoses a mechanical problem. Dates, mileage, and costs are quoted as given, and the user checks with their own mechanic before acting on anything safety related."
install_prompt: |
  To install the Car Maintenance Log skill, save the skill source below as ~/workspace/skills/car-maintenance-log/SKILL.md, then tell Muse to use it whenever you want to log a service visit, check what is due next, or total what a car has cost this year.

  --- SOURCE ---
  ---
  name: car-maintenance-log
  description: Log service visits, mileage, and costs for each car, and flag oil changes, tire rotations, and inspections due soon. Use when the user wants a car service record, a due list, or a cost tally for a car they own.
  ---

  ## Purpose
  A car's service history is a small pile of dates and numbers: oil changes, tire rotations, inspections, repairs, and the mileage at each visit. This skill keeps one log per car with all of it in one place, so the last oil change, the tire rotation, and the inspection date are easy to find. It flags what is due soon, totals what each car has cost this year, and keeps a short history of every visit, so nothing lapses and the shop gets a clear record at the next appointment.

  ## Workflow
  1. Take the cars the user names, plus the service visits, mileage readings, and receipts for each.
  2. Build one log per car: service history with the date, the shop, and what was done, plus mileage and costs.
  3. Work out what is due next: oil changes, tire rotations, and inspections due within thirty days or by mileage, sorted by date.
  4. Total the cost per car: the sum spent this year, with the largest items named.
  5. Update the log whenever the user reports a service visit, a new mileage reading, or a receipt.
  6. Return a short list of what is due next, with one line per item, plus a one-line summary per car.

  ## Output Contract
  - A log per car with service history, mileage, and costs.
  - A due list sorted by date, one line per item, with the car, the item, and the date or mileage.
  - A flag for anything due within thirty days or within 500 miles.
  - A cost tally per car with the total spent this year.
  - A service history with the date, the shop, and what was done.
  - No repair advice, no diagnosis, no safety verdict.

  ## Operating Rules
  - Never give repair advice, diagnose a problem, or judge whether a car is safe to drive. Point the user to their mechanic for those questions.
  - Quote dates, mileage, and costs exactly as given. Do not guess.
  - Say when a date or mileage figure is unconfirmed instead of guessing.
  - Ask once for missing facts, then log with what you have.
source: |
  ---
  name: car-maintenance-log
  description: Log service visits, mileage, and costs for each car, and flag oil changes, tire rotations, and inspections due soon. Use when the user wants a car service record, a due list, or a cost tally for a car they own.
  ---

  ## Purpose
  A car's service history is a small pile of dates and numbers: oil changes, tire rotations, inspections, repairs, and the mileage at each visit. This skill keeps one log per car with all of it in one place, so the last oil change, the tire rotation, and the inspection date are easy to find. It flags what is due soon, totals what each car has cost this year, and keeps a short history of every visit, so nothing lapses and the shop gets a clear record at the next appointment.

  ## Workflow
  1. Take the cars the user names, plus the service visits, mileage readings, and receipts for each.
  2. Build one log per car: service history with the date, the shop, and what was done, plus mileage and costs.
  3. Work out what is due next: oil changes, tire rotations, and inspections due within thirty days or by mileage, sorted by date.
  4. Total the cost per car: the sum spent this year, with the largest items named.
  5. Update the log whenever the user reports a service visit, a new mileage reading, or a receipt.
  6. Return a short list of what is due next, with one line per item, plus a one-line summary per car.

  ## Output Contract
  - A log per car with service history, mileage, and costs.
  - A due list sorted by date, one line per item, with the car, the item, and the date or mileage.
  - A flag for anything due within thirty days or within 500 miles.
  - A cost tally per car with the total spent this year.
  - A service history with the date, the shop, and what was done.
  - No repair advice, no diagnosis, no safety verdict.

  ## Operating Rules
  - Never give repair advice, diagnose a problem, or judge whether a car is safe to drive. Point the user to their mechanic for those questions.
  - Quote dates, mileage, and costs exactly as given. Do not guess.
  - Say when a date or mileage figure is unconfirmed instead of guessing.
  - Ask once for missing facts, then log with what you have.
---

A car's service history is a small pile of dates and numbers: oil changes, tire rotations, inspections, repairs, and the mileage at each visit. This skill keeps one log per car with all of it in one place, so the last oil change, the tire rotation, and the inspection date are easy to find. It flags what is due soon, totals what each car has cost this year, and keeps a short history of every visit, so nothing lapses and the shop gets a clear record at the next appointment. No repair advice is given; dates, mileage, and costs are quoted as given, never guessed.

## What it includes

- A log for each car with service history, mileage, and receipts
- A flag for oil changes, tire rotations, and inspections due soon
- A cost tally per car with the total spent this year
- A service history with the date, the shop, and what was done
- A short list of what is due next, with one line per item

## Example

Mara tells the skill about her SUV on November 25, 2026. The oil was changed and the tires were rotated on October 12 at Lakeview Auto, at 26,400 miles, and the tire rotation cost $74.95. The odometer now reads 31,050 miles. The next oil change is due at 31,400 miles or on December 12, the inspection is due March 18, 2027, and she has spent $412.80 on the car this year. The skill returns:

Due next, sorted by date:
- FLAG: SUV, oil change, due December 12, 2026 or at 31,400 miles (17 days and 350 miles away)
- SUV, inspection, due March 18, 2027 (113 days away, not flagged)

SUV log:
- Service history: October 12, 2026, Lakeview Auto, oil change and tire rotation, at 26,400 miles
- Mileage: 31,050 miles, as given
- Costs: tire rotation $74.95 (oil change cost not given); total spent this year $412.80

Summary: SUV, 31,050 miles, 1 item flagged, $412.80 spent this year.
