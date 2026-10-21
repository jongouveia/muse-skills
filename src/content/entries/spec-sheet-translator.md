---
title: "Spec Sheet Translator"
tagline: "Turns dense product specs into plain buying advice: what matters for you, what is nice to know, and what is fluff."
category: "shopping"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/spec-sheet-translator.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "fluff-detector", "spec-glossary"]
version: "1.0.0"
date_added: 2026-10-16
safety_notes: |
  Works only from the specs you provide. It never invents a spec
  number, never guesses a missing measurement, and never calls a
  spec misleading without saying why. It gives buying guidance, not
  purchase instructions; it never places an order, never shares your
  details, and never tells you a product is right without tying the
  verdict to your stated use case.
install_prompt: |
  Install the "Spec Sheet Translator" skill. Its full source is
  below. Create it at ~/workspace/skills/spec-sheet-translator/SKILL.md
  following skill-creator conventions (name and description
  frontmatter; Purpose, Workflow, Output Contract, Operating Rules
  sections). Then confirm it is installed and tell me the trigger
  phrases.

  --- SOURCE ---
  ---
  name: spec-sheet-translator
  description: Paste a product's spec sheet and get a plain-language translation: what each spec means, what actually matters for your use case, and which claims are marketing fluff. Trigger phrases: "translate these specs", "what do these specs mean", "is this TV any good", "spec sheet translation".
  ---
  # Purpose

  Do one narrow job: make dense product specs readable for a real
  buyer. You paste the specs for a TV, laptop, appliance, tire, or
  power tool, and the skill translates the jargon into plain words,
  sorts every spec by whether it matters for how you will use the
  product, and calls out claims that sound impressive but mean
  little. The result is a short verdict tied to your use case, not a
  lecture on every line of the sheet.

  # Workflow

  1. Take the specs as pasted text, a photo or screenshot you
     describe, or a product page URL. If your use case is not clear,
     ask what you will do with the product and what you care about
     most: budget, performance, longevity, or simplicity.
  2. Translate each spec into plain language: what the term means,
     and what a good number looks like for this product class. One
     line per spec, no filler.
  3. Sort every spec into three buckets: "matters for you",
     "nice to know", and "ignore (marketing fluff)". The sorting is
     based on your stated use case, not on the manufacturer's
     emphasis.
  4. Flag misleading specs: numbers missing their units, vague
     claims like "military-grade" with no named standard, and
     comparisons with no baseline ("2x faster" than what?). Name
     the trick being used.
  5. Give a short verdict: for your use case, whether the specs
     support the asking price, and which single spec is the limiting
     factor. If the price is missing, say so instead of guessing it.
  6. If key specs are absent from the sheet, list which ones are
     missing and where to find them, for example the manufacturer's
     full spec PDF or a review site's measurements page.

  # Output Contract

  - Plain-language translation of each spec, one line each
  - Three buckets: matters for you, nice to know, marketing fluff
  - Fluff flags with the trick named (missing units, vague claim,
    baseless comparison)
  - A short verdict tied to your use case: price justified or not,
    and the single limiting spec
  - A missing-specs list with where to find each one

  Keep the whole answer under 30 lines unless the user asks for more.

  # Operating Rules

  - Never invent a spec number. If a measurement is missing, say it
    is missing and tell the user where to look.
  - Never call a spec misleading without naming the trick.
  - Do not recommend a specific competing product unless the user
    asks for alternatives.
  - Tie every verdict to the user's stated use case. A spec that is
    fluff for one buyer can matter for another.
  - Never place an order, never request payment details, never
    store anything beyond the specs provided in this session.
source: |
  ---
  name: spec-sheet-translator
  description: Paste a product's spec sheet and get a plain-language translation: what each spec means, what actually matters for your use case, and which claims are marketing fluff. Trigger phrases: "translate these specs", "what do these specs mean", "is this TV any good", "spec sheet translation".
  ---
  # Purpose

  Do one narrow job: make dense product specs readable for a real
  buyer. You paste the specs for a TV, laptop, appliance, tire, or
  power tool, and the skill translates the jargon into plain words,
  sorts every spec by whether it matters for how you will use the
  product, and calls out claims that sound impressive but mean
  little. The result is a short verdict tied to your use case, not a
  lecture on every line of the sheet.

  # Workflow

  1. Take the specs as pasted text, a photo or screenshot you
     describe, or a product page URL. If your use case is not clear,
     ask what you will do with the product and what you care about
     most: budget, performance, longevity, or simplicity.
  2. Translate each spec into plain language: what the term means,
     and what a good number looks like for this product class. One
     line per spec, no filler.
  3. Sort every spec into three buckets: "matters for you",
     "nice to know", and "ignore (marketing fluff)". The sorting is
     based on your stated use case, not on the manufacturer's
     emphasis.
  4. Flag misleading specs: numbers missing their units, vague
     claims like "military-grade" with no named standard, and
     comparisons with no baseline ("2x faster" than what?). Name
     the trick being used.
  5. Give a short verdict: for your use case, whether the specs
     support the asking price, and which single spec is the limiting
     factor. If the price is missing, say so instead of guessing it.
  6. If key specs are absent from the sheet, list which ones are
     missing and where to find them, for example the manufacturer's
     full spec PDF or a review site's measurements page.

  # Output Contract

  - Plain-language translation of each spec, one line each
  - Three buckets: matters for you, nice to know, marketing fluff
  - Fluff flags with the trick named (missing units, vague claim,
    baseless comparison)
  - A short verdict tied to your use case: price justified or not,
    and the single limiting spec
  - A missing-specs list with where to find each one

  Keep the whole answer under 30 lines unless the user asks for more.

  # Operating Rules

  - Never invent a spec number. If a measurement is missing, say it
    is missing and tell the user where to look.
  - Never call a spec misleading without naming the trick.
  - Do not recommend a specific competing product unless the user
    asks for alternatives.
  - Tie every verdict to the user's stated use case. A spec that is
    fluff for one buyer can matter for another.
  - Never place an order, never request payment details, never
    store anything beyond the specs provided in this session.
---

Spec Sheet Translator exists for the moment before a purchase when
the specs page starts reading like a foreign language. Peak
brightness in nits, panel types, "military-grade" durability, cache
sizes, energy ratings: the numbers are real but the meaning is
buried. You hand it the specs, tell it what you will use the
product for, and it translates each term into plain words, then
sorts everything by whether it matters for you. The stuff that does
not matter gets filed as marketing fluff, with the trick named.

The fluff detection is the heart of it. A brightness number with no
unit, a speed claim compared against nothing, a durability badge
with no named test standard: these are real patterns in product
marketing, and the skill calls each one out instead of letting it
slide. It also tells you which specs are missing entirely, like a
laptop sheet with no battery watt-hours, and where you can find
them. The verdict at the end is tied to your use case and the
asking price: whether the specs justify the money, and which single
spec will hold you back first.

It works from the specs you provide and never invents a number to
fill a gap. It gives buying guidance and stops there: no orders, no
payment details, no product recommendations unless you ask for
alternatives.

## What it includes

- A spec glossary that translates jargon into one-line plain words
- A three-bucket sorter: matters for you, nice to know, marketing fluff
- A fluff detector that names the trick (missing units, vague claim, baseless comparison)
- A missing-specs list with pointers to where each number lives
- A use-case verdict: price justified or not, plus the single limiting spec

## Example

Input: specs for a 55-inch TV, use case "movies in a bright living
room", asking price $799. Sheet lists "HDR Pro", 300 nits, 60Hz,
"quantum color".

Output:

```
- Matters for you: 300 nits is dim for a bright room; you want
  600+ nits. 60Hz is fine for movies.
- Nice to know: quantum color = wider color gamut, noticeable on
  animated films.
- Fluff: "HDR Pro" is not a standard; the TV lacks the brightness
  for real HDR impact.
- Verdict: specs do not support the $799 asking price for your
  room. Limiting spec: brightness.
- Missing: input lag (check a review site's measurements page).
```
