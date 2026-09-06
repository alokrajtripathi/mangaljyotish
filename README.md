# Mangal Jyotish Paramarsh Kendra

A production-ready, high-performance web application for Mangal Jyotish Paramarsh Kendra, led by Shastri Himanshu Tripathi Ji. The platform offers comprehensive consultation services for Predictive Astrology (Falit Jyotish), Vastu Shastra, Gemology, and Vedic Rituals (Karmakand).

---

## Key Features

- **Full Bilingual Localization**: Seamless client-side switching between Hindi and English across all UI components, navigation, and service descriptions.
- **Modern Next.js Architecture**: Powered by Next.js 16 (App Router) and React 19 with Turbopack compilation for rapid build and page load times.
- **SEO & Search Optimization**: Built-in OpenGraph meta tags, canonical URL routing, dynamic `sitemap.xml`, `robots.txt`, and Schema.org `ProfessionalService` JSON-LD structured data for search engine visibility.
- **Performance & Asset Optimization**: Configured image optimization supporting modern WebP and AVIF formats, achieving top Lighthouse performance and accessibility scores.
- **Responsive Design System**: Tailored user interface utilizing Tailwind CSS v4 with custom brand palettes, glassmorphism visual effects, and fluid layouts for desktop and mobile devices.
- **Direct Engagement Channels**: Integrated WhatsApp messaging, direct call actions, and branch location displays across Varanasi, Ara, and Patna.

---

## Tech Stack

| Component | Technology |
| --- | --- |
| **Framework** | Next.js 16.3.3 (App Router) |
| **Library** | React 19 |
| **Language** | TypeScript 5.7 |
| **Styling** | Tailwind CSS v4, PostCSS |
| **Icons** | Lucide React |
| **Analytics** | Vercel Analytics |
| **Deployment** | Vercel Platform |

---

## Project Structure

```text
mangal-jyotish-paramarsh/
├── app/
│   ├── layout.tsx         # Root layout with providers, analytics, and meta tags
│   ├── page.tsx           # Home page assembling all site sections
│   ├── robots.txt/        # Dynamic robots.txt route
│   └── sitemap.xml/       # Dynamic sitemap generator
├── components/
│   ├── about.tsx          # About section and guru lineage
│   ├── astrology.tsx      # Core astrology services grid
│   ├── branches.tsx       # Branch locations and contact details
│   ├── contact.tsx        # Consultation booking form
│   ├── footer.tsx         # Site footer and quick links
│   ├── gallery.tsx        # Event and ritual photo showcase
│   ├── hero.tsx           # Hero section with primary CTA
│   ├── language-provider.tsx # React Context for language state management
│   ├── navbar.tsx         # Sticky navigation header with language toggle
│   ├── services.tsx       # Detailed service offerings
│   └── testimonials.tsx   # Client testimonials and reviews
├── lib/
│   └── site-data.ts       # Central source of bilingual content and contact info
├── public/                # Static assets, logos, and optimized media
├── next.config.mjs        # Next.js build and image optimization settings
├── tsconfig.json          # TypeScript configuration
└── package.json           # Project dependencies and script definitions
```

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- Node.js version 18.17 or higher
- npm or pnpm package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alokrajtripathi/mangaljyotish.git
   cd mangaljyotish
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the development server locally:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to inspect the application.

---

## Build and Production

### Production Build

To verify and generate the production bundle:
```bash
npm run build
```

### Local Production Preview

To test the compiled production build locally:
```bash
npm run start
```

---

## Deployment

This repository is configured for seamless deployment on Vercel.

1. Push all code changes to the `main` branch.
2. Connect the repository in your Vercel Dashboard.
3. Vercel will automatically detect Next.js settings and execute `npm run build`.

---

## License & Maintainers

Maintained by **Mangal Jyotish Paramarsh Kendra**.  
Specialist: Shastri Himanshu Tripathi Ji.
