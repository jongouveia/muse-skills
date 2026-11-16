---
title: "Wedding Planner"
tagline: "Guest list, budget, and vendors for one wedding, in one board."
category: "creative"
type: "space"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/wedding-planner.md"
source_verified: true
origin: "directory"
includes:
  - "Guests list with side, RSVP status, and plus-one"
  - "Budget list with estimated and actual costs"
  - "Vendors list with role, contact, and status"
version: "1.0.0"
date_added: "2026-11-16"
safety_notes: "The Space never emails a guest or vendor, books a vendor, or shares wedding details outside the Space."
install_prompt: |
  Build a Space named "Wedding Planner". Its full spec is below. Build the sections, fields, and views the spec names. Ask me before you connect any app. Confirm when the Space is in my sidebar.

  --- SOURCE ---
  # Wedding Planner
  ## Purpose
  Hold one wedding's guest list, budget, and vendors in one board, so the headcount, the spending, and the booked vendors stay in step from the first plan to the day itself.
  ## Layout
  - Guests list: each guest holds a name, side, RSVP status, invited, yes, or no, and plus-one, with a count of guests attending.
  - Budget list: each item holds a category, estimated cost, actual cost, and amount paid, with totals for estimated, actual, and still owed (actual minus paid).
  - Vendors list: each vendor holds a name, role, contact, status, contacted, booked, or done, and cost.
  ## Updates
  Add and edit guests, budget items, and vendors by hand. RSVP and vendor statuses move with one tap.
  ## Connections
  None. The Space works on its own, with no app connected.
  ## Rules
  - Never emails a guest or vendor or books a vendor.
  - Never shares wedding details outside the Space.
  - Entries come only from the ones added by hand.
source: |
  # Wedding Planner
  ## Purpose
  Hold one wedding's guest list, budget, and vendors in one board, so the headcount, the spending, and the booked vendors stay in step from the first plan to the day itself.
  ## Layout
  - Guests list: each guest holds a name, side, RSVP status, invited, yes, or no, and plus-one, with a count of guests attending.
  - Budget list: each item holds a category, estimated cost, actual cost, and amount paid, with totals for estimated, actual, and still owed (actual minus paid).
  - Vendors list: each vendor holds a name, role, contact, status, contacted, booked, or done, and cost.
  ## Updates
  Add and edit guests, budget items, and vendors by hand. RSVP and vendor statuses move with one tap.
  ## Connections
  None. The Space works on its own, with no app connected.
  ## Rules
  - Never emails a guest or vendor or books a vendor.
  - Never shares wedding details outside the Space.
  - Entries come only from the ones added by hand.
---

A wedding is a year of small decisions spread across a guest list, a budget, and a vendor list that usually live in three different places. This Space puts all three in one board in your sidebar, so the headcount, the spending, and the booked vendors stay in step from the first plan to the day itself, and a question from a vendor or a relative gets an answer from the board instead of a search through old messages.

The guests list holds each person with their side, RSVP status, and plus-one, and counts who is actually attending, so the caterer gets a real number. The budget list holds each item with its estimated cost, actual cost, and amount paid, so a deposit counts, and totals what was planned, what was spent, and what is still owed, so overspending shows up early instead of after the fact. The vendors list holds each vendor with their role, contact, and status, contacted, booked, or done, so nothing is chased twice and nothing is left unbooked.

It pairs well with a monthly check in the year before the wedding, then weekly in the last month, when RSVPs land and final payments come due.

## What it includes

- Guests list with name, side, RSVP status, and plus-one, plus a count of guests attending
- Budget list with category, estimated cost, actual cost, and amount paid, plus totals for estimated, actual, and still owed
- Vendors list with name, role, contact, status, and cost

## Example

You add 120 guests, 8 budget items estimated at $18,000, and 6 vendors. By the RSVP deadline the board shows 96 attending, $17,400 actually spent, and 5 of 6 vendors booked.
