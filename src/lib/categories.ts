export const CATEGORIES = {
  'deal-hunting': 'Deal hunting',
  'chief-of-staff': 'Chief of staff & productivity',
  money: 'Money & finance',
  shopping: 'Shopping',
  creative: 'Creative',
  dev: 'Dev & automation',
} as const;

export const TYPES = ['skill', 'prompt', 'workflow', 'config'] as const;

export type Category = keyof typeof CATEGORIES;
export type EntryType = (typeof TYPES)[number];

export function categorySlug(category: string): string {
  if (category in CATEGORIES) return category;
  const match = Object.entries(CATEGORIES).find(([, name]) => name === category);
  return match?.[0] ?? category.toLowerCase().trim().replace(/\s+/g, '-');
}

export function categoryName(category: Category | string): string {
  return CATEGORIES[category as Category] ?? category;
}

export function patchCount(n: number): string {
  return `${n} patch${n === 1 ? '' : 'es'}`;
}

export function formatDate(value: Date | string | number): string {
  const date = value instanceof Date ? value : new Date(value);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${date.getUTCDate()} ${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}
