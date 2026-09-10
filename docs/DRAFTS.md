# Drafts

The entry gate checks frontmatter fields and types, category and type values, HTTPS sources, body length, source copying in the install prompt, banned em dash and spaced en dash usage, and banned phrases. It also applies the required defaults for `origin` and `source_verified`.

Muse-written entries that fail the gate land in `drafts/entries/` automatically at the start of `npm run build`, so they cannot ship through `npm run build` or Vercel. Run `npm run gate:fix` to attempt the conservative em-dash auto-fix, or `npm run gate` to check entries in `src/content/entries/`.

In `--quarantine` mode, the gate first applies the same conservative dash fix as `--fix-dashes` to every failing entry and re-checks it. Files that pass after this fix stay in place and are reported as fixed.

If a failing entry is tracked by Git, the gate restores the tracked version instead of quarantining it, while saving Muse's rewrite to `drafts/entries/<slug>.muse.md`. Untracked files, or files when Git handling is unavailable, use the existing quarantine behavior.

Move a file back to `src/content/entries/` by hand only after `npm run gate -- --dir drafts/entries` or a check of that specific file prints `PASS`.
