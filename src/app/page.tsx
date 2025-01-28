import { Hero } from "@/components/LandingPage"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Xylon Project",
  description: "This is Xylon Project",
};

export default function Home() {
  return (
    <>
      <Hero />
    </>
  );
}
