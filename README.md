# Manu Mackal — Portfolio

Built with [Astro](https://astro.build). Deploys to GitHub Pages automatically on every push to `main`.

## Run it on your Mac

```bash
npm install      # first time, and whenever package.json changes
npm run dev      # open http://localhost:4321 — updates as you edit
```

## Where to edit things

| What | File |
| --- | --- |
| Name, role, years, email, menu links | `src/data/site.ts` |
| Home page | `src/pages/index.astro` (photo: `src/assets/manu-hero.png`) |
| Playground images | `src/assets/playground/pNN.png` |
| Playground layout (grid columns, freeflow positions) | `src/data/playground.ts` |
| Case studies (one file each) | `src/content/case-studies/*.mdx` — see `drip.mdx` for the building blocks |
| Case study images | `src/assets/case-studies/` |
| Colours, fonts, spacing | `src/styles/global.css` |

### Add a case study

Copy `src/content/case-studies/reframing.mdx`, rename it (the file name becomes the URL,
e.g. `fleet-map.mdx` → `/case-study/fleet-map/`), fill in the frontmatter at the top
(title, summary, cover, client, year, tags, about) and write the sections below it.
Every `Section` with a title shows up in the page's side menu. Set `draft: true` to hide it.

The previous version of the site is kept in `_archive/v1/` for reference. It isn't built or published.

## Go live on your domain

1. Push this folder to a GitHub repo.
2. Repo **Settings → Pages → Source: GitHub Actions**.
3. Put your domain in `public/CNAME` and in `site` in `astro.config.mjs`.
4. Repo **Settings → Pages → Custom domain**: enter the same domain, tick **Enforce HTTPS**.
