import type { Metadata } from "next";
import ChannelRebatesScripts from "@/components/ChannelRebatesScripts";

export const metadata: Metadata = {
  title: "Channel Rebates: the gross-to-net your ERP cannot see | DataTwin",
  description:
    "Ship and debit, price protection, SPAs, tiered and retrospective rebates, co-op and MDF, stock rotation and chargebacks, reconciled against POS and vendor statements. Read-only recovery first: what is unclaimed, short-paid, over-accrued or aging out, with the substantiation attached.",
};

export default function ChannelRebatesPage() {
  return (
    <div className="rip-page is-crb">
      {/* ============================= HERO ============================= */}
      <section className="hero crb-hero">
        <div className="hero-aurora"></div>
        <div className="ledger-grid"></div>
        <div className="wrap crb-hero-grid">
          <div className="crb-hero-inner">
            <span className="eyebrow">Channel Rebates</span>
            <h1>
              The invoice price is not the margin.
              <br />
              The programmes decide, and they arrive <span className="grad-text">late</span>.
            </h1>
            <p className="hero-desc">
              Distribution does not run on list prices. It runs on ship and debit, price protection, special pricing
              agreements, tiered and retrospective rebates, co-op funds, stock rotation and chargebacks, which land
              weeks after the sale, from different counterparties, in vendor portals and spreadsheets. DataTwin
              reconstructs the true gross-to-net from what you already hold, and shows what is unclaimed, short-paid,
              over-accrued or about to age out.
            </p>
            <div className="crb-chips">
              <span className="crb-chip"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-lock" /></svg>Read-only on top of the ERP you already run</span>
              <span className="crb-chip"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-layers" /></svg>No programme redesign, no re-platforming</span>
              <span className="crb-chip"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-check" /></svg>Every finding carries its substantiation</span>
            </div>
            <div className="crb-hero-actions">
              <a href="/#cta" className="btn btn-primary">
                See what the channel has cost you{" "}
                <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg>
              </a>
              <a href="/darp-framework" className="btn btn-ghost">How Discover works</a>
            </div>
          </div>

          {/* hero graphic: the gross-to-net bridge the ERP does not see */}
          <div className="crb-bridge" aria-hidden="true">
            <div className="crb-bridge-bar is-top">
              <span className="crb-bridge-lbl">Invoice price</span>
              <span className="crb-bridge-note">what the ERP books</span>
            </div>
            <div className="crb-bridge-step"><i>&minus;</i> Ship &amp; debit</div>
            <div className="crb-bridge-step"><i>&minus;</i> Special pricing agreement</div>
            <div className="crb-bridge-step"><i>&minus;</i> Tiered &amp; retro rebate</div>
            <div className="crb-bridge-step"><i>&minus;</i> Co-op, MDF, rotation</div>
            <div className="crb-bridge-bar is-net">
              <span className="crb-bridge-lbl">True net margin</span>
              <span className="crb-bridge-note">decided later, elsewhere</span>
            </div>
            <span className="crb-bridge-cap">The gap arrives weeks after the sale, from other parties</span>
          </div>
        </div>
      </section>

      {/* ============================= ONE PROGRAMME, TWO FORMS ============================= */}
      <section className="section crb-flow-sec">
        <div className="arc-glow g-blue"></div>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">One programme, two forms</span>
            <h2>A programme is a set of conditions ending in a rate</h2>
          </div>

          <div className="crb-flow" data-reveal>
            <div className="ledger-grid" aria-hidden="true"></div>
            <div className="crb-flow-head">
              <span className="crb-flow-title">Programme, as agreed &rarr; programme, as rows</span>
              <span className="crb-flow-live"><i></i> Live process</span>
            </div>

            <div className="crb-flow-body">
              <div className="crb-tree" aria-hidden="true">
                <span className="crb-tree-lbl">The programme, as it was agreed</span>
                <div className="crb-tree-cols">
                  <div className="crb-tree-col">
                    <div className="crb-node"><b>Counterparty</b><em>vendor or customer</em></div>
                  </div>
                  <div className="crb-tree-col">
                    <div className="crb-node"><b>Territory</b><em>region or channel</em></div>
                    <div className="crb-node"><b>Product</b><em>line, family, SKU</em></div>
                    <div className="crb-node"><b>Programme</b><em>ship &amp; debit, SPA, rebate</em></div>
                  </div>
                  <div className="crb-tree-col">
                    <div className="crb-node"><b>Eligibility</b><em>who and what qualifies</em></div>
                    <div className="crb-node"><b>Rate form</b><em>off-invoice, tiered, retro</em></div>
                    <div className="crb-node"><b>Window</b><em>period and filing deadline</em></div>
                  </div>
                  <div className="crb-tree-col">
                    <div className="crb-node is-leaf"><b>Deviated price</b><em>the claimable difference</em></div>
                    <div className="crb-node is-leaf"><b>Slab rate</b><em>by volume band</em></div>
                    <div className="crb-node is-leaf"><b>Allowance</b><em>co-op, MDF, rotation</em></div>
                  </div>
                </div>
              </div>

              <div className="crb-flow-wire" aria-hidden="true">
                <svg viewBox="0 0 60 200" preserveAspectRatio="none">
                  <path className="ln" d="M0,100 C30,100 30,100 60,100" />
                  <path className="fx" d="M0,100 C30,100 30,100 60,100" />
                </svg>
                <span className="crb-flow-wire-lbl">flattened to</span>
              </div>

              <div className="crb-rows" aria-hidden="true">
                <span className="crb-tree-lbl">The same programme, as rows</span>
                <div className="crb-rows-head">
                  <span>Product</span><span>Programme</span><span>Eligibility</span><span>Basis</span><span className="is-r">Rate</span>
                </div>
                <div className="crb-rows-row"><span>Line A</span><span>Ship and debit</span><span>Registered</span><span>Per unit sold</span><span className="is-r">cost less</span></div>
                <div className="crb-rows-row"><span>Line A</span><span>Volume rebate</span><span>All sales</span><span>To 10,000</span><span className="is-r">2%</span></div>
                <div className="crb-rows-row is-hi"><span>Line A</span><span>Volume rebate</span><span>All sales</span><span>Above 10,000</span><span className="is-r">3.5%</span></div>
                <div className="crb-rows-row"><span>Line B</span><span>SPA</span><span>Named account</span><span>Per unit sold</span><span className="is-r">deviated</span></div>
                <div className="crb-rows-row"><span>Line B</span><span>Price protection</span><span>On-hand stock</span><span>At price cut</span><span className="is-r">credit</span></div>
              </div>
            </div>

            <div className="crb-flow-foot">
              <span className="crb-flow-foot-k">Why this matters</span>
              <p>
                The ERP books the transaction at the price on the document. The programmes that decide the real margin
                arrive later, from other parties, in other formats. <b>That gap is what we reconstruct</b> &mdash;
                read-only to start, nothing changes in your ERP, your portals or your claims.
              </p>
            </div>
          </div>

          <p className="crb-engine-note" data-reveal>
            Every stage runs on the same engine that powers the DARP Framework and FSCP: acquire, process, govern,
            report.
          </p>
        </div>
      </section>

      {/* ============================= TWO SIDES ============================= */}
      <section className="section crb-sides-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Both directions</span>
            <h2>The same machinery, pointed both ways</h2>
            <p>
              Most tools are built for one side of the channel. The mechanics are mirror images, which is why one
              engine can compute what a vendor owes you and what you owe a customer, from the same rows.
            </p>
          </div>

          <div className="crb-sides" data-reveal>
            <div className="crb-side dfw-rise">
              <span className="crb-side-k is-in"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-arrow-right" /></svg></span>
              <h4>Buy side, money coming to you</h4>
              <p>Ship and debit, price protection, tiered and retrospective rebates, co-op and MDF, stock rotation. Every unit shipped should trigger a claim.</p>
            </div>
            <div className="crb-side dfw-rise">
              <span className="crb-side-k is-out"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-arrow-right" /></svg></span>
              <h4>Sell side, money you owe</h4>
              <p>Special pricing agreements, customer rebates and growth incentives, and the chargebacks a distributor claims back from you.</p>
            </div>
            <div className="crb-side dfw-rise">
              <span className="crb-side-k is-both"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-swap" /></svg></span>
              <h4>And the tracings between them</h4>
              <p>POS and sell-through data substantiates every buy-side claim. Late or malformed tracings are why claims get rejected, often too late to refile.</p>
            </div>
          </div>

          <div className="crb-sec-cta" data-reveal>
            <a href="/channel-rebates-manufacturers" className="btn btn-ghost">If you pay the claims</a>
            <a href="/channel-rebates-distributors" className="crb-learn"><i></i> If you file the claims <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-arrow-right" /></svg></a>
          </div>
        </div>
      </section>

      {/* ============================= 1 GATHER ============================= */}
      <section className="section crb-stage-sec">
        <div className="wrap">
          <div className="crb-stage-head" data-reveal>
            <span className="crb-stage-n">1</span>
            <div>
              <h2>The terms live outside the ledger, so that is where we start</h2>
              <p>
                The ERP records order-to-cash and procure-to-pay at the price on the document. The agreement that
                governs the real price sits in a vendor portal, a contract PDF, an EDI feed or a spreadsheet on
                somebody&rsquo;s desktop. Reported margin is provisional until all of it is read.
              </p>
            </div>
          </div>

          <div className="crb-subs" data-reveal>
            <div className="crb-sub dfw-rise">
              <span className="crb-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-doc" /></svg></span>
              <h3>The agreements</h3><span className="crb-sub-s">Read, not summarised</span>
              <p>Vendor programme terms, customer SPAs and rebate schedules read into rows, including scanned annexures and mid-period amendments.</p>
              <ul>
                <li>Contract PDFs, portal terms and rate cards read in one pipeline</li>
                <li>Amendments dated, so a mid-quarter change does not rewrite history</li>
                <li>Each row traceable to the clause and document behind it</li>
              </ul>
            </div>
            <div className="crb-sub dfw-rise">
              <span className="crb-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-upload" /></svg></span>
              <h3>The movements</h3><span className="crb-sub-s">What actually shipped and sold</span>
              <p>Invoices, credit notes, shipments, on-hand inventory and POS or sell-through tracings, at the grain the programme is written at.</p>
              <ul>
                <li>Sales and shipment history at line level, not summarised first</li>
                <li>On-hand stock positions, for price protection and rotation</li>
                <li>POS and sell-through tracings, in whatever shape they arrive</li>
              </ul>
            </div>
            <div className="crb-sub dfw-rise">
              <span className="crb-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-schema" /></svg></span>
              <h3>The counterparty view</h3><span className="crb-sub-s">Their numbers, next to yours</span>
              <p>Vendor statements, portal claim status, remittance detail and customer claim submissions, so both sides of every programme are visible at once.</p>
              <ul>
                <li>Vendor portal statements and claim status read as data</li>
                <li>Remittance detail matched to the claims it settled</li>
                <li>Customer submissions held against the agreement they cite</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 2 RECOMPUTE ============================= */}
      <section className="section crb-stage-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="crb-stage-head" data-reveal>
            <span className="crb-stage-n">2</span>
            <div>
              <h2>Then the true gross-to-net is rebuilt, transaction by transaction</h2>
              <p>
                Not a summary and not a sample. Every line is tested against the programme that governs it, so the
                margin you report is the margin the programmes actually produce.
              </p>
            </div>
          </div>

          <div className="crb-subs" data-reveal>
            <div className="crb-sub dfw-rise">
              <span className="crb-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-schema" /></svg></span>
              <h3>Line to programme</h3><span className="crb-sub-s">Which terms govern this sale</span>
              <p>Each transaction matched to the vendor programme and the customer agreement that apply to it, on product, territory, account and date.</p>
              <ul>
                <li>One line can fall under several programmes, and often does</li>
                <li>Eligibility tested per line, not assumed from the header</li>
                <li>Lines governed by no programme surfaced rather than ignored</li>
              </ul>
            </div>
            <div className="crb-sub dfw-rise">
              <span className="crb-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-layers" /></svg></span>
              <h3>Tiers and retros</h3><span className="crb-sub-s">As your contract defines them</span>
              <p>A volume band pays on all volume or only the units inside it, and a retrospective tier reprices earlier volume once the band is hit.</p>
              <ul>
                <li>Whole-volume or marginal, set per programme, not globally</li>
                <li>Retrospective tiers repricing prior volume in the period</li>
                <li>The band applied shown next to the one below it</li>
              </ul>
            </div>
            <div className="crb-sub dfw-rise">
              <span className="crb-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-search" /></svg></span>
              <h3>Claim against settlement</h3><span className="crb-sub-s">What was owed, what arrived</span>
              <p>Every claim compared to what the vendor actually paid, so short-pays and rejections surface with the substantiation still attached.</p>
              <ul>
                <li>Claim, credit note and remittance matched three ways</li>
                <li>Short-paid and rejected claims listed with the reason given</li>
                <li>Aged claim receivables, so nothing sits off-ledger unnoticed</li>
              </ul>
            </div>
          </div>

          <div className="crb-strip" data-reveal>
            <span className="crb-strip-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-gauge" /></svg></span>
            <div>
              <b>Marginal or whole-volume is a contract question, not a product setting.</b>
              <span>
                At 12,000 units against bands of 1 to 10,000 and above, does the higher rate pay on all 12,000 or only
                on the last 2,000? Both are written into real agreements. We read it from your contract, apply it per
                programme, and show which reading produced the number.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 3 DEADLINES ============================= */}
      <section className="section crb-stage-sec crb-clock-sec">
        <div className="arc-glow g-blue"></div>
        <div className="wrap">
          <div className="crb-stage-head" data-reveal>
            <span className="crb-stage-n is-amber">3</span>
            <div>
              <h2>Some of this money has an expiry date</h2>
              <p>
                A claim filed late is not a slow recovery. In several programmes it is no recovery at all. Healthcare
                chargebacks are the sharpest case, where a distributor typically files within roughly 45 days of the
                sale and there is no retroactive claim afterwards.
              </p>
            </div>
          </div>

          <div className="crb-subs" data-reveal>
            <div className="crb-sub is-amber dfw-rise">
              <span className="crb-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-calendar" /></svg></span>
              <h3>The clock, per programme</h3><span className="crb-sub-s">Not one deadline, many</span>
              <p>Every programme carries its own filing window, and they rarely align. The window is tracked per claim rather than per vendor.</p>
              <ul>
                <li>Filing deadlines held against each claim, per programme</li>
                <li>Claims approaching a window surfaced while they can still be filed</li>
                <li>Windows that have closed reported honestly, not quietly dropped</li>
              </ul>
            </div>
            <div className="crb-sub is-amber dfw-rise">
              <span className="crb-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-search" /></svg></span>
              <h3>Rejections that cost twice</h3><span className="crb-sub-s">Late tracings, dead claims</span>
              <p>A claim rejected for a malformed tracing often comes back after the window has shut, so the rejection and the expiry arrive together.</p>
              <ul>
                <li>Tracings validated before submission, not after rejection</li>
                <li>Rejection reasons classified, so the same fault stops recurring</li>
                <li>Resubmission time left, shown against the remaining window</li>
              </ul>
            </div>
            <div className="crb-sub is-amber dfw-rise">
              <span className="crb-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-recover" /></svg></span>
              <h3>Aged and unclaimed</h3><span className="crb-sub-s">Working capital off the ledger</span>
              <p>Claims raised and never settled sit as receivables the ERP does not show. They are aged like any other receivable, and chased.</p>
              <ul>
                <li>Unfiled claims surfaced against the sales that earned them</li>
                <li>Filed and unsettled claims aged by programme and counterparty</li>
                <li>What is genuinely uncollectible separated from what is merely late</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 4 ACCRUALS ============================= */}
      <section className="section crb-stage-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="crb-stage-head" data-reveal>
            <span className="crb-stage-n">4</span>
            <div>
              <h2>And the accrual is a number the auditor will ask about</h2>
              <p>
                Rebates and programme adjustments are estimated at the point of sale and trued up later. An
                over-accrual inflates reported margin and then trues down; an under-accrual does the reverse. Either
                way the estimate has to be defensible, not merely present.
              </p>
            </div>
          </div>

          <div className="crb-subs" data-reveal>
            <div className="crb-sub dfw-rise">
              <span className="crb-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-gauge" /></svg></span>
              <h3>Computed, not guessed</h3><span className="crb-sub-s">From the same rows</span>
              <p>The accrual comes from the programme rows and the actual transactions, so the estimate and the eventual claim share one basis.</p>
              <ul>
                <li>Accrual built from eligible transactions, per programme</li>
                <li>Retrospective tiers reflected as the period progresses</li>
                <li>The estimate and the claim reconciled when settlement arrives</li>
              </ul>
            </div>
            <div className="crb-sub dfw-rise">
              <span className="crb-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-loop" /></svg></span>
              <h3>True-up with a trail</h3><span className="crb-sub-s">Every period</span>
              <p>When the claim settles or the tier resolves, the difference is posted with the reason and the transactions behind it.</p>
              <ul>
                <li>Movement between estimate and actual explained per programme</li>
                <li>True-ups traced to the claims and tiers that caused them</li>
                <li>Prior-period corrections separated from current-period movement</li>
              </ul>
            </div>
            <div className="crb-sub dfw-rise">
              <span className="crb-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-check" /></svg></span>
              <h3>Evidence for audit</h3><span className="crb-sub-s">Assembled as it happens</span>
              <p>Agreement, transactions, claim and settlement are held against one another, so testing the accrual is a read rather than a reconstruction.</p>
              <ul>
                <li>Agreement, transaction, claim and settlement held together</li>
                <li>Full population tested rather than a sample</li>
                <li>The basis of estimate documented as it was applied</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= PORTAL ============================= */}
      <section className="section crb-portal-sec">
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">One portal, both sides</span>
            <h2>A channel programme has two parties who need the same view</h2>
            <p>
              A channel programme has two parties who need the same view and almost never have it. The portal shows
              each side its own claims, its own tracings and its own status, against the same record, which removes
              most of the correspondence before it starts.
            </p>
          </div>

          <div className="crb-subs" data-reveal>
            <div className="crb-sub dfw-rise">
              <span className="crb-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-gauge" /></svg></span>
              <h3>Claim status, live</h3><span className="crb-sub-s">For whoever raised it</span>
              <p>What was claimed, what was accepted, what was short-paid and why, with the days left in the filing window shown next to it.</p>
              <ul>
                <li>Every claim with its status, its evidence and its window</li>
                <li>Short-pay reasons visible to both sides at the same time</li>
                <li>Deadlines counted down rather than discovered afterwards</li>
              </ul>
            </div>
            <div className="crb-sub dfw-rise">
              <span className="crb-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-upload" /></svg></span>
              <h3>Tracings and submissions</h3><span className="crb-sub-s">Validated on arrival</span>
              <p>Sell-through data and claim submissions checked for the faults that cause rejection, at upload rather than after filing.</p>
              <ul>
                <li>Format and completeness checked before anything is submitted</li>
                <li>Missing periods and duplicate submissions caught at upload</li>
                <li>The original file kept as evidence for the claim it supports</li>
              </ul>
            </div>
            <div className="crb-sub dfw-rise">
              <span className="crb-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-user" /></svg></span>
              <h3>Disputes against a line</h3><span className="crb-sub-s">Not against a total</span>
              <p>A counterparty challenges a specific claim with the evidence already attached, and the exchange stays with the programme and period it affects.</p>
              <ul>
                <li>Disputes raised against a claim line, not a statement balance</li>
                <li>Both sides working from the same substantiation</li>
                <li>Resolution recorded against the programme it settles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= PREVENT ============================= */}
      <section className="section crb-prevent-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Then it runs forward</span>
            <h2>The same rows run forward, before the margin is booked</h2>
            <p>
              Prevent is not a second build. The rows that reconstructed your history are the rows that govern the
              next order. That is where a one-off recovery starts compounding.
            </p>
          </div>

          <div className="crb-prevent" data-reveal>
            <div className="crb-pstep dfw-rise"><span className="crb-pstep-d">1</span><h4>Programme agreed</h4><p>A new programme becomes rows, tested for gaps and overlaps before it governs anything.</p></div>
            <div className="crb-pstep dfw-rise"><span className="crb-pstep-d">2</span><h4>Order priced</h4><p>A deviated price that has no authorised agreement behind it is stopped at billing, not found later.</p></div>
            <div className="crb-pstep dfw-rise"><span className="crb-pstep-d">3</span><h4>Claim substantiated</h4><p>Claims assembled from POS and shipment data as the sale happens.</p></div>
            <div className="crb-pstep dfw-rise"><span className="crb-pstep-d">4</span><h4>Deadline watched</h4><p>Filing windows tracked per claim, with alerts while there is still time to act.</p></div>
            <div className="crb-pstep dfw-rise"><span className="crb-pstep-d">5</span><h4>Margin reported</h4><p>Accrual and true-up computed from the same rows, so reported margin stops being provisional.</p></div>
          </div>

          <div className="crb-sec-cta" data-reveal>
            <a href="/darp-framework" className="crb-learn"><i></i> How Recover becomes Prevent <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-arrow-right" /></svg></a>
          </div>
        </div>
      </section>

      {/* ============================= POSITIONING ============================= */}
      <section className="section crb-cmp-sec">
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">What this is</span>
            <h2>What this is, and what it is not</h2>
            <p>
              There is a mature market in rebate management software, and some of it is very good. We are not selling
              you that, and it is worth being clear about the difference before anyone books a meeting.
            </p>
          </div>

          <div className="crb-cmp" data-reveal>
            <table>
              <thead>
                <tr><th></th><th>A rebate management platform</th><th>DataTwin</th></tr>
              </thead>
              <tbody>
                <tr><td>The motion</td><td>Configure the platform, then run your programmes forward on it</td><td>Recompute what already happened, read-only, and show what leaked</td></tr>
                <tr><td>What you commit</td><td>Programme redesign, ERP coupling, and a team to operate it</td><td>A read-only data extract, and nothing else until you decide</td></tr>
                <tr><td>First value</td><td>After implementation, when programmes are live on the new system</td><td>A recovery number before there is anything to sign</td></tr>
                <tr><td>Where it sits</td><td>In the transaction path, as the system that runs the programme</td><td>On top of the ERP you already run, which stays the system of record</td></tr>
                <tr><td>Best used</td><td>When you have decided to re-platform programme management</td><td>When you suspect margin is leaking and want the number first</td></tr>
                <tr><td>Honest limit</td><td>Deep configuration, workflow and settlement operations</td><td>We reconcile and evidence; we do not replace your programme operations</td></tr>
              </tbody>
            </table>
          </div>

          <div className="crb-strip" data-reveal>
            <span className="crb-strip-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-search" /></svg></span>
            <div>
              <b>Where we would not claim depth yet.</b>
              <span>
                Regulatory chargeback administration in US healthcare, with GPO rosters, tier eligibility and
                government pricing, is a specialist domain with entrenched providers. We reconcile chargeback claims
                and deadlines; we do not present ourselves as a government-pricing compliance system.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= RECOVERY ============================= */}
      <section className="section crb-rec-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow c-amber">Start here</span>
            <h2>Before you change anything, find out what it has already cost you</h2>
            <p>
              Everything above is prevention; it stops the next quarter leaking. It does nothing about the programmes
              already settled, which are sitting in your claim history right now. So we start there, read-only, before
              there is anything to sign.
            </p>
          </div>

          <div className="crb-twomin" data-reveal>
            <span className="crb-twomin-n">2<em>min</em></span>
            <span className="crb-twomin-t">
              <b>This is how long it takes to understand how much can be recovered.</b>
              Send us the programme terms, the sales and claim history and the vendor statements. We test the full
              transaction population, not a sample, and come back with what is recoverable, split by heading, with the
              substantiation attached. Before any contract.
            </span>
          </div>

          <div className="crb-rec" data-reveal>
            <div className="crb-rc dfw-rise"><h4>Never claimed</h4><p>Sales that earned a claim nobody raised. Price protection never taken on stock repriced at a cut.</p></div>
            <div className="crb-rc is-2 dfw-rise"><h4>Short-paid</h4><p>Claims settled below what the agreement supports, and rejections nobody contested in time.</p></div>
            <div className="crb-rc is-3 dfw-rise"><h4>Aged out</h4><p>Claims past their filing window. Reported honestly, including where recovery is closed.</p></div>
            <div className="crb-rc is-4 dfw-rise"><h4>Mis-accrued</h4><p>Rebates over-accrued and trued down, and deviated prices billed with no authorised agreement.</p></div>
          </div>

          <p className="crb-sectors" data-reveal>
            The same engine runs channel programmes for <b>electronic component distribution</b>, <b>industrial and
            MRO</b>, <b>electrical and data</b>, <b>IT and networking hardware</b>, and <b>medical and pharmaceutical
            distribution</b>. The programmes differ in name; the seven axes do not.
          </p>

          <div className="crb-sec-cta" data-reveal>
            <a href="/#cta" className="btn btn-primary">Get an estimate for the channel <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg></a>
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
                Working from the sales, claim and programme history your systems already hold, we run our discovery.
                Nothing changes in your systems, nobody in your team changes how they work, and you see what&rsquo;s
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

      <ChannelRebatesScripts />
    </div>
  );
}
