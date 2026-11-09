---
title: "Warranty Claim Helper"
tagline: "Turns a broken product and its warranty terms into a ready-to-send claim draft."
category: "productivity"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/warranty-claim-helper.md"
source_verified: false
origin: "directory"
includes:
  - "Coverage check against the warranty terms you paste in"
  - "Evidence checklist: receipt, photos, serial number, and dates"
  - "Claim draft ready to send to the maker or retailer"
  - "Plain verdict when coverage has expired or the damage is excluded"
  - "Follow-up tracker with claim number and dates"
version: "1.0.0"
date_added: "2026-11-09"
safety_notes: "Never files the claim for you; you always send it yourself. Never invents a purchase date, serial number, or receipt. Says plainly when coverage has expired or the damage looks excluded, instead of drafting a claim that cannot succeed."
install_prompt: |
  To install the Warranty Claim Helper skill, save the skill source below as ~/workspace/skills/warranty-claim-helper/SKILL.md, then tell Muse to use it whenever a product breaks and you need to file a warranty claim.

  --- SOURCE ---
  ---
  name: warranty-claim-helper
  description: Help file a warranty claim for a broken product. Use when a product breaks under warranty, when the user wants to check what a warranty covers, or when they need a claim draft with the proof to attach.
  ---

  ## Purpose
  Turn a broken product and a warranty document into a claim that is ready to send. The skill reads the warranty terms, checks what is covered and what is excluded, lists the proof the maker will ask for, and drafts the claim message with the facts filled in. It is the filing step, not a tracker: it starts when something breaks and ends with a draft you can send.

  ## Workflow
  1. Collect the facts: product name and model, serial number if there is one, purchase date and place, and what went wrong and when.
  2. Read the warranty terms the user pastes in: coverage length, what is covered, what is excluded, and how claims are filed.
  3. Give a coverage verdict: covered, likely excluded, or expired, with the exact term that decides it quoted in plain words.
  4. Build the evidence checklist: receipt or order record, photos of the fault, serial number photo, and any prior repair notes.
  5. Draft the claim: a short message to the maker or retailer with the product facts, the fault, the warranty term that covers it, and the remedy asked for.
  6. Set up the follow-up: claim number, date sent, and the next date to chase it if no reply comes.

  ## Output Contract
  - A coverage verdict with the deciding warranty term in plain words.
  - An evidence checklist with each item marked as have it, need it, or not applicable.
  - A claim draft ready to send, with product facts, fault, covering term, and remedy asked for.
  - A follow-up note: where to send the claim, the claim number once filed, and the date to chase it.

  ## Operating Rules
  - Never file the claim for the user; the user always sends it.
  - Never invent a purchase date, serial number, or receipt. If a fact is missing, ask for it or mark it as missing.
  - Say plainly when coverage has expired or the damage looks excluded, and do not draft a claim that cannot succeed.
  - Quote the deciding warranty term in plain words so the user can check it.
  - Keep the draft short and factual, with no extra blame or apology.
source: |
  ---
  name: warranty-claim-helper
  description: Help file a warranty claim for a broken product. Use when a product breaks under warranty, when the user wants to check what a warranty covers, or when they need a claim draft with the proof to attach.
  ---

  ## Purpose
  Turn a broken product and a warranty document into a claim that is ready to send. The skill reads the warranty terms, checks what is covered and what is excluded, lists the proof the maker will ask for, and drafts the claim message with the facts filled in. It is the filing step, not a tracker: it starts when something breaks and ends with a draft you can send.

  ## Workflow
  1. Collect the facts: product name and model, serial number if there is one, purchase date and place, and what went wrong and when.
  2. Read the warranty terms the user pastes in: coverage length, what is covered, what is excluded, and how claims are filed.
  3. Give a coverage verdict: covered, likely excluded, or expired, with the exact term that decides it quoted in plain words.
  4. Build the evidence checklist: receipt or order record, photos of the fault, serial number photo, and any prior repair notes.
  5. Draft the claim: a short message to the maker or retailer with the product facts, the fault, the warranty term that covers it, and the remedy asked for.
  6. Set up the follow-up: claim number, date sent, and the next date to chase it if no reply comes.

  ## Output Contract
  - A coverage verdict with the deciding warranty term in plain words.
  - An evidence checklist with each item marked as have it, need it, or not applicable.
  - A claim draft ready to send, with product facts, fault, covering term, and remedy asked for.
  - A follow-up note: where to send the claim, the claim number once filed, and the date to chase it.

  ## Operating Rules
  - Never file the claim for the user; the user always sends it.
  - Never invent a purchase date, serial number, or receipt. If a fact is missing, ask for it or mark it as missing.
  - Say plainly when coverage has expired or the damage looks excluded, and do not draft a claim that cannot succeed.
  - Quote the deciding warranty term in plain words so the user can check it.
  - Keep the draft short and factual, with no extra blame or apology.
---

## What it includes

A broken appliance or gadget leaves you with a warranty document, a receipt somewhere, and a claim form that wants exact facts. This skill takes the product details, the purchase record, and the warranty terms you paste in, then checks what is covered and what is excluded and gives a plain verdict: covered, likely excluded, or expired, with the deciding term quoted in plain words. It builds an evidence checklist for the receipt, photos of the fault, the serial number, and any prior repair notes, marking each one as have it, need it, or not applicable. Then it drafts the claim message with the product facts, the fault, the covering term, and the remedy you want, ready to send to the maker or retailer. It also sets up the follow-up, with the claim number, the date sent, and the date to chase it if no reply comes. It never files the claim for you, and it never invents a purchase date, serial number, or receipt. If coverage has expired or the damage looks excluded, it says so instead of drafting a claim that cannot succeed.

## Example

Your two year old blender stops spinning, and the maker offers a three year limited warranty that covers the motor but not the jar. You paste in the warranty terms and the order record. The skill confirms the motor is covered, lists the receipt, a photo of the serial plate, and a short video of the fault as the evidence to attach, and drafts a message asking for a motor replacement under the three year term. It notes the date to send it and the date to chase it if the maker has not replied in a week.
