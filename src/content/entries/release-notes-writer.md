---
title: "Release Notes Writer"
tagline: "Turns commits and merged PRs since the last tag into a changelog draft worth shipping."
category: "dev"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/release-notes-writer.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "changelog-template", "migration-notes"]
version: "1.0.0"
date_added: 2026-10-20
safety_notes: |
  Reads your git history only; it never pushes, tags, or publishes
  anything. It never invents changes that are not in the commits or
  merged PRs, and it never buries a breaking change in the fixes
  list. Draft notes stay local until you decide to ship them, and
  nothing leaves your machine without you.
install_prompt: |
  Install the "Release Notes Writer" skill. Its full source is
  below. Create it at ~/workspace/skills/release-notes-writer/SKILL.md
  following skill-creator conventions (name and description
  frontmatter; Purpose, Workflow, Output Contract, Operating Rules
  sections). Then confirm it is installed and tell me the trigger
  phrases.

  --- SOURCE ---
  ---
  name: release-notes-writer
  description: Turns commits and merged PRs since the last tag into a clean changelog or release-notes draft, grouped by breaking changes, features, fixes, and chores. Trigger phrases: "write release notes", "draft a changelog", "summarize this release", "what changed since v", "cut release notes".
  ---
  # Purpose

  Do one narrow job: turn the raw history since your last release
  tag into release notes a human would be proud to ship. Point it
  at a repo and a tag (or the previous release), and it reads the
  commits and merged PRs in between, groups the changes by impact
  (breaking changes, new features, fixes, chores), and drafts
  notes written for the reader of the release, not the author of
  the commit. It names what changed, who it affects, and how to
  migrate when behavior changed.

  # Workflow

  1. Identify the range: the previous release tag and the current
     HEAD (or the new tag you are about to cut). Confirm both
     with the user if they are ambiguous.
  2. Collect the raw material: commit subjects since the previous
     tag, plus merged PR titles and labels when the repo uses
     them.
  3. Sort every change into groups: Breaking changes, New
     features, Fixes, Chores and internals. Reword cryptic commit
     subjects into plain descriptions of what changed and why it
     matters to the person using the software.
  4. For breaking changes, add a migration note: what the old
     behavior was, what the new behavior is, and the smallest
     change a user must make.
  5. Draft the notes in a standard shape: version header,
     highlights line (the two or three changes that matter
     most), then the grouped lists. Keep each bullet to one
     line.
  6. Present the draft and ask which entries to cut or keep
     before finalizing. Never invent changes that are not in the
     commit history.

  # Output Contract

  - A version header with the new tag and date
  - A highlights line: the two or three most important changes
  - Grouped bullets: Breaking changes, New features, Fixes,
    Chores
  - Migration notes attached to every breaking change
  - A note on any commit that could not be classified, rather
    than dropping it silently

  # Operating Rules

  - Never invent a change that is not in the commits or merged
    PRs.
  - Never bury a breaking change in the fixes list; it always
    gets its own group and a migration note.
  - Write for the reader of the release, not the author of the
    commit: plain words, no internal jargon.
  - Keep bullets to one line; cut entries the user flags as
    noise.
  - Ask which tag range to use when it is ambiguous, instead of
    guessing.
source: |
  ---
  name: release-notes-writer
  description: Turns commits and merged PRs since the last tag into a clean changelog or release-notes draft, grouped by breaking changes, features, fixes, and chores. Trigger phrases: "write release notes", "draft a changelog", "summarize this release", "what changed since v", "cut release notes".
  ---
  # Purpose

  Do one narrow job: turn the raw history since your last release
  tag into release notes a human would be proud to ship. Point it
  at a repo and a tag (or the previous release), and it reads the
  commits and merged PRs in between, groups the changes by impact
  (breaking changes, new features, fixes, chores), and drafts
  notes written for the reader of the release, not the author of
  the commit. It names what changed, who it affects, and how to
  migrate when behavior changed.

  # Workflow

  1. Identify the range: the previous release tag and the current
     HEAD (or the new tag you are about to cut). Confirm both
     with the user if they are ambiguous.
  2. Collect the raw material: commit subjects since the previous
     tag, plus merged PR titles and labels when the repo uses
     them.
  3. Sort every change into groups: Breaking changes, New
     features, Fixes, Chores and internals. Reword cryptic commit
     subjects into plain descriptions of what changed and why it
     matters to the person using the software.
  4. For breaking changes, add a migration note: what the old
     behavior was, what the new behavior is, and the smallest
     change a user must make.
  5. Draft the notes in a standard shape: version header,
     highlights line (the two or three changes that matter
     most), then the grouped lists. Keep each bullet to one
     line.
  6. Present the draft and ask which entries to cut or keep
     before finalizing. Never invent changes that are not in the
     commit history.

  # Output Contract

  - A version header with the new tag and date
  - A highlights line: the two or three most important changes
  - Grouped bullets: Breaking changes, New features, Fixes,
    Chores
  - Migration notes attached to every breaking change
  - A note on any commit that could not be classified, rather
    than dropping it silently

  # Operating Rules

  - Never invent a change that is not in the commits or merged
    PRs.
  - Never bury a breaking change in the fixes list; it always
    gets its own group and a migration note.
  - Write for the reader of the release, not the author of the
    commit: plain words, no internal jargon.
  - Keep bullets to one line; cut entries the user flags as
    noise.
  - Ask which tag range to use when it is ambiguous, instead of
    guessing.
---

Every maintainer knows the feeling: the code is ready, the tag is
about to be cut, and the release notes are an empty box. Release
Notes Writer fills that box for you. Point it at a repo and the
last tag, and it reads everything that landed since: commit
subjects and merged PR titles, sorted by impact. Breaking changes
get their own group with migration notes. New features, fixes,
and chores each get a clean list. Cryptic commit messages like
"fix edge case in thing" become plain descriptions of what
changed and why it matters to the person running the software.

The draft opens with the version header and a highlights line
naming the two or three changes that matter most, so the reader
gets the story before the details. Every bullet stays on one
line, and any commit that resists classification is flagged
rather than silently dropped. You review the draft, cut the
noise, and ship. The skill never pushes, tags, or publishes
anything on its own, and it never invents a change that is not in
the history.

## What it includes

- Tag-range detection: previous tag to HEAD, confirmed before it runs
- Commit and merged-PR reading across the range
- Impact sorting: breaking changes, features, fixes, chores
- Migration notes for every breaking change
- A changelog template with version header and highlights line
- A review pass so you cut noise before shipping

## Example

Input: "Write release notes for v2.4.0. Last tag was v2.3.1."

Output:

```
## v2.4.0 (2026-10-20)

Highlights: dark mode ships; API rate limits are now per-user;
drops Node 18 support.

### Breaking changes

- Node 18 is no longer supported; Node 20+ required.
  Migration: upgrade your runtime before deploying. See the
  deployment guide for the one-line Dockerfile change.
- `GET /usage` now returns per-user limits instead of per-key
  limits. Migration: read the `limit` field on the user object
  instead of the key object.

### New features

- Dark mode with automatic theme detection
- CSV export for the usage dashboard

### Fixes

- Retries no longer double-count against the rate limit
- Fixed timezone display on scheduled reports

### Chores

- Dependency updates, CI cache tuning
```
