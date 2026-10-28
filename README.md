# Manu Mackal — Portfolio

Live at **https://manum.design**. Built with [Astro](https://astro.build); GSAP + Lenis for the
scroll animation. Every push to `main` rebuilds and publishes the site through GitHub Actions
(about a minute — watch the repo's **Actions** tab).

## Run it on your Mac

```bash
npm install      # first time, and whenever package.json changes
npm run dev      # open http://localhost:4321 — updates as you edit
```

Publish: commit and push in GitHub Desktop.

## How the site is put together

- **Home (`/`)** is one continuous scroll: portrait → case study cards → playground → Connect.
  The menu jumps between these stages (`/#case-study`, `/#playground`, `/#connect`).
  The old `/case-study/` and `/playground/` addresses redirect there.
- **Case study pages** live at `/case-study/<file-name>/`.
- Fonts: Barlow + Barlow Condensed (headings, menu), self-hosted in `public/fonts`.
  Boldonse is only used for Drip's brand lettering.

## Where to edit things

| What | File |
| --- | --- |
| Name, role, years, email, LinkedIn, location, menu | `src/data/site.ts` |
| Home page layout and the Connect sheet | `src/pages/index.astro` (portrait: `src/assets/home/manu.png`) |
| Home scroll animation (timing, pacing) | `src/scripts/home.ts` — `INTRO`, `PLAY`, `SPREAD_SECONDS` |
| Playground images | `src/assets/playground-v3/qNN.png` |
| Playground layout (three repeating columns) | `src/data/playground.ts` |
| Case studies (one file each) | `src/content/case-studies/*.mdx` |
| Case study images | `src/assets/case-studies/` (Drip's in `drip/v4/`) |
| Case study building blocks | `src/components/case-study/` |
| Colours, fonts | `src/styles/global.css` |
| Logo (header + favicon) | `src/components/Logo.astro`, `public/favicon.svg` |

### Writing a case study

Each `.mdx` file starts with frontmatter — title, summary (shown on the home card), cover,
hero, client, year, tags, about — which fills the card on the home page and the project
details panel. Below it, the page is built from blocks (`drip.mdx` uses all of them and lists
them in a comment at the top):

- `<Section title="…">` — a chapter: heading left, text right. Listed in the Index
  (`index={false}` leaves it out).
- `<Lead>` — the black takeaway line.
- `slot="after"` on a block puts it full width under the chapter heading.
- `<Split slot="after">` — two columns: `<div slot="visuals">` cards on the left, `<Topic>`s right.
- `<Topic title="…">` — a titled paragraph; wrap the closing line in `**bold**` to set it in black.
- `<Visual src caption />` — a lavender image card. `<InviteCard />` and `<OptionsCarousel />` are
  the animated Drip ones.
- `<Gallery rows={[[a], [b, c]]} />`, `<Wide src />` — images between chapters.
- `<Quote src>…</Quote>`, `<Feature src note title />`, `<Statement>` — banners and the closing line.

To add a case study, copy `reframing.mdx`, rename it (the file name becomes the URL), fill in the
frontmatter and write the sections. `draft: true` hides it.

Older versions of the site and retired components are kept in `_archive/` for reference.
They aren't built or published.
