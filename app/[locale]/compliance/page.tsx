/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance — ExCom",
  description:
    "OECD five-step framework, KYC stack, audit cadence, SAR protocol, and governance posture for ExCom Limited.",
};

export default function CompliancePage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">Home · Compliance</div>
          <h1>Compliance.</h1>
          <p className="lede">
            ExCom built and operates a single internal trading platform —
            the ExCom Trading Platform — that runs every lot from origin to
            settlement: order capture, counterparty data, transit, pricing
            window, audit trail. Compliance is one chapter of that
            platform, the chapter that proves what the others did. Doré
            moves through opacity. The work of buying it is therefore
            inseparable from the work of seeing through that opacity —
            origin verification, counterparty discipline, transaction
            monitoring, and a documentary trail that survives an audit five
            years on.
          </p>
          <div className="hero-frameworks">
            <div className="fw">
              <div className="lbl">Statutory</div>
              <div className="val">AML/CFT (Malta)</div>
            </div>
            <div className="fw">
              <div className="lbl">Origin</div>
              <div className="val">OECD DDG</div>
            </div>
            <div className="fw">
              <div className="lbl">Refining</div>
              <div className="val">LBMA RGG</div>
            </div>
            <div className="fw">
              <div className="lbl">Voluntary</div>
              <div className="val">RJC CoC</div>
            </div>
          </div>
        </div>
      </section>

      <figure className="compliance-banner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/photo-compliance-architecture.jpg"
          alt="Bronze sculptural relief mounted on a Maltese limestone facade in central Valletta — a memorial group of figures, with a baroque clock tower visible beyond."
          loading="lazy"
        />
        <figcaption>
          <span className="seq">FIG. 00 · Jurisdiction</span>
          <span className="cap">
            Malta — the statutory perimeter under which ExCom operates.
            AML/CFT, audit, and board governance are anchored here.
          </span>
        </figcaption>
      </figure>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow">Posture</div>
              <h2 className="display display-md">
                Posture, not posture-taking.
              </h2>
            </div>
            <div className="right">
              <p className="editorial">
                Public-facing compliance pages tend to drift toward
                declarative virtue — a list of what a firm believes. That
                is not what compliance is. Compliance is a set of
                operational artifacts: questionnaires returned, transactions
                monitored, alerts adjudicated, files preserved. This page
                describes the artifacts, not the beliefs.
              </p>
              <p>
                The frameworks below are not equally weighted. Maltese
                AML/CFT statute is binding; it sets the floor. The OECD Due
                Diligence Guidance is the operating manual the trading book
                runs on day-to-day. LBMA Responsible Gold Guidance is the
                standard refineries hold ExCom to as their counterparty. RJC
                Chain of Custody is voluntary alignment to industry best
                practice for downstream traceability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--surface-card)" }}
      >
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow">Origin diligence</div>
              <h2 className="display display-md">
                The five OECD steps, applied.
              </h2>
            </div>
            <div className="right">
              <p className="editorial">
                The OECD Due Diligence Guidance for Responsible Supply
                Chains of Minerals from Conflict-Affected and High-Risk
                Areas is the lingua franca of doré sourcing. ExCom applies
                it in the form intended by the OECD — a five-step
                risk-based management system, not a checkbox.
              </p>
            </div>
          </div>

          <figure
            className="photo aspect-16x9"
            style={{ marginTop: 40, marginBottom: 56 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/photo-compliance-archive.jpg"
              alt="A hand reaching into a row of identical white lever-arch binders on an open shelf, lit from a window beyond."
              loading="lazy"
            />
            <figcaption>
              <span className="seq">FIG. 01 · Records</span>
              <span className="cap">
                The OECD steps live or die on documentation. Counterparty
                files, risk-response logs, and audit working papers are
                retained for the statutory five-year window.
              </span>
            </figcaption>
          </figure>

          <div className="oecd-steps">
            <div className="oecd-step">
              <div className="step-num">Step 01</div>
              <h3>Establish strong company management systems</h3>
              <p>
                A documented supply-chain policy aligned to OECD Annex II,
                embedded in counterparty contracts. A nominated senior
                compliance officer accountable to the board for
                chain-of-custody integrity. Counterparty and transaction
                records preserved for five years. Internal training cadence
                covering compliance, finance, and operations staff annually.
              </p>
              <div className="evidence">
                <span>Evidence</span> Policy register · officer mandate ·
                training log · records-retention schedule
              </div>
            </div>

            <div className="oecd-step">
              <div className="step-num">Step 02</div>
              <h3>Identify and assess risks in the supply chain</h3>
              <p>
                Origin verification at first counterparty: producer KYC,
                ultimate beneficial ownership, jurisdictional risk
                screening, sanctions screening (UN, EU, OFAC, UK), PEP
                screening, adverse-media review. Annex II red-flag screen
                against each producer-and-route combination, refreshed at
                every transaction. Lots originating in CAHRA jurisdictions
                or routed through them are escalated for enhanced diligence
                ex-ante.
              </p>
              <div className="evidence">
                <span>Evidence</span> Producer KYC dossier · UBO chart ·
                screening hits log · Annex II risk score per lot
              </div>
            </div>

            <div className="oecd-step">
              <div className="step-num">Step 03</div>
              <h3>
                Design and implement a strategy to respond to identified
                risks
              </h3>
              <p>
                Where risk is identified, the response is graduated:
                enhanced controls, mitigation timeline negotiated with the
                counterparty, or — where mitigation is not possible —
                disengagement. Disengagement decisions are board-approved
                and documented. Risk-mitigation timelines are tracked to
                closure, with periodic reassessment of whether mitigation is
                in fact occurring.
              </p>
              <div className="evidence">
                <span>Evidence</span> Risk-response register · mitigation
                milestone tracker · disengagement minutes
              </div>
            </div>

            <div className="oecd-step">
              <div className="step-num">Step 04</div>
              <h3>Carry out independent third-party audit</h3>
              <p>
                The supply-chain due diligence system is subject to
                independent assurance against the OECD Guidance and the
                LBMA Responsible Gold Guidance. The audit covers policy,
                governance, risk identification, risk response, transactional
                sampling, and records integrity. Audit findings, management
                response, and remediation timelines are formally tabled with
                senior management.
              </p>
              <div className="evidence">
                <span>Evidence</span> Annual independent assurance report ·
                management response · remediation log
              </div>
            </div>

            <div className="oecd-step">
              <div className="step-num">Step 05</div>
              <h3>Report on supply-chain due diligence</h3>
              <p>
                An annual public-facing supply-chain due diligence report is
                published, summarising scope, jurisdictions sourced, risks
                identified, responses taken, audit outcome, and management
                actions. Counterparty-specific information is redacted;
                aggregate statistics are disclosed. The report is the
                primary external accountability artifact.
              </p>
              <div className="evidence">
                <span>Evidence</span> Annual SCDD report · audit summary ·
                aggregate sourcing statistics
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow">Counterparty diligence</div>
              <h2 className="display display-md">The KYC stack.</h2>
            </div>
            <div className="right">
              <p className="editorial">
                Every counterparty — producer, refinery, logistics
                provider, banking counterparty — passes through the same
                intake protocol before any commercial relationship is
                opened. The stack is described below in functional terms;
                specific provider names are confidential and disclosed under
                engagement.
              </p>
            </div>
          </div>

          <div className="kyc-stack">
            <div className="layer">
              <div className="layer-num">L1</div>
              <h4>Identity &amp; structure</h4>
              <p>
                Legal entity verification, beneficial ownership chart to
                natural persons (≥10% threshold), board and signatory map,
                regulatory licence verification where applicable, articles
                of association.
              </p>
            </div>
            <div className="layer">
              <div className="layer-num">L2</div>
              <h4>Sanctions, PEP &amp; adverse media</h4>
              <p>
                Continuous screening against UN, EU, OFAC, UK sanctions
                lists; politically-exposed persons screening at UBO and
                signatory level; structured adverse-media sweep with hits
                triaged by a compliance analyst, not auto-cleared.
              </p>
            </div>
            <div className="layer">
              <div className="layer-num">L3</div>
              <h4>Source-of-funds &amp; source-of-wealth</h4>
              <p>
                For producer counterparties, evidence of operational
                provenance — production licence, mining title, royalty
                arrangements. For institutional counterparties, audited
                financials and banking references. Source-of-funds is
                verified per transaction above defined thresholds.
              </p>
            </div>
            <div className="layer">
              <div className="layer-num">L4</div>
              <h4>Operational diligence</h4>
              <p>
                Site visits to producer counterparties at material
                engagement thresholds. Independent assay and weight
                verification. Logistics and insurance counterparty due
                diligence. Refinery accreditation status verification (LBMA
                Good Delivery, RJC certification).
              </p>
            </div>
            <div className="layer">
              <div className="layer-num">L5</div>
              <h4>Ongoing monitoring</h4>
              <p>
                Annual KYC refresh as standard; trigger-based refresh on
                adverse-media hit, sanctions update, ownership change, or
                material transaction-pattern deviation. Transaction
                monitoring with parametrised thresholds, alerts adjudicated
                within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--surface-card)" }}
      >
        <div className="container">
          <div className="audit-grid">
            <div className="left">
              <div className="eyebrow">Audit cadence</div>
              <h2 className="display display-md">Three audit clocks.</h2>
              <p className="editorial">
                Audit is not a single annual event. ExCom runs three
                concurrent audit cadences, calibrated to what each is meant
                to surface.
              </p>
              <figure
                className="photo aspect-16x9"
                style={{ marginTop: 32 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/photo-vault-custody.jpg"
                  alt="An open vault door, viewed at a low oblique angle, showing chrome locking pins drawn back and an electronic keypad on the inner face."
                  loading="lazy"
                />
                <figcaption>
                  <span className="seq">FIG. 02 · Custody</span>
                  <span className="cap">
                    Records are held under controlled access —
                    chain-of-custody is the audit substrate, not a metaphor.
                  </span>
                </figcaption>
              </figure>
            </div>

            <div className="audit-cards">
              <article className="audit-card">
                <div className="cadence">Annual</div>
                <h4>Statutory financial audit</h4>
                <p>
                  Conducted under International Standards on Auditing by an
                  independent registered audit firm. Covers financial
                  statements, internal controls over financial reporting,
                  going concern, and related-party disclosure.
                </p>
                <div className="meta-row">
                  <span>Auditor</span> <span>KPMG (Malta)</span>
                </div>
                <div className="meta-row">
                  <span>Cycle</span> <span>Calendar-year</span>
                </div>
              </article>

              <article className="audit-card">
                <div className="cadence">Annual</div>
                <h4>Supply-chain due diligence audit</h4>
                <p>
                  Independent third-party assurance against OECD DDG and
                  LBMA RGG. Covers policy, governance, risk identification,
                  risk response, transactional sampling, and records
                  integrity. Findings tabled with management; remediation
                  tracked to closure.
                </p>
                <div className="meta-row">
                  <span>Standard</span> <span>OECD · LBMA</span>
                </div>
                <div className="meta-row">
                  <span>Cycle</span> <span>Calendar-year</span>
                </div>
              </article>

              <article className="audit-card">
                <div className="cadence">Quarterly</div>
                <h4>Internal compliance review</h4>
                <p>
                  Internal sample-based review of KYC files, transaction
                  monitoring alerts, suspicious-activity reports filed,
                  sanctions screening hits, and risk-register updates.
                  Findings delivered to the senior compliance officer and
                  tabled at the next governance meeting.
                </p>
                <div className="meta-row">
                  <span>Owner</span> <span>Compliance function</span>
                </div>
                <div className="meta-row">
                  <span>Cycle</span> <span>Q1 · Q2 · Q3 · Q4</span>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow">Suspicious activity</div>
              <h2 className="display display-md">Reporting protocol.</h2>
            </div>
            <div className="right">
              <p className="editorial">
                Where transaction patterns or counterparty behaviour cross
                defined thresholds, ExCom files a Suspicious Transaction
                Report with the Maltese Financial Intelligence Analysis
                Unit (FIAU). The protocol below governs how that
                determination is made and how it is documented.
              </p>
            </div>
          </div>

          <div className="sar-protocol">
            <div className="sar-step">
              <div className="num">01</div>
              <div className="body">
                <h4>Detection</h4>
                <p>
                  Alerts generated by transaction monitoring, by sanctions
                  / PEP / adverse-media screening, or by frontline staff
                  observation are logged in a single alert register within
                  one business day of detection.
                </p>
              </div>
            </div>
            <div className="sar-step">
              <div className="num">02</div>
              <div className="body">
                <h4>Triage</h4>
                <p>
                  The compliance function adjudicates each alert within 48
                  hours. Adjudication is recorded with a reasoned decision:
                  cleared, escalated, or referred to the senior compliance
                  officer for STR consideration.
                </p>
              </div>
            </div>
            <div className="sar-step">
              <div className="num">03</div>
              <div className="body">
                <h4>STR determination</h4>
                <p>
                  Where suspicion meets the statutory threshold, the senior
                  compliance officer prepares the report and files with
                  the FIAU within the statutory window. Filing is documented
                  in a confidential STR register accessible only to the
                  compliance function.
                </p>
              </div>
            </div>
            <div className="sar-step">
              <div className="num">04</div>
              <div className="body">
                <h4>Tipping-off prohibition</h4>
                <p>
                  Under Maltese statute, the existence of an STR may not be
                  disclosed to the counterparty. ExCom maintains internal
                  information-barrier controls to prevent inadvertent
                  disclosure during ongoing commercial dialogue.
                </p>
              </div>
            </div>
            <div className="sar-step">
              <div className="num">05</div>
              <div className="body">
                <h4>Continuation or termination</h4>
                <p>
                  Filing an STR does not automatically terminate a
                  counterparty relationship. The board takes a separate,
                  documented decision on continuation, taking into account
                  FIAU guidance where given, and the wider counterparty
                  risk profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--surface-card)" }}
      >
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow">Governance</div>
              <h2 className="display display-md">Where compliance sits.</h2>
            </div>
            <div className="right">
              <p className="editorial">
                Compliance reports independently of the trading function.
                The senior compliance officer has a direct reporting line to
                the board, with authority to halt transactions where
                compliance thresholds are not met.
              </p>
            </div>
          </div>

          <div className="governance-grid">
            <div className="g-item">
              <h4>Senior compliance officer</h4>
              <p>
                Mandated by the board, responsible for the AML/CFT
                programme, OECD DDG implementation, and STR filings.
                Reports to the board, not to the trading function. Holds
                authority to halt transactions.
              </p>
            </div>
            <div className="g-item">
              <h4>Board oversight</h4>
              <p>
                The board reviews the compliance dashboard at every
                quarterly meeting: KYC pipeline, alert volumes, STR
                statistics, audit findings, and risk-register movements.
                Material items are tabled out-of-cycle on a same-week basis.
              </p>
            </div>
            <div className="g-item">
              <h4>Independence</h4>
              <p>
                Compliance budget, hiring, and engagement of external
                auditors and counsel are not subject to trading-function
                approval. The independent audit firm is appointed by the
                board on a multi-year mandate.
              </p>
            </div>
            <div className="g-item">
              <h4>Whistleblowing</h4>
              <p>
                A confidential channel is available to staff and
                counterparties for reporting suspected breaches of policy,
                statute, or industry standard. Reports are received by the
                senior compliance officer; retaliation is prohibited under
                board policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-rail">
        <div className="container">
          <div className="left">
            <div className="eyebrow">Counterparty enquiries</div>
            <h3 className="display display-md">
              Compliance documentation available under engagement.
            </h3>
          </div>
          <div className="right">
            <p>
              Counterparty compliance packets — supply-chain due diligence
              report, KYC questionnaire, statutory licence evidence, audit
              summary — are released to qualified counterparties under
              written request. Routed via the compliance function.
            </p>
            <a
              className="cta"
              href="mailto:info@ex-com.org?subject=Compliance%20documentation%20request"
            >
              info@ex-com.org →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
