"use client"

import MainLayout from "@/components/layout/MainLayout"
import CTASection from "@/components/services/CTASection"
import HeroSection from "@/components/services/HeroSection"
import ServiceCategories from "@/components/services/ServiceCategories"

export default function Services() {
  return (
    <MainLayout>
      <HeroSection />
      <ServiceCategories />
      <CTASection />
    </MainLayout>
  )
}
