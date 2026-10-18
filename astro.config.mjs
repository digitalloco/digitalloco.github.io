// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// URLs are fixed here because readers are encouraged to bookmark
// pages: every page is a directory with a trailing slash
// (/blog/2026/slug/). Never change a published URL.
export default defineConfig({
  site: 'https://digitalloco.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [sitemap()],
  // Code highlighting at build time. Each token carries both colours
  // through CSS light-dark(), so code follows the light/dark toggle.
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: 'light-dark()',
    },
  },
});
