"use client"

import ContactForm from "@/components/contact/ContactForm"
import HeroSection from "@/components/contact/HeroSection"
import MainLayout from "@/components/layout/MainLayout"

export default function Contact() {
  return (
    <MainLayout>
      <HeroSection />
      <ContactForm />
    </MainLayout>
  )
}
