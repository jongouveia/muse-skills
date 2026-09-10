---
title: "Garage Sale Route Planner"
tagline: "Friday-night sweep of yard and estate sales, mapped into a Saturday route."
category: "deal-hunting"
type: "workflow"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/garage-sale-route-planner.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "schedule"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Reads public sale listings only, on the schedule you set. Writes
  the route to you and nothing else. Never contacts a seller. Never
  needs a login; it uses Muse's own browsing.
install_prompt: |
  Set up the "Garage Sale Route Planner" workflow. Its full source is
  below. Default schedule: Friday at 19:00 local time. Ask me to
  confirm or change this time before you create the recurring job.
  Once I confirm, create the job and ask me for my area, radius, and
  interest keywords. Tell me the job name and the confirmed schedule
  when it is set up.

  --- SOURCE ---
  name: garage-sale-route-planner
  description: Friday-evening sweep of yard sales, garage sales, and estate sales near the user, scored against an interest list and mapped into a Saturday morning route. Trigger phrases: "plan my Saturday route", "find weekend sales", "plan my garage sale route".

  schedule: weekly, Friday at 19:00 local time (cron: 0 19 * * 5). Confirm the time with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "plan my Saturday route" request.

  route_config: area, radius in miles (default 20), and interest keywords (for example: vinyl records, film cameras, tools, mid-century furniture). The user sets these once; the workflow reuses them until changed.

  steps:
    1. Sweep local listings for Saturday sales: Craigslist garage/yard sale section, Facebook Marketplace local sale posts, and estate-sale aggregators covering the user's area.
    2. Keep sales within the radius happening Saturday morning. Drop sales with no address or no start time.
    3. Score each sale on interest-keyword hits in its listing text. Sales mentioning a keyword rank above general sales.
    4. Order the kept sales into a route: earliest start time first, then nearest to the previous stop. Estimate total driving miles.
    5. Write the route in the Output shape and send it Friday night. If nothing scores above a general sale, say so in one line instead of sending a thin route.

  output:
    - One numbered stop per sale: start time, sale type, address, and the keyword hit that earned its place
    - Total driving distance for the route
    - One line on anything worth skipping

  rules:
    - Report only. Never contact a seller or RSVP to anything.
    - Never use asking prices or sale hype as a signal; keywords and proximity only.
    - Run only on the confirmed schedule or when asked.
source: |
  name: garage-sale-route-planner
  description: Friday-evening sweep of yard sales, garage sales, and estate sales near the user, scored against an interest list and mapped into a Saturday morning route. Trigger phrases: "plan my Saturday route", "find weekend sales", "plan my garage sale route".

  schedule: weekly, Friday at 19:00 local time (cron: 0 19 * * 5). Confirm the time with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "plan my Saturday route" request.

  route_config: area, radius in miles (default 20), and interest keywords (for example: vinyl records, film cameras, tools, mid-century furniture). The user sets these once; the workflow reuses them until changed.

  steps:
    1. Sweep local listings for Saturday sales: Craigslist garage/yard sale section, Facebook Marketplace local sale posts, and estate-sale aggregators covering the user's area.
    2. Keep sales within the radius happening Saturday morning. Drop sales with no address or no start time.
    3. Score each sale on interest-keyword hits in its listing text. Sales mentioning a keyword rank above general sales.
    4. Order the kept sales into a route: earliest start time first, then nearest to the previous stop. Estimate total driving miles.
    5. Write the route in the Output shape and send it Friday night. If nothing scores above a general sale, say so in one line instead of sending a thin route.

  output:
    - One numbered stop per sale: start time, sale type, address, and the keyword hit that earned its place
    - Total driving distance for the route
    - One line on anything worth skipping

  rules:
    - Report only. Never contact a seller or RSVP to anything.
    - Never use asking prices or sale hype as a signal; keywords and proximity only.
    - Run only on the confirmed schedule or when asked.
---

Every Friday night, Garage Sale Route Planner sweeps Craigslist,
Facebook Marketplace, and estate-sale sites for weekend sales near
you, scores them against your interest list, and maps a Saturday
morning route: earliest openings first, nearest next.

## What it includes

- Friday-evening listing sweep (Craigslist, Marketplace, estate-sale sites)
- Radius and keyword scoring from your interest list
- Route ordered by start time, then geography
- Quiet Fridays: if nothing scores, it says so in one line

## Example

Input: interests "vinyl records, film cameras, tools", radius 20 miles.

Output:

```
Saturday route: 4 stops
1. 8:00 AM: Estate sale, 14 Oak St, Andover (mentions "records")
2. 8:30 AM: Yard sale, 3 Birch Rd, North Andover ("camera equipment")
3. 9:00 AM: Moving sale, 22 Main St, Andover ("tools")
4. 10:00 AM: Yard sale, 7 Elm Ct, Andover (general, swing by if time)
Total driving: ~11 miles
```
