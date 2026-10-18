---
title: "Review Responder"
tagline: "Turns customer reviews, good and bad, into on-brand public replies that defuse complaints and make promoters feel seen."
category: "marketing"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/review-responder.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "reply-templates", "tone-calibration"]
version: "1.0.0"
date_added: 2026-10-18
safety_notes: |
  Drafts replies only. It never posts a reply to any review site on
  your behalf; you always review and post. It never reveals private
  customer data in a public reply, and it never admits fault or
  promises compensation you did not approve. It never fabricates
  facts about what happened; if the complaint is unclear, it asks
  for context instead of guessing.
install_prompt: |
  Install the "Review Responder" skill. Its full source is
  below. Create it at ~/workspace/skills/review-responder/SKILL.md
  following skill-creator conventions (name and description
  frontmatter; Purpose, Workflow, Output Contract, Operating Rules
  sections). Then confirm it is installed and tell me the trigger
  phrases.

  --- SOURCE ---
  ---
  name: review-responder
  description: Drafts on-brand public replies to customer reviews: defuses bad reviews, thanks good ones, and moves real problems offline. Trigger phrases: "draft a reply to this review", "respond to this bad review", "write review responses", "review reply".
  ---
  # Purpose

  Do one narrow job: turn raw customer reviews into public replies
  worth publishing. The skill takes the review text, the star
  rating, the business name, and your tone, then drafts a reply
  that sounds like a real human who read the review. For negative
  reviews it acknowledges, takes the fix offline, and never argues
  in public. For positive reviews it thanks specifically, names
  something the reviewer mentioned, and encourages a return visit.
  You always review and post; the skill only drafts.

  # Workflow

  1. Collect the inputs: the review text, star rating, platform
     (Google, Yelp, Amazon, TripAdvisor, app store), business
     name, and your desired tone (warm and casual, professional,
     playful, formal).
  2. Classify the review: praise, complaint, mixed, or
     spam/suspicious. Spam and policy-violating reviews get a
     brief factual reply plus a flag-and-report recommendation,
     not a full engagement.
  3. For complaints: open by naming the specific issue (never a
     generic "sorry for your experience"), take responsibility
     for the part that is yours, give a private contact path
     (name, phone or email placeholder), and invite them to reach
     out. Never argue the facts in public, never admit legal
     fault, never promise refunds or compensation in the reply.
  4. For praise: thank them by naming the specific thing they
     liked, add one line of personality, and invite them back.
     Skip the hard sell; a genuine reply earns more than a coupon.
  5. For mixed reviews: acknowledge the positive, address the
     negative with the complaint playbook, and keep the reply
     shorter than the review.
  6. Produce two versions: the recommended reply and a shorter
     alternate. Both stay under 100 words unless the platform
     norms differ. Ask for the business details you need before
     drafting.

  # Output Contract

  - The review classification (praise, complaint, mixed, or spam)
  - A recommended reply under 100 words, ready to copy
  - A shorter alternate version
  - A one-line note on what to fill in (contact name, phone,
    order details) before posting
  - For spam: a brief reply plus a flag-and-report recommendation

  # Operating Rules

  - Never post anything to a review site; you draft, the owner
    posts.
  - Never include private customer details in a public reply.
  - Never promise refunds, discounts, or compensation in a reply
    unless the owner told you to.
  - Never argue with the reviewer in public, even when they are
    wrong. Take it offline.
  - Never invent facts about what happened. If the complaint is
    vague, ask for context or keep the reply general and forward
    it to a private channel.
  - Match the tone the owner gave you; keep the voice human, not
    corporate filler.
source: |
  ---
  name: review-responder
  description: Drafts on-brand public replies to customer reviews: defuses bad reviews, thanks good ones, and moves real problems offline. Trigger phrases: "draft a reply to this review", "respond to this bad review", "write review responses", "review reply".
  ---
  # Purpose

  Do one narrow job: turn raw customer reviews into public replies
  worth publishing. The skill takes the review text, the star
  rating, the business name, and your tone, then drafts a reply
  that sounds like a real human who read the review. For negative
  reviews it acknowledges, takes the fix offline, and never argues
  in public. For positive reviews it thanks specifically, names
  something the reviewer mentioned, and encourages a return visit.
  You always review and post; the skill only drafts.

  # Workflow

  1. Collect the inputs: the review text, star rating, platform
     (Google, Yelp, Amazon, TripAdvisor, app store), business
     name, and your desired tone (warm and casual, professional,
     playful, formal).
  2. Classify the review: praise, complaint, mixed, or
     spam/suspicious. Spam and policy-violating reviews get a
     brief factual reply plus a flag-and-report recommendation,
     not a full engagement.
  3. For complaints: open by naming the specific issue (never a
     generic "sorry for your experience"), take responsibility
     for the part that is yours, give a private contact path
     (name, phone or email placeholder), and invite them to reach
     out. Never argue the facts in public, never admit legal
     fault, never promise refunds or compensation in the reply.
  4. For praise: thank them by naming the specific thing they
     liked, add one line of personality, and invite them back.
     Skip the hard sell; a genuine reply earns more than a coupon.
  5. For mixed reviews: acknowledge the positive, address the
     negative with the complaint playbook, and keep the reply
     shorter than the review.
  6. Produce two versions: the recommended reply and a shorter
     alternate. Both stay under 100 words unless the platform
     norms differ. Ask for the business details you need before
     drafting.

  # Output Contract

  - The review classification (praise, complaint, mixed, or spam)
  - A recommended reply under 100 words, ready to copy
  - A shorter alternate version
  - A one-line note on what to fill in (contact name, phone,
    order details) before posting
  - For spam: a brief reply plus a flag-and-report recommendation

  # Operating Rules

  - Never post anything to a review site; you draft, the owner
    posts.
  - Never include private customer details in a public reply.
  - Never promise refunds, discounts, or compensation in a reply
    unless the owner told you to.
  - Never argue with the reviewer in public, even when they are
    wrong. Take it offline.
  - Never invent facts about what happened. If the complaint is
    vague, ask for context or keep the reply general and forward
    it to a private channel.
  - Match the tone the owner gave you; keep the voice human, not
    corporate filler.
---

Review replies are one of the cheapest marketing moves a small
business can make, and one of the most neglected. A thoughtful
reply to a one-star review tells every future customer how you
handle trouble; a warm reply to a five-star review tells them how
you treat people when things go well. Review Responder drafts both
kinds: replies that sound like a human who actually read the
review, in the tone you choose, ready to copy and post.

The skill starts by classifying the review. Praise, complaint,
mixed, and spam each get a different playbook. Complaints open by
naming the specific issue, never a generic apology, and the fix
moves to a private channel with a named contact. The reply never
argues in public, never admits legal fault, and never promises
refunds or compensation you did not approve. Praise gets a
specific thank you that names what the reviewer liked, plus one
line of personality and an invitation to come back. Mixed reviews
get the short version of both. Spam gets a brief factual reply and
a flag-and-report recommendation instead of engagement.

Every draft comes in two lengths: the recommended reply and a
shorter alternate, both under 100 words. A one-line note tells you
what to fill in before posting, like the contact name or phone
number. The skill drafts only; it never posts to a review site, and
it never puts private customer details in a public reply. You
review, you post, the voice stays human instead of corporate.

## What it includes

- A review classification step: praise, complaint, mixed, or spam
- A complaint playbook: name the issue, take it offline, never argue in public
- A praise playbook: specific thanks, one line of personality, a return invitation
- Two reply versions per review, both under 100 words, plus fill-in notes
- A tone calibration: warm and casual, professional, playful, or formal

## Example

Input: 2-star Google review for a cafe: "The latte was great but I
waited 20 minutes and nobody acknowledged me. Felt invisible."

Output:

```
Classification: complaint.

Recommended reply:
"We hear you, and that wait is not our standard. You should have
been greeted the moment you walked in. I'd like to make this
right personally. Please call or text me at [phone], ask for
[manager name]. Thanks for the kind word on the latte, and for
giving us the chance to fix this. - [manager name], [cafe name]"

Shorter alternate:
"Thank you for telling us. A 20-minute wait with no acknowledgment
is not how we run this place. Please reach out at [phone] and ask
for [manager name], I'd like to make this right. - [cafe name]"

Fill in before posting: manager name, phone number.
```
