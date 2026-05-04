import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import OpsToc from "./OpsToc";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "operations" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

type PhaseId = "Sourcing" | "Logistics" | "Refining" | "Settlement";
type Phase = {
  id: string;
  num: string;
  prefix: PhaseId;
  image: string;
};

const PHASES: Phase[] = [
  {
    id: "sourcing",
    num: "01",
    prefix: "Sourcing",
    image: "/assets/photo-sourcing.jpg",
  },
  {
    id: "logistics",
    num: "02",
    prefix: "Logistics",
    image: "/assets/photo-logistics.jpg",
  },
  {
    id: "refining",
    num: "03",
    prefix: "Refining",
    image: "/assets/photo-refining.jpg",
  },
  {
    id: "settlement",
    num: "04",
    prefix: "Settlement",
    image: "/assets/photo-settlement-report.jpg",
  },
];

export default async function OperationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <OperationsPageInner />;
}

function OperationsPageInner() {
  const t = useTranslations("operations");
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">{t("heroCrumbs")}</div>
          <h1>{t("heroH1")}</h1>
          <p className="lede">{t("heroLede")}</p>
          <div className="tag-line">
            <span className="pill">{t("tag1")}</span>
            <span className="pill">{t("tag2")}</span>
            <span className="pill">{t("tag3")}</span>
            <span className="pill">{t("tag4")}</span>
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
            <div className="eyebrow">{t("platformEyebrow")}</div>
            <h2 className="display display-md">{t("platformH2")}</h2>
            <p className="editorial">{t("platformLede")}</p>
          </div>

          <figure
            className="photo aspect-16x9"
            style={{ marginBottom: 56 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/photo-sofia-desk.jpg" alt="" loading="lazy" />
            <figcaption>
              <span className="seq">{t("platformFigSeq")}</span>
              <span className="cap">{t("platformFigCaption")}</span>
            </figcaption>
          </figure>

          <div className="platform-pillars">
            <div className="p-pillar">
              <div className="num">A</div>
              <h4>{t("platformPillarAH4")}</h4>
              <p>{t("platformPillarABody")}</p>
            </div>
            <div className="p-pillar">
              <div className="num">B</div>
              <h4>{t("platformPillarBH4")}</h4>
              <p>{t("platformPillarBBody")}</p>
            </div>
            <div className="p-pillar">
              <div className="num">C</div>
              <h4>{t("platformPillarCH4")}</h4>
              <p>{t("platformPillarCBody")}</p>
            </div>
          </div>

          <div className="platform-meta">
            <div className="m-cell">
              <div className="lbl">{t("platformMetaPlatformLbl")}</div>
              <div className="val">{t("platformMetaPlatformVal")}</div>
            </div>
            <div className="m-cell">
              <div className="lbl">{t("platformMetaAccessLbl")}</div>
              <div className="val">{t("platformMetaAccessVal")}</div>
            </div>
            <div className="m-cell">
              <div className="lbl">{t("platformMetaVenuesLbl")}</div>
              <div className="val">{t("platformMetaVenuesVal")}</div>
            </div>
            <div className="m-cell">
              <div className="lbl">{t("platformMetaLiquidityLbl")}</div>
              <div className="val">{t("platformMetaLiquidityVal")}</div>
            </div>
          </div>

          <p className="platform-note">{t("platformNote")}</p>
        </div>
      </section>
    </main>
  );
}

function PhaseSection({ phase }: { phase: Phase }) {
  const t = useTranslations("operations");
  const titleKey = `phase${phase.prefix}Title` as const;
  const para1Key = `phase${phase.prefix}Para1` as const;
  const para2Key = `phase${phase.prefix}Para2` as const;
  const para3Key = `phase${phase.prefix}Para3` as const;
  const figCaptionKey = `phase${phase.prefix}FigCaption` as const;
  const specs = [1, 2, 3, 4] as const;
  return (
    <section className="phase-section" id={phase.id}>
      <div className="head">
        <span className="num">{phase.num}</span>
        <h2>{t(titleKey)}</h2>
      </div>
      <div className="body">
        <p>{t(para1Key)}</p>
        <p>{t(para2Key)}</p>
        <p>{t(para3Key)}</p>
        <div className="phase-spec">
          {specs.map((n) => {
            const lblKey = `phase${phase.prefix}Spec${n}Lbl` as const;
            const valKey = `phase${phase.prefix}Spec${n}Val` as const;
            const unitKey = `phase${phase.prefix}Spec${n}Unit` as const;
            const unit = t.has(unitKey) ? t(unitKey) : "";
            return (
              <div className="spec" key={n}>
                <div className="lbl">{t(lblKey)}</div>
                <div className="val">
                  {t(valKey)}
                  {unit && <small>{unit}</small>}
                </div>
              </div>
            );
          })}
        </div>
        <figure className="photo aspect-16x9" style={{ marginTop: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={phase.image} alt="" loading="lazy" />
          <figcaption>
            <span className="seq">FIG. {phase.num}</span>
            <span className="cap">{t(figCaptionKey)}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
