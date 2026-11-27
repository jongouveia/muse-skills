---
title: "Muse AI skills on GitHub"
description: "Every skill in this directory is a Markdown file in a public GitHub repo. Where each file lives, how to read one, and how to submit your own."
kind: "article"
date_added: 2026-11-26
updated: 2026-11-26
---

Every skill, Space, and prompt pack in this directory lives as a Markdown file in a public GitHub repo: [github.com/jongouveia/muse-skills](https://github.com/jongouveia/muse-skills). You can read any skill's full source there before you install it, see its change history, and submit your own.

This directory is independent. It is not affiliated with Meta, and the repo is not an official Meta repo.

## Where each skill lives

Each entry is one file:

```
src/content/entries/<name>.md
```

The `<name>` part matches the page address on this site. For example, [Deal Hunter](/entry/deal-hunter/) is `src/content/entries/deal-hunter.md`. Every entry page links to its own file under **Source**.

Prompt packs live in `src/content/packs/`, and these guides live in `src/content/guides/`.

## What an entry file holds

An entry file starts with a block of fields between two `---` lines. The fields that matter most when you judge a skill:

- `install_prompt`: the exact text you paste into Muse. It tells Muse where to save the skill and carries the full source.
- `source`: the `SKILL.md` that Muse saves, with its name, description, and four sections.
- `safety_notes`: what the skill can touch, and what it never does without your OK.
- `source_verified`: `true` when we installed the skill in Muse and checked that it saved with its trigger phrases. On the site, these entries carry a "Tested in Muse" badge.
- `origin`: `directory` for skills written for this directory, `shared` for skills someone else submitted.

The text after the fields is the page you read on this site.

## Install from the repo

You don't need a GitHub account to install a skill. Copy the `install_prompt` text from the file, or choose **Copy install prompt** on the skill's page here. Both give you the same text. Then follow [How to install a Muse skill](/guides/install-a-muse-skill/).

Read the `source` and `safety_notes` before you paste. A shared skill carries someone else's instructions. Never paste an API key, password, or token into anything a skill asks for.

## Submit your own skill

Use the [submit form](/submit/). It opens a prefilled GitHub issue with the name, type, source, and author. You need a GitHub account to send it.

We read every submission before it goes live. We decline a skill that hides what it does, for example one that runs an installer you can't read or turns off a device's lock screen. Accepted skills appear with `origin: shared` and your name as the author.

To learn what each part of a skill does before you write one, read [How Muse skills work](/guides/how-muse-skills-work/).
