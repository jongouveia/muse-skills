---
title: "Support Ticket Miner"
tagline: "Scans support tickets, clusters repeat issues, and suggests help-doc updates and marketing angles."
category: "productivity"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/support-ticket-miner.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "templates"]
version: "1.0.0"
date_added: 2026-10-08
safety_notes: |
  Reads only the tickets you paste or point it to. It never closes,
  deletes, or replies to a ticket, never edits a help doc, and never
  publishes marketing copy. A human approves every doc change and
  every outbound message.
install_prompt: |
  Install the "Support Ticket Miner" skill. Its full source is below. Create it
  at ~/workspace/skills/support-ticket-miner/SKILL.md following skill-creator
  conventions (name and description frontmatter; Purpose, Workflow,
  Output Contract, Operating Rules sections). Then confirm it is
  installed and tell me the trigger phrases.

  --- SOURCE ---
  ---
  name: support-ticket-miner
  description: Scan support tickets, cluster repeat issues, and suggest help-doc updates and marketing angles. Trigger phrases: "mine my support tickets", "what are customers complaining about", "find repeat support issues".
  ---
  # Purpose

  Turn a batch of support tickets into an evidence-backed map of what
  customers keep running into: the repeat issues, the wording they use,
  and the gaps in your docs. It reads the tickets you give it, groups
  the problems into clusters, and hands you two things: which help
  articles need rewriting, and which customer pains are worth talking
  about in marketing.

  # Workflow

  1. Read the ticket batch: exported CSV, pasted threads, or a
     connection you provide. Ask for the product name and date range
     if they are missing.
  2. Normalize each ticket to one core problem in one sentence.
  3. Cluster tickets by underlying problem, not by surface wording;
     count each cluster and pull 2-3 representative quotes.
  4. For each top cluster, diagnose the root cause as product,
     docs, or messaging, and propose a fix in one line.
  5. Map clusters to help docs: which articles cover them, which
     are missing, which need a rewrite based on real customer
     language.
  6. Draft marketing angles from the sharpest pains, using the
     customers' own words, labeled as drafts only.

  # Output Contract

  - Cluster table: problem, ticket count, share of batch, sample
    quotes, root cause category.
  - Help-doc plan: rewrite list, new-article list, exact customer
    phrases to borrow.
  - Marketing angles: 5-10 one-line angles, each tied to a cluster,
    marked as drafts for human review.

  # Operating Rules

  - Never close, delete, or reply to a ticket.
  - Never publish a help-doc change or marketing copy without human
    approval.
  - Never invent tickets or quotes; every claim traces to a ticket
    in the batch.
  - Quote real customer language; do not smooth it into corporate
    phrasing.
source: |
  ---
  name: support-ticket-miner
  description: Scan support tickets, cluster repeat issues, and suggest help-doc updates and marketing angles. Trigger phrases: "mine my support tickets", "what are customers complaining about", "find repeat support issues".
  ---
  # Purpose

  Turn a batch of support tickets into an evidence-backed map of what
  customers keep running into: the repeat issues, the wording they use,
  and the gaps in your docs. It reads the tickets you give it, groups
  the problems into clusters, and hands you two things: which help
  articles need rewriting, and which customer pains are worth talking
  about in marketing.

  # Workflow

  1. Read the ticket batch: exported CSV, pasted threads, or a
     connection you provide. Ask for the product name and date range
     if they are missing.
  2. Normalize each ticket to one core problem in one sentence.
  3. Cluster tickets by underlying problem, not by surface wording;
     count each cluster and pull 2-3 representative quotes.
  4. For each top cluster, diagnose the root cause as product,
     docs, or messaging, and propose a fix in one line.
  5. Map clusters to help docs: which articles cover them, which
     are missing, which need a rewrite based on real customer
     language.
  6. Draft marketing angles from the sharpest pains, using the
     customers' own words, labeled as drafts only.

  # Output Contract

  - Cluster table: problem, ticket count, share of batch, sample
    quotes, root cause category.
  - Help-doc plan: rewrite list, new-article list, exact customer
    phrases to borrow.
  - Marketing angles: 5-10 one-line angles, each tied to a cluster,
    marked as drafts for human review.

  # Operating Rules

  - Never close, delete, or reply to a ticket.
  - Never publish a help-doc change or marketing copy without human
    approval.
  - Never invent tickets or quotes; every claim traces to a ticket
    in the batch.
  - Quote real customer language; do not smooth it into corporate
    phrasing.
---

Support Ticket Miner turns a pile of support tickets into a clear map
of what your customers keep hitting. It reads the batch you hand it,
reduces each ticket to its core problem, and clusters the repeats so
you can see which issues matter by volume instead of by who shouted
loudest. Each cluster gets a root-cause read, product, docs, or
messaging, plus a one-line fix direction. Then it goes two useful
places at once: it tells you which help articles to rewrite or create
using the customers' own words, and it drafts marketing angles from
the sharpest pains, because the problems people complain about are
often the ones a landing page should answer. It never touches a
ticket, never edits a doc, never sends anything. You approve every
change; it does the reading.

## What it includes

- Ticket batch reader for CSV exports or pasted threads
- Problem clustering by underlying cause with volume counts
- Representative quote pulls in the customers' own words
- Root-cause diagnosis: product, docs, or messaging
- Help-doc rewrite and new-article plan
- Marketing angle drafts tied to each cluster

## Example

Input: 200 exported tickets from a podcast hosting tool, last quarter.

Output:

```
CLUSTER TABLE
| Problem                          | Tickets | Share | Sample quotes                                              | Root cause |
|----------------------------------|---------|-------|------------------------------------------------------------|------------|
| RSS feed rejected by Apple       | 34      | 17%   | "keeps saying my feed is invalid", "apple rejected again"  | docs       |
| Upload stalls at 90%             | 21      | 10.5% | "gets stuck right at the end", "90 percent and nothing"    | product    |
| Import from old host fails       | 18      | 9%    | "old episodes didn't come over", "import just spins"       | product    |
| Download counts differ by app    | 15      | 7.5%  | "numbers don't match spotify", "apple shows fewer"         | messaging  |
| Cover art rejected               | 12      | 6%    | "artwork keeps getting rejected", "says wrong size"        | docs       |

Fixes: rewrite feed validation article with real error screenshots;
add resume for interrupted uploads; add a guided import with a
redirect checklist; explain how each app counts downloads on the
stats page; state exact cover art specs with a failing example.

HELP-DOC PLAN
Rewrite:
- RSS validation guide. Borrow: "rejected by apple", "keeps saying my feed is invalid"
- Cover art requirements. Borrow: "artwork keeps getting rejected", "says wrong size"
New:
- "Upload stalls at 90 percent" troubleshooting page. Borrow: "gets stuck right at the end", "90 percent and nothing"
- "Moving your show from another host". Borrow: "old episodes didn't come over", "import just spins"
- "Why your download numbers differ by app". Borrow: "numbers don't match spotify", "apple shows fewer"

MARKETING ANGLES (drafts for human review)
- [Draft, cluster 1] "Feeds that pass Apple validation the first time."
- [Draft, cluster 2] "No more '90 percent and nothing.'"
- [Draft, cluster 3] "Move your show and bring every old episode with it."
- [Draft, cluster 4] "Download numbers that explain why Spotify and Apple differ."
- [Draft, cluster 5] "Cover art checked for size before Apple sees it."
```
