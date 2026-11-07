import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://playdoyouknow.com',
  integrations: [sitemap({ filter: (page) => !page.includes('/imprint') })],
  // The imprint lives centrally on sitstudio.de; old /imprint links forward there.
  redirects: { '/imprint': 'https://www.sitstudio.de/impressum/' },
});
