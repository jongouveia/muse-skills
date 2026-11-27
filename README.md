# Muse Skills

Source for [museskills.dev](https://museskills.dev), a directory of skills, Spaces, prompt packs, and workflows for Muse AI. Each one installs with one paste. The directory is independent and not affiliated with Meta.

## Find a skill

- Browse and search on [museskills.dev](https://museskills.dev).
- Each entry is one Markdown file in [`src/content/entries/`](src/content/entries/). The file name matches the page address: `deal-hunter.md` is [museskills.dev/entry/deal-hunter/](https://museskills.dev/entry/deal-hunter/).
- Prompt packs are in [`src/content/packs/`](src/content/packs/). Guides are in [`src/content/guides/`](src/content/guides/).

To install a skill, copy the `install_prompt` text from its file, or choose **Copy install prompt** on its page, and paste it into a Muse chat. Read the `source` and `safety_notes` first. Full steps: [How to install a Muse skill](https://museskills.dev/guides/install-a-muse-skill/).

## Submit a skill

Use the [submit form](https://museskills.dev/submit/). It opens a prefilled issue in this repo. We review every submission before it goes live.

## Build the site

The site is built with [Astro](https://docs.astro.build).

| Command | What it does |
|---|---|
| `npm install` | Install dependencies |
| `npm run build` | Run the design lint and entry gate, then build to `dist/` |
| `npm test` | Run the gate tests |
