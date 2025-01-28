import { FeatureCard } from "@/components/Common"

const About = () => {
  return (
    <section
      id="about"
      className="relative z-10 flex flex-col justify-center items-center gap-20 h-screen overflow-hidden text-shadow-lg text-white bg-black/30 border-b border-white/40"
    >
      <div className="container mx-auto max-w-7xl text-center">
        {/* Section Heading */}
        <h2 className="text-6xl lg:text-4xl font-bold mb-6">About Xylon</h2>
        <p className="text-lg max-w-4xl mx-auto">
          Xylon is dedicated to transforming sustainability through innovative tools and technologies. By offering solutions that enable real-world impact, Xylon empowers individuals and organizations to contribute to a more sustainable planet.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
        <FeatureCard
          icon="🌍"
          title="Carbon Reduction"
          description="Xylon delivers tools to measure, monitor, and actively reduce your carbon footprint for a greener tomorrow."
        />
        <FeatureCard
          icon="⚡"
          title="Energy Efficiency"
          description="Our innovative solutions help improve energy utilization, enhancing efficiency while reducing waste."
        />
      </div>
    </section>
  )
}

export default About
