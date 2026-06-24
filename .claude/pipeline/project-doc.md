# Project Documentation
> Generated: 2026-06-24 | Mode: FULL

## Tech Stack
- Runtime: Browser (static HTML)
- Language: HTML, CSS, JavaScript (vanilla)
- Framework: None — single-file app
- Libraries: Tailwind CSS 3.x (CDN), Font Awesome 6.4 (CDN)
- Fonts: Dancing Script (cursive), Inter (sans-serif) — Google Fonts
- Database: None
- Build: None — zero build step

## Dependencies
- **Runtime**: Tailwind CSS (CDN `cdn.tailwindcss.com`), Font Awesome 6.4 (CDN `cdnjs.cloudflare.com`)
- **Fonts**: Google Fonts (`fonts.googleapis.com`)
- **Media**: `parabens.mp4` (video/mp4), `22ts.mp3` (audio/mpeg), `musica-parabens.mp4` (audio/mp4 fallback)
- **Dev**: None

## Architecture Pattern
Single-file monolith — all HTML, CSS, and JS in one `index.html`. No modules, no imports, no bundling. Static assets served alongside.

## Folder Structure
```
MariluNiver/
├── index.html          # App entry point (406 lines)
├── parabens.mp4        # Birthday video
├── 22ts.mp3            # Audio track (Taylor Swift - 22)
├── .gitignore          # Standard ignores (env, node_modules, OS)
├── AGENTS.md           # Agent instructions (improved)
└── README.md           # Project title only
```

## Code Style Conventions
- HTML lang: `pt-BR`
- Tailwind config inline via `<script>` block
- Custom CSS in `<style>` block (no external CSS files)
- CSS classes: kebab-case (`flip-card`, `card-scrollable`)
- JS: vanilla, no framework, no modules, DOMContentLoaded pattern
- IDs: camelCase (`birthdayCard`, `closeButton`)
- Selectors: mix of ID and class-based

## Modularity Practices
None — all code in single file. CSS organized by concern: base styles, animations, responsive media queries, component-specific styles. JS organized as: DOMContentLoaded wrapper, event listeners for flip/close, resize handler.

## Data Architecture
No data layer. All content is static HTML. No API calls, no localStorage, no state management.

## Cross-Cutting Concerns
- **Responsive**: Tailwind breakpoints (`md:`, `lg:`) + custom `@media` for small screens (`max-height: 600px`, `max-width: 640px`)
- **Audio**: Autoplay with `.catch()` fallback for browser policy
- **Video**: 16:9 container via padding-bottom trick, SVG poster fallback
- **Resize**: Manual reflow trigger (`display:none` → offsetHeight → `display:block`)
- **Accessibility**: None implemented — no ARIA, no alt text, no keyboard nav

## Service Communication
None — fully client-side static app.

## Test Coverage
- Overall coverage: 0%
- Testing framework: None
- Key untested areas: Everything
- Test patterns: Manual browser testing only

## Entry Points
- `index.html` — sole entry point, open directly or via static server
- No environment config, no `.env`, no server-side

## Last Scanned
2026-06-24T00:00:00Z
