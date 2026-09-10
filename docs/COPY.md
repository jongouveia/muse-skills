# Site copy (verbatim; page code uses these strings)

## Directory chrome

- Site name: Muse Skills
- Nav: Skills · About · Submit a skill
- Search placeholder: Search skills
- Filter panel: Clear filters · "{n} of {m} skills" · group labels "category" and "type"
- Empty state: No skills match your filters.
- Row actions: View · Copy install prompt · Copied
- Status: Ready to copy. · Paste it into your Muse chat.
- Entry sections: What it does · What this one touches · Install · Full source · Details · Source · View source
- Theme toggle label: Toggle theme
- 404 line: That page is not in the directory.
- 404 button: Back to skills

## Homepage

- H1: Ready-to-use skills for Muse AI.
- Offer line: One paste installs the whole thing. Pick a skill, read its full source, copy the install prompt, and paste it into your Muse chat. Skills, prompt packs, scheduled workflows, and config snippets, all free.
- How it works, three steps:
  1. Copy. Choose Copy install prompt on any skill. The install prompt goes to your clipboard.
  2. Paste. Open your Muse chat and paste the block.
  3. Confirm. Muse creates the skill, asks before it schedules anything, and tells you the trigger phrases.

## Entry page

- Breadcrumb: Skills / {Category name} / {Title}
- Labels: What it does · Before you install · What this one touches · Install · Full source · Details · Source · Author · Version · Added · Type · Includes
- Type values: skill · prompt pack · workflow · config
- Author note under the author name: "Written for this directory" for seed entries; "Unverified source" for shared entries not yet verified
- Install intro: Copy this block and paste it into your Muse chat. Muse does the install and confirms when it's done.
- Before you install heading: Before you install
- Warnings body:
  - A shared skill carries somebody else's instructions. Read the source before you install it.
  - Never paste an API key, password, or token into anything a skill asks for. Legitimate skills use Muse's own secure flows.
  - Installing copies the setup into your own environment. It gives the author nothing.
- Source intro: This is the exact text Muse installs. Read it. That's the whole trust model.
- Source copy label: Copy source
- Scope section ("What this one touches"): the entry's own safety_notes, kept apart from the three global lines
- Related heading: More in {Category name}

## Category page

- Heading pattern: "{Category name}" with the count: "{n} skills" ("1 skill")
- Categories: Deal hunting · Productivity · Money & finance · Shopping · Creative · Marketing · Dev & automation

## Submit page

- Heading: Submit a skill
- Intro: Share a skill, prompt pack, workflow, or config snippet. A person reviews every submission against the checklist below before it's listed.
- Form fields: Name · Type (skill, prompt, workflow, config) · Full source · Where you shared it (optional) · Your name or handle
- Button: Open a prefilled GitHub issue
- Checklist heading: What we check
- Checklist:
  - The full source reads on the page. Nothing hidden behind a link.
  - It never asks for a credential.
  - It never sends your data to a third party.
  - The install prompt worked end to end in a fresh Muse chat.
  - The author is credited. Link it if you shared it publicly; otherwise a name or handle is enough.

## About page

- Heading: About Muse Skills
- What a skill is: This directory lists four kinds of entry:
  - Skill. A SKILL.md file: a name, a description, and the steps Muse follows when you use a trigger phrase.
  - Prompt pack. A reusable prompt you call by name.
  - Workflow. A skill on a schedule.
  - Config. A snippet for a setting, like your feed prompt.
- How one paste works: Every skill ships an install prompt. It tells Muse where to create the skill, includes the full source, and asks Muse to confirm the trigger phrases. Workflows and configs make Muse ask you before it schedules or writes anything.
- Safety policy heading: Safety policy
- Safety policy: one list of four: the three Before you install lines above, then: We test submitted install prompts in a fresh Muse chat before we list them.
- Curation heading: How skills get here
- Curation: We sweep X, Threads, Reddit, and GitHub each week for shared Muse skills, and we take submissions. New skills land in a weekly batch. The first twelve were written for this directory by its editors; each one says so on its page.
- Independence: Muse Skills is an independent community directory. It isn't affiliated with Meta. Muse and Muse AI are Meta's names.

## Footer

- Columns: Browse (Skills, then each category) · Project (About, Submit a skill, GitHub)
- Note: Independent community directory. Not affiliated with Meta.
