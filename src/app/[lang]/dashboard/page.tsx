"use client"

import ClientList from "@/components/dashboard/ClientList"
import MonthlyStats from "@/components/dashboard/MonthlyStats"
import OverviewStats from "@/components/dashboard/OverviewStats"
import MainLayout from "@/components/layout/MainLayout"
import Loading from "@/components/shared/Loading"
import { getClients } from "@/services/api"
import { useTranslations } from "@/utils/i18n"
import { useQuery } from "@tanstack/react-query"

export default function Dashboard() {
  const { t } = useTranslations()

  const {
    data: clients,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["clients"],
    queryFn: getClients,
  })

  if (isLoading) {
    return (
      <MainLayout>
        <Loading />
      </MainLayout>
    )
  }

  if (error) {
    return (
      <MainLayout>
        <div className="text-red-500 text-center mt-8">
          {t.dashboard.errors.loadingClients}
        </div>
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
        {t.dashboard.title}
      </h1>

      <OverviewStats />
      <MonthlyStats />

      <ClientList clients={clients || []} />
    </MainLayout>
  )
}
