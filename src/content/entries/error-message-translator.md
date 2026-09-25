---
title: "Error Message Translator"
tagline: "Paste a stack trace; get what it actually means and likely fixes."
category: "dev"
type: "prompt"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/error-message-translator.md"
source_verified: true
origin: "directory"
includes: ["prompt-text"]
version: "1.0.0"
date_added: 2026-09-10
safety_notes: |
  Explains the error text you paste. Never runs code and never
  asks for credentials.
install_prompt: |
  Install the "Error Message Translator" prompt pack. Its full
  source is below. Save it to
  ~/workspace/prompts/error-message-translator.md (create the
  folder if needed). Then confirm it is installed and show me the
  full text.

  --- SOURCE ---
  This prompt pack turns a cryptic error into a human explanation.
  Paste it into Muse along with the error text.

  > Translate this error message into plain English. Tell me:
  > (1) what the error actually means, in one sentence, (2) the
  > three most likely causes, ranked, with how to check each,
  > (3) the single most probable fix to try first, and (4) what
  > to search for if that fix doesn't work. Assume I know the
  > language but not this specific failure. Do not run anything;
  > reason from the message text.
source: |
  This prompt pack turns a cryptic error into a human explanation.
  Paste it into Muse along with the error text.

  > Translate this error message into plain English. Tell me:
  > (1) what the error actually means, in one sentence, (2) the
  > three most likely causes, ranked, with how to check each,
  > (3) the single most probable fix to try first, and (4) what
  > to search for if that fix doesn't work. Assume I know the
  > language but not this specific failure. Do not run anything;
  > reason from the message text.
---

Error Message Translator is a prompt pack for the errors that read
like riddles. Paste the stack trace; get a one-sentence translation,
the three most likely causes ranked with how to check each, the
single fix to try first, and what to search if it doesn't work.

## What it includes

- One-sentence plain-English translation
- Three ranked likely causes with checks
- First fix to try, plus fallback search terms

## Example

Input: `NullPointerException at com.app.UserService.getEmail (line 47)`.

Output (abridged):

```
Meaning: the code tried to read email from a user object that
doesn't exist.

Likely causes:
1. The user lookup returned null (bad id): check the id passed in.
2. The user was deleted between lookup and use.
3. The field mapping is wrong and email is on a different object.

Try first: log the user object right before line 47.
```
