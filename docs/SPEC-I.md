# Lane I: entry gate at build time, GSC verification tag

REASONING: medium

## Objective
Muse (Meta's assistant, run by Jon) writes new entry files straight into `src/content/entries/` without the prose gate. Make the build itself the gate so an ungated entry can never ship, locally or on Vercel, and add a Search Console verification meta tag driven by an environment variable. Read `package.json`, `astro.config.mjs`, `src/content.config.ts`, `src/lib/categories.ts`, `src/layouts/Base.astro`, `MEMORY.md` (Gotchas), and three entries (`src/content/entries/deal-hunter.md`, `code-reviewer.md`, `changelog-compiler.md`) for the shape of a valid entry. The desk gate this replaces at build time is `python3 ~/Projects/writer/voiceprint/desk/desk.py check <file>`; read `/Users/jg-cc/.claude/WRITING.md` for the rules it enforces so the in-repo checks match its em dash and phrase rules.

## Changes

1. `scripts/gate-entries.mjs` (Node, no dependencies beyond `node:fs`, `node:path`, and a tiny frontmatter parser you write; do not add packages). For every `src/content/entries/*.md`:
   - Parse frontmatter. Fail the file when any required field is missing or wrong: `title`, `tagline` (max 120 chars), `category` (one of the keys in `src/lib/categories.ts`; read the file and extract the keys with a regex, do not import TypeScript), `type` (skill, prompt, workflow, config), `author`, `source_url` (must start with `https://`), `includes` (non-empty array), `version`, `date_added` (YYYY-MM-DD), `safety_notes`, `install_prompt`, `source`. `origin` defaults to `shared`; `source_verified` defaults to false.
   - Fail the file when it contains an em dash (U+2014) or en dash used as a dash (U+2013 between spaces), a curly-quote-only artifact is fine. Fail on these phrases, case-insensitive, anywhere: "guaranteed", "guarantee", "100%", "seamless", "seamlessly", "revolutionary", "game-changing", "cutting-edge", "unlock", "supercharge", "effortless", "effortlessly", "leverage", "delve", "in today's fast-paced".
   - Fail when the body is under 80 words, or when `install_prompt` does not contain the `source` text (the install prompt must carry the full source).
   - Output: a table to stdout, one line per file, `PASS <file>` or `FAIL <file>: <rule>; <rule>`. Exit 0 when every file passes.
   - Modes: `node scripts/gate-entries.mjs` reports and exits 1 on any failure. `node scripts/gate-entries.mjs --quarantine` moves each failing file to `drafts/entries/` (create the directory; never overwrite an existing file there, suffix `-2` if needed), writes `drafts/GATE-REPORT.md` listing each moved file with its failed rules and the timestamp, prints the same, and exits 0 so the build proceeds with the clean set. `--fix-dashes` replaces each em dash with a colon when the dash sits between two independent clauses and with a comma otherwise (a simple heuristic: colon when the text after the dash starts with a lowercase letter and contains a verb-like word within four words; comma otherwise; document the heuristic in the script header), then re-runs the checks.
2. `package.json` scripts: `"gate": "node scripts/gate-entries.mjs"`, `"gate:fix": "node scripts/gate-entries.mjs --fix-dashes"`, `"prebuild": "node scripts/gate-entries.mjs --quarantine"`. Vercel runs `npm run build`, so `prebuild` runs there too and quarantines ungated files at build time on the build machine.
3. `.gitignore` already ignores `drafts/`; keep it. Add a `drafts/README.md` (tracked, so force-add it with `git add -f` is not needed: put the README at `docs/DRAFTS.md` instead) explaining: what the gate checks, that Muse-written entries land here when they fail, how to run `npm run gate:fix` and `npm run gate`, and that a file moves back to `src/content/entries/` by hand once it prints PASS.
4. `Base.astro`: when `import.meta.env.PUBLIC_GSC_VERIFICATION` is a non-empty string, render `<meta name="google-site-verification" content={...} />` in the head. Document the variable in `README.md` (one line under a "Environment" heading; create the heading if missing).
5. Run `npm run gate` against the current 25 entries and paste the output. All 25 must pass; if any fails on a rule other than a genuine defect in the entry, loosen that rule and say so in the report. Then run `node scripts/gate-entries.mjs` against a copy of `drafts/entries/` (do not move those files; run the checks on the copy in a temp dir by pointing the script at a directory via `--dir <path>`) and paste that output so the report shows the gate catching the 16 known failures.

## Constraints
No new packages. Do not edit entry markdown files. Do not run git commit. No dev server; `npm run build` only (the prebuild hook will run as part of it; with 25 clean entries it moves nothing).

## Verification
Paste actual output:
- `npm run gate` prints 25 PASS lines and exits 0.
- `node scripts/gate-entries.mjs --dir drafts/entries` prints FAIL lines for the em-dash files and exits 1.
- `npm run build` exits 0, shows the gate output first, prints 36 page(s), and `ls src/content/entries | wc -l` still prints 25.
- `PUBLIC_GSC_VERIFICATION=test123 npm run build` then `grep -c 'google-site-verification" content="test123"' dist/index.html` prints 1; a plain `npm run build` then `grep -c google-site-verification dist/index.html` prints 0.
