---
title: "Daily Brief"
tagline: "Weekday mornings: your calendar, weather that matters, and top 3 tasks."
category: "productivity"
type: "workflow"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/daily-brief.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "schedule"]
version: "1.0.0"
date_added: 2026-09-14
safety_notes: |
  Reads your calendar and task list through the assistant's own
  connected accounts, on the schedule you set. Writes the brief
  to you and nothing else. Never messages anyone.
install_prompt: |
  Set up the "Daily Brief" workflow. Its full source is below.
  Default schedule: weekdays at 07:00 local time. Ask me to
  confirm or change this time before you create the recurring
  job. Once I confirm, create the job. Tell me the job name and
  the confirmed schedule when it is set up.

  --- SOURCE ---
  name: daily-brief
  description: Weekday morning brief, today's calendar, weather that affects your plans, and your top 3 tasks in one short message. Trigger phrases: "morning brief", "what's today look like", "daily briefing".

  schedule: weekdays at 07:00 local time. Confirm the time with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "morning brief" request.

  steps:
    1. Pull today's calendar events with times and locations.
    2. Check the weather for the user's location. Mention it only if it affects plans: rain during commute hours, extreme temps, anything that changes what to wear or whether to drive.
    3. Pull the user's task list. Pick the top 3 by deadline and stated priority. If the list is empty, say so instead of inventing tasks.
    4. Flag conflicts: overlapping events, or a task deadline colliding with a packed day.
    5. Write the brief in the Output shape and send it. Keep it short enough to read in 30 seconds.

  output:
    - Today: events in order with times, one line each
    - Weather: only if it affects plans, one line
    - Top 3: the day's priorities, one line each
    - Heads up: conflicts or tight spots, one line each

  rules:
    - 30-second read. If it needs scrolling, it's too long.
    - Weather gets mentioned only when it changes a decision.
    - Tasks come from the user's list, not from inference.
    - Run only on the confirmed schedule or when asked.
source: |
  name: daily-brief
  description: Weekday morning brief, today's calendar, weather that affects your plans, and your top 3 tasks in one short message. Trigger phrases: "morning brief", "what's today look like", "daily briefing".

  schedule: weekdays at 07:00 local time. Confirm the time with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "morning brief" request.

  steps:
    1. Pull today's calendar events with times and locations.
    2. Check the weather for the user's location. Mention it only if it affects plans: rain during commute hours, extreme temps, anything that changes what to wear or whether to drive.
    3. Pull the user's task list. Pick the top 3 by deadline and stated priority. If the list is empty, say so instead of inventing tasks.
    4. Flag conflicts: overlapping events, or a task deadline colliding with a packed day.
    5. Write the brief in the Output shape and send it. Keep it short enough to read in 30 seconds.

  output:
    - Today: events in order with times, one line each
    - Weather: only if it affects plans, one line
    - Top 3: the day's priorities, one line each
    - Heads up: conflicts or tight spots, one line each

  rules:
    - 30-second read. If it needs scrolling, it's too long.
    - Weather gets mentioned only when it changes a decision.
    - Tasks come from the user's list, not from inference.
    - Run only on the confirmed schedule or when asked.
---

Daily Brief runs on weekday mornings and tells you the day in 30
seconds: your calendar in order, weather only if it changes a
decision, your top 3 tasks, and any conflicts worth knowing about
before they happen.

## What it includes

- Calendar events in order with times
- Decision-relevant weather only
- Top 3 tasks by deadline and priority
- Conflict flags

## Example

Output:

```
Mon Sep 14
Today: 9:00 standup, 11:30 dentist (leave by 11:00), 2:00 client call
Weather: rain 8-10am, bring the jacket for the dentist run
Top 3: send the proposal, review the mockups, pay the electric bill
Heads up: dentist + client call leaves 90 min for lunch and prep
```
