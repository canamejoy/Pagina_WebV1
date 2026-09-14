# Carlos Canamejoy — Personal Site

A dark-mode personal portfolio built with React + Vite, generated from
`prompt1.md` and the résumé data in `HDV_English.pdf`.

## Stack

- React 19 + Vite
- framer-motion (scroll reveals)
- lucide-react (icons)
- Plain CSS with design tokens (`src/index.css`, `src/App.css`)

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

Content (profile, skills, experience, education, certifications) lives in
`src/data/cv.js` — edit that file to update the site's copy.
