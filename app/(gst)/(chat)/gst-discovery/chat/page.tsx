import type { Metadata } from "next";
import GstChatScripts from "@/components/GstChatScripts";

export const metadata: Metadata = {
  title: "DARP GST Discovery",
};

// Static mock of the GST discovery chat — the whole conversation is built at
// runtime by GstChatScripts (ported from chat-interface.html's <script>).
// Dev handoff: this is a placeholder to be replaced with the real AI chat.

export default function GstChatPage() {
  return (
    <>
      <div className="app">
        <header className="chat-header">
          <a className="brand" href="/gst-discovery">
            <img src="/datatwin-logo.png" style={{ height: "26px", width: "auto", display: "block" }} alt="DataTwin" />
          </a>
          <div className="header-right">
            <span className="visitor-badge hidden" id="visitorBadge"></span>
            <button className="icon-btn hidden" id="historyBtn" type="button" aria-label="Previously checked">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15.5 14" /></svg>
            </button>
            <div className="hstatus"><span className="dot" aria-hidden="true"></span><span className="txt" id="phaseText">Getting started</span></div>
            <button className="theme-toggle" id="themeToggle" type="button" aria-label="Toggle light and dark theme">
              <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4.5" /><path d="M12 2.5v2.5M12 19v2.5M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2.5 12H5M19 12h2.5M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" /></svg>
              <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z" /></svg>
            </button>
            <a className="back-link" href="/gst-discovery">Exit</a>
          </div>
        </header>

        <div className="chat-shell">
          <div className="chat-log" id="chatLog"></div>
          <div className="composer">
            <form id="composerForm" autoComplete="off">
              <input id="composerInput" type="text" placeholder="Type a message…" aria-label="Message" />
              <button type="submit" aria-label="Send">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></svg>
              </button>
            </form>
          </div>
        </div>
      </div>
      <GstChatScripts />
    </>
  );
}
