---
title: "Reservation Tracker"
tagline: "Weekly inbox scan; one list of every upcoming reservation."
category: "productivity"
type: "workflow"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/reservation-tracker.md"
source_verified: true
origin: "directory"
includes: ["instructions", "workflow", "schedule"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Reads your inbox through the assistant's own connected accounts,
  on the schedule you set. Writes only the list back to you. Never
  books, changes, or cancels anything.
install_prompt: |
  Set up the "Reservation Tracker" workflow. Its full source is
  below. Default schedule: Sunday at 09:00 local time. Ask me to
  confirm or change this time before you create the recurring job.
  Once I confirm, create the job. Tell me the job name and the
  confirmed schedule when it is set up.

  --- SOURCE ---
  name: reservation-tracker
  description: Weekly inbox scan for upcoming reservations — restaurants, hotels, flights, rentals — in one chronological list. Trigger phrases: "what reservations do I have", "upcoming bookings", "track my reservations".

  schedule: weekly, Sunday at 09:00 local time (cron: 0 9 * * 0). Confirm the time with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "what reservations do I have" request.

  steps:
    1. Search the inbox for confirmation emails: restaurant bookings, hotel and flight confirmations, car rentals, event tickets.
    2. Extract for each: what, where, date and time, party size or confirmation code where shown.
    3. Keep only reservations in the future. Drop anything already past.
    4. Sort chronologically, soonest first.
    5. Write the list in the Output shape and send it. If nothing is upcoming, say so in one line.

  output:
    - One line per reservation: date/time, what and where, confirmation code if shown
    - Grouped loosely: this week / later
    - Quiet weeks: "No upcoming reservations found."

  rules:
    - Read only. Never book, change, or cancel a reservation.
    - Use the most recent confirmation per booking; ignore superseded emails.
    - If a confirmation is ambiguous, mark it "check manually" rather than guess.
    - Run only on the confirmed schedule or when asked.
source: |
  name: reservation-tracker
  description: Weekly inbox scan for upcoming reservations — restaurants, hotels, flights, rentals — in one chronological list. Trigger phrases: "what reservations do I have", "upcoming bookings", "track my reservations".

  schedule: weekly, Sunday at 09:00 local time (cron: 0 9 * * 0). Confirm the time with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "what reservations do I have" request.

  steps:
    1. Search the inbox for confirmation emails: restaurant bookings, hotel and flight confirmations, car rentals, event tickets.
    2. Extract for each: what, where, date and time, party size or confirmation code where shown.
    3. Keep only reservations in the future. Drop anything already past.
    4. Sort chronologically, soonest first.
    5. Write the list in the Output shape and send it. If nothing is upcoming, say so in one line.

  output:
    - One line per reservation: date/time, what and where, confirmation code if shown
    - Grouped loosely: this week / later
    - Quiet weeks: "No upcoming reservations found."

  rules:
    - Read only. Never book, change, or cancel a reservation.
    - Use the most recent confirmation per booking; ignore superseded emails.
    - If a confirmation is ambiguous, mark it "check manually" rather than guess.
    - Run only on the confirmed schedule or when asked.
---

Reservation Tracker runs every Sunday morning and scans your inbox
for confirmation emails — restaurants, hotels, flights, rentals —
then gives you one chronological list of everything upcoming, with
confirmation codes where shown.

## What it includes

- Weekly confirmation-email sweep
- Future-only filtering, chronological order
- Confirmation codes captured from the emails
- One-line quiet weeks

## Example

Output:

```
Upcoming reservations
This week:
- Fri Sep 18, 7:30 PM — Row 34, Boston (4 people, conf #R8231)
Later:
- Oct 2–5 — Hotel, Portland ME (conf #H99120)
- Oct 9, 6:10 AM — BOS → DEN (conf #AA4K2Q)
```
