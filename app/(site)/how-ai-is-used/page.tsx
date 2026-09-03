import type { Metadata } from "next";
import HowAIScripts from "@/components/HowAIScripts";

export const metadata: Metadata = {
  title: "How AI is used: agents, reasoning, and where we keep it out | DataTwin",
  description:
    "A multi-agent architecture with specialised agents, cognitive and logical processing, human-in-the-loop at control gates, and deterministic rules wherever something posts to your books. Where AI earns its place, and where it does not.",
};

export default function HowAIIsUsedPage() {
  return (
    <>
      {/* ============================= HERO ============================= */}
      <section className="hero hai-hero">
        <div className="hero-aurora"></div>
        <div className="ledger-grid"></div>
        <div className="wrap">
          <div className="hero-inner">
            <span className="eyebrow">Across every stage of the platform</span>
            <h1>
              Agents do the work.
              <br />
              <span className="grad-text">Rules do the posting.</span>
            </h1>
            <p className="hero-desc">
              DataTwin is a multi-agent system: specialised agents with exclusive duties, cognitive interpretation
              of policies and contracts, humans at the control gates, and deterministic rules wherever something
              becomes an entry in your books. Here is exactly where each one operates.
            </p>

            <div className="hero-btns">
              <a href="/#cta" className="btn btn-primary">
                What can we recover?{" "}
                <svg className="icon stroke" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg>
              </a>
            </div>

            <div className="hai-pri" data-reveal>
              <div className="hai-p dfw-rise">
                <b>01</b>
                <span>Multi-agent framework</span>
                <em>Specialised agents with exclusive duties. Plug-and-play for new rules and geographies.</em>
              </div>
              <div className="hai-p dfw-rise">
                <b>02</b>
                <span>Cognitive + logical</span>
                <em>Interprets policies and contracts. Real-time decisions and escalations.</em>
              </div>
              <div className="hai-p dfw-rise">
                <b>03</b>
                <span>Human-in-the-loop</span>
                <em>Intervention only at control gates, with an audit-ready accountability trail.</em>
              </div>
              <div className="hai-p dfw-rise">
                <b>04</b>
                <span>Elastic scalability</span>
                <em>Compute and agents auto-scale for month-end and quarter-end peaks, so a first pass returns a number in about two minutes.</em>
              </div>
              <div className="hai-p dfw-rise">
                <b>05</b>
                <span>Continuous learning</span>
                <em>Feedback loops from exceptions and audits. RAG keeps rules current.</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= AGENTS ============================= */}
      <section className="section">
        <div className="arc-glow g-blue"></div>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">The architecture</span>
            <h2>Not one model. A team of specialists.</h2>
            <p>
              A single general-purpose model asked to do everything is neither accurate nor auditable. DataTwin
              runs specialised agents, each with a narrow remit and a defined output, coordinated by an
              orchestration layer that decides what runs, in what order, and when a human is needed.
            </p>
          </div>

          <div className="hai-arch" data-reveal>
            <div className="hai-orch">
              <span className="hai-orch-k"><svg className="stroke"><use href="#ic-flow" /></svg></span>
              <div className="hai-orch-body">
                <h3>Orchestration Agent</h3>
                <p>
                  Sits above everything else. Sequences the specialists, classifies what each finding is and how
                  severe it is, routes work to the right agent or the right person, and holds the accountability
                  trail that ties every agent action and human decision together.
                </p>
              </div>
            </div>

            <div className="hai-wire" aria-hidden="true">
              <svg viewBox="0 0 1000 64" preserveAspectRatio="none">
                <path className="ln" d="M500,0 C500,36 167,16 167,64" />
                <path className="ln" d="M500,0 L500,64" />
                <path className="ln" d="M500,0 C500,36 833,16 833,64" />
                <path className="fx" d="M500,0 C500,36 167,16 167,64" />
                <path className="fx" d="M500,0 L500,64" />
                <path className="fx" d="M500,0 C500,36 833,16 833,64" />
              </svg>
            </div>

            <div className="hai-lanes">
              <div className="hai-lane dfw-rise">
                <div className="hai-lane-h">
                  <span className="hai-lane-k"><svg className="stroke"><use href="#ic-upload" /></svg></span>
                  <h3>Intake &amp; understanding</h3>
                </div>
                <p className="hai-lane-sub">Getting data in, whatever shape it arrives in, and working out what it actually is.</p>
                <div className="hai-ag"><b>Ingest Agent</b><span>Email inbox listener, SFTP and shared folders, PDFs, Excel and CSV, images. It watches the channels rather than waiting to be fed.</span></div>
                <div className="hai-ag"><b>Data Hygiene Agent</b><span>Duplicate checks by reference and checksum, multi-page document structure, multilingual documents, handwritten pages, document classification.</span></div>
                <div className="hai-ag"><b>Registry Agent</b><span>Determines the vendor, item, tax, cost centre and company each record belongs to: the identity resolution that everything downstream depends on.</span></div>
              </div>

              <div className="hai-lane dfw-rise">
                <div className="hai-lane-h">
                  <span className="hai-lane-k"><svg className="stroke"><use href="#ic-shield" /></svg></span>
                  <h3>Judgement &amp; control</h3>
                </div>
                <p className="hai-lane-sub">Interpreting the rules that govern a transaction, and spotting what should not be there.</p>
                <div className="hai-ag"><b>Governance Agent</b><span>Interprets company policy, location-specific policy, accounting policies and principles, reporting standards, and the agreements and contracts that set the terms.</span></div>
                <div className="hai-ag"><b>Risk Intelligence Agent</b><span>Pattern recognition, fraud scenario recognition, segregation-of-duties reasoning and contextual risk scoring, running continuously rather than at audit time.</span></div>
                <div className="hai-ag"><b>WF &amp; Compliance Agent</b><span>Tax jurisdiction rules, reverse charge, exemption and certificate handling, HSN/SAC classification, withholding, cross-border and taxability mapping.</span></div>
              </div>

              <div className="hai-lane dfw-rise">
                <div className="hai-lane-h">
                  <span className="hai-lane-k"><svg className="stroke"><use href="#ic-swap" /></svg></span>
                  <h3>Resolution &amp; reporting</h3>
                </div>
                <p className="hai-lane-sub">Reconciling, explaining, correcting and telling people what happened.</p>
                <div className="hai-ag"><b>Recon Agent</b><span>Fusion across vendor, PO, GRN and bill, and beyond AP into timesheets, expenses and gateway settlements. N-way, not two-way.</span></div>
                <div className="hai-ag"><b>Investigation Agent (RCA)</b><span>Deep-dives a flagged anomaly, finds the root cause, whether fraud, error or process gap, collects the evidence and recommends the corrective action.</span></div>
                <div className="hai-ag"><b>Accounting Agent</b><span>Expense and payment accounting, accrual handling, cost and management accounting. Produces the correct treatment, for a human to release.</span></div>
                <div className="hai-ag"><b>Remediation Agent</b><span>Fixes data gaps, resubmits, and closes the loop so the same exception does not return next cycle.</span></div>
                <div className="hai-ag"><b>KPI &amp; Communication Agent</b><span>Touchless rate, exception rate, cycle time, SLA monitoring, exception heatmaps by vendor, and proactive alerts on breaches and holds.</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= ENGINES ============================= */}
      <section className="section" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Underneath the agents</span>
            <h2>Three engines the agents call on</h2>
          </div>

          <div className="hai-eng" data-reveal>
            <div className="hai-e dfw-rise">
              <span className="hai-e-k"><svg className="stroke"><use href="#ic-frame" /></svg></span>
              <h3>DataTwin OCR Models</h3>
              <span className="hai-e-s">Reading what arrives</span>
              <p>Purpose-trained for finance documents rather than general text. Invoices in any layout, multi-page and multi-language documents, handwritten annotations, payment screenshots and gateway reports, at line level, not just header.</p>
            </div>
            <div className="hai-e dfw-rise">
              <span className="hai-e-k"><svg className="stroke"><use href="#ic-search" /></svg></span>
              <h3>DataTwin RAG Models</h3>
              <span className="hai-e-s">Knowing the rules that apply</span>
              <p>Retrieval over your own contracts, price agreements, tax positions and policies, so an agent reasons against <em>your</em> terms as they stood on the relevant date, not a generic interpretation. This is how rules stay current as agreements change.</p>
            </div>
            <div className="hai-e dfw-rise">
              <span className="hai-e-k"><svg className="stroke"><use href="#ic-schema" /></svg></span>
              <h3>AUDERE</h3>
              <span className="hai-e-s">Autonomous Data Engineering &amp; Recon Engine</span>
              <p>The part that models a source it has never seen, builds the schema, applies the SCDP transformations and runs the reconciliation. It is why a new entity or distributor format does not need a mapping project first.</p>
            </div>
          </div>

          <p className="hai-cta-lead" data-reveal>The vocabulary here, from SCDP and N-way to RAG and full population, is all defined in plain language.</p>
          <div className="hai-sec-cta" data-reveal>
            <a href="/darp-framework" className="hai-learn"><i></i> Glossary <svg className="stroke"><use href="#ic-arrow-right" /></svg></a>
            <a href="/platform-overview" className="hai-learn"><i></i> Guides on how the engine works <svg className="stroke"><use href="#ic-arrow-right" /></svg></a>
          </div>
        </div>
      </section>

      {/* ============================= WHERE AI EARNS IT ============================= */}
      <section className="section">
        <div className="arc-glow g-violet"></div>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow c-violet">In practice</span>
            <h2>Four places the intelligence does the work</h2>
            <p>
              Concretely, on the platform, today, not on a roadmap. These are the same four capabilities summarised
              on the <a href="/platform-overview" className="hai-tlink">Platform overview</a>, described here with the
              engines behind them.
            </p>
          </div>

          <div className="hai-cap-grid" data-reveal>
            <div className="hai-cap dfw-rise">
              <span className="hai-cap-k"><svg className="stroke"><use href="#ic-layers" /></svg></span>
              <h3>It models new sources for itself</h3>
              <p>A distributor with their own claim format, a bank whose statement layout matches nobody else&rsquo;s, an entity from an acquisition. AUDERE reads it, infers what each field means and builds the acquisition model. No mapping spreadsheet.</p>
            </div>
            <div className="hai-cap dfw-rise">
              <span className="hai-cap-k"><svg className="stroke"><use href="#ic-schema" /></svg></span>
              <h3>It builds the schema from your requirement</h3>
              <p>Describe what needs reconciling and against what. The engine elicits the detail, then constructs the schema, rules and checks included, for entities it has never handled. SCDP makes that possible: transformation is declared, not coded.</p>
            </div>
            <div className="hai-cap dfw-rise">
              <span className="hai-cap-k"><svg className="stroke"><use href="#ic-swap" /></svg></span>
              <h3>It reasons through the hard reconciliations</h3>
              <p>Identifiers that disagree across systems. A fact that only exists inside a clause. An answer that depends on context spread across records. A rules engine stops there; reasoning resolves those faster than a manual queue.</p>
            </div>
            <div className="hai-cap dfw-rise">
              <span className="hai-cap-k"><svg className="stroke"><use href="#ic-doc" /></svg></span>
              <h3>It reads the documents that hold the terms</h3>
              <p>The governing fact in finance is usually in a document: a clause, a certificate, a roster, a remittance. OCR and RAG let an agent cite the term that governed a transaction, which is what a counterparty will accept.</p>
            </div>
          </div>

          <p className="hai-cta-lead" data-reveal>Easier to judge on your own data than from a description.</p>
          <div className="hai-sec-cta" data-reveal>
            <a href="/#cta" className="btn btn-primary">
              What can we recover?{" "}
              <svg className="icon stroke" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ============================= CLOSED LOOP ============================= */}
      <section className="section" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Closed-loop assurance</span>
            <h2>Stop it at source. Investigate what got through.</h2>
            <p>Two directions running at once, one preventing and one correcting, each feeding the other.</p>
          </div>

          <div className="hai-loop" data-reveal>
            <div className="hai-lp dfw-rise">
              <div className="hai-lp-lbl">Preventive</div>
              <h3>Applies policy before anything posts</h3>
              <ul>
                <li>Rules and policies applied <b>before</b> the entry is created</li>
                <li>Errors stopped at source: two-way and three-way match, approval limits</li>
                <li>Continuous preventive checks on master data, thresholds and cut-offs</li>
                <li>Eligibility and tax treatment determined at bill creation, not at close</li>
              </ul>
              <p className="hai-lp-ag">Agents: Governance, Risk Intelligence, WF &amp; Compliance</p>
            </div>

            <div className="hai-loop-tie" aria-hidden="true">
              <span className="hai-loop-arc"><svg className="stroke"><use href="#ic-loop" /></svg></span>
            </div>

            <div className="hai-lp is-corrective dfw-rise">
              <div className="hai-lp-lbl">Corrective</div>
              <h3>Deep-dives whatever still gets flagged</h3>
              <ul>
                <li>Anomaly investigated after it is raised, not filed for later</li>
                <li>Root cause identified: fraud, error or process gap</li>
                <li>Evidence collected and a corrective action recommended</li>
                <li>The fix feeds back as a new preventive rule, so it does not recur</li>
              </ul>
              <p className="hai-lp-ag">Agents: Investigation, Recon, Remediation</p>
            </div>
          </div>

          <div className="hai-steps-wrap">
            <h3 className="hai-steps-title">Exception to remediation, end to end</h3>
            <div className="hai-steps" data-reveal>
              <div className="hai-stp dfw-rise"><span className="hai-stp-d">01</span><h4>Detect</h4><p>Governance, Risk and Compliance agents flag the anomaly as it appears.</p></div>
              <div className="hai-stp dfw-rise"><span className="hai-stp-d">02</span><h4>Classify</h4><p>Orchestration assigns a type and a severity, so response matches the risk.</p></div>
              <div className="hai-stp dfw-rise"><span className="hai-stp-d">03</span><h4>Route</h4><p>Sent to remediation, or to a named human where judgement is required.</p></div>
              <div className="hai-stp dfw-rise"><span className="hai-stp-d">04</span><h4>Remediate</h4><p>Data gaps fixed, corrections prepared, the item resubmitted.</p></div>
              <div className="hai-stp dfw-rise"><span className="hai-stp-d">05</span><h4>Close &amp; learn</h4><p>Resolved, and the outcome feeds back to improve the next cycle.</p></div>
            </div>
          </div>

          <p className="hai-cta-lead" data-reveal>Which of your exceptions never get closed? That is usually where we start.</p>
          <div className="hai-sec-cta" data-reveal>
            <a href="/#cta" className="btn btn-primary">
              Tell us your situation{" "}
              <svg className="icon stroke" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ============================= HUMAN IN THE LOOP ============================= */}
      <section className="section">
        <div className="arc-glow g-blue"></div>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Human-in-the-loop</span>
            <h2>People at the control gates, not in the queue</h2>
            <p>
              AI handles the volume. Humans are involved where judgement, authority or accountability genuinely
              requires a person, and every one of those decisions is logged alongside the agent actions around it.
            </p>
          </div>

          <div className="hai-hitl" data-reveal>
            <div className="hai-hi dfw-rise"><h4>Providing missing inputs</h4><p>A human enriches the packet where something simply is not in the data: a missing PO number, a tax certificate, vendor KYC.</p></div>
            <div className="hai-hi dfw-rise"><h4>Correcting the AI&rsquo;s course</h4><p>Reviewers accept, adjust or reject agent recommendations, such as an exception waiver or a policy override, and the correction is captured.</p></div>
            <div className="hai-hi dfw-rise"><h4>Approver guidance</h4><p>The agent recommends approve or reject with its reasoning attached. The person still decides, but not from a blank screen.</p></div>
            <div className="hai-hi dfw-rise"><h4>Exception arbitration</h4><p>Where two agents reach different conclusions, a human resolves the conflict rather than the system silently picking one.</p></div>
            <div className="hai-hi dfw-rise"><h4>Escalation handling</h4><p>Complex or high-value cases route to Controllers for sign-off, with thresholds you set rather than ones we assume.</p></div>
            <div className="hai-hi dfw-rise"><h4>Policy calibration</h4><p>Reviewer corrections feed back into the Governance and Compliance agents, so the same judgement does not have to be made twice.</p></div>
          </div>

          <p className="hai-cta-lead" data-reveal>How other finance teams have set their control gates.</p>
          <div className="hai-sec-cta" data-reveal>
            <a href="/#outcomes" className="hai-learn"><i></i> Read a case study <svg className="stroke"><use href="#ic-arrow-right" /></svg></a>
            <a href="/#outcomes" className="hai-learn"><i></i> Writing on AI governance in finance <svg className="stroke"><use href="#ic-arrow-right" /></svg></a>
          </div>
        </div>
      </section>

      {/* ============================= THE BOUNDARY ============================= */}
      <section className="section" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="hai-bnd" data-reveal>
            <div className="hai-bnd-glow" aria-hidden="true"></div>
            <span className="hai-bnd-lbl">The line we do not cross</span>
            <div className="hai-bnd-line" aria-hidden="true">
              <span></span>
              <svg className="stroke"><use href="#ic-lock" /></svg>
              <span></span>
            </div>
            <h3>
              Nothing posts to your books
              <br />
              because a model was confident.
            </h3>
            <p>
              Every value that becomes an entry is produced or gated by explicit, inspectable, versioned rules. You
              can read the rule, see which version produced a finding, and trace it to the source record and the
              document behind it. Where an agent contributed reasoning, that reasoning is recorded as evidence
              supporting the decision, never as the decision itself.
            </p>
            <p>
              This is a deliberate architectural boundary, not a limitation we are working to remove. A finance
              platform that cannot explain why a number is what it is has not automated your close; it has made
              your close harder to defend.
            </p>
          </div>

          <p className="hai-cta-lead" data-reveal>Every finding we return can be traced to the rule and the document behind it. Test that on your data.</p>
          <div className="hai-sec-cta" data-reveal>
            <a href="/#cta" className="btn btn-primary">
              Tell us your issue{" "}
              <svg className="icon stroke" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg>
            </a>
          </div>
        </div>
      </section>

      {/* ============================= COMPARISON ============================= */}
      <section className="section">
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">What changes</span>
            <h2>Traditional operations vs agentic operations</h2>
          </div>

          <div className="hai-cmp" data-reveal>
            <table>
              <thead>
                <tr>
                  <th>Critical point</th>
                  <th>Traditional</th>
                  <th>With DataTwin agents</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Error handling</td><td>Manual detection, high rework</td><td>Preventive governance plus auto-remediation minimises errors before they post</td></tr>
                <tr><td>Compliance</td><td>Policy checks inconsistent, heavy audit dependency</td><td>Continuous cognitive validation with audit-ready evidence attached</td></tr>
                <tr><td>Cycle time</td><td>Slow approvals from exceptions and rework</td><td>Faster invoice-to-pay, with human-in-the-loop only where it is needed</td></tr>
                <tr><td>Risk management</td><td>Fraud and risk spotted late, reactively</td><td>Risk Intelligence Agent monitors patterns in real time</td></tr>
                <tr><td>Workload</td><td>High manual effort across the team</td><td>Agents absorb the routine work; people move to judgement</td></tr>
                <tr><td>Transparency</td><td>Limited visibility, delayed reporting</td><td>KPI dashboards with proactive communication on breaches and holds</td></tr>
                <tr><td>Audit</td><td>Heavy, after-the-fact correction</td><td>Ongoing assurance in near real time, evidence assembled as work is done</td></tr>
                <tr><td>Scale</td><td>Volume spikes overwhelm systems and teams</td><td>Compute and agents auto-scale; new geographies plug in as new agents</td></tr>
              </tbody>
            </table>
          </div>

          <p className="hai-cta-lead" data-reveal>The fastest way to judge any of this is to point it at your own data.</p>
          <div className="hai-sec-cta" data-reveal>
            <a href="/#cta" className="btn btn-primary">
              What can we recover?{" "}
              <svg className="icon stroke" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg>
            </a>
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
                  <svg className="icon stroke" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg>
                </a>
              </div>
              <div className="cta-email mono">
                Or email us directly at <a href="mailto:solve@datatwin.ai">solve@datatwin.ai</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HowAIScripts />
    </>
  );
}
