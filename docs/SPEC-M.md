# Lane M: install prompts that Muse can execute without asking

REASONING: medium

## Objective
Muse (Meta's assistant) executed all 41 install prompts end to end. 18 passed. 22 failed for two reasons that live in the `install_prompt` text, not in the sources. Rewrite those 22 install prompts so a visitor who pastes one gets an install with no follow-up question, then confirm every install prompt still carries its full source. Read `docs/BUILD-PLAN.md` section 5 (install prompt spec per type), `docs/MUSE-WRITING-RULES.md`, `scripts/gate-entries.mjs`, and one passing example per type first: `src/content/entries/code-reviewer.md` (skill), `src/content/entries/bill-due-radar.md` (workflow; note it defers the schedule and still passes), `src/content/entries/weekly-feed-brief.md` (config; failing).

Muse's verified conventions (from the passing installs): skills live at `~/workspace/skills/<slug>/SKILL.md` with `name` and `description` frontmatter and Purpose, Workflow, Output Contract, Operating Rules sections; Muse confirms trigger phrases after install. Muse asks before scheduling and before writing config, and that is correct behavior; the install must complete before that question.

## Pattern A: prompt packs (17 entries)
appointment-prep, chief-of-staff-briefing, ebay-comp-checker, facebook-ad-copy-drafter, fit-finder, grocery-list-builder, interview-prep-coach, meeting-agenda-builder, meeting-notes-polisher, packing-list-generator, pantry-cook, pr-description-writer, seo-meta-writer, social-repurposer, standup-writer, trip-planner, weekly-review.

Current text: `Save this as a reusable prompt pack named "<Title>" and confirm what it does.` Muse asks where and in what format.

New install prompt, verbatim shape (fill the three placeholders; keep the `--- SOURCE ---` block that follows exactly as it is):

```
Install the "<Title>" prompt pack. Its full source is below. Save it at
~/workspace/prompts/<slug>.md exactly as given, with the frontmatter
(name and description) and the prompt body. Do not run it now. Then
confirm it is saved and tell me the trigger phrases: <phrase 1>,
<phrase 2>, <phrase 3>.

--- SOURCE ---
```

Trigger phrases: take them from the entry's source `description` line when it lists them; when the source has none, add a `Trigger phrases: "...", "...", "..."` sentence to the end of the source's description line (three short natural phrases derived from the entry's purpose) and use the same three in the prompt. The `source` field and the source copy inside `install_prompt` must stay byte-identical. chief-of-staff-briefing: replace the `[path to goals.md]` placeholder inside the source with `~/workspace/goals.md` and add one Operating Rules line: `If ~/workspace/goals.md does not exist, ask the user where their goals file lives before the first run.`

## Pattern B: schedule or config at install time (5 entries)
inbox-triage, follow-up-radar, garage-sale-route-planner, subscription-audit (workflows), weekly-feed-brief (config).

Rewrite each workflow install prompt so step one is the install and the schedule is a separate, explicit second step, shaped like bill-due-radar's passing prompt:

```
Install the "<Title>" workflow. Its full source is below. Create it at
~/workspace/skills/<slug>/SKILL.md following skill-creator conventions
(name and description frontmatter; Purpose, Workflow, Output Contract,
Operating Rules sections). Confirm it is installed and tell me the
trigger phrases. Then, as a separate step, propose the default schedule
(<default>) and wait for me to confirm or change it before you create
any recurring job.

--- SOURCE ---
```

garage-sale-route-planner also needs area, radius, and interest keywords: move those into the skill's Workflow as "On first run, ask the user for area, radius, and interest keywords, and store them for later runs," so install needs nothing.

weekly-feed-brief (config): install prompt saves the template at `~/workspace/prompts/weekly-feed-brief.md` with the bracketed fields left as placeholders, confirms the save, and then, as a separate step, asks the user for topics, sources, length, and delivery day and offers to write the feed prompt setting only after they answer. No config write during install.

## Constraints
Edit only the 22 named entry files, only the `install_prompt` field, plus the `source` field where this spec says so (chief-of-staff-briefing placeholder, garage-sale-route-planner first-run step, and description-line trigger phrases where a source had none). Never change titles, taglines, bodies, categories, or `source_verified`. No em dashes. Keep YAML block-scalar indentation. Do not run git commit. No dev server.

## Verification
Paste actual output:
- `npm run gate` prints PASS for all 41 and exits 0 (the gate checks that each install prompt contains its source).
- `grep -L "workspace/prompts\|workspace/skills" src/content/entries/*.md | wc -l` prints 0.
- `grep -c 'Save this as a reusable prompt pack' src/content/entries/*.md | grep -v ':0' | wc -l` prints 0.
- `grep -c "Trigger phrases" src/content/entries/<slug>.md` prints at least 1 for each of the 17 prompt-pack entries (list them).
- `npm run build` prints "No files moved." and 53 page(s).
- `git status --short | wc -l` prints 22 (plus this spec file if untracked).
