import { mockOverviewStats as stats } from "@/mocks/dashboardData"
import { useTranslations } from "@/utils/i18n"
import StatCard from "./StatCard"

export default function OverviewStats() {
  const { t } = useTranslations()

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <StatCard
        title={t.dashboard.stats.totalLoans}
        value={stats.totalLoans}
        color="blue"
      />
      <StatCard
        title={t.dashboard.stats.totalAmount}
        value={stats.totalAmount}
        color="green"
      />
      <StatCard
        title={t.dashboard.stats.avgCreditScore}
        value={stats.avgCreditScore}
        color="purple"
      />
      <StatCard
        title={t.dashboard.stats.pendingApplications}
        value={stats.pendingApplications}
        color="orange"
      />
    </div>
  )
}
