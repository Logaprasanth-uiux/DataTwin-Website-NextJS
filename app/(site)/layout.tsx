import type { Metadata } from "next";
import { Inter_Tight, IBM_Plex_Mono } from "next/font/google";
import "../globals.css";
import IconSprite from "@/components/IconSprite";
import SiteHeader from "@/components/SiteHeader";
import SiteDrawer from "@/components/SiteDrawer";
import SiteFooter from "@/components/SiteFooter";
import ChromeScripts from "@/components/ChromeScripts";

// Root layout for the main marketing site. The GST section (app/(gst)) is a
// separate root layout with its own <html>/<body>, fonts and CSS — see
// CLAUDE.md. Navigating between the two triggers a full page load, which is
// what keeps their stylesheets from colliding.

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
  title: "DataTwin — The Finance Observability Platform for the Office of the CFO",
  description:
    "DataTwin reads your full transaction population, recovers the cash, tax and misstatements already lost, then keeps the same rules running forward as observability.",
};

// Set the theme before first paint so there's no light/dark flash.
const THEME_INIT = `(function(){try{document.documentElement.setAttribute('data-theme', localStorage.getItem('dt-theme') === 'dark' ? 'dark' : 'light');}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${monoFont.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
        <IconSprite />
        <SiteHeader />
        <SiteDrawer />
        <main id="top">{children}</main>
        <SiteFooter />
        <ChromeScripts />
      </body>
    </html>
  );
}
