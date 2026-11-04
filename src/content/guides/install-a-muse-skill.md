---
title: "How to install a Muse skill"
description: "Copy a skill's install prompt, paste it into a Muse chat, and check that Muse saved it. Includes what to do when a skill with that name exists."
kind: "howto"
date_added: 2026-11-04
updated: 2026-11-04
---

Every skill in this directory has an install prompt. The prompt tells Muse where to save the skill, and it carries the full source. You paste it once, and Muse does the rest.

Before you install, read the skill's full source on its page. A shared skill carries somebody else's instructions. Never paste an API key, password, or token into anything a skill asks for.

## Install the skill

1. Open the skill's page in this directory, for example [Deal Hunter](/entry/deal-hunter/).
2. Choose **Copy install prompt**. The prompt goes to your clipboard.
3. Open a chat with Muse at [muse.ai](https://muse.ai).
4. Paste the prompt into the chat and send it.
5. Read Muse's reply. Muse confirms the install and tells you the skill's trigger phrases.

## Where Muse saves it

Muse saves each skill as a file named `SKILL.md` in its own folder:

```
~/workspace/skills/<name>/SKILL.md
```

The `<name>` part is the skill's short name, such as `deal-hunter`. The file opens with a name and a description. Four sections follow: Purpose, Workflow, Output Contract, and Operating Rules.

Prompt packs go to a different folder, at `~/workspace/prompts/<name>.md`. Muse saves a prompt pack but doesn't run it during the install.

## Check that it saved

Muse's reply to the install prompt is your confirmation. Check three things in it:

- The reply says the skill is installed.
- The reply lists the trigger phrases.
- The reply names the skill. Note the name it used.

The trigger phrases also appear in the `description` line of the full source. If the reply's phrases match that line, the install worked. If the name differs from the one on the skill's page, read the next section.

## When a skill with that name exists

You might already have a skill with the same name. In that case, Muse can offer to save the new skill under a different name.

We saw this in our own test. A `deal-hunter` skill already existed, so Muse saved the new copy as `deal-hunter-scan`.

- To keep both skills, accept the new name. Your existing skill stays as it was.
- To swap in the new version, choose to replace the old one. Do this only when you mean it, because the old skill's file is overwritten.

After a rename, use the new name when you talk to Muse about that skill.

## Workflows ask before they schedule

A workflow is a skill that runs on a schedule, such as [Bill Due Radar](/entry/bill-due-radar/). Its install prompt gives a default time. Muse asks you to confirm or change that time. It creates the recurring job only after you answer.

Configs work the same way. Muse asks you before it writes a setting.

If Muse doesn't respond to a trigger phrase after the install, see [Fix a Muse skill that doesn't trigger](/guides/fix-a-muse-skill-that-does-not-trigger/). To learn what each part of a skill does, read [How Muse skills work](/guides/how-muse-skills-work/).
