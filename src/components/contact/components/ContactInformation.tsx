"use client"

import { useTranslations } from "@/utils/i18n"
import { useMemo } from "react"
import ContactInfoItem from "./ContactInfoItem"

export default function ContactInformation() {
  const { t } = useTranslations()

  const contactInfo = useMemo(
    () => ({
      title: t.contact.info.title,
      description: t.contact.info.description,
      address: {
        id: "address",
        title: t.contact.info.address.title,
        lines: [t.contact.info.address.line, t.contact.info.address.city],
      },
      phone: {
        id: "phone",
        title: t.contact.info.phone.title,
        lines: [t.contact.info.phone.number, t.contact.info.phone.hours],
      },
      email: {
        id: "email",
        title: t.contact.info.email.title,
        lines: [t.contact.info.email.address, t.contact.info.email.support],
      },
    }),
    [t.contact.info]
  )

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        {contactInfo.title}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        {contactInfo.description}
      </p>

      <div className="space-y-8">
        <ContactInfoItem
          key={contactInfo.address.id}
          title={contactInfo.address.title}
          lines={contactInfo.address.lines}
        />

        <ContactInfoItem
          key={contactInfo.phone.id}
          title={contactInfo.phone.title}
          lines={contactInfo.phone.lines}
        />

        <ContactInfoItem
          key={contactInfo.email.id}
          title={contactInfo.email.title}
          lines={contactInfo.email.lines}
        />
      </div>
    </div>
  )
}
