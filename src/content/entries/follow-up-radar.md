---
title: "Follow-up Radar"
tagline: "Finds your unanswered promises and flags the ones that went quiet."
category: "productivity"
type: "workflow"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/follow-up-radar.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "schedule"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Reads your sent mail through the assistant's own connected
  accounts, on the schedule you set. Writes only the report back to
  you. Never sends a follow-up on your behalf.
install_prompt: |
  Install the "Follow-up Radar" workflow. Its full source is below. Create it at
  ~/workspace/skills/follow-up-radar/SKILL.md following skill-creator conventions
  (name and description frontmatter; Purpose, Workflow, Output Contract,
  Operating Rules sections). Confirm it is installed and tell me the
  trigger phrases. Then, as a separate step, propose the default schedule
  (Monday at 08:00 local time) and wait for me to confirm or change it before you create
  any recurring job.

  --- SOURCE ---
  name: follow-up-radar
  description: Weekly scan of sent mail for "I'll get back to you" promises; flags the ones with no reply after 7 days. Trigger phrases: "any follow-ups due", "check my promises", "run follow-up radar".

  schedule: weekly, Monday at 08:00 local time (cron: 0 8 * * 1). Confirm the time with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "any follow-ups due" request.

  steps:
    1. Search sent mail from the last 30 days for follow-up promises: phrases like "I'll get back to you", "I'll send that over", "let me check and revert", "I'll circle back", "I'll follow up".
    2. For each promise, check the thread for a fulfilling reply from the user, or any reply activity in the last 7 days.
    3. Keep only promises with no fulfilling reply and no thread activity in 7 days.
    4. Sort oldest first. Write the report in the Output shape and send it. If nothing is overdue, send nothing at all.

  output:
    - One line per overdue promise: thread subject and person, the promise quoted, days quiet, and a suggested next step
    - Quiet weeks: no message

  rules:
    - Read only. Never send a follow-up email on the user's behalf.
    - Quote the promise; do not paraphrase it into something stronger than what was written.
    - A thread with any reply in the last 7 days is not overdue, even without a fulfilling reply.
    - Run only on the confirmed schedule or when asked.
source: |
  name: follow-up-radar
  description: Weekly scan of sent mail for "I'll get back to you" promises; flags the ones with no reply after 7 days. Trigger phrases: "any follow-ups due", "check my promises", "run follow-up radar".

  schedule: weekly, Monday at 08:00 local time (cron: 0 8 * * 1). Confirm the time with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "any follow-ups due" request.

  steps:
    1. Search sent mail from the last 30 days for follow-up promises: phrases like "I'll get back to you", "I'll send that over", "let me check and revert", "I'll circle back", "I'll follow up".
    2. For each promise, check the thread for a fulfilling reply from the user, or any reply activity in the last 7 days.
    3. Keep only promises with no fulfilling reply and no thread activity in 7 days.
    4. Sort oldest first. Write the report in the Output shape and send it. If nothing is overdue, send nothing at all.

  output:
    - One line per overdue promise: thread subject and person, the promise quoted, days quiet, and a suggested next step
    - Quiet weeks: no message

  rules:
    - Read only. Never send a follow-up email on the user's behalf.
    - Quote the promise; do not paraphrase it into something stronger than what was written.
    - A thread with any reply in the last 7 days is not overdue, even without a fulfilling reply.
    - Run only on the confirmed schedule or when asked.
---

Follow-up Radar runs Monday morning and reads your sent mail for
promises: "I'll get back to you", "I'll send that over", "let me
check", then checks whether each thread went quiet. Anything
promised with no fulfilling reply in 7 days lands on the list, oldest
first. Nothing overdue means no message.

## What it includes

- Promise detection in sent mail (last 30 days)
- 7-day quiet check per thread
- Oldest-first report with a suggested next step
- Quiet Mondays: no overdue promises, no message

## Example

Output:

```
Follow-ups due
- Re: Q3 invoice (Priya): "I'll send the revised invoice", 11 days quiet → send the invoice today
- Re: intro to Dana (Marcus): "I'll make the intro this week", 8 days quiet → send the intro or decline
```
