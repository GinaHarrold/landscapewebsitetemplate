# LawnPress Landscaping Website

LawnPress is a five-page landscaping website built with React, TanStack Start, Vite, Tailwind CSS, and TypeScript.

It is designed as a transferable website asset that can be customized for a real landscaping or lawn-care business.

## Pages

- Home
- Services
- About
- Book Estimate
- Contact

## Requirements

- Node.js 22 recommended
- npm

## Local Setup

Install dependencies:

```bash
npm install
```

Build the production site:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

The site will run at `http://localhost:3000`.

## Customizing the Website

Most business information is managed in `src/config.ts`.

This includes business name, phone number, email address, address, business hours, brand colors, navigation, social media links, services, About copy, testimonials, contact copy, estimate options, and SEO titles and descriptions.

## Demo Content

LawnPress is a fictional demonstration business.

Before using the website for a real company, replace all sample business information, testimonials, contact details, social links, and SEO information with the buyer's actual business information.

## Forms

The contact and estimate forms are currently demonstration forms. They do not send information to an external service or database.

A buyer can connect their preferred form provider, CRM, email service, API endpoint, or backend.

## Hosting

The project is not dependent on cto.new, Bun, or Vercel.

The site can be built using standard npm commands and served with Node.js. Buyers may deploy it to any compatible Node hosting provider or adapt the project for another hosting platform.

## Images

The repository includes the images currently used by the website. Image provenance and transfer rights should be verified before commercial transfer.

## SEO

The project includes page-specific titles and descriptions, Open Graph metadata, `robots.txt`, `sitemap.xml`, and SEO configuration in `src/config.ts`.

Before launch, update the production domain and business-specific metadata.

## Technology

- React
- TanStack Start
- TanStack Router
- Vite
- Tailwind CSS
- TypeScript
- Node.js

## Buyer Handoff

A buyer should receive:

- Complete source code
- Repository-contained website assets
- Setup instructions
- Customization instructions
- Deployment instructions
- Asset provenance documentation

No seller-owned hosting, email, CRM, form, database, or cto.new account is required to operate the transferred source code.
