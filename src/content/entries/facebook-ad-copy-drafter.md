---
title: "Facebook Ad Copy Drafter"
tagline: "Product and audience in; three ad variants with different hooks out."
category: "marketing"
type: "prompt"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/facebook-ad-copy-drafter.md"
source_verified: false
origin: "directory"
includes: ["instructions", "ad-templates"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Uses only the product and audience details you provide. Writes
  only the ad drafts back to you. Never creates campaigns or
  spends anything.
install_prompt: |
  Save this as a reusable prompt pack named "Facebook Ad Copy
  Drafter" and confirm what it does.

  --- SOURCE ---
  # Facebook Ad Copy Drafter

  How to use: describe the product and the audience. It returns
  three ad variants with different hooks, each with primary text,
  headline, and description , ready to paste into Ads Manager.
  Save it as a reusable prompt pack named "Facebook Ad Copy Drafter".

  ## The prompt

  Draft Facebook ad copy. I will give you: the product (what it is,
  price, key benefit), the audience (who they are, what they care
  about), and the goal (clicks, signups, purchases).

  1. Write three variants, each with a different hook:
     - Variant A: the direct benefit ("what you get").
     - Variant B: the pain point ("what's broken now").
     - Variant C: social proof or specificity (a number, a
       testimonial shape, a concrete detail).
  2. Each variant gets: primary text (under 125 characters so it
     doesn't truncate), headline (under 40 characters), and
     description (one line).
  3. Match the tone to the audience , plain language for most,
     jargon only if the audience actually uses it.
  4. End with one line per variant: who this hook is for and when
     to use it.

  Rules: no false urgency ("only 3 left!") unless it is true. No
  claims you can't back up. Never create or launch a campaign :
  drafts only.
source: |
  # Facebook Ad Copy Drafter

  How to use: describe the product and the audience. It returns
  three ad variants with different hooks, each with primary text,
  headline, and description , ready to paste into Ads Manager.
  Save it as a reusable prompt pack named "Facebook Ad Copy Drafter".

  ## The prompt

  Draft Facebook ad copy. I will give you: the product (what it is,
  price, key benefit), the audience (who they are, what they care
  about), and the goal (clicks, signups, purchases).

  1. Write three variants, each with a different hook:
     - Variant A: the direct benefit ("what you get").
     - Variant B: the pain point ("what's broken now").
     - Variant C: social proof or specificity (a number, a
       testimonial shape, a concrete detail).
  2. Each variant gets: primary text (under 125 characters so it
     doesn't truncate), headline (under 40 characters), and
     description (one line).
  3. Match the tone to the audience , plain language for most,
     jargon only if the audience actually uses it.
  4. End with one line per variant: who this hook is for and when
     to use it.

  Rules: no false urgency ("only 3 left!") unless it is true. No
  claims you can't back up. Never create or launch a campaign :
  drafts only.
---

Facebook Ad Copy Drafter turns a product description and an audience
into three ready-to-paste ad variants: the direct benefit, the pain
point, and the social-proof angle. Each comes with primary text,
headline, and description sized to Facebook's limits.

## What it includes

- Three hook variants (benefit / pain / proof)
- Character-limited primary text, headline, description
- Audience-matched tone
- One-line guidance on when to use each variant

## Example

Input: "hand-poured soy candles, $24, audience: women 25-44 who buy home decor."

Output (abridged):

```
Variant A (benefit):
Primary: Your living room, but it smells like a cabin weekend. (71)
Headline: Hand-Poured Soy Candles (24)
Description: 40-hour burn, cotton wick, $24.

Variant B (pain): Tired of candles that smell great for a day and
nothing by Friday? ...

Variant C (proof): 2,000+ five-star reviews. One scent people
reorder: Cedar & Smoke. ...
```
