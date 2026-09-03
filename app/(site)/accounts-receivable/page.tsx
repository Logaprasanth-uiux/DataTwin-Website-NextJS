import type { Metadata } from "next";
import ArScripts from "@/components/ArScripts";

export const metadata: Metadata = {
  title: "Accounts Receivable: sales to cash, reconciled | DataTwin",
  description:
    "Sales against collections, collections against banking and payment gateways, sales against tax. Cash application including partial clearing, and revenue recognised in the right period. Discover values the gap first, read-only, before any contract.",
};

export default function AccountsReceivablePage() {
  return (
    <div className="cfo-page">
      {/* ============================= HERO ============================= */}
      <section className="hero ar-hero">
        <div className="hero-aurora"></div>
        <div className="ledger-grid"></div>
        <div className="wrap ar-hero-grid">
          <div className="ar-hero-inner">
            <span className="eyebrow">Accounts Receivable</span>
            <h1>
              The money arrives.
              <br />
              Proving what it <span className="grad-text">settled</span> is the work.
            </h1>
            <p className="hero-desc">
              DataTwin reads what your customers sent you, what your banks and gateways report, and what your ERP
              recorded, then rebuilds one reconciliation position across all three. Every receipt matched to an
              invoice, every short payment given a reason, every partial cleared to the line rather than parked in an
              unapplied bucket. We start on your history, read-only, before anything in your systems changes.
            </p>
            <div className="ar-chips">
              <span className="ar-chip"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-layers" /></svg>Sits above the ERP and billing you already run</span>
              <span className="ar-chip"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-lock" /></svg>Read-only until you turn application on</span>
              <span className="ar-chip"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-search" /></svg>Full transaction population, not a sample</span>
            </div>
            <div className="ar-hero-actions">
              <a href="/#cta" className="btn btn-primary">
                See what AR has cost you{" "}
                <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg>
              </a>
              <a href="/darp-framework" className="btn btn-ghost">How Discover works</a>
            </div>
          </div>

          {/* hero graphic: many streams converge to one position */}
          <div className="ar-conv" aria-hidden="true">
            <div className="ar-conv-src">
              <span>Customer screenshots</span>
              <span>Bank statements</span>
              <span>Gateway settlements</span>
              <span>Cheque &amp; cash slips</span>
              <span>ERP collections</span>
            </div>
            <svg className="ar-conv-wire" viewBox="0 0 120 220" preserveAspectRatio="none">
              <path className="ln" d="M0,20 C70,20 70,110 118,110" />
              <path className="ln" d="M0,64 C70,64 70,110 118,110" />
              <path className="ln" d="M0,110 L118,110" />
              <path className="ln" d="M0,156 C70,156 70,110 118,110" />
              <path className="ln" d="M0,200 C70,200 70,110 118,110" />
              <path className="fx" d="M0,20 C70,20 70,110 118,110" />
              <path className="fx" d="M0,110 L118,110" />
              <path className="fx" d="M0,200 C70,200 70,110 118,110" />
            </svg>
            <div className="ar-conv-out">
              <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-check" /></svg>
              <span>One reconciliation position</span>
              <em>every receipt matched, every difference named, every unapplied amount aged</em>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= EVIDENCE MAP — ONE PANEL ============================= */}
      <section className="section ar-map-sec">
        <div className="arc-glow g-blue"></div>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Everything that proves a receipt, in one place</span>
            <h2>Eight kinds of evidence, one position back</h2>
          </div>

          <div className="ar-flow" data-reveal>
            <div className="ledger-grid" aria-hidden="true"></div>
            <div className="ar-flow-head">
              <span className="ar-flow-title">Everything that proves a receipt</span>
              <span className="ar-flow-live"><i></i> Live process</span>
            </div>

            <div className="ar-flow-map">
              <div className="ar-flow-col">
                <span className="ar-flow-lbl">Evidence that settles a receipt</span>
                <div className="ar-flow-evgrid">
                  <div className="ar-flow-ev"><b>Digital screenshots</b><em>Customer proof of payment</em></div>
                  <div className="ar-flow-ev"><b>Bank statements</b><em>Every account, every entity</em></div>
                  <div className="ar-flow-ev"><b>NEFT and UPI refs</b><em>Buried in free text</em></div>
                  <div className="ar-flow-ev"><b>ERP collections</b><em>What the ledger shows</em></div>
                  <div className="ar-flow-ev"><b>Gateway settlements</b><em>Gross, fees, net, per cycle</em></div>
                  <div className="ar-flow-ev"><b>Cheque deposit slips</b><em>Scanned, often handwritten</em></div>
                  <div className="ar-flow-ev"><b>Cash deposit refs</b><em>Branch slip against book</em></div>
                  <div className="ar-flow-ev"><b>Undeposited cheques</b><em>Still sitting in a drawer</em></div>
                </div>
              </div>

              <div className="ar-flow-wire ar-flow-wire-in" aria-hidden="true">
                <svg viewBox="0 0 60 220" preserveAspectRatio="none">
                  <path className="ln" d="M0,20 C40,20 30,110 60,110" />
                  <path className="ln" d="M0,75 C40,75 40,110 60,110" />
                  <path className="ln" d="M0,145 C40,145 40,110 60,110" />
                  <path className="ln" d="M0,200 C40,200 30,110 60,110" />
                  <path className="fx" d="M0,20 C40,20 30,110 60,110" />
                  <path className="fx" d="M0,145 C40,145 40,110 60,110" />
                  <path className="fx" d="M0,200 C40,200 30,110 60,110" />
                </svg>
              </div>

              <div className="ar-flow-engine">
                <span className="ar-flow-engine-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-flow" /></svg></span>
                <b>DataTwin</b>
                <span className="ar-flow-engine-sub">Reads every source and rebuilds the reconciliation</span>
              </div>

              <div className="ar-flow-wire ar-flow-wire-out" aria-hidden="true">
                <svg viewBox="0 0 60 220" preserveAspectRatio="none">
                  <path className="ln" d="M0,110 C30,110 20,32 60,32" />
                  <path className="ln" d="M0,110 C30,110 30,92 60,92" />
                  <path className="ln" d="M0,110 C30,110 30,150 60,150" />
                  <path className="ln" d="M0,110 C30,110 20,210 60,210" />
                  <path className="fx" d="M0,110 C30,110 20,32 60,32" />
                  <path className="fx" d="M0,110 C30,110 30,150 60,150" />
                  <path className="fx" d="M0,110 C30,110 20,210 60,210" />
                </svg>
              </div>

              <div className="ar-flow-col is-out">
                <span className="ar-flow-lbl">What comes back</span>
                <div className="ar-flow-out">
                  <div className="ar-flow-ev is-out"><b>Sales vs collections</b><em>Billed against received</em></div>
                  <div className="ar-flow-ev is-out"><b>Collections vs bank</b><em>And gateway settlements</em></div>
                  <div className="ar-flow-ev is-out"><b>Sales vs taxation</b><em>Returns against the books</em></div>
                  <div className="ar-flow-ev is-out"><b>Cash applied</b><em>Partials cleared, not parked</em></div>
                </div>
              </div>
            </div>

            <div className="ar-flow-foot">
              <span className="ar-flow-foot-k">What comes back</span>
              <p>
                <b>One reconciliation position:</b> every receipt matched to an invoice, every difference named, every
                unapplied amount aged.
              </p>
            </div>
          </div>

          <p className="cfo-engine-note" data-reveal>
            Read-only to start &mdash; nothing changes in your billing system or your bank. Every stage runs on the same
            engine that powers the DARP Framework and FSCP: acquire, process, govern, report.
          </p>
        </div>
      </section>

      {/* ============================= DARP FIRST ============================= */}
      <section className="section ar-darp-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow c-violet">Discover · Assess · Recover</span>
            <h2>We start with the reconciliation, not the rollout</h2>
            <p>
              Nothing about how your team collects cash changes on day one. We take the history as it is, rebuild the
              position, and show you what is sitting unrecovered inside it. Prevention comes after the number is
              agreed.
            </p>
          </div>

          <div className="ar-darp" data-reveal>
            <div className="ar-darp-step dfw-rise">
              <span className="ar-darp-k">D</span>
              <h3>Discover</h3>
              <p>Sales, collections, bank and gateway data as they are. In about two minutes, the recoverable total split by heading, before any contract.</p>
            </div>
            <div className="ar-darp-step dfw-rise">
              <span className="ar-darp-k">A</span>
              <h3>Assess</h3>
              <p>After the contract, each heading is drilled to the last invoice and receipt, then prioritised with your team. It ends in a signed-off scope of what to recover.</p>
            </div>
            <div className="ar-darp-step dfw-rise">
              <span className="ar-darp-k">R</span>
              <h3>Recover</h3>
              <p>Only the signed-off scope is worked. Short payments evidenced, unapplied cash applied, wrong entries corrected, each with its trail.</p>
            </div>
          </div>
          <div className="ar-sec-cta" data-reveal>
            <a href="/darp-framework" className="ar-learn"><i></i> The DARP Framework in full <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-arrow-right" /></svg></a>
          </div>
        </div>
      </section>

      {/* ============================= 1 · EVIDENCE ============================= */}
      <section className="section ar-stage-sec">
        <div className="wrap">
          <div className="ar-stage-head" data-reveal>
            <span className="ar-stage-n">01</span>
            <div>
              <h2>The evidence arrives however the payer chose to send it</h2>
              <p>
                A receipt is only provable if you can see all of it. Customers send screenshots, banks report in
                their own format, gateways settle net of fees on their own cycle, and cheques sit in a drawer until
                someone deposits them. All of it comes in, and the original is kept.
              </p>
            </div>
          </div>
          <div className="ar-cards" data-reveal>
            <div className="ar-card dfw-rise">
              <h3>Collect</h3><span className="ar-card-s">Every source, one queue</span>
              <p>Bank feeds, gateway settlement files, ERP extracts, branch slips and the screenshots customers email. The original is always kept.</p>
              <ul>
                <li>Statement, settlement and ledger extracts on a schedule you set</li>
                <li>Customer proof of payment collected from the mailbox it lands in</li>
                <li>Cheque and cash deposit slips scanned and read in the same pipeline</li>
              </ul>
            </div>
            <div className="ar-card dfw-rise">
              <h3>Read</h3><span className="ar-card-s">Not retyped</span>
              <p>References, dates, amounts and payer names read off each document, including handwriting and the narration a UPI reference hides in.</p>
              <ul>
                <li>Handwritten slips and photographs handled in the same pipeline</li>
                <li>Payment references pulled out of free-text narration fields</li>
                <li>Every field confidence-scored; low confidence goes to a person</li>
              </ul>
            </div>
            <div className="ar-card dfw-rise">
              <h3>Normalise</h3><span className="ar-card-s">One shape, many banks</span>
              <p>Each bank, gateway and entity formats differently. They are brought to one shape, so a receipt can be compared across all of them at once.</p>
              <ul>
                <li>Multi-bank, multi-entity and multi-currency handled together</li>
                <li>Gateway gross, fee and net split out of the settlement line</li>
                <li>Duplicate deposits recognised across channels and periods</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 2 · SALES vs COLLECTIONS ============================= */}
      <section className="section ar-stage-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="ar-stage-head" data-reveal>
            <span className="ar-stage-n">02</span>
            <div>
              <h2>Sales against collections</h2>
              <p>
                Billed is not received. The gap between the two is where a receivable quietly ages into a write-off,
                and most of it is not bad debt. It is a deduction nobody evidenced, or a payment nobody applied.
              </p>
            </div>
          </div>
          <div className="ar-versus" data-reveal>
            <span className="ar-versus-side">Sales</span>
            <span className="ar-versus-vs">vs</span>
            <span className="ar-versus-side">Collections</span>
          </div>
          <div className="ar-cards" data-reveal>
            <div className="ar-card dfw-rise">
              <h3>Matched to the invoice</h3><span className="ar-card-s">Receipt to bill, by line</span>
              <p>Each receipt tested against open invoices on reference, amount, payer and date, including one payment covering many invoices.</p>
              <ul>
                <li>One receipt against many invoices, and many receipts against one</li>
                <li>Payer name variants resolved back to the same customer</li>
                <li>Advances and on-account receipts held separately, never forced</li>
              </ul>
            </div>
            <div className="ar-card dfw-rise">
              <h3>Short payments named</h3><span className="ar-card-s">A reason, not a balance</span>
              <p>Where the customer paid less, the shortfall is classified rather than left open: discount taken, deduction claimed, tax withheld, or simply short.</p>
              <ul>
                <li>Deductions traced to the claim or credit note behind them</li>
                <li>Tax withheld at source matched to the certificate</li>
                <li>Unexplained shortfalls flagged with invoice and evidence attached</li>
              </ul>
            </div>
            <div className="ar-card dfw-rise">
              <h3>Ageing that holds</h3><span className="ar-card-s">What is really outstanding</span>
              <p>Once receipts are applied properly the ageing changes. What remains is genuinely outstanding, not unapplied cash sitting in the wrong bucket.</p>
              <ul>
                <li>Ageing rebuilt on applied cash rather than open balances</li>
                <li>Disputed and deducted amounts separated from ordinary overdue</li>
                <li>Customer position consolidated across entities and currencies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 3 · BANK & GATEWAY ============================= */}
      <section className="section ar-stage-sec">
        <div className="wrap">
          <div className="ar-stage-head" data-reveal>
            <span className="ar-stage-n">03</span>
            <div>
              <h2>Collections against banking and payment gateways</h2>
              <p>
                For anyone selling through cards, wallets or a marketplace, the money in the bank is never the money
                on the order. Fees, refunds, chargebacks and settlement cycles all sit in between, and each one is a
                place a difference can hide.
              </p>
            </div>
          </div>
          <div className="ar-versus" data-reveal>
            <span className="ar-versus-side">Collections</span>
            <span className="ar-versus-vs">vs</span>
            <span className="ar-versus-side">Bank &amp; gateways</span>
          </div>
          <div className="ar-cards" data-reveal>
            <div className="ar-card dfw-rise">
              <h3>Bank to book</h3><span className="ar-card-s">Line by line, both ways</span>
              <p>Every bank line matched to a recorded receipt in both directions, so credits with nothing behind them surface as clearly as entries with no credit.</p>
              <ul>
                <li>Credits in the bank with no entry in the books, listed</li>
                <li>Entries in the books with no bank credit, listed</li>
                <li>Timing differences aged rather than quietly netted away</li>
              </ul>
            </div>
            <div className="ar-card dfw-rise">
              <h3>Gateway settlement</h3><span className="ar-card-s">Gross, fee, net</span>
              <p>Settlement files unpacked into gross, fee and net, then tested against the orders in that cycle and the amount that actually reached the account.</p>
              <ul>
                <li>Commission and fee re-performed against the agreed rate</li>
                <li>Refunds and chargebacks matched back to the original order</li>
                <li>Cycles that settled late, short or partly, flagged as they occur</li>
              </ul>
            </div>
            <div className="ar-card dfw-rise">
              <h3>Cash and cheque</h3><span className="ar-card-s">The slow instruments</span>
              <p>Deposit slips read and matched to the branch credit, with instruments that were received but never banked surfaced by age.</p>
              <ul>
                <li>Deposit slip against branch credit, per entity and account</li>
                <li>Cheques received but never deposited, surfaced and aged</li>
                <li>Returned and bounced instruments traced back to the invoice</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 4 · CASH APPLICATION ============================= */}
      <section className="section ar-stage-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="ar-stage-head" data-reveal>
            <span className="ar-stage-n">04</span>
            <div>
              <h2>Cash application, including partial clearing</h2>
              <p>
                Cash application is where reconciliations are usually lost. A payment that does not exactly equal an
                invoice gets parked, and once it is parked nobody goes back to it. Here the settled portion clears
                against the lines it settles, and only the genuine residue stays open.
              </p>
            </div>
          </div>
          <div className="ar-cards" data-reveal>
            <div className="ar-card dfw-rise">
              <h3>Applied on evidence</h3><span className="ar-card-s">Most of it, without a person</span>
              <p>Receipts applied to invoices on what the evidence says: remittance advice, reference, amount, and how that customer has historically paid.</p>
              <ul>
                <li>Remittance advice read from email, PDF or portal upload</li>
                <li>Customer payment behaviour learned and used as evidence</li>
                <li>Every application recorded with the reason it was made</li>
              </ul>
            </div>
            <div className="ar-card dfw-rise">
              <h3>Partial clearing</h3><span className="ar-card-s">Cleared to the line, not parked</span>
              <p>Where a payment settles part of an invoice, the settled portion clears and the residue stays open carrying the reason it stayed open.</p>
              <ul>
                <li>Invoices cleared line by line rather than all or nothing</li>
                <li>Residue carried with the deduction or dispute that caused it</li>
                <li>Nothing pushed into a suspense or unapplied account by default</li>
              </ul>
            </div>
            <div className="ar-card dfw-rise">
              <h3>Exceptions to a person</h3><span className="ar-card-s">Only what needs judgement</span>
              <p>What the evidence does not settle goes to your team with the candidate invoices ranked and the difference already quantified.</p>
              <ul>
                <li>Ranked candidates, each with the reason it was proposed</li>
                <li>Write-off and tolerance limits applied from your own policy</li>
                <li>Approval captured against the receipt, not left in an email</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 5 · SALES vs TAXATION ============================= */}
      <section className="section ar-stage-sec">
        <div className="wrap">
          <div className="ar-stage-head" data-reveal>
            <span className="ar-stage-n">05</span>
            <div>
              <h2>Sales against taxation</h2>
              <p>
                The revenue you filed and the revenue you booked should be the same number. When they are not, the
                difference is usually found by a tax authority rather than by you, and by then it carries interest.
              </p>
            </div>
          </div>
          <div className="ar-versus" data-reveal>
            <span className="ar-versus-side">Revenue filed</span>
            <span className="ar-versus-vs">vs</span>
            <span className="ar-versus-side">Revenue booked</span>
          </div>
          <div className="ar-cards" data-reveal>
            <div className="ar-card dfw-rise">
              <h3>Return to ledger</h3><span className="ar-card-s">Filed against booked</span>
              <p>Output tax in the returns compared to the revenue and tax recorded in the ledger, period by period and registration by registration.</p>
              <ul>
                <li>Every registration and entity reconciled separately</li>
                <li>Amendments tracked back to the period they correct</li>
                <li>Differences explained by invoice, not by a summary total</li>
              </ul>
            </div>
            <div className="ar-card dfw-rise">
              <h3>Rate and classification</h3><span className="ar-card-s">Re-performed, not assumed</span>
              <p>Rate, place of supply and classification re-performed on the invoice itself, rather than trusted from the master data that produced it.</p>
              <ul>
                <li>Rate and classification checked against item and customer</li>
                <li>Place of supply and export treatment tested per invoice</li>
                <li>Credit notes tested against the invoice they reverse</li>
              </ul>
            </div>
            <div className="ar-card dfw-rise">
              <h3>Withholding and credits</h3><span className="ar-card-s">What the customer deducted</span>
              <p>Tax the customer withheld matched to the certificate, so the credit gets claimed instead of sitting as an unexplained shortfall.</p>
              <ul>
                <li>Withholding matched to the certificate and the period</li>
                <li>Certificates not received chased with the invoice attached</li>
                <li>Credits claimed reconciled to what was actually deducted</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 6 · REVENUE RECOGNITION ============================= */}
      <section className="section ar-stage-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="ar-stage-head" data-reveal>
            <span className="ar-stage-n">06</span>
            <div>
              <h2>Revenue recognition</h2>
              <p>
                Invoiced is not earned. Where delivery, service periods or milestones sit between the two, the
                recognised number has to be built from what actually happened rather than from what was billed.
              </p>
            </div>
          </div>
          <div className="ar-cards" data-reveal>
            <div className="ar-card dfw-rise">
              <h3>Performance obligations</h3><span className="ar-card-s">Built from the contract</span>
              <p>Recognition driven by delivery, service period or milestone as the contract defines it, not by the date the invoice happened to be raised.</p>
              <ul>
                <li>Subscription and service periods spread across periods earned</li>
                <li>Milestone and delivery evidence linked to the entry</li>
                <li>Contract changes carried through to the remaining schedule</li>
              </ul>
            </div>
            <div className="ar-card dfw-rise">
              <h3>Deferred and unbilled</h3><span className="ar-card-s">Both sides visible</span>
              <p>Billed ahead sits in deferred revenue, earned ahead sits as unbilled, and both roll forward with the entries that moved them.</p>
              <ul>
                <li>Deferred and unbilled balances rolled forward with movement</li>
                <li>Schedules released automatically as the period is earned</li>
                <li>Cut-off tested at period end rather than assumed</li>
              </ul>
            </div>
            <div className="ar-card dfw-rise">
              <h3>Evidence for audit</h3><span className="ar-card-s">Assembled as it happens</span>
              <p>Contract, delivery evidence and the entry are held against one another, so testing recognition is a read rather than a reconstruction.</p>
              <ul>
                <li>Contract, evidence and journal held together per obligation</li>
                <li>Every recognition entry traceable to what it recognised</li>
                <li>Sample testing replaced by full-population evidence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= PREVENT ============================= */}
      <section className="section ar-prevent-sec">
        <div className="arc-glow g-violet"></div>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow c-violet">Prevent</span>
            <h2>Then the same rules run forward, on the money coming in</h2>
            <p>
              Prevent is not a second build. The rules that found the money are the rules that run on tomorrow&rsquo;s
              transactions, across the whole money-in lifecycle. That is where a one-off recovery starts compounding.
            </p>
          </div>
          <div className="ar-pay" data-reveal>
            <div className="ar-pstep dfw-rise"><span className="ar-pstep-d">1</span><h4>Order to invoice</h4><p>Checked against the order, the contract price and the tax treatment before it is sent.</p></div>
            <div className="ar-pstep dfw-rise"><span className="ar-pstep-d">2</span><h4>Invoice to collection</h4><p>Due dates, reminders and promises tracked per customer, with the evidence attached.</p></div>
            <div className="ar-pstep dfw-rise"><span className="ar-pstep-d">3</span><h4>Collection to bank</h4><p>Bank and gateway lines matched to receipts daily, not at year end.</p></div>
            <div className="ar-pstep dfw-rise"><span className="ar-pstep-d">4</span><h4>Bank to application</h4><p>Receipts applied and partials cleared as they land, so nothing parks in suspense.</p></div>
            <div className="ar-pstep dfw-rise"><span className="ar-pstep-d">5</span><h4>Application to books</h4><p>Revenue, tax and deferrals posted from what happened, with the journal read back.</p></div>
          </div>
          <div className="ar-sec-cta" data-reveal>
            <a href="/darp-framework" className="ar-learn"><i></i> How Recover becomes Prevent <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-arrow-right" /></svg></a>
          </div>
        </div>
      </section>

      {/* ============================= AGENTS ============================= */}
      <section className="section ar-agents-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Under the hood</span>
            <h2>What is actually doing the work</h2>
            <p>
              Specialised agents with narrow, defined duties, coordinated by an orchestration agent. Deterministic
              rules run wherever something posts to the books. Nothing posts because a model was confident.
            </p>
          </div>
          <div className="ar-agents" data-reveal>
            <div className="ar-agent dfw-rise">
              <span className="ar-agent-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-frame" /></svg></span>
              <h3>Remittance Agent</h3><span className="ar-agent-s">Reading the proof</span>
              <p>Remittance advices, deposit slips and payment screenshots read in one pipeline, handwriting included, with the reference pulled out of free text.</p>
            </div>
            <div className="ar-agent dfw-rise">
              <span className="ar-agent-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-swap" /></svg></span>
              <h3>Matching Agent</h3><span className="ar-agent-s">Applying the evidence</span>
              <p>Receipts matched on reference, amount, payer and behaviour, partials cleared to the line, and every application recorded with its reason.</p>
            </div>
            <div className="ar-agent dfw-rise">
              <span className="ar-agent-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-tax" /></svg></span>
              <h3>Revenue Agent</h3><span className="ar-agent-s">Recognised, not assumed</span>
              <p>Recognition built from delivery and service periods, deferrals rolled forward, and tax re-performed on the invoice before anything posts.</p>
            </div>
          </div>
          <div className="ar-sec-cta" data-reveal>
            <a href="/how-ai-is-used" className="btn btn-ghost">The full agent architecture <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg></a>
            <a href="/security" className="ar-learn"><i></i> How your data is protected <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-arrow-right" /></svg></a>
          </div>
        </div>
      </section>

      {/* ============================= COMPARISON ============================= */}
      <section className="section ar-cmp-sec">
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">What changes</span>
            <h2>What changes, honestly stated</h2>
            <p>Not a longer list of features. A different distribution of who does what, and when a difference is found.</p>
          </div>
          <div className="ar-cmp" data-reveal>
            <table>
              <thead>
                <tr><th>Where it shows</th><th>How AR runs today</th><th>How it runs on DataTwin</th></tr>
              </thead>
              <tbody>
                <tr><td>Workload</td><td>Receipts matched to invoices by hand, with the difficult ones left unapplied</td><td>Most receipts applied on evidence; your team works only the exceptions that need judgement</td></tr>
                <tr><td>Cycle time</td><td>Reconciliation done at month end, weeks after the money actually moved</td><td>Bank, gateway and ledger agreed daily, so a difference is found while it can still be answered</td></tr>
                <tr><td>Unapplied cash</td><td>Parked in suspense and revisited when somebody has the time</td><td>Cleared to the line as it lands, with the residue carrying the reason it stayed open</td></tr>
                <tr><td>Short payments</td><td>Aged and eventually written off, because nobody evidenced the deduction</td><td>Classified at the receipt, with the claim, credit note or certificate behind it attached</td></tr>
                <tr><td>Tax</td><td>Differences between returns and books surface in an assessment</td><td>Return against ledger reconciled every period, per registration, explained by invoice</td></tr>
                <tr><td>Revenue</td><td>Recognition rebuilt in a spreadsheet at period end</td><td>Built from obligations as they are met, with deferred and unbilled rolling forward</td></tr>
                <tr><td>Audit</td><td>Sample testing, with correction long after the event</td><td>Evidence assembled as the transaction happens, so testing is a read rather than a project</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================= RECOVERY ============================= */}
      <section className="section ar-rec-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow c-amber">Start here</span>
            <h2>Before you change anything, find out what it has already cost you</h2>
            <p>
              Everything above is prevention; it stops the next one. It does nothing about the last three years, which
              are sitting in your receivables history right now. So we start there, read-only, before there is
              anything to sign.
            </p>
          </div>
          <div className="ar-twomin" data-reveal>
            <span className="ar-twomin-n">2<em>min</em></span>
            <span className="ar-twomin-t">
              <b>This is how long it takes to understand how much can be recovered.</b>
              Send us sales, collections, bank statements and gateway settlements. We test the full transaction
              population, not a sample, and come back with what is recoverable, split by heading. Before any contract.
            </span>
          </div>
          <div className="ar-rec" data-reveal>
            <div className="ar-rc dfw-rise"><h4>Cash never applied</h4><p>Receipts never applied. Duplicate deposits. Advances never set off against a bill.</p></div>
            <div className="ar-rc is-2 dfw-rise"><h4>Money short-paid</h4><p>Deductions with no claim. Discounts outside terms. Tax withheld, no certificate.</p></div>
            <div className="ar-rc is-3 dfw-rise"><h4>Fees and settlements</h4><p>Commission above the agreed rate. Cycles settled short. Refunds never traced back.</p></div>
            <div className="ar-rc is-4 dfw-rise"><h4>Entries that are wrong</h4><p>Revenue in the wrong period. Deferrals never released. Balances that agree only in total.</p></div>
          </div>
          <p className="ar-sectors" data-reveal>
            We run these reconciliations for <b>retail</b>, <b>edtech</b>, <b>manufacturing</b> and <b>pharma</b>{" "}
            finance teams. The shape of the evidence differs in each; the questions do not.
          </p>
          <div className="ar-sec-cta" data-reveal>
            <a href="/#cta" className="btn btn-primary">Get an estimate for AR <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg></a>
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

      <ArScripts />
    </div>
  );
}
