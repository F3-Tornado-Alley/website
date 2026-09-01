# Tornado Alley - F3 Website

A modern, SEO-optimized website for the Tornado Alley F3 fitness community, built with Next.js and deployed on Cloudflare Pages.

## Features

- **Multi-page site** with Getting Started, Locations, and Resources pages
- **Location-specific pages** for the Tornado Alley region (Edmond)
- **Interactive map integration** showing F3 workout locations
- **SEO optimized** with comprehensive meta tags and structured data
- **Responsive design** with Tailwind CSS v4
- **Social media integration** (Facebook, Instagram, X, TikTok)
- **Active navigation highlighting** to show current page
- **Static export** for optimal performance on Cloudflare Pages
- **Open Graph and Twitter Card** support

## Prerequisites

- Node.js 20.9.0 or higher (required for Next.js 16)
- [pnpm](https://pnpm.io/) package manager (the version is pinned via the `packageManager` field in `package.json`; run `corepack enable` to use it automatically)

## Getting Started

### Development

1. Install dependencies:

```bash
pnpm install
```

2. Run the development server:

```bash
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) to view the site.

### Building for Production

Build the static site:

```bash
pnpm build
```

This creates an optimized production build in the `out/` directory.

## Site Structure

### Pages

- **Home** (`/`) - Landing page with hero image, F3 mission statement, 5 core principles, and social media links
- **Getting Started** (`/getting-started`) - Guide for newcomers with expectations and steps to join
- **Locations** (`/locations`) - Interactive map and region information
  - **Edmond** (`/locations/edmond`) - Tornado Alley region workouts
- **Resources** (`/resources`) - Links to F3 Nation, Lexicon, Exicon, and Q Source

### Navigation

The site features a sticky navigation bar with:
- Active page highlighting (bottom border on desktop, left border on mobile)
- Mobile-responsive hamburger menu
- Smooth transitions and hover effects

## Deployment to Cloudflare Pages

### Automated Deployment (GitHub Actions)

This repository includes a GitHub Actions workflow that automatically deploys to Cloudflare Pages on every push to the `main` branch.

#### Setup Required Secrets

To enable automated deployments, add the following secrets to your GitHub repository:

1. Go to your repository Settings > Secrets and variables > Actions
2. Add the following secrets:
   - **CLOUDFLARE_API_TOKEN**: Your Cloudflare API token
     - Create at: Cloudflare Dashboard > My Profile > API Tokens
     - Use the "Edit Cloudflare Pages" template or create a custom token with "Cloudflare Pages:Edit" permissions
   - **CLOUDFLARE_ACCOUNT_ID**: Your Cloudflare Account ID
     - Found at: Cloudflare Dashboard > Workers & Pages > Overview (right sidebar)

Once configured, every push to `main` will automatically build and deploy your site.

### Manual Deployment Options

#### Option 1: Via Cloudflare Dashboard

1. Push your code to GitHub/GitLab
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Navigate to Workers & Pages > Create application > Pages
4. Connect your repository
5. Configure build settings:
   - **Build command**: `pnpm build`
   - **Build output directory**: `out`
   - **Node version**: 20.9.0 or higher
6. Deploy

#### Option 2: Via Wrangler CLI

1. Install Wrangler:

```bash
npm install -g wrangler
```

2. Login to Cloudflare:

```bash
wrangler login
```

3. Deploy:

```bash
pnpm build
wrangler pages deploy out --project-name=tornado-alley
```

## Image and Asset Management

### Cloudflare R2 Storage

Large images and media files are stored in Cloudflare R2 to keep the repository lightweight:

- **Bucket**: `tornadoalley-website-assets`
- **Public URL**: `https://pub-c59a7d8d850842288d7852af88d4ee66.r2.dev`

To upload new images:

```bash
npx wrangler r2 object put tornadoalley-website-assets/images/[filename] --file [local-path]
```

Reference in code:

```tsx
<Image
  src="https://pub-c59a7d8d850842288d7852af88d4ee66.r2.dev/images/[filename]"
  alt="Description"
  fill
/>
```

### Local Public Assets

Small files and icons are stored in the `public/` directory:

- `/public/images/principles/` - F3 core principle icons (SVG)
- `/public/favicon.ico` - Site favicon
- `/public/apple-touch-icon.png` - Apple touch icon

## Customization

### Update Social Media Links

Edit `app/page.tsx` (lines 50-131) to update social media URLs and buttons.

### Update SEO Metadata

Edit `app/layout.tsx` (lines 22-72) to customize:
- Page title and description
- Keywords
- Open Graph tags
- Twitter Card metadata
- Site verification codes (Google, etc.)

### Update Location Data

Edit location pages in `app/locations/[city]/page.tsx` to modify workout schedules and details.

### Styling

The site uses Tailwind CSS v4. Modify styles in:
- Component files (`app/**/page.tsx`) - Component-level styling
- `app/globals.css` - Global styles and Tailwind imports

## SEO Features

This site includes:

- **Meta Tags**: Title, description, keywords, author
- **Open Graph**: For Facebook and other social platforms
- **Twitter Cards**: Optimized preview cards for Twitter/X
- **Structured Data**: JSON-LD schema for Organizations
- **robots.txt**: Configured for proper indexing
- **Semantic HTML**: Proper heading hierarchy and ARIA labels
- **Active navigation**: Clear visual indication of current page

## Project Structure

```
website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated Cloudflare deployment
├── app/
│   ├── components/
│   │   └── Navigation.tsx      # Site navigation with active state
│   ├── getting-started/
│   │   └── page.tsx            # Getting Started page
│   ├── locations/
│   │   ├── [city]/
│   │   │   └── page.tsx        # Per-city workouts (Edmond)
│   │   ├── data.ts             # Cities, AOs, and region data
│   │   └── page.tsx            # Locations index with map
│   ├── resources/
│   │   └── page.tsx            # Resources page
│   ├── layout.tsx              # Root layout with SEO metadata
│   ├── page.tsx                # Home page
│   └── globals.css             # Global styles
├── public/
│   ├── images/
│   │   └── principles/         # F3 principle icons
│   ├── favicon.ico
│   └── apple-touch-icon.png
├── next.config.ts              # Next.js configuration
├── package.json                # Project dependencies
├── CLAUDE.md                   # Claude Code guidance
└── README.md                   # This file
```

## Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [TypeScript 5](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS v4](https://tailwindcss.com/) - Styling
- [Cloudflare Pages](https://pages.cloudflare.com/) - Hosting
- [Cloudflare R2](https://www.cloudflare.com/products/r2/) - Asset storage

## Development Commands

```bash
pnpm install         # Install dependencies
pnpm dev             # Start dev server at http://localhost:3000
pnpm build           # Build static site to out/ directory
pnpm start           # Start production server (after build)
pnpm lint            # Run ESLint
pnpm test:e2e        # Run Playwright e2e tests
```

## License

Copyright © F3 Tornado Alley

## Support

For issues or questions about F3 Tornado Alley, visit our social media pages or contact us through our community channels.
