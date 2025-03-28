import { useTranslations } from "@/utils/i18n"
import Image from "next/image"

export default function HeroSection() {
  const { t } = useTranslations()

  return (
    <section className="pt-24 pb-12 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            {t.hero.title}{" "}
            <span className="text-blue-600">{t.hero.highlight}</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {t.hero.subtitle}
          </p>
          <div className="flex gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors">
              {t.hero.applyButton}
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full text-lg hover:bg-blue-50 transition-colors">
              {t.hero.calculateButton}
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80"
            alt="Happy family getting their dream home loan"
            width={600}
            height={400}
            className="rounded-lg shadow-xl"
            priority
          />
        </div>
      </div>
    </section>
  )
}
