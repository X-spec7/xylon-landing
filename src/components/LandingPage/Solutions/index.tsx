"use client"

import { ISectionProps } from "@/types"
import { languages, fallbackLng } from "@/app/i18n/settings"
import { useTranslation } from "@/app/i18n/client"

import { FeatureCard } from "@/components/Common"

const Solutions: React.FC<ISectionProps> = ({ lng }) => {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation(lng, "solutions")

  return (
    <section
      id="solutions"
      className="relative z-10 h-auto py-16 flex flex-col justify-center items-center gap-10 overflow-hidden text-shadow-lg text-white bg-black/50 border-b border-white/40"
    >
      <div className="container mx-auto max-w-7xl text-center">
        {/* Section Heading */}
        <h2 className="text-4xl lg:text-4xl font-bold mb-6">{t("solutions.title")}</h2>
        <p className="text-lg max-w-4xl mx-auto">
          {t("solutions.description")}
        </p>
      </div>

      {/* Solutions List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
        <FeatureCard
          icon="🌱"
          title={t("solutions.ems1.title")}
          description={t("solutions.ems1.description")}
        />
        <FeatureCard
          icon="🔋"
          title={t("solutions.emsmini.title")}
          description={t("solutions.emsmini.description")}
        />
        <FeatureCard
          icon="🔥"
          title={t("solutions.heating.title")}
          description={t("solutions.heating.description")}
        />
      </div>
    </section>
  )
}

export default Solutions
