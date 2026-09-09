# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 7 with content collections, Tailwind 4, static export, Vercel. Chosen by the build brief (docs/BUILD-PLAN.md): cheap, static, cacheable, GitHub repo as source of truth. No backend in v0.1.

## Users

People who use Muse AI (Meta's chat assistant) and want it to do more without writing a skill themselves. They arrive from a social post or a search, on a phone as often as a laptop, with a Muse chat open in another tab. Their job: find a skill or prompt that matches a need, judge in under a minute whether it is safe, and get it installed with one paste.

Secondary: people who wrote a skill and want to share it with a source credit.

## Product Purpose

A curated directory of ready-to-use skills, prompt packs, scheduled workflows, and config snippets for Muse AI. Each entry shows its full source and ships one copy-paste install prompt. Success: a visitor copies an install prompt, pastes it into Muse, and has a working skill without reading any docs.

## Positioning

The one-paste install is the mechanism. Other prompt lists give you text to adapt; this directory gives you a block that makes the assistant do the install itself and confirm it. The second claim is trust: every entry renders its full source on the page, and every entry passes a published moderation checklist before it is listed.

The site is independent and community run. It is not affiliated with Meta. Every page must say so where the brand name appears in the site identity (footer at minimum).

## Operating Context

- Entries are markdown files in the repo (`src/content/entries/*.md`). Publishing is a merged PR.
- Curation: a weekly sweep of X, Threads, Reddit, and GitHub for shared Muse skills, plus community submissions via `/submit` (v0.1: prefilled GitHub issue, human moderation).
- The visitor's install flow: read the entry, copy the install prompt, switch to Muse chat, paste, answer the assistant's confirmation questions (schedules and config writes require a confirmation).
- Moderation checklist before publish: full source readable on the page; no credential requests; nothing sends user data to third parties; the install prompt tested end-to-end in a scratch Muse session; author credited with source link.

## Capabilities and Constraints

- Entry types: `skill`, `prompt`, `workflow`, `config`. Categories: Deal hunting, Chief of staff & productivity, Money & finance, Shopping, Creative, Dev & automation.
- Entry fields: title, tagline, category, type, author, source_url, includes, install_prompt, source, safety_notes, version, date_added.
- Routes: `/`, `/entry/[slug]`, `/category/[slug]`, `/submit`, `/about`.
- Client-side search only. No accounts, ratings, or install counts in v0.1 (v0.3 candidates).
- Muse skill conventions the install prompts target: skills live at `~/workspace/skills/<slug>/SKILL.md` with name and description frontmatter and Purpose, Workflow, Output Contract, Operating Rules sections. Taken from the build brief; not yet verified against Muse's own docs.
- Undecided: custom domain (Vercel URL for now), newsletter provider (v0.2), analytics (v0.2, Plausible planned).

## Brand Commitments

- Working name: Muse Skills. No logo yet. "Muse" and "Muse AI" refer to Meta's product; the site name must read as a directory about Muse, never as Muse itself.
- Prose rules: `/Users/jg-cc/.claude/WRITING.md`. No em dashes. Google developer register for page copy; strict ASD-STE100 for install prompts and sources.

## Evidence on Hand

- 12 seed entries with full sources and install prompts in `src/content/entries/`. Authors are placeholders ("Muse community", `source_verified: false`) until real shared skills replace them.
- No testimonials, install counts, user numbers, or press. Do not fabricate any.
- No verified end-to-end install test yet (needs a Muse session; the brief lists it as the v0.1 definition of done).

## Product Principles

1. The install prompt is the product. Every entry page leads with it; the homepage leads with the idea.
2. Source before trust. The full source is always on the page, never behind a click.
3. Safety copy is fixed and repeated: read the source; never paste secrets; installing gives the author nothing.
4. Curated, not crowdsourced. Fewer entries that work beat a long list.
5. Static and fast. Nothing that needs a server until ratings demand it.

## Accessibility & Inclusion

WCAG 2.2 AA as the floor: 4.5:1 text contrast everywhere, keyboard-operable copy buttons with a visible confirmation, self-explanatory link text, one H1 per page. Code blocks scroll inside their container; the page never scrolls horizontally.
