---
title: "Bill Negotiation Script"
tagline: "A call script for lowering cable, internet, and insurance bills, with answers to their pushback."
category: "money"
type: "prompt"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/bill-negotiation-script.md"
source_verified: false
origin: "directory"
includes: ["prompt-text"]
version: "1.0.0"
date_added: 2026-09-14
safety_notes: |
  Drafts a call script from the bill details you provide. Never
  calls anyone or shares your information.
install_prompt: |
  Install the "Bill Negotiation Script" prompt pack. Its full
  source is below. Save it to
  ~/workspace/prompts/bill-negotiation-script.md (create the
  folder if needed). Then confirm it is installed and show me the
  full text.

  --- SOURCE ---
  This prompt pack writes a call script for negotiating a lower bill.
  Paste it into Muse along with your bill details.

  > Write me a phone script for negotiating down my [cable /
  > internet / insurance] bill. Current bill: [amount], paying
  > for [plan details]. Include: (1) the opening line and the
  > exact ask, (2) responses to the five most common pushbacks
  > ("that's the best we can do", "let me transfer you",
  > retention offers that aren't really discounts), (3) what
  > competing offers to cite, look up current competitor pricing
  > for my area if you can, and (4) when to ask for a supervisor
  > and when to hang up and call back. Keep it firm but polite.
  > No bluffs I can't back up.
source: |
  This prompt pack writes a call script for negotiating a lower bill.
  Paste it into Muse along with your bill details.

  > Write me a phone script for negotiating down my [cable /
  > internet / insurance] bill. Current bill: [amount], paying
  > for [plan details]. Include: (1) the opening line and the
  > exact ask, (2) responses to the five most common pushbacks
  > ("that's the best we can do", "let me transfer you",
  > retention offers that aren't really discounts), (3) what
  > competing offers to cite, look up current competitor pricing
  > for my area if you can, and (4) when to ask for a supervisor
  > and when to hang up and call back. Keep it firm but polite.
  > No bluffs I can't back up.
---

Bill Negotiation Script is a prompt pack for the call everyone
dreads. Give it your bill details and it writes the full script:
your opening line and exact ask, answers to the five pushbacks reps
always use, real competitor prices to cite for your area, and clear
rules for when to escalate and when to hang up and try again.

## What it includes

- Opening line and the exact ask
- Five pushback responses (retention theater included)
- Competitor pricing to cite
- Escalate vs. call-back rules

## Example

Input: "$94/mo internet, 300 Mbps plan, competitor offering $55 for 500 Mbps."

Output (abridged):

```
Opening: "Hi, I'm looking at my bill and at what [competitor]
is offering new customers in my area..."

If they say "that's the best we can do":
"Understood. Can you check the retention desk before I switch?
I'd rather stay."

Escalate if: second "no" from the first rep. Call back if: offered
only a 3-month promo, those expire into a higher bill.
```
