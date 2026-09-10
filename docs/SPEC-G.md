# Lane G: homepage h1 and draft entry restore

REASONING: medium

## Objective
Two jobs. (1) Give the homepage a direct h1 that says what the site is. (2) Bring the 12 draft entries in `drafts/entries/` through the prose gate and back into `src/content/entries/`. Read `src/components/Masthead.astro`, `src/pages/index.astro`, `src/styles/global.css`, `docs/COPY.md`, `/Users/jg-cc/.claude/WRITING.md` (rules for the replacements), and two shipped entries (`src/content/entries/deal-hunter.md`, `src/content/entries/standup-writer.md` does not exist; use `code-reviewer.md`) for the house style.

## Changes

1. Homepage h1. In `src/pages/index.astro` the hero renders:
   - `<h1 class="hero-line">Ready-to-use skills for Muse AI.</h1>`
   - `<p class="hero-offer">One paste installs the whole thing. Pick a skill, read its full source, copy the install prompt, and paste it into your Muse chat. Skills, prompt packs, scheduled workflows, and config snippets, all free.</p>`
   In `Masthead.astro` the brand is never an `h1`: render it as `<a class="masthead-brand" href="/">` on every page (drop the `isHomepage` branch for the brand; keep the prop for the search script). Update the `og:image:alt` in `Base.astro` to `Ready-to-use skills for Muse AI.` and the `hero-line` heading margin so it still sits at the same size (the class already carries the display styling; make sure `h1.hero-line` has `margin: 0`). Update `docs/COPY.md` Homepage section: `- H1: Ready-to-use skills for Muse AI.` and the offer line above, verbatim. The `description` meta on the homepage becomes: `Ready-to-use skills, prompt packs, scheduled workflows, and config snippets for Muse AI. Read the full source, copy one install prompt, paste it into Muse.`

2. Draft entries. For each file in `drafts/entries/*.md` (12 files):
   - Run `python3 ~/Projects/writer/voiceprint/desk/desk.py check <file>` and fix every FAIL. Em dashes: replace each with a colon, a period, or a comma per WRITING.md; never a hyphen pair, never a semicolon. `pantry-cook.md` uses "guaranteed": rewrite that sentence without a certainty claim (say what the skill does, not what it promises). Apply the same replacements inside `install_prompt` and `source` blocks; they ship into Muse and must read as plain ASCII prose.
   - Set `source_verified: false` on all 12 (they were written for this directory and have not been tested in a Muse chat; `origin: "directory"` stays).
   - Confirm `category` values are among `deal-hunting, productivity, money, shopping, creative, dev` and `type` is one of `skill, prompt, workflow, config`.
   - Move each fixed file to `src/content/entries/` with `git mv`-free plain `mv` (drafts/ is gitignored).
   - Run the gate again on the moved file; it must print `check: clean`.

3. Slopscan. Run `slopscan --genre technical <file>` on each moved entry if the `slopscan` command exists on PATH; report its output per file, fix anything it marks as a hard failure, and leave "staccato" findings on numbered workflow steps alone (known false positive on this project).

## Constraints
No new copy beyond this spec and the minimal rewrites the gate requires. Keep each entry's meaning; do not shorten or expand sources. Do not run git commit. Do not start a dev server; use `npm run build` only.

## Verification
Run and paste the actual output:
- `ls src/content/entries | wc -l` prints 24 and `ls drafts/entries | wc -l` prints 0.
- `for f in src/content/entries/*.md; do python3 ~/Projects/writer/voiceprint/desk/desk.py check "$f" | grep -E '^check:|FAIL' | tr '\n' ' '; echo " $f"; done` shows `check: clean` on every line.
- `grep -l "—" src/content/entries/*.md | wc -l` prints 0.
- `npm run build` exits 0 and prints 35 page(s).
- `grep -c '<h1' dist/index.html` prints 1 and `grep -o '<h1[^>]*>[^<]*' dist/index.html` prints the hero h1.
- `grep -c 'bank-strip-wrap' dist/index.html` prints 1.
- `grep -c 'role="tab"' dist/index.html` prints 24.
