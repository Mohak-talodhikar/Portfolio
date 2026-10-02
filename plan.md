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
| Motion | Typing line + fades + hovers only (~10%) |
| Routing | Hand-rolled (`src/router.tsx`), clean paths, hub home (BUILT) |
| Theming | Dual dark (default) + light, manual toggle, remembered (BUILT — see §9) |

## 2. Color tokens (`src/index.css`)

Researcher theme: Academic Professional & Scientific Authority. Midnight Scholar canvas with Royal Cobalt citation accent, paired with an Archival Manuscript Paper light mode with Oxford Blue ink (matching LaTeX `\definecolor{ResumeLink}{HTML}{1A3A8F}`).

| Token | Dark (Default: Midnight Scholar) | Light (Archival Paper Mode) | Role |
|---|---|---|---|
| `background` | `#0B0F19` (Midnight Scholar Navy) | `#F8FAFC` (Archival Manuscript Paper) | Page background canvas |
| `surface` | `#121826` (Academic Console Card) | `#FFFFFF` (Crisp White Card) | Card surfaces |
| `foreground` | `#F1F5F9` (Paper White) | `#0F172A` (Deep Sumi Navy Ink) | High-contrast body & headings |
| `muted` | `#8596B0` (Scholar Slate) | `#475569` (Academic Slate) | Secondary text & citations |
| `accent` | `#3B82F6` (Royal Cobalt / Citation Blue) | `#1D4ED8` (Oxford Academic Blue) | Interactive links, kickers, highlights |
| `accent-deep` | `#2563EB` (Deep Royal Blue) | `#1E40AF` (Deep Academic Navy) | Button hover states |
| `accent-ink` | `#FFFFFF` (Pure White) | `#FFFFFF` (Pure White) | Text on solid accent button fills |
| `border` | `#1E293B` (Slate Hairline) | `#CBD5E1` (Manuscript Rule) | Structural borders & card outlines |

Verified contrast: Dark foreground ~16.5:1, dark muted ~6.2:1, dark accent ~6.8:1. Light foreground ~17.5:1, light muted ~7.2:1, light accent ~6.5:1. Terminal maintains fixed dark chrome as an authentic developer artifact.

## 3. Type inventory (7 files, latin-only)

- `@fontsource/playfair-display`: latin 400, 600, 700
- `@fontsource/source-sans-3`: latin 400, 500, 600, 700
- `@fontsource/ibm-plex-mono`: latin 500 (typing line, terminal, mono kickers)

## 4. Buttons & links

- **Primary CTAs** (View Projects, Get in Touch, Download Resume):
  violet solid `rounded-md`, accent-ink text, hover `accent-deep`.
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
no light theme · no photo · fake career timeline stays out.
