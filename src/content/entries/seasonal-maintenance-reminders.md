---
title: "Seasonal Maintenance Reminders"
tagline: "Furnace filter, gutters, hose bibs, before they break."
category: "home"
type: "workflow"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/seasonal-maintenance-reminders.md"
source_verified: true
origin: "directory"
includes: ["instructions", "workflow", "schedule"]
version: "1.0.0"
date_added: 2026-09-10
safety_notes: |
  Sends seasonal task reminders on the schedule you set. Writes
  to you and nothing else. Never schedules service or contacts
  anyone.
install_prompt: |
  Set up the "Seasonal Maintenance Reminders" workflow. Its full
  source is below. Default schedule: first of March, June,
  September, and December at 09:00 local time. Ask me to confirm
  or change this before you create the recurring job. Once I
  confirm, create the job. Tell me the job name and the confirmed
  schedule when it is set up.

  --- SOURCE ---
  name: seasonal-maintenance-reminders
  description: Quarterly home-maintenance reminders: the seasonal tasks people forget until something breaks, with the why behind each one. Trigger phrases: "home maintenance checklist", "what should I do around the house this season", "seasonal home tasks".

  schedule: quarterly, March 1, June 1, September 1, December 1 at 09:00 local time. Confirm with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "home maintenance checklist" request.

  steps:
    1. First run: ask the user for home type (house, condo, apartment) and heating type (furnace, boiler, heat pump) so the list fits.
    2. Each quarter, send the season's checklist:
       - Spring: gutters, AC service, hose bibs on, dryer vent
       - Summer: deck check, pest sweep, fridge coils
       - Fall: furnace filter, heating service, hose bibs off and drained, gutters again, chimney if applicable
       - Winter: pipe insulation check, ice-dam watch, furnace filter
    3. One line per task: what to do and the one-sentence why.
    4. Mark the 2-3 "don't skip" items per season: the ones that cause expensive damage.

  output:
    - Season checklist: one line per task, what, and why
    - Done tracking: check off what the user reports done; carry the rest to next quarter

  rules:
    - Reminders only. Never schedule service or contact contractors.
    - The list fits the home type. Apartment renters don't get chimney items.
    - "Don't skip" is earned: only tasks where skipping causes real damage.
    - Run only on the confirmed schedule or when asked.
source: |
  name: seasonal-maintenance-reminders
  description: Quarterly home-maintenance reminders: the seasonal tasks people forget until something breaks, with the why behind each one. Trigger phrases: "home maintenance checklist", "what should I do around the house this season", "seasonal home tasks".

  schedule: quarterly, March 1, June 1, September 1, December 1 at 09:00 local time. Confirm with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "home maintenance checklist" request.

  steps:
    1. First run: ask the user for home type (house, condo, apartment) and heating type (furnace, boiler, heat pump) so the list fits.
    2. Each quarter, send the season's checklist:
       - Spring: gutters, AC service, hose bibs on, dryer vent
       - Summer: deck check, pest sweep, fridge coils
       - Fall: furnace filter, heating service, hose bibs off and drained, gutters again, chimney if applicable
       - Winter: pipe insulation check, ice-dam watch, furnace filter
    3. One line per task: what to do and the one-sentence why.
    4. Mark the 2-3 "don't skip" items per season: the ones that cause expensive damage.

  output:
    - Season checklist: one line per task, what, and why
    - Done tracking: check off what the user reports done; carry the rest to next quarter

  rules:
    - Reminders only. Never schedule service or contact contractors.
    - The list fits the home type. Apartment renters don't get chimney items.
    - "Don't skip" is earned: only tasks where skipping causes real damage.
    - Run only on the confirmed schedule or when asked.
---

Seasonal Maintenance Reminders runs quarterly and sends the season's
home checklist: each task with its one-sentence why, and the 2-3
"don't skip" items flagged (the ones where forgetting means expensive
damage). It fits the list to your home type, so renters don't get
chimney items.

## What it includes

- Quarterly seasonal checklists (spring, summer, fall, winter)
- One-line why per task
- "Don't skip" flags on the expensive-if-ignored items
- Done tracking across quarters

## Example

Output:

```
Fall checklist, house, forced hot air

- Furnace filter, swap it; a clogged filter kills efficiency. [don't skip]
- Heating service, annual tune-up before you need heat.
- Hose bibs off and drained: frozen pipes burst. [don't skip]
- Gutters: clear before the leaves finish.
- Chimney sweep: only if you burned wood last winter.
```
