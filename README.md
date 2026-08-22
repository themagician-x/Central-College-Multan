# Central-College-Multan

A website for **Central College Multan** — a not-for-profit institution offering
quality education from Intermediate to Masters and Law since 1992.

> **Student project.** Built as part of a BSIT final-year project, alongside the
> [eLibrary Management System](https://github.com/themagician-x/eLibrary-Management-Syestem-for-Central-College-Multan).
> It is not the college's official web presence, and the figures on it are
> illustrative.

Built with **Next.js 16** (App Router) and **Tailwind CSS v4**, deployed on **Vercel**.

## Pages

- **Home** — hero, live stats, programs, Law College, campus life
- **Programs** — Intermediate, Bachelors, Masters, and LL.B.
- **Campus** — college story, Central Law College, admission FAQs
- **Faculty** — leadership, teaching faculty, and support staff
- **Short Courses** — professional e-learn courses
- **Events** — campus life and the academic year
- **Contact** — location, phone, and enquiry form

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint
node scripts/responsive-check.mjs   # verify no horizontal overflow (dev server running)
```

## Design

Brand palette — navy `#06377b` + marigold `#faa61a`, drawn from the college logo.
Typography: Fraunces (display), Manrope (body), IBM Plex Mono (labels).
Fully responsive and verified across mobile, tablet, and desktop widths.

## Deploying

A standard Next.js deployment on Vercel. The site needs no secrets — the only
variable is `NEXT_PUBLIC_SITE_URL`, the public origin (e.g.
`https://centralcollege.aqeelahmed.dev`), and it is only needed once a custom
domain is in front of the deployment. Without it the app falls back to the URL
Vercel assigns, so `*.vercel.app` works untouched.

That one value feeds `metadataBase`, the canonical link, `robots.txt` and
`sitemap.xml`, so setting it is what makes shared links and search listings
point at the real domain rather than the deployment URL.
