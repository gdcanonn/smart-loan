import { useTranslations } from "@/utils/i18n"
import { useMemo } from "react"
import LoanCard from "./components/LoanCard"

export default function LoanTypesSection() {
  const { t } = useTranslations()

  const loans = useMemo(
    () => [
      {
        title: t.loanTypes.personal.title,
        rate: t.loanTypes.personal.rate,
        term: t.loanTypes.personal.term,
      },
      {
        title: t.loanTypes.home.title,
        rate: t.loanTypes.home.rate,
        term: t.loanTypes.home.term,
      },
      {
        title: t.loanTypes.business.title,
        rate: t.loanTypes.business.rate,
        term: t.loanTypes.business.term,
      },
      {
        title: t.loanTypes.auto.title,
        rate: t.loanTypes.auto.rate,
        term: t.loanTypes.auto.term,
      },
    ],
    [t.loanTypes] // Dependency on translations
  )

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t.loanTypes.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {loans.map((loan, index) => (
            <LoanCard
              key={index}
              title={loan.title}
              rate={loan.rate}
              term={loan.term}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
