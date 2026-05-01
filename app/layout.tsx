import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/tokens.css";
import "./styles/site.css";

const alata = localFont({
  src: "./fonts/Alata-Regular.ttf",
  weight: "400",
  variable: "--font-alata",
  display: "swap",
});

const robotoSlab = localFont({
  src: "./fonts/RobotoSlab-VariableFont_wght.ttf",
  weight: "100 900",
  variable: "--font-roboto-slab",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ExCom — Source to Settlement",
  description:
    "ExCom Limited — Malta-incorporated trader of precious metals raw material. Trusted execution from source to settlement.",
  icons: {
    icon: "/assets/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="light"
      data-density="comfortable"
      className={`${alata.variable} ${robotoSlab.variable} ${robotoMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
