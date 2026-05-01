"use client";

import { useState, type FormEvent } from "react";

type CategoryId =
  | "producer"
  | "refinery"
  | "advisory"
  | "compliance"
  | "press"
  | "general";

type Category = {
  id: CategoryId;
  label: string;
  desc: string;
  to: string;
  subj: string;
};

const INTAKE_CATEGORIES: Category[] = [
  {
    id: "producer",
    label: "Producer intake",
    desc: "Origin, material profile, offtake enquiry.",
    to: "info@ex-com.org",
    subj: "Producer intake",
  },
  {
    id: "refinery",
    label: "Refinery counterparty",
    desc: "Refining capacity dialogue or counterparty onboarding.",
    to: "info@ex-com.org",
    subj: "Refinery counterparty enquiry",
  },
  {
    id: "advisory",
    label: "Advisory scoping",
    desc: "Producer advisory engagement — scoping call.",
    to: "info@ex-com.org",
    subj: "Advisory scoping — producer intake",
  },
  {
    id: "compliance",
    label: "Compliance / audit",
    desc: "Compliance documentation, KYC, audit-related enquiries.",
    to: "info@ex-com.org",
    subj: "Compliance documentation request",
  },
  {
    id: "press",
    label: "Press / media",
    desc: "Media enquiries and corporate communications.",
    to: "info@ex-com.org",
    subj: "Press enquiry",
  },
  {
    id: "general",
    label: "General",
    desc: "Anything else.",
    to: "info@ex-com.org",
    subj: "General enquiry",
  },
];

export default function ContactForm() {
  const [cat, setCat] = useState<CategoryId>("producer");
  const [name, setName] = useState("");
  const [firm, setFirm] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const [nda, setNda] = useState(false);

  const active =
    INTAKE_CATEGORIES.find((c) => c.id === cat) ?? INTAKE_CATEGORIES[0];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lines = [
      `Name: ${name}`,
      `Firm: ${firm}`,
      `Role: ${role}`,
      `Category: ${active.label}`,
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
      <div className="eyebrow">Intake</div>
      <h2 className="display display-md">Route the enquiry.</h2>
      <p
        className="editorial"
        style={{ marginTop: "0.75rem", marginBottom: "2rem" }}
      >
        Select the appropriate desk. Submission opens an email draft
        addressed to the correct routing — no information is transmitted to
        ExCom servers from this page.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <fieldset className="cat-fieldset">
          <legend>Desk</legend>
          <div className="cat-grid">
            {INTAKE_CATEGORIES.map((c) => (
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
                <span className="cat-label">{c.label}</span>
                <span className="cat-desc">{c.desc}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="field-row">
          <label className="field">
            <span className="lbl">Name</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label className="field">
            <span className="lbl">Firm</span>
            <input
              type="text"
              value={firm}
              onChange={(e) => setFirm(e.target.value)}
              required
            />
          </label>
        </div>

        <label className="field">
          <span className="lbl">Role</span>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </label>

        <label className="field">
          <span className="lbl">Message</span>
          <textarea
            rows={6}
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder="Concise; ExCom will follow up to schedule."
            required
          />
        </label>

        <label className="check-row">
          <input
            type="checkbox"
            checked={nda}
            onChange={(e) => setNda(e.target.checked)}
          />
          <span>
            I acknowledge that any sensitive material will be exchanged under
            written NDA before substantive engagement.
          </span>
        </label>

        <div className="form-actions">
          <button type="submit" className="cta">
            Open enquiry →
          </button>
          <span className="form-note">
            Opens your mail client. No data leaves your machine until you
            send.
          </span>
        </div>
      </form>
    </div>
  );
}
