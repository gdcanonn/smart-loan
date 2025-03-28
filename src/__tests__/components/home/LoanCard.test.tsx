import LoanCard from "@/components/home/components/LoanCard"
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"

// Mock useTranslations hook
jest.mock("@/utils/i18n", () => ({
  useTranslations: () => ({
    t: {
      loanTypes: {
        interestRate: "Interest Rate from",
        termLength: "Term Length",
        learnMore: "Learn More",
      },
    },
  }),
}))

// Mock console.log
const mockConsoleLog = jest.spyOn(console, "log").mockImplementation()

describe("LoanCard", () => {
  const defaultProps = {
    title: "Personal Loan",
    rate: "5.99%",
    term: "1-7 years",
  }

  beforeEach(() => {
    mockConsoleLog.mockClear()
  })

  it("renders loan card with correct information", () => {
    render(<LoanCard {...defaultProps} />)

    // Check if title is rendered
    expect(screen.getByText("Personal Loan")).toBeInTheDocument()

    // Check if rate is rendered
    expect(screen.getByText("5.99%")).toBeInTheDocument()

    // Check if term is rendered
    expect(screen.getByText("1-7 years")).toBeInTheDocument()

    // Check if labels are rendered
    expect(screen.getByText("Interest Rate from")).toBeInTheDocument()
    expect(screen.getByText("Term Length")).toBeInTheDocument()

    // Check if learn more button is rendered
    expect(screen.getByText("Learn More")).toBeInTheDocument()
  })

  it("handles learn more button click", () => {
    render(<LoanCard {...defaultProps} />)

    // Click the learn more button
    fireEvent.click(screen.getByText("Learn More"))

    // Check if console.log was called with the correct message
    expect(mockConsoleLog).toHaveBeenCalledWith(
      "Learn more about Personal Loan loan"
    )
  })

  it("applies correct styling classes", () => {
    const { container } = render(<LoanCard {...defaultProps} />)

    // Check if the card has the correct max-width class
    expect(container.firstChild).toHaveClass("max-w-sm")

    // Check if the card is centered
    expect(container.firstChild).toHaveClass("mx-auto")

    // Check if the card has the correct background and border styles
    expect(container.firstChild).toHaveClass(
      "bg-white",
      "dark:bg-gray-700",
      "rounded-lg",
      "shadow-lg"
    )
  })
})
