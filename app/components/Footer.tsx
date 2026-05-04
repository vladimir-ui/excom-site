import { getTranslations } from "next-intl/server";
import { Link } from "../../i18n/navigation";

const NAV_KEYS = [
  "home",
  "about",
  "operations",
  "advisory",
  "compliance",
  "contact",
] as const;

const PATHS: Record<(typeof NAV_KEYS)[number], string> = {
  home: "/",
  about: "/about",
  operations: "/operations",
  advisory: "/advisory",
  compliance: "/compliance",
  contact: "/contact",
};

export default async function Footer() {
  const tNav = await getTranslations("nav");
  const t = await getTranslations("footer");
  const buildDate = new Date().toISOString().slice(0, 10);
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="col footer-entity">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="footer-logo"
              src="/assets/excom-logo-white.png"
              alt="ExCom"
              width={200}
              height={50}
            />
            <p>{t("entityDescription")}</p>
          </div>

          <div className="col">
            <h4>{t("siteHeading")}</h4>
            <ul>
              {NAV_KEYS.map((key) => (
                <li key={key}>
                  <Link href={PATHS[key]}>{tNav(key)}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col">
            <h4>{t("contactHeading")}</h4>
            <ul>
              <li>
                <a href="mailto:info@ex-com.org">info@ex-com.org</a>
              </li>
              <li>
                <a
                  href="https://www.ex-com.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.ex-com.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <details className="footer-disclosure">
          <summary>
            <span>{t("statutoryHeading")}</span>
            <span className="chev">▾</span>
          </summary>
          <div className="body">
            <div>
              <b>{t("statutoryRegisteredOffice")}</b>
              BKR 4013,
              <br />
              Birkirkara, Malta
            </div>
            <div>
              <b>{t("statutoryCompanyNumber")}</b>
              C 112080
            </div>
            <div>
              <b>{t("statutoryIncorporated")}</b>
              {t("statutoryIncorporatedVal")}
            </div>
            <div>
              <b>{t("statutoryVat")}</b>
              MT31936814
            </div>
            <div>
              <b>{t("statutoryHubs")}</b>
              Malta · Sofia (BG)
              <br />
              Lima (PE)
            </div>
            <div>
              <b>{t("statutoryAuditor")}</b>
              {t("statutoryAuditorVal")}
            </div>
            <div>
              <b>{t("statutoryReach")}</b>
              {t("statutoryReachVal")}
            </div>
          </div>
        </details>

        <div className="footer-bottom">
          <span>{t("copyright")}</span>
          <span>v 1.0 · Malta · {buildDate}</span>
        </div>
      </div>
    </footer>
  );
}
