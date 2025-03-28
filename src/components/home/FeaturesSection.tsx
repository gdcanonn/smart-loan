"use client"

import Icon from "@/components/common/Icon"
import FeatureCard from "@/components/home/components/FeatureCard"
import { useTranslations } from "@/utils/i18n"

export default function FeaturesSection() {
  const { t } = useTranslations()

  const moneyIcon =
    "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          {t.features.title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title={t.features.lowRates.title}
            icon={<Icon path={moneyIcon} />}
          >
            <p>{t.features.lowRates.description}</p>
          </FeatureCard>
          <FeatureCard
            title={t.features.fastApproval.title}
            icon={<Icon path="M13 10V3L4 14h7v7l9-11h-7z" />}
          >
            <p>{t.features.fastApproval.description}</p>
          </FeatureCard>
          <FeatureCard
            title={t.features.secure.title}
            icon={
              <Icon path="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            }
          >
            <p>{t.features.secure.description}</p>
          </FeatureCard>
        </div>
      </div>
    </section>
  )
}
