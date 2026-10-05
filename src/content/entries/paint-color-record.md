---
title: "Paint Color Record"
tagline: "Keeps the exact brand, color, and finish for every wall, trim, and door in the house."
category: "home"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/paint-color-record.md"
source_verified: true
origin: "directory"
includes: ["instructions", "workflow", "log-format"]
version: "1.0.0"
date_added: 2026-09-26
safety_notes: |
  Reads paint details you provide and keeps a plain-text log in your
  workspace. Never guesses a color from a photo, never deletes old
  records when a room is repainted, and never contacts any store or
  brand. It writes the log and nothing else.
install_prompt: |
  Install the "Paint Color Record" skill. Its full source is below.
  Create it at ~/workspace/skills/paint-color-record/SKILL.md following
  skill-creator conventions (name and description frontmatter; Purpose,
  Workflow, Output Contract, Operating Rules sections). Then confirm it
  is installed and tell me the trigger phrases.

  --- SOURCE ---
  ---
  name: paint-color-record
  description: Record and recall the exact paint brand, color, and finish for every wall, trim, and door in your home. Trigger phrases: "log this paint color", "what color is the guest room", "record my paint".
  ---
  # Purpose

  Remember every paint in the house so a touch-up, a patch, or a new
  gallon always matches. The record captures the exact brand, color
  name or code, finish (sheen), surface painted, and date, so you never
  have to guess or match by eye again.

  # Workflow

  1. Collect a paint detail: the brand, color name, color code, finish,
     and where it was used (room, surface, number of coats). Accept it
     from the user, from a can label photo, or from a store receipt.
  2. Store it as a record keyed by room and surface, with the date
     recorded and the purchase source if known.
  3. When a new room is painted, add a new record. When a room is
     repainted, keep the old record with a repaint date and mark the
     new one as current.
  4. On a recall request ("what color is X"), return the exact details
     for the current record only.
  5. On a log request, confirm the parsed details with the user before
     saving.

  # Output Contract

  - A record line: room, surface, brand, color name, color code,
    finish, date recorded.
  - A recall answer: the current record for the asked room and
    surface, plus where it was bought if recorded.
  - No match: say so plainly, and ask for the can label or receipt.

  # Operating Rules

  - Never guess a color from a wall photo; wall photos shift color in
    light. Ask the user to read the can label or receipt when the code
    is not confirmed.
  - Never overwrite a prior record when a room is repainted; keep
    history with dates.
  - Keep records in plain text the user can read and export; no
    special software required.
  - Never invent a color code; if the code is unknown, record the
    color name and finish and mark the code as missing.
source: |
  ---
  name: paint-color-record
  description: Record and recall the exact paint brand, color, and finish for every wall, trim, and door in your home. Trigger phrases: "log this paint color", "what color is the guest room", "record my paint".
  ---
  # Purpose

  Remember every paint in the house so a touch-up, a patch, or a new
  gallon always matches. The record captures the exact brand, color
  name or code, finish (sheen), surface painted, and date, so you never
  have to guess or match by eye again.

  # Workflow

  1. Collect a paint detail: the brand, color name, color code, finish,
     and where it was used (room, surface, number of coats). Accept it
     from the user, from a can label photo, or from a store receipt.
  2. Store it as a record keyed by room and surface, with the date
     recorded and the purchase source if known.
  3. When a new room is painted, add a new record. When a room is
     repainted, keep the old record with a repaint date and mark the
     new one as current.
  4. On a recall request ("what color is X"), return the exact details
     for the current record only.
  5. On a log request, confirm the parsed details with the user before
     saving.

  # Output Contract

  - A record line: room, surface, brand, color name, color code,
    finish, date recorded.
  - A recall answer: the current record for the asked room and
    surface, plus where it was bought if recorded.
  - No match: say so plainly, and ask for the can label or receipt.

  # Operating Rules

  - Never guess a color from a wall photo; wall photos shift color in
    light. Ask the user to read the can label or receipt when the code
    is not confirmed.
  - Never overwrite a prior record when a room is repainted; keep
    history with dates.
  - Keep records in plain text the user can read and export; no
    special software required.
  - Never invent a color code; if the code is unknown, record the
    color name and finish and mark the code as missing.
---

Paint Color Record solves one of the most common small household
frustrations: you need to touch up a scuffed wall or buy another
gallon, and nobody remembers the exact paint. This skill keeps a
plain-text log of every paint used in your home, recording the brand,
the color name and code, the finish, the room and surface, and the
date. When a room gets repainted, the old record stays with a repaint
date instead of being overwritten, so the history is never lost.

The one rule that matters: it never guesses a color from a wall
photo, because camera lighting shifts color enough to make a match
useless. It asks for the can label or the store receipt when the code
is not confirmed, and it marks the code as missing rather than
inventing one. With exact details on file, the next trip to the paint
counter is a one-minute errand instead of a guessing game.

## What it includes

- A record format: room, surface, brand, color name, color code,
  finish, date recorded
- Logging from a user note, a can label photo, or a store receipt
- Recall answers that return only the current record for a room
- History keeping: repainted rooms keep dated records, nothing is
  overwritten
- A no-guess rule for colors that cannot be confirmed

## Example

Input: "log this paint color: living room walls, Benjamin Moore
Simply White OC-117, eggshell, 2 coats, bought at the Andover paint
store last month."

Output:

```
Recorded.
Living Room / Walls: Benjamin Moore, Simply White (OC-117),
Eggshell, 2 coats. Recorded 2026-09-26. Source: Andover paint store.
```

Later input: "what color is the living room?"

Output:

```
Living Room / Walls: Benjamin Moore, Simply White (OC-117), Eggshell.
Recorded 2026-09-26. Bought at the Andover paint store.
```
