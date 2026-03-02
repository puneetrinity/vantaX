# VantaX Full SEO Audit Report

**Date:** 2026-03-02
**Target:** https://vantax.vantahire.com (audited via localhost:5173)
**Business Type:** Event / SaaS Platform (Hiring Audition)
**Stack:** React 18 SPA + Vite 6 + Express.js + Tailwind v4
**Pages Audited:** 4 (`/`, `/what-is-vantax`, `/companies`, `/jury`)

---

## Executive Summary

### Overall SEO Health Score: 63/100

| Category | Weight | Score | Status |
|----------|--------|-------|--------|
| Technical SEO | 25% | 52/100 | FAIL |
| Content Quality | 25% | 68/100 | NEEDS IMPROVEMENT |
| On-Page SEO | 20% | 70/100 | NEEDS IMPROVEMENT |
| Schema / Structured Data | 10% | 75/100 | PASS |
| Performance (CWV) | 10% | 55/100 | NEEDS IMPROVEMENT |
| Images | 5% | 60/100 | NEEDS IMPROVEMENT |
| AI Search Readiness | 5% | 58/100 | NEEDS IMPROVEMENT |

### Top 5 Critical Issues

1. **No SSR/SSG** -- Pure client-side rendering means crawlers see an empty `<div id="root"></div>`. All content, meta tags, and per-page SEO depend on JavaScript execution.
2. **Hardcoded canonical tag** in `index.html` points all pages to `/`, risking de-indexation of 3 inner pages.
3. **No 404 catch-all route** -- Invalid URLs return HTTP 200 with blank content (soft 404).
4. **Zero security headers** -- No HSTS, CSP, X-Frame-Options, or any other security headers.
5. **No privacy policy, terms of service, or refund policy** -- Collects PII and payments without legal pages.

### Top 5 Quick Wins

1. Remove the hardcoded `<link rel="canonical">` from `index.html` (1 line delete).
2. Add a 404 catch-all route in `App.tsx` (5 lines).
3. Add `Disallow: /api/` to `robots.txt` (1 line).
4. Fix Event schema `offers.price` from string `"199"` to number `199` (1 character).
5. Add `width`/`height` attributes to all `<img>` tags (3 files, 1 line each).

---

## 1. Technical SEO (52/100)

### 1.1 Crawlability (35/100) -- FAIL

| Check | Status | Details |
|-------|--------|---------|
| robots.txt exists | PASS | Allows all, disallows `/uploads/`, references sitemap |
| Sitemap referenced | PASS | `Sitemap: https://vantax.vantahire.com/sitemap.xml` |
| sitemap.xml exists | PASS | 4 URLs, valid XML |
| Content visible without JS | **FAIL** | Empty `<div id="root"></div>` without JS |
| API endpoints blocked | **FAIL** | `/api/` routes are crawlable |
| Proper HTTP status codes | **FAIL** | All routes (including invalid) return 200 |

**Root Cause:** The entire site is a React SPA rendered client-side only. The server delivers the same `index.html` for all routes. Googlebot's rendering queue can delay JS execution by hours to weeks. Social media crawlers (Facebook, LinkedIn, Twitter) do NOT execute JavaScript at all.

**Affected files:**
- `app/src/main.tsx` -- Uses `ReactDOM.createRoot` (CSR only)
- `app/index.html` -- Empty `<div id="root"></div>`

### 1.2 Indexability (45/100) -- FAIL

| Check | Status | Details |
|-------|--------|---------|
| Unique `<title>` per page | PARTIAL | Set via react-helmet-async (requires JS) |
| Unique meta description per page | PARTIAL | Set via react-helmet-async (requires JS) |
| Canonical tags per page | **FAIL** | Static HTML canonical always `/` |
| No duplicate content signals | **FAIL** | All routes serve identical static HTML |
| 404 handling | **FAIL** | No catch-all route |

**Per-page titles (set dynamically via react-helmet-async):**

| Page | Title |
|------|-------|
| `/` | VantaX 2026 -- 3 Challenges. 2 Hours Each. \| India's Hiring Audition |
| `/what-is-vantax` | What Is VantaX? -- A Structured Hiring Audition \| VantaX 2026 |
| `/companies` | For Companies -- Post Real Problems, Hire Proven Builders \| VantaX 2026 |
| `/jury` | Join the Jury -- Review Real-World Submissions \| VantaX 2026 |

These are well-crafted and unique per page, but **only visible after JS execution**.

### 1.3 Security Headers (10/100) -- FAIL

| Header | Status |
|--------|--------|
| HTTPS | Assumed (canonical uses https://) |
| Strict-Transport-Security (HSTS) | MISSING |
| X-Frame-Options | MISSING |
| X-Content-Type-Options | MISSING |
| Content-Security-Policy | MISSING |
| Referrer-Policy | MISSING |
| Permissions-Policy | MISSING |

**File:** `app/server/index.ts` -- Uses `cors()` but no security middleware.

### 1.4 URL Structure (80/100) -- PASS

| Check | Status |
|-------|--------|
| Clean, readable URLs | PASS -- `/what-is-vantax`, `/companies`, `/jury` |
| No query parameters for routing | PASS |
| Trailing slash consistency | PASS -- No trailing slashes on inner pages |
| URL depth | PASS -- All pages at depth 1 |
| Hyphens as separators | PASS |

### 1.5 Mobile Readiness (75/100) -- PASS

| Check | Status |
|-------|--------|
| Viewport meta tag | PASS |
| Responsive CSS (Tailwind) | PASS |
| Mobile navigation (hamburger) | PASS |
| Touch targets | PARTIAL -- Some links may be too small |
| Responsive font sizing | PASS |

### 1.6 JavaScript Rendering (15/100) -- FAIL

| Check | Status |
|-------|--------|
| SSR/SSG | FAIL -- Pure CSR |
| Critical CSS inline | FAIL -- All CSS via JS modules |
| JS bundle optimization | FAIL -- Wildcard `lucide-react` imports |
| Code splitting / lazy routes | PARTIAL -- Vite chunks, but no lazy routes |
| Progressive enhancement | FAIL -- Blank without JS |

---

## 2. Content Quality (68/100)

### 2.1 Page-by-Page Content Depth

| Page | Word Count | Min Recommended | Status |
|------|-----------|-----------------|--------|
| `/` (Landing) | ~700-800 | 500 (landing) | PASS |
| `/what-is-vantax` | ~1,200-1,400 | 1,500 (informational) | BORDERLINE |
| `/companies` | ~800-900 | 800 (service) | PASS |
| `/jury` | ~550-650 | 800 (service) | **FAIL -- Thin** |

### 2.2 E-E-A-T Assessment

| Signal | Score | Details |
|--------|-------|---------|
| **Experience** | 38/100 | No founder story, no testimonials, no case studies, no first-person voice |
| **Expertise** | 72/100 | Good domain knowledge, specific statistics, detailed rubric. But stats lack source links in rendered HTML |
| **Authoritativeness** | 35/100 | No press mentions, no partner logos, no social media links, no external validation |
| **Trustworthiness** | 55/100 | Transparent pricing and rubric. Missing: privacy policy, ToS, refund policy, data handling disclosure |
| **E-E-A-T Composite** | **51/100** | |

### 2.3 Strengths

- Clear, specific value proposition ("3 Challenges. 2 Hours Each.")
- Concrete statistics with named sources in content docs (TestGorilla 2025, Stack Overflow 2025, Stanford 2025)
- Transparent evaluation rubric with percentage weights
- Detailed timeline with specific dates
- Well-calibrated readability per audience segment
- FAQ with JSON-LD structured data

### 2.4 Weaknesses

- No testimonials, case studies, or social proof
- Statistics lack inline source links in rendered HTML
- No author bylines or team page
- No privacy policy or terms of service
- Jury page is too thin (~600 words)
- Rubric table duplicated identically across 3 pages
- Forward-looking claims ("Top 100 VantaX Performers list") with no track record

### 2.5 AI Citation Readiness (58/100)

**Quotable facts present:**
- "1.5 million engineering graduates per year in India"
- "83% got no offer in 2024"
- "85% of employers globally now use skills-based hiring"
- "84% of developers now use AI tools daily"
- 7-row comparison table (VantaX vs Hackathons)
- 5-criteria evaluation rubric with weights

**Barriers:** SPA rendering (AI crawlers may see empty page), no source hyperlinks, content spread across JS components.

---

## 3. On-Page SEO (70/100)

### 3.1 Title Tags

All 4 pages have unique, well-crafted titles under 60 characters (effective portion). However, they require JS execution to render.

### 3.2 Meta Descriptions

All 4 pages have unique descriptions under 160 characters. Same JS dependency applies.

### 3.3 Heading Structure

All headings (`<h1>`, `<h2>`, etc.) are rendered by React components. No headings in static HTML. Heading hierarchy within each page appears well-structured from source code review.

### 3.4 Internal Linking

| From | Links To |
|------|----------|
| Navbar | `/what-is-vantax`, `/companies`, `/jury`, `/#register` |
| Landing Hero | `/companies`, `/jury` |
| Landing WhatIsTeaser | `/what-is-vantax` |
| Footer | `/what-is-vantax`, `/companies`, `/jury` |
| Post-form confirmations | `/`, `/what-is-vantax` |

Internal linking is comprehensive and well-structured. Every page is reachable from every other page via navbar and footer.

---

## 4. Schema / Structured Data (75/100)

### 4.1 Current Implementation

| Schema Type | Location | JS Required? | Status |
|-------------|----------|-------------|--------|
| Organization | `index.html` (static) | No | PASS with issues |
| Event | `index.html` (static) | No | PASS with issues |
| WebSite | `index.html` (static) | No | PASS with issues |
| FAQPage | `FAQ.tsx` (dynamic) | Yes | FAIL (ineligible) |

### 4.2 Issues Found

| # | Severity | Schema | Issue |
|---|----------|--------|-------|
| 1 | HIGH | FAQPage | Restricted to government/healthcare sites since Aug 2023. Will not produce rich results. |
| 2 | MEDIUM | Organization | `logo` should be `ImageObject` with `url`, `width`, `height`, not a bare URL string |
| 3 | MEDIUM | Organization | `logo` points to VantaX logo but Organization is VantaHire |
| 4 | MEDIUM | Organization | Missing `sameAs` (social profiles) and `contactPoint` |
| 5 | MEDIUM | Event | `offers.price` is string `"199"` -- should be number `199` |
| 6 | MEDIUM | Event | Missing `offers.validFrom` date |
| 7 | LOW | Event | Dates lack time + timezone (recommend `2026-04-25T00:00:00+05:30`) |
| 8 | LOW | Event | `image` is a logo, not an event banner. Google prefers >= 720px representative images |
| 9 | LOW | WebSite | Missing `publisher` and `inLanguage` |

### 4.3 Missing Schema Opportunities

1. **BreadcrumbList** (HIGH priority) -- Easy win for breadcrumb rich results on all 4 pages
2. **WebPage per page** (MEDIUM) -- Page-level schema for `/companies`, `/jury`, `/what-is-vantax`
3. **Service schema** (MEDIUM) -- For the Company page's service offering
4. **`@id` references** (LOW) -- Link Organization entity across blocks to avoid duplication

---

## 5. Performance / Core Web Vitals (55/100)

### 5.1 LCP (Largest Contentful Paint) -- Risk: POOR (>4s likely)

- Hero heading is LCP element, rendered entirely by JavaScript
- Google Fonts: 6 weights of Outfit + 2 weights of Space Mono = render-blocking
- Wildcard `import * as Icons from 'lucide-react'` in 7 files defeats tree-shaking (~200KB+)
- Framer Motion adds ~30-50KB gzipped

### 5.2 INP (Interaction to Next Paint) -- Risk: NEEDS IMPROVEMENT

- `mousemove` listener in `PageLayout.tsx` updates state on every pixel of movement
- `scroll` listener also updates state continuously
- These compete with user interaction processing

### 5.3 CLS (Cumulative Layout Shift) -- Risk: NEEDS IMPROVEMENT

- All 3 `<img>` tags lack `width`/`height` attributes
- Google Fonts `display=swap` causes FOUT (text reflow on font load)

### 5.4 Bundle Size Concerns

| Source | Estimated Size (gzipped) |
|--------|--------------------------|
| React + ReactDOM | ~45KB |
| Framer Motion | ~30-50KB |
| Lucide React (wildcard) | ~150-200KB |
| React Router | ~15KB |
| react-helmet-async | ~5KB |
| App code | ~30-40KB |
| **Estimated total JS** | **~275-355KB** |

---

## 6. Images (60/100)

### 6.1 Inventory

Only 3 `<img>` elements on the entire site (all use `/brand/vantax-logo.png`):

| Location | File | Alt Text | Width/Height | Loading | Format |
|----------|------|----------|-------------|---------|--------|
| Navbar | `Navbar.tsx:32` | "VantaX" | MISSING | MISSING | PNG |
| Footer | `Footer.tsx:8` | "VantaX" | MISSING | MISSING | PNG |
| PoweredBy | `PoweredByVantaHire.tsx` | "VantaHire" | MISSING | MISSING | PNG |

### 6.2 Issues

- All images missing `width` and `height` (causes CLS)
- Navbar logo (above-fold) missing `fetchpriority="high"`
- Footer logo (below-fold) missing `loading="lazy"`
- PNG format instead of WebP/AVIF
- CSS references `noise-texture.png` that may not exist (404 risk)

### 6.3 Positive

- All 3 images have descriptive alt text
- Minimal image usage keeps page weight low (design relies on icons + text)

---

## 7. Sitemap (82/100)

### 7.1 Validation

| Check | Status |
|-------|--------|
| XML format | PASS |
| All routes covered | PASS (4/4) |
| URL consistency | PASS |
| Canonical alignment | PASS (at runtime) |
| robots.txt reference | PASS |

### 7.2 Issues

| Issue | Severity |
|-------|----------|
| All `lastmod` dates identical (2026-03-02) | LOW -- Google may ignore |
| `priority` and `changefreq` tags present | INFO -- Ignored by Google, add bloat |
| No catch-all 404 route in app | MEDIUM -- Soft 404 risk |

### 7.3 Recommended Clean Sitemap

Remove `changefreq` and `priority` (ignored by Google). Use real `lastmod` dates.

---

## 8. AI Search Readiness (58/100)

### 8.1 AI Crawler Access

| Crawler | Status |
|---------|--------|
| GPTBot | Allowed (no block in robots.txt) |
| ClaudeBot | Allowed |
| Google-Extended | Allowed |
| Bytespider | Allowed |
| PerplexityBot | Allowed |

**Decision needed:** Block AI training crawlers or allow for visibility?

### 8.2 Content Citability

**Strong signals:**
- Specific, quantified claims with named sources
- Structured comparison table
- Detailed evaluation rubric
- FAQ with clear Q&A format

**Weak signals:**
- SPA rendering means AI crawlers may see empty page
- No source hyperlinks in rendered HTML
- No `llms.txt` file
- No long-form content blocks (content is fragmented across components)

---

## Files Referenced

| File | Issues |
|------|--------|
| `app/index.html` | Hardcoded canonical, static meta only for homepage, Event schema price type |
| `app/src/main.tsx` | CSR-only rendering |
| `app/src/App.tsx` | No 404 catch-all route |
| `app/src/components/SEO.tsx` | Per-page SEO (good, but JS-dependent) |
| `app/src/components/layout/PageLayout.tsx` | Mouse/scroll listeners hurting INP |
| `app/src/components/layout/Navbar.tsx` | Missing aria-label on mobile toggle |
| `app/src/components/layout/Footer.tsx` | Minimal trust signals |
| `app/src/sections/landing/FAQ.tsx` | FAQPage schema (ineligible for rich results) |
| `app/src/index.css` | References possibly missing `noise-texture.png` |
| `app/server/index.ts` | No security headers |
| `app/public/robots.txt` | Missing `/api/` disallow |
| `app/public/sitemap.xml` | Unnecessary priority/changefreq tags |
| Multiple section files | Wildcard `lucide-react` imports (7 files) |
