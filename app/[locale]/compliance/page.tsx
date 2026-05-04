import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "compliance" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function CompliancePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CompliancePageInner />;
}

function CompliancePageInner() {
  const t = useTranslations("compliance");
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">{t("heroCrumbs")}</div>
          <h1>{t("heroH1")}</h1>
          <p className="lede">{t("heroLede")}</p>
          <div className="hero-frameworks">
            <div className="fw">
              <div className="lbl">{t("fwStatutoryLbl")}</div>
              <div className="val">{t("fwStatutoryVal")}</div>
            </div>
            <div className="fw">
              <div className="lbl">{t("fwOriginLbl")}</div>
              <div className="val">{t("fwOriginVal")}</div>
            </div>
            <div className="fw">
              <div className="lbl">{t("fwRefiningLbl")}</div>
              <div className="val">{t("fwRefiningVal")}</div>
            </div>
            <div className="fw">
              <div className="lbl">{t("fwVoluntaryLbl")}</div>
              <div className="val">{t("fwVoluntaryVal")}</div>
            </div>
          </div>
        </div>
      </section>

      <figure className="compliance-banner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/photo-compliance-architecture.jpg"
          alt=""
          loading="lazy"
        />
        <figcaption>
          <span className="seq">{t("bannerFigSeq")}</span>
          <span className="cap">{t("bannerFigCaption")}</span>
        </figcaption>
      </figure>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow">{t("postureEyebrow")}</div>
              <h2 className="display display-md">{t("postureH2")}</h2>
            </div>
            <div className="right">
              <p className="editorial">{t("posturePara1")}</p>
              <p>{t("posturePara2")}</p>
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
              <div className="eyebrow">{t("originEyebrow")}</div>
              <h2 className="display display-md">{t("originH2")}</h2>
            </div>
            <div className="right">
              <p className="editorial">{t("originLede")}</p>
            </div>
          </div>

          <figure
            className="photo aspect-16x9"
            style={{ marginTop: 40, marginBottom: 56 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/photo-compliance-archive.jpg"
              alt=""
              loading="lazy"
            />
            <figcaption>
              <span className="seq">{t("recordsFigSeq")}</span>
              <span className="cap">{t("recordsFigCaption")}</span>
            </figcaption>
          </figure>

          <div className="oecd-steps">
            {[1, 2, 3, 4, 5].map((n) => {
              const numKey = `step${n}Num` as
                | "step1Num"
                | "step2Num"
                | "step3Num"
                | "step4Num"
                | "step5Num";
              const h3Key = `step${n}H3` as
                | "step1H3"
                | "step2H3"
                | "step3H3"
                | "step4H3"
                | "step5H3";
              const bodyKey = `step${n}Body` as
                | "step1Body"
                | "step2Body"
                | "step3Body"
                | "step4Body"
                | "step5Body";
              const evidenceKey = `step${n}Evidence` as
                | "step1Evidence"
                | "step2Evidence"
                | "step3Evidence"
                | "step4Evidence"
                | "step5Evidence";
              return (
                <div className="oecd-step" key={n}>
                  <div className="step-num">{t(numKey)}</div>
                  <h3>{t(h3Key)}</h3>
                  <p>{t(bodyKey)}</p>
                  <div className="evidence">
                    <span>{t("evidenceLabel")}</span> {t(evidenceKey)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow">{t("kycEyebrow")}</div>
              <h2 className="display display-md">{t("kycH2")}</h2>
            </div>
            <div className="right">
              <p className="editorial">{t("kycLede")}</p>
            </div>
          </div>

          <div className="kyc-stack">
            {[1, 2, 3, 4, 5].map((n) => {
              const numKey = `kyc${n}Num` as
                | "kyc1Num"
                | "kyc2Num"
                | "kyc3Num"
                | "kyc4Num"
                | "kyc5Num";
              const h4Key = `kyc${n}H4` as
                | "kyc1H4"
                | "kyc2H4"
                | "kyc3H4"
                | "kyc4H4"
                | "kyc5H4";
              const bodyKey = `kyc${n}Body` as
                | "kyc1Body"
                | "kyc2Body"
                | "kyc3Body"
                | "kyc4Body"
                | "kyc5Body";
              return (
                <div className="layer" key={n}>
                  <div className="layer-num">{t(numKey)}</div>
                  <h4>{t(h4Key)}</h4>
                  <p>{t(bodyKey)}</p>
                </div>
              );
            })}
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
              <div className="eyebrow">{t("auditEyebrow")}</div>
              <h2 className="display display-md">{t("auditH2")}</h2>
              <p className="editorial">{t("auditLede")}</p>
              <figure
                className="photo aspect-16x9"
                style={{ marginTop: 32 }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/photo-vault-custody.jpg"
                  alt=""
                  loading="lazy"
                />
                <figcaption>
                  <span className="seq">{t("custodyFigSeq")}</span>
                  <span className="cap">{t("custodyFigCaption")}</span>
                </figcaption>
              </figure>
            </div>

            <div className="audit-cards">
              <article className="audit-card">
                <div className="cadence">{t("audit1Cadence")}</div>
                <h4>{t("audit1H4")}</h4>
                <p>{t("audit1Body")}</p>
                <div className="meta-row">
                  <span>{t("audit1MetaAuditorLbl")}</span>{" "}
                  <span>{t("audit1MetaAuditorVal")}</span>
                </div>
                <div className="meta-row">
                  <span>{t("audit1MetaCycleLbl")}</span>{" "}
                  <span>{t("audit1MetaCycleVal")}</span>
                </div>
              </article>

              <article className="audit-card">
                <div className="cadence">{t("audit2Cadence")}</div>
                <h4>{t("audit2H4")}</h4>
                <p>{t("audit2Body")}</p>
                <div className="meta-row">
                  <span>{t("audit2MetaStandardLbl")}</span>{" "}
                  <span>{t("audit2MetaStandardVal")}</span>
                </div>
                <div className="meta-row">
                  <span>{t("audit2MetaCycleLbl")}</span>{" "}
                  <span>{t("audit2MetaCycleVal")}</span>
                </div>
              </article>

              <article className="audit-card">
                <div className="cadence">{t("audit3Cadence")}</div>
                <h4>{t("audit3H4")}</h4>
                <p>{t("audit3Body")}</p>
                <div className="meta-row">
                  <span>{t("audit3MetaOwnerLbl")}</span>{" "}
                  <span>{t("audit3MetaOwnerVal")}</span>
                </div>
                <div className="meta-row">
                  <span>{t("audit3MetaCycleLbl")}</span>{" "}
                  <span>{t("audit3MetaCycleVal")}</span>
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
              <div className="eyebrow">{t("sarEyebrow")}</div>
              <h2 className="display display-md">{t("sarH2")}</h2>
            </div>
            <div className="right">
              <p className="editorial">{t("sarLede")}</p>
            </div>
          </div>

          <div className="sar-protocol">
            {[1, 2, 3, 4, 5].map((n) => {
              const h4Key = `sar${n}H4` as
                | "sar1H4"
                | "sar2H4"
                | "sar3H4"
                | "sar4H4"
                | "sar5H4";
              const bodyKey = `sar${n}Body` as
                | "sar1Body"
                | "sar2Body"
                | "sar3Body"
                | "sar4Body"
                | "sar5Body";
              return (
                <div className="sar-step" key={n}>
                  <div className="num">{`0${n}`}</div>
                  <div className="body">
                    <h4>{t(h4Key)}</h4>
                    <p>{t(bodyKey)}</p>
                  </div>
                </div>
              );
            })}
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
              <div className="eyebrow">{t("govEyebrow")}</div>
              <h2 className="display display-md">{t("govH2")}</h2>
            </div>
            <div className="right">
              <p className="editorial">{t("govLede")}</p>
            </div>
          </div>

          <div className="governance-grid">
            {[1, 2, 3, 4].map((n) => {
              const h4Key = `gov${n}H4` as
                | "gov1H4"
                | "gov2H4"
                | "gov3H4"
                | "gov4H4";
              const bodyKey = `gov${n}Body` as
                | "gov1Body"
                | "gov2Body"
                | "gov3Body"
                | "gov4Body";
              return (
                <div className="g-item" key={n}>
                  <h4>{t(h4Key)}</h4>
                  <p>{t(bodyKey)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cta-rail">
        <div className="container">
          <div className="left">
            <div className="eyebrow">{t("ctaEyebrow")}</div>
            <h3 className="display display-md">{t("ctaH3")}</h3>
          </div>
          <div className="right">
            <p>{t("ctaBody")}</p>
            <a
              className="cta"
              href="mailto:info@ex-com.org?subject=Compliance%20documentation%20request"
            >
              {t("ctaLink")}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
