export const mockClients = [
  {
    id: 1,
    name: "John Doe",
    loanType: "Personal Loan",
    amount: "$25,000",
    period: "5 years",
    payback: "$485/month",
    creditScore: 720,
    status: "Active" as const,
  },
  {
    id: 2,
    name: "Jane Smith",
    loanType: "Home Loan",
    amount: "$350,000",
    period: "30 years",
    payback: "$1,475/month",
    creditScore: 780,
    status: "Active" as const,
  },
  {
    id: 3,
    name: "Bob Johnson",
    loanType: "Auto Loan",
    amount: "$35,000",
    period: "6 years",
    payback: "$560/month",
    creditScore: 690,
    status: "Pending" as const,
  },
]

export const mockOverviewStats = {
  totalLoans: 156,
  totalAmount: "$12.5M",
  avgCreditScore: 715,
  pendingApplications: 23,
}

export const mockMonthlyStats = {
  newLoans: 34,
  totalRepaid: "$1.2M",
  defaultRate: "0.8%",
  avgLoanSize: "$80,000",
}
