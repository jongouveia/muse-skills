---
title: "Weekly Review"
tagline: "End-of-week review: open loops surfaced, next week's priorities drafted."
category: "productivity"
type: "prompt"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/weekly-review.md"
source_verified: false
origin: "directory"
includes: ["instructions", "review-template"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Reads your calendar, inbox, and a goal file through the
  assistant's own connected accounts. Writes only the review back
  to you. Never sends mail, never creates calendar events, never
  edits your goal file.
install_prompt: |
  Save this as a reusable prompt pack named "Weekly Review" and
  confirm what it does.

  --- SOURCE ---
  # Weekly Review

  How to use: run this Friday afternoon, or on a schedule you set.
  It reads your calendar, inbox, and goal file, then drafts the
  review. You approve the priorities; it never sets them for you.

  ## The prompt

  You are running my weekly review. Read my calendar for the past 7
  days, my inbox for flagged and unread messages, and my goal file.
  Use only what these three sources contain. Do not invent a meeting,
  an email, a goal, or completed work that is not in them.

  Build the review in this exact order:

  1. **Done this week.** The 3-5 most significant completed items,
     from calendar events and sent mail. One line each.
  2. **Open loops.** Anything started but unfinished: unanswered
     threads, meetings with no follow-up, goals with no movement.
     One line each, with the next physical action.
  3. **Proposed priorities for next week.** Three items, drawn from
     the open loops and the goal file. Mark them as proposed; the
     user confirms or edits them.
  4. **Calendar check.** Anything next week that needs prep, flagged
     one line each.

  Rules: do not mark anything done that is not evidenced in the
  sources. Keep the whole review under one page. End by asking which
  of the three proposed priorities to keep.
source: |
  # Weekly Review

  How to use: run this Friday afternoon, or on a schedule you set.
  It reads your calendar, inbox, and goal file, then drafts the
  review. You approve the priorities; it never sets them for you.

  ## The prompt

  You are running my weekly review. Read my calendar for the past 7
  days, my inbox for flagged and unread messages, and my goal file.
  Use only what these three sources contain. Do not invent a meeting,
  an email, a goal, or completed work that is not in them.

  Build the review in this exact order:

  1. **Done this week.** The 3-5 most significant completed items,
     from calendar events and sent mail. One line each.
  2. **Open loops.** Anything started but unfinished: unanswered
     threads, meetings with no follow-up, goals with no movement.
     One line each, with the next physical action.
  3. **Proposed priorities for next week.** Three items, drawn from
     the open loops and the goal file. Mark them as proposed; the
     user confirms or edits them.
  4. **Calendar check.** Anything next week that needs prep, flagged
     one line each.

  Rules: do not mark anything done that is not evidenced in the
  sources. Keep the whole review under one page. End by asking which
  of the three proposed priorities to keep.
---

Weekly Review runs Friday afternoon. It reads your calendar, inbox,
and goal file, then drafts the review in three parts: what got done,
what's still open (with the next action for each), and three proposed
priorities for next week. You confirm the priorities. It never sets
them for you.

## What it includes

- Done-this-week summary from calendar and sent mail
- Open-loops list with next physical actions
- Three proposed priorities for next week
- Next-week calendar prep flags

## Example

Output (abridged):

```
Done this week: shipped the pricing page, closed the Q3 invoice thread, dentist (finally).
Open loops: reply to Sam re: contract redlines → send the marked-up PDF; Q4 planning doc → add the hiring section.
Proposed priorities: 1) Send contract redlines 2) Finish Q4 planning doc 3) Clear the two open support escalations.
Needs prep: Tuesday's vendor call, read the SOW first.
```
