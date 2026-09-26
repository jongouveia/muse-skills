---
title: "Invoice Chaser"
tagline: "Drafts polite, escalating payment reminders for overdue invoices."
category: "money"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/invoice-chaser.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "templates"]
version: "1.0.0"
date_added: 2026-09-25
safety_notes: |
  Drafts reminder emails only; it never sends anything without your
  approval. It saves each reminder's client, invoice number, stage, and
  date to memory so the next one escalates. It does not invent invoice
  numbers or amounts, mention late fees your contract does not include,
  or threaten legal action.
install_prompt: |
  Install the "Invoice Chaser" skill. Its full source is below. Create it
  at ~/workspace/skills/invoice-chaser/SKILL.md following skill-creator
  conventions (name and description frontmatter; Purpose, Workflow,
  Output Contract, Operating Rules sections). Then confirm it is
  installed and tell me the trigger phrases.

  --- SOURCE ---
  ---
  name: invoice-chaser
  description: Draft polite, escalating payment reminders for overdue invoices: gentle nudge, firm follow-up, and final notice. Trigger phrases: "chase my invoice", "draft a payment reminder", "follow up on overdue invoice".
  ---
  # Purpose

  Help freelancers and small businesses get paid on time without the
  awkwardness. Invoice Chaser takes an overdue invoice and drafts the
  right reminder for the moment: a friendly nudge early on, a firmer
  follow-up when silence stretches, and a final notice when patience
  runs out.

  # Workflow

  1. Collect the facts: client name, invoice number, amount, original
     due date, days overdue, and any contact already attempted.
  2. Choose the stage by days overdue and prior contact:
     - Stage 1 (1-14 days): gentle nudge, assumes an oversight.
     - Stage 2 (15-44 days): firm follow-up, asks for a payment date.
     - Stage 3 (45+ days): final notice, states consequences from the
       contract and a deadline for response.
  3. Draft the reminder in the stage's tone, using only facts the user
     provided or confirmed.
  4. Include a clear subject line, the invoice details, the amount
     due, and one specific ask (pay by a date, or reply with a date).
  5. Save the client, invoice number, stage, and date to memory, so
     the next run escalates instead of repeating the same message.

  # Output Contract

  Each reminder has three parts, in this order:

  - Subject: one line, includes the invoice number and amount.
  - Body: short, professional, stage-appropriate tone.
  - Next step: what to do if this one gets no reply (for example,
    "escalate to Stage 2 after 7 days").

  Never send. Present the draft and wait for the user's approval.

  # Operating Rules

  - Never send a reminder without the user's explicit approval.
  - Never invent an invoice number, amount, due date, or payment
    terms. Use only what the user provides.
  - Never mention late fees, interest, or penalties unless the user's
    contract includes them.
  - Never threaten legal action, collections, or public complaints.
  - Keep every message professional and brief. Frustration stays out
    of the draft.
  - If the client already paid or disputed the invoice, stop and say
    so instead of drafting.
source: |
  ---
  name: invoice-chaser
  description: Draft polite, escalating payment reminders for overdue invoices: gentle nudge, firm follow-up, and final notice. Trigger phrases: "chase my invoice", "draft a payment reminder", "follow up on overdue invoice".
  ---
  # Purpose

  Help freelancers and small businesses get paid on time without the
  awkwardness. Invoice Chaser takes an overdue invoice and drafts the
  right reminder for the moment: a friendly nudge early on, a firmer
  follow-up when silence stretches, and a final notice when patience
  runs out.

  # Workflow

  1. Collect the facts: client name, invoice number, amount, original
     due date, days overdue, and any contact already attempted.
  2. Choose the stage by days overdue and prior contact:
     - Stage 1 (1-14 days): gentle nudge, assumes an oversight.
     - Stage 2 (15-44 days): firm follow-up, asks for a payment date.
     - Stage 3 (45+ days): final notice, states consequences from the
       contract and a deadline for response.
  3. Draft the reminder in the stage's tone, using only facts the user
     provided or confirmed.
  4. Include a clear subject line, the invoice details, the amount
     due, and one specific ask (pay by a date, or reply with a date).
  5. Save the client, invoice number, stage, and date to memory, so
     the next run escalates instead of repeating the same message.

  # Output Contract

  Each reminder has three parts, in this order:

  - Subject: one line, includes the invoice number and amount.
  - Body: short, professional, stage-appropriate tone.
  - Next step: what to do if this one gets no reply (for example,
    "escalate to Stage 2 after 7 days").

  Never send. Present the draft and wait for the user's approval.

  # Operating Rules

  - Never send a reminder without the user's explicit approval.
  - Never invent an invoice number, amount, due date, or payment
    terms. Use only what the user provides.
  - Never mention late fees, interest, or penalties unless the user's
    contract includes them.
  - Never threaten legal action, collections, or public complaints.
  - Keep every message professional and brief. Frustration stays out
    of the draft.
  - If the client already paid or disputed the invoice, stop and say
    so instead of drafting.
---

Invoice Chaser is for anyone who bills clients and hates chasing money.
You give it an overdue invoice and it drafts the right reminder for the
moment: a gentle nudge that assumes an oversight, a firmer follow-up
that asks for a payment date, or a final notice that states the
contract terms and a response deadline.

It picks the stage from the days overdue and what you have already
tried, so you never send a harsh note as the first touch or a weak one
as the fifth. Every draft comes with a subject line, the invoice
details, one specific ask, and a note on what to do next if silence
continues.

It never sends anything on its own, never invents invoice details, and
never threatens anything your contract does not back up. Drafts stay
professional even when you are not feeling that way.

## What it includes

- Three escalation stages matched to days overdue
- Subject line, body, and next-step output format
- Rules against invented details and empty threats
- Stage tracking so follow-ups escalate instead of repeating

## Example

Input: invoice #1042, $2,400, due 30 days ago, one gentle nudge already sent.

Output:

```
Subject: Following up on invoice #1042 ($2,400)

Hi Maya,

Following up on invoice #1042 for $2,400, which was due on
August 26. I wanted to check whether payment is on its way or
if there is anything you need from me to release it.

Could you reply with the date I can expect payment?

Thanks,
[Your name]
```

Next step: escalate to Stage 3 if there is no reply in 15 days.
