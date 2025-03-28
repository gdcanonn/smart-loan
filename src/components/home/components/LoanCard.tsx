import { useTranslations } from "@/utils/i18n"
import { useCallback, useMemo } from "react"

interface LoanCardProps {
  title: string
  rate: string
  term: string
}

export default function LoanCard({ title, rate, term }: LoanCardProps) {
  const { t } = useTranslations()

  const handleLearnMore = useCallback(() => {
    // Handle learn more click
    console.log(`Learn more about ${title} loan`)
    // Add your navigation or modal logic here
  }, [title])

  // Memoize the translations to prevent unnecessary re-renders
  const translations = useMemo(
    () => ({
      interestRate: t.loanTypes.interestRate,
      termLength: t.loanTypes.termLength,
      learnMore: t.loanTypes.learnMore,
    }),
    [t.loanTypes]
  )

  return (
    <div className="max-w-sm mx-auto bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg w-full">
      <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        {title}
      </h3>
      <div className="mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {translations.interestRate}
        </p>
        <p className="text-2xl font-bold text-blue-600">{rate}</p>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {translations.termLength}
        </p>
        <p className="text-lg font-semibold text-gray-900 dark:text-white">
          {term}
        </p>
      </div>
      <button
        onClick={handleLearnMore}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        {translations.learnMore}
      </button>
    </div>
  )
}
