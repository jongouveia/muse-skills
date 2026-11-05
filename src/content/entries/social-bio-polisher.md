---
title: "Social Bio Polisher"
tagline: "Turns your bio facts into platform-ready bios for LinkedIn, X, Instagram, and your site."
category: "creative"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/social-bio-polisher.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "platform-rules", "bio-versions"]
version: "1.0.0"
date_added: 2026-10-23
safety_notes: |
  It never invents titles, employers, credentials, or numbers
  for you, and it flags any claim it cannot verify from what
  you provided. It writes from your facts only, in your voice,
  and it never posts or sends a bio for you.
install_prompt: |
  Install the "Social Bio Polisher" skill. Its full source is
  below. Create it at ~/workspace/skills/social-bio-polisher/SKILL.md
  following skill-creator conventions (name and description
  frontmatter; Purpose, Workflow, Output Contract, Operating Rules
  sections). Then confirm it is installed and tell me the trigger
  phrases.

  --- SOURCE ---
  ---
  name: social-bio-polisher
  description: Turns a pile of raw bio facts into platform-ready bios: a LinkedIn headline and opener, an X bio, an Instagram bio, and a short about-page bio, each within that platform's limits and conventions. Trigger phrases: "polish my bio", "rewrite my profile bio", "write my LinkedIn bio", "bios for social media", "about page bio".
  ---
  # Purpose

  Do one narrow job: take your raw facts (what you do, who you
  help, proof points, links, voice notes) and turn them into a
  matching set of bios, one per platform, each shaped to that
  platform's limits and conventions. A LinkedIn headline, an X
  bio at 160 characters, an Instagram bio at 150 with line
  breaks that scan on a phone, and a two-paragraph about-page
  bio, all in one voice, all specific, none stuffed with
  buzzwords. The point: every profile you own sounds like the
  same person, and the strongest one, without you rewriting the
  same paragraph four times.

  # Workflow

  1. Gather the facts before drafting: name, what you do, who
     you help, your proof points (years, clients, numbers,
     ships), one personality or voice note, and any links that
     matter. Ask for what is missing; never invent a title,
     employer, or stat.
  2. Draft the LinkedIn version first: a headline under 220
     characters with searchable keywords, plus a two-line about
     opener that states who you help and how.
  3. Cut it down for X: one or two lines, 160 characters max,
     keywords front-loaded, one link-safe line. Then the
     Instagram bio: 150 characters max, stacked lines that scan
     on a phone, one clear call to action or link intent.
  4. Expand for the about page: two to three short paragraphs,
     same voice, a human detail at the end that the short
     versions had no room for.
  5. Present all versions side by side with a character count on
     each, and add a one-sentence "elevator" bio you can drop
     anywhere: intros, panels, bylines.

  # Output Contract

  - LinkedIn: headline (with character count) plus a two-line about opener
  - X bio: 160 characters max, with character count
  - Instagram bio: 150 characters max, stacked lines, with character count
  - About-page bio: two to three short paragraphs
  - One-sentence elevator bio
  - A note on anything you still need to confirm (a number, a title, a link)

  # Operating Rules

  - Never invent titles, employers, credentials, or numbers.
    Flag any claim that came only from assumption and ask.
  - Keep one voice across all four versions; the platforms
    change the shape, not the person.
  - Prefer specific claims over buzzword adjectives; cut
    "passionate" unless the user insists.
  - Respect each platform's character limits exactly; show the
    count on every short bio.
  - Ask for missing facts instead of filling them in.
source: |
  ---
  name: social-bio-polisher
  description: Turns a pile of raw bio facts into platform-ready bios: a LinkedIn headline and opener, an X bio, an Instagram bio, and a short about-page bio, each within that platform's limits and conventions. Trigger phrases: "polish my bio", "rewrite my profile bio", "write my LinkedIn bio", "bios for social media", "about page bio".
  ---
  # Purpose

  Do one narrow job: take your raw facts (what you do, who you
  help, proof points, links, voice notes) and turn them into a
  matching set of bios, one per platform, each shaped to that
  platform's limits and conventions. A LinkedIn headline, an X
  bio at 160 characters, an Instagram bio at 150 with line
  breaks that scan on a phone, and a two-paragraph about-page
  bio, all in one voice, all specific, none stuffed with
  buzzwords. The point: every profile you own sounds like the
  same person, and the strongest one, without you rewriting the
  same paragraph four times.

  # Workflow

  1. Gather the facts before drafting: name, what you do, who
     you help, your proof points (years, clients, numbers,
     ships), one personality or voice note, and any links that
     matter. Ask for what is missing; never invent a title,
     employer, or stat.
  2. Draft the LinkedIn version first: a headline under 220
     characters with searchable keywords, plus a two-line about
     opener that states who you help and how.
  3. Cut it down for X: one or two lines, 160 characters max,
     keywords front-loaded, one link-safe line. Then the
     Instagram bio: 150 characters max, stacked lines that scan
     on a phone, one clear call to action or link intent.
  4. Expand for the about page: two to three short paragraphs,
     same voice, a human detail at the end that the short
     versions had no room for.
  5. Present all versions side by side with a character count on
     each, and add a one-sentence "elevator" bio you can drop
     anywhere: intros, panels, bylines.

  # Output Contract

  - LinkedIn: headline (with character count) plus a two-line about opener
  - X bio: 160 characters max, with character count
  - Instagram bio: 150 characters max, stacked lines, with character count
  - About-page bio: two to three short paragraphs
  - One-sentence elevator bio
  - A note on anything you still need to confirm (a number, a title, a link)

  # Operating Rules

  - Never invent titles, employers, credentials, or numbers.
    Flag any claim that came only from assumption and ask.
  - Keep one voice across all four versions; the platforms
    change the shape, not the person.
  - Prefer specific claims over buzzword adjectives; cut
    "passionate" unless the user insists.
  - Respect each platform's character limits exactly; show the
    count on every short bio.
  - Ask for missing facts instead of filling them in.
---

Most people have four versions of their bio and none of them
match. Social Bio Polisher starts with your raw facts, what you
do, who you help, the numbers that prove it, the human detail
that makes you memorable, and turns them into a coordinated
set: a LinkedIn headline with searchable keywords and a sharp
about opener, an X bio that fits the 160-character limit, an
Instagram bio stacked in phone-friendly lines, and a short
about-page bio with room for personality.

Every version is built from facts you supplied, never invented.
If you hand it a stat, it asks whether you can stand behind it
before it goes in print. Each short bio arrives with its
character count, so there is no paste-it-and-hope. And the whole
set shares one voice, because the platforms change the shape,
not the person.

You also get a one-sentence elevator bio for the places with no
format at all: intros, panels, bylines, conference badges. One
round of facts in, five usable bios out.

## What it includes

- A LinkedIn headline and two-line about opener with searchable keywords
- An X bio at 160 characters max, with character count
- An Instagram bio at 150 characters max, stacked for phone reading
- A two-to-three-paragraph about-page bio
- A one-sentence elevator bio for intros and bylines

## Example

Input: "Freelance bookkeeper, 8 years, mostly restaurants and coffee shops, helped one bakery cut month-end close from 10 days to 3, weekend cyclist, based in Portland ME."

Output:

```
LinkedIn headline (85): Bookkeeping for restaurants and
cafes | 8 yrs closing the books faster | Portland, ME

LinkedIn about opener: I keep the books for restaurants and
coffee shops. One bakery went from a 10-day month-end close
to a 3-day close.

X bio (120): Bookkeeper, 8 yrs. Restaurants + coffee shops.
Helped one bakery cut month-end close from 10 days to 3.
Weekend cyclist.

Instagram bio (93):
Bookkeeping for food businesses
Month-end close: 3 days, not 10
Portland ME | weekend cyclist

About page: I am a freelance bookkeeper in Portland, Maine. For
eight years I have worked mostly with restaurants and coffee
shops.

My clients want clean numbers without a long wait. One bakery
cut its month-end close from 10 days to 3.

When I am not reconciling accounts, I am out on my bike.

Elevator: "I am a freelance bookkeeper with eight years in
restaurants and coffee shops, including cutting one bakery's
month-end close from 10 days to 3."

Confirm: your website link and whether the bakery may be named.
```
