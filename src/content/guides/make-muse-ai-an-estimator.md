---
title: "How to make Muse AI an estimator"
description: "Install an estimator skill so Muse shows its math every time: meal macros, moving costs, freelance rates, bid ceilings. Or write your own from a template."
kind: "howto"
date_added: 2026-11-26
updated: 2026-11-26
---

To make Muse an estimator, install a skill that tells it which numbers to ask for, how to do the math, and how to show the result. Without a skill, Muse answers each estimate a different way. With one, it asks for the same inputs every time, shows each step, and flags its guesses as guesses.

You need a Muse account at [muse.ai](https://muse.ai). An install takes one paste.

## Install an estimator skill

1. Pick an estimator from the list below and open its page.
2. Choose **Copy install prompt**.
3. Open a chat with Muse and paste the prompt.
4. Send it, and read Muse's reply. Muse confirms the install and lists the trigger phrases.
5. Say one of the trigger phrases with your numbers, for example "what should I charge" for the freelance rate calculator.

For the full install steps, and what to do when Muse finds a skill with the same name, see [How to install a Muse skill](/guides/install-a-muse-skill/).

## Estimators you can install

Each one asks for what it needs and shows how it got the result. "Tested" means we installed the skill in Muse and checked that it saved with its trigger phrases.

| Estimate | Skill | Tested in Muse |
|---|---|---|
| Calories and macros from a meal photo | [Meal Macro Estimator](/entry/meal-macro-estimator/) | Yes |
| Highest bid for an auction lot after fees, tax, and shipping | [Auction Bid Calculator](/entry/auction-bid-calculator/) | Yes |
| All-in cost of one item across stores | [Out-the-Door Cost Comparator](/entry/out-the-door-cost-comparator/) | Yes |
| Contractor quotes, line by line | [Contractor Bid Comparator](/entry/contractor-bid-comparator/) | Yes |
| Cost of a move from your inventory and distance | [Moving Cost Estimator](/entry/moving-cost-estimator/) | Not yet |
| Hourly floor, day rate, and project quote | [Freelance Rate Calculator](/entry/freelance-rate-calculator/) | Not yet |
| Payoff order and monthly plan for your debts | [Debt Payoff Planner](/entry/debt-payoff-planner/) | Not yet |
| Unit prices across a shopping list | [Unit Price Comparator](/entry/unit-price-comparator/) | Not yet |

Estimates are estimates. The meal estimator gives rough numbers from a photo, not medical or diet advice. The freelance rate calculator gives no tax advice and tells you to check tax figures with your own accountant.

## Write your own estimator

If none of these fits, write a skill for your own estimate. A Muse skill is one file, `~/workspace/skills/<name>/SKILL.md`, with a name, a description, and four sections. [How Muse skills work](/guides/how-muse-skills-work/) explains each part.

An estimator works best when its rules cover the three places estimates go wrong: missing inputs, hidden math, and false precision. Paste this into Muse, then fill in the parts in angle brackets:

```
Install the "<Name> Estimator" skill. Its full source is below.
Create it at ~/workspace/skills/<name>-estimator/SKILL.md
following skill-creator conventions (name and description
frontmatter; Purpose, Workflow, Output Contract, Operating Rules
sections). Then confirm it is installed and tell me the trigger
phrases.

--- SOURCE ---
---
name: <name>-estimator
description: Estimate <what> from <inputs>. Use when the user says "<phrase one>", "<phrase two>", or "<phrase three>".
---

## Purpose
Turn the user's real numbers into an estimate of <what>, with math they can check.

## Workflow
1. Ask for each input: <input one>, <input two>, <input three>.
2. Show the math step by step.
3. Give a low, likely, and high figure.
4. Name the input that moves the result most.

## Output Contract
- Inputs used, with each assumption marked as an assumption.
- The math, one line per step.
- Low, likely, and high figures.

## Operating Rules
- Never invent a number. Ask for it, or mark it as an assumption.
- Show the full math, even when the answer is awkward.
- Give a range when an input is a guess.
```

We have not tested this template in Muse as written. It follows the same structure as the tested skills above. After the install, give it one estimate where you already know the answer, and check that its math matches yours.

If Muse doesn't use the skill when you ask, see [Fix a Muse skill that doesn't trigger](/guides/fix-a-muse-skill-that-does-not-trigger/).
