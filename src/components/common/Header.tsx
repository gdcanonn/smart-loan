"use client"

import { useTranslations } from "@/utils/i18n"
import Link from "next/link"
import LanguageSwitcher from "./LanguageSwitcher"

export default function Header() {
  const { t, getLocalizedPath } = useTranslations()

  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-md fixed top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href={getLocalizedPath("/")}
          className="text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          SmartLoan
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link
            href={getLocalizedPath("dashboard")}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            {t.nav.dashboard}
          </Link>
          <Link
            href={getLocalizedPath("services")}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            {t.nav.services}
          </Link>
          <Link
            href={getLocalizedPath("contact")}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            {t.nav.contact}
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
            {t.hero.applyButton}
          </button>
        </div>
      </div>
    </header>
  )
}
