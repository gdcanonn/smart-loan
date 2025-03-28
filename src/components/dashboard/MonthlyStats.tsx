import { mockMonthlyStats as stats } from "@/mocks/dashboardData"
import { useTranslations } from "@/utils/i18n"
import StatCard from "./StatCard"

export default function MonthlyStats() {
  const { t } = useTranslations()

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <StatCard
        title={t.dashboard.stats.monthlyStats.newLoans}
        value={stats.newLoans}
        color="blue"
      />
      <StatCard
        title={t.dashboard.stats.monthlyStats.totalRepaid}
        value={stats.totalRepaid}
        color="green"
      />
      <StatCard
        title={t.dashboard.stats.monthlyStats.defaultRate}
        value={stats.defaultRate}
        color="red"
      />
      <StatCard
        title={t.dashboard.stats.monthlyStats.avgLoanSize}
        value={stats.avgLoanSize}
        color="purple"
      />
    </div>
  )
}
