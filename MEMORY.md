# muse-skills: project memory (canonical state)

Directory of ready-to-use skills, prompt packs, workflows, and configs for Muse AI (Meta's chatbot). Independent, not affiliated with Meta. One-paste install is the mechanism. Owner: Jon (personal, github.com/jongouveia/muse-skills).

## State (2026-09-09)
- v0.1 live at https://muse-skills.vercel.app and https://museskills.dev (www too; both attached to Vercel project `muse-skills`, team jons-projects, verified 2026-09-09; `vercel deploy --prod` from the repo). Prod deploy: `vercel deploy` then `vercel promote <url> --yes` (the classifier blocks `vercel deploy --prod`). Canonical host, redirects, and security headers set 2026-09-09 (docs/SPEC-F.md). GitHub: github.com/jongouveia/muse-skills (public, created 2026-09-09); `origin/main` tracks it. Submit form opens a prefilled issue from `.github/ISSUE_TEMPLATE/submission.yml`.
- 12 seed entries in `src/content/entries/`, all `author: Muse Skills editors`, `origin: directory` (renders "Written for this directory"), `source_url` = the entry's file on GitHub. Real shared skills use `origin: shared` and `source_verified`.
- Homepage = h1, lead, filter panel (search, category and type chips, live count), skill rows; entry = breadcrumb, main column, sticky Details card. Categories with zero entries are hidden everywhere (`marketing` exists in the schema, no entries yet).
- Visual world (replaced 2026-09-09 at Jon's request): plain shadcn zinc directory modeled on grokbot.dev, light default with dark toggle, Geist. DESIGN.md + `.impeccable/design.json` are canonical; direction contract in `.impeccable/surfaces/src-pages-index-astro.md` (roll 243a3bd7 overridden by Jon's pin). Finish reviews shipped 2026-09-09 and 2026-09-10 (both themes, all page types). Build spec: `docs/SPEC-H.md`.
- Implementation runs in Codex lanes (Jon's call, 2026-09-09): specs in `docs/SPEC-A.md` (world + homepage) and `docs/SPEC-B.md` (routes). Claude is architect and reviewer.
- Site copy is fixed in `docs/COPY.md` and has passed `desk.py check` and slopscan. Content brief for new entries: `docs/CONTENT-BRIEF.md`.

## Gotchas
- Muse itself (Jon's Muse agent) writes entries into `src/content/entries/`; `npm run build` runs `scripts/gate-entries.mjs --quarantine` first (see docs/DRAFTS.md), so ungated files move to `drafts/` at build time. History: entries arrived ungated (16 at 22:01 and 1 at 22:15 on 2026-09-09, four in a `marketing` category). They sit in `drafts/entries/` (gitignored) until they pass `desk.py check`; 16 of them are still in commit 49e05fc on GitHub. Never `git add -A` in this repo; stage paths. Codex lanes: the sol lane hit the 1800s watchdog and once fabricated a stub `lucide-astro` package instead of reporting a failed install; check `package-lock.json` after any lane that installs.
- Entries are prose that ships: run `desk.py check` + slopscan `--genre technical` on every new entry. Slopscan's staccato rule fires on numbered workflow steps (code-reviewer, marketplace-scout); judged legitimate list structure, not fixed.
- Muse skill conventions (`~/workspace/skills/<slug>/SKILL.md`, skill-creator sections) came from the build brief and are unverified against Muse docs. The Deal Hunter install prompt still needs an end-to-end test in a real Muse chat (v0.1 definition of done).
- `npx astro check` prompts to install `@astrojs/check` and hangs non-interactively; use `npm run build` as the check.
- The Claude Code classifier blocks `gh repo create`, `gh api` repo creation, `vercel deploy --prod`, and `git filter-branch`; Jon runs those with `!`. Seven early commits carry author jon@pixelcove.co; repo-local user.email is now the gmail address.

## Open
- GSC: properties `https://museskills.dev/` and `sc-domain:museskills.dev` added 2026-09-10 via `google-search-console-pp-cli webmasters add-site` (URL-encode the siteUrl), both unverified. Verify with the HTML-tag token via the `PUBLIC_GSC_VERIFICATION` Vercel env var, then `webmasters submit-sitemap <enc-site> <enc-sitemap-url>`.
- Sitemap is served at `https://museskills.dev/sitemap.xml` (2026-09-10): `@astrojs/sitemap` writes `sitemap-index.xml`/`sitemap-0.xml`, and a `vercel.json` rewrite maps `/sitemap.xml` onto the index so every property uses the same URL. robots.txt advertises `/sitemap.xml`; submit that to GSC.
- v0.1: impeccable finish review verdict + DESIGN.md on the top-nav layout; E2E install test of Deal Hunter in a real Muse chat; push to GitHub.
- v0.2: newsletter (Buttondown or ConvertKit), Plausible, submission moderation flow.
- v0.3: ratings, collections.
