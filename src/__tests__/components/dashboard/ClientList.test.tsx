import ClientList from "@/components/dashboard/ClientList"
import { Client } from "@/components/dashboard/interfaces/Client"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"

// Mock translations
jest.mock("@/utils/i18n", () => ({
  useTranslations: () => ({
    t: {
      dashboard: {
        table: {
          client: "Client Name",
          loanType: "Loan Type",
          amount: "Amount",
          period: "Period",
          payback: "Payback",
          creditScore: "Credit Score",
          status: "Status",
        },
      },
    },
  }),
}))

describe("ClientList", () => {
  const mockClients: Client[] = [
    {
      id: 1,
      name: "John Doe",
      loanType: "Personal",
      amount: "$10,000",
      period: "12 months",
      payback: "$11,000",
      creditScore: 750,
      status: "Active",
    },
  ]

  it("renders client list with correct data", () => {
    render(<ClientList clients={mockClients} />)

    // Check if table headers are rendered
    expect(screen.getByText("Client Name")).toBeInTheDocument()
    expect(screen.getByText("Loan Type")).toBeInTheDocument()
    expect(screen.getByText("Amount")).toBeInTheDocument()

    // Check if client data is rendered
    expect(screen.getByText("John Doe")).toBeInTheDocument()
    expect(screen.getByText("Personal")).toBeInTheDocument()
    expect(screen.getByText("$10,000")).toBeInTheDocument()
    expect(screen.getByText("750")).toBeInTheDocument()
    expect(screen.getByText("Active")).toBeInTheDocument()
  })

  it("renders empty state when no clients", () => {
    render(<ClientList clients={[]} />)

    // Should still render headers
    expect(screen.getByText("Client Name")).toBeInTheDocument()

    // But no client data
    expect(screen.queryByText("John Doe")).not.toBeInTheDocument()
  })
})
