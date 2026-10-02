---
title: "Deep Work Scheduler"
tagline: "Turns your weekly priorities into protected calendar focus blocks that survive meeting creep."
category: "productivity"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/deep-work-scheduler.md"
source_verified: false
origin: "directory"
includes: ["calendar scan", "focus blocks", "meeting-creep defense", "weekly reset"]
version: "1.0.0"
date_added: 2026-10-02
safety_notes: |
  Reads the user's calendar to find free windows. Never creates, moves, or deletes a
  calendar event without explicit user approval of the plan. Never reports calendar
  contents beyond the block titles and times shown to the user. Never reschedules
  other people's meetings on the user's behalf.
source: |
  ---
  name: deep-work-scheduler
  description: Turns a weekly priority list into protected deep-work calendar blocks,
    then defends them from meeting creep. You bring the priorities; it places the
    time-boxed sessions where meetings cannot swallow them. Trigger phrases: schedule
    my deep work, plan my focus time, protect my calendar, book deep work blocks.

  ## Purpose

  Plans focused work sessions for the week ahead and places them on your calendar
  where meetings cannot swallow them. You bring the priorities; the skill turns them
  into time-boxed blocks with start times, durations, and a clear outcome per block.

  ## Workflow

  1. Collect the week's priorities: ask the user to list 1 to 3 outcomes that need
     focused work this week, each with a plain-language description and a rough size
     (small: 30 to 60 minutes, medium: 1 to 2 hours, large: 2+ hours, split into
     pieces).
  2. Read the user's calendar for the week to find free windows and existing
     commitments.
  3. Draft a schedule of focus blocks:
     - Schedule deep work in the user's peak-energy windows when possible; ask when
       those are if unknown.
     - Keep blocks between 45 and 120 minutes, with short breaks between
       back-to-back blocks.
     - Leave at least one 30-minute unscheduled buffer per day for the unexpected.
     - Label each block with the priority it serves and the outcome expected by its
       end.
  4. Present the proposed schedule for approval before creating any calendar events.
  5. After approval, create the calendar events, marked private and set to decline
     new overlapping invites automatically when the calendar supports it.
  6. On request, run a weekly reset: review which blocks survived, note what stole
     the others, and adjust next week's draft accordingly.

  ## Output Contract

  - A proposed schedule table with day, start time, duration, priority served, and
    expected outcome per block.
  - After approval, the created calendar events, confirmed with their titles and
    times.
  - A short summary: total focused hours planned, and which priorities still lack
    coverage.

  ## Operating Rules

  - Never create, move, or delete a calendar event without the user's explicit
    approval of the plan.
  - Never read or share calendar details beyond what this skill needs; report only
    titles and times of the relevant blocks.
  - If the calendar is fully booked, say so and propose the smallest meeting to
    reschedule, rather than stacking blocks on top of commitments.
  - When a block must be cut short, keep the expected outcome attached so the work
    can resume where it stopped.
  - Do not invent priorities; only schedule what the user named.
install_prompt: |
  Install the "Deep Work Scheduler" skill. Its full source is below. Create it at
  ~/workspace/skills/deep-work-scheduler/SKILL.md following skill-creator conventions
  (name and description frontmatter; Purpose, Workflow, Output Contract, Operating
  Rules sections). Confirm it is installed and tell me the trigger phrases. Then, as a
  separate step, offer to run the first scheduling pass and wait for the user's
  priorities before creating anything.

  --- SOURCE ---
  ---
  name: deep-work-scheduler
  description: Turns a weekly priority list into protected deep-work calendar blocks,
    then defends them from meeting creep. You bring the priorities; it places the
    time-boxed sessions where meetings cannot swallow them. Trigger phrases: schedule
    my deep work, plan my focus time, protect my calendar, book deep work blocks.

  ## Purpose

  Plans focused work sessions for the week ahead and places them on your calendar
  where meetings cannot swallow them. You bring the priorities; the skill turns them
  into time-boxed blocks with start times, durations, and a clear outcome per block.

  ## Workflow

  1. Collect the week's priorities: ask the user to list 1 to 3 outcomes that need
     focused work this week, each with a plain-language description and a rough size
     (small: 30 to 60 minutes, medium: 1 to 2 hours, large: 2+ hours, split into
     pieces).
  2. Read the user's calendar for the week to find free windows and existing
     commitments.
  3. Draft a schedule of focus blocks:
     - Schedule deep work in the user's peak-energy windows when possible; ask when
       those are if unknown.
     - Keep blocks between 45 and 120 minutes, with short breaks between
       back-to-back blocks.
     - Leave at least one 30-minute unscheduled buffer per day for the unexpected.
     - Label each block with the priority it serves and the outcome expected by its
       end.
  4. Present the proposed schedule for approval before creating any calendar events.
  5. After approval, create the calendar events, marked private and set to decline
     new overlapping invites automatically when the calendar supports it.
  6. On request, run a weekly reset: review which blocks survived, note what stole
     the others, and adjust next week's draft accordingly.

  ## Output Contract

  - A proposed schedule table with day, start time, duration, priority served, and
    expected outcome per block.
  - After approval, the created calendar events, confirmed with their titles and
    times.
  - A short summary: total focused hours planned, and which priorities still lack
    coverage.

  ## Operating Rules

  - Never create, move, or delete a calendar event without the user's explicit
    approval of the plan.
  - Never read or share calendar details beyond what this skill needs; report only
    titles and times of the relevant blocks.
  - If the calendar is fully booked, say so and propose the smallest meeting to
    reschedule, rather than stacking blocks on top of commitments.
  - When a block must be cut short, keep the expected outcome attached so the work
    can resume where it stopped.
  - Do not invent priorities; only schedule what the user named.
---

Deep Work Scheduler protects the most valuable hours of your week: the focused ones.
Most people lose deep work to meeting creep, not to laziness. A 90-minute block meant
for real thinking shrinks when a "quick sync" lands on top of it, and the work slips
to the evening. This skill fights that pattern directly.

You start each week by naming 1 to 3 outcomes that need focused attention: finishing
a report draft, learning a new tool, planning a project. The skill sizes each one,
scans your calendar for genuine free windows, and drafts a schedule of time-boxed
sessions. Blocks run 45 to 120 minutes, sit in your peak-energy windows when known,
and always carry a written outcome, such as "draft sections 1 and 2 finished," so you
know when the session succeeded.

The plan is presented for approval before any calendar event is created. Once you
approve, the blocks land on your calendar as private events set to decline
overlapping invites where your calendar supports it. A daily 30-minute buffer stays
unscheduled for the unexpected.

The weekly reset is the part that compounds. On request, the skill reviews which
blocks survived the week, notes what stole the rest (recurring meetings, ad-hoc
requests, poor placement), and adjusts the next draft: blocks move to better
windows, fragile slots get reinforced, and priorities that never got coverage rise
to the top.

## What it includes

- A weekly scheduling pass: priorities, sizes, and peak-energy windows become a
  proposed block schedule
- Approval-first calendar writes: nothing is created, moved, or deleted without
  your sign-off
- Private events that decline overlapping invites when your calendar supports it
- A 30-minute daily buffer left unscheduled on purpose
- A weekly reset review that tracks which blocks survived and what stole the rest

## Example

Input: priorities "Finish Q3 board deck draft (large)" and "Review two vendor
proposals (medium)", peak-energy window 8:00 to 11:00 AM, calendar free
Tuesday morning.

Output:

```
| Day | Start    | Duration | Priority                | Outcome                  |
| --- | -------- | -------- | ----------------------- | ------------------------ |
| Tue | 8:00 AM  | 90 min   | Q3 board deck draft     | Sections 1 and 2 drafted |
| Tue | 9:45 AM  | 60 min   | Review vendor proposals | Comparison notes done    |

Planned: 2.5 focused hours. Both priorities covered.
Approve to create these events?
```
