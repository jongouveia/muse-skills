---
title: "Test Case Generator"
tagline: "Paste a function, get the test cases including the edge cases you'd skip."
category: "dev"
type: "prompt"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/test-case-generator.md"
source_verified: false
origin: "directory"
includes: ["prompt-text"]
version: "1.0.0"
date_added: 2026-09-14
safety_notes: |
  Drafts test cases from the code you paste. Never runs them
  against anything.
install_prompt: |
  Install the "Test Case Generator" prompt pack. Its full source
  is below. Save it to ~/workspace/prompts/test-case-generator.md
  (create the folder if needed). Then confirm it is installed and
  show me the full text.

  --- SOURCE ---
  This prompt pack generates test cases for a function.
  Paste it into Muse along with the function code.

  > Write test cases for this function in [framework]. Cover:
  > (1) the happy path with realistic inputs, (2) edge cases:
  > empty, null, zero, boundaries, and max sizes, (3) error
  > cases, invalid inputs and what the function should do with
  > each, and (4) one test for the bug most likely to hide here,
  > with a comment saying why it's likely. Rules: each test gets
  > a name that says what's being verified, no testing the
  > framework itself, and if the function is untestable as
  > written (hidden dependencies, no seams), say so and suggest
  > the smallest refactor that fixes it instead of writing
  > brittle tests.
source: |
  This prompt pack generates test cases for a function.
  Paste it into Muse along with the function code.

  > Write test cases for this function in [framework]. Cover:
  > (1) the happy path with realistic inputs, (2) edge cases:
  > empty, null, zero, boundaries, and max sizes, (3) error
  > cases, invalid inputs and what the function should do with
  > each, and (4) one test for the bug most likely to hide here,
  > with a comment saying why it's likely. Rules: each test gets
  > a name that says what's being verified, no testing the
  > framework itself, and if the function is untestable as
  > written (hidden dependencies, no seams), say so and suggest
  > the smallest refactor that fixes it instead of writing
  > brittle tests.
---

Test Case Generator is a prompt pack for the function with zero
tests. Paste the code; get happy-path, edge-case, and error-case
tests with names that say what's verified, plus one test aimed at
the bug most likely hiding in that code. Untestable functions get a
refactor suggestion instead of brittle tests.

## What it includes

- Happy-path tests with realistic inputs
- Edge cases: empty, null, zero, boundaries
- Error cases with expected behavior
- Most-likely-bug test with the reasoning

## Example

Input: a `calculateDiscount(price, code)` function.

Output (abridged):

```js
test('applies SAVE10 to a normal price', ...)
test('rejects an expired code', ...)
// most likely bug: code comparison is case-sensitive,
// "save10" fails silently. This test pins the behavior.
test('handles lowercase promo codes', ...)
```
