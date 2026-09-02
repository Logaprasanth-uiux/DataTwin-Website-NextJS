import IconSprite from "@/components/IconSprite";
import SiteHeader from "@/components/SiteHeader";
import SiteDrawer from "@/components/SiteDrawer";
import SiteFooter from "@/components/SiteFooter";
import ChromeScripts from "@/components/ChromeScripts";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <IconSprite />
      <SiteHeader />
      <SiteDrawer />
      <main id="top">{children}</main>
      <SiteFooter />
      <ChromeScripts />
    </>
  );
}
