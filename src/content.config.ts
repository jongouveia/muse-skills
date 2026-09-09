import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { CATEGORIES, TYPES } from './lib/categories';

const entries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/entries' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string().max(120),
    category: z.enum(Object.keys(CATEGORIES) as [keyof typeof CATEGORIES, ...(keyof typeof CATEGORIES)[]]),
    type: z.enum(TYPES),
    author: z.string(),
    source_url: z.string().url(),
    source_verified: z.boolean().default(false),
    includes: z.array(z.string()),
    version: z.string(),
    date_added: z.coerce.date(),
    safety_notes: z.string(),
    install_prompt: z.string(),
    source: z.string(),
  }),
});

export const collections = { entries };
