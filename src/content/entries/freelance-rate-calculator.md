---
title: "Freelance Rate Calculator"
tagline: "Turns target income, expenses, and billable hours into an hourly floor, a day rate, and a project quote."
category: "money"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/freelance-rate-calculator.md"
source_verified: false
origin: "directory"
includes: ["hourly floor", "day rate", "project quote", "negotiation range", "math breakdown", "quote note"]
version: "1.0.0"
date_added: "2026-10-28"
safety_notes: "Never presents its output as tax advice, legal advice, or financial advice. Never sends a quote to a client or accepts work on the user's behalf. Never invents the user's expenses, hours, or tax rate: every number comes from the user or is flagged as an assumption to confirm."
install_prompt: |
  To install the Freelance Rate Calculator skill, save the skill source below as ~/workspace/skills/freelance-rate-calculator/SKILL.md, then tell Muse to use it whenever you want to work out what to charge.

  --- SOURCE ---
  ---
  name: freelance-rate-calculator
  description: Work out a freelance hourly rate, day rate, and project quote from target income, business expenses, taxes set aside, and realistic billable hours. Use when the user says "freelance rate", "what should I charge", "calculate my rate", "hourly rate calculator", "day rate", "quote this project", or wants to raise, check, or defend a price for client work.
  ---

  ## Purpose
  Turn a freelancer's real numbers into a rate that covers income, costs, and time off, with math the user can check and a range they can negotiate from, instead of a price guessed from what others charge.

  ## Workflow
  1. Gather the inputs: target annual take-home pay, yearly business expenses, a taxes set-aside percentage, weeks worked per year, and realistic billable hours per week. Ask for missing numbers, and never fill them in silently.
  2. Show the math step by step: add expenses and the taxes set-aside to the target income to get the revenue needed, then divide by total billable hours to get the hourly floor.
  3. Build the range: present the hourly floor as the low end, a target rate above it for profit and slow months, and a stretch rate for premium or rush work, each labeled clearly.
  4. Price the project: multiply estimated hours by the target rate, add a line for revisions or scope risk when the brief is vague, and show the day rate as eight times the hourly rate or the user's own working day length.
  5. Sense-check the result: compare it with the user's current rate, flag it when the floor lands above what the market for that work usually pays, and suggest honest levers: fewer expenses, more billable hours, or a narrower service.
  6. Write the quote note: a short paragraph the user can paste into a proposal, stating what the rate covers, what is out of scope, and that revisions beyond the agreed count are billed extra.

  ## Output Contract
  - Inputs used: every number, with any assumption flagged as an assumption to confirm.
  - Math breakdown: revenue needed, billable hours, and each division shown line by line.
  - Rate range: low, target, and stretch hourly rates, plus the day rate.
  - Project quote: estimated hours, rate used, total, and any scope-risk line.
  - Sense-check: how the new rate compares with the current rate, and levers if the floor looks high.
  - Quote note: ready to paste, covering scope and extra revisions.

  ## Operating Rules
  - Never invent expenses, hours, weeks worked, or a tax percentage. If the user does not give a number, ask for it or mark it plainly as an assumption.
  - Never present the result as tax advice, legal advice, or financial advice. Suggest the user check tax figures with their own accountant.
  - Never send a quote to a client, accept work, or agree to a price on the user's behalf. The user always makes the final call.
  - Never round away the story: show the full math, even when the answer is awkward, so the user can spot a wrong input.
  - Never price from a competitor's rate alone. The floor comes from the user's own numbers first, and market comparison is only a sense-check.
  - If the brief is vague, price with a stated hours range and a scope-risk line, not a single confident total.
source: |
  ---
  name: freelance-rate-calculator
  description: Work out a freelance hourly rate, day rate, and project quote from target income, business expenses, taxes set aside, and realistic billable hours. Use when the user says "freelance rate", "what should I charge", "calculate my rate", "hourly rate calculator", "day rate", "quote this project", or wants to raise, check, or defend a price for client work.
  ---

  ## Purpose
  Turn a freelancer's real numbers into a rate that covers income, costs, and time off, with math the user can check and a range they can negotiate from, instead of a price guessed from what others charge.

  ## Workflow
  1. Gather the inputs: target annual take-home pay, yearly business expenses, a taxes set-aside percentage, weeks worked per year, and realistic billable hours per week. Ask for missing numbers, and never fill them in silently.
  2. Show the math step by step: add expenses and the taxes set-aside to the target income to get the revenue needed, then divide by total billable hours to get the hourly floor.
  3. Build the range: present the hourly floor as the low end, a target rate above it for profit and slow months, and a stretch rate for premium or rush work, each labeled clearly.
  4. Price the project: multiply estimated hours by the target rate, add a line for revisions or scope risk when the brief is vague, and show the day rate as eight times the hourly rate or the user's own working day length.
  5. Sense-check the result: compare it with the user's current rate, flag it when the floor lands above what the market for that work usually pays, and suggest honest levers: fewer expenses, more billable hours, or a narrower service.
  6. Write the quote note: a short paragraph the user can paste into a proposal, stating what the rate covers, what is out of scope, and that revisions beyond the agreed count are billed extra.

  ## Output Contract
  - Inputs used: every number, with any assumption flagged as an assumption to confirm.
  - Math breakdown: revenue needed, billable hours, and each division shown line by line.
  - Rate range: low, target, and stretch hourly rates, plus the day rate.
  - Project quote: estimated hours, rate used, total, and any scope-risk line.
  - Sense-check: how the new rate compares with the current rate, and levers if the floor looks high.
  - Quote note: ready to paste, covering scope and extra revisions.

  ## Operating Rules
  - Never invent expenses, hours, weeks worked, or a tax percentage. If the user does not give a number, ask for it or mark it plainly as an assumption.
  - Never present the result as tax advice, legal advice, or financial advice. Suggest the user check tax figures with their own accountant.
  - Never send a quote to a client, accept work, or agree to a price on the user's behalf. The user always makes the final call.
  - Never round away the story: show the full math, even when the answer is awkward, so the user can spot a wrong input.
  - Never price from a competitor's rate alone. The floor comes from the user's own numbers first, and market comparison is only a sense-check.
  - If the brief is vague, price with a stated hours range and a scope-risk line, not a single confident total.
---

## What it includes

Many freelancers set a rate by copying what someone else charges, then wonder why the year ends short. This skill starts from the user's own numbers: target take-home pay, yearly business expenses, a taxes set-aside percentage, weeks worked, and realistic billable hours per week, which is usually far fewer than a full-time schedule once admin, pitching, and gaps between clients are counted. It shows the math line by line, so the user can see exactly how the hourly floor is reached, then builds a low, target, and stretch range for negotiation, plus a day rate and a project quote from estimated hours. A short quote note explains what the rate covers and what counts as extra, and a sense-check flags it when the floor lands high, with honest levers to bring it down.

## Example

A designer wants $70,000 take-home pay, has $8,000 in yearly expenses, sets aside 25 percent for taxes, and can bill 20 hours a week for 46 weeks. The skill adds the numbers to reach the revenue needed, divides by 920 billable hours, and lands on an hourly floor, then suggests a target rate above it for profit and slow months and a stretch rate for rush work. For a website project estimated at 30 hours, it quotes the target rate times 30, adds a scope-risk line because the brief is still vague, and writes a short quote note stating what is included and that extra revision rounds are billed separately.
