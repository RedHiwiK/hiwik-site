import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://apps.hiwik.cn',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
