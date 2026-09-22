---
title: "Birthday Radar"
tagline: "Monthly: who's coming up, with enough lead time to get the gift."
category: "productivity"
type: "workflow"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/birthday-radar.md"
source_verified: true
origin: "directory"
includes: ["instructions", "workflow", "schedule"]
version: "1.0.0"
date_added: 2026-09-10
safety_notes: |
  Reads birthdays from your contacts through the assistant's own
  connected accounts, on the schedule you set. Writes the report
  to you and nothing else. Never messages anyone.
install_prompt: |
  Set up the "Birthday Radar" workflow. Its full source is below.
  Default schedule: first of each month at 09:00 local time. Ask
  me to confirm or change this time before you create the
  recurring job. Once I confirm, create the job. Tell me the job
  name and the confirmed schedule when it is set up.

  --- SOURCE ---
  name: birthday-radar
  description: Monthly birthday and anniversary scan : who's coming up in the next 30 days, with gift lead time and past gift notes. Trigger phrases: "whose birthday is coming up", "upcoming birthdays", "birthday reminders".

  schedule: first of each month at 09:00 local time. Confirm the time with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "whose birthday is coming up" request.

  steps:
    1. Pull birthdays and anniversaries from the user's contacts for the next 30 days.
    2. First run: ask the user which contacts matter (close circle vs. everyone) and save the preference.
    3. For each upcoming date: name, date, days away, relationship note if the user has mentioned one.
    4. Gift lead time: flag anything within 7 days as "order now", 8-14 days as "this week", the rest as "plenty of time".
    5. If the user has mentioned past gifts, include the note so nothing gets repeated.
    6. Write the report in the Output shape and send it.

  output:
    - Coming up: name, date, days away, lead-time flag
    - Gift lead time: flag anything within 7 days as "order now", 8-14 days as "this week", the rest as "plenty of time"
    - Quiet months: "Nobody on your list this month."

  rules:
    - Read only. Never message or post anything to anyone.
    - Dates come from the user's contacts, not from the web. Never look up someone's birthday online.
    - "Close circle" is the user's definition. Ask once, reuse.
    - Run only on the confirmed schedule or when asked.
source: |
  name: birthday-radar
  description: Monthly birthday and anniversary scan : who's coming up in the next 30 days, with gift lead time and past gift notes. Trigger phrases: "whose birthday is coming up", "upcoming birthdays", "birthday reminders".

  schedule: first of each month at 09:00 local time. Confirm the time with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "whose birthday is coming up" request.

  steps:
    1. Pull birthdays and anniversaries from the user's contacts for the next 30 days.
    2. First run: ask the user which contacts matter (close circle vs. everyone) and save the preference.
    3. For each upcoming date: name, date, days away, relationship note if the user has mentioned one.
    4. Gift lead time: flag anything within 7 days as "order now", 8-14 days as "this week", the rest as "plenty of time".
    5. If the user has mentioned past gifts, include the note so nothing gets repeated.
    6. Write the report in the Output shape and send it.

  output:
    - Coming up: name, date, days away, lead-time flag
    - Gift lead time: flag anything within 7 days as "order now", 8-14 days as "this week", the rest as "plenty of time"
    - Quiet months: "Nobody on your list this month."

  rules:
    - Read only. Never message or post anything to anyone.
    - Dates come from the user's contacts, not from the web. Never look up someone's birthday online.
    - "Close circle" is the user's definition. Ask once, reuse.
    - Run only on the confirmed schedule or when asked.
---

Birthday Radar runs on the first of the month and lists who's coming
up in the next 30 days , with gift lead time ("order now" vs. "plenty
of time") and notes on past gifts so you never repeat one.

## What it includes

- 30-day birthday and anniversary scan from your contacts
- Gift lead-time flags
- Past-gift notes against repeats
- Close-circle preference, asked once

## Example

Output:

```
Birthdays , October

- Oct 4, Mom , 3 days [order now]
  Last year: the cookbook. Note: she mentioned gardening.
- Oct 19, Dave , 18 days [plenty of time]
  Last year: whiskey. He liked it.
```
