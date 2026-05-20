# Subramanya Hegde — Portfolio

Personal portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animation**: Framer Motion
- **Fonts**: Syne (headings), DM Sans (body), DM Mono (code)
- **Contact**: Resend API
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local — add your RESEND_API_KEY

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create `.env.local` (copy from `.env.example`):

```env
RESEND_API_KEY=re_xxxxxxxxxxxx   # Get from resend.com (free tier: 3000/month)
CONTACT_EMAIL=subramanyah65@gmail.com
```

## Deploy to Vercel

1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Add env vars in Vercel → Settings → Environment Variables
4. Deploy — done

## Files to Replace

| File | Action |
|------|--------|
| `public/resume.pdf` | Replace with your actual resume PDF |
| Project links in `lib/data.ts` | Fill in `github` and `demo` URLs for each project |

## Customization

All content lives in **`lib/data.ts`** — edit in one place:

- `siteConfig` — name, URLs, social links, location
- `skills` — tech stack groups and items
- `projects` — project cards (title, description, tags, links)
- `experiences` — timeline entries
- `roles` — typewriter cycling roles in hero

## Project Structure

```
/app
  /api/contact/route.ts     Contact form email endpoint (Resend)
  layout.tsx                Root layout, fonts, theme provider
  page.tsx                  Single-page composition
  opengraph-image.tsx       Auto-generated OG image (edge runtime)
  robots.ts / sitemap.ts    SEO files
/components
  /sections                 Hero, About, Skills, Projects, Experience, Contact, Footer
  /shared                   Nav, ThemeProvider, ThemeToggle, SectionWrapper, SocialIcons
  /ui                       shadcn/ui components
/lib
  data.ts                   All content — edit this file
  utils.ts                  Tailwind merge utility
/public
  resume.pdf                Replace with your actual PDF
```
