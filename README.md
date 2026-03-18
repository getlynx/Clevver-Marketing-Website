# Clevver Marketing Website

A marketing landing page for [Clevver](https://clevver.org) — a permanent, encrypted document storage platform powered by distributed ledger technology.

Clevver is accessible through multiple interfaces to serve different user needs:

- **Website** — Interactive web interface for manual document management and interaction
- **Desktop App** — Native application for convenient access beyond the browser with full platform functionality
- **API** — RESTful API for application developers to integrate permanent encrypted storage into their applications
- **SKILL File** — Standardized skill definition for seamless integration into AI workflows and automation systems
- **CLI for AI Agents** — Command-line interface designed for AI developers and agents to build intelligent applications and robust automation workflows

## Overview

Clevver is a permanent, encrypted document storage platform that serves consumers, developers, businesses, and enterprises. The platform is designed to store documents for 500 years, keeping them accessible with a one-time fee and no additional costs. Built on efficient distributed ledger technology, Clevver ensures your documents are secure, permanent, and always available when you need them—while maintaining an environmentally conscious approach to data storage.

Unlike traditional cloud storage systems that require constant energy-intensive replication, migration, and server maintenance, Clevver's distributed architecture encodes documents across open source blockchains via the Lynx Data Storage network. This approach significantly reduces energy consumption and carbon emissions associated with document storage, making Clevver an eco-friendly choice for long-term document preservation.

### For Everyone

Clevver makes it easy for regular users to store important documents permanently and securely. Whether you're keeping personal records, contracts, photos, or files you want to preserve forever, Clevver handles the heavy lifting. Your documents are encrypted automatically before storage, so only you can read them. Purchase storage quota in advance, upload once, and access your documents anytime without monthly bills or recurring charges.

### For Developers

Developers can integrate Clevver's powerful API and AI CLI Agent into their applications to add permanent encrypted storage capabilities. The platform provides flexible APIs for batch processing, automated workflows, and custom integrations. Developers appreciate the straightforward one-time pricing model, comprehensive documentation, and the ability to build storage features into their apps without complex backend infrastructure.

### For Businesses

Business users benefit from Clevver's reliability, compliance features, and cost-effectiveness. Store critical business documents, contracts, records, and files with confidence that they'll be permanently preserved and accessible. The platform handles compliance requirements while keeping operational costs predictable—no surprise storage fees or increasing maintenance costs as your data grows.

### For Enterprises

Enterprise organizations get scalable, secure document management with custom API pricing and integration options. Enterprises can implement Clevver for organization-wide document retention, compliance archival, and permanent records management. With distributed redundancy, zero-knowledge encryption, and enterprise-grade reliability, critical organizational documents are protected and accessible for as long as needed.

**Key value propositions:**

- **Permanent storage** — Documents designed to be stored securely and permanently for 500 years
- **Automatic encryption** — All documents encrypted with industry-standard AES-256 before storage
- **One-time pricing** — Pay once to store, retrieve for free forever with no hidden fees
- **Zero-knowledge security** — Clevver cannot access your encrypted documents
- **Distributed redundancy** — Your data is safely stored across multiple geographically distributed locations
- **Easy access** — Simple interface and powerful APIs for any use case
- **Complete privacy** — Your documents are yours alone
- **Environmentally friendly** — Efficient storage architecture reduces energy consumption and carbon footprint compared to traditional cloud storage systems

## Tech Stack

- **HTML5** — Semantic markup with accessibility attributes and ARIA labels
- **CSS3** — Custom properties, Flexbox, CSS Grid, responsive design
- **JavaScript (ES6+)** — Vanilla JS, no frameworks or dependencies
- **Fonts** — Inter (body), Crimson Pro (headings) via Google Fonts
- **SEO** — JSON-LD structured data, meta descriptions, Open Graph, Twitter Cards
- **Accessibility** — Screen reader optimization with visually hidden content class

No build tools, bundlers, or package managers required.

## File Structure

```
├── index.html                      # Main landing page
├── hipaa.html                      # HIPAA compliance documentation
├── history.html                    # Clevver history and background
├── login.html                      # User login page
├── privacy.html                    # Privacy policy
├── clevver-agent-cli.html          # Clevver CLI and AI integration
├── styles.css                      # All styles (CSS custom properties, responsive breakpoints)
├── script.js                       # Interactive behavior (mobile menu, scroll effects, animations)
├── robots.txt                      # Web crawler directives (SEO)
├── sitemap.xml                     # Site structure for search engines
├── llms.txt                        # LLM-optimized documentation
├── llms-full.txt                   # Complete LLM documentation
├── test-plan-basic-user.md         # Basic user testing guide
├── test-plan-advanced-user.md      # Advanced user testing guide
└── README.md                       # This file
```

## Pages

### Landing Pages

**index.html** (Main landing page)
1. **Navigation** — Fixed header with mobile hamburger menu
2. **Hero** — Value proposition with AES-256 badge, demo CTA, trust indicators
3. **Trust Bar** — Partner organization names
4. **Solutions** — 6 feature cards (tagging, permanent URLs, retention, encryption, API, batch processing)
5. **Security** — AES-256 encryption, zero-knowledge architecture, distributed redundancy
6. **Compliance** — Healthcare (HIPAA), Legal (attorney-client privilege), Enterprise & Academia (permanent records)
7. **Testimonials** — Customer quotes from healthcare, legal, and academic professionals
8. **Pricing** — 3 tiers: Free (5 MB), Standard ($5/MB one-time), Enterprise (custom API pricing)
9. **CTA** — Demo scheduling link
10. **Footer** — Links, contact info, badges

**hipaa.html** — HIPAA compliance documentation with structured data
**history.html** — Clevver platform history and background
**privacy.html** — Privacy policy and data handling practices
**login.html** — User authentication and login interface
**clevver-agent-cli.html** — Clevver CLI and AI integration documentation

## Pricing Model

- **Free** — First 5 MB of permanent storage at no cost
- **Standard** — $5 per MB, one-time payment, free retrieval forever
- **Enterprise** — Custom pricing with API integration and monthly billing at negotiated rates

## SEO & Accessibility

### SEO Enhancements
- **Meta descriptions** and Open Graph tags for social media sharing
- **Twitter Card** tags for improved Twitter previews
- **JSON-LD structured data** for rich search results
- **robots.txt** — Web crawler directives with support for AI bots
- **sitemap.xml** — Complete site structure for search engines
- **llms.txt / llms-full.txt** — LLM-optimized documentation for AI model discovery

### Accessibility Features
- Semantic HTML5 markup with ARIA labels
- Screen reader optimization with `.visually-hidden` class
- Keyboard navigation support
- High contrast color schemes
- Mobile-responsive design with touch-friendly targets

## Testing

- **test-plan-basic-user.md** — Testing guide for basic user workflows
- **test-plan-advanced-user.md** — Testing guide for advanced features and CLI integration

## External Links

- **Contact form:** Typeform popup (form ID: m04KvmJl), loaded via Typeform Embed SDK
- **Clevver platform:** https://clevver.org
- **Technical docs:** https://docs.getlynx.io