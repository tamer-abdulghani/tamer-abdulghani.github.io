# tamer-abdulghani.github.io

Personal portfolio of **Tamer Abdulghani**, built with React + Vite + TypeScript and deployed automatically to GitHub Pages.

Live at: https://tamer-abdulghani.github.io

## Tech Stack

- ⚛️ **React 18** + **TypeScript**
- ⚡ **Vite** (fast dev + build)
- 🎨 CSS variables with light/dark theme
- 🚀 GitHub Actions → GitHub Pages

## Getting Started

```powershell
# install deps
npm install

# start dev server (http://localhost:5173)
npm run dev

# production build
npm run build

# preview production build
npm run preview
```

## Project Structure

```
src/
├── main.tsx              # Entry point
├── App.tsx               # Root component
├── index.css             # Global styles + CSS variables
├── contexts/
│   └── ThemeContext.tsx  # Light/dark theme provider
├── data/
│   └── portfolio.ts      # 👈 Edit your content here
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    ├── About.tsx
    ├── Skills.tsx
    ├── Projects.tsx
    ├── Experience.tsx
    ├── Contact.tsx
    └── Footer.tsx
```

## Editing Your Content

All personal content (bio, skills, projects, experience, links) lives in
[src/data/portfolio.ts](src/data/portfolio.ts). Edit that single file to update the site.

## Publishing to GitHub

1. Create a **new public repo** on GitHub named exactly `tamer-abdulghani.github.io`.
2. Push this project:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/tamer-abdulghani/tamer-abdulghani.github.io.git
   git push -u origin main
   ```
3. On GitHub → **Settings → Pages** → set **Source** to **GitHub Actions**.
4. The `Deploy to GitHub Pages` workflow will run on every push to `main`, and the site will be live at
   https://tamer-abdulghani.github.io within a minute or two.

## Custom Domain (optional)

If you want a custom domain (e.g. `tamerabdulghani.dev`):

1. Add a `public/CNAME` file containing just the domain, e.g.:
   ```
   tamerabdulghani.dev
   ```
2. Configure the DNS at your registrar (CNAME → `tamer-abdulghani.github.io`).
3. In GitHub → Settings → Pages, set the custom domain and enable HTTPS.

## License

MIT © Tamer Abdulghani
