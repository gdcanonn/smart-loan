"use client"

import { useTranslations } from "@/utils/i18n"
import { useCallback, useMemo, useState } from "react"
import FormInput from "./FormInput"

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

export default function ContactFormFields() {
  const { t } = useTranslations()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    },
    []
  )

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      // Handle form submission
      console.log(formData)
    },
    [formData]
  )

  // Memoize translations to prevent unnecessary re-renders
  const translations = useMemo(
    () => ({
      name: {
        label: t.contact.form.name,
        placeholder: t.contact.form.placeholders.name,
      },
      email: {
        label: t.contact.form.email,
        placeholder: t.contact.form.placeholders.email,
      },
      phone: {
        label: t.contact.form.phone,
        placeholder: t.contact.form.placeholders.phone,
      },
      message: {
        label: t.contact.form.message,
        placeholder: t.contact.form.placeholders.message,
      },
    }),
    [t.contact.form]
  )

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormInput
          id="name"
          name="name"
          label={translations.name.label}
          value={formData.name}
          onChange={handleChange}
          placeholder={translations.name.placeholder}
          required
        />

        <FormInput
          id="email"
          name="email"
          type="email"
          label={translations.email.label}
          value={formData.email}
          onChange={handleChange}
          placeholder={translations.email.placeholder}
          required
        />

        <FormInput
          id="phone"
          name="phone"
          type="tel"
          label={translations.phone.label}
          value={formData.phone}
          onChange={handleChange}
          placeholder={translations.phone.placeholder}
        />

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            {translations.message.label}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder={translations.message.placeholder}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {t.contact.form.submit}
        </button>
      </form>
    </div>
  )
}
