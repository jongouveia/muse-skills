# Build plan: Muse Skills Directory (production site)

For: Claude (coding agent on the Mac mini). Goal: build the production version of the
grokbot.dev-style directory for Muse AI skills/prompts. A prototype/mock already exists
as a web artifact ("muse-skills-directory") — treat it as a design reference, not the
deliverable. This plan is the build brief.

## 1. Concept

A curated directory of ready-to-use **skills, prompt packs, scheduled workflows, and
config snippets** for Muse AI. Each entry shows its full source and ships a **copy-paste
install prompt**: the visitor pastes one block of text into their Muse chat and their
assistant performs the install (creates the skill, wires up any schedule, confirms).
That one-paste install is the site's core differentiator — lead with it on every page.

## 2. Content model

Each entry is a markdown file with frontmatter:

- `title`, `tagline` (one line), `category`, `type` (`skill` | `prompt` | `workflow` | `config`)
- `author`, `source_url` (where it was shared: X / Threads / Reddit / GitHub)
- `includes` (e.g. instructions, workflow, schedule)
- `install_prompt` (the exact paste-into-chat block)
- `source` (full SKILL.md / prompt text — rendered on the page; this is the trust mechanism)
- `safety_notes`, `version`, `date_added`

## 3. Tech stack (recommended)

- **Astro** + content collections (entries as markdown in the repo), Tailwind for styling.
- Static export, hosted on **Vercel** or **Netlify**. The GitHub repo is the source of truth;
  publishing = merging a PR.
- Client-side search (Pagefind or a simple JS filter) — no backend for v0.1.
- Rationale: cheap, fast, trivially cacheable; matches the grokbot.dev model. Add a backend
  only when ratings/accounts demand it.

## 4. Routes

- `/` — hero ("Ready-to-use skills and prompts for Muse AI. One paste installs the whole
  thing."), search box, entries grouped by category sections.
- `/entry/[slug]` — full description; "what it includes"; full source in a copyable code
  block; big **Copy install prompt** button + "paste into Muse chat" instructions;
  **Before you install** safety box (read the source; never paste secrets a skill asks for);
  author/source link; related entries.
- `/category/[slug]` — all entries in a category.
- `/submit` — submission form (name, type, source text, author link). v0.1: the form opens
  a prefilled GitHub issue; human moderation before merge.
- `/about` — what Muse skills are, how the one-paste install works, safety policy,
  curation cadence.

## 5. Install prompt spec (per type)

- **skill**: "Install the '[Title]' skill. Its full source is below. Create it at
  `~/workspace/skills/[slug]/` as SKILL.md following skill-creator conventions (name +
  description frontmatter; Purpose / Workflow / Output Contract / Operating Rules
  sections), then confirm it is installed and tell me the trigger phrases." + full source.
- **prompt**: "Save this as a reusable prompt pack named '[Title]' and confirm what it
  does." + full text.
- **workflow**: prompt includes the schedule spec; the assistant creates the recurring
  job only after the user confirms timing.
- **config**: the snippet plus where it lives (e.g. feed prompt, hook), with user
  confirmation before writing anything.

## 6. Seed content (write all 12 for launch)

Categories: Deal hunting · Chief of staff & productivity · Money & finance · Shopping ·
Creative · Dev & automation.

1. **Deal Hunter** (skill) — mispriced-listing watch: brand-new listings only, private
   sellers only, strict value bar (asking ≤ 50% of conservative sold value, ≥ $40 upside);
   quiet runs stay quiet, never contacts sellers unprompted.
2. **Marketplace Scout** (skill) — flip finder across Marketplace / Craigslist / eBay for a
   user watchlist.
3. **Chief of Staff Briefing** (prompt) — morning brief built from calendar, inbox, and
   goal state.
4. **Inbox Triage** (workflow) — scheduled email triage producing draft replies, one
   approved step at a time.
5. **Price Drop Watcher** (workflow) — track product URLs, alert when price drops below target.
6. **Subscription Audit** (workflow) — find recurring charges in email/bank data and name
   what to cut.
7. **Vinyl Vault** (skill) — catalog a record collection from photos/lists; wantlist and
   value tracking.
8. **Gift Finder** (skill) — interview-style gift brief → shortlist with buy links.
9. **Trip Planner** (prompt pack) — itinerary builder with dates, budget, and booking links.
10. **Meeting Notes Polisher** (prompt) — raw notes → decisions, owners, deadlines.
11. **Code Reviewer** (skill) — repo-aware review: correctness, security, minimal diffs.
12. **Weekly Feed Brief** (config) — a feed-prompt template for a personalized weekly briefing.

## 7. Curation & moderation

- Sources: weekly sweep of X / Threads / Reddit / GitHub for shared skills (search "Muse AI
  skill", "Muse prompt", etc.); community submissions via `/submit`.
- Moderation checklist before publish: full source readable on the page; no credential
  requests; no exfiltration (nothing sends user data to third parties); the install prompt
  tested end-to-end in a scratch Muse session; author credited with source link.
- Publish cadence: batch weekly; "new this week" section on the homepage.

## 8. Safety policy (site-wide, shown on every entry)

- A shared skill carries somebody else's instructions — read them before installing.
- Never paste an API key, password, or token into anything a skill asks for; legitimate
  skills use the assistant's own secure flows.
- Installing copies the setup into your own environment; it gives the author nothing.

## 9. Growth loop

- Weekly newsletter ("5 new skills this week") — Buttondown or ConvertKit embed; signup in
  the footer and on entry pages.
- "New this week" homepage section.
- v0.2 ideas: ratings, collections ("starter packs"), install-count badges.

## 10. Milestones

- **v0.1**: Astro scaffold, all routes, search, 12 seed entries with real install prompts,
  deployed to Vercel, custom domain.
- **v0.2**: submission flow via GitHub issues, newsletter signup + first issue,
  privacy-friendly analytics (Plausible).
- **v0.3**: ratings / collections (decide on backend then).

## 11. Repo layout

```
src/content/entries/*.md          # the directory itself
src/pages/...
src/components/InstallPromptButton.astro
public/
```

## 12. Definition of done (v0.1)

`npm run build` passes; all 12 entries render with working copy buttons; the install prompt
for the Deal Hunter skill, pasted into a fresh Muse chat, results in a working installed
skill; the site is live on a public URL.

---
Written 2026-09-09. Prototype ("muse-skills-directory" web artifact) was building in
parallel as a design reference.
