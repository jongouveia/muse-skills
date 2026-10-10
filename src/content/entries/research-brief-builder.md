---
title: "Research Brief Builder"
tagline: "Gathers multi-source research into a structured brief with sources, key findings, and open questions."
category: "productivity"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/research-brief-builder.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "brief-template"]
version: "1.0.0"
date_added: 2026-10-10
safety_notes: |
  Summarizes only the sources you name or that are publicly
  available. It never fabricates citations, never reaches paywalled
  or private accounts, and every claim carries the source it came
  from. It drafts research only; no decisions, purchases, or
  messages on your behalf.
install_prompt: |
  Install the "Research Brief Builder" skill. Its full source is below. Create it
  at ~/workspace/skills/research-brief-builder/SKILL.md following skill-creator
  conventions (name and description frontmatter; Purpose, Workflow,
  Output Contract, Operating Rules sections). Then confirm it is
  installed and tell me the trigger phrases.

  --- SOURCE ---
  ---
  name: research-brief-builder
  description: Turn scattered research into a structured brief with sources, findings, and open questions. Trigger phrases: "build a research brief", "research this for me", "brief me on".
  ---
  # Purpose

  Replace the tab sprawl with one document you can trust. Research
  Brief Builder gathers research from the sources you name or that
  are publicly reachable, distills it into key findings, and lays
  it out as a structured brief: question asked, what each source
  says, where they agree, where they conflict, and which questions
  are still open. Every claim carries its source, so you can check
  the original in seconds.

  # Workflow

  1. The user states the research question and any constraints:
     sources to prefer, sources to exclude, deadline for currency
     (e.g. "only 2025 or newer").
  2. Gather the research from the named or publicly available
     sources. Note the publication date of each source.
  3. Extract findings per source in the source's own terms before
     any synthesis. Do not mix sources into one voice.
  4. Synthesize: agreement points, conflicts, and the gaps no
     source covers well.
  5. Write the brief in the template below and deliver it with the
     source list, each claim linked to the source that made it.

  # Output Contract

  Each brief contains:

  - The question, restated in one line
  - Key findings: 3 to 7 bullet points, each with its source
  - Where sources agree, and where they conflict
  - Open questions the research did not answer
  - A source list with publication dates and links where public

  If fewer than three solid sources turn up, say so plainly and
  deliver the thin brief rather than padding it.

  # Operating Rules

  - Never invent a citation. If a claim cannot be traced to a
    source you actually read, drop the claim.
  - Never reach paywalled, logged-in, or private accounts. Only
    public pages and sources the user provides.
  - Distinguish what a source says from what you infer. Inferences
    get flagged as your reading, not the source's claim.
  - When sources conflict, report the conflict. Never pick a
    winner silently.
  - Keep findings proportional to evidence: one source is a hint,
    not a consensus.
  - Never act on the research: no purchases, no outreach, no
    decisions. The brief informs; the user decides.
source: |
  ---
  name: research-brief-builder
  description: Turn scattered research into a structured brief with sources, findings, and open questions. Trigger phrases: "build a research brief", "research this for me", "brief me on".
  ---
  # Purpose

  Replace the tab sprawl with one document you can trust. Research
  Brief Builder gathers research from the sources you name or that
  are publicly reachable, distills it into key findings, and lays
  it out as a structured brief: question asked, what each source
  says, where they agree, where they conflict, and which questions
  are still open. Every claim carries its source, so you can check
  the original in seconds.

  # Workflow

  1. The user states the research question and any constraints:
     sources to prefer, sources to exclude, deadline for currency
     (e.g. "only 2025 or newer").
  2. Gather the research from the named or publicly available
     sources. Note the publication date of each source.
  3. Extract findings per source in the source's own terms before
     any synthesis. Do not mix sources into one voice.
  4. Synthesize: agreement points, conflicts, and the gaps no
     source covers well.
  5. Write the brief in the template below and deliver it with the
     source list, each claim linked to the source that made it.

  # Output Contract

  Each brief contains:

  - The question, restated in one line
  - Key findings: 3 to 7 bullet points, each with its source
  - Where sources agree, and where they conflict
  - Open questions the research did not answer
  - A source list with publication dates and links where public

  If fewer than three solid sources turn up, say so plainly and
  deliver the thin brief rather than padding it.

  # Operating Rules

  - Never invent a citation. If a claim cannot be traced to a
    source you actually read, drop the claim.
  - Never reach paywalled, logged-in, or private accounts. Only
    public pages and sources the user provides.
  - Distinguish what a source says from what you infer. Inferences
    get flagged as your reading, not the source's claim.
  - When sources conflict, report the conflict. Never pick a
    winner silently.
  - Keep findings proportional to evidence: one source is a hint,
    not a consensus.
  - Never act on the research: no purchases, no outreach, no
    decisions. The brief informs; the user decides.
---

Research Brief Builder turns the "forty open tabs" problem into
one document you can actually use. Give it a question and any
ground rules, like sources to prefer or a freshness cutoff, and it
reads through what it can reach, extracts what each source says in
its own terms, then synthesizes the result: the key findings, the
points where sources agree, the places where they disagree, and
the questions nobody has answered yet.

The discipline is in the citations. Every claim carries its
source with a publication date, inferences are flagged as such,
and if fewer than three solid sources turn up it tells you the
brief is thin instead of padding it. Conflicts are reported, not
resolved silently, so you see the real shape of the evidence.

It is read-only research support. It never touches paywalled or
private accounts, and it never acts on what it finds. You get the
brief, you make the call.

## What it includes

- A research question intake with source and freshness constraints
- Per-source findings kept in the source's own terms
- Synthesis: agreements, conflicts, and open questions
- Every claim linked to its source with publication date
- Honest thin-brief reporting when sources are scarce

## Example

Input: "Brief me on garage EV charger installation costs, only 2025 or newer sources, homeowner forums preferred."

Output:

```
Question: What does a home EV charger install cost in 2025?

Key findings:
- Median installed cost $1,200 to $1,800 [Electrician forums, 2025]
- Panel upgrades add $800 to $2,000 when needed [NEC code guide, 2025]
- Utility rebates offset $300 to $500 in most states [DOE database, 2025]

Agreement: labor is half the bill. Conflict: whether 60A circuits
are needed for most drivers.

Open: long-run panel health after sustained 48A loads.
Sources: [3 links with dates]
```
