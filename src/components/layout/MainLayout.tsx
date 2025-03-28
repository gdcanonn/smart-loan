"use client"

import Footer from "@/components/common/Footer"
import Header from "@/components/common/Header"

interface MainLayoutProps {
  children: React.ReactNode
  fullWidth?: boolean
}

export default function MainLayout({
  children,
  fullWidth = false,
}: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow pt-24 pb-12">
        {fullWidth ? (
          children
        ) : (
          <div className="container mx-auto px-4">{children}</div>
        )}
      </main>

      <Footer />
    </div>
  )
}
