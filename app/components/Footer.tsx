import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/operations", label: "Operations" },
  { href: "/advisory", label: "Advisory" },
  { href: "/compliance", label: "Compliance" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
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
            <p>
              ExCom Limited — Malta-incorporated trader of precious metals raw
              material. Counterparty network across origin, transit, and
              refining jurisdictions.
            </p>
          </div>

          <div className="col">
            <h4>Site</h4>
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col">
            <h4>Contact</h4>
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
            <span>Statutory information</span>
            <span className="chev">▾</span>
          </summary>
          <div className="body">
            <div>
              <b>Registered office</b>
              BKR 4013,
              <br />
              Birkirkara, Malta
            </div>
            <div>
              <b>Company number</b>
              C 112080
            </div>
            <div>
              <b>Incorporated</b>
              21 May 2025
            </div>
            <div>
              <b>VAT</b>
              MT31936814
            </div>
            <div>
              <b>Operational hubs</b>
              Malta · Sofia (BG)
              <br />
              Lima (PE)
            </div>
            <div>
              <b>Auditor</b>
              KPMG · Malta
            </div>
            <div>
              <b>Operating reach</b>
              Europe · USA · LATAM · UAE · India · Asia
            </div>
          </div>
        </details>

        <div className="footer-bottom">
          <span>© 2026 ExCom Limited. All rights reserved.</span>
          <span>v 1.0 · Malta · {buildDate}</span>
        </div>
      </div>
    </footer>
  );
}
