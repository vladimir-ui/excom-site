"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { useTranslations } from "next-intl";

type TocId = "sourcing" | "logistics" | "refining" | "settlement";

const TOC_ITEMS: { id: TocId; num: string; icon: string; titleKey: string }[] =
  [
    {
      id: "sourcing",
      num: "01",
      icon: "/assets/icon-sourcing.png",
      titleKey: "phaseSourcingTitle",
    },
    {
      id: "logistics",
      num: "02",
      icon: "/assets/icon-logistics.png",
      titleKey: "phaseLogisticsTitle",
    },
    {
      id: "refining",
      num: "03",
      icon: "/assets/icon-refining.png",
      titleKey: "phaseRefiningTitle",
    },
    {
      id: "settlement",
      num: "04",
      icon: "/assets/icon-settlement.png",
      titleKey: "phaseSettlementTitle",
    },
  ];

export default function OpsToc() {
  const t = useTranslations("operations");
  const [active, setActive] = useState<TocId>("sourcing");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id as TocId);
        });
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
    );
    TOC_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const goTo = (id: string) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <aside className="ops-toc" aria-label={t("tocLabel")}>
      <div className="label">{t("tocLabel")}</div>
      <ol className="lifecycle-index">
        {TOC_ITEMS.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={active === item.id ? "active" : ""}
              onClick={goTo(item.id)}
            >
              <span className="n">{item.num}</span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="phase-ico"
                src={item.icon}
                alt=""
                aria-hidden="true"
              />
              <span className="lbl">
                {t(
                  item.titleKey as
                    | "phaseSourcingTitle"
                    | "phaseLogisticsTitle"
                    | "phaseRefiningTitle"
                    | "phaseSettlementTitle",
                )}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}
