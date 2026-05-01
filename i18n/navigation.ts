import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware Link / useRouter / usePathname / redirect.
// These wrap next/navigation and automatically prepend the active
// locale prefix to internal links (or strip it from usePathname()).
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
