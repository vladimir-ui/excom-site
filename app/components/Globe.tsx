"use client";

import { useEffect, useMemo, useState } from "react";
import { geoOrthographic, geoPath, geoGraticule } from "d3-geo";
import { feature } from "topojson-client";

const MALTA_LAT = 35.9;
const MALTA_LON = 14.5;
const CENTRE_LON = 25;
const CENTRE_LAT = 25;

type Pin = { x: number; y: number };
type Origin = { name: string; lat: number; lon: number };

const ORIGINS: Origin[] = [
  { name: "PER", lat: -12, lon: -75 },
  { name: "BOL", lat: -17, lon: -65 },
  { name: "COL", lat: 4, lon: -73 },
  { name: "GHA", lat: 7, lon: -1 },
  { name: "COD", lat: -4, lon: 23 },
  { name: "BGR", lat: 42.7, lon: 23.3 },
  { name: "KAZ", lat: 48, lon: 68 },
  { name: "PHL", lat: 12, lon: 122 },
  { name: "USA", lat: 39, lon: -100 },
];

const DESTS: Origin[] = [
  { name: "CH", lat: 46.8, lon: 8.2 },
  { name: "IT", lat: 45.5, lon: 9.2 },
  { name: "TUR", lat: 39.9, lon: 32.9 },
  { name: "UAE", lat: 25.2, lon: 55.3 },
  { name: "IND", lat: 19.1, lon: 72.9 },
];

export default function GlobeBridge() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [land, setLand] = useState<any>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/data/land-110m.json")
      .then((r) => r.json())
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((world: any) => {
        if (cancelled) return;
        const features = feature(world, world.objects.land);
        setLand(features);
      })
      .catch(() => {
        // silent fail — globe renders without continents
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const R = 200;

  const projection = useMemo(
    () =>
      geoOrthographic()
        .scale(R)
        .translate([0, 0])
        .rotate([-CENTRE_LON, -CENTRE_LAT, 0])
        .clipAngle(90),
    [],
  );

  const pathGen = useMemo(() => geoPath(projection), [projection]);
  const graticule = useMemo(() => geoGraticule().step([20, 15]), []);

  const pin = (lat: number, lon: number): Pin | null => {
    const v = projection([lon, lat]);
    if (!v) return null;
    if (!isFinite(v[0]) || !isFinite(v[1])) return null;
    if (Math.hypot(v[0], v[1]) > R + 0.5) return null;
    return { x: v[0], y: v[1] };
  };

  const originPts = ORIGINS.map((o) => ({ ...o, p: pin(o.lat, o.lon) })).filter(
    (o): o is Origin & { p: Pin } => o.p !== null,
  );
  const destPts = DESTS.map((d) => ({ ...d, p: pin(d.lat, d.lon) })).filter(
    (d): d is Origin & { p: Pin } => d.p !== null,
  );

  const center: Pin = (() => {
    const v = projection([MALTA_LON, MALTA_LAT]);
    return v ? { x: v[0], y: v[1] } : { x: 0, y: 0 };
  })();

  const arcPath = (a: Pin, b: Pin, lift = 1.0) => {
    const mx = (a.x + b.x) / 2;
    const my = (a.y + b.y) / 2;
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const dist = Math.hypot(dx, dy);
    const py2 = my - dist * 0.3 * lift;
    return `M ${a.x} ${a.y} Q ${mx} ${py2} ${b.x} ${b.y}`;
  };

  return (
    <div className="globe-wrap">
      <svg
        viewBox="-260 -260 520 520"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <g className="globe-grid">
          <circle cx={0} cy={0} r={R} />
          <circle cx={0} cy={0} r={R * 0.992} strokeOpacity="0.35" />
          <path d={pathGen(graticule()) || ""} className="globe-graticule" />
        </g>

        {land && (
          <g className="globe-land">
            <path d={pathGen(land) || ""} />
          </g>
        )}

        <g className="globe-arcs">
          {originPts.map((o, i) => (
            <path
              key={`oa${i}`}
              className={`globe-arc delay-${(i % 8) + 1}`}
              d={arcPath(o.p, center, 1.0 + (i % 3) * 0.15)}
            />
          ))}
          {destPts.map((d, i) => (
            <path
              key={`da${i}`}
              className={`globe-arc delay-${((i + 3) % 8) + 1}`}
              d={arcPath(center, d.p, 1.0 + (i % 3) * 0.15)}
            />
          ))}
        </g>

        {originPts.map((o, i) => (
          <circle
            key={`on${i}`}
            className="globe-node origin"
            cx={o.p.x}
            cy={o.p.y}
            r={3.2}
          />
        ))}
        {destPts.map((d, i) => (
          <circle
            key={`dn${i}`}
            className="globe-node dest"
            cx={d.p.x}
            cy={d.p.y}
            r={3.2}
          />
        ))}

        <circle className="globe-pulse" cx={center.x} cy={center.y} r={4} />
        <circle className="globe-center" cx={center.x} cy={center.y} r={7} />

        <text
          className="globe-label"
          x={-R - 8}
          y={-R + 4}
          textAnchor="end"
        >
          Producers
        </text>
        <text
          className="globe-label"
          x={R + 8}
          y={-R + 4}
          textAnchor="start"
        >
          Refineries
        </text>
        <text
          className="globe-label center"
          x={center.x}
          y={center.y + 26}
          textAnchor="middle"
        >
          ExCom · Malta
        </text>
      </svg>
    </div>
  );
}
