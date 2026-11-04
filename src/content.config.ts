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
    origin: z.enum(['shared', 'directory']).default('shared'),
    includes: z.array(z.string()),
    version: z.string(),
    date_added: z.coerce.date(),
    safety_notes: z.string(),
    install_prompt: z.string(),
    source: z.string(),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    // howto: the first ordered list in the body is a real procedure and becomes HowTo JSON-LD.
    kind: z.enum(['howto', 'article']).default('article'),
    date_added: z.coerce.date(),
    updated: z.coerce.date(),
  }),
});

export const collections = { entries, guides };
