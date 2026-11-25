# Agil Ahmad Maulana — Portfolio

A bilingual, single-page portfolio migrated from Next.js to Astro. The page, layout, content sections, photos, résumé, skill logos, typography, and visual theme are built with Astro components and Tailwind CSS; client-side behavior uses a small browser script rather than React.

## Commands

Run these from the project root:

```sh
npm install
npm run dev
npm run check
npm test
npm run build
npm run preview
```

`npm test` builds the static site and checks its rendered page, copied assets, and optimized portrait images. Production files are written to `dist/`.

## Project structure

- `src/pages/index.astro` — portfolio route and section order.
- `src/components/` — Astro components for the navigation, hero, about, skills, experience, projects, contact, and footer.
- `src/lib/i18n.ts` — English and Indonesian copy. The language choice persists in the `lang` cookie.
- `src/lib/data.ts` — navigation, skill groups, project metadata, and contact links.
- `src/scripts/portfolio.ts` — language/theme controls, mobile menu, smooth scrolling, and reveal animations.
- `src/assets/photos/` — source portraits, resized and compressed during the Astro build.
- `public/` — résumé, favicon, skill logos, locally hosted font files, and static-host headers.

The `public/_headers` file preserves the security-header values from the Next.js configuration for static hosts that support this file format. On other hosts, configure the same response headers in the hosting platform.
