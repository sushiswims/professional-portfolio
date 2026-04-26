# Ryan Brander — Portfolio

A personal portfolio website built with **React + Vite**, showcasing events, public relations, social media, and creative direction work.

## Tech Stack

- **React 18** — UI library
- **Vite** — build tool & dev server
- **React Router v6** — client-side routing (SPA)
- **Framer Motion** — page transitions & scroll animations
- **CSS Modules** — scoped, component-level styling

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / Navbar.module.css
│   └── Footer.jsx / Footer.module.css
├── pages/
│   ├── Home.jsx / Home.module.css
│   ├── About.jsx / About.module.css
│   ├── Projects.jsx / Projects.module.css
│   └── Contact.jsx / Contact.module.css
├── App.jsx          ← Router + AnimatePresence page transitions
├── main.jsx
└── index.css        ← Global design tokens & base styles
public/
└── images/          ← Project photos & assets
```

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero intro, stats highlight bar, brief bio |
| `/about` | About | Full bio, skills grid, animated marquee |
| `/projects` | Projects | 4 expandable case studies with photo galleries |
| `/contact` | Contact | Validated contact form + social/email links |

## Features

- React Router SPA navigation with smooth Framer Motion page transitions
- Framer Motion staggered hero animations and scroll-triggered reveals
- Contact form with real-time inline validation and success state
- Fully responsive — mobile, tablet, and desktop layouts
- CSS Modules — zero class name collisions
- Persistent Navbar (active link highlighting) and Footer

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

### Netlify
1. Push repo to GitHub
2. Connect repo in Netlify → Build command: `npm run build` → Publish dir: `dist`
3. Add a `public/_redirects` file with: `/* /index.html 200`

### Vercel
1. Push repo to GitHub
2. Import in Vercel dashboard — auto-detects Vite, no config needed

### GitHub Pages
1. Install: `npm install --save-dev gh-pages`
2. Add to `package.json`: `"homepage": "https://yourusername.github.io/ryan-portfolio"`
3. Add scripts: `"predeploy": "npm run build"` and `"deploy": "gh-pages -d dist"`
4. In `vite.config.js` set `base: '/ryan-portfolio/'`
5. Run: `npm run deploy`

## Design

- **Palette**: Cream, sage, terra cotta, ink — warm editorial aesthetic
- **Typography**: Playfair Display (display) + DM Sans (body) + DM Mono (labels)
- **Motion**: Framer Motion page transitions, scroll reveals, staggered entrances
