---
title: "Tax Doc Gatherer"
tagline: "February checklist of expected tax documents; tracks what arrived."
category: "money"
type: "workflow"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/tax-doc-gatherer.md"
source_verified: true
origin: "directory"
includes: ["instructions", "workflow", "schedule"]
version: "1.0.0"
date_added: 2026-09-10
safety_notes: |
  Asks about your income sources once, then watches your inbox
  for the matching documents. Reads only. Never shares anything
  with a preparer or service.
install_prompt: |
  Set up the "Tax Doc Gatherer" workflow. Its full source is
  below. Default schedule: every Monday in February at 09:00 local
  time. Ask me to confirm or change this time before you create
  the recurring job. Once I confirm, create the job. Tell me the
  job name and the confirmed schedule when it is set up.

  --- SOURCE ---
  name: tax-doc-gatherer
  description: February tax-season checklist : builds the list of expected documents from your income sources, watches the inbox, and reports what arrived and what is still missing. Trigger phrases: "gather my tax docs", "what tax documents am I missing", "tax season checklist".

  schedule: every Monday in February at 09:00 local time. Confirm the time with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "gather my tax docs" request.

  steps:
    1. First run: ask the user for income sources (employer, freelance clients, banks, brokerages, crypto, rental, retirement accounts). Save the list for the season.
    2. Map each source to expected documents: W-2, 1099-NEC, 1099-INT, 1099-DIV, 1099-B, 1098, K-1, etc.
    3. Search the inbox for tax documents from the past 60 days: "tax document", "1099", "W-2", "available for download".
    4. Mark each expected doc as arrived or missing. For missing ones, note the issuer's typical send date if known.
    5. Write the report in the Output shape and send it. Save the checklist state so next week's run shows progress.

  output:
    - Arrived: one line each, with where it was found
    - Still missing: one line each, with issuer and typical timing
    - Ready to file: yes or no

  rules:
    - Read only. Never download documents to shared storage, never send anything to a preparer or service.
    - The income-source list is the user's. Ask once, reuse all season.
    - Never guess a missing document's contents. The checklist is about arrival, not numbers.
    - Run only on the confirmed schedule or when asked.
source: |
  name: tax-doc-gatherer
  description: February tax-season checklist : builds the list of expected documents from your income sources, watches the inbox, and reports what arrived and what is still missing. Trigger phrases: "gather my tax docs", "what tax documents am I missing", "tax season checklist".

  schedule: every Monday in February at 09:00 local time. Confirm the time with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "gather my tax docs" request.

  steps:
    1. First run: ask the user for income sources (employer, freelance clients, banks, brokerages, crypto, rental, retirement accounts). Save the list for the season.
    2. Map each source to expected documents: W-2, 1099-NEC, 1099-INT, 1099-DIV, 1099-B, 1098, K-1, etc.
    3. Search the inbox for tax documents from the past 60 days: "tax document", "1099", "W-2", "available for download".
    4. Mark each expected doc as arrived or missing. For missing ones, note the issuer's typical send date if known.
    5. Write the report in the Output shape and send it. Save the checklist state so next week's run shows progress.

  output:
    - Arrived: one line each, with where it was found
    - Still missing: one line each, with issuer and typical timing
    - Ready to file: yes or no

  rules:
    - Read only. Never download documents to shared storage, never send anything to a preparer or service.
    - The income-source list is the user's. Ask once, reuse all season.
    - Never guess a missing document's contents. The checklist is about arrival, not numbers.
    - Run only on the confirmed schedule or when asked.
---

Tax Doc Gatherer turns February into a checklist instead of a
treasure hunt. Tell it your income sources once; every Monday it
reports which W-2s and 1099s have arrived in your inbox and which
are still missing , so you know exactly when you're ready to file.

## What it includes

- Income-source to expected-document mapping
- Weekly inbox sweep for tax documents
- Arrived vs. missing tracking across the season
- Ready-to-file verdict

## Example

Output:

```
Tax docs , week 2 of February

Arrived:
- W-2 from employer (email, Feb 1)
- 1099-INT from bank (email, Feb 3)

Still missing:
- 1099-NEC from freelance client (usually sends mid-Feb)
- 1099-B from brokerage (typically available Feb 15)

Ready to file: no , 2 documents outstanding.
```
