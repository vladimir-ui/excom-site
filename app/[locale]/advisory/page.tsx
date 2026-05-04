import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "advisory" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function AdvisoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <AdvisoryPageInner />;
}

function AdvisoryPageInner() {
  const t = useTranslations("advisory");
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
              <div className="eyebrow">{t("audienceEyebrow")}</div>
              <h2 className="display display-md">{t("audienceH2")}</h2>
            </div>
            <div className="right">
              <p className="editorial">{t("audienceLede")}</p>
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
              <div className="eyebrow">{t("linesEyebrow")}</div>
              <h2 className="display display-md">{t("linesH2")}</h2>
            </div>
            <div className="right">
              <p className="editorial">{t("linesLede")}</p>
            </div>
          </div>

          <figure
            className="photo aspect-16x9"
            style={{ marginTop: 48, marginBottom: 56 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/photo-advisory-origin.png"
              alt=""
              loading="lazy"
            />
            <figcaption>
              <span className="seq">{t("originFigSeq")}</span>
              <span className="cap">{t("originFigCaption")}</span>
            </figcaption>
          </figure>

          <div className="advisory-grid">
            {[1, 2, 3, 4].map((n) => {
              const h3Key = `line${n}H3` as
                | "line1H3"
                | "line2H3"
                | "line3H3"
                | "line4H3";
              const ledeKey = `line${n}Lede` as
                | "line1Lede"
                | "line2Lede"
                | "line3Lede"
                | "line4Lede";
              const bodyKey = `line${n}Body` as
                | "line1Body"
                | "line2Body"
                | "line3Body"
                | "line4Body";
              const delivKey = `line${n}Deliverable` as
                | "line1Deliverable"
                | "line2Deliverable"
                | "line3Deliverable"
                | "line4Deliverable";
              const timeKey = `line${n}Timeline` as
                | "line1Timeline"
                | "line2Timeline"
                | "line3Timeline"
                | "line4Timeline";
              return (
                <div className="item" key={n}>
                  <div className="num">{`0${n}`}</div>
                  <h3>{t(h3Key)}</h3>
                  <p className="lede-line">{t(ledeKey)}</p>
                  <p>{t(bodyKey)}</p>
                  <div className="meta">
                    <span>{t("deliverableLabel")}</span>
                    <span className="val">{t(delivKey)}</span>
                  </div>
                  <div className="meta">
                    <span>{t("timelineLabel")}</span>
                    <span className="val">{t(timeKey)}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <figure className="photo aspect-16x9" style={{ marginTop: 56 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/photo-advisory-cross-border.png"
              alt=""
              loading="lazy"
            />
            <figcaption>
              <span className="seq">{t("crossBorderFigSeq")}</span>
              <span className="cap">{t("crossBorderFigCaption")}</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow">{t("engagementEyebrow")}</div>
              <h2 className="display display-md">{t("engagementH2")}</h2>
            </div>
            <div className="right">
              <p className="editorial">{t("engagementLede")}</p>
            </div>
          </div>

          <div className="engagement-rail">
            {[1, 2, 3, 4].map((n) => {
              const h4Key = `step${n}H4` as
                | "step1H4"
                | "step2H4"
                | "step3H4"
                | "step4H4";
              const bodyKey = `step${n}Body` as
                | "step1Body"
                | "step2Body"
                | "step3Body"
                | "step4Body";
              return (
                <div className="step" key={n}>
                  <div className="n">{`0${n}`}</div>
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
          <div className="constraints">
            <div className="left">
              <div className="eyebrow">{t("constraintsEyebrow")}</div>
              <h3 className="display display-sm">{t("constraintsH3")}</h3>
            </div>
            <div className="right">
              <ul className="constraint-list">
                <li>
                  <b>{t("constraintItem1Strong")}</b> {t("constraintItem1Body")}
                </li>
                <li>
                  <b>{t("constraintItem2Strong")}</b> {t("constraintItem2Body")}
                </li>
                <li>
                  <b>{t("constraintItem3Strong")}</b> {t("constraintItem3Body")}
                </li>
                <li>
                  <b>{t("constraintItem4Strong")}</b> {t("constraintItem4Body")}
                </li>
              </ul>
            </div>
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
              href="mailto:info@ex-com.org?subject=Advisory%20scoping%20%E2%80%94%20producer%20intake"
            >
              {t("ctaLink")}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
