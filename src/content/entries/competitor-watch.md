---
title: "Competitor Watch"
tagline: "Monthly: what competitors launched or posted, in one brief."
category: "marketing"
type: "workflow"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/competitor-watch.md"
source_verified: true
origin: "directory"
includes: ["instructions", "workflow", "schedule"]
version: "1.0.0"
date_added: 2026-09-10
safety_notes: |
  Reads public competitor pages and posts only, on the schedule
  you set. Writes the brief to you and nothing else. Never signs
  up for anything as you.
install_prompt: |
  Set up the "Competitor Watch" workflow. Its full source is
  below. Default schedule: first Monday of each month at 09:00
  local time. Ask me to confirm or change this time before you
  create the recurring job. Once I confirm, create the job. Tell
  me the job name and the confirmed schedule when it is set up.

  --- SOURCE ---
  name: competitor-watch
  description: Monthly competitor brief : what each named competitor launched, posted, or changed, and what it means for you. Trigger phrases: "watch my competitors", "competitor update", "what did competitors do this month".

  schedule: monthly, first Monday at 09:00 local time. Confirm the time with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "competitor update" request.

  steps:
    1. First run: ask the user for the competitor list (3-8 names) and what counts as signal (launches, pricing changes, big hires, notable posts).
    2. Each run: check each competitor's public pages , blog/changelog, pricing page, social accounts , for the past 30 days.
    3. For each item: what happened, when, and one line on why it matters to the user.
    4. Close with "so what": the 2-3 moves worth a response, and the rest as noise.
    5. Write the brief in the Output shape and send it.

  output:
    - Per competitor: what happened this month, one line each with dates
    - So what: the moves worth responding to, and the suggested response
    - Noise: everything else, one line total

  rules:
    - Public pages only. Never sign up for trials, newsletters, or demos as the user.
    - "Why it matters" is one line, not a strategy memo.
    - If a competitor did nothing notable, say so. Padding is noise.
    - Run only on the confirmed schedule or when asked.
source: |
  name: competitor-watch
  description: Monthly competitor brief : what each named competitor launched, posted, or changed, and what it means for you. Trigger phrases: "watch my competitors", "competitor update", "what did competitors do this month".

  schedule: monthly, first Monday at 09:00 local time. Confirm the time with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "competitor update" request.

  steps:
    1. First run: ask the user for the competitor list (3-8 names) and what counts as signal (launches, pricing changes, big hires, notable posts).
    2. Each run: check each competitor's public pages , blog/changelog, pricing page, social accounts , for the past 30 days.
    3. For each item: what happened, when, and one line on why it matters to the user.
    4. Close with "so what": the 2-3 moves worth a response, and the rest as noise.
    5. Write the brief in the Output shape and send it.

  output:
    - Per competitor: what happened this month, one line each with dates
    - So what: the moves worth responding to, and the suggested response
    - Noise: everything else, one line total

  rules:
    - Public pages only. Never sign up for trials, newsletters, or demos as the user.
    - "Why it matters" is one line, not a strategy memo.
    - If a competitor did nothing notable, say so. Padding is noise.
    - Run only on the confirmed schedule or when asked.
---

Competitor Watch runs monthly and reads your competitors' public
pages : blogs, changelogs, pricing, social : then briefs you on what
actually happened and the two or three moves worth responding to.
The rest gets one line as noise.

## What it includes

- Monthly scan of 3-8 named competitors' public pages
- Per-item one-liners with dates
- "So what" with suggested responses
- Noise collapsed to a line

## Example

Output:

```
Competitor watch , September

Rival A: raised Pro plan to $29 (Sep 3). Why it matters: your
  $19 plan just got cheaper-looking.
Rival B: launched an AI feature (Sep 20). Why it matters:
  matches your roadmap item : ship yours first.

So what: Rival A's pricing is your opening , say so on the
pricing page. Rival B needs a response this quarter.

Noise: Rival C posted 12 times about their office dog.
```
