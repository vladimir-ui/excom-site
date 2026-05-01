"use client";

import { useEffect, useState, type MouseEvent } from "react";

const TOC_ITEMS = [
  { id: "sourcing", num: "01", icon: "/assets/icon-sourcing.png", label: "Sourcing" },
  { id: "logistics", num: "02", icon: "/assets/icon-logistics.png", label: "Logistics" },
  { id: "refining", num: "03", icon: "/assets/icon-refining.png", label: "Refining" },
  { id: "settlement", num: "04", icon: "/assets/icon-settlement.png", label: "Settlement" },
];

export default function OpsToc() {
  const [active, setActive] = useState("sourcing");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
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
    <aside className="ops-toc" aria-label="Phase index">
      <div className="label">Lifecycle index</div>
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
              <span className="lbl">{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}
