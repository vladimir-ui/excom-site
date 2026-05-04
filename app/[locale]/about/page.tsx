import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AboutPageInner />;
}

function AboutPageInner() {
  const t = useTranslations("about");
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">{t("heroCrumbs")}</div>
          <h1>{t("heroH1")}</h1>
          <p className="lede">{t("heroLede")}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow">{t("entityEyebrow")}</div>
              <h2 className="display display-md">{t("entityH2")}</h2>
            </div>
            <div className="right">
              <p className="editorial">{t("entityLede")}</p>
            </div>
          </div>

          <div className="entity-grid">
            <div className="row">
              <span className="key">{t("entityRow1Key")}</span>
              <span className="val">ExCom Limited</span>
            </div>
            <div className="row">
              <span className="key">{t("entityRow2Key")}</span>
              <span className="val">{t("entityRow2Val")}</span>
            </div>
            <div className="row">
              <span className="key">{t("entityRow3Key")}</span>
              <span className="val mono">C 112080</span>
            </div>
            <div className="row">
              <span className="key">{t("entityRow4Key")}</span>
              <span className="val">{t("entityRow4Val")}</span>
            </div>
            <div className="row">
              <span className="key">{t("entityRow5Key")}</span>
              <span className="val mono">MT31936814</span>
            </div>
            <div className="row">
              <span className="key">{t("entityRow6Key")}</span>
              <span className="val">{t("entityRow6Val")}</span>
            </div>
            <div className="row">
              <span className="key">{t("entityRow7Key")}</span>
              <span className="val">{t("entityRow7Val")}</span>
            </div>
            <div className="row">
              <span className="key">{t("entityRow8Key")}</span>
              <span className="val">{t("entityRow8Val")}</span>
            </div>
            <div className="row">
              <span className="key">{t("entityRow9Key")}</span>
              <span className="val">{t("entityRow9Val")}</span>
            </div>
            <div className="row">
              <span className="key">{t("entityRow10Key")}</span>
              <span className="val">{t("entityRow10Val")}</span>
            </div>
          </div>

          <figure
            className="photo"
            style={{ marginTop: 64, aspectRatio: "21/9" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/photo-about.jpg" alt="" loading="lazy" />
            <figcaption>
              <span className="seq">FIG. 01</span>
              <span className="cap">{t("entityFigCaption")}</span>
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
              <div className="eyebrow">{t("fnEyebrow")}</div>
              <h2 className="display display-md">{t("fnH2")}</h2>
            </div>
            <div className="right">
              <p className="editorial">{t("fnLede")}</p>
            </div>
          </div>

          <div className="function-grid">
            <div className="item">
              <div className="num">{t("fnTradingNum")}</div>
              <h4>{t("fnTradingH4")}</h4>
              <p>{t("fnTradingBody")}</p>
            </div>
            <div className="item">
              <div className="num">{t("fnCapitalNum")}</div>
              <h4>{t("fnCapitalH4")}</h4>
              <p>{t("fnCapitalBody")}</p>
            </div>
            <div className="item">
              <div className="num">{t("fnOpsNum")}</div>
              <h4>{t("fnOpsH4")}</h4>
              <p>{t("fnOpsBody")}</p>
            </div>
            <div className="item">
              <div className="num">{t("fnComplianceNum")}</div>
              <h4>{t("fnComplianceH4")}</h4>
              <p>{t("fnComplianceBody")}</p>
            </div>
          </div>
        </div>
      </section>

      <figure className="section-banner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/photo-about-harbour.jpg" alt="" loading="lazy" />
        <figcaption>
          <span className="seq">{t("harbourFigSeq")}</span>
          <span className="cap">{t("harbourFigCaption")}</span>
        </figcaption>
      </figure>

      <section className="founding-team">
        <div className="container">
          <div className="eyebrow">{t("foundingEyebrow")}</div>
          <span className="accent" aria-hidden="true"></span>
          <p>{t("foundingPara1")}</p>
          <p>{t("foundingPara2")}</p>
          <p>
            <em>{t("foundingPara3Em")}</em>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow">{t("govEyebrow")}</div>
              <h2 className="display display-md">{t("govH2")}</h2>
            </div>
            <div className="right">
              <p className="editorial">{t("govLede")}</p>
            </div>
          </div>

          <div className="governance-grid">
            <div className="item">
              <div className="num">{t("govBoardNum")}</div>
              <h4>{t("govBoardH4")}</h4>
              <p>{t("govBoardBody")}</p>
            </div>
            <div className="item">
              <div className="num">{t("govRiskNum")}</div>
              <h4>{t("govRiskH4")}</h4>
              <p>{t("govRiskBody")}</p>
            </div>
            <div className="item">
              <div className="num">{t("govComplianceNum")}</div>
              <h4>{t("govComplianceH4")}</h4>
              <p>{t("govComplianceBody")}</p>
            </div>
            <div className="item">
              <div className="num">{t("govAuditNum")}</div>
              <h4>{t("govAuditH4")}</h4>
              <p>{t("govAuditBody")}</p>
            </div>
            <div className="item">
              <div className="num">{t("govTreasuryNum")}</div>
              <h4>{t("govTreasuryH4")}</h4>
              <p>{t("govTreasuryBody")}</p>
            </div>
            <div className="item">
              <div className="num">{t("govRecordsNum")}</div>
              <h4>{t("govRecordsH4")}</h4>
              <p>{t("govRecordsBody")}</p>
            </div>
          </div>
        </div>
      </section>

      <figure className="section-banner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/photo-about-discipline.png" alt="" loading="lazy" />
        <figcaption>
          <span className="seq">{t("disciplineFigSeq")}</span>
          <span className="cap">{t("disciplineFigCaption")}</span>
        </figcaption>
      </figure>

      <section className="group-context">
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 24 }}>
            {t("voiceEyebrow")}
          </div>
          <p>
            {t("voiceLeadStart")}
            <em>{t("voiceEm")}</em>
          </p>
        </div>
      </section>
    </main>
  );
}
