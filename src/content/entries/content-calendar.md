---
title: "Content Calendar"
tagline: "Topic and cadence in; a four-week calendar of post ideas out."
category: "marketing"
type: "workflow"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/content-calendar.md"
source_verified: true
origin: "directory"
includes: ["instructions", "workflow", "schedule"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Uses only the topic and preferences you provide. Writes only the
  calendar back to you. Never posts to any platform.
install_prompt: |
  Set up the "Content Calendar" workflow. Its full source is below.
  Default schedule: first Monday of each month at 09:00 local
  time. Ask me to confirm or change this time before you create
  the recurring job. Once I confirm, create the job. Tell me the
  job name and the confirmed schedule when it is set up.

  --- SOURCE ---
  name: content-calendar
  description: Monthly content calendar: four weeks of post ideas for your topic and cadence, with hooks written. Trigger phrases: "plan next month's content", "content calendar for", "what should I post".

  schedule: monthly, first Monday at 09:00 local time. Confirm the time with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "plan next month's content" request.

  inputs: topic, platforms, posts per week per platform, any themes or launches coming up.

  steps:
    1. Confirm the inputs with the user the first time: topic, platforms, cadence. Remember them.
    2. Build four weeks of ideas. Mix the formats: teach (how-to), show (behind the scenes), prove (results or testimonials), ask (questions and polls).
    3. Every idea gets: the working title, the hook (first line), the format, and the platform.
    4. Tie at least two ideas per month to something timely: a launch, a season, a trend in the topic.
    5. Write the calendar in the Output shape and send it.

  output:
    - Week-by-week calendar: day, platform, working title, hook, format
    - Format mix summary (counts of teach / show / prove / ask)
    - Two "banked" backup ideas for weeks when nothing gets written

  rules:
    - Ideas, not finished posts. Hooks written, bodies left to the user.
    - Never invent launches, numbers, or testimonials. Mark placeholders clearly.
    - No posting, scheduling, or publishing. Planning only.
    - Run only on the confirmed schedule or when asked.
source: |
  name: content-calendar
  description: Monthly content calendar: four weeks of post ideas for your topic and cadence, with hooks written. Trigger phrases: "plan next month's content", "content calendar for", "what should I post".

  schedule: monthly, first Monday at 09:00 local time. Confirm the time with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "plan next month's content" request.

  inputs: topic, platforms, posts per week per platform, any themes or launches coming up.

  steps:
    1. Confirm the inputs with the user the first time: topic, platforms, cadence. Remember them.
    2. Build four weeks of ideas. Mix the formats: teach (how-to), show (behind the scenes), prove (results or testimonials), ask (questions and polls).
    3. Every idea gets: the working title, the hook (first line), the format, and the platform.
    4. Tie at least two ideas per month to something timely: a launch, a season, a trend in the topic.
    5. Write the calendar in the Output shape and send it.

  output:
    - Week-by-week calendar: day, platform, working title, hook, format
    - Format mix summary (counts of teach / show / prove / ask)
    - Two "banked" backup ideas for weeks when nothing gets written

  rules:
    - Ideas, not finished posts. Hooks written, bodies left to the user.
    - Never invent launches, numbers, or testimonials. Mark placeholders clearly.
    - No posting, scheduling, or publishing. Planning only.
    - Run only on the confirmed schedule or when asked.
---

Content Calendar plans a month of content in one pass. Give it your
topic, platforms, and cadence; every month it returns four weeks of
post ideas — each with the working title, the hook, and the format —
balanced across teach, show, prove, and ask, with two backup ideas
banked for the weeks nothing gets written.

## What it includes

- Four-week calendar with hooks and formats
- Teach / show / prove / ask format mix
- Timely tie-ins (launches, seasons, trends)
- Two banked backup ideas

## Example

Input: "topic: home coffee brewing, platforms: X + Instagram, 3 posts/week."

Output (abridged):

```
Week 1
- Mon (X): "Your grinder matters more than your brewer" — teach
- Wed (IG): reel — my morning pour-over routine — show
- Fri (X): "Ask me your brewing questions" — ask
...
Format mix: teach 4, show 4, prove 2, ask 2
Banked: "5 grinder myths", "what I wasted money on in year one"
```
