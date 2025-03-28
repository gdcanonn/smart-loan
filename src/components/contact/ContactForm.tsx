"use client"

import ContactFormFields from "./components/ContactFormFields"
import ContactInformation from "./components/ContactInformation"

export default function ContactForm() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <ContactFormFields />
      <ContactInformation />
    </div>
  )
}
