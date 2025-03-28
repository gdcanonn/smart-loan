import { Client } from "@/components/dashboard/interfaces/Client"
import { mockClients } from "@/mocks/dashboardData"
import axios from "axios"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
})

export const getClients = async (): Promise<Client[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real app, this would be:
  // const response = await api.get("/clients")
  // return response.data

  return mockClients
}
