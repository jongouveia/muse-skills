---
title: "Invoice Drafter"
tagline: "Turns completed work and timesheet lines into a draft invoice plus a client-ready summary; a human always sends it."
category: "money"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/invoice-drafter.md"
source_verified: true
origin: "directory"
includes: ["instructions", "workflow", "templates"]
version: "1.0.0"
date_added: 2026-10-07
safety_notes: |
  Drafts only; it never sends the invoice, never contacts the client,
  and never marks anything paid or final. A human reviews and sends
  every time.
install_prompt: |
  Install the "Invoice Drafter" skill. Its full source is below. Create it
  at ~/workspace/skills/invoice-drafter/SKILL.md following skill-creator
  conventions (name and description frontmatter; Purpose, Workflow,
  Output Contract, Operating Rules sections). Then confirm it is
  installed and tell me the trigger phrases.

  --- SOURCE ---
  ---
  name: invoice-drafter
  description: Turn completed work and timesheet lines into a draft invoice and a client-ready summary. Trigger phrases: "draft an invoice", "make an invoice for", "invoice my client".
  ---
  # Purpose

  Turn a list of completed work into a draft invoice plus a
  plain-language summary a client can read without asking follow-up
  questions. The human always reviews and sends; the skill never
  sends anything.

  # Workflow

  1. Read the work: timesheet lines, project notes, or a paste of
     completed tasks. Ask for the client name, rate, currency, and
     billing period if any are missing.
  2. Group the lines into invoice items: date or milestone, a
     description of the work in client language, hours or quantity,
     rate, line total.
  3. Compute subtotal, tax if the user gives a rate, and total. Show
     the math so the human can check it.
  4. Draft a client-ready summary: what was done, in what period,
     and the total due, in two or three short paragraphs.
  5. Write the draft in the Output Contract shape. Never mark it
     final, never send it, never change a price without asking.

  # Output Contract

  - Draft invoice: client name, billing period, line items
    (description, hours or quantity, rate, line total), subtotal,
    tax, total due, payment terms placeholder.
  - Client summary: short prose recap of the work and the total.
  - Questions list: everything the skill had to assume, so the
    human can verify before sending.

  # Operating Rules

  - Never send the invoice or contact the client.
  - Never finalize, mark paid, or change a price on your own.
  - Never invent hours, rates, or dates; flag gaps as questions.
  - A human reviews and sends. Every time.
source: |
  ---
  name: invoice-drafter
  description: Turn completed work and timesheet lines into a draft invoice and a client-ready summary. Trigger phrases: "draft an invoice", "make an invoice for", "invoice my client".
  ---
  # Purpose

  Turn a list of completed work into a draft invoice plus a
  plain-language summary a client can read without asking follow-up
  questions. The human always reviews and sends; the skill never
  sends anything.

  # Workflow

  1. Read the work: timesheet lines, project notes, or a paste of
     completed tasks. Ask for the client name, rate, currency, and
     billing period if any are missing.
  2. Group the lines into invoice items: date or milestone, a
     description of the work in client language, hours or quantity,
     rate, line total.
  3. Compute subtotal, tax if the user gives a rate, and total. Show
     the math so the human can check it.
  4. Draft a client-ready summary: what was done, in what period,
     and the total due, in two or three short paragraphs.
  5. Write the draft in the Output Contract shape. Never mark it
     final, never send it, never change a price without asking.

  # Output Contract

  - Draft invoice: client name, billing period, line items
    (description, hours or quantity, rate, line total), subtotal,
    tax, total due, payment terms placeholder.
  - Client summary: short prose recap of the work and the total.
  - Questions list: everything the skill had to assume, so the
    human can verify before sending.

  # Operating Rules

  - Never send the invoice or contact the client.
  - Never finalize, mark paid, or change a price on your own.
  - Never invent hours, rates, or dates; flag gaps as questions.
  - A human reviews and sends. Every time.
---

Invoice Drafter turns a pile of timesheet lines and task notes into a
draft invoice you can send with confidence. It groups the work into
clear line items written in client language, not internal shorthand,
computes subtotal, tax, and total with the math shown, and pairs the
invoice with a short prose summary of what was done in the billing
period. Anything it had to guess becomes an explicit question, so
you verify the assumptions before anything goes out.

It drafts only. It never sends, never contacts the client, never
marks anything paid or final. The human reviews and sends every
time, which is the whole point: the tedious parts are done, and the
judgment calls stay yours.

## What it includes

- Timesheet and task-note reader with missing-field prompts
- Line-item grouping in client-readable language
- Subtotal, tax, and total with visible math
- A short client-ready prose summary
- An assumptions list so nothing unverified goes out

## Example

Input: five timesheet lines for a September design retainer, $150/hr.

Output:

```
DRAFT INVOICE: Acme Co. / September 2026
- Sep 8-12: Homepage wireframes, 8h x $150 = $1,200
- Sep 15-19: Checkout flow revisions, 6h x $150 = $900
Subtotal: $2,100 | Tax: n/a | Total due: $2,100
Terms: Net 15 (placeholder)

CLIENT SUMMARY
September covered two milestones: homepage wireframes and checkout
flow revisions, totaling 14 hours. Total due: $2,100.

QUESTIONS
- Confirm Sep 19 revision counts toward retainer hours.
```
