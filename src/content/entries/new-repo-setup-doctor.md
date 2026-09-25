---
title: "New-Repo Setup Doctor"
tagline: "Fresh-repo checklist that ends 'works on my machine' syndrome."
category: "dev"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/new-repo-setup-doctor.md"
source_verified: true
origin: "directory"
includes: ["instructions", "workflow", "checklist"]
version: "1.0.0"
date_added: 2026-09-10
safety_notes: |
  Runs read-only checks against the repo you point it at. Suggests
  fixes; runs nothing destructive and never asks for credentials.
install_prompt: |
  Install the "New-Repo Setup Doctor" skill. Its full source is
  below. Create it at
  ~/workspace/skills/new-repo-setup-doctor/SKILL.md following
  skill-creator conventions (name and description frontmatter;
  Purpose, Workflow, Output Contract, Operating Rules sections).
  Then confirm it is installed and tell me the trigger phrases.

  --- SOURCE ---
  ---
  name: new-repo-setup-doctor
  description: Diagnose a fresh repo checkout that won't build or run, environment, dependencies, and config checks in order, with the fix for each failure. Trigger phrases: "this repo won't build", "help me set up this repo", "diagnose my dev environment".
  ---
  # Purpose

  Fresh checkouts fail for boring reasons: wrong runtime version,
  missing env vars, a step the README forgot. This skill runs the
  checks in the order that finds the boring reason fastest.

  # Workflow

  1. Ask the user for the repo path (or use the current
     directory) and what "working" means: builds, tests pass,
     dev server starts.
  2. Run the checks in order, stopping at the first failure
     with its fix:
     - Runtime version vs. what the repo declares (.nvmrc,
       .python-version, go.mod, package.json engines)
     - Package manager and lockfile present; dependencies
       installed (node_modules, venv, etc.)
     - Required env vars / config files (.env.example vs .env)
     - External services the README mentions (database, redis)
       reachable or clearly mocked
     - Build / test / dev-server command from the README
  3. For each failure: what failed, why it matters, the exact
     command or edit to fix it. Then re-run the check.
  4. Report in the Output Contract shape.

  # Output Contract

  - Verdict: working, or the step it fails at
  - Checks: pass/fail per check, one line each
  - Fixes applied: what was changed, in order
  - Still broken: the failing step, the error, and the next
    thing to try

  # Operating Rules

  - Read-only diagnosis first. Propose every fix before
    running it; apply only what the user approves.
  - Never invent credentials. Missing secrets get a "create
    this" instruction, not a placeholder that gets committed.
  - Never commit, push, or force-install. The repo's history
    is the user's.
  - If the README's setup steps are wrong, say so and note
    the correction: that feedback is half the value.
source: |
  ---
  name: new-repo-setup-doctor
  description: Diagnose a fresh repo checkout that won't build or run, environment, dependencies, and config checks in order, with the fix for each failure. Trigger phrases: "this repo won't build", "help me set up this repo", "diagnose my dev environment".
  ---
  # Purpose

  Fresh checkouts fail for boring reasons: wrong runtime version,
  missing env vars, a step the README forgot. This skill runs the
  checks in the order that finds the boring reason fastest.

  # Workflow

  1. Ask the user for the repo path (or use the current
     directory) and what "working" means: builds, tests pass,
     dev server starts.
  2. Run the checks in order, stopping at the first failure
     with its fix:
     - Runtime version vs. what the repo declares (.nvmrc,
       .python-version, go.mod, package.json engines)
     - Package manager and lockfile present; dependencies
       installed (node_modules, venv, etc.)
     - Required env vars / config files (.env.example vs .env)
     - External services the README mentions (database, redis)
       reachable or clearly mocked
     - Build / test / dev-server command from the README
  3. For each failure: what failed, why it matters, the exact
     command or edit to fix it. Then re-run the check.
  4. Report in the Output Contract shape.

  # Output Contract

  - Verdict: working, or the step it fails at
  - Checks: pass/fail per check, one line each
  - Fixes applied: what was changed, in order
  - Still broken: the failing step, the error, and the next
    thing to try

  # Operating Rules

  - Read-only diagnosis first. Propose every fix before
    running it; apply only what the user approves.
  - Never invent credentials. Missing secrets get a "create
    this" instruction, not a placeholder that gets committed.
  - Never commit, push, or force-install. The repo's history
    is the user's.
  - If the README's setup steps are wrong, say so and note
    the correction: that feedback is half the value.
---

New-Repo Setup Doctor diagnoses the fresh checkout that won't build.
It checks runtime version, dependencies, env config, and external
services in the order that finds the boring failure fastest: and
proposes each fix before touching anything.

## What it includes

- Ordered environment and dependency checks
- Per-failure fix with the exact command
- README accuracy feedback
- No destructive actions, ever

## Example

Output:

```
Verdict: fails at "dev server starts"

Checks:
- Node version: pass (20.x matches .nvmrc)
- Dependencies: pass
- Env config: FAIL, .env missing, .env.example has 4 vars

Fix: copied .env.example to .env; fill in DATABASE_URL.
Re-ran: dev server starts. Working.
```
