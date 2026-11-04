---
title: "PIL: Personal Instagram Library"
tagline: "Turns your Instagram saved posts into a private, searchable library on your own computer."
category: "productivity"
type: "skill"
author: "pjpoulose"
source_url: "https://github.com/pjpoulose/PIL"
source_verified: false
origin: "shared"
includes: ["instructions", "python package", "local database", "mcp server"]
version: "0.1.1"
date_added: "2026-11-04"
safety_notes: |
  Not a pure one-paste skill. The source below is the instruction file only. Setup
  also clones the author's GitHub repo, installs a Python package and the
  "mcp<2" dependency, and can run the repo's bootstrap script. That code is not in
  this entry and we have not reviewed it.
  Reads your own saved Instagram posts through instagram-cli. You link the account
  in your browser. The source says Muse never handles your password or token.
  Writes a SQLite database and JSON, HTML and app exports on your computer. The
  deep-read step calls instagram-cli media-understanding, so post content is
  processed by that tool, not only on your machine.
  The optional phone step publishes the app bundle to a static host you choose and
  needs your hosting token, which is kept in a local config file. Treat it as
  uploading your library. The submitter's claim that no data leaves the machine
  does not cover this step.
  The local MCP server is read-only. Muse asks you before it downloads or runs
  anything.
install_prompt: |
  Install the "PIL: Personal Instagram Library" skill. Its full source is below. Create it at ~/workspace/skills/pil/SKILL.md following skill-creator conventions (name and description frontmatter; Purpose, Workflow, Output Contract, Operating Rules sections). Then confirm it is installed and tell me the trigger phrases.

  This skill also needs code from https://github.com/pjpoulose/PIL: a Python package and scripts that the source below does not contain. Before you clone, download, install, or run anything, tell me exactly what you will fetch and run, and wait for my yes. Do not ask me for a password or token in chat.

  --- SOURCE ---
  ---
  name: "pil"
  description: "Build and query a Personal Instagram Library: ingest your saved Instagram posts into a local SQLite database, run vision-AI deep extraction over them, and query the library live through a read-only local MCP server. Use when the user wants to index, search, or ask questions over their Instagram saved posts."
  ---

  # PIL: Personal Instagram Library

  ## Purpose
  Turn a user's Instagram saved posts into a private, queryable knowledge base that
  lives entirely on their own machine: ingest → deep-extract → tag → export, plus a
  read-only MCP server so Cursor, Claude Code, or Claude Desktop can query it live.

  ## Tooling
  Helpers live in `bin/` and share config through `bin/pil_common.py`. Config resolves
  from `PIL_CONFIG` env var, `./pil.config.json`, then `~/.config/pil/pil.config.json`
  (copy `pil.config.example.json` to start). The DB is `<data_dir>/pil.sqlite`;
  `schema.sql` is applied automatically on first run.

  - `bin/ingest_saved.py [collection_id]`, step 1: saved collections → `folders`,
    saved posts → `posts`/`post_folders`. Resume-safe via cursor files.
  - `bin/extract_content.py`, step 2: vision-AI deep read (`instagram-cli
    media-understanding`) → `knowledge` rows (summary, key points, how-to, links)
    plus tags. Resume-safe; batches of 25.
  - `bin/tag_all.py`, step 3: programmatic tags (caption keywords + folder names)
    for posts with fewer than 3 tags.
  - `bin/export_web.py [output_path]`, step 4: static JSON export for manual use
    with any AI tool. Captions are truncated to snippets, never verbatim.
  - `bin/export_html.py [output_path]`, step 5: self-contained HTML dashboard
    (`pil_library.html`): answer-first search with inline citations, source
    cards, thin-result fallbacks and follow-up prompts, plus rooms, tags,
    sorting, read-notes. Works offline from disk; the user can keep it on
    their Desktop as a web app.
  - `bin/export_pwa.py [output_dir]`, step 6: installable PWA bundle
    (`index.html` + `manifest.json` + offline service worker + icons) for the
    real browser *Install* prompt, plus one-click launchers: a Mac
    `Start PIL.app` builder (no terminal window), hidden-console Windows
    `Start/Stop PIL.vbs`, and a universal `Start PIL.command`. Serve over
    localhost; Chrome/Edge prompt automatically, Safari/Firefox add manually
    (see README).
  - `bin/publish_pwa.py <pwa_dir> [--provider netlify|manual]`, step 7:
    publish the PWA bundle to the user's own private static host for phone
    install; writes `phone.json` + `phone-qr.png` so the desktop PWA shows a
    "Take PIL on your phone" panel with a QR code. Tokens live in the local
    config's `publish` section, never committed. See `MOBILE.md`.
  - `bin/mcp_server.py`, read-only MCP server over stdio. Tools: `search_posts`,
    `get_post`, `list_folders`, `list_tags`, `library_stats`.

  Requires: `python3`, `instagram-cli` (see the Instagram skill), `pip install "mcp<2"`.

  ## First-run: setting up the user
  When the user asks you to set up PIL (e.g. pastes the prompt from the README):
  1. Clone the repo (or pull latest) and work from it. You can run `bootstrap.sh`
     / `bootstrap.ps1` yourself for Python/git/deps, or do the Install steps manually.
  2. Link Instagram: `instagram-cli accounts` must list their account. If not, get
     the connect URL (`instagram-cli connect-url`) and have the user link it in
     their browser, then re-check. Never handle passwords or tokens yourself.
  3. Run the pipeline in order; every step is resume-safe: `ingest_saved.py` →
     `extract_content.py` → `tag_all.py`. Extraction is slow on large libraries;
     run it in the background and report when done.
  4. Build the app with `export_pwa.py`, then **deliver it**: zip the PWA folder,
     put the zip in the user's file area, and attach it to your reply along with
     the 3 install steps (unzip → double-click Start PIL → click Install).
     Also run `export_web.py` and attach `web_data.json`: that's the file they
     hand to any other AI tool.
  5. Offer the phone step: `publish_pwa.py` needs their hosting token; collect it
     via the secure credential flow, never in chat. After publishing, make sure the
     QR/URL reaches them (re-serve the folder or send the code directly).
  Keep the user posted at each stage; ask only for what only they can do.

  ## Auth
  The user links their own Instagram account themselves. `instagram-cli accounts`
  must list it; the `user_fbid` from that output goes into `pil.config.json` as
  `account_id`. Never ask for, handle, or store passwords, tokens, or session data.
  The pipeline only reads the user's own saved posts.

  ## Operating Rules
  1. **Code is shared, data stays home.** Never copy, upload, or commit a user's
     `pil.sqlite`, exports, captions, or account ID. The package holds code,
     schema, config examples, and docs only.
  2. The MCP server is read-only by construction (SQLite `mode=ro`, SELECT-only
     tools). Never add a write tool.
  3. Run the pipeline in order: ingest → extract → tag. Export any time after ingest.
  4. Deep-extraction headings are normalized in `extract_content.py`
     (`_normalize_labels`): sections read Context / Moment / Significance / Origin.
     Do not reintroduce the word "Cultural".
  5. Keep this file lean. Install/usage docs live in `README.md`; per-client MCP
     wiring lives in `references/mcp_clients.md`.
source: |
  ---
  name: "pil"
  description: "Build and query a Personal Instagram Library: ingest your saved Instagram posts into a local SQLite database, run vision-AI deep extraction over them, and query the library live through a read-only local MCP server. Use when the user wants to index, search, or ask questions over their Instagram saved posts."
  ---

  # PIL: Personal Instagram Library

  ## Purpose
  Turn a user's Instagram saved posts into a private, queryable knowledge base that
  lives entirely on their own machine: ingest → deep-extract → tag → export, plus a
  read-only MCP server so Cursor, Claude Code, or Claude Desktop can query it live.

  ## Tooling
  Helpers live in `bin/` and share config through `bin/pil_common.py`. Config resolves
  from `PIL_CONFIG` env var, `./pil.config.json`, then `~/.config/pil/pil.config.json`
  (copy `pil.config.example.json` to start). The DB is `<data_dir>/pil.sqlite`;
  `schema.sql` is applied automatically on first run.

  - `bin/ingest_saved.py [collection_id]`, step 1: saved collections → `folders`,
    saved posts → `posts`/`post_folders`. Resume-safe via cursor files.
  - `bin/extract_content.py`, step 2: vision-AI deep read (`instagram-cli
    media-understanding`) → `knowledge` rows (summary, key points, how-to, links)
    plus tags. Resume-safe; batches of 25.
  - `bin/tag_all.py`, step 3: programmatic tags (caption keywords + folder names)
    for posts with fewer than 3 tags.
  - `bin/export_web.py [output_path]`, step 4: static JSON export for manual use
    with any AI tool. Captions are truncated to snippets, never verbatim.
  - `bin/export_html.py [output_path]`, step 5: self-contained HTML dashboard
    (`pil_library.html`): answer-first search with inline citations, source
    cards, thin-result fallbacks and follow-up prompts, plus rooms, tags,
    sorting, read-notes. Works offline from disk; the user can keep it on
    their Desktop as a web app.
  - `bin/export_pwa.py [output_dir]`, step 6: installable PWA bundle
    (`index.html` + `manifest.json` + offline service worker + icons) for the
    real browser *Install* prompt, plus one-click launchers: a Mac
    `Start PIL.app` builder (no terminal window), hidden-console Windows
    `Start/Stop PIL.vbs`, and a universal `Start PIL.command`. Serve over
    localhost; Chrome/Edge prompt automatically, Safari/Firefox add manually
    (see README).
  - `bin/publish_pwa.py <pwa_dir> [--provider netlify|manual]`, step 7:
    publish the PWA bundle to the user's own private static host for phone
    install; writes `phone.json` + `phone-qr.png` so the desktop PWA shows a
    "Take PIL on your phone" panel with a QR code. Tokens live in the local
    config's `publish` section, never committed. See `MOBILE.md`.
  - `bin/mcp_server.py`, read-only MCP server over stdio. Tools: `search_posts`,
    `get_post`, `list_folders`, `list_tags`, `library_stats`.

  Requires: `python3`, `instagram-cli` (see the Instagram skill), `pip install "mcp<2"`.

  ## First-run: setting up the user
  When the user asks you to set up PIL (e.g. pastes the prompt from the README):
  1. Clone the repo (or pull latest) and work from it. You can run `bootstrap.sh`
     / `bootstrap.ps1` yourself for Python/git/deps, or do the Install steps manually.
  2. Link Instagram: `instagram-cli accounts` must list their account. If not, get
     the connect URL (`instagram-cli connect-url`) and have the user link it in
     their browser, then re-check. Never handle passwords or tokens yourself.
  3. Run the pipeline in order; every step is resume-safe: `ingest_saved.py` →
     `extract_content.py` → `tag_all.py`. Extraction is slow on large libraries;
     run it in the background and report when done.
  4. Build the app with `export_pwa.py`, then **deliver it**: zip the PWA folder,
     put the zip in the user's file area, and attach it to your reply along with
     the 3 install steps (unzip → double-click Start PIL → click Install).
     Also run `export_web.py` and attach `web_data.json`: that's the file they
     hand to any other AI tool.
  5. Offer the phone step: `publish_pwa.py` needs their hosting token; collect it
     via the secure credential flow, never in chat. After publishing, make sure the
     QR/URL reaches them (re-serve the folder or send the code directly).
  Keep the user posted at each stage; ask only for what only they can do.

  ## Auth
  The user links their own Instagram account themselves. `instagram-cli accounts`
  must list it; the `user_fbid` from that output goes into `pil.config.json` as
  `account_id`. Never ask for, handle, or store passwords, tokens, or session data.
  The pipeline only reads the user's own saved posts.

  ## Operating Rules
  1. **Code is shared, data stays home.** Never copy, upload, or commit a user's
     `pil.sqlite`, exports, captions, or account ID. The package holds code,
     schema, config examples, and docs only.
  2. The MCP server is read-only by construction (SQLite `mode=ro`, SELECT-only
     tools). Never add a write tool.
  3. Run the pipeline in order: ingest → extract → tag. Export any time after ingest.
  4. Deep-extraction headings are normalized in `extract_content.py`
     (`_normalize_labels`): sections read Context / Moment / Significance / Origin.
     Do not reintroduce the word "Cultural".
  5. Keep this file lean. Install/usage docs live in `README.md`; per-client MCP
     wiring lives in `references/mcp_clients.md`.
---

PIL turns your Instagram saved posts into a private library you can search. It copies your saved collections and posts into a SQLite database on your computer. It reads each post with a vision model and adds a summary, key points, and tags. Muse can then answer questions from that library.

This is not a pure one-paste skill. The pasted source is the instruction file only. The working code is a Python package and a set of scripts in the author's GitHub repository, and setup installs them on your computer. Muse asks you before it downloads or runs anything.

You link your own Instagram account in your browser. Extraction is slow on large libraries, so Muse runs it in the background and tells you when it finishes. You can export the library as a JSON file, an HTML dashboard, or an installable web app. A read-only local MCP server lets Muse and other AI clients query it live.

## What it includes

- Ingest step for saved collections and posts, safe to resume
- Vision-AI extraction into summaries, key points, how-to steps, and links
- Tagging from caption keywords and folder names
- Exports: JSON, HTML dashboard, and an installable web app
- Optional phone publish step to a static host you own
- Read-only MCP server with five tools: search_posts, get_post, list_folders, list_tags, library_stats

## Example

Input: "Set up PIL and index my saved posts."

Output: Muse checks that instagram-cli lists your account. If it does not, Muse gives you a link to connect Instagram in your browser. Then it runs ingest, extract, and tag in order, builds the web app, and sends you a zip file with three install steps. Later you ask "Which saved posts mention sourdough?" and Muse searches the library and lists the matching posts.
