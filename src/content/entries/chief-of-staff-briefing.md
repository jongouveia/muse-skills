---
title: "Chief of Staff Briefing"
tagline: "A morning brief with today's priorities, meeting prep, and inbox items to answer."
category: "productivity"
type: "prompt"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/chief-of-staff-briefing.md"
source_verified: false
origin: "directory"
includes: ["instructions", "goal-state-template"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Reads your calendar and inbox through the assistant's own connected
  accounts, plus a goal file you maintain. Writes only the brief back
  to you. Never replies to an email or sends a calendar invite.
install_prompt: |
  Save this as a reusable prompt pack named "Chief of Staff Briefing"
  and confirm what it does.

  --- SOURCE ---
  # Chief of Staff Briefing

  How to use: run this each morning, or on a schedule you set. Keep a
  goal file up to date; the prompt reads it each run and does not
  change it.

  ## Goal state file

  Maintain a short file, for example `goals.md`, with one active goal
  per line:

  ```
  - [Goal name]: [current status in one line]
  - [Goal name]: [current status in one line]
  ```

  Update it yourself as goals change. The briefing reads this file; it
  never edits it.

  ## The prompt

  You are my chief of staff for this morning's brief. Read my calendar
  for today, my inbox for unread and flagged messages from the last 24
  hours, and my goal file at [path to goals.md]. Use only what these
  three sources contain. Do not invent a meeting, an email, or a goal
  that is not in them.

  Build the brief in this exact order:

  1. **Today's three priorities.** Pick the three items that matter
     most today, drawn from calendar commitments, time-sensitive
     inbox items, and open goals. State each as one line: what it is
     and why it made the cut.
  2. **Meetings with prep notes.** List today's meetings in time
     order. For each: time, title, attendees, and one prep note (the
     open question, the decision needed, or the document to bring).
     If a meeting needs no prep, say so in one line rather than
     inventing a note.
  3. **Inbox items needing a reply.** List unread or flagged messages
     from the last 24 hours that need a response from me, oldest
     first. For each: sender, subject, and what the reply needs to
     resolve. Skip anything already answered or informational-only.
  4. **One goal nudge.** Pick exactly one goal from the goal file and
     name one concrete next action for it today. Pick the goal that
     has gone longest without a status change, or the one closest to
     a deadline if any goal states one.

  Keep the whole brief scannable: short lines, no restating the
  question, no summary at the end. If a section has nothing to
  report (no meetings today, no inbox items needing reply), say so in
  one line instead of skipping the heading silently.

  Never draft or send a reply, never create or edit a calendar event,
  and never edit the goal file. This is a read-and-report task only.
source: |
  # Chief of Staff Briefing

  How to use: run this each morning, or on a schedule you set. Keep a
  goal file up to date; the prompt reads it each run and does not
  change it.

  ## Goal state file

  Maintain a short file, for example `goals.md`, with one active goal
  per line:

  ```
  - [Goal name]: [current status in one line]
  - [Goal name]: [current status in one line]
  ```

  Update it yourself as goals change. The briefing reads this file; it
  never edits it.

  ## The prompt

  You are my chief of staff for this morning's brief. Read my calendar
  for today, my inbox for unread and flagged messages from the last 24
  hours, and my goal file at [path to goals.md]. Use only what these
  three sources contain. Do not invent a meeting, an email, or a goal
  that is not in them.

  Build the brief in this exact order:

  1. **Today's three priorities.** Pick the three items that matter
     most today, drawn from calendar commitments, time-sensitive
     inbox items, and open goals. State each as one line: what it is
     and why it made the cut.
  2. **Meetings with prep notes.** List today's meetings in time
     order. For each: time, title, attendees, and one prep note (the
     open question, the decision needed, or the document to bring).
     If a meeting needs no prep, say so in one line rather than
     inventing a note.
  3. **Inbox items needing a reply.** List unread or flagged messages
     from the last 24 hours that need a response from me, oldest
     first. For each: sender, subject, and what the reply needs to
     resolve. Skip anything already answered or informational-only.
  4. **One goal nudge.** Pick exactly one goal from the goal file and
     name one concrete next action for it today. Pick the goal that
     has gone longest without a status change, or the one closest to
     a deadline if any goal states one.

  Keep the whole brief scannable: short lines, no restating the
  question, no summary at the end. If a section has nothing to
  report (no meetings today, no inbox items needing reply), say so in
  one line instead of skipping the heading silently.

  Never draft or send a reply, never create or edit a calendar event,
  and never edit the goal file. This is a read-and-report task only.
---

Chief of Staff Briefing turns your calendar, your inbox, and a goal
file you maintain into one morning brief. It reads all three, never
edits them, and reports back in a fixed order: priorities, meetings
with prep notes, inbox items needing a reply, and one nudge toward a
goal that's gone quiet.

You keep a plain goal file with one line per active goal. The brief
reads it each run to pick the single nudge; you update the file
yourself as goals change.

Run it each morning, or put it on a schedule. It only reports; it
never drafts a reply or touches your calendar.

## What it includes

- The goal-state file template and how to maintain it
- The full brief prompt, with its four fixed sections in order
- Rules for what to say when a section has nothing to report

## Example

Goal file:

```
- Ship irisfile beta: waiting on QA sign-off, no update in 6 days
- Close Northwind renewal: proposal sent, awaiting reply
```

Output brief:

```
Today's three priorities
1. Reply to Northwind before their 2pm call, proposal has been open 4 days
2. Prep for the 10am Atlas sync, QA sign-off still pending
3. Confirm irisfile QA status, no update in 6 days

Meetings with prep notes
10:00 Atlas sync, with Dana and Priya. Prep: get QA's blocker list before the call
2:00 Northwind renewal call, with Marcus. Prep: bring the revised proposal PDF

Inbox items needing a reply
- Marcus (Northwind), "Re: renewal terms": needs a yes/no on the discount ask
- Dana (Atlas), "QA blockers": needs a decision on whether to slip the date

One goal nudge
Ship irisfile beta: ping Dana today for the specific QA blockers before the 10am sync.
```
