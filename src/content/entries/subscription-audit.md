---
title: "Subscription Audit"
tagline: "Finds recurring charges in your email receipts and bank exports, then names what to cut."
category: "money"
type: "workflow"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/subscription-audit.md"
source_verified: false
origin: "directory"
includes: ["schedule", "workflow", "merchant grouping", "cut list"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Reads only the email receipts in the user's connected account and the bank export file the
  user supplies. Never logs into a bank or any financial site, and never asks for banking
  credentials. Never cancels a subscription; it only reports and recommends.
source: |
  name: subscription-audit
  description: Monthly recurring-charge audit from email receipts and a user-supplied bank
    export. Groups by merchant, estimates annual cost, and names what to cut with a reason.
    Read-only, never logs into a bank. Trigger phrases: audit my subscriptions, find recurring
    charges, what should I cancel.

  schedule: monthly, the 1st at 08:00 local time (cron: 0 8 1 * *). Confirm the timing with
  the user before the first scheduled run.

  trigger: the scheduled date, or a manual "audit my subscriptions now" request, in either
  case gated on the user supplying a bank export for the period.

  inputs:
    - email receipts: read from the user's own connected email account, for the period since
      the last run.
    - bank export: a CSV or similar file the user exports from their bank or card portal and
      provides directly. The assistant never logs into a bank or card site itself, and never
      asks for banking credentials.

  steps:
    1. At run time, ask the user for the bank export file covering the period since the last
       run, if it has not already been provided. If the user cannot supply it, end the run
       and report that the audit needs the export to proceed.
    2. Read email receipts from the connected account for the same period.
    3. Extract candidate recurring charges from both sources: same or near-identical amount,
       same merchant name, repeating on a roughly monthly, quarterly, or annual interval.
    4. Group extracted charges by merchant. Merge obvious name variants of the same merchant
       (e.g. "NETFLIX.COM" and "Netflix").
    5. For each merchant group, compute the billing interval, the per-charge amount, and the
       estimated annual cost (per-charge amount times charges per year).
    6. Rank merchant groups by estimated annual cost, highest first.
    7. For each group, decide a recommendation: keep, review, or cut. Attach one concrete
       reason to every "cut" or "review" call (e.g. "no matching login or usage found in
       receipts for 4 months", "duplicate of another active plan", "price rose 40% since
       last charge with no note of a plan change").
    8. Produce the report: total estimated annual recurring spend, then the ranked merchant
       table, then the cut list with reasons.

  output: a report with three parts. First, total estimated annual recurring spend across all
  groups. Second, a table of merchant, interval, amount, estimated annual cost, and
  recommendation. Third, a short cut list naming each "cut" recommendation with its one-line
  reason.

  stop_conditions:
    - Stop and ask if the bank export is missing, unreadable, or covers the wrong period.
      Never guess at bank data from email receipts alone.
    - Never treat a single one-off charge as recurring; a merchant needs at least two charges
      at a consistent interval before it is grouped as a subscription.
    - Never recommend "cut" without a specific reason tied to the data.

  operating_rules:
    - Read-only. Never logs into a bank, card portal, or any financial site.
    - Never asks the user for a bank password, card number, or any account credential.
    - Never cancels, pauses, or modifies any subscription. Recommendations only.
    - Never sends the bank export or its contents to any third party or outside service.
    - A run with no bank export provided produces no report; it asks for the file instead.
install_prompt: |
  Set up the "Subscription Audit" workflow. Its full source is below. Default schedule:
  monthly, the 1st at 08:00 local time. Ask me to confirm or change this timing before you
  create the recurring job. Tell me at setup that each run needs a bank export file from me
  covering the period since the last run, since this workflow never logs into a bank itself.
  Tell me the job name and the confirmed schedule when it is set up.

  --- SOURCE ---
  name: subscription-audit
  description: Monthly recurring-charge audit from email receipts and a user-supplied bank
    export. Groups by merchant, estimates annual cost, and names what to cut with a reason.
    Read-only, never logs into a bank. Trigger phrases: audit my subscriptions, find recurring
    charges, what should I cancel.

  schedule: monthly, the 1st at 08:00 local time (cron: 0 8 1 * *). Confirm the timing with
  the user before the first scheduled run.

  trigger: the scheduled date, or a manual "audit my subscriptions now" request, in either
  case gated on the user supplying a bank export for the period.

  inputs:
    - email receipts: read from the user's own connected email account, for the period since
      the last run.
    - bank export: a CSV or similar file the user exports from their bank or card portal and
      provides directly. The assistant never logs into a bank or card site itself, and never
      asks for banking credentials.

  steps:
    1. At run time, ask the user for the bank export file covering the period since the last
       run, if it has not already been provided. If the user cannot supply it, end the run
       and report that the audit needs the export to proceed.
    2. Read email receipts from the connected account for the same period.
    3. Extract candidate recurring charges from both sources: same or near-identical amount,
       same merchant name, repeating on a roughly monthly, quarterly, or annual interval.
    4. Group extracted charges by merchant. Merge obvious name variants of the same merchant
       (e.g. "NETFLIX.COM" and "Netflix").
    5. For each merchant group, compute the billing interval, the per-charge amount, and the
       estimated annual cost (per-charge amount times charges per year).
    6. Rank merchant groups by estimated annual cost, highest first.
    7. For each group, decide a recommendation: keep, review, or cut. Attach one concrete
       reason to every "cut" or "review" call (e.g. "no matching login or usage found in
       receipts for 4 months", "duplicate of another active plan", "price rose 40% since
       last charge with no note of a plan change").
    8. Produce the report: total estimated annual recurring spend, then the ranked merchant
       table, then the cut list with reasons.

  output: a report with three parts. First, total estimated annual recurring spend across all
  groups. Second, a table of merchant, interval, amount, estimated annual cost, and
  recommendation. Third, a short cut list naming each "cut" recommendation with its one-line
  reason.

  stop_conditions:
    - Stop and ask if the bank export is missing, unreadable, or covers the wrong period.
      Never guess at bank data from email receipts alone.
    - Never treat a single one-off charge as recurring; a merchant needs at least two charges
      at a consistent interval before it is grouped as a subscription.
    - Never recommend "cut" without a specific reason tied to the data.

  operating_rules:
    - Read-only. Never logs into a bank, card portal, or any financial site.
    - Never asks the user for a bank password, card number, or any account credential.
    - Never cancels, pauses, or modifies any subscription. Recommendations only.
    - Never sends the bank export or its contents to any third party or outside service.
    - A run with no bank export provided produces no report; it asks for the file instead.
---

Subscription Audit looks at your email receipts and a bank export file you provide, once a
month, and builds a picture of what you are actually paying for on repeat. It groups charges
by merchant, works out how often each one bills and what that costs you over a year, then
ranks the list from most to least expensive.

Every merchant on the list gets a call: keep, review, or cut. A cut or review call always
comes with a specific reason, such as no matching usage in your receipts, a duplicate plan,
or a price increase with no explanation. Nothing gets cancelled. You get the list and the
reasoning, and you decide.

This workflow never logs into your bank. It reads your connected email inbox for receipts,
and it needs you to export and hand over the bank or card transaction file each run. The
default schedule is monthly, the 1st at 08:00 local, confirmed with you before the recurring
job is created.

## What it includes

- A monthly cron job, default the 1st at 08:00 local
- A merchant-grouping pass over email receipts plus your bank export
- An annualized cost estimate per merchant
- A ranked cut list, each entry with one concrete reason

## Example

Input: email receipts plus a bank export covering the last 30 days, containing charges from
Netflix, a gym, and a note-taking app used twice all year.

Output: "Estimated annual recurring spend: $612. Netflix: monthly, $15.49, $186/year, keep.
Gym: monthly, $60, $720/year... review, no check-in activity found in receipts for 3 months.
NoteApp: annual, $84/year, cut, only 2 sessions logged since last renewal."
