---
title: "Vinyl Vault"
tagline: "Catalogs your record collection from photos or lists and tracks its value."
category: "creative"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/vinyl-vault.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "wantlist"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Reads only the photos and lists you give it in the chat.
  Writes one catalog file and one wantlist file in your workspace.
  Never buys or lists a record. Never contacts a seller or a marketplace.
install_prompt: |
  Install the "Vinyl Vault" skill. Its full source is below. Create it at
  ~/workspace/skills/vinyl-vault/SKILL.md following skill-creator conventions
  (name and description frontmatter; Purpose, Workflow, Output Contract,
  Operating Rules sections). Then confirm it is installed and tell me the
  trigger phrases.

  --- SOURCE ---
  ---
  name: vinyl-vault
  description: Catalogs a vinyl record collection from photos or pasted lists (artist, title, pressing, condition), keeps a wantlist, and estimates collection value from recent sold prices. Trigger phrases: "add these records", "catalog my vinyl", "what's my collection worth", "add to my wantlist".
  ---
  # Purpose

  Track a vinyl record collection: what you own, its condition, its
  estimated value, and what you want next.

  # Workflow

  1. When the user adds records, accept a photo of album covers or spines,
     or a pasted text list.
  2. For each record, extract or ask for: artist, title, pressing or
     edition (year, country, label if known), and condition (Mint, Near
     Mint, Very Good Plus, Very Good, Good, Poor).
  3. If condition is missing, ask once. Do not guess a condition.
  4. Append each new record to `collection.md` in the workspace, one row
     per record, with the date added.
  5. When the user says a title, artist, or "wantlist", add it to
     `wantlist.md` with the date added. Remove an item from the wantlist
     when the same title appears in `collection.md`.
  6. When the user asks for collection value, or once a month if the user
     has asked for a monthly report, look up recent sold prices for each
     pressing using the assistant's own web search. Match on artist,
     title, and pressing details. Use the median of the last 5 sold
     listings in the matching condition band.
  7. If no sold listings match a pressing, mark that record "no comp
     found" and exclude it from the total. Do not estimate from an
     unrelated pressing.
  8. Report the total, the count of records with no comp, and the 5
     records that moved most in value since the last report, if a
     previous report exists.

  # Output Contract

  - `collection.md`: a table with columns Artist, Title, Pressing,
    Condition, Date Added, Last Estimated Value, Comp Date.
  - `wantlist.md`: a table with columns Artist, Title, Date Added, Notes.
  - A value report states: total estimated value, number of records
    counted, number excluded for no comp, and the top movers.
  - Every value in a report carries its comp date. A value never appears
    without one.

  # Operating Rules

  - Never buy, bid on, or list a record on any marketplace.
  - Never contact a seller, dealer, or marketplace on the user's behalf.
  - Never invent a pressing detail or a sold price. State "no comp found"
    instead.
  - Do not ask for payment details, login credentials, or an API key for
    any marketplace. Use only the assistant's own web search for comps.
  - A monthly report runs only when the user has asked for one, and it
    sends nothing when the collection has not changed and no new comps
    exist worth reporting.
source: |
  ---
  name: vinyl-vault
  description: Catalogs a vinyl record collection from photos or pasted lists (artist, title, pressing, condition), keeps a wantlist, and estimates collection value from recent sold prices. Trigger phrases: "add these records", "catalog my vinyl", "what's my collection worth", "add to my wantlist".
  ---
  # Purpose

  Track a vinyl record collection: what you own, its condition, its
  estimated value, and what you want next.

  # Workflow

  1. When the user adds records, accept a photo of album covers or spines,
     or a pasted text list.
  2. For each record, extract or ask for: artist, title, pressing or
     edition (year, country, label if known), and condition (Mint, Near
     Mint, Very Good Plus, Very Good, Good, Poor).
  3. If condition is missing, ask once. Do not guess a condition.
  4. Append each new record to `collection.md` in the workspace, one row
     per record, with the date added.
  5. When the user says a title, artist, or "wantlist", add it to
     `wantlist.md` with the date added. Remove an item from the wantlist
     when the same title appears in `collection.md`.
  6. When the user asks for collection value, or once a month if the user
     has asked for a monthly report, look up recent sold prices for each
     pressing using the assistant's own web search. Match on artist,
     title, and pressing details. Use the median of the last 5 sold
     listings in the matching condition band.
  7. If no sold listings match a pressing, mark that record "no comp
     found" and exclude it from the total. Do not estimate from an
     unrelated pressing.
  8. Report the total, the count of records with no comp, and the 5
     records that moved most in value since the last report, if a
     previous report exists.

  # Output Contract

  - `collection.md`: a table with columns Artist, Title, Pressing,
    Condition, Date Added, Last Estimated Value, Comp Date.
  - `wantlist.md`: a table with columns Artist, Title, Date Added, Notes.
  - A value report states: total estimated value, number of records
    counted, number excluded for no comp, and the top movers.
  - Every value in a report carries its comp date. A value never appears
    without one.

  # Operating Rules

  - Never buy, bid on, or list a record on any marketplace.
  - Never contact a seller, dealer, or marketplace on the user's behalf.
  - Never invent a pressing detail or a sold price. State "no comp found"
    instead.
  - Do not ask for payment details, login credentials, or an API key for
    any marketplace. Use only the assistant's own web search for comps.
  - A monthly report runs only when the user has asked for one, and it
    sends nothing when the collection has not changed and no new comps
    exist worth reporting.
---

Vinyl Vault catalogs a vinyl collection from photos of album covers or a pasted
list, and tracks what each record is worth.

Send a photo or a list, and it records the artist, title, pressing, and
condition for each item. Ask for the collection's value, and it pulls recent
sold prices for each pressing and reports a total, with any record it could
not price called out by name. Ask it to watch for something, and it keeps a
wantlist that clears itself once you own the title.

It needs clear photos or accurate pasted details, and an honest condition
grade, since the value estimate depends on both.

## What it includes

- A running catalog of the collection with pressing and condition detail
- A wantlist that tracks titles you're chasing
- A value report built from recent sold prices, run on request or monthly

## Example

**Input:** "Add these: Blue Note Miles Davis Kind of Blue, 1959 mono
pressing, Very Good Plus. Also add Radiohead Kid A to my wantlist."

**Output:** "Added Miles Davis, Kind of Blue (1959 mono, VG+) to your
collection. Added Radiohead, Kid A to your wantlist. Want a value estimate
for the Miles Davis pressing now, or with your next monthly report?"
