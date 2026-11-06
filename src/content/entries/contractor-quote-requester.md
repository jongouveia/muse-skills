---
title: "Contractor Quote Requester"
tagline: "Turns a job description into a clear quote request you can send to three contractors."
category: "productivity"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/contractor-quote-requester.md"
source_verified: false
origin: "directory"
includes:
  - "Job brief with scope, materials, and timeline"
  - "Quote request message ready to send to each contractor"
  - "Apples-to-apples quote comparison table"
  - "Questions that surface hidden costs and exclusions"
  - "Red-flag checklist for vague or one-line quotes"
version: "1.0.0"
date_added: "2026-11-06"
safety_notes: "Never contacts a contractor; you approve the exact message for each one and send it yourself. Never recommends a contractor or vouches for one; the user checks licenses, insurance, and references. Never invents a price or a timeline. Flags quotes that skip permits, materials, or cleanup so the user can ask before signing."
install_prompt: |
  To install the Contractor Quote Requester skill, save the skill source below as ~/workspace/skills/contractor-quote-requester/SKILL.md, then tell Muse to use it whenever you need quotes for a job and want the replies to be easy to compare.

  --- SOURCE ---
  ---
  name: contractor-quote-requester
  description: Turn a job description into a clear quote request for contractors. Use when the user says "get quotes", "contractor quote", "quote request", "compare contractor quotes", "hire a contractor", or describes a job and asks what to send to contractors to get comparable prices.
  ---

  ## Purpose
  Turn a job description into a quote request that gets complete, comparable answers. A vague ask gets vague quotes: one contractor includes cleanup, another does not, and the prices cannot be compared. This skill writes one clear brief for you to send to every contractor, then lines the replies up in a table so the differences are easy to see.

  ## Workflow
  1. Collect the job: what needs doing, where, measurements, materials, and the timeline. Ask for photos when they help a contractor price the work.
  2. Draft the request: scope, specs, materials, site access, timeline, and exactly what the quote must include, in one message ready to send.
  3. Show the exact message for each contractor. The user approves each message and sends it themselves, to three contractors when possible, so every reply answers the same questions. Never send a message for the user.
  4. Build the comparison table: price, materials, labor, timeline, warranty, payment schedule, and exclusions, one column per contractor.
  5. List the follow-up questions: permits, cleanup, disposal, change orders, and anything a quote left out.
  6. Flag the red flags: one-line quotes, no materials listed, no timeline, or a price far below the rest with no explanation.

  ## Output Contract
  - A job brief: scope, specs, materials, access, and timeline.
  - A quote request message ready to send to each contractor.
  - A comparison table: price, materials, labor, timeline, warranty, and exclusions per contractor.
  - A follow-up questions list for anything a quote left out.
  - A red-flag checklist for vague or one-line quotes.

  ## Operating Rules
  - Never invent a price, a timeline, or a material. If a number is missing, ask for it or mark the brief as partial.
  - Never recommend a contractor or vouch for one; the user checks licenses, insurance, and references.
  - Never send a message to a contractor. The user approves the exact message for each contractor and sends it themselves.
  - Use the same brief for every contractor so the quotes stay comparable.
  - Flag any quote that skips permits, materials, cleanup, or disposal, and say what to ask before signing.
  - Keep the comparison table honest: mark what a quote left out instead of guessing it.
source: |
  ---
  name: contractor-quote-requester
  description: Turn a job description into a clear quote request for contractors. Use when the user says "get quotes", "contractor quote", "quote request", "compare contractor quotes", "hire a contractor", or describes a job and asks what to send to contractors to get comparable prices.
  ---

  ## Purpose
  Turn a job description into a quote request that gets complete, comparable answers. A vague ask gets vague quotes: one contractor includes cleanup, another does not, and the prices cannot be compared. This skill writes one clear brief for you to send to every contractor, then lines the replies up in a table so the differences are easy to see.

  ## Workflow
  1. Collect the job: what needs doing, where, measurements, materials, and the timeline. Ask for photos when they help a contractor price the work.
  2. Draft the request: scope, specs, materials, site access, timeline, and exactly what the quote must include, in one message ready to send.
  3. Show the exact message for each contractor. The user approves each message and sends it themselves, to three contractors when possible, so every reply answers the same questions. Never send a message for the user.
  4. Build the comparison table: price, materials, labor, timeline, warranty, payment schedule, and exclusions, one column per contractor.
  5. List the follow-up questions: permits, cleanup, disposal, change orders, and anything a quote left out.
  6. Flag the red flags: one-line quotes, no materials listed, no timeline, or a price far below the rest with no explanation.

  ## Output Contract
  - A job brief: scope, specs, materials, access, and timeline.
  - A quote request message ready to send to each contractor.
  - A comparison table: price, materials, labor, timeline, warranty, and exclusions per contractor.
  - A follow-up questions list for anything a quote left out.
  - A red-flag checklist for vague or one-line quotes.

  ## Operating Rules
  - Never invent a price, a timeline, or a material. If a number is missing, ask for it or mark the brief as partial.
  - Never recommend a contractor or vouch for one; the user checks licenses, insurance, and references.
  - Never send a message to a contractor. The user approves the exact message for each contractor and sends it themselves.
  - Use the same brief for every contractor so the quotes stay comparable.
  - Flag any quote that skips permits, materials, cleanup, or disposal, and say what to ask before signing.
  - Keep the comparison table honest: mark what a quote left out instead of guessing it.
---

## What it includes

Getting quotes for a job usually starts with a vague message and ends with three prices that cannot be compared, because each contractor guessed at a different scope. This skill fixes the ask first. It turns the job description into one clear brief with the scope, the specs, the materials, the site access, and the timeline, plus a list of exactly what the quote must include. You approve the exact message for each contractor and send it yourself, to three contractors when possible, and the skill lines the replies up in a table: price, materials, labor, timeline, warranty, payment schedule, and exclusions, one column per contractor. It also writes the follow-up questions for anything a quote left out, like permits, cleanup, or disposal, and flags red flags such as one-line quotes, missing materials, or a price far below the rest with no explanation. It never recommends a contractor or vouches for one; checking licenses, insurance, and references stays your call.

## Example

You need a 10 by 14 foot shed assembled and roofed, and you have three local builders in mind. You give the shed kit details, the pad size, and your timeline. The skill returns each item in the Output Contract.

**Job brief:** Assemble a 10 by 14 foot shed kit on your pad and roof it with architectural shingles, drip edge, and felt. Access is through the side gate, and the timeline is the one you gave.

**Quote request message:** One message ready to send, spelling out assembly, roofing materials, access, timeline, and cleanup, and asking each builder to list price, materials, labor, timeline, warranty, and exclusions. You approve the exact message for each builder and send it yourself.

**Comparison table:** All three builders reply to the same brief. Anything a quote left out is marked, not guessed.

| | Builder A | Builder B | Builder C |
|---|---|---|---|
| Price | 1,800 dollars | 1,500 dollars | 1,200 dollars |
| Materials | Listed | Listed | Not listed |
| Labor | Included | Included | Not stated |
| Timeline | 2 days | 3 days | Not stated |
| Warranty | 1 year on labor | Not stated | Not stated |
| Exclusions | None, cleanup included | Cleanup not listed | Not stated |

**Follow-up questions:** Ask builder B whether cleanup and debris disposal are included. Ask builder C for a materials list, a timeline, and a warranty. Ask all three about permits and change orders.

**Red-flag checklist:** Builder C is flagged as vague: no materials, no timeline, no warranty, and the lowest price with no explanation. Builder B is flagged for the missing cleanup line, so the cheapest price does not win by hiding the real cost.
