---
title: "Interview Question Prep"
tagline: "Turns a job posting and your notes into likely interview questions, draft answers, and smart questions to ask back."
category: "productivity"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/interview-question-prep.md"
source_verified: false
origin: "directory"
includes: ["Likely questions drawn from the job posting", "Short draft answers in your own words", "Gap flags where you still need a real example", "Questions to ask the interviewer", "Prep sheet template"]
version: "1.0.0"
date_added: "2026-11-01"
safety_notes: "Never fabricates experience, credentials, employers, or past results. Never sends applications or messages to employers or recruiters. Never shares the user's resume or notes with anyone."
install_prompt: |
  To install the Interview Question Prep skill, save the skill source below as ~/workspace/skills/interview-question-prep/SKILL.md, then tell Muse to use it whenever you prepare for a job interview.

  --- SOURCE ---
  ---
  name: interview-question-prep
  description: Prepare for a job interview from a job posting and the user's background notes. Use when the user says "prep me for an interview", "interview prep", "interview questions", "help me prepare for an interview", "what will they ask", or shares a job posting and asks how to get ready.
  ---

  ## Purpose
  Turn a job posting and the user's own background notes into a focused prep sheet: the questions most likely to come up, short draft answers grounded in real experience, and good questions to ask the interviewer, so the user walks in prepared instead of rehearsing generic answers.

  ## Workflow
  1. Collect inputs: the job posting text or link, plus the user's background notes, resume bullets, and anything known about the team or interview format.
  2. Extract what matters: the top requirements, skills, and themes in the posting, and which parts of the user's background match each one.
  3. Draft likely questions: a ranked list mixing role-specific questions, behavioral questions, and company-fit questions, most likely first.
  4. Draft short answers: for each question, a 3 to 5 sentence answer tied to a real detail from the user's notes. Where the notes lack a real example, mark it "needs your example" instead of inventing one.
  5. Draft questions to ask: 5 to 7 questions for the interviewer, tied to the role, the team, and how success is measured.
  6. Produce the prep sheet (see Output Contract) plus a short practice plan for the time the user has left.

  ## Output Contract
  - A prep sheet with: the ranked likely questions, a short draft answer under each, and gap flags wherever a real example is still missing.
  - A short list of questions to ask the interviewer, each with one line on why it matters.
  - A practice plan for the time available: what to rehearse first, and what to skip if time is short.
  - Nothing is sent to an employer or recruiter. The prep sheet is text only.

  ## Operating Rules
  - Never invent experience, employers, metrics, credentials, or past results. If the notes lack a story, flag the gap and ask the user for one.
  - Never send applications, follow-up notes, or messages to employers or recruiters.
  - Never share the user's resume, notes, or prep sheet with anyone.
  - Keep draft answers short and in words the user would actually say. No jargon the user would not use, and no script to memorize word for word.
  - Do not help embellish or misstate experience. If the user asks for that, reframe the answer around what is honestly true.
  - If the posting is missing (no text or link), ask for it before drafting questions, and say plainly that questions drafted without it are generic.
source: |
  ---
  name: interview-question-prep
  description: Prepare for a job interview from a job posting and the user's background notes. Use when the user says "prep me for an interview", "interview prep", "interview questions", "help me prepare for an interview", "what will they ask", or shares a job posting and asks how to get ready.
  ---

  ## Purpose
  Turn a job posting and the user's own background notes into a focused prep sheet: the questions most likely to come up, short draft answers grounded in real experience, and good questions to ask the interviewer, so the user walks in prepared instead of rehearsing generic answers.

  ## Workflow
  1. Collect inputs: the job posting text or link, plus the user's background notes, resume bullets, and anything known about the team or interview format.
  2. Extract what matters: the top requirements, skills, and themes in the posting, and which parts of the user's background match each one.
  3. Draft likely questions: a ranked list mixing role-specific questions, behavioral questions, and company-fit questions, most likely first.
  4. Draft short answers: for each question, a 3 to 5 sentence answer tied to a real detail from the user's notes. Where the notes lack a real example, mark it "needs your example" instead of inventing one.
  5. Draft questions to ask: 5 to 7 questions for the interviewer, tied to the role, the team, and how success is measured.
  6. Produce the prep sheet (see Output Contract) plus a short practice plan for the time the user has left.

  ## Output Contract
  - A prep sheet with: the ranked likely questions, a short draft answer under each, and gap flags wherever a real example is still missing.
  - A short list of questions to ask the interviewer, each with one line on why it matters.
  - A practice plan for the time available: what to rehearse first, and what to skip if time is short.
  - Nothing is sent to an employer or recruiter. The prep sheet is text only.

  ## Operating Rules
  - Never invent experience, employers, metrics, credentials, or past results. If the notes lack a story, flag the gap and ask the user for one.
  - Never send applications, follow-up notes, or messages to employers or recruiters.
  - Never share the user's resume, notes, or prep sheet with anyone.
  - Keep draft answers short and in words the user would actually say. No jargon the user would not use, and no script to memorize word for word.
  - Do not help embellish or misstate experience. If the user asks for that, reframe the answer around what is honestly true.
  - If the posting is missing (no text or link), ask for it before drafting questions, and say plainly that questions drafted without it are generic.
---

## What it includes

Most interview prep fails in the same way: generic questions, generic answers, and no link to the actual job. This skill starts from the real posting and your real background, then builds a prep sheet around the overlap. It ranks the questions most likely to come up, drafts a short answer for each one in words you would actually say, and flags the gaps where you still need a real example instead of inventing one for you. It also drafts questions to ask the interviewer, tied to the role and the team, plus a practice plan ordered by what to rehearse first when time is short. Nothing is sent anywhere: the prep sheet is yours alone, and your resume and notes stay private.

## Example

You paste in a posting for a senior technical SEO role and a few bullets about your client work. The skill returns a prep sheet led by the questions tied to the posting's top requirements, each with a short draft answer drawn from your bullets, and two gap flags where you have no story yet for a behavioral question. It adds six questions to ask the interviewer, including one about how success is measured in the first 90 days, and a practice plan that puts the top five questions first for a one-hour session the night before.
