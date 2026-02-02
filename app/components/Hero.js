export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
          PORTFOLIO GRAFICO
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Creando experiencias visuales únicas e impactantes
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#portfolio"
            className="px-8 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Ver Trabajos
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
          >
            Contacto
          </a>
        </div>
      </div>
    </section>
  )
}
