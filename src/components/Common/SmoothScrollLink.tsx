"use client"

import { useTranslation } from "@/app/i18n/client"
import { fallbackLng, languages } from "@/app/i18n/settings"

import Link from 'next/link'
import { IMenu } from "@/types"
import { usePathname } from "next/navigation"

interface SmoothScrollLinkProps {
  menuItem: IMenu
  lng: string
}

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({ menuItem, lng }) => {

  if (languages.indexOf(lng) < 0) lng = fallbackLng
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation(lng, "menu")

  const pathname = usePathname()

  const handleClick = (e) => {
    if (pathname === "/") {
      e.preventDefault()
      document.querySelector(menuItem.path)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      setTimeout(() => {
        document.querySelector(menuItem.path)?.scrollIntoView({ behavior: 'smooth' })
      }, 200)
    }
  }

  return (
    <Link
      href="/"
      onClick={handleClick}
      passHref
      className="flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-white/70 text-shadow-lg font-semibold hover:text-white"
    >
      {t(menuItem.title)}
    </Link>
  )
}

export default SmoothScrollLink