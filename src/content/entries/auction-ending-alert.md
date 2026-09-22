---
title: "Auction Ending Alert"
tagline: "Watches your saved auctions; pings before close with your max bid."
category: "deal-hunting"
type: "workflow"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/auction-ending-alert.md"
source_verified: true
origin: "directory"
includes: ["instructions", "workflow", "schedule"]
version: "1.0.0"
date_added: 2026-09-10
safety_notes: |
  Reads public auction listings only, on the schedule you set.
  Writes an alert to you and nothing else. Never places a bid,
  never contacts a seller.
install_prompt: |
  Set up the "Auction Ending Alert" workflow. Its full source is
  below. Default schedule: every 30 minutes. Ask me to confirm or
  change the cadence before you create the recurring job. Once I
  confirm, create the job. Tell me the job name and the confirmed
  schedule when it is set up.

  --- SOURCE ---
  name: auction-ending-alert
  description: Watch a list of auctions and alert before each one closes, with the current price, your max bid, and whether the deal still clears your bar. Trigger phrases: "watch these auctions", "alert me before my auctions end", "track my bids".

  schedule: every 30 minutes. Confirm the cadence with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "watch these auctions" request with links.

  steps:
    1. Ask the user for the auction links and a max bid for each. Save the watch list.
    2. Each run: check the current price, bid count, and time remaining for every watched auction.
    3. Alert rules:
       - Ending within 2 hours: send the pre-close alert.
       - Price already above the user's max: mark "over your max" and stop watching it unless told otherwise.
       - Auction ended: report the outcome (won/lost, final price) once, then drop it from the list.
    4. The pre-close alert uses the Output shape.

  output:
    - Ending soon: item, time left, current price, your max bid
    - Deal check: current price vs. your max, one line
    - Over your max: listed separately, dropped from watch
    - Ended: outcome, one line each

  rules:
    - Read only. Never place a bid, never snipe, never contact the seller.
    - Max bids are the user's. Ask once per item, reuse until it ends.
    - One alert per auction per stage. No repeat pings.
    - Run only on the confirmed cadence or when asked.
source: |
  name: auction-ending-alert
  description: Watch a list of auctions and alert before each one closes, with the current price, your max bid, and whether the deal still clears your bar. Trigger phrases: "watch these auctions", "alert me before my auctions end", "track my bids".

  schedule: every 30 minutes. Confirm the cadence with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "watch these auctions" request with links.

  steps:
    1. Ask the user for the auction links and a max bid for each. Save the watch list.
    2. Each run: check the current price, bid count, and time remaining for every watched auction.
    3. Alert rules:
       - Ending within 2 hours: send the pre-close alert.
       - Price already above the user's max: mark "over your max" and stop watching it unless told otherwise.
       - Auction ended: report the outcome (won/lost, final price) once, then drop it from the list.
    4. The pre-close alert uses the Output shape.

  output:
    - Ending soon: item, time left, current price, your max bid
    - Deal check: current price vs. your max, one line
    - Over your max: listed separately, dropped from watch
    - Ended: outcome, one line each

  rules:
    - Read only. Never place a bid, never snipe, never contact the seller.
    - Max bids are the user's. Ask once per item, reuse until it ends.
    - One alert per auction per stage. No repeat pings.
    - Run only on the confirmed cadence or when asked.
---

Auction Ending Alert watches the auctions you care about and pings
you before each one closes , current price, time left, and your max
bid side by side, so you decide in one glance whether the deal still
clears your bar. It never bids; that's your call.

## What it includes

- Watch list with per-item max bids
- Pre-close alerts (2-hour window)
- Over-max detection and automatic drop
- One-time ended-auction outcome reports

## Example

Output:

```
Ending soon:
- Vintage film camera lot , 47 min left
  Current: $120 (9 bids) | Your max: $200
  Deal check: clears your bar by $80.

Over your max:
- Box of 45s , $65 vs your $40. Dropped from watch.
```
