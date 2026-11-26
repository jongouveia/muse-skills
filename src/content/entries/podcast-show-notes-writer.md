---
title: "Podcast Show Notes Writer"
tagline: "Turns a podcast transcript into show notes with timestamps, links, and quotes."
category: "creative"
type: "skill"
author: "Muse Skills editors"
source_url: "https://github.com/jongouveia/muse-skills/blob/main/src/content/entries/podcast-show-notes-writer.md"
source_verified: false
origin: "directory"
includes:
  - "A short episode summary in plain language"
  - "Timestamped key moments, with the topic of each one"
  - "Links and resources named in the episode, listed in one place"
  - "Two or three quotable lines, copied word for word"
  - "A title and a one-line description ready to paste into your host"
version: "1.0.0"
date_added: "2026-11-19"
safety_notes: "Never invents a quote, a timestamp, or a link that is not in the transcript. Quotes are copied word for word, and anything unclear is marked unclear."
install_prompt: |
  To install the Podcast Show Notes Writer skill, save the skill source below as ~/workspace/skills/podcast-show-notes-writer/SKILL.md, then tell Muse to use it whenever you finish recording a podcast episode and want show notes with a summary, timestamps, links, and quotes.

  --- SOURCE ---
  ---
  name: podcast-show-notes-writer
  description: Turn a podcast episode transcript into show notes with a summary, timestamped key moments, links, and quotes. Use when the user pastes a transcript or episode notes and wants show notes ready to publish.
  ---

  ## Purpose
  A finished episode is only half done until the show notes exist, and writing them from a long transcript takes real time. This skill reads a podcast transcript or rough episode notes and writes show notes a listener can scan in a minute: a short summary, the key moments with timestamps, every link and resource named in the episode, and two or three quotable lines. The result is ready to paste into a podcast host.

  ## Workflow
  1. Take the transcript or episode notes the user pastes.
  2. Write a short episode summary in plain language, three to five sentences.
  3. Pick the key moments and list each one with its timestamp and topic.
  4. Collect every link, book, tool, or resource named in the episode into one list.
  5. Pull out two or three quotable lines, copied word for word, with timestamps.
  6. Suggest a title and a one-line description for the episode.
  7. Return the show notes in a clean order: title, description, summary, key moments, links, quotes.

  ## Output Contract
  - A title and a one-line description for the episode.
  - A short summary, three to five sentences.
  - Key moments with timestamps and topics, in episode order.
  - A list of links and resources named in the episode.
  - Two or three quotes, copied word for word, each with a timestamp.
  - Nothing invented: no quote, timestamp, or link that is not in the transcript.

  ## Operating Rules
  - Never invent a quote, a timestamp, or a link. If it is not in the transcript, it does not go in the notes.
  - Copy quotes word for word. Do not tidy them up.
  - Mark anything unclear in the transcript instead of guessing what was said.
  - Keep the summary short. If the episode is long, the summary stays three to five sentences.
  - Ask once for missing facts, such as the episode number or guest name, then write with what you have.
source: |
  ---
  name: podcast-show-notes-writer
  description: Turn a podcast episode transcript into show notes with a summary, timestamped key moments, links, and quotes. Use when the user pastes a transcript or episode notes and wants show notes ready to publish.
  ---

  ## Purpose
  A finished episode is only half done until the show notes exist, and writing them from a long transcript takes real time. This skill reads a podcast transcript or rough episode notes and writes show notes a listener can scan in a minute: a short summary, the key moments with timestamps, every link and resource named in the episode, and two or three quotable lines. The result is ready to paste into a podcast host.

  ## Workflow
  1. Take the transcript or episode notes the user pastes.
  2. Write a short episode summary in plain language, three to five sentences.
  3. Pick the key moments and list each one with its timestamp and topic.
  4. Collect every link, book, tool, or resource named in the episode into one list.
  5. Pull out two or three quotable lines, copied word for word, with timestamps.
  6. Suggest a title and a one-line description for the episode.
  7. Return the show notes in a clean order: title, description, summary, key moments, links, quotes.

  ## Output Contract
  - A title and a one-line description for the episode.
  - A short summary, three to five sentences.
  - Key moments with timestamps and topics, in episode order.
  - A list of links and resources named in the episode.
  - Two or three quotes, copied word for word, each with a timestamp.
  - Nothing invented: no quote, timestamp, or link that is not in the transcript.

  ## Operating Rules
  - Never invent a quote, a timestamp, or a link. If it is not in the transcript, it does not go in the notes.
  - Copy quotes word for word. Do not tidy them up.
  - Mark anything unclear in the transcript instead of guessing what was said.
  - Keep the summary short. If the episode is long, the summary stays three to five sentences.
  - Ask once for missing facts, such as the episode number or guest name, then write with what you have.
---

Recording an episode is the fun part. Writing the show notes after is the chore: scrubbing back through the transcript for the moment a guest named a book, the minute the big story started, and the exact words worth quoting. This skill takes a podcast transcript or rough episode notes and writes show notes a listener can scan in a minute. You get a short summary, the key moments with timestamps, every link and resource named in the episode in one list, and two or three quotable lines copied word for word, plus a title and a one-line description ready to paste into your podcast host. Nothing is invented: no quote, timestamp, or link appears unless it is in the transcript.

## What it includes

- A short episode summary in plain language
- Timestamped key moments, with the topic of each one
- Links and resources named in the episode, listed in one place
- Two or three quotable lines, copied word for word
- A title and a one-line description ready to paste into your host

## Example

You paste in the transcript of a 40-minute episode about starting a record store. The skill writes show notes with the title "Opening a Record Store on a Shoestring" and a one-line description, a four-sentence summary, key moments at 04:12 for finding the lease, 18:40 for the first crate dig, and 31:05 for pricing used vinyl, a list of the three books and two suppliers named in the episode, and two quotes copied word for word with their timestamps. You paste the notes into your host and publish.
