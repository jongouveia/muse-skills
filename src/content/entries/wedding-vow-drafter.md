---
title: "Wedding Vow Drafter"
tagline: "Turns a couple's story, promises, and tone into short vows each partner can say aloud."
category: "creative"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/wedding-vow-drafter.md"
source_verified: false
origin: "directory"
includes: ["story interview", "three vow drafts", "length check", "promise list", "read-aloud pass"]
version: "1.0.0"
date_added: "2026-10-31"
safety_notes: "Never invents memories, stories, or promises the couple did not name. Never copies published vows or song lyrics. Never pressures a partner into a tone they do not want. The drafts are starting points: the couple's own words always win."
install_prompt: |
  To install the Wedding Vow Drafter skill, save the skill source below as ~/workspace/skills/wedding-vow-drafter/SKILL.md, then tell Muse to use it whenever you want help writing wedding vows.

  --- SOURCE ---
  ---
  name: wedding-vow-drafter
  description: Turn a couple's story, promises, and preferred tone into short, speakable wedding vow drafts. Use when the user says "write my vows", "wedding vows", "help with vows", "vow draft", "what should I promise", or wants help writing vows for a wedding or commitment ceremony.
  ---

  ## Purpose
  Turn what a couple actually knows about each other into vows they can say out loud with a straight face: specific promises, real moments, and a tone that sounds like them, kept short enough to deliver without rushing.

  ## Workflow
  1. Interview each partner separately or together: how they met, one early memory, one hard time they got through, three qualities they admire in the other person, and what they want to promise going forward.
  2. Build the promise list: turn each intention into a specific, keepable promise, for example "I promise to call before I am late" instead of "I promise to always be there".
  3. Draft three versions per partner: one sincere, one lighthearted, one mix of both. Each draft opens with a line about the other person, states two or three promises, and closes with a single clear line.
  4. Check length: each draft should read aloud in about two minutes. Cut filler lines and repeated ideas until it fits.
  5. Read-aloud pass: read each draft back slowly and flag any line that is hard to say, sounds borrowed, or does not match the tone the partner picked. Offer a plainer rewrite for each flagged line.
  6. Deliver the drafts: present each partner's three versions side by side, with the promise list attached, and note which lines each partner can mix and match.

  ## Output Contract
  - Interview notes: the moments, qualities, and intentions each partner named, in their own words where possible.
  - Promise list: each promise as a single specific sentence, grouped by partner.
  - Three drafts per partner: sincere, lighthearted, and mixed, each about two minutes spoken.
  - Read-aloud notes: flagged lines with a plainer rewrite offered for each.
  - Questions: anything missing, such as the tone, the ceremony style, or a memory only one partner can supply, asked instead of invented.

  ## Operating Rules
  - Never invent a memory, story, or promise the couple did not name. If a draft needs a detail, ask for it.
  - Never copy published vows, poems, or song lyrics. Every line must be original to the couple.
  - Never push a tone a partner did not pick. If one partner wants sincere and the other wants funny, draft each in their own tone.
  - Never make a promise sound grander than the couple means it. Keep promises specific and keepable.
  - Never present a draft as finished. Vows are personal: the couple edits, and the skill reworks the draft from their edits.
  - If the couple is stuck on where to start, offer three opening lines built only from facts they already gave, and let them pick one.
source: |
  ---
  name: wedding-vow-drafter
  description: Turn a couple's story, promises, and preferred tone into short, speakable wedding vow drafts. Use when the user says "write my vows", "wedding vows", "help with vows", "vow draft", "what should I promise", or wants help writing vows for a wedding or commitment ceremony.
  ---

  ## Purpose
  Turn what a couple actually knows about each other into vows they can say out loud with a straight face: specific promises, real moments, and a tone that sounds like them, kept short enough to deliver without rushing.

  ## Workflow
  1. Interview each partner separately or together: how they met, one early memory, one hard time they got through, three qualities they admire in the other person, and what they want to promise going forward.
  2. Build the promise list: turn each intention into a specific, keepable promise, for example "I promise to call before I am late" instead of "I promise to always be there".
  3. Draft three versions per partner: one sincere, one lighthearted, one mix of both. Each draft opens with a line about the other person, states two or three promises, and closes with a single clear line.
  4. Check length: each draft should read aloud in about two minutes. Cut filler lines and repeated ideas until it fits.
  5. Read-aloud pass: read each draft back slowly and flag any line that is hard to say, sounds borrowed, or does not match the tone the partner picked. Offer a plainer rewrite for each flagged line.
  6. Deliver the drafts: present each partner's three versions side by side, with the promise list attached, and note which lines each partner can mix and match.

  ## Output Contract
  - Interview notes: the moments, qualities, and intentions each partner named, in their own words where possible.
  - Promise list: each promise as a single specific sentence, grouped by partner.
  - Three drafts per partner: sincere, lighthearted, and mixed, each about two minutes spoken.
  - Read-aloud notes: flagged lines with a plainer rewrite offered for each.
  - Questions: anything missing, such as the tone, the ceremony style, or a memory only one partner can supply, asked instead of invented.

  ## Operating Rules
  - Never invent a memory, story, or promise the couple did not name. If a draft needs a detail, ask for it.
  - Never copy published vows, poems, or song lyrics. Every line must be original to the couple.
  - Never push a tone a partner did not pick. If one partner wants sincere and the other wants funny, draft each in their own tone.
  - Never make a promise sound grander than the couple means it. Keep promises specific and keepable.
  - Never present a draft as finished. Vows are personal: the couple edits, and the skill reworks the draft from their edits.
  - If the couple is stuck on where to start, offer three opening lines built only from facts they already gave, and let them pick one.
---

## What it includes

Most vow drafts fail the same way: they sound like a card aisle, they run long, and they promise everything in general while saying nothing in particular. This skill starts with an interview, not a template: how the couple met, one early memory, one hard time they got through, and the qualities each partner admires in the other. Those answers become a promise list where vague intentions turn into specific, keepable promises, like calling before running late instead of promising to always be there. Each partner gets three drafts, one sincere, one lighthearted, and one mix of both, each sized to about two minutes spoken. A read-aloud pass then flags any line that is hard to say or sounds borrowed, with a plainer rewrite offered for each. The couple keeps editing from there, mixing lines across drafts until the words sound like them.

## Example

An engaged couple wants vows that are warm but not mushy. The skill interviews them and learns they met volunteering at a food bank, survived a cross-country move in a car with no air conditioning, and admire each other's patience and humor. It builds a promise list with lines like "I promise to keep making room for your terrible puns at breakfast" and "I promise to show up, even when the plan falls apart." Each partner gets three drafts, sincere, lighthearted, and mixed, each about two minutes long. The read-aloud pass flags one borrowed-sounding line and offers a plainer version built from their food bank story, and the couple picks the mixed draft as their base.
