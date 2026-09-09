---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/entry/[slug].astro","src/pages/category/[slug].astro","src/pages/about.astro","src/pages/submit.astro"]
---

# Surface brief: homepage (/) and the shared world

Scope: the whole site's visual world plus the homepage as first surface. Mode: Persuade on `/`; Read on `/entry/[slug]` and `/about`; Operate on `/submit`.

Audience: Muse AI users with a chat open in another tab, phone as often as laptop. Job: find a skill, judge it safe in under a minute, copy the install prompt. Action: Copy install prompt. Proof: the full source on every entry page; the moderation checklist on /about. Constraints: static Astro, WCAG AA, no em dashes, no fabricated numbers, "not affiliated with Meta" in the footer.

## Direction contract

THESIS: Every skill is a patch in a hardware preset bank. The page is the instrument's front panel: a numbered bank of slots across the top, one patch sheet open at a time, and a single Load action. It refuses the directory default (search hero over a card grid) and the card as a unit; the unit is the slot and the sheet.

OWN-WORLD: Ground is a dark brushed panel (near-black warm gray), legends are screen-printed in a pale bone ink, one hot orange for the active slot and the Load control, one cyan for live values (counts, schedule times, type marks). Type: a condensed grotesk for screen-printed legends in small caps with tabular numerals; a humanist sans for prose on the sheet; a real monospace only inside source and install blocks. Every control is a panel control: slot buttons are recessed rectangles with a printed number, toggles are drawn switches, the copy button is a wide Load key with a lit state. Rules are 1px bone at 30% on the panel. Corners 2px. No cards, no shadows without offset, no gradient text.

STORY: In one viewport the visitor understands: this is a bank of ready patches for Muse; each one shows its full wiring (source); one Load copies a prompt that installs it; safety is printed on the panel, not hidden. They pick a slot, read the sheet, press Load, paste into Muse.

FIRST VIEWPORT: Top strip: masthead "Muse Skills" as a screen-printed panel legend with the tagline "One paste installs the whole thing." Under it, the patch bank: a horizontal row of 12 numbered slots (01 to 12) with the patch name printed under each, grouped by category with a printed bracket label; slot 01 (Deal Hunter) lit orange. Below, the open patch sheet fills the width: left two-thirds is the sheet (name at carton scale, tagline, Uses, What it includes as a routing list, the Warnings block); right third is the Load column: type mark, schedule, version, author, and the Load key (Copy install prompt), which is the largest control on the page. Search is a panel input in the masthead's right end. Category shelves and "new this week" sit below the fold.

FORM: Patch Library, my top-ranked grounded candidate (IMPECCABLE'S PICK), chosen by the user over the assigned Skill Facts Panel. Seed key 243a3bd7. Signature interaction: pressing a slot swaps the sheet in place with a short LCD-style redraw (text lines rewrite top to bottom, 200ms, exponential ease-out); pressing Load lights the key, prints "LOADED, paste into Muse" on the sheet's status line for 2s, and copies. Motion grammar: one authored moment (the sheet redraw); no scroll-triggered entrances.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Unresolved
- Custom domain (Vercel URL for now). Newsletter and analytics are v0.2.
