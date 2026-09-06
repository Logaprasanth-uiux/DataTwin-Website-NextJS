import type { Metadata } from "next";
import { Inter_Tight, IBM_Plex_Mono } from "next/font/google";
import "../globals.css";
import IconSprite from "@/components/IconSprite";

// Third root layout (alongside app/(site) and app/(gst)) — the estimate
// hand-off flow. Same design system as the main site (shared globals.css,
// same fonts, same `dt-theme` key) but a focused, chrome-light frame: a slim
// header instead of SiteHeader/Drawer/Footer. Reaching it from the homepage
// is a full page load, like the GST section.

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
  title: "Get your recovery estimate — DataTwin",
  description:
    "Tell us where to send your recoverable number. Read-only, nothing changes in your systems, and there is no contract at this stage.",
};

const THEME_INIT = `(function(){try{document.documentElement.setAttribute('data-theme', localStorage.getItem('dt-theme') === 'dark' ? 'dark' : 'light');}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function EstimateLayout({
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
