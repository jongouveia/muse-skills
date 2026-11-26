---
title: "Reservation Finder"
tagline: "Finds an open table at the restaurant you want, on the night you want."
category: "productivity"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/reservation-finder.md"
source_verified: false
origin: "directory"
includes:
  - "A search for open tables at your restaurant, date, time, and party size"
  - "Nearby time slots when your first choice is full"
  - "Similar restaurants nearby when your pick has no tables"
  - "A shortlist of the best options, ranked by how close they are to your ask"
  - "A booking step that waits for your go before it books anything"
version: "1.0.0"
date_added: "2026-11-17"
safety_notes: "Never books a table or charges a card without the user saying go. Availability is rechecked right before booking, since tables change fast."
install_prompt: |
  To install the Reservation Finder skill, save the skill source below as ~/workspace/skills/reservation-finder/SKILL.md, then tell Muse to use it whenever you want a table at a restaurant and want to know what is open, what nearby times work, or what similar places have room.

  --- SOURCE ---
  ---
  name: reservation-finder
  description: Find an open table at a restaurant. Use when the user names a restaurant, date, time, and party size and wants to know what tables are open, what nearby times work, or what similar places have room.
  ---

  ## Purpose
  Find an open table at the restaurant you want, on the night you want, without an evening of refreshing a booking page. The skill checks what tables are actually open for your exact ask, looks at nearby times when the first choice is full, and suggests similar restaurants nearby when the night is full, then returns a short ranked list so you can pick in a minute.

  ## Workflow
  1. Take the restaurant, date, time, and party size.
  2. Check open tables for that exact ask.
  3. If the exact time is full, check nearby times on the same night.
  4. If the night is full, suggest similar restaurants nearby with open tables.
  5. Rank the options by how close they are to the original ask, and say the trade-off for each one.
  6. Book only when the user says go, then confirm the booking details back.

  ## Output Contract
  - Open tables for the exact ask, or a clear no when none exist.
  - Nearby time slots on the same night when the first choice is full.
  - Similar restaurants nearby with open tables, when the night is full.
  - A ranked shortlist with the trade-off for each option.
  - Booking confirmation, only after the user approves, with time, party size, and confirmation details.

  ## Operating Rules
  - Never book a table or charge a card without the user saying go.
  - Recheck availability right before booking. Tables change fast.
  - Say when a result is stale or could not be checked live.
  - Ask once for missing facts, then search with what you have.
  - Do not invent a table that is not listed as open.
source: |
  ---
  name: reservation-finder
  description: Find an open table at a restaurant. Use when the user names a restaurant, date, time, and party size and wants to know what tables are open, what nearby times work, or what similar places have room.
  ---

  ## Purpose
  Find an open table at the restaurant you want, on the night you want, without an evening of refreshing a booking page. The skill checks what tables are actually open for your exact ask, looks at nearby times when the first choice is full, and suggests similar restaurants nearby when the night is full, then returns a short ranked list so you can pick in a minute.

  ## Workflow
  1. Take the restaurant, date, time, and party size.
  2. Check open tables for that exact ask.
  3. If the exact time is full, check nearby times on the same night.
  4. If the night is full, suggest similar restaurants nearby with open tables.
  5. Rank the options by how close they are to the original ask, and say the trade-off for each one.
  6. Book only when the user says go, then confirm the booking details back.

  ## Output Contract
  - Open tables for the exact ask, or a clear no when none exist.
  - Nearby time slots on the same night when the first choice is full.
  - Similar restaurants nearby with open tables, when the night is full.
  - A ranked shortlist with the trade-off for each option.
  - Booking confirmation, only after the user approves, with time, party size, and confirmation details.

  ## Operating Rules
  - Never book a table or charge a card without the user saying go.
  - Recheck availability right before booking. Tables change fast.
  - Say when a result is stale or could not be checked live.
  - Ask once for missing facts, then search with what you have.
  - Do not invent a table that is not listed as open.
---

A restaurant you want, on a night you want, should not take an evening of refreshing a booking page. This skill takes the restaurant, the date, the time, and the party size, then checks what tables are actually open. If your first choice is full, it looks at nearby times on the same night, and if the night is full, it suggests similar restaurants nearby that still have room. The options come back as a short ranked list, with the trade-off for each one, so you can pick in a minute. Nothing gets booked until you say go, and the booking is confirmed back to you with the details.

## What it includes

- A search for open tables at your restaurant, date, time, and party size
- Nearby time slots when your first choice is full
- Similar restaurants nearby when your pick has no tables
- A shortlist of the best options, ranked by how close they are to your ask
- A booking step that waits for your go before it books anything

## Example

You want a table for four at a French bistro in Andover on Saturday at 7 PM. The skill finds no 7 PM table, but finds 6:15 PM and 8:30 PM the same night, plus a table at 7 PM at a similar bistro ten minutes away. You pick the 8:30 PM slot, say go, and the skill books it and confirms the time, party size, and confirmation details back to you.
