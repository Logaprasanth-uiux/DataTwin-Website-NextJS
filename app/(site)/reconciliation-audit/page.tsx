import type { Metadata } from "next";
import ReconScripts from "@/components/ReconScripts";

export const metadata: Metadata = {
  title: "Reconciliation and Audit: two-way to N-way, continuously | DataTwin",
  description:
    "Any two sides, at any grain, with tolerance and fuzzy matching, many-to-many resolution, a reason on every difference and sign-off recorded against the period. Full population rather than a sample, with every match carrying the document that supports it.",
};

export default function ReconciliationAuditPage() {
  return (
    <div className="cfo-page">
      {/* ============================= HERO ============================= */}
      <section className="hero recon-hero">
        <div className="hero-aurora"></div>
        <div className="ledger-grid"></div>
        <div className="wrap recon-hero-grid">
          <div className="recon-hero-inner">
            <span className="eyebrow">Reconciliation &amp; Audit</span>
            <h1>
              Most tools match two things.
              <br />
              Finance problems rarely have <span className="grad-text">two sides</span>.
            </h1>
            <p className="hero-desc">
              An invoice against a purchase order against a receipt against a contract price. A claim against
              point-of-sale against inventory against an agreement. DataTwin reconciles N-way at whatever grain the
              question needs, with tolerance rules and fuzzy matching where identifiers disagree across systems, and
              every match carries the document that supports it. The result is auditable rather than asserted, which
              matters more than the match rate the moment somebody challenges it.
            </p>
            <div className="recon-chips">
              <span className="recon-chip"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-swap" /></svg>Two-way through N-way, at line, header or balance</span>
              <span className="recon-chip"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-search" /></svg>Full population rather than a sample</span>
              <span className="recon-chip"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-doc" /></svg>Every match linked to the document behind it</span>
            </div>
            <div className="recon-hero-actions">
              <a href="/#cta" className="btn btn-primary">
                See what is not reconciling{" "}
                <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg>
              </a>
              <a href="/darp-framework" className="btn btn-ghost">How Discover works</a>
            </div>
          </div>

          {/* hero graphic: N sides into one match, out to an exception register */}
          <div className="recon-hub" aria-hidden="true">
            <div className="recon-hub-sides">
              <span>Ledger</span>
              <span>Statement</span>
              <span>Order</span>
              <span>Receipt</span>
              <span>Contract</span>
            </div>
            <div className="recon-hub-core">
              <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-schema" /></svg>
              <b>Match N-way</b>
            </div>
            <div className="recon-hub-out">
              <span className="recon-hub-out-lbl">Exception register</span>
              <span>a reason, an age and a name on every line</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= SOURCES → REGISTER — ONE PANEL ============================= */}
      <section className="section recon-src-sec">
        <div className="arc-glow g-blue"></div>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Any two sides, one exception register</span>
            <h2>Whatever the two sides are</h2>
          </div>

          <div className="recon-flow" data-reveal>
            <div className="ledger-grid" aria-hidden="true"></div>
            <div className="recon-flow-head">
              <span className="recon-flow-title">Any two sides, matched N-way</span>
              <span className="recon-flow-live"><i></i> Live process</span>
            </div>

            <div className="recon-flow-feed">
              <div className="recon-flow-col">
                <span className="recon-flow-lbl">Whatever the two sides are</span>
                <div className="recon-flow-in"><b>Your ledgers</b><em>GL, sub-ledgers, entities</em></div>
                <div className="recon-flow-in"><b>Counterparty statements</b><em>banks, vendors, customers, portals</em></div>
                <div className="recon-flow-in"><b>Operational systems</b><em>billing, WMS, CRM, payroll, gateways</em></div>
                <div className="recon-flow-in"><b>The documents</b><em>contracts, POs, GRNs, certificates</em></div>
              </div>

              <div className="recon-flow-wire" aria-hidden="true">
                <svg viewBox="0 0 60 200" preserveAspectRatio="none">
                  <path className="ln" d="M0,24 C40,24 30,100 60,100" />
                  <path className="ln" d="M0,74 C40,74 40,100 60,100" />
                  <path className="ln" d="M0,126 C40,126 40,100 60,100" />
                  <path className="ln" d="M0,176 C40,176 30,100 60,100" />
                  <path className="fx" d="M0,24 C40,24 30,100 60,100" />
                  <path className="fx" d="M0,126 C40,126 40,100 60,100" />
                  <path className="fx" d="M0,176 C40,176 30,100 60,100" />
                </svg>
              </div>

              <div className="recon-flow-engine">
                <span className="recon-flow-engine-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-schema" /></svg></span>
                <b>DataTwin</b>
                <span className="recon-flow-engine-sub">Matches N-way, then names what did not match</span>
              </div>
            </div>

            <div className="recon-flow-out">
              <span className="recon-flow-out-lbl">One exception register</span>
              <div className="recon-reg">
                <div className="recon-reg-head">
                  <span>Reconciliation</span><span>Item</span><span>Reason</span><span>Age</span><span className="is-r">State</span>
                </div>
                <div className="recon-reg-row"><span>Bank vs book</span><span>Credit, no entry</span><span>Unidentified receipt</span><span>4d</span><span className="is-r st-open">open</span></div>
                <div className="recon-reg-row is-hi"><span>Invoice vs GRN</span><span>Qty billed above</span><span>Short receipt</span><span>11d</span><span className="is-r st-open">open</span></div>
                <div className="recon-reg-row"><span>Intercompany</span><span>One-sided entry</span><span>Not booked by counter</span><span>31d</span><span className="is-r st-aged">aged</span></div>
                <div className="recon-reg-row"><span>GL vs sub-ledger</span><span>Control account</span><span>Manual journal</span><span>2d</span><span className="is-r st-exp">explained</span></div>
                <div className="recon-reg-row"><span>Payroll vs GL</span><span>Net pay</span><span>Matches</span><span>0d</span><span className="is-r st-clean">clean</span></div>
              </div>
            </div>

            <div className="recon-flow-foot">
              <span className="recon-flow-foot-k">Why this matters</span>
              <p>
                A reconciliation that produces a number is half a reconciliation. <b>The half that matters is the list of
                differences</b>, each with a reason, an age and somebody&rsquo;s name against it.
              </p>
            </div>
          </div>

          <p className="cfo-engine-note" data-reveal>
            Read-only to start &mdash; nothing changes in your ledgers or your source systems. Every stage runs on the
            same engine that powers the DARP Framework and FSCP: acquire, process, govern, report.
          </p>
        </div>
      </section>

      {/* ============================= SEVEN QUESTIONS ============================= */}
      <section className="section recon-axes-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">The engine</span>
            <h2>Every reconciliation is the same seven questions</h2>
            <p>
              Bank against book and invoice against receipt feel like different jobs. They are the same seven
              decisions with different sources, which is why they run on one engine rather than on a tool for each and
              a spreadsheet for the rest.
            </p>
          </div>

          <div className="recon-axes" data-reveal>
            <div className="recon-ax dfw-rise"><b>01 · The two sides</b><h4>What is being compared</h4><p>Two systems, or four. A ledger against a statement, or an invoice against a PO against a receipt against a contract.</p></div>
            <div className="recon-ax dfw-rise"><b>02 · The grain</b><h4>At what level do they meet</h4><p>Line, header, batch or balance. Most failed reconciliations are two sides compared at different grains.</p></div>
            <div className="recon-ax dfw-rise"><b>03 · The key</b><h4>What makes a pair a pair</h4><p>A reference, or an amount and a date, or a name that is spelled differently in each system.</p></div>
            <div className="recon-ax dfw-rise"><b>04 · The tolerance</b><h4>When is a difference a difference</h4><p>Rounding, exchange rates and fees mean exact equality is often the wrong test.</p></div>
            <div className="recon-ax dfw-rise"><b>05 · The timing</b><h4>When should they agree</h4><p>Cut-off, settlement cycles and in-transit items make a real difference look like an error.</p></div>
            <div className="recon-ax dfw-rise"><b>06 · The reason</b><h4>Why did this one not match</h4><p>A difference without a reason is a to-do. A difference with a reason is either resolved or accepted.</p></div>
            <div className="recon-ax dfw-rise"><b>07 · The sign-off</b><h4>Who says it is right</h4><p>Preparer, reviewer, date. A reconciliation nobody owns is not a control, whatever the match rate.</p></div>
            <div className="recon-ax is-out dfw-rise"><b>The outcome</b><h4>A position somebody stands behind</h4><p>Seven answers turn a matching exercise into a control, on the engine every DataTwin product runs on.</p></div>
          </div>
        </div>
      </section>

      {/* ============================= 1 · BOTH SIDES ============================= */}
      <section className="section recon-stage-sec">
        <div className="wrap">
          <div className="recon-stage-head" data-reveal>
            <span className="recon-stage-n">01</span>
            <div>
              <h2>Getting both sides into the same shape is most of the work</h2>
              <p>
                Reconciliation projects rarely fail at matching. They fail earlier, because one side is a PDF, the
                other is an export nobody can schedule, and the identifier that should join them was truncated by a
                system in between.
              </p>
            </div>
          </div>
          <div className="recon-cards" data-reveal>
            <div className="recon-card dfw-rise">
              <h3>Whatever shape it arrives in</h3><span className="recon-card-s">Feed, file or document</span>
              <p>Direct connections, scheduled extracts, portal downloads, statements and scanned documents all land in the same pipeline.</p>
              <ul>
                <li>ERP, banking, gateway, billing and operational systems</li>
                <li>Statements and confirmations read as data, not filed as PDFs</li>
                <li>The original kept as evidence for the match it supports</li>
              </ul>
            </div>
            <div className="recon-card dfw-rise">
              <h3>Normalised</h3><span className="recon-card-s">One shape, many systems</span>
              <p>Dates, currencies, entity codes and identifiers brought to one form so two sides can be compared without a manual clean-up first.</p>
              <ul>
                <li>Multi-entity, multi-currency and multi-book handled together</li>
                <li>Identifiers repaired where a system truncated or reformatted them</li>
                <li>Reference data mapped once and reused by every reconciliation</li>
              </ul>
            </div>
            <div className="recon-card dfw-rise">
              <h3>At the right grain</h3><span className="recon-card-s">Line, header or balance</span>
              <p>Two sides compared at the level the question needs. Comparing a line-level source to a header-level one is why reconciliations never close.</p>
              <ul>
                <li>Line, header, batch or balance, set per reconciliation</li>
                <li>Aggregation applied deliberately rather than by accident</li>
                <li>Both sides held at their native grain as well as the compared one</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 2 · MATCHING ============================= */}
      <section className="section recon-stage-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="recon-stage-head" data-reveal>
            <span className="recon-stage-n">02</span>
            <div>
              <h2>Then the matching, which is not usually one to one</h2>
              <p>
                One receipt settles seven invoices. One bank credit covers three gateway batches. One invoice spans
                two purchase orders. Any tool can match a reference to a reference; the work is in everything that is
                not that.
              </p>
            </div>
          </div>
          <div className="recon-cards" data-reveal>
            <div className="recon-card dfw-rise">
              <h3>One to many, many to many</h3><span className="recon-card-s">Resolved, not deferred</span>
              <p>Split settlements, batch payments and part-deliveries resolved into the set of records they actually cover.</p>
              <ul>
                <li>One-to-many and many-to-many sets resolved explicitly</li>
                <li>Split and batch settlements unbundled to their components</li>
                <li>Partial matches cleared to the part they settle, not left whole</li>
              </ul>
            </div>
            <div className="recon-card dfw-rise">
              <h3>Tolerance</h3><span className="recon-card-s">When close enough is correct</span>
              <p>Rounding, bank charges, exchange differences and agreed variances treated as tolerances rather than exceptions, with the rule visible.</p>
              <ul>
                <li>Tolerance by value, percentage or both, per reconciliation</li>
                <li>Charges and exchange differences classified, not absorbed</li>
                <li>What was matched within tolerance shown, never hidden</li>
              </ul>
            </div>
            <div className="recon-card dfw-rise">
              <h3>Fuzzy, where it has to be</h3><span className="recon-card-s">Names never agree</span>
              <p>Where identifiers differ across systems, matching uses names, amounts and dates together, and records why each match was made.</p>
              <ul>
                <li>Party name variants resolved to one counterparty</li>
                <li>Amount, date and narration used together where no key exists</li>
                <li>Every fuzzy match carrying its confidence and its reason</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 3 · THE DIFFERENCE ============================= */}
      <section className="section recon-stage-sec">
        <div className="wrap">
          <div className="recon-stage-head" data-reveal>
            <span className="recon-stage-n">03</span>
            <div>
              <h2>The unmatched list is the product, not the leftovers</h2>
              <p>
                A reconciliation that ends with a number and a pile of unmatched items has moved the work rather than
                done it. Each difference needs a reason, an owner and an age, or it will be the same difference next
                month.
              </p>
            </div>
          </div>
          <div className="recon-cards" data-reveal>
            <div className="recon-card dfw-rise">
              <h3>A reason on every line</h3><span className="recon-card-s">Classified, not listed</span>
              <p>Differences classified into timing, error, omission, dispute and unidentified, so the list can be worked by cause instead of read top to bottom.</p>
              <ul>
                <li>Timing differences separated from genuine breaks</li>
                <li>Root cause attached, so the same break stops recurring</li>
                <li>Unidentified items named as unidentified, not netted away</li>
              </ul>
            </div>
            <div className="recon-card dfw-rise">
              <h3>Aged</h3><span className="recon-card-s">A break gets older, not better</span>
              <p>Every open difference carries its age, so a two-day item and a two-year item are never presented as the same problem.</p>
              <ul>
                <li>Ageing by reconciliation, counterparty and reason</li>
                <li>Items past a threshold escalated rather than carried forward</li>
                <li>What was written off, and on whose authority</li>
              </ul>
            </div>
            <div className="recon-card dfw-rise">
              <h3>Owned</h3><span className="recon-card-s">Somebody is working it</span>
              <p>Each break is assigned, worked and closed with a note, so the reconciliation is a live control rather than a monthly report.</p>
              <ul>
                <li>Assignment, action and closure recorded against the item</li>
                <li>Correspondence and evidence attached to the break itself</li>
                <li>What is genuinely irrecoverable separated from what is late</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= CATALOGUE ============================= */}
      <section className="section recon-cat-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">In practice</span>
            <h2>What people actually reconcile</h2>
            <p>
              This is not a fixed list of supported reconciliations. It is the set we see most often. A new one is a
              new configuration of the seven questions above, not a new product.
            </p>
          </div>
          <div className="recon-cat" data-reveal>
            <table>
              <thead>
                <tr><th>Reconciliation</th><th>One side</th><th>The other side</th><th>What it catches</th></tr>
              </thead>
              <tbody>
                <tr><td>Bank to book</td><td>Bank statements, all accounts</td><td>Cash book and GL</td><td>Unidentified receipts, unpresented items, charges never booked</td></tr>
                <tr><td>Gateway settlement</td><td>Settlement files</td><td>Orders and bank credits</td><td>Fees above the agreed rate, refunds and chargebacks never traced</td></tr>
                <tr><td>Invoice to PO to GRN</td><td>Vendor invoice lines</td><td>Order and receipt</td><td>Billed above ordered or received, price and quantity breaks</td></tr>
                <tr><td>Receipt to invoice</td><td>Customer receipts</td><td>Open invoices</td><td>Unapplied cash, short payments with no deduction behind them</td></tr>
                <tr><td>GL to sub-ledger</td><td>Control accounts</td><td>AP, AR, fixed assets, stock</td><td>Manual journals to control accounts, and balances that stopped agreeing</td></tr>
                <tr><td>Intercompany</td><td>Entity A books</td><td>Entity B books</td><td>One-sided entries, mismatched amounts, unagreed balances at close</td></tr>
                <tr><td>Inventory</td><td>Physical and WMS</td><td>Stock ledger</td><td>Shrinkage, goods in transit, receipts booked but never accrued</td></tr>
                <tr><td>Payroll</td><td>Payroll register</td><td>GL and bank</td><td>Net pay differences, statutory deductions never deposited</td></tr>
                <tr><td>Revenue</td><td>Billing system</td><td>Revenue and deferred balances</td><td>Unbilled and deferred that never rolled forward, cut-off errors</td></tr>
                <tr><td>Tax</td><td>Registers and returns</td><td>Ledger and counterparty filings</td><td>Credit at risk, credit unclaimed, exposure from wrong treatment</td></tr>
                <tr><td>Claims and programmes</td><td>Claims and agreements</td><td>Sales, POS and settlements</td><td>Unclaimed and short-paid claims, and claims about to age out</td></tr>
                <tr><td>Payouts and commissions</td><td>Scheme or plan rows</td><td>Volume, bookings and payments</td><td>Wrong band applied, overlapping schemes, guarantees topped up twice</td></tr>
              </tbody>
            </table>
          </div>
          <div className="recon-strip" data-reveal>
            <span className="recon-strip-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-swap" /></svg></span>
            <div>
              <b>Not a fixed catalogue.</b>
              <span>
                If you can describe the two sides, the grain and what counts as a difference, it can be configured.
                That is the whole argument for one engine rather than a tool per reconciliation: the eleventh one
                costs what the first one cost, and no less, but it does not wait for a release.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 5 · AUDIT ============================= */}
      <section className="section recon-stage-sec">
        <div className="wrap">
          <div className="recon-stage-head" data-reveal>
            <span className="recon-stage-n">04</span>
            <div>
              <h2>And the audit changes shape, because the population is already tested</h2>
              <p>
                Sampling exists because testing everything by hand is impossible. Once every transaction has already
                been tested and the evidence is attached to it, the argument for a sample is weaker, and the
                conversation with your auditor gets shorter.
              </p>
            </div>
          </div>
          <div className="recon-cards" data-reveal>
            <div className="recon-card dfw-rise">
              <h3>Full population</h3><span className="recon-card-s">Rates, not instances</span>
              <p>Testing everything reports a rate rather than a handful of findings, which is a different and more useful conversation with a board.</p>
              <ul>
                <li>Every transaction tested, not a judgemental selection</li>
                <li>Exceptions reported as a rate across the population</li>
                <li>Thousands of items below materiality that add up, surfaced</li>
              </ul>
            </div>
            <div className="recon-card dfw-rise">
              <h3>Evidence attached</h3><span className="recon-card-s">As it happens</span>
              <p>The document that supports a match is held against the match, so testing is a read rather than a document request.</p>
              <ul>
                <li>Every match linked to the record that supports it</li>
                <li>A complete trail from source record to posted entry</li>
                <li>Sample requests answered without a new extraction</li>
              </ul>
            </div>
            <div className="recon-card dfw-rise">
              <h3>Continuous, not periodic</h3><span className="recon-card-s">Controls that run</span>
              <p>Reconciliations and control checks run on a schedule rather than at period end, so a failure is found in the week it happens.</p>
              <ul>
                <li>Control checks run continuously, not as a close task</li>
                <li>Breaks escalated on age rather than discovered at close</li>
                <li>The same evidence serves internal and statutory audit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= PREVENT ============================= */}
      <section className="section recon-prevent-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="arc-glow g-violet"></div>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow c-violet">Prevent</span>
            <h2>Then it stops being a month-end exercise</h2>
            <p>
              Prevent is not a second build. The reconciliations that found your history are the reconciliations that
              run every night. That is where a one-off clean-up starts compounding.
            </p>
          </div>
          <div className="recon-pay" data-reveal>
            <div className="recon-pstep dfw-rise"><span className="recon-pstep-d">1</span><h4>Configured</h4><p>The two sides, the grain, the key and the tolerance agreed once, per reconciliation.</p></div>
            <div className="recon-pstep dfw-rise"><span className="recon-pstep-d">2</span><h4>Run on schedule</h4><p>Nightly or intraday, so a break is days old rather than a month old.</p></div>
            <div className="recon-pstep dfw-rise"><span className="recon-pstep-d">3</span><h4>Classified</h4><p>Every difference given a reason and an owner as it appears.</p></div>
            <div className="recon-pstep dfw-rise"><span className="recon-pstep-d">4</span><h4>Escalated</h4><p>Age and value drive escalation, rather than somebody remembering at close.</p></div>
            <div className="recon-pstep dfw-rise"><span className="recon-pstep-d">5</span><h4>Signed off</h4><p>Preparer and reviewer recorded against the period, with the evidence attached.</p></div>
          </div>
          <div className="recon-sec-cta" data-reveal>
            <a href="/darp-framework" className="recon-learn"><i></i> How Recover becomes Prevent <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-arrow-right" /></svg></a>
          </div>
        </div>
      </section>

      {/* ============================= COMPARISON ============================= */}
      <section className="section recon-cmp-sec">
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">What changes</span>
            <h2>What changes, honestly stated</h2>
            <p>Not a longer list of features. A different distribution of who does what, and when a difference is found.</p>
          </div>
          <div className="recon-cmp" data-reveal>
            <table>
              <thead>
                <tr><th>Where it shows</th><th>How reconciliation runs today</th><th>How it runs on DataTwin</th></tr>
              </thead>
              <tbody>
                <tr><td>When it runs</td><td>At period end, on the days there is least time for it</td><td>On a schedule, so a break is found in the week it happens</td></tr>
                <tr><td>How many sides</td><td>Two, because that is what the tool does</td><td>As many as the question needs, at the grain it needs</td></tr>
                <tr><td>The hard matches</td><td>Left unmatched, or forced through so the total agrees</td><td>Many-to-many resolved, with tolerance and fuzzy matching recorded</td></tr>
                <tr><td>The unmatched list</td><td>A pile that gets carried forward</td><td>Classified by reason, aged, owned and escalated</td></tr>
                <tr><td>Evidence</td><td>Found again each time somebody asks</td><td>Attached to the match when the match was made</td></tr>
                <tr><td>A new reconciliation</td><td>A new spreadsheet, and a person who now maintains it</td><td>A new configuration of the same seven questions</td></tr>
                <tr><td>Audit</td><td>A sample, tested after the event</td><td>Full population, tested as it happens</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================= RECOVERY ============================= */}
      <section className="section recon-rec-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow c-amber">Start here</span>
            <h2>Before you change anything, find out what it has already cost you</h2>
            <p>
              Everything above is prevention; it stops the next month breaking. It does nothing about the differences
              already sitting in your ledgers, some of them for years. So we start there, read-only, before there is
              anything to sign.
            </p>
          </div>
          <div className="recon-twomin" data-reveal>
            <span className="recon-twomin-n">2<em>min</em></span>
            <span className="recon-twomin-t">
              <b>This is how long it takes to understand how much can be recovered.</b>
              Send us the two sides of whichever reconciliation worries you most. We test the full transaction
              population, not a sample, and come back with what is recoverable and what is merely unexplained, split by
              heading. Before any contract.
            </span>
          </div>
          <div className="recon-rec" data-reveal>
            <div className="recon-rc dfw-rise"><h4>Money to collect</h4><p>Receipts never applied, credits never taken, claims never raised, balances owed and never chased.</p></div>
            <div className="recon-rc is-2 dfw-rise"><h4>Money paid out</h4><p>Duplicate and over-payments, charges above the agreed rate, deductions never netted.</p></div>
            <div className="recon-rc is-3 dfw-rise"><h4>Entries that are wrong</h4><p>Control accounts that stopped agreeing, one-sided intercompany, accruals never reversed.</p></div>
            <div className="recon-rc is-4 dfw-rise"><h4>Control gaps</h4><p>Why the first three keep happening: recs nobody owns, breaks nobody ages, sign-off nobody records.</p></div>
          </div>
          <p className="recon-sectors" data-reveal>
            The same engine reconciles for <b>manufacturing</b>, <b>distribution</b>, <b>retail</b>, <b>logistics</b>,{" "}
            <b>pharma</b>, <b>financial services</b> and <b>multi-entity groups</b>. If you can describe the two sides,
            it can be configured.
          </p>
          <div className="recon-sec-cta" data-reveal>
            <a href="/#cta" className="btn btn-primary">Get an estimate <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg></a>
            <a href="/darp-framework" className="btn btn-ghost">How Discover works</a>
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
                Working from the transaction history your systems already hold, we run our discovery. Nothing changes
                in your systems, nobody in your team changes how they work, and you see what&rsquo;s recoverable before
                there&rsquo;s anything to sign. If the number isn&rsquo;t worth acting on, at least you know you&rsquo;re safe.
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

      <ReconScripts />
    </div>
  );
}
