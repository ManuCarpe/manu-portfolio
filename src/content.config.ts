import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each case study is one .mdx file in src/content/case-studies/.
// Frontmatter feeds the listing card and the case study side panel;
// the body (sections) becomes the case study page.
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/case-studies' }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      title: z.string(),
      summary: z.string(),
      cover: image(),
      coverAlt: z.string().default(''),
      // Case study page
      hero: image().optional(),
      heroAlt: z.string().default(''),
      client: z.string().optional(),
      year: z.string().optional(),
      tags: z.array(z.string()).default([]),
      about: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

export const collections = { 'case-studies': caseStudies };
