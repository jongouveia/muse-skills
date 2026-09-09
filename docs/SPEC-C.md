# Lane C: homepage inspection fixes

REASONING: medium

## Objective
Apply the architect's inspection findings on the built homepage and shared sheet. Read `src/pages/index.astro`, `src/components/{Bank,PatchSheet,LoadKey,Masthead}.astro`, `src/styles/global.css` first. Strings verbatim from `docs/COPY.md`; do not add copy.

## Files and changes
1. `src/pages/index.astro` + `src/components/Masthead.astro`: the homepage shows "Muse Skills" twice (masthead legend and a second display h1). Keep exactly one: on the homepage the masthead site name IS the h1 (render it as `<h1>` there, `<a>`/`<p>` elsewhere via a prop). Remove the second display heading; keep the offer paragraph as the opening line under the masthead at 20 to 22px, measure 60ch, left aligned.
2. `src/components/PatchSheet.astro`: "What it includes" appears twice (the entry body's own `## What it includes` section and the frontmatter `includes` list). Remove the frontmatter routing list from the sheet main column. Render `includes` instead in the Load column meta as a legend row `Includes` with the items as small printed chips (bone rule, 1px, no fill).
3. `src/components/PatchSheet.astro` + CSS: the Load column leaves a tall empty gap with the Load key at the bottom. Make the column `align-content: start`: meta rows first, then the Load key directly below them, then the status line. On desktop the column is `position: sticky; top: 24px` so the key stays in view while the sheet scrolls. Keep the mobile sticky-bottom behavior.
4. `src/pages/index.astro`: pluralize counts: "1 patch", "2 patches". Apply the same in `src/lib/categories.ts` as a `patchCount(n)` helper and use it wherever a count renders.
5. `src/components/Bank.astro` + CSS: on narrow widths the category bracket label clips ("CHIEF OF STAFF & PRODU"). Let the group label wrap to two lines or shrink with `text-overflow: ellipsis` and a `title` attribute; the group must never clip mid-word without an ellipsis.
6. `src/components/PatchSheet.astro`: the Warnings block currently uses a thick top rule in `--color-warn`. Keep it at 2px max; make the legend "Warnings" print in `--color-warn` and the body text in bone.

## Constraints
Same as `docs/SPEC-A.md`. No new copy. Do not run git commit.

## Verification
`npm run build` exits 0; `grep -c "<h1" dist/index.html` prints 1; `grep -c "1 patch<" dist/index.html` prints at least 1 (or `grep -c "1 patches"` prints 0); `grep -c 'role="tab"' dist/index.html` prints 12. Run these and include the actual output in your final message.
