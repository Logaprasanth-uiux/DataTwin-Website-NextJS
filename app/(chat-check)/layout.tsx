import type { Metadata } from "next";
import { Inter_Tight, IBM_Plex_Mono } from "next/font/google";
import "../globals.css";
import IconSprite from "@/components/IconSprite";

// Fourth root layout (alongside app/(site), app/(gst) and app/(estimate)) — a
// self-contained conversational check. Same design system as the main site
// (shared globals.css, same fonts, same `dt-theme` key) but a focused,
// chrome-light frame: a slim header instead of SiteHeader/Drawer/Footer.
// Front-end MOCK — no network, no DB. Reaching it is a full page load.
//
// Deliberately generic from the outside: nothing in the route, title or chrome
// names a specific domain — the service picker inside the chat is what routes
// the visitor.

const bodyFont = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Talk to DataTwin",
  description:
    "Tell us what you're looking at. We'll point you to the right check, take the documents, and come back with a score. Read-only, nothing changes in your systems.",
};

const THEME_INIT = `(function(){try{document.documentElement.setAttribute('data-theme', localStorage.getItem('dt-theme') === 'dark' ? 'dark' : 'light');}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function ChatCheckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${monoFont.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
        <IconSprite />
        {children}
      </body>
    </html>
  );
}
