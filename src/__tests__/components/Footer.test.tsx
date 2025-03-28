import Footer from "@/components/common/Footer"
import { render, screen } from "@testing-library/react"

// Mock useTranslations hook
jest.mock("@/utils/i18n", () => ({
  useTranslations: () => ({
    t: {
      footer: {
        description: "Smart financial solutions for your future",
        quickLinks: "Quick Links",
        about: "About Us",
        services: "Services",
        calculator: "Loan Calculator",
        faq: "FAQ",
        contact: {
          title: "Contact Info",
          email: "contact@smartloan.com",
          phone: "+1 234 567 890",
          address: "123 Finance Street",
          hours: "Mon-Fri: 9:00-17:00",
        },
        newsletter: {
          title: "Newsletter",
          description: "Subscribe to our newsletter",
          placeholder: "Enter your email",
          button: "Subscribe",
        },
        copyright: "© 2024 SmartLoan. All rights reserved.",
      },
    },
    getLocalizedPath: (path: string) => `/en/${path.replace(/^\//, "")}`,
  }),
}))

describe("Footer", () => {
  it("renders quick links with correct localized paths", () => {
    render(<Footer />)

    // Check if links have correct localized paths
    const aboutLink = screen.getByText("About Us")
    const servicesLink = screen.getByText("Services")
    const calculatorLink = screen.getByText("Loan Calculator")
    const faqLink = screen.getByText("FAQ")

    expect(aboutLink).toHaveAttribute("href", "/en/about")
    expect(servicesLink).toHaveAttribute("href", "/en/services")
    expect(calculatorLink).toHaveAttribute("href", "/en/calculator")
    expect(faqLink).toHaveAttribute("href", "/en/faq")
  })

  it("renders contact information correctly", () => {
    render(<Footer />)

    expect(screen.getByText("contact@smartloan.com")).toBeInTheDocument()
    expect(screen.getByText("+1 234 567 890")).toBeInTheDocument()
    expect(screen.getByText("123 Finance Street")).toBeInTheDocument()
    expect(screen.getByText("Mon-Fri: 9:00-17:00")).toBeInTheDocument()
  })

  it("renders newsletter section with correct elements", () => {
    render(<Footer />)

    expect(screen.getByText("Newsletter")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument()
    expect(screen.getByText("Subscribe")).toBeInTheDocument()
  })

  it("renders copyright notice", () => {
    render(<Footer />)

    expect(
      screen.getByText("© 2024 SmartLoan. All rights reserved.")
    ).toBeInTheDocument()
  })
})
