import "./landing.css";

// Route-group layout for /gst-discovery — owns the landing page's stylesheet
// (ported verbatim from gst-discovery/index.html's <style>, font literals →
// --gst-* tokens). The <html>/<body>/fonts come from app/(gst)/layout.tsx.

export default function GstMarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
