# Lane F: SEO fixes

REASONING: medium

## Objective
Apply the SEO audit findings to the Muse Skills site. Read `astro.config.mjs`, `public/robots.txt`, `src/layouts/Base.astro`, `src/components/{Masthead,PatchSheet,Footer}.astro`, `src/pages/index.astro`, `src/pages/entry/[slug].astro`, `src/pages/category/[slug].astro`, `src/pages/about.astro`, `src/pages/submit.astro`, `src/pages/404.astro`, `src/lib/categories.ts`, `src/content.config.ts` first. Prose strings given here are verbatim; do not invent copy beyond them.

The live host is `https://museskills.dev`. `https://muse-skills.vercel.app` and `https://www.museskills.dev` are aliases of the same Vercel project.

## Changes (all required)

1. Canonical host. `astro.config.mjs`: `site: 'https://museskills.dev'`. `public/robots.txt`: `Sitemap: https://museskills.dev/sitemap-index.xml`. Create `vercel.json` at the repo root with:
   - `redirects`: `muse-skills.vercel.app/(.*)` → `https://museskills.dev/$1` (permanent, matched with a `has: [{ type: 'host', value: 'muse-skills.vercel.app' }]` condition); `www.museskills.dev/(.*)` → `https://museskills.dev/$1` (same pattern, host `www.museskills.dev`).
   - `headers` for `/(.*)`: `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`, `Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'`.
   - Also add `trailingSlash: 'always'` to `astro.config.mjs` so the canonical and sitemap match the served URLs (the site already serves `/about/`).

2. `Base.astro` head. Add props `ogType` (default `website`) and `image` (default `/og-default.png`). Render: `<meta name="viewport" content="width=device-width, initial-scale=1">`, `<meta name="theme-color" content="#1a1816">`, `og:site_name` "Muse Skills", `og:type`, `og:title` (= title), `og:description`, `og:url` (= canonical), `og:image` (absolute URL built from `Astro.site`), `og:image:width` 1200, `og:image:height` 630, `og:image:alt` "Muse Skills: one paste installs the whole thing.", `twitter:card` summary_large_image, `twitter:title`, `twitter:description`, `twitter:image`. Also inject two site-wide JSON-LD blocks in the head: `WebSite` (`name` Muse Skills, `url` site, `description` from the homepage description below, `potentialAction` SearchAction with `target` `https://museskills.dev/?q={search_term_string}` and `query-input` `required name=search_term_string`) and `Organization` (`name` Muse Skills, `url` site, `logo` absolute `/favicon.svg`, `sameAs` `["https://github.com/jongouveia/muse-skills"]`). Keep them server-rendered.

3. Titles and descriptions (each unique, titles 45 to 60 characters, descriptions 120 to 160):
   - Home: title `Muse Skills: one-paste skills and prompts for Muse AI`; description stays the current offer line.
   - Entry: title `` `${title}: ${typeName} for Muse AI | Muse Skills` `` (typeName from `lib/categories.ts`, e.g. "Deal Hunter: skill for Muse AI | Muse Skills"); description `` `${tagline} Read the full source, then paste one install prompt into Muse AI.` ``.
   - Category: title `` `${name} skills for Muse AI | Muse Skills` ``; description `` `${skillCount(n)} for Muse AI in ${name}: ${titles joined with ", "}. Each shows its full source and installs with one paste.` ``; render the same category `description` string (new field, see change 5) under the h1 as a paragraph with class `category-intro`.
   - About: title `About Muse Skills: how one-paste install works`; description `What a Muse skill is, how the one-paste install prompt works, the safety policy we apply, and how skills get into the directory.`
   - Submit: title `Submit a skill to Muse Skills`; description `Share a Muse skill, prompt pack, workflow, or config snippet. A person checks the source, the safety rules, and the install prompt before it is listed.`
   - 404: title `Page not found | Muse Skills`; description `That page is not in the bank. Go back to the skill bank or browse by category.`; add `<meta name="robots" content="noindex">` via a new `Base` prop `noindex`.

4. Heading hierarchy on entry pages. In `PatchSheet.astro`, drive the label level from `headingLevel`: when the title is `h1` the sheet labels (Uses, Before you install, What this one touches) render as `h2`; when the title is `h2` they stay `h3`. In `entry/[slug].astro` the Directions and Full source labels become `h2`; the "Source file" / "Where this was shared" label in the aside becomes `h3`. Keep classes the same so styling does not change.

5. Category descriptions. In `src/lib/categories.ts` add `CATEGORY_DESCRIPTIONS: Record<Category, string>` with these strings, and export `categoryDescription(slug)`:
   - deal-hunting: `Skills that watch marketplaces and flag underpriced listings before anyone else sees them.`
   - productivity: `Briefings, inbox triage, meeting notes, and feed prompts that run your day on a schedule.`
   - money: `Skills that read your receipts and statements and tell you what to cut.`
   - shopping: `Gift ideas and price watching, with links, on the schedule you set.`
   - creative: `Trip plans, collections, and other projects Muse can research and organize for you.`
   - dev: `Code review and automation skills for people who ship software.`

6. Entry schema. Replace the entry JSON-LD with `SoftwareSourceCode` carrying: `name`, `description` (tagline), `url` (canonical), `codeRepository` (`data.source_url`), `programmingLanguage` "Markdown", `author` `{ "@type": "Organization", "name": data.author }`, `datePublished` (YYYY-MM-DD), `dateModified` (same), `version` (`data.version`), `keywords` (includes list joined with ", "), `isPartOf` `{ "@type": "WebSite", "url": site }`, `publisher` `{ "@type": "Organization", "name": "Muse Skills" }`. Add a second `BreadcrumbList` JSON-LD: Bank (site root) → category page → entry page, positions 1 to 3, absolute URLs. On category pages add `CollectionPage` JSON-LD with `mainEntity` an `ItemList` of the entries (`position`, `url`, `name`). On the homepage add `ItemList` of all 12 entries the same way.

7. OG image page. Add `src/pages/og-default.astro`: a 1200x630 page, no masthead or footer (do not use `Base.astro`; import `../styles/global.css` directly), panel background, "MUSE SKILLS" in the legend face at about 120px, under it "One paste installs the whole thing." in bone at about 56px, and a bottom-right legend line "museskills.dev" in cyan. Body margin 0, fixed 1200x630. Add `noindex` and exclude it from the sitemap (`sitemap({ filter: (page) => !page.includes('/og-default') })`). The architect screenshots it to `public/og-default.png` after the build.

8. Footer and About trust line. In `Footer.astro`, under the note, add a second line: `Questions or corrections: open an issue on GitHub.` where "open an issue on GitHub" links to `https://github.com/jongouveia/muse-skills/issues`. In `about.astro`, extend the Independence paragraph with a second sentence: `We do not run ads or take payment for listings.`

9. Crawlable links in the bank. The slot buttons stay buttons (they swap sheets in place), but add `rel="bookmark"`-free plain links: nothing to change in the bank itself. Instead ensure the homepage "New this week" list links to `/entry/<slug>/` with an `<a>` for the title (keep the Load button beside it as a `<button>`). Verify each entry page is reachable by at least two `<a>` links from the homepage (the sheet's "Read the full source" plus this list or the category pages).

## Constraints
Same as `docs/SPEC-A.md`. No new copy beyond this spec. Do not run git commit. Keep all pages building. Do not restructure layout or styling beyond what the changes above need.

## Verification
Run and paste the actual output:
- `npm run build` exits 0 and prints 23 page(s) (22 plus og-default).
- `grep -c 'https://museskills.dev' dist/sitemap-0.xml` prints 22 and `grep -c 'vercel.app' dist/sitemap-0.xml dist/index.html dist/robots.txt` prints 0 for each.
- `grep -o '<title>[^<]*' dist/index.html dist/entry/deal-hunter/index.html dist/category/productivity/index.html dist/about/index.html dist/submit/index.html dist/404.html`.
- `grep -c 'og:image' dist/index.html` prints at least 1; `grep -c 'twitter:card' dist/entry/deal-hunter/index.html` prints 1.
- `grep -c 'BreadcrumbList' dist/entry/deal-hunter/index.html` prints 1; `grep -c 'ItemList' dist/index.html dist/category/productivity/index.html` prints at least 1 each; `grep -c 'WebSite' dist/about/index.html` prints at least 1.
- `grep -oE '<h[1-6]' dist/entry/deal-hunter/index.html | head -6` shows h1 then h2 before any h3.
- `grep -c 'noindex' dist/404.html dist/og-default/index.html` prints 1 each; `grep -c og-default dist/sitemap-0.xml` prints 0.
- `grep -c 'category-intro' dist/category/productivity/index.html` prints 1.
- `cat vercel.json` is valid JSON (`python3 -m json.tool vercel.json`).
