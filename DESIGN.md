---
name: Muse Skills
description: A plain directory of one-paste skills for Muse AI, in the shadcn zinc vocabulary, light by default with a dark toggle.
colors:
  background: "#ffffff"
  foreground: "#09090b"
  card: "#ffffff"
  card-foreground: "#09090b"
  muted: "#f4f4f5"
  muted-foreground: "#71717a"
  border: "#e4e4e7"
  input: "#e4e4e7"
  primary: "#18181b"
  primary-foreground: "#fafafa"
  secondary: "#f4f4f5"
  secondary-foreground: "#18181b"
  accent: "#f4f4f5"
  accent-foreground: "#18181b"
  destructive: "#dc2626"
  ring: "#a1a1aa"
  dark-background: "#09090b"
  dark-foreground: "#fafafa"
  dark-muted: "#27272a"
  dark-muted-foreground: "#a1a1aa"
  dark-border: "#27272a"
  dark-primary: "#fafafa"
  dark-primary-foreground: "#18181b"
  dark-destructive: "#ef4444"
  dark-ring: "#d4d4d8"
typography:
  display:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 600
    lineHeight: "2.5rem"
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 600
    lineHeight: "2.25rem"
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: "1.75rem"
  lead:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: "1.75rem"
  body:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  row-title:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: "1.5rem"
  small:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: "1.25rem"
  label:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: "1rem"
  code:
    fontFamily: "Geist Mono Variable, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: 1.625
rounded:
  sm: "0.25rem"
  md: "0.375rem"
  lg: "0.5rem"
  full: "9999px"
spacing:
  "1": "4px"
  "1.5": "6px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "20px"
  "6": "24px"
  "8": "32px"
  "10": "40px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "36px"
    typography: "{typography.small}"
  button-primary-hover:
    backgroundColor: "rgba(24, 24, 27, 0.9)"
  button-outline:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    padding: "0 16px"
    height: "36px"
  button-outline-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-foreground}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    height: "36px"
  button-ghost-hover:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-foreground}"
  button-sm:
    padding: "0 12px"
    height: "32px"
    typography: "{typography.label}"
  button-icon:
    width: "36px"
    height: "36px"
  badge-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.secondary-foreground}"
    rounded: "{rounded.md}"
    padding: "2px 8px"
    typography: "{typography.label}"
  badge-outline:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    padding: "2px 8px"
    typography: "{typography.label}"
  chip-pressed:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    rounded: "{rounded.md}"
    padding: "2px 8px"
  input:
    backgroundColor: "transparent"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    padding: "4px 12px"
    height: "36px"
    typography: "{typography.small}"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.card-foreground}"
    rounded: "{rounded.lg}"
  alert:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.lg}"
    padding: "16px 16px 16px 44px"
    typography: "{typography.small}"
  code-block:
    backgroundColor: "{colors.muted}"
    textColor: "{colors.foreground}"
    rounded: "{rounded.md}"
    padding: "12px"
    typography: "{typography.code}"
---

# Design System: Muse Skills

## Overview

**Creative North Star: "The Category Standard, Played Straight"**

Muse Skills is a plain directory. It borrows the shadcn zinc vocabulary without adding to it: one white ground, near-black ink, a single grey for secondary text, hairline borders, and one solid primary button. The page is a list you can filter and a detail page you can read top to bottom. Nothing on the screen exists to be looked at; every element is there to help a visitor find a skill, judge it safe, and copy its install prompt.

Density is moderate and even. Rows are separated by 1px rules rather than boxes; only two things get a bordered card on the index (the filter panel and nothing else), and on an entry page cards hold the install prompt, the source, and the details column. Type is one family (Geist) at a small set of sizes; mono appears only inside code. Dark mode is the same system with the zinc scale flipped, not a second theme.

Confirmed rejections from the build: no themed or skeuomorphic controls, no accent hue, no motion beyond the copy confirmation and 150ms colour transitions, no shadows heavier than the two shadcn defaults.

**Key Characteristics:**
- Single neutral scale (zinc) in both themes; no chromatic accent.
- Primary is ink on paper: near-black button in light, near-white in dark.
- 1px `border` rules do the structural work; cards are the exception, not the default.
- Geist Sans for all UI text, Geist Mono only inside source and install-prompt blocks.
- Radius family from one `--radius: 0.5rem` token (lg 8px, md 6px, sm 4px).
- Lucide icons at 16px, 1.5 stroke, always paired with a text label or an aria-label.
- Filtering updates the list in place with no animation.

## Colors

A monochrome zinc palette: one paper, one ink, one mid grey, and one hairline, with dark mode swapping the ends of the scale.

### Primary
- **Ink** (`primary`, zinc-900): the solid button fill and the pressed filter chip. In dark mode it becomes **Paper** (`dark-primary`, zinc-50) and the primary button reads as a light block on the dark ground. Text on it is `primary-foreground`. Also the `::selection` highlight.

### Neutral
- **Paper** (`background`, white): page ground, header (at 80% to 95% opacity with backdrop blur), outline button fill, card fill. Dark: **Night** (`dark-background`, zinc-950).
- **Text ink** (`foreground`, zinc-950): all headings, row titles, body copy, active nav link, badge text. Dark: zinc-50.
- **Field grey** (`muted`, zinc-100): install-prompt textarea and `.prose pre` fill, the numbered circles in "How it works". Dark: zinc-800.
- **Secondary text** (`muted-foreground`, zinc-500): taglines, lead paragraphs, author lines, breadcrumb links, inactive nav, chip counts, footer links, placeholder text, status line. Dark: zinc-400. This is the only grey used for text; it passes 4.5:1 on both grounds.
- **Hairline** (`border` and `input`, zinc-200): every 1px rule, row divider, card and input border, header and footer edge. Dark: zinc-800.
- **Chip grey** (`secondary` and `accent`, zinc-100): secondary badge fill and the hover fill for outline, ghost, and chip surfaces. Dark: zinc-800.
- **Focus ring** (`ring`, zinc-400): 2px outline, 2px offset on any focused link, button, or field. Dark: zinc-300.
- **Destructive** (`destructive`, red-600 / red-500 dark): defined in the token set but not used by any shipped component.

### Named Rules
**The One Grey Rule.** Secondary text is always `muted-foreground`. Do not introduce a third text tone or lower opacity on `foreground`.

**The Ink-Only Primary Rule.** There is no accent hue. Emphasis is achieved by inverting the neutral scale (ink fill, paper text), never by colour.

**The Swap, Not Restyle Rule.** Dark mode changes only the custom properties on `.dark`. No component carries a `dark:` class; if a surface needs a dark treatment, the token is wrong.

## Typography

**Display Font:** Geist Variable (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Geist Variable (same family)
**Label/Mono Font:** Geist Mono Variable (with ui-monospace, monospace), code blocks only

**Character:** One geometric grotesk at two weights (400 and 500 for text, 600 for headings) with negative tracking on headings only. It reads as documentation, not marketing.

### Hierarchy
- **Display** (600, 36px / 40px, -0.025em): the homepage h1 only ("Ready-to-use skills for Muse AI.").
- **Headline** (600, 30px / 36px, -0.025em): the h1 on entry, category, about, and submit pages.
- **Title** (600, 20px / 28px): section h2s ("How it works", "What it does", "Install", "Full source", "What we check").
- **Lead** (400, 18px / 28px, `muted-foreground`): the paragraph under an h1 (hero offer, entry tagline, category description), capped at 65ch on index and category pages.
- **Body** (400, 16px / 1.6): about-page prose, entry safety notes, and `.prose` markdown; almost always in `muted-foreground` with headings and links in `foreground`.
- **Row title** (500, 16px / 24px): the entry title in a skill row; `font-medium` 16px also names card panel headers ("Install prompt", "SKILL.md") at 14px and step titles in "How it works".
- **Small** (400, 14px / 20px): taglines, nav links, breadcrumb, button labels, input text, details list, footer, status line, count.
- **Label** (500, 12px / 16px): badges and chips, sm button labels; uppercase with `tracking-wide` only in the two footer column headings ("Browse", "Project"). Author lines and chip group labels ("category", "type") use 12px at weight 400.
- **Code** (400, 12px / 1.625, Geist Mono): install-prompt textarea, full-source `pre`, `.prose pre`, and the submit form's source textarea.

### Named Rules
**The Mono-Inside-Blocks Rule.** Geist Mono appears only inside a bordered code surface (textarea, pre). Never inline, never for labels or numbers; tabular numerals on counts are Geist Sans with `tabular-nums`.

**The Two-Tracking Rule.** Negative tracking (-0.025em) belongs to h1 and card titles only. Everything else is default tracking, except the two uppercase footer headings at `tracking-wide`.

## Layout

One container width. Header, footer, 404, index, category, and entry pages all centre their content in 896px (`max-w-4xl`); about and submit narrow to 672px (`max-w-2xl`) for reading prose and forms. All containers are centred with 16px side padding (`px-4`). Page blocks use 32px vertical padding on mobile and 40px from 768px (`py-8 md:py-10`).

Vertical rhythm on a page is 40px between major sections (`space-y-10` on index and category, `mt-10` between entry sections, 32px `space-y-8` between the breadcrumb and the entry grid). Inside a section, a heading is followed by 12px (`mt-3`) before its lead or paragraph, 16px (`mt-4`) before a card, 20px (`mt-5`) before a list.

The header is a sticky 56px bar (`h-14`, `top-0`, `z-50`) with a 1px bottom border and a translucent background (`bg-background/95`, `bg-background/80` with `backdrop-blur` when supported). Wordmark, nav links (12px gap), then a right cluster (8px gap): the search form (176px wide, hidden below 768px, only on non-home pages), the ghost icon theme toggle, and the sm primary "Submit a skill" button.

Skill rows are a `divide-y` list. Each row is 20px padded top and bottom (`py-5`), a column on mobile (16px gap) that becomes a row at 640px with the text block left and the two action buttons right-aligned. Badges within a row wrap with 6px gaps.

The filter panel is a card with 16px padding and 16px between its sub-rows. The search input flexes to fill; the "Clear filters" outline sm button and the live count sit beside it from 640px, and below it as a justified pair on mobile. Each chip row starts with a fixed 64px label column (`w-16`).

The entry page splits at 1024px into a main column and a 280px details column with 40px gap (`lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-10`). The details card is sticky at 80px from the top (`lg:sticky lg:top-20`) so it clears the 56px header. Below 1024px the aside follows the main column with a 40px gap. The "How it works" list is one column that becomes three at 768px with 24px gaps. The footer is one column that becomes three at 768px with 40px gaps and 40px vertical padding.

Breakpoints in use: 640px (`sm`), 768px (`md`), 1024px (`lg`). The document has a 320px minimum width and never scrolls horizontally; code surfaces scroll inside their card (`overflow-x-auto` on `pre`, `overflow-auto` on the textarea).

## Elevation & Depth

Depth is drawn, not lit. Structure comes from 1px `border` rules: header and footer edges, row dividers, card outlines, input strokes, and the divider between a card's panel header and its body. Two tiny shadows exist and both are shadcn defaults: cards carry `shadow-sm`, and buttons and inputs carry `shadow-xs` (ghost buttons remove it). Neither shadow is used to signal state; hover and pressed states change fill colour only. There are no gradients, blurs (apart from the header backdrop), overlays, or layered surfaces.

### Shadow Vocabulary
- **Card lift** (`box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`): every `Card` (filter panel, install prompt, source, details).
- **Control edge** (`box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05)`): default, outline, and secondary buttons; the text input, select, and textarea fields.

### Named Rules
**The Border-Does-The-Work Rule.** If a surface needs separation, add a 1px `border` rule. Shadows never grow past `shadow-sm`, and nothing gets a shadow on hover.

## Shapes

One radius token, `--radius: 0.5rem`, produces the whole family: 8px (`rounded-lg`) for cards and alerts, 6px (`rounded-md`) for buttons, badges, chips, inputs, code blocks, and the skip link, and 4px (`rounded-sm`) reserved but unused. The only circle is the 32px numbered step marker in "How it works" (`rounded-full`, `bg-muted`). Every bordered surface uses the same 1px `border` colour; no surface uses a 2px border, and the pressed chip changes its border colour to `primary` rather than its width. Corners are never clipped diagonally, and no element is pill-shaped except that step marker.

## Components

Every component is a shadcn recipe expressed as Tailwind utilities in `src/components/ui/`. Recipes below list the shipped classes so a new surface can reuse them verbatim.

### Buttons
Quiet and compact; the primary is a solid ink block, everything else is paper.
- **Shape:** 6px corners (`rounded-md`), `inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors`.
- **Default (primary):** `bg-primary text-primary-foreground shadow-xs`, 36px tall, 16px side padding, 14px text (`h-9 px-4 text-sm`). Hover: `hover:bg-primary/90`.
- **Outline:** `border border-input bg-background text-foreground shadow-xs`. Hover: `hover:bg-accent hover:text-accent-foreground`.
- **Ghost:** `bg-transparent text-foreground shadow-none`, same hover as outline. Used only for the theme toggle.
- **Secondary:** `bg-secondary text-secondary-foreground`, hover `bg-secondary/80`. Defined, not used on any shipped page.
- **Sizes:** `sm` is 32px tall, 12px padding, 12px text (`h-8 px-3 text-xs`); `icon` is a 36px square (`size-9`).
- **Focus:** the global 2px `ring` outline with 2px offset on `:focus-visible`. Disabled: `opacity-50`, no pointer events.
- **Icons inside:** Lucide at 16px, 1.5 stroke, 8px from the label, `pointer-events-none shrink-0`.
- **Where each lives:** primary default on the entry header and details card; primary sm in the header ("Submit a skill") and every skill row ("Copy install prompt"); outline default for "View source"; outline sm for "View" in rows, "Clear filters", and the in-card copy buttons.

### Badges and chips
- **Style:** `inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-colors`.
- **Secondary:** `border-transparent bg-secondary text-secondary-foreground`. Names the entry type ("skill", "prompt pack", "workflow", "config"). Always first in a badge run.
- **Outline:** `text-foreground` with the default `border`. Names the category (as a link with `hover:bg-accent`) and each `includes` item (at `text-[11px]`).
- **Filter chip:** an outline badge rendered as a `<button>` with `gap-1.5 tabular-nums hover:bg-accent`, a count in `text-muted-foreground`, and `aria-pressed`. Pressed state comes from the global rule `[data-filter][aria-pressed="true"]`: `border-color`, `background` become `primary`, text becomes `primary-foreground`, and the count span drops to 70% of `primary-foreground` via `color-mix`. Clicking a pressed chip clears it; one chip per group.

### Cards / Containers
- **Corner Style:** 8px (`rounded-lg`).
- **Background:** `bg-card text-card-foreground` (same as page ground in both themes).
- **Shadow Strategy:** `shadow-sm` (see Elevation).
- **Border:** 1px `border`.
- **Internal Padding:** 16px (`p-4`) for the filter panel and code cards; 20px (`p-5`) for the details card; the generic `CardHeader`/`CardContent` pair uses 24px (`p-6`) with 6px between header lines. Code cards use a panel header (`flex items-center justify-between gap-3 border-b p-4`) holding a 14px medium label and an outline sm copy button, then the code surface below.

### Inputs / Fields
- **Style:** `h-9 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors outline-none placeholder:text-muted-foreground`. Search inputs add `pl-9` and an absolutely positioned 16px Lucide `Search` icon at 12px from the left in `muted-foreground`. The submit form's select and textarea share this recipe; the source textarea adds `min-h-60 resize-y py-3 font-mono text-xs`.
- **Focus:** the global 2px `ring` outline, 2px offset. No border colour change, no glow.
- **Disabled:** `opacity-50 cursor-not-allowed`. No error state is shipped.
- **Labels:** 14px medium (`text-sm font-medium`) above the field with 8px gap; an optional marker is `font-normal text-muted-foreground` inline.

### Navigation
- **Header:** wordmark "Muse Skills" in `font-semibold` 16px; nav links `text-sm transition-colors hover:text-foreground`, current page in `text-foreground` with `aria-current="page"`, others in `text-muted-foreground`. No underline, no active bar. The sticky bar keeps the same layout on mobile; only the header search hides below 768px.
- **Breadcrumb:** `flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground`; links `hover:text-foreground`; the current item is `text-foreground`, truncated at 256px (`max-w-64 truncate`); separators are Lucide `ChevronRight` 16px.
- **Footer:** 1px top border, three columns of 14px `muted-foreground` links with `hover:text-foreground`, column headings in 12px medium uppercase `tracking-wide` `foreground`. The third column carries the affiliation line and an underlined `foreground` link.
- **Skip link:** `fixed left-2 top-2 z-[100]` primary block, translated off-screen until focused.

### Theme toggle
A ghost icon button (`variant="ghost" size="icon"`, `aria-label="Toggle theme"`) containing both a Lucide `Sun` and `Moon` at 16px. CSS shows one: `.dark .theme-icon-sun` and `html:not(.dark) .theme-icon-moon` are `display: none`. Clicking toggles the `dark` class on `<html>`, writes `theme` to `localStorage`, and sets `meta[name=theme-color]` to `#09090b` or `#ffffff`. An inline script in `<head>` reads `localStorage.theme` before first paint so there is no flash; light is the default and the system preference is not consulted. `html` declares `color-scheme: light dark` and `html.dark` sets `color-scheme: dark` so form controls and scrollbars follow.

### Copy button
The signature interaction. A `Button` (any variant or size) with a `Copy` icon, a hidden `Check` icon, and a label span, followed by a visually hidden readonly textarea as the clipboard fallback. On click the text is written to the clipboard, the icon swaps to `Check`, the label becomes "Copied", and an optional status element (`aria-live="polite"`, 14px `muted-foreground`) reads "Paste it into your Muse chat." After 2000ms both revert (label restored, status back to "Ready to copy."). If the clipboard API is unavailable the fallback textarea is focused and selected instead. No colour or size change accompanies the copied state; the icon and words are the signal.

### Alert
`relative w-full rounded-lg border p-4 pl-11 text-sm` with a 16px Lucide icon absolutely placed at 16px/16px, a 14px medium title (`mb-1 font-medium leading-none tracking-tight`), and body copy in `text-muted-foreground` with disc lists at 20px indent and 4px between items. Only one instance ships ("Before you install", `ShieldAlert` icon). No colour variants.

### Skill row
`article` with `flex min-w-0 flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between`. Left block (`space-y-2`): 16px medium title link with `hover:underline`, 14px `muted-foreground` tagline at 4px below, a wrapping badge run (6px gaps: type secondary badge, category outline badge link, includes at 11px), then a 12px `muted-foreground` author line ("by Muse Skills editors · Written for this directory" or "shared by {author}"). Right block: "View" outline sm and "Copy install prompt" primary sm, 8px apart, right-aligned from 640px. Rows sit in a `divide-y` list; the empty state is a 14px `muted-foreground` line with 40px vertical padding.

### Code surfaces
Two shapes, both Geist Mono 12px with 1.625 line height on `bg-muted`: the install-prompt textarea (`w-full max-w-full resize-y overflow-auto rounded-md border bg-muted p-3`, 12 rows, readonly) and the full-source `pre` inside a card (`max-w-full overflow-x-auto p-4`, no extra border because the card provides it). Markdown code in `.prose` uses `rounded-md border bg-muted p-4 font-mono text-xs text-foreground` with horizontal scroll.

### Separator
`role="separator"`, `h-px w-full shrink-0 bg-border`. Available; the shipped pages use `divide-y` and `border-b`/`border-t` instead.

### Copy vocabulary (directory chrome)
Fixed strings from `docs/COPY.md`; new surfaces reuse them verbatim.
- Site name: Muse Skills
- Nav: Skills · About · Submit a skill
- Search placeholder: Search skills
- Filter panel: Clear filters · "{n} of {m} skills" · group labels "category" and "type"
- Empty state: No skills match your filters.
- Row actions: View · Copy install prompt · Copied
- Status: Ready to copy. · Paste it into your Muse chat.
- Entry sections: What it does · What this one touches · Install · Full source · Details · Source · View source
- Theme toggle label: Toggle theme
- 404 line: That page is not in the directory.
- 404 button: Back to skills

## Do's and Don'ts

### Do:
- **Do** build every control from the `Button`, `Badge`, `Input`, `Card`, `Alert`, and `Breadcrumb` recipes in `src/components/ui/` and pass extra Tailwind classes through `class`; never restyle from scratch.
- **Do** use `muted-foreground` for every piece of secondary text and `foreground` for everything the visitor must read first.
- **Do** separate list items with `divide-y` (1px `border`) and reserve `Card` for panels that hold controls or code.
- **Do** keep the 40px section rhythm (`space-y-10` / `mt-10`) and 16px page gutter (`px-4`) on every page.
- **Do** render icons with Lucide at 16px and 1.5 stroke, hidden from assistive tech, next to a text label or with an `aria-label`.
- **Do** put the pressed state of any toggle in a global attribute rule (`[aria-pressed="true"]`) rather than swapping classes in script.
- **Do** confirm a copy with the icon swap, the "Copied" label, and the live status line for 2000ms, then restore.
- **Do** rely on the shared `:focus-visible` outline (2px `ring`, 2px offset); do not add per-component focus styles.
- **Do** respect `prefers-reduced-motion`: the global rule collapses all transitions to 0.01ms.

### Don't:
- **Don't** introduce a chromatic accent, a gradient, or a second grey for text.
- **Don't** add `dark:` utilities to components; dark mode is the `.dark` token swap only.
- **Don't** use shadows beyond `shadow-sm` on cards and `shadow-xs` on controls, and never a shadow as a hover or pressed signal.
- **Don't** use Geist Mono outside a bordered code surface.
- **Don't** animate filtering, list changes, or the theme switch; the only motion is 150ms colour transitions and the timed copy confirmation.
- **Don't** add uppercase labels, kickers, or eyebrows above headings; the only uppercase text is the two footer column headings.
- **Don't** let a page scroll horizontally; code blocks scroll inside their own container.
- **Don't** put more than one h1 on a page, and never render the site name as if it were Muse itself.
