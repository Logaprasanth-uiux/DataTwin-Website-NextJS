import type { Metadata } from "next";
import DarpFrameworkScripts from "@/components/DarpFrameworkScripts";

export const metadata: Metadata = {
  title: "The DARP Framework — Discover · Assess · Recover · Prevent | DataTwin",
  description:
    "One engine pointed in two directions. Discover, Assess and Recover finds the leak and gets the money back; Prevent runs the same rules forwards at transaction entry. Read-only to start, funded by what it recovers, no second build.",
};

export default function DarpFrameworkPage() {
  return (
    <>
      {/* ============================= HERO ============================= */}
      <section className="hero dfw-hero">
        <div className="hero-aurora"></div>
        <div className="ledger-grid"></div>
        <div className="wrap dfw-hero-grid">
          <div className="dfw-hero-inner">
            <span className="eyebrow c-violet">The DARP Framework</span>
            <h1>The framework that helps solve <span className="grad-text">all your finance issues</span></h1>

            <p className="dfw-kicker">
              <b>Discover.</b> <span className="sep"></span> <b>Assess.</b> <span className="sep"></span> <b>Recover.</b>
              <span className="turn"><svg className="stroke"><use href="#ic-loop" /></svg>Then prevent.</span>
            </p>

            <p className="dfw-hero-lead">
              Discover, Assess &amp; Recover identifies the leak and gets your money back. Prevent is your strategic solution to
              plug the leak for good, employing the same rules deployed during recovery.
            </p>

            <div className="dfw-chips">
              <span className="dfw-chip"><svg className="stroke"><use href="#ic-lock" /></svg>Read-only to start</span>
              <span className="dfw-chip"><svg className="stroke"><use href="#ic-search" /></svg>Full population, not a sample</span>
              <span className="dfw-chip"><svg className="stroke"><use href="#ic-gauge" /></svg>A number in about two minutes</span>
              <span className="dfw-chip"><svg className="stroke"><use href="#ic-recover" /></svg>Funded by what it recovers</span>
              <span className="dfw-chip"><svg className="stroke"><use href="#ic-loop" /></svg>No second build during Prevent</span>
            </div>

            <div className="dfw-hero-actions">
              <a href="/#cta" className="btn btn-primary">What can we recover? <svg className="icon stroke" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg></a>
              <a href="#how-it-works" className="btn btn-ghost">See the four stages</a>
            </div>
          </div>

          <div className="dfw-track" data-reveal>
            <span className="dfw-track-rail" aria-hidden="true"></span>
            <div className="dfw-step">
              <span className="l">D</span>
              <div className="dfw-step-body">
                <h3>Discover</h3>
                <p>A number in ~2 minutes. No contract.</p>
              </div>
            </div>
            <div className="dfw-step">
              <span className="l">A</span>
              <div className="dfw-step-body">
                <h3>Assess</h3>
                <p>Drill down and prioritise together.</p>
              </div>
            </div>
            <div className="dfw-step">
              <span className="l">R</span>
              <div className="dfw-step-body">
                <h3>Recover</h3>
                <p>Collect what was signed off.</p>
              </div>
            </div>
            <div className="dfw-step is-prevent">
              <span className="l">P</span>
              <div className="dfw-step-body">
                <h3>Prevent</h3>
                <p>The engine runs forwards.</p>
                <span className="turn-tag"><svg className="stroke"><use href="#ic-loop" /></svg>same rules, reversed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= WHY DARP ============================= */}
      <section className="section" id="why" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Why the DARP Framework</span>
            <h2>You&rsquo;ve been offered this multiple times before. And been disappointed every time.</h2>
            <p>Every CFO we meet has already heard a version of this pitch. Here&rsquo;s what was wrong with each one, and what we do instead.</p>
          </div>

          <div className="dfw-offer-grid">
            <div className="dfw-offer-col dfw-rise" data-reveal>
              <span className="k">What you&rsquo;ve already been offered</span>
              <div className="dfw-pitch">
                <span className="dfw-pitch-who">The software vendor</span>
                <span className="dfw-pitch-quote">&ldquo;Buy the platform. The business case comes with it.&rdquo;</span>
                <p className="dfw-pitch-flaw">The value is a projection built on someone else&rsquo;s benchmark, and you pay before it&rsquo;s tested against a single one of your own transactions.</p>
              </div>
              <div className="dfw-pitch">
                <span className="dfw-pitch-who">The recovery audit firm</span>
                <span className="dfw-pitch-quote">&ldquo;We&rsquo;ll find your duplicate payments for a share of what we recover.&rdquo;</span>
                <p className="dfw-pitch-flaw">Money comes back once. Nothing changes upstream, so the same leakage restarts the following quarter and you pay a contingency fee on it again.</p>
              </div>
              <div className="dfw-pitch">
                <span className="dfw-pitch-who">The controls programme</span>
                <span className="dfw-pitch-quote">&ldquo;A transformation project to fix the control environment.&rdquo;</span>
                <p className="dfw-pitch-flaw">Long, expensive and paid up front, with the benefit still unproven at the exact point you have to commit to it.</p>
              </div>
            </div>

            <div className="dfw-offer-col now dfw-rise" data-reveal>
              <span className="k">What DARP does instead</span>
              <div className="dfw-counter">
                <span className="cl">D</span>
                <div><h4>Evidence, not a benchmark</h4><p>Findings come from your own ledger, not an industry average. The number is yours because the data is yours.</p></div>
              </div>
              <div className="dfw-counter">
                <span className="cl">A</span>
                <div><h4>A number before a commitment</h4><p>The value is quantified and agreed before anyone signs for a platform. You decide with the figure in front of you.</p></div>
              </div>
              <div className="dfw-counter">
                <span className="cl">R</span>
                <div><h4>Funded by money already written off</h4><p>The engagement pays for itself out of cash the business had given up on. No new budget line to defend.</p></div>
              </div>
              <div className="dfw-counter">
                <span className="cl">P</span>
                <div><h4>Observability, not another audit</h4><p>What found the money running backwards runs forwards at transaction entry, permanently instrumented against your goals and the standards. No second build.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= THE STRUCTURAL POINT — one engine, two directions ============================= */}
      <section className="section" id="engine">
        <div className="arc-glow g-blue"></div>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">The structural point</span>
            <h2>The diagnostic and the product are <span className="grad-text">one engine pointed in two directions</span>.</h2>
          </div>

          <p className="dfw-engine-lead">
            Discover, Assess and Recover (DAR) acquires your history, processes and analyses it, and hands you the recovery
            actions to take. Recover first. Then, if you are happy, point the same actions forwards at transaction entry.
            Nothing is rebuilt, so no cost for a second build.
          </p>

          <div className="dfw-engine" data-reveal>
            <div className="ledger-grid"></div>
            <div className="dfw-engine-row">
              <div className="dfw-side past">
                <span className="k"><svg className="stroke"><use href="#ic-recover" /></svg>DAR · runs backwards</span>
                <strong>Your transaction history</strong>
                <span className="sub">Acquired, processed, analysed against every rule. Findings handed back to you.</span>
              </div>

              <div className="dfw-core">
                <span className="ic"><svg className="stroke"><use href="#ic-loop" /></svg></span>
                <strong>The same rule set</strong>
                <span>built once</span>
              </div>

              <div className="dfw-side future">
                <span className="k"><svg className="stroke"><use href="#ic-loop" /></svg>Prevent · runs forwards</span>
                <strong>Each transaction at entry</strong>
                <span className="sub">The identical rules test every new transaction as it arrives, before it posts.</span>
              </div>
            </div>

            <div className="dfw-flowline" aria-hidden="true">
              <svg viewBox="0 0 600 26" preserveAspectRatio="none">
                <path className="back" d="M300,13 L60,13 M60,13 l10,-5 M60,13 l10,5" />
                <path className="fwd" d="M300,13 L540,13 M540,13 l-10,-5 M540,13 l-10,5" />
                <text className="lbl" x="10" y="24">history</text>
                <text className="lbl" x="512" y="24">at entry</text>
              </svg>
            </div>

            <p className="dfw-engine-cap"><b>One rule set.</b> Built once in Recover, pointed backwards, then forwards. Nothing rebuilt between the two.</p>
          </div>

          <div className="dfw-find-close" style={{ marginTop: "clamp(28px,3.5vw,40px)" }}>
            <p>That is the claim. Here is what it looked like for someone else.</p>
            <a href="#" className="dfw-lnk soon">Read a recovery case study <svg className="stroke"><use href="#ic-arrow-right" /></svg></a>
          </div>
        </div>
      </section>

      {/* ============================= HOW IT WORKS ============================= */}
      <section className="section" id="how-it-works" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">How it works</span>
            <h2>Suspicion to proof to cash to control</h2>
            <p>Four stages. You can stop after any of them, and most of the value arrives before you&rsquo;ve committed to anything.</p>
          </div>

          <div className="dfw-stages" data-reveal>
            {/* D */}
            <div className="dfw-stage">
              <span className="dfw-stage-num">D</span>
              <div className="dfw-stage-card">
                <span className="dfw-stage-badge">Before any contract</span>
                <div className="dfw-stage-head"><span className="l">D</span><h3>Discover</h3></div>
                <p>We ingest the transaction history your systems already hold and test the full population for every anomaly, duplicate, mismatch and unclaimed entitlement.</p>
                <div className="dfw-need-get">
                  <div className="dfw-ng need">
                    <h5><svg className="stroke"><use href="#ic-key" /></svg>What we need</h5>
                    <p>Read access to the relevant history, an export is enough. For payables that means AP transactions and the vendor master. We are reading, not writing.</p>
                  </div>
                  <div className="dfw-ng get">
                    <h5><svg className="stroke"><use href="#ic-check" /></svg>What you get</h5>
                    <p>The total recoverable number in about two minutes of run time, yours before there is anything to sign. The waiting is access and NDA, not analysis.</p>
                  </div>
                </div>
                <div className="dfw-stage-cta">
                  <a href="/#cta" className="btn btn-primary btn-sm">Get to this point <svg className="icon stroke" style={{ width: "14px", height: "14px" }}><use href="#ic-arrow-right" /></svg></a>
                </div>
              </div>
            </div>

            {/* decision threshold */}
            <div className="dfw-decide">
              <span className="dfw-decide-gate"><span className="bar"></span>Contract</span>
              <p><b>You decide here.</b> You have a quantified number and you have paid nothing. Everything above happened on your data, with no commitment. Everything below starts once a contract is in place.</p>
            </div>

            {/* A */}
            <div className="dfw-stage">
              <span className="dfw-stage-num">A</span>
              <div className="dfw-stage-card">
                <span className="dfw-stage-badge">After contract</span>
                <div className="dfw-stage-head"><span className="l">A</span><h3>Assess</h3></div>
                <p>Now the number opens up. Every finding is drilled to the last level: the transaction, the clause breached, the evidence behind it. Assess ends with your sign-off on what gets pursued.</p>
                <div className="dfw-need-get">
                  <div className="dfw-ng need">
                    <h5><svg className="stroke"><use href="#ic-doc" /></svg>What we need</h5>
                    <p>Contracts, price agreements and program terms where they govern the amount, plus your team&rsquo;s judgement on what is collectible and what is worth the relationship.</p>
                  </div>
                  <div className="dfw-ng get">
                    <h5><svg className="stroke"><use href="#ic-check" /></svg>What you get</h5>
                    <p>Drill-down to the last level on every finding, a prioritised list agreed jointly, and a signed-off recovery scope before a single claim goes out.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* R */}
            <div className="dfw-stage">
              <span className="dfw-stage-num">R</span>
              <div className="dfw-stage-card">
                <span className="dfw-stage-badge">Execution</span>
                <div className="dfw-stage-head"><span className="l">R</span><h3>Recover</h3></div>
                <p>We do the work to bring back what you signed off. Each finding becomes an instrument to follow up with the counterparty, and we help you chase it rather than just handing you a list.</p>
                <div className="dfw-need-get">
                  <div className="dfw-ng need">
                    <h5><svg className="stroke"><use href="#ic-user" /></svg>What we need</h5>
                    <p>Your existing route to the counterparty, and someone on your side to countersign what goes out.</p>
                  </div>
                  <div className="dfw-ng get">
                    <h5><svg className="stroke"><use href="#ic-check" /></svg>What you get</h5>
                    <p>Debit notes, revised returns, correcting journals and dispute packs, each carrying its evidence. Cash and credit tracked through to settlement.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* P */}
            <div className="dfw-stage is-prevent">
              <span className="dfw-stage-num">P</span>
              <div className="dfw-stage-card">
                <span className="dfw-stage-badge">The engine turns around</span>
                <div className="dfw-stage-head"><span className="l">P</span><h3>Prevent</h3></div>
                <p>Everything until now ran over historical data. Prevent points the identical engine forwards: the same rules now test each transaction as it arrives. You built them once; they simply change direction.</p>
                <div className="dfw-need-get">
                  <div className="dfw-ng need">
                    <h5><svg className="stroke"><use href="#ic-swap" /></svg>What we need</h5>
                    <p>A live connection rather than an export, and agreement on who owns each exception type.</p>
                  </div>
                  <div className="dfw-ng get">
                    <h5><svg className="stroke"><use href="#ic-check" /></svg>What you get</h5>
                    <p>The same tests running at the point of entry, exceptions routed with an owner and an SLA, and a leakage rate you can watch decline month over month.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= WHAT DISCOVER FINDS ============================= */}
      <section className="section" id="what-discover-finds">
        <div className="arc-glow g-violet"></div>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow c-violet">What Discover finds</span>
            <h2>Four kinds of finding, valued four different ways</h2>
            <p>These are outcome types, not topic areas. The first two put cash back. The third is audit position with no cash attached, and we say so plainly, because that is what makes the first two credible. The fourth explains why the other three keep recurring.</p>
          </div>

          <div className="dfw-find-grid" data-reveal>
            <article className="dfw-find f1">
              <div className="dfw-find-top">
                <span className="dfw-find-num">01</span>
                <div className="dfw-find-titles">
                  <h3>Cash recoverable</h3>
                  <span className="dfw-find-payoff">Money back to the bank</span>
                </div>
              </div>
              <ul>
                <li>Duplicate and near-duplicate payments across entities</li>
                <li>Paid above contract or PO price</li>
                <li>Tier and volume discounts never applied</li>
                <li>Early-payment discounts available, not taken</li>
                <li>Credit notes and debit balances never applied</li>
                <li>Advances, deposits and retentions not recovered</li>
                <li>Quantity paid exceeds quantity received</li>
              </ul>
              <p className="dfw-find-valued"><b>How it is valued</b>The delta between paid and payable, netted against open vendor balances and prior claims.</p>
            </article>

            <article className="dfw-find f2">
              <div className="dfw-find-top">
                <span className="dfw-find-num">02</span>
                <div className="dfw-find-titles">
                  <h3>Tax recoverable</h3>
                  <span className="dfw-find-payoff">Credit or refund</span>
                </div>
              </div>
              <ul>
                <li>Input credit unclaimed, or taken on blocked spend</li>
                <li>Purchase register vs vendor-filed return mismatch</li>
                <li>Reverse charge missed; wrong place of supply</li>
                <li>Withholding at the wrong rate or section</li>
                <li>Thresholds missed on aggregated vendor spend</li>
                <li>Lower-deduction certificates expired or unapplied</li>
                <li>Import duty paid, credit never taken</li>
              </ul>
              <p className="dfw-find-valued"><b>How it is valued</b>Credit claimable against credit at risk, with the statutory claim window checked per item.</p>
            </article>

            <article className="dfw-find f3">
              <div className="dfw-find-top">
                <span className="dfw-find-num">03</span>
                <div className="dfw-find-titles">
                  <h3>Misstated</h3>
                  <span className="dfw-find-payoff">Wrong numbers, no cash</span>
                </div>
              </div>
              <ul>
                <li>Goods received, not invoiced, not accrued</li>
                <li>Accrual raised and invoice booked: double count</li>
                <li>Accruals never reversed the following period</li>
                <li>Prepaids expensed in full, not amortised</li>
                <li>Provisions never released after settlement</li>
                <li>Capex expensed; wrong entity or cost centre</li>
                <li>FX rate or rate-date errors on open balances</li>
              </ul>
              <p className="dfw-find-valued"><b>How it is valued</b>Period-by-period P&amp;L and balance sheet impact. No cash moves; this is the audit-readiness line.</p>
            </article>

            <article className="dfw-find f4">
              <div className="dfw-find-top">
                <span className="dfw-find-num">04</span>
                <div className="dfw-find-titles">
                  <h3>Control weakness</h3>
                  <span className="dfw-find-payoff">Why it keeps happening</span>
                </div>
              </div>
              <ul>
                <li>Duplicate vendors; bank shared with an employee</li>
                <li>Bank details changed just before a large payment</li>
                <li>Invoices repeatedly just under approval limits</li>
                <li>Self-approval or approval beyond delegated authority</li>
                <li>Non-PO spend, retrospective POs, wide tolerances</li>
                <li>Vendor master edited by the payment approver</li>
                <li>MSME timelines and sanctions screening breached</li>
              </ul>
              <p className="dfw-find-valued"><b>How it is valued</b>By recurrence rate and exposure across the population, not by the size of any one instance.</p>
            </article>
          </div>

          <div className="dfw-find-close">
            <p>Recognise one of these? Tell us which, and we will show you where we would look.</p>
            <a href="/#cta" className="btn btn-primary">What can we recover? <svg className="icon stroke" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg></a>
          </div>
        </div>
      </section>

      {/* ============================= THE OBJECTION ============================= */}
      <section className="section" id="objection" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">The objection</span>
            <h2>&ldquo;Our auditors already do this&rdquo;</h2>
            <p>They don&rsquo;t, and it isn&rsquo;t a criticism of them. An audit exists to form an opinion, not to find money, and those two jobs need different methods.</p>
          </div>

          <div className="dfw-audit-grid" data-reveal>
            <div className="dfw-au sample">
              <span className="k">The audit approach</span>
              <h3>A sample, against a materiality threshold</h3>
              <div className="dfw-au-viz" aria-hidden="true"><i></i><i></i><i></i></div>
              <p>Items below materiality are out of scope by design. What comes back is a set of instances (this invoice, that approval) sufficient to support an opinion on the financial statements.</p>
              <p>It cannot tell you the rate at which something happens, and it cannot see the thousands of small items that are individually immaterial and collectively worth recovering.</p>
            </div>
            <div className="dfw-au pop">
              <span className="k">The DARP approach</span>
              <h3>The full population, then every transaction as it lands</h3>
              <div className="dfw-au-viz" aria-hidden="true"></div>
              <p>Discover tests every transaction in the history against every rule. Nothing is out of scope for being small, because the value is in the aggregate, and the aggregate is where recovery lives.</p>
              <p>Reading everything reports rates, not instances. A rate tells you whether you have an incident or a broken process, which is exactly what makes the case for prevention.</p>
            </div>
          </div>

          <div className="dfw-audit-close dfw-rise" data-reveal>
            <p>Then Prevent keeps it running. The same tests fire on each transaction in near real time, as it arrives, so the population is never re-sampled after the fact. <strong>An audit looks backwards once a year; DARP looks backwards once and then never stops looking forwards.</strong></p>
            <div className="lnk-row">
              <a href="#" className="dfw-lnk soon">How full-population testing works <svg className="stroke"><use href="#ic-arrow-right" /></svg></a>
              <a href="#" className="dfw-lnk soon">Glossary: sampling, materiality, N-way <svg className="stroke"><use href="#ic-arrow-right" /></svg></a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= WHAT IT COSTS TO FIND OUT ============================= */}
      <section className="section" id="cost">
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">What it costs you to find out</span>
            <h2>Almost nothing, and that is the point</h2>
            <p>The barrier to knowing what you are losing should not be another project. Here is the entire ask.</p>
          </div>

          <div className="dfw-cost-grid" data-reveal>
            <div className="dfw-cost dfw-rise">
              <span className="ic"><svg className="stroke"><use href="#ic-lock" /></svg></span>
              <h3>Read access, nothing more</h3>
              <p>An export of the relevant history is enough to start. We do not write to your systems, we do not need a sandbox, and nobody on your team changes how they work.</p>
            </div>
            <div className="dfw-cost dfw-rise">
              <span className="ic"><svg className="stroke"><use href="#ic-shield" /></svg></span>
              <h3>Handled to enterprise standard</h3>
              <p>ISO 27001 certified and SOC 2 attested, with role-based access and an immutable audit trail on every record. Cloud agnostic: AWS, Azure, GCP or your own private cloud.</p>
            </div>
            <div className="dfw-cost dfw-rise">
              <span className="ic"><svg className="stroke"><use href="#ic-user" /></svg></span>
              <h3>No counterparty cooperation</h3>
              <p>Discover runs entirely on data you already own. Your vendors, distributors and customers are not involved until you decide to pursue something.</p>
            </div>
          </div>

          <div className="dfw-ask dfw-rise" data-reveal>
            <span>That is the entire ask.</span>
            <b>One export</b><span className="op">+</span><b>~2 min run time</b><span className="op">=</span><b>you know</b>
          </div>
        </div>
      </section>

      {/* ============================= WHAT IT LOOKS LIKE — timeline ============================= */}
      <section className="section" id="timeline" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">What it looks like</span>
            <h2>From data access to a number</h2>
            <p>Indicative for a single process area. Note where the contract sits: the number arrives before it, not after. Broader scope takes longer, and we will say so before we start rather than after.</p>
          </div>

          <div className="timeline dfw-timeline" data-reveal>
            <div className="tl-steps">
              <div className="tl-step">
                <span className="tl-node">01</span>
                <div className="tl-content">
                  <span className="tl-tag">No contract</span>
                  <h4>Scope and access</h4>
                  <p>Agree the process area and period. You send an export, or grant read access. NDA and security review happen here.</p>
                </div>
              </div>
              <div className="tl-step">
                <span className="tl-node">02</span>
                <div className="tl-content">
                  <span className="tl-tag">~2 minutes</span>
                  <h4>Discover runs</h4>
                  <p>The full population is tested against every rule for that area. Anomalies, duplicates, mismatches and unclaimed entitlements surface, in about two minutes of run time, not weeks of fieldwork.</p>
                </div>
              </div>
              <div className="tl-step">
                <span className="tl-node">03</span>
                <div className="tl-content">
                  <span className="tl-tag">No contract</span>
                  <h4>You have the number</h4>
                  <p>The total recoverable figure, split across cash, tax, misstatement and control exposure. Same day as the data lands. Yours to keep, whatever you decide next.</p>
                </div>
              </div>

              <div className="dfw-tl-gate-row">
                <b>Contract.</b> Everything above cost you a data export. Everything below begins once you have decided the number is worth acting on.
              </div>

              <div className="tl-step is-post">
                <span className="tl-node">04</span>
                <div className="tl-content">
                  <span className="tl-tag">After contract</span>
                  <h4>Assess and sign-off</h4>
                  <p>Every finding drilled to the last level, then the list prioritised with your team. Ends with your signed-off scope of exactly what gets pursued.</p>
                </div>
              </div>
              <div className="tl-step is-post">
                <span className="tl-node">05</span>
                <div className="tl-content">
                  <span className="tl-tag">After contract</span>
                  <h4>Recover</h4>
                  <p>We prepare and pursue every claim, credit note and correcting entry in scope, and track each one through to settlement.</p>
                </div>
              </div>
              <div className="tl-step is-post">
                <span className="tl-node">06</span>
                <div className="tl-content">
                  <span className="tl-tag">Compounding</span>
                  <h4>Prevent</h4>
                  <p>The same rules turn forwards and fire at the point of entry. Steps 04 and 05 return the money once. This is the step that stops it going out again, every period, without another engagement.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="dfw-find-close" style={{ marginTop: "clamp(24px,3vw,34px)" }}>
            <a href="/#cta" className="btn btn-primary">Start with Discover <svg className="icon stroke" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg></a>
          </div>
        </div>
      </section>

      {/* ============================= HOW IT IS PAID FOR ============================= */}
      <section className="section" id="pricing">
        <div className="arc-glow g-green"></div>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">How it is paid for</span>
            <h2>The top half pays for the bottom half</h2>
            <p>If a room only remembers one thing about DARP, this is the thing worth remembering.</p>
          </div>

          <div className="dfw-pay" data-reveal>
            <div className="dfw-pay-block one dfw-rise">
              <span className="dfw-pay-k">One-off · Discover, Assess, Recover</span>
              <h3>Funded by money already written off</h3>
              <p>The diagnostic and the recovery are paid for out of cash the business had given up on, not from a new budget line you have to defend. You are not being asked to believe a business case, because by the time there is a decision to make, the number is already yours and it came from your own ledger.</p>
            </div>

            <div className="dfw-pay-arrow" aria-hidden="true">
              <span className="flow"></span>
              <span className="chip">recovered cash funds this</span>
              <span className="flow"></span>
              <svg className="stroke"><use href="#ic-arrow-right" /></svg>
            </div>

            <div className="dfw-pay-block rec dfw-rise">
              <span className="dfw-pay-k">Recurring · Prevent</span>
              <h3>The part that renews</h3>
              <p>Prevention is a subscription because it is a product that keeps running, not a project that ends. And because the rule set already exists, there is no second implementation to pay for, which is the only reason recovery can fund prevention instead of competing with it for the same budget.</p>
            </div>
          </div>

          <div className="dfw-pay-close dfw-rise" data-reveal>
            <p>The only figure that matters is yours. It takes one data export to find it.</p>
            <a href="/#cta" className="btn btn-primary" style={{ marginTop: "18px" }}>Get an estimate <svg className="icon stroke" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg></a>
          </div>
        </div>
      </section>

      {/* ============================= WHERE DARP APPLIES ============================= */}
      <section className="section" id="where" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Where DARP applies</span>
            <h2>Anywhere there is a reconciliation</h2>
            <p>DARP is not a channel product. It works wherever two or more records are supposed to agree and nobody has the time to prove it, and the more sources a reconciliation spans, the more it finds. Two-way is useful. N-way is where the value compounds.</p>
          </div>

          <div className="dfw-apply-grid" data-reveal>
            <div className="dfw-apply">
              <span className="ic"><svg className="stroke"><use href="#ic-cash" /></svg></span>
              <h3>Vendor reconciliation (AP)</h3>
              <p>Invoice against PO against goods receipt against contract price against payment. Duplicates, overpayments, discounts never taken and balances never applied surface where those five stop agreeing.</p>
            </div>
            <div className="dfw-apply">
              <span className="ic"><svg className="stroke"><use href="#ic-recover" /></svg></span>
              <h3>Customer reconciliation (AR)</h3>
              <p>Invoice against receipt against bank against gateway settlement, many-to-many. Withheld tax separated from genuine shortfall, so what is truly collectible is stated invoice by invoice.</p>
            </div>
            <div className="dfw-apply">
              <span className="ic"><svg className="stroke"><use href="#ic-tax" /></svg></span>
              <h3>Taxation (both sides)</h3>
              <p>Purchase register against vendor-filed returns; output tax against invoices raised; withholding against certificates held. Each item checked against the statutory window still open to it.</p>
            </div>
            <div className="dfw-apply sharp">
              <span className="ic"><svg className="stroke"><use href="#ic-badge" /></svg></span>
              <h3>Channel rebates &amp; claims <span className="badge">sharpest case</span></h3>
              <p>The sharpest case, because the counterparty controls the evidence. Claims re-priced against the agreement in force on the resale date and tested against POS, roster and shipment history.</p>
            </div>
            <div className="dfw-apply">
              <span className="ic"><svg className="stroke"><use href="#ic-layers" /></svg></span>
              <h3>Inter-company &amp; the close</h3>
              <p>Sub-ledger to GL, inter-company balances, accruals and provisions, prepaid schedules, FX revaluation. Where the reconciliation is the close, the finding is a cleaner sign-off.</p>
            </div>
            <div className="dfw-apply">
              <span className="ic"><svg className="stroke"><use href="#ic-gauge" /></svg></span>
              <h3>Payouts, commissions &amp; incentives</h3>
              <p>Agreement against activity against what was actually paid. Money owed to a third party, calculated outside the ERP, is reconciled the same way as everything else.</p>
            </div>
          </div>

          <div className="dfw-apply-close dfw-rise" data-reveal>
            <div className="dfw-nway" aria-hidden="true">
              <svg viewBox="0 0 34 34" className="n2"><line x1="6" y1="17" x2="28" y2="17" /><circle cx="6" cy="17" r="3" /><circle cx="28" cy="17" r="3" /></svg>
              <span className="cap">two-way</span>
              <svg viewBox="0 0 34 34" className="nn">
                <line x1="17" y1="5" x2="5" y2="17" /><line x1="17" y1="5" x2="29" y2="17" /><line x1="5" y1="17" x2="17" y2="29" /><line x1="29" y1="17" x2="17" y2="29" /><line x1="5" y1="17" x2="29" y2="17" /><line x1="17" y1="5" x2="17" y2="29" />
                <circle cx="17" cy="5" r="3" /><circle cx="5" cy="17" r="3" /><circle cx="29" cy="17" r="3" /><circle cx="17" cy="29" r="3" />
              </svg>
              <span className="cap">N-way · where the money hides</span>
            </div>
            <p>The harder the reconciliation, the more DARP is worth. A two-way match between two clean systems is something a competent team already does. A reconciliation spanning five sources, in four formats, against terms that live in a contract nobody has opened since signing, that is where the money hides, and it is precisely the work that never gets done by hand.</p>
            <div className="lnk-row" style={{ marginTop: "16px" }}>
              <a href="/#cta" className="dfw-lnk">Whichever reconciliation is costing you most — tell us your situation <svg className="stroke"><use href="#ic-arrow-right" /></svg></a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= FAQ ============================= */}
      <section className="section" id="faq">
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Questions we get asked</span>
            <h2>Before you send us anything</h2>
          </div>

          <div className="dfw-faq" data-reveal>
            <div className="dfw-q">
              <button className="dfw-q-btn" type="button">What exactly do you need to run Discover? <svg className="stroke"><use href="#ic-chev" /></svg></button>
              <div className="dfw-q-body">
                <p>Read access to the transaction history for one process area, and the master data that governs it. For payables that is AP transactions plus the vendor master; for channel rebates it is claims, POS files, contracts and shipment history. An export is enough, a live connection is only needed at the Prevent stage.</p>
              </div>
            </div>

            <div className="dfw-q">
              <button className="dfw-q-btn" type="button">How long does it take to get a number? <svg className="stroke"><use href="#ic-chev" /></svg></button>
              <div className="dfw-q-body">
                <p>The Discover run itself takes about two minutes. Once the data is in, the full population is tested against every rule for that process area and the total recoverable figure comes back split across cash, tax, misstatement and control exposure.</p>
                <p>What takes longer is everything around it, agreeing scope, NDA, your security review, and pulling the extract. That is usually days rather than weeks, and none of it is analysis time. Nobody spends a quarter in fieldwork before you see a figure.</p>
              </div>
            </div>

            <div className="dfw-q">
              <button className="dfw-q-btn" type="button">Do our vendors, distributors or customers need to be involved? <svg className="stroke"><use href="#ic-chev" /></svg></button>
              <div className="dfw-q-body">
                <p>Not for Discover or Assess. Both run entirely on data you already hold, which is why the first conversation costs nothing but data access. Counterparties only enter the picture at Recover, and only for the findings you decide to pursue.</p>
              </div>
            </div>

            <div className="dfw-q">
              <button className="dfw-q-btn" type="button">How is this different from our recovery audit firm? <svg className="stroke"><use href="#ic-chev" /></svg></button>
              <div className="dfw-q-body">
                <p>Three ways. They sample; we read the full population. They take a contingency share and leave, so the same finding recurs next year; we turn each root cause into a control that runs at transaction entry. And their output is their file, ours is a system of record you keep, with the evidence attached to every finding.</p>
              </div>
            </div>

            <div className="dfw-q">
              <button className="dfw-q-btn" type="button">What if you don&rsquo;t find much? <svg className="stroke"><use href="#ic-chev" /></svg></button>
              <div className="dfw-q-body">
                <p>Then we tell you that, and you owe us nothing. Discover runs before any contract exists.</p>
                <p>You still end up with something useful: independent evidence, tested across your full transaction population rather than a sample, that this process is clean. That is a straight answer to a question your board or your auditors will ask eventually, and it cost you one data export.</p>
                <p>We would far rather report a small number than talk you into a big one we cannot stand behind. The number has to survive your team, your auditor and the counterparty you send a claim to.</p>
              </div>
            </div>

            <div className="dfw-q">
              <button className="dfw-q-btn" type="button">Does control weakness actually return cash? <svg className="stroke"><use href="#ic-chev" /></svg></button>
              <div className="dfw-q-body">
                <p>Mostly it does not, and we say so up front. Cash only comes back where a loss actually crystallised. The value in that column is avoided loss and audit position, and being straight about it is what makes the cash and tax numbers credible.</p>
              </div>
            </div>

            <div className="dfw-q">
              <button className="dfw-q-btn" type="button">Do we have to take Prevent? <svg className="stroke"><use href="#ic-chev" /></svg></button>
              <div className="dfw-q-body">
                <p>No. You can stop after Recover with the cash and the findings. Prevent exists because the alternative is running the same diagnostic again next year, and since the rules already exist, turning them forwards is a deployment rather than a fresh build.</p>
              </div>
            </div>

            <div className="dfw-q">
              <button className="dfw-q-btn" type="button">Where does our data sit? <svg className="stroke"><use href="#ic-chev" /></svg></button>
              <div className="dfw-q-body">
                <p>It depends on the stage, and the distinction matters.</p>
                <p><b>Discover and Assess</b> run in the DataTwin cloud. You send an extract, we analyse it there, and you get the findings back, so there is nothing to install and no infrastructure decision to make before you know whether the number is worth acting on.</p>
                <p><b>Prevent</b> is deployed wherever you want it. It is cloud agnostic and runs on AWS, Azure, GCP or your own private cloud, so the system that sits permanently alongside your ERP lives inside your own estate and under your own controls.</p>
                <p>Throughout: ISO 27001 certified, SOC 2 attested, role-based access, data residency options and an immutable audit trail on every record.</p>
              </div>
            </div>
          </div>

          <div className="dfw-find-close" style={{ marginTop: "clamp(24px,3vw,34px)" }}>
            <p>Still something we have not answered?</p>
            <a href="/#cta" className="dfw-lnk">Ask it directly <svg className="stroke"><use href="#ic-arrow-right" /></svg></a>
          </div>
        </div>
      </section>

      {/* ============================= FINAL CTA (shared) ============================= */}
      <section className="section-tight" id="cta">
        <div className="wrap">
          <div className="cta-section">
            <div className="ledger-grid" style={{ opacity: ".4" }}></div>
            <div className="glow-blob cta-glow-a"></div>
            <div className="glow-blob cta-glow-b"></div>
            <div style={{ position: "relative" }}>
              <span className="eyebrow" style={{ marginBottom: "20px" }}>Get started</span>
              <h2>Tell us your problem.<br />We&rsquo;ll tell you what we can recover.</h2>
              <p>Working from the transaction history your systems already hold, we run our discovery. Nothing changes in your systems, nobody in your team changes how they work, and you see what&rsquo;s recoverable before there&rsquo;s anything to sign. If the number isn&rsquo;t worth acting on, at least you know you&rsquo;re safe.</p>
              <div className="cta-buttons">
                <a href="/#top" className="btn btn-primary">Tell us your problem <svg className="icon stroke" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg></a>
                <a href="mailto:solve@datatwin.ai" className="btn btn-ghost">Email us instead</a>
              </div>
              <div className="cta-email mono">solve@datatwin.ai</div>
            </div>
          </div>
        </div>
      </section>

      <DarpFrameworkScripts />
    </>
  );
}
