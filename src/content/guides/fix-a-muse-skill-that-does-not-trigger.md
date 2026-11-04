---
title: "Fix a Muse skill that doesn't trigger"
description: "What to check when Muse ignores a skill you installed: confirm it saved, check its name, use an exact trigger phrase, name it, or reinstall it."
kind: "article"
date_added: 2026-11-04
updated: 2026-11-04
---

Work through these checks in order. Stop at the first one that gets Muse to run the skill.

## Run the checks

1. **Confirm the skill saved.** Find Muse's reply to the install prompt. It should say the skill is installed and list its trigger phrases. If that reply is missing, the install didn't finish, so skip to the last check.
2. **Check the name Muse used.** You might already have had a skill with the same name. Muse can then save the new one under another name, such as `deal-hunter-scan` instead of `deal-hunter`. Use the name from Muse's reply.
3. **Use an exact trigger phrase.** Copy a phrase from Muse's install reply. You can also copy one from the `description` line in the entry's full source. Send it as written.
4. **Name the skill in your request.** Tell Muse which skill to use, for example: "Use the deal-hunter skill to scan marketplace for deals."
5. **Reinstall the skill.** Open the entry page, choose **Copy install prompt**, and paste the prompt into Muse again. If Muse offers a new name, decide whether to keep both skills or replace the old one.

## Workflows that never run

A workflow runs on a schedule, such as [Bill Due Radar](/entry/bill-due-radar/). Muse doesn't create the recurring job until you confirm the time. Find the install reply and check that you answered Muse's question about the schedule. If you didn't, reply with the time you want.

## Prompt packs that do nothing at install

Muse saves a prompt pack without running it. That's expected. Use one of its trigger phrases when you want it to run.

For the full install steps, see [How to install a Muse skill](/guides/install-a-muse-skill/). To learn how trigger phrases and skill files fit together, read [How Muse skills work](/guides/how-muse-skills-work/).
