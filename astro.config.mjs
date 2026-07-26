// astro.config.mjs
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://armandodev.site',
  integrations: [
    tailwind(),
    mdx(),
    icon({ include: { mdi: ['*'] } }),
    sitemap(),
  ],
});
