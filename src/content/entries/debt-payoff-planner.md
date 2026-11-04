---
title: "Debt Payoff Planner"
tagline: "Turns your debts, balances, APRs, and minimums into a payoff order and a monthly plan you can actually follow."
category: "money"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/debt-payoff-planner.md"
source_verified: false
origin: "directory"
includes: ["Payoff order by avalanche or snowball", "Monthly payment plan with a debt-free date", "Interest comparison between payoff orders", "What-if check for an extra monthly payment", "Payoff plan template"]
version: "1.0.0"
date_added: "2026-11-03"
safety_notes: "Never asks for account logins or card numbers, and never sends financial details anywhere. Never moves money, schedules a payment, or contacts a lender. All figures come from numbers the user provides, and the plan is a draft for the user to review."
install_prompt: |
  To install the Debt Payoff Planner skill, save the skill source below as ~/workspace/skills/debt-payoff-planner/SKILL.md, then tell Muse to use it whenever you list your debts or ask which debt to pay first.

  --- SOURCE ---
  ---
  name: debt-payoff-planner
  description: Build a debt payoff plan from debts, balances, APRs, and minimum payments. Use when the user says "pay off my debts", "debt payoff plan", "avalanche or snowball", "how fast can I be debt free", "extra payment", or shares a list of debts and asks which one to pay first.
  ---

  ## Purpose
  Turn a list of debts into a payoff plan with a clear order: which debt gets every extra dollar, which debts stay at their minimums, and when each debt is gone. The plan compares two orders, avalanche (highest APR first) and snowball (smallest balance first), so the user picks with both the math and the motivation in view.

  ## Workflow
  1. Collect debts: for each debt, the name, balance, APR, and minimum payment, plus the total monthly amount the user can pay toward debt.
  2. Check the floor: confirm the monthly amount covers all minimums combined. If it does not, say so plainly and stop; the plan needs a different budget first.
  3. Build both orders: avalanche (highest APR first) and snowball (smallest balance first), each with a debt-free date and total interest paid.
  4. Recommend one order and give the reasons: avalanche usually costs less interest, snowball usually clears a first debt sooner.
  5. Turn the chosen order into a month-by-month plan: which debt gets the extra payment, which debts stay at minimum, and when each balance hits zero.
  6. Run the what-if: show how an extra monthly payment changes the debt-free date and the interest total.
  7. Recheck on payoff: when a debt is paid off, roll its payment into the next debt in the order and update the dates.

  ## Output Contract
  - A debt table: name, balance, APR, minimum payment, and position in the chosen order.
  - A comparison: avalanche versus snowball, with a debt-free date and total interest for each.
  - A monthly plan for the chosen order, naming the target debt each month.
  - An extra-payment what-if: the new debt-free date and the interest saved.
  - No payment is made, moved, or scheduled. The plan is text the user reviews.

  ## Operating Rules
  - Never ask for logins, card numbers, or account access. Work only from numbers the user types in.
  - Never move money, schedule a payment, or contact a lender.
  - Never invent a balance, APR, or minimum. If a figure is missing, ask for it or mark the plan as partial.
  - Every debt stays at its minimum in every month of the plan; the extra payment goes to one target debt at a time.
  - Round dates to the month, and state that the plan assumes no new charges and no rate changes.
  - If the minimums alone exceed the monthly amount the user can pay, say so plainly and stop instead of building a plan that cannot work.
source: |
  ---
  name: debt-payoff-planner
  description: Build a debt payoff plan from debts, balances, APRs, and minimum payments. Use when the user says "pay off my debts", "debt payoff plan", "avalanche or snowball", "how fast can I be debt free", "extra payment", or shares a list of debts and asks which one to pay first.
  ---

  ## Purpose
  Turn a list of debts into a payoff plan with a clear order: which debt gets every extra dollar, which debts stay at their minimums, and when each debt is gone. The plan compares two orders, avalanche (highest APR first) and snowball (smallest balance first), so the user picks with both the math and the motivation in view.

  ## Workflow
  1. Collect debts: for each debt, the name, balance, APR, and minimum payment, plus the total monthly amount the user can pay toward debt.
  2. Check the floor: confirm the monthly amount covers all minimums combined. If it does not, say so plainly and stop; the plan needs a different budget first.
  3. Build both orders: avalanche (highest APR first) and snowball (smallest balance first), each with a debt-free date and total interest paid.
  4. Recommend one order and give the reasons: avalanche usually costs less interest, snowball usually clears a first debt sooner.
  5. Turn the chosen order into a month-by-month plan: which debt gets the extra payment, which debts stay at minimum, and when each balance hits zero.
  6. Run the what-if: show how an extra monthly payment changes the debt-free date and the interest total.
  7. Recheck on payoff: when a debt is paid off, roll its payment into the next debt in the order and update the dates.

  ## Output Contract
  - A debt table: name, balance, APR, minimum payment, and position in the chosen order.
  - A comparison: avalanche versus snowball, with a debt-free date and total interest for each.
  - A monthly plan for the chosen order, naming the target debt each month.
  - An extra-payment what-if: the new debt-free date and the interest saved.
  - No payment is made, moved, or scheduled. The plan is text the user reviews.

  ## Operating Rules
  - Never ask for logins, card numbers, or account access. Work only from numbers the user types in.
  - Never move money, schedule a payment, or contact a lender.
  - Never invent a balance, APR, or minimum. If a figure is missing, ask for it or mark the plan as partial.
  - Every debt stays at its minimum in every month of the plan; the extra payment goes to one target debt at a time.
  - Round dates to the month, and state that the plan assumes no new charges and no rate changes.
  - If the minimums alone exceed the monthly amount the user can pay, say so plainly and stop instead of building a plan that cannot work.
---

## What it includes

Paying down several debts at once is confusing because every card wants its minimum, and extra money has to go somewhere specific to matter. This skill takes the list of debts, balances, APRs, and minimums, checks that the monthly amount covers all minimums, then builds two payoff orders: avalanche, highest APR first, which usually costs less interest, and snowball, smallest balance first, which usually clears a first debt sooner. It recommends one order with reasons, turns it into a month-by-month plan naming the target debt each month, and shows what an extra monthly payment does to the debt-free date and the interest total. When a debt is paid off, its payment rolls into the next debt in the order. Nothing is paid or moved; the plan is a draft the user reviews.

## Example

You list three cards with balances, APRs, and minimums, plus the total you can pay each month. The skill shows avalanche clearing you in 22 months with one interest total and snowball in 24 months with a slightly higher total, but with the smallest card gone in month four. You pick snowball for the early win, and the skill gives you the monthly plan: minimums everywhere, every extra dollar to the smallest card until it is gone, then the payment rolls to the next card. You add a 50 dollar extra payment, and the skill updates the debt-free date and the interest saved.
