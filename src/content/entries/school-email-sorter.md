---
title: "School Email Sorter"
tagline: "Sorts the school inbox into actions, forms, fees, and dates, so nothing slips."
category: "productivity"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/school-email-sorter.md"
source_verified: false
origin: "directory"
includes:
  - "A sort of each school email into action needed, form due, fee to pay, date to note, or read later"
  - "Deadlines, amounts, and form links pulled out of each message"
  - "A flag for anything due within three days"
  - "A short list ordered by deadline, with one line per item"
  - "A one-line summary of what needs doing today"
version: "1.0.0"
date_added: "2026-11-18"
safety_notes: "Never replies to a school email, submits a form, or pays a fee without the user saying go. Deadlines and amounts are quoted exactly as written."
install_prompt: |
  To install the School Email Sorter skill, save the skill source below as ~/workspace/skills/school-email-sorter/SKILL.md, then tell Muse to use it whenever school emails pile up and you want them sorted into what needs action, what form is due, what fee is owed, and what date matters.

  --- SOURCE ---
  ---
  name: school-email-sorter
  description: Sort a pile of school emails into action needed, forms due, fees to pay, and dates to note. Use when the user pastes or forwards school emails and wants a short sorted list with deadlines, amounts, and links, ordered by what is due first.
  ---

  ## Purpose
  School email arrives in a flood: permission slips, fee notices, schedule changes, and newsletters, all mixed together. This skill reads a batch of school emails and sorts each one into action needed, form due, fee to pay, date to note, or read later, then pulls out the deadline, the amount, and the link or form for each item. The result is a short list ordered by deadline, so the parent sees what needs doing today and what can wait.

  ## Workflow
  1. Take the school emails the user pastes or forwards.
  2. Sort each email into one bucket: action needed, form due, fee to pay, date to note, or read later.
  3. Pull out the deadline, the amount if any, and the link or form for each item.
  4. Flag anything due within three days.
  5. Return a short list ordered by deadline, one line per item, with a one-line summary of what needs doing today.
  6. Keep each child's items separate when more than one child is named.

  ## Output Contract
  - A sorted list by category and deadline, one line per item.
  - Each item names what it is, who sent it, the deadline, the amount if any, and the link or form.
  - A flag for items due within three days.
  - A one-line summary of what needs doing today.
  - Nothing marked done, replied to, or paid until the user says so.

  ## Operating Rules
  - Never reply to a school email, submit a form, or pay a fee without the user saying go.
  - Never share payment details.
  - Quote deadlines and amounts exactly as written. Do not guess.
  - Say when an email is unclear instead of guessing what it asks.
  - Ask once for missing facts, then sort with what you have.
source: |
  ---
  name: school-email-sorter
  description: Sort a pile of school emails into action needed, forms due, fees to pay, and dates to note. Use when the user pastes or forwards school emails and wants a short sorted list with deadlines, amounts, and links, ordered by what is due first.
  ---

  ## Purpose
  School email arrives in a flood: permission slips, fee notices, schedule changes, and newsletters, all mixed together. This skill reads a batch of school emails and sorts each one into action needed, form due, fee to pay, date to note, or read later, then pulls out the deadline, the amount, and the link or form for each item. The result is a short list ordered by deadline, so the parent sees what needs doing today and what can wait.

  ## Workflow
  1. Take the school emails the user pastes or forwards.
  2. Sort each email into one bucket: action needed, form due, fee to pay, date to note, or read later.
  3. Pull out the deadline, the amount if any, and the link or form for each item.
  4. Flag anything due within three days.
  5. Return a short list ordered by deadline, one line per item, with a one-line summary of what needs doing today.
  6. Keep each child's items separate when more than one child is named.

  ## Output Contract
  - A sorted list by category and deadline, one line per item.
  - Each item names what it is, who sent it, the deadline, the amount if any, and the link or form.
  - A flag for items due within three days.
  - A one-line summary of what needs doing today.
  - Nothing marked done, replied to, or paid until the user says so.

  ## Operating Rules
  - Never reply to a school email, submit a form, or pay a fee without the user saying go.
  - Never share payment details.
  - Quote deadlines and amounts exactly as written. Do not guess.
  - Say when an email is unclear instead of guessing what it asks.
  - Ask once for missing facts, then sort with what you have.
---

School email arrives in a flood: permission slips, fee notices, schedule changes, and newsletters, all mixed together, and the one form due Friday hides between three newsletters and a lunch menu. This skill reads a batch of school emails and sorts each one into action needed, form due, fee to pay, date to note, or read later. It pulls out the deadline, the amount, and the link or form for each item, flags anything due within three days, and returns a short list ordered by deadline, so you see what needs doing today and what can wait. Nothing is replied to, submitted, or paid until you say go, and when more than one child is named, each child's items stay separate.

## What it includes

- A sort of each school email into action needed, form due, fee to pay, date to note, or read later
- Deadlines, amounts, and form links pulled out of each message
- A flag for anything due within three days
- A short list ordered by deadline, with one line per item
- A one-line summary of what needs doing today

## Example

You paste in six school emails from the week. The skill sorts them: a field trip permission slip due Friday, a $45 activity fee due next Tuesday, a picture day date to note, two newsletters to read later, and one schedule change that needs no action. The Friday slip is flagged as due within three days, and the summary reads: "Today: sign the field trip slip, due Friday." You handle the slip, and the rest waits its turn.
