---
title: "Savings Goal Tracker"
tagline: "Tracks savings goals against targets and deadlines, with the monthly amount still needed."
category: "money"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/savings-goal-tracker.md"
source_verified: false
origin: "directory"
includes:
  - "A list of savings goals with a target amount, a deadline, and the amount saved so far"
  - "The monthly amount still needed to reach each goal on time"
  - "A progress bar for each goal, with the percent funded"
  - "A flag when a goal falls behind its monthly pace"
  - "A short list sorted by deadline, with one line per goal"
version: "1.0.0"
date_added: "2026-11-21"
safety_notes: "Never moves money, opens accounts, or contacts a bank. Amounts and dates are quoted as given, and the user checks their own balances before acting."
install_prompt: |
  To install the Savings Goal Tracker skill, save the skill source below as ~/workspace/skills/savings-goal-tracker/SKILL.md, then tell Muse to use it whenever you want to track a savings goal, check progress against a deadline, or work out the monthly amount still needed.

  --- SOURCE ---
  ---
  name: savings-goal-tracker
  description: Track savings goals with target amounts, deadlines, and the amount saved so far, and work out the monthly amount still needed. Use when the user names a savings goal and wants progress, a monthly pace, and a flag when a goal falls behind.
  ---

  ## Purpose
  A savings goal only works when you can see it. This skill keeps a list of your goals with a target amount, a deadline, and the amount saved so far. It works out the monthly amount still needed to reach each goal on time, shows the percent funded, and flags any goal that falls behind its monthly pace, so you know exactly what to set aside each month.

  ## Workflow
  1. Take the goals the user names, plus the target amount, the deadline, and the amount saved so far for each.
  2. Build a list with one line per goal: name, target, saved so far, deadline, and percent funded.
  3. Work out the monthly amount still needed for each goal: the amount left divided by the months until the deadline.
  4. Flag any goal that falls behind its monthly pace, and any deadline coming up within thirty days.
  5. Update the saved amount whenever the user reports a new deposit.
  6. Return a short list sorted by deadline, with one line per goal and a one-line summary of the monthly total across all goals.

  ## Output Contract
  - A list sorted by deadline, one line per goal.
  - Each goal names the target, the amount saved so far, the deadline, and the percent funded.
  - The monthly amount still needed for each goal, worked out from the amount left and the months until the deadline.
  - A flag for goals behind their monthly pace and deadlines within thirty days.
  - A one-line summary of the monthly total across all goals.
  - No money moved, no account opened, no bank contacted.

  ## Operating Rules
  - Never move money, open an account, or contact a bank.
  - Quote amounts and dates exactly as given. Do not guess.
  - Say when a balance or deadline is unconfirmed instead of guessing.
  - Ask once for missing facts, then track with what you have.
source: |
  ---
  name: savings-goal-tracker
  description: Track savings goals with target amounts, deadlines, and the amount saved so far, and work out the monthly amount still needed. Use when the user names a savings goal and wants progress, a monthly pace, and a flag when a goal falls behind.
  ---

  ## Purpose
  A savings goal only works when you can see it. This skill keeps a list of your goals with a target amount, a deadline, and the amount saved so far. It works out the monthly amount still needed to reach each goal on time, shows the percent funded, and flags any goal that falls behind its monthly pace, so you know exactly what to set aside each month.

  ## Workflow
  1. Take the goals the user names, plus the target amount, the deadline, and the amount saved so far for each.
  2. Build a list with one line per goal: name, target, saved so far, deadline, and percent funded.
  3. Work out the monthly amount still needed for each goal: the amount left divided by the months until the deadline.
  4. Flag any goal that falls behind its monthly pace, and any deadline coming up within thirty days.
  5. Update the saved amount whenever the user reports a new deposit.
  6. Return a short list sorted by deadline, with one line per goal and a one-line summary of the monthly total across all goals.

  ## Output Contract
  - A list sorted by deadline, one line per goal.
  - Each goal names the target, the amount saved so far, the deadline, and the percent funded.
  - The monthly amount still needed for each goal, worked out from the amount left and the months until the deadline.
  - A flag for goals behind their monthly pace and deadlines within thirty days.
  - A one-line summary of the monthly total across all goals.
  - No money moved, no account opened, no bank contacted.

  ## Operating Rules
  - Never move money, open an account, or contact a bank.
  - Quote amounts and dates exactly as given. Do not guess.
  - Say when a balance or deadline is unconfirmed instead of guessing.
  - Ask once for missing facts, then track with what you have.
---

A savings goal only works when you can see it. This skill keeps a list of your goals with a target amount, a deadline, and the amount saved so far. It works out the monthly amount still needed to reach each goal on time, shows the percent funded, and flags any goal that falls behind its monthly pace, so you know exactly what to set aside each month. No money is moved and no bank is contacted; every amount and date is quoted as given, never guessed.

## What it includes

- A list of savings goals with a target amount, a deadline, and the amount saved so far
- The monthly amount still needed to reach each goal on time
- A progress bar for each goal, with the percent funded
- A flag when a goal falls behind its monthly pace
- A short list sorted by deadline, with one line per goal

## Example

You are saving for three things at once: a $3,000 vacation fund due in seven months with $900 saved, a $1,200 car repair fund due in four months with $400 saved, and a $10,000 house deposit due in twelve months with $2,500 saved. The skill returns this list, sorted by deadline:

- Car repair fund: $400 of $1,200 saved, due in 4 months. [###.......] 33% funded. Needs $200 a month ($800 left over 4 months).
- Vacation fund: $900 of $3,000 saved, due in 7 months. [###.......] 30% funded. Needs $300 a month ($2,100 left over 7 months).
- House deposit: $2,500 of $10,000 saved, due in 12 months. [##........] 25% funded. Needs $625 a month ($7,500 left over 12 months).

Flags: none. No deadline falls within thirty days, and no monthly pace was given, so no goal is marked behind.

Summary: "Set aside $1,125 a month across all three goals." The house deposit is the least funded at 25%. You set the monthly transfers to match, and the rest stays on track.
