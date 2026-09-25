---
title: "Restock Alert"
tagline: "Watches out-of-stock items and pings you the moment they're back."
category: "shopping"
type: "workflow"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/restock-alert.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "schedule"]
version: "1.0.0"
date_added: 2026-09-14
safety_notes: |
  Reads public product pages only, on the schedule you set.
  Writes an alert to you and nothing else. Never buys anything.
install_prompt: |
  Set up the "Restock Alert" workflow. Its full source is below.
  Default schedule: every 6 hours. Ask me to confirm or change
  the cadence before you create the recurring job. Once I
  confirm, create the job. Tell me the job name and the confirmed
  schedule when it is set up.

  --- SOURCE ---
  name: restock-alert
  description: Watch out-of-stock products and alert the moment they're available again, with the price. Trigger phrases: "watch for restock", "tell me when this is back in stock", "alert me when available".

  schedule: every 6 hours. Confirm the cadence with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "watch for restock" request with product links.

  steps:
    1. Ask the user for the product links and the acceptable price (or "any price").
    2. Each run: check availability and current price for every watched item.
    3. Alert rules:
       - Back in stock at or below the acceptable price: send the alert immediately with the link.
       - Back in stock above the acceptable price: report it once as "back but over your price" and keep watching.
       - Still out of stock: stay quiet.
    4. After an alert is sent for an item, drop it from the watch list unless the user says otherwise.

  output:
    - Back in stock: item, price, link, one block per item
    - Back but over price: item, price vs. your max, one line
    - Still out: silence

  rules:
    - Read only. Never buy, never add to cart.
    - One alert per restock. No repeat pings for the same item.
    - The acceptable price is the user's. Ask once per item.
    - Run only on the confirmed cadence or when asked.
source: |
  name: restock-alert
  description: Watch out-of-stock products and alert the moment they're available again, with the price. Trigger phrases: "watch for restock", "tell me when this is back in stock", "alert me when available".

  schedule: every 6 hours. Confirm the cadence with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "watch for restock" request with product links.

  steps:
    1. Ask the user for the product links and the acceptable price (or "any price").
    2. Each run: check availability and current price for every watched item.
    3. Alert rules:
       - Back in stock at or below the acceptable price: send the alert immediately with the link.
       - Back in stock above the acceptable price: report it once as "back but over your price" and keep watching.
       - Still out of stock: stay quiet.
    4. After an alert is sent for an item, drop it from the watch list unless the user says otherwise.

  output:
    - Back in stock: item, price, link, one block per item
    - Back but over price: item, price vs. your max, one line
    - Still out: silence

  rules:
    - Read only. Never buy, never add to cart.
    - One alert per restock. No repeat pings for the same item.
    - The acceptable price is the user's. Ask once per item.
    - Run only on the confirmed cadence or when asked.
---

Restock Alert watches the products that are always out of stock when
you want them and pings you the moment they're back at an acceptable
price. While they're gone, it stays quiet. One alert per restock.
then it drops the item unless you say otherwise.

## What it includes

- Watch list with per-item acceptable prices
- Back-in-stock alerts with links
- Over-price reporting without dropping the watch
- Silence while items are out

## Example

Output:

```
Back in stock:
- Sold-out sneakers, size 12, $140 (your max: $150)
  Link: [product page]

Back but over price:
- Espresso machine, $899 vs your $700. Still watching.
```
