# Bantmate AI Coding Instructions

## Project Overview
Bantmate is a Next.js 15 application using the App Router, TypeScript, and Tailwind CSS. It's structured as a learning-focused modern web app with clean component architecture.

## Architecture & File Structure

### App Router Patterns
- Use [app/](app/) directory for pages: `app/page.tsx` = `/`, `app/about/page.tsx` = `/about`
- Root layout is in [app/layout.tsx](app/layout.tsx) with global elements (Navbar, footer, metadata)
- Server components by default - only add `'use client'` for interactivity (see [components/Navbar.tsx](components/Navbar.tsx))

### Import Conventions
- Use `@/` alias for root imports: `import Navbar from '@/components/Navbar'` (configured in [tsconfig.json](tsconfig.json))
- Next.js components: `import Link from 'next/link'`, `import { Inter } from 'next/font/google'`

### Styling System
- **Tailwind Classes**: Follow existing utility patterns - `bg-white shadow-md`, `text-gray-700 hover:text-primary-600`
- **Custom Components**: Use `@layer components` in [globals.css](app/globals.css) for reusable classes like `.btn-primary` and `.container`
- **Brand Colors**: Use `primary-600`, `primary-700` from [tailwind.config.js](tailwind.config.js) custom palette
- **Responsive Design**: Mobile-first with `md:` prefixes for desktop breakpoints

## Component Patterns

### Interactive Components
- Add `'use client'` directive for useState/event handlers (see [Navbar.tsx](components/Navbar.tsx#L1))
- Mobile menu pattern: `useState` toggle with conditional rendering and hamburger animation
- Accessibility: Include `aria-label` and `focus:` states

### Layout Components
- Use `.container` class for consistent max-width and padding
- Space management: `space-y-8` for vertical spacing, `gap-4` for flexbox/grid
- Card pattern: `bg-white p-6 rounded-lg shadow-md` for content blocks

### Navigation Links
- Use `<Link href="/">` for internal navigation
- Hover states: `hover:text-primary-600 transition-colors`
- Close mobile menu on link click: `onClick={() => setIsMobileMenuOpen(false)}`

## Development Commands
- `npm run dev` - Development server (localhost:3000)
- `npm run build` - Production build
- `npm run lint` - ESLint checking

## Code Quality Standards
- TypeScript strict mode enabled - define proper types for props
- Detailed comments explaining component purpose (see existing examples)
- Semantic HTML with proper accessibility attributes
- Consistent naming: PascalCase for components, camelCase for functions/variables

## Adding New Features
- **New Pages**: Create in `app/` directory following Next.js App Router structure
- **Components**: Place in `components/` directory, export as default
- **Styles**: Extend Tailwind config for brand colors, use custom classes in globals.css for common patterns
- **Images**: Use Next.js `<Image>` component for optimization

When implementing features, maintain the clean, commented code style and responsive design patterns established in the existing codebase.