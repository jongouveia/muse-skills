// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://museskills.dev',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (page) => !page.includes('/og-default') })],
  vite: { plugins: [tailwindcss()] },
});
