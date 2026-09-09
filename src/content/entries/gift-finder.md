---
title: "Gift Finder"
tagline: "Asks five questions about the recipient, then returns five gift ideas with links."
category: "shopping"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/gift-finder.md"
source_verified: false
origin: "directory"
includes: ["instructions", "interview"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Reads only the answers you give in the interview.
  Writes nothing outside the chat; it returns a shortlist and links.
  Never buys, orders, or checks out anything. Never stores payment details.
install_prompt: |
  Install the "Gift Finder" skill. Its full source is below. Create it at
  ~/workspace/skills/gift-finder/SKILL.md following skill-creator conventions
  (name and description frontmatter; Purpose, Workflow, Output Contract,
  Operating Rules sections). Then confirm it is installed and tell me the
  trigger phrases.

  --- SOURCE ---
  ---
  name: gift-finder
  description: Interviews the user with five short questions about a gift recipient, then returns a shortlist of five gifts with a one-line reason and a buy link each. Never buys anything. Trigger phrases: "help me find a gift", "gift ideas for", "what should I get", "gift finder".
  ---
  # Purpose

  Turn five short answers about a person into a shortlist of five gift
  ideas, each with a reason and a link to research further.

  # Workflow

  1. When the user asks for gift help, ask the five questions below, one
     at a time or as a short list, whichever the user prefers:
     1. Relationship to you (partner, parent, friend, coworker, etc.)
     2. Interests or hobbies
     3. Budget (a number or a range)
     4. Occasion
     5. What they already have, or anything to avoid duplicating
  2. If the user skips a question, proceed with what you have. Do not
     block on a missing answer more than once.
  3. Using the five answers, generate a shortlist of 5 distinct gift
     ideas. Spread them across the stated budget rather than clustering
     at one price point.
  4. For each idea, search for a real, currently available product using
     the assistant's own web search, and use the actual product page as
     the link. Do not invent a product name or a link.
  5. If a good match cannot be verified as currently available, replace
     it with one that can, rather than listing it anyway.
  6. Present the shortlist and stop. Do not add upsells, affiliate
     disclaimers, or an offer to buy.

  # Output Contract

  A numbered list of exactly 5 gifts, each formatted as:
  `<Gift name>: <one-line reason tied to the recipient's answers>: <link>`

  The reason names something specific from the interview (an interest, the
  occasion, or the budget), never a generic reason like "they'll love it."

  # Operating Rules

  - Never place an order, add to cart, or check out on any site.
  - Never ask for payment details, a shipping address, or an account
    login.
  - Never store the recipient's personal details beyond the current
    conversation.
  - Never invent a product, a price, or a link. Verify each with the
    assistant's own web search before including it.
  - Stay within the stated budget for every item on the list, unless the
    user asks for a stretch option.
source: |
  ---
  name: gift-finder
  description: Interviews the user with five short questions about a gift recipient, then returns a shortlist of five gifts with a one-line reason and a buy link each. Never buys anything. Trigger phrases: "help me find a gift", "gift ideas for", "what should I get", "gift finder".
  ---
  # Purpose

  Turn five short answers about a person into a shortlist of five gift
  ideas, each with a reason and a link to research further.

  # Workflow

  1. When the user asks for gift help, ask the five questions below, one
     at a time or as a short list, whichever the user prefers:
     1. Relationship to you (partner, parent, friend, coworker, etc.)
     2. Interests or hobbies
     3. Budget (a number or a range)
     4. Occasion
     5. What they already have, or anything to avoid duplicating
  2. If the user skips a question, proceed with what you have. Do not
     block on a missing answer more than once.
  3. Using the five answers, generate a shortlist of 5 distinct gift
     ideas. Spread them across the stated budget rather than clustering
     at one price point.
  4. For each idea, search for a real, currently available product using
     the assistant's own web search, and use the actual product page as
     the link. Do not invent a product name or a link.
  5. If a good match cannot be verified as currently available, replace
     it with one that can, rather than listing it anyway.
  6. Present the shortlist and stop. Do not add upsells, affiliate
     disclaimers, or an offer to buy.

  # Output Contract

  A numbered list of exactly 5 gifts, each formatted as:
  `<Gift name>: <one-line reason tied to the recipient's answers>: <link>`

  The reason names something specific from the interview (an interest, the
  occasion, or the budget), never a generic reason like "they'll love it."

  # Operating Rules

  - Never place an order, add to cart, or check out on any site.
  - Never ask for payment details, a shipping address, or an account
    login.
  - Never store the recipient's personal details beyond the current
    conversation.
  - Never invent a product, a price, or a link. Verify each with the
    assistant's own web search before including it.
  - Stay within the stated budget for every item on the list, unless the
    user asks for a stretch option.
---

Gift Finder runs a short interview, then hands back five real gift ideas
worth checking out.

It asks five questions: relationship, interests, budget, occasion, and what
the recipient already has. From your answers it builds a shortlist of five
gifts, spread across your budget, each with a one-line reason tied to what
you told it and a link to the actual product page. It never buys anything.
You decide, and you check out yourself, on the site you trust.

It needs honest answers to the five questions. A vague interest ("likes
stuff") gets a vaguer shortlist.

## What it includes

- A five-question interview about the gift recipient
- A shortlist of five gifts, each with a reason and a verified buy link
- No purchase, no cart, no stored payment or shipping details

## Example

**Input:** "Gift ideas for my sister. She's into hiking and pottery, budget
$60, it's her birthday, and she already has a good day pack."

**Output:**
1. Ceramic glazing starter kit: builds on her pottery hobby without
   duplicating gear she owns: [link]
2. Merino wool hiking socks (2-pack): useful on every hike, well under
   budget: [link]
3. Collapsible hiking mug: fits the hiking interest, leaves room in the
   $60 budget for a card: [link]
4. Pottery throwing tool set: a step up from basic tools for someone
   already into the craft: [link]
5. Trail map subscription (1 year): supports hiking without adding more
   gear to a pack she already has: [link]
