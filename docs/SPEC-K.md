# Lane K: gate and restore the parked drafts

REASONING: medium

## Objective
Bring the 16 entries in `drafts/entries/` through the gate and back into `src/content/entries/`. Read `docs/DRAFTS.md`, `scripts/gate-entries.mjs`, `/Users/jg-cc/.claude/WRITING.md` (dash and phrase rules), `src/lib/categories.ts`, and two shipped entries (`src/content/entries/deal-hunter.md`, `src/content/entries/changelog-compiler.md`) first.

## Steps
1. Run `node scripts/gate-entries.mjs --dir drafts/entries` and record the per-file failures.
2. Run `node scripts/gate-entries.mjs --dir drafts/entries --fix-dashes` (if `--fix-dashes` does not accept `--dir`, extend the script so it does; keep the change minimal). Then re-run the check. For every file that still fails, edit it by hand: replace each remaining em dash with a colon, period, or comma so the sentence reads naturally; rewrite any banned phrase without a certainty or hype claim; keep the entry's meaning and length. Never touch a file that already passes.
3. Read each fixed file once in full and check three things a regex cannot: the `install_prompt` carries the whole `source` verbatim after the `--- SOURCE ---` line; the `category` fits the entry (the four `marketing` entries stay `marketing`; the schema and `CATEGORIES` already carry it); `source_verified` is `false` and `origin` is `directory`. Fix what is wrong.
4. Run `python3 ~/Projects/writer/voiceprint/desk/desk.py check <file>` on each fixed file; every one must print `check: clean`.
5. Move each passing file into `src/content/entries/` with `mv` (no overwrite; if a same-named file exists, stop and report). Leave any file that still fails in `drafts/entries/` and say why.
6. Run `npm run build`; the gate must print PASS for every entry and move nothing.

## Constraints
No new packages. Do not edit entries already in `src/content/entries/`. Do not run git commit. No dev server.

## Verification
Paste actual output:
- `ls src/content/entries | wc -l` (expected 41 if all 16 pass) and `ls drafts/entries | wc -l` (expected 0).
- `npm run gate` prints PASS for every file and exits 0.
- The desk.py line for each restored file.
- `npm run build` prints "No files moved." and the page count (expected 52 with 41 entries plus the Marketing category page).
- `grep -l "—" src/content/entries/*.md | wc -l` prints 0.
