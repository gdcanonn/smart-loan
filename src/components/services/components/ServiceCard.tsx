interface ServiceCardProps {
  title: string
  description: string
  features: string[]
}

export default function ServiceCard({
  title,
  description,
  features,
}: ServiceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-gray-600 dark:text-gray-300"
            >
              <svg
                className="h-5 w-5 text-green-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
