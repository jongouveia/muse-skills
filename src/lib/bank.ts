import type { CollectionEntry } from 'astro:content';
import { CATEGORIES } from './categories';

export type Entry = CollectionEntry<'entries'>;

export function compareEntries(a: Entry, b: Entry): number {
  const dateDifference = a.data.date_added.valueOf() - b.data.date_added.valueOf();
  return dateDifference || a.data.title.localeCompare(b.data.title);
}

export function orderedBankEntries(entries: Entry[]): Entry[] {
  return (Object.keys(CATEGORIES) as Array<keyof typeof CATEGORIES>)
    .flatMap((category) => entries.filter((entry) => entry.data.category === category).sort(compareEntries));
}

export function bankSlot(entries: Entry[], entryId: string): number {
  const slot = orderedBankEntries(entries).findIndex((entry) => entry.id === entryId);
  return slot + 1;
}
