import type { Metadata } from "next";
import PlaybookScripts from "@/components/PlaybookScripts";

export const metadata: Metadata = {
  title: "DataTwin — Playbook (internal reference)",
  description:
    "Internal reference page. Sections parked from the main DataTwin site, plus the GST recovery demo.",
};

export default function PlaybookPage() {
  return (
    <>
      {/* ============================= PLAYBOOK NOTE ============================= */}
      <section className="section-tight">
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Internal reference</span>
            <h2>Playbook</h2>
            <p>Sections kept out of the main flow, parked here for our own reference. Not linked from the site. The GST recovery demo sits at the bottom.</p>
          </div>
        </div>
      </section>

      {/* ============================= VIDEO / DEMO (tilted device mockup) ============================= */}
      <section className="demo-section" id="video">
        <div className="wrap">
          <div className="demo-stage">
            <div className="ledger-grid" style={{ opacity: ".3" }}></div>
            <div className="demo-device">
              <div className="demo-frame">
                <div className="demo-frame-bar">
                  <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                  <span className="demo-frame-url mono">app.datatwin.ai/discover</span>
                </div>
                <div className="demo-inner">
                  <span className="demo-badge"><span className="dot"></span>Product walkthrough — coming soon</span>
                  <h3 className="demo-title">Watch DataTwin read a transaction population and price the difference, live.</h3>
                  <p className="demo-sub">This spot is reserved for a walkthrough video. For now, here's the idea: two ledgers, reconciled in motion.</p>
                  <div className="twin-scan" aria-hidden="true">
                    <div className="twin-rail"></div>
                    <div className="twin-rail"></div>
                    <div className="twin-rail"></div>
                    <div className="twin-node" style={{ top: "calc(20% - 4px)", animationDelay: "0s" }}></div>
                    <div className="twin-node" style={{ top: "calc(50% - 4px)", animationDelay: "1.2s" }}></div>
                    <div className="twin-node" style={{ top: "calc(80% - 4px)", animationDelay: "2.4s" }}></div>
                    <div className="twin-node" style={{ top: "calc(50% - 4px)", animationDelay: "3.4s" }}></div>
                  </div>
                  <button className="play-ring-btn" aria-label="Play product walkthrough">
                    <span className="ring"></span><span className="ring r2"></span>
                    <svg className="stroke" style={{ fill: "currentColor" }}><use href="#ic-play" /></svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="demo-vignette"></div>
          </div>
        </div>
      </section>

      {/* ============================= VALUE BRIDGE ============================= */}
      <section className="section-tight">
        <div className="wrap">
          <div className="value-panel">
            <div className="arc-glow g-green"></div>
            <div className="value-grid">
              <div className="value-left">
                <span className="eyebrow">Why finance teams start here</span>
                <h2>No adoption before you see the number.</h2>
                <a href="#cta" className="btn btn-primary">Get started</a>
              </div>
              <div className="value-checklist">
                <div className="value-item">
                  <span className="check"><svg className="stroke"><use href="#ic-check" /></svg></span>
                  <p><strong>Read-only, day one.</strong> Nothing changes in your systems or how your team works.</p>
                </div>
                <div className="value-item">
                  <span className="check"><svg className="stroke"><use href="#ic-check" /></svg></span>
                  <p><strong>The full population, not a sample.</strong> Every transaction checked, not a percentage of them.</p>
                </div>
                <div className="value-item">
                  <span className="check"><svg className="stroke"><use href="#ic-check" /></svg></span>
                  <p><strong>You see the number first.</strong> No contract before Discover and Assess are done.</p>
                </div>
                <div className="value-item">
                  <span className="check"><svg className="stroke"><use href="#ic-check" /></svg></span>
                  <p><strong>Prevention comes free.</strong> The same rules that recovered cash keep watching after go-live.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= ENGINE — reads before it records ============================= */}
      <section className="section-tight">
        <div className="wrap">
          <div className="engine-row">
            <div className="engine-visual">
              <svg width="0" height="0"><defs><linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="var(--brand)" /><stop offset="100%" stopColor="var(--brand-2)" /></linearGradient></defs></svg>
              <div className="engine-dial" role="img" aria-label="100 percent of transactions read">
                <div className="dial-rings" aria-hidden="true"></div>
                <div className="dial-dots" aria-hidden="true">
                  <i style={{ "--a": "0deg" } as React.CSSProperties}></i><i style={{ "--a": "30deg" } as React.CSSProperties}></i><i style={{ "--a": "60deg" } as React.CSSProperties}></i>
                  <i style={{ "--a": "90deg" } as React.CSSProperties}></i><i style={{ "--a": "120deg" } as React.CSSProperties}></i><i style={{ "--a": "150deg" } as React.CSSProperties}></i>
                  <i style={{ "--a": "180deg" } as React.CSSProperties}></i><i style={{ "--a": "210deg" } as React.CSSProperties}></i><i style={{ "--a": "240deg" } as React.CSSProperties}></i>
                  <i style={{ "--a": "270deg" } as React.CSSProperties}></i><i style={{ "--a": "300deg" } as React.CSSProperties}></i><i style={{ "--a": "330deg" } as React.CSSProperties}></i>
                </div>
                <div className="dial-sweep" aria-hidden="true"></div>
                <svg className="dial-ring" viewBox="0 0 120 120" aria-hidden="true">
                  <circle className="track" cx="60" cy="60" r="54" />
                  <circle className="fill" cx="60" cy="60" r="54" pathLength="100" />
                </svg>
                <div className="dial-label">
                  <span className="num">100<span className="pct">%</span></span>
                  <span className="cap">of transactions read</span>
                </div>
              </div>
            </div>
            <div className="engine-text">
              <span className="eyebrow">The engine</span>
              <h2>An engine that reads before it records.</h2>
              <p>Discover, Assess, Recover, Prevent — the DARP framework checks every transaction against everything that should agree with it, before it becomes a number you have to defend.</p>
              <p className="engine-meta"><span className="pulse" aria-hidden="true"></span>Live · full population · read-only</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= INTEGRATIONS ============================= */}
      <section className="section">
        <div className="arc-glow g-blue"></div>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Integrations</span>
            <h2>Runs above the systems you already have.</h2>
            <p>No migration, no new system of record. DataTwin reads on top of the ERP and finance tools you're already running.</p>
          </div>
          <div className="integration-grid">
            <div className="integration-card"><span className="mark" style={{ background: "linear-gradient(135deg,var(--brand),var(--brand-2))" }}>SAP</span><div><div className="name">SAP</div><div className="cat">ERP</div></div></div>
            <div className="integration-card"><span className="mark" style={{ background: "linear-gradient(135deg,var(--brand-violet),var(--brand-2))" }}>NS</span><div><div className="name">NetSuite</div><div className="cat">ERP</div></div></div>
            <div className="integration-card"><span className="mark" style={{ background: "var(--accent-amber)", color: "var(--pill-ink)" }}>T</span><div><div className="name">Tally</div><div className="cat">Accounting</div></div></div>
            <div className="integration-card"><span className="mark" style={{ background: "linear-gradient(135deg,var(--brand),var(--brand-violet))" }}>OR</span><div><div className="name">Oracle</div><div className="cat">ERP</div></div></div>
            <div className="integration-card"><span className="mark" style={{ background: "var(--accent-lime)", color: "var(--pill-ink)" }}>ZB</span><div><div className="name">Zoho Books</div><div className="cat">Accounting</div></div></div>
            <div className="integration-card"><span className="mark" style={{ background: "linear-gradient(135deg,var(--brand-2),var(--recover))" }}>B</span><div><div className="name">Your bank feeds</div><div className="cat">Reconciliation</div></div></div>
          </div>
          <div style={{ textAlign: "center", marginTop: "40px", position: "relative", zIndex: "1" }}>
            <a href="#video" className="btn btn-ghost">See in action</a>
          </div>
        </div>
      </section>

      {/* ============================= TRUSTED BY (no fabricated quotes) ============================= */}
      <section className="section" id="trusted">
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">By the numbers</span>
            <h2>We publish numbers, not quotes.</h2>
            <p>No invented testimonials here — just the customers we work with, and the numbers behind the engagement.</p>
          </div>
          <div className="trust-cards">
            <div className="card trust-stat-card featured">
              <span className="ic"><svg className="icon stroke"><use href="#ic-layers" /></svg></span>
              <span className="num">100%</span>
              <span className="cap">of transactions read, not sampled</span>
            </div>
            <div className="card trust-stat-card">
              <span className="ic"><svg className="icon stroke"><use href="#ic-gauge" /></svg></span>
              <span className="num">2 min</span>
              <span className="cap">to a recoverable number</span>
            </div>
            <div className="card trust-stat-card">
              <span className="ic"><svg className="icon stroke"><use href="#ic-loop" /></svg></span>
              <span className="num">4-step</span>
              <span className="cap">DARP method</span>
            </div>
            <div className="card trust-stat-card">
              <span className="ic"><svg className="icon stroke"><use href="#ic-shield" /></svg></span>
              <span className="num">0</span>
              <span className="cap">process changes required</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= DEMO STRIP — GST DISCOVERY LANDING PAGE ============================= */}
      {/* Placeholder promo for the standalone GST recovery demo, kept for internal/demo purposes. */}
      {/* In the static page this sits after </footer>; the footer is shared layout here, so it
          renders as the last block of <main> instead. */}
      <section className="demo-strip-section">
        <div className="wrap">
          <a href="/gst-discovery" target="_blank" rel="noopener" className="demo-strip">
            <span className="demo-strip-tag">Live demo</span>
            <span className="demo-strip-text">
              <strong>GST — Input Tax Credit Recovery</strong>
              <p>See a standalone product flow for one of our recovery use cases. Opens in a new tab.</p>
            </span>
            <span className="demo-strip-arrow"><svg className="icon stroke" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg></span>
          </a>
        </div>
      </section>
      <PlaybookScripts />
    </>
  );
}
