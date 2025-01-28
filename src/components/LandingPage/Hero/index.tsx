const Hero = () => {
  return (
    <>
      <section
        id="hero"
        className="relative z-10 overflow-hidden h-screen border-b border-gray-200 text-shadow-lg bg-black/10"
      >
        <div className="flex flex-col justify-center items-center w-full h-full bg-black/50">
          <h2 className="text-[44px] text-white font-semibold">Empowering Sustainability with Blockchain</h2>
          <p className="text-2xl text-white mt-4 font-medium">Revolutionizing sustainability through real-world carbon reduction and energy efficiency metrics.</p>
          <button className="text-white text-lg font-semibold text-shadow-sm bg-emerald-600 rounded-lg px-8 py-4 mt-16">Explore Our Vision</button>
        </div>
      </section>
    </>
  )
}

export default Hero
