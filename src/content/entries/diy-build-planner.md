---
title: "DIY Build Planner"
tagline: "Turns a build idea, measurements, and budget into a materials list and a step plan."
category: "home"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/diy-build-planner.md"
source_verified: false
origin: "directory"
includes:
  - "Materials list with quantities and estimated cost"
  - "Cut list for boards and sheets"
  - "Tool list split by owned and to borrow or rent"
  - "Step plan in order with checks at each stage"
  - "Flags for structural, permit, and licensed-trade work"
version: "1.0.0"
date_added: "2026-11-05"
safety_notes: "Never presents a plan as safe for structural, electrical, plumbing, or gas work; those lines always get a note to bring in a licensed pro. Never invents a measurement or a price. Reminds the user to check local permit and setback rules before buying materials for an outdoor structure."
install_prompt: |
  To install the DIY Build Planner skill, save the skill source below as ~/workspace/skills/diy-build-planner/SKILL.md, then tell Muse to use it whenever you describe a project to build and ask what to buy and how to do it.

  --- SOURCE ---
  ---
  name: diy-build-planner
  description: Plan a DIY build from an idea, measurements, and a budget. Use when the user says "build a shed", "build shelves", "DIY build plan", "materials list", "cut list", or describes a project to build and asks what to buy and how to do it.
  ---

  ## Purpose
  Turn a build idea into a plan a person can actually follow: a materials list with quantities and estimated cost, a cut list, the tools needed, and the steps in order. The plan stays inside the measurements and budget the user gives, and it flags work that belongs to a licensed pro.

  ## Workflow
  1. Collect the project: what is being built, where it goes, the measurements, and the budget. Ask for a sketch or a photo of the space when one helps.
  2. Break it into parts: frame, surfaces, fasteners, and finish, each with quantities worked out from the measurements.
  3. Price it: an estimated cost per line from prices the user gives or typical store prices, with the total checked against the budget. If it runs over, say so and offer a smaller scope.
  4. Build the cut list: every board or sheet with its length, width, and count, grouped so cuts waste as little material as possible.
  5. List the tools: what the build needs, marking which tools the user already has and which to borrow or rent.
  6. Order the steps: site prep first, then frame, then surfaces, then finish, with a check at each stage for square, level, and plumb.
  7. Flag the limits: load-bearing work, electrical, plumbing, gas, and anything a permit covers gets a clear note to bring in a licensed pro or check local rules first.

  ## Output Contract
  - A materials list: item, quantity, size, and estimated cost, with a total against the budget.
  - A cut list: every piece with dimensions and count.
  - A tool list: needed tools, split into owned and to borrow or rent.
  - A step plan in order, with a check at each stage.
  - A flags list: structural, permit, or licensed-trade work that needs a pro.

  ## Operating Rules
  - Never invent a measurement or a price. If a number is missing, ask for it or mark the plan as partial.
  - Never present a plan as safe for structural, electrical, plumbing, or gas work; those lines always get a pro note.
  - Remind the user to check local permit and setback rules before buying materials for an outdoor structure.
  - Keep all measurements in one unit through the plan, and state the unit.
  - If the budget cannot cover the materials, say so plainly and offer a smaller scope instead of trimming the list silently.
source: |
  ---
  name: diy-build-planner
  description: Plan a DIY build from an idea, measurements, and a budget. Use when the user says "build a shed", "build shelves", "DIY build plan", "materials list", "cut list", or describes a project to build and asks what to buy and how to do it.
  ---

  ## Purpose
  Turn a build idea into a plan a person can actually follow: a materials list with quantities and estimated cost, a cut list, the tools needed, and the steps in order. The plan stays inside the measurements and budget the user gives, and it flags work that belongs to a licensed pro.

  ## Workflow
  1. Collect the project: what is being built, where it goes, the measurements, and the budget. Ask for a sketch or a photo of the space when one helps.
  2. Break it into parts: frame, surfaces, fasteners, and finish, each with quantities worked out from the measurements.
  3. Price it: an estimated cost per line from prices the user gives or typical store prices, with the total checked against the budget. If it runs over, say so and offer a smaller scope.
  4. Build the cut list: every board or sheet with its length, width, and count, grouped so cuts waste as little material as possible.
  5. List the tools: what the build needs, marking which tools the user already has and which to borrow or rent.
  6. Order the steps: site prep first, then frame, then surfaces, then finish, with a check at each stage for square, level, and plumb.
  7. Flag the limits: load-bearing work, electrical, plumbing, gas, and anything a permit covers gets a clear note to bring in a licensed pro or check local rules first.

  ## Output Contract
  - A materials list: item, quantity, size, and estimated cost, with a total against the budget.
  - A cut list: every piece with dimensions and count.
  - A tool list: needed tools, split into owned and to borrow or rent.
  - A step plan in order, with a check at each stage.
  - A flags list: structural, permit, or licensed-trade work that needs a pro.

  ## Operating Rules
  - Never invent a measurement or a price. If a number is missing, ask for it or mark the plan as partial.
  - Never present a plan as safe for structural, electrical, plumbing, or gas work; those lines always get a pro note.
  - Remind the user to check local permit and setback rules before buying materials for an outdoor structure.
  - Keep all measurements in one unit through the plan, and state the unit.
  - If the budget cannot cover the materials, say so plainly and offer a smaller scope instead of trimming the list silently.
---

## What it includes

Starting a build without a plan usually means three trips to the hardware store and a pile of offcuts you cannot use. This skill takes the idea, the measurements, and the budget, then turns them into a working plan: a materials list with quantities and an estimated cost for each line, a cut list for every board and sheet grouped to waste as little as possible, and a tool list split into what you already own and what to borrow or rent. The steps run in order, site prep first, then frame, then surfaces, then finish, with a check for square, level, and plumb at each stage. If the total runs over budget, the skill says so plainly and offers a smaller scope instead of quietly trimming the list. Anything structural, electrical, plumbing, or gas gets a clear note to bring in a licensed pro, and outdoor structures get a reminder to check permit and setback rules before buying.

## Example

You want a 12 foot by 4 foot firewood rack with a sloped roof, and your budget is 400 dollars. You give the measurements and the budget, and the skill returns the materials list: posts, rails, roof panels, and fasteners with quantities and estimated costs, a cut list for every board, and a tool list showing you own the drill and saw but need to borrow a level. The total comes to 360 dollars, inside budget, and the step plan runs from leveling the pad, to the frame, to the roof, with a square check after the frame goes up. The skill notes the rack is freestanding, so no permit flag applies.
