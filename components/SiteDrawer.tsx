// Mobile drawer + backdrop scrim. Opened from the header "Menu" button.
// Behaviour lives in components/ChromeScripts.tsx.
export default function SiteDrawer() {
  return (
    <>
      <div className="nav-scrim" id="navScrim"></div>
      <aside className="drawer" id="drawer" aria-hidden="true">
        <div className="drawer-head">
          <a href="#top" className="nav-logo"><img src="/datatwin-logo.png" alt="DataTwin" /></a>
          <button className="drawer-close" id="drawerClose" aria-label="Close menu">
            <svg className="stroke"><use href="#ic-close" /></svg>
          </button>
        </div>
        <nav className="drawer-nav">
          <div className="drawer-item" data-panel>
            <button className="drawer-item-btn"><span>Platform</span><svg className="chev stroke"><use href="#ic-chev" /></svg></button>
            <div className="drawer-panel">
              <div className="drawer-panel-inner">
                <div className="dp-col">
                  <span className="dp-col-label">Overview</span>
                  <a className="dp-link" href="/platform-overview"><svg className="stroke"><use href="#ic-layers" /></svg>Platform Overview</a>
                  <a className="dp-link" href="/darp-framework"><svg className="stroke"><use href="#ic-loop" /></svg>DARP Framework</a>
                  <a className="dp-link" href="/security"><svg className="stroke"><use href="#ic-shield" /></svg>Security &amp; Compliance</a>
                  <a className="dp-link" href="/how-ai-is-used"><svg className="stroke"><use href="#ic-spark" /></svg>How AI is Used</a>
                </div>
                <div className="dp-col">
                  <span className="dp-col-label">Solutions</span>
                  <a className="dp-link" href="/accounts-payable"><svg className="stroke"><use href="#ic-cash" /></svg>Accounts Payable</a>
                  <a className="dp-link" href="/accounts-receivable"><svg className="stroke"><use href="#ic-cash" /></svg>Accounts Receivable</a>
                  <a className="dp-link" href="/taxation-reconciliation"><svg className="stroke"><use href="#ic-tax" /></svg>Taxation Reconciliation</a>
                  <a className="dp-link" href="/channel-rebates"><svg className="stroke"><use href="#ic-badge" /></svg>Channel Rebates</a>
                </div>
              </div>
            </div>
          </div>
          <div className="drawer-item" data-panel>
            <button className="drawer-item-btn"><span>Products</span><svg className="chev stroke"><use href="#ic-chev" /></svg></button>
            <div className="drawer-panel">
              <div className="drawer-panel-inner">
                <div className="dp-col">
                  <span className="dp-col-label">Core finance operations</span>
                  <a className="dp-link" href="/accounts-payable"><svg className="stroke"><use href="#ic-cash" /></svg>Accounts Payable</a>
                  <a className="dp-link" href="/accounts-receivable"><svg className="stroke"><use href="#ic-cash" /></svg>Accounts Receivable</a>
                  <a className="dp-link" href="/taxation-reconciliation"><svg className="stroke"><use href="#ic-tax" /></svg>Taxation Reconciliation</a>
                  <a className="dp-link" href="/reconciliation-audit"><svg className="stroke"><use href="#ic-search" /></svg>Reconciliation &amp; Audit</a>
                </div>
                <div className="dp-col">
                  <span className="dp-col-label">Rebates, incentives &amp; payouts</span>
                  <a className="dp-link" href="/channel-rebates"><svg className="stroke"><use href="#ic-badge" /></svg>Channel Rebates</a>
                  <a className="dp-link" href="/channel-rebates-manufacturers"><svg className="stroke"><use href="#ic-shield" /></svg>For Manufacturers</a>
                  <a className="dp-link" href="/channel-rebates-distributors"><svg className="stroke"><use href="#ic-recover" /></svg>For Distributors</a>
                  <a className="dp-link" href="/partner-payouts"><svg className="stroke"><use href="#ic-user" /></svg>Partner Payouts</a>
                  <a className="dp-link" href="/sales-commissions"><svg className="stroke"><use href="#ic-gauge" /></svg>Sales Commissions</a>
                </div>
                <div className="dp-col">
                  <span className="dp-col-label">Close &amp; reporting</span>
                  <a className="dp-link" href="/fscp"><svg className="stroke"><use href="#ic-gauge" /></svg>FSCP</a>
                </div>
              </div>
            </div>
          </div>
          <div className="drawer-item" data-panel>
            <button className="drawer-item-btn"><span>Learning Center</span><svg className="chev stroke"><use href="#ic-chev" /></svg></button>
            <div className="drawer-panel">
              <div className="drawer-panel-inner">
                <div className="dp-col">
                  <span className="dp-col-label">Read</span>
                  <a className="dp-link" href="#"><svg className="stroke"><use href="#ic-doc" /></svg>Blog</a>
                  <a className="dp-link" href="#"><svg className="stroke"><use href="#ic-doc" /></svg>Guides</a>
                  <a className="dp-link" href="#"><svg className="stroke"><use href="#ic-search" /></svg>Glossary</a>
                </div>
                <div className="dp-col">
                  <span className="dp-col-label">Proof</span>
                  <a className="dp-link" href="#"><svg className="stroke"><use href="#ic-badge" /></svg>Case Studies</a>
                  <a className="dp-link" href="#trusted"><svg className="stroke"><use href="#ic-user" /></svg>Customers</a>
                </div>
                <div className="dp-col">
                  <span className="dp-col-label">Tools &amp; downloads</span>
                  <a className="dp-link" href="/close-kpi-catalogue"><svg className="stroke"><use href="#ic-doc" /></svg>The 200+ Close KPI Catalogue</a>
                  <a className="dp-link" href="#"><svg className="stroke"><use href="#ic-gauge" /></svg>Recovery Estimator</a>
                </div>
              </div>
            </div>
          </div>
          <a href="#trusted" className="drawer-item-link">Customers</a>
          <a href="#cta" className="drawer-item-link">Contact</a>
        </nav>
        <div className="drawer-foot">
          <a href="#recoverable" className="btn btn-primary">What can we recover? <svg className="icon stroke" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg></a>
          <div className="drawer-foot-note">Menu items shown are placeholders — pending your final list</div>
        </div>
      </aside>
    </>
  );
}
