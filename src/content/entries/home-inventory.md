---
title: "Home Inventory"
tagline: "Yearly photo inventory of valuables for insurance, room by room."
category: "home"
type: "workflow"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/home-inventory.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "schedule"]
version: "1.0.0"
date_added: 2026-09-14
safety_notes: |
  Guides your photo inventory and organizes the list you build.
  Stores nothing itself; your photos stay with you. Never
  contacts your insurer.
install_prompt: |
  Set up the "Home Inventory" workflow. Its full source is below.
  Default schedule: once a year, first Saturday of October at
  10:00 local time. Ask me to confirm or change this before you
  create the recurring job. Once I confirm, create the job. Tell
  me the job name and the confirmed schedule when it is set up.

  --- SOURCE ---
  name: home-inventory
  description: Yearly home inventory for insurance, a room-by-room photo checklist of valuables, with values and serials recorded where it matters. Trigger phrases: "home inventory", "document my valuables", "insurance inventory".

  schedule: yearly, first Saturday of October at 10:00 local time. Confirm with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "home inventory" request.

  steps:
    1. Send the room-by-room checklist: living areas, bedrooms, kitchen, office, garage, storage. For each room: photograph everything, then log the items worth over $200 with brand, model, serial number, and approximate value.
    2. Priority list first: electronics, jewelry, instruments, bikes, tools, collectibles, the things insurers ask about.
    3. As the user reports items, organize them into the inventory table. Ask for what's missing (serials are the usual gap).
    4. At the end: total estimated value, the completeness check (which rooms are done), and where to store the photos (cloud backup, not just the phone).
    5. Save the inventory for next year's update run.

  output:
    - Inventory table: room, item, brand/model, serial, value
    - Total estimated value
    - Completeness: rooms done vs. remaining
    - Storage reminder: back the photos up off the phone

  rules:
    - The photos stay with the user. This workflow organizes the list; it stores nothing itself.
    - Values are the user's estimates. Never appraise.
    - Serials matter more than photos for claims. Say that.
    - Never contact the insurer. The user files their own claims.
    - Run only on the confirmed schedule or when asked.
source: |
  name: home-inventory
  description: Yearly home inventory for insurance, a room-by-room photo checklist of valuables, with values and serials recorded where it matters. Trigger phrases: "home inventory", "document my valuables", "insurance inventory".

  schedule: yearly, first Saturday of October at 10:00 local time. Confirm with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "home inventory" request.

  steps:
    1. Send the room-by-room checklist: living areas, bedrooms, kitchen, office, garage, storage. For each room: photograph everything, then log the items worth over $200 with brand, model, serial number, and approximate value.
    2. Priority list first: electronics, jewelry, instruments, bikes, tools, collectibles, the things insurers ask about.
    3. As the user reports items, organize them into the inventory table. Ask for what's missing (serials are the usual gap).
    4. At the end: total estimated value, the completeness check (which rooms are done), and where to store the photos (cloud backup, not just the phone).
    5. Save the inventory for next year's update run.

  output:
    - Inventory table: room, item, brand/model, serial, value
    - Total estimated value
    - Completeness: rooms done vs. remaining
    - Storage reminder: back the photos up off the phone

  rules:
    - The photos stay with the user. This workflow organizes the list; it stores nothing itself.
    - Values are the user's estimates. Never appraise.
    - Serials matter more than photos for claims. Say that.
    - Never contact the insurer. The user files their own claims.
    - Run only on the confirmed schedule or when asked.
---

Home Inventory runs once a year and walks you room by room through
photographing valuables and logging brand, model, serial, and value
for anything over $200. Serials matter more than photos for claims,
so it nags you about those, and reminds you to back the photos up
off your phone.

## What it includes

- Room-by-room photo checklist
- Priority list: electronics, jewelry, instruments, bikes, tools
- Inventory table with serials and values
- Yearly update against last year's list

## Example

Output (abridged):

```
Home inventory, 2026

Office:
- Laptop, Dell XPS 15, serial X1Y2Z3, ~$1,400
- Monitor, LG 27", serial A9B8C7, ~$350

Garage:
- Bike, Trek Domane, serial T4451, ~$1,800

Total estimated value: $8,200
Completeness: 4 of 6 rooms done. Missing serials: TV, amp.
Reminder: back these photos up off your phone.
```
