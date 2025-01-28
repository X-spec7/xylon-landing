"use client"

import { ISectionProps } from "@/types"
import { languages, fallbackLng } from "@/app/i18n/settings"
import { useTranslation } from "@/app/i18n/client"

const Footer: React.FC<ISectionProps> = ({ lng }) => {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation(lng, "footer")

  return (
    <footer className="relative z-10 bg-gray-600 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-white space-y-8 md:flex-row md:justify-between md:space-y-0">
          <div className="text-xl font-semibold">XYLON</div>
          <p>© 2025 Xylon LLC. {t("footer.content")}</p>
          <div className="text-sm md:text-base">&copy; 2024 XYLON Labs</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer