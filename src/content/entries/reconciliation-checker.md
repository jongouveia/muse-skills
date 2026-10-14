---
title: "Reconciliation Checker"
tagline: "Compares two money sources line by line and flags every mismatch."
category: "money"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/reconciliation-checker.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "report format"]
version: "1.0.0"
date_added: 2026-10-11
safety_notes: |
  Reads only the two files or exports you provide, and writes a report
  to you and nothing else. Never edits your bank records, accounting
  software, or the originals. Never moves money, pays anything, or
  sends anything to a bank, a client, or a third party. It flags
  differences; you decide what they mean.
install_prompt: |
  Install the "Reconciliation Checker" skill. Its full source is below.
  Create it at ~/workspace/skills/reconciliation-checker/SKILL.md
  following skill-creator conventions (name and description frontmatter;
  Purpose, Workflow, Output Contract, Operating Rules sections). Then
  confirm it is installed and tell me the trigger phrases.

  --- SOURCE ---
  ---
  name: reconciliation-checker
  description: Compares two money sources (invoices vs spreadsheet, payouts vs bank export) and flags every mismatch. Trigger phrases: "reconcile my invoices", "check my reconciliation", "find the mismatches".
  ---
  # Purpose

  Find every line that does not agree between two records of the same
  money. Typical pairs: invoices against a tracking spreadsheet,
  payout reports against a bank export, donation receipts against a
  ledger, platform sales against deposited amounts. Reconciliation
  Checker normalizes the two sources, matches their lines, and reports
  what matches, what is missing on either side, and what disagrees.

  # Workflow

  1. Ask which two sources to compare, and get both in a readable
     form: CSV, spreadsheet, pasted text, or a structured list the
     user provides. Do not proceed on only one side.
  2. Ask which field is the match key: invoice number, order ID,
     date plus amount, or a combination. Confirm the date format and
     the currency before matching.
  3. Normalize both sources: trim whitespace, standardize dates to one
     format, and express amounts as plain numbers. Note which side
     needed the most cleanup; that is where errors hide.
  4. Match lines on the agreed key. Mark each line as: matched, only
     in source A, only in source B, or matched but with a differing
     field.
  5. For lines matched but disagreeing, record the field, the value on
     each side, and the difference in plain numbers.
  6. Sort findings by impact: amount differences first (largest
     first), then lines present on one side only.
  7. Write the report in the Output Contract shape and send it.

  # Output Contract

  - Summary: counts of matched lines, lines only in A, lines only in
    B, and lines with amount differences, plus the total dollar
    value of all differences.
  - Mismatch table: one row per issue, in impact order. Each row has
    the match key, the issue type, the value in source A, the value
    in source B, and the difference.
  - Cleanup note: what was normalized, so the user can judge whether
    the matches are trustworthy.
  - Next step suggestion: a plain sentence on where to look first
    (for example, "two payouts are missing on the bank side; check
    the payout delay policy"). No diagnosis is presented as fact.

  # Operating Rules

  - Never edit, overwrite, or append to either source file. Work on
    copies in memory and report the findings.
  - Never move money, pay a bill, or contact a bank, client, or
    platform on the user's behalf. Flag only.
  - Never treat a guessed match as confirmed. If the match key is
    ambiguous, say so and list the candidates separately.
  - Never fabricate a line to make the totals balance. Unmatched
    lines stay unmatched in the report.
  - Never share the report or the source data with anyone but the
    user.
source: |
  ---
  name: reconciliation-checker
  description: Compares two money sources (invoices vs spreadsheet, payouts vs bank export) and flags every mismatch. Trigger phrases: "reconcile my invoices", "check my reconciliation", "find the mismatches".
  ---
  # Purpose

  Find every line that does not agree between two records of the same
  money. Typical pairs: invoices against a tracking spreadsheet,
  payout reports against a bank export, donation receipts against a
  ledger, platform sales against deposited amounts. Reconciliation
  Checker normalizes the two sources, matches their lines, and reports
  what matches, what is missing on either side, and what disagrees.

  # Workflow

  1. Ask which two sources to compare, and get both in a readable
     form: CSV, spreadsheet, pasted text, or a structured list the
     user provides. Do not proceed on only one side.
  2. Ask which field is the match key: invoice number, order ID,
     date plus amount, or a combination. Confirm the date format and
     the currency before matching.
  3. Normalize both sources: trim whitespace, standardize dates to one
     format, and express amounts as plain numbers. Note which side
     needed the most cleanup; that is where errors hide.
  4. Match lines on the agreed key. Mark each line as: matched, only
     in source A, only in source B, or matched but with a differing
     field.
  5. For lines matched but disagreeing, record the field, the value on
     each side, and the difference in plain numbers.
  6. Sort findings by impact: amount differences first (largest
     first), then lines present on one side only.
  7. Write the report in the Output Contract shape and send it.

  # Output Contract

  - Summary: counts of matched lines, lines only in A, lines only in
    B, and lines with amount differences, plus the total dollar
    value of all differences.
  - Mismatch table: one row per issue, in impact order. Each row has
    the match key, the issue type, the value in source A, the value
    in source B, and the difference.
  - Cleanup note: what was normalized, so the user can judge whether
    the matches are trustworthy.
  - Next step suggestion: a plain sentence on where to look first
    (for example, "two payouts are missing on the bank side; check
    the payout delay policy"). No diagnosis is presented as fact.

  # Operating Rules

  - Never edit, overwrite, or append to either source file. Work on
    copies in memory and report the findings.
  - Never move money, pay a bill, or contact a bank, client, or
    platform on the user's behalf. Flag only.
  - Never treat a guessed match as confirmed. If the match key is
    ambiguous, say so and list the candidates separately.
  - Never fabricate a line to make the totals balance. Unmatched
    lines stay unmatched in the report.
  - Never share the report or the source data with anyone but the
    user.
---

Reconciliation Checker takes two records of the same money, for
example your issued invoices and the spreadsheet where you track
payments, and finds every line that does not agree. It normalizes
both sides first (dates, amounts, stray whitespace), then matches
lines on a key you agree on, such as invoice number or order ID.

Each line ends up in one of four buckets: matched, only in the first
source, only in the second, or matched but with a differing field.
The report sorts every issue by impact, largest dollar difference
first, and ends with a total of how much money is unaccounted for,
plus a note on what cleanup was needed so you can judge how
trustworthy the matches are. It never touches your original files;
it works from copies and reports back to you.

## What it includes

- Match-key confirmation: invoice number, order ID, or date plus amount
- Normalization of dates, amounts, and whitespace on both sides
- Four-bucket line matching: matched, only in A, only in B, differing
- Impact-ordered mismatch table with dollar differences
- Cleanup note and a plain-language next-step suggestion

## Example

Input: a CSV of 40 issued invoices and a spreadsheet of 38 recorded
payments, matched on invoice number.

Output:

```
Summary: 37 matched, 2 only in invoices, 0 only in payments,
1 amount difference ($85.00 underpaid). Total differences: $385.00.

Mismatch table:

| Match key       | Issue type     | Invoices (A) | Payments (B)     | Difference |
|-----------------|----------------|--------------|------------------|------------|
| INV-2026-0298   | Amount differs | $450.00      | $365.00          | $85.00     |
| INV-2026-0311   | Only in A      | $200.00      | no payment found | $200.00    |
| INV-2026-0304   | Only in A      | $100.00      | no payment found | $100.00    |

Cleanup note: dates were standardized to one format, amounts were
converted to plain numbers, and stray whitespace was trimmed on both
sides. The payments spreadsheet needed the most cleanup.

Next step: INV-2026-0311 and INV-2026-0304 have no payment at all;
check whether they were ever sent or simply never paid.
