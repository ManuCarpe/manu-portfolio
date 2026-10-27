// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// Live at the custom domain (public/CNAME).
// Because the site uses a custom domain, no `base` path is needed.
export default defineConfig({
  site: 'https://manum.design',
  trailingSlash: 'ignore',
  integrations: [mdx()],
  // The listing and playground now live on the home page
  redirects: {
    '/case-study': '/#case-study',
    '/playground': '/#playground',
  },
});
