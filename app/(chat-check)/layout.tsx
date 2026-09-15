import type { Metadata } from "next";
import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";
import "../globals.css";
import IconSprite from "@/components/IconSprite";

// Fourth root layout (alongside app/(site), app/(gst) and app/(estimate)) — a
// self-contained conversational check. Shares globals.css and the `dt-theme`
// key with the main site, but the chat itself is themed (via the .cc-shell
// scope, see the "/chat-check only" block in globals.css) to match the GST
// Discovery chat's look — same dark-neutral palette, Plus Jakarta Sans instead
// of Inter Tight, so DataTwin's two chat surfaces read as one family. A
// focused, chrome-light frame: a slim header instead of SiteHeader/Drawer/
// Footer. Front-end MOCK — no network, no DB. Reaching it is a full page load.
//
// Deliberately generic from the outside: nothing in the route, title or chrome
// names a specific domain — the service picker inside the chat is what routes
// the visitor.

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
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
