---
title: "Appliance Manual Finder"
tagline: "Turns a brand and model number into key manual facts: settings, care, and error codes."
category: "home"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/appliance-manual-finder.md"
source_verified: false
origin: "directory"
includes: ["manual lookup", "settings summary", "cleaning tasks", "error code meanings", "appliance record"]
version: "1.0.0"
date_added: "2026-10-26"
safety_notes: "Never invents settings, intervals, or error code meanings. Never advises opening sealed parts or touching wiring, gas, or refrigerant lines. Never buys parts, books service, or contacts the maker for the user."
install_prompt: |
  To install the Appliance Manual Finder skill, save the skill source below as ~/workspace/skills/appliance-manual-finder/SKILL.md, then tell Muse to use it whenever you need an appliance manual.

  --- SOURCE ---
  ---
  name: appliance-manual-finder
  description: Find the manual for a home appliance from its brand and model number, then pull out the settings, maintenance, and error codes that matter. Use when the user says "find my appliance manual", "appliance manual", "what does this error code mean", "how do I clean my dishwasher filter", or gives a brand and model number for a washer, dryer, dishwasher, fridge, oven, or other home appliance.
  ---

  ## Purpose
  Turn a brand and model number, or a photo of the rating plate, into the manual facts the user actually needs, without making them read a long PDF cover to cover.

  ## Workflow
  1. Identify the appliance: ask for brand, model number, and appliance type. If the user has only a photo of the rating plate, read the brand and model from it and confirm them before proceeding.
  2. Locate the manual: point the user to the maker's official manual page or document when one is known, and note the exact model the manual covers.
  3. Extract what matters: everyday settings, filter and cleaning tasks with intervals, and the error codes the user asked about, each with the manual's stated fix.
  4. Flag mismatches: if the model number is partial or matches a different series, say so plainly and ask the user to confirm the full number from the rating plate.
  5. Produce the manual brief (see Output Contract) and keep a one-line appliance record the user can reuse next time.

  ## Output Contract
  - Appliance line: brand, model, type, and manual source.
  - Settings that matter: a short list of the modes or settings the user asked about, in plain words.
  - Care tasks: filter, cleaning, and part replacement tasks with the manual's interval for each.
  - Error codes: each code asked about, what it means, and the manual's fix, in that order.
  - Anything not found in the manual is marked "not in the manual" rather than guessed.

  ## Operating Rules
  - Never invent a model number, setting, interval, or error code meaning. If it is not in the manual or the maker page, say it is not found.
  - Never tell the user to open sealed parts, touch wiring, gas lines, or refrigerant lines. For those fixes, say to call a qualified technician.
  - Never claim a manual covers a model it does not. Partial model matches are flagged, not assumed.
  - Keep answers short: the brief first, then the details the user asked for, nothing more.
  - Do not buy parts, book service, or contact the maker on the user's behalf.
source: |
  ---
  name: appliance-manual-finder
  description: Find the manual for a home appliance from its brand and model number, then pull out the settings, maintenance, and error codes that matter. Use when the user says "find my appliance manual", "appliance manual", "what does this error code mean", "how do I clean my dishwasher filter", or gives a brand and model number for a washer, dryer, dishwasher, fridge, oven, or other home appliance.
  ---

  ## Purpose
  Turn a brand and model number, or a photo of the rating plate, into the manual facts the user actually needs, without making them read a long PDF cover to cover.

  ## Workflow
  1. Identify the appliance: ask for brand, model number, and appliance type. If the user has only a photo of the rating plate, read the brand and model from it and confirm them before proceeding.
  2. Locate the manual: point the user to the maker's official manual page or document when one is known, and note the exact model the manual covers.
  3. Extract what matters: everyday settings, filter and cleaning tasks with intervals, and the error codes the user asked about, each with the manual's stated fix.
  4. Flag mismatches: if the model number is partial or matches a different series, say so plainly and ask the user to confirm the full number from the rating plate.
  5. Produce the manual brief (see Output Contract) and keep a one-line appliance record the user can reuse next time.

  ## Output Contract
  - Appliance line: brand, model, type, and manual source.
  - Settings that matter: a short list of the modes or settings the user asked about, in plain words.
  - Care tasks: filter, cleaning, and part replacement tasks with the manual's interval for each.
  - Error codes: each code asked about, what it means, and the manual's fix, in that order.
  - Anything not found in the manual is marked "not in the manual" rather than guessed.

  ## Operating Rules
  - Never invent a model number, setting, interval, or error code meaning. If it is not in the manual or the maker page, say it is not found.
  - Never tell the user to open sealed parts, touch wiring, gas lines, or refrigerant lines. For those fixes, say to call a qualified technician.
  - Never claim a manual covers a model it does not. Partial model matches are flagged, not assumed.
  - Keep answers short: the brief first, then the details the user asked for, nothing more.
  - Do not buy parts, book service, or contact the maker on the user's behalf.
---

## What it includes

Appliance manuals are long, and the one fact you need is usually buried on page forty. This skill starts from the brand and model number, or from a photo of the rating plate if that is all you have, and finds the maker's manual for that exact model. It pulls out only what matters: the settings you asked about in plain words, the filter and cleaning tasks with the intervals the manual states, and the error codes you saw, each with the manual's stated fix. If a model number is partial or points at a different series, it flags the mismatch instead of guessing, and anything it cannot find in the manual is marked as not found. The result is a short brief you can use right away, plus a one-line appliance record you can reuse the next time something blinks.

## Example

You move into a place with a dishwasher and no manual, and all you have is a photo of the rating plate inside the door. The skill reads the brand and model from the photo, confirms them with you, and finds the maker's manual for that model. You ask about the blinking code on the panel and the filter, and it returns a short brief: what the code means and what the manual says to try first, the filter cleaning task with the interval the manual states, and the normal and eco cycles explained in plain words. The manual source is named, and the appliance record is saved for next time.
