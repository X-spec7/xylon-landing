"use client"

const Hero = () => {

  return (
    <>
      <section
        id="hero"
        style={{
          backgroundImage: "url('/images/bg.jpg')",
        }}
        className="relative z-10 bg-cover bg-center overflow-hidden h-screen border border-b border-gray-200"
      >
        <div className="flex flex-col justify-center items-center gap-8 w-full h-full bg-black bg-opacity-80">
          <h2 className="text-4xl text-white font-semibold">Empowering Sustainability with Blockchain</h2>
          <p className="text-xl text-white font-medium">Revolutionizing sustainability through real-world carbon reduction and energy efficiency metrics.</p>
          <button className="text-white text-lg bg-teal-500 rounded-lg px-6 py-3">Explore Our Vision</button>
        </div>
      </section>
    </>
  )
}

export default Hero
