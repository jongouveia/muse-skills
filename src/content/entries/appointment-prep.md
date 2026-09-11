---
title: "Appointment Prep"
tagline: "Who you're seeing and why : the context worth re-reading first."
category: "productivity"
type: "prompt"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/appointment-prep.md"
source_verified: false
origin: "directory"
includes: ["instructions", "prep-template"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Reads your calendar, inbox, and notes through the assistant's own
  connected accounts. Writes only the brief back to you. Never
  contacts anyone or changes anything.
install_prompt: |
  Install the "Appointment Prep" prompt pack. Its full source is below. Save it at
  ~/workspace/prompts/appointment-prep.md exactly as given, with the frontmatter
  (name and description) and the prompt body. Do not run it now. Then
  confirm it is saved and tell me the trigger phrases: "prepare for an appointment", "brief me for my appointment", "what should I ask at my appointment".

  --- SOURCE ---
  # Appointment Prep

  How to use: name the appointment (person, doctor, contractor,
  interview : anything). It pulls the relevant history and hands
  you a one-page brief: what this is about, what happened last
  time, and what to ask or bring.
  Trigger phrases: "prepare for an appointment", "brief me for my appointment", "what should I ask at my appointment".

  Save it as a reusable prompt pack named "Appointment Prep".

  ## The prompt

  Prep me for this appointment. I will tell you who it is with and
  what it is about.

  1. Find the calendar event and any related emails, notes, or
     threads about this person or topic.
  2. Summarize: what this appointment is for, in 2-3 sentences.
  3. Recap what happened last time (if there was a last time):
     what was decided, what was left open.
  4. List what to bring or prepare: documents, questions, numbers
     to have on hand.
  5. Suggest 3 questions worth asking, specific to this
     appointment , not generic small talk.

  Rules: use only what the sources contain; do not invent history.
  If there is no prior history, say so and build the brief from the
  appointment details alone. Keep it to one page.
source: |
  # Appointment Prep

  How to use: name the appointment (person, doctor, contractor,
  interview : anything). It pulls the relevant history and hands
  you a one-page brief: what this is about, what happened last
  time, and what to ask or bring.
  Trigger phrases: "prepare for an appointment", "brief me for my appointment", "what should I ask at my appointment".

  Save it as a reusable prompt pack named "Appointment Prep".

  ## The prompt

  Prep me for this appointment. I will tell you who it is with and
  what it is about.

  1. Find the calendar event and any related emails, notes, or
     threads about this person or topic.
  2. Summarize: what this appointment is for, in 2-3 sentences.
  3. Recap what happened last time (if there was a last time):
     what was decided, what was left open.
  4. List what to bring or prepare: documents, questions, numbers
     to have on hand.
  5. Suggest 3 questions worth asking, specific to this
     appointment , not generic small talk.

  Rules: use only what the sources contain; do not invent history.
  If there is no prior history, say so and build the brief from the
  appointment details alone. Keep it to one page.
---

Appointment Prep is the five-minute brief before you walk in. Name
the appointment , a doctor, a contractor, an interview, a 1:1 : and
it pulls the relevant history into one page: what this is about,
what happened last time, what to bring, and three questions worth
asking.

## What it includes

- Calendar + inbox + notes lookup for the person or topic
- Last-time recap (decisions and open items)
- Bring-list: documents, numbers, questions
- Three specific questions, not small talk

## Example

Input: "dentist tomorrow, first visit in two years."

Output (abridged):

```
What: routine cleaning and checkup, first visit in ~2 years.
History: last visit (2024) : two fillings on upper molars; hygienist
  flagged flossing. No open treatment plan on file.
Bring: insurance card, list of current medications.
Ask: 1) Do the old fillings need attention? 2) Any gum recession
  since last time? 3) Whitening options and cost?
```
