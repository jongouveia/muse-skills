---
title: "Concert Tracker"
tagline: "Tracks the artists you follow and flags new tour dates, on-sale days, and ticket prices."
category: "creative"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/concert-tracker.md"
source_verified: false
origin: "directory"
includes:
  - "A watchlist of the artists and shows you want to see, with venues and dates"
  - "On-sale dates and ticket price ceilings for each show"
  - "An alert when a new tour date appears or an on-sale day is near"
  - "A flag when a ticket price drops under your ceiling"
  - "A short list sorted by date, with one line per show"
version: "1.0.0"
date_added: "2026-11-20"
safety_notes: "Never buys tickets, enters payment details, or contacts a seller. Prices and dates are quoted as given, and the user checks the seller before buying."
install_prompt: |
  To install the Concert Tracker skill, save the skill source below as ~/workspace/skills/concert-tracker/SKILL.md, then tell Muse to use it whenever you want to track artists and shows, watch for new tour dates and on-sale days, or check ticket prices against your ceiling.

  --- SOURCE ---
  ---
  name: concert-tracker
  description: Track the artists and shows you want to see, with tour dates, venues, on-sale days, and ticket price ceilings. Use when the user lists artists or shows and wants a watchlist with alerts for new dates, on-sale days, and prices under their ceiling.
  ---

  ## Purpose
  A favorite artist announces a tour and the good seats sell out before you hear about it. This skill keeps a watchlist of the artists and shows you want to see, with the venue, the date, the on-sale day, and the most you will pay per ticket. It flags new tour dates, warns when an on-sale day is near, and notes when a ticket price drops under your ceiling, so you can act while seats are still open.

  ## Workflow
  1. Take the artists and shows the user names, plus the venue, city, and date when known.
  2. Build a watchlist with one line per show: artist, venue, city, date, on-sale day, and price ceiling.
  3. Record the on-sale day and the price ceiling for each show.
  4. Flag any new tour date for a watched artist, and any on-sale day coming up within seven days.
  5. Note when a ticket price drops under the ceiling for a show.
  6. Return a short list sorted by date, with one line per show and a one-line summary of what needs attention now.

  ## Output Contract
  - A watchlist sorted by date, one line per show.
  - Each show names the artist, venue, city, date, on-sale day, and price ceiling.
  - A flag for new tour dates and on-sale days within seven days.
  - A note when a ticket price drops under the ceiling.
  - A one-line summary of what needs attention now.
  - Nothing bought, reserved, or paid until the user says so.

  ## Operating Rules
  - Never buy tickets, reserve seats, or enter payment details.
  - Never contact a seller or a venue.
  - Quote prices and dates exactly as given. Do not guess.
  - Say when a date or price is unconfirmed instead of guessing.
  - Ask once for missing facts, then track with what you have.
source: |
  ---
  name: concert-tracker
  description: Track the artists and shows you want to see, with tour dates, venues, on-sale days, and ticket price ceilings. Use when the user lists artists or shows and wants a watchlist with alerts for new dates, on-sale days, and prices under their ceiling.
  ---

  ## Purpose
  A favorite artist announces a tour and the good seats sell out before you hear about it. This skill keeps a watchlist of the artists and shows you want to see, with the venue, the date, the on-sale day, and the most you will pay per ticket. It flags new tour dates, warns when an on-sale day is near, and notes when a ticket price drops under your ceiling, so you can act while seats are still open.

  ## Workflow
  1. Take the artists and shows the user names, plus the venue, city, and date when known.
  2. Build a watchlist with one line per show: artist, venue, city, date, on-sale day, and price ceiling.
  3. Record the on-sale day and the price ceiling for each show.
  4. Flag any new tour date for a watched artist, and any on-sale day coming up within seven days.
  5. Note when a ticket price drops under the ceiling for a show.
  6. Return a short list sorted by date, with one line per show and a one-line summary of what needs attention now.

  ## Output Contract
  - A watchlist sorted by date, one line per show.
  - Each show names the artist, venue, city, date, on-sale day, and price ceiling.
  - A flag for new tour dates and on-sale days within seven days.
  - A note when a ticket price drops under the ceiling.
  - A one-line summary of what needs attention now.
  - Nothing bought, reserved, or paid until the user says so.

  ## Operating Rules
  - Never buy tickets, reserve seats, or enter payment details.
  - Never contact a seller or a venue.
  - Quote prices and dates exactly as given. Do not guess.
  - Say when a date or price is unconfirmed instead of guessing.
  - Ask once for missing facts, then track with what you have.
---

A favorite artist announces a tour and the good seats sell out before you hear about it. This skill keeps a watchlist of the artists and shows you want to see, with the venue, the date, the on-sale day, and the most you will pay per ticket. It flags new tour dates, warns when an on-sale day is near, and notes when a ticket price drops under your ceiling, so you can act while seats are still open. Nothing is bought, reserved, or paid until you say go, and every price and date is quoted as given, never guessed.

## What it includes

- A watchlist of the artists and shows you want to see, with venues and dates
- On-sale dates and ticket price ceilings for each show
- An alert when a new tour date appears or an on-sale day is near
- A flag when a ticket price drops under your ceiling
- A short list sorted by date, with one line per show

## Example

You follow three artists and want to catch one of them live next spring. The skill builds your watchlist: one artist has a new arena date in Boston in May with tickets on sale Friday and your ceiling at $120, another has no dates near you yet, and the third has a club show in March already under your ceiling. The Friday on-sale is flagged as near, and the summary reads: "Friday: Boston on-sale, ceiling $120. March club show is already under your ceiling." You set your alarm for Friday, and the rest waits its turn.
