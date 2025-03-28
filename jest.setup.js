import "@testing-library/jest-dom"

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  usePathname: () => "/",
  useParams: () => ({ lang: "en" }),
}))

// Mock useTranslations
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
