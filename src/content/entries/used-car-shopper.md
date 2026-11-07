---
title: "Used-Car Shopper"
tagline: "Turns a used-car listing into a plain verdict: fair price, red flags, and what to check."
category: "shopping"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/used-car-shopper.md"
source_verified: false
origin: "directory"
includes:
  - "Price check against similar cars listed nearby"
  - "Red-flag scan: title, accident history, and seller signals"
  - "Test-drive checklist for that model"
  - "Pre-purchase inspection questions for a mechanic"
  - "A plain verdict, with the evidence behind it"
version: "1.0.0"
date_added: "2026-11-07"
safety_notes: "Never tells the user to buy a car. Never calls a price fair without showing the comparable listings behind it. Never invents a vehicle history report, an inspection result, or a price; if a fact cannot be checked, it says so."
install_prompt: |
  To install the Used-Car Shopper skill, save the skill source below as ~/workspace/skills/used-car-shopper/SKILL.md, then tell Muse to use it whenever you find a used-car listing and want a plain verdict on the price, the red flags, and what to check before you buy.

  --- SOURCE ---
  ---
  name: used-car-shopper
  description: Judge a used-car listing before you buy. Use when the user shares a used-car listing, asks "is this a good price", "is this car worth it", or wants a test-drive and inspection checklist for a used car.
  ---

  ## Purpose
  Read a used-car listing the way a careful buyer would, so the decision rests on the price, the history, and the condition, not on shiny photos and a low monthly payment. The skill compares the asking price with similar cars nearby, flags the red flags in plain language, and builds a short checklist for the test drive and the pre-purchase inspection.

  ## Workflow
  1. Collect the listing: year, make, model, trim, mileage, asking price, title status, and the seller's notes, plus the listing link.
  2. Check the price: find similar cars listed nearby with the same year, trim, and mileage range, and note the price spread.
  3. Scan for red flags: salvage or rebuilt title, a price far below the market, no service records, mismatched tires, rust in the photos, or a seller who will not share a vehicle history report.
  4. Look up the model: common faults for that year and model, and the repairs that tend to cost the most.
  5. Build the checklists: a test-drive checklist for this car, and the exact things to ask a mechanic to inspect.
  6. Give the verdict: fair price or not, the red flags, and what would change the answer, with the evidence shown.

  ## Output Contract
  - A price comparison: asking price against similar listings nearby, with the range and the sources.
  - A red-flag list, each flag named plainly with where it appears in the listing.
  - A model note: common faults for that year and model, and the costly repairs to watch for.
  - A test-drive checklist and a pre-purchase inspection checklist for a mechanic.
  - A plain verdict: buy, walk away, or negotiate, with the reasons and what would change it.

  ## Operating Rules
  - Never tell the user to buy a car; the verdict is advice, and the buy is the user's call.
  - Never call a price fair without showing the comparable listings behind it.
  - Never invent a vehicle history report, an inspection result, or a price; if a fact cannot be checked, say so.
  - Treat a price far below the market as a warning, not a bargain, until the reason is clear.
  - Keep the checklists short and specific to this car, not a generic list.
source: |
  ---
  name: used-car-shopper
  description: Judge a used-car listing before you buy. Use when the user shares a used-car listing, asks "is this a good price", "is this car worth it", or wants a test-drive and inspection checklist for a used car.
  ---

  ## Purpose
  Read a used-car listing the way a careful buyer would, so the decision rests on the price, the history, and the condition, not on shiny photos and a low monthly payment. The skill compares the asking price with similar cars nearby, flags the red flags in plain language, and builds a short checklist for the test drive and the pre-purchase inspection.

  ## Workflow
  1. Collect the listing: year, make, model, trim, mileage, asking price, title status, and the seller's notes, plus the listing link.
  2. Check the price: find similar cars listed nearby with the same year, trim, and mileage range, and note the price spread.
  3. Scan for red flags: salvage or rebuilt title, a price far below the market, no service records, mismatched tires, rust in the photos, or a seller who will not share a vehicle history report.
  4. Look up the model: common faults for that year and model, and the repairs that tend to cost the most.
  5. Build the checklists: a test-drive checklist for this car, and the exact things to ask a mechanic to inspect.
  6. Give the verdict: fair price or not, the red flags, and what would change the answer, with the evidence shown.

  ## Output Contract
  - A price comparison: asking price against similar listings nearby, with the range and the sources.
  - A red-flag list, each flag named plainly with where it appears in the listing.
  - A model note: common faults for that year and model, and the costly repairs to watch for.
  - A test-drive checklist and a pre-purchase inspection checklist for a mechanic.
  - A plain verdict: buy, walk away, or negotiate, with the reasons and what would change it.

  ## Operating Rules
  - Never tell the user to buy a car; the verdict is advice, and the buy is the user's call.
  - Never call a price fair without showing the comparable listings behind it.
  - Never invent a vehicle history report, an inspection result, or a price; if a fact cannot be checked, say so.
  - Treat a price far below the market as a warning, not a bargain, until the reason is clear.
  - Keep the checklists short and specific to this car, not a generic list.
---

## What it includes

A used-car listing hides the expensive questions behind shiny photos and a low monthly payment. This skill reads the listing the way a careful buyer would: year, mileage, trim, accident history, title status, and how the asking price compares with similar cars nearby. It flags the red flags plainly, such as a salvage title, a price far below the market, mismatched tires, or a seller who will not share a vehicle history report. It adds a model note on the common faults for that year, and builds a short checklist for the test drive and the pre-purchase inspection, with the exact things to ask a mechanic to look at for that model. It never tells you to buy a car, and it never calls a price fair without showing the comparable listings behind it.

## Example

You find a 2021 Honda Civic listed at 14,500 dollars with 68,000 miles. The skill returns this (the listings below are illustrative):

**Price comparison.** Three similar 2021 Civics nearby:
- 71,000 miles at 15,500 dollars (Cars.com, local dealer)
- 64,000 miles at 16,200 dollars (AutoTrader, private seller)
- 59,000 miles at 17,000 dollars (Facebook Marketplace, private seller)

The range is 15,500 to 17,000 dollars. Your car's asking price is 1,000 dollars below the lowest comparable and 2,500 dollars below the highest, so the price is low enough to be a warning, not a bargain.

**Red flags.**
- Rebuilt title, mentioned only in the fine print of the listing description.
- No service records, stated in the seller's notes.

**Model note.** Owners of 2021 Civics with the 1.5-liter turbo engine have reported oil dilution and air-conditioning condenser leaks. Check the VIN for open recalls, and watch for engine and A/C repairs, which cost the most.

**Test-drive checklist.** Check for uneven tire wear, a pull to one side under braking, A/C that blows cold, and warning lights at startup.

**Inspection checklist for a mechanic.** Ask for a frame and suspension inspection, a check for repaired collision damage, an oil condition check, and a test of the A/C system. Ask the seller for the vehicle history report first.

**Verdict.** Walk away from this listing as written. A rebuilt title with no service records, at a price 1,000 to 2,500 dollars under the market, points to prior damage. The answer could change if the vehicle history report and the repair paperwork explain the rebuilt title, and a mechanic's inspection finds no structural or suspension problems. The decision stays yours.
