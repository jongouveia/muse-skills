---
title: "Weekly Feed Brief"
tagline: "A feed-prompt template that turns your weekly briefing into topics you chose."
category: "productivity"
type: "config"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/weekly-feed-brief.md"
source_verified: false
origin: "directory"
includes: ["config", "feed-prompt"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Writes only to the assistant's own feed prompt setting, and only after you confirm the
  change. Never reads a file outside that setting. Never sends a topic, source, or
  preference to any third party. A week with nothing to report sends nothing.
install_prompt: |
  This config lives in the assistant's feed prompt setting, the field that controls what
  your weekly briefing covers. Show me the filled-in snippet below with your topics,
  sources, and preferences, and wait for me to confirm it before you write anything to the
  feed prompt setting.

  --- SOURCE ---
  # Weekly Feed Brief config

  ## Where this lives
  Assistant settings → Feed → Feed prompt. This snippet replaces or extends the text in
  that field. Ask the user to confirm before writing.

  ## Config snippet

  ```
  topics_follow:
    - "[Topic 1, e.g. commercial real estate financing]"
    - "[Topic 2, e.g. changes to a named regulation]"
    - "[Topic 3, e.g. a competitor or company name]"

  sources_prefer:
    - "[Source 1, e.g. a named trade publication]"
    - "[Source 2, e.g. a named analyst or outlet]"

  sources_skip:
    - "[Source to exclude, e.g. a low-quality aggregator]"
    - "[Topic to exclude, e.g. general market commentary with no new fact]"

  output_length: "[short: 3-5 bullets | medium: one paragraph per topic | long: full
    briefing with links]"

  delivery_day: "[day of week, e.g. Monday morning]"

  quiet_rule: "If no topic has a genuine update this week, send nothing rather than a
    briefing with no news."
  ```

  ## What to change
  - `topics_follow`: name specific topics, not broad categories. "Fed rate decisions"
    beats "the economy."
  - `sources_prefer`: name outlets or people, not "reputable sources."
  - `sources_skip`: name what to exclude, whether a source or a category of story.
  - `output_length`: pick one of the three named lengths.
  - `delivery_day`: one day and a rough time of day.

  ## Install steps
  1. Ask the user to fill in each bracketed field above, or fill them in from what they
     tell you in chat.
  2. Show the completed snippet back to the user.
  3. Wait for explicit confirmation.
  4. Write the confirmed snippet to the assistant's feed prompt setting.
  5. Confirm the write succeeded and tell the user which day the first briefing arrives.
source: |
  # Weekly Feed Brief config

  ## Where this lives
  Assistant settings → Feed → Feed prompt. This snippet replaces or extends the text in
  that field.

  ## Config snippet

  ```
  topics_follow:
    - "[Topic 1, e.g. commercial real estate financing]"
    - "[Topic 2, e.g. changes to a named regulation]"
    - "[Topic 3, e.g. a competitor or company name]"

  sources_prefer:
    - "[Source 1, e.g. a named trade publication]"
    - "[Source 2, e.g. a named analyst or outlet]"

  sources_skip:
    - "[Source to exclude, e.g. a low-quality aggregator]"
    - "[Topic to exclude, e.g. general market commentary with no new fact]"

  output_length: "[short: 3-5 bullets | medium: one paragraph per topic | long: full
    briefing with links]"

  delivery_day: "[day of week, e.g. Monday morning]"

  quiet_rule: "If no topic has a genuine update this week, send nothing rather than a
    briefing with no news."
  ```

  ## What to change
  - `topics_follow`: name specific topics, not broad categories.
  - `sources_prefer`: name outlets or people, not "reputable sources."
  - `sources_skip`: name what to exclude, whether a source or a category of story.
  - `output_length`: pick one of the three named lengths.
  - `delivery_day`: one day and a rough time of day.

  ## Install steps
  1. Fill in each bracketed field from what the user states.
  2. Show the completed snippet back to the user.
  3. Wait for explicit confirmation.
  4. Write the confirmed snippet to the assistant's feed prompt setting.
  5. Confirm the write succeeded and name the day the first briefing arrives.
---

This config turns the assistant's feed prompt setting into a briefing you control. You
name the topics to follow, the sources you trust, and the sources or angles to skip. You
also set how long a briefing runs and which day it arrives.

It lives in one place: the feed prompt field in your assistant settings. The install
prompt shows you the filled-in snippet and waits for your confirmation before it writes
anything there.

A week with no genuine update on any of your topics sends nothing. The config states that
rule directly, so a quiet week doesn't turn into a briefing padded with old news.

## What it includes

- A YAML-style snippet with `topics_follow`, `sources_prefer`, `sources_skip`,
  `output_length`, and `delivery_day` fields.
- A stated location: the assistant's feed prompt setting.
- A confirm-before-write step, and a quiet-week rule that suppresses empty briefings.

## Example

**Filled-in config:**
```
topics_follow:
  - "Federal Reserve rate decisions"
  - "Changes to Section 8 housing subsidy rules"
  - "Blackstone real estate moves"

sources_prefer:
  - "The Real Deal"
  - "Bisnow"

sources_skip:
  - "general stock market commentary"

output_length: "short: 3-5 bullets"
delivery_day: "Monday morning"
```

**A week's briefing:**
```
- The Fed held rates steady this week, citing housing-sector softness (Bisnow).
- No Section 8 rule changes this week.
- Blackstone announced a $2B acquisition of a logistics REIT (The Real Deal).
```
