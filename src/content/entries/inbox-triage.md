---
title: "Inbox Triage"
tagline: "Sorts new email into reply, delegate, archive, or later, then drafts your replies."
category: "chief-of-staff"
type: "workflow"
author: "Muse community"
source_url: "https://github.com/muse-skills/directory"
source_verified: false
includes: ["schedule", "workflow", "draft replies", "approval step"]
version: "1.0.0"
date_added: 2026-09-09
safety_notes: |
  Reads your connected email account only. Writes draft replies; it never sends a message
  without your approval on that message. Never delegates or forwards mail to a third party
  without you naming the delegate first. Never reads attachments beyond what the mail client
  already renders.
source: |
  name: inbox-triage
  description: Scheduled email triage. Classifies new mail into reply, delegate, archive, or
    later, drafts replies for the reply set, and holds every draft for approval before send.
    Trigger phrases: triage my inbox, sort my email, draft my replies.

  schedule: weekdays at 07:30 local time (cron: 30 7 * * 1-5). Confirm the time with the user
  before the first scheduled run. A user change to the time takes effect on the next run.

  trigger: the scheduled time, or a manual "run inbox triage now" request.

  steps:
    1. Read all mail that arrived since the last successful run, using the user's own
       connected email account. Never sign in with credentials the user has not already
       connected.
    2. Classify each message into exactly one bucket:
       - reply: needs a response from the user.
       - delegate: needs action from someone else the user has already named as a delegate.
       - archive: no action needed (receipts, notifications, newsletters with no ask).
       - later: needs the user's attention but not a reply today (long threads, decisions
         that need more context).
    3. For every message in the reply bucket, draft a reply in the user's own voice, using
       the thread history for context. Keep each draft under 150 words unless the source
       message needs a longer answer.
    4. For every message in the delegate bucket, draft a one-line forward note to the named
       delegate. Never send it without approval.
    5. Present the full batch: bucket counts, then each reply and delegate draft in full,
       with the original message it answers.
    6. Wait for the user's decision on each draft: approve, edit, or discard. Send only the
       drafts marked approved, exactly as approved or as edited by the user.
    7. Apply the archive and later labels only after the user has seen the batch summary.
       Never archive a message the user has not at least seen listed.

  output: a batch report per run: counts by bucket, then the full text of every reply and
  delegate draft awaiting approval. If no new mail arrived, or every new message fell into
  archive or later, the report says so in one line and includes no drafts.

  stop_conditions:
    - Stop and ask the user if a message looks like it needs a password, payment, or legal
      commitment. Never draft a reply that commits money or signs an agreement.
    - Stop the whole run and report the error if the mail account disconnects mid-run.
    - Never retry a send. A failed send is reported, not resent automatically.

  operating_rules:
    - Never send a message without per-message approval, every run, no exceptions.
    - Never delegate mail to anyone not already named by the user as a delegate.
    - Never ask the user for their email password or any credential. Use only the account
      they already connected.
    - Never forward or quote a message to a third party outside delegation the user set up.
    - A quiet run (no reply or delegate drafts) sends nothing beyond the one-line summary.
install_prompt: |
  Set up the "Inbox Triage" workflow. Its full source is below. Default schedule: weekdays
  07:30 local time. Ask me to confirm or change this time before you create the recurring
  job. Once I confirm, create the job, connect it to my email account, and run a first pass
  now so I can see the classification and the draft replies before any run is unattended.
  Tell me the job name and the confirmed schedule when it is set up.

  --- SOURCE ---
  name: inbox-triage
  description: Scheduled email triage. Classifies new mail into reply, delegate, archive, or
    later, drafts replies for the reply set, and holds every draft for approval before send.
    Trigger phrases: triage my inbox, sort my email, draft my replies.

  schedule: weekdays at 07:30 local time (cron: 30 7 * * 1-5). Confirm the time with the user
  before the first scheduled run. A user change to the time takes effect on the next run.

  trigger: the scheduled time, or a manual "run inbox triage now" request.

  steps:
    1. Read all mail that arrived since the last successful run, using the user's own
       connected email account. Never sign in with credentials the user has not already
       connected.
    2. Classify each message into exactly one bucket:
       - reply: needs a response from the user.
       - delegate: needs action from someone else the user has already named as a delegate.
       - archive: no action needed (receipts, notifications, newsletters with no ask).
       - later: needs the user's attention but not a reply today (long threads, decisions
         that need more context).
    3. For every message in the reply bucket, draft a reply in the user's own voice, using
       the thread history for context. Keep each draft under 150 words unless the source
       message needs a longer answer.
    4. For every message in the delegate bucket, draft a one-line forward note to the named
       delegate. Never send it without approval.
    5. Present the full batch: bucket counts, then each reply and delegate draft in full,
       with the original message it answers.
    6. Wait for the user's decision on each draft: approve, edit, or discard. Send only the
       drafts marked approved, exactly as approved or as edited by the user.
    7. Apply the archive and later labels only after the user has seen the batch summary.
       Never archive a message the user has not at least seen listed.

  output: a batch report per run: counts by bucket, then the full text of every reply and
  delegate draft awaiting approval. If no new mail arrived, or every new message fell into
  archive or later, the report says so in one line and includes no drafts.

  stop_conditions:
    - Stop and ask the user if a message looks like it needs a password, payment, or legal
      commitment. Never draft a reply that commits money or signs an agreement.
    - Stop the whole run and report the error if the mail account disconnects mid-run.
    - Never retry a send. A failed send is reported, not resent automatically.

  operating_rules:
    - Never send a message without per-message approval, every run, no exceptions.
    - Never delegate mail to anyone not already named by the user as a delegate.
    - Never ask the user for their email password or any credential. Use only the account
      they already connected.
    - Never forward or quote a message to a third party outside delegation the user set up.
    - A quiet run (no reply or delegate drafts) sends nothing beyond the one-line summary.
---

Inbox Triage runs on your connected email account every weekday morning and sorts what came
in overnight. It splits new mail into four buckets: reply, delegate, archive, and later. For
anything that needs a reply, it drafts one in your voice from the thread history, and for
anything that needs someone else, it drafts a short forward note.

Nothing goes out on its own. Every draft, reply or forward, waits for your approval. You can
approve a draft as written, edit it first, or discard it. Archive and later labels apply only
after you have seen the batch.

The default run time is weekdays at 07:30 local. The assistant confirms that time with you
before creating the recurring job, and asks again if you want to change it later.

## What it includes

- A cron-based recurring job, default weekdays 07:30 local
- Four-way classification: reply, delegate, archive, later
- Drafted replies for every message in the reply bucket
- A per-message approval step before any send

## Example

Input: 6 new messages overnight, including a client question about a due date and a
newsletter.

Output: "3 reply, 1 delegate, 2 archive. Draft 1 (to client@example.com, re: 'Due date?'):
'Hi Sam, the report ships Friday, no change from last week. Let me know if that still works
on your end.' Approve, edit, or discard?" The two archive items and the newsletter are listed
by subject line only, with no draft attached.
