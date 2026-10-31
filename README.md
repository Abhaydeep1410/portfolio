# Abhay Deep — Portfolio

Personal portfolio of **Abhay Deep**, Java Backend Engineer (Spring Boot, Microservices, Kafka, AWS).
The site is built around a streaming-style layout: experience is shown as seasons, projects as cards, and the
Recruiter view puts experience, projects and skills first.

<!-- Add a screenshot after you run the site: ![Portfolio screenshot](docs/screenshot.png) -->

## Credit

The layout and front-end code are adapted from the **"Sushmita — The Series"** portfolio template by
**Sushmita Dasari**. I changed the theme (colors and fonts), rewrote all content, replaced the images,
simplified the navigation for recruiters and changed the default view. All personal content is my own.

This is a personal project with a fictional streaming-platform look. It is not affiliated with Netflix or any
other streaming service and uses none of their logos.

## Features

- Recruiter-first default view with the resume one click away
- Experience timeline, project overlays, skills with "where it's used" notes, achievements and certifications
- Resume viewer and PDF download
- Respects `prefers-reduced-motion`; touch-friendly on mobile
- Code-split overlays and responsive WebP portraits

## Tech stack

React 18 · TypeScript · Vite 6 · Tailwind CSS 4 · Framer Motion 11 · Lenis

## Run locally

Requires Node.js 18+.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # preview the build
```

## Customize

| To change | Edit |
| --- | --- |
| Name, intro, links, availability | `profile` in `src/data/portfolio.ts` |
| Experience, education | `experience`, `education`, `seasons` |
| Projects (add a `github` link to show the button) | `projects` |
| Skills, achievements, certifications | `skillCategories`, `achievements`, `certifications` |
| Colors | `@theme` block in `src/index.css` |
| Resume | replace `public/assets/Abhay_Deep_Resume.pdf` |
| Photo | put `pic1.jpeg` and a background-removed `pic.png` in the root, then `npm run images` |

## Project structure

```
src/
  data/portfolio.ts     all content in one place
  components/           sections, overlays and effects
  hooks/                smooth scroll, media queries, scroll progress
scripts/build-images.mjs  portrait and share-image generator (sharp)
public/assets/            resume, portraits, share image
```

## Deploy

Run `npm run build` and upload `dist/` to Vercel, Netlify or GitHub Pages.

## Contact

abhay14d@gmail.com · [LinkedIn](https://www.linkedin.com/in/abhay-deep-324a05242/) · [GitHub](https://github.com/Abhaydeep1410)
