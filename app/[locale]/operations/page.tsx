/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import OpsToc from "./OpsToc";

export const metadata: Metadata = {
  title: "Operations — ExCom",
  description:
    "The four-phase doré lifecycle — sourcing, logistics, refining, settlement — and the ExCom Trading Platform that runs underneath it.",
};

type PhaseSpec = { lbl: string; val: string; unit?: string };
type Phase = {
  id: string;
  num: string;
  title: string;
  paras: string[];
  spec: PhaseSpec[];
  image: { src: string; alt: string; caption: string };
};

const PHASES: Phase[] = [
  {
    id: "sourcing",
    num: "01",
    title: "Sourcing",
    paras: [
      "Sourcing is conducted under Forward Purchase Agreements with producers — mine operators, collectors, and aggregators in origin regions. ExCom does not source on a spot basis from undocumented counterparties; relationships are paper-first, identity-and-origin verified, and limited at exposure thresholds set at the group level.",
      "Risk transfers to ExCom at wheels-up — when the metal leaves origin under documented custody. Up to that point, the producer retains title; from that point, ExCom carries the metal on its balance sheet, with hedging applied against open exposure within the fix window.",
      "Origin documentation captured at FPA execution survives the lot through every subsequent phase. Where origin documentation does not survive scrutiny, sourcing is not extended. The discipline is documentary, not editorial.",
    ],
    spec: [
      { lbl: "Instrument", val: "FPA" },
      { lbl: "Risk transfer", val: "Wheels-up" },
      { lbl: "Counterparty cap", val: "12%", unit: "of book" },
      { lbl: "Onboarding cycle", val: "4–6", unit: "weeks" },
    ],
    image: {
      src: "/assets/photo-sourcing.jpg",
      alt: "Numbered cast doré bars on a steel casting tray, single gloved hand at the corner of the tray",
      caption:
        "Doré at origin — numbered, mould-textured, taken to title at wheels-up.",
    },
  },
  {
    id: "logistics",
    num: "02",
    title: "Logistics",
    paras: [
      "Logistics moves doré from origin to refinery vault under insured high-value transport. Routing, carrier, and security tier are selected per lot, against pre-agreed protocols negotiated with insurers and refining counterparties before metal moves.",
      "Custodial chain is documented from origin handover to vault-in confirmation. Customs clearance is handled with documentation aligned in advance to destination jurisdiction requirements. Vault-in confirmation is a hard gate before assay scheduling.",
      "Insurance covers marine, aviation, and war/political-risk perils on agreed value, with declarations made per shipment under a master cover. Claims protocols and survey rights are pre-positioned with counterparties to compress incident-response timelines.",
    ],
    spec: [
      { lbl: "Coverage", val: "Marine + War" },
      { lbl: "Median transit", val: "2.4", unit: "days" },
      { lbl: "Vault-in SLA", val: "4", unit: "days" },
      { lbl: "Carrier tier", val: "Tier 1", unit: "only" },
    ],
    image: {
      src: "/assets/photo-logistics.jpg",
      alt: "Sealed precious-metals raw-material containers loaded into cargo aircraft on the apron",
      caption:
        "Custody · insured high-value transport from origin to refinery vault.",
    },
  },
  {
    id: "refining",
    num: "03",
    title: "Refining",
    paras: [
      "Refining is conducted at LBMA-accredited counterparties on an assay-exchange basis. Doré is melted, sampled, and assayed against an agreed return percentage; outturn is measured to the four-decimal fineness standard expected by LBMA Good Delivery refiners.",
      "Where assay results are disputed, ExCom preserves the umpire option — an independent third-party assay, agreed in advance and binding on outturn. Disputes are uncommon; the option exists so the protocol is enforceable, not so it is exercised.",
      "Refining counterparties are referenced by jurisdiction — Switzerland, Italy, the United Arab Emirates, India, and Türkiye — without naming counterparties on this surface. Concentration is managed against an internal cap on top-2 jurisdictional share.",
    ],
    spec: [
      { lbl: "Standard", val: "LBMA GDL" },
      { lbl: "Refining protocol", val: "Assay-exchange" },
      { lbl: "Avg. return", val: "99.85%" },
      { lbl: "Top-2 cap", val: "65%", unit: "internal" },
    ],
    image: {
      src: "/assets/photo-refining.jpg",
      alt: "Steel assay tray of unrefined doré chips beside an unbranded XRF analyser on a brushed-steel bench",
      caption:
        "Assay sample for fineness determination — LBMA-accredited refining, assay-exchange basis.",
    },
  },
  {
    id: "settlement",
    num: "04",
    title: "Settlement",
    paras: [
      "Settlement occurs against LBMA AM and PM fix benchmarks within a fourteen-day fix window measured from wheels-up. Pricing decisions are taken against the pre-agreed quotation period for each lot, with hedging unwound in parallel.",
      "Settlement documentation is issued to producer, refining counterparty, insurer, and auditor on agreed timelines. The producer receives final pricing, return percentage, and settlement detail; the refining counterparty receives the assay-exchange outturn statement; ExCom retains the full ledger for audit.",
      "P&L attribution is decomposed into metal spread, return differential, assay efficiency, and timing components. The decomposition is what allows the trading discipline to be reviewed line-by-line — by the audit committee, by the board, by counterparties under NDA.",
    ],
    spec: [
      { lbl: "Window", val: "14", unit: "days" },
      { lbl: "Benchmarks", val: "AM / PM", unit: "LBMA fix" },
      { lbl: "Median · w-up→fix", val: "9.0", unit: "days" },
      { lbl: "Within SLA", val: "100%" },
    ],
    image: {
      src: "/assets/photo-settlement-report.jpg",
      alt: "Settlement Report on a leather desk pad — counterparty fields, weights, fix prices and signatures redacted — flanked by a calculator and a 1kg fine-gold bar",
      caption:
        "Settlement against LBMA AM/PM fix — priced and documented within a fourteen-day window. Counterparty detail redacted.",
    },
  },
];

export default function OperationsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">Home · Operations</div>
          <h1>The four-phase doré lifecycle.</h1>
          <p className="lede">
            ExCom takes title at origin and carries the metal — and the
            risk — through to LBMA fix. The lifecycle below is the
            doré-specific protocol; the same discipline is applied to the
            broader raw-material flows ExCom handles. Sourcing under FPA,
            insured logistics, assay-exchange refining, and liquidation
            against benchmark within a fourteen-day window.
          </p>
          <div className="tag-line">
            <span className="pill">Doré · title-taking</span>
            <span className="pill">14-day fix window</span>
            <span className="pill">LBMA-aligned</span>
            <span className="pill">OECD · five-step</span>
          </div>
        </div>
      </section>

      <div className="container ops-page">
        <OpsToc />

        <div className="phase-stack">
          {PHASES.map((p) => (
            <PhaseSection key={p.id} phase={p} />
          ))}
        </div>
      </div>

      <section className="platform-section" id="platform">
        <div className="container">
          <div className="platform-head">
            <div className="eyebrow">ExCom Trading Platform</div>
            <h2 className="display display-md">
              The system the lifecycle runs on.
            </h2>
            <p className="editorial">
              The four phases above are not stitched together by
              spreadsheets and email. They run on a single internal platform
              that ExCom built and operates — the ExCom Trading Platform.
              Origin diligence, lot tracking, transit, refinery handoff,
              pricing window, settlement, and the audit trail underneath
              all of it sit on the same operating substrate. Compliance is
              one chapter of that platform, not a function bolted onto the
              side.
            </p>
          </div>

          <figure
            className="photo aspect-16x9"
            style={{ marginBottom: 56 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/photo-sofia-desk.jpg"
              alt="Twin curved monitors on a Sofia trading desk showing live charting and order-management surfaces, with a second desk and city window visible beyond."
              loading="lazy"
            />
            <figcaption>
              <span className="seq">FIG. 05 · Sofia desk</span>
              <span className="cap">
                The Sofia trading desk — execution, hedging, and
                counterparty oversight on the ExCom Trading Platform.
              </span>
            </figcaption>
          </figure>

          <div className="platform-pillars">
            <div className="p-pillar">
              <div className="num">A</div>
              <h4>Internal operating system</h4>
              <p>
                Counterparty files, lot ledger, transit and custody states,
                fix-window pricing, settlement, and full audit trail — one
                system, one substrate. Trading, capital, operations, and
                compliance work off the same record.
              </p>
            </div>
            <div className="p-pillar">
              <div className="num">B</div>
              <h4>Counterparty bridge — dedicated portal</h4>
              <p>
                Producer counterparties and refinery customers connect
                through a dedicated portal to place orders, hedge
                price-window exposure, and view the live state of their
                lots. Both sides of the bridge — supply and demand — work
                the same surface ExCom does.
              </p>
            </div>
            <div className="p-pillar">
              <div className="num">C</div>
              <h4>Direct execution, choice of venue</h4>
              <p>
                Counterparty hedging and price-risk orders are executed
                direct into the chosen venue — MetaTrader 4, MetaTrader 5,
                or cTrader — against the counterparty's chosen liquidity
                provider. Standing connectivity into IC Markets is
                integrated alongside other liquidity providers selectable
                per counterparty. Direct execution; no aggregation tier
                between intent and the book.
              </p>
            </div>
          </div>

          <div className="platform-meta">
            <div className="m-cell">
              <div className="lbl">Platform</div>
              <div className="val">ExCom Trading Platform</div>
            </div>
            <div className="m-cell">
              <div className="lbl">Access</div>
              <div className="val">Counterparty portal</div>
            </div>
            <div className="m-cell">
              <div className="lbl">Venues</div>
              <div className="val">MT4 · MT5 · cTrader</div>
            </div>
            <div className="m-cell">
              <div className="lbl">Liquidity</div>
              <div className="val">Counterparty-selectable</div>
            </div>
          </div>

          <p className="platform-note">
            Platform access, onboarding, and venue setup are arranged
            through the trading desk under counterparty engagement.
          </p>
        </div>
      </section>
    </main>
  );
}

function PhaseSection({ phase }: { phase: Phase }) {
  return (
    <section className="phase-section" id={phase.id}>
      <div className="head">
        <span className="num">{phase.num}</span>
        <h2>{phase.title}</h2>
      </div>
      <div className="body">
        {phase.paras.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <div className="phase-spec">
          {phase.spec.map((s) => (
            <div className="spec" key={s.lbl}>
              <div className="lbl">{s.lbl}</div>
              <div className="val">
                {s.val}
                {s.unit && <small>{s.unit}</small>}
              </div>
            </div>
          ))}
        </div>
        <figure className="photo aspect-16x9" style={{ marginTop: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={phase.image.src} alt={phase.image.alt} loading="lazy" />
          <figcaption>
            <span className="seq">FIG. {phase.num}</span>
            <span className="cap">{phase.image.caption}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
