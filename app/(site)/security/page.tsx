import type { Metadata } from "next";
import SecurityScripts from "@/components/SecurityScripts";

export const metadata: Metadata = {
  title: "Security: ISO 27001, SOC 2, RBAC and audit trail | DataTwin",
  description:
    "Read-only by default. ISO 27001 certified and SOC 2 attested, with role-based access control, segregation of duties, encryption in transit and at rest, data residency options and an immutable audit trail on every record.",
};

export default function SecurityPage() {
  return (
    <>
      {/* ============================= HERO ============================= */}
      <section className="hero sec-hero">
        <div className="hero-aurora"></div>
        <div className="ledger-grid"></div>
        <div className="wrap">
          <div className="hero-inner">
            <span className="eyebrow">Across every stage of the platform</span>
            <h1>
              We ask for read access.
              <br />
              <span className="grad-text">Nothing more.</span>
            </h1>
            <p className="hero-desc">
              The first thing we ask any customer for is data, so the first thing we should be able to explain is
              exactly how it is handled. Certifications, access model, encryption, residency and audit trail, in
              the detail your security team will ask for.
            </p>

            <div className="sec-certs" data-reveal>
              <div className="sec-cert dfw-rise">
                <span className="sec-cert-k"><svg className="stroke"><use href="#ic-shield" /></svg></span>
                <h3>ISO 27001 certified</h3>
                <p>An audited information security management system covering the platform, the people who run it and the processes around it.</p>
              </div>
              <div className="sec-cert dfw-rise">
                <span className="sec-cert-k"><svg className="stroke"><use href="#ic-badge" /></svg></span>
                <h3>SOC 2 attested</h3>
                <p>An independent auditor&rsquo;s report on our controls for security, availability and confidentiality. Available under NDA.</p>
              </div>
              <div className="sec-cert dfw-rise">
                <span className="sec-cert-k"><svg className="stroke"><use href="#ic-globe" /></svg></span>
                <h3>Cloud agnostic</h3>
                <p>Prevention deploys on AWS, Azure, GCP or your own private cloud, inside your estate and under your controls.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= READ-ONLY ============================= */}
      <section className="section">
        <div className="arc-glow g-green"></div>
        <div className="wrap">
          <div className="sec-ro" data-reveal>
            <span className="sec-ro-lbl">The default posture</span>
            <h2>
              DataTwin reads. It does not write,
              <br />
              until you decide otherwise.
            </h2>
            <p>
              Discover and Assess require read access and nothing else. There is no agent installed in your
              environment, no schema change in your ERP, no service account with posting rights, and no path by
              which our analysis can alter a record in your books. Write-back exists only in Prevent, only for the
              processes you enable, and only for data that has already passed your rules. It is a decision you make
              later, not a condition of finding out what you are owed.
            </p>
          </div>
        </div>
      </section>

      {/* ============================= CONTROLS ============================= */}
      <section className="section" id="controls" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Controls</span>
            <h2>How the platform is protected</h2>
            <p>The controls a finance or security reviewer asks about, described plainly rather than as a list of logos.</p>
          </div>

          <div className="sec-ctrl-grid" data-reveal>
            <div className="sec-ctrl dfw-rise">
              <div className="sec-ctrl-head">
                <span className="sec-ctrl-k"><svg className="stroke"><use href="#ic-user" /></svg></span>
                <h3>Access control &amp; RBAC</h3>
              </div>
              <p>Every permission is granted to a role, never to a person directly, and every role is scoped to the narrowest set of data and actions that role actually needs.</p>
              <ul>
                <li><b>Role-based access control</b> across entity, process area, period and data class: a rebate analyst sees rebate data for their entities, and nothing else</li>
                <li><b>Least privilege by default.</b> New users start with no access; entitlements are added deliberately and reviewed periodically</li>
                <li><b>Segregation of duties</b> enforced in the model: the person who edits a rule cannot be the person who approves an exception raised by it</li>
                <li><b>SSO and SAML 2.0</b> against your identity provider, with MFA inherited from your own policy</li>
                <li><b>SCIM provisioning</b> so leavers lose access when your directory says so, not when someone remembers</li>
                <li><b>Session controls</b>: configurable timeout, device and IP restrictions, forced re-authentication for sensitive actions</li>
              </ul>
            </div>

            <div className="sec-ctrl dfw-rise">
              <div className="sec-ctrl-head">
                <span className="sec-ctrl-k"><svg className="stroke"><use href="#ic-lock" /></svg></span>
                <h3>Encryption &amp; key handling</h3>
              </div>
              <p>Data is encrypted everywhere it sits and everywhere it moves, with keys managed separately from the data they protect.</p>
              <ul>
                <li><b>TLS 1.2+ in transit</b> for every connection, including internal service-to-service traffic</li>
                <li><b>AES-256 at rest</b> across databases, object storage, backups and snapshots</li>
                <li><b>Managed key service</b> with scheduled rotation; customer-managed keys available on private deployments</li>
                <li><b>Secrets isolated</b> from application code and configuration, never written to logs</li>
                <li><b>Credentials for source systems</b> stored encrypted and scoped read-only wherever the source supports it</li>
              </ul>
            </div>

            <div className="sec-ctrl dfw-rise">
              <div className="sec-ctrl-head">
                <span className="sec-ctrl-k"><svg className="stroke"><use href="#ic-doc" /></svg></span>
                <h3>Audit trail &amp; evidence</h3>
              </div>
              <p>Auditability is not a reporting feature bolted on afterwards; it is how the platform records its own work, which is what makes findings defensible.</p>
              <ul>
                <li><b>Immutable audit trail</b> on every record: what changed, when, by whom or by which rule, and what the value was before</li>
                <li><b>Every finding traceable</b> to the source transaction and the document that supports it</li>
                <li><b>Rule versioning</b>: you can reconstruct which version of a rule produced a finding, and when it changed</li>
                <li><b>Access logging</b> on reads as well as writes, so you can answer who looked at what</li>
                <li><b>Exportable evidence packs</b> for your auditor, assembled as the work is done rather than reconstructed later</li>
              </ul>
            </div>

            <div className="sec-ctrl dfw-rise">
              <div className="sec-ctrl-head">
                <span className="sec-ctrl-k"><svg className="stroke"><use href="#ic-shield" /></svg></span>
                <h3>Operations &amp; assurance</h3>
              </div>
              <p>The controls around the people and processes that run the platform, which is the half of ISO 27001 that software alone does not cover.</p>
              <ul>
                <li><b>Secure SDLC</b> with peer review, dependency scanning and static analysis before release</li>
                <li><b>Independent penetration testing</b>, with findings tracked to closure</li>
                <li><b>Vulnerability management</b> against defined remediation windows by severity</li>
                <li><b>Documented incident response</b> with defined notification commitments, available in the security pack</li>
                <li><b>Backup and disaster recovery</b> tested to agreed RPO and RTO targets</li>
                <li><b>Background-checked staff</b>, security training, and access reviews on a fixed cycle</li>
                <li><b>Sub-processor register</b> maintained and disclosed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= RBAC MATRIX ============================= */}
      <section className="section">
        <div className="arc-glow g-blue"></div>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Role-based access</span>
            <h2>Who can do what</h2>
            <p>
              An illustrative role model. Roles are configured to your organisation; these are the shapes most
              customers start from, and every one is scoped further by entity, process area and period.
            </p>
          </div>

          <div className="sec-mtx" data-reveal>
            <table>
              <thead>
                <tr>
                  <th>Role</th>
                  <th>View findings</th>
                  <th>Drill to source</th>
                  <th>Edit rules</th>
                  <th>Approve exceptions</th>
                  <th>Release write-back</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Analyst</td><td className="yes">Yes</td><td className="yes">Yes</td><td className="no">No</td><td className="no">No</td><td className="no">No</td></tr>
                <tr><td>Process owner</td><td className="yes">Yes</td><td className="yes">Yes</td><td className="no">Propose only</td><td className="yes">Yes</td><td className="no">No</td></tr>
                <tr><td>Controller</td><td className="yes">Yes</td><td className="yes">Yes</td><td className="yes">Yes</td><td className="yes">Yes</td><td className="yes">Yes</td></tr>
                <tr><td>Internal audit</td><td className="yes">Yes</td><td className="yes">Yes</td><td className="no">No</td><td className="no">No</td><td className="no">No</td></tr>
                <tr><td>External auditor</td><td className="yes">Read-only, scoped</td><td className="yes">Yes</td><td className="no">No</td><td className="no">No</td><td className="no">No</td></tr>
                <tr><td>Administrator</td><td className="no">Config only</td><td className="no">No</td><td className="yes">Yes</td><td className="no">No</td><td className="no">No</td></tr>
              </tbody>
            </table>
            <p className="sec-mtx-note">
              Note the last two rows. An external auditor gets a scoped, read-only view with full drill-down and no
              ability to change anything, so you can give evidence access without giving system access. And an
              administrator who configures roles cannot approve exceptions or release write-back, because whoever
              controls permissions should never also be able to use them.
            </p>
          </div>
        </div>
      </section>

      {/* ============================= RESIDENCY ============================= */}
      <section className="section" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Where the data sits</span>
            <h2>Different answers for different stages</h2>
            <p>This distinction matters, so we state it rather than hiding behind &ldquo;cloud agnostic&rdquo;.</p>
          </div>

          <div className="sec-res" data-reveal>
            <div className="sec-r dfw-rise">
              <div className="sec-r-lbl">Discover &amp; Assess · the diagnostic</div>
              <h3>Runs in the DataTwin cloud</h3>
              <p>
                You send an extract, we analyse it in our environment, and you get the findings back. Nothing is
                installed, no infrastructure decision is required, and no change is made to your systems, which is
                the point of a stage that exists to tell you whether the number is worth acting on. Data residency
                options are available where a jurisdiction requires it, and retention is agreed before you send
                anything.
              </p>
            </div>
            <div className="sec-r is-prevent dfw-rise">
              <div className="sec-r-lbl">Prevent · the product</div>
              <h3>Deploys wherever you want it</h3>
              <p>
                Prevention sits permanently alongside your ERP, so it lives inside your own estate and under your
                own controls. Cloud agnostic in practice, not just in principle: the same application, deployed to
                whichever provider your architecture and your regulator require.
              </p>
              <div className="sec-clouds">
                <span>AWS</span><span>Azure</span><span>GCP</span><span>Your private cloud</span><span>Your region</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= FAQ ============================= */}
      <section className="section" id="faq">
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Security review</span>
            <h2>What your team will ask</h2>
          </div>

          <div className="dfw-faq" data-reveal>
            <div className="dfw-q">
              <button className="dfw-q-btn" type="button">Can we see the SOC 2 report and the ISO certificate? <svg className="stroke"><use href="#ic-chev" /></svg></button>
              <div className="dfw-q-body">
                <p>Yes. The ISO 27001 certificate is shareable on request. The SOC 2 report is available under NDA, together with our security pack: architecture overview, sub-processor register, incident response summary, penetration test summary and completed responses to the common questionnaires.</p>
              </div>
            </div>

            <div className="dfw-q">
              <button className="dfw-q-btn" type="button">Do you need write access to our ERP? <svg className="stroke"><use href="#ic-chev" /></svg></button>
              <div className="dfw-q-body">
                <p>Not for Discover or Assess. Those stages are read-only and cannot alter a record in your systems. Write-back is a Prevent capability, enabled per process, scoped to validated data, and released under a role that is separate from the one that configures rules.</p>
              </div>
            </div>

            <div className="dfw-q">
              <button className="dfw-q-btn" type="button">How long do you keep our data? <svg className="stroke"><use href="#ic-chev" /></svg></button>
              <div className="dfw-q-body">
                <p>Retention is agreed before you send anything and written into the engagement. If you decide not to proceed after Discover, we delete on request and confirm in writing. Nothing is retained for model training.</p>
              </div>
            </div>

            <div className="dfw-q">
              <button className="dfw-q-btn" type="button">Is our data used to train models? <svg className="stroke"><use href="#ic-chev" /></svg></button>
              <div className="dfw-q-body">
                <p>No. Your data is used to produce your findings. It is not used to train models, and it is not pooled with other customers&rsquo; data. Where the platform learns, it learns within your own tenant from your own corrections and outcomes.</p>
              </div>
            </div>

            <div className="dfw-q">
              <button className="dfw-q-btn" type="button">Can we restrict access by entity or region? <svg className="stroke"><use href="#ic-chev" /></svg></button>
              <div className="dfw-q-body">
                <p>Yes. Roles are scoped by entity, process area, period and data class, so a user in one region can be given access to that region&rsquo;s data only. This is a common requirement in multi-entity groups and it is configured rather than customised.</p>
              </div>
            </div>

            <div className="dfw-q">
              <button className="dfw-q-btn" type="button">What happens if there is an incident? <svg className="stroke"><use href="#ic-chev" /></svg></button>
              <div className="dfw-q-body">
                <p>We run a documented incident response process with defined severity levels, containment steps and notification commitments. The specific timelines we commit to are stated in the security pack and in the contract rather than promised loosely here.</p>
              </div>
            </div>

            <div className="dfw-q">
              <button className="dfw-q-btn" type="button">Who at DataTwin can see our data? <svg className="stroke"><use href="#ic-chev" /></svg></button>
              <div className="dfw-q-body">
                <p>Access is least-privilege and role-based internally as well. Engineers do not have standing access to customer data; access for support or investigation is time-bound, approved, and logged in the same audit trail you can see.</p>
              </div>
            </div>
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
              <h2>Read access is the whole ask.</h2>
              <p>
                Discover runs on an extract, in about two minutes, and tells you what is recoverable. Nothing is
                installed, nothing changes in your systems, and you decide everything that happens next.
              </p>
              <div className="cta-buttons">
                <a href="/#top" className="btn btn-primary">
                  What can we recover? <svg className="icon stroke" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg>
                </a>
              </div>
              <div className="cta-email mono">
                Or email us directly at <a href="mailto:solve@datatwin.ai">solve@datatwin.ai</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SecurityScripts />
    </>
  );
}
