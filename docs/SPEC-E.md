# Lane E: finish-review fixes

REASONING: high

## Objective
Apply the finish reviewer's material fixes to the Muse Skills site. Read the direction contract `.impeccable/surfaces/src-pages-index-astro.md`, `PRODUCT.md`, `docs/COPY.md` (updated: About safety line now "We test submitted install prompts in a fresh Muse chat before we list them."; new string "Read the full source" for the homepage sheet link), then `src/styles/global.css`, `src/components/{Bank,PatchSheet,LoadKey,Masthead}.astro`, `src/layouts/Base.astro`, `src/pages/index.astro`, `src/pages/category/[slug].astro`, `src/pages/about.astro`, `src/pages/submit.astro`.

## Changes (all required)
1. First viewport, desktop 1440x900: remove the offer paragraph (`.offer-line`) from the homepage; the masthead tagline carries the offer. Fit all 12 slots on one row at 1440: reduce slot width (`flex: 0 0 96px` or fluid `flex: 1 1 88px` inside groups) and group gaps so the bank never wraps at widths >= 1280; the sheet title, the Load column, and the whole Load key must sit inside 1440x900. Mobile 390: compress the stacked masthead so the tagline and nav share one band and the search sits beside or directly under them; the bank and the sheet title must land inside the first 844px viewport.
2. Homepage sheet: add a link "Read the full source" to `/entry/<slug>/` in the Load column directly under the status line, styled as a printed legend link (bone, underlined, 2px underline offset). Every sheet on the homepage and category pages gets it. Entry pages omit it.
3. Ground: shift the panel tokens warm. `--color-panel: #1a1816`, `--color-panel-raised: #211e1b`, `--color-panel-recess: #131110`; retune `--color-bone-dim` and `--color-rule` against them and keep every text/ground pair >= 4.5:1 (state the checked ratios for bone-dim on panel and on panel-raised in your final message). The brushed ground pattern (global.css around line 48) must be visible: raise its alpha until a screenshot shows it faintly (about 4 to 6%), keep it subtle.
4. Type rule: `--font-mono` only inside the source `<pre>`, the install-prompt textarea, and code blocks inside entry bodies. Meta values (type, category, version, date, author), include chips, status lines, category counts, the bank legend note, and slot numbers use `--font-legend` with `font-variant-numeric: tabular-nums` (small caps or uppercase where it is a legend, mixed case for values).
5. Materials: slots read as recessed wells: a darker inner field (`--color-panel-recess`) plus an inset top edge (`box-shadow: inset 0 1px 0 rgb(0 0 0 / 0.6), inset 0 -1px 0 rgb(230 226 214 / 0.06)`; inset shadows are allowed, offset drop shadows are not). The Load key reads as a keycap at rest: a 2px bone rule, a slightly raised field (`--color-panel-raised`), `box-shadow: inset 0 -2px 0 rgb(0 0 0 / 0.5)`, and on `:active`/`[data-state=loaded]` the lit orange fill with the inset shadow removed (pressed). Status line and live values render as an LCD readout: a recessed dim field (`--color-panel-recess`), cyan ink, legend face, 1px rule.
6. Category page: ensure "What it includes" renders once per sheet (the entry body's own section stays; the frontmatter includes stay as chips in the Load column, same as the homepage). Verify `grep -c "What it includes" dist/category/chief-of-staff/index.html` equals the number of sheets on that page (4).
7. About page: replace the safety line with the updated COPY string.
8. Mobile bracket labels: allow the group label to wrap to two lines (no ellipsis) inside the horizontal strip; the group width follows its slots. Submit checklist: confirm the `[ ]` mark has at least 12px gap before the text at 1440 and 390.

## Constraints
Same as `docs/SPEC-A.md`. No new copy beyond COPY.md. Do not run git commit. Keep all 22 pages building.

## Verification
`npm run build` exits 0 and prints 22 pages; `grep -c "offer-line" dist/index.html` prints 0; `grep -c "Read the full source" dist/index.html` prints 12; `grep -c "/entry/deal-hunter/" dist/index.html` prints at least 1; `grep -c "We test submitted install prompts" dist/about/index.html` prints 1; `grep -c "What it includes" dist/category/chief-of-staff/index.html` prints 4. Run these and include the actual output in your final message.
