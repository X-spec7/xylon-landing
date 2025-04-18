"use client"

import type React from "react"

import { useTranslation } from "@/app/i18n/client"
import { fallbackLng, languages } from "@/app/i18n/settings"
import Link from "next/link"
import type { IMenu } from "@/types"
import { usePathname } from "next/navigation"

interface SmoothScrollLinkProps {
  menuItem: IMenu
  lng: string
}

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({ menuItem, lng }) => {
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  const { t } = useTranslation(lng, "menu")

  const pathname = usePathname()

  const handleClick = (e) => {
    e.preventDefault()

    if (pathname === `/${lng}`) {
      document.querySelector(menuItem.path)?.scrollIntoView({ behavior: "smooth" })
    } else {
      // Navigate to the home page with the current language and then scroll
      window.location.href = `/${lng}${menuItem.path}`
    }
  }

  return (
    <Link
      href={`/${lng}${menuItem.path}`}
      onClick={handleClick}
      className="flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 text-white/70 text-shadow-lg font-semibold hover:text-white hover-underline-animation"
    >
      {t(menuItem.title)}
    </Link>
  )
}

export default SmoothScrollLink
