import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://playdoyouknow.com',
  integrations: [sitemap({ filter: (page) => !page.includes('/imprint') })],
});
