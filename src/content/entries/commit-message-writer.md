---
title: "Commit Message Writer"
tagline: "Turns a git diff into a conventional commit message that explains what changed and why."
category: "dev"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/commit-message-writer.md"
source_verified: false
origin: "directory"
includes: ["conventional commit message", "change explanation", "breaking-change note", "scope suggestion", "alternative subject line"]
version: "1.0.0"
date_added: "2026-10-29"
safety_notes: "Never commits, pushes, amends, or rebases anything on the user's behalf. Never invents a reason for a change that the diff and the user's own notes do not support. Never includes secrets, tokens, passwords, or private keys that appear in a diff: it flags them and stops."
install_prompt: |
  To install the Commit Message Writer skill, save the skill source below as ~/workspace/skills/commit-message-writer/SKILL.md, then tell Muse to use it whenever you want a commit message written from a diff.

  --- SOURCE ---
  ---
  name: commit-message-writer
  description: Turn a git diff or staged change into a clear conventional commit message with a short subject line and a body that explains what changed and why. Use when the user says "commit message", "write a commit message", "summarize this diff", "conventional commit", "git commit message", or pastes a diff and wants a message for it.
  ---

  ## Purpose
  Turn a diff into a commit message a future reader can trust: a short subject line that says what changed, and a body that says why, so the project history reads like a log of decisions instead of a pile of vague notes.

  ## Workflow
  1. Read the diff: list the files touched, group them by what they do together, and note the kind of change: feature, fix, docs, refactor, test, chore, or build.
  2. Pick the type and scope: choose the conventional type that fits the change, and a scope drawn from the area of the code touched, such as the module or feature name, not from the branch name.
  3. Write the subject line: one line, 72 characters or fewer, in imperative mood, naming the change plainly, for example "fix: handle empty cart before checkout".
  4. Write the body: two to five short lines explaining what changed and why it was needed, naming the problem or the request behind the change when the user supplies it, and staying silent on motive when no motive is known.
  5. Flag breaking changes: when the diff changes an interface, a config key, or behavior that callers depend on, add a BREAKING CHANGE note describing what breaks and what callers must do instead.
  6. Offer one alternative subject line when the first one could be read two ways, so the user can pick the clearer wording without a rewrite round.

  ## Output Contract
  - Commit message: a code block with the subject line, a blank line, and the body, ready to paste into git commit.
  - Type and scope: the type chosen and why it fits, in one line.
  - Files grouped: the changed files grouped by what they do together.
  - Breaking change note: present only when the diff actually breaks something callers depend on.
  - Alternative subject line: one option, only when the first line is ambiguous.
  - Questions: anything about motive or scope that the diff alone cannot answer, asked instead of guessed.

  ## Operating Rules
  - Never run git commit, git push, git amend, or git rebase. The user always runs the commit command themselves.
  - Never invent a reason for a change. If the user gives no motive, describe the change only, and ask about the why.
  - Never include a secret, token, password, or private key that appears in the diff. Flag it, leave it out of the message, and tell the user to remove it from the change.
  - Never write a subject line longer than 72 characters, and never pad a thin change with filler just to look thorough.
  - Never claim a change is a fix when it only refactors, and never call a refactor a feature. The type must match the diff.
  - If the diff mixes two unrelated changes, say so and draft one message per change, instead of forcing one message to cover both.
source: |
  ---
  name: commit-message-writer
  description: Turn a git diff or staged change into a clear conventional commit message with a short subject line and a body that explains what changed and why. Use when the user says "commit message", "write a commit message", "summarize this diff", "conventional commit", "git commit message", or pastes a diff and wants a message for it.
  ---

  ## Purpose
  Turn a diff into a commit message a future reader can trust: a short subject line that says what changed, and a body that says why, so the project history reads like a log of decisions instead of a pile of vague notes.

  ## Workflow
  1. Read the diff: list the files touched, group them by what they do together, and note the kind of change: feature, fix, docs, refactor, test, chore, or build.
  2. Pick the type and scope: choose the conventional type that fits the change, and a scope drawn from the area of the code touched, such as the module or feature name, not from the branch name.
  3. Write the subject line: one line, 72 characters or fewer, in imperative mood, naming the change plainly, for example "fix: handle empty cart before checkout".
  4. Write the body: two to five short lines explaining what changed and why it was needed, naming the problem or the request behind the change when the user supplies it, and staying silent on motive when no motive is known.
  5. Flag breaking changes: when the diff changes an interface, a config key, or behavior that callers depend on, add a BREAKING CHANGE note describing what breaks and what callers must do instead.
  6. Offer one alternative subject line when the first one could be read two ways, so the user can pick the clearer wording without a rewrite round.

  ## Output Contract
  - Commit message: a code block with the subject line, a blank line, and the body, ready to paste into git commit.
  - Type and scope: the type chosen and why it fits, in one line.
  - Files grouped: the changed files grouped by what they do together.
  - Breaking change note: present only when the diff actually breaks something callers depend on.
  - Alternative subject line: one option, only when the first line is ambiguous.
  - Questions: anything about motive or scope that the diff alone cannot answer, asked instead of guessed.

  ## Operating Rules
  - Never run git commit, git push, git amend, or git rebase. The user always runs the commit command themselves.
  - Never invent a reason for a change. If the user gives no motive, describe the change only, and ask about the why.
  - Never include a secret, token, password, or private key that appears in the diff. Flag it, leave it out of the message, and tell the user to remove it from the change.
  - Never write a subject line longer than 72 characters, and never pad a thin change with filler just to look thorough.
  - Never claim a change is a fix when it only refactors, and never call a refactor a feature. The type must match the diff.
  - If the diff mixes two unrelated changes, say so and draft one message per change, instead of forcing one message to cover both.
---

## What it includes

Most commit messages are written in a hurry and say almost nothing: "fix stuff", "updates", "wip". Months later, nobody can tell why a change was made, and a bisect through that history turns into guesswork. This skill reads the diff, groups the touched files by what they do together, and picks the conventional type and scope that fit the change, such as fix, feat, docs, or refactor with the module name as scope. It writes a subject line of 72 characters or fewer in imperative mood, then a short body explaining what changed and why, naming the problem behind the change when the user supplies it and staying silent on motive when none is known. When the diff breaks an interface or a config key that callers depend on, it adds a breaking-change note with what callers must do instead. It never commits or pushes anything itself, and it never lets a secret found in the diff slip into the message: it flags the secret and tells the user to remove it.

## Example

A developer stages a diff that adds a check for an empty cart before checkout and updates the related tests. The skill groups the checkout handler and the test file together, picks the type fix with the scope checkout, and drafts the subject line "fix(checkout): block checkout when the cart is empty". The body explains that customers could previously submit an order with no items, which created empty orders in the system, and notes the new guard plus the test covering it. Because the change touches no public interface, no breaking-change note is added, and the message is returned in a code block ready to paste into git commit.
