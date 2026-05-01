import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es", "bg"],
  defaultLocale: "en",
  // every URL is prefixed (/en/about, /es/about, /bg/about). The apex
  // ex-com.org redirects to the user's preferred language via middleware.
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
