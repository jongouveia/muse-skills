---
title: "Unclaimed Money Scout"
tagline: "Checks class-action settlements and unclaimed property for money owed to you."
category: "money"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/unclaimed-money-scout.md"
source_verified: true
origin: "directory"
includes: ["instructions", "workflow", "claim-links"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Asks only for what you choose to share (name spelling, states of
  residence). Never asks for SSN, bank details, or passwords. Never
  files a claim for you : it links to the official claim site and
  you file it yourself.
install_prompt: |
  Install the "Unclaimed Money Scout" skill. Its full source is
  below. Create it at
  ~/workspace/skills/unclaimed-money-scout/SKILL.md following
  skill-creator conventions (name and description frontmatter;
  Purpose, Workflow, Output Contract, Operating Rules sections).
  Then confirm it is installed and tell me the trigger phrases.

  --- SOURCE ---
  ---
  name: unclaimed-money-scout
  description: Search class-action settlements and state unclaimed-property databases for money you may be owed. Trigger phrases: "am I owed any settlement money", "check unclaimed property for me", "find money owed to me".
  ---
  # Purpose

  People leave money on the table every year: class-action
  settlements they never heard about, forgotten security deposits,
  uncashed checks sitting in state unclaimed-property funds. This
  skill checks the public sources and points at what might be
  yours.

  # Workflow

  1. Ask the user for: full name (and past spellings or maiden
     name if relevant), and every state they have lived or worked
     in. Nothing else. Never ask for SSN, bank details, or
     passwords.
  2. Check these public sources:
     - State unclaimed property: missingmoney.com (multi-state
       NAUPA search) and each relevant state's official .gov
       unclaimed-property site.
     - Open class-action settlements: topclassactions.com and
       classaction.org : filter to settlements still accepting
       claims, and match by the user's purchase or membership
       history (ask what products, services, or employers apply).
     - FTC refunds: ftc.gov enforcement refunds page for
       government-administered payouts.
  3. For each potential match, report: what it is, the estimated
     payout range if published, the claim deadline, and the
     official claim link.
  4. Report in the Output Contract shape.

  # Output Contract

  - Checked: the sources searched and the name/states used
  - Potential matches: one line each , what, payout range,
    deadline, official claim link
  - Long shots: settlements that might apply but need more info
    from the user
  - Nothing found: say so in one line, and suggest re-checking
    yearly

  # Operating Rules

  - Public sources only. Link to official claim sites (.gov or
    the settlement administrator) , never to aggregator sign-up
    funnels.
  - Never file a claim on the user's behalf. The user files their
    own claims.
  - Never ask for or accept SSN, bank account numbers, or
    passwords. If the user offers them, the skill refuses and
    explains why.
  - Payout ranges come from the published settlement terms, not
    from anecdotes. If no range is published, say so.
  - Re-checking is a yearly habit, not a weekly one. Say that.
source: |
  ---
  name: unclaimed-money-scout
  description: Search class-action settlements and state unclaimed-property databases for money you may be owed. Trigger phrases: "am I owed any settlement money", "check unclaimed property for me", "find money owed to me".
  ---
  # Purpose

  People leave money on the table every year: class-action
  settlements they never heard about, forgotten security deposits,
  uncashed checks sitting in state unclaimed-property funds. This
  skill checks the public sources and points at what might be
  yours.

  # Workflow

  1. Ask the user for: full name (and past spellings or maiden
     name if relevant), and every state they have lived or worked
     in. Nothing else. Never ask for SSN, bank details, or
     passwords.
  2. Check these public sources:
     - State unclaimed property: missingmoney.com (multi-state
       NAUPA search) and each relevant state's official .gov
       unclaimed-property site.
     - Open class-action settlements: topclassactions.com and
       classaction.org : filter to settlements still accepting
       claims, and match by the user's purchase or membership
       history (ask what products, services, or employers apply).
     - FTC refunds: ftc.gov enforcement refunds page for
       government-administered payouts.
  3. For each potential match, report: what it is, the estimated
     payout range if published, the claim deadline, and the
     official claim link.
  4. Report in the Output Contract shape.

  # Output Contract

  - Checked: the sources searched and the name/states used
  - Potential matches: one line each , what, payout range,
    deadline, official claim link
  - Long shots: settlements that might apply but need more info
    from the user
  - Nothing found: say so in one line, and suggest re-checking
    yearly

  # Operating Rules

  - Public sources only. Link to official claim sites (.gov or
    the settlement administrator) , never to aggregator sign-up
    funnels.
  - Never file a claim on the user's behalf. The user files their
    own claims.
  - Never ask for or accept SSN, bank account numbers, or
    passwords. If the user offers them, the skill refuses and
    explains why.
  - Payout ranges come from the published settlement terms, not
    from anecdotes. If no range is published, say so.
  - Re-checking is a yearly habit, not a weekly one. Say that.
---

Unclaimed Money Scout checks whether you're owed money you don't
know about: state unclaimed-property funds (forgotten deposits,
uncashed checks), open class-action settlements matched to your
purchase history, and FTC-administered refunds. You share only your
name and states of residence , never SSN or bank details : and it
hands you the official claim links with deadlines. You file the
claims yourself.

## What it includes

- Multi-state unclaimed property search (NAUPA + state .gov sites)
- Open class-action settlement matching
- FTC refund check
- Official claim links with payout ranges and deadlines

## Example

Input: "check for me : lived in MA and NH."

Output (abridged):

```
Checked: missingmoney.com (MA, NH), MA unclaimed property .gov,
topclassactions.com open settlements, FTC refunds.

Potential matches:
- MA unclaimed property: 1 result under your name , $87.42 from an
  old utility deposit. Claim: mass.gov/unclaimed-property
- Open settlement: XYZ data breach : you had an account 2019-2022.
  Est. payout $25-50. Deadline: Oct 31. Claim: [administrator link]

Long shots: none. Re-check yearly.
```
