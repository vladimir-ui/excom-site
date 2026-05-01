import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match every path except Next internals, static files, and favicon.
  matcher: ["/((?!api|_next|_vercel|assets|data|.*\\..*).*)"],
};
