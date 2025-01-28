import { Footer, Header } from "@/components/Layout"
import { Inter } from "next/font/google"
import { dir } from 'i18next'
import { useTranslation } from "../i18n"
import "node_modules/react-modal-video/css/modal-video.css"

import { Providers } from "./providers"
import { languages, fallbackLng } from "../i18n/settings"

import "../../styles/index.css"

const inter = Inter({ subsets: ["latin"] })

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export async function generateMetaData({ params }: {
  params: {
    lng: string;
  };
}) {
  let {lng} = params
  if (languages.indexOf(lng) < 0) {
    lng = fallbackLng
  }
  const { t } = await useTranslation(lng)

  return {
    title: t("title"),
    content: t("description")
  }
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode
  params: { lng: string }
}) {
  
  return (
    <html suppressHydrationWarning  lang={lng} dir={dir(lng)}>
      <head />

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
