"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

const TYPES = ["Producer", "Refinery", "Bank", "Hedging", "Other"] as const;

export default function CounterpartyPackForm() {
  const t = useTranslations("contact");
  const [name, setName] = useState("");
  const [entity, setEntity] = useState("");
  const [role, setRole] = useState("");
  const [jurisdiction, setJurisdiction] = useState("");
  const [type, setType] = useState<(typeof TYPES)[number]>("Producer");
  const [email, setEmail] = useState("");
  const [nda, setNda] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [
      `Name: ${name}`,
      `Entity: ${entity}`,
      `Role: ${role}`,
      `Jurisdiction: ${jurisdiction}`,
      `Counterparty type: ${type}`,
      `Email: ${email}`,
      nda ? "NDA acknowledgement: yes" : "",
    ]
      .filter(Boolean)
      .join("\n");
    const url = `mailto:info@ex-com.org?subject=${encodeURIComponent(
      "[Counterparty Pack request]",
    )}&body=${encodeURIComponent(lines)}`;
    window.location.href = url;
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label className="field">
          <span className="lbl">{t("packFieldName")}</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label className="field">
          <span className="lbl">{t("packFieldEntity")}</span>
          <input
            type="text"
            value={entity}
            onChange={(e) => setEntity(e.target.value)}
            required
          />
        </label>
      </div>

      <div className="field-row">
        <label className="field">
          <span className="lbl">{t("packFieldRole")}</span>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </label>
        <label className="field">
          <span className="lbl">{t("packFieldJurisdiction")}</span>
          <input
            type="text"
            value={jurisdiction}
            onChange={(e) => setJurisdiction(e.target.value)}
          />
        </label>
      </div>

      <fieldset className="cat-fieldset">
        <legend>{t("packFieldType")}</legend>
        <div className="cat-grid">
          {TYPES.map((tp) => (
            <label
              key={tp}
              className={`cat-card ${type === tp ? "active" : ""}`}
            >
              <input
                type="radio"
                name="type"
                value={tp}
                checked={type === tp}
                onChange={() => setType(tp)}
              />
              <span className="cat-label">
                {t(
                  `packType${tp}` as
                    | "packTypeProducer"
                    | "packTypeRefinery"
                    | "packTypeBank"
                    | "packTypeHedging"
                    | "packTypeOther",
                )}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="field">
        <span className="lbl">{t("packFieldEmail")}</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label className="check-row">
        <input
          type="checkbox"
          checked={nda}
          onChange={(e) => setNda(e.target.checked)}
          required
        />
        <span>{t("packNdaCheck")}</span>
      </label>

      <div className="form-actions">
        <button type="submit" className="cta">
          {t("packSubmit")}
        </button>
        <span className="form-note">{t("packNote")}</span>
      </div>
    </form>
  );
}
