---
title: "1:1 Agenda Builder"
tagline: "Turns scattered notes into a tight agenda for your next 1:1."
category: "productivity"
type: "prompt"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/one-on-one-agenda-builder.md"
source_verified: false
origin: "directory"
includes: ["prompt-text"]
version: "1.0.0"
date_added: 2026-09-14
safety_notes: |
  Organizes the notes you paste. Never contacts anyone or shares
  anything.
install_prompt: |
  Install the "1:1 Agenda Builder" prompt pack. Its full source is
  below. Save it to ~/workspace/prompts/one-on-one-agenda-builder.md
  (create the folder if needed). Then confirm it is installed and
  show me the full text.

  --- SOURCE ---
  This prompt pack turns scattered notes into a 1:1 meeting agenda.
  Paste it into Muse along with your notes.

  > Turn these notes into a 1:1 agenda for [person, role]. Sort
  > into: (1) updates I owe them, 2 minutes max, (2) things I
  > need from them, each as a clear ask, (3) topics to discuss:
  > with my position stated briefly, and (4) anything sensitive,
  > flagged so I handle it with care. Cut anything that doesn't
  > need a conversation, if it could be an email, say so and
  > drop it from the agenda. Keep the whole thing fittable in
  > 30 minutes, hardest items first.
source: |
  This prompt pack turns scattered notes into a 1:1 meeting agenda.
  Paste it into Muse along with your notes.

  > Turn these notes into a 1:1 agenda for [person, role]. Sort
  > into: (1) updates I owe them, 2 minutes max, (2) things I
  > need from them, each as a clear ask, (3) topics to discuss:
  > with my position stated briefly, and (4) anything sensitive,
  > flagged so I handle it with care. Cut anything that doesn't
  > need a conversation, if it could be an email, say so and
  > drop it from the agenda. Keep the whole thing fittable in
  > 30 minutes, hardest items first.
---

1:1 Agenda Builder is a prompt pack for the meeting that wanders
without one. Paste your scattered notes and get a sorted agenda:
updates you owe, clear asks, discussion topics with your position
stated, and sensitive items flagged, with anything that could be
an email cut out entirely.

## What it includes

- Four-bucket sort: updates, asks, discussions, sensitive
- Email-test: anything that doesn't need conversation gets cut
- 30-minute fit with hardest items first

## Example

Input: notes about a project delay, a promotion question, and three status updates.

Output (abridged):

```
1:1 with Sam (manager), 30 min

Updates (2 min): deploy went out Tuesday; on-call was quiet.

I need from Sam:
- Decision on the timeline slip: 1 week or cut scope?
- Feedback on the promo packet by Friday.

Discuss: team workload, my position is we're one hire short.
Flagged sensitive: the workload point; keep it constructive.

Cut (send as email): the deploy notes and the docs link.
```
