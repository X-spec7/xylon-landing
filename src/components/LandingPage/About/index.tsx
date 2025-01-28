"use client"

import { useTranslation } from "@/app/i18n/client"
import { fallbackLng, languages } from "@/app/i18n/settings"
import { ISectionProps } from "@/types"
import { FeatureCard } from "@/components/Common"

const About: React.FC<ISectionProps> = ({ lng }) => {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation(lng, "about")

  return (
    <section
      id="about"
      className="relative z-10 flex flex-col justify-center items-center gap-20 h-screen overflow-hidden text-shadow-lg text-white bg-black/30 border-b border-white/40"
    >
      <div className="container mx-auto max-w-7xl text-center">
        {/* Section Heading */}
        <h2 className="text-6xl lg:text-4xl font-bold mb-6">{t("about.title")}</h2>
        <p className="text-lg max-w-4xl mx-auto">
          {t("about.description")}
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        <FeatureCard
          icon="🌍"
          title={t("about.carbon.title")}
          description={t("about.carbon.description")}
        />
        <FeatureCard
          icon="⚡"
          title={t("about.energy.title")}
          description={t("about.energy.description")}
        />
      </div>
    </section>
  )
}

export default About
