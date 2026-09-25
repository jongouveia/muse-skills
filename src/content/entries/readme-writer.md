---
title: "README Writer"
tagline: "Points at a repo, gets a real README draft: setup, usage, config."
category: "dev"
type: "prompt"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/readme-writer.md"
source_verified: false
origin: "directory"
includes: ["prompt-text"]
version: "1.0.0"
date_added: 2026-09-14
safety_notes: |
  Drafts documentation from the repo you point it at. Never
  commits or publishes anything.
install_prompt: |
  Install the "README Writer" prompt pack. Its full source is
  below. Save it to ~/workspace/prompts/readme-writer.md (create
  the folder if needed). Then confirm it is installed and show me
  the full text.

  --- SOURCE ---
  This prompt pack drafts a README from a repository.
  Paste it into Muse along with the repo path or contents.

  > Write a README for this repo. Structure: (1) one-paragraph
  > what and why, (2) quickstart, the exact commands to go from
  > clone to running, (3) configuration, every env var and
  > config file with what it does, (4) usage, the main commands
  > or API with one example each, (5) development, how to run
  > tests and contribute. Rules: every command must come from
  > the repo itself (package.json, Makefile, docs), never
  > invent a command, (2) mark anything you couldn't verify with
  > [unverified], (3) keep it scannable, headers, code blocks,
  > no paragraphs over 4 lines. Do not commit; just draft it.
source: |
  This prompt pack drafts a README from a repository.
  Paste it into Muse along with the repo path or contents.

  > Write a README for this repo. Structure: (1) one-paragraph
  > what and why, (2) quickstart, the exact commands to go from
  > clone to running, (3) configuration, every env var and
  > config file with what it does, (4) usage, the main commands
  > or API with one example each, (5) development, how to run
  > tests and contribute. Rules: every command must come from
  > the repo itself (package.json, Makefile, docs), never
  > invent a command, (2) mark anything you couldn't verify with
  > [unverified], (3) keep it scannable, headers, code blocks,
  > no paragraphs over 4 lines. Do not commit; just draft it.
---

README Writer is a prompt pack for the repo with no README. Point it
at the code and get a real draft: what and why, exact quickstart
commands, every env var explained, usage examples, and dev setup.
Every command comes from the repo itself; anything unverified gets
marked.

## What it includes

- What-and-why intro paragraph
- Verified quickstart commands
- Full config and env var reference
- Usage examples and dev setup

## Example

Input: a small CLI tool repo with a package.json and .env.example.

Output (abridged):

```markdown
# bill-tracker

Watches recurring charges and reports monthly totals.

## Quickstart
npm install
cp .env.example .env
npm start

## Configuration
| Var | What it does |
| DATABASE_URL | Postgres connection [unverified] |
```
