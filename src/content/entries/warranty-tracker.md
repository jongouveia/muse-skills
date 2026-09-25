---
title: "Warranty Tracker"
tagline: "Logs purchase dates and warranty windows; pings before they expire."
category: "money"
type: "workflow"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/warranty-tracker.md"
source_verified: true
origin: "directory"
includes: ["instructions", "workflow", "schedule"]
version: "1.0.0"
date_added: 2026-09-10
safety_notes: |
  Reads purchase receipts through the assistant's own connected
  accounts, on the schedule you set. Writes the report to you
  and nothing else. Never files a claim or contacts a merchant.
install_prompt: |
  Set up the "Warranty Tracker" workflow. Its full source is
  below. Default schedule: first of each month at 09:00 local
  time. Ask me to confirm or change this time before you create
  the recurring job. Once I confirm, create the job. Tell me the
  job name and the confirmed schedule when it is set up.

  --- SOURCE ---
  name: warranty-tracker
  description: Track product warranties from purchase receipts: what's covered, when coverage ends, and a ping 30 days before expiry. Trigger phrases: "track my warranties", "is this still under warranty", "warranty expiring soon".

  schedule: monthly, first of the month at 09:00 local time. Confirm the time with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "track my warranties" request.

  steps:
    1. Search the inbox for purchase receipts from the past 3 years (order confirmations, "your receipt", warranty registrations).
    2. For each significant purchase (over $75, or anything the user flags): item, purchase date, retailer, warranty length from the receipt or the manufacturer's standard terms.
    3. Compute expiry dates. Each run: report anything expiring within 30 days as "act now", within 90 days as "coming up".
    4. For expiring items: include the claim link or support page if known.
    5. Save the registry so new purchases get added and old ones age out.

  output:
    - Expiring soon (30 days): item, expiry date, claim link
    - Coming up (90 days): item, expiry date
    - Registry: total items tracked, newest additions
    - Quiet months: "Nothing expiring this month."

  rules:
    - Warranty lengths come from the receipt or published manufacturer terms. If unknown, say "terms unknown": never guess.
    - Read only. Never file a claim or contact a merchant.
    - The $75 threshold is a default. The user can change it.
    - Run only on the confirmed schedule or when asked.
source: |
  name: warranty-tracker
  description: Track product warranties from purchase receipts: what's covered, when coverage ends, and a ping 30 days before expiry. Trigger phrases: "track my warranties", "is this still under warranty", "warranty expiring soon".

  schedule: monthly, first of the month at 09:00 local time. Confirm the time with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "track my warranties" request.

  steps:
    1. Search the inbox for purchase receipts from the past 3 years (order confirmations, "your receipt", warranty registrations).
    2. For each significant purchase (over $75, or anything the user flags): item, purchase date, retailer, warranty length from the receipt or the manufacturer's standard terms.
    3. Compute expiry dates. Each run: report anything expiring within 30 days as "act now", within 90 days as "coming up".
    4. For expiring items: include the claim link or support page if known.
    5. Save the registry so new purchases get added and old ones age out.

  output:
    - Expiring soon (30 days): item, expiry date, claim link
    - Coming up (90 days): item, expiry date
    - Registry: total items tracked, newest additions
    - Quiet months: "Nothing expiring this month."

  rules:
    - Warranty lengths come from the receipt or published manufacturer terms. If unknown, say "terms unknown": never guess.
    - Read only. Never file a claim or contact a merchant.
    - The $75 threshold is a default. The user can change it.
    - Run only on the confirmed schedule or when asked.
---

Warranty Tracker builds a registry from your purchase receipts:
what's covered, when coverage ends: and pings you 30 days before a
warranty expires, with the claim link. That dead dishwasher gets a
free repair instead of a replacement bill.

## What it includes

- Receipt sweep for significant purchases
- Warranty registry with expiry dates
- 30-day "act now" and 90-day "coming up" alerts
- Claim links where known

## Example

Output:

```
Warranties, September

Expiring soon:
- Dishwasher (Bosch): expires Oct 12. Claim: bosch-home.com/service
  Note: the rattling rack is a covered defect. File before the 12th.

Coming up:
- Laptop (Dell): expires Nov 28.

Registry: 14 items tracked.
```
