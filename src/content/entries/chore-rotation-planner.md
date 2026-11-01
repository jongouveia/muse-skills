---
title: "Chore Rotation Planner"
tagline: "Turns household chores and who does them into a fair rotation, with swaps handled without a weekly argument."
category: "home"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/chore-rotation-planner.md"
source_verified: false
origin: "directory"
includes: ["weekly rotation", "chore list", "fairness check", "swap rule", "weekly chart"]
version: "1.0.0"
date_added: "2026-10-30"
safety_notes: "Never assigns a chore that is unsafe for a child or a person with a physical limit the user has named. Never shares the household schedule outside the home. Never treats the rotation as a verdict on anyone: it only tracks jobs, not people."
install_prompt: |
  To install the Chore Rotation Planner skill, save the skill source below as ~/workspace/skills/chore-rotation-planner/SKILL.md, then tell Muse to use it whenever you want a fair chore rotation for the household.

  --- SOURCE ---
  ---
  name: chore-rotation-planner
  description: Build a fair weekly chore rotation for a household from a list of chores, the people who share the home, and how often each job needs doing. Use when the user says "chore rotation", "chore chart", "split the chores", "who does what this week", "fair chores", "household chores", or wants to swap or rebalance household jobs.
  ---

  ## Purpose
  Turn a pile of household jobs into a rotation that feels fair: every chore gets a person and a week, heavy weeks balance against light ones, and swaps are easy, so the same argument about who does what does not restart every Sunday.

  ## Workflow
  1. List the chores: take the user's rooms and jobs, and record each chore with how often it needs doing (daily, weekly, biweekly, monthly) and a rough time estimate in minutes.
  2. List the people: record who shares the home, any jobs each person cannot do for safety or health reasons, and any jobs each person strongly dislikes, so those rotate rather than stick to one person.
  3. Build the rotation: assign each chore to one person per cycle, spreading heavy jobs and disliked jobs across people and weeks, and keeping daily jobs on a short cycle of their own.
  4. Check fairness: add up the minutes per person per week, flag any week where one person carries much more than the others, and rebalance by moving a light job or swapping a heavy one.
  5. Handle swaps: when someone asks to trade, swap the two chores for that week only, record the trade, and let the original rotation resume the next week unless the user asks for a permanent change.
  6. Publish the chart: output a weekly chart with one row per chore and one column per day or per week, in a form the user can paste into a shared note or print for the fridge.

  ## Output Contract
  - Weekly chart: one row per chore, showing who does it this week and when it repeats.
  - Fairness summary: minutes per person for the week, plus any imbalance flagged and how it was fixed.
  - Chore list: each chore with its frequency and time estimate, so the rotation can be rebuilt later.
  - Swap record: any trade made, with the two chores and the week it applies to.
  - Questions: anything missing, such as who lives in the home or how often a job needs doing, asked instead of guessed.

  ## Operating Rules
  - Never assign a chore to a person who cannot do it safely, for example a heavy lifting job to someone with a back injury the user has named, or a chemical cleaning job to a young child.
  - Never present the rotation as a judgment on a person. It tracks jobs and minutes, not effort or character.
  - Never invent chores, people, or frequencies the user did not name. Ask when a room or a regular job is missing from the list.
  - Never make a swap permanent unless the user says so: swaps last one week by default.
  - Never drop a chore from the chart without saying so. If a job has no one to do it, flag it as unassigned and ask who should take it.
  - If the household changes, for example someone moves out or a new room is added, rebuild the rotation from the updated list instead of patching the old chart.
source: |
  ---
  name: chore-rotation-planner
  description: Build a fair weekly chore rotation for a household from a list of chores, the people who share the home, and how often each job needs doing. Use when the user says "chore rotation", "chore chart", "split the chores", "who does what this week", "fair chores", "household chores", or wants to swap or rebalance household jobs.
  ---

  ## Purpose
  Turn a pile of household jobs into a rotation that feels fair: every chore gets a person and a week, heavy weeks balance against light ones, and swaps are easy, so the same argument about who does what does not restart every Sunday.

  ## Workflow
  1. List the chores: take the user's rooms and jobs, and record each chore with how often it needs doing (daily, weekly, biweekly, monthly) and a rough time estimate in minutes.
  2. List the people: record who shares the home, any jobs each person cannot do for safety or health reasons, and any jobs each person strongly dislikes, so those rotate rather than stick to one person.
  3. Build the rotation: assign each chore to one person per cycle, spreading heavy jobs and disliked jobs across people and weeks, and keeping daily jobs on a short cycle of their own.
  4. Check fairness: add up the minutes per person per week, flag any week where one person carries much more than the others, and rebalance by moving a light job or swapping a heavy one.
  5. Handle swaps: when someone asks to trade, swap the two chores for that week only, record the trade, and let the original rotation resume the next week unless the user asks for a permanent change.
  6. Publish the chart: output a weekly chart with one row per chore and one column per day or per week, in a form the user can paste into a shared note or print for the fridge.

  ## Output Contract
  - Weekly chart: one row per chore, showing who does it this week and when it repeats.
  - Fairness summary: minutes per person for the week, plus any imbalance flagged and how it was fixed.
  - Chore list: each chore with its frequency and time estimate, so the rotation can be rebuilt later.
  - Swap record: any trade made, with the two chores and the week it applies to.
  - Questions: anything missing, such as who lives in the home or how often a job needs doing, asked instead of guessed.

  ## Operating Rules
  - Never assign a chore to a person who cannot do it safely, for example a heavy lifting job to someone with a back injury the user has named, or a chemical cleaning job to a young child.
  - Never present the rotation as a judgment on a person. It tracks jobs and minutes, not effort or character.
  - Never invent chores, people, or frequencies the user did not name. Ask when a room or a regular job is missing from the list.
  - Never make a swap permanent unless the user says so: swaps last one week by default.
  - Never drop a chore from the chart without saying so. If a job has no one to do it, flag it as unassigned and ask who should take it.
  - If the household changes, for example someone moves out or a new room is added, rebuild the rotation from the updated list instead of patching the old chart.
---

## What it includes

Most chore charts fail in the second week: one person ends up with the bathroom every time, the heavy jobs pile onto the same weekend, and nobody remembers who swapped what with whom. This skill starts from the real list: the rooms in the home, each job, how often it needs doing, and roughly how long it takes. It records who shares the home, which jobs anyone cannot do safely, and which jobs people strongly dislike, so those rotate instead of sticking to one person. Then it builds a weekly rotation that spreads heavy and disliked jobs across people and weeks, adds up the minutes per person, and rebalances any week where one person carries much more than the rest. Swaps last one week by default and are recorded, so the original rotation resumes cleanly the next week. The result is a simple chart that can be pasted into a shared note or printed for the fridge.

## Example

Ana, Ben, and Cy share a home and list five weekly jobs with time estimates: vacuuming (30 minutes), bathroom cleaning (40), kitchen deep clean (45), trash and recycling (15), and laundry (60). Ben cannot lift heavy trash bins, and Cy dislikes bathroom cleaning. Ana also asks to trade vacuuming for trash duty this week only. The skill replies:

```
Weekly chart
| Chore               | This week | Repeats |
|---------------------|-----------|---------|
| Vacuuming           | Ana       | Weekly  |
| Bathroom cleaning   | Ana       | Weekly  |
| Kitchen deep clean  | Cy        | Weekly  |
| Trash and recycling | Cy        | Weekly  |
| Laundry             | Ben       | Weekly  |

Fairness summary: Ana 70 minutes, Ben 60, Cy 60.
Imbalance fixed: the first draft gave Ana 85 and Cy 45. Moving the
kitchen to Cy and vacuuming to Ana closed the gap.

Chore list: vacuuming, weekly, 30 min. Bathroom cleaning, weekly,
40 min. Kitchen deep clean, weekly, 45 min. Trash and recycling,
weekly, 15 min. Laundry, weekly, 60 min.

Swap record: this week only, Ana takes trash and recycling and Cy
takes vacuuming. With the swap: Ana 55 minutes, Ben 60, Cy 75. Next
week returns to the chart.

Questions: none.
```
