import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import GlobeBridge from "../components/Globe";
import Dossier from "../components/Dossier";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  // Required by next-intl v4 to keep this page statically prerendered
  // when its descendants use useTranslations() in Server Components.
  setRequestLocale(locale);
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
  const t = useTranslations("home");
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-meta-strip">
          <span className="meta-item">
            <span className="live"></span>
            {t("heroMetaMalta")}
          </span>
          <span className="dot"></span>
          <span className="meta-item">{t("heroMetaReach")}</span>
          <span className="dot"></span>
          <span className="meta-item">{t("heroMetaLbma")}</span>
          <span className="dot"></span>
          <span className="meta-item">{t("heroMetaSlogan")}</span>
        </div>

        <h1 className="hero-positioning">
          {t("heroSloganLead")}
          <em>{t("heroSloganEm")}</em>
        </h1>

        <p className="hero-sublede">{t("heroSublede")}</p>

        <div className="hero-bottom">
          <div className="cell">
            <div className="label">{t("heroStatPhases")}</div>
            <div className="value">04</div>
          </div>
          <div className="cell">
            <div className="label">{t("heroStatFixWindow")}</div>
            <div className="value">
              14<small>{t("heroStatFixWindowUnit")}</small>
            </div>
          </div>
          <div className="cell">
            <div className="label">{t("heroStatRefineries")}</div>
            <div className="value">
              05<small>{t("heroStatRefineriesUnit")}</small>
            </div>
          </div>
          <div className="cell">
            <div className="label">{t("heroStatStatus")}</div>
            <div className="value">{t("heroStatStatusValue")}</div>
          </div>
          <div className="cell">
            <div className="label">{t("heroStatSettlement")}</div>
            <div className="value">
              3<small>{t("heroStatSettlementUnit")}</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bridge() {
  const t = useTranslations("home");
  return (
    <section className="bridge" id="bridge">
      <div className="container bridge-grid">
        <div className="bridge-copy">
          <div className="eyebrow">{t("bridgeEyebrow")}</div>
          <h2
            className="display display-lg"
            style={{ color: "var(--ink-primary)" }}
          >
            {t("bridgeH2Lead")} <br />
            <em
              style={{
                fontStyle: "italic",
                fontWeight: 400,
                color: "var(--ink-secondary)",
              }}
            >
              {t("bridgeH2Em")}
            </em>
          </h2>
          <p className="editorial" style={{ marginTop: 24 }}>
            {t("bridgeEditorial")}
          </p>

          <div className="bridge-pos">
            <div className="row">
              <div className="num">01</div>
              <div>
                <span className="label">{t("bridgeRow1Label")}</span>
                <span className="descr">{t("bridgeRow1Descr")}</span>
              </div>
            </div>
            <div className="row excom">
              <div className="num">02 · ExCom</div>
              <div>
                <span className="label">{t("bridgeRow2Label")}</span>
                <span className="descr">{t("bridgeRow2Descr")}</span>
              </div>
            </div>
            <div className="row">
              <div className="num">03</div>
              <div>
                <span className="label">{t("bridgeRow3Label")}</span>
                <span className="descr">{t("bridgeRow3Descr")}</span>
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
  const t = useTranslations("home");
  return (
    <section className="dore-plate" aria-labelledby="dore-plate-caption">
      <div className="container">
        <div className="dore-plate-grid">
          <figure className="photo">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/photo-dore-casting.jpg"
              alt={t("doreFigAlt")}
              loading="lazy"
            />
          </figure>
          <div className="copy">
            <div className="eyebrow">{t("doreEyebrow")}</div>
            <h3 className="display display-md">{t("doreH3")}</h3>
            <p className="editorial">{t("doreEditorial")}</p>
            <div className="meta" id="dore-plate-caption">
              <span>FIG.</span>
              <span className="mono">PL-AU · 01</span>
              <span className="dot" aria-hidden="true">
                ·
              </span>
              <span>{t("doreFigCaption")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const PHASES = [
  { id: "Sourcing", num: "01", icon: "/assets/icon-sourcing.png" },
  { id: "Logistics", num: "02", icon: "/assets/icon-logistics.png" },
  { id: "Refining", num: "03", icon: "/assets/icon-refining.png" },
  { id: "Settlement", num: "04", icon: "/assets/icon-settlement.png" },
] as const;

function OperationsSummary() {
  const t = useTranslations("home");
  return (
    <section className="section" id="operations-summary">
      <div className="container">
        <div className="section-head">
          <div className="left">
            <div className="eyebrow">{t("opsEyebrow")}</div>
            <h2 className="display display-lg">{t("opsH2")}</h2>
          </div>
          <div className="right">
            <p className="editorial">{t("opsEditorial")}</p>
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
                <h3>{t(`phase${p.id}Title`)}</h3>
                <p>{t(`phase${p.id}Body`)}</p>
                <div className="meta">
                  <span>
                    {t(`phase${p.id}MetaKey`)} ·{" "}
                    <b>{t(`phase${p.id}MetaValue`)}</b>
                  </span>
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
  const t = useTranslations("home");
  return (
    <section
      className="section tight"
      style={{ background: "var(--quiet-fill)" }}
    >
      <div className="container">
        <div className="section-head" style={{ marginBottom: 40 }}>
          <div className="left">
            <div className="eyebrow">{t("dossierEyebrow")}</div>
            <h2 className="display display-md">{t("dossierH2")}</h2>
          </div>
          <div className="right">
            <p className="editorial">{t("dossierEditorial")}</p>
          </div>
        </div>
        <Dossier />
      </div>
    </section>
  );
}

function ComplianceBlock() {
  const t = useTranslations("home");
  const frameworks = [
    { code: "AML/CFT", nameK: "framework1Name", smallK: "framework1Small" },
    { code: "OECD", nameK: "framework2Name", smallK: "framework2Small" },
    { code: "LBMA", nameK: "framework3Name", smallK: "framework3Small" },
    { code: "RJC", nameK: "framework4Name", smallK: "framework4Small" },
  ] as const;
  return (
    <section className="section" id="compliance">
      <div className="container compliance-grid">
        <div>
          <div className="eyebrow">{t("complianceEyebrow")}</div>
          <h2 className="display display-md" style={{ marginTop: 16 }}>
            {t("complianceH2")}
          </h2>
          <p className="editorial" style={{ marginTop: 20 }}>
            {t("complianceEditorial")}
          </p>
        </div>

        <div className="framework-list">
          {frameworks.map((f) => (
            <div key={f.code} className="framework">
              <span className="code">{f.code}</span>
              <span className="name">
                {t(f.nameK)}
                <small>{t(f.smallK)}</small>
              </span>
              <span className="stat">{t("frameworkStatusAligned")}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GroupContext() {
  const t = useTranslations("home");
  return (
    <section className="group-context">
      <div className="container">
        <div className="eyebrow" style={{ marginBottom: 24 }}>
          {t("voiceEyebrow")}
        </div>
        <p>
          {t("voiceLead")} <em>{t("voiceEm")}</em>
        </p>
      </div>
    </section>
  );
}
