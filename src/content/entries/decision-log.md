---
title: "Decision Log"
tagline: "Log decisions with context; query them instead of re-litigating."
category: "productivity"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/decision-log.md"
source_verified: true
origin: "directory"
includes: ["instructions", "workflow", "decision-file"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Writes one log file in your workspace from what you tell it.
  Reads only that file back. Nothing is sent anywhere.
install_prompt: |
  Install the "Decision Log" skill. Its full source is below.
  Create it at ~/workspace/skills/decision-log/SKILL.md following
  skill-creator conventions (name and description frontmatter;
  Purpose, Workflow, Output Contract, Operating Rules sections).
  Then confirm it is installed and tell me the trigger phrases.

  --- SOURCE ---
  ---
  name: decision-log
  description: Keep a running log of decisions — what was decided, why, by whom, and when to revisit. Query it instead of re-litigating. Trigger phrases: "log this decision", "record a decision", "what did we decide about".
  ---
  # Purpose

  End the "wait, why did we do it this way?" loop. Every decision
  gets one entry: the call, the reasoning, who made it, and when it
  should be revisited. Six months later, the answer is in the file.

  # Workflow

  1. When the user reports a decision, capture: date, the decision
     in one sentence, the context and reasoning (2-3 sentences),
     who decided, and any alternatives considered and rejected.
  2. Ask for a revisit date when one makes sense ("revisit after
     the holiday traffic spike"); otherwise mark "no revisit set".
  3. Append the entry to decisions.md in the workspace, newest at
     the bottom, with a simple header per entry.
  4. On query ("what did we decide about X"), search the log and
     quote the entry — decision, reasoning, date, decider — then
     stop. Do not re-argue the decision.
  5. On request ("what needs revisiting"), list entries whose
     revisit date has passed.

  # Output Contract

  - decisions.md: one entry per decision with date, decision,
    reasoning, decider, alternatives, revisit date
  - Query answers: the quoted entry plus its date, nothing more
  - Revisit lists: entries past their revisit date, oldest first

  # Operating Rules

  - Record what was decided, not what should have been decided.
    No editorializing.
  - Never invent reasoning the user didn't give. Ask for the "why"
    if it's missing — one question, then log it.
  - The log is append-only. Corrections go in as new entries
    referencing the old one; never rewrite history.
  - The file stays in the user's workspace. Nothing is sent
    anywhere.
source: |
  ---
  name: decision-log
  description: Keep a running log of decisions — what was decided, why, by whom, and when to revisit. Query it instead of re-litigating. Trigger phrases: "log this decision", "record a decision", "what did we decide about".
  ---
  # Purpose

  End the "wait, why did we do it this way?" loop. Every decision
  gets one entry: the call, the reasoning, who made it, and when it
  should be revisited. Six months later, the answer is in the file.

  # Workflow

  1. When the user reports a decision, capture: date, the decision
     in one sentence, the context and reasoning (2-3 sentences),
     who decided, and any alternatives considered and rejected.
  2. Ask for a revisit date when one makes sense ("revisit after
     the holiday traffic spike"); otherwise mark "no revisit set".
  3. Append the entry to decisions.md in the workspace, newest at
     the bottom, with a simple header per entry.
  4. On query ("what did we decide about X"), search the log and
     quote the entry — decision, reasoning, date, decider — then
     stop. Do not re-argue the decision.
  5. On request ("what needs revisiting"), list entries whose
     revisit date has passed.

  # Output Contract

  - decisions.md: one entry per decision with date, decision,
    reasoning, decider, alternatives, revisit date
  - Query answers: the quoted entry plus its date, nothing more
  - Revisit lists: entries past their revisit date, oldest first

  # Operating Rules

  - Record what was decided, not what should have been decided.
    No editorializing.
  - Never invent reasoning the user didn't give. Ask for the "why"
    if it's missing — one question, then log it.
  - The log is append-only. Corrections go in as new entries
    referencing the old one; never rewrite history.
  - The file stays in the user's workspace. Nothing is sent
    anywhere.
---

Decision Log ends the "wait, why did we do it this way?" loop. Every
decision gets one entry — the call, the reasoning, who made it, when
to revisit it. Months later, the answer is in the file instead of in
someone's memory.

## What it includes

- Decision entries (call, reasoning, decider, alternatives, revisit date)
- Query mode: quote the entry, don't re-argue it
- Revisit-date tracking for decisions with an expiry
- Append-only history — corrections are new entries

## Example

Input: "log this decision: we're dropping the free tier, margins too thin, decided by me and Priya, revisit in 6 months."

Output:

```
Logged: 2026-09-09 — Drop the free tier (margins too thin). Decided by
you and Priya. Alternatives: usage-capped free tier (rejected — support
cost). Revisit: 2026-03-09.
```

Later: "what did we decide about the free tier?" → the entry, quoted.
