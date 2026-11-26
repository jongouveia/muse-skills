---
title: "Resume Tailor"
tagline: "Tailors your resume to each job posting, with matched keywords and a fit score."
category: "productivity"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/resume-tailor.md"
source_verified: false
origin: "directory"
includes:
  - "A tailored resume draft matched to the job posting, with the original master resume untouched"
  - "A keyword match list showing which posting terms appear and which are missing"
  - "A fit score with the reasons behind it, in plain language"
  - "Rewritten bullets that use the posting's language without inventing experience"
  - "A short list of gaps to fix before applying, with honest wording for each"
version: "1.0.0"
date_added: "2026-11-25"
safety_notes: "Never invents jobs, degrees, dates, or skills the user does not have. It never submits an application or contacts an employer; the user sends the resume. It keeps the master resume untouched and works on a copy."
install_prompt: |
  To install the Resume Tailor skill, save the skill source below as ~/workspace/skills/resume-tailor/SKILL.md, then tell Muse to use it whenever you want to tailor a resume to a job posting, match keywords, or check fit before applying.

  --- SOURCE ---
  ---
  name: resume-tailor
  description: Tailor a resume to a job posting, match its keywords, and score the fit before applying. Use when the user wants to tailor a resume to a job posting, match keywords, check fit before applying, or rewrite resume bullets in a posting's language.
  ---

  ## Purpose
  A resume that speaks the posting's language gets read; a generic one gets skipped. This skill takes a master resume and a job posting, then produces a tailored copy, a keyword match list, and a fit score with the reasons behind it. It rewrites bullets from the user's real experience, never invents jobs, degrees, or skills, and names the gaps honestly so the user can fix them before applying. The master resume stays untouched; every tailored version is a fresh copy.

  ## Workflow
  1. Take the master resume and the job posting the user pastes or links to. If the posting is a link, read the posting text from it.
  2. Pull the must-have requirements, skills, and keywords out of the posting, in the posting's own words.
  3. Compare the resume against that list: which terms appear, which are missing, and which are close but worded differently.
  4. Rewrite the resume bullets to use the posting's language, drawing only on experience already in the master resume. Keep every fact true to the original.
  5. Score the fit from 1 to 10 and list the reasons, with the strongest matches first and the gaps last.
  6. Return the tailored resume, the keyword match list, the fit score, and the gap list. Offer to save the tailored copy under the job title and company name.

  ## Output Contract
  - A tailored resume draft, with changed bullets marked so the user can see what moved.
  - A keyword match list: terms that appear, terms that are missing, and terms that are close but worded differently.
  - A fit score from 1 to 10, with the reasons behind it in plain language.
  - A short gap list with honest wording the user can add only if it is true.
  - The master resume left untouched; the tailored version is a separate copy.

  ## Operating Rules
  - Never invent jobs, degrees, dates, or skills. If a requirement is not in the master resume, list it as a gap, never as a fact.
  - Keep every number and date from the original resume. Rewording is allowed; new claims are not.
  - Use the posting's own words for keywords, so the resume matches how the employer screens.
  - Ask once for a missing resume or posting, then work with what you have.
  - Never submit an application or contact an employer. The user sends the resume.
source: |
  ---
  name: resume-tailor
  description: Tailor a resume to a job posting, match its keywords, and score the fit before applying. Use when the user wants to tailor a resume to a job posting, match keywords, check fit before applying, or rewrite resume bullets in a posting's language.
  ---

  ## Purpose
  A resume that speaks the posting's language gets read; a generic one gets skipped. This skill takes a master resume and a job posting, then produces a tailored copy, a keyword match list, and a fit score with the reasons behind it. It rewrites bullets from the user's real experience, never invents jobs, degrees, or skills, and names the gaps honestly so the user can fix them before applying. The master resume stays untouched; every tailored version is a fresh copy.

  ## Workflow
  1. Take the master resume and the job posting the user pastes or links to. If the posting is a link, read the posting text from it.
  2. Pull the must-have requirements, skills, and keywords out of the posting, in the posting's own words.
  3. Compare the resume against that list: which terms appear, which are missing, and which are close but worded differently.
  4. Rewrite the resume bullets to use the posting's language, drawing only on experience already in the master resume. Keep every fact true to the original.
  5. Score the fit from 1 to 10 and list the reasons, with the strongest matches first and the gaps last.
  6. Return the tailored resume, the keyword match list, the fit score, and the gap list. Offer to save the tailored copy under the job title and company name.

  ## Output Contract
  - A tailored resume draft, with changed bullets marked so the user can see what moved.
  - A keyword match list: terms that appear, terms that are missing, and terms that are close but worded differently.
  - A fit score from 1 to 10, with the reasons behind it in plain language.
  - A short gap list with honest wording the user can add only if it is true.
  - The master resume left untouched; the tailored version is a separate copy.

  ## Operating Rules
  - Never invent jobs, degrees, dates, or skills. If a requirement is not in the master resume, list it as a gap, never as a fact.
  - Keep every number and date from the original resume. Rewording is allowed; new claims are not.
  - Use the posting's own words for keywords, so the resume matches how the employer screens.
  - Ask once for a missing resume or posting, then work with what you have.
  - Never submit an application or contact an employer. The user sends the resume.
---

A resume that speaks the posting's language gets read; a generic one gets skipped. This skill takes your master resume and a job posting, then produces a tailored copy that uses the posting's own words, a keyword match list, and a fit score with the reasons behind it. It rewrites bullets from your real experience, never invents jobs or skills, and names the gaps honestly so you can fix them before you apply. Your master resume stays untouched; every tailored version is a fresh copy.

## What it includes

- A tailored resume draft matched to the job posting, with the original master resume untouched
- A keyword match list showing which posting terms appear and which are missing
- A fit score with the reasons behind it, in plain language
- Rewritten bullets that use the posting's language without inventing experience
- A short list of gaps to fix before applying, with honest wording for each

## Example

Maya has a master resume from three years in customer support. She pastes a posting for a senior support lead that asks for chat support, escalation handling, and onboarding new agents. The skill rewrites her bullets to name the chat volume she handled, the escalations she resolved, and the two new hires she trained, flags onboarding as a partial match, and scores the fit 7 out of 10 with the reasons listed. Maya adds one honest line about the onboarding she did informally, then sends the tailored resume.
