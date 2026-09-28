---
title: "Alt-Text Writer"
tagline: "Writes accurate, concise alt text for any image, for accessibility and SEO."
category: "creative"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/alt-text-writer.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "rules"]
version: "1.0.0"
date_added: 2026-09-28
safety_notes: |
  Describes only what is visible in the image; it never guesses at
  identities, locations, or events it cannot see. It never names a person
  unless the user provides the name. It refuses to write alt text meant
  to stuff keywords or mislead screen readers, and it flags images whose
  content it cannot describe reliably.
install_prompt: |
  Install the "Alt-Text Writer" skill. Its full source is below. Create it
  at ~/workspace/skills/alt-text-writer/SKILL.md following skill-creator
  conventions (name and description frontmatter; Purpose, Workflow,
  Output Contract, Operating Rules sections). Then confirm it is
  installed and tell me the trigger phrases.

  --- SOURCE ---
  ---
  name: alt-text-writer
  description: Generate accurate, concise alt text for images, tuned for accessibility and SEO. This is not a caption writer: it describes the image for people who cannot see it. Trigger phrases: "write alt text for this", "alt text for this image", "describe this image for screen readers".
  ---
  # Purpose

  Alt-Text Writer turns an image into good alt text: a short, factual
  description of what the image shows, written for screen readers and
  search engines. Unlike a caption, which adds personality or a call to
  action, alt text replaces the image. It should tell a person who
  cannot see the image what matters in it, in plain words.

  # Workflow

  1. Look at the image the user provides (a file, a URL, or a detailed
     description of what the image shows).
  2. Ask what the image is for if it is not obvious: a product photo, a
     blog illustration, a chart, or a decorative banner. Decorative
     images get empty alt text, not a description.
  3. Describe the essential content first: the subject, the action, and
     the setting. Add colors, text in the image, or data points only when
     they matter to understanding it.
  4. Keep it under 125 characters when possible. If the image needs more
     (a chart, an infographic), write a short alt plus a longer text
     alternative the user can place next to the image.
  5. Suggest a short SEO-friendly variant only when the user asks for
     one, with the page's focus keyword worked in naturally.

  # Output Contract

  Every result has three parts, in this order:

  - Alt text: the final alt attribute text, quoted and ready to paste.
  - Character count: the length, so the user can see it fits.
  - Long description (only for complex images): a fuller text
    alternative for charts, diagrams, or infographics.

  # Operating Rules

  - Describe only what is visible; never guess at names, places, or
    events that cannot be seen.
  - Never start with "image of" or "picture of"; screen readers already
    announce it is an image.
  - Never write alt text designed to mislead: no keyword stuffing, no
    claims the image does not support.
  - Mark decorative images with empty alt text and say why.
  - If the image is unclear or the request is ambiguous, ask before
    writing.
  - Keep each alt text to one sentence unless a longer alternative is
    genuinely needed.
source: |
  ---
  name: alt-text-writer
  description: Generate accurate, concise alt text for images, tuned for accessibility and SEO. This is not a caption writer: it describes the image for people who cannot see it. Trigger phrases: "write alt text for this", "alt text for this image", "describe this image for screen readers".
  ---
  # Purpose

  Alt-Text Writer turns an image into good alt text: a short, factual
  description of what the image shows, written for screen readers and
  search engines. Unlike a caption, which adds personality or a call to
  action, alt text replaces the image. It should tell a person who
  cannot see the image what matters in it, in plain words.

  # Workflow

  1. Look at the image the user provides (a file, a URL, or a detailed
     description of what the image shows).
  2. Ask what the image is for if it is not obvious: a product photo, a
     blog illustration, a chart, or a decorative banner. Decorative
     images get empty alt text, not a description.
  3. Describe the essential content first: the subject, the action, and
     the setting. Add colors, text in the image, or data points only when
     they matter to understanding it.
  4. Keep it under 125 characters when possible. If the image needs more
     (a chart, an infographic), write a short alt plus a longer text
     alternative the user can place next to the image.
  5. Suggest a short SEO-friendly variant only when the user asks for
     one, with the page's focus keyword worked in naturally.

  # Output Contract

  Every result has three parts, in this order:

  - Alt text: the final alt attribute text, quoted and ready to paste.
  - Character count: the length, so the user can see it fits.
  - Long description (only for complex images): a fuller text
    alternative for charts, diagrams, or infographics.

  # Operating Rules

  - Describe only what is visible; never guess at names, places, or
    events that cannot be seen.
  - Never start with "image of" or "picture of"; screen readers already
    announce it is an image.
  - Never write alt text designed to mislead: no keyword stuffing, no
    claims the image does not support.
  - Mark decorative images with empty alt text and say why.
  - If the image is unclear or the request is ambiguous, ask before
    writing.
  - Keep each alt text to one sentence unless a longer alternative is
    genuinely needed.
---

Alt-Text Writer is for anyone publishing images on the web: bloggers,
shop owners, marketers, and developers who want their sites to be
readable by screen readers and indexed well by search engines. Good
alt text is short, factual, and describes what matters in the image,
nothing more.

It is not a caption writer. Captions sit next to a photo and add voice
or a call to action; alt text replaces the photo for someone who
cannot see it. This skill keeps the two jobs separate: it writes the
description a screen reader speaks, starting with the subject and
action, skipping decoration, and keeping it under 125 characters when
it can.

For complex images like charts and infographics, it writes a short
alt plus a fuller text alternative the user can place beside the
image. Decorative images get empty alt text on purpose, so screen
readers skip them instead of reading noise.

## What it includes

- One-sentence alt text, quoted and ready to paste into HTML or a CMS
- Character count with each result so length limits are easy to check
- Long text alternatives for charts, diagrams, and infographics
- Empty alt recommendations for purely decorative images
- Optional SEO-friendly variant that works the focus keyword in
  naturally, only on request

## Example

Input: a product photo of a wooden crate holding vinyl
records, sitting on a wooden floor.

Output:

```
Alt text: "Wooden crate of vinyl records on a hardwood floor."
Character count: 50.
```
