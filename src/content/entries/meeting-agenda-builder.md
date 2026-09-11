---
title: "Meeting Agenda Builder"
tagline: "Goal plus attendees becomes a tight agenda with timeboxes."
category: "productivity"
type: "prompt"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/meeting-agenda-builder.md"
source_verified: false
origin: "directory"
includes: ["instructions", "agenda-template"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Uses only the meeting details you provide. Writes only the agenda
  back to you. Never sends invites or contacts attendees.
install_prompt: |
  Install the "Meeting Agenda Builder" prompt pack. Its full source is below. Save it at
  ~/workspace/prompts/meeting-agenda-builder.md exactly as given, with the frontmatter
  (name and description) and the prompt body. Do not run it now. Then
  confirm it is saved and tell me the trigger phrases: "build a meeting agenda", "timebox this meeting", "plan this meeting".

  --- SOURCE ---
  # Meeting Agenda Builder

  How to use: give the meeting goal, the attendees, and the time
  available. It returns a timeboxed agenda where every item earns
  its slot.
  Trigger phrases: "build a meeting agenda", "timebox this meeting", "plan this meeting".

  Save it as a reusable prompt pack named "Meeting Agenda Builder".

  ## The prompt

  Build the agenda for this meeting. I will give you: the goal of
  the meeting (the decision to make or problem to solve), the
  attendees, and the time available.

  1. State the goal at the top in one sentence, phrased as an
     outcome ("Decide the Q4 hiring plan", not "Discuss hiring").
  2. Build the agenda backwards from the goal: only items that
     serve the decision earn a slot.
  3. Timebox every item; the boxes must sum to the available time
     minus 5 minutes of buffer.
  4. Mark each item: (info) 2-minute updates, (discuss) the real
     debate, (decide) the call to make. At least one (decide) item
     is required : if nothing needs deciding, say the meeting
     should be an email.
  5. End with: owner and deadline for anything decided.

  Rules: if the goal is vague, ask one clarifying question before
  building. Never pad a 20-minute decision into a 60-minute
  agenda.
source: |
  # Meeting Agenda Builder

  How to use: give the meeting goal, the attendees, and the time
  available. It returns a timeboxed agenda where every item earns
  its slot.
  Trigger phrases: "build a meeting agenda", "timebox this meeting", "plan this meeting".

  Save it as a reusable prompt pack named "Meeting Agenda Builder".

  ## The prompt

  Build the agenda for this meeting. I will give you: the goal of
  the meeting (the decision to make or problem to solve), the
  attendees, and the time available.

  1. State the goal at the top in one sentence, phrased as an
     outcome ("Decide the Q4 hiring plan", not "Discuss hiring").
  2. Build the agenda backwards from the goal: only items that
     serve the decision earn a slot.
  3. Timebox every item; the boxes must sum to the available time
     minus 5 minutes of buffer.
  4. Mark each item: (info) 2-minute updates, (discuss) the real
     debate, (decide) the call to make. At least one (decide) item
     is required : if nothing needs deciding, say the meeting
     should be an email.
  5. End with: owner and deadline for anything decided.

  Rules: if the goal is vague, ask one clarifying question before
  building. Never pad a 20-minute decision into a 60-minute
  agenda.
---

Meeting Agenda Builder works backwards from the decision you need.
Give it the goal, the attendees, and the time; it returns a
timeboxed agenda where every item is tagged info, discuss, or
decide : and it will tell you when the meeting should have been an
email.

## What it includes

- Outcome-phrased goal statement
- Timeboxed items that sum to the slot (minus buffer)
- Info / discuss / decide tagging
- Owner-and-deadline close for decisions

## Example

Input: "Decide Q4 hiring plan, me + Sam + Priya, 30 minutes."

Output:

```
Goal: Decide the Q4 hiring plan.

1. (info, 5 min) Headcount budget , Sam shares the number.
2. (discuss, 15 min) Which two roles to fill first.
3. (decide, 5 min) Approve the two roles and owners.

Close: owners and start dates for both roles.
```
