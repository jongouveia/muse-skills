---
title: "Money Dashboard"
tagline: "Tell it your goals and subscriptions; it shows the plan and the monthly amount needed."
category: "money"
type: "space"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/money-dashboard.md"
source_verified: true
origin: "directory"
includes:
  - "Goals list with progress bars"
  - "Subscriptions list"
  - "Balances row"
version: "1.0.0"
date_added: "2026-11-14"
safety_notes: "The Space never moves money, pays a bill, cancels a subscription, or shares balances or goals outside the Space."
install_prompt: |
  Build a Space named "Money Dashboard". Its full spec is below. Build the sections, fields, and views the spec names. Ask me before you connect any app. Confirm when the Space is in my sidebar.

  --- SOURCE ---
  # Money Dashboard
  ## Purpose
  Hold goals, subscriptions, and balances in one view so the month's money is visible at a glance and the plan stays on track.
  ## Layout
  - Goals list: each goal holds a name, target amount, deadline, and current balance, with a progress bar and the monthly amount still needed.
  - Subscriptions list: each subscription holds a name, cost, billing cycle, and next renewal date.
  - Balances row: checking, savings, and card balances entered by hand, with a total.
  ## Updates
  None. Manual edits only.
  ## Connections
  None.
  ## Rules
  - Never moves money, pays a bill, or cancels a subscription.
  - Never shares balances or goals outside the Space.
  - Figures come only from the amounts entered.
source: |
  # Money Dashboard
  ## Purpose
  Hold goals, subscriptions, and balances in one view so the month's money is visible at a glance and the plan stays on track.
  ## Layout
  - Goals list: each goal holds a name, target amount, deadline, and current balance, with a progress bar and the monthly amount still needed.
  - Subscriptions list: each subscription holds a name, cost, billing cycle, and next renewal date.
  - Balances row: checking, savings, and card balances entered by hand, with a total.
  ## Updates
  None. Manual edits only.
  ## Connections
  None.
  ## Rules
  - Never moves money, pays a bill, or cancels a subscription.
  - Never shares balances or goals outside the Space.
  - Figures come only from the amounts entered.
---

Money spreads across goals, subscriptions, and accounts, and the plan only holds when all three are visible together. This Space puts them in one sidebar view: savings goals with progress bars and the monthly amount still needed, subscriptions with their costs and renewal dates, and balances entered by hand with a total.

You add a goal with its target, deadline, and current balance, and the Space works out the monthly amount needed to reach it on time. The subscriptions list keeps the recurring costs in view so a renewal never surprises you, and the balances row totals what you hold across accounts. Nothing connects to a bank or an app, so the Space stays current through your own edits, which take a minute a week.

It pairs well with the savings-goal-tracker skill in the directory queue: the skill tracks one goal in chat, while this Space holds the whole picture.

## What it includes

- Goals list with target, deadline, balance, progress bar, and monthly amount needed per goal
- Subscriptions list with cost, billing cycle, and next renewal date per subscription
- Balances row with checking, savings, and card balances and a total

## Example

You add three goals and six subscriptions in January. By March the Space shows the vacation goal at 62% with $180 a month still needed, two subscriptions renewing next week at $26.98 total, and balances of $4,210 across accounts.
