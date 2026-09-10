---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/entry/[slug].astro","src/pages/category/[slug].astro","src/pages/about.astro","src/pages/submit.astro"]
---

# Surface brief: homepage (/) and the shared world

Scope: the whole site's visual world plus the homepage as first surface. Mode: Persuade on `/`; Read on `/entry/[slug]` and `/category/[slug]`; Read on `/about`; Operate on `/submit`.

Audience: Muse AI users with a chat open in another tab, phone as often as laptop. Job: find a skill, judge it safe in under a minute, copy the install prompt. Action: Copy install prompt. Proof: the full source on every entry page; the moderation checklist on /about. Constraints: static Astro, WCAG AA, no em dashes, no fabricated numbers, "not affiliated with Meta" in the footer. Every SEO artifact from lane F stays (canonical host, OG, JSON-LD, titles).

## Direction contract

THESIS: A plain directory, the category standard played straight at grokbot.dev's craft level. The page is a list of skills you can filter and a detail page you can read top to bottom. It refuses the themed-instrument arrangement that came before it: no bank, no slots, no Load key.

OWN-WORLD: shadcn zinc. Light ground (#ffffff) with zinc-950 ink, zinc-100 muted fields, zinc-200 1px borders, one primary (zinc-900 button with zinc-50 text), 0.5rem radius, sm shadows on cards only. Dark mode swaps to zinc-950 ground, zinc-50 ink, zinc-800 borders. Type: Geist Sans for everything on screen, Geist Mono only inside source and install-prompt blocks. Components: shadcn Button (default, outline, ghost, sm), Badge (secondary, outline), Input, Card, Alert, Separator, Breadcrumb, a ghost icon button for the theme toggle. Icons: lucide, 16px, 1.5 stroke.

STORY: In one viewport the visitor reads the h1 (ready-to-use skills for Muse AI), sees the count and the filter chips, scans rows of skills with their type and category, and understands that each row has one action: copy the install prompt. On the entry page they read what it does, the three safety lines in an alert, the full source, and copy.

FIRST VIEWPORT (desktop 1440x900): sticky 56px header: "Muse Skills" wordmark left, nav Skills / About, then search input, theme toggle, and the primary "Submit a skill" button right. Content column 896px centered. h1 at 36px semibold tracking-tight, lead paragraph at 18px muted under it, max 65ch. A bordered panel: search input full width with a "Clear filters" outline button and the live count "24 of 24 skills"; two chip rows labeled category and type, each chip an outline badge with its count. Below, the list starts: rows divided by 1px rules, each row title (16px medium, link), tagline (14px muted), badges, author line (12px muted), and on the right "View" outline sm and "Copy install prompt" default sm. Three rows fit in the first viewport.

FORM: the standing exit, user-pinned (Jon, 2026-09-09: "simple directory site with shadcn styling, like grokbot.dev"). Roll 243a3bd7 had assigned Skill Facts Panel and Jon had chosen Patch Library; this pin overrides both, and a user-pinned direction beats the roll. Build path: code-led. Signature interaction: the copy button swaps to a check icon and "Copied" for two seconds and the status line under it reads "Paste it into your Muse chat." Filtering updates the count and the rows in place with no animation. Motion grammar: none beyond the copy state and the 150ms color transitions shadcn ships.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Unresolved
- Per-entry OG images (lane G+), featured entries on the homepage once the catalog passes about 60.
