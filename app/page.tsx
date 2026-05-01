/* eslint-disable react/no-unescaped-entities */
import GlobeBridge from "./components/Globe";
import Dossier from "./components/Dossier";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Bridge />
      <DorePlate />
      <OperationsSummary />
      <DossierSection />
      <ComplianceBlock />
      <GroupContext />
    </main>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-meta-strip">
          <span className="meta-item">
            <span className="live"></span>
            Malta · C 112080
          </span>
          <span className="dot"></span>
          <span className="meta-item">
            Operating reach · Europe · USA · LATAM · UAE · India · Asia
          </span>
          <span className="dot"></span>
          <span className="meta-item">LBMA-aligned</span>
          <span className="dot"></span>
          <span className="meta-item">Source to Settlement</span>
        </div>

        <h1 className="hero-positioning">
          ExCom — <em>Trusted Execution from Source to Settlement.</em>
        </h1>

        <p className="hero-sublede">
          ExCom is a trader of precious metals raw material — doré in
          particular. It works the bridge between producers and refineries —
          the node where the precious metals supply chain is most fragmented,
          most opaque, and where someone has to take title to the metal and
          carry it across. ExCom buys at origin, moves the lot to refinery
          under its own risk, and prices against the LBMA fix inside a
          fourteen-day window — all of it run on the ExCom Trading Platform,
          an internal operating system that doubles as a counterparty bridge
          for hedging and order placement.
        </p>

        <div className="hero-bottom">
          <div className="cell">
            <div className="label">Phases</div>
            <div className="value">04</div>
          </div>
          <div className="cell">
            <div className="label">Fix window</div>
            <div className="value">
              14<small>days</small>
            </div>
          </div>
          <div className="cell">
            <div className="label">Refineries</div>
            <div className="value">
              05<small>jurisdictions</small>
            </div>
          </div>
          <div className="cell">
            <div className="label">Status</div>
            <div className="value">Title-taking</div>
          </div>
          <div className="cell">
            <div className="label">Settlement</div>
            <div className="value">
              3<small>days</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bridge() {
  return (
    <section className="bridge" id="bridge">
      <div className="container bridge-grid">
        <div className="bridge-copy">
          <div className="eyebrow">The bridge</div>
          <h2
            className="display display-lg"
            style={{ color: "var(--ink-primary)" }}
          >
            One node, owned. <br />
            <em
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--ink-secondary)",
              }}
            >
              Producers connect to refineries through ExCom's balance sheet.
            </em>
          </h2>
          <p className="editorial" style={{ marginTop: 24 }}>
            Mining, casting, refining, and bullion form a continuum. ExCom
            does not claim coverage of the chain. It claims one node — the
            raw-material bridge into refining — and operates it with the
            capital, compliance, and logistics required to take title at
            origin and deliver to specification. Doré is the canonical case;
            scrap, concentrate, and mining by-products travel the same
            protocol.
          </p>

          <div className="bridge-pos">
            <div className="row">
              <div className="num">01</div>
              <div>
                <span className="label">Producers</span>
                <span className="descr">
                  Mine operators, collectors, and aggregators across origin
                  regions.
                </span>
              </div>
            </div>
            <div className="row excom">
              <div className="num">02 · ExCom</div>
              <div>
                <span className="label">ExCom · Raw-material bridge</span>
                <span className="descr">
                  Takes title at origin under FPA. Carries the metal and the
                  risk through wheels-up, assay exchange, and fix.
                </span>
              </div>
            </div>
            <div className="row">
              <div className="num">03</div>
              <div>
                <span className="label">Refineries</span>
                <span className="descr">
                  LBMA-accredited destinations across Europe, the Middle East,
                  and Asia.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <GlobeBridge />
        </div>
      </div>
    </section>
  );
}

function DorePlate() {
  return (
    <section className="dore-plate" aria-labelledby="dore-plate-caption">
      <div className="container">
        <div className="dore-plate-grid">
          <figure className="photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/photo-dore-casting.jpg"
              alt="Molten gold-silver doré poured from a furnace into ingot moulds at a producer mill"
              loading="lazy"
            />
          </figure>
          <div className="copy">
            <div className="eyebrow">The product</div>
            <h3 className="display display-md">
              Doré — the material we deliver.
            </h3>
            <p className="editorial">
              Doré is a rough, semi-pure alloy of gold and silver cast at the
              producer's mill — the industry-standard form in which precious
              metal moves from origin to refinery. Each lot carries its own
              assay profile, fineness, and chain-of-custody documentation.
              ExCom takes title to the doré at origin, carries it under its
              own balance sheet through transit and assay exchange, and
              delivers it to specification at LBMA-aligned refining
              counterparties.
            </p>
            <div className="meta" id="dore-plate-caption">
              <span>FIG.</span>
              <span className="mono">PL-AU · 01</span>
              <span className="dot" aria-hidden="true">
                ·
              </span>
              <span>Doré poured at producer mill · pre-refining form</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PHASES = [
  {
    num: "01",
    title: "Sourcing",
    icon: "/assets/icon-sourcing.png",
    body: "Forward Purchase Agreements with producers under risk-transfer at wheels-up. Counterparty due diligence, origin documentation, weight and assay capture before metal moves.",
    meta: { "Risk transfer": "Wheels-up" },
  },
  {
    num: "02",
    title: "Logistics",
    icon: "/assets/icon-logistics.png",
    body: "High-value cargo and inland road transportation insured end-to-end, origin to refinery vault. Custodial chain documented, customs cleared, vault-in confirmed before assay scheduling.",
    meta: { Insurance: "Cargo + inland transit" },
  },
  {
    num: "03",
    title: "Refining",
    icon: "/assets/icon-refining.png",
    body: "Assay-exchange refining at LBMA-accredited counterparties. Umpire option preserved on disputed fines. Outturn measured against agreed return percentage.",
    meta: { Standard: "LBMA Good Delivery" },
  },
  {
    num: "04",
    title: "Settlement",
    icon: "/assets/icon-settlement.png",
    body: "Pricing against LBMA AM/PM fix within a fourteen-day fix window. Spot-fixing on demand; OCO, stop, and limit orders available. Settlement documented to producer, refinery, insurer, and auditor in parallel.",
    meta: { Pricing: "Fix · spot · OCO · stop · limit" },
  },
];

function OperationsSummary() {
  return (
    <section className="section" id="operations-summary">
      <div className="container">
        <div className="section-head">
          <div className="left">
            <div className="eyebrow">Operations</div>
            <h2 className="display display-lg">
              The four-phase doré lifecycle.
            </h2>
          </div>
          <div className="right">
            <p className="editorial">
              Each phase is named, measured, and documented. ExCom operates
              the same protocol across counterparties — the discipline is
              what travels, not the relationship.
            </p>
          </div>
        </div>

        <div className="ops-rail">
          <div className="ops-rail-track" aria-hidden="true"></div>
          {PHASES.map((p, i) => (
            <div
              key={p.num}
              data-phase={p.num}
              className={`ops-phase${i === 1 ? " active" : ""}`}
            >
              <div className="ops-phase-head">
                <span className="num">{p.num}</span>
                <div className="marker"></div>
              </div>
              <div className="ops-phase-card">
                <div className="ops-phase-icon">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.icon}
                    alt=""
                    aria-hidden="true"
                    style={{
                      margin: "10px",
                      objectFit: "contain",
                      height: "90px",
                      width: "100px",
                    }}
                  />
                </div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <div className="meta">
                  {Object.entries(p.meta).map(([k, v]) => (
                    <span key={k}>
                      {k} · <b>{v}</b>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DossierSection() {
  return (
    <section
      className="section tight"
      style={{ background: "var(--quiet-fill)" }}
    >
      <div className="container">
        <div className="section-head" style={{ marginBottom: 40 }}>
          <div className="left">
            <div className="eyebrow">Operations dossier</div>
            <h2 className="display display-md">
              Lots processed, throughput, fix-window timing.
            </h2>
          </div>
          <div className="right">
            <p className="editorial">
              A single panel summarising the 2026 year-to-date operating
              record. Tabular figures throughout. References LBMA AM/PM fix
              conventions for window timing.
            </p>
          </div>
        </div>
        <Dossier />
      </div>
    </section>
  );
}

function ComplianceBlock() {
  return (
    <section className="section" id="compliance">
      <div className="container compliance-grid">
        <div>
          <div className="eyebrow">Compliance posture</div>
          <h2 className="display display-md" style={{ marginTop: 16 }}>
            Posture, not posture-taking.
          </h2>
          <p className="editorial" style={{ marginTop: 20 }}>
            ExCom operates within compliance frameworks aligned to
            international AML/CFT standards, OECD due-diligence guidance for
            responsible mineral supply chains, LBMA Responsible Sourcing
            Programme, and Responsible Jewellery Council requirements.
            Counterparty diligence is documented and audited end-to-end;
            sourcing is not extended where origin documentation does not
            survive scrutiny.
          </p>
        </div>

        <div className="framework-list">
          <div className="framework">
            <span className="code">AML/CFT</span>
            <span className="name">
              Anti-money laundering &amp; counter-terrorism financing
              <small>FATF-aligned, jurisdictionally calibrated</small>
            </span>
            <span className="stat">Aligned</span>
          </div>
          <div className="framework">
            <span className="code">OECD</span>
            <span className="name">
              Due Diligence Guidance · responsible mineral supply chains
              <small>Five-step framework, Annex II risks</small>
            </span>
            <span className="stat">Aligned</span>
          </div>
          <div className="framework">
            <span className="code">LBMA</span>
            <span className="name">
              Responsible Sourcing Programme
              <small>Doré-applicable provisions, refinery-side audited</small>
            </span>
            <span className="stat">Aligned</span>
          </div>
          <div className="framework">
            <span className="code">RJC</span>
            <span className="name">
              Code of Practices · Chain-of-Custody
              <small>Operationalised across counterparties</small>
            </span>
            <span className="stat">Aligned</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function GroupContext() {
  return (
    <section className="group-context">
      <div className="container">
        <div className="eyebrow" style={{ marginBottom: 24 }}>
          Voice
        </div>
        <p>
          ExCom does not market itself to retail audiences. The entity speaks
          to refineries, producers, banks, hedging counterparties, and
          auditors.{" "}
          <em>
            Doré ultimately becomes bullion — the chain's end-state is
            acknowledged, not pursued.
          </em>
        </p>
      </div>
    </section>
  );
}
