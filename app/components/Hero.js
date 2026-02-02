export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-burgundy-grain relative overflow-hidden">
      {/* Formas decorativas animadas */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      

      <div className="text-center px-4 relative z-10 animate-slide-in">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[12rem] font-serif italic font-black text-white mb-4 leading-none tracking-tight">
            <span className="text-gradient">PORTFOLIO</span>
          </h1>
          <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-serif italic font-bold text-white/95 -mt-2 sm:-mt-4">
          Diseño gráfico
          </h2>
        </div>
        
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-8 sm:mb-12 max-w-3xl mx-auto italic font-light leading-relaxed px-4">
          Creando experiencias visuales únicas 
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-white text-burgundy-700 rounded-full font-bold italic text-base sm:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-white/20 animate-pulse-glow text-center"
          >
            Ver Trabajos
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 bg-transparent border-2 sm:border-3 border-white text-white rounded-full font-bold italic text-base sm:text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm text-center"
          >
            Contacto
          </a>
        </div>
      </div>
    </section>
  )
}
