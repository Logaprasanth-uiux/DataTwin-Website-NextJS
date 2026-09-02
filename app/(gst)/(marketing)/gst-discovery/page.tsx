import type { Metadata } from "next";
import GstDiscoveryScripts from "@/components/GstDiscoveryScripts";

export const metadata: Metadata = {
  title: "DARP GST Recovery",
};

export default function GstDiscoveryPage() {
  return (
    <>
      <header className="site">
        <div className="nav">
          <a className="wordmark" href="/">
            <img src="/datatwin-logo.png" style={{ height: "26px", width: "auto" }} alt="DataTwin" />
          </a>
          <nav className="links">
            <a href="#problem">The Problem</a>
            <a href="#process">How DARP Works</a>
            <a href="#ask">What We Need</a>
            <a href="#security">Security</a>
          </nav>
          <div className="nav-actions">
            <button className="theme-toggle" id="themeToggle" type="button" aria-label="Toggle light and dark theme">
              <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4.5" /><path d="M12 2.5v2.5M12 19v2.5M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2.5 12H5M19 12h2.5M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" /></svg>
              <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z" /></svg>
            </button>
            <a className="btn btn-primary btn-sm" href="/gst-discovery/chat" data-cta="nav">Start Free Discovery</a>
          </div>
        </div>
      </header>

      <main id="top">

        {/* ============ HERO ============ */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <p className="eyebrow">GST Input Tax Credit &nbsp;·&nbsp; A DARP Application</p>
              <h1>Credit you've<br />already <em>earned</em>,<br />sitting unclaimed.</h1>
              <p className="lead">DARP checks your filings against your purchases — read-only — and shows exactly what's owed.</p>
              <div className="cta-row">
                <a className="btn btn-primary" href="/gst-discovery/chat" data-cta="hero-primary">Start Free GST Discovery →</a>
                <a className="btn btn-ghost" href="#process">See how it works</a>
              </div>
              <p className="microcopy">No ERP access. No commitment — just the number.</p>
            </div>
            <div className="hero-visual reveal" data-reveal>
              <div className="ledger-card">
                <div className="ledger-head">
                  <span className="label" id="ledgerLabel">GSTR-2B RECONCILIATION — LIVE</span>
                  <div className="dot-row"><div className="dot"></div><div className="dot"></div><div className="dot"></div></div>
                </div>
                <canvas id="ledgerCanvas" aria-hidden="true"></canvas>
                <div className="ledger-foot">
                  <span id="ledgerCount">3,214 line items tested</span>
                  <span className="ok"><span className="pulse-dot" aria-hidden="true"></span>matching live</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ PROBLEM ============ */}
        <section id="problem">
          <div className="wrap">
            <div className="section-head reveal" data-reveal>
              <p className="eyebrow">Where the leakage actually is</p>
              <h2>The many ways ITC quietly stops being yours</h2>
              <p>Not fraud — volume. Thousands of invoices, hundreds of vendors, books closed faster than anyone can check by hand.</p>
            </div>
            <div className="reveal" data-reveal>
              <div className="leak-tabbar" role="tablist" aria-label="Ways ITC goes unclaimed" id="leakTabbar"></div>
              <div className="leak-panel" id="leakPanel"></div>
            </div>
          </div>
        </section>

        {/* ============ DARP PROCESS ============ */}
        <div className="darp-strip" id="process">
          <div className="wrap" style={{ padding: "96px 0" }}>
            <div className="section-head reveal" data-reveal>
              <p className="eyebrow">The DARP framework, applied to GST</p>
              <h2>Suspicion to proof to cash to control</h2>
              <p>One engine, run in the same order every time — the order finance teams can actually act on.</p>
            </div>
            <div className="darp-grid reveal" data-reveal>
              <div className="darp-cell">
                <span className="letter">D</span>
                <h4>Discover</h4>
                <p>GSTR-2B, GSTR-2A, purchase register, e-invoices — every mismatch surfaces. Read-only, nothing filed on your behalf.</p>
              </div>
              <div className="darp-cell">
                <span className="letter">A</span>
                <h4>Assess</h4>
                <p>Each finding is quantified against its claim window and ranked by recoverable value.</p>
              </div>
              <div className="darp-cell">
                <span className="letter">R</span>
                <h4>Recover</h4>
                <p>We package the reconciliation and vendor evidence your team needs — ready to act on while the window's open.</p>
              </div>
              <div className="darp-cell">
                <span className="letter">P</span>
                <h4>Prevent</h4>
                <p>The same checks run at transaction entry going forward — before a return is filed, not after a notice.</p>
              </div>
            </div>
          </div>
        </div>

        {/* ============ ASK ============ */}
        <section id="ask">
          <div className="wrap">
            <div className="section-head reveal" data-reveal>
              <p className="eyebrow">A scoped Discover pass</p>
              <h2>One or two return periods. A quantified number. No commitment beyond that.</h2>
              <p>We talk platform only after Discover has a number you agree with. Nothing about your filings changes before that.</p>
            </div>
            <div className="ask-grid reveal" data-reveal>
              <div className="ask-card">
                <span className="eyebrow">What we need</span>
                <ul>
                  <li>
                    <span className="icon-badge" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4" /><line x1="9" y1="12" x2="15" y2="12" /><line x1="9" y1="16" x2="15" y2="16" /></svg></span>
                    <span>Read-only GSTR-1, 2A/2B and 3B for one or two periods</span>
                  </li>
                  <li>
                    <span className="icon-badge" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="16" height="14" rx="1.5" /><line x1="4" y1="10" x2="20" y2="10" /><line x1="4" y1="14.5" x2="20" y2="14.5" /></svg></span>
                    <span>Purchase register and vendor master data</span>
                  </li>
                  <li>
                    <span className="icon-badge" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12v18l-2-1.3-2 1.3-2-1.3-2 1.3-2-1.3-2 1.3z" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="9" y1="12" x2="15" y2="12" /></svg></span>
                    <span>Credit note and reversal history</span>
                  </li>
                  <li>
                    <span className="icon-badge" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="11" width="14" height="9" rx="1.5" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg></span>
                    <span>No system access beyond the extract, no time from your GST team</span>
                  </li>
                </ul>
              </div>
              <div className="ask-connector" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="18" y2="12" /><polyline points="13 7 18 12 13 17" /></svg>
              </div>
              <div className="ask-card give">
                <span className="eyebrow">What you get back</span>
                <ul>
                  <li>
                    <span className="icon-badge" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="18" x2="6" y2="10" /><line x1="12" y1="18" x2="12" y2="6" /><line x1="18" y1="18" x2="18" y2="13" /></svg></span>
                    <span>A findings pack — every mismatch and blocked credit, valued line by line</span>
                  </li>
                  <li>
                    <span className="icon-badge" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="7" x2="14" y2="7" /><line x1="4" y1="12" x2="11" y2="12" /><line x1="4" y1="17" x2="8" y2="17" /><polyline points="17 6 17 18" /><polyline points="14 15 17 18 20 15" /></svg></span>
                    <span>Each finding ranked by recoverable amount and claim window remaining</span>
                  </li>
                  <li>
                    <span className="icon-badge" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11 20 4l-6 17-3-7-8-3z" /></svg></span>
                    <span>Evidence you can hand your GST practitioner directly</span>
                  </li>
                  <li>
                    <span className="icon-badge" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8" /><polyline points="9 12 11 14 15 10" /></svg></span>
                    <span>You act on the findings, or you don't — nothing's signed until you do</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CREDIBILITY ============ */}
        <section id="security">
          <div className="wrap credibility">
            <blockquote className="reveal" data-reveal>Built by <em>finance operators</em>, not tax-software vendors — so the findings survive contact with your GST practitioner.</blockquote>
            <div className="cred-facts reveal" data-reveal>
              <div className="cred-fact"><span className="n tabular">01</span><p>Founded out of enterprise finance operations, not compliance tooling.</p></div>
              <div className="cred-fact"><span className="n tabular">02</span><p>ISO 27001 certified and SOC 2 Type 1 attested, deployed on AWS.</p></div>
              <div className="cred-fact"><span className="n tabular">03</span><p>Sits above SAP, NetSuite and Tally — no ERP migration.</p></div>
              <div className="cred-fact"><span className="n tabular">04</span><p>Already runs live on payables, receivables and channel-rebate recovery.</p></div>
            </div>
          </div>
        </section>

        {/* ============ FINAL CTA ============ */}
        <div className="final-cta">
          <div className="wrap">
            <h2 className="reveal" data-reveal>Upload your GST data. Get your recovery number in minutes.</h2>
            <p className="reveal" data-reveal>No spreadsheets. No manual reconciliation. No waiting for year-end audit to find out what you missed.</p>
            <div className="cta-row reveal" data-reveal>
              <a className="btn btn-primary" href="/gst-discovery/chat" data-cta="final">Start Free GST Discovery →</a>
              <a className="btn btn-ghost" href="mailto:solve@datatwin.ai">Talk to the team</a>
            </div>
          </div>
        </div>

        {/* ============ PROBLEM MARQUEE — sits just above the footer, a quiet pre-footer band carried across landing pages ============ */}
        <div className="trustbar" aria-label="Common causes of unclaimed input tax credit">
          <div className="marquee">
            <div className="marquee-track" id="problemMarquee"></div>
          </div>
        </div>

      </main>

      <footer>
        <div className="wrap">
          <div className="foot-grid">
            <div className="foot-left">
              <a className="wordmark" href="/">
                <img src="/datatwin-logo.png" style={{ height: "20px", width: "auto" }} alt="DataTwin" />
              </a>
              <p>A DataTwin platform. AI-native financial intelligence for the office of the CFO.</p>
            </div>
            <div className="foot-links">
              <div className="foot-col">
                <h5>Platform</h5>
                <a href="#process">How DARP Works</a>
                <a href="#problem">GST Recovery</a>
                <a href="/">DataTwin.ai</a>
              </div>
              <div className="foot-col">
                <h5>Company</h5>
                <a href="mailto:solve@datatwin.ai">Contact</a>
                <a href="#security">Security</a>
              </div>
            </div>
          </div>
          <div className="foot-bottom">
            <span>© 2026 DataTwin · Chennai, India</span>
            <span>DARP — Discover · Assess · Recover · Prevent</span>
          </div>
        </div>
      </footer>
      <GstDiscoveryScripts />
    </>
  );
}
