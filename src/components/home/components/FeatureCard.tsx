"use client"

import { ReactNode } from "react"

interface FeatureCardProps {
  title: string
  children: ReactNode
  className?: string
  icon?: ReactNode
}

export default function FeatureCard({
  title,
  children,
  className = "",
  icon,
}: FeatureCardProps) {
  return (
    <div
      className={`p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg ${className}`}
    >
      {icon && (
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>
      <div className="text-gray-600 dark:text-gray-300">{children}</div>
    </div>
  )
}
