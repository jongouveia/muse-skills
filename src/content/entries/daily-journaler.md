---
title: "Daily Journaler"
tagline: "Turns end-of-day notes into a structured journal entry in your notes system."
category: "productivity"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/daily-journaler.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "template"]
version: "1.0.0"
date_added: 2026-10-13
safety_notes: |
  Reads only the notes you paste or point it at for that day.
  Writes a journal draft to you and nothing else. Never sends,
  publishes, or shares your journal, and never mixes in notes from
  other days unless you ask it to.
install_prompt: |
  Install the "Daily Journaler" skill. Its full source is below. Create it
  at ~/workspace/skills/daily-journaler/SKILL.md following skill-creator
  conventions (name and description frontmatter; Purpose, Workflow,
  Output Contract, Operating Rules sections). Then confirm it is
  installed and tell me the trigger phrases.

  --- SOURCE ---
  ---
  name: daily-journaler
  description: Turn rough end-of-day notes into a structured daily journal entry for your notes system. Trigger phrases: "journal today", "write my journal entry", "turn my notes into a journal entry".
  ---
  # Purpose

  Turn the user's raw end-of-day notes into a clean, structured journal
  entry that fits their notes system (Obsidian, Apple Notes, or plain
  markdown files). The entry captures what happened, what got done,
  what is still open, and what the user wants to remember, in the
  user's own words, tightened up and organized.

  # Workflow

  1. Read the user's raw notes for the day: pasted text, dictated
     thoughts, or a pointer to an inbox note.
  2. Ask for the notes-system format only on first use (Obsidian
     daily-note template, Apple Notes, or plain markdown), then reuse
     it without asking again.
  3. Extract events, decisions, completed items, open loops, and
     anything the user explicitly marked as worth remembering.
  4. Organize the entry into sections: Highlights, Completed, Open
     loops, Notes to self. Drop a section if it would be empty.
  5. Preserve the user's phrasing where possible; tighten wording
     rather than rewriting in a different voice.
  6. Never invent facts the notes did not contain. If something is
     unclear, flag it with a question instead of filling it in.
  7. Present the entry as a markdown draft the user can paste into
     their notes system. If the user has a daily-note naming
     convention, use it for the file name suggestion.

  # Output Contract

  A markdown journal entry dated for the day being journaled, with
  sections in this order (skipping empty ones):

  - Highlights: the 1 to 3 moments that mattered most
  - Completed: what got finished, one short line each
  - Open loops: what is still pending, with the next action where known
  - Notes to self: reminders, ideas, or observations for later

  After the entry, a single line suggests the file name for the user's
  notes system.

  # Operating Rules

  - Never publish, send, or share a journal entry. It stays private
    to the user.
  - Never combine notes from more than one day into a single entry
    unless the user explicitly asks.
  - Never invent events, feelings, or facts the notes did not state.
    Mark gaps as questions.
  - Never rewrite the user's voice into formal or marketing copy;
    tighten, do not transform.
  - Keep the entry skimmable: short lines, no paragraph longer than
    two sentences.
  - Run only when asked; do not journal unprompted.
source: |
  ---
  name: daily-journaler
  description: Turn rough end-of-day notes into a structured daily journal entry for your notes system. Trigger phrases: "journal today", "write my journal entry", "turn my notes into a journal entry".
  ---
  # Purpose

  Turn the user's raw end-of-day notes into a clean, structured journal
  entry that fits their notes system (Obsidian, Apple Notes, or plain
  markdown files). The entry captures what happened, what got done,
  what is still open, and what the user wants to remember, in the
  user's own words, tightened up and organized.

  # Workflow

  1. Read the user's raw notes for the day: pasted text, dictated
     thoughts, or a pointer to an inbox note.
  2. Ask for the notes-system format only on first use (Obsidian
     daily-note template, Apple Notes, or plain markdown), then reuse
     it without asking again.
  3. Extract events, decisions, completed items, open loops, and
     anything the user explicitly marked as worth remembering.
  4. Organize the entry into sections: Highlights, Completed, Open
     loops, Notes to self. Drop a section if it would be empty.
  5. Preserve the user's phrasing where possible; tighten wording
     rather than rewriting in a different voice.
  6. Never invent facts the notes did not contain. If something is
     unclear, flag it with a question instead of filling it in.
  7. Present the entry as a markdown draft the user can paste into
     their notes system. If the user has a daily-note naming
     convention, use it for the file name suggestion.

  # Output Contract

  A markdown journal entry dated for the day being journaled, with
  sections in this order (skipping empty ones):

  - Highlights: the 1 to 3 moments that mattered most
  - Completed: what got finished, one short line each
  - Open loops: what is still pending, with the next action where known
  - Notes to self: reminders, ideas, or observations for later

  After the entry, a single line suggests the file name for the user's
  notes system.

  # Operating Rules

  - Never publish, send, or share a journal entry. It stays private
    to the user.
  - Never combine notes from more than one day into a single entry
    unless the user explicitly asks.
  - Never invent events, feelings, or facts the notes did not state.
    Mark gaps as questions.
  - Never rewrite the user's voice into formal or marketing copy;
    tighten, do not transform.
  - Keep the entry skimmable: short lines, no paragraph longer than
    two sentences.
  - Run only when asked; do not journal unprompted.
---

Daily Journaler takes the messy notes you jot down at the end of the
day and turns them into a structured journal entry that fits your
notes system, whether that is Obsidian, Apple Notes, or plain markdown
files. It pulls out the highlights, what you completed, the open
loops, and the notes you want to keep, then arranges them in a
skimmable entry in your own words, tightened but not rewritten.

You only set your format once: your daily-note template, your file
naming convention, or your preferred structure. After that, the skill
remembers it and just produces the entry. It never invents facts your
notes did not contain. If something is unclear, it flags it as a
question instead of filling it in, so your journal stays honest.

Your journal entries are private by design. The skill never publishes,
sends, or shares them, and it never blends in notes from other days
unless you ask. It runs only when you call it, so there is no
background journaling you did not request.

## What it includes

- A fixed journal structure: Highlights, Completed, Open loops, Notes to self
- First-use format setup that is remembered across sessions
- Phrasing preservation: tightens your wording without rewriting your voice
- Gap flagging instead of invention when notes are unclear
- A suggested file name matching your daily-note convention

## Example

Input: "journal today" with these notes: "fixed the sink, called the plumber about the disposal, brainstormed names for the new product, worried about the server migration."

Output:

```
# 2026-10-13

## Highlights
- Brainstormed names for the new product

## Completed
- Fixed the sink

## Open loops
- Plumber call about the disposal (waiting on quote?)

## Notes to self
- Server migration is still weighing on me, check timeline tomorrow

Suggested file name: 2026-10-13.md
```
