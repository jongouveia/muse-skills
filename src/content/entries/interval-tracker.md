---
title: "Interval Tracker"
tagline: "Logs recurring events like haircuts and predicts the next due date from your intervals."
category: "productivity"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/interval-tracker.md"
source_verified: false
origin: "directory"
includes:
  - "Log of every recurring event you report, with the date it happened"
  - "Average, shortest, and longest interval per track"
  - "Predicted next due date once a track has a few entries"
  - "Reminder before the next due date so nothing slips"
  - "One line per track showing the last date and the days since"
version: "1.0.0"
date_added: "2026-11-10"
safety_notes: "Never invents a date. Only logs what you report, and says so when a track has too few entries to predict. Reminders are suggestions, never automatic bookings or orders."
install_prompt: |
  To install the Interval Tracker skill, save the skill source below as ~/workspace/skills/interval-tracker/SKILL.md, then tell Muse to use it whenever you report a recurring event, such as a haircut, and want the date logged with a prediction for the next one.

  --- SOURCE ---
  ---
  name: interval-tracker
  description: Log recurring events such as haircuts and predict the next due date from your own intervals. Use when the user reports a recurring event happened today and wants the date logged, interval stats, or a reminder before it is due again.
  ---

  ## Purpose
  Keep a simple log of the recurring things in your life: haircuts, nail trims, oil changes, filter swaps, and anything else that repeats on a rough rhythm. You report the event in plain words, such as haircut today, and the skill logs the date, keeps the average, shortest, and longest interval per track, and predicts the next due date once a track has enough entries to judge.

  ## Workflow
  1. Take the report: the event name and the date, which defaults to today when you say today.
  2. Log it under its track, creating the track on the first report.
  3. Compute the intervals between the logged dates for that track: average, shortest, and longest, in days.
  4. Predict the next due date from the average interval once the track has at least three entries, and say how confident the prediction is from how steady the intervals are.
  5. Offer a reminder a few days before the predicted date, and note when the prediction is based on too little data to trust.
  6. Show a one line summary per track: last date, days since, average interval, and next due date.

  ## Output Contract
  - A confirmation naming the event and the date logged.
  - Per track: last date, days since, average interval, shortest interval, and longest interval.
  - A predicted next due date once three or more entries exist, with a note on how steady the pattern is.
  - A reminder offer before the next due date.

  ## Operating Rules
  - Never invent a date. Log only what the user reports.
  - Do not predict from fewer than three entries; say the track needs more data.
  - Report the average, shortest, and longest interval, not just the average, so a lopsided pattern stays visible.
  - Keep each track separate; a haircut interval never mixes with a nail trim interval.
  - Reminders are suggestions only. Never book, order, or schedule anything on the user's behalf.
source: |
  ---
  name: interval-tracker
  description: Log recurring events such as haircuts and predict the next due date from your own intervals. Use when the user reports a recurring event happened today and wants the date logged, interval stats, or a reminder before it is due again.
  ---

  ## Purpose
  Keep a simple log of the recurring things in your life: haircuts, nail trims, oil changes, filter swaps, and anything else that repeats on a rough rhythm. You report the event in plain words, such as haircut today, and the skill logs the date, keeps the average, shortest, and longest interval per track, and predicts the next due date once a track has enough entries to judge.

  ## Workflow
  1. Take the report: the event name and the date, which defaults to today when you say today.
  2. Log it under its track, creating the track on the first report.
  3. Compute the intervals between the logged dates for that track: average, shortest, and longest, in days.
  4. Predict the next due date from the average interval once the track has at least three entries, and say how confident the prediction is from how steady the intervals are.
  5. Offer a reminder a few days before the predicted date, and note when the prediction is based on too little data to trust.
  6. Show a one line summary per track: last date, days since, average interval, and next due date.

  ## Output Contract
  - A confirmation naming the event and the date logged.
  - Per track: last date, days since, average interval, shortest interval, and longest interval.
  - A predicted next due date once three or more entries exist, with a note on how steady the pattern is.
  - A reminder offer before the next due date.

  ## Operating Rules
  - Never invent a date. Log only what the user reports.
  - Do not predict from fewer than three entries; say the track needs more data.
  - Report the average, shortest, and longest interval, not just the average, so a lopsided pattern stays visible.
  - Keep each track separate; a haircut interval never mixes with a nail trim interval.
  - Reminders are suggestions only. Never book, order, or schedule anything on the user's behalf.
---

## What it includes

Some things in life repeat on a rough rhythm and are easy to lose track of: haircuts, nail trims, oil changes, filter swaps, and the rest. This skill keeps a log for each of them. You report the event in plain words, such as haircut today, and it logs the date under that track. After a few entries it works out the average, shortest, and longest interval between events, and predicts the next due date from your own pattern. A steady pattern gives a firm prediction; a lopsided one gets flagged so you know not to trust it yet. It can remind you a few days before the next due date, and it shows a one line summary per track with the last date, the days since, and the next due date. It never invents a date, never mixes tracks together, and never books or orders anything on your behalf.

## Example

You say haircut today, and the skill logs November 10 under your haircut track. Your haircut track now has four entries, so three intervals, and today's haircut closes the last one. The intervals are 34, 41, and 29 days, counting today's haircut. For the track, the last date is November 10 and the days since is 0. The average interval is about 35 days, the shortest is 29, and the longest is 41. It predicts your next haircut around December 15. It also notes that the pattern is uneven: the intervals run 12 days apart from shortest to longest, so treat December 15 as a rough guide, not a firm date. It then offers a reminder a few days before. Your nail trim track stays separate, with its own dates and its own average.
