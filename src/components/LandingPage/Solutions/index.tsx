import { FeatureCard } from "@/components/Common"

const Solutions = () => {
  return (
    <section
      id="solutions"
      className="relative z-10 h-auto py-16 flex flex-col justify-center items-center gap-10 overflow-hidden text-shadow-lg text-white bg-black/50 border-b border-white/40"
    >
      <div className="container mx-auto max-w-7xl text-center">
        {/* Section Heading */}
        <h2 className="text-4xl lg:text-4xl font-bold mb-6">Our Solutions</h2>
        <p className="text-lg max-w-4xl mx-auto">
          Xylon is redefining how technology drives sustainability. Our
          innovative solutions leverage advanced tools to revolutionize energy
          management and empower meaningful contributions to a more sustainable
          planet. These offerings are designed to be efficient, scalable, and
          impactful, enabling individuals and organizations to take action
          toward a greener future.
        </p>
      </div>

      {/* Solutions List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
        <FeatureCard
          icon="🌱"
          title="EMS-1: Comprehensive Energy Optimization"
          description="EMS-1 is a sophisticated system designed to monitor and enhance
            energy usage. It provides users with actionable insights and rewards
            for achieving efficiency and sustainability goals. By incorporating
            cutting-edge technologies, EMS-1 enables measurable progress in
            energy management while supporting carbon reduction initiatives."
        />
        <FeatureCard
          icon="🔋"
          title="EMS-Mini: Compact and Scalable Efficiency"
          description="For smaller-scale applications, the EMS-Mini offers a streamlined
            approach to sustainability. Ideal for individuals, small businesses,
            and localized initiatives, EMS-Mini provides a simple and effective
            way to adopt sustainable practices, ensuring broad accessibility
            without sacrificing impact."
        />
        <FeatureCard
          icon="🔥"
          title="Xylon Heating System"
          description="Xylon is a revolutionary heating system that rewards users for
            savings achieved and environmental contributions. Surpassing
            traditional heating technologies, it offers exceptional efficiency
            and operates entirely on solar energy in some regions. The system
            provides home heating, water heating, and cryptocurrency generation,
            delivering unmatched energy efficiency and emission reductions. Its
            cryptocurrency value is determined by system efficiency and saved
            carbon emissions, ensuring transparency and sustainability. Xylon is
            the ideal choice for households and organizations seeking innovation,
            environmental friendliness, and financial benefit in one solution."
        />
      </div>
    </section>
  )
}

export default Solutions
