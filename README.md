# DataTwin Website (Next.js)

Marketing site for DataTwin, migrated from static HTML to **Next.js 16 (App
Router, TypeScript)**. Styling is the original hand-written CSS in
`app/globals.css` — no Tailwind.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # production build
npm run start      # serve the build
```

Deploy to Vercel with zero configuration (connect the repo, it just works).

## Where things live

| Path | What |
|---|---|
| `app/layout.tsx` | root document, fonts (`next/font`), pre-paint theme script |
| `app/globals.css` | all site CSS — design tokens + every component |
| `app/(site)/` | the marketing pages and their shared header/drawer/footer shell |
| `components/` | `SiteHeader` / `SiteDrawer` / `SiteFooter` / `IconSprite`, plus the `*Scripts` client components carrying the ported interactivity |
| `public/datatwin-logo.png` | wordmark |

## Migration status & notes

See **`CLAUDE.md`** — it tracks which pages are ported, explains the
faithful-port approach (mechanical HTML→JSX, original vanilla JS moved into
`useEffect`), and lists what to refactor once the visual QA pass is signed off.

The original static site (`../DataTwin-Website`) is the reference for anything
not yet ported.
