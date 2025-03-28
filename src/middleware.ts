import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

// List of supported locales
export const locales = ["en", "es"]
export const defaultLocale = "en"

// Get the preferred locale from headers
function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get("accept-language")
  return (
    acceptLanguage?.split(",")[0].split("-")[0].toLowerCase() || defaultLocale
  )
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname

  // Check if the pathname starts with a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  const newLocale = locales.includes(locale) ? locale : defaultLocale

  // e.g. incoming request is /products
  // The new URL is now /en/products
  request.nextUrl.pathname = `/${newLocale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next|api|favicon.ico).*)",
  ],
}
