# Lane L: gate hardening for Muse's writes

REASONING: medium

## Objective
Muse writes entries into `src/content/entries/` continuously, sometimes overwriting entries that already shipped. Two changes to `scripts/gate-entries.mjs` and the build script so the site never loses a shipped entry and Muse's dash habit stops needing a human. Read `scripts/gate-entries.mjs`, `package.json`, `docs/DRAFTS.md`, `MEMORY.md` (Gotchas) first.

## Changes

1. Auto-fix before quarantine. `--quarantine` mode first applies the same dash fix as `--fix-dashes` to every failing file in place, re-checks, and only quarantines files that still fail. Print `FIXED <file>` for files the dash fix cleaned. The build script in `package.json` stays `node scripts/gate-entries.mjs --quarantine && astro build && cp dist/sitemap-index.xml dist/sitemap.xml`.
2. Protect tracked entries. Before quarantining a failing file, check whether git tracks it: `git ls-files --error-unmatch <file>` exits 0. If tracked, do not move it. Instead copy the failing working-tree version to `drafts/entries/<slug>.muse.md` (overwrite any older `.muse.md` copy), then restore the tracked version with `git checkout -- <file>`, and print `RESTORED <file> (Muse rewrite saved to drafts/entries/<slug>.muse.md)`. If git is unavailable (no `.git`, or the command errors), fall back to the current quarantine behavior. Vercel clones the repo, so on Vercel every tracked file already matches git and this branch is a no-op there.
3. Record it: add both rules to `docs/DRAFTS.md` in two short paragraphs, and to `drafts/GATE-REPORT.md` output (one line per FIXED and RESTORED file with the timestamp, same format as the existing moved-file lines).
4. Muse instruction file: write `docs/MUSE-WRITING-RULES.md`, the rules Muse's writing prompt should carry, one line each: no em dashes or en dashes as dashes (use a colon, period, or comma); no claims of guarantee, "100%", or hype words (list the gate's banned list); `source_verified: false` and `origin: "directory"` on every new entry; never overwrite an existing file in `src/content/entries/` (pick a new slug); the install prompt must contain the full source after `--- SOURCE ---`; body at least 80 words; category from the list in `src/lib/categories.ts`. Keep it under 20 lines; Jon pastes it into Muse's instructions.

## Constraints
No new packages. Do not edit entry markdown files. Do not run git commit. No dev server. `npm run build` only.

## Verification
Paste actual output:
- Create a temp copy test: `cp src/content/entries/deal-hunter.md /tmp/dh.bak`, append a line with an em dash to `src/content/entries/deal-hunter.md`, run `node scripts/gate-entries.mjs --quarantine`, and show that it prints `FIXED src/content/entries/deal-hunter.md` (dash fixed in place, file not restored because it now passes) or, if the fix leaves it failing, `RESTORED ...` with the `.muse.md` copy present. Then `git checkout -- src/content/entries/deal-hunter.md` and `git status --short src/content/entries` prints nothing.
- Second test: append a line containing `guaranteed` (no dash) to `src/content/entries/deal-hunter.md`, run the gate, expect `RESTORED src/content/entries/deal-hunter.md ...`, `ls drafts/entries/deal-hunter.muse.md` exists, and `git status --short src/content/entries` prints nothing. Remove the `.muse.md` file afterward.
- `npm run build` prints "No files moved." and 53 page(s); `ls src/content/entries | wc -l` prints 41.
- `wc -l docs/MUSE-WRITING-RULES.md` is at most 20.
