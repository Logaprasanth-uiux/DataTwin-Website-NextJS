import "./chat.css";

// Route-group layout for /gst-discovery/chat — owns the chat mock's stylesheet
// (ported verbatim from gst-discovery/chat-interface.html's <style>, font
// literals → --gst-* tokens). The <html>/<body>/fonts come from
// app/(gst)/layout.tsx. Kept in its own group so it does NOT inherit the
// landing page's layout / stylesheet.

export default function GstChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
