"use client"

import { translations } from "@/translations"
import { usePathname, useRouter } from "next/navigation"

export type Locale = keyof typeof translations

export const defaultLocale: Locale = "en"
export const locales: Locale[] = ["en", "es"]

export function useTranslations() {
  const router = useRouter()
  const pathname = usePathname()

  // Get locale from the first part of the pathname
  const locale = (pathname?.split("/")[1] || defaultLocale) as Locale
  const t = translations[locale]

  const changeLocale = (newLocale: Locale) => {
    if (!pathname) return

    // Get the current path without the locale
    const segments = pathname.split("/")
    segments[1] = newLocale

    // Preserve the current path when changing language
    const newPathname = segments.join("/")
    router.push(newPathname)
  }

  const getLocalizedPath = (path: string) => {
    // If path starts with /, remove it
    const cleanPath = path.startsWith("/") ? path.slice(1) : path
    return `/${locale}/${cleanPath}`
  }

  return {
    t,
    locale,
    changeLocale,
    getLocalizedPath,
  }
}
