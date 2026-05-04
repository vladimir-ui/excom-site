import { useTranslations } from "next-intl";
import { Link } from "../../i18n/navigation";

export default function NotFound() {
  const t = useTranslations("notFound");
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">{t("crumbs")}</div>
          <h1>{t("h1")}</h1>
          <p className="lede">{t("lede")}</p>
          <p style={{ marginTop: 24 }}>
            <Link href="/" className="cta">
              {t("cta")}
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
