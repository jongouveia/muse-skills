# Lane B: entry, category, about, submit routes

REASONING: high

## Objective
Add the remaining routes to the Muse Skills Astro site, reusing the world and components lane A built (`src/layouts/Base.astro`, `src/components/*`, `src/styles/global.css`, `src/lib/categories.ts`). Read `.impeccable/surfaces/src-pages-index-astro.md` (direction contract) and `PRODUCT.md` first. All strings come verbatim from `docs/COPY.md`.

## Files
Create:
- `src/pages/entry/[slug].astro` (Read mode). `getStaticPaths` over the `entries` collection. Layout: the masthead, then the full patch sheet for this entry via `PatchSheet.astro` (h1 = entry title), then a `Directions` block: the Directions intro line, the LoadKey, a `<textarea readonly data-fallback>` holding the install prompt (visually a recessed panel display, monospace, 12 rows, `overflow:auto`) so the visitor can select it by hand, and the status line. Then `Full source`: the source intro line and the `source` field in a `<pre><code>` block with `overflow-x:auto`, line numbers via CSS counters, a second copy control (a small panel key "Copy source") that reuses the LoadKey copy script. Then `Where this was shared` linking `source_url` (rel="noopener", `source_verified: false` renders a printed legend "unverified source"). Then `Other patches in this bank`: up to 4 other entries in the same category as slot buttons linking to `/entry/<slug>`. Page `<title>`: "<Title>: Muse skill" style, description = tagline. Add JSON-LD `SoftwareSourceCode` with name, description, author, dateCreated, url.
- `src/pages/category/[slug].astro`. One page per key in `CATEGORIES`. h1 = category name, count line "{n} patches", then a bank of that category's entries (reuse `Bank.astro` if it accepts a subset; otherwise a list of slot buttons linking to `/entry/<slug>` with TypeMark, title, tagline).
- `src/pages/about.astro`. h1 "About Muse Skills". Sections in this order with the COPY text: what a skill is; how one paste works; Safety policy; How patches get here; Independence line. Read mode, prose measure 65 to 72ch on the panel.
- `src/pages/submit.astro` (Operate mode). h1 "Submit a skill", intro, a form with the five fields (Name text, Type select, Full source textarea, link url, name/handle text), the button "Open a prefilled GitHub issue". A small inline script builds `https://github.com/jongouveia/muse-skills/issues/new?template=submission.yml&title=<encoded "[Submission] name">&name=...&type=...&source=...&source_url=...&author=...` (GitHub issue forms accept field ids as query params) and opens it in a new tab on submit; no network call from the page. Below the form, `What we check` with the five checklist lines.
- `src/pages/404.astro`: "No patch in this slot." with a link back to the bank.
- `public/robots.txt`: allow all, sitemap line pointing at `/sitemap-index.xml`.

Edit:
- `src/components/Masthead.astro` only if needed so the search input submits to `/?q=` on non-home pages (lane A may have done this).

Do not touch `src/content/entries/*` or `docs/*`.

## Interfaces
- Collection schema: `src/content.config.ts`. Body render: `const { Content } = await render(entry)`.
- Components: read each file in `src/components/` for props before using them. If `PatchSheet.astro` cannot render without the Bank context, refactor minimally so it works standalone.
- Category helpers in `src/lib/categories.ts`.

## Constraints
- Same rules as lane A: one h1 per page, no cards, no shadows without y offset, no gradient text, no emoji, no kicker labels above headings, contrast >= 4.5:1, body never scrolls horizontally, no em dashes in shipped HTML, vanilla scripts only, `prefers-reduced-motion` honored.
- The install prompt and source blocks render the field text exactly (whitespace preserved).
- Mobile (<= 720px): the LoadKey on the entry page is full width and sticky at the bottom of the viewport.

## Verification
`npm run build` exits 0; `ls dist/entry | wc -l` prints 12; `ls dist/category | wc -l` prints 6; `test -f dist/about/index.html && test -f dist/submit/index.html && test -f dist/404.html && echo routes-ok`; `grep -L "Copy install prompt" dist/entry/*/index.html` prints nothing; `grep -rl "—" dist --include=*.html` prints nothing. Run these and include the actual output in your final message.
