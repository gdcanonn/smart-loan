"use client"

import FeaturesSection from "@/components/home/FeaturesSection"
import HeroSection from "@/components/home/HeroSection"
import LoanTypesSection from "@/components/home/LoanTypesSection"
import MainLayout from "@/components/layout/MainLayout"

export default function Home() {
  return (
    <MainLayout fullWidth>
      <HeroSection />
      <FeaturesSection />
      <LoanTypesSection />
    </MainLayout>
  )
}
