---
title: "Pet Care Log"
tagline: "Logs vet visits, shots, meds, and weight for each pet, and flags what is due next."
category: "home"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/pet-care-log.md"
source_verified: false
origin: "directory"
includes:
  - "A log for each pet with vet visits, vaccinations, medicines, feeding notes, and weight"
  - "A flag for shots, doses, and refills due within fourteen days"
  - "A weight history with the latest reading and the change since the last one"
  - "A visit history with the date, the reason, and what the vet said to watch"
  - "A short list of what is due next, with one line per item"
version: "1.0.0"
date_added: "2026-11-22"
safety_notes: "Never gives medical advice, diagnoses a pet, or changes a prescription. Dates, doses, and weights are quoted as given, and the user checks with their own vet before acting on anything health related."
install_prompt: |
  To install the Pet Care Log skill, save the skill source below as ~/workspace/skills/pet-care-log/SKILL.md, then tell Muse to use it whenever you want to log a vet visit, record a shot or a dose, check what is due next, or track a pet's weight.

  --- SOURCE ---
  ---
  name: pet-care-log
  description: Log vet visits, vaccinations, medicines, feeding, and weight for each pet, and flag shots, doses, and refills due soon. Use when the user wants a pet care record, a due list, or a weight history to share with the vet.
  ---

  ## Purpose
  A pet's care is a small pile of dates: vet visits, shots, pills, weigh-ins, and the next refill. This skill keeps one log per pet with all of it in one place, so the rabies shot, the monthly chew, and the last recorded weight are easy to find. It flags what is due soon, tracks weight over time, and keeps a short history of each visit, so nothing lapses and the vet gets a clear record at the next appointment.

  ## Workflow
  1. Take the pets the user names, plus the vet visits, shots, medicines, and weights for each.
  2. Build one log per pet: visits, vaccinations, medicines with dose schedule, feeding notes, and weight history.
  3. Work out what is due next: shots, doses, and refills due within fourteen days, sorted by date.
  4. Track weight over time: latest reading, change since the last one, and a flag for a sharp move either way.
  5. Update the log whenever the user reports a visit, a dose given, or a new weight.
  6. Return a short list of what is due next, with one line per item, plus a one-line summary per pet.

  ## Output Contract
  - A log per pet with visits, shots, medicines, feeding notes, and weight history.
  - A due list sorted by date, one line per item, with the pet, the item, and the date.
  - A flag for anything due within fourteen days.
  - A weight history with the latest reading and the change since the last reading.
  - A visit history with the date, the reason, and what the vet said to watch.
  - No medical advice, no diagnosis, no prescription change.

  ## Operating Rules
  - Never give medical advice, diagnose, or change a prescription. Point the user to their vet for health questions.
  - Quote dates, doses, and weights exactly as given. Do not guess.
  - Say when a date or dose is unconfirmed instead of guessing.
  - Ask once for missing facts, then log with what you have.
source: |
  ---
  name: pet-care-log
  description: Log vet visits, vaccinations, medicines, feeding, and weight for each pet, and flag shots, doses, and refills due soon. Use when the user wants a pet care record, a due list, or a weight history to share with the vet.
  ---

  ## Purpose
  A pet's care is a small pile of dates: vet visits, shots, pills, weigh-ins, and the next refill. This skill keeps one log per pet with all of it in one place, so the rabies shot, the monthly chew, and the last recorded weight are easy to find. It flags what is due soon, tracks weight over time, and keeps a short history of each visit, so nothing lapses and the vet gets a clear record at the next appointment.

  ## Workflow
  1. Take the pets the user names, plus the vet visits, shots, medicines, and weights for each.
  2. Build one log per pet: visits, vaccinations, medicines with dose schedule, feeding notes, and weight history.
  3. Work out what is due next: shots, doses, and refills due within fourteen days, sorted by date.
  4. Track weight over time: latest reading, change since the last one, and a flag for a sharp move either way.
  5. Update the log whenever the user reports a visit, a dose given, or a new weight.
  6. Return a short list of what is due next, with one line per item, plus a one-line summary per pet.

  ## Output Contract
  - A log per pet with visits, shots, medicines, feeding notes, and weight history.
  - A due list sorted by date, one line per item, with the pet, the item, and the date.
  - A flag for anything due within fourteen days.
  - A weight history with the latest reading and the change since the last reading.
  - A visit history with the date, the reason, and what the vet said to watch.
  - No medical advice, no diagnosis, no prescription change.

  ## Operating Rules
  - Never give medical advice, diagnose, or change a prescription. Point the user to their vet for health questions.
  - Quote dates, doses, and weights exactly as given. Do not guess.
  - Say when a date or dose is unconfirmed instead of guessing.
  - Ask once for missing facts, then log with what you have.
---

A pet's care is a small pile of dates: vet visits, shots, pills, weigh-ins, and the next refill. This skill keeps one log per pet with all of it in one place, so the rabies shot, the monthly chew, and the last recorded weight are easy to find. It flags what is due soon, tracks weight over time, and keeps a short history of each visit, so nothing lapses and the vet gets a clear record at the next appointment. No medical advice is given; dates, doses, and weights are quoted as given, never guessed.

## What it includes

- A log for each pet with vet visits, vaccinations, medicines, feeding notes, and weight
- A flag for shots, doses, and refills due within fourteen days
- A weight history with the latest reading and the change since the last one
- A visit history with the date, the reason, and what the vet said to watch
- A short list of what is due next, with one line per item

## Example

With a reference date of November 22, Milo the beagle had his annual checkup on November 3, weighs 28 pounds (27 pounds on August 10), and takes a heartworm chew on the first of each month. The vet said to watch his weight. His rabies shot is due December 12 and his next heartworm dose is December 1. The skill logs the visit, the weight, and the chew schedule, then returns:

Due list, sorted by date:
- Milo, heartworm chew, Dec 1 (flag: due within 14 days, 9 days out)
- Milo, rabies shot, Dec 12 (20 days out, outside the 14-day window)

Weight: Milo is 28 pounds, up 1 pound since August 10.

Visit history: Nov 3, annual checkup, vet said to watch his weight.

Only the December 1 dose is flagged this week. You book the vet visit before the rabies shot lapses.
