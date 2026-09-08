import ChatCheckScripts from "@/components/ChatCheckScripts";

// /chat-check — a self-contained conversational check. Front-end MOCK: the
// whole conversation (welcome, service picker, document uploads, the "sent to
// DataTwin" step and the animated score report) is built at runtime by
// ChatCheckScripts. No network, no DB. Shares nothing with the /get-estimate
// or /gst-discovery/chat flows.

export default function ChatCheckPage() {
  return (
    <>
      <div className="est-shell">
        <header className="est-header">
          <a className="est-brand" href="/" aria-label="DataTwin home">
            <img src="/datatwin-logo.png" alt="DataTwin" />
          </a>
          <div className="est-header-right">
            <span className="est-status" id="ccStatus">
              <span className="dot" aria-hidden="true"></span>
              <span className="txt">Getting started</span>
            </span>
            <button
              className="est-theme"
              id="ccThemeToggle"
              type="button"
              aria-label="Toggle light and dark theme"
            >
              <svg
                className="icon-sun"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="4.5" />
                <path d="M12 2.5v2.5M12 19v2.5M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2.5 12H5M19 12h2.5M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
              </svg>
              <svg
                className="icon-moon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z" />
              </svg>
            </button>
            <a className="est-exit" href="/">
              Exit
            </a>
          </div>
        </header>

        {/* DEMO ONLY — a scenario switcher for the walkthrough. Not part of the
            product; remove this block (and the `runScenario` switch in
            ChatCheckScripts) before launch. */}
        <div className="cc-demo" role="group" aria-label="Demo scenario switcher">
          <span className="cc-demo-tag">Demo</span>
          <div className="cc-demo-btns" id="ccScenarios">
            <button className="cc-demo-b is-on" type="button" data-scn="1">
              Scenario 1 <span>· usual</span>
            </button>
            <button className="cc-demo-b" type="button" data-scn="2">
              Scenario 2 <span>· coconut oil</span>
            </button>
            <button className="cc-demo-b" type="button" data-scn="3">
              Scenario 3 <span>· demo</span>
            </button>
          </div>
          <span className="cc-demo-note">Preview aid — not part of the product</span>
        </div>

        <main className="est-main cc-main">
          <div className="cc-log" id="ccLog"></div>
        </main>

        <div className="est-composer">
          <div className="est-composer-inner">
            <form id="ccComposerForm" autoComplete="off">
              <input
                id="ccComposerInput"
                type="text"
                placeholder="Type your message…"
                aria-label="Type your message"
              />
              <button type="submit" aria-label="Send">
                <svg className="icon stroke">
                  <use href="#ic-arrow-right" />
                </svg>
              </button>
            </form>
            <p className="est-composer-note">
              Read-only. Nothing changes in your systems, and there is no
              contract at this stage.
            </p>
          </div>
        </div>
      </div>
      <ChatCheckScripts />
    </>
  );
}
