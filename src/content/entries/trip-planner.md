---
title: "Trip Planner"
tagline: "Builds a day-by-day itinerary with time blocks, cost estimates, and links to research."
category: "creative"
type: "prompt"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/trip-planner.md"
source_verified: false
origin: "directory"
includes: ["prompt pack"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Reads only the trip details you provide in the prompt.
  Writes nothing outside the chat; it returns an itinerary and links to research.
  Never books a flight, hotel, or activity, and never touches payment details.
install_prompt: |
  Save this as a reusable prompt pack named "Trip Planner" and confirm what it
  does.

  --- SOURCE ---
  # Trip Planner

  Fill in the slots below, then send the whole prompt.

  Plan a trip with these details:

  - Destination: [destination]
  - Dates: [start date] to [end date]
  - Budget: [total budget, or per-day budget]
  - Travel style: [pace and style, e.g. "relaxed, mid-range hotels, mostly
    walking" or "packed, budget hostels, public transit"]
  - Must-dos: [places, activities, or foods that must be in the plan]
  - Travelers: [number of people, and any constraints such as kids,
    mobility, or dietary needs]

  Build a day-by-day itinerary from the arrival date to the departure date.
  For each day:

  - Break the day into time blocks (morning, afternoon, evening), each with
    one main activity and its estimated duration.
  - Fit every must-do into a specific day and time block. Do not drop one
    without saying so and why.
  - Give a cost estimate for each paid activity, meal, and transit leg, in
    the destination's local currency and in the traveler's stated budget
    currency if different.
  - Include one link to research each paid activity or booking (the
    official site or a well-known booking platform), for the user to
    verify and book themselves.
  - Flag anything that needs advance booking (timed tickets, popular
    restaurants, transit passes) and how far ahead to book it.

  After the day-by-day plan, give a total cost estimate against the stated
  budget, and call out anywhere the plan runs over.

  State clearly, once, at the end: all prices are estimates from research,
  not live quotes, and the user must verify current prices and
  availability before booking anything.

  ## How to use

  Fill in the six bracketed fields with your trip details, then send the
  whole prompt to the assistant. Answer any follow-up question about a
  missing detail (an unclear budget, an ambiguous must-do) so the plan can
  fit it into a specific day.
source: |
  # Trip Planner

  Fill in the slots below, then send the whole prompt.

  Plan a trip with these details:

  - Destination: [destination]
  - Dates: [start date] to [end date]
  - Budget: [total budget, or per-day budget]
  - Travel style: [pace and style, e.g. "relaxed, mid-range hotels, mostly
    walking" or "packed, budget hostels, public transit"]
  - Must-dos: [places, activities, or foods that must be in the plan]
  - Travelers: [number of people, and any constraints such as kids,
    mobility, or dietary needs]

  Build a day-by-day itinerary from the arrival date to the departure date.
  For each day:

  - Break the day into time blocks (morning, afternoon, evening), each with
    one main activity and its estimated duration.
  - Fit every must-do into a specific day and time block. Do not drop one
    without saying so and why.
  - Give a cost estimate for each paid activity, meal, and transit leg, in
    the destination's local currency and in the traveler's stated budget
    currency if different.
  - Include one link to research each paid activity or booking (the
    official site or a well-known booking platform), for the user to
    verify and book themselves.
  - Flag anything that needs advance booking (timed tickets, popular
    restaurants, transit passes) and how far ahead to book it.

  After the day-by-day plan, give a total cost estimate against the stated
  budget, and call out anywhere the plan runs over.

  State clearly, once, at the end: all prices are estimates from research,
  not live quotes, and the user must verify current prices and
  availability before booking anything.

  ## How to use

  Fill in the six bracketed fields with your trip details, then send the
  whole prompt to the assistant. Answer any follow-up question about a
  missing detail (an unclear budget, an ambiguous must-do) so the plan can
  fit it into a specific day.
---

Trip Planner turns six details about a trip into a day-by-day itinerary you
can act on.

Give it your destination, dates, budget, travel style, and must-dos, and it
returns a plan broken into morning, afternoon, and evening blocks, each with
a cost estimate and a link to research the booking. It fits every must-do
into a specific day, flags anything that needs advance booking, and totals
the cost against your budget. It never books anything: every price is an
estimate for you to verify before you pay for it.

It needs real dates and a real budget number to build a plan that fits. A
vague budget ("cheap") gets a vaguer cost estimate.

## What it includes

- A day-by-day itinerary with time blocks and durations
- A cost estimate per activity, meal, and transit leg, plus a running total
- A research link for each paid activity or booking
- A flag for anything that needs advance booking, and how far ahead

## Example

**Input:** "Destination: Lisbon. Dates: June 10 to June 14. Budget: $1200
total for 2 people. Travel style: relaxed, mid-range hotels, mostly
walking. Must-dos: Belem Tower, a fado show, pastel de nata tasting.
Travelers: 2 adults."

**Output:** A 4-night plan. Day 1 morning: walk Alfama district (free);
afternoon: Belem Tower and pastries at Pastéis de Belém (~€15 for two,
[link]); evening: fado dinner show in Alfama (~€70 for two, book 1 week
ahead, [link]). Days 2 to 4 follow the same structure. Total estimate:
$1,050, $150 under budget. Note at the end: all prices are estimates,
verify current rates before booking.
