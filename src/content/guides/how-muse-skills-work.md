---
title: "How Muse skills work"
description: "What a SKILL.md file holds, how trigger phrases start a skill, where Muse keeps your skills, and how prompt packs and workflows differ."
kind: "article"
date_added: 2026-11-04
updated: 2026-11-04
---

A Muse skill is a text file that tells Muse how to do one job. It holds a name, a description, and the steps Muse follows when you use a trigger phrase. You add one by pasting its install prompt into a Muse chat.

## What a SKILL.md file holds

Every skill is a file named `SKILL.md`. It opens with two fields between `---` lines, called frontmatter. Here is the frontmatter of [Deal Hunter](/entry/deal-hunter/):

```
---
name: deal-hunter
description: Scan marketplace listings for brand-new, private-seller items priced well below conservative resale value. Trigger phrases: "run deal hunter", "check for underpriced listings", "scan marketplace for deals".
---
```

The `name` is the skill's short name. The `description` is one line that says what the skill does and lists its trigger phrases.

Four sections follow the frontmatter:

- **Purpose** says what the skill is for.
- **Workflow** lists the steps Muse takes, in order.
- **Output Contract** sets the exact shape of what Muse reports back.
- **Operating Rules** sets hard limits, such as never asking you for a password.

You can read every section before you install. Each entry page in this directory shows the full source.

## Trigger phrases

A trigger phrase is what you say to Muse to start a skill. Deal Hunter has three: "run deal hunter", "check for underpriced listings", and "scan marketplace for deals".

Muse tells you the trigger phrases when it finishes an install. You can also find them in the `description` line of the source.

## Where skills live

Muse keeps each skill in its own folder in its workspace:

```
~/workspace/skills/<name>/SKILL.md
```

Prompt packs live in a separate folder, at `~/workspace/prompts/<name>.md`.

The folder name usually matches the skill's `name`. It can differ when you already had a skill with that name and Muse saved the new one under another name. [How to install a Muse skill](/guides/install-a-muse-skill/) covers that case.

## Four kinds of entry

This directory lists four kinds of entry. Each one installs a little differently.

- **Skill.** A `SKILL.md` file that you start with a trigger phrase.
- **Prompt pack.** A reusable prompt you call by name. Muse saves it and doesn't run it during the install.
- **Workflow.** A skill on a schedule. Muse asks you to confirm the time before it creates the recurring job.
- **Config.** A snippet for a setting, like your feed prompt. Muse asks you before it writes the setting.

## Install a newer version

To update a skill, paste its install prompt again. Muse can spot the skill you already have and offer to save the new one under a different name. Keep both, or replace the old one if you want only the new version.

## What installing shares

Installing copies the skill into your own Muse environment. It gives the author nothing.
