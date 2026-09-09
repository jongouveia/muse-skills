---
title: "Price Drop Watcher"
tagline: "Checks your saved product URLs daily and tells you only when a price drops below target."
category: "shopping"
type: "workflow"
author: "Muse community"
source_url: "https://github.com/muse-skills/directory"
source_verified: false
includes: ["schedule", "workflow", "url list", "alerts"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Reads only the product pages the user adds. Never creates an account on a retailer site,
  never adds items to a cart, and never checks out. Sends an alert only when a tracked price
  drops below its target; a run with no drop sends nothing.
source: |
  name: price-drop-watcher
  description: Daily price check on a list of product URLs, each with a target price. Alerts
    only when a tracked price drops below its target. Trigger phrases: watch this price, track
    this product, tell me when this drops in price.

  schedule: daily at 09:00 local time (cron: 0 9 * * *). Confirm the time with the user before
  the first scheduled run.

  trigger: the scheduled time, or a manual "check my tracked prices now" request.

  watch_list: a list the user builds and edits over time. Each entry holds a product URL, a
  target price, and the date added.
    - add: the user gives a URL and a target price ("track this at $40" or "alert me under
      $40"). The assistant fetches the page once to confirm the product and current price,
      then adds the entry and confirms it back to the user with the current price shown.
    - remove: the user names a URL, or a short product label from a prior alert or list. The
      assistant removes the matching entry and confirms what was removed.
    - list: on request, the assistant shows every tracked URL with its target price and the
      last known price.

  steps:
    1. Load the current watch list. If it is empty, do nothing and end the run.
    2. For each entry, fetch the product page and read the current listed price.
    3. Compare the current price to the entry's target price.
    4. If the current price is at or below target, mark it for the alert. Otherwise leave it
       unmarked.
    5. If any entry is marked, send one alert message listing every marked product: name,
       current price, target price, and the URL.
    6. If no entry is marked, send nothing. Do not send a "no drops today" message.
    7. Record the current price on each entry as the last known price, for the next run's
       comparison and for the list command.

  output: on a run with at least one drop, one alert message with a row per dropped product
  (name, current price, target, URL). On a quiet run, no message at all.

  stop_conditions:
    - If a product page fails to load three runs in a row, report it once as a broken watch
      and stop checking that entry until the user re-adds or confirms it.
    - Never attempt to buy, add to cart, or create an account on any retailer site.
    - Never check a URL more often than once per scheduled run, even if asked to hurry.

  operating_rules:
    - Read-only. Never submit a form, never log in, never complete a purchase.
    - Never send an alert for a price at or above target.
    - A quiet run stays quiet: nothing to report means no message sent.
    - Keep the watch list private to the user; never share tracked URLs or prices elsewhere.
install_prompt: |
  Set up the "Price Drop Watcher" workflow. Its full source is below. Default schedule: daily
  at 09:00 local time. Ask me to confirm or change this time before you create the recurring
  job. Once I confirm, create the job and ask me for the first URL and target price to track.
  Tell me the job name and the confirmed schedule when it is set up.

  --- SOURCE ---
  name: price-drop-watcher
  description: Daily price check on a list of product URLs, each with a target price. Alerts
    only when a tracked price drops below its target. Trigger phrases: watch this price, track
    this product, tell me when this drops in price.

  schedule: daily at 09:00 local time (cron: 0 9 * * *). Confirm the time with the user before
  the first scheduled run.

  trigger: the scheduled time, or a manual "check my tracked prices now" request.

  watch_list: a list the user builds and edits over time. Each entry holds a product URL, a
  target price, and the date added.
    - add: the user gives a URL and a target price ("track this at $40" or "alert me under
      $40"). The assistant fetches the page once to confirm the product and current price,
      then adds the entry and confirms it back to the user with the current price shown.
    - remove: the user names a URL, or a short product label from a prior alert or list. The
      assistant removes the matching entry and confirms what was removed.
    - list: on request, the assistant shows every tracked URL with its target price and the
      last known price.

  steps:
    1. Load the current watch list. If it is empty, do nothing and end the run.
    2. For each entry, fetch the product page and read the current listed price.
    3. Compare the current price to the entry's target price.
    4. If the current price is at or below target, mark it for the alert. Otherwise leave it
       unmarked.
    5. If any entry is marked, send one alert message listing every marked product: name,
       current price, target price, and the URL.
    6. If no entry is marked, send nothing. Do not send a "no drops today" message.
    7. Record the current price on each entry as the last known price, for the next run's
       comparison and for the list command.

  output: on a run with at least one drop, one alert message with a row per dropped product
  (name, current price, target, URL). On a quiet run, no message at all.

  stop_conditions:
    - If a product page fails to load three runs in a row, report it once as a broken watch
      and stop checking that entry until the user re-adds or confirms it.
    - Never attempt to buy, add to cart, or create an account on any retailer site.
    - Never check a URL more often than once per scheduled run, even if asked to hurry.

  operating_rules:
    - Read-only. Never submit a form, never log in, never complete a purchase.
    - Never send an alert for a price at or above target.
    - A quiet run stays quiet: nothing to report means no message sent.
    - Keep the watch list private to the user; never share tracked URLs or prices elsewhere.
---

Price Drop Watcher checks a list of product URLs once a day and compares each one's current
price to the target you set. When a price drops to or below target, you get one alert
covering every product that dropped, with its current price and a link. When nothing dropped,
you hear nothing. No daily "still no change" noise.

You build the list yourself. Give it a product URL and a target price to start tracking it
("track this at $40"). Name a URL or product to stop tracking it. Ask for the full list at any
time to see every tracked item with its target and last known price.

The default check time is daily at 09:00 local. The assistant confirms that time with you
before creating the recurring job.

## What it includes

- A daily cron job, default 09:00 local
- A watch list with target price per product, editable anytime
- Add and remove commands for the watch list
- One alert per run, sent only when a price actually drops below target

## Example

Input: watch list has a $120 jacket tracked at target $90, and a $45 blender tracked at
target $40.

Run 1 output: jacket is $95, blender is $42. Neither hits target. No message sent.

Run 2 output: jacket drops to $88. Alert: "Jacket: $88, target $90.
https://example.com/jacket". The blender stays out of the alert because it is still above its
target.
