# MariluNiver

Cartão de aniversário digital interativo para Maria Luiza.

## Stack

- **HTML + CSS + JS** — zero build, zero frameworks
- **Tailwind CSS 3** (CDN) — utilitário
- **Font Awesome 6.4** (CDN) — ícones
- **Google Fonts** — Dancing Script + Inter

## Mídia

| Arquivo | Formato | Função |
|---------|---------|--------|
| `parabens.mp4` | video/mp4 | Vídeo de parabéns |
| `22ts.mp3` | audio/mpeg | Trilha sonora (22 — Taylor Swift) |

## Como usar

```
npx serve .
# ou
python3 -m http.server 8080
```

Abra no navegador. Clique no cartão para abrir.

## Deploy

https://marilu-niver.vercel.app/

## Testar

- Clique no cartão → flip abre com vídeo + áudio
- Botão "Fechar Cartão" → flip fecha, áudio pausa
- Redimensionar janela → layout reflow correto
- Teclado: Enter/Space abre o cartão
- Navegadores: Edge, Firefox, Chrome, mobile

## Estrutura

```
MariluNiver/
├── index.html       # App completo (single-file)
├── parabens.mp4     # Vídeo
├── 22ts.mp3         # Áudio
├── AGENTS.md        # Instruções para agentes
└── README.md        # Este arquivo
```
