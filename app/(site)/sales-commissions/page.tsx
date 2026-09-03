import type { Metadata } from "next";
import SalesCommissionsScripts from "@/components/SalesCommissionsScripts";

export const metadata: Metadata = {
  title: "Sales Commissions and Incentives: computed, evidenced, visible | DataTwin",
  description:
    "Commission plans as sheets rather than spreadsheet formulas: quota attainment, tiers and accelerators, splits and overlays, draws and clawbacks, all computed from your own bookings. Reps see their own numbers. We recompute paid periods first, read-only, before anything changes.",
};

export default function SalesCommissionsPage() {
  return (
    <div className="rip-page is-sci">
      {/* ============================= HERO ============================= */}
      <section className="hero sci-hero">
        <div className="hero-aurora"></div>
        <div className="ledger-grid"></div>
        <div className="wrap sci-hero-grid">
          <div className="sci-hero-inner">
            <span className="eyebrow">Sales Commissions &amp; Incentives</span>
            <h1>
              Every rep keeps a shadow spreadsheet.
              <br />
              They are not <span className="grad-text">wrong</span> to.
            </h1>
            <p className="hero-desc">
              A commission plan is a set of conditions ending in a rate. DataTwin takes the plan as it was written,
              turns it into rows, and computes every statement from your own bookings and collections. Attainment,
              tiers, accelerators, splits, draws and clawbacks resolve together. We start by recomputing periods you
              have already paid, read-only, so you find out whether the shadow spreadsheets were right.
            </p>
            <div className="sci-chips">
              <span className="sci-chip"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-layers" /></svg>A plan change is a change to rows, not code</span>
              <span className="sci-chip"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-gauge" /></svg>Tiers behave as your plan defines them</span>
              <span className="sci-chip"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-lock" /></svg>Read-only until you turn computation on</span>
            </div>
            <div className="sci-hero-actions">
              <a href="/#cta" className="btn btn-primary">
                See what commissions have cost you{" "}
                <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg>
              </a>
              <a href="/darp-framework" className="btn btn-ghost">How Discover works</a>
            </div>
          </div>

          {/* hero graphic: the live statement — attainment, band, distance to next */}
          <div className="sci-statement" aria-hidden="true">
            <span className="sci-statement-lbl">Rep statement &middot; live</span>
            <div className="sci-statement-row"><span>Attainment</span><b>112%</b></div>
            <div className="sci-statement-track">
              <i className="is-fill" style={{ width: "74%" }}></i>
              <span className="sci-statement-band" style={{ left: "44%" }}></span>
              <span className="sci-statement-band" style={{ left: "68%" }}></span>
            </div>
            <div className="sci-statement-bands">
              <span>To 80%: 4%</span><span className="is-now">80&ndash;100%: 6%</span><span>Above: 9%</span>
            </div>
            <div className="sci-statement-next">
              <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-arrow-right" /></svg>
              <span>Next deal at the current band pays <b>9%</b></span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= ONE PLAN, TWO FORMS ============================= */}
      <section className="section sci-flow-sec">
        <div className="arc-glow g-blue"></div>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">One plan, two forms</span>
            <h2>A plan is a set of conditions ending in a rate</h2>
          </div>

          <div className="sci-flow" data-reveal>
            <div className="ledger-grid" aria-hidden="true"></div>
            <div className="sci-flow-head">
              <span className="sci-flow-title">The plan, as written &rarr; the same plan, as rows</span>
              <span className="sci-flow-live"><i></i> Live process</span>
            </div>

            <div className="sci-flow-body">
              <div className="sci-tree" aria-hidden="true">
                <span className="sci-tree-lbl">The plan, as it was written</span>
                <div className="sci-tree-cols">
                  <div className="sci-tree-col">
                    <div className="sci-node"><b>Rep</b><em>and role</em></div>
                  </div>
                  <div className="sci-tree-col">
                    <div className="sci-node"><b>Territory</b><em>region, segment, named</em></div>
                    <div className="sci-node"><b>Offering</b><em>product or line</em></div>
                    <div className="sci-node"><b>Credit</b><em>full, split, overlay</em></div>
                  </div>
                  <div className="sci-tree-col">
                    <div className="sci-node"><b>Attainment</b><em>against quota</em></div>
                    <div className="sci-node"><b>Rate form</b><em>flat, tiered, accelerated</em></div>
                    <div className="sci-node"><b>Period</b><em>month, quarter, year</em></div>
                  </div>
                  <div className="sci-tree-col">
                    <div className="sci-node is-leaf"><b>Rate</b><em>percent or per deal</em></div>
                    <div className="sci-node is-leaf"><b>Accelerator</b><em>above target</em></div>
                    <div className="sci-node is-leaf"><b>Draw</b><em>a floor, then recovered</em></div>
                  </div>
                </div>
              </div>

              <div className="sci-flow-wire" aria-hidden="true">
                <svg viewBox="0 0 60 200" preserveAspectRatio="none">
                  <path className="ln" d="M0,100 C30,100 30,100 60,100" />
                  <path className="fx" d="M0,100 C30,100 30,100 60,100" />
                </svg>
                <span className="sci-flow-wire-lbl">flattened to</span>
              </div>

              <div className="sci-rows" aria-hidden="true">
                <span className="sci-tree-lbl">The same plan, as rows</span>
                <div className="sci-rows-head">
                  <span>Territory</span><span>Offering</span><span>Credit</span><span>Attainment</span><span className="is-r">Rate</span>
                </div>
                <div className="sci-rows-row"><span>West</span><span>New business</span><span>Full</span><span>To 80%</span><span className="is-r">4%</span></div>
                <div className="sci-rows-row"><span>West</span><span>New business</span><span>Full</span><span>80 to 100%</span><span className="is-r">6%</span></div>
                <div className="sci-rows-row is-hi"><span>West</span><span>New business</span><span>Full</span><span>Above 100%</span><span className="is-r">9%</span></div>
                <div className="sci-rows-row"><span>West</span><span>Renewal</span><span>Full</span><span>Any</span><span className="is-r">1.5%</span></div>
                <div className="sci-rows-row"><span>West</span><span>New business</span><span>Split 50</span><span>Any</span><span className="is-r">half</span></div>
              </div>
            </div>

            <div className="sci-flow-foot">
              <span className="sci-flow-foot-k">Why this matters</span>
              <p>
                A plan change is a change to rows, not to code. <b>Which is why a mid-year plan revision can be
                modelled against last quarter before anyone signs it</b>, and applied the month it was agreed &mdash;
                read-only to start, nothing changes in your CRM or your payroll run.
              </p>
            </div>
          </div>

          <p className="sci-engine-note" data-reveal>
            Every stage runs on the same engine that powers the DARP Framework and FSCP: acquire, process, govern,
            report.
          </p>
        </div>
      </section>

      {/* ============================= AXES ============================= */}
      <section className="section sci-axes-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">The seven axes</span>
            <h2>Every commission plan varies along the same seven axes</h2>
            <p>
              A logistics payout, a distributor rebate and a sales commission are the same structure with different
              nouns. That is why one engine covers all three, and why your plan does not need a product built around
              it.
            </p>
          </div>

          <div className="sci-axes" data-reveal>
            <div className="sci-ax dfw-rise"><b>Who</b><h4>Which seller, in which role</h4><p>Rep, manager, overlay, partner-sourced. The role decides which plan applies.</p></div>
            <div className="sci-ax dfw-rise"><b>Where</b><h4>Which territory or segment</h4><p>Region, vertical, named-account list, or a house account nobody is paid on.</p></div>
            <div className="sci-ax dfw-rise"><b>What</b><h4>Which offering it applies to</h4><p>New business, renewal, expansion, services, hardware. Each often carries its own rate.</p></div>
            <div className="sci-ax dfw-rise"><b>Whose deal</b><h4>How the credit is split</h4><p>Full credit, a split between reps, an overlay paid alongside, or a manager rollup.</p></div>
            <div className="sci-ax dfw-rise"><b>When</b><h4>Which period does it land in</h4><p>Booking, invoice or cash date, and the quarter or year quota is measured over.</p></div>
            <div className="sci-ax dfw-rise"><b>How much</b><h4>Attainment against what</h4><p>Revenue, margin, units or ACV, measured against a quota that can itself change.</p></div>
            <div className="sci-ax dfw-rise"><b>How it pays</b><h4>What shape does the money take</h4><p>Flat percent, tiered, accelerated above target, capped, drawn against, or clawed back.</p></div>
            <div className="sci-ax is-leaf dfw-rise"><b>The leaf</b><h4>And at the end of every path, a rate</h4><p>Seven answers select one row. That row carries the rate. Nothing about the plan lives in code.</p></div>
          </div>
        </div>
      </section>

      {/* ============================= 1 PLAN SHEET ============================= */}
      <section className="section sci-stage-sec">
        <div className="wrap">
          <div className="sci-stage-head" data-reveal>
            <span className="sci-stage-n">1</span>
            <div>
              <h2>The plan becomes a sheet, and the sheet is tested before anyone is paid on it</h2>
              <p>
                A comp plan is written as a document, argued over, signed, and then retyped into formulas by one
                person in finance. The document and the formulas drift apart from the first amendment. Here the plan
                is rows, and the rows are tested before the first statement.
              </p>
            </div>
          </div>

          <div className="sci-subs" data-reveal>
            <div className="sci-sub dfw-rise">
              <span className="sci-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-doc" /></svg></span>
              <h3>Captured</h3><span className="sci-sub-s">From the plan, not retyped</span>
              <p>Rates, quotas, thresholds and dates read off the signed plan and its amendments, with each row tied back to the clause that set it.</p>
              <ul>
                <li>Plan documents, quota letters and amendments read together</li>
                <li>Every row traceable to the clause behind it</li>
                <li>Per-rep variations carried without a separate spreadsheet</li>
              </ul>
            </div>
            <div className="sci-sub dfw-rise">
              <span className="sci-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-search" /></svg></span>
              <h3>Tested</h3><span className="sci-sub-s">Before it goes live</span>
              <p>Checked for the faults that make a plan unpayable: bands that gap or overlap, targets nobody can reach, rates that contradict the plan.</p>
              <ul>
                <li>Attainment bands that leave a gap or overlap</li>
                <li>Thresholds no territory can reach on its own quota</li>
                <li>Rows that disagree with the signed plan, listed before payment</li>
              </ul>
            </div>
            <div className="sci-sub dfw-rise">
              <span className="sci-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-calendar" /></svg></span>
              <h3>Versioned</h3><span className="sci-sub-s">Plans change mid-year</span>
              <p>Quota changes, territory moves and mid-year revisions are dated. What was earned under the old plan stays as it was earned.</p>
              <ul>
                <li>Territory and quota changes effective from a date, not a file save</li>
                <li>Mid-year revisions recompute only the periods they touch</li>
                <li>The difference lands as an adjustment, with the reason attached</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 2 CREDITING ============================= */}
      <section className="section sci-stage-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="sci-stage-head" data-reveal>
            <span className="sci-stage-n">2</span>
            <div>
              <h2>Most disputes are about credit, not about rate</h2>
              <p>
                Reps rarely argue that the percentage is wrong. They argue that the deal was theirs, that the split
                was not what was agreed, or that the booking landed in the wrong quarter. Crediting is decided from
                the record rather than from whoever escalates hardest.
              </p>
            </div>
          </div>

          <div className="sci-subs" data-reveal>
            <div className="sci-sub dfw-rise">
              <span className="sci-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-schema" /></svg></span>
              <h3>Whose deal</h3><span className="sci-sub-s">Decided from the record</span>
              <p>Credit assigned from the account, territory and opportunity data you already hold, on the rules the plan states.</p>
              <ul>
                <li>Territory, named account and segment rules applied in order</li>
                <li>House and unassigned accounts handled explicitly, not by default</li>
                <li>Reassignments effective from a date, with the deals they move</li>
              </ul>
            </div>
            <div className="sci-sub dfw-rise">
              <span className="sci-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-swap" /></svg></span>
              <h3>Splits and overlays</h3><span className="sci-sub-s">More than one person paid</span>
              <p>A deal split between reps, an overlay specialist paid alongside, and a manager rollup are all computed from the same booking.</p>
              <ul>
                <li>Splits by percentage or by line, as the plan defines them</li>
                <li>Overlay and specialist credit that does not reduce the rep credit</li>
                <li>Manager rollup computed from the team, not re-keyed</li>
              </ul>
            </div>
            <div className="sci-sub dfw-rise">
              <span className="sci-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-calendar" /></svg></span>
              <h3>Which period</h3><span className="sci-sub-s">Booking, invoice or cash</span>
              <p>A deal credited on booking pays earlier than one credited on cash. The plan says which, and the computation follows it rather than convention.</p>
              <ul>
                <li>Credit date driven by the plan, per offering if it differs</li>
                <li>Amendments, upsells and cancellations moved to the right period</li>
                <li>Deals crossing a period boundary held to one side, not both</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 3 COMPUTATION ============================= */}
      <section className="section sci-stage-sec">
        <div className="arc-glow g-blue"></div>
        <div className="wrap">
          <div className="sci-stage-head" data-reveal>
            <span className="sci-stage-n">3</span>
            <div>
              <h2>Then the computation, in the shape your plan actually uses</h2>
              <p>
                Flat percentages are easy and rare. Real plans mix a tiered rate on new business with a flat rate on
                renewals, an accelerator above target, a cap somewhere, and a draw underneath it all.
              </p>
            </div>
          </div>

          <div className="sci-subs" data-reveal>
            <div className="sci-sub dfw-rise">
              <span className="sci-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-gauge" /></svg></span>
              <h3>Attainment</h3><span className="sci-sub-s">Against a moving quota</span>
              <p>Measured on the basis the plan names, against a quota that can change mid-period, with the change carried through the bands.</p>
              <ul>
                <li>Revenue, margin, units or ACV, as the plan defines attainment</li>
                <li>Quota changes applied from their effective date</li>
                <li>Prior-period adjustments flowed into the right attainment</li>
              </ul>
            </div>
            <div className="sci-sub dfw-rise">
              <span className="sci-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-layers" /></svg></span>
              <h3>Tiers and accelerators</h3><span className="sci-sub-s">As your plan defines them</span>
              <p>A band pays either on all attainment or only on what falls inside it. We do not impose a convention, because plans genuinely differ.</p>
              <ul>
                <li>Whole-attainment or marginal, set per plan rather than globally</li>
                <li>Accelerators above target, and caps where the plan sets one</li>
                <li>The band applied shown next to the one below it</li>
              </ul>
            </div>
            <div className="sci-sub dfw-rise">
              <span className="sci-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-recover" /></svg></span>
              <h3>Draws and clawbacks</h3><span className="sci-sub-s">Floors and reversals</span>
              <p>A draw is a floor recovered later, not a rate. A clawback reverses commission when the deal it rested on does not hold.</p>
              <ul>
                <li>Recoverable and non-recoverable draws tracked to their balance</li>
                <li>Clawback triggered by cancellation, churn or non-payment</li>
                <li>Recovery scheduled rather than taken in one shock</li>
              </ul>
            </div>
          </div>

          <div className="sci-strip" data-reveal>
            <span className="sci-strip-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-gauge" /></svg></span>
            <div>
              <b>Marginal or whole-attainment is a plan question, not a product setting.</b>
              <span>
                At 110% of quota, does the accelerator pay on all 110 or only on the last 10? Both are written into
                real plans, both are correct somewhere, and the difference is the most common cause of a commission
                dispute. We read it from your plan document and show which reading was used on every statement.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 4 THE STATEMENT ============================= */}
      <section className="section sci-stage-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="sci-stage-head" data-reveal>
            <span className="sci-stage-n">4</span>
            <div>
              <h2>The statement is the product, and it should answer the question before it is asked</h2>
              <p>
                A statement showing a single number invites a call. A statement showing the deals, the attainment, the
                band and the distance to the next one answers most of what the rep wanted to know, and turns the rest
                into a specific question.
              </p>
            </div>
          </div>

          <div className="sci-subs" data-reveal>
            <div className="sci-sub dfw-rise">
              <span className="sci-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-gauge" /></svg></span>
              <h3>Their own numbers</h3><span className="sci-sub-s">Live, not at quarter end</span>
              <p>Attainment so far, the band it currently falls in, accrued commission, and what the next deal is worth. Visible while the rep can still act on it.</p>
              <ul>
                <li>Running attainment and accrued commission, updated as deals close</li>
                <li>The current band and the distance to the next one</li>
                <li>What the next unit of attainment pays, at the current band</li>
              </ul>
            </div>
            <div className="sci-sub dfw-rise">
              <span className="sci-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-doc" /></svg></span>
              <h3>The workings</h3><span className="sci-sub-s">Deal by deal</span>
              <p>Every deal that contributed, the credit applied, the rate that paid it, and any split or clawback against it.</p>
              <ul>
                <li>Each deal with its credit, rate and the row that produced it</li>
                <li>Splits and overlays shown from both sides</li>
                <li>Adjustments and clawbacks carrying the event that caused them</li>
              </ul>
            </div>
            <div className="sci-sub dfw-rise">
              <span className="sci-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-user" /></svg></span>
              <h3>Queries in one place</h3><span className="sci-sub-s">Not in an inbox</span>
              <p>A rep disputes a deal rather than a total, the evidence is already attached, and the answer stays with the period it affects.</p>
              <ul>
                <li>Disputes raised against a specific deal, not a statement total</li>
                <li>Manager and finance see the same record the rep sees</li>
                <li>Resolution recorded against the period, and the plan row</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= PREVENT ============================= */}
      <section className="section sci-prevent-sec">
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Then it runs forward</span>
            <h2>The same sheets run forward, before the statement goes out</h2>
            <p>
              Prevent is not a second build. The rows that recomputed your history are the rows that compute next
              quarter. That is where a one-off correction starts compounding.
            </p>
          </div>

          <div className="sci-prevent" data-reveal>
            <div className="sci-pstep dfw-rise"><span className="sci-pstep-d">1</span><h4>Plan agreed</h4><p>A new plan becomes rows and is tested for gaps and unreachable targets before it is live.</p></div>
            <div className="sci-pstep dfw-rise"><span className="sci-pstep-d">2</span><h4>Credit assigned</h4><p>Every booking credited on the plan rules, with splits and overlays resolved at the same time.</p></div>
            <div className="sci-pstep dfw-rise"><span className="sci-pstep-d">3</span><h4>Commission computed</h4><p>Attainment measured, bands applied, draws and clawbacks resolved in one pass.</p></div>
            <div className="sci-pstep dfw-rise"><span className="sci-pstep-d">4</span><h4>Checked and approved</h4><p>Outliers, large swings and negative statements surfaced for a person before the run.</p></div>
            <div className="sci-pstep dfw-rise"><span className="sci-pstep-d">5</span><h4>Paid and posted</h4><p>One computation behind the payroll file, the accrual and the rep statement.</p></div>
          </div>

          <div className="sci-sec-cta" data-reveal>
            <a href="/darp-framework" className="sci-learn"><i></i> How Recover becomes Prevent <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-arrow-right" /></svg></a>
          </div>
        </div>
      </section>

      {/* ============================= COMPARISON ============================= */}
      <section className="section sci-cmp-sec">
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">What changes</span>
            <h2>What changes, honestly stated</h2>
            <p>
              Not a longer list of features. A different distribution of who does what, and when a difference is
              found.
            </p>
          </div>

          <div className="sci-cmp" data-reveal>
            <table>
              <thead>
                <tr><th>Where it shows</th><th>How commissions run today</th><th>How they run on DataTwin</th></tr>
              </thead>
              <tbody>
                <tr><td>The plan</td><td>A signed document, and a workbook that no longer matches it</td><td>Rows tied to the clause they came from, tested before anyone is paid on them</td></tr>
                <tr><td>Crediting</td><td>Settled by whoever escalates hardest</td><td>Assigned from the account and territory record, on the rules the plan states</td></tr>
                <tr><td>Tiers</td><td>Whichever reading the formula happened to encode</td><td>Marginal or whole-attainment as the plan defines it, and the reading is visible</td></tr>
                <tr><td>Visibility</td><td>A number at quarter end, and a shadow spreadsheet all quarter</td><td>Live attainment, current band and the value of the next deal</td></tr>
                <tr><td>Disputes</td><td>Rebuilt by hand, often to a different answer</td><td>Answered from the retained workings, against a named deal</td></tr>
                <tr><td>Plan changes</td><td>A new workbook, and history quietly rewritten</td><td>Versioned and dated; a revision recomputes only what it touches</td></tr>
                <tr><td>Audit and accrual</td><td>A quarter-end reconstruction nobody enjoys</td><td>Accrual computed from the same rows that pay, across the full population</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================= RECOVERY ============================= */}
      <section className="section sci-rec-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow c-amber">Start here</span>
            <h2>Before you change the plan, find out what the last one cost you</h2>
            <p>
              Everything above is prevention; it stops the next quarter going wrong. It does nothing about the
              quarters already paid, which are sitting in your commission history right now. So we start there,
              read-only, before there is anything to sign.
            </p>
          </div>

          <div className="sci-twomin" data-reveal>
            <span className="sci-twomin-n">2<em>min</em></span>
            <span className="sci-twomin-t">
              <b>This is how long it takes to understand how much can be recovered.</b>
              Send us the plan documents and the booking history. We recompute every rep and every period across the
              full population, not a sample, and come back with what is recoverable, split by heading. Before any
              contract.
            </span>
          </div>

          <div className="sci-rec" data-reveal>
            <div className="sci-rc dfw-rise"><h4>Overpaid</h4><p>The wrong band applied. An accelerator paid below target. A cap the workbook never enforced.</p></div>
            <div className="sci-rc is-2 dfw-rise"><h4>Underpaid</h4><p>Deals credited to nobody. Splits never applied. Quota changes agreed and never carried through.</p></div>
            <div className="sci-rc is-3 dfw-rise"><h4>Paid twice</h4><p>The same deal credited to a rep and an overlay as if both were the primary earner.</p></div>
            <div className="sci-rc is-4 dfw-rise"><h4>Never recovered</h4><p>Draws that were never repaid, and clawbacks on cancelled deals that nobody raised.</p></div>
          </div>

          <p className="sci-sectors" data-reveal>
            The same engine runs incentive plans for <b>software and SaaS</b>, <b>insurance agency and broker
            networks</b>, <b>bank and NBFC sourcing teams</b>, <b>pharma and medical field forces</b>, and <b>real
            estate</b>. The nouns change; the seven axes do not.
          </p>

          <div className="sci-sec-cta" data-reveal>
            <a href="/#cta" className="btn btn-primary">Get an estimate for commissions <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg></a>
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
                Working from the booking and commission history your systems already hold, we run our discovery.
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

      <SalesCommissionsScripts />
    </div>
  );
}
