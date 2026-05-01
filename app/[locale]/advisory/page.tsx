/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Advisory — ExCom",
  description:
    "Advisory and consultancy services to producers — counterparty diligence, refinery onboarding, capital introduction, and cross-border execution.",
};

export default function AdvisoryPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">Home · Advisory</div>
          <h1>Advisory &amp; consultancy.</h1>
          <p className="lede">
            Beyond title-taking, ExCom advises producers on what it takes to
            be sourceable — the protocols, documentation, and counterparty
            fit that move raw material from origin into the LBMA-aligned
            refining circuit. The advisory practice draws on the same
            operating bench that runs the trading book: mining and
            exploration, refining, commercial finance, and cross-border
            execution.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow">Audience</div>
              <h2 className="display display-md">Built for producers.</h2>
            </div>
            <div className="right">
              <p className="editorial">
                The advisory engagements are aimed at producers — mine
                operators, collectors, aggregators, and producer-side service
                entities who need to make their material sourceable to
                institutional buyers. The work is technical and
                deliverables-oriented; ExCom does not run general consulting
                mandates.
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
              <div className="eyebrow">Service lines</div>
              <h2 className="display display-md">Four practice areas.</h2>
            </div>
            <div className="right">
              <p className="editorial">
                Each line is a structured engagement with named deliverables,
                a defined scope, and a fixed timeline. Engagements are quoted
                ex-ante; ExCom does not bill on retainer for advisory
                mandates that have not been scoped.
              </p>
            </div>
          </div>

          <figure
            className="photo aspect-16x9"
            style={{ marginTop: 48, marginBottom: 56 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/photo-advisory-origin.png"
              alt="A producer's mill-gate desk: a small electronic balance reading 125.30, four numbered kraft sample envelopes (M00125 through M00128), an open ledger headed Sample Weight Record with hand-written entries in blue ink, a stamped mining licence document, and a window onto the mine site beyond."
              loading="lazy"
            />
            <figcaption>
              <span className="seq">FIG. 01 · At origin</span>
              <span className="cap">
                A producer's mill-gate desk — sample envelopes weighed,
                ledger entries handwritten, licence on file. Advisory work
                begins here, not at the refinery counter.
              </span>
            </figcaption>
          </figure>

          <div className="advisory-grid">
            <div className="item">
              <div className="num">01</div>
              <h3>Counterparty &amp; origin diligence</h3>
              <p className="lede-line">
                Vetting producer counterparties for refinery-grade intake.
              </p>
              <p>
                Origin verification, assay-protocol review, chain-of-custody
                readiness, and counterparty profile assembly. The output is a
                structured intake dossier that a refinery's compliance desk
                can sign off on — KYC, beneficial ownership, OECD Annex II
                risk screen, weight and assay history, sample legitimacy.
              </p>
              <div className="meta">
                <span>Deliverable</span>
                <span className="val">Producer intake dossier</span>
              </div>
              <div className="meta">
                <span>Typical timeline</span>
                <span className="val">4–6 weeks</span>
              </div>
            </div>

            <div className="item">
              <div className="num">02</div>
              <h3>Refinery onboarding</h3>
              <p className="lede-line">
                Preparing producers to qualify with LBMA-aligned refineries.
              </p>
              <p>
                Assay-protocol calibration, sample submission packaging,
                documentation alignment to the receiving refinery's intake
                standard, and structured introductions where appropriate.
                The objective is to shorten the producer-to-refinery
                onboarding cycle from months of iterative rework to a single
                qualified submission.
              </p>
              <div className="meta">
                <span>Deliverable</span>
                <span className="val">Refinery-ready submission packet</span>
              </div>
              <div className="meta">
                <span>Typical timeline</span>
                <span className="val">6–10 weeks</span>
              </div>
            </div>

            <div className="item">
              <div className="num">03</div>
              <h3>Capital introduction</h3>
              <p className="lede-line">
                Connecting producers to working-capital and trade-finance
                providers.
              </p>
              <p>
                Producers frequently need bridge capital between mill-gate
                and settlement. ExCom introduces qualified producers to
                working-capital lenders and trade-finance counterparties
                whose mandates fit the production profile, and helps
                structure the capital package — collateral, advance ratio,
                fix-window mechanics, security documentation.
              </p>
              <div className="meta">
                <span>Deliverable</span>
                <span className="val">
                  Lender shortlist · structured term sheet
                </span>
              </div>
              <div className="meta">
                <span>Typical timeline</span>
                <span className="val">8–12 weeks</span>
              </div>
            </div>

            <div className="item">
              <div className="num">04</div>
              <h3>Cross-border execution</h3>
              <p className="lede-line">
                Logistics, insurance, and customs for first-time exporters.
              </p>
              <p>
                For producers shipping into the institutional refining
                circuit for the first time: secured logistics arrangements,
                high-value cargo insurance scoping, customs documentation,
                route analysis, and risk-transfer protocol design. Outcome
                is a documented end-to-end shipment plan calibrated to the
                producer's origin jurisdiction and chosen refining
                destination.
              </p>
              <div className="meta">
                <span>Deliverable</span>
                <span className="val">
                  Shipment protocol · insurance scoping
                </span>
              </div>
              <div className="meta">
                <span>Typical timeline</span>
                <span className="val">3–5 weeks</span>
              </div>
            </div>
          </div>

          <figure className="photo aspect-16x9" style={{ marginTop: 56 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/photo-advisory-cross-border.png"
              alt="Cross-border export documentation laid out on a steel surface — customs declaration, commercial invoice, packing list, and air waybill — beside a sealed high-value secure-cargo case bearing customs seal and tamper-evident tag."
              loading="lazy"
            />
            <figcaption>
              <span className="seq">FIG. 02 · Cross-border</span>
              <span className="cap">
                A first-time export packet — declaration, invoice, packing
                list, air waybill — and the sealed, customs-stamped case the
                producer's lot travels in. The shipment protocol is the
                deliverable.
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow">How it works</div>
              <h2 className="display display-md">Engagement protocol.</h2>
            </div>
            <div className="right">
              <p className="editorial">
                Each engagement begins with a no-cost scoping call. If the
                work is in scope, ExCom provides a written engagement letter
                with deliverables, milestones, and a fixed fee. Hourly
                billing is not used; speculative or open-ended mandates are
                not accepted.
              </p>
            </div>
          </div>

          <div className="engagement-rail">
            <div className="step">
              <div className="n">01</div>
              <h4>Scoping call</h4>
              <p>
                30–45 minute call to understand origin, material profile,
                and the gap to be closed. No fee, no obligation. Outcome is
                a written scoping note.
              </p>
            </div>
            <div className="step">
              <div className="n">02</div>
              <h4>Engagement letter</h4>
              <p>
                Written engagement scope: deliverables, milestones, fixed
                fee, timeline. Counter-signed before any work commences.
              </p>
            </div>
            <div className="step">
              <div className="n">03</div>
              <h4>Diligence &amp; production</h4>
              <p>
                Documentation collection, technical review, counterparty
                engagement. Weekly written progress notes; substantive
                deliverables versioned.
              </p>
            </div>
            <div className="step">
              <div className="n">04</div>
              <h4>Handover</h4>
              <p>
                Final deliverable transmitted under NDA. Two follow-up
                sessions included for clarification and counterparty support
                after handover.
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
          <div className="constraints">
            <div className="left">
              <div className="eyebrow">Constraints</div>
              <h3 className="display display-sm">
                What ExCom does not advise on.
              </h3>
            </div>
            <div className="right">
              <ul className="constraint-list">
                <li>
                  <b>Not a placement agent.</b> ExCom does not market
                  producer offtake to third parties on a commission basis.
                  Where ExCom buys, ExCom takes title.
                </li>
                <li>
                  <b>Not a regulated investment adviser.</b> The advisory
                  practice covers operational, commercial, and structuring
                  matters. It does not provide investment, securities, or
                  tax advice.
                </li>
                <li>
                  <b>Not a generalist.</b> Engagements outside precious
                  metals raw material — base metals, energy, industrial
                  commodities — are declined.
                </li>
                <li>
                  <b>No conflict mandates.</b> ExCom will not advise
                  producers in active commercial dialogue with the ExCom
                  trading book, or refineries that buy from ExCom on
                  commercial terms, without a pre-cleared
                  conflict-of-interest waiver.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-rail">
        <div className="container">
          <div className="left">
            <div className="eyebrow">Engage</div>
            <h3 className="display display-md">
              Producer scoping calls accepted on a written intake basis.
            </h3>
          </div>
          <div className="right">
            <p>
              Initial intake by email — full origin and material profile to
              be provided ahead of the scoping call. Engagements are scoped
              weekly; response within five working days.
            </p>
            <a
              className="cta"
              href="mailto:info@ex-com.org?subject=Advisory%20scoping%20%E2%80%94%20producer%20intake"
            >
              info@ex-com.org →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
