# Promise of Heaven Landing Page

A responsive React and TypeScript implementation of **The Promise of Heaven** campaign landing page.

The application recreates the campaign experience using a simplified component architecture, centralized content management, and automated deployment through GitHub Actions.

## Live Site

https://davidrosales1.github.io/promise-of-heaven/

## Repository

https://github.com/davidrosales1/promise-of-heaven

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- ESLint
- GitHub Actions
- GitHub Pages

## Features

- Responsive single-page campaign experience
- Sticky campaign navigation
- Interactive concert video section
- Interactive interview video gallery
- Reusable CTA component
- Centralized campaign content management
- Automated CI/CD pipeline

## Project Structure

```txt
src/
├── components/
│   ├── SiteHeader.tsx
│   ├── Hero.tsx
│   ├── MiniNav.tsx
│   ├── BookSection.tsx
│   ├── ConcertSection.tsx
│   ├── InterviewsSection.tsx
│   ├── ResourcesSection.tsx
│   ├── SupportSection.tsx
│   ├── StayConnected.tsx
│   ├── SiteFooter.tsx
│   └── CtaLink.tsx
├── data/
│   └── campaign.ts
├── App.tsx
├── main.tsx
└── styles.css
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Build

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## CI/CD

Continuous Integration runs automatically on pull requests and pushes to `main`.

Validation includes:

- Dependency installation
- ESLint checks
- TypeScript compilation
- Production build verification

Continuous Deployment automatically publishes the application to GitHub Pages after successful builds on `main`.

## Design & Development Notes

The goal of this project was to recreate the Promise of Heaven campaign experience as a modern, responsive landing page using React, TypeScript, Vite, and Tailwind CSS.

The primary focus of the implementation was to create a maintainable, easy-to-understand codebase while preserving the visual design and user experience of the campaign.

Key implementation decisions:

- Organized the application into focused, reusable React components.
- Centralized campaign content into a dedicated data module to separate content from presentation logic.
- Extracted shared UI patterns into reusable components, including a common CTA component used throughout the application.
- Added automated CI/CD workflows using GitHub Actions for validation and deployment.
- Deployed the application to GitHub Pages for public access and review.

The resulting codebase emphasizes readability, maintainability, and straightforward component composition while remaining faithful to the intended campaign experience.

## Future Improvements

Potential future enhancements include:

- Replace placeholder links with production destinations.
- Add automated component and integration tests.
- Improve accessibility auditing and keyboard navigation.
- Add analytics and campaign tracking support.
- Optimize image delivery and asset loading.
