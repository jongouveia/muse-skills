// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://museskills.dev',
  trailingSlash: 'always',
  markdown: { syntaxHighlight: false },
  integrations: [sitemap({ filter: (page) => !page.includes('/og-default') })],
  vite: { plugins: [tailwindcss()], ssr: { noExternal: true } },
});
