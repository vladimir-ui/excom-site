"use client";

import { Fragment, useState } from "react";

type Year = "2025" | "2026";
type Tab = "lots" | "tput" | "fix";

export default function Dossier() {
  const [tab, setTab] = useState<Tab>("lots");
  const [year, setYear] = useState<Year>("2026");
  const yearLabel = year === "2026" ? "2026 YTD" : "2025 FY";
  return (
    <div className="dossier">
      <div className="dossier-head">
        <div>
          <h3>Operations dossier · {yearLabel}</h3>
          <div className="desc">
            Position-keeping summary, refreshed against the live ledger.
          </div>
        </div>
        <div className="dossier-meta">
          <div
            className="dossier-year-toggle"
            role="tablist"
            aria-label="Reporting year"
          >
            <button
              role="tab"
              className={year === "2025" ? "active" : ""}
              onClick={() => setYear("2025")}
              aria-selected={year === "2025"}
            >
              2025
            </button>
            <button
              role="tab"
              className={year === "2026" ? "active" : ""}
              onClick={() => setYear("2026")}
              aria-selected={year === "2026"}
            >
              2026 YTD
            </button>
          </div>
          <div className="timestamp">
            {year === "2026"
              ? "Updated 28 Apr 2026 · 14:00 BST"
              : "Closed 31 Dec 2025 · audited"}
          </div>
        </div>
      </div>

      <div className="dossier-tabs" role="tablist">
        <button
          role="tab"
          className={tab === "lots" ? "active" : ""}
          onClick={() => setTab("lots")}
        >
          Lots processed
        </button>
        <button
          role="tab"
          className={tab === "tput" ? "active" : ""}
          onClick={() => setTab("tput")}
        >
          Throughput by destination
        </button>
        <button
          role="tab"
          className={tab === "fix" ? "active" : ""}
          onClick={() => setTab("fix")}
        >
          Fix-window timing
        </button>
      </div>

      <div className="dossier-body">
        {tab === "lots" && <DossierLots year={year} />}
        {tab === "tput" && <DossierThroughput year={year} />}
        {tab === "fix" && <DossierFixWindow year={year} />}
      </div>
    </div>
  );
}

function DossierLots({ year }: { year: Year }) {
  const data =
    year === "2026"
      ? {
          total: {
            lots: 43,
            au: "7,705.9",
            auKg: "239.7",
            ag: "101,111",
            agKg: "3,144.7",
            delta: "+1 vs same period 2025",
            avgFineness: "0.849",
            avgReturn: "99.88%",
          },
          rows: [
            { q: "Q1 2026", lots: 24, au: "4,287.3", ag: "56,184", fineness: "0.847", ret: "99.86%" },
            { q: "Q2 2026 · MTD", lots: 19, au: "3,418.6", ag: "44,927", fineness: "0.852", ret: "99.91%" },
            { q: "Trailing 12-month", lots: 71, au: "12,837.1", ag: "170,392", fineness: "0.849", ret: "99.85%" },
          ],
        }
      : {
          total: {
            lots: 42,
            au: "6,945.5",
            auKg: "216.1",
            ag: "93,149",
            agKg: "2,896.4",
            delta: "Inaugural full year",
            avgFineness: "0.848",
            avgReturn: "99.81%",
          },
          rows: [
            { q: "Q1 2025", lots: 8, au: "1,316.4", ag: "17,892", fineness: "0.841", ret: "99.74%" },
            { q: "Q2 2025", lots: 10, au: "1,617.8", ag: "21,408", fineness: "0.846", ret: "99.79%" },
            { q: "Q3 2025", lots: 11, au: "1,847.1", ag: "24,733", fineness: "0.851", ret: "99.84%" },
            { q: "Q4 2025", lots: 13, au: "2,164.2", ag: "29,116", fineness: "0.853", ret: "99.87%" },
          ],
        };

  return (
    <>
      <div className="dossier-kpis">
        <div className="dossier-kpi">
          <div className="lbl">
            Lots processed · {year === "2026" ? "YTD" : "FY"}
          </div>
          <div className="val">
            {data.total.lots}
            <small>lots</small>
          </div>
          <div className="delta pos">{data.total.delta}</div>
        </div>
        <div className="dossier-kpi">
          <div className="lbl">Gross weight · Au</div>
          <div className="val">
            {data.total.au}
            <small>oz</small>
          </div>
          <div className="delta">{data.total.auKg} kg</div>
        </div>
        <div className="dossier-kpi">
          <div className="lbl">Gross weight · Ag</div>
          <div className="val">
            {data.total.ag}
            <small>oz</small>
          </div>
          <div className="delta">{data.total.agKg} kg</div>
        </div>
      </div>

      <table className="dossier-table">
        <thead>
          <tr>
            <th>Quarter</th>
            <th>Lots</th>
            <th className="r">Au · gross oz</th>
            <th className="r">Ag · gross oz</th>
            <th className="r">Avg. fineness Au</th>
            <th className="r">Avg. return %</th>
          </tr>
        </thead>
        <tbody>
          {data.rows.map((r) => (
            <tr key={r.q}>
              <td className="label">{r.q}</td>
              <td>{r.lots}</td>
              <td className="r">{r.au}</td>
              <td className="r">{r.ag}</td>
              <td className="r">{r.fineness}</td>
              <td className="r">{r.ret}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function DossierThroughput({ year }: { year: Year }) {
  const data =
    year === "2026"
      ? {
          totalLots: 43,
          rows: [
            { name: "Switzerland", pct: 37, lots: 16, oz: "2,851.3" },
            { name: "Italy", pct: 21, lots: 9, oz: "1,618.2" },
            { name: "United Arab Emirates", pct: 19, lots: 8, oz: "1,464.1" },
            { name: "India", pct: 14, lots: 6, oz: "1,078.8" },
            { name: "Türkiye", pct: 9, lots: 4, oz: "693.5" },
          ],
          largest: "Switzerland",
          largestPct: "37%",
          topTwoPct: "58%",
        }
      : {
          totalLots: 42,
          rows: [
            { name: "Switzerland", pct: 33, lots: 14, oz: "2,292.0" },
            { name: "Italy", pct: 24, lots: 10, oz: "1,666.9" },
            { name: "United Arab Emirates", pct: 17, lots: 7, oz: "1,180.7" },
            { name: "India", pct: 14, lots: 6, oz: "972.4" },
            { name: "Türkiye", pct: 12, lots: 5, oz: "833.5" },
          ],
          largest: "Switzerland",
          largestPct: "33%",
          topTwoPct: "57%",
        };

  return (
    <>
      <div className="dossier-kpis">
        <div className="dossier-kpi">
          <div className="lbl">Refining destinations</div>
          <div className="val">
            5<small>jurisdictions</small>
          </div>
          <div className="delta">All LBMA-accredited</div>
        </div>
        <div className="dossier-kpi">
          <div className="lbl">Largest single destination</div>
          <div className="val">
            {data.largestPct}
            <small>of {year === "2026" ? "YTD" : "FY"}</small>
          </div>
          <div className="delta">{data.largest}</div>
        </div>
        <div className="dossier-kpi">
          <div className="lbl">Concentration · top-2</div>
          <div className="val">
            {data.topTwoPct}
            <small></small>
          </div>
          <div className="delta">Below internal cap of 65%</div>
        </div>
      </div>

      <table className="dossier-table">
        <thead>
          <tr>
            <th>Jurisdiction</th>
            <th className="r">Share</th>
            <th className="r">Lots</th>
            <th className="r">Au · gross oz</th>
            <th>Distribution</th>
          </tr>
        </thead>
        <tbody>
          {data.rows.map((r) => (
            <tr key={r.name}>
              <td className="label">{r.name}</td>
              <td className="r">{r.pct}%</td>
              <td className="r">{r.lots}</td>
              <td className="r">{r.oz}</td>
              <td>
                <span className="bar" style={{ width: `${r.pct * 4}px` }}></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function DossierFixWindow({ year }: { year: Year }) {
  const pct = (d: number) => `${(d / 14) * 100}%`;
  const lots = year === "2026" ? 43 : 42;
  const median = year === "2026" ? "9.0" : "9.4";
  const advance = year === "2026" ? "1.2" : "1.4";
  const advDelta = year === "2026" ? "−0.2 vs prior FY" : "Inaugural full year";
  const range = year === "2026" ? "6.1 → 12.4" : "6.4 → 13.1";
  const medDelta =
    year === "2026" ? "−0.4 vs prior FY" : "First full year of operations";
  const rangeStart = year === "2026" ? 6.1 : 6.4;
  const rangeEnd = year === "2026" ? 12.4 : 13.1;
  const stages =
    year === "2026"
      ? [
          { from: 0, to: 1.2, key: "adv", label: "Producer advance", sub: "1.2d", side: "top" as const },
          { from: 1.2, to: 2.4, key: "vlt", label: "Vault-in", sub: "2.4d", side: "bottom" as const },
          { from: 2.4, to: 6.2, key: "assy", label: "Assay outturn", sub: "6.2d", side: "top" as const },
          { from: 6.2, to: 9.0, key: "fix", label: "LBMA fix · median", sub: "9.0d", side: "bottom" as const },
        ]
      : [
          { from: 0, to: 1.4, key: "adv", label: "Producer advance", sub: "1.4d", side: "top" as const },
          { from: 1.4, to: 2.6, key: "vlt", label: "Vault-in", sub: "2.6d", side: "bottom" as const },
          { from: 2.6, to: 6.5, key: "assy", label: "Assay outturn", sub: "6.5d", side: "top" as const },
          { from: 6.5, to: 9.4, key: "fix", label: "LBMA fix · median", sub: "9.4d", side: "bottom" as const },
        ];

  return (
    <>
      <div className="dossier-kpis">
        <div className="dossier-kpi headline">
          <div className="lbl">Producer advance · post wheels-up</div>
          <div className="val">
            {advance}
            <small>days</small>
          </div>
          <div className="delta pos">{advDelta}</div>
        </div>
        <div className="dossier-kpi">
          <div className="lbl">Median · wheels-up to fix</div>
          <div className="val">
            {median}
            <small>days</small>
          </div>
          <div className="delta pos">{medDelta}</div>
        </div>
        <div className="dossier-kpi">
          <div className="lbl">Window envelope</div>
          <div className="val">
            14<small>days</small>
          </div>
          <div className="delta">Internal SLA · 100% within</div>
        </div>
        <div className="dossier-kpi">
          <div className="lbl">Fix benchmark</div>
          <div className="val">
            LBMA<small>AM/PM</small>
          </div>
          <div className="delta">ICE Benchmark Admin · FCA-regulated</div>
        </div>
      </div>

      <div className="fix-window">
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--ink-muted)",
            marginBottom: 4,
          }}
        >
          Wheels-up → LBMA fix · days
        </div>
        <div className="scale stages">
          <div
            className="range"
            style={{
              left: pct(rangeStart),
              width: `calc(${pct(rangeEnd)} - ${pct(rangeStart)})`,
            }}
          ></div>

          {stages.map((s) => (
            <Fragment key={s.key}>
              <div
                className={`stage-seg seg-${s.key}`}
                style={{
                  left: `calc(${pct(s.from)} + 6px)`,
                  width: `calc(${pct(s.to)} - ${pct(s.from)} - 12px)`,
                }}
                title={`${s.label}: ${s.sub}`}
              ></div>
              <div
                className={`stage-tick tick-${s.key}`}
                style={{ left: pct(s.to) }}
                aria-hidden="true"
              ></div>
              <div
                className={`stage-marker marker-${s.key} ${
                  s.side === "top" ? "top" : "bot"
                } ${s.key === "fix" ? "is-median" : ""}`}
                style={{ left: pct(s.to) }}
              >
                <span className="lbl">{s.label}</span>
                <span className="sub">{s.sub}</span>
              </div>
            </Fragment>
          ))}

          <div className="axis"></div>
          {[0, 2, 4, 6, 8, 10, 12, 14].map((d) => (
            <div key={d} className="tick" style={{ left: pct(d) }}>
              {d}
            </div>
          ))}
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.06em",
            color: "var(--ink-muted)",
            marginTop: 14,
          }}
        >
          Range across {lots} lots · {range} days · 100% within 14-day SLA
        </div>
      </div>

      <table className="dossier-table" style={{ marginTop: 28 }}>
        <thead>
          <tr>
            <th>Stage</th>
            <th className="r">Median · days</th>
            <th className="r">P90 · days</th>
            <th className="r">SLA · days</th>
          </tr>
        </thead>
        <tbody>
          {year === "2026" ? (
            <>
              <tr>
                <td className="label">Wheels-up → vault-in</td>
                <td className="r">2.4</td>
                <td className="r">3.1</td>
                <td className="r">4</td>
              </tr>
              <tr>
                <td className="label">Vault-in → assay outturn</td>
                <td className="r">3.8</td>
                <td className="r">5.2</td>
                <td className="r">6</td>
              </tr>
              <tr>
                <td className="label">Outturn → LBMA fix</td>
                <td className="r">2.8</td>
                <td className="r">3.7</td>
                <td className="r">4</td>
              </tr>
              <tr>
                <td className="label">Total · wheels-up → fix</td>
                <td className="r">9.0</td>
                <td className="r">11.9</td>
                <td className="r">14</td>
              </tr>
            </>
          ) : (
            <>
              <tr>
                <td className="label">Wheels-up → vault-in</td>
                <td className="r">2.6</td>
                <td className="r">3.4</td>
                <td className="r">4</td>
              </tr>
              <tr>
                <td className="label">Vault-in → assay outturn</td>
                <td className="r">3.9</td>
                <td className="r">5.6</td>
                <td className="r">6</td>
              </tr>
              <tr>
                <td className="label">Outturn → LBMA fix</td>
                <td className="r">2.9</td>
                <td className="r">4.0</td>
                <td className="r">4</td>
              </tr>
              <tr>
                <td className="label">Total · wheels-up → fix</td>
                <td className="r">9.4</td>
                <td className="r">12.6</td>
                <td className="r">14</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </>
  );
}
