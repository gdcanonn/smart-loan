export interface Client {
  id: number
  name: string
  loanType: string
  amount: string
  period: string
  payback: string
  creditScore: number
  status: "Active" | "Pending"
}
