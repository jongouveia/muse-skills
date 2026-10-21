---
title: "Home Maintenance Calendar"
tagline: "Builds a year-round home maintenance schedule for your home type and climate: what to do, when, and what to skip."
category: "home"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/home-maintenance-calendar.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "seasonal-checklist", "home-profile-template"]
version: "1.0.0"
date_added: 2026-10-17
safety_notes: |
  Gives maintenance guidance, not licensed advice. It never tells
  you to touch electrical panels, gas lines, or steep roofs; those
  are always flagged as hire-a-pro work. It never invents product
  recalls or code requirements for your area. It never schedules
  anything in your calendar, contacts a contractor, or buys parts
  on your behalf.
install_prompt: |
  Install the "Home Maintenance Calendar" skill. Its full source is
  below. Create it at ~/workspace/skills/home-maintenance-calendar/SKILL.md
  following skill-creator conventions (name and description
  frontmatter; Purpose, Workflow, Output Contract, Operating Rules
  sections). Then confirm it is installed and tell me the trigger
  phrases.

  --- SOURCE ---
  ---
  name: home-maintenance-calendar
  description: Turns your home's details into a year-round maintenance calendar: seasonal tasks, frequencies, DIY-vs-pro calls, and the items you should never skip. Trigger phrases: "home maintenance schedule", "what should I check on my house this season", "build my home maintenance calendar", "home upkeep checklist".
  ---
  # Purpose

  Do one narrow job: keep a house from quietly falling apart. The
  skill takes a short description of the home and produces a
  12-month maintenance calendar: which tasks, when to do them, how
  hard they are, and which ones you should never skip. It separates
  safe DIY work from hire-a-pro work, and it flags the high-stakes
  items (water, safety, HVAC) that cost the most when ignored.

  # Workflow

  1. Ask for the home profile: home type (single-family, condo,
     apartment, townhouse), age of the home, region or climate,
     and which systems it has (forced-air heat, central AC, gas
     fireplace, sump pump, septic, chimney, gutters).
  2. Build the 12-month calendar from seasonal tasks plus
     frequency-based tasks (monthly, quarterly, yearly). For each
     task give the month or interval, a one-line what-and-why, and
     the effort level (15 minutes, an hour, half a day).
  3. Mark every task DIY or hire-a-pro. Electrical, gas, and
     roof-slope work are always hire-a-pro. For pro work, include a
     rough cost range so the user can budget.
  4. Name the never-skip list: the 5 tasks where skipping costs
     real money or creates real danger (smoke and CO detectors,
     gutters and drainage, furnace filter, dryer vent, water
     shutoff valve check). Explain the consequence of skipping
     each one.
  5. Suggest a reminder cadence: which tasks pair well with a
     monthly or quarterly nudge. Do not create any calendar events
     or reminders; just propose the schedule and ask before any
     action.
  6. If the user rents, reframe everything: what is the tenant's
     job, what belongs to the landlord, and what to document in
     writing before calling.

  # Output Contract

  - A month-by-month calendar of tasks with effort level and
    one-line what-and-why
  - DIY vs hire-a-pro callout on every task, with rough pro cost
    ranges
  - A never-skip list of 5 items with the consequence of skipping
  - A suggested reminder cadence, no reminders created
  - Renter reframing when the user rents

  Keep the whole answer scannable: the calendar as a list, then the
  never-skip list, then the cadence.

  # Operating Rules

  - Never advise touching electrical panels, gas lines, or walking
    a steep roof. Those are always hire-a-pro, no exceptions.
  - Never invent local code requirements or recall notices.
  - Tune the calendar to the stated climate: freeze protection
    only where it freezes, humidity tasks only where it applies.
  - Never create calendar events, reminders, or contact a
    contractor without being asked explicitly.
  - Keep tasks concrete. "Check gutters" is not enough; say what
    to look for.
source: |
  ---
  name: home-maintenance-calendar
  description: Turns your home's details into a year-round maintenance calendar: seasonal tasks, frequencies, DIY-vs-pro calls, and the items you should never skip. Trigger phrases: "home maintenance schedule", "what should I check on my house this season", "build my home maintenance calendar", "home upkeep checklist".
  ---
  # Purpose

  Do one narrow job: keep a house from quietly falling apart. The
  skill takes a short description of the home and produces a
  12-month maintenance calendar: which tasks, when to do them, how
  hard they are, and which ones you should never skip. It separates
  safe DIY work from hire-a-pro work, and it flags the high-stakes
  items (water, safety, HVAC) that cost the most when ignored.

  # Workflow

  1. Ask for the home profile: home type (single-family, condo,
     apartment, townhouse), age of the home, region or climate,
     and which systems it has (forced-air heat, central AC, gas
     fireplace, sump pump, septic, chimney, gutters).
  2. Build the 12-month calendar from seasonal tasks plus
     frequency-based tasks (monthly, quarterly, yearly). For each
     task give the month or interval, a one-line what-and-why, and
     the effort level (15 minutes, an hour, half a day).
  3. Mark every task DIY or hire-a-pro. Electrical, gas, and
     roof-slope work are always hire-a-pro. For pro work, include a
     rough cost range so the user can budget.
  4. Name the never-skip list: the 5 tasks where skipping costs
     real money or creates real danger (smoke and CO detectors,
     gutters and drainage, furnace filter, dryer vent, water
     shutoff valve check). Explain the consequence of skipping
     each one.
  5. Suggest a reminder cadence: which tasks pair well with a
     monthly or quarterly nudge. Do not create any calendar events
     or reminders; just propose the schedule and ask before any
     action.
  6. If the user rents, reframe everything: what is the tenant's
     job, what belongs to the landlord, and what to document in
     writing before calling.

  # Output Contract

  - A month-by-month calendar of tasks with effort level and
    one-line what-and-why
  - DIY vs hire-a-pro callout on every task, with rough pro cost
    ranges
  - A never-skip list of 5 items with the consequence of skipping
  - A suggested reminder cadence, no reminders created
  - Renter reframing when the user rents

  Keep the whole answer scannable: the calendar as a list, then the
  never-skip list, then the cadence.

  # Operating Rules

  - Never advise touching electrical panels, gas lines, or walking
    a steep roof. Those are always hire-a-pro, no exceptions.
  - Never invent local code requirements or recall notices.
  - Tune the calendar to the stated climate: freeze protection
    only where it freezes, humidity tasks only where it applies.
  - Never create calendar events, reminders, or contact a
    contractor without being asked explicitly.
  - Keep tasks concrete. "Check gutters" is not enough; say what
    to look for.
---

Home Maintenance Calendar exists for the moment you realize the
house has quietly needed attention for months and nobody wrote it
down. Furnace filters, gutters, dryer vents, detector batteries,
hose bibs before the first freeze: individually trivial, easy to
forget, and expensive when ignored. You describe the home once,
type, age, climate, which systems it has, and the skill builds a
12-month calendar of tasks with the month or interval, a one-line
what-and-why, and an honest effort level.

The calendar separates safe DIY work from hire-a-pro work with no
gray area. Electrical, gas, and anything on a steep roof are always
pro jobs, and the skill gives a rough cost range so those can be
budgeted. A never-skip list of five tasks carries the real weight:
smoke and CO detectors, gutters and drainage, the furnace filter,
the dryer vent, and the main water shutoff valve. For each, it says
what skipping costs, so the list reads like prevention instead of
nagging. Renters get a reframed version: what is your job, what is
the landlord's, and what to put in writing before you call.

The schedule is tuned to the climate you give it. Freeze protection
appears only where it freezes; humidity and storm tasks only where
they apply. It proposes a reminder cadence for the repeating work
but creates nothing on its own: no calendar events, no contractor
calls, no parts ordered. It gives advice, stops there, and never
tells you to touch an electrical panel or a gas line.

## What it includes

- A home profile template: type, age, climate, and systems check
- A 12-month seasonal calendar with effort levels and one-line what-and-why
- DIY vs hire-a-pro callouts on every task, with rough pro cost ranges
- A never-skip list of five items with the consequence of skipping each
- A suggested reminder cadence for repeating tasks, with a renter reframing

## Example

Input: single-family home, 1990s build, New England climate, forced-air
gas heat, central AC, gutters, no sump pump.

Output:

```
- Oct: clean gutters (DIY, 1 hr) - water over the fascia rots it
  before winter. Hire-a-pro if the roof is steep: $150-300.
- Oct: shut off and drain hose bibs (DIY, 15 min) - a burst pipe
  floods the basement in January.
- Nov: test smoke and CO detectors, replace batteries (DIY, 20
  min) - furnace season starts now.
- Dec: check furnace filter; replace if gray (DIY, 10 min) -
  clogged filters kill efficiency and crack heat exchangers.
- Never skip: detectors, gutters, furnace filter, dryer vent,
  main water shutoff test.
- Reminder cadence: monthly nudge for the filter in winter,
  quarterly for detectors, seasonal for gutters.
```
