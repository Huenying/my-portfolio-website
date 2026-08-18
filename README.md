# Cynthia — Personal Portfolio

Cynthia's personal portfolio website, built with [Next.js](https://nextjs.org) (App Router), [Tailwind CSS](https://tailwindcss.com), and [Framer Motion](https://www.framer.com/motion/). Statically exported and deployed to **GitHub Pages**.

**Live site:** https://huenying.github.io/my-portfolio-website/

## Features

- **Hero** — Typewriter name animation, three category cards that spread apart as you scroll, a "Resume" download button, and a scroll indicator.
- **About Me** — A CSS computer-screen frame with a macOS-style "login to unlock" screen. Logging in reveals (via a simple fade transition):
  - A photo space (add your photo — see below),
  - A 自述 (self-introduction) card with an amber pin,
  - Areas of Interest cards (icon + name),
  - A horizontal **experience timeline** with a CSS line and nodes.
- **My Projects** — A "reader machine" interaction: drag a project card into the machine (or click it) to open a paper-style window with the full project story (role, duration, highlights, outcome, skills). Projects are filterable by category tabs.
- **Contact** — Note-style cards for Email, Location, LinkedIn, and GitHub.
- **Navbar** — Sticky nav that shows the active section, with a **Resume** download button that appears once you scroll.

## Tech Stack

- Next.js 16 (App Router, static export via `output: "export"`)
- React 19
- Tailwind CSS v4 (theme tokens in `app/globals.css`)
- Framer Motion 12
- Native HTML5 Drag & Drop for the reader machine

## Getting Started

Run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

Other scripts:

```bash
npm run build   # static export to ./out
npm run lint    # eslint
```

## Project Structure

```
app/page.tsx            # Page layout (Navbar → Hero → About → Portfolio → Contact)
components/
  Navbar.tsx            # Sticky nav + Resume download button
  Hero.tsx              # Hero with typewriter + scroll cards
  About.tsx             # Login-to-unlock screen + 自述 + interests + timeline
  Portfolio.tsx         # Reader machine + category tabs + project cards
  ReaderMachine.tsx     # CY-3000 drag-and-drop reader device
  ProjectCard.tsx       # Draggable project card
  ProjectModal.tsx      # Paper-style project popup window
  projects.ts           # Project data + categories
  Contact.tsx           # Contact info cards
```

## Deployment

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds the site and publishes `./out` to the `gh-pages` branch on every push to `main` (or via manual dispatch). The production `basePath` is `/my-portfolio-website`, matching the GitHub Pages project URL.

## To-do / Placeholders

- **Resume PDF** — the Resume buttons download `public/resume.pdf`. Drop your PDF in `public/` when ready.
- **Profile photo** — the About section reserves a photo space; add your photo via an `<Image>` in `components/About.tsx` (a commented placeholder marks the spot).
- **Experience details** — the entries in `components/About.tsx` (roles/years) are placeholders to refine.
