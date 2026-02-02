export default function About() {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-b from-burgundy-50 to-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-burgundy-200/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-burgundy-300/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif italic font-black text-burgundy-800 mb-4 sm:mb-6 leading-tight">
            SOBRE MÍ
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-transparent via-burgundy-600 to-transparent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 text-burgundy-700 animate-slide-in">
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed italic font-light">
              Soy una persona apasionada por crear y comunicar a través de lo visual.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed italic font-light">
              Mi trabajo une creatividad, técnica y cuidado por los detalles para crear piezas visuales que no solo se ven bien, sino que comunican lo que deben.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-burgundy-100 via-burgundy-50 to-burgundy-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-burgundy-200 shadow-2xl hover:shadow-burgundy-200/50 transition-all duration-500 hover-lift">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif italic font-bold mb-6 sm:mb-8 text-burgundy-800">
              Especialidades
            </h3>
            <ul className="space-y-3 sm:space-y-5 text-burgundy-700">
              <li className="flex items-start italic text-base sm:text-lg group">
                <span className="group-hover:text-burgundy-800 transition-colors">Uso de Canva y Photoshop</span>
              </li>
              <li className="flex items-start italic text-base sm:text-lg group">
                <span className="group-hover:text-burgundy-800 transition-colors">Creación de audiovisuales</span>
              </li>
              <li className="flex items-start italic text-base sm:text-lg group">
                <span className="group-hover:text-burgundy-800 transition-colors">Flyers</span>
              </li>
              <li className="flex items-start italic text-base sm:text-lg group">
                <span className="group-hover:text-burgundy-800 transition-colors">Creación de tarjetas diversas físicas y digitales</span>
              </li>
              <li className="flex items-start italic text-base sm:text-lg group">
                <span className="group-hover:text-burgundy-800 transition-colors">Posts para redes sociales de diversos rubros</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
