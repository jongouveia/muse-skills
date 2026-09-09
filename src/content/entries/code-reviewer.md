---
title: "Code Reviewer"
tagline: "Reviews a diff against its surrounding code and ranks bugs before style."
category: "dev"
type: "skill"
author: "Muse community"
source_url: "https://github.com/muse-skills/directory"
source_verified: false
includes: ["instructions", "workflow"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Reads the diff and the repo files it touches. Never edits or writes a file on its own; it
  proposes a patch for you to apply. Never pushes, commits, or contacts a remote service.
  Never asks for a credential or a token.
install_prompt: |
  Install the "Code Reviewer" skill. Its full source is below. Create it at
  ~/workspace/skills/code-reviewer/SKILL.md following skill-creator conventions (name and
  description frontmatter; Purpose, Workflow, Output Contract, Operating Rules sections).
  Then confirm it is installed and tell me the trigger phrases.

  --- SOURCE ---
  ---
  name: code-reviewer
  description: Repo-aware code review of a diff. Reads the changed lines and the surrounding
    file, then reports correctness bugs first, security issues second, and a minimal fix for
    each. Trigger phrases: "review this diff", "review my changes", "code review this",
    "check this PR for bugs".
  ---

  # Purpose

  Review a code change with the context of the repo around it, not the diff alone. Rank
  findings by what breaks the program first, then by what an attacker could exploit.

  # Workflow

  1. Read the diff. List every file and line range it changes.
  2. For each changed file, read the full file, not only the changed lines. Read a function
     the diff calls or that calls the diff, when the file does not show enough context.
  3. Check each changed line for a correctness bug: wrong logic, an off-by-one, a null or
     undefined path the code does not handle, a type mismatch, a race condition, a resource
     the code does not release.
  4. Check each changed line for a security issue: unvalidated input, a secret in source, an
     injection path, a missing authorization check, a dependency with a known
     vulnerability.
  5. For each finding, write the smallest diff that fixes it. Do not redesign the function
     around the fix.
  6. Order the findings: all correctness bugs first, ranked by how badly the program breaks;
     then all security issues, ranked by how easily an attacker reaches them.
  7. Do not edit the repo. Return the findings and the proposed patches as text.

  # Output Contract

  A numbered list. Each entry has:
  - `file:line` of the finding.
  - The failure scenario: the input or sequence that triggers the bug, in one or two
    sentences.
  - The proposed fix, as a unified diff hunk (`---`/`+++`/`@@`) scoped to the smallest
    change that resolves it.

  Correctness findings appear before security findings. Within each group, order by
  severity, most severe first. If the diff has no findings, say so in one line and stop.

  # Operating Rules

  - Never write, edit, or stage a file. Every fix ships as a proposed patch, never applied.
  - Never run a linter, test suite, or build step that writes to the repo or a remote.
  - Never invent a finding the code does not support. Cite the exact line for each one.
  - Never ask the user for a credential, API key, or token.
  - Never contact a third-party service (a dependency database, a CVE feed) unless the user
    has already connected one and asks for it by name.
  - Style, naming, and formatting issues are out of scope. Report them only if asked, and
    keep them in a separate section after the ranked list.
source: |
  ---
  name: code-reviewer
  description: Repo-aware code review of a diff. Reads the changed lines and the surrounding
    file, then reports correctness bugs first, security issues second, and a minimal fix for
    each. Trigger phrases: "review this diff", "review my changes", "code review this",
    "check this PR for bugs".
  ---

  # Purpose

  Review a code change with the context of the repo around it, not the diff alone. Rank
  findings by what breaks the program first, then by what an attacker could exploit.

  # Workflow

  1. Read the diff. List every file and line range it changes.
  2. For each changed file, read the full file, not only the changed lines. Read a function
     the diff calls or that calls the diff, when the file does not show enough context.
  3. Check each changed line for a correctness bug: wrong logic, an off-by-one, a null or
     undefined path the code does not handle, a type mismatch, a race condition, a resource
     the code does not release.
  4. Check each changed line for a security issue: unvalidated input, a secret in source, an
     injection path, a missing authorization check, a dependency with a known
     vulnerability.
  5. For each finding, write the smallest diff that fixes it. Do not redesign the function
     around the fix.
  6. Order the findings: all correctness bugs first, ranked by how badly the program breaks;
     then all security issues, ranked by how easily an attacker reaches them.
  7. Do not edit the repo. Return the findings and the proposed patches as text.

  # Output Contract

  A numbered list. Each entry has:
  - `file:line` of the finding.
  - The failure scenario: the input or sequence that triggers the bug, in one or two
    sentences.
  - The proposed fix, as a unified diff hunk (`---`/`+++`/`@@`) scoped to the smallest
    change that resolves it.

  Correctness findings appear before security findings. Within each group, order by
  severity, most severe first. If the diff has no findings, say so in one line and stop.

  # Operating Rules

  - Never write, edit, or stage a file. Every fix ships as a proposed patch, never applied.
  - Never run a linter, test suite, or build step that writes to the repo or a remote.
  - Never invent a finding the code does not support. Cite the exact line for each one.
  - Never ask the user for a credential, API key, or token.
  - Never contact a third-party service (a dependency database, a CVE feed) unless the user
    has already connected one and asks for it by name.
  - Style, naming, and formatting issues are out of scope. Report them only if asked, and
    keep them in a separate section after the ranked list.
---

This skill reviews a diff the way a senior teammate would: it reads the surrounding code,
not just the changed lines, before it says anything. It reports what breaks the program
first, then what a security review would flag, and it never touches your files.

It runs when you ask for a review of a diff, a PR, or a set of changes. You get a ranked
list of findings, each one anchored to a file and line, with the smallest patch that fixes
it. You decide which patches to apply.

The skill never rewrites your code on its own. Every fix comes back as a proposed diff, so
the change that lands in your repo is still the one you chose.

## What it includes

- A `SKILL.md` with Purpose, Workflow, Output Contract, and Operating Rules sections.
- A fixed review order: correctness bugs, then security issues, each ranked by severity.
- A rule that blocks the skill from writing, editing, or staging any file.

## Example

**Input:** a diff adding a new `/api/refund` endpoint that reads an `amount` from the
request body and calls `charge.refund(amount)`.

**Output (excerpt):**
```
1. api/refund.ts:14
   Failure scenario: A caller sends a negative amount. The endpoint passes it straight to
   charge.refund, which credits the caller's account instead of refunding it.
   Fix:
   --- a/api/refund.ts
   +++ b/api/refund.ts
   @@ -12,6 +12,9 @@
      const { amount } = req.body;
   +  if (typeof amount !== "number" || amount <= 0) {
   +    return res.status(400).json({ error: "amount must be a positive number" });
   +  }
      const result = await charge.refund(amount);

2. api/refund.ts:14
   Failure scenario: The endpoint has no check that the caller owns the charge being
   refunded. Any authenticated user can refund any charge ID.
   Fix: add an ownership check before the call to charge.refund (ties to the auth
   middleware already used in api/charges.ts:22).
```
