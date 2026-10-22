---
title: "Moving Cost Estimator"
tagline: "Turns your inventory list, distance, and service level into a realistic moving cost estimate before you call anyone."
category: "money"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/moving-cost-estimator.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "estimate-template", "mover-questions"]
version: "1.0.0"
date_added: 2026-10-22
safety_notes: |
  Estimates are estimates, never quotes; every figure is a range
  with the assumptions shown. It never recommends a specific moving
  company and never books, calls, or hires anyone. It never drops
  bulky or special items from the math without asking, and nothing
  you share leaves your machine.
install_prompt: |
  Install the "Moving Cost Estimator" skill. Its full source is
  below. Create it at ~/workspace/skills/moving-cost-estimator/SKILL.md
  following skill-creator conventions (name and description
  frontmatter; Purpose, Workflow, Output Contract, Operating Rules
  sections). Then confirm it is installed and tell me the trigger
  phrases.

  --- SOURCE ---
  ---
  name: moving-cost-estimator
  description: Turns a rough inventory list, origin and destination, move date, and service level into a realistic moving cost estimate with line items and a quote-comparison checklist. Trigger phrases: "estimate my moving cost", "how much will my move cost", "compare moving options", "is this mover quote fair", "moving cost breakdown".
  ---
  # Purpose

  Do one narrow job: build a realistic moving cost estimate
  before the user talks to any mover. Take a room or item list,
  the origin and destination, the move date or window, the
  service level (DIY truck rental, labor-only help, portable
  containers, full-service movers), and any special items
  (piano, safe, fragile art). Turn that into a per-service-level
  estimate with line items, the levers that move the total, and
  a checklist of questions that make real quotes comparable.
  The point is simple: walk into quoting armed with your own
  number, so a padded bid stands out fast.

  # Workflow

  1. Gather the inputs before estimating: the inventory (rooms
     or an item list), origin and destination, move date or
     window, preferred service level (or "compare all"), and
     special items. Ask for anything missing; never invent a
     distance or a date.
  2. Estimate volume: convert the inventory into cubic feet and
     truck-size equivalents using standard room-volume
     benchmarks. Show this number; it is the single biggest
     driver of cost.
  3. Build the estimate per service level: base cost ranges from
     distance and volume bands, then line items for fuel or
     mileage, valuation coverage, packing materials, storage if
     the date window needs it, and access fees (stairs,
     elevator, long carry). Include tipping as its own line.
  4. Name the levers: which three inputs move the total most,
     and how the user can shrink them (pack themselves, pick a
     mid-month or off-season date, reduce volume before moving).
  5. Present a comparison across service levels plus a
     quote-comparison checklist: the questions that make every
     bid apples to apples, including how the mover charges for
     access, stairs, and packing materials.

  # Output Contract

  - A cost estimate per service level as a low/high range, with
    the assumptions shown
  - A line-item breakdown: transport, labor, fuel, insurance or
    valuation, materials, storage, access fees, tipping
  - The three biggest levers and how to shrink each
  - A quote-comparison checklist for collecting real bids
  - A statement of what information would sharpen the estimate

  # Operating Rules

  - Never present a range as a quote; label every figure an
    estimate and show the assumptions behind it.
  - Never drop a bulky or special item from the estimate
    without asking about it first.
  - Ask for origin, destination, and date before estimating;
    never invent distances or guess the move date.
  - Keep estimates in ranges. Moving costs vary too much for
    single numbers.
  - Never recommend a specific moving company or book anyone.
source: |
  ---
  name: moving-cost-estimator
  description: Turns a rough inventory list, origin and destination, move date, and service level into a realistic moving cost estimate with line items and a quote-comparison checklist. Trigger phrases: "estimate my moving cost", "how much will my move cost", "compare moving options", "is this mover quote fair", "moving cost breakdown".
  ---
  # Purpose

  Do one narrow job: build a realistic moving cost estimate
  before the user talks to any mover. Take a room or item list,
  the origin and destination, the move date or window, the
  service level (DIY truck rental, labor-only help, portable
  containers, full-service movers), and any special items
  (piano, safe, fragile art). Turn that into a per-service-level
  estimate with line items, the levers that move the total, and
  a checklist of questions that make real quotes comparable.
  The point is simple: walk into quoting armed with your own
  number, so a padded bid stands out fast.

  # Workflow

  1. Gather the inputs before estimating: the inventory (rooms
     or an item list), origin and destination, move date or
     window, preferred service level (or "compare all"), and
     special items. Ask for anything missing; never invent a
     distance or a date.
  2. Estimate volume: convert the inventory into cubic feet and
     truck-size equivalents using standard room-volume
     benchmarks. Show this number; it is the single biggest
     driver of cost.
  3. Build the estimate per service level: base cost ranges from
     distance and volume bands, then line items for fuel or
     mileage, valuation coverage, packing materials, storage if
     the date window needs it, and access fees (stairs,
     elevator, long carry). Include tipping as its own line.
  4. Name the levers: which three inputs move the total most,
     and how the user can shrink them (pack themselves, pick a
     mid-month or off-season date, reduce volume before moving).
  5. Present a comparison across service levels plus a
     quote-comparison checklist: the questions that make every
     bid apples to apples, including how the mover charges for
     access, stairs, and packing materials.

  # Output Contract

  - A cost estimate per service level as a low/high range, with
    the assumptions shown
  - A line-item breakdown: transport, labor, fuel, insurance or
    valuation, materials, storage, access fees, tipping
  - The three biggest levers and how to shrink each
  - A quote-comparison checklist for collecting real bids
  - A statement of what information would sharpen the estimate

  # Operating Rules

  - Never present a range as a quote; label every figure an
    estimate and show the assumptions behind it.
  - Never drop a bulky or special item from the estimate
    without asking about it first.
  - Ask for origin, destination, and date before estimating;
    never invent distances or guess the move date.
  - Keep estimates in ranges. Moving costs vary too much for
    single numbers.
  - Never recommend a specific moving company or book anyone.
---

Getting quotes from movers is the most expensive way to learn
what your move should cost. Moving Cost Estimator flips the
order: describe your home, your route, and your move date, and
it builds a realistic cost estimate first, broken into the line
items movers actually charge for. You get an estimate for each
service level, DIY truck rental, labor-only help, portable
containers, and full-service movers, so you can compare the
options before anyone knocks on your door.

The estimate names the levers that matter most: volume, which is
the single biggest driver, then distance, date, and access. It
flags the extras that quietly inflate quotes, like valuation
coverage, packing materials, storage between leases, and stairs
or long carries, and shows which ones you can shrink. Pack
yourself, pick a mid-month or off-season date, or shed volume
before the truck arrives, and the number moves in your favor.

When you are ready to collect real quotes, you get a checklist
of questions that make every bid comparable, so a padded quote
stands out fast. Every figure is a range with the assumptions
shown, and the skill never presents its numbers as quotes or
recommends a specific company.

## What it includes

- Volume estimation from a room list or item list, in cubic feet
- Per-service-level estimates: DIY rental, labor-only, containers, full-service
- A line-item breakdown: transport, labor, fuel, insurance, materials, access fees, tipping
- The biggest cost levers and how to shrink each one
- A quote-comparison checklist for when you call movers

## Example

Input: "2-bedroom apartment, Andover MA to Boston MA, first weekend of December, full-service."

Output:

```
Full-service movers: $1,000 - $1,600 (estimate, not a quote)
Assumptions: ~850 cu ft, 30 miles, elevator building, self-packed,
same-day delivery (no storage), no special items listed.

Line items
- Transport (truck): $250 - $350
- Labor (crew): $500 - $700
- Fuel and mileage: $80 - $120
- Valuation coverage: $0 - $150 (basic is included; $150 is the upgrade)
- Packing materials (self-packed): $60 - $100
- Storage: $0 (same-day delivery)
- Access fees (stairs, long carry): $0 (elevator building)
- Tipping (crew): $110 - $180
- Total: $1,000 - $1,600

Biggest levers (packing is already self-packed in these numbers)
1. Reduce volume: cutting 850 to 700 cu ft (about 18%) saves
   about $130 - $185 of transport and labor.
2. Mid-month weekday date: about 10% off transport and labor,
   saves $75 - $105.
3. Keep basic valuation: skipping the $150 upgrade saves up to
   $150, with lower coverage.

Other options
- DIY truck rental: $250 - $450 (truck, fuel, insurance)
- Portable container: $800 - $1,200 (one container, one month)
- Labor-only help: $400 - $650 (loading help, you drive)

Quote-comparison checklist
- Is the quote binding, non-binding, or binding not-to-exceed?
- Is the price flat or hourly? What are the minimum hours and the travel-time charge?
- What valuation coverage is included, and what does the upgrade cost?
- Which packing materials are charged, and at what price each?
- What do you charge for stairs, elevator use, long carries, or a shuttle truck?
- Are fuel, mileage, or date surcharges added? Is tipping expected?

What would sharpen this estimate
- A room-by-room item list to confirm the ~850 cu ft
- Floor, elevator, and parking details at both addresses
- The exact move date
- Any piano, safe, or fragile art (none are included above)
