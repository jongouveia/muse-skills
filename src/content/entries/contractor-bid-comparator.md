---
title: "Contractor Bid Comparator"
tagline: "Paste two or three quotes; get them normalized line by line."
category: "home"
type: "prompt"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/contractor-bid-comparator.md"
source_verified: true
origin: "directory"
includes: ["prompt-text"]
version: "1.0.0"
date_added: 2026-09-10
safety_notes: |
  Compares the quotes you paste. Never contacts a contractor.
install_prompt: |
  Install the "Contractor Bid Comparator" prompt pack. Its full
  source is below. Save it to
  ~/workspace/prompts/contractor-bid-comparator.md (create the
  folder if needed). Then confirm it is installed and show me the
  full text.

  --- SOURCE ---
  This prompt pack normalizes contractor quotes so you can compare them.
  Paste it into Muse along with the quotes.

  > Compare these contractor quotes line by line. Normalize them
  > into one table: labor, materials, permits, timeline, warranty,
  > payment schedule. Then tell me: (1) which bid is actually
  > cheapest once scope is equalized, (2) what each bid leaves
  > out that the others include : the gaps are where surprise
  > charges hide, (3) any red flags: no license number, full
  > payment upfront, vague materials ("quality shingles"),
  > timeline with no start date, and (4) three questions to ask
  > each contractor before deciding. Do not recommend a winner
  > outright : lay out the trade-offs and let me choose.
source: |
  This prompt pack normalizes contractor quotes so you can compare them.
  Paste it into Muse along with the quotes.

  > Compare these contractor quotes line by line. Normalize them
  > into one table: labor, materials, permits, timeline, warranty,
  > payment schedule. Then tell me: (1) which bid is actually
  > cheapest once scope is equalized, (2) what each bid leaves
  > out that the others include : the gaps are where surprise
  > charges hide, (3) any red flags: no license number, full
  > payment upfront, vague materials ("quality shingles"),
  > timeline with no start date, and (4) three questions to ask
  > each contractor before deciding. Do not recommend a winner
  > outright : lay out the trade-offs and let me choose.
---

Contractor Bid Comparator is a prompt pack for the pile of quotes
that don't line up. Paste two or three; get one normalized table ,
labor, materials, permits, timeline, warranty, payment : plus the
gaps where surprise charges hide, red flags, and three questions to
ask each contractor.

## What it includes

- Normalized line-by-line comparison table
- True cheapest once scope is equalized
- Gap analysis and red-flag scan
- Three questions per contractor

## Example

Input: three roof quotes , $12k, $9.5k, $14k.

Output (abridged):

```
Normalized: the $9.5k bid excludes permits and dumpster fees
(+$1,800) and lists "30-year shingles" with no brand. True
comparison: $11.3k vs $12k vs $14k.

Red flags: the $9.5k bid wants 50% upfront.

Ask each: exact shingle brand and model, start date in writing,
who pulls the permit.
```
