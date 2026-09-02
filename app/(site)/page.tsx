import HomeScripts from "@/components/HomeScripts";

export default function HomePage() {
  return (
    <>
      {/* ============================= HERO ============================= */}
      <section className="hero">
        <div className="hero-aurora"></div>
        <div className="ledger-grid"></div>
        <div className="wrap hero-inner">
          <span className="eyebrow">The finance observability platform for the office of the CFO</span>
          <h1><span className="grad-text">Recover first.</span><br />Never lose it again.</h1>
          <p className="hero-desc">We find what you have already lost &amp; get it back. Then use the same rules to check every transaction in real-time to ensure you don't lose anymore.</p>

          <div className="hero-stat">
            <span className="hero-stat-num">2 min</span>
            <span className="hero-stat-sep"></span>
            <span>That's how fast you get a recoverable number.</span>
          </div>

          <p className="hero-composer-hint">What isn't adding up in your case? Cash, tax, the numbers or the controls behind them — tell us, and we'll show you where we'd look.</p>

          <div className="hero-composer">
            <div className="hero-composer-box" id="heroComposerBox">
              <span className="hero-input-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <defs>
                    <linearGradient id="heroSparkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--brand)" />
                      <stop offset="100%" stopColor="var(--brand-2)" />
                    </linearGradient>
                  </defs>
                  <path d="M12 2.5 13.8 9.4 20.8 11 13.8 12.6 12 19.5 10.2 12.6 3.2 11 10.2 9.4 Z" fill="url(#heroSparkGrad)" />
                </svg>
              </span>
              <input type="text" id="heroMainInput" placeholder="How much are we losing to duplicate payments?" aria-label="Describe your finance problem" autoComplete="off" />
              <button aria-label="Submit" id="heroMainBtn"><svg className="icon stroke" style={{ width: "15px", height: "15px" }}><use href="#ic-arrow-right" /></svg></button>
            </div>
            <div className="hero-suggestions">
              <button type="button" className="hero-suggestion">We're paying distributor claims we can't verify</button>
              <button type="button" className="hero-suggestion">Duplicate and overpaid vendor invoices</button>
              <button type="button" className="hero-suggestion">Input tax credit we never claimed</button>
            </div>
          </div>

          <div className="trust-row">
            <span className="trust-line"><svg className="stroke" style={{ width: "14px", height: "14px", color: "var(--brand-2)", flexShrink: "0" }}><use href="#ic-lock" /></svg>Read-only. No process change</span>
            <span className="trust-line"><svg className="stroke" style={{ width: "14px", height: "14px", color: "var(--brand-2)", flexShrink: "0" }}><use href="#ic-layers" /></svg>Runs above SAP, NetSuite and Tally — no migration</span>
            <span className="trust-line"><svg className="stroke" style={{ width: "14px", height: "14px", color: "var(--brand-2)", flexShrink: "0" }}><use href="#ic-badge" /></svg>ISO 27001 certified · SOC 2 attested</span>
          </div>
        </div>
      </section>

      {/* ============================= WHAT CAN BE RECOVERED ============================= */}
      <section className="section" id="recoverable">
        <div className="arc-glow g-blue"></div>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Quantified in about two minutes</span>
            <h2>What can be recovered?</h2>
          </div>

          <div className="recov-list">
            <article className="recov-row rc-1">
              <span className="recov-bar" aria-hidden="true"></span>
              <span className="recov-num">01</span>
              <span className="recov-ic"><svg className="icon stroke"><use href="#ic-cash" /></svg></span>
              <h3>Cash recoverable</h3>
              <p className="recov-desc">Duplicate payments, paid above contract, discounts never taken, many more.</p>
              <span className="recov-payoff">Money back to the bank</span>
            </article>

            <article className="recov-row rc-2">
              <span className="recov-bar" aria-hidden="true"></span>
              <span className="recov-num">02</span>
              <span className="recov-ic"><svg className="icon stroke"><use href="#ic-tax" /></svg></span>
              <h3>Tax recoverable</h3>
              <p className="recov-desc">Unclaimed input credit, rate mismatches, sales return mismatches, many more.</p>
              <span className="recov-payoff">Credit or refund</span>
            </article>

            <article className="recov-row rc-3">
              <span className="recov-bar" aria-hidden="true"></span>
              <span className="recov-num">03</span>
              <span className="recov-ic"><svg className="icon stroke"><use href="#ic-misstate" /></svg></span>
              <h3>Misstated</h3>
              <p className="recov-desc">GR not accrued, prepaids not amortised, provisions never released &amp; so on.</p>
              <span className="recov-payoff">Audit readiness</span>
            </article>

            <article className="recov-row rc-4">
              <span className="recov-bar" aria-hidden="true"></span>
              <span className="recov-num">04</span>
              <span className="recov-ic"><svg className="icon stroke"><use href="#ic-control" /></svg></span>
              <h3>Control weakness</h3>
              <p className="recov-desc">Duplicate vendors, invoices just under approval limits, self-approval &amp; others.</p>
              <span className="recov-payoff">Why failures repeat?</span>
            </article>
          </div>

          <div className="recov-close">
            <h3 className="grad-text">Why failures repeat?</h3>
            <div className="recov-compare">
              <div className="cmp sample">
                <span className="cmp-label">The audit</span>
                <div className="cmp-dots" aria-hidden="true"><i></i><i></i><i></i></div>
                <p>Tests a sample — reports instances.</p>
              </div>
              <div className="cmp pop">
                <span className="cmp-label">DataTwin</span>
                <div className="cmp-dots" aria-hidden="true"></div>
                <p>Reads the population — a number on every finding.</p>
              </div>
            </div>
            <p className="recov-close-line">An auditor tests a sample and reports instances. <strong>DataTwin reads the population &amp; then puts a number on every finding.</strong></p>
          </div>
        </div>
      </section>

      {/* ============================= HOW DARP WORKS ============================= */}
      <section className="section darp-section" id="darp">
        <div className="arc-glow g-violet"></div>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow c-violet">Discover · Assess · Recover · Prevent</span>
            <h2>How DARP works</h2>
          </div>

          <div className="darp-track">
            <div className="darp-step">
              <span className="darp-letter">D</span>
              <h3>Discover</h3>
              <p>Read-only. No process change.</p>
            </div>
            <div className="darp-step">
              <span className="darp-letter">A</span>
              <h3>Assess</h3>
              <p>You see the number first.</p>
            </div>
            <div className="darp-step">
              <span className="darp-letter">R</span>
              <h3>Recover</h3>
              <p>The engagement pays for itself.</p>
            </div>
            <div className="darp-step">
              <span className="darp-letter">P</span>
              <h3>Prevent</h3>
              <p>Observability goes live.</p>
            </div>
          </div>

          <div className="darp-note">
            <svg className="stroke" aria-hidden="true"><use href="#ic-loop" /></svg>
            <p><strong className="hl">Finance observability</strong> is continuously checking every transaction against the business goals and standards you're held to, so when problems surface, the cost to fix is still low. <strong>One engine:</strong> the rules you put in during Recover run in real-time to Prevent loss. <strong>No second build needed.</strong></p>
          </div>

          <div className="darp-trusted">
            <span className="darp-trusted-label">Trusted by finance teams at</span>
            <div className="logo-marquee">
              <div className="logo-track">
                <span className="logo-name">Blue Dart</span>
                <span className="logo-name">Dr Agarwal's</span>
                <span className="logo-name">SunEdison</span>
                <span className="logo-name">CMS</span>
                <span className="logo-name">Veranda</span>
                <span className="logo-name">Edureka</span>
                <span className="logo-name">Connect India</span>
                <span className="logo-name">J.K. Shah Classes</span>
                <span className="logo-name" aria-hidden="true">Blue Dart</span>
                <span className="logo-name" aria-hidden="true">Dr Agarwal's</span>
                <span className="logo-name" aria-hidden="true">SunEdison</span>
                <span className="logo-name" aria-hidden="true">CMS</span>
                <span className="logo-name" aria-hidden="true">Veranda</span>
                <span className="logo-name" aria-hidden="true">Edureka</span>
                <span className="logo-name" aria-hidden="true">Connect India</span>
                <span className="logo-name" aria-hidden="true">J.K. Shah Classes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= PROBLEM ============================= */}
      <section className="section" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">The situation</span>
            <h2>The ERP records the transaction. The leakage happens around it.</h2>
            <p>Your system records transactions as they come. It cannot reconcile the differences as the evidence that would settle them sits outside it. So reconciliation is manual or outside the system. That's where the money leaks.</p>
          </div>
          <div className="card problem-grid" style={{ overflow: "hidden" }}>
            <div className="problem-item">
              <div className="ic"><svg className="icon stroke"><use href="#ic-layers" /></svg></div>
              <div><h4>The ERP is incomplete.</h4><p>It records the transaction as it happens. It does not see the data outside the system that affects it &amp; so it cannot reconcile it.</p></div>
            </div>
            <div className="problem-item">
              <div className="ic"><svg className="icon stroke"><use href="#ic-search" /></svg></div>
              <div><h4>Your auditor tests a sample.</h4><p>Sampling helps to form an opinion and does not find all issues. The full population audit finds thousands of items below materiality that add up.</p></div>
            </div>
            <div className="problem-item">
              <div className="ic"><svg className="icon stroke"><use href="#ic-lock" /></svg></div>
              <div><h4>The proof lives outside the system.</h4><p>Contracts, POS files, gateway reports, bank lines, vendor-filed returns. Nobody reconciles all of it, so nobody can prove the entry was right.</p></div>
            </div>
            <div className="problem-item">
              <div className="ic"><svg className="icon stroke"><use href="#ic-gauge" /></svg></div>
              <div><h4>Fixing it normally means a project.</h4><p>Which is why it doesn't get fixed. The cost lands up front, the business case is a projection, and the benefit arrives long after.</p></div>
            </div>
          </div>
          <div className="problem-cta">
            <div className="problem-cta-body">
              <span className="problem-cta-kick">The order most systems get backwards</span>
              <h3 className="grad-text">Analyse first. Record later.</h3>
              <p>Every transaction is checked against everything that should agree with it before it becomes a number you have to defend.</p>
              <a href="#cta" className="problem-cta-btn">Tell us your situation <svg className="stroke"><use href="#ic-arrow-right" /></svg></a>
            </div>
            <div className="order-flip" aria-hidden="true">
              <div className="of-line of-wrong">
                <span className="of-cap">Most systems</span>
                <span className="of-seq"><b>Record</b><i>then</i><b>Analyse</b></span>
              </div>
              <div className="of-divider"></div>
              <div className="of-line of-right">
                <span className="of-cap">DataTwin</span>
                <span className="of-seq"><b>Analyse</b><i>then</i><b>Record</b></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= SOLUTIONS ============================= */}
      <section className="section" id="solutions">
        <div className="arc-glow g-blue"></div>
        <div className="wrap">
          <div className="section-head" style={{ position: "relative", zIndex: "1" }}>
            <span className="eyebrow">Solutions &amp; Use Cases</span>
            <h2>One engine. Every place money is calculated, owed or moved.</h2>
            <p>DataTwin isn't a suite of products stitched together. It's one engine that reads the population, rebuilds what should have happened, values the difference, pointed at a different set of agreements and controls for each process below.</p>
          </div>

          <div className="sol-group-label">Core finance operations</div>
          <div className="sol-cards">
            <div className="card sol-card">
              <span className="sol-ic"><svg className="icon stroke"><use href="#ic-cash" /></svg></span>
              <h4>Accounts Payable.</h4>
              <p>Touchless capture, N-way matching, duplicate and overpayment prevention. Approvals that don't stall, accounting treatment validated.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-ic"><svg className="icon stroke"><use href="#ic-recover" /></svg></span>
              <h4>Accounts Receivable.</h4>
              <p>Automated billing, cash application, deductions and disputes, risk-ranked collections, revenue in the right period.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-ic"><svg className="icon stroke"><use href="#ic-tax" /></svg></span>
              <h4>Taxation Reconciliation.</h4>
              <p>Returns, input credits, withholding and ledgers reconciled against the books. Differences corrected before filing, not after a notice.</p>
            </div>
          </div>

          <div className="sol-group-label">Rebates, incentives &amp; payouts</div>
          <div className="sol-cards">
            <div className="card sol-card featured">
              <span className="sol-ic"><svg className="icon stroke"><use href="#ic-badge" /></svg></span>
              <h4>Channel Rebates</h4>
              <p>Validating each claim from the distributor, be it ship &amp; debit or any other scheme, against distributor data, the contract and our own.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-ic"><svg className="icon stroke"><use href="#ic-user" /></svg></span>
              <h4>Partner Payouts</h4>
              <p>Reseller, affiliate, franchise and referral payouts recalculated from the agreement and validated against source activity.</p>
            </div>
            <div className="card sol-card">
              <span className="sol-ic"><svg className="icon stroke"><use href="#ic-gauge" /></svg></span>
              <h4>Sales Commissions &amp; Incentives</h4>
              <p>Plans calculated from booked and collected revenue. Clawbacks, adjustments and accruals with statements that survive a query.</p>
            </div>
          </div>

          <div className="sol-more">
            <div className="sol-group-label">And many more…</div>
            <p className="sol-more-brief">Wherever a reconciliation is needed, where the terms that govern it sit in contracts, agreements and documents outside your systems, and the data that settles it is spread across several more, the same four stages of DARP apply.</p>
            <div className="usecase-cloud">
            <span className="usecase-pill">Fixed asset accounting</span>
            <span className="usecase-pill">Inter-company reconciliation</span>
            <span className="usecase-pill">Bank reconciliation</span>
            <span className="usecase-pill">GRNI &amp; accrual ageing</span>
            <span className="usecase-pill">Expense &amp; T&amp;E</span>
            <span className="usecase-pill">Payroll reconciliation</span>
            <span className="usecase-pill">Freight &amp; logistics billing</span>
            <span className="usecase-pill">Subscription &amp; usage billing</span>
            <span className="usecase-pill">Royalty accounting</span>
            <span className="usecase-pill">Franchise fees</span>
            <span className="usecase-pill">Warranty claims</span>
            <span className="usecase-pill">Trade spend &amp; co-op</span>
            <span className="usecase-pill">Price protection</span>
            <span className="usecase-pill">Stock rotation</span>
            <span className="usecase-pill">Deposits &amp; retentions</span>
            <span className="usecase-pill">Import duty &amp; drawback</span>
            <span className="usecase-pill">Marketplace settlements</span>
            <span className="usecase-pill">Loyalty &amp; points liability</span>
            <span className="usecase-pill">Vendor master hygiene</span>
            <span className="usecase-pill">Statutory returns</span>
            <a href="#cta" className="usecase-pill usecase-pill-cta">Tell us yours</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= WHAT HAPPENS NEXT — timeline ============================= */}
      <section className="section" style={{ background: "var(--bg-panel-2)" }} id="next">
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">What happens next</span>
            <h2>You'll have a number before you have a contract.</h2>
            <p>No gated demo, no discovery call before you know what we do, and no commitment until the figure is in front of you. Four steps, and you control how far you go.</p>
          </div>
          <div className="timeline">
            <div className="tl-track" aria-hidden="true">
              <span className="tl-track-line"></span>
              <span className="tl-track-ticks"></span>
              <span className="tl-track-fill"><span className="tl-track-fill-line"></span><span className="tl-track-fill-ticks"></span></span>
              <span className="tl-track-cursor"></span>
            </div>
            <div className="tl-steps">
              <div className="tl-step">
                <span className="tl-node">01</span>
                <div className="tl-content">
                  <span className="tl-tag">No form</span>
                  <h4>Help us understand your suspicion</h4>
                  <p>Describe your process or pick the symptom that you face.</p>
                </div>
              </div>
              <div className="tl-step">
                <span className="tl-node">02</span>
                <div className="tl-content">
                  <span className="tl-tag">30 seconds</span>
                  <h4>Tell us who you are</h4>
                  <p>Name, work email, company. We come back with what we'd look at first and what it usually turns out to be worth.</p>
                </div>
              </div>
              <div className="tl-step">
                <span className="tl-node">03</span>
                <div className="tl-content">
                  <span className="tl-tag">Read-only</span>
                  <h4>Give us read access to yours</h4>
                  <p>One period, one process. Read-only, nothing changes. We run Discover and Assess and return your number.</p>
                </div>
              </div>
              <div className="tl-step">
                <span className="tl-node">04</span>
                <div className="tl-content">
                  <span className="tl-tag">The goal</span>
                  <h4>Book 30 minutes</h4>
                  <p>Walk through of our findings with you. You've seen the number; the meeting is what to collect first, and how fast.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= OUTCOMES ============================= */}
      <section className="section" id="outcomes">
        <div className="arc-glow g-green"></div>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Outcomes</span>
            <h2>What you get, in the order you get it</h2>
            <p>The first three arrive before you've adopted anything. The rest come with observability.</p>
          </div>

          <div className="outcomes">
            <div className="outcome-phase p1">
              <div className="outcome-phase-head">
                <span className="outcome-phase-num">Outcomes 1–3</span>
                <span className="outcome-phase-label">Before you've adopted anything</span>
              </div>
              <div className="outcome-list">
                <div className="outcome-item" style={{ "--i": "0" } as React.CSSProperties}>
                  <span className="outcome-check"><svg className="stroke"><use href="#ic-check" /></svg></span>
                  <div className="outcome-body">
                    <h4>Cash back in the bank</h4>
                    <p>Overpayments, unapplied credits, discounts never taken and advances never recovered — collected through your existing settlement process.</p>
                  </div>
                </div>
                <div className="outcome-item" style={{ "--i": "1" } as React.CSSProperties}>
                  <span className="outcome-check"><svg className="stroke"><use href="#ic-check" /></svg></span>
                  <div className="outcome-body">
                    <h4>Tax credits claimed while the window is open</h4>
                    <p>Input credit, reverse charge, withholding at the wrong rate, duty never reclaimed — each one checked against its statutory deadline.</p>
                  </div>
                </div>
                <div className="outcome-item" style={{ "--i": "2" } as React.CSSProperties}>
                  <span className="outcome-check"><svg className="stroke"><use href="#ic-check" /></svg></span>
                  <div className="outcome-body">
                    <h4>A defensible position for the auditor</h4>
                    <p>Misstatements corrected by period with the evidence attached, and a restatement pack prepared rather than improvised.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="outcome-phase p2">
              <div className="outcome-phase-head">
                <span className="outcome-phase-num">Outcomes 4–6</span>
                <span className="outcome-phase-label">With observability</span>
              </div>
              <div className="outcome-list">
                <div className="outcome-item" style={{ "--i": "0" } as React.CSSProperties}>
                  <span className="outcome-check"><svg className="stroke"><use href="#ic-check" /></svg></span>
                  <div className="outcome-body">
                    <h4>The same leak doesn't reopen</h4>
                    <p>Every rule that found money in your history runs at transaction entry from then on — instrumented permanently, against goals and standards alike.</p>
                  </div>
                </div>
                <div className="outcome-item" style={{ "--i": "1" } as React.CSSProperties}>
                  <span className="outcome-check"><svg className="stroke"><use href="#ic-check" /></svg></span>
                  <div className="outcome-body">
                    <h4>Work stops scaling with headcount</h4>
                    <p>Matching, reconciling, validating and evidencing are handled by the engine — people move to judgment work.</p>
                  </div>
                </div>
                <div className="outcome-item" style={{ "--i": "2" } as React.CSSProperties}>
                  <span className="outcome-check"><svg className="stroke"><use href="#ic-check" /></svg></span>
                  <div className="outcome-body">
                    <h4>The close starts from an agreed position</h4>
                    <p>Balances reconciled continuously as transactions land, so period end begins with the numbers already tied out.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= FINAL CTA ============================= */}
      <section className="section-tight" id="cta">
        <div className="wrap">
          <div className="cta-section">
            <div className="ledger-grid" style={{ opacity: ".4" }}></div>
            <div className="glow-blob cta-glow-a"></div>
            <div className="glow-blob cta-glow-b"></div>
            <div style={{ position: "relative" }}>
              <span className="eyebrow" style={{ marginBottom: "20px" }}>Get started</span>
              <h2>Tell us your problem.<br />We'll tell you what we can recover.</h2>
              <p>Working from the transaction history your systems already hold, we run our discovery. Nothing changes in your systems, nobody in your team changes how they work, and you see what's recoverable before there's anything to sign. If the number isn’t worth acting on, at least you know you’re safe.</p>
              <div className="cta-buttons">
                <a href="#top" className="btn btn-primary">Tell us your problem <svg className="icon stroke" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg></a>
                <a href="mailto:solve@datatwin.ai" className="btn btn-ghost">Email us instead</a>
              </div>
              <div className="cta-email mono">solve@datatwin.ai</div>
            </div>
          </div>
        </div>
      </section>
      <HomeScripts />
    </>
  );
}
