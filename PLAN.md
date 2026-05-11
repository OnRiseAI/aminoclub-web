# Plan — aminoclub.com rebuild scaffold (`D:\Projects\aminoclub-web`)

## Context

A new client engagement around **aminoclub.com**. The client will be asking for copy, design, and new-section tweaks over time, but there is no source repo to work against — only the live site. Memory shows the user works remote-only via GitHub for existing projects, but this one needs a local scaffold built from scratch because we're rebuilding from the live site.

This plan covers **only the rebuild scaffold** — getting a tweakable, visually-faithful Next.js codebase stood up at `D:\Projects\aminoclub-web` so that future client tweaks have something to land on. No specific tweak brief exists yet; that becomes a follow-up plan once the client sends requests.

**Scope decisions confirmed with user:**
- Marketing site only — no commerce, no `/store`, no Medusa integration (live site uses Medusa.js; we're stubbing that out entirely for now)
- English-only routes — drop the live site's `/us/` locale prefix; revisit if client asks for multi-region later
- No rush — favor structural parity and clean foundations over speed

## Reference projects (reuse, don't reinvent)

Phase 1 exploration confirmed three sibling projects already on disk share the same stack (Next.js 16.2.6, React 19, Tailwind v4, TypeScript). Mirror their patterns:

- **`D:\Projects\pep_dash`** — closest reference; already built around the "Amino Club" brand layout
  - `src/app/globals.css` — Tailwind v4 `@theme` block with 9-step brand color scale (navy `#0a1424` → pale `#f5f7fa`)
  - `src/app/[locale]/layout.tsx` — Poppins (display) + Inter (sans) loaded via `next/font` with CSS variables
  - Skip the `[locale]/` segment and the i18n/Supabase/Stripe/Resend deps — not needed for a marketing rebuild
- **`D:\Projects\nordic-bio-web`** — header/footer/UI primitives boilerplate
  - `src/components/header.tsx`, `src/components/footer.tsx` — nav + multi-column footer
  - `src/components/ui/button.tsx`, `src/components/ui/accordion.tsx` — base primitives for CTAs and FAQ
  - `src/components/sections/faq.tsx` — FAQ accordion layout (homepage section 9 on live site)
- **`D:\Projects\aminozero-web`** — single-product section patterns if any of the inner pages need a focused product/compound layout
  - `components/sections/hero/hero.tsx` and `compound-profile.tsx` as references only

## Target structure

```
D:\Projects\aminoclub-web\
├── package.json                  # Next 16.2.6, React 19, Tailwind v4, TS — match sibling projects
├── next.config.ts
├── tsconfig.json
├── src/
│   ├── app/
│   │   ├── layout.tsx            # adapted from pep_dash (Poppins + Inter, no [locale])
│   │   ├── globals.css           # adapted from pep_dash @theme block, recolored to aminoclub palette
│   │   ├── page.tsx              # Homepage (11 sections — see below)
│   │   ├── research/page.tsx     # Research library landing
│   │   └── contact/page.tsx      # Contact + order tracking + FAQ
│   ├── components/
│   │   ├── site-header.tsx       # adapted from nordic-bio-web/src/components/header.tsx
│   │   ├── site-footer.tsx       # adapted from nordic-bio-web/src/components/footer.tsx
│   │   ├── ui/
│   │   │   ├── button.tsx        # copied from nordic-bio-web/src/components/ui/button.tsx
│   │   │   └── accordion.tsx     # copied from nordic-bio-web/src/components/ui/accordion.tsx
│   │   └── sections/
│   │       ├── hero.tsx
│   │       ├── guarantee.tsx
│   │       ├── researcher-verification.tsx
│   │       ├── benefits.tsx
│   │       ├── quality-verification.tsx
│   │       ├── product-showcase.tsx       # static stub data, no commerce
│   │       ├── why-choose-us.tsx
│   │       ├── faq.tsx                    # reuses ui/accordion
│   │       └── newsletter.tsx
│   └── lib/
│       ├── fonts.ts              # mirrors aminozero-web/lib/fonts.ts pattern
│       └── content.ts            # static mock product/FAQ/copy data
└── public/
    └── (logo + hero placeholders to be sourced or generated)
```

## Homepage section order (mirrors live site)

1. Header
2. Hero — verbatim copy from live: *"Premium research-grade peptides for optimal controlled studies and performance."* / sub: *"Third-party tested with Certificate of Analysis."* / CTA: "Shop & Join Community"
3. Amino Club Guarantee (3-card value prop)
4. Researcher Verification callout
5. Everything you need to succeed (3 benefit cards)
6. Quality Verification Breakdown (5 checks with icons)
7. Product Showcase + COA mention (static stub data)
8. Why choose Amino Club? (3 features)
9. FAQ Accordion (10+ items from live site)
10. Newsletter Subscription CTA
11. Footer

Routes `/research` and `/contact` get section-level scaffolds with placeholder copy pulled from live-site content — enough structure for the client to point at and request changes.

## Design direction — match the live site

The brief is **parity with aminoclub.com**, not reinterpretation. The live site has an intentional clinical/B2B-credible aesthetic that the client has already committed to. The rebuild mirrors it as closely as possible so future tweaks land on a familiar foundation rather than a redesign.

**Typography** (loaded via `next/font/google` in `src/lib/fonts.ts`):
- **Sans (display + body):** Inter — closest free match to the live site's clean modern sans. Used for everything: headlines, body, UI. Tight letterspacing on display sizes, normal on body. Single font family keeps it close to the live site's restrained, system-feel typography.
- No serif. No editorial drop-caps. No small-caps eyebrows. The live site doesn't do that and neither should we.

**Color palette** (in `globals.css` `@theme` block, replacing pep_dash's navy scale):
- `--background: #FFFFFF` — white, matching the live site's airy clinical feel
- `--foreground: #0F172A` — dark charcoal for high-contrast body text (slate-900-ish)
- `--muted-foreground: #475569` — secondary text, captions
- `--border: #E2E8F0` — light dividers and card outlines
- `--primary: #0EA5E9` — sky/teal blue for CTAs, links, accent icons (matches the live site's blue/teal trust accent)
- `--primary-foreground: #FFFFFF`
- `--success: #16A34A` — green checkmarks on trust/quality badges
- Light, predominantly white pages with blue accents on CTAs/icons and green checkmarks on quality badges — the exact pattern visible on aminoclub.com.

**Component patterns** (mirroring the live site):
- Rounded card containers with subtle borders and soft shadows for the Guarantee, Quality Verification, and Benefits sections
- Icon-led trust badges (shields, test tubes, delivery boxes, checkmarks) using `lucide-react` (already a dep in pep_dash) — pick icons that approximate the live site's set
- Centered or near-centered hero with rotating product carousel slot (static placeholder until imagery is sourced)
- FAQ accordion with clean expand/collapse, no exotic easing
- Multi-column footer matching the live site's link grouping (Research Library, COA, FAQ, Shipping, Returns, Privacy, Terms, Disclaimer)

**Motion:**
- Standard, restrained micro-interactions only — hover states on buttons and cards, default-eased accordion expand. Nothing distinctive or signature. The live site is restrained and the rebuild matches.

**Spatial composition:**
- Centered max-width container (~`1200px`) with consistent section padding
- Each homepage section is its own clearly delineated block — card grids, badge rows, full-width CTAs — same pacing as the live site, not editorial marginalia

If, after the scaffold ships, the client requests a more distinctive aesthetic, that becomes a separate follow-up plan. Until then: faithful to what's already there.

## Verification

After implementation, verify end-to-end before declaring the scaffold done:
1. `cd D:\Projects\aminoclub-web && npm install`
2. `npm run dev` — port should not collide with sibling projects (3007 is taken by nordic-bio-web per memory; use a free port like 3010)
3. Visit `http://localhost:3010/` and confirm: all 11 sections render in order, header/footer present, fonts loaded (Poppins headings, Inter body), no console errors
4. Visit `/research` and `/contact` — both render with scaffold content, no 404
5. `npm run build` — production build succeeds with no type errors
6. Side-by-side visual check against https://www.aminoclub.com/ — the rebuild should read as **visually faithful** to the live site: same white background, same blue/teal accent on CTAs and icons, same green-checkmark trust badges, same card-based section layouts, same restrained sans-serif typography, same section order and pacing. Pixel-perfect is not required, but a casual viewer should recognize it as the same brand and feel.

## Out of scope (deferred)

- Real Medusa commerce wiring, cart, checkout, `/store` route
- `/us/` locale prefix and next-intl setup
- Real product imagery (placeholders/stubs for now; replace when client provides assets or we generate them)
- Specific client tweaks — those become a follow-up plan once the brief lands
- GitHub repo creation / Vercel deployment — local-only until client signs off on the scaffold
