---
title: "Email Subject Line Tester"
tagline: "Scores your draft subject lines and rewrites the weak ones so more people open the email."
category: "marketing"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/email-subject-line-tester.md"
source_verified: false
origin: "directory"
includes:
  - "A score for each draft subject line, with the reason behind it"
  - "A rewrite of every weak line, in your voice, under 50 characters"
  - "A spam-word and all-caps check before you send"
  - "A/B test pairings for your two strongest lines"
  - "A short checklist of what makes a line worth opening"
version: "1.0.0"
date_added: "2026-11-12"
safety_notes: "Never sends email for you. Scores and rewrites are suggestions; you choose what goes out. Does not write deceptive lines or fake urgency, and never asks for your email password or account access."
install_prompt: |
  To install the Email Subject Line Tester skill, save the skill source below as ~/workspace/skills/email-subject-line-tester/SKILL.md, then tell Muse to use it whenever you have draft subject lines for a newsletter, launch, or campaign and want them scored and improved before you send.

  --- SOURCE ---
  ---
  name: email-subject-line-tester
  description: Score and rewrite email subject lines before you send. Use when the user has draft subject lines for a newsletter, launch, or campaign and wants scores, rewrites of the weak ones, a spam-word check, and A/B test pairings.
  ---

  ## Purpose
  A subject line decides whether an email gets opened. This skill scores each draft line on clarity, curiosity, length, and honesty, rewrites the weak ones, checks for spam words and shouting, and pairs the two strongest lines for an A/B test, so you send the line most likely to be opened.

  ## Workflow
  1. Take the draft subject lines plus the email topic and audience.
  2. Score each line from 1 to 10 on clarity, curiosity, length, and honesty, with one sentence of reasoning per score.
  3. Rewrite every line that scores below 7, keeping it under 50 characters and in the user voice.
  4. Run a spam-word and all-caps check on every line, and flag any line that reads like clickbait.
  5. Pick the two strongest lines and write them as an A/B test pair, with what to measure: open rate over the first 24 hours.
  6. Return a short checklist of what made the winning lines work, so the next draft starts stronger.

  ## Output Contract
  - A score table: each draft line, its score, and one sentence of reasoning.
  - A rewrite for every line below 7, under 50 characters.
  - A spam-word and all-caps report, with flags named.
  - One A/B test pair: the two strongest lines, plus what to measure.
  - A short checklist of what made the winners work.

  ## Operating Rules
  - Never send email or touch the user inbox. Scoring and rewriting only.
  - Never write deceptive lines, fake urgency, or false promises. A line must match what the email actually says.
  - Keep rewrites under 50 characters so they survive mobile inboxes.
  - Ask for the email topic and audience once, then score with what you have.
  - Do not ask for email passwords or account access.
source: |
  ---
  name: email-subject-line-tester
  description: Score and rewrite email subject lines before you send. Use when the user has draft subject lines for a newsletter, launch, or campaign and wants scores, rewrites of the weak ones, a spam-word check, and A/B test pairings.
  ---

  ## Purpose
  A subject line decides whether an email gets opened. This skill scores each draft line on clarity, curiosity, length, and honesty, rewrites the weak ones, checks for spam words and shouting, and pairs the two strongest lines for an A/B test, so you send the line most likely to be opened.

  ## Workflow
  1. Take the draft subject lines plus the email topic and audience.
  2. Score each line from 1 to 10 on clarity, curiosity, length, and honesty, with one sentence of reasoning per score.
  3. Rewrite every line that scores below 7, keeping it under 50 characters and in the user voice.
  4. Run a spam-word and all-caps check on every line, and flag any line that reads like clickbait.
  5. Pick the two strongest lines and write them as an A/B test pair, with what to measure: open rate over the first 24 hours.
  6. Return a short checklist of what made the winning lines work, so the next draft starts stronger.

  ## Output Contract
  - A score table: each draft line, its score, and one sentence of reasoning.
  - A rewrite for every line below 7, under 50 characters.
  - A spam-word and all-caps report, with flags named.
  - One A/B test pair: the two strongest lines, plus what to measure.
  - A short checklist of what made the winners work.

  ## Operating Rules
  - Never send email or touch the user inbox. Scoring and rewriting only.
  - Never write deceptive lines, fake urgency, or false promises. A line must match what the email actually says.
  - Keep rewrites under 50 characters so they survive mobile inboxes.
  - Ask for the email topic and audience once, then score with what you have.
  - Do not ask for email passwords or account access.
---

## What it includes

Most emails are never opened because the subject line did not earn the click. This skill fixes the line before you send. You paste your draft subject lines and say what the email is about and who it is for. Each line gets a score from 1 to 10 on clarity, curiosity, length, and honesty, with one sentence of reasoning behind the score. Every line below 7 gets a rewrite under 50 characters, in your voice, so it still fits a mobile inbox. Then the skill runs a spam-word and all-caps check and flags any line that reads like clickbait, so your mail stays out of the junk folder. Finally it pairs your two strongest lines for an A/B test and tells you what to measure, open rate over the first 24 hours, and leaves a short checklist of what made the winners work, so your next draft starts stronger.

## Example

You run a record store newsletter and have three drafts for a weekend sale email: "SALE THIS WEEKEND!!!", "New arrivals and 20% off used vinyl", and "Your Saturday crate dig, sorted".

**Score table**

| Line | Score | Reasoning |
|---|---|---|
| SALE THIS WEEKEND!!! | 3 | It shouts, gives no detail about what is on sale, and reads like spam. |
| New arrivals and 20% off used vinyl | 7 | It is clear and honest with a specific offer, but it offers little curiosity. |
| Your Saturday crate dig, sorted | 9 | It is short and personal, and it makes a record fan want to see what is inside. |

**Rewrite for every line below 7**

- "SALE THIS WEEKEND!!!" becomes "Weekend sale: 20% off used vinyl" (32 characters).

**Spam-word and all-caps report**

- "SALE THIS WEEKEND!!!": flagged for all caps and for three exclamation marks.
- "New arrivals and 20% off used vinyl": no flags.
- "Your Saturday crate dig, sorted": no flags.

**A/B test pair**

- A: "Your Saturday crate dig, sorted" (score 9)
- B: "New arrivals and 20% off used vinyl" (score 7)
- Measure: open rate over the first 24 hours.

**Checklist**

- Name a specific offer or detail instead of a vague shout.
- Use normal capitalization and at most one exclamation mark.
- Keep the line under 50 characters so it fits a mobile inbox.
- Make sure the line matches what the email says.
