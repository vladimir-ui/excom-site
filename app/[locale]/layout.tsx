import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto_Mono } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { routing } from "../../i18n/routing";
import "../styles/tokens.css";
import "../styles/site.css";

const alata = localFont({
  src: "../fonts/Alata-Regular.ttf",
  weight: "400",
  variable: "--font-alata",
  display: "swap",
});

const robotoSlab = localFont({
  src: "../fonts/RobotoSlab-VariableFont_wght.ttf",
  weight: "100 900",
  variable: "--font-roboto-slab",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  weight: ["400", "500", "600"],
  // include cyrillic for Bulgarian; latin covers English + Spanish
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "site" });
  return {
    title: t("title"),
    description: t("description"),
    icons: { icon: "/assets/favicon.svg" },
  };
}

// Statically prerender every locale at build time.
export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  // Enables static rendering for translated content under this layout.
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      data-theme="light"
      data-density="comfortable"
      className={`${alata.variable} ${robotoSlab.variable} ${robotoMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
