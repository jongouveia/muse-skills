---
title: "Regex Smith"
tagline: "Describe the pattern in English; get a tested regex with examples."
category: "dev"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/regex-smith.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "test-cases"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Uses only the description and examples you provide. Writes only
  the regex and its test cases back to you. Nothing leaves the chat.
install_prompt: |
  Install the "Regex Smith" skill. Its full source is below. Create
  it at ~/workspace/skills/regex-smith/SKILL.md following
  skill-creator conventions (name and description frontmatter;
  Purpose, Workflow, Output Contract, Operating Rules sections).
  Then confirm it is installed and tell me the trigger phrases.

  --- SOURCE ---
  ---
  name: regex-smith
  description: Turn a plain-English pattern description into a tested regular expression, with match and non-match examples. Trigger phrases: "build me a regex", "regex for this pattern", "write a regex that".
  ---
  # Purpose

  Produce correct regular expressions without the trial-and-error.
  The user describes the pattern in plain English; the skill
  returns the regex plus proof it works.

  # Workflow

  1. Read the user's description. Identify: what must match, what
     must NOT match, and the flavor (JavaScript, Python, PCRE :
     ask if it matters and wasn't stated).
  2. Write the regex. Prefer readability: named groups where the
     flavor supports them, and a brief annotation of each part.
  3. Test it mentally against at least 3 strings that should match
     and 3 that should not, including edge cases (empty string,
     boundary characters, unicode if relevant).
  4. Report in the Output Contract shape.

  # Output Contract

  - Regex: in a code block, with the flavor labeled
  - Annotated: one line per major part explaining what it does
  - Should match: 3+ example strings
  - Should not match: 3+ example strings
  - Caveats: one line on what the regex deliberately does not
    handle

  # Operating Rules

  - Never return a regex without the match/non-match examples.
  - If the description is ambiguous (for example, "a date" without
    a format), ask which format before writing.
  - Prefer the simplest regex that satisfies the examples; say when
    a stricter version exists and what it costs in readability.
  - Nothing is executed anywhere; the "tests" are worked examples,
    labeled as such.
source: |
  ---
  name: regex-smith
  description: Turn a plain-English pattern description into a tested regular expression, with match and non-match examples. Trigger phrases: "build me a regex", "regex for this pattern", "write a regex that".
  ---
  # Purpose

  Produce correct regular expressions without the trial-and-error.
  The user describes the pattern in plain English; the skill
  returns the regex plus proof it works.

  # Workflow

  1. Read the user's description. Identify: what must match, what
     must NOT match, and the flavor (JavaScript, Python, PCRE :
     ask if it matters and wasn't stated).
  2. Write the regex. Prefer readability: named groups where the
     flavor supports them, and a brief annotation of each part.
  3. Test it mentally against at least 3 strings that should match
     and 3 that should not, including edge cases (empty string,
     boundary characters, unicode if relevant).
  4. Report in the Output Contract shape.

  # Output Contract

  - Regex: in a code block, with the flavor labeled
  - Annotated: one line per major part explaining what it does
  - Should match: 3+ example strings
  - Should not match: 3+ example strings
  - Caveats: one line on what the regex deliberately does not
    handle

  # Operating Rules

  - Never return a regex without the match/non-match examples.
  - If the description is ambiguous (for example, "a date" without
    a format), ask which format before writing.
  - Prefer the simplest regex that satisfies the examples; say when
    a stricter version exists and what it costs in readability.
  - Nothing is executed anywhere; the "tests" are worked examples,
    labeled as such.
---

Regex Smith turns "match a US phone number, with or without dashes"
into a working regular expression : annotated part by part, with
strings it should match, strings it shouldn't, and the edge cases it
deliberately skips.

## What it includes

- Plain-English to regex translation (JS, Python, PCRE)
- Annotated breakdown of each part
- Match and non-match worked examples
- Ambiguity handling: asks before guessing

## Example

Input: "regex for a US phone number, dashes optional, JavaScript."

Output (abridged):

```
Flavor: JavaScript
Regex: /^(?:\+1[-.\s]?)?\(?([2-9][0-9]{2})\)?[-.\s]?([2-9][0-9]{2})[-.\s]?([0-9]{4})$/

Should match: 415-555-0132, (415) 555-0132, +1 415.555.0132
Should not match: 123-4567, 415-555-013 (too short), "" (empty)

Caveat: does not validate that the number is real or in service.
```
