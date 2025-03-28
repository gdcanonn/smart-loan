"use client"

import { useTranslations } from "@/utils/i18n"
import Link from "next/link"

export default function Footer() {
  const { t, getLocalizedPath } = useTranslations()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SmartLoan</h3>
            <p className="text-gray-400">{t.footer.description}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={getLocalizedPath("about")}
                  className="text-gray-400 hover:text-blue-400"
                >
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath("services")}
                  className="text-gray-400 hover:text-blue-400"
                >
                  {t.footer.services}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath("calculator")}
                  className="text-gray-400 hover:text-blue-400"
                >
                  {t.footer.calculator}
                </Link>
              </li>
              <li>
                <Link
                  href={getLocalizedPath("faq")}
                  className="text-gray-400 hover:text-blue-400"
                >
                  {t.footer.faq}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t.footer.contact.title}
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t.footer.contact.email}</li>
              <li>{t.footer.contact.phone}</li>
              <li>{t.footer.contact.address}</li>
              <li>{t.footer.contact.hours}</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t.footer.newsletter.title}
            </h4>
            <p className="text-gray-400 mb-4">
              {t.footer.newsletter.description}
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder={t.footer.newsletter.placeholder}
                className="px-4 py-2 rounded-l-lg flex-1 text-gray-900"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700">
                {t.footer.newsletter.button}
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
