"use client"

import { useTranslations } from "@/utils/i18n"

export default function LanguageSwitcher() {
  const { locale, changeLocale } = useTranslations()

  return (
    <select
      value={locale}
      onChange={(e) => changeLocale(e.target.value as "en" | "es")}
      className="bg-transparent text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg px-2 py-1"
    >
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
  )
}
