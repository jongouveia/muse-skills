---
title: "Personal Stylist"
tagline: "Turns your closet and a photo into outfits that fit your style, budget, and the occasion."
category: "creative"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/personal-stylist.md"
source_verified: false
origin: "directory"
includes:
  - "Outfit ideas built from clothes you already own"
  - "One photo or list of pieces, plus occasion and weather"
  - "A small swap for each outfit that changes the look"
  - "New-item suggestions only when they fill a real gap"
  - "Tailoring and fit notes, in plain language"
version: "1.0.0"
date_added: "2026-11-07"
safety_notes: "Never comments on a body type as a problem to fix. Never pushes a purchase; a new item is suggested only when it fills a real gap. Works from the pieces the user describes or photographs, and says plainly when a photo is too unclear to use."
install_prompt: |
  To install the Personal Stylist skill, save the skill source below as ~/workspace/skills/personal-stylist/SKILL.md, then tell Muse to use it whenever you need an outfit for an occasion and want ideas built from the clothes you already own.

  --- SOURCE ---
  ---
  name: personal-stylist
  description: Build outfits from your closet and a photo. Use when the user says "what should I wear", "style me", "outfit for", "what goes with this", or shares a photo of clothes and asks for outfit ideas.
  ---

  ## Purpose
  Turn the clothes a person already owns into outfits that fit the occasion, the weather, and their own taste. The skill starts with what is in the closet, builds complete outfits from those pieces, and suggests a new item only when it fills a real gap, so getting dressed takes minutes instead of a morning of second guessing.

  ## Workflow
  1. Gather the pieces: a list of clothes, or a photo of the closet, plus the occasion, the weather, and the budget for anything new.
  2. Note the constraints: dress code, comfort needs, colors the user likes, and pieces they never wear.
  3. Build outfits: complete combinations from owned pieces first, each one named piece by piece.
  4. Add one small swap per outfit: a rolled sleeve, a different belt, a layer added or removed, that changes the look without a new purchase.
  5. Suggest a new item only when it fills a gap: one piece that works with three or more outfits, with a price range and where to look.
  6. Flag fit and care: pieces that need tailoring, pieces that only work with one other item, and pieces that clash with the rest.

  ## Output Contract
  - Two or three complete outfits, each named piece by piece.
  - One small swap per outfit that changes the look.
  - A short note on why each outfit works for the occasion and the weather.
  - At most one new-item suggestion, with the gap it fills and a price range.
  - Fit notes: tailoring needed, or pieces that only pair with one other item.

  ## Operating Rules
  - Build from owned pieces first; a new purchase is the last resort, never the starting point.
  - Never comment on a body type as a problem to fix; style advice stays about the clothes.
  - Never push a brand or a store; name the item type and a price range instead.
  - Say plainly when a photo is too unclear to use, and ask for a list of pieces instead.
  - Keep the number of outfits small; three strong options beat ten weak ones.
source: |
  ---
  name: personal-stylist
  description: Build outfits from your closet and a photo. Use when the user says "what should I wear", "style me", "outfit for", "what goes with this", or shares a photo of clothes and asks for outfit ideas.
  ---

  ## Purpose
  Turn the clothes a person already owns into outfits that fit the occasion, the weather, and their own taste. The skill starts with what is in the closet, builds complete outfits from those pieces, and suggests a new item only when it fills a real gap, so getting dressed takes minutes instead of a morning of second guessing.

  ## Workflow
  1. Gather the pieces: a list of clothes, or a photo of the closet, plus the occasion, the weather, and the budget for anything new.
  2. Note the constraints: dress code, comfort needs, colors the user likes, and pieces they never wear.
  3. Build outfits: complete combinations from owned pieces first, each one named piece by piece.
  4. Add one small swap per outfit: a rolled sleeve, a different belt, a layer added or removed, that changes the look without a new purchase.
  5. Suggest a new item only when it fills a gap: one piece that works with three or more outfits, with a price range and where to look.
  6. Flag fit and care: pieces that need tailoring, pieces that only work with one other item, and pieces that clash with the rest.

  ## Output Contract
  - Two or three complete outfits, each named piece by piece.
  - One small swap per outfit that changes the look.
  - A short note on why each outfit works for the occasion and the weather.
  - At most one new-item suggestion, with the gap it fills and a price range.
  - Fit notes: tailoring needed, or pieces that only pair with one other item.

  ## Operating Rules
  - Build from owned pieces first; a new purchase is the last resort, never the starting point.
  - Never comment on a body type as a problem to fix; style advice stays about the clothes.
  - Never push a brand or a store; name the item type and a price range instead.
  - Say plainly when a photo is too unclear to use, and ask for a list of pieces instead.
  - Keep the number of outfits small; three strong options beat ten weak ones.
---

## What it includes

Most of us own clothes we never wear together, because pairing pieces takes more thought than a busy morning allows. This skill starts with what you already own: a quick list of your pieces, or a photo of your closet, plus the occasion, the weather, and your budget for anything new. It builds outfits from those pieces first, and only suggests a new item when it fills a real gap, such as shoes that work with three outfits instead of one. Each outfit names the pieces, why they work together, and one small swap that changes the look, such as rolling sleeves or switching a belt. It flags anything that needs tailoring, or any piece that only works with one other item. It never pushes a purchase, and it never treats a body type as a problem to fix.

## Example

You are dressing for a job interview on a cool morning and you send a photo of your closet. The skill spots your navy blazer, white shirt, grey trousers, brown leather shoes, and a plain white tee, and builds two outfits from them.

Outfit 1: navy blazer, white shirt, grey trousers, brown leather shoes. Small swap: button the shirt to the collar for a formal room, or leave the top button open for a relaxed one. Why it works: the navy and grey keep it clean and professional, and the blazer covers the cool morning.

Outfit 2: navy blazer, white tee, grey trousers, brown leather shoes. Small swap: wear the white shirt open over the tee as a light layer. Why it works: it keeps the interview polish with less formality, which suits a casual office, and the blazer still handles the cold.

It suggests one new item only: a plain brown leather belt, about $25 to $60. The gap it fills is that your closet has no belt, so the grey trousers look unfinished in both outfits, and a brown belt matches your brown shoes. It also notes the blazer sleeves run long and would benefit from a quick tailor visit before the big day, and that the white tee only works under the blazer for an interview, so it pairs with one other item.
