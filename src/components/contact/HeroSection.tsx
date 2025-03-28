"use client"

import { useTranslations } from "@/utils/i18n"

export default function HeroSection() {
  const { t } = useTranslations()

  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {t.contact.title}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
        {t.contact.subtitle}
      </p>
      <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        {t.contact.description}
      </p>
    </div>
  )
}
