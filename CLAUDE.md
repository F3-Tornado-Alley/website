# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js-based multi-page website for the F3 Tornado Alley fitness community. The site includes a home page, getting started guide, location pages with interactive maps, and resources. It's SEO-optimized, built with TypeScript and Tailwind CSS v4, and deployed to Cloudflare Pages via automated GitHub Actions.

## Common Commands

### Development
```bash
pnpm install         # Install dependencies
pnpm dev             # Start dev server at http://localhost:3000
pnpm build           # Build static site to out/ directory
pnpm lint            # Run ESLint
pnpm test:e2e        # Run Playwright e2e tests
```

### Deployment
- **Automatic**: Push to `main` branch triggers GitHub Actions deployment
- **Manual via Wrangler**: `wrangler pages deploy out --project-name=tornado-alley`

## Site Structure

### Pages
- **Home** (`app/page.tsx`) - Hero image, mission statement, 5 core principles, social media links
- **Getting Started** (`app/getting-started/page.tsx`) - Guide for newcomers
- **Locations** (`app/locations/page.tsx`) - Interactive map showing all workout locations
  - **City pages** (`app/locations/[city]/page.tsx`) - Edmond
- **Resources** (`app/resources/page.tsx`) - Links to F3 Nation resources

### Components
- **Navigation** (`app/components/Navigation.tsx`) - Sticky nav with active page highlighting
  - Desktop: White bottom border on active items
  - Mobile: White left border on active items
  - Uses `usePathname()` hook to detect active page

## Architecture & Configuration

### Static Site Export
This project uses Next.js with static export (`output: "export"`) configured in `next.config.ts`. Key implications:
- Site is pre-rendered to static HTML at build time
- Images use `unoptimized: true` for static hosting compatibility
- Output goes to `out/` directory
- All pages have `trailingSlash: true` for consistent routing

### Cloudflare Integration

**GitHub Actions Workflow** (`.github/workflows/deploy.yml`):
- Triggers on push/PR to `main` branch
- Uses Node.js 20 (required for Next.js 16)
- Deploys to Cloudflare Pages project named `tornado-alley`
- Requires secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`
- Branch protection requires admin privileges to merge

**R2 Asset Storage**:
- Bucket: `tornadoalley-website-assets`
- Public URL: `https://pub-c59a7d8d850842288d7852af88d4ee66.r2.dev`
- Used for large images (hero, location photos) to avoid storing in Git
- Accessible via Wrangler CLI: `npx wrangler r2 bucket list`
- Upload: `npx wrangler r2 object put tornadoalley-website-assets/images/[filename] --file [local-path]`

### SEO Implementation

**Metadata** (`app/layout.tsx:22-72`):
- Comprehensive meta tags for title, description, keywords
- Open Graph tags for social sharing (Facebook, LinkedIn)
- Twitter Card metadata with `@f3tornadoalley` handle
- robots.txt configuration for search engine crawling
- Favicon and Apple touch icon support

**Structured Data** (`app/page.tsx:4-17`):
- JSON-LD schema for Organization
- Includes social media links (sameAs property)

**Social Media Links** (`app/page.tsx:50-131`):
- Facebook: https://www.facebook.com/f3tornadoalley
- Instagram: https://www.instagram.com/f3tornadoalley/
- X/Twitter: https://x.com/f3tornadoalley
- TikTok: https://www.tiktok.com/@f3tornadoalley

## UI/UX Design Patterns

### Navigation
- **Active State**: Pages no longer have h1 headings; navigation bar shows active page instead
- **Mobile Responsive**: Hamburger menu for small screens
- **Sticky Header**: Navigation remains visible when scrolling

### Typography
- **Headings**: Use Titillium Web font via `font-(family-name:--font-titillium-web)` class
- **Body**: Geist Sans (default)
- **Code**: Geist Mono

### Layout
- **Page Container**: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6` (or `max-w-4xl` for narrower content)
- **No Page Headings**: Content pages don't repeat the page name as h1 since navigation shows current page
- **Responsive Grid**: Uses Tailwind's responsive grid system

## Key Files

- `app/layout.tsx` - Root layout with SEO metadata and fonts (Geist Sans/Mono, Titillium Web)
- `app/page.tsx` - Home page with hero image and 5 core principles
- `app/components/Navigation.tsx` - Navigation with active state detection
- `app/locations/page.tsx` - Interactive map and region cards
- `app/locations/[city]/page.tsx` - City-specific workout schedules
- `app/getting-started/page.tsx` - New member guide
- `app/resources/page.tsx` - F3 resource links
- `app/globals.css` - Global Tailwind CSS imports
- `next.config.ts` - Next.js configuration for static export
- `.github/workflows/deploy.yml` - Automated Cloudflare Pages deployment

## Image Handling

### Large Images (R2)
Large images should be hosted on Cloudflare R2 rather than committed to the repository:
1. Upload to R2: `npx wrangler r2 object put tornadoalley-website-assets/images/[filename] --file [local-path]`
2. Reference via public URL: `https://pub-c59a7d8d850842288d7852af88d4ee66.r2.dev/images/[filename]`
3. Use Next.js `<Image>` component with `fill` prop for responsive sizing

### Small Icons/Assets (Public Directory)
Small files like icons, favicons, and SVGs can be stored in `public/`:
- `public/images/principles/` - F3 core principle icons
- `public/favicon.ico`, `public/apple-touch-icon.png` - Site icons

## Location Data Structure

Each region has:
- **Name**: Region name (e.g., "Tornado Alley")
- **Description**: Brief description of coverage area
- **Stats URL**: Link to pax-vault.f3nation.com stats
- **Region Info URL**: Link to regions.f3nation.com (if available)
- **Cities**: Array of city objects with name and path

Cities are listed alphabetically within each region.

## Styling Guidelines

- Use Tailwind CSS utility classes
- Maintain responsive design with `sm:`, `md:`, `lg:` breakpoints
- Use `font-(family-name:--font-titillium-web)` for headings
- Consistent spacing: `p-4`, `mb-4`, `gap-4` for smaller elements; `p-6`, `mb-6`, `gap-6` for larger
- Color palette: Gray scale for text, blue (`blue-600`) for primary actions, black nav bar

## Package Manager

This project uses **pnpm** (pinned via the `packageManager` field in `package.json`). The lockfile is `pnpm-lock.yaml`. CI installs with `pnpm install --frozen-lockfile`. Use `pnpm` rather than `npm`/`yarn`.

## Node.js Version

Requires Node.js 20.9.0+ (Next.js 16 requirement). GitHub Actions uses Node 20.

## Dependencies

- **next**: ^16.2.7
- **react**: ^19.2.7
- **react-dom**: ^19.2.7
- **tailwindcss**: ^4
- **typescript**: ^5
