---
title: "Open Box Hunter"
tagline: "Hunts open-box, refurbished, and clearance deals on the exact product you name, and ranks them by real savings over new."
category: "deal-hunting"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/open-box-hunter.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "price-comparison", "condition-checklist"]
version: "1.0.0"
date_added: 2026-10-19
safety_notes: |
  Researches prices only. It never buys anything or places an order;
  you click and pay yourself. It never hides missing accessories,
  shorter return windows, or warranty gaps; every verdict shows them.
  It never shares your personal data or location in any search, and
  it never recommends an offer it could not verify with a live
  listing. It never pushes you toward a condition grade you said
  was unacceptable.
install_prompt: |
  Install the "Open Box Hunter" skill. Its full source is
  below. Create it at ~/workspace/skills/open-box-hunter/SKILL.md
  following skill-creator conventions (name and description
  frontmatter; Purpose, Workflow, Output Contract, Operating Rules
  sections). Then confirm it is installed and tell me the trigger
  phrases.

  --- SOURCE ---
  ---
  name: open-box-hunter
  description: Finds open-box, refurbished, and clearance deals on a product you name: compares retailer prices, checks condition grades, and ranks offers by real savings. Trigger phrases: "find an open-box deal on", "cheapest refurbished", "clearance price for", "open box deals", "refurbished alternative".
  ---
  # Purpose

  Do one narrow job: when you already know the product you want but
  would rather not pay full retail, find the best discounted way to
  buy it. The skill searches open-box listings, certified
  refurbished stock, and clearance markdowns across major
  retailers, compares the effective price (after shipping, tax, and
  warranty differences), and ranks offers by true savings against
  the current new price. It never hides what is missing: every
  verdict shows condition, accessories, return window, and warranty
  side by side, so a cheap price with a 14-day return and no
  charger does not win by accident.

  # Workflow

  1. Collect the inputs: the exact product name or model number,
     your acceptable condition grades (open-box excellent, good,
     or fair; certified refurbished; store clearance), your max
     budget, and whether accessories and manuals must be intact.
  2. Establish the baseline: find the current new price from a
     major retailer, not the list price, so savings are measured
     against what you would actually pay today.
  3. Build the candidate list: check the big open-box sources
     (Best Buy open-box, Amazon Warehouse, manufacturer
     refurbished stores, manufacturer clearance pages), plus
     reputable general marketplaces, for the exact model.
  4. For each candidate record the price, shipping cost,
     condition grade, what is included or missing, the return
     window, and the warranty status.
  5. Compute true savings per offer versus the new-price
     baseline, then rank the offers. Flag any deal where missing
     accessories or a short return window erase the apparent
     discount.
  6. Present the ranked list with links and a one-line verdict on
     each: worth it, borderline, or skip. Ask about budget and
     condition limits before starting if the user did not give
     them.

  # Output Contract

  - The current new price used as the baseline, with its source
  - A ranked list of offers: price, shipping, condition grade,
    included and missing items, return window, warranty
  - True savings per offer versus new, in dollars and percent
  - A one-line verdict on each offer: worth it, borderline, or
    skip, with the reason
  - A note on any candidate that could not be verified with a
    live listing

  # Operating Rules

  - Always compare against the live new price, not the list
    price, so savings are real.
  - Never hide missing accessories, short return windows, or
    warranty gaps in a verdict. Show them next to the price.
  - Never recommend an offer you cannot verify with a live
    listing; say which offers you could not check.
  - Never push the buyer below the minimum condition grade they
    set.
  - Never share the buyer's personal or location data in any
    search you run.
source: |
  ---
  name: open-box-hunter
  description: Finds open-box, refurbished, and clearance deals on a product you name: compares retailer prices, checks condition grades, and ranks offers by real savings. Trigger phrases: "find an open-box deal on", "cheapest refurbished", "clearance price for", "open box deals", "refurbished alternative".
  ---
  # Purpose

  Do one narrow job: when you already know the product you want but
  would rather not pay full retail, find the best discounted way to
  buy it. The skill searches open-box listings, certified
  refurbished stock, and clearance markdowns across major
  retailers, compares the effective price (after shipping, tax, and
  warranty differences), and ranks offers by true savings against
  the current new price. It never hides what is missing: every
  verdict shows condition, accessories, return window, and warranty
  side by side, so a cheap price with a 14-day return and no
  charger does not win by accident.

  # Workflow

  1. Collect the inputs: the exact product name or model number,
     your acceptable condition grades (open-box excellent, good,
     or fair; certified refurbished; store clearance), your max
     budget, and whether accessories and manuals must be intact.
  2. Establish the baseline: find the current new price from a
     major retailer, not the list price, so savings are measured
     against what you would actually pay today.
  3. Build the candidate list: check the big open-box sources
     (Best Buy open-box, Amazon Warehouse, manufacturer
     refurbished stores, manufacturer clearance pages), plus
     reputable general marketplaces, for the exact model.
  4. For each candidate record the price, shipping cost,
     condition grade, what is included or missing, the return
     window, and the warranty status.
  5. Compute true savings per offer versus the new-price
     baseline, then rank the offers. Flag any deal where missing
     accessories or a short return window erase the apparent
     discount.
  6. Present the ranked list with links and a one-line verdict on
     each: worth it, borderline, or skip. Ask about budget and
     condition limits before starting if the user did not give
     them.

  # Output Contract

  - The current new price used as the baseline, with its source
  - A ranked list of offers: price, shipping, condition grade,
    included and missing items, return window, warranty
  - True savings per offer versus new, in dollars and percent
  - A one-line verdict on each offer: worth it, borderline, or
    skip, with the reason
  - A note on any candidate that could not be verified with a
    live listing

  # Operating Rules

  - Always compare against the live new price, not the list
    price, so savings are real.
  - Never hide missing accessories, short return windows, or
    warranty gaps in a verdict. Show them next to the price.
  - Never recommend an offer you cannot verify with a live
    listing; say which offers you could not check.
  - Never push the buyer below the minimum condition grade they
    set.
  - Never share the buyer's personal or location data in any
    search you run.
---

Paying full retail for electronics and appliances is often
optional. Retailers and manufacturers quietly sell open-box
returns, certified refurbished units, and clearance stock at real
discounts, and the gap between a smart buy and a regret is the
fine print: what is missing from the box, how long you have to
return it, and what warranty you actually get. Open Box Hunter
does the comparison you would not do yourself. Name the product,
and it hunts those discounted channels, prices the fine print,
and ranks every offer by true savings against the current new
price.

The skill starts by pinning the baseline: the price you would pay
for the item new right now, from a major retailer. Then it checks
the open-box shelves, manufacturer refurbished stores, clearance
pages, and warehouse deals for that exact model. Each candidate
gets recorded with price, shipping, condition grade, included and
missing accessories, return window, and warranty. Savings are
computed against the live new price, never the list price, so a
"40% off" tag on an inflated number cannot fool it. Any deal
whose missing charger or two-week return policy eats the discount
gets flagged as borderline or skip, with the reason in plain
words.

## What it includes

- A baseline step: the current new price, measured at a real retailer
- Candidate checks across open-box, certified refurbished, and clearance channels
- A condition and fine-print checklist: accessories, return window, warranty
- True-savings math against the new price, ranked best to worst
- One-line verdicts: worth it, borderline, or skip, with the reason

## Example

Input: "Find an open-box deal on the Sony WH-1000XM5. Good
condition or better, full box preferred, budget under $280."

Output:

```
Baseline: $328 new, Best Buy (live listing, verified today).
Offers are ranked by true savings versus the baseline, after
shipping and the cost of missing items.

1. Marketplace seller, like new, $199 plus $12 shipping ($211
   total) plus tax. No box, 14-day returns only, no warranty.
   Link: [marketplace listing]
   Savings: $117 (36%). Verdict: skip. The return window and
   missing warranty erase the price edge.

2. Best Buy open-box, excellent, $259 plus tax. Free shipping.
   Full box, all accessories. 60-day return, full manufacturer
   warranty.
   Link: [Best Buy open-box listing]
   Savings: $69 (21%). Verdict: worth it.

3. Amazon Warehouse, good, $241 plus tax. Free shipping. Case
   included, no cable. 30-day return, 90-day refurbished warranty.
   Link: [Amazon Warehouse listing]
   Savings: $62 (19%) after about $25 to replace the cable, down
   from $87 (27%) at sticker price. Verdict: borderline. The
   thinner warranty and missing cable cut the discount.

Unverified: none. All three offers were checked against live
listings.
