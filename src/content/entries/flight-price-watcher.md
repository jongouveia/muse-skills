---
title: "Flight Price Watcher"
tagline: "Watches a flight route and flags fare drops worth booking, with nearby cheap dates."
category: "deal-hunting"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/flight-price-watcher.md"
source_verified: false
origin: "directory"
includes:
  - "A fare watch on one route and date range, with your price ceiling"
  - "A daily fare check with the cheapest dates nearby"
  - "An alert when the fare falls below your ceiling or drops sharply"
  - "A plain verdict on whether to book now or keep waiting"
  - "A short log of fare moves so you can see the trend"
version: "1.0.0"
date_added: "2026-11-14"
safety_notes: "Never books a flight or charges a card. Watches fares and reports them; you book. Does not ask for airline passwords or payment details, and never claims a fare will stay at the price shown."
install_prompt: |
  To install the Flight Price Watcher skill, save the skill source below as ~/workspace/skills/flight-price-watcher/SKILL.md, then tell Muse to use it whenever you have a flight route, travel dates, and a price ceiling and want to know when the fare drops enough to book.

  --- SOURCE ---
  ---
  name: flight-price-watcher
  description: Watch a flight route for fare drops and flag the cheapest dates. Use when the user has a route, dates, and a price ceiling and wants to know when to book.
  ---

  ## Purpose
  Airfares move daily, and the best price often appears for a short time. This skill watches one route and date range, checks fares against the price ceiling you set, flags a drop worth booking, and shows the cheapest nearby dates when you can shift, so you book at a good price instead of checking fares by hand every day.

  ## Workflow
  1. Take the route, travel dates, flexibility, passenger count, cabin, and price ceiling.
  2. Check fares for the route and dates, plus nearby dates when the user is flexible.
  3. Compare each fare against the ceiling and against the last checked price.
  4. Flag a drop below the ceiling or a sharp fall from the last check, and note the cheapest nearby dates.
  5. Give a plain verdict: book now, wait, or set a lower ceiling.
  6. Keep a short fare log with date, price, and change, so the trend is visible.

  ## Output Contract
  - Current fare for the route and dates, with the source named.
  - Cheapest nearby dates, when the user is flexible.
  - Alert when the fare is below the ceiling or has fallen sharply since the last check.
  - A plain verdict: book now or keep waiting, with the reason.
  - A short fare log: date, price, change.

  ## Operating Rules
  - Never book a flight or charge a card. Watching and reporting only.
  - Never ask for airline passwords, payment details, or booking logins.
  - Name the source of every fare and the date it was checked.
  - Do not present a fare as final until the user checks it at booking; fares change.
  - Ask for route, dates, and ceiling once, then check with what you have.
source: |
  ---
  name: flight-price-watcher
  description: Watch a flight route for fare drops and flag the cheapest dates. Use when the user has a route, dates, and a price ceiling and wants to know when to book.
  ---

  ## Purpose
  Airfares move daily, and the best price often appears for a short time. This skill watches one route and date range, checks fares against the price ceiling you set, flags a drop worth booking, and shows the cheapest nearby dates when you can shift, so you book at a good price instead of checking fares by hand every day.

  ## Workflow
  1. Take the route, travel dates, flexibility, passenger count, cabin, and price ceiling.
  2. Check fares for the route and dates, plus nearby dates when the user is flexible.
  3. Compare each fare against the ceiling and against the last checked price.
  4. Flag a drop below the ceiling or a sharp fall from the last check, and note the cheapest nearby dates.
  5. Give a plain verdict: book now, wait, or set a lower ceiling.
  6. Keep a short fare log with date, price, and change, so the trend is visible.

  ## Output Contract
  - Current fare for the route and dates, with the source named.
  - Cheapest nearby dates, when the user is flexible.
  - Alert when the fare is below the ceiling or has fallen sharply since the last check.
  - A plain verdict: book now or keep waiting, with the reason.
  - A short fare log: date, price, change.

  ## Operating Rules
  - Never book a flight or charge a card. Watching and reporting only.
  - Never ask for airline passwords, payment details, or booking logins.
  - Name the source of every fare and the date it was checked.
  - Do not present a fare as final until the user checks it at booking; fares change.
  - Ask for route, dates, and ceiling once, then check with what you have.
---

## What it includes

Airfares change daily, and the lowest price often appears for a short time and then climbs again. This skill watches the route for you so you stop checking fares by hand. You give it the route, the travel dates, how flexible those dates are, how many people are flying, the cabin, and the most you want to pay. It checks the fare for those dates, plus nearby dates when you can shift, and compares each price against your ceiling and against the last price it saw. When the fare falls below your ceiling, or drops sharply from the last check, it alerts you with the numbers. It also gives a plain verdict, book now or keep waiting, with the reason behind it, and keeps a short log of fare moves with date, price, and change, so you can see whether prices are drifting down or bouncing around before you commit.

## Example

You plan a spring trip from Boston to Charleston, March 27 to 31, and set a ceiling of 350 dollars per person. The first check finds 425 dollars, so the verdict is wait. A week later the fare falls to 329 dollars, below your ceiling, and the skill alerts you and shows that shifting to March 28 to April 1 would cost 311 dollars. The verdict flips to book now, with the fare log showing the drop from 425 to 329 in one week. You book the cheaper dates and stop watching.
