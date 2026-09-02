import type { Metadata } from "next";
import PlatformOverviewScripts from "@/components/PlatformOverviewScripts";

export const metadata: Metadata = {
  title: "DataTwin — Platform Overview",
  description:
    "One engine underneath the DARP framework, FSCP and everything that follows. Discover, Assess and Recover to plug the leakage, then the same rules go into Prevent — wrapping the systems you already run, with nothing migrated.",
};

export default function PlatformOverviewPage() {
  return (
    <>
      {/* ============================= HERO ============================= */}
      <section className="hero po-hero">
        <div className="hero-aurora"></div>
        <div className="ledger-grid"></div>
        <div className="wrap hero-inner">
          <span className="eyebrow">The engine underneath the DARP framework, FSCP and everything that follows</span>

          <h1><span className="grad-text">One engine.</span><br />Solve as many problems as you have.</h1>

          <p className="hero-desc">Not a separate system for every problem. Each one runs the same framework: Discover, Assess and Recover to plug the leakage first, then the same rules go into Prevent to stop it coming back. The engine wraps the systems you already run. Nothing migrated, nothing switched off.</p>

          <div className="po-chips">
            <span className="po-chip"><svg className="stroke"><use href="#ic-gauge" /></svg>A number in about two minutes</span>
            <span className="po-chip"><svg className="stroke"><use href="#ic-layers" /></svg>Wraps your systems, nothing migrated</span>
            <span className="po-chip"><svg className="stroke"><use href="#ic-control" /></svg>Your rules, configured not coded</span>
            <span className="po-chip"><svg className="stroke"><use href="#ic-spark" /></svg>New source? It models itself</span>
          </div>

          <div className="po-actions">
            <a href="/#recoverable" className="btn btn-primary">What can we recover? <svg className="icon stroke" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg></a>
            <a href="/#darp" className="btn btn-ghost">The DARP framework.</a>
          </div>

          <div className="po-engine" aria-hidden="true">
            <div className="po-engine-inner">
              <div className="ledger-grid"></div>

              <div className="po-stage-row">
                <div className="po-stage is-recover">
                  <span className="po-stage-k"><svg className="stroke"><use href="#ic-recover" /></svg>Discover · Assess · Recover</span>
                  <strong>Plug the leakage first</strong>
                  <span className="po-stage-sub">The same framework, run once against your history.</span>
                </div>

                <div className="po-conn">
                  <span>Same<br />rules</span>
                  <svg className="stroke"><use href="#ic-arrow-right" /></svg>
                </div>

                <div className="po-stage is-prevent">
                  <span className="po-stage-k"><svg className="stroke"><use href="#ic-loop" /></svg>Prevent</span>
                  <strong>Stop it coming back</strong>
                  <span className="po-stage-sub">The same rules, running forward at transaction entry.</span>
                </div>
              </div>

              <div className="po-engine-rule"><span>One engine</span></div>

              <div className="po-wrap-tiles">
                <span className="po-tile"><svg className="stroke"><use href="#ic-cash" /></svg></span>
                <span className="po-tile"><svg className="stroke"><use href="#ic-tax" /></svg></span>
                <span className="po-tile"><svg className="stroke"><use href="#ic-doc" /></svg></span>
                <span className="po-tile"><svg className="stroke"><use href="#ic-badge" /></svg></span>
                <span className="po-tile is-new"><svg className="stroke"><use href="#ic-spark" /></svg></span>
              </div>
              <p className="po-engine-cap">The engine wraps the systems you already run. Nothing migrated, nothing switched off.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= END TO END ============================= */}
      <section className="section" id="end-to-end">
        <div className="arc-glow g-blue"></div>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">End to end</span>
            <h2>One engine. Every solution runs on it.</h2>
            <p>The DARP framework and FSCP do not have separate building blocks. They are different questions asked of the same engine. Every problem is configuration on that engine.</p>
          </div>

          <div className="eng-cap">
            <span className="k">The shared engine</span>
            <strong>Shared by every product.</strong>
          </div>

          <div className="eng-figure">
            <object type="image/svg+xml" data="/assets/datatwin-engine.svg" aria-label="DataTwin drawn as one enclosed body: source systems around the outside feed data inward through three shared engine stages to your ERP at the centre. Click to rotate between plan and section views.">
              <img src="/assets/datatwin-engine.svg" alt="DataTwin engine diagram — source systems feed inward through one shared engine to your ERP" />
            </object>
          </div>

          <p className="eng-note">Custom build, SaaS or spreadsheet, it does not matter. We plug in, clean up and lock down control. A first pass through the engine returns your number in about two minutes.</p>
        </div>
      </section>

      {/* ============================= PIPELINE — acquire · process · report ============================= */}
      <section className="section" id="pipeline">
        <div className="wrap">

          {/* 01 — Data Acquisition & Modeling */}
          <div className="pw-station">
            <header className="pw-head">
              <span className="pw-num">01</span>
              <div>
                <h2>Data Acquisition &amp; Modeling</h2>
                <p>Get every source in, then model it so the pieces can actually be compared. Most reconciliation projects suffer here, mapping based on the system's data model. This is the part we automated first.</p>
              </div>
            </header>

            <div className="pw-cards pw-reveal">
              <article className="pw-cap-card">
                <span className="pw-cap-ic"><svg className="stroke"><use href="#ic-upload" /></svg></span>
                <h3>Upload</h3>
                <span className="pw-cap-k">Start in minutes</span>
                <p>Drag a file in and go. CSVs, PDFs or screenshots. Nothing to configure and connect, every Discover engagement starts here.</p>
                <ul className="pw-cap-list">
                  <li>Any structured or unstructured file</li>
                  <li>Documents parsed, not just stored</li>
                  <li>No IT ticket to run the first analysis</li>
                </ul>
              </article>
              <article className="pw-cap-card">
                <span className="pw-cap-ic"><svg className="stroke"><use href="#ic-loop" /></svg></span>
                <h3>Integrations</h3>
                <span className="pw-cap-k">For the ongoing run</span>
                <p>Live connections into ERP, banking, PGs and portals. Read-only by default; write-back only where enabled, on validated data.</p>
                <ul className="pw-cap-list">
                  <li>SAP, Oracle, NetSuite, Dynamics, QuickBooks, Tally</li>
                  <li>Bank feeds and gateway settlement files</li>
                  <li>Distributor and partner portals</li>
                </ul>
              </article>
              <article className="pw-cap-card">
                <span className="pw-cap-ic"><svg className="stroke"><use href="#ic-transfer" /></svg></span>
                <h3>SFTP/EDI</h3>
                <span className="pw-cap-k">For recurring volume</span>
                <p>Scheduled feeds on a cadence: distributor POS files, bank statements, PG settlements, vendor returns. Processed automatically.</p>
                <ul className="pw-cap-list">
                  <li>Keyed, encrypted, scheduled transfer</li>
                  <li>Bulk and high-frequency feeds</li>
                  <li>Late and restated files handled cleanly</li>
                </ul>
              </article>
            </div>

            <div className="pw-merge-band pw-reveal" aria-hidden="true">
              <svg viewBox="0 0 600 74" preserveAspectRatio="none">
                <path d="M100,2 C100,48 300,40 300,72" />
                <path d="M300,2 L300,72" />
                <path d="M500,2 C500,48 300,40 300,72" />
              </svg>
              <span className="pw-merge-node"></span>
              <span className="pw-merge-cap">one model</span>
            </div>

            <div className="pw-ai pw-reveal">
              <div className="pw-ai-main">
                <span className="pw-ai-ic"><svg className="stroke"><use href="#ic-spark" /></svg></span>
                <div className="pw-ai-body">
                  <span className="pw-ai-badge">AI-native</span>
                  <strong>Introduce a source we have never seen. It models itself.</strong>
                  <p><b>AUDERE</b>, our Autonomous Data Engineering &amp; Recon Engine, reads a source it has never seen, infers what each field means and <b>builds the model to acquire it</b>, then keeps that model current as the source changes. No mapping spreadsheet, no integration ticket.</p>
                </div>
              </div>
              <div className="pw-ai-viz" aria-hidden="true">
                <div className="pw-ai-grid"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
                <div className="pw-ai-stamp">Model built</div>
              </div>
            </div>
          </div>

          {/* 02 — Data Processing & Analysis */}
          <div className="pw-station">
            <header className="pw-head">
              <span className="pw-num">02</span>
              <div>
                <h2>Data Processing &amp; Analysis</h2>
                <p>Turn raw records into a valued finding during discovery, a KPI score and an anomaly for financial close, a pass-or-fail at entry for Prevent. Transformation, testing and routing are all one continuous pass.</p>
              </div>
            </header>

            <div className="pw-cards pw-pipe pw-reveal">
              <article className="pw-cap-card">
                <span className="pw-cap-ic"><svg className="stroke"><use href="#ic-layers" /></svg></span>
                <h3>SCDP</h3>
                <span className="pw-cap-k">Schema Controlled Data Processing</span>
                <p>The schema controls what happens to the data. Every reshaping step is declared once and applied everywhere. So are the rules.</p>
                <ul className="pw-cap-list">
                  <li>Comes into its own when data must be transformed several times before it can be used</li>
                  <li>Tolerances, eligibility, matching logic and controls are <em>built into the schema</em>, not bolted on after</li>
                  <li>A rule cannot drift out of sync with the structure it tests; they are the same object</li>
                </ul>
                <span className="pw-pipe-dot"></span>
              </article>
              <article className="pw-cap-card">
                <span className="pw-cap-ic"><svg className="stroke"><use href="#ic-swap" /></svg></span>
                <h3>Recon Engine</h3>
                <span className="pw-cap-k">Part of the DARP framework</span>
                <p>Where the matching happens. Two-way through N-way, at whatever granularity the question needs.</p>
                <ul className="pw-cap-list">
                  <li>Tolerance rules and fuzzy matching where identifiers disagree across systems</li>
                  <li>Many-to-many resolution, including split and batch settlements</li>
                  <li>Reasoning applied where a match cannot be settled by rules alone</li>
                </ul>
                <span className="pw-pipe-dot"></span>
              </article>
              <article className="pw-cap-card">
                <span className="pw-cap-ic"><svg className="stroke"><use href="#ic-flow" /></svg></span>
                <h3>Workflow Automation</h3>
                <span className="pw-cap-k">Any shape you need</span>
                <p>Serial, parallel or any combination. Approvals, reviews, escalations, branches and rework loops, configured to your organisation's needs.</p>
                <ul className="pw-cap-list">
                  <li>Approval chains with delegation and segregation of duties</li>
                  <li>Human inputs and confirmations wherever the data or the judgement is missing</li>
                  <li>The control gates of AI governance, where a person confirms what an agent proposed</li>
                </ul>
              </article>
            </div>

            <div className="pw-answers pw-reveal">
              <svg className="pw-fan" viewBox="0 0 600 44" preserveAspectRatio="none" aria-hidden="true">
                <path d="M300,0 C300,22 140,18 140,44" />
                <path d="M300,0 L300,44" />
                <path d="M300,0 C300,22 460,18 460,44" />
              </svg>
              <div className="pw-answer-chips">
                <div className="pw-out o1"><span className="ok">Discovery</span><span className="ov">a valued finding</span></div>
                <div className="pw-out o2"><span className="ok">Financial close</span><span className="ov">a KPI score and an anomaly</span></div>
                <div className="pw-out o3"><span className="ok">Prevent</span><span className="ov">a pass-or-fail at entry</span></div>
              </div>
            </div>

            <div className="pw-ai pw-reveal">
              <div className="pw-ai-main">
                <span className="pw-ai-ic"><svg className="stroke"><use href="#ic-spark" /></svg></span>
                <div className="pw-ai-body">
                  <span className="pw-ai-badge">AI-native</span>
                  <strong>Reasoning where matching alone cannot get there</strong>
                  <p>Plenty of reconciliations do not resolve on rules: identifiers disagree, or the fact that settles it is a clause inside a contract. DataTwin applies <b>reasoning to exactly those cases</b>, and builds the schema itself from what you describe. Everything that posts stays deterministic.</p>
                </div>
              </div>
              <div className="pw-ai-viz" aria-hidden="true">
                <div className="pw-merge">
                  <svg viewBox="0 0 200 104">
                    <text className="tag" x="0" y="20">rules</text>
                    <text className="tag" x="0" y="98">reasoning</text>
                    <path className="ln rules" d="M6,30 C90,30 110,52 168,52" />
                    <path className="ln reason" d="M6,86 C90,86 110,52 168,52" />
                    <circle className="nd" cx="168" cy="52" r="5" />
                  </svg>
                </div>
                <div className="pw-merge-cap2">deterministic</div>
              </div>
            </div>
          </div>

          {/* 03 — Dashboards & Reporting */}
          <div className="pw-station is-report">
            <header className="pw-head">
              <span className="pw-num">03</span>
              <div>
                <h2>Dashboards &amp; Reporting</h2>
                <p>Each product asks a different question of the same engine, so each gets its own reporting. Every number drills through to the transaction and to the document that supports it.</p>
              </div>
            </header>

            <div className="pw-reveal">
              <div className="pw-lens" role="tablist" aria-label="Reporting lens">
                <button className="pw-lens-btn" role="tab" aria-selected="true" aria-controls="pw-v-darp" id="pw-l-darp" data-q="What is recoverable, and where each finding stands">DARP · Discover, Assess, Recover</button>
                <button className="pw-lens-btn is-prevent" role="tab" aria-selected="false" aria-controls="pw-v-prevent" id="pw-l-prevent" data-q="What was stopped before it posted, and is the leak closing">DARP · Prevent</button>
                <button className="pw-lens-btn is-fscp" role="tab" aria-selected="false" aria-controls="pw-v-fscp" id="pw-l-fscp" data-q="Which KPIs are breaching, and can you sign off">FSCP</button>
              </div>
              <div className="pw-lens-progress" aria-hidden="true"><i></i></div>
              <p className="pw-lens-q">What is recoverable, and where each finding stands</p>

              <div className="pw-view is-active" id="pw-v-darp" role="tabpanel" aria-labelledby="pw-l-darp">
                <div className="pw-dash-grid">
                  <div className="pw-panel">
                    <div className="pw-panel-head"><h4>Recovery position</h4><span className="pw-panel-meta">Current engagement</span></div>
                    <div className="pw-stat-xl" data-count="">&#8377;4.82 Cr</div>
                    <div className="pw-stat-sub">Total identified across 1.2M transactions tested</div>
                    <div className="pw-stack">
                      <span className="pw-seg-1" style={{ width: "41.1%" }}></span>
                      <span className="pw-seg-2" style={{ width: "27.0%" }}></span>
                      <span className="pw-seg-3" style={{ width: "19.9%" }}></span>
                      <span className="pw-seg-4" style={{ width: "12.0%" }}></span>
                    </div>
                    <div className="pw-legend">
                      <div className="pw-legend-row"><span className="dot" style={{ background: "var(--brand)" }}></span><span className="lbl">Cash recoverable</span><span className="val">&#8377;1.98 Cr</span></div>
                      <div className="pw-legend-row"><span className="dot" style={{ background: "var(--brand-2)" }}></span><span className="lbl">Tax recoverable</span><span className="val">&#8377;1.30 Cr</span></div>
                      <div className="pw-legend-row"><span className="dot" style={{ background: "var(--pw-violet)" }}></span><span className="lbl">Misstated, no cash</span><span className="val">&#8377;0.96 Cr</span></div>
                      <div className="pw-legend-row"><span className="dot" style={{ background: "var(--accent-amber)" }}></span><span className="lbl">Control exposure</span><span className="val">&#8377;0.58 Cr</span></div>
                    </div>
                  </div>
                  <div className="pw-panel">
                    <div className="pw-panel-head"><h4>Where each finding stands</h4><span className="pw-panel-meta">By value</span></div>
                    <div className="pw-bars">
                      <div className="pw-bar-row"><span className="k">Settled</span><span className="pw-bar-track"><span className="pw-bar-fill pos" style={{ width: "85%" }}></span></span><span className="v">34%</span></div>
                      <div className="pw-bar-row"><span className="k">Claim issued</span><span className="pw-bar-track"><span className="pw-bar-fill c1" style={{ width: "65%" }}></span></span><span className="v">26%</span></div>
                      <div className="pw-bar-row"><span className="k">Evidence ready</span><span className="pw-bar-track"><span className="pw-bar-fill c2" style={{ width: "47%" }}></span></span><span className="v">19%</span></div>
                      <div className="pw-bar-row"><span className="k">In review</span><span className="pw-bar-track"><span className="pw-bar-fill c3" style={{ width: "35%" }}></span></span><span className="v">14%</span></div>
                      <div className="pw-bar-row"><span className="k">Disputed</span><span className="pw-bar-track"><span className="pw-bar-fill neg" style={{ width: "18%" }}></span></span><span className="v">7%</span></div>
                    </div>
                    <div className="pw-tiles">
                      <div className="pw-tile"><div className="t-num is-pos" data-count="">&#8377;1.64 Cr</div><div className="t-cap">Cash returned to date</div></div>
                      <div className="pw-tile"><div className="t-num" data-count="">21 days</div><div className="t-cap">Median claim to settlement</div></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pw-view" id="pw-v-prevent" role="tabpanel" aria-labelledby="pw-l-prevent">
                <div className="pw-dash-grid">
                  <div className="pw-panel">
                    <div className="pw-panel-head"><h4>Stopped at entry</h4><span className="pw-panel-meta">This period</span></div>
                    <div className="pw-stat-xl is-pos" data-count="">3,412</div>
                    <div className="pw-stat-sub">Transactions held or corrected before posting</div>
                    <div className="pw-bars" style={{ marginTop: "18px" }}>
                      <div className="pw-bar-row"><span className="k">Duplicate test</span><span className="pw-bar-track"><span className="pw-bar-fill pos" style={{ width: "100%" }}></span></span><span className="v">1,296</span></div>
                      <div className="pw-bar-row"><span className="k">Price vs contract</span><span className="pw-bar-track"><span className="pw-bar-fill pos" style={{ width: "71%" }}></span></span><span className="v">921</span></div>
                      <div className="pw-bar-row"><span className="k">Tax treatment</span><span className="pw-bar-track"><span className="pw-bar-fill pos" style={{ width: "50%" }}></span></span><span className="v">648</span></div>
                      <div className="pw-bar-row"><span className="k">Approval limit</span><span className="pw-bar-track"><span className="pw-bar-fill pos" style={{ width: "26%" }}></span></span><span className="v">341</span></div>
                      <div className="pw-bar-row"><span className="k">Bank detail change</span><span className="pw-bar-track"><span className="pw-bar-fill neg" style={{ width: "16%" }}></span></span><span className="v">206</span></div>
                    </div>
                  </div>
                  <div className="pw-panel">
                    <div className="pw-panel-head"><h4>Leakage rate</h4><span className="pw-panel-meta">Rolling 12 periods</span></div>
                    <div className="pw-stat-sub" style={{ marginTop: "0" }}>Findings per 10,000 transactions, declining as rules take hold</div>
                    <div className="pw-spark" style={{ marginTop: "16px" }}>
                      <i style={{ height: "100%" }}></i><i style={{ height: "93%" }}></i><i style={{ height: "88%" }}></i><i style={{ height: "82%" }}></i><i style={{ height: "78%" }}></i><i style={{ height: "70%" }}></i><i style={{ height: "63%" }}></i><i style={{ height: "56%" }}></i><i style={{ height: "48%" }}></i><i style={{ height: "41%" }}></i><i className="hot" style={{ height: "33%" }}></i><i className="hot" style={{ height: "28%" }}></i>
                    </div>
                    <div className="pw-tiles">
                      <div className="pw-tile"><div className="t-num is-pos" data-count="">79%</div><div className="t-cap">Reduction since go-live</div></div>
                      <div className="pw-tile"><div className="t-num" data-count="">96.2%</div><div className="t-cap">Touchless, no human needed</div></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pw-view" id="pw-v-fscp" role="tabpanel" aria-labelledby="pw-l-fscp">
                <div className="pw-dash-grid">
                  <div className="pw-panel">
                    <div className="pw-panel-head"><h4>Close readiness</h4><span className="pw-panel-meta">Day 1 of close</span></div>
                    <div className="pw-tiles at-top">
                      <div className="pw-tile"><div className="t-num is-pos" data-count="">186</div><div className="t-cap">KPIs green of 214 scored</div></div>
                      <div className="pw-tile"><div className="t-num is-warn" data-count="">9</div><div className="t-cap">Accounts flagged at risk</div></div>
                      <div className="pw-tile"><div className="t-num" data-count="">97.4%</div><div className="t-cap">Sub-ledger to GL tie-out</div></div>
                      <div className="pw-tile"><div className="t-num" data-count="">2.1%</div><div className="t-cap">Manual journal share</div></div>
                    </div>
                    <div className="pw-spark-label">Exceptions cleared, last 12 periods</div>
                    <div className="pw-spark">
                      <i style={{ height: "22%" }}></i><i style={{ height: "25%" }}></i><i style={{ height: "21%" }}></i><i style={{ height: "27%" }}></i><i style={{ height: "30%" }}></i><i style={{ height: "26%" }}></i><i style={{ height: "33%" }}></i><i style={{ height: "38%" }}></i><i style={{ height: "34%" }}></i><i style={{ height: "40%" }}></i><i className="hot" style={{ height: "88%" }}></i><i className="hot" style={{ height: "96%" }}></i>
                    </div>
                  </div>
                  <div className="pw-panel">
                    <div className="pw-panel-head"><h4>KPI breaches by area</h4><span className="pw-panel-meta">Needs attention before sign-off</span></div>
                    <div className="pw-table-wrap">
                      <table className="pw-table">
                        <thead>
                          <tr><th>Process area</th><th className="r">Scored</th><th className="r">Breaching</th><th className="r">Status</th></tr>
                        </thead>
                        <tbody>
                          <tr><td>Inventory</td><td className="r num">46</td><td className="r num">3</td><td className="r"><span className="pw-chip watch">Watch</span></td></tr>
                          <tr><td>Revenue recognition</td><td className="r num">52</td><td className="r num">6</td><td className="r"><span className="pw-chip bad">Breached</span></td></tr>
                          <tr><td>Cash application</td><td className="r num">38</td><td className="r num">1</td><td className="r"><span className="pw-chip ok">On track</span></td></tr>
                          <tr><td>Payments &amp; AP</td><td className="r num">44</td><td className="r num">2</td><td className="r"><span className="pw-chip watch">Watch</span></td></tr>
                          <tr><td>GL &amp; controls</td><td className="r num">34</td><td className="r num">0</td><td className="r"><span className="pw-chip ok">On track</span></td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pw-dash-foot">
                <p className="pw-dash-note">Illustrative dashboards. Every figure shown is an example, not a customer result.</p>
                <p className="pw-dash-outro">Reports are configured to the process, not to a template. Tell us what you need to see.</p>
                <div className="pw-dash-cta">
                  <a href="/#cta" className="btn btn-primary">Discover <svg className="icon stroke" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg></a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ============================= AI-NATIVE ============================= */}
      <section className="section" id="ai-native">
        <div className="arc-glow g-blue"></div>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">AI-native</span>
            <h2>What makes it AI-native</h2>
            <p>Not a chatbot bolted onto a reporting tool. Three points where the platform would not function the same way without it, and one place we deliberately keep it out. The full architecture, from the agents to the models and the reasoning engine, is on the How AI is used page.</p>
          </div>

          <div className="ain-zone">
            <div className="ain-cards">
              <article className="ain-card">
                <span className="ain-card-ic"><svg className="stroke"><use href="#ic-frame" /></svg></span>
                <h3>It models new sources for itself</h3>
                <p>A source we have never seen is read, understood and modelled on arrival: fields inferred, relationships worked out, the acquisition model built without a mapping exercise.</p>
              </article>
              <article className="ain-card">
                <span className="ain-card-ic"><svg className="stroke"><use href="#ic-schema" /></svg></span>
                <h3>It builds the schema from your requirement</h3>
                <p>Describe what needs reconciling against what. The engine elicits the detail and constructs the schema, with the rules and checks embedded inside it, for entities it has never handled.</p>
              </article>
              <article className="ain-card">
                <span className="ain-card-ic"><svg className="stroke"><use href="#ic-swap" /></svg></span>
                <h3>It reasons through the hard reconciliations</h3>
                <p>Where identifiers disagree, evidence sits in a document, or the answer depends on context across several records, reasoning resolves it, faster and more accurately than a manual queue.</p>
              </article>
            </div>
          </div>

          <div className="ain-seam">
            <span className="ain-seam-tag"><svg className="stroke"><use href="#ic-lock" /></svg>deliberate &#183; not moving</span>
          </div>

          <div className="ain-wall">
            <span className="ain-wall-ic"><svg className="stroke"><use href="#ic-shield" /></svg></span>
            <div className="ain-wall-body">
              <h3>It stays out of the posting decision</h3>
              <p>Anything that becomes an entry in your books is governed by explicit, inspectable rules. Nothing posts because a model was confident. That boundary is deliberate and it is not moving.</p>
            </div>
          </div>

          <div className="ain-foot">
            <p>Agents, models, human-in-the-loop gates and the reasoning engine, in full.</p>
            <a href="#" className="btn btn-ghost">How AI is used <svg className="icon stroke" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg></a>
          </div>
        </div>
      </section>

      {/* ============================= ACROSS THE PLATFORM ============================= */}
      <section className="section" id="across">
        <div className="arc-glow g-violet"></div>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">Across the platform</span>
            <h2>Two things that apply at every stage</h2>
          </div>

          <div className="axp-grid">
            <article className="axp-card">
              <span className="axp-rail" aria-hidden="true"><i></i><i></i><i></i></span>
              <div className="axp-inner">
                <span className="axp-ic"><svg className="stroke"><use href="#ic-lock" /></svg></span>
                <h3>Security</h3>
                <p>Read-only by default. ISO 27001 certified and SOC 2 attested, with role-based access, residency options and an immutable audit trail. AWS, Azure, GCP or your own cloud.</p>
                <a href="#" className="axp-link">Read more <svg className="stroke"><use href="#ic-arrow-right" /></svg></a>
              </div>
            </article>
            <article className="axp-card">
              <span className="axp-rail" aria-hidden="true"><i></i><i></i><i></i></span>
              <div className="axp-inner">
                <span className="axp-ic"><svg className="stroke"><use href="#ic-spark" /></svg></span>
                <h3>How AI is used</h3>
                <p>The full account of where AI earns its place: document understanding, source modelling, schema construction, reasoning on hard matches, natural-language query. And where deterministic rules run instead.</p>
                <a href="#" className="axp-link">Read more <svg className="stroke"><use href="#ic-arrow-right" /></svg></a>
              </div>
            </article>
          </div>

          <div className="axp-foot">
            <p>Prefer to see the engine working rather than described?</p>
            <a href="/#darp" className="btn btn-ghost">See the DARP Framework <svg className="icon stroke" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg></a>
          </div>
        </div>
      </section>

      {/* ============================= FINAL CTA ============================= */}
      <section className="section-tight" id="cta">
        <div className="wrap">
          <div className="cta-section">
            <div className="ledger-grid" style={{ opacity: ".4" }}></div>
            <div className="glow-blob cta-glow-a"></div>
            <div className="glow-blob cta-glow-b"></div>
            <div style={{ position: "relative" }}>
              <span className="eyebrow" style={{ marginBottom: "20px" }}>Get started</span>
              <h2>Tell us your problem.<br />We'll tell you what we can recover.</h2>
              <p>Working from the transaction history your systems already hold, we run our discovery. Nothing changes in your systems, nobody in your team changes how they work, and you see what's recoverable before there's anything to sign. If the number isn&rsquo;t worth acting on, at least you know you&rsquo;re safe.</p>
              <div className="cta-buttons">
                <a href="/#top" className="btn btn-primary">Tell us your problem <svg className="icon stroke" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg></a>
                <a href="mailto:solve@datatwin.ai" className="btn btn-ghost">Email us instead</a>
              </div>
              <div className="cta-email mono">solve@datatwin.ai</div>
            </div>
          </div>
        </div>
      </section>
      <PlatformOverviewScripts />
    </>
  );
}
