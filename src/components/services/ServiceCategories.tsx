import { useTranslations } from "@/utils/i18n"
import { useMemo } from "react"
import ServiceCard from "./components/ServiceCard"

export default function ServiceCategories() {
  const { t } = useTranslations()

  const categories = useMemo(
    () => [
      {
        title: t.services.categories.personal.title,
        description: t.services.categories.personal.description,
        features: t.services.categories.personal.features,
      },
      {
        title: t.services.categories.home.title,
        description: t.services.categories.home.description,
        features: t.services.categories.home.features,
      },
      {
        title: t.services.categories.business.title,
        description: t.services.categories.business.description,
        features: t.services.categories.business.features,
      },
      {
        title: t.services.categories.auto.title,
        description: t.services.categories.auto.description,
        features: t.services.categories.auto.features,
      },
    ],
    [t.services.categories] // Only recalculate if translations change
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-7xl mx-auto px-4">
      {categories.map((category, index) => (
        <ServiceCard
          key={index}
          title={category.title}
          description={category.description}
          features={category.features}
        />
      ))}
    </div>
  )
}
