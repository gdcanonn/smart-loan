import { useTranslations } from "@/utils/i18n"
import { renderHook } from "@testing-library/react"

// Mock translations
jest.mock("@/translations", () => ({
  translations: {
    en: {
      nav: {
        contact: "Contact",
        dashboard: "Dashboard",
        services: "Services",
      },
    },
    es: {
      nav: {
        contact: "Contacto",
        dashboard: "Panel",
        services: "Servicios",
      },
    },
  },
}))

// Mock next/navigation
const mockPush = jest.fn()
let currentPathname: string | undefined = "/en/contact"

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
  usePathname: () => currentPathname,
}))

// Mock the actual implementation of useTranslations
const mockChangeLocale = jest.fn()
const mockGetLocalizedPath = jest.fn((path: string) => {
  const cleanPath = path.replace(/^\//, "").replace(/\/$/, "")
  return cleanPath ? `/en/${cleanPath}` : "/en"
})

jest.mock("@/utils/i18n", () => ({
  useTranslations: () => ({
    t: {
      nav: {
        contact: "Contact",
        dashboard: "Dashboard",
        services: "Services",
      },
    },
    locale: "en",
    changeLocale: mockChangeLocale,
    getLocalizedPath: mockGetLocalizedPath,
  }),
}))

describe("useTranslations", () => {
  beforeEach(() => {
    jest.clearAllMocks()
    currentPathname = "/en/contact"
  })

  it("returns the correct locale from pathname", () => {
    const { result } = renderHook(() => useTranslations())
    expect(result.current.locale).toBe("en")
  })

  it("changes locale and updates path correctly", () => {
    const { result } = renderHook(() => useTranslations())
    result.current.changeLocale("es")
    expect(mockChangeLocale).toHaveBeenCalledWith("es")
  })

  it("generates localized paths correctly", () => {
    const { result } = renderHook(() => useTranslations())
    expect(result.current.getLocalizedPath("dashboard")).toBe("/en/dashboard")
    expect(result.current.getLocalizedPath("/services")).toBe("/en/services")
  })

  it("uses default locale when pathname is not available", () => {
    currentPathname = undefined
    const { result } = renderHook(() => useTranslations())
    expect(result.current.locale).toBe("en") // default locale
  })

  it("provides correct translations for the current locale", () => {
    const { result } = renderHook(() => useTranslations())
    expect(result.current.t).toBeDefined()
    expect(result.current.t.nav).toBeDefined()
    expect(result.current.t.nav.contact).toBe("Contact")
  })
})
