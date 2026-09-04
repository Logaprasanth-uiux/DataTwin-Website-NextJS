import type { Metadata } from "next";
import CloseKpiCatalogueScripts from "@/components/CloseKpiCatalogueScripts";
import { DOMAINS, METRICS, TOTALS } from "./metrics";

export const metadata: Metadata = {
  title: "The Close KPI Catalogue: all 204 metrics | DataTwin",
  description:
    "Every metric in the FSCP framework: 8 domains, 56 close processes and 204 close-blocker metrics, each with the population it is measured against. Filter by domain, search by text, or download the whole catalogue as a PDF.",
};

const PDF = "/close-kpi-catalogue.pdf";

const NAME_BY_CODE = Object.fromEntries(DOMAINS.map((d) => [d.code, d.name]));

export default function CloseKpiCataloguePage() {
  return (
    <div className="ckc-page">
      {/* ============================= HERO ============================= */}
      <section className="hero ckc-hero">
        <div className="hero-aurora"></div>
        <div className="ledger-grid"></div>
        <div className="wrap">
          <div className="hero-inner">
            <span className="eyebrow">Close KPI Catalogue</span>
            <h1>
              All <span className="grad-text">204</span> of them.
              <br />
              Every one a close blocker.
            </h1>
            <p className="hero-desc">
              This is the full FSCP register: eight domains, 56 close processes
              and 204 metrics. Every one measures something that can hold up a
              close, never a completion percentage, and every one carries the
              population it is measured against. Filter by domain, search for the
              thing you are worried about, or take the whole catalogue away as a
              PDF.
            </p>
            <div className="ckc-chips">
              <span className="ckc-chip">
                <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-check" /></svg>
                8 domains &middot; 56 close processes &middot; 204 metrics
              </span>
              <span className="ckc-chip">
                <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-check" /></svg>
                Every metric is a blocker, not a statistic
              </span>
              <span className="ckc-chip">
                <svg className="stroke" viewBox="0 0 24 24"><use href="#ic-check" /></svg>
                Free to use, whether or not you talk to us
              </span>
            </div>
            <div className="ckc-hero-actions">
              <a href="/#cta" className="btn btn-primary">
                Score my last close{" "}
                <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg>
              </a>
              <a href="/fscp" className="btn btn-ghost">How FSCP works</a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= COUNTS ============================= */}
      <section className="section ckc-counts-sec">
        <div className="wrap">
          <div className="ckc-counts" data-reveal>
            <div className="ckc-cnt"><b>{TOTALS.domains}</b><span>Domains</span></div>
            <div className="ckc-cnt"><b>{TOTALS.processes}</b><span>Close processes</span></div>
            <div className="ckc-cnt"><b>{TOTALS.metrics}</b><span>KPI metrics</span></div>
            <div className="ckc-cnt is-g"><b>R/O/G</b><span>Colour logic</span></div>
          </div>
          <div className="ckc-sec-cta" data-reveal id="download">
            <a href={PDF} download className="btn btn-primary">
              Download the catalogue as a PDF{" "}
              <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg>
            </a>
            <a href="/fscp" className="btn btn-ghost">How the framework works</a>
          </div>
        </div>
      </section>

      {/* ============================= HOW TO READ ============================= */}
      <section className="section ckc-read-sec" style={{ background: "var(--bg-panel-2)" }}>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">Reading the catalogue</span>
            <h2>How to read a line</h2>
            <p>
              Each metric is a count of things in a bad state, measured against
              the population it came from. That pairing is what turns a number
              into a decision: 14 unposted journals out of 140 is a different
              afternoon from 14 out of 14,000.
            </p>
          </div>
          <div className="ckc-read" data-reveal>
            <div className="ckc-read-c dfw-rise">
              <span className="ckc-read-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-layers" /></svg></span>
              <h4>Domain and close process</h4>
              <p>
                Which of the eight domains it belongs to, and which close process
                inside it. A metric means the same thing in March as it does in
                September.
              </p>
            </div>
            <div className="ckc-read-c dfw-rise">
              <span className="ckc-read-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-misstate" /></svg></span>
              <h4>The close blocker</h4>
              <p>
                What is being counted, always stated as a problem: pending,
                unmatched, unposted, breaching, missing or unapproved. Never a
                completion rate.
              </p>
            </div>
            <div className="ckc-read-c dfw-rise">
              <span className="ckc-read-k"><svg className="stroke" viewBox="0 0 24 24"><use href="#ic-schema" /></svg></span>
              <h4>Measured against</h4>
              <p>
                The denominator. Value over total count gives the issue
                percentage, and your thresholds turn that into a colour. Nothing
                else is entered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================= CATALOGUE ============================= */}
      <section className="section ckc-cat-sec">
        <div className="arc-glow g-blue"></div>
        <div className="wrap">
          <div className="section-head-center">
            <span className="eyebrow">All 204 metrics</span>
            <h2>The catalogue</h2>
            <p>
              Filter by domain or search across every field. Thresholds are yours
              to set; the questions are the same for everybody.
            </p>
          </div>

          <div className="ckc-filt" data-reveal>
            <button type="button" data-domain="all" aria-pressed="true">All domains</button>
            {DOMAINS.map((d) => (
              <button key={d.code} type="button" data-domain={d.code} aria-pressed="false">
                {d.code} &middot; {d.name}
              </button>
            ))}
            <input
              type="search"
              id="ckc-q"
              placeholder="Search metrics, e.g. accrual, GR/IR, sign-off"
              aria-label="Search the catalogue"
            />
            <span className="ckc-fcount" id="ckc-fc">{TOTALS.metrics} metrics</span>
          </div>

          <div className="ckc-cat" data-reveal>
            <table>
              <thead>
                <tr>
                  <th>Domain</th>
                  <th>Close process</th>
                  <th>Close blocker metric</th>
                  <th>Measured against</th>
                </tr>
              </thead>
              <tbody id="ckc-tb">
                {METRICS.map((m, i) => (
                  <tr
                    key={i}
                    data-domain={m.domain}
                    data-text={`${m.code} ${NAME_BY_CODE[m.code] ?? ""} ${m.process} ${m.metric} ${m.against}`.toLowerCase()}
                  >
                    <td className="ckc-k-c">{m.code}</td>
                    <td className="ckc-k-s">{m.process}</td>
                    <td className="ckc-k-m">{m.metric}</td>
                    <td className="ckc-k-d">{m.against}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="ckc-cat-none" id="ckc-none" hidden>
              No metric matches that search.
            </div>
          </div>

          <div className="ckc-sec-cta" data-reveal>
            <a href={PDF} download className="btn btn-ghost">
              Download as a PDF{" "}
              <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg>
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
                We can score a close you have
                <br />
                already signed.
              </h2>
              <p>
                Send us the data for a period you have already closed. We run all
                204 metrics across the full population, not a sample, and come
                back with what was blocking that close and what it was worth.
                Nothing changes in your systems, and it happens before there is
                anything to sign.
              </p>
              <div className="cta-buttons">
                <a href="/#cta" className="btn btn-primary">
                  Score my last close{" "}
                  <svg className="icon stroke" viewBox="0 0 24 24" style={{ width: "16px", height: "16px" }}><use href="#ic-arrow-right" /></svg>
                </a>
              </div>
              <div className="cta-email mono">
                Or email us directly at{" "}
                <a href="mailto:solve@datatwin.ai">solve@datatwin.ai</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CloseKpiCatalogueScripts />
    </div>
  );
}
