"use client"

import type React from "react"

import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import Image from "next/image"
import { useTranslation } from "@/app/i18n/client"
import mainPageMenuData from "./mainPageMenuData"
import { checkScrollUrl } from "@/util/helper"
import { SmoothScrollLink } from "@/components/Common"
import type { ISectionProps } from "@/types"
import { languages } from "@/app/i18n/settings"

const Header: React.FC<ISectionProps> = ({ lng }) => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false)
  const { t } = useTranslation(lng, "common")

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen)
  }

  const router = useRouter()
  const pathname = usePathname()

  const sticky = true

  const [openIndex, setOpenIndex] = useState(-1)
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1)
    } else {
      setOpenIndex(index)
    }
  }

  const handleLanguageChange = (lang: string) => {
    setLanguageDropdownOpen(false)

    // Preserve the current path when changing language
    const currentPath = pathname.replace(/^\/[^/]+/, "")
    router.push(`/${lang}${currentPath}`)
  }

  const handleLanguageDropdownClicked = () => {
    setLanguageDropdownOpen((prev) => !prev)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageDropdownOpen &&
        !event.target.closest("#languageDropdown") &&
        !event.target.closest("#languageDropdownButton")
      ) {
        setLanguageDropdownOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  }, [languageDropdownOpen])

  return (
    <>
      <header className="header left-0 top-0 z-[9999] flex w-full items-center border-b border-gray-400 bg-black/60 fixed !bg-opacity-80 shadow-sticky backdrop-blur-sm transition">
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link href={`/${lng}`} className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-2"}`}>
                <div className="flex justify-center items-center gap-4">
                  <Image src="/images/xylon.png" width={200} height={40} alt="logo" />
                </div>
              </Link>
            </div>

            <div className="flex justify-end items-center">
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? " top-[7px] rotate-45" : " "}`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "opacity-0 " : " "}`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? " top-[-8px] -rotate-45" : " "}`}
                />
              </button>
              <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                  navbarOpen ? "visibility top-full opacity-100" : "invisible top-[120%] opacity-0"
                }`}
              >
                <ul className="block lg:flex lg:space-x-12">
                  {mainPageMenuData.map((menuItem, index) => (
                    <li key={index} className="group relative">
                      {menuItem.path ? (
                        checkScrollUrl(menuItem.path) ? (
                          <SmoothScrollLink menuItem={menuItem} lng={lng} />
                        ) : (
                          <Link
                            href={`/${lng}${menuItem.path}`}
                            className={`flex py-2 text-xs lg:mr-0 lg:inline-flex font-semibold lg:px-0 lg:py-6 text-white hover-underline-animation ${
                              pathname === `/${lng}${menuItem.path}` ? "text-white" : "text-white"
                            }`}
                          >
                            {t(menuItem.title)}
                          </Link>
                        )
                      ) : (
                        <>
                          <p
                            onClick={() => handleSubmenu(index)}
                            className="flex cursor-pointer items-center justify-between py-2 text-sm text-white/70 group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                          >
                            {t(menuItem.title)}
                            <span className="pl-1 lg:pl-3">
                              <svg width="25" height="24" viewBox="0 0 25 24">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </p>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
              {/* Language selection dropdown button */}
              <div className="relative ml-16">
                <button
                  className="flex items-center gap-2 px-3 py-2 text-sm text-white bg-gray-700 rounded-lg hover:bg-gray-600 focus:ring-2 focus:ring-white/70"
                  id="languageDropdownButton"
                  onClick={handleLanguageDropdownClicked}
                  aria-haspopup="true"
                  aria-expanded={languageDropdownOpen}
                >
                  {lng.toUpperCase()}
                  <svg
                    className={`w-4 h-4 transition-transform ${languageDropdownOpen ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul
                  className={`absolute mt-2 rounded-md bg-white shadow-lg w-full ${
                    languageDropdownOpen ? "flex flex-col items-center justify-center" : "hidden"
                  }`}
                  id="languageDropdown"
                >
                  {languages.map((lang, index) => (
                    <li key={lang} className="w-full">
                      <button
                        className={`block w-full px-4 py-2 text-left text-sm text-black hover:bg-gray-100 ${
                          index + 1 < languages.length ? "border-b border-black/10" : ""
                        } ${lng === lang ? "font-bold bg-gray-100" : ""}`}
                        onClick={() => handleLanguageChange(lang)}
                      >
                        {lang.toUpperCase()}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
