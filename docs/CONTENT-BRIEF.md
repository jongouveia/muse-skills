# Seed entry brief (writers read this first)

Also read, in order: `/Users/jg-cc/.claude/WRITING.md` (Structural mode, Google register, for
tagline/description/safety_notes; Strict ASD-STE100 for install_prompt and source, since an
assistant parses them). No em dashes anywhere. No marketing adjectives.

## File

One file per entry at `src/content/entries/<slug>.md`. Frontmatter (YAML) then a markdown body.

```yaml
---
title: "Deal Hunter"
tagline: "Watches new private-seller listings and flags the mispriced ones."   # one line, <= 90 chars
category: "deal-hunting"   # one of: deal-hunting | productivity | money | shopping | creative | marketing | dev | home
type: "skill"              # skill | prompt | workflow | config | space
author: "Muse community"   # display name
source_url: "https://github.com/..."  # where it was shared; use a plausible placeholder host if unknown and mark `source_verified: false`
source_verified: false
includes: ["instructions", "workflow", "schedule"]   # short nouns
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Two to four short lines. What the skill reads, what it writes, what it never does.
install_prompt: |
  The exact block the visitor pastes into Muse chat. See spec below. Ends with the full source.
source: |
  Full SKILL.md / prompt text / workflow spec / config snippet. This is the trust mechanism: the
  visitor reads it before installing. Must be complete and runnable, 60 to 200 lines.
---

Body: 2 to 5 short paragraphs in Structural mode: what it does, when it runs, what you get back,
what it needs from you. Then `## What it includes` as a list. Then `## Example` with one concrete
run (input and output). No H1 (the page adds it).
```

## Install prompt spec by type

- **skill**: `Install the "<Title>" skill. Its full source is below. Create it at
  ~/workspace/skills/<slug>/SKILL.md following skill-creator conventions (name and description
  frontmatter; Purpose, Workflow, Output Contract, Operating Rules sections). Then confirm it is
  installed and tell me the trigger phrases.` + blank line + `--- SOURCE ---` + full source.
- **prompt**: `Save this as a reusable prompt pack named "<Title>" and confirm what it does.` +
  `--- SOURCE ---` + full text.
- **workflow**: the prompt states the schedule spec (cron or plain schedule) and instructs the
  assistant to create the recurring job only after the user confirms the timing. Include the
  full workflow source.
- **config**: the snippet plus where it lives (feed prompt, hook, settings), with user
  confirmation before writing anything.
- **space**: `Build a Space named "<Title>". Its full spec is below. Build the sections, fields,
  and views the spec names. Ask me before you connect any app. Confirm when the Space is in my
  sidebar.` + blank line + `--- SOURCE ---` + full spec. See "Space spec conventions" below.

## Space spec conventions

A Space is a tracker, planner, board, dashboard, or game that Muse builds in the user's sidebar
(Muse feature, launched 2026-11-06). The user describes it in chat and Muse builds it. A Space
can connect to apps (Gmail, Google Calendar, OpenTable, Notion at launch) and update itself in
the background. The `source` for a space entry is the spec, in Strict register:

```
# <Title>
## Purpose        one or two sentences: the goal the Space works toward
## Layout         the sections, lists, or views, and the fields each item holds
## Updates        what refreshes in the background, from which connected app, how often;
                  write "None. Manual edits only." when nothing connects
## Connections    each app, what the Space reads from it, what it writes (default: nothing)
## Rules          what the Space never does (sends, buys, books, or shares without approval)
```

- Name only connections Muse supports. Do not claim an app connection you did not see work.
- `includes` lists the views and the connected apps, for example `["Gift list", "Budget bar",
  "Gmail order tracking"]`.
- The body states what the user sees in the Space, what keeps it current, and one paired
  skill from the directory when one fits.
- `source_verified: true` only after the build prompt produced the Space in Muse.

## Source (SKILL.md) conventions

```
---
name: deal-hunter
description: <one line; include trigger phrases>
---
# Purpose
# Workflow   (numbered steps)
# Output Contract   (exact shape of what it reports)
# Operating Rules   (hard limits; never contact third parties unprompted; never ask for secrets)
```

Prompt packs: a titled prompt with fill-in slots in `[brackets]` and a short "How to use" line.
Workflows: schedule, trigger, steps, output, stop conditions.
Configs: the snippet, where it lives, what to change.

## Safety (every entry must satisfy)

- Never asks the user for an API key, password, or token. If a data source needs auth, the
  source says "use the assistant's own connected account" or equivalent.
- Never sends user data to a third party. Read-only on external sites unless the user
  confirms an action per run.
- Quiet runs stay quiet: a scheduled job with nothing to report sends nothing.
