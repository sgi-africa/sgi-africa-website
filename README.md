# Software Group Innovation (SGI) - Website

Production-ready, dark-themed marketing site for **Software Group Innovation** -
"Technology Solutions for Impact-Driven Organizations".

Built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, **shadcn/ui** (radix-nova
preset) and **Framer Motion**.

## Project structure

```
app/
  layout.tsx              Root layout, Inter font, Navbar + Footer, dark theme
  globals.css             Tailwind v4 + SGI brand tokens (dark)
  page.tsx                Home
  about/page.tsx
  services/page.tsx
  impact/page.tsx
  contact/
    page.tsx              Contact page shell
    contact-form.tsx      Client form with useActionState
    actions.ts            Server action — simulated submission
components/
  ui/                     shadcn primitives (button, card, input, sheet, …)
  site/
    logo.tsx              SVG monogram + wordmark
    navbar.tsx            Sticky nav with mobile Sheet drawer
    footer.tsx            Brand, sitemap, contact, social
    section.tsx           Vertical-rhythm section wrapper
    section-heading.tsx   Eyebrow + title + description pattern
    gradient-blob.tsx     Decorative radial gradient
    fade-in.tsx           Framer Motion fade-up wrapper + Stagger
    feature-card.tsx
    audience-card.tsx
    pillar-card.tsx
    stat-card.tsx
    team-card.tsx
    service-block.tsx
    cta-banner.tsx
    nav-config.ts         Nav links + global site config (email, location)
lib/
  utils.ts                cn() — clsx + tailwind-merge
```

---

## Brand system

Defined as CSS custom properties in `app/globals.css` under `.dark` (the site
forces dark mode at the `<html>` level):

- **Primary** Deep Blue · `#0A2540`
- **Secondary** Green · `#16A34A`
- **Accent** Cyan · `#00D4FF`
- **Background** · `#0F172A`
- **Card** · `#111827`
- **Text Primary** · `#FFFFFF`
- **Text Secondary** · `#94A3B8`

Custom utilities:

- `.bg-brand-gradient -` blue → cyan diagonal gradient (CTAs, hero accents)
- `.text-brand-gradient` - same gradient as text fill
- `.bg-brand-radial` - soft hero halo
- `.bg-grid-faint`- tech-aesthetic grid overlay

---

## Getting started

```bash
npm install
npm run dev          # http://localhost:3000
```

Available scripts:

```bash
npm run dev          # Dev server (Turbopack)
npm run build        # Production build
npm run start        # Run production build
npm run lint         # ESLint
```

## Configuration

Update SEO metadata in `app/layout.tsx` (and per-page `metadata` exports).

---

## Tech stack

- **Next.js** 16.2 - App Router, React Server Components, Server Actions
- **React** 19
- **Tailwind CSS** v4
- **shadcn/ui** (radix-nova preset)
- **lucide-react** + inline SVG glyphs for brand icons
- **motion** (Framer Motion v12) - `whileInView` fade-ups
- **TypeScript** strict mode

---

## Accessibility & UX

- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Skip-friendly sticky nav with proper focus rings
- Forms: native `<label>` + `aria-invalid` + `role="alert"` for errors
- Mobile-first; nav collapses into a Sheet drawer at `< md`
- Animations are subtle, run once, and respect element-in-view triggers

