import EstimateChatScripts from "@/components/EstimateChatScripts";

// /get-estimate — the hand-off from the homepage hero match flow. Opens
// straight on the "where do we send the estimate?" contact form (no AI-agent
// intro — the visitor already knows why they're here). The composer is for any
// extra context. Front-end MOCK: the recap is hydrated from sessionStorage
// (`dt-estimate-context`, set in components/HomeScripts.tsx) and "submit" shows
// a confirmation only — backend wiring is a later dev handoff.

export default function GetEstimatePage() {
  return (
    <>
      <div className="est-shell">
        <header className="est-header">
          <a className="est-brand" href="/" aria-label="DataTwin home">
            <img src="/datatwin-logo.png" alt="DataTwin" />
          </a>
          <div className="est-header-right">
            <span className="est-status" id="estStatus">
              <span className="dot" aria-hidden="true"></span>
              <span className="txt">Your details</span>
            </span>
            <button
              className="est-theme"
              id="estThemeToggle"
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

        <main className="est-main">
          <div className="est-recap" id="estRecap" hidden>
            <div className="est-recap-label">What you told us</div>
            <p className="est-recap-problem" id="estRecapProblem"></p>
            <div className="est-recap-chips" id="estRecapChips"></div>
          </div>

          <p className="est-intro" id="estIntro" hidden>
            Leave your details for a recoverable number, or ask a question below
            &mdash; how DataTwin works, what it recovers, security, integrations,
            timelines.
          </p>

          <form className="est-form" id="estForm" autoComplete="off">
            <div className="est-form-eyebrow">Where do we send the estimate?</div>
            <p className="est-form-note" style={{ marginTop: 0 }}>
              We come back with what we&rsquo;d look at first and what it usually
              turns out to be worth.
            </p>

            <div className="est-field-row">
              <div className="est-field">
                <label htmlFor="estName">Name</label>
                <input id="estName" name="name" type="text" placeholder="Your name" />
              </div>
              <div className="est-field">
                <label htmlFor="estCompany">Company</label>
                <input
                  id="estCompany"
                  name="company"
                  type="text"
                  placeholder="Where you work"
                />
              </div>
            </div>

            <div className="est-field">
              <label htmlFor="estEmail">Work email</label>
              <input
                id="estEmail"
                name="email"
                type="email"
                placeholder="you@company.com"
              />
            </div>

            <div className="est-field">
              <label htmlFor="estPhone">
                Mobile <span className="opt">(optional)</span>
              </label>
              <input id="estPhone" name="phone" type="tel" placeholder="+91" />
            </div>

            <button className="est-form-submit" id="estSubmit" type="submit" disabled>
              Send this to DataTwin
            </button>

            <p className="est-form-note">
              We use these to send you the estimate and to arrange the
              walk-through. Nothing is shared outside DataTwin, and there is no
              contract at this stage.
            </p>
          </form>

          <div className="est-thread" id="estThread"></div>
        </main>

        <div className="est-composer">
          <div className="est-composer-inner">
            <form id="estComposerForm" autoComplete="off">
              <input
                id="estComposerInput"
                type="text"
                placeholder="Anything else worth knowing…"
                aria-label="Anything else worth knowing"
              />
              <button type="submit" aria-label="Send">
                <svg className="icon stroke">
                  <use href="#ic-arrow-right" />
                </svg>
              </button>
            </form>
            <p className="est-composer-note">
              Read-only. Nothing changes in your systems, and there is no contract
              at this stage.
            </p>
          </div>
        </div>
      </div>
      <EstimateChatScripts />
    </>
  );
}
