import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

export type Pack = CollectionEntry<'packs'>;
export type Entry = CollectionEntry<'entries'>;

export interface ResolvedPack {
  pack: Pack;
  entries: Entry[];
  installPrompt: string;
}

// reference('entries') only types the slug. It does not check that the entry
// exists, so resolve every slug here and fail the build on a missing one.
export async function resolvePack(pack: Pack): Promise<ResolvedPack> {
  const entries: Entry[] = [];
  for (const ref of pack.data.entries) {
    const entry = await getEntry(ref);
    if (!entry) {
      throw new Error(`Pack "${pack.id}" lists entry "${ref.id}", which does not exist in src/content/entries/.`);
    }
    entries.push(entry);
  }
  return { pack, entries, installPrompt: buildPackPrompt(entries) };
}

export async function getPacks(): Promise<ResolvedPack[]> {
  const packs = await getCollection('packs');
  const resolved = await Promise.all(packs.map(resolvePack));
  return resolved.sort((a, b) => b.pack.data.date_added.valueOf() - a.pack.data.date_added.valueOf()
    || a.pack.data.title.localeCompare(b.pack.data.title));
}

export function buildPackPrompt(entries: Entry[]): string {
  const total = entries.length;
  const lead = `Install the ${total} skills below in order, one at a time. Each block is one complete install prompt. After the last skill, list each skill with its trigger phrases.`;
  const blocks = entries.map((entry, index) =>
    `===== SKILL ${index + 1} OF ${total}: ${entry.data.title} =====\n\n${entry.data.install_prompt.trim()}\n\n===== END OF SKILL ${index + 1} OF ${total} =====`);
  return [lead, ...blocks].join('\n\n');
}
