// Site header: logo, desktop nav with hover/click mega-menus, theme toggle,
// and the mobile "Menu" button. Static markup — the open/close behaviour is
// wired up client-side in components/ChromeScripts.tsx (kept close to the
// original vanilla JS for a faithful first port).
export default function SiteHeader() {
  return (
    <header>
      <div className="wrap nav">
        <a href="#top" className="nav-logo">
          <img src="/datatwin-logo.png" alt="DataTwin" />
        </a>
        <nav className="nav-desktop" aria-label="Primary">
          <div className="mega-item mega-item-static">
            <button className="mega-trigger" aria-haspopup="true" aria-expanded="false">
              <span>Platform</span><svg className="chev stroke"><use href="#ic-chev" /></svg>
            </button>
            <div className="mega-panel mega-panel-xl mega-panel-platform">
              <a href="/platform-overview" className="mega-pf-hero">
                <span className="mega-feature-ic"><svg className="stroke"><use href="#ic-layers" /></svg></span>
                <div className="mega-pf-hero-body">
                  <strong>Platform Overview</strong>
                  <p>How analyse-first works end to end — acquire, process, report — sitting above the ERP you already run, with nothing migrated.</p>
                </div>
                <span className="mega-pf-hero-cta">See the whole platform <svg className="stroke"><use href="#ic-arrow-right" /></svg></span>
              </a>
              <div className="mega-pf-body">
                <a href="/darp-framework" className="mega-pf-darp">
                  <div className="mega-pf-darp-head">
                    <span className="mega-feature-ic violet"><svg className="stroke"><use href="#ic-loop" /></svg></span>
                    <div>
                      <strong>DARP Framework</strong>
                      <span className="mega-feature-tagline">Discover · Assess · Recover · Prevent</span>
                    </div>
                  </div>
                  <p>The recovery and processing engine behind every DataTwin engagement. Reads your transaction history read-only, values every finding, packages the evidence that gets the cash back — then turns the same rules forwards so the leak cannot reopen.</p>
                  <div className="mega-pills">
                    <span className="mega-pill">Read-only to start</span>
                    <span className="mega-pill">Full population, not a sample</span>
                    <span className="mega-pill">Prevent needs no second build</span>
                  </div>
                </a>
                <div className="mega-pf-side">
                  <span className="mega-col-label">Across the platform</span>
                  <a href="/security" className="mega-row">
                    <span className="ic"><svg className="stroke"><use href="#ic-lock" /></svg></span>
                    <span className="mega-row-text"><strong>Security</strong><p>Read-only by default. ISO 27001 certified and SOC 2 attested, with role-based access and an immutable audit trail on every record. Cloud agnostic — runs on AWS, Azure, GCP or your own private cloud.</p></span>
                  </a>
                  <a href="/how-ai-is-used" className="mega-row">
                    <span className="ic"><svg className="stroke"><use href="#ic-spark" /></svg></span>
                    <span className="mega-row-text"><strong>How AI is used</strong><p>Where AI earns its place — reading documents, spotting anomalies, answering questions in plain language — and where deterministic rules run instead, because postings must be auditable.</p></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mega-item mega-item-static">
            <button className="mega-trigger" aria-haspopup="true" aria-expanded="false">
              <span>Products</span><svg className="chev stroke"><use href="#ic-chev" /></svg>
            </button>
            <div className="mega-panel mega-panel-xl mega-panel-cols">
              <div className="mega-grid mega-grid-4">
                <div className="mega-col">
                  <span className="mega-col-label">Core finance operations</span>
                  <a href="/accounts-payable" className="mega-row">
                    <span className="ic"><svg className="stroke"><use href="#ic-cash" /></svg></span>
                    <span className="mega-row-text"><strong>Accounts Payable</strong><p>Invoice to payment, accounted right</p></span>
                  </a>
                  <a href="/accounts-receivable" className="mega-row">
                    <span className="ic"><svg className="stroke"><use href="#ic-cash" /></svg></span>
                    <span className="mega-row-text"><strong>Accounts Receivable</strong><p>Order to cash, collected and applied</p></span>
                  </a>
                  <a href="/taxation-reconciliation" className="mega-row">
                    <span className="ic"><svg className="stroke"><use href="#ic-tax" /></svg></span>
                    <span className="mega-row-text"><strong>Taxation Reconciliation</strong><p>Returns, credits and ledgers that agree</p></span>
                  </a>
                  <a href="/reconciliation-audit" className="mega-row">
                    <span className="ic"><svg className="stroke"><use href="#ic-search" /></svg></span>
                    <span className="mega-row-text"><strong>Reconciliation &amp; Audit</strong><p>Continuous, across every system</p></span>
                  </a>
                </div>
                <div className="mega-col">
                  <span className="mega-col-label">Rebates, incentives &amp; payouts</span>
                  <a href="#solutions" className="mega-row">
                    <span className="ic"><svg className="stroke"><use href="#ic-badge" /></svg></span>
                    <span className="mega-row-text"><strong>Channel Rebates <span className="mega-tag amber">2 sides</span></strong><p>Ship &amp; debit, SPAs, POS validation</p></span>
                  </a>
                  <a href="#solutions" className="mega-row mega-row-sub">
                    <span className="ic"><svg className="stroke"><use href="#ic-arrow-right" /></svg></span>
                    <span className="mega-row-text"><strong>— for Manufacturers</strong><p>Pay only what's genuinely owed</p></span>
                  </a>
                  <a href="#solutions" className="mega-row mega-row-sub">
                    <span className="ic"><svg className="stroke"><use href="#ic-arrow-right" /></svg></span>
                    <span className="mega-row-text"><strong>— for Distributors</strong><p>Collect what you're owed, faster</p></span>
                  </a>
                  <a href="#solutions" className="mega-row">
                    <span className="ic"><svg className="stroke"><use href="#ic-user" /></svg></span>
                    <span className="mega-row-text"><strong>Partner Payouts</strong><p>Reseller, affiliate, franchise, referral</p></span>
                  </a>
                  <a href="#solutions" className="mega-row">
                    <span className="ic"><svg className="stroke"><use href="#ic-gauge" /></svg></span>
                    <span className="mega-row-text"><strong>Sales Commissions &amp; Incentives</strong><p>Calculated from actual revenue</p></span>
                  </a>
                </div>
                <div className="mega-col">
                  <span className="mega-col-label">Close &amp; reporting</span>
                  <a href="#" className="mega-row">
                    <span className="ic"><svg className="stroke"><use href="#ic-gauge" /></svg></span>
                    <span className="mega-row-text"><strong>FSCP <span className="mega-tag blue">200+ KPIs</span></strong><p>Financial Statement Close Process — close integrity, scored continuously</p></span>
                  </a>
                  <span className="mega-col-label spaced">By industry</span>
                  <a href="#" className="mega-row">
                    <span className="ic"><svg className="stroke"><use href="#ic-layers" /></svg></span>
                    <span className="mega-row-text"><strong>Semiconductor</strong><p>Channel complexity, solved</p></span>
                  </a>
                  <a href="#" className="mega-row">
                    <span className="ic"><svg className="stroke"><use href="#ic-badge" /></svg></span>
                    <span className="mega-row-text"><strong>Distribution</strong><p>Multi-tier programs and claims</p></span>
                  </a>
                </div>
                <div className="mega-col-promo">
                  <div className="mega-promo-card">
                    <span className="mega-promo-ic"><svg className="stroke"><use href="#ic-search" /></svg></span>
                    <strong>Not sure where you're leaking?</strong>
                    <p>Send a sample of your data. We'll come back with an estimate of what's recoverable.</p>
                    <a href="#cta" className="btn btn-primary btn-sm">Get an estimate</a>
                  </div>
                  <div className="mega-col-divider"></div>
                  <a href="#solutions" className="mega-more-link">All solutions <svg className="stroke"><use href="#ic-arrow-right" /></svg></a>
                </div>
              </div>
            </div>
          </div>
          <div className="mega-item mega-item-static">
            <button className="mega-trigger" aria-haspopup="true" aria-expanded="false">
              <span>Learning Center</span><svg className="chev stroke"><use href="#ic-chev" /></svg>
            </button>
            <div className="mega-panel mega-panel-xl mega-panel-cols">
              <div className="mega-grid mega-grid-4">
                <div className="mega-col">
                  <span className="mega-col-label">Read</span>
                  <a href="#" className="mega-row">
                    <span className="ic"><svg className="stroke"><use href="#ic-doc" /></svg></span>
                    <span className="mega-row-text"><strong>Blog</strong><p>Finance operations, automation, controls</p></span>
                  </a>
                  <a href="#" className="mega-row">
                    <span className="ic"><svg className="stroke"><use href="#ic-doc" /></svg></span>
                    <span className="mega-row-text"><strong>Guides</strong><p>Deep dives on rebates, close and reconciliation</p></span>
                  </a>
                  <a href="#" className="mega-row">
                    <span className="ic"><svg className="stroke"><use href="#ic-search" /></svg></span>
                    <span className="mega-row-text"><strong>Glossary</strong><p>Ship &amp; debit, SPA, GRNI, N-way and more</p></span>
                  </a>
                </div>
                <div className="mega-col">
                  <span className="mega-col-label">Proof</span>
                  <a href="#" className="mega-row">
                    <span className="ic"><svg className="stroke"><use href="#ic-badge" /></svg></span>
                    <span className="mega-row-text"><strong>Case Studies</strong><p>What we found, and what it was worth</p></span>
                  </a>
                  <a href="#trusted" className="mega-row">
                    <span className="ic"><svg className="stroke"><use href="#ic-user" /></svg></span>
                    <span className="mega-row-text"><strong>Customers</strong><p>Who trusts DataTwin with their close</p></span>
                  </a>
                </div>
                <div className="mega-col">
                  <span className="mega-col-label">Tools &amp; downloads</span>
                  <a href="#" className="mega-row">
                    <span className="ic"><svg className="stroke"><use href="#ic-doc" /></svg></span>
                    <span className="mega-row-text"><strong>The 200+ Close KPI Catalogue <span className="mega-tag amber">PDF</span></strong><p>Every KPI we track, by process area</p></span>
                  </a>
                  <a href="#" className="mega-row">
                    <span className="ic"><svg className="stroke"><use href="#ic-gauge" /></svg></span>
                    <span className="mega-row-text"><strong>Recovery Estimator</strong><p>Share a sample, get a number back</p></span>
                  </a>
                </div>
                <div className="mega-col-promo">
                  <div className="mega-promo-card">
                    <strong>The Close KPI Catalogue</strong>
                    <p>All 200+ KPIs we score across inventory, rev rec, cash application and payments.</p>
                    <a href="#" className="btn btn-primary btn-sm">Download free</a>
                  </div>
                  <div className="mega-col-divider"></div>
                  <a href="#" className="mega-more-link">Latest articles <svg className="stroke"><use href="#ic-arrow-right" /></svg></a>
                </div>
              </div>
            </div>
          </div>
          <a href="#trusted" className="mega-trigger">Customers</a>
          <a href="#cta" className="mega-trigger">Contact</a>
        </nav>
        <div className="nav-right">
          <a href="#recoverable" className="btn btn-primary btn-sm nav-cta">What can we recover?</a>
          <button className="theme-toggle" id="themeToggle" aria-label="Toggle color theme">
            <svg className="icon-moon stroke"><use href="#ic-moon" /></svg>
            <svg className="icon-sun stroke"><use href="#ic-sun" /></svg>
          </button>
          <button className="menu-btn" id="menuBtn" aria-haspopup="true" aria-expanded="false" aria-controls="drawer">
            <span>Menu</span>
            <svg className="stroke" style={{ width: "16px", height: "16px" }}><use href="#ic-burger" /></svg>
          </button>
        </div>
      </div>
    </header>
  );
}
