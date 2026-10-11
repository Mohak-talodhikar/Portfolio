# plan.md — Portfolio build blueprint

> Reference doc only. No build step reads this file.
> Status: multi-page Dark Lab violet + dual theme is live (built from
> this file). Single-page history retained below for reference.

## 1. Locked decisions

| Axis | Choice |
|---|---|
| Fonts | Playfair Display (display) + Source Sans 3 (body) + IBM Plex Mono (code/labels only) |
| Layout | Stacked sections; project case-study panels (Problem / Role / Method / Outcomes) |
| Color | Signal Violet on near-black lab canvas |
| Content | Existing `data.ts` + resume facts; no invented metrics |
| Motion | Typing lines + fades + hovers + terminal type-out + stat count-ups + row cascades + copy feedback (~30%, all one-shot and reduced-motion gated) |
| Routing | Hand-rolled (`src/router.tsx`), clean paths, hub home (BUILT) |
| Theming | Dual dark (default) + light, manual toggle, remembered (BUILT — see §9) |

## 2. Color tokens (`src/index.css`)

Light professional, three hues with fixed jobs: blue = action/nav,
gold = proof/evidence, green = live/success. Dark partner keeps the
same three jobs. Rounded corners + transitions retained.

| Token | Light (Default: Paper) | Dark (Abyss Partner) | Role |
|---|---|---|---|
| `background` | `#F7F5F0` (Warm Paper) | `#050B14` (Deep Abyss) | Page background canvas |
| `surface` | `#FFFFFF` (Cards) | `#101823` (Console Charcoal) | Card surfaces |
| `foreground` | `#16181D` (Ink) | `#E8EEF2` (Chalk White) | High-contrast body & headings |
| `muted` | `#5C6470` | `#94A3B8` | Secondary text & citations |
| `accent` | `#1D4ED8` (Action Blue) | `#5B9CFF` (Bright Action Blue) | Interactive links, kickers, highlights |
| `proof` | `#15803D` (Growth Green) | `#34D399` (Mint Success) | Proof only: thesis mark, strip numerals, stats, outcomes, quote mark |
| `status` | `#15803D` (Live Green) | `#34D399` (Mint Success) | Availability + Open-to-work ONLY |
| `accent-deep` | `#1E40AF` | `#7DB3FF` | Button hover states |
| `accent-ink` | `#FFFFFF` (Pure White) | `#0A1530` (Dark Ink) | Text on solid accent button fills |
| `border` | `#E2DCCB` (Warm Hairline) | `#1E2A24` (Dark Outline) | Structural borders & card outlines |

Verified contrast (measured live): light blue 6.15:1, light gold
5.44:1, dark blue 7.18:1, dark gold 11.77:1. Terminal maintains fixed
dark chrome as an authentic developer artifact. Hero texture is thin
grid lines (pure background paint, zero animation).

## 3. Type inventory (7 files, latin-only)

- `@fontsource/playfair-display`: latin 400, 600, 700
- `@fontsource/source-sans-3`: latin 400, 500, 600, 700
- `@fontsource/ibm-plex-mono`: latin 500 (typing line, terminal, mono kickers)

## 4. Buttons & links

- **Primary CTAs** (View Projects, Get in Touch, Download Resume):
  green solid `rounded-md`, accent-ink text, hover `accent-deep`.
- **Repo links**: mono bracket style `[source]` in accent, underline on
  hover, `aria-label` naming the repo. Project title links stay as the
  second path (intentional redundancy for skimmers).
- **Nav Resume item**: plain nav link, no button chrome.
- No "Live Demo" links anywhere (nothing deployed to point at).

## 5. Current single-page structure

Max-width centered column (`max-w-5xl`), left-aligned content.
Hero (badge, serif name, typing roles, tagline, proofs, pills, dual
CTAs, 4 socials, static terminal) · Projects (accent-edged RAG card +
2 uniform cards, 4-row panels, chips, repo links) · Skills (dotted
groups + pull-quote) · About (paragraphs, facts, stats) · Education
(degree card) · Contact (mailto + links) · Footer (nav, socials,
back-to-top). Numbered mono kickers `01`–`05`.

## 6. Multi-page build (BUILT — was approved unbuilt)

### Route map (Education removed — lives in resume.pdf)

| Path | Content |
|---|---|
| `/` | Hub (slim): badge, name, typing roles, tagline, 3 buttons, stats strip, ONE featured dossier + "view all work", compact contact band |
| `/about` | Paragraphs, facts, stats |
| `/projects` | All 3 dossiers, unchanged |
| `/skills` | Groups + specialist note |
| `/contact` | Mailto button, links, availability, "what to include" list, pre-filled subject |
| unknown | On-brand 404 + home link |

Removals: no `/education` route/nav/entry — delete `sections/Education.tsx`,
the `education` export + nav entry from `data.ts`. Kickers renumber to
`01 · Background`, `02 · Selected Work`, `03 · Capabilities`,
`04 · Get In Touch`.

### Journey logic (own style; ideas only from reference)

Every page ends with a next-step link, never a dead end: Hub →
Projects; Projects → Contact; About → Projects; Skills → Contact.
Shared `ContactBand` (mailto + one line to `/contact`) on Hub + all
four subpages. Mobile menu mirrors journey order.

### Router behaviors

Scroll-to-top on change (reduced-motion aware) · per-route title +
meta · focus to page heading on navigation · `aria-current` by exact
path (`useActiveSection.ts` deleted). SPA fallback rewrite in
`vercel.json` (filesystem first). Sitemap: 5 URLs. Hub teasers reuse
`data.ts` — no new copy without approval.

### Reference idea ledger (friend's site → verdict)

TAKEN (logic only): hub structure · contact-always-nearby · next-step
links · numbered case format · stats band (honest numbers) ·
categorized skills (no proficiency badges).
SKIPPED: boot animation · marquee · count-up stats · telemetry +
privacy page · screenshots · live demos · proficiency badges ·
Drive resume · P99/deploy/Terraform claims (teammate's work, never ours).

### Verification (same bar — all passing)

Build green · budgets held (JS 224.5KB ≤230KB, CSS 25.5KB ≤30KB) ·
per-route rendered-DOM proof passed for all 5 URLs + 404 at 1440px
AND 360px (titles, H1s, canonicals correct, 0px overflow everywhere) ·
light theme verified via seeded storage (class, color-scheme,
theme-color, ivory body) · detector clean.
Grep-check: no `#education` references, no `Education` imports remain.

## 7. Budgets (verified multi-page build)

JS 224.5KB · CSS 25.5KB · fonts 7 woff2 · zero images · zero external
requests · zero animation loops · 51 packages · zero new dependencies
(router is hand-rolled).

## 9. Theming (BUILT — was missing from this file)

No OS sniffing: brand default dark, manual toggle, remembered choice.

| Token | Dark (Default: Midnight Scholar) | Light (Archival Paper Mode) |
|---|---|---|
| canvas | `#0B0F19` | `#F8FAFC` |
| surface | `#121826` | `#FFFFFF` |
| text | `#F1F5F9` | `#0F172A` |
| muted | `#8596B0` | `#475569` |
| accent (text/links) | `#3B82F6` | `#1D4ED8` (deepened for AA) |
| accent fills | cobalt + white ink | cobalt + white ink |
| borders | `#1E293B` | `#CBD5E1` |

Implementation: `src/theme.tsx` (ThemeContext, localStorage `mt-theme`),
pre-paint init script in `index.html` (zero flash), header toggle
(sun/moon, announces target theme), `theme-color` meta synced per
theme. Terminal keeps fixed dark chrome in both themes as an authentic code artifact.
Verified: zero hard-coded theme colors in `src/`, so all components instantly re-theme seamlessly.

## 8. Standing non-goals

No invented metrics · no WebGL/canvas/rAF libs · no third font family ·
no photo · fake career timeline stays out.

## 10. Distill pass (current — supersedes older motion/label notes)

Theme/tokens unchanged (paper `#F7F5F0` ↔ abyss `#050B14`, blue=action,
green=proof). What changed:

- **Eyebrow policy:** `.small-caps` is a *data label* only (stat/fact
  `dt`s, category, panel titles, legend, copyright, 404) — never above
  page headings. Chapter I/II/III, "Next chapter", "Featured work"
  removed. No middle-dot meta strings; availability is "Open to work".
- **Case panels:** unnumbered (icon + title); Problem/Role/Method/
  Outcomes is a fixed structure, not a sequence.
- **Motion (~30%):** ONE orchestrated hero entrance (pure-CSS
  `hero-in` stagger: status→name→typed line→thesis→stats→CTAs→socials,
  terminal fades in at 200ms and types 9 lines at 140ms/line as the
  finale — final comment in proof green). Below-fold sections: uniform
  0.4s fade, no stagger, no row cascades. Kept: typing roles + caret,
  About stat count-up, copy-pop, scroll hairline, card hovers
  (border/color only — no translate). All reduced-motion gated.
- **Removed:** `.hero-glow` radial wash; hero grid now theme-aware
  (ink 5% on paper, chalk 5% on abyss). Hub featured gained a `[source]`
  GitHub link (no live demos exist — nothing deployed).
- **Added (all one-shot, CSS-first, reduced-motion gated, verified):**
  route-change `page-in` fade (keyed remount in App) · `.mark`
  highlighter sweep (background-size 0→100%, 0.5s delay) · CTA arrow
  nudges (`group-hover:translate-x-0.5`) · mobile `menu-in` slide ·
  copy `check-in` scale-pop · terminal green block cursor
  (`.term-caret`, appears after typing) · tech-chip + social-icon
  hover lifts.
- **Skills (redesigned):** `skillGroups` (Proficient/Familiar) replaced
  by `skillCategories` — Generative AI & RAG · Programming & Backend ·
  Cloud & Deployment · Tools & Frameworks (AI-first; no empty 5th
  bucket). 13 real skills (LangChain added from proofPoints), chips
  with project evidence link to `/projects#dossier-N` (router is now
  hash-aware: strips hash for state, scrolls to target); Docker,
  Git & GitHub, n8n stay unlinked — no fictional links. Specialist
  blockquote kept. Dead `techPills` export removed.
- **Budgets (verified):** JS 231.45KB · CSS 29.26KB · zero new deps.
  DOM-verified: all 8 effects animate, replay on navigation, and
  disable under reduced-motion; 0px mobile overflow on all 5 routes.
