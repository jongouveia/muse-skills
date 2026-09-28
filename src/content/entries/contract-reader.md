---
title: "Contract Reader"
tagline: "Turns dense contracts into plain-language summaries with key dates, fees, and red flags."
category: "productivity"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/contract-reader.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "report-format"]
version: "1.0.0"
date_added: 2026-09-27
safety_notes: |
  Explains contract language in plain words only; it never provides legal
  advice and never tells the user a contract is safe to sign. It works
  only from the text the user provides and never invents terms, dates, or
  amounts. It quotes exact clause text before paraphrasing, and says
  plainly which sections were unclear or missing.
install_prompt: |
  Install the "Contract Reader" skill. Its full source is below. Create it
  at ~/workspace/skills/contract-reader/SKILL.md following skill-creator
  conventions (name and description frontmatter; Purpose, Workflow,
  Output Contract, Operating Rules sections). Then confirm it is
  installed and tell me the trigger phrases.

  --- SOURCE ---
  ---
  name: contract-reader
  description: Read a contract or terms of service and get a plain-language summary with key dates, fees, cancellation terms, and red flags. Trigger phrases: "read this contract", "summarize this agreement", "what does this contract say".
  ---
  # Purpose

  Contracts are written to be precise, not readable. Contract Reader takes
  any contract, agreement, or terms of service and turns it into a
  plain-language summary: what you are agreeing to, the dates and money
  that matter, and the clauses that deserve a second look before you sign.

  # Workflow

  1. Accept the contract text or the key sections the user pastes in. Ask
     which sections matter most if the document is very long.
  2. Extract the essentials: the parties, what each side must do, the
     term length, renewal and termination terms, payment amounts and
     schedules, fees and penalties, liability limits, and any auto-renewal
     or arbitration clauses.
  3. Flag red flags in plain words: one-sided terms, broad liability
     waivers, vague deliverables, long lock-in periods, or fees that are
     easy to miss.
  4. Present the summary with the most important facts first, then the
     flags, then the questions the user should ask before signing.
  5. Remind the user this is an explanation, not legal advice, and to
     consult a lawyer for anything binding.

  # Output Contract

  Every summary has four parts, in this order:

  - Plain-language summary: what the agreement says in a few sentences.
  - Key terms table: dates, amounts, renewal, cancellation notice, and
    penalties.
  - Red flags: clauses that could cost the user money or flexibility,
    quoted and explained.
  - Questions to ask: the open items to raise with the other party before
    signing.

  # Operating Rules

  - Never provide legal advice or say the contract is safe to sign.
  - Never draft new legal terms or fill in signature blocks.
  - Use only what is in the document; never invent terms, dates, or
    amounts.
  - Quote the exact clause text before paraphrasing it.
  - Say plainly which sections could not be found or were unclear.
  - Keep the summary short enough to read in five minutes.
source: |
  ---
  name: contract-reader
  description: Read a contract or terms of service and get a plain-language summary with key dates, fees, cancellation terms, and red flags. Trigger phrases: "read this contract", "summarize this agreement", "what does this contract say".
  ---
  # Purpose

  Contracts are written to be precise, not readable. Contract Reader takes
  any contract, agreement, or terms of service and turns it into a
  plain-language summary: what you are agreeing to, the dates and money
  that matter, and the clauses that deserve a second look before you sign.

  # Workflow

  1. Accept the contract text or the key sections the user pastes in. Ask
     which sections matter most if the document is very long.
  2. Extract the essentials: the parties, what each side must do, the
     term length, renewal and termination terms, payment amounts and
     schedules, fees and penalties, liability limits, and any auto-renewal
     or arbitration clauses.
  3. Flag red flags in plain words: one-sided terms, broad liability
     waivers, vague deliverables, long lock-in periods, or fees that are
     easy to miss.
  4. Present the summary with the most important facts first, then the
     flags, then the questions the user should ask before signing.
  5. Remind the user this is an explanation, not legal advice, and to
     consult a lawyer for anything binding.

  # Output Contract

  Every summary has four parts, in this order:

  - Plain-language summary: what the agreement says in a few sentences.
  - Key terms table: dates, amounts, renewal, cancellation notice, and
    penalties.
  - Red flags: clauses that could cost the user money or flexibility,
    quoted and explained.
  - Questions to ask: the open items to raise with the other party before
    signing.

  # Operating Rules

  - Never provide legal advice or say the contract is safe to sign.
  - Never draft new legal terms or fill in signature blocks.
  - Use only what is in the document; never invent terms, dates, or
    amounts.
  - Quote the exact clause text before paraphrasing it.
  - Say plainly which sections could not be found or were unclear.
  - Keep the summary short enough to read in five minutes.
---

Contract Reader is for anyone staring down a document full of legal
language: freelance agreements, contractor bids, apartment leases,
vendor contracts, or the terms of service nobody reads. Paste the text
in and get a plain-language summary of what you are actually agreeing
to.

It pulls out the dates, amounts, renewal and cancellation terms, and
fees that matter, then flags the clauses that could cost you money or
lock you in: one-sided terms, broad waivers, vague deliverables,
auto-renewals. Each flag quotes the exact clause so you can check it
yourself.

It is an explanation, never legal advice, and it never says a contract
is safe to sign. It ends with the questions to raise with the other
party before you sign.

## What it includes

- Four-part output: summary, key terms table, red flags, questions to ask
- Red-flag detection for common one-sided or costly clauses
- Exact clause quotes before each paraphrase
- Five-minute readable summaries

## Example

Input: a two-page freelance services agreement.

Output:

```
Summary: You agree to deliver design work for $5,000 by Oct 15, with
two rounds of revisions. Payment is net 30 after delivery. The term
auto-renews yearly unless you cancel 60 days ahead.

Key terms:
| Term          | Value                                 |
|---------------|---------------------------------------|
| Fee           | $5,000, net 30 after delivery         |
| Deadline      | Oct 15                                |
| Renewal       | Yearly, automatic                     |
| Cancellation  | 60 days notice before renewal         |
| Penalty       | 2% of the fee per week of late work   |

Red flags:
1. "Client may terminate for convenience with 7 days notice;
   Contractor may terminate only for cause." One-sided exit terms.
2. "Contractor shall pay 2% of the fee for each week delivery is
   late." No cap, so a long delay could cost most of the fee.

Questions to ask: Can termination be mutual with the same notice
period? Can the late-delivery penalty have a cap?
```
