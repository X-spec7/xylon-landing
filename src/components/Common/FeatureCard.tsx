const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center w-115 pt-6 pb-12 px-4 text-center gap-4 border border-white/70 rounded-xl bg-black/60">
      <div className="w-20 h-20 flex items-center justify-center bg-teal-500 text-white rounded-full shadow-lg">
        <span className="text-2xl font-semibold">{icon}</span>
      </div>
      <h3 className="text-2xl font-medium">{title}</h3>
      <p className="text-lg max-w-3xl">{description}</p>
    </div>
  )
}

export default FeatureCard