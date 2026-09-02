<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# DataTwin website — Next.js

The DataTwin marketing site, being migrated from hand-built static HTML
(repo `DataTwin-Website`) to Next.js so it can live alongside the team's
Next.js AI-chat work.

## Status

| Page | Static source | Ported |
|------|---------------|--------|
| Home `/` | `index.html` | ✅ first pass |
| Platform overview `/platform-overview` | `platform-overview.html` | ⬜ (large: pipeline / AI-native / CTA) |
| Playbook `/playbook` | `playbook.html` | ⬜ |
| GST landing `/gst-discovery` | `gst-discovery/index.html` | ⬜ (own visual world — separate fonts/tokens) |
| GST chat `/gst-discovery/chat` | `gst-discovery/chat-interface.html` | ⬜ (static mock — devs replace with the real AI chat) |

The static source repo is the reference for anything not yet ported.

## Stack

- Next.js 16, App Router, TypeScript.
- **Styling is the original hand-written CSS, not Tailwind.** It's all in
  `app/globals.css` (design tokens + every component's rules, deduped from the
  static pages). `next/font` loads the fonts and exposes them to the CSS as
  `--font-body` / `--font-mono`.
- Theme: `data-theme="light"` on `<html>` (absent = dark). Toggled by the header
  button, persisted to `localStorage['dt-theme']`. A tiny inline script in the
  root layout sets it before first paint.

## Structure

```
app/
  layout.tsx          root: <html>/<body>, fonts, theme-init script, metadata
  globals.css         ALL site CSS
  (site)/
    layout.tsx        IconSprite + SiteHeader + SiteDrawer + <main id="top"> + SiteFooter + ChromeScripts
    page.tsx          home
components/
  IconSprite.tsx      <symbol> sprite, injected as-is. Icons: <svg className="stroke"><use href="#ic-x"/></svg>
  SiteHeader/Drawer/Footer.tsx   server components, static markup
  ChromeScripts.tsx   'use client' — theme toggle, mobile drawer, desktop mega-menu
  HomeScripts.tsx     'use client' — home only: hero composer, section reveal, timeline
public/datatwin-logo.png   the wordmark (was base64-inlined in the static files)
```

## Porting approach — read before refactoring

This is a **faithful port**: parity over idiom, so the design team can sign off
visually before the code is made idiomatic.

- Markup converted HTML→JSX mechanically (className, camelCased SVG/HTML attrs,
  `style` strings → objects, internal links → Next routes). Text is verbatim.
- The original `<script>` IIFEs were moved into `useEffect` in the `*Scripts.tsx`
  client components, **kept close to the original vanilla JS** — they still
  attach by id/class to server-rendered markup, each guarded by a module-level
  `wired` flag so it runs once.

**Refactor targets once visual QA passes:** `*Scripts.tsx` → real `useState`,
no `getElementById`, folded into their components · `<a href="/…">` → `next/link`
· `<img>` → `next/image` · extract shared primitives (Button, Eyebrow,
SectionHead, Card).

## Dev

```bash
npm install
npm run dev            # http://localhost:3000
npm run build && npm run start
```

Deploys to Vercel with zero config.
