---
title: "Meeting Prep Brief"
tagline: "Turns a meeting invite into a one-page brief with agenda, people, and talking points."
category: "productivity"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/meeting-prep-brief.md"
source_verified: false
origin: "directory"
includes:
  - "A one-page brief for a meeting: purpose, agenda, and time blocks"
  - "An attendee list with role and what each person needs from the meeting"
  - "Talking points tied to the agenda, with your position on each"
  - "Open questions to ask and decisions the meeting must make"
  - "Follow-ups carried over from the last meeting on the same topic"
version: "1.0.0"
date_added: "2026-11-27"
safety_notes: "It never contacts attendees, changes the invite, or sends anything on your behalf. It works only from the invite, notes, and context you provide, and it never invents what an attendee said or decided."
install_prompt: |
  To install the Meeting Prep Brief skill, save the skill source below as ~/workspace/skills/meeting-prep-brief/SKILL.md, then tell Muse to use it whenever you want a prep brief for a meeting, want to prepare for a call, or need talking points and questions before a meeting starts.

  --- SOURCE ---
  ---
  name: meeting-prep-brief
  description: Turn a calendar invite and your notes into a one-page prep brief with agenda, attendees, talking points, and the decisions the meeting must make. Use when the user wants to prepare for a meeting, needs talking points before a call, or wants a short brief for an upcoming meeting.
  ---

  ## Purpose
  Walking into a meeting unprepared wastes the first ten minutes. This skill takes the invite, the attendee list, and whatever notes or context you have, then turns them into a one-page brief you can read in two minutes: why the meeting exists, what it must decide, who is in the room, and what you need to say. It pulls open threads from the last meeting on the same topic so nothing gets dropped, and it lists the questions worth asking while everyone is together.

  ## Workflow
  1. Take the invite: title, date and time, attendees, and any agenda or description attached to it.
  2. Add context the user provides: notes, prior meeting outcomes, documents, or a short note on what they want from the meeting.
  3. State the meeting purpose in one line, then list the decisions it must make.
  4. Build the agenda as time blocks that fit the meeting length, with the decision points marked.
  5. List each attendee with their role and what they need from the meeting, plus any open question aimed at them.
  6. Write talking points tied to the agenda, with the user's position on each, and a short list of questions to ask.
  7. Carry over open follow-ups from the last meeting on the same topic, marked as done, still open, or overdue.
  8. Return the one-page brief, keeping it short enough to read in two minutes.

  ## Output Contract
  - A one-page brief with the meeting purpose, agenda, and time blocks.
  - An attendee list with role and what each person needs from the meeting.
  - Talking points tied to the agenda, with the user's position on each.
  - A list of open questions to ask and decisions the meeting must make.
  - Follow-ups carried over from the last meeting on the same topic.

  ## Operating Rules
  - Work only from the invite, notes, and context the user provides. Never invent what an attendee said, decided, or promised.
  - Never contact attendees, change the invite, or send anything on the user's behalf.
  - If the purpose is unclear, say so plainly and offer the two most likely readings instead of guessing one.
  - Keep the brief to one page: cut anything that does not change what the user says or decides in the room.
  - Flag missing context once, then work with what you have.
source: |
  ---
  name: meeting-prep-brief
  description: Turn a calendar invite and your notes into a one-page prep brief with agenda, attendees, talking points, and the decisions the meeting must make. Use when the user wants to prepare for a meeting, needs talking points before a call, or wants a short brief for an upcoming meeting.
  ---

  ## Purpose
  Walking into a meeting unprepared wastes the first ten minutes. This skill takes the invite, the attendee list, and whatever notes or context you have, then turns them into a one-page brief you can read in two minutes: why the meeting exists, what it must decide, who is in the room, and what you need to say. It pulls open threads from the last meeting on the same topic so nothing gets dropped, and it lists the questions worth asking while everyone is together.

  ## Workflow
  1. Take the invite: title, date and time, attendees, and any agenda or description attached to it.
  2. Add context the user provides: notes, prior meeting outcomes, documents, or a short note on what they want from the meeting.
  3. State the meeting purpose in one line, then list the decisions it must make.
  4. Build the agenda as time blocks that fit the meeting length, with the decision points marked.
  5. List each attendee with their role and what they need from the meeting, plus any open question aimed at them.
  6. Write talking points tied to the agenda, with the user's position on each, and a short list of questions to ask.
  7. Carry over open follow-ups from the last meeting on the same topic, marked as done, still open, or overdue.
  8. Return the one-page brief, keeping it short enough to read in two minutes.

  ## Output Contract
  - A one-page brief with the meeting purpose, agenda, and time blocks.
  - An attendee list with role and what each person needs from the meeting.
  - Talking points tied to the agenda, with the user's position on each.
  - A list of open questions to ask and decisions the meeting must make.
  - Follow-ups carried over from the last meeting on the same topic.

  ## Operating Rules
  - Work only from the invite, notes, and context the user provides. Never invent what an attendee said, decided, or promised.
  - Never contact attendees, change the invite, or send anything on the user's behalf.
  - If the purpose is unclear, say so plainly and offer the two most likely readings instead of guessing one.
  - Keep the brief to one page: cut anything that does not change what the user says or decides in the room.
  - Flag missing context once, then work with what you have.
---

Walking into a meeting unprepared wastes the first ten minutes. This skill takes the invite, the attendee list, and whatever notes or context you have, then turns them into a one-page brief you can read in two minutes: why the meeting exists, what it must decide, who is in the room, and what you need to say. It pulls open threads from the last meeting on the same topic so nothing gets dropped, and it lists the questions worth asking while everyone is together.

## What it includes

- A one-page brief with the meeting purpose, agenda, and time blocks
- An attendee list with role and what each person needs from the meeting
- Talking points tied to the agenda, with your position on each
- Open questions to ask and decisions the meeting must make
- Follow-ups carried over from the last meeting on the same topic

## Example

Jon has a 30-minute call with a client about a site redesign. He hands the skill the invite and a short note: the client wants to approve the homepage, and the copy is still open. The brief comes back with a purpose line, a 30-minute agenda split into homepage review, copy decisions, and next steps, a note that the client needs a launch date while Jon needs copy approval, three talking points with his position on each, and one carried-over follow-up: the client still owes the team photo. He reads it in two minutes and walks in knowing exactly what the call must settle.
