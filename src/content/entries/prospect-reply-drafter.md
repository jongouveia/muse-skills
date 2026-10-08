---
title: "Prospect Reply Drafter"
tagline: "Reads a prospect's reply in the context of the thread and drafts the right next step."
category: "marketing"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/prospect-reply-drafter.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "templates"]
version: "1.0.0"
date_added: 2026-10-08
safety_notes: |
  Drafts only; it never sends a reply and never contacts a prospect.
  It never invents facts about your product, pricing, or the prospect,
  and a human reviews and sends every message.
install_prompt: |
  Install the "Prospect Reply Drafter" skill. Its full source is below. Create it
  at ~/workspace/skills/prospect-reply-drafter/SKILL.md following skill-creator
  conventions (name and description frontmatter; Purpose, Workflow,
  Output Contract, Operating Rules sections). Then confirm it is
  installed and tell me the trigger phrases.

  --- SOURCE ---
  ---
  name: prospect-reply-drafter
  description: Read a prospect's reply in the context of the thread and draft the right next step. Trigger phrases: "draft a reply to this prospect", "how should I respond", "write a follow-up for".
  ---
  # Purpose

  Read a prospect's latest reply together with the full thread
  history, figure out what the prospect is actually signaling, and
  draft the single best next move. It classifies the reply, an
  objection, a timing deferral, a referral, a polite no, or genuine
  interest, and writes a response matched to that signal instead of a
  generic follow-up.

  # Workflow

  1. Read the full thread: your outreach, their reply, and any
     earlier exchanges. Ask for the offer or call to action if it
     is not clear from the thread.
  2. Classify the reply: interested, objection, timing deferral,
     referral, polite no, or ambiguous.
  3. Identify the signal underneath the words: what they care about,
     what is blocking them, what would change their mind.
  4. Draft one reply: short, specific, and matched to the
     classification. Handle objections by addressing the block, not
     by arguing.
  5. Give the human a send-or-edit choice: the draft plus two
     alternate lines for the risky spots.

  # Output Contract

  - Classification: one label plus the evidence line from the
    reply.
  - Signal read: what the prospect cares about and what blocks
    them, in two bullets.
  - Draft reply: subject or opener plus body, ready to paste, under
    120 words.
  - Alternates: two rewrite options for the key line.

  # Operating Rules

  - Never send anything; the human reviews and sends every reply.
  - Never invent facts about the product, pricing, or the
    prospect.
  - Never guilt-trip, never pressure, never fake a personal
    connection.
  - If the reply is a no, draft a graceful close, not a rescue
    attempt.
source: |
  ---
  name: prospect-reply-drafter
  description: Read a prospect's reply in the context of the thread and draft the right next step. Trigger phrases: "draft a reply to this prospect", "how should I respond", "write a follow-up for".
  ---
  # Purpose

  Read a prospect's latest reply together with the full thread
  history, figure out what the prospect is actually signaling, and
  draft the single best next move. It classifies the reply, an
  objection, a timing deferral, a referral, a polite no, or genuine
  interest, and writes a response matched to that signal instead of a
  generic follow-up.

  # Workflow

  1. Read the full thread: your outreach, their reply, and any
     earlier exchanges. Ask for the offer or call to action if it
     is not clear from the thread.
  2. Classify the reply: interested, objection, timing deferral,
     referral, polite no, or ambiguous.
  3. Identify the signal underneath the words: what they care about,
     what is blocking them, what would change their mind.
  4. Draft one reply: short, specific, and matched to the
     classification. Handle objections by addressing the block, not
     by arguing.
  5. Give the human a send-or-edit choice: the draft plus two
     alternate lines for the risky spots.

  # Output Contract

  - Classification: one label plus the evidence line from the
    reply.
  - Signal read: what the prospect cares about and what blocks
    them, in two bullets.
  - Draft reply: subject or opener plus body, ready to paste, under
    120 words.
  - Alternates: two rewrite options for the key line.

  # Operating Rules

  - Never send anything; the human reviews and sends every reply.
  - Never invent facts about the product, pricing, or the
    prospect.
  - Never guilt-trip, never pressure, never fake a personal
    connection.
  - If the reply is a no, draft a graceful close, not a rescue
    attempt.
---

Prospect Reply Drafter reads a prospect's reply inside the full
context of the thread and drafts the right next move. Most
follow-ups fail because they answer the words instead of the
signal: a "not right now" needs a calendar, a pricing question
needs a scope, and a polite no needs a graceful exit, not another
push. This skill classifies the reply, interested, objection,
timing deferral, referral, polite no, or ambiguous, reads the
block underneath it, and writes one short, specific response
matched to that signal. Every draft comes with alternate lines for
the risky spots, so you can tune the tone before anything goes
out. It never sends, never invents facts about your product or
the prospect, and never fakes a personal connection. A human
reviews and sends every reply; the skill just makes sure the reply
is the right one.

## What it includes

- Full-thread reader with offer and call-to-action check
- Reply classifier: interest, objection, deferral, referral, no
- Signal read on what the prospect cares about and what blocks them
- One paste-ready draft under 120 words, matched to the signal
- Two alternate rewrites for the key line

## Example

Input: your cold outreach plus the reply "This looks interesting
but we just signed with another vendor for the year."

Output:

```
CLASSIFICATION: Timing deferral.
Evidence: "we just signed with another vendor for the year."

SIGNAL READ
- Cares about: solving the problem (called it "interesting").
- Block: locked into a 12-month vendor contract.

DRAFT REPLY
Subject: re: quick question
Hi Maya, congrats on getting that sorted. One line worth knowing
for month 11: most teams who switch from [vendor] come to us for
[one differentiator]. Worth a 15-minute look then? No pitch, just
a teardown of what you are working with.

ALTERNATES
- "Mind if I check back in month 10 with a comparison?"
- "Happy to send a one-page breakdown now for your renewal file."
```
