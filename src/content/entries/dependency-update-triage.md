---
title: "Dependency Update Triage"
tagline: "Turns a scary outdated-dependencies list into safe-now, review, and hold buckets."
category: "dev"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/dependency-update-triage.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "report"]
version: "1.0.0"
date_added: 2026-09-30
safety_notes: |
  Read-only by default. It classifies updates and writes a report.
  Never runs an install, upgrade, or migration command, and never
  edits package files or lockfiles, unless you explicitly approve
  each command first.
install_prompt: |
  Install the "Dependency Update Triage" skill. Its full source is below. Create it
  at ~/workspace/skills/dependency-update-triage/SKILL.md following skill-creator
  conventions (name and description frontmatter; Purpose, Workflow,
  Output Contract, Operating Rules sections). Then confirm it is
  installed and tell me the trigger phrases.

  --- SOURCE ---
  ---
  name: dependency-update-triage
  description: Classify outdated dependencies into safe-now, needs-review, and hold buckets from package manager output, with an upgrade order. Trigger phrases: "triage my dependency updates", "which dependencies are safe to update", "check outdated dependencies".
  ---
  # Purpose

  An outdated-dependencies list is a wall of version numbers that hides
  the two or three updates that actually matter. Dependency Update Triage
  reads that list, classifies each jump as patch, minor, or major, checks
  what is known about each one, and sorts everything into three buckets:
  safe now, needs review, and hold. The result is an upgrade plan with an
  order of operations, not a guessing game.

  # Workflow

  1. Collect the outdated list. The user pastes the output of a command
     like `npm outdated`, `pip list --outdated`, `cargo outdated`, or
     `composer outdated`, or points the assistant at the project
     directory and has it run the read-only listing command there.
  2. For each package, record the current version, the latest available
     version, and the jump type: patch, minor, or major.
  3. For every major jump, look at the actual changelog or release notes.
     Record whether breaking changes are documented, whether a migration
     guide exists, and whether any linked issue is still open.
  4. Check each package for deprecation notices, yanked versions, and
     published security advisories. Note the source of each finding.
  5. Assign every package to exactly one bucket:
     - Safe now: patch or minor jumps with no advisories and no breaking
       indicators.
     - Needs review: major jumps, anything with an open security
       advisory, or a package whose changelog cannot be read.
     - Hold: deprecated packages, abandoned maintainers, or updates
       known to conflict with another dependency in the list.
  6. Order the safe-now bucket from lowest risk to highest: patches
     first, then minors with the smallest version distance.
  7. Write the report in the Output Contract shape and send it.

  # Output Contract

  One line per package, grouped by bucket in this order: Safe now,
  Needs review, Hold. Each line carries:

  - Package: name
  - Current to latest: "1.4.2 to 1.4.9"
  - Jump: patch, minor, or major
  - Note: one short reason for the bucket (for example, "major with
    migration guide" or "CVE-2026-1140 fixed in latest")

  End with a suggested order: apply Safe now first, lowest risk to
  highest, then tackle Needs review one at a time. Include the exact
  commands for each step so the user can approve and run them.

  # Operating Rules

  - Never run an install, upgrade, or migration command without the
    user approving that exact command first.
  - Never edit package.json, requirements files, Cargo.toml, lockfiles,
    or vendored code. Classification is read-only work.
  - Never invent changelog contents. If the changelog cannot be read,
    put the package in Needs review and say the changelog is unknown.
  - Treat a major jump with no readable changelog as Needs review, not
    Safe now.
  - If the project's test suite exists, recommend running it after each
    bucket before moving on, but do not run it without approval.
source: |
  ---
  name: dependency-update-triage
  description: Classify outdated dependencies into safe-now, needs-review, and hold buckets from package manager output, with an upgrade order. Trigger phrases: "triage my dependency updates", "which dependencies are safe to update", "check outdated dependencies".
  ---
  # Purpose

  An outdated-dependencies list is a wall of version numbers that hides
  the two or three updates that actually matter. Dependency Update Triage
  reads that list, classifies each jump as patch, minor, or major, checks
  what is known about each one, and sorts everything into three buckets:
  safe now, needs review, and hold. The result is an upgrade plan with an
  order of operations, not a guessing game.

  # Workflow

  1. Collect the outdated list. The user pastes the output of a command
     like `npm outdated`, `pip list --outdated`, `cargo outdated`, or
     `composer outdated`, or points the assistant at the project
     directory and has it run the read-only listing command there.
  2. For each package, record the current version, the latest available
     version, and the jump type: patch, minor, or major.
  3. For every major jump, look at the actual changelog or release notes.
     Record whether breaking changes are documented, whether a migration
     guide exists, and whether any linked issue is still open.
  4. Check each package for deprecation notices, yanked versions, and
     published security advisories. Note the source of each finding.
  5. Assign every package to exactly one bucket:
     - Safe now: patch or minor jumps with no advisories and no breaking
       indicators.
     - Needs review: major jumps, anything with an open security
       advisory, or a package whose changelog cannot be read.
     - Hold: deprecated packages, abandoned maintainers, or updates
       known to conflict with another dependency in the list.
  6. Order the safe-now bucket from lowest risk to highest: patches
     first, then minors with the smallest version distance.
  7. Write the report in the Output Contract shape and send it.

  # Output Contract

  One line per package, grouped by bucket in this order: Safe now,
  Needs review, Hold. Each line carries:

  - Package: name
  - Current to latest: "1.4.2 to 1.4.9"
  - Jump: patch, minor, or major
  - Note: one short reason for the bucket (for example, "major with
    migration guide" or "CVE-2026-1140 fixed in latest")

  End with a suggested order: apply Safe now first, lowest risk to
  highest, then tackle Needs review one at a time. Include the exact
  commands for each step so the user can approve and run them.

  # Operating Rules

  - Never run an install, upgrade, or migration command without the
    user approving that exact command first.
  - Never edit package.json, requirements files, Cargo.toml, lockfiles,
    or vendored code. Classification is read-only work.
  - Never invent changelog contents. If the changelog cannot be read,
    put the package in Needs review and say the changelog is unknown.
  - Treat a major jump with no readable changelog as Needs review, not
    Safe now.
  - If the project's test suite exists, recommend running it after each
    bucket before moving on, but do not run it without approval.
---

Dependency Update Triage takes the intimidating wall of an
`npm outdated` or `pip list --outdated` report and turns it into a calm
plan. Most developers handle dependency updates one of two ways: they
update nothing for a year out of caution, or they update everything at
once and spend a weekend untangling what broke. This skill offers a
third way. It classifies every outdated package by jump type, checks
changelogs and advisories for the ones that matter, and sorts the whole
list into three buckets: safe now, needs review, and hold. Patches and
quiet minors land in safe now, majors and mystery packages land in
needs review, and deprecated or conflicting packages land on hold.

It never runs an upgrade or touches a file. It only reads, classifies,
and reports, then hands you the exact commands in the right order so
you approve each step. The boring updates disappear from your mental
load in minutes, and the risky ones get the attention they actually
deserve instead of your blanket anxiety.

## What it includes

- A parser flow for outdated output from npm, pip, Cargo, Composer, and similar tools
- Patch, minor, and major jump classification for every package
- Changelog and release-note review for major jumps
- Deprecation, yank, and security advisory checks
- The safe-now, needs-review, and hold bucket system
- A risk-ordered upgrade plan with exact commands for approval

## Example

Input: the output of `npm outdated` pasted in, listing 5 packages.

Output:

```
Safe now (2)
- lodash: 4.17.20 to 4.17.21. Jump: patch. Note: patch release only.
- debug: 4.3.2 to 4.4.1. Jump: minor. Note: no breaking changes listed.

Needs review (2)
- express: 4.18.2 to 5.1.0. Jump: major. Note: major with migration guide.
- minimatch: 9.0.3 to 9.0.5. Jump: patch. Note: CVE fixed in latest, verify tests.

Hold (1)
- moment: 2.29.4 to 2.30.1. Jump: minor. Note: deprecated, plan a replacement.

Suggested order: run the safe-now patch, then the safe-now minor, then review express.
1. npm install lodash@4.17.21
2. npm install debug@4.4.1
3. Review the express 5 migration guide before upgrading.
```
