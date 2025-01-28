import { Metadata } from "next"
import {
  Hero,
  About,
  Solutions,
  FAQ,
  Contact,
} from "@/components/LandingPage"

export const metadata: Metadata = {
  title: "Xylon Project",
  description: "This is Xylon Project",
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Solutions />
      <FAQ />
      <Contact />
    </>
  )
}
