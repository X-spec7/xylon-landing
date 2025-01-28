import {
  Hero,
  About,
  Solutions,
  FAQ,
  Contact,
} from "@/components/LandingPage"

export default function Page({ params: { lng } }) {
  return (
    <>
      <Hero lng={lng} />
      <About lng={lng} />
      <Solutions lng={lng} />
      <FAQ lng={lng} />
      <Contact lng={lng} />
    </>
  )
}
