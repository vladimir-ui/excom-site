/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — ExCom",
  description:
    "ExCom Limited — Malta-incorporated trader of precious metals raw material. Statutory identity, four-pillar structure, and governance posture.",
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">Home · About</div>
          <h1>The entity behind the bridge.</h1>
          <p className="lede">
            ExCom Limited is a Malta-incorporated, title-taking trader of gold
            and silver doré — sourcing material directly from producers
            across Latin America and Europe, and releasing refined metal
            through LBMA-aligned refineries in the EU and the Middle East.
            Settlement is executed against LBMA AM/PM benchmarks within a
            14-day fix window, with full chain-of-custody documentation and
            counterparty due diligence on every lot. The work runs on the
            ExCom Trading Platform — a single internal operating system that
            doubles as a counterparty execution bridge for producer and
            refinery hedging.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow">Entity</div>
              <h2 className="display display-md">Statutory identity.</h2>
            </div>
            <div className="right">
              <p className="editorial">
                The corporate facts. Held to audit. Provided here to shorten
                counterparty due-diligence cycles.
              </p>
            </div>
          </div>

          <div className="entity-grid">
            <div className="row">
              <span className="key">Legal name</span>
              <span className="val">ExCom Limited</span>
            </div>
            <div className="row">
              <span className="key">Jurisdiction</span>
              <span className="val">Malta</span>
            </div>
            <div className="row">
              <span className="key">Company number</span>
              <span className="val mono">C 112080</span>
            </div>
            <div className="row">
              <span className="key">Incorporated</span>
              <span className="val">21 May 2025</span>
            </div>
            <div className="row">
              <span className="key">VAT</span>
              <span className="val mono">MT31936814</span>
            </div>
            <div className="row">
              <span className="key">Registered office</span>
              <span className="val">BKR 4013 · Birkirkara · Malta</span>
            </div>
            <div className="row">
              <span className="key">Operational hubs</span>
              <span className="val">
                Malta · Sofia, Bulgaria · Lima, Peru
              </span>
            </div>
            <div className="row">
              <span className="key">Operating reach</span>
              <span className="val">
                Europe · USA · LATAM · UAE · India · Asia
              </span>
            </div>
            <div className="row">
              <span className="key">Auditor</span>
              <span className="val">KPMG · Malta</span>
            </div>
            <div className="row">
              <span className="key">Trading status</span>
              <span className="val">Title-taking · Raw material</span>
            </div>
          </div>

          <figure
            className="photo"
            style={{ marginTop: 64, aspectRatio: "21/9" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/photo-about.jpg"
              alt="Long industrial-handling corridor with sealed unmarked steel cargo containers along one wall"
              loading="lazy"
            />
            <figcaption>
              <span className="seq">FIG. 01</span>
              <span className="cap">
                Operating across origin, transit, and refining jurisdictions.
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--surface-card)" }}
      >
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow">Inside the entity</div>
              <h2 className="display display-md">
                One entity. Trading, capital, operations, and compliance under
                one roof.
              </h2>
            </div>
            <div className="right">
              <p className="editorial">
                ExCom is not a holding structure or a federation of arms. It
                is a single trading entity that carries title, capital, and
                compliance on the same balance sheet — the simplest
                configuration for the work it does.
              </p>
            </div>
          </div>

          <div className="function-grid">
            <div className="item">
              <div className="num">01 · Trading</div>
              <h4>Title-taking on the bridge</h4>
              <p>
                ExCom buys raw material at origin, carries it under its own
                balance sheet, and liquidates against LBMA fix benchmarks.
                Every lot is documented from FPA through wheels-up, vault-in,
                assay-exchange, and settlement.
              </p>
            </div>
            <div className="item">
              <div className="num">02 · Capital</div>
              <h4>Working capital, internally held</h4>
              <p>
                The capital that funds sourcing and carries fix-window
                exposure is ExCom's own — sized to the pipeline, calibrated
                against position and concentration limits, held with
                first-tier banking counterparties.
              </p>
            </div>
            <div className="item">
              <div className="num">03 · Operations</div>
              <h4>Logistics, custody, assay</h4>
              <p>
                Routing, insurance, custodial-chain documentation, and
                assay-exchange protocols are run in-house against pre-agreed
                counterparty terms. Vault-in and outturn confirmations are
                hard gates, not service requests.
              </p>
            </div>
            <div className="item">
              <div className="num">04 · Compliance</div>
              <h4>Independent function, same entity</h4>
              <p>
                Compliance reports independently of trading and signs off on
                every counterparty onboarding and re-certification. The OECD
                five-step framework and FATF-aligned AML protocols are
                operationalised at the lot level.
              </p>
            </div>
          </div>
        </div>
      </section>

      <figure className="section-banner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/photo-about-harbour.jpg"
          alt="Grand Harbour, Valletta at blue hour — fortified honey-stone bastions of the Three Cities meet the harbour basin, lit by the warm glow of streetlamps along the waterline."
          loading="lazy"
        />
        <figcaption>
          <span className="seq">FIG. 02 · Place</span>
          <span className="cap">
            Malta — an island built on the movement of cargo across waters.
            ExCom's statutory seat is anchored here for reason as much as
            form.
          </span>
        </figcaption>
      </figure>

      <section className="founding-team">
        <div className="container">
          <div className="eyebrow">Founding team</div>
          <span className="accent" aria-hidden="true"></span>
          <p>
            ExCom is led by a founding team whose combined background covers
            the full precious metals value chain — from mining and
            exploration through doré trading, refinery onboarding, and
            commercial execution.
          </p>
          <p>
            Our experience spans years in mining and exploration across the
            United States, Canada, and Latin America, and the transition from
            production into refining and the commercial side of precious
            metals — giving us direct producer relationships across the
            Andean region. Together we bring more than fifteen years in
            precious metals operations, with hands-on refinery and
            counterparty management and the structuring of cross-border
            supply chains under a compliance framework aligned with LBMA and
            the OECD Due Diligence Guidance. The team also carries
            significant commercial-finance experience and deep operating
            knowledge of the refining sector — the disciplines that govern
            how precious metals are funded, priced, and converted into
            deliverable bar.
          </p>
          <p>
            <em>
              Operations are run with the discipline expected by
              institutional counterparties: written contracts, documented
              assay reconciliation, secured logistics, and transparent
              pricing from origin to refined bar.
            </em>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow">Governance posture</div>
              <h2 className="display display-md">
                Operating discipline, written down.
              </h2>
            </div>
            <div className="right">
              <p className="editorial">
                Governance is treated as substance, not signal. Frameworks
                below are operationalised across the trading lifecycle —
                captured in Forward Purchase Agreements, custody
                documentation, audit logs, and counterparty due-diligence
                files.
              </p>
            </div>
          </div>

          <div className="governance-grid">
            <div className="item">
              <div className="num">01 · Board</div>
              <h4>Independent oversight</h4>
              <p>
                Board approves counterparty onboarding above thresholds, sets
                exposure limits per producer and per refining jurisdiction,
                and reviews quarterly compliance and risk reports.
              </p>
            </div>
            <div className="item">
              <div className="num">02 · Risk</div>
              <h4>Limit framework</h4>
              <p>
                Position, concentration, jurisdiction, and counterparty
                limits set ex-ante. Daily mark against LBMA fix; intraday
                risk against spot. Stress tests run weekly.
              </p>
            </div>
            <div className="item">
              <div className="num">03 · Compliance</div>
              <h4>Independent function</h4>
              <p>
                Compliance reports independently of trading. Sign-off
                required on all counterparty onboarding and re-certification.
                Suspicious-activity protocols documented and audited.
              </p>
            </div>
            <div className="item">
              <div className="num">04 · Audit</div>
              <h4>External attestation</h4>
              <p>
                Annual financial statements audited by KPMG Malta.
                Operational and compliance audits commissioned independently.
                Findings reported to board and made available to
                counterparties under NDA.
              </p>
            </div>
            <div className="item">
              <div className="num">05 · Treasury</div>
              <h4>Capital allocation</h4>
              <p>
                Working capital sized to cover sourcing pipeline plus
                fix-window exposure. Cash held with first-tier banking
                counterparties. Currency and metal exposure managed against
                tolerance bands.
              </p>
            </div>
            <div className="item">
              <div className="num">06 · Records</div>
              <h4>End-to-end ledger</h4>
              <p>
                Every lot tracked from FPA through fix and settlement on the
                ExCom Trading operating system. Full chain-of-custody
                documentation retained per regulatory and counterparty
                requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <figure className="section-banner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/photo-about-discipline.png"
          alt="Overhead view of a typed Compliance Framework Policy document on a dark linen-textured desk. Body sections are numbered 1. Purpose, 2. Scope, 3. Core Principles, 4. Governance & Oversight. The document carries blue-pencil margin annotations (checkmarks, 'see 4.2', 'clarify ownership') and red-pencil notes ('update charter', 'annual attestation'). Three handwritten signatures with typed dates of 12, 13, and 14 April 2023 are visible at the foot under Policy Owner, Reviewed By, and Approved By. A fountain pen rests beside the page; a second sheet sits underneath."
          loading="lazy"
        />
        <figcaption>
          <span className="seq">FIG. 03 · Discipline</span>
          <span className="cap">
            The compliance framework is documentary in form: marked, signed,
            dated, retrievable.
          </span>
        </figcaption>
      </figure>

      <section className="group-context">
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 24 }}>
            Voice
          </div>
          <p>
            ExCom does not market itself to retail audiences. The entity
            speaks to refineries, producers, banks, hedging counterparties,
            and auditors —{" "}
            <em>peer-level, technical, written down.</em>
          </p>
        </div>
      </section>
    </main>
  );
}
