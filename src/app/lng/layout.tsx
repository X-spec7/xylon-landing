import { Footer, Header } from "@/components/Layout"
import { Providers } from "./providers"
import { Inter } from "next/font/google"
import "node_modules/react-modal-video/css/modal-video.css"
import "../styles/index.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />

      <body className={`bg-[#FCFCFC] ${inter.className}`}>
        <Providers>
          <Header />
          <div
            style={{
              backgroundImage: "url('/images/bg.jpg')",
            }}
            className="z-10 w-full h-screen bg-cover bg-center overflow-auto no-scrollbar"
          >
            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
