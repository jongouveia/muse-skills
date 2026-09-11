---
title: "Interview Prep Coach"
tagline: "Role and company in, likely questions and talking points out."
category: "productivity"
type: "prompt"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/interview-prep-coach.md"
source_verified: false
origin: "directory"
includes: ["instructions", "prep-template"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Uses only the role, company, and background you provide, plus
  public information. Writes only the prep back to you. Nothing
  leaves the chat.
install_prompt: |
  Install the "Interview Prep Coach" prompt pack. Its full source is below. Save it at
  ~/workspace/prompts/interview-prep-coach.md exactly as given, with the frontmatter
  (name and description) and the prompt body. Do not run it now. Then
  confirm it is saved and tell me the trigger phrases: "prep me for this interview", "practice interview questions", "build my interview prep".

  --- SOURCE ---
  # Interview Prep Coach

  How to use: give the role, the company, and the interview round
  (screen, hiring manager, panel, final). It researches the company
  and returns likely questions, your talking points, and questions
  to ask them.
  Trigger phrases: "prep me for this interview", "practice interview questions", "build my interview prep".

  Save it as a reusable prompt pack named "Interview Prep Coach".

  ## The prompt

  Prep me for this interview. I will give you: the role title, the
  company, the interview round, and a short version of my
  background.

  1. Research the company: what it does, recent news, and anything
     relevant to this role. Keep it to 5 bullets.
  2. List 8-10 likely questions for this round: mix role-specific,
     behavioral ("tell me about a time"), and company-specific.
  3. For each question, give a 2-line talking point drawn from my
     background , a direction, not a script.
  4. Give me 4 questions to ask them: 2 about the role and team, 1
     about the company's direction, 1 that shows I did the reading.
  5. End with one honest weak spot to prepare for: the likeliest
     hard question about my background, and how to answer it
     directly.

  Rules: talking points, not scripts : no one should memorize
  paragraphs. If my background doesn't obviously fit a question,
  say so instead of inventing experience.
source: |
  # Interview Prep Coach

  How to use: give the role, the company, and the interview round
  (screen, hiring manager, panel, final). It researches the company
  and returns likely questions, your talking points, and questions
  to ask them.
  Trigger phrases: "prep me for this interview", "practice interview questions", "build my interview prep".

  Save it as a reusable prompt pack named "Interview Prep Coach".

  ## The prompt

  Prep me for this interview. I will give you: the role title, the
  company, the interview round, and a short version of my
  background.

  1. Research the company: what it does, recent news, and anything
     relevant to this role. Keep it to 5 bullets.
  2. List 8-10 likely questions for this round: mix role-specific,
     behavioral ("tell me about a time"), and company-specific.
  3. For each question, give a 2-line talking point drawn from my
     background , a direction, not a script.
  4. Give me 4 questions to ask them: 2 about the role and team, 1
     about the company's direction, 1 that shows I did the reading.
  5. End with one honest weak spot to prepare for: the likeliest
     hard question about my background, and how to answer it
     directly.

  Rules: talking points, not scripts : no one should memorize
  paragraphs. If my background doesn't obviously fit a question,
  say so instead of inventing experience.
---

Interview Prep Coach takes the role, the company, and the round, and
returns a complete prep sheet: company research in five bullets,
8-10 likely questions with talking points from your background, four
questions to ask them, and the one hard question to rehearse.

## What it includes

- Company research (5 bullets, role-relevant)
- Likely questions with 2-line talking points
- Four questions to ask the interviewers
- The weak-spot question, answered honestly

## Example

Input: "Product designer, Figma, hiring-manager round. Background: 5 years in B2B SaaS, led a design system."

Output (abridged):

```
Company: Figma , design platform, ~$20B valuation talk, pushing
  into dev-adjacent workflows. Relevant: design systems are core
  to their story.

Likely questions:
- "Walk me through a system you designed end to end." → talking
  point: the B2B design system, adoption numbers.
- "How do you work with engineers?" → ...

Ask them: 1) How does design partner with the Config audience team?
2) What does success look like in 6 months? ...

Weak spot: "Why leave B2B SaaS for a platform company?" → answer
directly: ...
```
