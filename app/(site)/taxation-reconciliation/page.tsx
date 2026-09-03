import type { Metadata } from "next";
import TaxScripts from "@/components/TaxScripts";

export const metadata: Metadata = {
  title: "Taxation Reconciliation: what you booked against what you filed | DataTwin",
  description:
    "Input credit unclaimed or taken on blocked spend, purchase register against supplier filings, output tax against revenue, reverse charge, withholding on both sides and the certificates behind it. Every item checked against its claim window and ranked by how long you have left.",
};

export default function TaxationReconciliationPage() {
  return (
    <div className="cfo-page">
      {/* ============================= HERO ============================= */}
      <section className="hero tax-hero">
        <div className="hero-aurora"></div>
        <div className="ledger-grid"></div>
        <div className="wrap tax-hero-grid">
          <div className="tax-hero-inner">
            <span className="eyebrow">Taxation Reconciliation</span>
            <h1>
              Tax is the one counterparty
              <br />
              you cannot <span className="grad-text">negotiate</span> with.
            </h1>
            <p className="hero-desc">
              Every other recovery is a conversation. Tax is arithmetic against a statute, which makes it the
              quietest line on the list and often the fastest to collect. DataTwin reconciles what you booked against
              what you filed, and both against what your suppliers and customers filed, on the payables side and the
              receivables side together. Then it ranks what is left by how long you have to act.
            </p>
            <div className="tax-chips">
              <span className="tax-chip"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-lock" /></svg>Read-only on top of the ERP you already run</span>
              <span className="tax-chip"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-swap" /></svg>Both sides: credit claimable and credit at risk</span>
              <span className="tax-chip"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-gauge" /></svg>Every item ranked by its remaining window</span>
            </div>
            <div className="tax-hero-actions">
              <a href="/#cta" className="btn btn-primary">
                See what tax has cost you{" "}
                <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg>
              </a>
              <a href="/darp-framework" className="btn btn-ghost">How Discover works</a>
            </div>
          </div>

          {/* hero graphic: booked vs filed, with a window closing */}
          <div className="tax-scale" aria-hidden="true">
            <div className="tax-scale-row">
              <div className="tax-scale-pan"><b>Booked</b><span>what the ledger says</span></div>
              <div className="tax-scale-seam"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-swap" /></svg></div>
              <div className="tax-scale-pan"><b>Filed</b><span>what the return says</span></div>
            </div>
            <div className="tax-scale-diff">
              <span className="tax-scale-diff-lbl">Difference register</span>
              <p>Either they agree or they do not. The counterparty is a statute.</p>
            </div>
            <div className="tax-window">
              <span className="tax-window-lbl">Claim window</span>
              <div className="tax-window-bars">
                <i style={{ width: "78%" }}></i>
                <i style={{ width: "46%" }}></i>
                <i className="is-urgent" style={{ width: "19%" }}></i>
              </div>
              <span className="tax-window-note">Ranked by days left, not by amount</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= FOUR REGISTERS — ONE PANEL ============================= */}
      <section className="section tax-reg-sec">
        <div className="arc-glow g-blue"></div>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Four registers, one difference list</span>
            <h2>The four things that must agree</h2>
          </div>

          <div className="tax-flow" data-reveal>
            <div className="ledger-grid" aria-hidden="true"></div>
            <div className="tax-flow-head">
              <span className="tax-flow-title">Register against return</span>
              <span className="tax-flow-live"><i></i> Live process</span>
            </div>

            <div className="tax-flow-feed">
              <div className="tax-flow-col">
                <span className="tax-flow-lbl">The four things that must agree</span>
                <div className="tax-flow-in"><b>Returns as filed</b><em>per registration, per period</em></div>
                <div className="tax-flow-in"><b>The ledger</b><em>what was actually booked</em></div>
                <div className="tax-flow-in"><b>What counterparties filed</b><em>supplier returns and customer claims</em></div>
                <div className="tax-flow-in"><b>Certificates and documents</b><em>withholding, exemption, shipping bills</em></div>
              </div>

              <div className="tax-flow-wire" aria-hidden="true">
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

              <div className="tax-flow-engine">
                <span className="tax-flow-engine-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-flow" /></svg></span>
                <b>DataTwin</b>
                <span className="tax-flow-engine-sub">Reads all four and names every difference</span>
              </div>
            </div>

            <div className="tax-flow-out">
              <span className="tax-flow-out-lbl">One difference register</span>
              <div className="tax-diffs">
                <div className="tax-diff-head">
                  <span>Registration</span><span>Period</span><span>Heading</span><span>Reason</span><span className="is-r">Value</span>
                </div>
                <div className="tax-diff-row"><span>Entity 1</span><span>Apr</span><span>Input credit</span><span>Supplier never filed</span><span className="is-r tag-risk">at risk</span></div>
                <div className="tax-diff-row is-hi"><span>Entity 1</span><span>Apr</span><span>Input credit</span><span>Eligible, never claimed</span><span className="is-r tag-claim">claimable</span></div>
                <div className="tax-diff-row"><span>Entity 1</span><span>May</span><span>Output tax</span><span>Rate applied wrongly</span><span className="is-r tag-exp">exposure</span></div>
                <div className="tax-diff-row"><span>Entity 2</span><span>May</span><span>Withholding</span><span>No certificate received</span><span className="is-r tag-claim">claimable</span></div>
                <div className="tax-diff-row"><span>Entity 2</span><span>Jun</span><span>Reverse charge</span><span>Not self-assessed</span><span className="is-r tag-exp">exposure</span></div>
              </div>
            </div>

            <div className="tax-flow-foot">
              <span className="tax-flow-foot-k">Why this matters</span>
              <p>
                A tax difference is not an opinion. <b>Either the ledger and the return agree or they do not</b>, and the
                counterparty is a statute rather than a negotiation. What is missing is the reconciliation, not the
                argument.
              </p>
            </div>
          </div>

          <p className="cfo-engine-note" data-reveal>
            Read-only to start &mdash; we reconcile and evidence; we do not file your returns. Every stage runs on the
            same engine that powers the DARP Framework and FSCP: acquire, process, govern, report.
          </p>
        </div>
      </section>

      {/* ============================= TWO DIRECTIONS ============================= */}
      <section className="section tax-dir-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Two directions</span>
            <h2>Two directions, and they fail in opposite ways</h2>
            <p>
              Most tax work is organised by return rather than by direction, which hides the fact that the payables
              side and the receivables side leak differently. One loses money you were entitled to. The other creates
              exposure you have not provided for.
            </p>
          </div>

          <div className="tax-dir" data-reveal>
            <div className="tax-d dfw-rise">
              <span className="tax-d-k">&larr;</span>
              <h3>Payables: money you are owed</h3>
              <p>Input credit is yours if the spend was eligible, the document exists and your supplier actually filed. All three can fail, and the third is not in your control.</p>
            </div>
            <div className="tax-d is-2 dfw-rise">
              <span className="tax-d-k">&rarr;</span>
              <h3>Receivables: exposure you carry</h3>
              <p>Output tax is yours to get right. A wrong rate, a wrong place of supply or a credit note that never reversed becomes an assessment, with interest.</p>
            </div>
            <div className="tax-d is-3 dfw-rise">
              <span className="tax-d-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-gauge" /></svg></span>
              <h3>And a clock over both</h3>
              <p>Almost every item has a statutory window. Once it closes the money is gone, valid claim or not, so urgency has to rank the findings, not just value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 1 · REGISTER TO RETURN ============================= */}
      <section className="section tax-stage-sec">
        <div className="wrap">
          <div className="tax-stage-head" data-reveal>
            <span className="tax-stage-n">01</span>
            <div>
              <h2>Start where every tax question starts: register against return</h2>
              <p>
                The books say one thing and the return says another, and nobody can say why without rebuilding both.
                Doing that once, per registration and per period, turns most tax questions from an investigation into
                a lookup.
              </p>
            </div>
          </div>
          <div className="tax-cards" data-reveal>
            <div className="tax-card dfw-rise">
              <span className="tax-card-tag">Register</span>
              <h3>Both registers, rebuilt</h3><span className="tax-card-s">From the ledger up</span>
              <p>Purchase and sales registers reconstructed from the transactions themselves, at line level, for every registration and entity you hold.</p>
              <ul>
                <li>Every registration and entity reconciled separately</li>
                <li>Built from transactions rather than from a filed summary</li>
                <li>Multi-entity and multi-state positions held side by side</li>
              </ul>
            </div>
            <div className="tax-card dfw-rise">
              <span className="tax-card-tag">Return</span>
              <h3>Return against register</h3><span className="tax-card-s">Period by period</span>
              <p>What was filed compared to what the books support, with each difference carrying the invoices behind it rather than a net figure.</p>
              <ul>
                <li>Differences explained by invoice, not by a summary total</li>
                <li>Amendments and revised returns tracked to the period they fix</li>
                <li>Late and missing filings surfaced against the period they cover</li>
              </ul>
            </div>
            <div className="tax-card dfw-rise">
              <span className="tax-card-tag is-clock">Window</span>
              <h3>Aged by window</h3><span className="tax-card-s">Urgency, not just value</span>
              <p>Each difference is tagged with the statutory window it sits in, so what is about to expire is ranked above what is merely large.</p>
              <ul>
                <li>Every item carries its remaining claim or correction window</li>
                <li>Items past their window reported honestly as closed</li>
                <li>Ranking by urgency and value together, not value alone</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 2 · INPUT CREDIT ============================= */}
      <section className="section tax-stage-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="tax-stage-head" data-reveal>
            <span className="tax-stage-n">02</span>
            <div>
              <span className="tax-side-tag">&larr; Payables side</span>
              <h2>Credit you can claim, and credit you should not have</h2>
              <p>
                Input credit fails in two directions at once. Credit is left unclaimed on eligible spend because
                nobody matched the document, and credit is claimed on spend that was never eligible or against
                suppliers who never filed. Both are found the same way.
              </p>
            </div>
          </div>
          <div className="tax-cards" data-reveal>
            <div className="tax-card dfw-rise">
              <h3>Claimable, unclaimed</h3><span className="tax-card-s">Money sitting in the register</span>
              <p>Eligible spend where the credit was never taken, including import duty, reverse charge and credits stranded in a period nobody revisited.</p>
              <ul>
                <li>Eligible purchases with no corresponding credit claimed</li>
                <li>Import duty and reverse charge credit never taken</li>
                <li>Credits stranded in a closed period, with the window shown</li>
              </ul>
            </div>
            <div className="tax-card dfw-rise">
              <h3>Claimed, at risk</h3><span className="tax-card-s">Credit you may have to give back</span>
              <p>Credit taken on blocked or ineligible spend, or against suppliers whose own returns do not show the invoice.</p>
              <ul>
                <li>Purchase register matched to supplier filings, line by line</li>
                <li>Blocked and ineligible categories tested against the spend</li>
                <li>Credit requiring reversal surfaced before an assessment finds it</li>
              </ul>
            </div>
            <div className="tax-card dfw-rise">
              <h3>The supplier gap</h3><span className="tax-card-s">Not in your control</span>
              <p>A valid invoice from a supplier who never filed is a credit at risk. The gap is quantified per supplier so it can be chased while it is still recoverable.</p>
              <ul>
                <li>Differences aggregated by supplier, with the invoices listed</li>
                <li>Suppliers who file late separated from those who never file</li>
                <li>The chase pack assembled from your own records</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 3 · OUTPUT TAX ============================= */}
      <section className="section tax-stage-sec">
        <div className="wrap">
          <div className="tax-stage-head" data-reveal>
            <span className="tax-stage-n">03</span>
            <div>
              <span className="tax-side-tag is-r">Receivables side &rarr;</span>
              <h2>What you charged, and what you should have</h2>
              <p>
                Output tax rarely goes wrong in the total. It goes wrong on a class of invoices, in one state, or on
                one product, and it stays wrong for as long as the master data that produced it stays wrong.
                Re-performing the decision on the invoice is what finds it.
              </p>
            </div>
          </div>
          <div className="tax-cards" data-reveal>
            <div className="tax-card dfw-rise">
              <h3>Rate and classification</h3><span className="tax-card-s">Re-performed, not assumed</span>
              <p>Rate, classification and treatment tested against the item and customer on each invoice, rather than trusted from the master data behind them.</p>
              <ul>
                <li>Rate and classification checked against the item and customer</li>
                <li>Exemptions and concessional rates tested against their conditions</li>
                <li>A wrong classification traced back to the master data behind it</li>
              </ul>
            </div>
            <div className="tax-card dfw-rise">
              <h3>Place of supply</h3><span className="tax-card-s">Where it was actually supplied</span>
              <p>Inter-state, intra-state and export treatment tested per invoice, since the consequence of getting it wrong is paying twice and reclaiming once.</p>
              <ul>
                <li>Place of supply tested per invoice, not per customer</li>
                <li>Export and zero-rated treatment matched to its documentation</li>
                <li>Invoices taxed in the wrong jurisdiction listed with the value</li>
              </ul>
            </div>
            <div className="tax-card dfw-rise">
              <h3>Credit notes and returns</h3><span className="tax-card-s">What was reversed, and when</span>
              <p>Credit notes tested against the invoice they reverse and the period they landed in. A reversal in the wrong period is a difference in two returns.</p>
              <ul>
                <li>Credit notes matched to the invoice and period they reverse</li>
                <li>Sales returns reconciled to the tax originally charged</li>
                <li>Reversals outside their permitted window flagged</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= HONEST LIMIT ============================= */}
      <section className="section-tight tax-limit-sec">
        <div className="wrap">
          <div className="tax-limit" data-reveal>
            <span className="tax-limit-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-lock" /></svg></span>
            <div>
              <b>What this is not.</b>
              <span>
                We reconcile and evidence. We do not file your returns, and we are not a substitute for your tax
                advisers. Rules are configured per jurisdiction rather than assumed, so the honest question to ask us
                early is which of your jurisdictions are already configured and which would be new work. We would
                rather answer that before a contract than after one.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 4 · WITHHOLDING ============================= */}
      <section className="section tax-stage-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="tax-stage-head" data-reveal>
            <span className="tax-stage-n">04</span>
            <div>
              <h2>Withholding runs both ways, and both ways leak</h2>
              <p>
                Tax your customers withheld is a credit you have to claim, and it fails when the certificate never
                arrives. Tax you withheld on vendors is a liability you have to deposit at the right rate, and it
                fails on section, threshold and certificate.
              </p>
            </div>
          </div>
          <div className="tax-cards" data-reveal>
            <div className="tax-card dfw-rise">
              <h3>What was withheld from you</h3><span className="tax-card-s">A credit to collect</span>
              <p>Short payments from customers reconciled to the tax they withheld, and the credit claimed rather than left sitting as an unexplained shortfall.</p>
              <ul>
                <li>Withholding matched to the certificate and the period</li>
                <li>Certificates never received, chased with the invoice attached</li>
                <li>Credit claimed reconciled to what was actually deducted</li>
              </ul>
            </div>
            <div className="tax-card dfw-rise">
              <h3>What you withheld</h3><span className="tax-card-s">A liability to get right</span>
              <p>Rate, section and threshold tested per vendor and payment, including thresholds only breached once spend is aggregated across the year.</p>
              <ul>
                <li>Rate and section tested against the nature of the payment</li>
                <li>Thresholds tracked on aggregated spend, not per invoice</li>
                <li>Deposits and returns reconciled to what was actually deducted</li>
              </ul>
            </div>
            <div className="tax-card dfw-rise">
              <h3>Certificates and exemptions</h3><span className="tax-card-s">Dated, and they expire</span>
              <p>Lower-deduction and exemption certificates applied only inside their validity, since an expired certificate silently becomes a short deduction.</p>
              <ul>
                <li>Certificates applied only within their validity window</li>
                <li>Expired certificates surfaced before the next payment run</li>
                <li>Vendors with no certificate on file, listed before deduction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 5 · THE NOTICE ============================= */}
      <section className="section tax-stage-sec">
        <div className="wrap">
          <div className="tax-stage-head" data-reveal>
            <span className="tax-stage-n">05</span>
            <div>
              <h2>And when the notice arrives, the answer is already assembled</h2>
              <p>
                A tax assessment is a reconciliation somebody else has run on your data. If you have run it first,
                responding is a print rather than a project, and the difference between those two is usually several
                weeks and a lot of goodwill.
              </p>
            </div>
          </div>
          <div className="tax-cards" data-reveal>
            <div className="tax-card dfw-rise">
              <h3>The annual position</h3><span className="tax-card-s">Built through the year</span>
              <p>The annual reconciliation assembled from the periods as they close, rather than reconstructed in the weeks before it is due.</p>
              <ul>
                <li>Period reconciliations rolled forward into the annual position</li>
                <li>Differences carried with the explanation agreed at the time</li>
                <li>Prior-year corrections separated from current-year movement</li>
              </ul>
            </div>
            <div className="tax-card dfw-rise">
              <h3>Evidence, attached</h3><span className="tax-card-s">Invoice level</span>
              <p>Every difference carries the invoices, documents and filings behind it, so a query is answered from the record rather than from memory.</p>
              <ul>
                <li>Each difference traceable to the invoices that create it</li>
                <li>Supporting documents held against the item they support</li>
                <li>Full population, so a sampled challenge can be answered in full</li>
              </ul>
            </div>
            <div className="tax-card dfw-rise">
              <h3>The same view for the auditor</h3><span className="tax-card-s">And for your adviser</span>
              <p>Your auditor and your tax adviser read the same reconciliation your team does, which removes most of the back and forth.</p>
              <ul>
                <li>One reconciliation, read by finance, audit and advisers</li>
                <li>Sign-off recorded against the period it covers</li>
                <li>Changes after sign-off visible as changes, not as edits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= PREVENT ============================= */}
      <section className="section tax-prevent-sec">
        <div className="arc-glow g-violet"></div>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow c-violet">Prevent</span>
            <h2>Then the same checks run forward, before the return is filed</h2>
            <p>
              Prevent is not a second build. The checks that reconciled last year are the checks that run on this
              month&rsquo;s transactions. That is where a one-off recovery starts compounding.
            </p>
          </div>
          <div className="tax-pay" data-reveal>
            <div className="tax-pstep dfw-rise"><span className="tax-pstep-d">1</span><h4>At entry</h4><p>Rate, classification and place of supply tested on the transaction, before it posts.</p></div>
            <div className="tax-pstep dfw-rise"><span className="tax-pstep-d">2</span><h4>At payment</h4><p>Withholding rate, section and threshold applied from the vendor record and the year to date.</p></div>
            <div className="tax-pstep dfw-rise"><span className="tax-pstep-d">3</span><h4>Before filing</h4><p>Register against return reconciled while the period is still open to correct.</p></div>
            <div className="tax-pstep dfw-rise"><span className="tax-pstep-d">4</span><h4>After filing</h4><p>Counterparty filings matched as they appear, so a supplier gap is a same-month chase.</p></div>
            <div className="tax-pstep dfw-rise"><span className="tax-pstep-d">5</span><h4>At the close</h4><p>The annual position assembled from periods already agreed, not rebuilt.</p></div>
          </div>
          <div className="tax-sec-cta" data-reveal>
            <a href="/darp-framework" className="tax-learn"><i></i> How Recover becomes Prevent <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-arrow-right" /></svg></a>
          </div>
        </div>
      </section>

      {/* ============================= COMPARISON ============================= */}
      <section className="section tax-cmp-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">What changes</span>
            <h2>What changes, honestly stated</h2>
            <p>Not a longer list of features. A different distribution of who does what, and when a difference is found.</p>
          </div>
          <div className="tax-cmp" data-reveal>
            <table>
              <thead>
                <tr><th>Where it shows</th><th>How tax reconciliation runs today</th><th>How it runs on DataTwin</th></tr>
              </thead>
              <tbody>
                <tr><td>The register</td><td>Downloaded, pasted into a workbook, reconciled by whoever has time</td><td>Rebuilt from transactions, per registration and period, as the period closes</td></tr>
                <tr><td>Supplier gaps</td><td>Found at the annual return, when the supplier has stopped answering</td><td>Matched as filings appear, so the chase happens while it still works</td></tr>
                <tr><td>Classification</td><td>Trusted from master data until an assessment disagrees</td><td>Re-performed on the invoice, with the master-data cause identified</td></tr>
                <tr><td>Withholding</td><td>Checked per invoice, so aggregated thresholds are missed</td><td>Tracked across the year per vendor, per section</td></tr>
                <tr><td>Certificates</td><td>Chased at year end, when many can no longer be obtained</td><td>Chased against the period they belong to, with the invoice attached</td></tr>
                <tr><td>Urgency</td><td>Findings ranked by value, so expiring items get missed</td><td>Ranked by remaining window and value together</td></tr>
                <tr><td>A notice</td><td>A project: rebuild the period, find the documents, explain the gap</td><td>A print: the reconciliation and its evidence already exist</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================= RECOVERY ============================= */}
      <section className="section tax-rec-sec">
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow c-amber">Start here</span>
            <h2>Before you change anything, find out what it has already cost you</h2>
            <p>
              Everything above is prevention; it stops the next period leaking. It does nothing about the periods
              already filed, which are sitting in your registers right now, some of them still inside their window.
              So we start there, read-only, before there is anything to sign.
            </p>
          </div>
          <div className="tax-twomin" data-reveal>
            <span className="tax-twomin-n">2<em>min</em></span>
            <span className="tax-twomin-t">
              <b>This is how long it takes to understand how much can be recovered.</b>
              Send us the purchase and sales registers, the returns as filed and the counterparty data. We test the
              full transaction population, not a sample, and come back with what is claimable, what is at risk and how
              long you have on each. Before any contract.
            </span>
          </div>
          <div className="tax-rec" data-reveal>
            <div className="tax-rc dfw-rise"><h4>Claimable</h4><p>Credit never taken on eligible spend. Import duty and reverse charge missed. Withholding left.</p></div>
            <div className="tax-rc is-2 dfw-rise"><h4>At risk</h4><p>Credit taken on blocked spend, or against suppliers whose returns never showed the invoice.</p></div>
            <div className="tax-rc is-3 dfw-rise"><h4>Exposure</h4><p>Wrong rate, classification or place of supply. Reverse charge never self-assessed. Reversals missed.</p></div>
            <div className="tax-rc is-4 dfw-rise"><h4>Expiring</h4><p>Items still inside their window, ranked by the days left rather than by the amount.</p></div>
          </div>
          <p className="tax-sectors" data-reveal>
            The same engine runs tax reconciliation for <b>manufacturing</b>, <b>distribution</b>, <b>retail</b>,{" "}
            <b>pharma</b> and <b>services</b> groups running multiple registrations and entities. Rules are configured
            per jurisdiction, so ask us early which of yours are covered.
          </p>
          <div className="tax-sec-cta" data-reveal>
            <a href="/#cta" className="btn btn-primary">Get an estimate for tax <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg></a>
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
                Working from the registers and returns your systems already hold, we run our discovery. Nothing
                changes in your systems, nobody in your team changes how they work, and you see what&rsquo;s
                recoverable before there&rsquo;s anything to sign. If the number isn&rsquo;t worth acting on, at least
                you know you&rsquo;re safe.
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

      <TaxScripts />
    </div>
  );
}
