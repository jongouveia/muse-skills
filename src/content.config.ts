import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const CATEGORIES = {
  'deal-hunting': 'Deal hunting',
  'chief-of-staff': 'Chief of staff & productivity',
  money: 'Money & finance',
  shopping: 'Shopping',
  creative: 'Creative',
  dev: 'Dev & automation',
} as const;

export const TYPES = ['skill', 'prompt', 'workflow', 'config'] as const;

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
