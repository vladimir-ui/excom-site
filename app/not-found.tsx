import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Not found — ExCom",
};

export default function NotFound() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <div className="crumbs">404</div>
          <h1>Not found.</h1>
          <p className="lede">
            The page you requested does not exist or has been moved.
          </p>
          <p style={{ marginTop: 24 }}>
            <Link href="/" className="cta">
              Return to home →
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
