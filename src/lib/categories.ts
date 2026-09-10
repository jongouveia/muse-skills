import type { CollectionEntry } from 'astro:content';

export const CATEGORIES = {
  'deal-hunting': 'Deal hunting',
  productivity: 'Productivity',
  money: 'Money & finance',
  shopping: 'Shopping',
  creative: 'Creative',
  marketing: 'Marketing',
  dev: 'Dev & automation',
} as const;

export const TYPES = ['skill', 'prompt', 'workflow', 'config'] as const;

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
};

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
