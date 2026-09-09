# muse-skills: project memory (canonical state)

Directory of ready-to-use skills, prompt packs, workflows, and configs for Muse AI (Meta's chatbot). Independent, not affiliated with Meta. One-paste install is the mechanism. Owner: Jon (personal, github.com/jongouveia/muse-skills).

## State (2026-09-09)
- v0.1 build in progress. Astro 7 + Tailwind 4 static, Vercel target (Vercel URL only; no custom domain yet).
- 12 seed entries in `src/content/entries/`, all `author: Muse community`, `source_verified: false`, placeholder `source_url`. Replace with real shared skills as the weekly sweep finds them.
- Visual world: "Patch Library" (synth preset bank), chosen by Jon on the impeccable decision page over the rolled "Skill Facts Panel". Direction contract: `.impeccable/surfaces/src-pages-index-astro.md`. Seed key 243a3bd7. Code-led build.
- Implementation runs in Codex lanes (Jon's call, 2026-09-09): specs in `docs/SPEC-A.md` (world + homepage) and `docs/SPEC-B.md` (routes). Claude is architect and reviewer.
- Site copy is fixed in `docs/COPY.md` and has passed `desk.py check` and slopscan. Content brief for new entries: `docs/CONTENT-BRIEF.md`.

## Gotchas
- Entries are prose that ships: run `desk.py check` + slopscan `--genre technical` on every new entry. Slopscan's staccato rule fires on numbered workflow steps (code-reviewer, marketplace-scout); judged legitimate list structure, not fixed.
- Muse skill conventions (`~/workspace/skills/<slug>/SKILL.md`, skill-creator sections) came from the build brief and are unverified against Muse docs. The Deal Hunter install prompt still needs an end-to-end test in a real Muse chat (v0.1 definition of done).
- `npx astro check` prompts to install `@astrojs/check` and hangs non-interactively; use `npm run build` as the check.
- `gh repo create` was blocked by the Claude Code classifier; Jon creates the remote.

## Open
- v0.1: finish lane B, impeccable finish review + DESIGN.md, deploy to Vercel, E2E install test in Muse.
- v0.2: newsletter (Buttondown or ConvertKit), Plausible, submission moderation flow.
- v0.3: ratings, collections.
