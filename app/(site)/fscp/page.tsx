import type { Metadata } from "next";
import FscpScripts from "@/components/FscpScripts";

export const metadata: Metadata = {
  title:
    "FSCP: the Financial Statement Close Process, scored continuously | DataTwin",
  description:
    "Eight domains, 56 sub-processes and 204 close-blocker metrics scored against your period-end close. Every metric declares whether there is a blocker and how severe it is, so the close is worked by exception rather than by checklist.",
};

export default function FscpPage() {
  return (
    <div className="cnr-page">
      {/* ============================= HERO ============================= */}
      <section className="hero fscp-hero">
        <div className="hero-aurora"></div>
        <div className="ledger-grid"></div>
        <div className="wrap fscp-hero-grid">
          <div className="fscp-hero-inner">
            <span className="eyebrow">FSCP</span>
            <h1>
              A close status of <span className="grad-text">92% complete</span>
              <br />
              tells nobody what to do next.
            </h1>
            <p className="hero-desc">
              FSCP is an operating framework for the financial statement close:
              eight domains, 56 sub-processes and 204 metrics, every one of which
              answers a single question. Is there a close blocker here, and how
              severe is it. Not a percentage, not a task list, but a count, a
              value and a colour that a controller can act on this afternoon.
            </p>
            <div className="fscp-chips">
              <span className="fscp-chip">
                <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-check" /></svg>
                Scores your close, does not run it
              </span>
              <span className="fscp-chip">
                <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-check" /></svg>
                Every metric is a blocker, not a statistic
              </span>
              <span className="fscp-chip">
                <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-check" /></svg>
                Read-only on top of the ERP you already run
              </span>
            </div>
            <div className="fscp-hero-actions">
              <a href="/#cta" className="btn btn-primary">
                Score my last close{" "}
                <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg>
              </a>
              <a href="/darp-framework" className="btn btn-ghost">How Discover works</a>
            </div>
          </div>

          {/* hero graphic: the close cockpit — only what is blocking, with a colour */}
          <div className="fscp-cockpit" aria-hidden="true">
            <div className="fscp-cockpit-head">
              <span>What is blocking this close</span>
              <span className="fscp-cockpit-live"><i></i> Live</span>
            </div>
            <div className="fscp-cockpit-row is-red">
              <span className="fscp-sw"></span>
              <b>CF</b>
              <span>Journals unposted</span>
              <em>14 of 140</em>
            </div>
            <div className="fscp-cockpit-row is-red">
              <span className="fscp-sw"></span>
              <b>TF</b>
              <span>GR/IR unmatched</span>
              <em>82 items</em>
            </div>
            <div className="fscp-cockpit-row is-amber">
              <span className="fscp-sw"></span>
              <b>GA</b>
              <span>Accruals not raised</span>
              <em>9 of 61</em>
            </div>
            <div className="fscp-cockpit-row is-amber">
              <span className="fscp-sw"></span>
              <b>IC</b>
              <span>Confirmations open</span>
              <em>3 entities</em>
            </div>
            <div className="fscp-cockpit-row is-green">
              <span className="fscp-sw"></span>
              <b>RC</b>
              <span>Sign-offs pending</span>
              <em>clear</em>
            </div>
            <span className="fscp-cockpit-cap">
              A count, a value and a colour &mdash; not a percentage
            </span>
          </div>
        </div>
      </section>

      {/* ============================= DIAGRAM ============================= */}
      <section className="section fscp-flow-sec">
        <div className="arc-glow g-blue"></div>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">One close cockpit</span>
            <h2>Eight domains, one close cockpit</h2>
          </div>

          <div className="fscp-flow" data-reveal>
            <div className="ledger-grid" aria-hidden="true"></div>
            <div className="fscp-flow-head">
              <span className="fscp-flow-title">Eight domains &rarr; DataTwin &rarr; the register of close blockers</span>
              <span className="fscp-flow-live"><i></i> Live process</span>
            </div>

            <div className="fscp-flow-body">
              <div className="fscp-flow-domains" aria-hidden="true">
                <span className="fscp-flow-lbl">Eight domains, 56 sub-processes</span>
                <div className="fscp-flow-tiles">
                  <div className="fscp-tile"><b>IC</b><em>28 KPIs</em></div>
                  <div className="fscp-tile"><b>CF</b><em>28 KPIs</em></div>
                  <div className="fscp-tile"><b>GA</b><em>39 KPIs</em></div>
                  <div className="fscp-tile"><b>TF</b><em>20 KPIs</em></div>
                  <div className="fscp-tile"><b>RC</b><em>33 KPIs</em></div>
                  <div className="fscp-tile"><b>FP</b><em>24 KPIs</em></div>
                  <div className="fscp-tile"><b>PC</b><em>15 KPIs</em></div>
                  <div className="fscp-tile"><b>IR</b><em>17 KPIs</em></div>
                </div>
              </div>

              <div className="fscp-flow-wire" aria-hidden="true">
                <svg viewBox="0 0 60 200" preserveAspectRatio="none">
                  <path className="ln" d="M0,100 C30,100 30,100 60,100" />
                  <path className="fx" d="M0,100 C30,100 30,100 60,100" />
                </svg>
              </div>

              <div className="fscp-flow-engine" aria-hidden="true">
                <span className="fscp-flow-engine-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-gauge" /></svg></span>
                <b>DataTwin</b>
                <span className="fscp-flow-engine-sub">Scores 204 metrics against your close</span>
              </div>

              <div className="fscp-flow-wire" aria-hidden="true">
                <svg viewBox="0 0 60 200" preserveAspectRatio="none">
                  <path className="ln" d="M0,100 C30,100 30,100 60,100" />
                  <path className="fx is-g" d="M0,100 C30,100 30,100 60,100" />
                </svg>
              </div>

              <div className="fscp-flow-reg" aria-hidden="true">
                <span className="fscp-flow-lbl">What is blocking this close</span>
                <div className="fscp-flow-reg-head">
                  <span>Domain</span><span>Close blocker</span><span className="is-r">Value</span>
                </div>
                <div className="fscp-flow-reg-row"><span className="fscp-sw is-red"></span><b>CF</b><span>Journals unposted</span><em>14 of 140</em></div>
                <div className="fscp-flow-reg-row"><span className="fscp-sw is-red"></span><b>TF</b><span>GR/IR unmatched</span><em>82 items</em></div>
                <div className="fscp-flow-reg-row"><span className="fscp-sw is-amber"></span><b>GA</b><span>Accruals not raised</span><em>9 of 61</em></div>
                <div className="fscp-flow-reg-row"><span className="fscp-sw is-amber"></span><b>IC</b><span>Confirmations open</span><em>3 entities</em></div>
                <div className="fscp-flow-reg-row"><span className="fscp-sw is-green"></span><b>RC</b><span>Sign-offs pending</span><em>clear</em></div>
              </div>
            </div>

            <div className="fscp-flow-foot">
              <span className="fscp-flow-foot-k">The dashboard rule</span>
              <p>
                Show only close blockers: pending, mismatch, difference, breach,
                missing reference or unresolved approval. Every metric declares
                whether there is a blocker, and how severe it is.{" "}
                <b>Read-only to start. Nothing changes in your ERP or your close calendar.</b>
              </p>
            </div>
          </div>

          <p className="fscp-engine-note" data-reveal>
            FSCP runs on the same engine that powers the DARP Framework: acquire,
            process, govern, report.
          </p>
        </div>
      </section>

      {/* ============================= COUNTS ============================= */}
      <section className="section fscp-counts-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">The shape</span>
            <h2>The shape of the framework</h2>
            <p>
              Not a dashboard somebody designed to look busy. A structure with a
              fixed number of places a close can fail, so the same question is
              asked of every period and every entity.
            </p>
          </div>

          <div className="fscp-counts" data-reveal>
            <div className="fscp-cnt"><b>8</b><span>Domains</span></div>
            <div className="fscp-cnt"><b>56</b><span>Sub-processes</span></div>
            <div className="fscp-cnt"><b>204</b><span>KPI metrics</span></div>
            <div className="fscp-cnt is-g"><b>R/O/G</b><span>Colour logic</span></div>
          </div>

          <div className="fscp-sec-cta" data-reveal>
            <a href="/#cta" className="btn btn-primary">
              Browse the 204 metrics{" "}
              <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg>
            </a>
            <a href="#" className="btn btn-ghost">Open the catalogue</a>
          </div>
        </div>
      </section>

      {/* ============================= 1 DESIGN RULE ============================= */}
      <section className="section fscp-stage-sec">
        <div className="wrap">
          <div className="fscp-stage-head" data-reveal>
            <span className="fscp-stage-n">1</span>
            <div>
              <h2>The design rule: show only what is blocking the close</h2>
              <p>
                Most close dashboards report progress. Progress is a comfort, not
                an instruction. Every FSCP metric is a blocker measure, so
                anything showing on the cockpit is something a person has to
                decide about before the books close.
              </p>
            </div>
          </div>

          <div className="fscp-subs" data-reveal>
            <div className="fscp-sub dfw-rise">
              <span className="fscp-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-layers" /></svg></span>
              <h3>Capture the blockers</h3><span className="fscp-sub-s">Into one cockpit</span>
              <p>Pending, exception, mismatch, breach and ageing values from every domain brought into one place, at the same grain.</p>
              <ul>
                <li>Pending items, mismatches, breaches and ageing, in one view</li>
                <li>Every domain scored on the same day, on the same basis</li>
                <li>Sourced from the systems, not from a status meeting</li>
              </ul>
            </div>
            <div className="fscp-sub dfw-rise">
              <span className="fscp-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-gauge" /></svg></span>
              <h3>Prioritise by materiality</h3><span className="fscp-sub-s">Value, not count alone</span>
              <p>A count says how many. A value says how much. Together they separate small operational noise from something that will move the statements.</p>
              <ul>
                <li>Count and value carried on every metric</li>
                <li>Small operational issues separated from close-impacting risk</li>
                <li>Severity from thresholds you set, not from a fixed scale</li>
              </ul>
            </div>
            <div className="fscp-sub dfw-rise">
              <span className="fscp-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-check" /></svg></span>
              <h3>Resolve before final close</h3><span className="fscp-sub-s">Each colour is a work item</span>
              <p>Every red and orange becomes a work item for review, approval or correction, with an owner, rather than a line in a report.</p>
              <ul>
                <li>Each blocker routed to the person who can clear it</li>
                <li>Cleared blockers recorded against the period they blocked</li>
                <li>What was accepted rather than fixed, and on whose authority</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 2 KPI MODEL ============================= */}
      <section className="section fscp-stage-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="fscp-stage-head" data-reveal>
            <span className="fscp-stage-n">2</span>
            <div>
              <h2>Every metric declares the same six things</h2>
              <p>
                The base table stays deliberately simple. Percentage, severity
                and the message a controller reads are all derived from it, which
                is why a new metric is a new row rather than a new report.
              </p>
            </div>
          </div>

          <div className="fscp-cmp" data-reveal>
            <table>
              <thead>
                <tr><th>Column</th><th>What it holds</th><th>Example</th></tr>
              </thead>
              <tbody>
                <tr><td>Domain</td><td>Which of the eight it belongs to</td><td>Core Finance</td></tr>
                <tr><td>Close process</td><td>The sub-process inside that domain</td><td>General ledger</td></tr>
                <tr><td>Metric</td><td>The issue being measured, always a blocker</td><td>Journals unposted at close</td></tr>
                <tr><td>Value</td><td>The pending, differing or breaching amount</td><td>14</td></tr>
                <tr><td>Total count</td><td>The denominator it is measured against</td><td>140</td></tr>
                <tr><td>Colour</td><td>Severity, from thresholds you set</td><td>Red</td></tr>
              </tbody>
            </table>
          </div>

          <div className="fscp-strip" data-reveal>
            <span className="fscp-strip-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-schema" /></svg></span>
            <div>
              <b>And four things are derived, never entered.</b>
              <span>
                Issue percentage is value over total count. Issue exists is value
                above zero. Severity comes from your thresholds, and the message
                writes itself: <b>14 of 140 pending</b>.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= DOMAINS ============================= */}
      <section className="section fscp-doms-sec">
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">The eight domains</span>
            <h2>The eight domains, and what each one is watching for</h2>
            <p>
              Each domain owns a set of sub-processes and a set of blockers. The
              three listed under each are the headline ones; the full 204 are in
              the catalogue.
            </p>
          </div>

          <div className="fscp-doms" data-reveal>
            <div className="fscp-dom dfw-rise">
              <div className="fscp-dom-h"><span className="fscp-dom-c">IC</span><span className="fscp-dom-n">7 sub-processes &middot; 28 KPIs</span></div>
              <h3>Intercompany Finance</h3>
              <p>Eliminate intercompany billing, booking, settlement and confirmation blockers.</p>
              <ul>
                <li>Billing and AP booking pending</li>
                <li>Settlement and cash application gaps</li>
                <li>Balance confirmation differences</li>
              </ul>
            </div>
            <div className="fscp-dom dfw-rise">
              <div className="fscp-dom-h"><span className="fscp-dom-c">CF</span><span className="fscp-dom-n">5 sub-processes &middot; 28 KPIs</span></div>
              <h3>Core Finance</h3>
              <p>Protect the core books: GL, AP, AR, fixed assets, bank and cash.</p>
              <ul>
                <li>Unposted journals and TB differences</li>
                <li>Blocked invoices and overdue AR</li>
                <li>Bank reconciliation gaps</li>
              </ul>
            </div>
            <div className="fscp-dom dfw-rise">
              <div className="fscp-dom-h"><span className="fscp-dom-c">GA</span><span className="fscp-dom-n">13 sub-processes &middot; 39 KPIs</span></div>
              <h3>GA Close</h3>
              <p>Drive period-end close activities from master data through to P&amp;L review.</p>
              <ul>
                <li>Sub-ledger close gaps</li>
                <li>Accruals, provisions and reclass pending</li>
                <li>P&amp;L variance and close task breaches</li>
              </ul>
            </div>
            <div className="fscp-dom dfw-rise">
              <div className="fscp-dom-h"><span className="fscp-dom-c">TF</span><span className="fscp-dom-n">4 sub-processes &middot; 20 KPIs</span></div>
              <h3>Transaction Finance</h3>
              <p>Control transactional close flows across P2P, O2C, inventory and payroll.</p>
              <ul>
                <li>Three-way match and GR/IR exceptions</li>
                <li>Unbilled revenue and billing blocks</li>
                <li>Inventory and payroll posting issues</li>
              </ul>
            </div>
            <div className="fscp-dom dfw-rise">
              <div className="fscp-dom-h"><span className="fscp-dom-c">RC</span><span className="fscp-dom-n">8 sub-processes &middot; 33 KPIs</span></div>
              <h3>Reporting &amp; Compliance</h3>
              <p>Finalise post-close reports, schedules, controls and the consolidation package.</p>
              <ul>
                <li>Reports and schedules pending</li>
                <li>Control evidence and sign-off gaps</li>
                <li>GAAP and elimination entries pending</li>
              </ul>
            </div>
            <div className="fscp-dom dfw-rise">
              <div className="fscp-dom-h"><span className="fscp-dom-c">FP</span><span className="fscp-dom-n">8 sub-processes &middot; 24 KPIs</span></div>
              <h3>Financial Planning</h3>
              <p>Close budget, forecast and review cycles with approved management inputs.</p>
              <ul>
                <li>Budget inputs and approvals pending</li>
                <li>Variance explanations open</li>
                <li>Forecast accuracy and margin gaps</li>
              </ul>
            </div>
            <div className="fscp-dom dfw-rise">
              <div className="fscp-dom-h"><span className="fscp-dom-c">PC</span><span className="fscp-dom-n">3 sub-processes &middot; 15 KPIs</span></div>
              <h3>Planning &amp; Control</h3>
              <p>Validate cost, profit-centre and FP&amp;A control views before management close.</p>
              <ul>
                <li>Unallocated costs and mapping errors</li>
                <li>Profit-centre loss alerts</li>
                <li>MIS packs and actions open</li>
              </ul>
            </div>
            <div className="fscp-dom dfw-rise">
              <div className="fscp-dom-h"><span className="fscp-dom-c">IR</span><span className="fscp-dom-n">8 sub-processes &middot; 17 KPIs</span></div>
              <h3>Intelligence &amp; Risk</h3>
              <p>Surface anomalies, recovery opportunities and audit-trail risks early.</p>
              <ul>
                <li>Critical anomalies detected</li>
                <li>Recovery actions pending</li>
                <li>Manual touch and unauthorised changes</li>
              </ul>
            </div>
          </div>

          <div className="fscp-sec-cta" data-reveal>
            <a href="#" className="btn btn-ghost">The full 204-metric catalogue</a>
            <a href="#" className="fscp-learn"><i></i> Download it as a PDF <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-arrow-right" /></svg></a>
          </div>
        </div>
      </section>

      {/* ============================= 3 DARP ============================= */}
      <section className="section fscp-stage-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="fscp-stage-head" data-reveal>
            <span className="fscp-stage-n">3</span>
            <div>
              <h2>The same four stages the rest of the platform runs on</h2>
              <p>
                FSCP is not a separate system with its own logic. It is the DARP
                Framework pointed at the close, which is why the rules that
                recovered money in Discover are the rules that score the close in
                Prevent.
              </p>
            </div>
          </div>

          <div className="fscp-pay" data-reveal>
            <div className="fscp-pstep dfw-rise">
              <span className="fscp-pstep-d">1</span>
              <h4>Discover</h4>
              <p>Ingest, cleanse and harmonise across every stream. Detect anomalies, quantify exposure and rank by materiality.</p>
            </div>
            <div className="fscp-pstep dfw-rise">
              <span className="fscp-pstep-d">2</span>
              <h4>Assess</h4>
              <p>Connect ERP, bank, operations and partner silos. Attribute root cause and separate systemic from one-off.</p>
            </div>
            <div className="fscp-pstep dfw-rise">
              <span className="fscp-pstep-d">3</span>
              <h4>Recover</h4>
              <p>Route exceptions to accountable owners. Corrections, holds and adjustments in flight, with confirmation logged.</p>
            </div>
            <div className="fscp-pstep dfw-rise">
              <span className="fscp-pstep-d">4</span>
              <h4>Prevent</h4>
              <p>Control redesign, early-warning signals and board-ready narratives, looping back into Discover.</p>
            </div>
          </div>

          <div className="fscp-strip" data-reveal>
            <span className="fscp-strip-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-spark" /></svg></span>
            <div>
              <b>Where AI is used here, and where it is not.</b>
              <span>
                AI reads documents, detects anomalies, attributes root cause and
                writes the narrative. Deterministic rules decide every threshold,
                every severity and everything that posts to the books. Nothing
                posts because a model was confident.
              </span>
            </div>
          </div>

          <div className="fscp-sec-cta" data-reveal>
            <a href="/darp-framework" className="btn btn-ghost">
              How the DARP Framework works{" "}
              <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ============================= WORKED CLOSES ============================= */}
      <section className="section fscp-worked-sec">
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Worked closes</span>
            <h2>Three closes, and what actually changed</h2>
            <p>
              These are engagements, described without naming the customers. The
              context matters more than the headline: a number without the shape
              of the business behind it is not evidence.
            </p>
          </div>

          <div className="fscp-subs" data-reveal>
            <div className="fscp-sub dfw-rise">
              <span className="fscp-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-cash" /></svg></span>
              <h3>Accounts payable</h3><span className="fscp-sub-s">Two entities, 25+ locations</span>
              <p>Over 5,000 invoices a month on SAP S/4HANA, half PO-linked. Discrepancies took four to five days to resolve; the AP close took five to seven.</p>
              <ul>
                <li>Three-way reconciliation across invoice, PO or contract, and receipt</li>
                <li>Audit checklist run against every invoice, not a sample</li>
                <li>Prepaid, provision reversal and period-end accounting automated</li>
              </ul>
            </div>
            <div className="fscp-sub dfw-rise">
              <span className="fscp-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-cash" /></svg></span>
              <h3>Accounts receivable</h3><span className="fscp-sub-s">20+ entities, 200+ locations</span>
              <p>Collections split across gateways, bank deposits, UPI and cash. Matching 20,000 enrolments a month to sales made AR close a ten-day job.</p>
              <ul>
                <li>Screenshots, statements and gateway reports read into one pipeline</li>
                <li>Match codes for each settlement scenario, across dimensions</li>
                <li>End-to-end collection reconciliation and revenue recognition</li>
              </ul>
            </div>
            <div className="fscp-sub dfw-rise">
              <span className="fscp-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-layers" /></svg></span>
              <h3>Inventory</h3><span className="fscp-sub-s">Multi-plant manufacturer</span>
              <p>Matching stock movements to GL balances across plants took five to eight days by hand, and provisions lacked the evidence to sign off.</p>
              <ul>
                <li>Opening plus receipts less issues plus corrections, against the GL</li>
                <li>Ageing and policy-based provision, trued up material by material</li>
                <li>Routing across store keeper, material owner, cost accountant, controller</li>
              </ul>
            </div>
          </div>

          <div className="fscp-strip" data-reveal>
            <span className="fscp-strip-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-loop" /></svg></span>
            <div>
              <b>What these three have in common.</b>
              <span>
                None of them started with new software in the transaction path.
                Each started by rebuilding the reconciliation on history that
                already existed, which is what made the close time fall. The
                cycle-time figures are the customers&rsquo; own, measured before
                and after.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= DISCOVER FIRST ============================= */}
      <section className="section fscp-rec-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow c-amber">Start here</span>
            <h2>Before you adopt it, we score a close you have already done</h2>
            <p>
              FSCP is prevention, and prevention is a promise about the future.
              The way to test a promise like that is to point it backwards first,
              at a close you already signed, and see what it would have flagged.
            </p>
          </div>

          <div className="fscp-twomin" data-reveal>
            <span className="fscp-twomin-n">2<em>min</em></span>
            <span className="fscp-twomin-t">
              <b>This is how long it takes to understand how much can be recovered.</b>
              Send us the close data for a period you have already closed. We
              score all 204 metrics across the full population, not a sample, and
              come back with the blockers that were live at the time and what they
              were worth. Before any contract.
            </span>
          </div>

          <div className="fscp-rec" data-reveal>
            <div className="fscp-rc dfw-rise">
              <h4>What was red</h4>
              <p>The blockers live on the day you signed, each with its count, value and denominator.</p>
            </div>
            <div className="fscp-rc is-2 dfw-rise">
              <h4>What was missed</h4>
              <p>Items that cleared after the close rather than before it, and the periods they should have landed in.</p>
            </div>
            <div className="fscp-rc is-3 dfw-rise">
              <h4>What repeats</h4>
              <p>Exceptions across three consecutive closes, where a control is missing rather than a task.</p>
            </div>
            <div className="fscp-rc is-4 dfw-rise">
              <h4>What it costs</h4>
              <p>The days spent on tasks a metric would have caught, and where the close calendar actually breaks.</p>
            </div>
          </div>

          <p className="fscp-sectors" data-reveal>
            The framework runs the same way for <b>manufacturing</b>,{" "}
            <b>distribution</b>, <b>retail</b>, <b>edtech</b>, <b>pharma</b> and{" "}
            <b>multi-entity groups</b>. The thresholds are yours; the 204
            questions are the same.
          </p>

          <div className="fscp-sec-cta" data-reveal>
            <a href="/#cta" className="btn btn-primary">
              Score my last close{" "}
              <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg>
            </a>
            <a href="#" className="btn btn-ghost">See all 204 metrics</a>
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
              <h2>
                Tell us your problem.
                <br />
                We&rsquo;ll tell you what we can recover.
              </h2>
              <p>
                Working from the close data your systems already hold, we run our
                discovery. Nothing changes in your systems, nobody in your team
                changes how they work, and you see what&rsquo;s recoverable before
                there&rsquo;s anything to sign. If the number isn&rsquo;t worth
                acting on, at least you know you&rsquo;re safe.
              </p>
              <div className="cta-buttons">
                <a href="/#top" className="btn btn-primary">
                  Tell us your problem{" "}
                  <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg>
                </a>
              </div>
              <div className="cta-email mono">
                Or email us directly at <a href="mailto:solve@datatwin.ai">solve@datatwin.ai</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FscpScripts />
    </div>
  );
}
