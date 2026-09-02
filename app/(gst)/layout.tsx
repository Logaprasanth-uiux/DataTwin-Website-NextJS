import { Plus_Jakarta_Sans, IBM_Plex_Mono } from "next/font/google";

// Separate root layout for the GST discovery section — its own <html>/<body>
// and its own fonts, none of which touch the main site. Navigating between this
// section and the main site is a full page load.
//
// The section has two pages, each with its own stylesheet loaded by its own
// route-group layout (they share only design tokens, and their component rules
// collide by name): (marketing)/ → /gst-discovery, (chat)/ → /gst-discovery/chat.
//
// Both roots share the `dt-theme` localStorage key and the `data-theme`
// attribute on <html>, so the theme choice carries across. (The chat mock's
// original used a separate `darp-theme` key; the port unifies it on `dt-theme`.)

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--gst-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--gst-mono",
  display: "swap",
});

// Set the theme before first paint so there's no light/dark flash.
const THEME_INIT = `(function(){try{document.documentElement.setAttribute('data-theme', localStorage.getItem('dt-theme') === 'dark' ? 'dark' : 'light');}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function GstLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
        {children}
      </body>
    </html>
  );
}
