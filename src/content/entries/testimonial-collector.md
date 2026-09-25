---
title: "Testimonial Collector"
tagline: "Quarterly: picks happy customers and drafts the ask."
category: "marketing"
type: "workflow"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/testimonial-collector.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "schedule"]
version: "1.0.0"
date_added: 2026-09-14
safety_notes: |
  Drafts testimonial requests from your customer notes. Writes
  the drafts to you and nothing else. Never contacts anyone.
install_prompt: |
  Set up the "Testimonial Collector" workflow. Its full source is
  below. Default schedule: first Monday of each quarter at 09:00
  local time. Ask me to confirm or change this time before you
  create the recurring job. Once I confirm, create the job. Tell
  me the job name and the confirmed schedule when it is set up.

  --- SOURCE ---
  name: testimonial-collector
  description: Quarterly testimonial collection, picks the right customers to ask, drafts each ask personally, and tracks who replied. Trigger phrases: "collect testimonials", "ask for reviews", "testimonial drive".

  schedule: quarterly, first Monday of Jan/Apr/Jul/Oct at 09:00 local time. Confirm the time with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "collect testimonials" request.

  steps:
    1. First run: ask the user for the customer list with notes on who had a good outcome, and where testimonials should go (site, Google, etc.).
    2. Each quarter: pick 3-5 customers with the best outcomes who haven't been asked in the last year.
    3. Draft each ask personally: reference their specific result, suggest 2-3 prompts they can answer (not "write whatever"), and keep it short enough to say yes to.
    4. Track: asked, replied, published. Carry non-responders one quarter, then rotate them out.
    5. Write the report in the Output shape. The user sends the asks themselves.

  output:
    - This quarter's asks: customer, why them, the drafted ask
    - Waiting on: asked last quarter, not yet replied
    - Published: newly collected testimonials to post

  rules:
    - Drafts only. Never send anything to a customer.
    - Every ask references a specific result. No generic "would you review us" blasts.
    - Don't ask the same person twice in a year.
    - Run only on the confirmed schedule or when asked.
source: |
  name: testimonial-collector
  description: Quarterly testimonial collection, picks the right customers to ask, drafts each ask personally, and tracks who replied. Trigger phrases: "collect testimonials", "ask for reviews", "testimonial drive".

  schedule: quarterly, first Monday of Jan/Apr/Jul/Oct at 09:00 local time. Confirm the time with the user before the first scheduled run.

  trigger: the scheduled time, or a manual "collect testimonials" request.

  steps:
    1. First run: ask the user for the customer list with notes on who had a good outcome, and where testimonials should go (site, Google, etc.).
    2. Each quarter: pick 3-5 customers with the best outcomes who haven't been asked in the last year.
    3. Draft each ask personally: reference their specific result, suggest 2-3 prompts they can answer (not "write whatever"), and keep it short enough to say yes to.
    4. Track: asked, replied, published. Carry non-responders one quarter, then rotate them out.
    5. Write the report in the Output shape. The user sends the asks themselves.

  output:
    - This quarter's asks: customer, why them, the drafted ask
    - Waiting on: asked last quarter, not yet replied
    - Published: newly collected testimonials to post

  rules:
    - Drafts only. Never send anything to a customer.
    - Every ask references a specific result. No generic "would you review us" blasts.
    - Don't ask the same person twice in a year.
    - Run only on the confirmed schedule or when asked.
---

Testimonial Collector runs quarterly and does the part everyone
skips: picking the right customers, drafting each ask around their
specific result, and tracking who replied. You send the asks
yourself; it just makes sure they exist.

## What it includes

- Quarterly pick of 3-5 best-outcome customers
- Personalized ask drafts with answer prompts
- Asked/replied/published tracking
- One-year no-repeat rule

## Example

Output:

```
Q3 testimonial asks

- Dana (record store): site rebuild doubled online orders.
  Ask: "Dana, would you share 2-3 lines on what changed after
  the rebuild? Prompts: what was broken before, what the numbers
  look like now."

Waiting on: Marcus (asked Q2, no reply, one more quarter).
```
