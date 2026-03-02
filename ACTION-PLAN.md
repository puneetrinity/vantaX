# VantaX SEO Action Plan

**Date:** 2026-03-02
**Current Score:** 63/100
**Target Score:** 85+/100

---

## CRITICAL -- Fix Immediately (Blocks indexing or causes penalties)

### 1. Implement SSR or Pre-rendering
**Impact:** Fixes crawlability, indexability, social sharing, AI citation
**Effort:** High (2-3 days)
**Files:** `app/src/main.tsx`, `app/vite.config.ts`, `app/server/index.ts`

The #1 blocker. Without this, crawlers see an empty page. Options:
- **Option A (Recommended):** `vite-ssg` -- Static Site Generation at build time for all 4 routes. Best for a small, mostly-static site.
- **Option B:** `vite-plugin-ssr` / Vike -- Full SSR with streaming. More complex but future-proof.
- **Option C (Stopgap):** Prerender.io or similar service -- Serves pre-rendered HTML to bot user agents. Quickest to implement.

### 2. Remove Hardcoded Canonical from index.html
**Impact:** Prevents de-indexation of 3 pages
**Effort:** Trivial (1 minute)
**File:** `app/index.html` line 11

Delete this line:
```html
<link rel="canonical" href="https://vantax.vantahire.com/" />
```
The `SEO.tsx` component already sets per-page canonicals via react-helmet-async.

### 3. Add 404 Catch-All Route
**Impact:** Prevents soft 404 indexing
**Effort:** Low (30 minutes)
**File:** `app/src/App.tsx`

Add inside `<Routes>`:
```tsx
<Route path="*" element={<NotFoundPage />} />
```
Create a simple `NotFoundPage` component. With SSR, ensure the server returns HTTP 404 status.

### 4. Add Privacy Policy and Terms of Service Pages
**Impact:** Critical Trustworthiness signal; legally required for PII collection + payments
**Effort:** Medium (1-2 days for content)
**Files:** New pages + route additions

The site collects: names, emails, phones, LinkedIn URLs, resumes, company problem statements. Processes payments via Cashfree. Must have:
- Privacy policy (data collection, usage, retention, rights)
- Terms of service / terms of participation
- Refund policy for the Rs.199 fee

---

## HIGH -- Significantly impacts rankings (Fix within 1 week)

### 5. Add Security Headers
**Impact:** Security posture, browser warnings, Lighthouse score
**Effort:** Low (30 minutes)
**File:** `app/server/index.ts`

Install and configure `helmet`:
```bash
npm install helmet
```
```ts
import helmet from 'helmet';
app.use(helmet());
```

### 6. Replace Wildcard Lucide-React Imports
**Impact:** Reduces JS bundle by ~150-200KB (improves LCP)
**Effort:** Medium (1-2 hours)
**Files:** 7 section components

Replace in each file:
```tsx
// Before (defeats tree-shaking):
import * as Icons from 'lucide-react';
const Icon = (Icons as any)[card.icon];

// After:
import { Building2, Layers, Bot, Target } from 'lucide-react';
const iconMap = { Building2, Layers, Bot, Target };
const Icon = iconMap[card.icon as keyof typeof iconMap];
```

Files to update:
- `app/src/sections/company/WhatYouGain.tsx`
- `app/src/sections/landing/WhatIs.tsx`
- `app/src/sections/landing/WhyCompanies.tsx`
- `app/src/sections/landing/WhyVantaXExists.tsx`
- `app/src/sections/landing/SubmissionFormat.tsx`
- `app/src/sections/landing/Integrity.tsx`
- `app/src/pages/WhatIsVantaXPage.tsx`

### 7. Optimize Font Loading
**Impact:** Improves LCP by ~0.5-1s
**Effort:** Medium (1 hour)
**File:** `app/index.html`

Options:
- **Best:** Self-host via `@fontsource/outfit` and `@fontsource/space-mono` npm packages
- **Good:** Reduce to 3-4 weights (400, 600, 700 for Outfit; 400 for Space Mono)
- **Minimum:** Add `media="print" onload="this.media='all'"` pattern to font stylesheet link

### 8. Add BreadcrumbList Schema to All Pages
**Impact:** Enables breadcrumb rich results in Google Search
**Effort:** Low (1 hour)
**File:** `app/src/components/SEO.tsx`

Extend the SEO component to accept a `breadcrumbs` prop and inject BreadcrumbList JSON-LD via react-helmet-async. Apply to all 4 pages.

### 9. Fix Event Schema Issues
**Impact:** Improves Event rich result eligibility
**Effort:** Trivial (15 minutes)
**File:** `app/index.html`

- Change `"price": "199"` to `"price": 199` (remove quotes)
- Add `"validFrom": "2026-03-01"` to offers
- Change dates to include timezone: `"startDate": "2026-04-25T00:00:00+05:30"`
- Add a proper event banner image (not the logo)

### 10. Add Source Links to Statistics
**Impact:** E-E-A-T Expertise signal, AI citation confidence
**Effort:** Medium (1-2 hours)
**Files:** Multiple section components

Add hyperlinks to primary sources for all cited statistics:
- "85% of employers" -> TestGorilla 2025 report
- "84% of developers" -> Stack Overflow 2025 survey
- "25% YoY decline" -> Stanford 2025 report
- "83% got no offer" -> Unstop Talent Report
- "35% better retention" -> Burning Glass Institute

---

## MEDIUM -- Optimization opportunity (Fix within 1 month)

### 11. Add Founder/Team Section
**Impact:** E-E-A-T Experience and Authoritativeness
**Effort:** Medium (content creation)

Even a brief section with names, photos, LinkedIn links, and relevant experience would substantially boost trust signals. Could be added to the footer or as a separate `/about` page.

### 12. Expand Jury Page Content
**Impact:** Fixes thin content issue
**Effort:** Medium (content creation)
**File:** Jury section components

Current: ~600 words. Target: 800+ words. Add:
- Jury member selection criteria
- Profiles of confirmed/invited jury members
- Data privacy assurance for jury evaluators
- Jury-specific FAQ

### 13. Block API Routes in robots.txt
**Impact:** Prevents API endpoint indexing
**Effort:** Trivial (1 minute)
**File:** `app/public/robots.txt`

Add:
```
Disallow: /api/
```

### 14. Add Image Optimization Attributes
**Impact:** Reduces CLS
**Effort:** Low (15 minutes)
**Files:** `Navbar.tsx`, `Footer.tsx`, `PoweredByVantaHire.tsx`

Add to each `<img>`:
- `width` and `height` attributes
- `fetchpriority="high"` on navbar logo (above-fold)
- `loading="lazy"` on footer logo (below-fold)
- Consider converting PNG to WebP

### 15. Throttle Mouse/Scroll Handlers
**Impact:** Improves INP
**Effort:** Low (30 minutes)
**File:** `app/src/components/layout/PageLayout.tsx`

Wrap the `mousemove` handler in `requestAnimationFrame` or a 50ms throttle. Consider using CSS transforms instead of state-driven re-renders.

### 16. Fix Organization Schema
**Impact:** Better rich result eligibility
**Effort:** Low (15 minutes)
**File:** `app/index.html`

- Change `logo` from string URL to `ImageObject` with `url`, `width`, `height`
- Add `sameAs` array with social profile URLs
- Add `contactPoint` with `hello@vantahire.com`
- Add `@id: "https://vantahire.com/#organization"` for cross-block linking

### 17. Differentiate Rubric Across Pages
**Impact:** Reduces duplicate content
**Effort:** Low (1 hour)
**Files:** Rubric/EvalFramework/EvalCriteria components

Same `RUBRIC_DATA` renders identically on 3 pages. Add page-specific wrapper text:
- Candidates: "How you'll be scored"
- Companies: "How we score your candidates"
- Jury: "What you'll evaluate against"

### 18. Add WebPage Schema Per Page
**Impact:** Page-level search signals
**Effort:** Low (30 minutes)
**File:** `app/src/components/SEO.tsx`

Extend SEO component to inject `WebPage` JSON-LD with `name`, `description`, `url`, and `isPartOf` (referencing the WebSite).

---

## LOW -- Nice to have (Backlog)

### 19. Clean Up Sitemap
- Remove `changefreq` and `priority` tags (ignored by Google)
- Use real `lastmod` dates

### 20. Add Accessibility Attributes
- `aria-label="Toggle navigation menu"` on mobile menu button in `Navbar.tsx`
- `aria-expanded` state on mobile toggle

### 21. Remove/Annotate FAQPage Schema
- FAQPage rich results restricted to government/healthcare since Aug 2023
- Keep for semantic value or remove to reduce DOM weight

### 22. Add Event Banner Image
- Replace logo with a proper event banner (>= 720px wide) in Event schema
- Create a dedicated OG image for social sharing

### 23. Verify noise-texture.png
- `app/src/index.css` references `/noise-texture.png`
- Verify it exists in `public/` or remove the CSS rule

### 24. Consider AI Crawler Policy
- Decide whether to block AI training crawlers (GPTBot, CCBot, ClaudeBot)
- Or allow for AI search visibility
- Add `llms.txt` if opting for AI visibility

### 25. Add Social Media Links
- LinkedIn, Twitter/X for VantaHire
- Include in footer and Organization schema `sameAs`

---

## Implementation Priority Matrix

```
              HIGH IMPACT
                  |
    [1-SSR]  [2-Canon]  [3-404]
                  |
    [6-Icons] [7-Fonts]  [5-Security]
                  |
LOW EFFORT ------+------ HIGH EFFORT
                  |
   [13-API]  [9-Schema] [4-Privacy]
                  |
   [14-Imgs] [15-INP]  [11-Team]
                  |
              LOW IMPACT
```

## Estimated Score After Fixes

| Priority | Items | Score Gain |
|----------|-------|-----------|
| Critical (1-4) | SSR, canonical, 404, legal pages | +15 points |
| High (5-10) | Security, bundle, fonts, schema, sources | +10 points |
| Medium (11-18) | Content, images, throttle, schema | +5 points |
| **Total projected** | | **~93/100** |
