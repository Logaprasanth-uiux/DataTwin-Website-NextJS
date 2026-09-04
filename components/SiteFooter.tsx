export default function SiteFooter() {
  return (
    <footer>
      <div className="glow-blob footer-glow-a"></div>
      <div className="glow-blob footer-glow-b"></div>
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/datatwin-logo.png" alt="DataTwin" />
            <p>AI-native financial intelligence for the office of the CFO. We find, recover and prevent financial leakage across finance processes — on top of the systems you already run. Discover, Assess &amp; Recover proves the number before you adopt anything; prevention runs the same rules forwards, at transaction entry.</p>
            <div className="footer-trust">ISO 27001 certified · SOC 2 attested · Cloud agnostic</div>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn"><svg className="stroke"><use href="#ic-linkedin" /></svg></a>
              <a href="#" aria-label="Website"><svg className="stroke"><use href="#ic-globe" /></svg></a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Platform</h5>
            <ul>
              <li><a href="/platform-overview">Platform Overview</a></li>
              <li><a href="/darp-framework">DARP Framework</a></li>
              <li><a href="/security">Security</a></li>
              <li><a href="/how-ai-is-used">How AI is used</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Product</h5>
            <ul>
              <li><a href="/accounts-payable">Accounts Payable</a></li>
              <li><a href="/accounts-receivable">Accounts Receivable</a></li>
              <li><a href="/taxation-reconciliation">Taxation Reconciliation</a></li>
              <li><a href="/reconciliation-audit">Reconciliation &amp; Audit</a></li>
              <li><a href="/channel-rebates">Channel Rebates</a></li>
              <li><a href="/partner-payouts">Partner Payouts</a></li>
              <li><a href="/sales-commissions">Sales Commissions</a></li>
              <li><a href="/fscp">FSCP</a></li>
              <li><a href="/close-kpi-catalogue">Close KPI Catalogue</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Customers</a></li>
              <li><a href="#">Case Studies</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#cta">Tell us your problem</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 DataTwin. All rights reserved.</span>
          <span><a href="mailto:solve@datatwin.ai">solve@datatwin.ai</a> · Chennai, India · <a href="#">Privacy</a> · <a href="#">Terms</a></span>
        </div>
      </div>
    </footer>
  );
}
