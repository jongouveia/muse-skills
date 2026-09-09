# Lane D: entry, about, submit inspection fixes

REASONING: medium

## Objective
Apply the architect's inspection findings on the entry, about, and submit pages. Read `src/pages/entry/[slug].astro`, `src/pages/about.astro`, `src/pages/submit.astro`, `src/components/LoadKey.astro`, `src/styles/global.css` first. Strings verbatim from `docs/COPY.md` (updated: the first Warnings line now reads "Read the source before you install it."; new strings: source copy key label "Copy source", source status idle "Ready.", after copy "Source copied.").

## Files and changes
1. Entry page layout: the Directions and Full source blocks render in a narrow column (about 40% of the width) below the sheet, and the source `<pre>` is squeezed and clipped. Make both blocks span the same width as the sheet container. Directions: a two-column panel on desktop (Load key and status on the left, 320px; the readonly install-prompt textarea filling the rest, 14 rows), stacked on mobile. Full source: the `<pre>` fills the container width with `overflow-x: auto`, line numbers in a gutter, and never clips text.
2. Copy source control: its status line currently shows the install-prompt strings. Give `LoadKey.astro` optional props `idleText` and `doneText` (defaults stay the install-prompt strings) and use "Ready." and "Source copied." for the source control. Keep one clipboard listener.
3. Replace the Warnings line "Read the source below before you install it." with the updated COPY string everywhere it renders (PatchSheet, about).
4. About page: the Safety policy list renders the three lines indented and the fourth line ("We test every install prompt...") unindented. Render all four as one list, or the three as a list followed by the fourth as a paragraph with matching left edge. Give the Independence paragraph the same section treatment as the others (rule above, no heading needed).
5. Submit page: checklist items render "[ ]The full source..." with the bracket glyph touching the text; put 12px between the mark and the text and vertically center the mark. Constrain the form and checklist to a 720px measure.
6. Related entries ("Other patches in this bank"): the slot shows "#1"; print the entry's bank slot number (its 01..12 position in the homepage order from `Bank.astro`; expose that ordering from `src/lib/categories.ts` or a new `src/lib/bank.ts` so both places share it), and use the same slot styling as the bank.

## Constraints
Same as `docs/SPEC-A.md`. No new copy beyond COPY.md. Do not run git commit. Keep all 22 pages building.

## Verification
`npm run build` exits 0; `grep -c "Source copied." dist/entry/deal-hunter/index.html` prints 1; `grep -c "source below" -r dist --include=*.html` prints nothing or 0 for every file; `grep -c "Read the source before you install it." dist/about/index.html` prints 1. Run these and include the actual output in your final message.
