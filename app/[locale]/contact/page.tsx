/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import ContactForm from "./ContactForm";
import CounterpartyPackForm from "./CounterpartyPackForm";

export const metadata: Metadata = {
  title: "Contact — ExCom",
  description:
    "Counterparty enquiries, compliance documentation requests, and press contact for ExCom Limited.",
};

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
          <div className="crumbs">Home · Contact</div>
          <h1>Contact.</h1>
          <p className="lede">
            ExCom is reachable through a single email address and a single
            office. Substantive enquiries are routed to the relevant function
            via the intake form below; the choice of category determines
            which desk receives the message.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-layout">
            <ContactForm />

            <aside className="contact-aside">
              <div className="aside-block">
                <div className="eyebrow">Switchboard</div>
                <h3 className="aside-h">Direct channels</h3>
                <dl className="direct-dl">
                  <dt>Email</dt>
                  <dd>
                    <a href="mailto:info@ex-com.org">info@ex-com.org</a>
                  </dd>
                  <dt>Web</dt>
                  <dd>www.ex-com.org</dd>
                </dl>
              </div>

              <div className="aside-block">
                <div className="eyebrow">Registered office</div>
                <h3 className="aside-h">Birkirkara, Malta</h3>
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
                  <dt>Function</dt>
                  <dd>Statutory seat. Audit, board, statutory filings.</dd>
                  <dt>Visits</dt>
                  <dd>By prior appointment only.</dd>
                </dl>
              </div>

              <div className="aside-block">
                <div className="eyebrow">Statutory</div>
                <h3 className="aside-h">Entity</h3>
                <dl className="office-dl">
                  <dt>Legal name</dt>
                  <dd>ExCom Limited</dd>
                  <dt>Company no.</dt>
                  <dd className="mono">C 112080</dd>
                  <dt>VAT</dt>
                  <dd className="mono">MT31936814</dd>
                  <dt>Incorporated</dt>
                  <dd>21 May 2025</dd>
                  <dt>Auditor</dt>
                  <dd>KPMG (Malta)</dd>
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
              <div className="eyebrow">Operational hubs</div>
              <h2 className="display display-md">Three desks, one entity.</h2>
            </div>
            <div className="right">
              <p className="editorial">
                ExCom is registered in Malta and runs day-to-day operations
                from three coordinated desks: Malta, Sofia, and Lima. The
                hubs are not separate entities — they are functional
                placements of a single ExCom desk, calibrated to where
                origin, transit, and counterparty engagement actually happen.
              </p>
            </div>
          </div>

          <div className="hubs-grid">
            <article className="hub-card">
              <div className="hub-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/photo-hub-malta.jpg"
                  alt="Maltese baroque parish church facade in Birkirkara, two bell towers and a central pediment in honey-coloured limestone against a cloudscape."
                  loading="lazy"
                />
              </div>
              <div className="hub-tag">Hub 01</div>
              <h3>Malta</h3>
              <div className="hub-sub">Statutory seat · EU regulatory base</div>
              <p>
                The registered office and the statutory home of the trading
                book. Board, audit, and AML/CFT supervisory engagement run
                from Malta. The EU regulatory perimeter governs the entire
                enterprise from this seat.
              </p>
              <dl className="hub-dl">
                <dt>Address</dt>
                <dd>
                  BKR 4013
                  <br />
                  Birkirkara, Malta
                </dd>
                <dt>Hours</dt>
                <dd>
                  Mon&nbsp;–&nbsp;Fri
                  <br />
                  09:00 – 17:30 CET
                </dd>
                <dt>Function</dt>
                <dd>Registered office · audit · statutory</dd>
              </dl>
            </article>

            <article className="hub-card">
              <div className="hub-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/photo-hub-sofia.jpg"
                  alt="Largo government complex in central Sofia at dusk — the former Party House flanked by the Council of Ministers and Presidency, with a glass dome over the ancient Serdica ruins in the foreground."
                  loading="lazy"
                />
              </div>
              <div className="hub-tag">Hub 02</div>
              <h3>Sofia</h3>
              <div className="hub-sub">European trading desk · Bulgaria</div>
              <p>
                The European trading desk and operational headquarters for
                day-to-day execution. Counterparty management, transit
                logistics, and refinery liaison across the European and
                Eurasian corridors are coordinated from Sofia.
              </p>
              <dl className="hub-dl">
                <dt>Region</dt>
                <dd>Sofia, Bulgaria</dd>
                <dt>Hours</dt>
                <dd>
                  Mon&nbsp;–&nbsp;Fri
                  <br />
                  09:00 – 18:00 EET
                </dd>
                <dt>Function</dt>
                <dd>European trading desk · operations</dd>
              </dl>
            </article>

            <article className="hub-card">
              <div className="hub-photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/photo-hub-lima.jpg"
                  alt="Aerial view of the Lima coastline along the Costa Verde, with the city built atop seaside cliffs above the Pacific."
                  loading="lazy"
                />
              </div>
              <div className="hub-tag">Hub 03</div>
              <h3>Lima</h3>
              <div className="hub-sub">LATAM origin desk · Peru</div>
              <p>
                The Latin America origin desk. Sourcing engagement with
                producers across the Andean precious-metals belt, mill-gate
                diligence, and the first leg of secured logistics out of
                origin are coordinated from Lima.
              </p>
              <dl className="hub-dl">
                <dt>Region</dt>
                <dd>Lima, Peru</dd>
                <dt>Hours</dt>
                <dd>
                  Mon&nbsp;–&nbsp;Fri
                  <br />
                  08:30 – 17:30 PET
                </dd>
                <dt>Function</dt>
                <dd>LATAM origin desk · producer engagement</dd>
              </dl>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="response-grid">
            <div className="left">
              <div className="eyebrow">Response</div>
              <h2 className="display display-md">What to expect.</h2>
              <p className="editorial">
                Enquiries are reviewed on a desk basis and acknowledged in
                writing. Below are indicative response times — these are
                operating norms, not service-level commitments.
              </p>
            </div>
            <div className="response-cards">
              <div className="r-card">
                <div className="r-cadence">Within 5 working days</div>
                <div className="r-channels">Producer · Refinery · Advisory</div>
                <p>
                  Substantive enquiries are routed to the relevant trading or
                  advisory desk for written acknowledgement and a proposed
                  scoping call.
                </p>
              </div>
              <div className="r-card">
                <div className="r-cadence">Within 10 working days</div>
                <div className="r-channels">Compliance · Audit</div>
                <p>
                  Compliance documentation requests are released under
                  written engagement; counterparty packets follow a defined
                  release protocol.
                </p>
              </div>
              <div className="r-card">
                <div className="r-cadence">Same week</div>
                <div className="r-channels">Press · Media</div>
                <p>
                  Press enquiries reach corporate communications directly and
                  are answered within the publication's working window where
                  feasible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
