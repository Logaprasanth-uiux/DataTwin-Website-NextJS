import type { Metadata } from "next";
import ChannelRebatesManufacturersScripts from "@/components/ChannelRebatesManufacturersScripts";

export const metadata: Metadata = {
  title: "Channel Rebates for Manufacturers: pay only what is genuinely owed | DataTwin",
  description:
    "Validate ship and debit, price protection, stock rotation and rebate claims against the authorised price, the POS and the stock position, and compute variable consideration from the same rows. We recompute settled claims first, read-only, before anything changes.",
};

export default function ChannelRebatesManufacturersPage() {
  return (
    <div className="rip-page is-mfr">
      {/* ============================= HERO ============================= */}
      <section className="hero mfr-hero">
        <div className="hero-aurora"></div>
        <div className="ledger-grid"></div>
        <div className="wrap mfr-hero-grid">
          <div className="mfr-hero-inner">
            <span className="eyebrow">Channel Rebates &middot; for Manufacturers</span>
            <h1>
              You are paying claims
              <br />
              you <span className="grad-text">cannot</span> test.
            </h1>
            <p className="hero-desc">
              A distributor claims the difference between what they paid you and what you authorised them to sell at.
              Testing that claim means knowing the registration, the authorised price, the sell-through and the stock
              position at the moment of the claim, and most of that arrives late, in a format nobody reconciles line
              by line. DataTwin validates every claim against what you actually authorised, and computes the reserve
              from the same rows.
            </p>
            <div className="mfr-chips">
              <span className="mfr-chip"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-lock" /></svg>Read-only on top of the ERP you already run</span>
              <span className="mfr-chip"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-check" /></svg>Every claim tested, not a sample</span>
              <span className="mfr-chip"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-gauge" /></svg>The reserve computed from the same rows</span>
            </div>
            <div className="mfr-hero-actions">
              <a href="/#cta" className="btn btn-primary">
                See what the channel has cost you{" "}
                <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg>
              </a>
              <a href="/channel-rebates" className="btn btn-ghost">Channel rebates in general</a>
            </div>
          </div>

          {/* hero graphic: the validation gate — a claim drops through three tests */}
          <div className="mfr-gate" aria-hidden="true">
            <div className="mfr-gate-node is-in">
              <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-doc" /></svg>
              <span>Claim received</span>
              <em>from the distributor portal</em>
            </div>
            <div className="mfr-gate-rail"><i></i></div>
            <div className="mfr-gate-test"><span>Against the authorisation</span></div>
            <div className="mfr-gate-test"><span>Against sell-through</span></div>
            <div className="mfr-gate-test"><span>Against each other</span></div>
            <div className="mfr-gate-rail"><i></i></div>
            <div className="mfr-gate-split">
              <div className="mfr-gate-node is-ok">
                <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-check" /></svg>
                <span>Valid: pay</span>
              </div>
              <div className="mfr-gate-node is-x">
                <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-search" /></svg>
                <span>Exception: review</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= WHAT YOU AUTHORISED / WHAT GETS CLAIMED ============================= */}
      <section className="section mfr-flow-sec">
        <div className="arc-glow g-violet"></div>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">What you authorised, and what gets claimed</span>
            <h2>Every claim rests on something you agreed</h2>
          </div>

          <div className="mfr-flow" data-reveal>
            <div className="ledger-grid" aria-hidden="true"></div>
            <div className="mfr-flow-head">
              <span className="mfr-flow-title">What you authorised &rarr; what every claim is tested against</span>
              <span className="mfr-flow-live"><i></i> Live process</span>
            </div>

            <div className="mfr-flow-body">
              <div className="mfr-tree" aria-hidden="true">
                <span className="mfr-tree-lbl">What you authorised</span>
                <div className="mfr-tree-cols">
                  <div className="mfr-tree-col">
                    <div className="mfr-node"><b>Distributor</b><em>and their tier</em></div>
                  </div>
                  <div className="mfr-tree-col">
                    <div className="mfr-node"><b>Territory</b><em>region or end-market</em></div>
                    <div className="mfr-node"><b>Product</b><em>line, family, SKU</em></div>
                    <div className="mfr-node"><b>Programme</b><em>ship &amp; debit, SPA, rotation</em></div>
                  </div>
                  <div className="mfr-tree-col">
                    <div className="mfr-node"><b>Registration</b><em>design win, named account</em></div>
                    <div className="mfr-node"><b>Authorised price</b><em>and its window</em></div>
                    <div className="mfr-node"><b>Eligibility</b><em>stock, tier, end customer</em></div>
                  </div>
                  <div className="mfr-tree-col">
                    <div className="mfr-node is-leaf"><b>Debit allowed</b><em>cost less authorised</em></div>
                    <div className="mfr-node is-leaf"><b>Credit allowed</b><em>on repriced stock</em></div>
                    <div className="mfr-node is-leaf"><b>Rebate earned</b><em>on qualifying volume</em></div>
                  </div>
                </div>
              </div>

              <div className="mfr-flow-wire" aria-hidden="true">
                <svg viewBox="0 0 60 200" preserveAspectRatio="none">
                  <path className="ln" d="M0,100 C30,100 30,100 60,100" />
                  <path className="fx" d="M0,100 C30,100 30,100 60,100" />
                </svg>
                <span className="mfr-flow-wire-lbl">flattened to</span>
              </div>

              <div className="mfr-rows" aria-hidden="true">
                <span className="mfr-tree-lbl">What every claim is tested against</span>
                <div className="mfr-rows-head">
                  <span>Distributor</span><span>Product</span><span>Programme</span><span>Authorised</span><span className="is-r">Claim</span>
                </div>
                <div className="mfr-rows-row"><span>Dist A</span><span>Line A</span><span>Ship and debit</span><span>Registered</span><span className="is-r is-ok">valid</span></div>
                <div className="mfr-rows-row is-hi"><span>Dist A</span><span>Line A</span><span>Ship and debit</span><span>Not registered</span><span className="is-r is-x">reject</span></div>
                <div className="mfr-rows-row"><span>Dist A</span><span>Line B</span><span>Price protection</span><span>Stock on hand</span><span className="is-r is-ok">valid</span></div>
                <div className="mfr-rows-row"><span>Dist B</span><span>Line A</span><span>Ship and debit</span><span>Window closed</span><span className="is-r is-x">reject</span></div>
                <div className="mfr-rows-row"><span>Dist B</span><span>Line C</span><span>Volume rebate</span><span>Tier 2 reached</span><span className="is-r">accrue</span></div>
              </div>
            </div>

            <div className="mfr-flow-foot">
              <span className="mfr-flow-foot-k">Why this matters</span>
              <p>
                A claim you cannot test is a claim you pay. <b>Validating it against the authorisation, the POS and the
                stock position</b> turns channel spend from an estimate into a number you can stand behind &mdash;
                read-only to start, nothing changes in your ERP or your distributor relationships.
              </p>
            </div>
          </div>

          <p className="mfr-engine-note" data-reveal>
            Every stage runs on the same engine that powers the DARP Framework and FSCP: acquire, process, govern,
            report.
          </p>
        </div>
      </section>

      {/* ============================= AXES ============================= */}
      <section className="section mfr-axes-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">The seven axes</span>
            <h2>Your channel programmes vary along the same seven axes</h2>
            <p>
              Ship and debit, price protection and stock rotation look like three problems. They are one structure
              with three sets of nouns, which is why they resolve on one engine rather than three tools.
            </p>
          </div>

          <div className="mfr-axes" data-reveal>
            <div className="mfr-ax dfw-rise"><b>Who</b><h4>Which distributor, at which tier</h4><p>The tier and the agreement decide which programmes apply and at what rate.</p></div>
            <div className="mfr-ax dfw-rise"><b>Where</b><h4>Which territory or end-market</h4><p>Region, channel, or the named account a deviated price was registered against.</p></div>
            <div className="mfr-ax dfw-rise"><b>What</b><h4>Which product it covers</h4><p>Line, family or SKU, and bundles the programme treats as a single item.</p></div>
            <div className="mfr-ax dfw-rise"><b>Which programme</b><h4>What kind of adjustment</h4><p>Ship and debit, price protection, stock rotation, design registration, rebate, co-op and MDF.</p></div>
            <div className="mfr-ax dfw-rise"><b>When</b><h4>In which window</h4><p>The authorised price window, the earning period, and the window a claim may be filed in.</p></div>
            <div className="mfr-ax dfw-rise"><b>How much</b><h4>Against what measure</h4><p>Units sold through, value shipped, or stock on hand at the moment of a price change.</p></div>
            <div className="mfr-ax dfw-rise"><b>How it pays</b><h4>Debit, credit or accrual</h4><p>A debit against your invoice, a credit on held stock, or a reserve that trues up later.</p></div>
            <div className="mfr-ax is-leaf dfw-rise"><b>The leaf</b><h4>And at the end of every path, an authorisation</h4><p>Seven answers say what this distributor was entitled to claim. Anything else is an exception, not a payment.</p></div>
          </div>
        </div>
      </section>

      {/* ============================= 1 AUTHORISATION ============================= */}
      <section className="section mfr-stage-sec">
        <div className="wrap">
          <div className="mfr-stage-head" data-reveal>
            <span className="mfr-stage-n">1</span>
            <div>
              <h2>It starts with what you actually authorised</h2>
              <p>
                Every claim rests on something you agreed: a registered design win, a named-account price, a tier the
                distributor reached, a price you cut on stock they were holding. If that record is scattered across
                portals and mail threads, the claim cannot be tested, only trusted.
              </p>
            </div>
          </div>

          <div className="mfr-subs" data-reveal>
            <div className="mfr-sub dfw-rise">
              <span className="mfr-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-doc" /></svg></span>
              <h3>Registrations and SPAs</h3><span className="mfr-sub-s">The authorisation, as rows</span>
              <p>Design registrations, named-account approvals and deviated prices captured with their product, customer, price and window.</p>
              <ul>
                <li>Registrations and approvals held with the window they cover</li>
                <li>Deviated prices tied to the account they were granted for</li>
                <li>Extensions and amendments dated rather than overwritten</li>
              </ul>
            </div>
            <div className="mfr-sub dfw-rise">
              <span className="mfr-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-layers" /></svg></span>
              <h3>Programme terms</h3><span className="mfr-sub-s">What each distributor is on</span>
              <p>Tier, rate, eligibility and filing rules per distributor and per programme, so no claim is judged against a general policy.</p>
              <ul>
                <li>Tiers and rates per distributor, per programme, per period</li>
                <li>Eligibility rules stated rather than inferred at claim time</li>
                <li>Filing windows recorded as part of the terms</li>
              </ul>
            </div>
            <div className="mfr-sub dfw-rise">
              <span className="mfr-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-calendar" /></svg></span>
              <h3>Effective dating</h3><span className="mfr-sub-s">Prices move, authorisations expire</span>
              <p>A price cut, a tier change or a lapsed registration each change what may be claimed, from a date. That date is carried.</p>
              <ul>
                <li>Price changes effective from a date, against held stock</li>
                <li>Registrations that lapsed shown as lapsed, not silently valid</li>
                <li>Retrospective tiers recomputing the period they reprice</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 2 VALIDATION ============================= */}
      <section className="section mfr-stage-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="mfr-stage-head" data-reveal>
            <span className="mfr-stage-n">2</span>
            <div>
              <h2>Then every claim is tested, not sampled</h2>
              <p>
                Overpayment in the channel is rarely fraud. It is a claim against a registration that expired, a unit
                that was never sold through, a price the distributor believed was authorised, or the same sale claimed
                twice under two programmes. Each one is findable, and none is findable by eye.
              </p>
            </div>
          </div>

          <div className="mfr-subs" data-reveal>
            <div className="mfr-sub dfw-rise">
              <span className="mfr-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-schema" /></svg></span>
              <h3>Against the authorisation</h3><span className="mfr-sub-s">Line by line</span>
              <p>Each claim line matched to the registration or agreement it cites, on product, customer, price and date.</p>
              <ul>
                <li>Claims citing no valid authorisation surfaced before payment</li>
                <li>Deviated price claimed compared to the price authorised</li>
                <li>Claims outside the authorised window flagged with the date</li>
              </ul>
            </div>
            <div className="mfr-sub dfw-rise">
              <span className="mfr-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-swap" /></svg></span>
              <h3>Against sell-through</h3><span className="mfr-sub-s">Did the unit actually move</span>
              <p>Claims reconciled to the POS and inventory data the distributor reports, so a claim without a sale behind it does not settle.</p>
              <ul>
                <li>Claimed units matched to reported sell-through</li>
                <li>Units claimed but never reported as sold, listed</li>
                <li>Stock positions used to test price protection and rotation</li>
              </ul>
            </div>
            <div className="mfr-sub dfw-rise">
              <span className="mfr-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-search" /></svg></span>
              <h3>Against each other</h3><span className="mfr-sub-s">One sale, one claim</span>
              <p>The same transaction claimed under two programmes, or by two distributors, is one of the quietest overpayments in the channel.</p>
              <ul>
                <li>Duplicate and near-duplicate claims across programmes</li>
                <li>The same unit claimed by more than one counterparty</li>
                <li>Rebate and ship-and-debit claimed on the same sale, where terms exclude it</li>
              </ul>
            </div>
          </div>

          <div className="mfr-strip" data-reveal>
            <span className="mfr-strip-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-gauge" /></svg></span>
            <div>
              <b>Marginal or whole-volume is a contract question, not a product setting.</b>
              <span>
                When a distributor crosses a tier, does the better rate apply to all volume in the period or only to
                what falls above the band? Both appear in real programmes, and a retrospective tier can reprice volume
                you already settled. We read it from your terms and show which reading produced the number.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 3 RESERVE ============================= */}
      <section className="section mfr-stage-sec">
        <div className="arc-glow g-violet"></div>
        <div className="wrap">
          <div className="mfr-stage-head" data-reveal>
            <span className="mfr-stage-n">3</span>
            <div>
              <h2>The reserve is the number your auditor will actually test</h2>
              <p>
                Channel programmes are variable consideration. Under ASC 606 and Ind AS 115 they have to be estimated
                at the point of sale and re-measured every period, which makes the estimate a recurring, audit-exposed
                workload rather than a quarter-end task.
              </p>
            </div>
          </div>

          <div className="mfr-subs" data-reveal>
            <div className="mfr-sub dfw-rise">
              <span className="mfr-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-gauge" /></svg></span>
              <h3>Estimated from transactions</h3><span className="mfr-sub-s">Not from a percentage</span>
              <p>The reserve is built from eligible sales and the programme rows that govern them, so estimate and eventual claim share one basis.</p>
              <ul>
                <li>Built from eligible transactions rather than a historical rate</li>
                <li>Retrospective tiers reflected as the period develops</li>
                <li>Distributor inventory carried into price protection exposure</li>
              </ul>
            </div>
            <div className="mfr-sub dfw-rise">
              <span className="mfr-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-loop" /></svg></span>
              <h3>Trued up with a trail</h3><span className="mfr-sub-s">Every period</span>
              <p>When claims settle, the movement between estimate and actual is posted with the transactions and programmes behind it.</p>
              <ul>
                <li>Movement explained per programme and per distributor</li>
                <li>Prior-period corrections separated from current movement</li>
                <li>Settled claims reconciled back to the reserve they released</li>
              </ul>
            </div>
            <div className="mfr-sub dfw-rise">
              <span className="mfr-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-check" /></svg></span>
              <h3>Evidence for audit</h3><span className="mfr-sub-s">Assembled as it happens</span>
              <p>Agreement, sale, claim and settlement are held against one another, so testing the reserve is a read rather than a reconstruction.</p>
              <ul>
                <li>Full population tested rather than a judgemental sample</li>
                <li>The basis of estimate documented as it was applied</li>
                <li>Every reserve movement traceable to the claims behind it</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= PORTAL ============================= */}
      <section className="section mfr-portal-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">The distributor portal</span>
            <h2>And the distributor stops emailing your channel team</h2>
            <p>
              Most of a channel team&rsquo;s week is answering two questions: was my claim accepted, and why was it
              short-paid. A portal that shows the distributor its own claims against your authorisation record answers
              both, and turns a dispute into a specific line rather than a balance.
            </p>
          </div>

          <div className="mfr-subs" data-reveal>
            <div className="mfr-sub dfw-rise">
              <span className="mfr-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-gauge" /></svg></span>
              <h3>Claim status, live</h3><span className="mfr-sub-s">With the reason attached</span>
              <p>Accepted, rejected or short-paid, each with the authorisation it was tested against and the rule that decided it.</p>
              <ul>
                <li>Every claim with its status and the test it passed or failed</li>
                <li>Short-pay reasons visible without a phone call</li>
                <li>Registrations and authorised prices visible to the distributor</li>
              </ul>
            </div>
            <div className="mfr-sub dfw-rise">
              <span className="mfr-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-upload" /></svg></span>
              <h3>Tracings on arrival</h3><span className="mfr-sub-s">Validated at upload</span>
              <p>Sell-through files checked for the faults that cause rejection at upload, so a rejection does not arrive weeks later.</p>
              <ul>
                <li>Format and completeness checked before submission</li>
                <li>Missing periods and duplicate files caught immediately</li>
                <li>The original file retained as evidence for the claims it supports</li>
              </ul>
            </div>
            <div className="mfr-sub dfw-rise">
              <span className="mfr-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-user" /></svg></span>
              <h3>Disputes against a line</h3><span className="mfr-sub-s">Not against a total</span>
              <p>The distributor challenges a claim with your evidence already attached, and the exchange stays with the programme it belongs to.</p>
              <ul>
                <li>Disputes raised against a claim line, not a statement</li>
                <li>Both sides working from the same authorisation record</li>
                <li>Resolution recorded against the programme it settles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= PREVENT ============================= */}
      <section className="section mfr-prevent-sec">
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Then it runs forward</span>
            <h2>The same rows run forward, before the claim is paid</h2>
            <p>
              Prevent is not a second build. The rows that revalidated your settled claims are the rows that test the
              next one. That is where a one-off recovery starts compounding.
            </p>
          </div>

          <div className="mfr-prevent" data-reveal>
            <div className="mfr-pstep dfw-rise"><span className="mfr-pstep-d">1</span><h4>Programme agreed</h4><p>Terms, tiers and eligibility become rows, tested for gaps before they govern anything.</p></div>
            <div className="mfr-pstep dfw-rise"><span className="mfr-pstep-d">2</span><h4>Price authorised</h4><p>Registrations and deviated prices captured with their window, so a claim has something to cite.</p></div>
            <div className="mfr-pstep dfw-rise"><span className="mfr-pstep-d">3</span><h4>Claim received</h4><p>Tested against the authorisation, the sell-through and the stock position, before it settles.</p></div>
            <div className="mfr-pstep dfw-rise"><span className="mfr-pstep-d">4</span><h4>Exception reviewed</h4><p>Only what the rules cannot settle reaches a person, with the difference already quantified.</p></div>
            <div className="mfr-pstep dfw-rise"><span className="mfr-pstep-d">5</span><h4>Reserve reported</h4><p>Estimate and true-up computed from the same rows that validate the claims.</p></div>
          </div>

          <div className="mfr-sec-cta" data-reveal>
            <a href="/darp-framework" className="mfr-learn"><i></i> How Recover becomes Prevent <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-arrow-right" /></svg></a>
          </div>
        </div>
      </section>

      {/* ============================= RECOVERY ============================= */}
      <section className="section mfr-rec-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow c-amber">Start here</span>
            <h2>Before you change anything, find out what it has already cost you</h2>
            <p>
              Everything above is prevention; it stops the next quarter leaking. It does nothing about the claims
              already settled, which are sitting in your channel history right now. So we start there, read-only,
              before there is anything to sign.
            </p>
          </div>

          <div className="mfr-twomin" data-reveal>
            <span className="mfr-twomin-n">2<em>min</em></span>
            <span className="mfr-twomin-t">
              <b>This is how long it takes to understand how much can be recovered.</b>
              Send us the programme terms, the registrations, the claim history and the POS your distributors
              reported. We revalidate the full claim population, not a sample, and come back with what is recoverable,
              split by heading. Before any contract.
            </span>
          </div>

          <div className="mfr-rec" data-reveal>
            <div className="mfr-rc dfw-rise"><h4>Paid without authority</h4><p>Claims settled against a registration that had expired, or a price nobody authorised.</p></div>
            <div className="mfr-rc is-2 dfw-rise"><h4>Paid without a sale</h4><p>Units debited that never appear in reported sell-through, and stock claims above stock held.</p></div>
            <div className="mfr-rc is-3 dfw-rise"><h4>Paid twice</h4><p>The same sale claimed under two programmes, or by two distributors in the same period.</p></div>
            <div className="mfr-rc is-4 dfw-rise"><h4>Reserved wrongly</h4><p>Over-accrual that inflated reported margin and then trued down, and tiers applied on the wrong reading.</p></div>
          </div>

          <p className="mfr-sectors" data-reveal>
            The same engine runs channel programmes for <b>fabless and component makers</b>, <b>integrated device
            manufacturers</b>, <b>equipment and instrument makers</b>, and <b>industrial and electrical brands</b>
            selling through authorised distribution.
          </p>

          <div className="mfr-sec-cta" data-reveal>
            <a href="/#cta" className="btn btn-primary">Get an estimate for the channel <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg></a>
            <a href="/channel-rebates-distributors" className="btn btn-ghost">The distributor side</a>
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
                Working from the claim, programme and sell-through history your systems already hold, we run our
                discovery. Nothing changes in your systems, nobody in your team changes how they work, and you see
                what&rsquo;s recoverable before there&rsquo;s anything to sign. If the number isn&rsquo;t worth acting
                on, at least you know you&rsquo;re safe.
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

      <ChannelRebatesManufacturersScripts />
    </div>
  );
}
