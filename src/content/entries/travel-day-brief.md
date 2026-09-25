---
title: "Travel Day Brief"
tagline: "Flight day: times, terminal, delays, and what to have ready."
category: "productivity"
type: "prompt"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/travel-day-brief.md"
source_verified: false
origin: "directory"
includes: ["prompt-text"]
version: "1.0.0"
date_added: 2026-09-14
safety_notes: |
  Organizes the flight details you provide. Never books, changes,
  or cancels anything.
install_prompt: |
  Install the "Travel Day Brief" prompt pack. Its full source is
  below. Save it to ~/workspace/prompts/travel-day-brief.md
  (create the folder if needed). Then confirm it is installed and
  show me the full text.

  --- SOURCE ---
  This prompt pack builds a flight-day brief from your booking details.
  Paste it into Muse along with your flight info.

  > Build my travel-day brief for [flight number, date]. Include:
  > (1) the timeline working backward, when to leave home, when
  > to be at the airport, boarding time, (2) terminal and gate if
  > known, plus how I'm getting there and the backup plan,
  > (3) the current status, on time, delayed, or cancelled, with
  > what that means for connections, (4) what to have ready:
  > ID, boarding pass, and anything this specific trip needs
  > (international docs, checked-bag rules), and (5) the one
  > thing most likely to go wrong today and the fix. Times in
  > my local timezone.
source: |
  This prompt pack builds a flight-day brief from your booking details.
  Paste it into Muse along with your flight info.

  > Build my travel-day brief for [flight number, date]. Include:
  > (1) the timeline working backward, when to leave home, when
  > to be at the airport, boarding time, (2) terminal and gate if
  > known, plus how I'm getting there and the backup plan,
  > (3) the current status, on time, delayed, or cancelled, with
  > what that means for connections, (4) what to have ready:
  > ID, boarding pass, and anything this specific trip needs
  > (international docs, checked-bag rules), and (5) the one
  > thing most likely to go wrong today and the fix. Times in
  > my local timezone.
---

Travel Day Brief is a prompt pack for flight day. Give it your
flight info and get the timeline working backward from takeoff,
terminal and gate, live status with what it means for connections,
what to have ready, and the one thing most likely to go wrong with
the fix.

## What it includes

- Backward timeline: leave-home to boarding
- Terminal, gate, and ground-transport plan with backup
- Live status and connection impact
- Most-likely problem and its fix

## Example

Input: "Flight 1234, BOS to DEN, departs 8:00 AM."

Output (abridged):

```
Travel day, Tue Sep 15
Leave home: 5:15 AM (45 min drive + parking)
At airport: 6:00 AM | Boarding: 7:25 AM | Terminal B
Status: on time. Connection in DEN: 55 min, tight but legal.
Have ready: license, boarding pass in the airline app.
Most likely problem: DEN connection. Fix: sit near the front
if you can change seats; know the next DEN flight number.
```
