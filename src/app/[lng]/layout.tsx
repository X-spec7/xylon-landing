import type React from "react"
import "./global.css"
import { Inter } from "next/font/google"
import { dir } from "i18next"
import { languages } from "../i18n/settings"
import { useTranslation } from "../i18n"
import { Providers } from "./providers"
import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer"
import ScrollToTop from "@/components/Common/ScrollToTop"

const inter = Inter({ subsets: ["latin"] })

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export default async function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode
  params: { lng: string }
}) {
  const { t } = await useTranslation(lng, "common")

  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <title>{t("app.title")}</title>
      </head>
      <body className={inter.className}>
        <Providers>
          <Header lng={lng} />
          <main>{children}</main>
          <Footer lng={lng} />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  )
}
