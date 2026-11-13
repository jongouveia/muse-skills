import type { CollectionEntry } from 'astro:content';

export const CATEGORIES = {
  'deal-hunting': 'Deal hunting',
  productivity: 'Productivity',
  money: 'Money & finance',
  shopping: 'Shopping',
  creative: 'Creative',
  marketing: 'Marketing',
  dev: 'Dev & automation',
  home: 'Home',
} as const;

export const TYPES = ['skill', 'prompt', 'workflow', 'config', 'space'] as const;

export type Category = keyof typeof CATEGORIES;
export type EntryType = (typeof TYPES)[number];

export type Entry = CollectionEntry<'entries'>;

export const CATEGORY_DESCRIPTIONS: Record<Category, string> = {
  'deal-hunting': 'Skills that watch marketplaces and flag underpriced listings before anyone else sees them.',
  productivity: 'Briefings, inbox triage, meeting notes, and feed prompts that run your day on a schedule.',
  money: 'Skills that read your receipts and statements and tell you what to cut.',
  shopping: 'Gift ideas and price watching, with links, on the schedule you set.',
  creative: 'Trip plans, collections, and other projects Muse can research and organize for you.',
  marketing: 'Skills for planning, drafting, and adapting marketing content.',
  dev: 'Code review and automation skills for people who ship software.',
  home: 'Inventory, maintenance, and move planning that runs your house on a schedule.',
};

export function categorySlug(category: string): string {
  if (category in CATEGORIES) return category;
  const match = Object.entries(CATEGORIES).find(([, name]) => name === category);
  return match?.[0] ?? category.toLowerCase().trim().replace(/\s+/g, '-');
}

export function categoryName(category: Category | string): string {
  return CATEGORIES[category as Category] ?? category;
}

export function categoryDescription(slug: Category | string): string {
  return CATEGORY_DESCRIPTIONS[slug as Category] ?? '';
}

export const TYPE_NAMES: Record<EntryType, string> = {
  skill: 'skill',
  prompt: 'prompt pack',
  workflow: 'workflow',
  config: 'config',
  space: 'Space',
};

export function isSpace(entry: Entry): boolean {
  return entry.data.type === 'space';
}

// Wording for the prompt a visitor copies: skills install, Spaces build.
export const PROMPT_COPY = {
  install: {
    verb: 'install',
    button: 'Copy install prompt',
    heading: 'Install',
    promptLabel: 'Install prompt',
    sourceLabel: 'SKILL.md',
    how: 'Copy this block and paste it into your Muse chat. Muse does the install and confirms when it\'s done.',
    trust: 'This is the exact text Muse installs. Read it. That\'s the whole trust model.',
    tested: 'The install prompt ran cleanly in a Muse session.',
    warnings: [
      'A shared skill carries somebody else\'s instructions. Read the source before you install it.',
      'Never paste an API key, password, or token into anything a skill asks for. Legitimate skills use Muse\'s own secure flows.',
      'Installing copies the setup into your own environment. It gives the author nothing.',
    ],
  },
  build: {
    verb: 'build',
    button: 'Copy build prompt',
    heading: 'Build',
    promptLabel: 'Build prompt',
    sourceLabel: 'Space spec',
    how: 'Copy this block and paste it into your Muse chat. Muse builds the Space and adds it to your sidebar.',
    trust: 'This is the exact spec Muse builds from. Read it. That\'s the whole trust model.',
    tested: 'The build prompt built this Space in a Muse session.',
    warnings: [
      'A Space spec carries somebody else\'s instructions. Read the spec before you build it.',
      'Connect only the apps the spec names. Never paste an API key, password, or token into chat.',
      'Building copies the setup into your own Muse. It gives the author nothing.',
    ],
  },
} as const;

export function promptCopy(entry: Entry) {
  return isSpace(entry) ? PROMPT_COPY.build : PROMPT_COPY.install;
}

export function typeName(type: EntryType | string): string {
  return TYPE_NAMES[type as EntryType] ?? type;
}

export function skillCount(n: number): string {
  return `${n} skill${n === 1 ? '' : 's'}`;
}

export function formatDate(value: Date | string | number): string {
  const date = value instanceof Date ? value : new Date(value);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${date.getUTCDate()} ${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

export function compareEntries(a: Entry, b: Entry): number {
  const dateDifference = b.data.date_added.valueOf() - a.data.date_added.valueOf();
  return dateDifference || a.data.title.localeCompare(b.data.title);
}
