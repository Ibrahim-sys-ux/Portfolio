# Ibrahim Kutty T.A — Personal Portfolio

A modern, premium personal portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 15 (App Router, Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Themes**: next-themes (dark/light mode)
- **Contact**: EmailJS (configure in `.env`)
- **Deployment**: Cloudflare Pages (free)

## Features

- ⚡ Dark mode by default with toggle
- 🎨 Glassmorphism UI with indigo/purple gradient theme
- ✨ Framer Motion scroll-reveal animations
- ⌨️ Typewriter effect in hero section
- 💫 Floating particle background
- 🔍 Command Palette (⌘K / Ctrl+K)
- 📊 Animated skill bars and counters
- 📱 Fully responsive (mobile-first)
- 🔝 Back-to-top button
- 📬 Contact form with EmailJS
- 📋 One-click email copy
- 📥 Resume download button
- 🗺️ Sitemap + robots.txt
- 🏷️ Open Graph + Twitter card SEO

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles + CSS variables
│   ├── layout.tsx           # Root layout with metadata/SEO
│   ├── page.tsx             # Home page (section orchestration)
│   ├── sitemap.ts           # Dynamic sitemap
│   └── robots.ts            # robots.txt
├── components/
│   ├── sections/
│   │   ├── Hero.tsx         # Hero with typewriter + stats
│   │   ├── About.tsx        # Bio, education, languages
│   │   ├── Experience.tsx   # Timeline of work experience
│   │   ├── Projects.tsx     # Featured project cards
│   │   ├── Skills.tsx       # Categorized skills with bars
│   │   ├── Achievements.tsx # Certifications & awards
│   │   ├── CodingProfiles.tsx # GitHub, LinkedIn, LeetCode
│   │   ├── Contact.tsx      # Form + social links
│   │   └── Footer.tsx       # Footer with navigation
│   ├── shared/
│   │   ├── Navbar.tsx       # Sticky nav + mobile menu
│   │   ├── ThemeProvider.tsx
│   │   ├── Particles.tsx    # Canvas particle background
│   │   ├── ScrollProgress.tsx
│   │   ├── BackToTop.tsx
│   │   ├── CommandPalette.tsx # ⌘K command menu
│   │   ├── SectionWrapper.tsx # Scroll-reveal wrapper
│   │   └── SectionHeader.tsx  # Consistent section headings
│   └── ui/
│       └── AnimatedCounter.tsx
└── lib/
    ├── data.ts              # ALL resume content (edit here)
    └── utils.ts             # Utility functions
```

## Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/Ibrahim-sys-ux/portfolio.git
cd portfolio
npm install
```

### 2. Environment Setup

```bash
cp .env.example .env.local
```

Fill in your EmailJS credentials (optional, for contact form):
- Create free account at https://www.emailjs.com/
- Create a service (Gmail, Outlook, etc.)
- Create an email template
- Copy your Service ID, Template ID, and Public Key

### 3. Customize Your Data

Edit `src/lib/data.ts` to update:
- Personal info (name, email, phone, social links)
- Experience timeline
- Projects
- Skills and proficiency levels
- Achievements and certifications

### 4. Add Your Resume PDF

Place your resume at `public/resume.pdf`

### 5. Run Locally

```bash
npm run dev
```

Open http://localhost:3000

## Deploying to Cloudflare Pages (FREE)

### Step 1: Build the Static Export

```bash
npm run build
```

This creates an `out/` directory with the static site.

### Step 2: Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/your-username/portfolio.git
git push -u origin main
```

### Step 3: Connect to Cloudflare Pages

1. Go to https://dash.cloudflare.com
2. Click **Pages** in the left sidebar
3. Click **Create a project** → **Connect to Git**
4. Authorize Cloudflare to access your GitHub
5. Select your portfolio repository
6. Configure build settings:
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node.js version**: 18 (set in Environment variables: `NODE_VERSION = 18`)
7. Click **Save and Deploy**

### Step 4: Add Environment Variables (Optional)

In Cloudflare Pages → Settings → Environment Variables:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID = your_value
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID = your_value
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY = your_value
```

### Step 5: Custom Domain (Optional)

1. In Cloudflare Pages → Custom domains
2. Add your domain (e.g., ibrahimkutty.dev)
3. Cloudflare auto-configures DNS and SSL for free

---

Your portfolio will be live at: `https://your-project.pages.dev`

## Enabling EmailJS Contact Form

1. Create account at https://www.emailjs.com/
2. Add email service (Gmail recommended)
3. Create template with these variables:
   - `{{from_name}}` - sender's name
   - `{{from_email}}` - sender's email
   - `{{subject}}` - message subject
   - `{{message}}` - message body
4. Update the Contact.tsx `handleSubmit` function with the EmailJS send call:

```typescript
import emailjs from '@emailjs/browser'

// In handleSubmit:
await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  { from_name: form.name, from_email: form.email, subject: form.subject, message: form.message },
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
)
```

## Customization Guide

### Colors
Edit the CSS variables in `src/app/globals.css`:
- `--primary`: Main accent color (currently indigo)
- `--background`: Page background

### Fonts
Update `src/app/layout.tsx` to change the Google Font import.

### Animations
Adjust Framer Motion variants in individual components. The `SectionWrapper` controls reveal animations.

### Adding New Sections
1. Create `src/components/sections/NewSection.tsx`
2. Import and add to `src/app/page.tsx`
3. Add nav link to `src/components/shared/Navbar.tsx`
4. Add to CommandPalette commands

## Performance

- Static export = no server costs
- Lazy-loaded sections via Framer Motion viewport detection
- Canvas particles are lightweight (60 particles)
- Images are statically optimized

---

Built with ❤️ by Ibrahim Kutty T.A
