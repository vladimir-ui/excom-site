// Root layout — minimal pass-through. The actual <html> + <body> lives in
// app/[locale]/layout.tsx so we can set lang={locale} per request and still
// statically render every locale. This pattern is recommended by next-intl
// for App Router projects with [locale] dynamic segments.
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
