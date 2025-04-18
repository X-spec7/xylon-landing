import type React from "react"
import { Footer, Header } from "@/components/Layout"
import { Inter } from "next/font/google"
import { dir } from "i18next"
import "node_modules/react-modal-video/css/modal-video.css"

import { Providers } from "./providers"
import { languages } from "../i18n/settings"
// Import the non-hook version for metadata
import { useTranslation } from "../i18n"

import "../../styles/index.css"

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
    <html suppressHydrationWarning lang={lng} dir={dir(lng)}>
      <head>
        <title>{t("app.title")}</title>
      </head>

      <body className={`bg-[#FCFCFC] ${inter.className}`}>
        <Providers>
          <Header lng={lng} />
          <div
            style={{
              backgroundImage: "url('/images/bg.jpg')",
            }}
            className="z-10 w-full h-screen bg-cover bg-center overflow-auto no-scrollbar"
          >
            {children}
            <Footer lng={lng} />
          </div>
        </Providers>
      </body>
    </html>
  )
}
