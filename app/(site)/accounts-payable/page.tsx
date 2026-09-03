import type { Metadata } from "next";
import ApScripts from "@/components/ApScripts";

export const metadata: Metadata = {
  title: "Accounts Payable: invoice to payment, accounted right | DataTwin",
  description:
    "From the inbox to the ledger: extraction, PO and GRN matching, your own control checklist, tax validation, provision reversal, cost allocation, prepaid schedules, approval, ERP posting with the journal checked back, payment runs, month-end and a vendor portal.",
};

export default function AccountsPayablePage() {
  return (
    <div className="cfo-page">
      {/* ============================= HERO ============================= */}
      <section className="hero ap-hero">
        <div className="hero-aurora"></div>
        <div className="ledger-grid"></div>
        <div className="wrap ap-hero-grid">
          <div className="ap-hero-inner">
            <span className="eyebrow">Accounts Payable</span>
            <h1>
              Invoices arrive as documents.
              <br />
              They should land as <span className="grad-text">correct entries</span>.
            </h1>
            <p className="hero-desc">
              DataTwin takes the invoice from the inbox, reads it, matches it to the purchase order and receipt
              already in your ERP, runs it through your own control checklist, routes it for approval and posts it,
              then reads back the journal the ERP created and checks it against the entry it expected. After that it
              builds the payment run, generates the bank file, and clears the prepaids and provisions before the
              period ends.
            </p>
            <div className="ap-chips">
              <span className="ap-chip"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-layers" /></svg>Sits above the ERP you already run</span>
              <span className="ap-chip"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-lock" /></svg>Read-only until you turn posting on</span>
              <span className="ap-chip"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-user" /></svg>Your approval matrix, unchanged</span>
            </div>
            <div className="ap-hero-actions">
              <a href="/#cta" className="btn btn-primary">
                See what AP has cost you{" "}
                <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg>
              </a>
              <a href="/darp-framework" className="btn btn-ghost">How Discover works</a>
            </div>
          </div>

          {/* hero graphic: the drop — document to entry through four gates */}
          <div className="ap-drop" aria-hidden="true">
            <div className="ap-drop-node is-doc">
              <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-doc" /></svg>
              <span>Invoice</span>
              <em>however the vendor sent it</em>
            </div>
            <div className="ap-drop-rail"><i></i></div>
            <div className="ap-drop-gate"><span>Read</span></div>
            <div className="ap-drop-gate"><span>Matched</span></div>
            <div className="ap-drop-gate"><span>Checked</span></div>
            <div className="ap-drop-gate"><span>Approved</span></div>
            <div className="ap-drop-rail"><i></i></div>
            <div className="ap-drop-node is-entry">
              <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-check" /></svg>
              <span>Ledger entry</span>
              <em>the one we already expected</em>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= THE LIFECYCLE — ONE PANEL ============================= */}
      <section className="section ap-life-sec">
        <div className="arc-glow g-blue"></div>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">One invoice, end to end</span>
            <h2>Three phases, one engine underneath</h2>
          </div>

          <div className="ap-flow" data-reveal>
            <div className="ledger-grid" aria-hidden="true"></div>
            <div className="ap-flow-head">
              <span className="ap-flow-title">The invoice lifecycle</span>
              <span className="ap-flow-live"><i></i> Live process</span>
            </div>

            <div className="ap-flow-body">
              {/* phase 1 */}
              <div className="ap-flow-phase">
                <span className="ap-flow-plbl"><b>01</b> Invoice to bill</span>
                <div className="ap-flow-rail">
                  <span className="ap-flow-line" aria-hidden="true"></span>
                  <span className="ap-flow-pulse" aria-hidden="true"></span>
                  <span className="ap-flow-pulse is-2" aria-hidden="true"></span>
                  <div className="ap-flow-node"><b>Inbox</b><em>Email, SFTP, portal</em></div>
                  <span className="ap-flow-chev" aria-hidden="true"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-chev" /></svg></span>
                  <div className="ap-flow-node"><b>Extraction</b><em>Every field read</em></div>
                  <span className="ap-flow-chev" aria-hidden="true"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-chev" /></svg></span>
                  <div className="ap-flow-node"><b>Mapping</b><em>Vendor, PO, GRN</em></div>
                  <span className="ap-flow-chev" aria-hidden="true"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-chev" /></svg></span>
                  <div className="ap-flow-node"><b>Matching</b><em>2-way and 3-way</em></div>
                  <span className="ap-flow-chev" aria-hidden="true"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-chev" /></svg></span>
                  <div className="ap-flow-node"><b>Validation</b><em>Rules, tax, cost</em></div>
                  <span className="ap-flow-chev" aria-hidden="true"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-chev" /></svg></span>
                  <div className="ap-flow-node"><b>Approval</b><em>Your matrix, limits</em></div>
                  <span className="ap-flow-chev" aria-hidden="true"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-chev" /></svg></span>
                  <div className="ap-flow-node is-out"><b>Post to ERP</b><em>Bill accounted</em></div>
                </div>
                <div className="ap-flow-jcheck">
                  <span className="ap-flow-jback" aria-hidden="true">
                    <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-loop" /></svg>
                  </span>
                  <p>
                    <b>Journal check.</b> The entry the ERP posts is read back and compared, in real time, against the
                    entry we computed at validation. Differences are raised the same day.
                  </p>
                </div>
              </div>

              {/* phase 2 */}
              <div className="ap-flow-phase">
                <span className="ap-flow-plbl"><b>02</b> Bill to payment</span>
                <div className="ap-flow-rail">
                  <span className="ap-flow-line" aria-hidden="true"></span>
                  <span className="ap-flow-pulse" aria-hidden="true"></span>
                  <span className="ap-flow-pulse is-2" aria-hidden="true"></span>
                  <div className="ap-flow-node"><b>Payment sheet</b><em>Built from due dates</em></div>
                  <span className="ap-flow-chev" aria-hidden="true"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-chev" /></svg></span>
                  <div className="ap-flow-node"><b>Prioritisation</b><em>Overdue, discounts, holds</em></div>
                  <span className="ap-flow-chev" aria-hidden="true"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-chev" /></svg></span>
                  <div className="ap-flow-node"><b>Approval</b><em>Workflow and limits</em></div>
                  <span className="ap-flow-chev" aria-hidden="true"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-chev" /></svg></span>
                  <div className="ap-flow-node"><b>Payment file</b><em>Per bank, per method</em></div>
                  <span className="ap-flow-chev" aria-hidden="true"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-chev" /></svg></span>
                  <div className="ap-flow-node is-out"><b>Payment posted</b><em>Accounted back in the ERP</em></div>
                </div>
                <p className="ap-flow-note">Nothing pays itself. The run is built for you; a person releases it.</p>
              </div>

              {/* phase 3 */}
              <div className="ap-flow-phase">
                <span className="ap-flow-plbl"><b>03</b> Month end</span>
                <div className="ap-flow-rail is-month">
                  <span className="ap-flow-line" aria-hidden="true"></span>
                  <span className="ap-flow-pulse" aria-hidden="true"></span>
                  <div className="ap-flow-node"><b>Prepaid amortisation</b><em>Scheduled when the bill was validated</em></div>
                  <span className="ap-flow-chev" aria-hidden="true"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-chev" /></svg></span>
                  <div className="ap-flow-node"><b>Provision management</b><em>Reversed on arrival, restored on cancellation</em></div>
                  <span className="ap-flow-chev" aria-hidden="true"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-chev" /></svg></span>
                  <div className="ap-flow-node"><b>Cost allocation</b><em>Static or driver-based, reversed with the entry</em></div>
                </div>
                <p className="ap-flow-note">
                  Decided when the invoice was validated, so the period end is a read rather than a rebuild.
                </p>
              </div>
            </div>

            <div className="ap-flow-foot">
              Read-only until you turn posting on — nothing migrates out of your ERP. Every stage runs on the same
              engine that powers the DARP Framework and FSCP: acquire, process, govern, report.
            </div>
          </div>
        </div>
      </section>

      {/* ============================= FIVE GATES ============================= */}
      <section className="section ap-gates-sec">
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Invoice to bill, gate by gate</span>
            <h2>Five checks between a document and an entry</h2>
          </div>

          <div className="ap-gates" data-reveal>
            <span className="ap-gates-spine" aria-hidden="true"></span>

            {/* GATE 1 */}
            <div className="ap-gate dfw-rise">
              <div className="ap-gate-head">
                <span className="ap-gate-n">1</span>
                <div>
                  <h3>It arrives however the vendor chose to send it</h3>
                  <p>
                    Invoices do not turn up in one format. They come as PDFs attached to an email, scans dropped on a
                    shared folder, photographs taken on a phone, one attachment containing three separate invoices,
                    and occasionally something handwritten. The inbox takes all of it, and keeps the original as
                    evidence.
                  </p>
                </div>
              </div>
              <div className="ap-sub-grid">
                <div className="ap-sub">
                  <span className="ap-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-upload" /></svg></span>
                  <h4>Ingest</h4><span className="ap-sub-s">One queue, every channel</span>
                  <p>Mailbox, SFTP, shared folder or vendor upload. One queue, with sender, timestamp and the original kept.</p>
                  <ul>
                    <li>Monitored email inbox, with the covering message kept alongside the invoice</li>
                    <li>SFTP and shared-folder collection on a schedule you set</li>
                    <li>Vendor portal upload, so the vendor files it rather than emailing your team</li>
                  </ul>
                </div>
                <div className="ap-sub">
                  <span className="ap-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-frame" /></svg></span>
                  <h4>Extraction</h4><span className="ap-sub-s">Read, not retyped</span>
                  <p>Header and line-level fields read off the document, from number and date to rate, tax and total. Models tuned to your formats.</p>
                  <ul>
                    <li>Multi-page documents and multi-invoice attachments split correctly</li>
                    <li>Multilingual and handwritten documents handled in the same pipeline</li>
                    <li>Every field confidence-scored; low confidence goes to a person, not into the ledger</li>
                  </ul>
                </div>
                <div className="ap-sub">
                  <span className="ap-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-search" /></svg></span>
                  <h4>Hygiene</h4><span className="ap-sub-s">Duplicates stopped at the door</span>
                  <p>Before a bill exists, the document is tested against everything already received, by reference, checksum, vendor and amount, or channel.</p>
                  <ul>
                    <li>Reference, checksum and near-duplicate matching across entities and periods</li>
                    <li>One invoice arriving by both email and portal recognised as one invoice</li>
                    <li>Documents classified: invoice, credit note, debit note, statement, contract</li>
                  </ul>
                </div>
              </div>
              <a href="/how-ai-is-used" className="ap-learn"><i></i> How the extraction models work <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-arrow-right" /></svg></a>
            </div>

            {/* GATE 2 */}
            <div className="ap-gate dfw-rise">
              <div className="ap-gate-head">
                <span className="ap-gate-n">2</span>
                <div>
                  <h3>It is matched against what your ERP already knows</h3>
                  <p>
                    An invoice on its own is a claim. It becomes a bill when it agrees with something you already
                    committed to. DataTwin reads the open purchase orders, goods receipts, service entry sheets,
                    vendor master and item master out of your ERP, links the invoice to the right ones, and tests
                    them line by line.
                  </p>
                </div>
              </div>
              <div className="ap-sub-grid">
                <div className="ap-sub">
                  <span className="ap-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-schema" /></svg></span>
                  <h4>Mapping</h4><span className="ap-sub-s">Linked to the right record</span>
                  <p>Linked automatically to the vendor, order, receipt, item, contract and entity, wherever the data allows.</p>
                  <ul>
                    <li>Vendor resolved from name, tax registration and bank details, not just a quoted code</li>
                    <li>Item resolved from description and classification code where no item code is given</li>
                    <li>The governing contract or agreement attached to the invoice it prices</li>
                  </ul>
                </div>
                <div className="ap-sub">
                  <span className="ap-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-swap" /></svg></span>
                  <h4>Matching</h4><span className="ap-sub-s">Two-way and three-way, by line</span>
                  <p>Order against receipt against invoice, by line. A total can agree while every line under it is wrong.</p>
                  <ul>
                    <li>Two-way for services and expenses, three-way wherever a receipt exists</li>
                    <li>Price, quantity and unit-of-measure variances separated rather than lumped together</li>
                    <li>Tolerances applied by vendor, category or value band, as your policy defines them</li>
                  </ul>
                </div>
                <div className="ap-sub">
                  <span className="ap-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-search" /></svg></span>
                  <h4>Root cause</h4><span className="ap-sub-s">Classified, not just flagged</span>
                  <p>Every mismatch is tagged with what caused it, so it routes to whoever can resolve it.</p>
                  <ul>
                    <li>Rate error, quantity variance, missing receipt and wrong tax code each tagged distinctly</li>
                    <li>A missing receipt is chased with the receiver, not sent back to the vendor</li>
                    <li>Price differences traced to the contract clause that governs them</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* GATE 3 */}
            <div className="ap-gate dfw-rise">
              <div className="ap-gate-head">
                <span className="ap-gate-n">3</span>
                <div>
                  <h3>It is checked against your rules, not generic ones</h3>
                  <p>
                    Matching proves the invoice agrees with the order. Validation proves the bill is right to book.
                    This is where your own internal checklist runs, the one currently living in a spreadsheet, or in
                    the head of the person who has been doing this for eleven years.
                  </p>
                </div>
              </div>
              <div className="ap-checks">
                <div className="ap-check"><span className="ap-check-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-check" /></svg></span><h4>Internal checklist</h4><p>Your own control checklist, run on every transaction rather than a sample, with the result recorded before posting.</p></div>
                <div className="ap-check"><span className="ap-check-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-tax" /></svg></span><h4>Tax validation</h4><p>Registration confirmed active, rate and calculation re-performed, reverse charge and withholding applied, credit eligibility checked against supplier filings.</p></div>
                <div className="ap-check"><span className="ap-check-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-loop" /></svg></span><h4>Provision reversal</h4><p>Any existing provision is reversed as the bill is created, and put back with its allocated cost if the bill is cancelled.</p></div>
                <div className="ap-check"><span className="ap-check-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-layers" /></svg></span><h4>Cost allocation</h4><p>Split across entity, line of business and cost centre by rule or by a driver from the invoice. It reverses with the entry.</p></div>
                <div className="ap-check"><span className="ap-check-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-calendar" /></svg></span><h4>Prepaid treatment</h4><p>The amortisation schedule is built at validation, so month-end releases the right amount without rebuilding it.</p></div>
                <div className="ap-check"><span className="ap-check-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-swap" /></svg></span><h4>Foreign currency</h4><p>Rate applied under your policy. Differences across invoice, receipt and payment dates are recognised, not absorbed.</p></div>
              </div>
              <div className="ap-know">
                <span className="ap-know-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-spark" /></svg></span>
                <div>
                  <span className="ap-know-lbl">Why this matters for gate 5</span>
                  <h4>By the end of validation, DataTwin knows what the entry should be</h4>
                  <p>
                    It holds that entry in full before the ERP posts anything. Nothing is booked because a model felt
                    confident: the entry comes from rules in the schema, so the same invoice always produces the same
                    entry. That is what lets us check the ERP.
                  </p>
                </div>
              </div>
            </div>

            {/* GATE 4 */}
            <div className="ap-gate dfw-rise">
              <div className="ap-gate-head">
                <span className="ap-gate-n">4</span>
                <div>
                  <h3>It goes to the people who should see it</h3>
                  <p>
                    Approval is rarely one step. Different invoices need different people, sometimes in sequence
                    because the second approver needs the first one&rsquo;s decision, sometimes at the same time
                    because they do not.
                  </p>
                </div>
              </div>
              <div className="ap-sub-grid">
                <div className="ap-sub">
                  <span className="ap-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-flow" /></svg></span>
                  <h4>Routing</h4><span className="ap-sub-s">Serial, parallel or both</span>
                  <p>Routed by value band, cost centre, category, entity or vendor risk, in sequence or in parallel as the case needs.</p>
                  <ul>
                    <li>Your existing approval matrix and delegation limits, not a new one</li>
                    <li>Parallel approvals collected at once rather than queued behind each other</li>
                    <li>Out-of-office delegation and escalation after a defined wait</li>
                  </ul>
                </div>
                <div className="ap-sub">
                  <span className="ap-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-frame" /></svg></span>
                  <h4>What the approver sees</h4><span className="ap-sub-s">Context, not a queue</span>
                  <p>Invoice, order, receipt, variances with causes, checklist result and the entry to be posted. No other system needed.</p>
                  <ul>
                    <li>The original document, always one click away</li>
                    <li>Variances explained, not just highlighted</li>
                    <li>The proposed accounting entry, before it exists in the ERP</li>
                  </ul>
                </div>
                <div className="ap-sub">
                  <span className="ap-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-user" /></svg></span>
                  <h4>Human-in-the-loop</h4><span className="ap-sub-s">One of six control gates</span>
                  <p>One of six places a person is asked to act. The others: a missing input, a correction, an arbitration, an escalation, a policy fix.</p>
                  <ul>
                    <li>Every human decision logged next to the agent action that preceded it</li>
                    <li>Overrides recorded with a reason, and used to improve the rule</li>
                    <li>An accountability trail that reads the same to you and to your auditor</li>
                  </ul>
                </div>
              </div>
              <a href="/how-ai-is-used" className="ap-learn"><i></i> Where a person is always in the loop <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-arrow-right" /></svg></a>
            </div>

            {/* GATE 5 */}
            <div className="ap-gate is-crescendo dfw-rise">
              <div className="ap-gate-head">
                <span className="ap-gate-n is-g">5</span>
                <div>
                  <h3>It posts, and then the posting itself is checked</h3>
                  <p>Approved bills go into the ERP, and the ERP does its own accounting. Almost every AP tool stops there.</p>
                </div>
              </div>
              <div className="ap-jrn">
                <span className="ap-jrn-lbl">Real-time accounting validation</span>
                <h3>The ERP posts a journal. We already knew what it should say.</h3>
                <p>
                  DataTwin reads back the journal the ERP created and compares it line by line against the entry it
                  computed at validation. Differences are raised the same day, not at quarter end or by an auditor a
                  year later.
                </p>
                <ul>
                  <li>Account, cost centre, tax code, currency and amount each tested independently</li>
                  <li>Configuration drift in the ERP surfaced by the entries it starts producing</li>
                  <li>Every comparison retained as evidence, attached to the invoice that started it</li>
                </ul>
              </div>
              <a href="/platform-overview" className="ap-learn on-dark"><i></i> The engine underneath this <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-arrow-right" /></svg></a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= PAYMENT ============================= */}
      <section className="section ap-pay-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Bill to payment</span>
            <h2>Then the money goes out on your terms</h2>
            <p>
              A payment run should be decided by due dates and discounts, not by which vendor called this morning.
              The run is built for you; you decide what leaves.
            </p>
          </div>

          <div className="ap-pay" data-reveal>
            <div className="ap-pstep dfw-rise"><span className="ap-pstep-d">1</span><h4>Payment sheet</h4><p>Built from due dates across every entity and bank. Everything falling due in the window, with what is already overdue separated rather than buried in it.</p></div>
            <div className="ap-pstep dfw-rise"><span className="ap-pstep-d">2</span><h4>Prioritisation</h4><p>Early-payment discounts flagged with what each one is worth and the date it expires, so taking a discount becomes a decision rather than a deadline you missed.</p></div>
            <div className="ap-pstep dfw-rise"><span className="ap-pstep-d">3</span><h4>Selection &amp; approval</h4><p>You choose what goes out. Disputes and holds are excluded automatically, and the approval workflow runs on the payment run itself, not only on the invoices inside it.</p></div>
            <div className="ap-pstep dfw-rise"><span className="ap-pstep-d">4</span><h4>Payment file</h4><p>Generated in the format the receiving bank and payment method require, per entity and per account, with the vendor&rsquo;s validated bank details rather than whatever was in the last email.</p></div>
            <div className="ap-pstep dfw-rise"><span className="ap-pstep-d">5</span><h4>Payment accounted</h4><p>Once the payment is made it goes back to the ERP as an accounted payment, applied against the right bills, and that journal is checked the same way the bill&rsquo;s was.</p></div>
          </div>

          <div className="ap-know is-inline" data-reveal>
            <span className="ap-know-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-recover" /></svg></span>
            <div>
              <span className="ap-know-lbl">Worth knowing before you start</span>
              <h4>Discounts you did not take are already on the table</h4>
              <p>
                Early-payment discounts that lapsed, invoices paid twice, amounts paid above the contracted price,
                credit notes never applied. All of it is sitting in the history you already hold. Discover values it
                before any of this is switched on, and before there is anything to sign.
              </p>
            </div>
          </div>
          <div className="ap-sec-cta" data-reveal>
            <a href="/darp-framework" className="btn btn-ghost">How the DARP Framework values it <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg></a>
          </div>
        </div>
      </section>

      {/* ============================= MONTH END ============================= */}
      <section className="section ap-month-sec">
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Month end</span>
            <h2>By the time the period ends, most of the close is behind you</h2>
            <p>
              Month-end in payables is usually a rebuild: reconstructing prepaid schedules, working out which
              provisions to reverse, re-cutting allocations in a spreadsheet. None of that is new information; it was
              all decided when the invoice was validated. So it is done then.
            </p>
          </div>

          <div className="ap-sub-grid is-three" data-reveal>
            <div className="ap-sub dfw-rise">
              <span className="ap-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-calendar" /></svg></span>
              <h4>Prepaid amortisation</h4><span className="ap-sub-s">Scheduled at bill time</span>
              <p>Built at validation from the period the invoice covers. Each period releases its slice, and the balance always reconciles.</p>
              <ul>
                <li>Coverage period read from the invoice or the contract, not keyed by hand</li>
                <li>Part periods and mid-month starts handled properly</li>
                <li>Early termination or cancellation adjusts the remaining schedule</li>
              </ul>
            </div>
            <div className="ap-sub dfw-rise">
              <span className="ap-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-loop" /></svg></span>
              <h4>Provision management</h4><span className="ap-sub-s">Raised and released on evidence</span>
              <p>Raised where goods arrived without an invoice, reversed when it lands, restored if cancelled. GRNI stops being a balance nobody explains.</p>
              <ul>
                <li>Provisions driven by receipts and contracts, not a period-end guess</li>
                <li>Reversal linked to the specific invoice that discharged it</li>
                <li>Ageing on every open provision, with the reason it is still open</li>
              </ul>
            </div>
            <div className="ap-sub dfw-rise">
              <span className="ap-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-layers" /></svg></span>
              <h4>Cost allocation</h4><span className="ap-sub-s">Applied with the entry</span>
              <p>Run as the entry is created rather than a workbook afterwards, and reversed with it. Recharges applied at source.</p>
              <ul>
                <li>Static rules or drivers taken from the transaction itself</li>
                <li>Multi-entity recharges applied at source</li>
                <li>Reversal of the bill reverses the allocation with it</li>
              </ul>
            </div>
          </div>
          <div className="ap-sec-cta" data-reveal>
            <a href="/platform-overview" className="ap-learn"><i></i> The close runs on this same engine <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-arrow-right" /></svg></a>
          </div>
        </div>
      </section>

      {/* ============================= VENDOR PORTAL ============================= */}
      <section className="section ap-portal-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Vendor portal</span>
            <h2>The vendor stops emailing your AP team</h2>
            <p>
              Most of an AP team&rsquo;s day is not processing invoices. It is answering two questions: did you get my
              invoice, and when am I being paid. The portal answers both without a person in the middle, and catches
              the vendor problems that only surface at payment time.
            </p>
          </div>

          <div className="ap-sub-grid is-two" data-reveal>
            <div className="ap-sub dfw-rise">
              <span className="ap-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-user" /></svg></span>
              <h4>Onboarding</h4><span className="ap-sub-s">Validated before they exist</span>
              <p>The vendor enters their own details, uploads their registration and bank proof, and is checked before the master record is created, so the problems that normally appear at the first payment appear at onboarding instead.</p>
              <ul>
                <li>Tax registration confirmed valid and active at source</li>
                <li>Bank details verified as belonging to the vendor being onboarded</li>
                <li>Duplicate vendor detection across name, registration and bank account</li>
              </ul>
            </div>
            <div className="ap-sub dfw-rise">
              <span className="ap-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-upload" /></svg></span>
              <h4>Invoice submission</h4><span className="ap-sub-s">Straight into the pipeline</span>
              <p>The vendor uploads directly. The document goes into the same extraction and validation pipeline, so a missing mandatory field or a wrong order reference comes back to the vendor immediately rather than three weeks later.</p>
              <ul>
                <li>Rejected at upload with the reason, not silently held</li>
                <li>Order reference validated against your open orders as they submit</li>
                <li>Credit notes and supporting documents attached to the right invoice</li>
              </ul>
            </div>
            <div className="ap-sub dfw-rise">
              <span className="ap-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-gauge" /></svg></span>
              <h4>Payment status</h4><span className="ap-sub-s">Answered without a phone call</span>
              <p>Every invoice with its current state and what it is waiting on: received, matched, held with the reason, approved, scheduled for a date, paid with a reference. The chase call stops because the answer is already there.</p>
              <ul>
                <li>Current status and expected payment date on every open invoice</li>
                <li>Holds shown with the reason and what would clear them</li>
                <li>Payment references and remittance advice available on completion</li>
              </ul>
            </div>
            <div className="ap-sub dfw-rise">
              <span className="ap-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-swap" /></svg></span>
              <h4>Reconciliation</h4><span className="ap-sub-s">Against a line, not an email chain</span>
              <p>The vendor&rsquo;s statement compared against your ledger, with the differences listed item by item and a conversation thread attached to each one. Disputes get resolved against a specific transaction instead of a forwarded spreadsheet.</p>
              <ul>
                <li>Statement uploaded and reconciled automatically against your ledger</li>
                <li>Differences classified: missing, timing, amount, already paid, disputed</li>
                <li>A thread per difference, with the evidence attached to it</li>
              </ul>
            </div>
          </div>

          <div className="ap-alert" data-reveal>
            <span className="ap-alert-k">!</span>
            <div>
              <b>Alert on status change</b>
              <span>
                Onboarding checks are a snapshot. If a vendor&rsquo;s tax registration lapses or their bank details
                change after they were approved, you are told before the next payment run rather than after the money
                has left, which is the point at which it stops being an administrative problem.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= AGENTS ============================= */}
      <section className="section ap-agents-sec">
        <div className="arc-glow g-violet"></div>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow c-violet">Under the hood</span>
            <h2>What is actually doing the work</h2>
            <p>
              Specialised agents with narrow, defined duties, coordinated by an orchestration agent, so a new rule or
              a new jurisdiction is a new agent rather than a rewrite of the pipeline.
            </p>
          </div>

          <div className="ap-agents" data-reveal>
            <div className="ap-agent dfw-rise">
              <span className="ap-agent-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-frame" /></svg></span>
              <h3>Intelligent OCR</h3><span className="ap-agent-s">Reading the document</span>
              <p>One pipeline for PDFs, scans, photographs, multi-page and handwritten. Tuned to your formats, and reading what the transaction is, not just what the fields say.</p>
            </div>
            <div className="ap-agent dfw-rise">
              <span className="ap-agent-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-shield" /></svg></span>
              <h3>Governance Agent</h3><span className="ap-agent-s">Applying your policy</span>
              <p>N-way matching by line, your audit checklist on every transaction, root cause on each mismatch. Patterns across vendors surface what precedes fraud.</p>
            </div>
            <div className="ap-agent dfw-rise">
              <span className="ap-agent-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-tax" /></svg></span>
              <h3>Tax Validation Agent</h3><span className="ap-agent-s">Correct before it posts</span>
              <p>Registration validated in real time, rates and calculations re-performed, reverse charge applied, and credit eligibility checked against supplier filings before the credit is claimed.</p>
            </div>
          </div>
          <div className="ap-sec-cta" data-reveal>
            <a href="/how-ai-is-used" className="btn btn-ghost">The full agent architecture <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg></a>
            <a href="/security" className="ap-learn"><i></i> How your data is protected <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-arrow-right" /></svg></a>
          </div>
        </div>
      </section>

      {/* ============================= COMPARISON ============================= */}
      <section className="section ap-cmp-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">What changes</span>
            <h2>What changes, honestly stated</h2>
            <p>Not a longer list of features. A different distribution of who does what, and when a problem is found.</p>
          </div>

          <div className="ap-cmp" data-reveal>
            <table>
              <thead>
                <tr><th>Where it shows</th><th>How AP runs today</th><th>How it runs on DataTwin</th></tr>
              </thead>
              <tbody>
                <tr><td>Workload</td><td>Heavy manual effort on entry, validation and chasing exceptions</td><td>The routine work is automated; your team spends its time on the exceptions that need judgement</td></tr>
                <tr><td>Cycle time</td><td>Slow approvals, held up by exceptions and rework</td><td>Invoice to pay moves at machine speed, with a person involved only where a person is required</td></tr>
                <tr><td>Error handling</td><td>Errors detected after the fact, corrected through rework</td><td>Rules applied before posting, so most errors never get created</td></tr>
                <tr><td>Risk</td><td>Fraud and anomalies spotted late, if at all</td><td>Patterns monitored continuously across vendors, amounts and behaviour</td></tr>
                <tr><td>Transparency</td><td>Limited visibility, reporting that arrives after the decision</td><td>Status on every invoice, with the reason it is where it is</td></tr>
                <tr><td>Audit</td><td>Heavy after-the-fact testing, correction long after the event</td><td>Evidence assembled as the transaction happens, so testing is a read rather than a project</td></tr>
                <tr><td>Compliance</td><td>Policy applied inconsistently, with heavy dependence on internal audit</td><td>The same checks on every transaction, with the result recorded against it</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================= RECOVERY ============================= */}
      <section className="section ap-rec-sec">
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow c-amber">Start here</span>
            <h2>Before you change anything, find out what it has already cost you</h2>
            <p>
              Everything above is prevention; it stops the next one. It does nothing about the last three years, which
              are sitting in your AP history right now. So we start there, read-only, before there is anything to sign.
            </p>
          </div>

          <div className="ap-twomin" data-reveal>
            <span className="ap-twomin-n">2<em>min</em></span>
            <span className="ap-twomin-t">
              <b>This is how long it takes to understand how much can be recovered.</b>
              Send us AP history and the vendor master. We test the full transaction population, not a sample, and
              come back with what is recoverable, split by cash, tax, misstatement and control gaps. Before any
              contract.
            </span>
          </div>

          <div className="ap-rec" data-reveal>
            <div className="ap-rc dfw-rise"><h4>Cash back</h4><p>Duplicate and near-duplicate payments. Paid above contract or order. Quantity paid above quantity received. Credits and advances never recovered.</p></div>
            <div className="ap-rc is-2 dfw-rise"><h4>Tax reclaimable</h4><p>Credit never claimed, or claimed against suppliers who never filed. Wrong rate or classification. Reverse charge misapplied.</p></div>
            <div className="ap-rc is-3 dfw-rise"><h4>Entries that are wrong</h4><p>Wrong account, entity or cost centre. Provisions open on invoices long paid. Totals that agree while every line beneath disagrees.</p></div>
            <div className="ap-rc is-4 dfw-rise"><h4>Control gaps</h4><p>Why the first three keep happening: tolerances nobody set, limits bypassed, bank details changed unchallenged, duplicate vendors.</p></div>
          </div>

          <div className="ap-sec-cta" data-reveal>
            <a href="/#cta" className="btn btn-primary">Get an estimate for AP <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg></a>
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

      <ApScripts />
    </div>
  );
}
