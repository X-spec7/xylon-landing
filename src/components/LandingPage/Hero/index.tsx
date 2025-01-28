"use client"

import { ISectionProps } from "@/types"
import { languages, fallbackLng } from "@/app/i18n/settings"
import { useTranslation } from "@/app/i18n/client"

const Hero: React.FC<ISectionProps> = ({ lng }) => {

  if (languages.indexOf(lng) < 0) lng = fallbackLng
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation(lng, "hero")

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden h-screen border-b border-gray-200 text-shadow-lg bg-black/10"
      >
        <div className="flex flex-col justify-center items-center w-full h-full bg-black/50">
          <h2 className="text-[44px] text-white font-semibold">{t("hero.title")}</h2>
          <p className="text-2xl text-white mt-4 font-medium">{t("hero.description")}</p>
          <button className="text-white text-lg font-semibold text-shadow-sm bg-emerald-600 rounded-lg px-8 py-4 mt-16">{t("hero.button")}</button>
        </div>
      </section>
    </>
  )
}

export default Hero
