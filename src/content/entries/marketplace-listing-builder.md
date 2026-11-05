---
title: "Marketplace Listing Builder"
tagline: "Turns item photos into a ready-to-post marketplace listing priced from recent sold prices."
category: "shopping"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/marketplace-listing-builder.md"
source_verified: true
origin: "directory"
includes:
  - "Item identification and details from photos"
  - "Price grounded in recent sold prices"
  - "One condition question photos cannot answer"
  - "Ready-to-post title and description"
  - "Bundle and repricing suggestions"
version: "1.0.0"
date_added: "2026-11-04"
safety_notes: "Never publishes, edits, or deletes a listing on any marketplace. Never contacts a buyer or seller. Prices come from comparable sold listings the user can check, never from a guess presented as fact. The user reviews and posts every listing themselves."
install_prompt: |
  To install the Marketplace Listing Builder skill, save the skill source below as ~/workspace/skills/marketplace-listing-builder/SKILL.md, then tell Muse to use it whenever you share photos of an item you want to sell.

  --- SOURCE ---
  ---
  name: marketplace-listing-builder
  description: Turn photos of an item into a ready-to-post listing for Facebook Marketplace, Craigslist, or eBay, with a price grounded in recent sold prices. Use when the user says "sell this", "list this for me", "what is this worth", "write a listing", or shares photos of an item they want to sell.
  ---

  ## Purpose
  Take the slow part out of selling household items: turning a few photos into a listing with a fair price. The skill reads what the photos show, checks what similar items actually sold for, asks the one question a photo cannot answer, and hands back a title, a description, and a price the user can post as is.

  ## Workflow
  1. Look at the photos: identify the item, brand, model, size, color, and any visible wear, damage, or missing parts. Note anything the photos cannot show.
  2. Ask the one question photos cannot answer: does it work, and what is its true condition? Wait for the answer before drafting.
  3. Check recent sold prices for the same or closest matching item on the marketplace the user names. Use sold prices, not asking prices, and say how many comparable sales the price rests on.
  4. Set a price: a starting price for a quick sale and, when the gap matters, the higher price a patient seller could ask.
  5. Draft the listing: a title with the words a buyer would search for, and a short description covering what it is, its condition, what is included, and pickup or shipping terms the user gives.
  6. Check the value floor: if the item is worth too little to sell alone, suggest a bundle with related items instead of a solo listing.
  7. If a listing sits without interest, draft repricing moves: a price drop, a title change, or a bundle, with the reason for each.

  ## Output Contract
  - An item summary: what the photos show, plus anything they cannot show.
  - The condition question, asked before any draft, and the user's answer reflected in the description.
  - A price with its basis: the comparable sold listings it rests on.
  - A ready-to-post title and description the user can copy.
  - A bundle suggestion when the item is worth too little alone, and repricing drafts when a listing sits.
  - Nothing is posted. The output is a draft for the user to review and publish.

  ## Operating Rules
  - Never publish, edit, or delete a listing, and never message a buyer or seller.
  - Never invent a detail the photos do not show. Mark anything unknown as unknown and ask.
  - Base prices on sold listings whenever they exist. If no comparable sales can be found, say so and label the price as an estimate.
  - Describe condition honestly, including flaws the user confirms, even when a softer wording would sell faster.
  - Keep personal details out of the listing text: no addresses, no phone numbers, no names.
source: |
  ---
  name: marketplace-listing-builder
  description: Turn photos of an item into a ready-to-post listing for Facebook Marketplace, Craigslist, or eBay, with a price grounded in recent sold prices. Use when the user says "sell this", "list this for me", "what is this worth", "write a listing", or shares photos of an item they want to sell.
  ---

  ## Purpose
  Take the slow part out of selling household items: turning a few photos into a listing with a fair price. The skill reads what the photos show, checks what similar items actually sold for, asks the one question a photo cannot answer, and hands back a title, a description, and a price the user can post as is.

  ## Workflow
  1. Look at the photos: identify the item, brand, model, size, color, and any visible wear, damage, or missing parts. Note anything the photos cannot show.
  2. Ask the one question photos cannot answer: does it work, and what is its true condition? Wait for the answer before drafting.
  3. Check recent sold prices for the same or closest matching item on the marketplace the user names. Use sold prices, not asking prices, and say how many comparable sales the price rests on.
  4. Set a price: a starting price for a quick sale and, when the gap matters, the higher price a patient seller could ask.
  5. Draft the listing: a title with the words a buyer would search for, and a short description covering what it is, its condition, what is included, and pickup or shipping terms the user gives.
  6. Check the value floor: if the item is worth too little to sell alone, suggest a bundle with related items instead of a solo listing.
  7. If a listing sits without interest, draft repricing moves: a price drop, a title change, or a bundle, with the reason for each.

  ## Output Contract
  - An item summary: what the photos show, plus anything they cannot show.
  - The condition question, asked before any draft, and the user's answer reflected in the description.
  - A price with its basis: the comparable sold listings it rests on.
  - A ready-to-post title and description the user can copy.
  - A bundle suggestion when the item is worth too little alone, and repricing drafts when a listing sits.
  - Nothing is posted. The output is a draft for the user to review and publish.

  ## Operating Rules
  - Never publish, edit, or delete a listing, and never message a buyer or seller.
  - Never invent a detail the photos do not show. Mark anything unknown as unknown and ask.
  - Base prices on sold listings whenever they exist. If no comparable sales can be found, say so and label the price as an estimate.
  - Describe condition honestly, including flaws the user confirms, even when a softer wording would sell faster.
  - Keep personal details out of the listing text: no addresses, no phone numbers, no names.
---

## What it includes

Selling a household item usually stalls at the same two jobs: figuring out what it is worth and writing the listing. This skill does both from photos. It identifies the item and its visible condition, asks the one question a photo cannot answer (does it work, and what shape is it really in), then checks recent sold prices for the same item so the price rests on what buyers paid, not on asking prices. It drafts a title built from search words and a short honest description, suggests a bundle when an item is worth too little to sell alone, and drafts repricing moves when a listing sits. It never posts anything; every listing is a draft the user approves and publishes.

## Example

You send three photos of a laser printer and say you want it gone this week. The skill identifies the make and model from the photos, notes a scuffed side panel, and asks whether it prints cleanly and how much toner is left. You say it prints fine with a half-full cartridge. The skill finds four recent sales of the same model between 40 and 65 dollars, prices yours at 45 for a fast sale, and drafts the listing: model and key specs in the title, condition and the toner level stated plainly, local pickup noted. Two weeks later, if it has not sold, you can ask for repricing moves and get a drop to 35 with a refreshed title.
