# Copilot instructions

## Project overview

Personal portfolio website of Tamer Abdulghani, published at <https://tamer-abdulghani.github.io>.
It is a single-page React application built with Vite and TypeScript and deployed to GitHub Pages.

## Tech stack

- React 18, TypeScript (strict mode), Vite 5.
- Plain CSS with custom properties in `src/index.css`. No CSS framework, UI kit or animation library.
- Runtime dependencies are limited to `react` and `react-dom`; avoid adding new ones without a clear need.
- Deployment: `.github/workflows/deploy.yml` runs on every push to `main` (Node 20, `npm ci`,
  `npm run build`) and publishes `dist/` to GitHub Pages. The Vite `base` is `/` (user site).

## Commands

- `npm install` installs dependencies.
- `npm run dev` starts the dev server on <http://localhost:5173>.
- `npm run build` type-checks (`tsc -b`) and builds; it must pass before a change is complete.
- `npm run preview` serves the production build locally.

## Structure

- `src/main.tsx`: entry point; wraps `App` in `ThemeProvider`.
- `src/App.tsx`: page composition in order: Header, Hero, About, Experience, Highlights, Skills,
  Education, Contact, Footer.
- `src/data/portfolio.ts`: all site content and its TypeScript interfaces.
- `src/components/`: one component per section, plus `SectionTitle`, `ConnectedNetwork` and `icons`.
- `src/contexts/ThemeContext.tsx`: light/dark theme, persisted in `localStorage`
  (`tamer-portfolio-theme`), defaulting to `prefers-color-scheme`, applied as `data-theme` on `<html>`.
- `src/index.css`: design tokens and shared classes.
- `public/`: static assets served from the site root.

## Content

- All text lives in `src/data/portfolio.ts`. Components are presentational and read from it;
  do not hard-code content inside components.
- When adding fields, extend the exported interfaces so the data stays typed.
- Tone: concise, factual and professional. No marketing superlatives, slogans or emojis.
- Never use the em dash (—, U+2014) in any text: site content, documentation or code comments.
  Use a comma, colon, parentheses or a separate sentence instead.
- This is a public repository: include only information suitable for public sharing and never add
  confidential or internal organizational details.

## Design principles

The site follows a calm, elegant, academic ("professorial") aesthetic, in the spirit of a scholar's
personal homepage: content first, quiet visuals, generous whitespace and a restrained palette.

- **Palette**: warm ivory background (`--color-bg: #faf7f1`), deep navy primary
  (`--color-primary: #1e3a5f`) and muted gold accent (`--color-accent: #a68b4c`), with matching
  values under `:root[data-theme='dark']`. Always use the CSS variables rather than literal colors so
  that both themes stay consistent, and check every change in light and dark mode.
- **Typography**: Playfair Display (serif) for headings and the name, with italics for emphasis;
  Inter for body text; JetBrains Mono for dates, periods, indexes and small metadata. Fonts are
  loaded from Google Fonts in `index.html`.
- **Section headers** use `SectionTitle`: a centered thin-line icon in a circle, a small uppercase
  tracked eyebrow in gold, a serif title with a short gold underline, and an italic subtitle.
- **Rhythm**: sections alternate between `--color-bg` and `--color-bg-subtle`; content is centered
  within `--max-width` (1100px).
- **Ornament** is minimal and typographic: hairline dividers, the ❖ glyph, gold-ringed timeline
  nodes and thin borders.
- **Icons** are thin-line SVGs in `src/components/icons.tsx` (24×24 viewBox, 1.5 stroke, round caps,
  `aria-hidden`). New icons should follow the same style.
- **Motion** is subtle and purposeful: hover lifts of a few pixels and color or border transitions of
  about 220 ms (`--transition`). The only ambient animation is the `ConnectedNetwork` canvas behind
  the hero, which ignores pointer events and respects `prefers-reduced-motion`. Avoid
  attention-seeking effects such as dark or gradient-heavy hero banners, glows, parallax, scroll
  hijacking, typing effects, animated counters or auto-playing carousels.
- **Responsive**: grids collapse to one column at 768px; the header switches to the mobile menu
  at 820px.

## Code conventions

- Function components with default exports; named exports for icons and data.
- TypeScript strict mode with `noUnusedLocals` and `noUnusedParameters`.
- Shared patterns live in `src/index.css` as classes (`.container`, `.section-title`, `.eyebrow`,
  `.btn`, `.btn-primary`, `.btn-outline`, `.card`, `.tag`, `.grid-cols-2`, `.grid-cols-3`,
  `.timeline`, `.timeline-item`). Component-specific styling uses inline style objects that reference
  the CSS variables; follow the pattern of the file being edited.
- A new section is a component in `src/components/`, registered in `App.tsx`; if it should appear
  in the navigation, add its `id` to the `NAV` array in `Header.tsx`. Keep section ids and
  navigation links in sync.
- External links use `target="_blank"` with `rel="noreferrer"`.
- Accessibility: `aria-label` on icon-only links and buttons, `aria-hidden` on decorative icons and
  ornaments, semantic elements (`header`, `nav`, `main`, `section`, `article`, `footer`), and
  `prefers-reduced-motion` honored for any animation.
