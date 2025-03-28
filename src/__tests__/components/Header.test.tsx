import Header from "@/components/common/Header"
import { render, screen } from "@testing-library/react"

// Mock useTranslations hook
jest.mock("@/utils/i18n", () => ({
  useTranslations: () => ({
    t: {
      nav: {
        dashboard: "Dashboard",
        services: "Services",
        contact: "Contact",
      },
      hero: {
        applyButton: "Apply Now",
      },
    },
    getLocalizedPath: (path: string) => {
      const cleanPath = path.replace(/^\//, "").replace(/\/$/, "")
      return cleanPath ? `/en/${cleanPath}` : "/en"
    },
  }),
}))

// Mock LanguageSwitcher component
jest.mock("@/components/common/LanguageSwitcher", () => {
  return function MockLanguageSwitcher() {
    return <div data-testid="language-switcher">Language Switcher</div>
  }
})

describe("Header", () => {
  it("renders navigation links with correct localized paths", () => {
    render(<Header />)

    // Check if links have correct localized paths
    const dashboardLink = screen.getByText("Dashboard")
    const servicesLink = screen.getByText("Services")
    const contactLink = screen.getByText("Contact")

    expect(dashboardLink).toHaveAttribute("href", "/en/dashboard")
    expect(servicesLink).toHaveAttribute("href", "/en/services")
    expect(contactLink).toHaveAttribute("href", "/en/contact")
  })

  it("renders the logo with localized home path", () => {
    render(<Header />)

    const logo = screen.getByText("SmartLoan")
    expect(logo).toHaveAttribute("href", "/en")
  })

  it("renders the language switcher", () => {
    render(<Header />)

    const languageSwitcher = screen.getByTestId("language-switcher")
    expect(languageSwitcher).toBeInTheDocument()
  })

  it("renders the apply button with translated text", () => {
    render(<Header />)

    const applyButton = screen.getByText("Apply Now")
    expect(applyButton).toBeInTheDocument()
  })
})
