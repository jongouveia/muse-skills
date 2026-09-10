# Lane J: second finish-review fixes

REASONING: medium

## Objective
Apply the finish reviewer's eight material fixes from the dark-mode and secondary-page review, plus one copy correction. Read `DESIGN.md` (the system you must stay inside), `astro.config.mjs`, `src/styles/global.css`, `src/layouts/Base.astro`, `src/pages/entry/[slug].astro`, `src/pages/about.astro`, `src/pages/submit.astro`, `src/components/ui/{Card,Input,Button}.astro` first. No new copy beyond what this spec quotes.

## Changes (all required)

1. Markdown code blocks. Entry bodies render Shiki's `github-dark` `<pre>` (`#24292e`) on the light page. In `astro.config.mjs` set `markdown: { syntaxHighlight: false }` so `.prose pre` inherits the site rule. Confirm `.prose pre` (or the equivalent selector in global.css) renders `bg-muted text-foreground rounded-md p-4 font-mono text-xs overflow-x-auto`, the same as the SKILL.md source block, in both themes.
2. Native control color scheme. In `global.css`, `html { color-scheme: light; }` and `html.dark { color-scheme: dark; }`. Remove any `color-scheme: light dark`.
3. Install prompt block on the entry page: the readonly textarea is a bordered, rounded, `bg-muted` box inside a bordered Card. Make it flush like the source block: no inner border, no inner radius, no inner padding beyond `p-4`, `bg-muted`, so the Install card and the Full source card read as one treatment. Keep `rows`, `readonly`, `font-mono text-xs`, and the copy button in the card header.
4. About and Submit left edge: the `max-w-2xl` reading column currently centers inside the 896px container (h1 at x=404 while the header wordmark sits at x=288 at 1440). Left-align it: keep the `mx-auto max-w-4xl px-4` page wrapper, and inside it a `max-w-2xl` block without `mx-auto`. Same on the 404 page if it uses the centered pattern.
5. Entry page on mobile: the Details aside currently lands after "More in {category}". Below `lg`, place the aside directly after the action row and status line (before the "Before you install" alert), and keep it in the right column on `lg`. Use DOM order plus `lg:` grid placement (for example `lg:col-start-2 lg:row-start-1 lg:row-span-2`) so no `order-*` trick is needed and the reading order matches the visual order at both sizes.
6. Submit `<select>`: add `appearance-none` and a lucide `ChevronDown` (16px, stroke 1.5, `pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground`) inside a `relative` wrapper, with `pr-9` on the select, matching the Input treatment.
7. Submit "What we check" list: replace the `Square` icons with the lucide `Check` icon (16px, stroke 1.5, `text-muted-foreground`, aligned to the first line) so the static list does not read as a form.
8. Entry first viewport: two identical primary "Copy install prompt" buttons are visible (action row and Details card). Make the Details card button `variant="outline"`, full width, and keep the action-row button primary.
9. Copy correction in `src/pages/about.astro` and `docs/COPY.md`: replace the sentence `The first twelve were written for this directory by its editors; each one says so on its page.` with `Entries marked "Written for this directory" came from its editors or from Muse itself; each one says so on its page.`

## Constraints
Stay inside DESIGN.md's tokens and recipes. No new packages. No em dashes. One h1 per page. Do not edit entry markdown files. Do not run git commit. No dev server; `npm run build` only (the prebuild gate runs first and must print PASS for every entry).

## Verification
Paste actual output:
- `npm run build` exits 0 and prints 36 page(s).
- `grep -c 'github-dark' dist/entry/deal-hunter/index.html` prints 0.
- `grep -c 'color-scheme: light dark' dist/_astro/*.css` prints 0 (or the grep finds nothing).
- `grep -c 'appearance-none' dist/submit/index.html` prints at least 1.
- `grep -c 'Written for this directory" came from its editors' dist/about/index.html` prints 1.
- `grep -o '<h1[^>]*>' dist/about/index.html dist/submit/index.html | wc -l` prints 2.
- Describe in one line each how you verified fixes 4, 5, and 8 from the built HTML (class names or DOM order), since you cannot screenshot.
