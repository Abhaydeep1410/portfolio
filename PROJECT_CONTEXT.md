# PROJECT_CONTEXT.md

Read this first. It summarizes the project so you don't have to re-read every file.
Last updated: 31 Oct 2026. Update the "Progress" and "Pending" sections whenever work changes.

## 1. What this is

Personal portfolio for **Abhay Deep** (Java Backend Engineer, 2+ years, Accenture, Pune). The target audience is recruiters
and technical interviewers. It is a React site with a streaming-platform look (experience as "seasons", projects as cards).

**Origin / credit:** adapted from the "Sushmita — The Series" template by Sushmita Dasari. The repo had no license file.
The user agreed to get her permission before sharing widely. The README credits her. **Never remove the credit.**
Never leave her name, photo, resume or personal data in the site (the credit line in the README and in a comment at the top of
`src/data/portfolio.ts` is the only place her name should appear).

## 2. Stack and commands

React 18.3, TypeScript 5.8, Vite 6, Tailwind CSS 4 (`@tailwindcss/vite`), Framer Motion 11, Lenis (smooth scroll), sharp (image script).

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # tsc -b && vite build -> dist/   (must pass; noUnusedLocals/Parameters are ON)
npm run images    # scripts/build-images.mjs: reads pic1.jpeg + pic.png (root) -> public/assets/portrait-{420,720,1100}.webp + og-image.jpg
```

## 3. File structure

```
index.html                 title, meta, OG tags, Google Fonts link (Space Grotesk, Fraunces, Inter)
package.json, vite.config.ts, tsconfig*.json, .gitignore (node_modules, dist, .DS_Store, *.local, /.claude)
pic1.jpeg, pic.png         source photo + background-removed cutout (same framing); input for `npm run images`
scripts/build-images.mjs   portrait + share-image generator (text and colors already rebranded to Abhay / teal)
public/favicon.svg
public/assets/             Abhay_Deep_Resume.pdf, og-image.jpg, portrait-420/720/1100.webp
src/
  main.tsx, index.css      entry; theme tokens (@theme), grain, glass, shimmer, light-streak
  App.tsx                  stages + section order + overlays
  data/portfolio.ts        SINGLE SOURCE OF TRUTH for all content
  hooks/                   smoothScroll.tsx (Lenis + lock/unlock), useMedia.ts (useDesktop >=1024px etc), sectionProgress.ts
  components/
    Hero, Navbar, About, Seasons (+EpisodeCard), Originals (+ProjectCard, Rail), TopPicks, Skills,
    Achievements, ResumeViewer (section), ResumeModal, ProjectModal, PlayIntro, ContinueWatching ("Continue Exploring"),
    FinalCTA, OpeningSequence, ProfileSelector (now unused by App), Scene, Poster, CustomCursor, fx.tsx (Magnetic, RevealText, Particles, EASE...)
```

## 4. Content model (`src/data/portfolio.ts`)

Exports: `profile` (fullName, displayName, firstName, seriesTag, originalLabel, role, tagline, intro, location, **availability**, email,
links{linkedin, github}, resumePdf, portrait, interests), `education`, `experience`, `projects` (Project: id, title, year, genre, logline, stack,
build, features, metrics, optional `github`, palette, motif 'shield'|'flow'|'tenants'), `achievements`, `certifications` (links point to two Google Drive
folders), `skillCategories` (+ `skillEvidence` keyed by skill name), `seasons` (Season/Episode), `topPicks` (10), `introSlides`, `viewerProfiles`
(ids: 'abhay' | 'recruiter' | 'developer' | 'creative', each with a section `order`), `sectionMeta` (nav/card labels per SectionId).

SectionIds: about, journey, originals, picks, skills, moments, story. Labels were renamed to plain words:
journey=Experience, originals=Projects, picks=Highlights, moments=Achievements, story=Resume.

**Facts source:** the user's resume (Abhay_Resume.pdf). Do not invent facts, metrics or dates. Known unknown: project years (set to 2025 as
an assumption; resume gives none).

Real links from the resume: LinkedIn `abhay-deep-324a05242`, GitHub `Abhaydeep1410`, LeetCode `AD_Abhay`, GFG `abhay1xwna`, email `abhay14d@gmail.com`.

## 5. Design / theme

Changed from the template's black + crimson to **deep navy + teal**.
Tokens in `src/index.css` `@theme`: ink `#060b16`, ink-2 `#0b1322`, ink-3 `#121c30`, crimson `#0d9488` (teal, kept the token name), crimson-2 `#2dd4bf`,
bone `#eef4f7`, mist `#a7a6ad`, smoke `#6d6c75`. (The token names "crimson" are historical; they are teal now.)
Fonts: display Space Grotesk, serif Fraunces, sans Inter. Some component files contain hard-coded rgba/hex colors that were replaced by search/replace.
Extra accent colors in project palettes remain (amber, ocean, violet, jade).

## 6. Behavior changes vs the template (recruiter-focused)

- App opens straight to the home page (`Stage` = 'opening' | 'home'); no opening animation, no "Who's watching?" screen. Footer "Replay" still plays the opening.
- Default profile is `recruiter` (session-stored under key `abhay-series-profile`); recruiter order: about, journey, originals, skills, moments, story, picks.
- Hero: primary button "View Resume", then "My Projects", then smaller "Play Intro"; availability line "Open to Java backend roles · Pune / remote" (`profile.availability`).
- FinalCTA headline is "LET'S TALK."
- `Hero` still accepts an optional `profileId` prop (unused) to satisfy callers.

## 7. Progress (done)

- [x] Theme recolored, fonts swapped, all Sushmita data replaced with Abhay's resume content
- [x] Her photos, resume PDF and nested zip removed; user's photo added (background removed with rembg `u2net_human_seg`), portraits + OG image generated
- [x] Section labels renamed, recruiter-first defaults applied, README rewritten with credit
- [x] `npm run build` passes
- [x] Git: repo created at github.com/Abhaydeep1410/portfolio, 5 logical commits (real dates, not backdated), pushed to `main`
- [x] User advised on deployment (Vercel recommended: build `npm run build`, output `dist`)

- [x] Mobile fixes (31 Oct 2026), tested with Playwright at 390px: `html{font-size:87.5%}` under 640px (scales all rem text/cards), smaller section headings,
      hero name and project titles; narrower project/episode/continue cards; smaller achievement/top-pick/skills cards;
      resume sheet is always 2 columns (compact type) with no collapse teaser; resume modal scroll fixed (`h-[100dvh]`, `min-h-0` on flex child,
      `overscroll-contain`, `touch-action: pan-y`). Decision: do NOT force the desktop view on phones.
- [x] Removed leftover template text: hero chips/badge (now "2+ years experience", "Java · Spring Boot", "BACKEND"), About facts, Projects heading/description
      (heading is now "PROJECTS"), S01-S0N badge uses seasons.length, ContinueWatching glyph.

## 8. Pending / ideas

- [ ] Mobile polish round 2 (optional): lighter effects on phones (grain, streaks, particles), navbar size. Verify on a real phone.
- [ ] Add `github` links for MediShop and SpecIt in `projects` (user must give URLs); optionally architecture diagrams / READMEs for them
- [ ] Deploy (Vercel) and add the live URL to README, GitHub repo "Website" field, LinkedIn, resume
- [ ] Add `docs/screenshot.png` and uncomment the screenshot line in README
- [ ] Certificates all link to two Drive folders; individual links would be better
- [ ] Get Sushmita's permission / a license; mention it in the README if given
- [ ] Optional: simplify "Continue Exploring" row; remove unused `ProfileSelector.tsx`; teal glow behind portrait (dark suit on dark background)

## 9. Rules and decisions to keep

- No fake or backdated git commits (user asked; declined). Commit with real dates; explain tradeoffs honestly.
- Keep the credit to the template author. Keep facts limited to the resume.
- After code changes run `npm run build` (strict TS: unused vars/params fail the build).
- Edit content only in `src/data/portfolio.ts`; theme only in `src/index.css`.
- Windows user (paths like `C:\Users\abhay\Downloads\abhay-portfolio\Abhay_portfolio`). Local git author email: `abhay9456234282@gmail.com`
  (differs from resume email `abhay14d@gmail.com`; must be added to GitHub account emails for the contribution graph).
- Output files go to `/mnt/user-data/outputs/abhay-portfolio.zip` (zip excludes node_modules and dist); the working copy was `/home/claude/Portfolio_series-main`.
