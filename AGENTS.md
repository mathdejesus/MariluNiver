# MariluNiver
> Cartão de aniversário digital — single-file HTML app.
> Last updated: 2026-06-24

## Stack Context
HTML + Tailwind CSS (CDN) + Font Awesome (CDN) + vanilla JS — zero build step, static serve only.

## How to Read This File
Every agent reads this before working on repo. Defines rules, patterns, guardrails for this specific project.

## Code Style Rules
- **DO** keep everything in single `index.html` — no separate CSS/JS files
- **DO** use Tailwind utility classes for styling — custom CSS only when Tailwind can't express it
- **DO** keep JS vanilla — no frameworks, no npm, no modules
- **DO** use `pt-BR` for all user-facing text
- **DON'T** add build tools, bundlers, or package managers
- **DON'T** add external API calls — app is fully offline/static
- **DON'T** use `let`/`const` inside loops where `var` suffices — keep style consistent with existing code

## Architecture Guardrails
- Single-file architecture is intentional — resist splitting into multiple files
- CDN-only dependencies — no local node_modules, no local copies of Tailwind/FontAwesome
- Media files (`parabens.mp4`, `22ts.mp3`) must be served alongside `index.html` — no CDN for these
- Flip card interaction is core UX — changes must preserve the open/close flip animation
- Resize handler uses forced reflow trick (`display:none` → `offsetHeight`) — fragile, avoid if possible

## Responsive Design
- Tailwind breakpoints: `md:` (768px), `lg:` (1024px)
- Custom `@media` for small screens: `max-height: 600px`, `max-width: 640px`
- Card uses `max-width: 1200px` + `max-height: 800px` constraints
- Video uses `padding-bottom: 56.25%` for 16:9 ratio

## Testing Requirements
- No automated tests — verify manually in browser
- **Always test**: flip interaction, resize behavior, audio/video playback
- **Edge cases**: small screens (mobile), autoplay blocked by browser, video format fallback
- No CI/CD — changes verified locally before commit

## Security Rules
- Never hardcode secrets or API keys (none exist, keep it that way)
- No server-side code — no auth concerns, but no sensitive data either
- CDN URLs must use HTTPS
- `.env` files gitignored — keep it that way

## Agent-Specific Instructions

### Orchestrator
- This is a simple static app — scope changes carefully, don't over-engineer
- Any change to flip animation or audio/video playback needs browser testing confirmation

### Architect
- Single-file monolith is the architecture — don't propose splitting
- No state management needed — DOM is the state
- No data layer — all content is static HTML

### Developer
- Tailwind CSS via CDN — use utility classes, not custom CSS when possible
- JS vanilla only — no jQuery, no React, no build step
- Audio has `autoplay` with `.catch()` fallback — respect browser autoplay policy
- Resize handler is hacky (forced reflow) — minimize changes to it

### PR Reviewer
- Any change to `index.html` that breaks flip interaction = 🔴 Critical
- Any new CDN dependency = 🟡 Must justify why it's needed
- Media file changes = 🟡 Verify format compatibility (mp4/mp3)

### QA Agent
- Test flip open/close on desktop and mobile
- Test audio autoplay (may be blocked — verify fallback)
- Test video playback (verify `parabens.mp4` loads)
- Test resize behavior (card should reflow correctly)
- Test with network throttled (CDN loading)

## Skills Recomendadas
### Planejamento
- `brainstorming` — antes de modificar design ou adicionar interações
- `writing-plans` — planejar alterações

### Desenvolvimento
- `frontend-design` — criar/estilizar componentes (flip-card, animações)
- `web-design-guidelines` — revisar conformidade com guidelines web
- `webapp-testing` — testar interatividade (flip, resize)

### Depuração
- `systematic-debugging` — ao encontrar bugs (ex: reflow forçado no resize)

### Revisão
- `verification-before-completion` — verificar antes de finalizar

### Comunicação
- `caveman` — respostas ultra-compactas (economia de tokens)

## Fluxo Recomendado
1. `brainstorming` → entender o que melhorar
2. `writing-plans` → plano de ação
3. `frontend-design` → implementar com boas práticas de UI
4. `web-design-guidelines` → revisar acessibilidade
5. `verification-before-completion` → verificar antes de finalizar
