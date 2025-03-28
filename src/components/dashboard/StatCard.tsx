interface StatCardProps {
  title: string
  subtitle?: string
  value: string | number
  color: "blue" | "green" | "purple" | "orange" | "red"
}

export default function StatCard({
  title,
  subtitle,
  value,
  color,
}: StatCardProps) {
  const colorClasses = {
    blue: "text-blue-600 dark:text-blue-400",
    green: "text-green-600 dark:text-green-400",
    purple: "text-purple-600 dark:text-purple-400",
    orange: "text-orange-600 dark:text-orange-400",
    red: "text-red-600 dark:text-red-400",
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      {subtitle && (
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
          {subtitle}
        </p>
      )}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className={`text-3xl font-bold ${colorClasses[color]}`}>{value}</p>
    </div>
  )
}
