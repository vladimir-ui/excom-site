"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

type CategoryId =
  | "producer"
  | "refinery"
  | "advisory"
  | "compliance"
  | "press"
  | "general";

type CategoryKey =
  | "catProducerLabel"
  | "catProducerDesc"
  | "catRefineryLabel"
  | "catRefineryDesc"
  | "catAdvisoryLabel"
  | "catAdvisoryDesc"
  | "catComplianceLabel"
  | "catComplianceDesc"
  | "catPressLabel"
  | "catPressDesc"
  | "catGeneralLabel"
  | "catGeneralDesc";

const CATEGORIES: {
  id: CategoryId;
  labelKey: CategoryKey;
  descKey: CategoryKey;
  to: string;
  subj: string;
}[] = [
  {
    id: "producer",
    labelKey: "catProducerLabel",
    descKey: "catProducerDesc",
    to: "info@ex-com.org",
    subj: "Producer intake",
  },
  {
    id: "refinery",
    labelKey: "catRefineryLabel",
    descKey: "catRefineryDesc",
    to: "info@ex-com.org",
    subj: "Refinery counterparty enquiry",
  },
  {
    id: "advisory",
    labelKey: "catAdvisoryLabel",
    descKey: "catAdvisoryDesc",
    to: "info@ex-com.org",
    subj: "Advisory scoping — producer intake",
  },
  {
    id: "compliance",
    labelKey: "catComplianceLabel",
    descKey: "catComplianceDesc",
    to: "info@ex-com.org",
    subj: "Compliance documentation request",
  },
  {
    id: "press",
    labelKey: "catPressLabel",
    descKey: "catPressDesc",
    to: "info@ex-com.org",
    subj: "Press enquiry",
  },
  {
    id: "general",
    labelKey: "catGeneralLabel",
    descKey: "catGeneralDesc",
    to: "info@ex-com.org",
    subj: "General enquiry",
  },
];

export default function ContactForm() {
  const t = useTranslations("contactForm");
  const [cat, setCat] = useState<CategoryId>("producer");
  const [name, setName] = useState("");
  const [firm, setFirm] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const [nda, setNda] = useState(false);

  const active = CATEGORIES.find((c) => c.id === cat) ?? CATEGORIES[0];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [
      `Name: ${name}`,
      `Firm: ${firm}`,
      `Role: ${role}`,
      `Category: ${t(active.labelKey)}`,
      nda ? "NDA acknowledged: yes" : "",
      "",
      msg,
    ]
      .filter(Boolean)
      .join("\n");
    const url = `mailto:${active.to}?subject=${encodeURIComponent(
      "[" + active.subj + "]",
    )}&body=${encodeURIComponent(lines)}`;
    window.location.href = url;
  };

  return (
    <div className="contact-form-block">
      <div className="eyebrow">{t("intakeEyebrow")}</div>
      <h2 className="display display-md">{t("intakeH2")}</h2>
      <p
        className="editorial"
        style={{ marginTop: "0.75rem", marginBottom: "2rem" }}
      >
        {t("intakeLede")}
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <fieldset className="cat-fieldset">
          <legend>{t("deskLegend")}</legend>
          <div className="cat-grid">
            {CATEGORIES.map((c) => (
              <label
                key={c.id}
                className={`cat-card ${cat === c.id ? "active" : ""}`}
              >
                <input
                  type="radio"
                  name="cat"
                  value={c.id}
                  checked={cat === c.id}
                  onChange={() => setCat(c.id)}
                />
                <span className="cat-label">{t(c.labelKey)}</span>
                <span className="cat-desc">{t(c.descKey)}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="field-row">
          <label className="field">
            <span className="lbl">{t("fieldName")}</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label className="field">
            <span className="lbl">{t("fieldFirm")}</span>
            <input
              type="text"
              value={firm}
              onChange={(e) => setFirm(e.target.value)}
              required
            />
          </label>
        </div>

        <label className="field">
          <span className="lbl">{t("fieldRole")}</span>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </label>

        <label className="field">
          <span className="lbl">{t("fieldMessage")}</span>
          <textarea
            rows={6}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder={t("messagePlaceholder")}
            required
          />
        </label>

        <label className="check-row">
          <input
            type="checkbox"
            checked={nda}
            onChange={(e) => setNda(e.target.checked)}
          />
          <span>{t("ndaCheck")}</span>
        </label>

        <div className="form-actions">
          <button type="submit" className="cta">
            {t("submit")}
          </button>
          <span className="form-note">{t("formNote")}</span>
        </div>
      </form>
    </div>
  );
}
