/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import ContactForm from "./ContactForm";
import CounterpartyPackForm from "./CounterpartyPackForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactPageInner />;
}

function ContactPageInner() {
  const t = useTranslations("contact");
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
          <div className="contact-layout">
            <ContactForm />

            <aside className="contact-aside">
              <div className="aside-block">
                <div className="eyebrow">{t("asideSwitchboardEyebrow")}</div>
                <h3 className="aside-h">{t("asideSwitchboardH3")}</h3>
                <dl className="direct-dl">
                  <dt>{t("asideSwitchboardEmail")}</dt>
                  <dd>
                    <a href="mailto:info@ex-com.org">info@ex-com.org</a>
                  </dd>
                  <dt>{t("asideSwitchboardWeb")}</dt>
                  <dd>www.ex-com.org</dd>
                </dl>
              </div>

              <div className="aside-block">
                <div className="eyebrow">{t("asideOfficeEyebrow")}</div>
                <h3 className="aside-h">{t("asideOfficeH3")}</h3>
                <address className="office-addr">
                  ExCom Limited
                  <br />
                  BKR 4013
                  <br />
                  Birkirkara
                  <br />
                  Malta
                </address>
                <dl className="office-dl">
                  <dt>{t("asideOfficeFunction")}</dt>
                  <dd>{t("asideOfficeFunctionVal")}</dd>
                  <dt>{t("asideOfficeVisits")}</dt>
                  <dd>{t("asideOfficeVisitsVal")}</dd>
                </dl>
              </div>

              <div className="aside-block">
                <div className="eyebrow">{t("asideStatutoryEyebrow")}</div>
                <h3 className="aside-h">{t("asideStatutoryH3")}</h3>
                <dl className="office-dl">
                  <dt>{t("asideStatutoryLegalName")}</dt>
                  <dd>ExCom Limited</dd>
                  <dt>{t("asideStatutoryCompanyNo")}</dt>
                  <dd className="mono">C 112080</dd>
                  <dt>{t("asideStatutoryVat")}</dt>
                  <dd className="mono">MT31936814</dd>
                  <dt>{t("asideStatutoryIncorporated")}</dt>
                  <dd>{t("asideStatutoryIncorporatedVal")}</dd>
                  <dt>{t("asideStatutoryAuditor")}</dt>
                  <dd>{t("asideStatutoryAuditorVal")}</dd>
                </dl>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="counterparty-pack" className="section">
        <div className="container">
          <div className="section-head">
            <div className="left">
              <div className="eyebrow">{t("packEyebrow")}</div>
              <h2 className="display display-md">{t("packH2")}</h2>
            </div>
            <div className="right">
              <p className="editorial">{t("packLede")}</p>
            </div>
          </div>
          <div style={{ maxWidth: 760, marginTop: 32 }}>
            <CounterpartyPackForm />
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
              <div className="eyebrow">{t("hubsEyebrow")}</div>
              <h2 className="display display-md">{t("hubsH2")}</h2>
            </div>
            <div className="right">
              <p className="editorial">{t("hubsLede")}</p>
            </div>
          </div>

          <div className="hubs-grid">
            <article className="hub-card">
              <div className="hub-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/photo-hub-malta.jpg"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="hub-tag">Hub 01</div>
              <h3>Malta</h3>
              <div className="hub-sub">{t("hubMaltaSub")}</div>
              <p>{t("hubMaltaBody")}</p>
              <dl className="hub-dl">
                <dt>{t("hubAddressLabel")}</dt>
                <dd>
                  BKR 4013
                  <br />
                  Birkirkara, Malta
                </dd>
                <dt>{t("hubHoursLabel")}</dt>
                <dd>
                  Mon&nbsp;–&nbsp;Fri
                  <br />
                  09:00 – 17:30 CET
                </dd>
                <dt>{t("hubFunctionLabel")}</dt>
                <dd>{t("hubMaltaFunctionVal")}</dd>
              </dl>
            </article>

            <article className="hub-card">
              <div className="hub-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/photo-hub-sofia.jpg"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="hub-tag">Hub 02</div>
              <h3>Sofia</h3>
              <div className="hub-sub">{t("hubSofiaSub")}</div>
              <p>{t("hubSofiaBody")}</p>
              <dl className="hub-dl">
                <dt>{t("hubRegionLabel")}</dt>
                <dd>{t("hubSofiaRegionVal")}</dd>
                <dt>{t("hubHoursLabel")}</dt>
                <dd>
                  Mon&nbsp;–&nbsp;Fri
                  <br />
                  09:00 – 18:00 EET
                </dd>
                <dt>{t("hubFunctionLabel")}</dt>
                <dd>{t("hubSofiaFunctionVal")}</dd>
              </dl>
            </article>

            <article className="hub-card">
              <div className="hub-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/photo-hub-lima.jpg"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="hub-tag">Hub 03</div>
              <h3>Lima</h3>
              <div className="hub-sub">{t("hubLimaSub")}</div>
              <p>{t("hubLimaBody")}</p>
              <dl className="hub-dl">
                <dt>{t("hubRegionLabel")}</dt>
                <dd>{t("hubLimaRegionVal")}</dd>
                <dt>{t("hubHoursLabel")}</dt>
                <dd>
                  Mon&nbsp;–&nbsp;Fri
                  <br />
                  08:30 – 17:30 PET
                </dd>
                <dt>{t("hubFunctionLabel")}</dt>
                <dd>{t("hubLimaFunctionVal")}</dd>
              </dl>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="response-grid">
            <div className="left">
              <div className="eyebrow">{t("responseEyebrow")}</div>
              <h2 className="display display-md">{t("responseH2")}</h2>
              <p className="editorial">{t("responseLede")}</p>
            </div>
            <div className="response-cards">
              <div className="r-card">
                <div className="r-cadence">{t("responseCard1Cadence")}</div>
                <div className="r-channels">{t("responseCard1Channels")}</div>
                <p>{t("responseCard1Body")}</p>
              </div>
              <div className="r-card">
                <div className="r-cadence">{t("responseCard2Cadence")}</div>
                <div className="r-channels">{t("responseCard2Channels")}</div>
                <p>{t("responseCard2Body")}</p>
              </div>
              <div className="r-card">
                <div className="r-cadence">{t("responseCard3Cadence")}</div>
                <div className="r-channels">{t("responseCard3Channels")}</div>
                <p>{t("responseCard3Body")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
