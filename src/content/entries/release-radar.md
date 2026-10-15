---
title: "Release Radar"
tagline: "Watches the repos you name and summarizes new releases, skipping the noise."
category: "dev"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/release-radar.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "repo-watch-list"]
version: "1.0.0"
date_added: 2026-10-15
safety_notes: |
  Reads only public release information for the repos you point it
  at. It never clones code, never runs anything, and never touches
  private repositories or credentials. It summarizes release notes;
  it does not judge code quality and never recommends an upgrade on
  its own.
install_prompt: |
  Install the "Release Radar" skill. Its full source is below.
  Create it at ~/workspace/skills/release-radar/SKILL.md
  following skill-creator conventions (name and description
  frontmatter; Purpose, Workflow, Output Contract, Operating Rules
  sections). Then confirm it is installed and tell me the trigger
  phrases.

  --- SOURCE ---
  ---
  name: release-radar
  description: Watch a list of repos for new releases and get a short summary of the ones that matter to you. Trigger phrases: "what did I miss", "repo updates", "new releases", "check release radar".
  ---
  # Purpose

  Do one narrow job: keep you current on the projects you actually
  use. You name the repos you care about, and on each check the skill
  looks for releases newer than the last check, reads the release
  notes, and gives you a short rundown of what changed and why it
  might matter. Everything it reports is marked as seen, so you never
  read the same release twice.

  # Workflow

  1. Set up your watch list: repo names (owner/name) plus one line on
     why each matters to you, for example "my blog's framework" or
     "the linter in CI". Add or remove entries anytime.
  2. On each run, check every repo for releases newer than the last
     recorded check. Record a timestamp and the newest release seen
     per repo.
  3. For each new release, read the release notes and write a two to
     four line plain-language summary: the version, the headline
     change, and who should care. Flag breaking changes, security
     fixes, and new features.
  4. Rank the summaries: breaking changes first, then security fixes,
     then features, then everything else. Bugfix-only patch releases
     get one line, never a paragraph.
  5. Mark everything reviewed as seen, so the next check reports
     only what is new. A repo with no new release is not mentioned;
     silence is the correct output for a quiet week.
  6. When release notes are vague, say so and link the release page
     instead of guessing what changed.

  # Output Contract

  - Per repo with a new release: version, headline summary (2-4
    lines), and flags: breaking change, security fix, or feature
  - Order: breaking changes, then security fixes, then features,
    then patch notes
  - Quiet repos: omitted entirely
  - End with the count of repos checked and the count with new
    releases

  Keep the whole digest under 25 lines unless the user asks for more.

  # Operating Rules

  - Never invent release details. If the release notes are empty or
    vague, link the release page and say the notes are thin.
  - Never mark a release as seen without reporting it first.
  - Do not clone repositories or run code; read release metadata
    only.
  - Never access private repositories unless the user explicitly
    names the repo and provides a way to read it in this session.
  - Never recommend upgrading a dependency. Describe what changed;
    the user decides.
  - If a check fails for a repo (rate limit, moved repo, 404),
    report the repo name and the failure, and try again next run.
source: |
  ---
  name: release-radar
  description: Watch a list of repos for new releases and get a short summary of the ones that matter to you. Trigger phrases: "what did I miss", "repo updates", "new releases", "check release radar".
  ---
  # Purpose

  Do one narrow job: keep you current on the projects you actually
  use. You name the repos you care about, and on each check the skill
  looks for releases newer than the last check, reads the release
  notes, and gives you a short rundown of what changed and why it
  might matter. Everything it reports is marked as seen, so you never
  read the same release twice.

  # Workflow

  1. Set up your watch list: repo names (owner/name) plus one line on
     why each matters to you, for example "my blog's framework" or
     "the linter in CI". Add or remove entries anytime.
  2. On each run, check every repo for releases newer than the last
     recorded check. Record a timestamp and the newest release seen
     per repo.
  3. For each new release, read the release notes and write a two to
     four line plain-language summary: the version, the headline
     change, and who should care. Flag breaking changes, security
     fixes, and new features.
  4. Rank the summaries: breaking changes first, then security fixes,
     then features, then everything else. Bugfix-only patch releases
     get one line, never a paragraph.
  5. Mark everything reviewed as seen, so the next check reports
     only what is new. A repo with no new release is not mentioned;
     silence is the correct output for a quiet week.
  6. When release notes are vague, say so and link the release page
     instead of guessing what changed.

  # Output Contract

  - Per repo with a new release: version, headline summary (2-4
    lines), and flags: breaking change, security fix, or feature
  - Order: breaking changes, then security fixes, then features,
    then patch notes
  - Quiet repos: omitted entirely
  - End with the count of repos checked and the count with new
    releases

  Keep the whole digest under 25 lines unless the user asks for more.

  # Operating Rules

  - Never invent release details. If the release notes are empty or
    vague, link the release page and say the notes are thin.
  - Never mark a release as seen without reporting it first.
  - Do not clone repositories or run code; read release metadata
    only.
  - Never access private repositories unless the user explicitly
    names the repo and provides a way to read it in this session.
  - Never recommend upgrading a dependency. Describe what changed;
    the user decides.
  - If a check fails for a repo (rate limit, moved repo, 404),
    report the repo name and the failure, and try again next run.
---

Release Radar exists for one quiet fear: a library you depend on
shipping a breaking change while you were not looking. You give it
the repos you care about, each with one line about why it matters,
and it keeps a record of the newest release it has seen for each
one. On every check it looks for anything newer, reads the release
notes, and hands you a short digest of what changed and why it
might matter.

The digest ranks by consequence. Breaking changes come first, then
security fixes, then features worth knowing about; bugfix-only
patches get a single line. Repos with nothing new are not mentioned
at all, so a quiet week produces a short message. Vague release
notes are reported as vague with a link to the release page, never
padded with guesses, and nothing is ever marked seen without being
reported first.

It reads release metadata only: no clones, no code execution, no
private repos unless you explicitly provide one for the session. It
describes what changed; it never tells you to upgrade.

## What it includes

- A repo watch list with per-repo notes on why each entry matters
- New-release detection with per-repo "last seen" records
- Plain-language release summaries with breaking-change, security, and feature flags
- A compact ranked digest format, quiet repos omitted
- Thin-release-note handling that links instead of guessing
- Per-repo failure reporting for moved or unreachable repos

## Example

Input: watch list has facebook/react ("blog frontend") and
vercel/next.js ("agency client sites"). Last check: 2026-10-08.

Output:

```
- facebook/react 19.2.0 (breaking change): the `cache()` function
  changes behavior in Edge runtimes; read the migration notes if
  your app runs at the edge.

Checked 2 repos, 1 with a new release.
```
