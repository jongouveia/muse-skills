---
title: "Testimonial Drafter"
tagline: "Turns praise a customer already sent into testimonial drafts, with a permission step."
category: "marketing"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/testimonial-drafter.md"
source_verified: false
origin: "directory"
includes:
  - "Quotable lines pulled verbatim from real feedback"
  - "Short, medium, and long testimonial drafts"
  - "A permission request the customer can approve in one reply"
  - "Attribution with name, role, and business, only as approved"
  - "A usage log of where each testimonial may appear"
version: "1.0.0"
date_added: "2026-11-16"
safety_notes: "Never invents quotes, results, or customer names. Never edits a quote in a way that changes its meaning. Never publishes, posts, or sends a testimonial without the customer's explicit permission. Never shares private messages or contact details."
install_prompt: |
  To install the Testimonial Drafter skill, save the skill source below as ~/workspace/skills/testimonial-drafter/SKILL.md, then tell Muse to use it whenever you want to turn customer feedback into a testimonial.

  --- SOURCE ---
  ---
  name: testimonial-drafter
  description: Turn customer feedback, reviews, emails, and messages into short testimonial drafts, with a permission step before anything is published. Use when the user says "turn this feedback into a testimonial", "testimonial draft", "ask this customer for a testimonial", or pastes praise from a customer and wants to use it on a website, sales page, or social post.
  ---

  ## Purpose
  Turn real praise from customers into usable testimonials without inventing words, overstating results, or publishing anything the customer has not approved.

  ## Workflow
  1. Collect the raw material: ask for the feedback, review, email, or message, and note where it came from and when.
  2. Pull quotable lines: pick the strongest lines verbatim, with no added claims, numbers, or results that are not in the original words.
  3. Draft three lengths: a one-line version, a two to three sentence version, and a longer version for a case study or sales page, each clearly marked as a draft.
  4. Flag anything that needs checking: vague claims, results that need a number from the customer, and names or business details that must be confirmed before use.
  5. Write the permission request: a short message the user can send that shows the exact draft, names where it would appear, and asks for a yes, a no, or an edit, in one reply.
  6. Log the outcome: once the customer replies, record the approved wording, the attribution they agreed to, and where it may appear, and mark unapproved drafts as do not use.

  ## Output Contract
  - Source note: where the feedback came from, with the date if known.
  - Verbatim lines: the exact words chosen, quoted, with nothing added.
  - Three drafts: one-line, short, and long, each labeled as a draft.
  - Checks needed: any claim, number, name, or detail that still needs confirmation.
  - Permission message: ready to send, showing the exact draft and where it would appear.
  - Usage log entry: approved wording, approved attribution, and approved placements, or a do not use mark if permission was refused or never given.

  ## Operating Rules
  - Never invent a quote, a result, a number, or a customer name. If it is not in the source words, it does not go in the draft.
  - Never change the meaning of a quote when trimming it. If trimming would change the meaning, keep the longer version or drop the line.
  - Never publish, post, email, or share a testimonial with anyone except the customer it came from without that customer's explicit permission for that exact wording and placement. The permission request to that customer is the one allowed exception.
  - Quote only the verbatim lines chosen from the customer's feedback. Never include the rest of their private message, their email address, or their contact details in the draft or the permission request.
  - Keep attribution to what the customer approved: name, role, and business only as agreed, and use initials or first name only when that is what they chose.
  - If permission is refused or never answered, the draft stays marked do not use, and no follow-up pressure message is written.
source: |
  ---
  name: testimonial-drafter
  description: Turn customer feedback, reviews, emails, and messages into short testimonial drafts, with a permission step before anything is published. Use when the user says "turn this feedback into a testimonial", "testimonial draft", "ask this customer for a testimonial", or pastes praise from a customer and wants to use it on a website, sales page, or social post.
  ---

  ## Purpose
  Turn real praise from customers into usable testimonials without inventing words, overstating results, or publishing anything the customer has not approved.

  ## Workflow
  1. Collect the raw material: ask for the feedback, review, email, or message, and note where it came from and when.
  2. Pull quotable lines: pick the strongest lines verbatim, with no added claims, numbers, or results that are not in the original words.
  3. Draft three lengths: a one-line version, a two to three sentence version, and a longer version for a case study or sales page, each clearly marked as a draft.
  4. Flag anything that needs checking: vague claims, results that need a number from the customer, and names or business details that must be confirmed before use.
  5. Write the permission request: a short message the user can send that shows the exact draft, names where it would appear, and asks for a yes, a no, or an edit, in one reply.
  6. Log the outcome: once the customer replies, record the approved wording, the attribution they agreed to, and where it may appear, and mark unapproved drafts as do not use.

  ## Output Contract
  - Source note: where the feedback came from, with the date if known.
  - Verbatim lines: the exact words chosen, quoted, with nothing added.
  - Three drafts: one-line, short, and long, each labeled as a draft.
  - Checks needed: any claim, number, name, or detail that still needs confirmation.
  - Permission message: ready to send, showing the exact draft and where it would appear.
  - Usage log entry: approved wording, approved attribution, and approved placements, or a do not use mark if permission was refused or never given.

  ## Operating Rules
  - Never invent a quote, a result, a number, or a customer name. If it is not in the source words, it does not go in the draft.
  - Never change the meaning of a quote when trimming it. If trimming would change the meaning, keep the longer version or drop the line.
  - Never publish, post, email, or share a testimonial with anyone except the customer it came from without that customer's explicit permission for that exact wording and placement. The permission request to that customer is the one allowed exception.
  - Quote only the verbatim lines chosen from the customer's feedback. Never include the rest of their private message, their email address, or their contact details in the draft or the permission request.
  - Keep attribution to what the customer approved: name, role, and business only as agreed, and use initials or first name only when that is what they chose.
  - If permission is refused or never answered, the draft stays marked do not use, and no follow-up pressure message is written.
---

## What it includes

Good testimonials usually sit unused in inboxes, review pages, and chat threads, because turning praise into something a business can actually publish takes care. This skill starts from the real words a customer already wrote, pulls out the strongest lines exactly as written, and drafts them at three lengths: a one-line version for a homepage, a short version for a sales page, and a longer version for a case study. It flags anything that still needs checking, such as a vague result or a business detail that must be confirmed, and it writes a short permission message showing the exact draft and where it would appear, so the customer can approve, edit, or refuse it in one reply. Nothing is published before that permission is given, and every approved testimonial is logged with its wording, attribution, and allowed placements, while unapproved drafts stay marked do not use.

## Example

A shop owner pastes a kind email from a regular customer who says the new ordering system saved her team hours each week and made reorders simple. The skill quotes the strongest lines verbatim, then drafts a one-line version, a short version, and a longer version, and flags the hours claim as needing the customer's confirmation before it appears anywhere. It also writes a short permission message showing the short draft and naming the website homepage as the planned placement. The owner sends that message, the customer approves it with her name and shop named, and the skill logs the approved wording, attribution, and placement, ready to paste onto the site.
