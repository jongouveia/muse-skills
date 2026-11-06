---
title: "Ratings-First Product Comparison"
tagline: "Compares products by ratings and reviews first, so the best-reviewed pick wins."
category: "shopping"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/ratings-first-product-comparison.md"
source_verified: false
origin: "directory"
includes:
  - "Ratings and review-count check for each candidate"
  - "Review summary that separates real complaints from noise"
  - "Side-by-side table: rating, review count, price, and key specs"
  - "Warning when a product has too few reviews to trust"
  - "A pick with the reasons, in plain language"
version: "1.0.0"
date_added: "2026-11-06"
safety_notes: "Never invents a rating or a review count; every number comes from a source the user can open. Never treats a small review sample as proof. Reminds the user that sponsored listings and fake reviews exist, and that the final buy is the user's call."
install_prompt: |
  To install the Ratings-First Product Comparison skill, save the skill source below as ~/workspace/skills/ratings-first-product-comparison/SKILL.md, then tell Muse to use it whenever you compare products and want the ratings and reviews checked before the price.

  --- SOURCE ---
  ---
  name: ratings-first-product-comparison
  description: Compare products by ratings and reviews before price. Use when the user says "compare products", "which one is better rated", "check reviews", "best reviewed", or asks which product to buy and wants ratings checked first.
  ---

  ## Purpose
  Put ratings and reviews first when comparing products, so a low price on a weak product does not win by default. The skill checks the star rating and the review count for each candidate, reads what buyers actually complain about, and only then looks at price, so the pick rests on how the product holds up in real use.

  ## Workflow
  1. Collect the candidates: product names or links, plus what matters to the user, such as size, fit, or durability.
  2. Pull the ratings: star rating and review count for each candidate, from the merchant page, and note the source.
  3. Read the reviews: common praise, common complaints, and recurring defects, with the worst recurring complaint named plainly.
  4. Flag thin evidence: a rating built on only a handful of reviews, or a high rating with no written reviews behind it.
  5. Build the table: rating, review count, price, and key specs side by side, with the source for every number.
  6. Recommend: the best-reviewed pick that fits the budget, with the reasons in plain language, and say when no candidate earns a recommendation.

  ## Output Contract
  - A ratings table: star rating and review count for each candidate, with the source.
  - A review summary: common praise, common complaints, and the worst recurring defect.
  - A thin-evidence flag for any product with too few reviews to trust.
  - A side-by-side comparison: rating, review count, price, and key specs.
  - A pick with the reasons, or a plain statement that no candidate earns one.

  ## Operating Rules
  - Never invent a rating, a review count, or a price. If a number cannot be found, say so and mark the row as unverified.
  - Treat a small review sample as a soft signal, never as proof; say how many reviews the rating rests on.
  - Check the price only after the ratings are in, so a cheap price cannot hide a weak product.
  - Note when a listing looks sponsored or the reviews look planted, and say the final buy is the user's call.
  - Keep one currency and one unit through the table, and state both.
source: |
  ---
  name: ratings-first-product-comparison
  description: Compare products by ratings and reviews before price. Use when the user says "compare products", "which one is better rated", "check reviews", "best reviewed", or asks which product to buy and wants ratings checked first.
  ---

  ## Purpose
  Put ratings and reviews first when comparing products, so a low price on a weak product does not win by default. The skill checks the star rating and the review count for each candidate, reads what buyers actually complain about, and only then looks at price, so the pick rests on how the product holds up in real use.

  ## Workflow
  1. Collect the candidates: product names or links, plus what matters to the user, such as size, fit, or durability.
  2. Pull the ratings: star rating and review count for each candidate, from the merchant page, and note the source.
  3. Read the reviews: common praise, common complaints, and recurring defects, with the worst recurring complaint named plainly.
  4. Flag thin evidence: a rating built on only a handful of reviews, or a high rating with no written reviews behind it.
  5. Build the table: rating, review count, price, and key specs side by side, with the source for every number.
  6. Recommend: the best-reviewed pick that fits the budget, with the reasons in plain language, and say when no candidate earns a recommendation.

  ## Output Contract
  - A ratings table: star rating and review count for each candidate, with the source.
  - A review summary: common praise, common complaints, and the worst recurring defect.
  - A thin-evidence flag for any product with too few reviews to trust.
  - A side-by-side comparison: rating, review count, price, and key specs.
  - A pick with the reasons, or a plain statement that no candidate earns one.

  ## Operating Rules
  - Never invent a rating, a review count, or a price. If a number cannot be found, say so and mark the row as unverified.
  - Treat a small review sample as a soft signal, never as proof; say how many reviews the rating rests on.
  - Check the price only after the ratings are in, so a cheap price cannot hide a weak product.
  - Note when a listing looks sponsored or the reviews look planted, and say the final buy is the user's call.
  - Keep one currency and one unit through the table, and state both.
---

## What it includes

Most product comparisons start with price, and the cheapest sticker wins before anyone checks whether the product actually holds up. This skill flips the order. It checks the star rating and the review count for each candidate first, from the merchant page, and reads what buyers praise and what they keep complaining about, naming the worst recurring defect plainly. A rating built on only a handful of reviews gets flagged as thin evidence, not treated as proof. Only then does the skill look at price, and it lays everything out in one side-by-side table: rating, review count, price, and key specs, with the source for every number. The pick comes with the reasons in plain language, or a plain statement that no candidate earns a recommendation. It never invents a rating or a review count, and it notes when a listing looks sponsored or the reviews look planted, so the final buy stays your call.

## Example

You are choosing among three drip coffee makers. All prices are in US dollars (USD) and all capacities are in cups.

**Ratings table**

| Product | Rating (stars) | Review count | Source |
|---|---|---|---|
| Maker A | 4.6 | 2,300 | Merchant page |
| Maker B | 4.2 | 180 | Merchant page |
| Maker C | 4.8 | 9 | Merchant page |

**Review summary**

| Product | Common praise | Common complaints | Worst recurring defect |
|---|---|---|---|
| Maker A | The carafe and the brew temperature | None recurring in the reviews read | None found |
| Maker B | Not recurring in the reviews read | Leaky lid | Leaky lid |
| Maker C | Too few reviews to summarize | Too few reviews to summarize | Cannot be named from 9 reviews |

**Thin-evidence flag**

Maker C: its 4.8 rating rests on only 9 reviews, which is too few to trust. Treat it as a soft signal, not proof.

**Side-by-side comparison**

| Product | Rating (stars) | Review count | Price (USD) | Key specs | Source |
|---|---|---|---|---|---|
| Maker A | 4.6 | 2,300 | 89 | 12 cups, thermal carafe | Merchant page |
| Maker B | 4.2 | 180 | 64 | 10 cups, glass carafe | Merchant page |
| Maker C | 4.8 | 9 | 49 | 8 cups, glass carafe | Merchant page |

**Pick**

Maker A: it is the best-reviewed maker with a review count large enough to trust. The low price of Maker C does not hide that its rating rests on almost no buyers at all. The final buy is your call.
