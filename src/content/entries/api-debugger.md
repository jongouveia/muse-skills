---
title: "API Debugger"
tagline: "Paste the request and the error; get an ordered diagnosis checklist."
category: "dev"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/api-debugger.md"
source_verified: true
origin: "directory"
includes: ["instructions", "workflow", "diagnosis-checklist"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Uses only the request and error you paste in. Writes only the
  diagnosis back to you. Never sends requests anywhere and never
  asks for API keys or tokens.
install_prompt: |
  Install the "API Debugger" skill. Its full source is below.
  Create it at ~/workspace/skills/api-debugger/SKILL.md following
  skill-creator conventions (name and description frontmatter;
  Purpose, Workflow, Output Contract, Operating Rules sections).
  Then confirm it is installed and tell me the trigger phrases.

  --- SOURCE ---
  ---
  name: api-debugger
  description: Diagnose a failing API call from the request and the error: an ordered checklist from most to least likely cause. Trigger phrases: "debug this API call", "why is this request failing", "diagnose this error".
  ---
  # Purpose

  Turn "it returns a 400 and I don't know why" into an ordered list
  of things to check, most likely first, instead of random guessing.

  # Workflow

  1. Read what the user pastes: the request (method, URL, headers
     with secrets redacted, body) and the full error (status code,
     response body, and any SDK or client error text).
  2. Classify the failure: auth (401/403), client error (400/404/
     422), server error (5xx), network/timeout, or SDK misuse.
  3. Build the checklist ordered by likelihood for that class:
     - Auth: expired token, wrong scope, key in the wrong header,
       clock skew.
     - Client error: malformed body field, wrong content type,
       missing required param, URL encoding issue.
     - Server error: retry with backoff, check the provider status
       page, isolate with a minimal request.
     - Network: DNS, proxy, TLS version, firewall.
  4. For each item, give the one concrete check to run ("decode the
     JWT at jwt.io and read the exp claim" beats "check your
     token").
  5. Report in the Output Contract shape.

  # Output Contract

  - Classification: one line (auth / client / server / network /
    SDK misuse)
  - Checklist: ordered items, each with the concrete check to run
  - Fastest test: the single quickest check that would confirm or
    rule out the top hypothesis

  # Operating Rules

  - Never ask for a real API key, token, or credential. If the user
    pastes one, tell them to revoke it and redact before continuing.
  - Never send any request on the user's behalf. Diagnosis only.
  - Order by likelihood, not by category textbook order. The most
    probable cause goes first.
  - If the error text is too thin to classify, say which two pieces
    of information would unblock the diagnosis.
source: |
  ---
  name: api-debugger
  description: Diagnose a failing API call from the request and the error: an ordered checklist from most to least likely cause. Trigger phrases: "debug this API call", "why is this request failing", "diagnose this error".
  ---
  # Purpose

  Turn "it returns a 400 and I don't know why" into an ordered list
  of things to check, most likely first, instead of random guessing.

  # Workflow

  1. Read what the user pastes: the request (method, URL, headers
     with secrets redacted, body) and the full error (status code,
     response body, and any SDK or client error text).
  2. Classify the failure: auth (401/403), client error (400/404/
     422), server error (5xx), network/timeout, or SDK misuse.
  3. Build the checklist ordered by likelihood for that class:
     - Auth: expired token, wrong scope, key in the wrong header,
       clock skew.
     - Client error: malformed body field, wrong content type,
       missing required param, URL encoding issue.
     - Server error: retry with backoff, check the provider status
       page, isolate with a minimal request.
     - Network: DNS, proxy, TLS version, firewall.
  4. For each item, give the one concrete check to run ("decode the
     JWT at jwt.io and read the exp claim" beats "check your
     token").
  5. Report in the Output Contract shape.

  # Output Contract

  - Classification: one line (auth / client / server / network /
    SDK misuse)
  - Checklist: ordered items, each with the concrete check to run
  - Fastest test: the single quickest check that would confirm or
    rule out the top hypothesis

  # Operating Rules

  - Never ask for a real API key, token, or credential. If the user
    pastes one, tell them to revoke it and redact before continuing.
  - Never send any request on the user's behalf. Diagnosis only.
  - Order by likelihood, not by category textbook order. The most
    probable cause goes first.
  - If the error text is too thin to classify, say which two pieces
    of information would unblock the diagnosis.
---

API Debugger takes a failing request and its error and returns an
ordered diagnosis checklist — most likely cause first, each with the
one concrete check to run. No more guessing at 400s.

## What it includes

- Failure classification (auth / client / server / network / SDK)
- Likelihood-ordered checklist with concrete checks
- A "fastest test" for the top hypothesis
- Credential hygiene: redact, revoke, then continue

## Example

Input: POST to a payments API returning 401, "invalid API key".

Output (abridged):

```
Classification: auth

Checklist:
1. Key in the wrong header — confirm the provider expects
   `Authorization: Bearer` vs `x-api-key`. (Fastest test: retry with
   the alternate header.)
2. Test vs live key mismatch — test keys start with sk_test_.
3. Key revoked or rotated in the dashboard.
4. Clock skew — only if the error mentions timestamps.
```
