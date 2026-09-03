import type { Metadata } from "next";
import ChannelRebatesDistributorsScripts from "@/components/ChannelRebatesDistributorsScripts";

export const metadata: Metadata = {
  title: "Channel Rebates for Distributors: collect what you are owed, before it expires | DataTwin",
  description:
    "Unclaimed and underclaimed ship and debit, rebates and price protection, short-paid and rejected claims, and claims aging toward a filing deadline. Reconstructed from your own sales, agreements and vendor statements, read-only, with the substantiation attached.",
};

export default function ChannelRebatesDistributorsPage() {
  return (
    <div className="rip-page is-dst">
      {/* ============================= HERO ============================= */}
      <section className="hero dst-hero">
        <div className="hero-aurora"></div>
        <div className="ledger-grid"></div>
        <div className="wrap dst-hero-grid">
          <div className="dst-hero-inner">
            <span className="eyebrow c-amber">Channel Rebates &middot; for Distributors</span>
            <h1>
              You fronted the margin.
              <br />
              Now you have to <span className="grad-text">claim it back</span>.
            </h1>
            <p className="hero-desc">
              You buy at standard cost, sell at the price the vendor authorised, and recover the difference by filing
              a claim with a trail back to the agreement. Across ten vendor lines, each with its own portal, format
              and deadline, some of those claims are never raised, some are short-paid and never contested, and some
              quietly pass their filing window. DataTwin reconstructs what you were entitled to and shows what is
              still recoverable.
            </p>
            <div className="dst-chips">
              <span className="dst-chip"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-lock" /></svg>Read-only on top of the ERP you already run</span>
              <span className="dst-chip"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-calendar" /></svg>Filing windows tracked per claim, not per vendor</span>
              <span className="dst-chip"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-check" /></svg>Every finding carries its substantiation</span>
            </div>
            <div className="dst-hero-actions">
              <a href="/#cta" className="btn btn-primary">
                See what the channel has cost you{" "}
                <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg>
              </a>
              <a href="/channel-rebates" className="btn btn-ghost">Channel rebates in general</a>
            </div>
          </div>

          {/* hero graphic: the claim ladder rising, with a window closing beside it */}
          <div className="dst-ladder" aria-hidden="true">
            <div className="dst-ladder-track">
              <div className="dst-rung is-4"><span>Settled</span><em>money back</em></div>
              <div className="dst-rung is-3"><span>Claim filed</span><em>with its trail</em></div>
              <div className="dst-rung is-2"><span>Entitlement</span><em>cost less authorised</em></div>
              <div className="dst-rung is-1"><span>Sale made</span><em>margin fronted</em></div>
            </div>
            <div className="dst-window">
              <span className="dst-window-lbl">Filing window</span>
              <div className="dst-window-bars">
                <i style={{ width: "82%" }}></i>
                <i style={{ width: "44%" }}></i>
                <i className="is-urgent" style={{ width: "14%" }}></i>
              </div>
              <span className="dst-window-note">Ranked by days left, not amount</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= WHAT YOU ARE OWED / HOW LONG YOU HAVE ============================= */}
      <section className="section dst-flow-sec">
        <div className="arc-glow g-blue"></div>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow c-amber">What you are owed, and how long you have</span>
            <h2>Every sale entitled you to something &mdash; if you claim it in time</h2>
          </div>

          <div className="dst-flow" data-reveal>
            <div className="ledger-grid" aria-hidden="true"></div>
            <div className="dst-flow-head">
              <span className="dst-flow-title">What you are entitled to claim &rarr; what every sale is tested against</span>
              <span className="dst-flow-live"><i></i> Live process</span>
            </div>

            <div className="dst-flow-body">
              <div className="dst-tree" aria-hidden="true">
                <span className="dst-tree-lbl">What you are entitled to claim</span>
                <div className="dst-tree-cols">
                  <div className="dst-tree-col">
                    <div className="dst-node"><b>Vendor line</b><em>and your tier</em></div>
                  </div>
                  <div className="dst-tree-col">
                    <div className="dst-node"><b>Territory</b><em>region or end-market</em></div>
                    <div className="dst-node"><b>Product</b><em>line, family, SKU</em></div>
                    <div className="dst-node"><b>Programme</b><em>ship &amp; debit, rebate, rotation</em></div>
                  </div>
                  <div className="dst-tree-col">
                    <div className="dst-node"><b>Authorisation</b><em>registration or SPA</em></div>
                    <div className="dst-node"><b>Rate form</b><em>off-invoice, tiered, retro</em></div>
                    <div className="dst-node"><b>Filing window</b><em>days from the sale</em></div>
                  </div>
                  <div className="dst-tree-col">
                    <div className="dst-node is-leaf"><b>Claimable</b><em>cost less authorised price</em></div>
                    <div className="dst-node is-leaf"><b>Rebate due</b><em>on qualifying volume</em></div>
                    <div className="dst-node is-leaf"><b>Credit due</b><em>price protection, rotation</em></div>
                  </div>
                </div>
              </div>

              <div className="dst-flow-wire" aria-hidden="true">
                <svg viewBox="0 0 60 200" preserveAspectRatio="none">
                  <path className="ln" d="M0,100 C30,100 30,100 60,100" />
                  <path className="fx" d="M0,100 C30,100 30,100 60,100" />
                </svg>
                <span className="dst-flow-wire-lbl">flattened to</span>
              </div>

              <div className="dst-rows" aria-hidden="true">
                <span className="dst-tree-lbl">What every sale is tested against</span>
                <div className="dst-rows-head">
                  <span>Vendor</span><span>Product</span><span>Programme</span><span>Window</span><span className="is-r">Status</span>
                </div>
                <div className="dst-rows-row"><span>Vendor A</span><span>Line A</span><span>Ship and debit</span><span>14 days left</span><span className="is-r">to file</span></div>
                <div className="dst-rows-row is-hi"><span>Vendor A</span><span>Line A</span><span>Ship and debit</span><span>3 days left</span><span className="is-r is-urgent">urgent</span></div>
                <div className="dst-rows-row"><span>Vendor A</span><span>Line B</span><span>Volume rebate</span><span>Period open</span><span className="is-r">accruing</span></div>
                <div className="dst-rows-row"><span>Vendor B</span><span>Line C</span><span>Price protection</span><span>Cut announced</span><span className="is-r">to file</span></div>
                <div className="dst-rows-row"><span>Vendor B</span><span>Line C</span><span>Ship and debit</span><span>Closed</span><span className="is-r is-lost">lost</span></div>
              </div>
            </div>

            <div className="dst-flow-foot">
              <span className="dst-flow-foot-k">Why this matters</span>
              <p>
                You front the margin at the point of sale and recover it later. <b>Every sale that never becomes a
                claim, and every claim that misses its window, is margin you already gave away</b> and will not get
                back &mdash; read-only to start, nothing changes in your ERP or your vendor portals.
              </p>
            </div>
          </div>

          <p className="dst-engine-note" data-reveal>
            Every stage runs on the same engine that powers the DARP Framework and FSCP: acquire, process, govern,
            report.
          </p>
        </div>
      </section>

      {/* ============================= AXES ============================= */}
      <section className="section dst-axes-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow c-amber">The seven axes</span>
            <h2>Every vendor programme varies along the same seven axes</h2>
            <p>
              Ten vendor lines feel like ten problems because each has its own portal and its own vocabulary.
              Underneath they are one structure, which is why they resolve on one engine rather than ten spreadsheets.
            </p>
          </div>

          <div className="dst-axes" data-reveal>
            <div className="dst-ax dfw-rise"><b>Who</b><h4>Which vendor, at which tier</h4><p>Each line carries its own programme, its own portal and its own claim format.</p></div>
            <div className="dst-ax dfw-rise"><b>Where</b><h4>Which territory or end-market</h4><p>Region, channel, or the named account a deviated price was registered against.</p></div>
            <div className="dst-ax dfw-rise"><b>What</b><h4>Which product it covers</h4><p>Line, family or SKU, and bundles the programme treats as a single item.</p></div>
            <div className="dst-ax dfw-rise"><b>Which programme</b><h4>What kind of recovery</h4><p>Ship and debit, price protection, stock rotation, volume rebate, co-op and MDF, chargeback.</p></div>
            <div className="dst-ax dfw-rise"><b>When</b><h4>By when must it be filed</h4><p>The earning period, and separately the filing window, which is the one that expires.</p></div>
            <div className="dst-ax dfw-rise"><b>How much</b><h4>Against what measure</h4><p>Units sold, value shipped, sell-through reported, or stock on hand when a price was cut.</p></div>
            <div className="dst-ax dfw-rise"><b>How it pays</b><h4>What shape does the money take</h4><p>A claim you file, a credit note you receive, or an off-invoice allowance you never see.</p></div>
            <div className="dst-ax is-leaf dfw-rise"><b>The leaf</b><h4>And at the end of every path, a claimable amount</h4><p>Seven answers say what this sale entitled you to. Anything unclaimed is margin you fronted and never got back.</p></div>
          </div>
        </div>
      </section>

      {/* ============================= 1 ENTITLEMENT ============================= */}
      <section className="section dst-stage-sec">
        <div className="wrap">
          <div className="dst-stage-head" data-reveal>
            <span className="dst-stage-n">1</span>
            <div>
              <h2>First, what were you actually entitled to claim</h2>
              <p>
                The claim is the last step. Before it there is an agreement, a registration, a tier and a price,
                spread across vendor portals, contract PDFs and a spreadsheet somebody maintains by hand.
                Reconstructing the entitlement is what turns a sale into a claim you can defend.
              </p>
            </div>
          </div>

          <div className="dst-subs" data-reveal>
            <div className="dst-sub dfw-rise">
              <span className="dst-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-doc" /></svg></span>
              <h3>The agreements</h3><span className="dst-sub-s">Read, not summarised</span>
              <p>Vendor programme terms, registrations and authorised prices captured with their product, customer, rate and window.</p>
              <ul>
                <li>Contract PDFs, portal terms and rate cards read in one pipeline</li>
                <li>Registrations and deviated prices held with the window they cover</li>
                <li>Amendments dated, so a mid-quarter change does not rewrite history</li>
              </ul>
            </div>
            <div className="dst-sub dfw-rise">
              <span className="dst-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-upload" /></svg></span>
              <h3>The movements</h3><span className="dst-sub-s">What shipped, what sold</span>
              <p>Purchases, sales, credit notes and stock on hand at line level, at the grain the programme is written at.</p>
              <ul>
                <li>Sales and shipment history at line level, not summarised</li>
                <li>On-hand stock, for price protection and rotation entitlement</li>
                <li>Returns and cancellations removed before anything is claimed</li>
              </ul>
            </div>
            <div className="dst-sub dfw-rise">
              <span className="dst-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-schema" /></svg></span>
              <h3>Sale to entitlement</h3><span className="dst-sub-s">Every line tested</span>
              <p>Each sale matched to the programme that governs it, so the claimable amount is computed rather than remembered.</p>
              <ul>
                <li>One sale can qualify under more than one programme</li>
                <li>Sales with no programme behind them surfaced, not ignored</li>
                <li>Claimable amount computed from cost, authorised price and volume</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 2 CLAIMED VS RECEIVED ============================= */}
      <section className="section dst-stage-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="dst-stage-head" data-reveal>
            <span className="dst-stage-n">2</span>
            <div>
              <h2>Then, what was claimed, and what actually arrived</h2>
              <p>
                Filing a claim is not recovering money. A claim can be rejected for a malformed tracing, short-paid
                without an explanation anyone chased, or settled at a rate that does not match the agreement. The gap
                between raised and received is where the recoverable money sits.
              </p>
            </div>
          </div>

          <div className="dst-subs" data-reveal>
            <div className="dst-sub dfw-rise">
              <span className="dst-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-search" /></svg></span>
              <h3>Never raised</h3><span className="dst-sub-s">The largest and quietest gap</span>
              <p>Sales that earned a claim which nobody filed, listed against the transaction that earned it and the programme that allowed it.</p>
              <ul>
                <li>Every qualifying sale compared to the claims actually filed</li>
                <li>Price protection never taken on stock repriced at a cut</li>
                <li>Rotation and return credits never claimed against the terms</li>
              </ul>
            </div>
            <div className="dst-sub dfw-rise">
              <span className="dst-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-swap" /></svg></span>
              <h3>Short-paid</h3><span className="dst-sub-s">Settled below entitlement</span>
              <p>Claims paid at less than the agreement supports, with the difference quantified and the substantiation still attached.</p>
              <ul>
                <li>Claim, credit note and remittance matched three ways</li>
                <li>Short-pay reasons classified, so the pattern is visible</li>
                <li>The evidence needed to contest, assembled with the finding</li>
              </ul>
            </div>
            <div className="dst-sub dfw-rise">
              <span className="dst-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-recover" /></svg></span>
              <h3>Aged and unsettled</h3><span className="dst-sub-s">Working capital off the ledger</span>
              <p>Claims filed and never settled are receivables your ERP does not show. They are aged by vendor and programme, and chased.</p>
              <ul>
                <li>Filed and unsettled claims aged by vendor and programme</li>
                <li>Rejections that were never resubmitted, listed with time left</li>
                <li>What is genuinely uncollectible separated from what is late</li>
              </ul>
            </div>
          </div>

          <div className="dst-strip" data-reveal>
            <span className="dst-strip-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-calendar" /></svg></span>
            <div>
              <b>Some of this money has an expiry date, and the clock is per claim.</b>
              <span>
                Healthcare chargebacks are the sharpest case: distributors typically file within roughly 45 days of
                the sale, and once the window closes there is no retroactive claim. Other programmes are more
                forgiving, but few are open-ended. We track the window against each claim rather than each vendor, and
                we report closed windows honestly, including where recovery is no longer possible.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 3 SELL SIDE ============================= */}
      <section className="section dst-stage-sec">
        <div className="arc-glow g-blue"></div>
        <div className="wrap">
          <div className="dst-stage-head" data-reveal>
            <span className="dst-stage-n">3</span>
            <div>
              <h2>And your own customer agreements leak in both directions</h2>
              <p>
                A special pricing agreement cuts both ways. Bill at standard when a deviated price was authorised and
                you overbill the customer, which becomes a dispute and a credit. Bill at the deviated price with no
                approved agreement and you have given the margin away for nothing.
              </p>
            </div>
          </div>

          <div className="dst-subs" data-reveal>
            <div className="dst-sub dfw-rise">
              <span className="dst-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-swap" /></svg></span>
              <h3>SPA both ways</h3><span className="dst-sub-s">Overbilled and underbilled</span>
              <p>Every customer invoice tested against the special pricing that was authorised for that account and product.</p>
              <ul>
                <li>Billed at standard where a deviated price was authorised</li>
                <li>Billed at a deviated price with no approved agreement behind it</li>
                <li>Expired agreements still being honoured, listed by account</li>
              </ul>
            </div>
            <div className="dst-sub dfw-rise">
              <span className="dst-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-layers" /></svg></span>
              <h3>Customer rebates</h3><span className="dst-sub-s">What you owe, computed</span>
              <p>Growth incentives and volume rebates payable to your customers, computed on the same engine that computes what your vendors owe you.</p>
              <ul>
                <li>Tiered and retrospective customer rebates computed per period</li>
                <li>Accrual built from eligible sales rather than a flat percentage</li>
                <li>Claims your customers file, tested against the agreement they cite</li>
              </ul>
            </div>
            <div className="dst-sub dfw-rise">
              <span className="dst-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-check" /></svg></span>
              <h3>The margin, finally</h3><span className="dst-sub-s">Gross to net, per line</span>
              <p>With both sides reconciled, the margin on a line is what the programmes actually produce rather than what the invoice said.</p>
              <ul>
                <li>True gross-to-net per transaction, not per month</li>
                <li>Programme adjustments attached to the line they belong to</li>
                <li>Reported margin that stops being provisional</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= PORTAL ============================= */}
      <section className="section dst-portal-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">One portal, both directions</span>
            <h2>The same view against your vendors and for your customers</h2>
            <p>
              The same view that lets your customers see their own claims and agreements is the view your own team
              uses against your vendors. Both sides of the channel, one record, and most of the correspondence stops
              before it starts.
            </p>
          </div>

          <div className="dst-subs" data-reveal>
            <div className="dst-sub dfw-rise">
              <span className="dst-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-gauge" /></svg></span>
              <h3>Claim status, live</h3><span className="dst-sub-s">With the window on it</span>
              <p>What was claimed, what was accepted, what was short-paid and why, with the days left to file shown next to it.</p>
              <ul>
                <li>Every claim with its status, evidence and remaining window</li>
                <li>Short-pay reasons visible without chasing a portal</li>
                <li>Deadlines counted down rather than discovered afterwards</li>
              </ul>
            </div>
            <div className="dst-sub dfw-rise">
              <span className="dst-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-upload" /></svg></span>
              <h3>Tracings on arrival</h3><span className="dst-sub-s">Validated at upload</span>
              <p>Sell-through files checked for the faults that cause rejection at upload rather than weeks later.</p>
              <ul>
                <li>Format and completeness checked before submission</li>
                <li>Missing periods and duplicate files caught immediately</li>
                <li>The original file kept as evidence for the claim it supports</li>
              </ul>
            </div>
            <div className="dst-sub dfw-rise">
              <span className="dst-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-user" /></svg></span>
              <h3>Disputes against a line</h3><span className="dst-sub-s">Not against a total</span>
              <p>A customer challenges a specific claim with the evidence already attached, and the exchange stays with the agreement it concerns.</p>
              <ul>
                <li>Disputes raised against a claim line, not a balance</li>
                <li>Both sides working from the same agreement record</li>
                <li>Resolution recorded against the programme it settles</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= PREVENT ============================= */}
      <section className="section dst-prevent-sec">
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow c-amber">Then it runs forward</span>
            <h2>The same rows run forward, before the window closes</h2>
            <p>
              Prevent is not a second build. The rows that reconstructed your entitlement are the rows that raise the
              next claim. That is where a one-off recovery starts compounding.
            </p>
          </div>

          <div className="dst-prevent" data-reveal>
            <div className="dst-pstep dfw-rise"><span className="dst-pstep-d">1</span><h4>Programme agreed</h4><p>Vendor terms, tiers and registrations become rows, tested for gaps first.</p></div>
            <div className="dst-pstep dfw-rise"><span className="dst-pstep-d">2</span><h4>Sale made</h4><p>Every qualifying sale generates its claim entitlement as it happens, not at month end.</p></div>
            <div className="dst-pstep dfw-rise"><span className="dst-pstep-d">3</span><h4>Claim substantiated</h4><p>Assembled from your own sales and stock data, in the format the vendor requires.</p></div>
            <div className="dst-pstep dfw-rise"><span className="dst-pstep-d">4</span><h4>Deadline watched</h4><p>Windows tracked per claim, with alerts while there is still time to file.</p></div>
            <div className="dst-pstep dfw-rise"><span className="dst-pstep-d">5</span><h4>Margin reported</h4><p>True gross-to-net per line, so reported margin stops being provisional.</p></div>
          </div>

          <div className="dst-sec-cta" data-reveal>
            <a href="/darp-framework" className="dst-learn"><i></i> How Recover becomes Prevent <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-arrow-right" /></svg></a>
          </div>
        </div>
      </section>

      {/* ============================= RECOVERY ============================= */}
      <section className="section dst-rec-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow c-amber">Start here</span>
            <h2>Before you change anything, find out what it has already cost you</h2>
            <p>
              Everything above is prevention; it stops the next quarter leaking. It does nothing about the sales
              already made and the claims already settled, which are sitting in your history right now. So we start
              there, read-only, before there is anything to sign.
            </p>
          </div>

          <div className="dst-twomin" data-reveal>
            <span className="dst-twomin-n">2<em>min</em></span>
            <span className="dst-twomin-t">
              <b>This is how long it takes to understand how much can be recovered.</b>
              Send us the vendor agreements, the sales and claim history and the vendor statements. We test the full
              transaction population, not a sample, and come back with what is recoverable, split by heading, with the
              substantiation attached. Before any contract.
            </span>
          </div>

          <div className="dst-rec" data-reveal>
            <div className="dst-rc dfw-rise"><h4>Never claimed</h4><p>Sales that earned a claim nobody raised, and price protection never taken on repriced stock.</p></div>
            <div className="dst-rc is-2 dfw-rise"><h4>Short-paid</h4><p>Claims settled below entitlement, and rejections nobody resubmitted before the window shut.</p></div>
            <div className="dst-rc is-3 dfw-rise"><h4>Aged out</h4><p>Claims past their filing window. Reported honestly, including where recovery is now closed.</p></div>
            <div className="dst-rc is-4 dfw-rise"><h4>Given away</h4><p>Deviated prices billed with no authorised agreement, and expired agreements still honoured.</p></div>
          </div>

          <p className="dst-sectors" data-reveal>
            The same engine runs channel programmes for <b>electronic component distribution</b>, <b>industrial and
            MRO</b>, <b>electrical, data and security</b>, <b>IT and networking hardware</b>, and <b>medical and
            pharmaceutical distribution</b>.
          </p>

          <div className="dst-sec-cta" data-reveal>
            <a href="/#cta" className="btn btn-primary">Get an estimate for the channel <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg></a>
            <a href="/channel-rebates-manufacturers" className="btn btn-ghost">The manufacturer side</a>
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

      <ChannelRebatesDistributorsScripts />
    </div>
  );
}
