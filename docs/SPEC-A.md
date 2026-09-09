# Lane A: world, layout, components, homepage

REASONING: high

## Objective
Build the shared visual world (tokens, global CSS, layout, components) and the homepage `/` for the Muse Skills directory in this Astro 7 + Tailwind 4 repo. The world is a hardware synth patch library: a dark brushed front panel, screen-printed legends, one lit slot, one Load key. Follow `.impeccable/surfaces/src-pages-index-astro.md` (the direction contract, binding) and `PRODUCT.md`. All page strings come verbatim from `docs/COPY.md`; do not write new copy.

## Files
Create or replace:
- `src/styles/global.css`: Tailwind 4 `@import "tailwindcss";` plus a `@theme` block defining the tokens below, font-face imports from `@fontsource/barlow-condensed` (weights 500, 600, 700), `@fontsource/public-sans` (400, 500, 600), `@fontsource/red-hat-mono` (400, 500), and base element styles (selection color, caret color, focus ring, scrollbar styling, tabular numerals on legend text).
- `src/layouts/Base.astro`: `<html lang="en">`, head (title, description, canonical, viewport, favicon SVG at `public/favicon.svg` which you draw as a simple 16x16 patch-slot glyph: a rounded rectangle with a lit dot), masthead, `<main>`, footer. Skip link. Props: `title`, `description`.
- `src/components/Masthead.astro`: site name as a screen-printed legend, tagline, nav (Bank, About, Submit a skill), search input (id `search`, placeholder from COPY) that on the homepage filters the bank; on other pages it links to `/?q=<term>` on submit.
- `src/components/Footer.astro`: the footer lines from COPY.
- `src/components/TypeMark.astro`: props `type`. Renders a drawn inline SVG mark plus the word (skill: a square with a notch; prompt: a speech-bubble rectangle; workflow: a clock face; config: a slider). Same 1.5px stroke, 16px. Never color alone.
- `src/components/LoadKey.astro`: props `text` (the install prompt), `label`. A wide panel key `<button type="button" class="load-key" data-copy="...">` that copies `text` to the clipboard via a tiny inline `<script>` (event delegation on `document`, one listener). On success it adds `data-state="loaded"` for 2000ms and updates the nearest `[data-status]` element to the loaded string from COPY; on failure it selects the text of the nearest `[data-fallback]` textarea. Keyboard operable; `aria-live="polite"` on the status line.
- `src/components/PatchSheet.astro`: props `entry` (a collection entry) and `body` (rendered HTML). The sheet: name at carton scale, tagline, `Uses` (the rendered body), `What it includes` as a routing list (each item a printed lane with a drawn connector), `Warnings` block (the three Warnings lines from COPY plus the entry's `safety_notes`), and the Load column (TypeMark, category, version, date added, author with source link, the LoadKey, status line). Used by the homepage and by `/entry/[slug]`.
- `src/components/Bank.astro`: the patch bank. Props `entries`. A horizontal row of numbered slots 01..12 in `date_added` then title order, grouped by category with a printed bracket label above each group. Each slot is a `<button type="button" role="tab" aria-selected>` with number and name; the active slot is lit orange. Below the bank, one sheet region (`role="tabpanel"`) that shows one PatchSheet at a time. Render all 12 sheets server-side, hidden except the first; a small inline script swaps them on slot press with the redraw moment: the incoming sheet's lines reveal top to bottom over 200ms with exponential ease-out (use `clip-path: inset()` or line-by-line `opacity` on `.sheet > *` with staggered `transition-delay`, respecting `prefers-reduced-motion`). Deep link: `?slot=<slug>` selects that slot on load; pressing a slot updates the URL with `history.replaceState`.
- `src/pages/index.astro`: Base layout; offer line; Bank; `New this week` (entries added in the last 7 days, list of slot buttons that jump to that slot); `Browse by category` (six category rows: name, count, link to `/category/<slug>`); `How it works` three steps from COPY. The homepage search filters the bank: slots whose title, tagline, or category does not match dim (`data-hidden`) and the first match becomes active; a `?q=` param seeds the filter.
- `src/lib/categories.ts`: export `CATEGORIES` and `TYPES` (move them out of `src/content.config.ts`, which must keep importing them from here) plus `categorySlug`, `categoryName`, `formatDate` (e.g. "9 Sep 2026").
- Delete the placeholder `src/pages/index.astro` content and the scaffold `src/pages/index.astro` list.

Do not create `/entry`, `/category`, `/about`, `/submit` in this lane. Do not touch `src/content/entries/*`.

## Interfaces
- Content collection `entries` is defined in `src/content.config.ts` (read it). Use `getCollection('entries')` and `render(entry)` from `astro:content` for the body.
- Tailwind 4 via `@tailwindcss/vite` is already in `astro.config.mjs`. Import `src/styles/global.css` once in `Base.astro`.
- Tokens (CSS custom properties inside `@theme`):
  - `--color-panel: #15171b` (ground), `--color-panel-raised: #1c1f24`, `--color-panel-recess: #0f1114`
  - `--color-bone: #e6e2d6` (legend ink), `--color-bone-dim: #a9a59a` (secondary, must stay >= 4.5:1 on panel), `--color-rule: rgb(230 226 214 / 0.3)`
  - `--color-lit: #ff7a1a` (active slot, Load key), `--color-lit-ink: #15171b`
  - `--color-live: #3ec1c9` (live values: counts, times, type marks)
  - `--color-warn: #ffd42a` (Warnings block rule and legend only)
  - `--font-legend: "Barlow Condensed", "Arial Narrow", sans-serif`
  - `--font-prose: "Public Sans", system-ui, sans-serif`
  - `--font-mono: "Red Hat Mono", ui-monospace, monospace`
  - `--radius-panel: 2px`
  - Spacing on a 4px grid; slot height 56px; Load key height 64px.
- Legends: `--font-legend`, uppercase, letter-spacing 0.06em, tabular numerals. Prose: `--font-prose`, 17px/1.6, measure 65 to 72ch. Display (patch name): `--font-legend` 700 at `clamp(2.5rem, 6vw, 5.5rem)`, tracking -0.02em, `text-wrap: balance`.
- Every control is a panel control: slots are recessed rectangles with a 1px rule and a printed number; the Load key is a raised key with a 2px bone rule, lit orange with dark ink when pressed or loaded; focus ring is a 2px `--color-live` outline with 2px offset. No cards, no box shadows without a y offset, no gradient text, no emoji, no kicker/eyebrow labels above headings (legend labels beside content are fine; a label above an H1/H2 is not).
- Contrast: all text >= 4.5:1 on its ground (check bone-dim on panel; adjust the hex if it fails).

## Constraints
- Astro 7 static output; no UI framework; vanilla `<script>` only, minimal.
- Semantic HTML: one `<h1>` per page (homepage h1 = site name in the masthead is NOT the h1; the h1 is the offer line's heading "Muse Skills" once; make the masthead site name a plain link on the homepage and keep exactly one h1).
- Responsive: at <= 720px the bank becomes a horizontally scrolling strip with `scroll-snap`, the sheet stacks (Load column moves under the sheet, Load key full width and sticky at the bottom of the viewport). Body never scrolls horizontally; source/mono blocks scroll inside `overflow-x: auto`.
- Motion: only the sheet redraw and the Load key lit state. No scroll-triggered entrances. Honor `prefers-reduced-motion`.
- Copy: verbatim from `docs/COPY.md`. No em dashes anywhere in shipped HTML.
- Keep the existing `astro.config.mjs` `site` value.

## Verification
`npm run build` exits 0 and `dist/index.html` contains: 12 `role="tab"` buttons, the string "Copy install prompt", the string "Not affiliated with Meta", and no "—" character. Then `grep -c 'role="tab"' dist/index.html` prints 12. Run the verification command and include its actual output in your final message.
