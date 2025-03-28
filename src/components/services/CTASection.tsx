"use client"

import { useTranslations } from "@/utils/i18n"

export default function CTASection() {
  const { t } = useTranslations()

  return (
    <div className="bg-blue-50 dark:bg-gray-700 rounded-lg p-8 text-center">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {t.services.cta.title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        {t.services.cta.description}
      </p>
      <div className="flex justify-center gap-4">
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors">
          {t.services.cta.applyButton}
        </button>
        <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full text-lg hover:bg-blue-50 transition-colors dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-600">
          {t.services.cta.calculateButton}
        </button>
      </div>
    </div>
  )
}
