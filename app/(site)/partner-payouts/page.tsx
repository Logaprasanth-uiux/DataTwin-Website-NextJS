import type { Metadata } from "next";
import PartnerPayoutsScripts from "@/components/PartnerPayoutsScripts";

export const metadata: Metadata = {
  title: "Partner Payouts: every scheme, computed and evidenced | DataTwin",
  description:
    "Partner payout schemes as sheets rather than code: fixed, variable, tiered, minimum guarantee and incentive, with overlap and precedence resolved, deductions netted and a statement each partner can see. We recompute your paid history first, read-only, before anything changes.",
};

export default function PartnerPayoutsPage() {
  return (
    <div className="rip-page is-ppo">
      {/* ============================= HERO ============================= */}
      <section className="hero ppo-hero">
        <div className="hero-aurora"></div>
        <div className="ledger-grid"></div>
        <div className="wrap ppo-hero-grid">
          <div className="ppo-hero-inner">
            <span className="eyebrow">Partner Payouts</span>
            <h1>
              Your contracts are not complicated.
              <br />
              Paying them <span className="grad-text">by hand</span> is.
            </h1>
            <p className="hero-desc">
              A payout scheme is a set of conditions ending in a rate. DataTwin takes the scheme as it was agreed,
              turns it into rows, and computes every partner&rsquo;s payout from your own volume and activity data.
              Tiers, slabs, guarantees, incentives and deductions all resolve in one pass. We start by recomputing
              periods you have already paid, read-only, so you see what the spreadsheet got wrong before you change
              anything.
            </p>
            <div className="ppo-chips">
              <span className="ppo-chip"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-layers" /></svg>A new scheme is a new sheet, not a new build</span>
              <span className="ppo-chip"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-gauge" /></svg>Slabs behave as your contract defines them</span>
              <span className="ppo-chip"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-lock" /></svg>Read-only until you turn computation on</span>
            </div>
            <div className="ppo-hero-actions">
              <a href="/#cta" className="btn btn-primary">
                See what payouts have cost you{" "}
                <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg>
              </a>
              <a href="/darp-framework" className="btn btn-ghost">How Discover works</a>
            </div>
          </div>

          {/* hero graphic: gross payout down to net, plus one-scheme-one-sheet */}
          <div className="ppo-stack" aria-hidden="true">
            <div className="ppo-stack-bar is-gross">
              <span className="ppo-stack-lbl">Gross payout</span>
              <span className="ppo-stack-note">scheme &times; measure</span>
            </div>
            <div className="ppo-stack-step"><i>&minus;</i> Recoveries &amp; advances</div>
            <div className="ppo-stack-step"><i>&minus;</i> Withholding, per class</div>
            <div className="ppo-stack-bar is-net">
              <span className="ppo-stack-lbl">Net to the partner</span>
              <span className="ppo-stack-note">one computation, books and bank</span>
            </div>
            <div className="ppo-stack-sheets">
              <span>Fixed</span><span>Variable</span><span>Tiered</span><span>Guarantee</span><span>Incentive</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= ONE SCHEME, TWO FORMS ============================= */}
      <section className="section ppo-flow-sec">
        <div className="arc-glow g-blue"></div>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">One scheme, two forms</span>
            <h2>A scheme is a set of conditions ending in a rate</h2>
          </div>

          <div className="ppo-flow" data-reveal>
            <div className="ledger-grid" aria-hidden="true"></div>
            <div className="ppo-flow-head">
              <span className="ppo-flow-title">The scheme, as agreed &rarr; the same scheme, as rows</span>
              <span className="ppo-flow-live"><i></i> Live process</span>
            </div>

            <div className="ppo-flow-body">
              <div className="ppo-tree" aria-hidden="true">
                <span className="ppo-tree-lbl">The scheme, as it was agreed</span>
                <div className="ppo-tree-cols">
                  <div className="ppo-tree-col">
                    <div className="ppo-node"><b>Customer</b><em>and business model</em></div>
                  </div>
                  <div className="ppo-tree-col">
                    <div className="ppo-node"><b>Territory</b><em>station, cluster, block</em></div>
                    <div className="ppo-node"><b>Category</b><em>and offering</em></div>
                    <div className="ppo-node"><b>Resource class</b><em>the asset used</em></div>
                  </div>
                  <div className="ppo-tree-col">
                    <div className="ppo-node"><b>Partner class</b><em>direct or vendor</em></div>
                    <div className="ppo-node"><b>Rate form</b><em>fixed, variable, tiered</em></div>
                    <div className="ppo-node"><b>Period</b><em>month, day, slot, season</em></div>
                  </div>
                  <div className="ppo-tree-col">
                    <div className="ppo-node is-leaf"><b>Rate</b><em>per unit or per day</em></div>
                    <div className="ppo-node is-leaf"><b>Slab rate</b><em>by band</em></div>
                    <div className="ppo-node is-leaf"><b>Guarantee</b><em>a floor, not a rate</em></div>
                  </div>
                </div>
              </div>

              <div className="ppo-flow-wire" aria-hidden="true">
                <svg viewBox="0 0 60 200" preserveAspectRatio="none">
                  <path className="ln" d="M0,100 C30,100 30,100 60,100" />
                  <path className="fx" d="M0,100 C30,100 30,100 60,100" />
                </svg>
                <span className="ppo-flow-wire-lbl">flattened to</span>
              </div>

              <div className="ppo-rows" aria-hidden="true">
                <span className="ppo-tree-lbl">The same scheme, as rows</span>
                <div className="ppo-rows-head">
                  <span>Territory</span><span>Category</span><span>Class</span><span>Basis</span><span className="is-r">Rate</span>
                </div>
                <div className="ppo-rows-row"><span>Cluster 1</span><span>Category A</span><span>Direct</span><span>Variable</span><span className="is-r">15</span></div>
                <div className="ppo-rows-row is-hi"><span>Cluster 1</span><span>Category A</span><span>Direct</span><span>Tier, slab 1</span><span className="is-r">10</span></div>
                <div className="ppo-rows-row"><span>Cluster 1</span><span>Category A</span><span>Direct</span><span>Tier, slab 2</span><span className="is-r">11</span></div>
                <div className="ppo-rows-row"><span>Cluster 1</span><span>Category A</span><span>Vendor</span><span>Fixed</span><span className="is-r">16</span></div>
                <div className="ppo-rows-row"><span>Cluster 2</span><span>Category B</span><span>Direct</span><span>Guarantee</span><span className="is-r">floor</span></div>
              </div>
            </div>

            <div className="ppo-flow-foot">
              <span className="ppo-flow-foot-k">Why this matters</span>
              <p>
                A new scheme is a new sheet, not a new build. <b>Six commercially different schemes are six sheets on
                one engine</b>, which is why the second scheme does not wait behind an IT queue &mdash; read-only to
                start, nothing changes in your payout run or your ledger.
              </p>
            </div>
          </div>

          <p className="ppo-engine-note" data-reveal>
            Every stage runs on the same engine that powers the DARP Framework and FSCP: acquire, process, govern,
            report.
          </p>
        </div>
      </section>

      {/* ============================= AXES ============================= */}
      <section className="section ppo-axes-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">The seven axes</span>
            <h2>Every payout scheme varies along the same seven axes</h2>
            <p>
              Different industries use different nouns. The structure underneath does not change, which is why one
              engine covers a fleet operator, a distributor and an insurer without a rewrite for each.
            </p>
          </div>

          <div className="ppo-axes" data-reveal>
            <div className="ppo-ax dfw-rise"><b>Who</b><h4>Which partner, on what terms</h4><p>Customer, business model, and the partner class: direct, vendor, franchisee, agent.</p></div>
            <div className="ppo-ax dfw-rise"><b>Where</b><h4>Where does geography bite</h4><p>Station, cluster, block, region, or nowhere at all when a scheme runs nationally.</p></div>
            <div className="ppo-ax dfw-rise"><b>What</b><h4>Which offering it applies to</h4><p>Category, product, or a bundle of products treated as one line in the scheme.</p></div>
            <div className="ppo-ax dfw-rise"><b>With what</b><h4>Which resource did the work</h4><p>Vehicle class, machine, seat, licence. The asset changes the rate.</p></div>
            <div className="ppo-ax dfw-rise"><b>When</b><h4>Over what window</h4><p>Month, day, shift or slot, and named periods such as a festival or campaign.</p></div>
            <div className="ppo-ax dfw-rise"><b>How much</b><h4>What is the rate applied to</h4><p>Units, volume, days present, value shipped, or a band over any of those.</p></div>
            <div className="ppo-ax dfw-rise"><b>How it pays</b><h4>What shape does the money take</h4><p>Fixed, variable, tiered or slabbed, minimum guarantee, one-off incentive.</p></div>
            <div className="ppo-ax is-leaf dfw-rise"><b>The leaf</b><h4>And at the end of every path, a rate</h4><p>Seven answers select one row. That row carries the rate. Nothing about the scheme lives in code.</p></div>
          </div>
        </div>
      </section>

      {/* ============================= 1 SCHEME SHEET ============================= */}
      <section className="section ppo-stage-sec">
        <div className="wrap">
          <div className="ppo-stage-head" data-reveal>
            <span className="ppo-stage-n">1</span>
            <div>
              <h2>The scheme becomes a sheet, and the sheet is checked before it pays</h2>
              <p>
                A contract is negotiated as a tree and signed as a document. Neither form can pay anybody. It becomes
                payable when every path through it is a row, and the rows are tested against each other before the
                first run rather than after the first dispute.
              </p>
            </div>
          </div>

          <div className="ppo-subs" data-reveal>
            <div className="ppo-sub dfw-rise">
              <span className="ppo-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-doc" /></svg></span>
              <h3>Captured</h3><span className="ppo-sub-s">From the contract, not retyped</span>
              <p>Rates, conditions and effective dates read off the signed agreement and turned into rows, with the source document kept against them.</p>
              <ul>
                <li>Annexures, rate cards and amendments read in one pipeline</li>
                <li>Every row traceable back to the clause it came from</li>
                <li>Effective dates carried, so a rate change does not overwrite history</li>
              </ul>
            </div>
            <div className="ppo-sub dfw-rise">
              <span className="ppo-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-search" /></svg></span>
              <h3>Tested</h3><span className="ppo-sub-s">Before it goes live</span>
              <p>The sheet is checked for the faults that quietly double or halve a payout: gaps, overlaps, duplicates and conditions that can never be met.</p>
              <ul>
                <li>Duplicate rows, and rows that differ only in the rate</li>
                <li>Bands that leave a gap, or overlap so two rates both apply</li>
                <li>Conditions no partner can satisfy, flagged rather than paid</li>
              </ul>
            </div>
            <div className="ppo-sub dfw-rise">
              <span className="ppo-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-calendar" /></svg></span>
              <h3>Versioned</h3><span className="ppo-sub-s">Rates change, history should not</span>
              <p>Each version is dated. A rate backdated to January recomputes the periods it touches, instead of silently changing what was paid.</p>
              <ul>
                <li>Retrospective changes recompute the periods they touch</li>
                <li>The difference lands as arrears or a recovery, with the reason</li>
                <li>What was paid under the old rate stays visible</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 2 THE MEASURE ============================= */}
      <section className="section ppo-stage-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="ppo-stage-head" data-reveal>
            <span className="ppo-stage-n">2</span>
            <div>
              <h2>The measure has to be right before the rate matters</h2>
              <p>
                A correct rate applied to a wrong count pays the wrong amount, and nobody notices because the rate
                looks right. The volume, the days and the value all come from your own systems and are reconciled
                before anything is multiplied.
              </p>
            </div>
          </div>

          <div className="ppo-subs" data-reveal>
            <div className="ppo-sub dfw-rise">
              <span className="ppo-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-schema" /></svg></span>
              <h3>Counted</h3><span className="ppo-sub-s">From your systems, not a summary</span>
              <p>Units, trips, shipments, disbursals, policies or hours taken from the transaction record itself, at the grain the scheme is written at.</p>
              <ul>
                <li>Counted at the grain the scheme uses, not rolled up first</li>
                <li>Cancellations, returns and reversals removed from the count</li>
                <li>The same unit never counted under two territories</li>
              </ul>
            </div>
            <div className="ppo-sub dfw-rise">
              <span className="ppo-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-check" /></svg></span>
              <h3>Qualified</h3><span className="ppo-sub-s">What actually counts</span>
              <p>Not every unit qualifies. Exclusions in the contract are applied to the measure before any rate is chosen.</p>
              <ul>
                <li>Excluded categories, customers and channels removed</li>
                <li>Attendance and activity thresholds evaluated per partner</li>
                <li>Disputed and cancelled units held out until they settle</li>
              </ul>
            </div>
            <div className="ppo-sub dfw-rise">
              <span className="ppo-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-swap" /></svg></span>
              <h3>Reconciled</h3><span className="ppo-sub-s">Against the source of truth</span>
              <p>The measure is agreed against the operating system before payout, so nobody is arguing about the count afterwards.</p>
              <ul>
                <li>Volume agreed against the operating system, not the payout sheet</li>
                <li>Differences listed by partner and period, with the records behind them</li>
                <li>The agreed count frozen once the period closes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 3 COMPUTATION ============================= */}
      <section className="section ppo-stage-sec">
        <div className="arc-glow g-blue"></div>
        <div className="wrap">
          <div className="ppo-stage-head" data-reveal>
            <span className="ppo-stage-n">3</span>
            <div>
              <h2>Then the computation, in the shape your contract actually uses</h2>
              <p>
                Most payout tools support one or two rate forms well and bend the rest to fit. Real contracts mix them
                inside a single period, and the mixing is the part that goes wrong.
              </p>
            </div>
          </div>

          <div className="ppo-subs" data-reveal>
            <div className="ppo-sub dfw-rise">
              <span className="ppo-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-cash" /></svg></span>
              <h3>Fixed and variable</h3><span className="ppo-sub-s">The straightforward half</span>
              <p>A rate per day, per unit or per period, applied to the qualified measure. This part is rarely where money is lost, and it is where most tools stop.</p>
              <ul>
                <li>Per unit, per day, per trip, per policy or per period</li>
                <li>Multiple rates in one period, each with its own window</li>
                <li>Currency and rounding handled at the rate, not at the total</li>
              </ul>
            </div>
            <div className="ppo-sub dfw-rise">
              <span className="ppo-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-layers" /></svg></span>
              <h3>Tiers and slabs</h3><span className="ppo-sub-s">As your contract defines them</span>
              <p>A band pays either on the whole volume or only on the units inside it. We do not impose a convention, because contracts genuinely differ.</p>
              <ul>
                <li>Whole-volume or marginal, set per scheme rather than globally</li>
                <li>Retrospective tiers that reprice earlier volume when a band is hit</li>
                <li>The band that was applied shown next to the one below it</li>
              </ul>
            </div>
            <div className="ppo-sub dfw-rise">
              <span className="ppo-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-recover" /></svg></span>
              <h3>Guarantees and incentives</h3><span className="ppo-sub-s">Floors, cliffs and one-offs</span>
              <p>A guarantee is a floor evaluated over a period, not a rate. An incentive often has a cliff: one unit short and the whole component is zero.</p>
              <ul>
                <li>Guarantee compared against the computed total, then topped up</li>
                <li>Cliffs shown as a distance to the threshold, before the period ends</li>
                <li>Seasonal and campaign incentives applied only inside their window</li>
              </ul>
            </div>
          </div>

          <div className="ppo-strip" data-reveal>
            <span className="ppo-strip-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-gauge" /></svg></span>
            <div>
              <b>Marginal or whole-slab is a contract question, not a product setting.</b>
              <span>
                Ask whether volume of 70 against bands of 1 to 60 and 61 to 100 pays the higher rate on all 70 or on
                the last 10. Both are common, both are correct somewhere, and the difference is the single most
                frequent cause of a payout dispute. We read it from your contract and show which reading was used.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 4 OVERLAP ============================= */}
      <section className="section ppo-stage-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="ppo-stage-head" data-reveal>
            <span className="ppo-stage-n">4</span>
            <div>
              <h2>One partner can qualify under four schemes in the same month</h2>
              <p>
                Base payout, a seasonal incentive, an attendance bonus and a minimum guarantee can all apply to the
                same partner in the same period. Whether they stack, whether the best one wins, or whether the
                guarantee absorbs the rest is a commercial decision. It should be recorded, not improvised.
              </p>
            </div>
          </div>

          <div className="ppo-overlap" data-reveal>
            <div className="ppo-overlap-schemes">
              <span className="ppo-overlap-s">Base payout</span>
              <span className="ppo-overlap-s">Seasonal incentive</span>
              <span className="ppo-overlap-s">Attendance bonus</span>
              <span className="ppo-overlap-s">Minimum guarantee</span>
            </div>
            <div className="ppo-overlap-rule"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-flow" /></svg><span>Stack &middot; best-of &middot; absorb &mdash; set once, per pair</span></div>
            <div className="ppo-overlap-out">One payment, with the workings kept</div>
          </div>

          <div className="ppo-subs" data-reveal>
            <div className="ppo-sub dfw-rise">
              <span className="ppo-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-flow" /></svg></span>
              <h3>Precedence</h3><span className="ppo-sub-s">Decided once, applied every time</span>
              <p>The order in which schemes resolve is configured with you and then applied identically to every partner and every period.</p>
              <ul>
                <li>Stack, best-of, or absorb, set per pair of schemes</li>
                <li>The same rule applied to every partner, with no local exceptions</li>
                <li>A change of rule recomputes rather than applying from now on</li>
              </ul>
            </div>
            <div className="ppo-sub dfw-rise">
              <span className="ppo-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-search" /></svg></span>
              <h3>No double counting</h3><span className="ppo-sub-s">One unit, one payment</span>
              <p>The same volume paid under two overlapping schemes is one of the largest and quietest leaks in any payout run.</p>
              <ul>
                <li>Every unit tagged with the scheme that paid for it</li>
                <li>Units claimed by two schemes surfaced before payment</li>
                <li>Overlapping territories and categories resolved explicitly</li>
              </ul>
            </div>
            <div className="ppo-sub dfw-rise">
              <span className="ppo-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-doc" /></svg></span>
              <h3>The workings, kept</h3><span className="ppo-sub-s">Not just the answer</span>
              <p>For every partner and period, the computation is retained: which rows applied, in what order, against what measure.</p>
              <ul>
                <li>Every payout traceable to the rows that produced it</li>
                <li>The rejected alternatives kept alongside the applied one</li>
                <li>A dispute answered from the record rather than rebuilt</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= 5 DEDUCTIONS ============================= */}
      <section className="section ppo-stage-sec">
        <div className="wrap">
          <div className="ppo-stage-head" data-reveal>
            <span className="ppo-stage-n">5</span>
            <div>
              <h2>What comes off, before anything goes out</h2>
              <p>
                The gross payout is not what the partner receives. Advances, damages, shortages, asset recoveries and
                withholding all sit between the two, and each one is a place where a partner is either short-changed
                or overpaid without anyone intending it.
              </p>
            </div>
          </div>

          <div className="ppo-subs" data-reveal>
            <div className="ppo-sub dfw-rise">
              <span className="ppo-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-recover" /></svg></span>
              <h3>Recoveries</h3><span className="ppo-sub-s">Netted, with a reason</span>
              <p>Advances, equipment, damages, shortages and penalties netted against the payout, each carrying the event that caused it.</p>
              <ul>
                <li>Advances recovered on the schedule that was agreed</li>
                <li>Damages and shortages linked to the incident record</li>
                <li>Nothing deducted without a reference the partner can check</li>
              </ul>
            </div>
            <div className="ppo-sub dfw-rise">
              <span className="ppo-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-tax" /></svg></span>
              <h3>Withholding</h3><span className="ppo-sub-s">At the right rate, per class</span>
              <p>Tax withheld according to the partner class and the applicable rate, with certificates produced rather than requested later.</p>
              <ul>
                <li>Rate driven by partner class and registration status</li>
                <li>Certificates generated with the payout, not at year end</li>
                <li>Thresholds tracked across the year rather than per payment</li>
              </ul>
            </div>
            <div className="ppo-sub dfw-rise">
              <span className="ppo-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-cash" /></svg></span>
              <h3>The payment file</h3><span className="ppo-sub-s">Ready to run</span>
              <p>The bank file and the accounting entry come from one computation, so the books and the bank cannot disagree.</p>
              <ul>
                <li>One computation behind the payment file and the journal</li>
                <li>Entity, cost centre and account determined from the scheme</li>
                <li>Failed and returned payments traced back to the payout line</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= PARTNER PORTAL ============================= */}
      <section className="section ppo-portal-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">The partner portal</span>
            <h2>The partner stops calling to ask how the number was reached</h2>
            <p>
              Most of a payout team&rsquo;s month is not computing payouts. It is explaining them. A partner who can
              see their own volume, their own band and the distance to the next one asks a different and much shorter
              question.
            </p>
          </div>

          <div className="ppo-subs" data-reveal>
            <div className="ppo-sub dfw-rise">
              <span className="ppo-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-gauge" /></svg></span>
              <h3>Their own numbers</h3><span className="ppo-sub-s">Live, not at month end</span>
              <p>Volume so far, the band it currently falls in, and what has accrued. Visible during the period, when the partner can still act on it.</p>
              <ul>
                <li>Running volume and accrued payout, updated as data arrives</li>
                <li>The current band and the distance to the next one</li>
                <li>Attendance and qualifying thresholds shown against the target</li>
              </ul>
            </div>
            <div className="ppo-sub dfw-rise">
              <span className="ppo-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-doc" /></svg></span>
              <h3>The statement</h3><span className="ppo-sub-s">Workings included</span>
              <p>Every payout line with the scheme, the rate, the measure and the deductions that produced it. The same view your team sees.</p>
              <ul>
                <li>Gross, deductions and net, each with the rows behind them</li>
                <li>Downloadable statement per period, per partner</li>
                <li>Withholding certificates attached to the period they cover</li>
              </ul>
            </div>
            <div className="ppo-sub dfw-rise">
              <span className="ppo-sub-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-user" /></svg></span>
              <h3>Queries in one place</h3><span className="ppo-sub-s">Not in an inbox</span>
              <p>A partner disputes a line rather than an amount, your team answers against the record, and the exchange stays attached to the payout.</p>
              <ul>
                <li>Disputes raised against a specific line, not a total</li>
                <li>The evidence already attached when the query opens</li>
                <li>Resolution recorded against the period it affects</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= PREVENT ============================= */}
      <section className="section ppo-prevent-sec">
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Then it runs forward</span>
            <h2>The same sheets run forward, before the money leaves</h2>
            <p>
              Prevent is not a second build. The rows that recomputed your history are the rows that compute the next
              run. That is where a one-off recovery starts compounding.
            </p>
          </div>

          <div className="ppo-prevent" data-reveal>
            <div className="ppo-pstep dfw-rise"><span className="ppo-pstep-d">1</span><h4>Scheme agreed</h4><p>A new scheme becomes rows and is tested for gaps and overlaps before it is live.</p></div>
            <div className="ppo-pstep dfw-rise"><span className="ppo-pstep-d">2</span><h4>Measure agreed</h4><p>Volume and activity reconciled to the operating system and frozen for the period.</p></div>
            <div className="ppo-pstep dfw-rise"><span className="ppo-pstep-d">3</span><h4>Payout computed</h4><p>Every scheme resolved in the agreed order, tiers and guarantees together.</p></div>
            <div className="ppo-pstep dfw-rise"><span className="ppo-pstep-d">4</span><h4>Checked and approved</h4><p>Outliers and swings against prior periods surfaced before approval, not after payment.</p></div>
            <div className="ppo-pstep dfw-rise"><span className="ppo-pstep-d">5</span><h4>Paid and posted</h4><p>One computation behind the bank file, the journal and the partner statement.</p></div>
          </div>

          <div className="ppo-sec-cta" data-reveal>
            <a href="/darp-framework" className="ppo-learn"><i></i> How Recover becomes Prevent <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-arrow-right" /></svg></a>
          </div>
        </div>
      </section>

      {/* ============================= AGENTS ============================= */}
      <section className="section ppo-agents-sec">
        <div className="arc-glow g-violet"></div>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow c-violet">Under the hood</span>
            <h2>What is actually doing the work</h2>
            <p>
              Specialised agents with narrow, defined duties, coordinated by an orchestration agent. Deterministic
              rules run wherever something posts to the books. Nothing posts because a model was confident.
            </p>
          </div>

          <div className="ppo-agents" data-reveal>
            <div className="ppo-agent dfw-rise">
              <span className="ppo-agent-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-doc" /></svg></span>
              <h3>Scheme Agent</h3><span className="ppo-agent-s">Reading the agreement</span>
              <p>Contracts, annexures and rate cards read into rows, including scanned and amended documents, with each row tied to its clause.</p>
            </div>
            <div className="ppo-agent dfw-rise">
              <span className="ppo-agent-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-schema" /></svg></span>
              <h3>Computation Agent</h3><span className="ppo-agent-s">Applying the rows</span>
              <p>Measure qualified, schemes resolved in order, tiers and guarantees applied, and the workings kept against every payout line.</p>
            </div>
            <div className="ppo-agent dfw-rise">
              <span className="ppo-agent-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-search" /></svg></span>
              <h3>Exception Agent</h3><span className="ppo-agent-s">Finding what looks wrong</span>
              <p>Swings against prior periods, partners near a cliff, units claimed twice and deductions without a source, surfaced before payment.</p>
            </div>
          </div>

          <div className="ppo-sec-cta" data-reveal>
            <a href="/how-ai-is-used" className="btn btn-ghost">The full agent architecture <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg></a>
            <a href="/security" className="ppo-learn"><i></i> How your data is protected <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-arrow-right" /></svg></a>
          </div>
        </div>
      </section>

      {/* ============================= COMPARISON ============================= */}
      <section className="section ppo-cmp-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">What changes</span>
            <h2>What changes, honestly stated</h2>
            <p>
              Not a longer list of features. A different distribution of who does what, and when a difference is
              found.
            </p>
          </div>

          <div className="ppo-cmp" data-reveal>
            <table>
              <thead>
                <tr><th>Where it shows</th><th>How payouts run today</th><th>How they run on DataTwin</th></tr>
              </thead>
              <tbody>
                <tr><td>The scheme</td><td>A signed PDF, retyped into a spreadsheet by whoever owns the run</td><td>Rows tied to the clause they came from, tested for gaps and overlaps before they pay</td></tr>
                <tr><td>A new scheme</td><td>A new tab, a new formula, and a person who now cannot take leave at month end</td><td>A new sheet on the same engine, live in the period it was agreed</td></tr>
                <tr><td>Tiers and slabs</td><td>Whichever reading the formula happened to encode</td><td>Marginal or whole-volume as the contract defines it, and the reading is visible</td></tr>
                <tr><td>Overlapping schemes</td><td>Resolved differently by different people in different months</td><td>One precedence rule, applied to every partner and every period</td></tr>
                <tr><td>Disputes</td><td>Rebuilt from scratch each time, often to a different answer</td><td>Answered from the retained workings, in the partner portal</td></tr>
                <tr><td>Rate changes</td><td>Backdated by editing the sheet, so history quietly changes</td><td>Versioned and dated; a backdated rate recomputes and raises arrears</td></tr>
                <tr><td>Audit</td><td>Sample testing of a spreadsheet nobody fully understands</td><td>Every payout traceable to rows, measure and approval, across the full population</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ============================= RECOVERY ============================= */}
      <section className="section ppo-rec-sec">
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow c-amber">Start here</span>
            <h2>Before you change anything, find out what it has already cost you</h2>
            <p>
              Everything above is prevention; it stops the next run going wrong. It does nothing about the periods
              already paid, which are sitting in your payout history right now. So we start there, read-only, before
              there is anything to sign.
            </p>
          </div>

          <div className="ppo-twomin" data-reveal>
            <span className="ppo-twomin-n">2<em>min</em></span>
            <span className="ppo-twomin-t">
              <b>This is how long it takes to understand how much can be recovered.</b>
              Send us the schemes and the volume history. We recompute every partner and every period across the full
              transaction population, not a sample, and come back with what is recoverable, split by heading. Before
              any contract.
            </span>
          </div>

          <div className="ppo-rec" data-reveal>
            <div className="ppo-rc dfw-rise"><h4>Overpaid</h4><p>The wrong band applied. A scheme run past its end date. A condition never actually met.</p></div>
            <div className="ppo-rc is-2 dfw-rise"><h4>Underpaid</h4><p>Volume wrongly excluded. A rate agreed and never applied. Arrears nobody asked for.</p></div>
            <div className="ppo-rc is-3 dfw-rise"><h4>Paid twice</h4><p>The same units paid by two schemes. A guarantee topped up where the base already cleared.</p></div>
            <div className="ppo-rc is-4 dfw-rise"><h4>Never netted</h4><p>Advances, damages and shortages that were never deducted, and withholding taken at the wrong rate.</p></div>
          </div>

          <p className="ppo-sectors" data-reveal>
            The same engine runs payouts for <b>logistics and last-mile fleets</b>, <b>gig and field-force
            platforms</b>, <b>franchise networks</b>, <b>staffing and managed services</b>, and <b>bank and NBFC
            sourcing partners</b>. The nouns change; the seven axes do not.
          </p>

          <div className="ppo-sec-cta" data-reveal>
            <a href="/#cta" className="btn btn-primary">Get an estimate for payouts <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg></a>
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
                Working from the payout history your systems already hold, we run our discovery. Nothing changes in
                your systems, nobody in your team changes how they work, and you see what&rsquo;s recoverable before
                there&rsquo;s anything to sign. If the number isn&rsquo;t worth acting on, at least you know
                you&rsquo;re safe.
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

      <PartnerPayoutsScripts />
    </div>
  );
}
