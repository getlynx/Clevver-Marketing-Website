# Clevver Landing Page

A professional, light-themed landing page for Clevver — a secure document management platform for healthcare, legal, and real estate professionals.

## Project Overview

This is a static marketing website showcasing a fictional document management service targeting professionals with strict compliance requirements (HIPAA, attorney-client privilege, SOC 2). The page features a clean, trustworthy design with a navy blue and warm gold color palette.

**Key Details:**
- **Type:** Static HTML/CSS/JavaScript website
- **Language:** English
- **Theme:** Light mode with professional navy (#1e3a5f) and warm gold (#d4a574) accents
- **Fonts:** Inter (body), Crimson Pro (headings)
- **No build tools or dependencies** — pure vanilla web technologies

## File Structure

```
/Users/maia/testing/
├── index.html      # Main HTML page (31KB) — semantic markup with 10 sections
├── styles.css      # All CSS styles (26KB) — CSS custom properties, responsive design
└── script.js       # Interactive JavaScript (11KB) — vanilla ES6+
```

## Technology Stack

- **HTML5:** Semantic markup with accessibility attributes (`aria-label`)
- **CSS3:** Custom properties (CSS variables), Flexbox, CSS Grid, animations
- **JavaScript (ES6+):** Vanilla JS, no frameworks or libraries
- **External Resources:**
  - Google Fonts (Inter, Crimson Pro)
  - SVG icons (inline, no icon library)

## Architecture

### HTML Structure
The page is organized into these sections:
1. **Navigation** — Fixed header with backdrop blur, mobile hamburger menu
2. **Hero** — Value proposition with SOC 2 badge, CTAs, and document preview visual
3. **Trust Bar** — Partner company names (Mercer & Associates, Summit Medical Group, etc.)
4. **Solutions** — 6 feature cards (Smart Organization, Client Portals, Retention & Deadlines, Team Collaboration, E-Signatures, Workflow Automation)
5. **Security** — Security features list with animated security score card (A+ rating)
6. **Compliance** — 3 compliance cards (HIPAA, Attorney-Client Privilege, SOC 2 Type II)
7. **Testimonials** — 3 customer testimonials with star ratings
8. **Pricing** — 3-tier pricing cards (Professional $49, Business $79, Enterprise Custom)
9. **CTA** — Demo scheduling form with email input
10. **Footer** — Multi-column links and contact information

### CSS Architecture
- **CSS Variables:** Defined in `:root` for colors, spacing, typography, transitions
- **Color Palette:**
  - Primary: `#1e3a5f` (navy blue)
  - Accent: `#d4a574` (warm gold/beige)
  - Background: `#ffffff` (white), `#f8f9fa` (alt gray)
  - Text: `#1f2937` (primary), `#6b7280` (secondary), `#9ca3af` (muted)
  - Success: `#059669` (green for badges/checks)
- **Typography:**
  - Body: Inter, sans-serif
  - Headings: Crimson Pro, serif
  - Clamp-based responsive font sizes
- **Responsive Breakpoints:**
  - Desktop: > 1024px
  - Tablet: 768px - 1024px
  - Mobile: < 768px
  - Small Mobile: < 480px

### JavaScript Features
All code is wrapped in `DOMContentLoaded` event listener:
- Mobile menu toggle with hamburger-to-X animation
- Smooth scroll for anchor links (accounts for fixed nav height)
- Navigation scroll effect (adds `.scrolled` class when scrolled > 50px)
- Intersection Observer for scroll reveal animations on cards
- Form submission handling with visual feedback (button state change)
- Console welcome message with branded styling

## Development Workflow

### No Build Process
This is a static site with no build tools. To preview or develop:

```bash
# Open directly in browser
open index.html

# Or serve with any static server
python3 -m http.server 8000
npx serve .
```

### Code Style Guidelines

#### CSS
- Use CSS custom properties for all colors and spacing (e.g., `var(--color-primary)`, `var(--space-lg)`)
- BEM-like naming convention (e.g., `.solution-card`, `.pricing-header`)
- Mobile-first responsive design with `@media` queries at the end of the file
- Use `var(--transition-base)` for consistent animations (250ms ease)
- Section comments with `/* ======================================== */` dividers

#### JavaScript
- Wrap all code in `DOMContentLoaded` event listener
- Use modern ES6+ features (const/let, arrow functions, template literals)
- Include section comments with `// ========================================` dividers
- Prefer `const` over `let`, avoid `var`
- Use `querySelector`/`querySelectorAll` for DOM selection
- Passive event listeners for scroll events: `{ passive: true }`

#### HTML
- Use semantic HTML5 elements (`nav`, `section`, `footer`)
- Include `aria-label` attributes for interactive elements
- All SVG icons are inline for styling control
- IDs used for JavaScript hooks (camelCase: `#mobileMenuBtn`)
- Classes use kebab-case: `.section-header`, `.pricing-card`

## Testing

### Manual Testing Checklist
- [ ] Navigation backdrop blur renders correctly
- [ ] Mobile menu toggle animates hamburger to X
- [ ] Mobile menu closes when clicking a link
- [ ] Smooth scroll to anchors accounts for fixed nav height
- [ ] Scroll reveal animations trigger on cards
- [ ] Navigation style changes on scroll (scrolled class)
- [ ] CTA form shows success state on submit (button turns green)
- [ ] All responsive breakpoints display correctly
- [ ] Security score SVG circle displays correctly
- [ ] Document preview visual renders in hero

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Uses CSS features like `backdrop-filter`, CSS Grid, CSS variables
- Includes `prefers-reduced-motion` media query for accessibility

## Deployment

Since this is a static site, deploy by copying all three files to any static hosting:
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any CDN or web server

No server-side processing or environment variables required.

## Notes for AI Agents

- **No package.json or dependencies** — do not add build tools unless explicitly requested
- **Keep it static** — no backend integration exists
- **Preserve existing design patterns** — use the established CSS variable system
- **Color consistency** — navy blue (#1e3a5f) is primary, gold (#d4a574) is accent
- **Typography** — Inter for body, Crimson Pro for headings
- **Responsive first** — test mobile layouts when making changes
- **Performance conscious** — fonts are preloaded, animations use `transform` and `opacity`
