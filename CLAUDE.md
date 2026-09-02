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
| Platform overview `/platform-overview` | `platform-overview.html` | ✅ first pass (pipeline / AI-native / CTA) |
| Playbook `/playbook` | `playbook.html` | ✅ first pass (internal reference — video / value / engine / integrations / trusted) |
| GST landing `/gst-discovery` | `gst-discovery/index.html` | ✅ first pass (own visual world — separate root layout, fonts, CSS) |
| GST chat `/gst-discovery/chat` | `gst-discovery/chat-interface.html` | ✅ first pass — **static mock**, whole conversation built at runtime; dev handoff is to replace it with the real AI chat |

The static source repo is the reference for anything not yet ported.

## Stack

- Next.js 16, App Router, TypeScript.
- **Two root layouts** (no top-level `app/layout.tsx`): `app/(site)/` is the
  main marketing site, `app/(gst)/` is the GST discovery section — its own
  `<html>`/`<body>`, its own fonts (Plus Jakarta Sans) and its own stylesheets,
  none of which touch the main site. `/` lives in `(site)`. Navigating between
  the two is a full page load, which is what keeps the stylesheets (each defines
  `.hero`, `.btn`, `:root` tokens, …) apart.
- **Styling is the original hand-written CSS, not Tailwind.** The main site's is
  all in `app/globals.css` (design tokens + every component's rules, folded in
  one ported page at a time — so far `index.html` plus the `.po-*` / `.eng-*` /
  `.pw-*` / `.ain-*` / `.axp-*` families from `platform-overview.html`, with
  each page's new rules diffed in and duplicates dropped. `playbook.html`
  reused only existing rules, so it added nothing). `next/font` loads the fonts
  and exposes them to the CSS as `--font-body` / `--font-mono` (main site) and
  `--gst-sans` / `--gst-mono` (GST, wired into that file's `--sans`/`--serif`/
  `--mono` tokens).
- Theme: `data-theme="light"` on `<html>` (absent = dark). Toggled by the header
  button, persisted to `localStorage['dt-theme']` — shared key across both
  roots. A tiny inline script in each root layout sets it before first paint.

## Structure

```
app/
  globals.css         main-site CSS
  favicon.ico
  (site)/
    layout.tsx        root: <html>/<body>, fonts, theme-init, metadata,
                      then IconSprite + SiteHeader + SiteDrawer + <main id="top"> + SiteFooter + ChromeScripts
    page.tsx          home
    platform-overview/page.tsx
    playbook/page.tsx
  (gst)/
    layout.tsx        root: <html>/<body>, Plus Jakarta Sans + IBM Plex Mono, theme-init. No CSS — each page's
                      route group owns its stylesheet (landing & chat collide by class name, never coexist).
    (marketing)/
      layout.tsx      imports ./landing.css
      landing.css     verbatim from gst-discovery/index.html's <style>, font literals → --gst-* tokens
      gst-discovery/page.tsx        /gst-discovery — inlines its own <header>/<footer> (not the shared chrome)
    (chat)/
      layout.tsx      imports ./chat.css
      chat.css        verbatim from gst-discovery/chat-interface.html's <style>, font literals → --gst-* tokens
      gst-discovery/chat/page.tsx   /gst-discovery/chat — bare shell (#chatLog + composer); the conversation is all runtime
components/
  IconSprite.tsx      <symbol> sprite, injected as-is. Icons: <svg className="stroke"><use href="#ic-x"/></svg>
  SiteHeader/Drawer/Footer.tsx   server components, static markup
  ChromeScripts.tsx   'use client' — theme toggle, mobile drawer, desktop mega-menu
  HomeScripts.tsx / PlatformOverviewScripts.tsx / PlaybookScripts.tsx   'use client' — per-page IIFE ports
  GstDiscoveryScripts.tsx   'use client' — GST landing: theme toggle, marquee, leak tabs, ledger canvas, reveal
  GstChatScripts.tsx        'use client', @ts-nocheck — the whole chat mock (verbatim IIFE port; dev replaces it)
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
