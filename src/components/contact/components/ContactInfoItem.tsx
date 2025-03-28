"use client"

interface ContactInfoItemProps {
  title: string
  lines: string[]
}

export default function ContactInfoItem({
  title,
  lines,
}: ContactInfoItemProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <div className="space-y-1">
        {lines.map((line, index) => (
          <p
            key={`${title}-line-${index}`}
            className="text-gray-600 dark:text-gray-300"
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  )
}
