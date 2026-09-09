---
title: "Meeting Notes Polisher"
tagline: "Turns raw meeting notes into decisions, owned action items, and a three-line summary."
category: "chief-of-staff"
type: "prompt"
author: "Muse community"
source_url: "https://github.com/muse-skills/directory"
source_verified: false
includes: ["prompt"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Reads only the notes you paste into the chat. Writes nothing on its own; it returns text
  for you to copy. Never contacts a calendar, task tracker, or any other person. Flags a
  missing owner instead of guessing one.
install_prompt: |
  Save this as a reusable prompt pack named "Meeting Notes Polisher" and confirm what it does.

  --- SOURCE ---
  # Meeting Notes Polisher

  Paste raw meeting notes below the line. Turn them into a structured record.

  Rules:
  1. Read the notes once. List every decision made in the meeting.
  2. List every action item. For each one, give the task, the owner, and the deadline.
  3. If an action item has no named owner, write "No owner assigned" next to it instead of
     guessing a name.
  4. If an action item has no deadline, write "No deadline set" next to it.
  5. List every open question the notes raise but do not answer.
  6. Write a three-line summary of the meeting. Each line covers one idea.
  7. Do not add a decision, action item, or question that the notes do not state.
  8. Do not invent an owner, a deadline, or a next step.

  Output format:

  ## Decisions
  - [Decision 1]
  - [Decision 2]

  ## Action items
  - [Task] — Owner: [Name or "No owner assigned"] — Deadline: [Date or "No deadline set"]

  ## Open questions
  - [Question 1]

  ## Summary
  [Line 1]
  [Line 2]
  [Line 3]

  --- NOTES ---
  [Paste raw meeting notes here]
source: |
  # Meeting Notes Polisher

  Paste raw meeting notes below the line. Turn them into a structured record.

  Rules:
  1. Read the notes once. List every decision made in the meeting.
  2. List every action item. For each one, give the task, the owner, and the deadline.
  3. If an action item has no named owner, write "No owner assigned" next to it instead of
     guessing a name.
  4. If an action item has no deadline, write "No deadline set" next to it.
  5. List every open question the notes raise but do not answer.
  6. Write a three-line summary of the meeting. Each line covers one idea.
  7. Do not add a decision, action item, or question that the notes do not state.
  8. Do not invent an owner, a deadline, or a next step.

  Output format:

  ## Decisions
  - [Decision 1]
  - [Decision 2]

  ## Action items
  - [Task] — Owner: [Name or "No owner assigned"] — Deadline: [Date or "No deadline set"]

  ## Open questions
  - [Question 1]

  ## Summary
  [Line 1]
  [Line 2]
  [Line 3]

  --- NOTES ---
  [Paste raw meeting notes here]
---

This prompt pack turns a messy dump of meeting notes into a record you can act on. It pulls
out decisions, action items with an owner and a deadline, and any question the meeting left
open. It ends with a three-line summary you can forward on its own.

It runs once, on demand, whenever you paste notes into the chat. It never touches a
calendar or a task tracker; you copy the output where it needs to go.

An action item with no named owner does not disappear or get a guessed name. It stays in
the list, marked "No owner assigned", so you catch it before the meeting's decisions go
untracked.

## What it includes

- A fill-in prompt template with a `[Paste raw meeting notes here]` slot.
- A fixed output format: decisions, action items, open questions, three-line summary.
- A rule against inventing an owner, deadline, or decision the notes do not state.

## Example

**Input (excerpt):**
```
Standup 9/8. Discussed the Q3 report delay. Sarah will pull the numbers by Friday.
Someone needs to email the client about the timeline. Still unclear if we're
using the old template or the new one.
```

**Output (excerpt):**
```
## Decisions
- The Q3 report is delayed.

## Action items
- Pull the Q3 numbers — Owner: Sarah — Deadline: Friday
- Email the client about the timeline — Owner: No owner assigned — Deadline: No deadline set

## Open questions
- Are we using the old report template or the new one?

## Summary
The Q3 report is delayed and Sarah owns the numbers by Friday.
No one is assigned to email the client about the new timeline.
The report template to use is still undecided.
```
