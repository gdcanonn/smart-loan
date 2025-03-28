import { useTranslations } from "@/utils/i18n"
import StatusCell from "./components/StatusCell"
import TableCell from "./components/TableCell"
import TableHeader from "./components/TableHeader"
import { Client } from "./interfaces/Client"

export interface ClientListProps {
  clients: Client[]
}

export default function ClientList({ clients }: ClientListProps) {
  const { t } = useTranslations()

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr>
            <TableHeader text={t.dashboard.table.client} />
            <TableHeader text={t.dashboard.table.loanType} />
            <TableHeader text={t.dashboard.table.amount} />
            <TableHeader text={t.dashboard.table.period} />
            <TableHeader text={t.dashboard.table.payback} />
            <TableHeader text={t.dashboard.table.creditScore} />
            <TableHeader text={t.dashboard.table.status} />
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
          {clients.map((client) => (
            <tr key={client.id}>
              <TableCell content={client.name} isName={true} />
              <TableCell content={client.loanType} />
              <TableCell content={client.amount} />
              <TableCell content={client.period} />
              <TableCell content={client.payback} />
              <TableCell content={client.creditScore} />
              <StatusCell status={client.status} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
