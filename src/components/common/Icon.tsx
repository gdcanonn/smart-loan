"use client"

interface IconProps {
  path: string
  className?: string
}

export default function Icon({
  path,
  className = "w-6 h-6 text-blue-600",
}: IconProps) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={path}
      />
    </svg>
  )
}
