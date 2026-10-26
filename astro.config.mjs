// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// TODO: set `site` to your domain (e.g. 'https://manumackal.com').
// Because the site uses a custom domain, no `base` path is needed.
export default defineConfig({
  site: 'https://example.com',
  trailingSlash: 'ignore',
  integrations: [mdx()],
});
