---
title: "SQL Explainer"
tagline: "Paste a query; get a plain-English walkthrough of what it does."
category: "dev"
type: "prompt"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/sql-explainer.md"
source_verified: true
origin: "directory"
includes: ["prompt-text"]
version: "1.0.0"
date_added: 2026-09-10
safety_notes: |
  Explains the query you paste. Never runs it against a database
  and never asks for credentials.
install_prompt: |
  Install the "SQL Explainer" prompt pack. Its full source is
  below. Save it to ~/workspace/prompts/sql-explainer.md (create
  the folder if needed). Then confirm it is installed and show me
  the full text.

  --- SOURCE ---
  This prompt pack turns any SQL query into a plain-English walkthrough.
  Paste it into Muse along with your query.

  > Explain this SQL query in plain English. Walk through it
  > clause by clause in execution order (not written order):
  > what each part filters, joins, or computes, and what the
  > final result set looks like. Then give: (1) a one-sentence
  > summary of what the query answers, (2) any performance
  > red flags you see : full table scans, unindexed joins,
  > SELECT *, N+1 patterns , and (3) one suggested rewrite if
  > a red flag is serious. Assume I know basic SQL. Do not
  > run the query; explain it from the text.
source: |
  This prompt pack turns any SQL query into a plain-English walkthrough.
  Paste it into Muse along with your query.

  > Explain this SQL query in plain English. Walk through it
  > clause by clause in execution order (not written order):
  > what each part filters, joins, or computes, and what the
  > final result set looks like. Then give: (1) a one-sentence
  > summary of what the query answers, (2) any performance
  > red flags you see : full table scans, unindexed joins,
  > SELECT *, N+1 patterns , and (3) one suggested rewrite if
  > a red flag is serious. Assume I know basic SQL. Do not
  > run the query; explain it from the text.
---

SQL Explainer is a prompt pack for inherited queries. Paste the
query, and it walks through each clause in execution order : what it
filters, joins, or computes : then flags performance problems like
unindexed joins and suggests a rewrite when one matters.

## What it includes

- Clause-by-clause walkthrough in execution order
- One-sentence summary of what the query answers
- Performance red-flag scan with a suggested rewrite

## Example

Input: a 40-line reporting query with three joins and a subquery.

Output (abridged):

```
Summary: monthly revenue per region, excluding refunds.

Execution order:
1. FROM orders , full table scan (red flag: no date filter before join)
2. JOIN customers on id : indexed, fine
...

Red flags: the refund exclusion happens in a subquery after the
big join : filter earlier and this runs ~10x faster.
```
