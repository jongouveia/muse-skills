---
title: "Report Watchdog"
tagline: "Watches incoming reports against rules you set and flags anomalies while the day is still live."
category: "productivity"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/report-watchdog.md"
source_verified: false
origin: "directory"
includes: ["instructions", "workflow", "rules"]
version: "1.0.0"
date_added: 2026-10-09
safety_notes: |
  Reads report data you hand it and flags what breaks your rules.
  Never edits, deletes, or re-files a report. Never contacts the
  person who filed a report, and never acts on a flagged anomaly:
  a human decides what to do next.
install_prompt: |
  Install the "Report Watchdog" skill. Its full source is below. Create it
  at ~/workspace/skills/report-watchdog/SKILL.md following skill-creator
  conventions (name and description frontmatter; Purpose, Workflow,
  Output Contract, Operating Rules sections). Then confirm it is
  installed and tell me the trigger phrases.

  --- SOURCE ---
  ---
  name: report-watchdog
  description: Watch incoming reports against rules you set and flag anomalies while the day is still live. Trigger phrases: "watch these reports", "flag bad reports", "set up report watchdog".
  ---
  # Purpose

  Catch bad reports before the day is over. Report Watchdog holds a
  set of rules you define once, checks each incoming report against
  them as reports arrive, and raises a flag the moment something looks
  wrong: a skipped checklist item, a number far outside the normal
  range, a missing photo, or a report that never arrived at all.

  # Workflow

  1. The user defines the rules once: what a good report contains,
     what a good report looks like numerically, and when each report
     is due. Rules live in the watch config until the user changes
     them.
  2. Each time a new report arrives, check it against the rules.
     Checklists must be complete, numbers must fall inside the
     expected ranges, required attachments must be present.
  3. Compare the report against recent history for the same source.
     Flag anything that shifts sharply: a total that doubles, a
     reading that collapses, a value that is flat for the fifth
     run in a row.
  4. Track what is due. If a report has not arrived by its due time,
     flag the absence.
  5. For every flag, write one entry: which report, which rule
     broke, and the evidence. Group related flags from the same
     source into one alert so one bad day does not become ten
     messages.
  6. If nothing broke, stay quiet. A clean check produces no
     message.

  # Output Contract

  One alert per source with a problem, containing:

  - Source and report time
  - The rule that broke, in plain words
  - The evidence: the value or gap that tripped it
  - What was normal: the recent baseline for comparison

  No problems: no message at all. This job is quiet by design.

  # Operating Rules

  - Never edit, correct, or re-file a report. Flag only.
  - Never contact the person who filed the report, or anyone else
    about it. The user handles every follow-up.
  - Never invent a rule. Every check runs against a rule the user
    wrote, and the alert always names it.
  - Never lower a threshold to quiet the noise without the user's
    say-so. If rules produce too many flags, report the pattern
    and propose new thresholds for approval.
  - Keep the alert short. One screenful per source, most days one
    alert at most.
source: |
  ---
  name: report-watchdog
  description: Watch incoming reports against rules you set and flag anomalies while the day is still live. Trigger phrases: "watch these reports", "flag bad reports", "set up report watchdog".
  ---
  # Purpose

  Catch bad reports before the day is over. Report Watchdog holds a
  set of rules you define once, checks each incoming report against
  them as reports arrive, and raises a flag the moment something looks
  wrong: a skipped checklist item, a number far outside the normal
  range, a missing photo, or a report that never arrived at all.

  # Workflow

  1. The user defines the rules once: what a good report contains,
     what a good report looks like numerically, and when each report
     is due. Rules live in the watch config until the user changes
     them.
  2. Each time a new report arrives, check it against the rules.
     Checklists must be complete, numbers must fall inside the
     expected ranges, required attachments must be present.
  3. Compare the report against recent history for the same source.
     Flag anything that shifts sharply: a total that doubles, a
     reading that collapses, a value that is flat for the fifth
     run in a row.
  4. Track what is due. If a report has not arrived by its due time,
     flag the absence.
  5. For every flag, write one entry: which report, which rule
     broke, and the evidence. Group related flags from the same
     source into one alert so one bad day does not become ten
     messages.
  6. If nothing broke, stay quiet. A clean check produces no
     message.

  # Output Contract

  One alert per source with a problem, containing:

  - Source and report time
  - The rule that broke, in plain words
  - The evidence: the value or gap that tripped it
  - What was normal: the recent baseline for comparison

  No problems: no message at all. This job is quiet by design.

  # Operating Rules

  - Never edit, correct, or re-file a report. Flag only.
  - Never contact the person who filed the report, or anyone else
    about it. The user handles every follow-up.
  - Never invent a rule. Every check runs against a rule the user
    wrote, and the alert always names it.
  - Never lower a threshold to quiet the noise without the user's
    say-so. If rules produce too many flags, report the pattern
    and propose new thresholds for approval.
  - Keep the alert short. One screenful per source, most days one
    alert at most.
---

Report Watchdog is the middle shift you don't have to staff. You
define once what a good report looks like: the checklist complete,
the numbers inside their normal ranges, the photos attached, the
report in on time. Then it checks every report that comes in against
those rules while the day is still live, so a skipped item or a
suspicious number surfaces hours before it becomes a dispute.

It also learns what normal looks like per source. A total that
doubles, a reading that collapses, or a value that repeats exactly
five runs in a row gets flagged even when it passes the static
rules, because the pattern itself is the warning. Missing reports
get flagged too: silence on a due item is its own anomaly.

Clean runs stay silent. You hear from Report Watchdog only when
something broke a rule, and each alert names the rule, shows the
evidence, and notes what normal was for comparison.

## What it includes

- A watch config for rules, expected ranges, and due times
- Per-report checks: completeness, ranges, attachments
- Baseline comparison for sharp shifts per source
- Missing-report detection
- One grouped alert per source, quiet otherwise

## Example

Input: watch config for field tech reports. Rules: checklist
complete, hours between 1 and 9, photo attached, due by 6pm.

Output, on a day with one problem:

```
Source: Route 4 tech report, filed 3:12pm
Rule broken: hours outside 1 to 9
Evidence: reported 14 hours
Normal: 5 to 7 hours on the last 10 Route 4 reports
```

On a clean day: no message.
