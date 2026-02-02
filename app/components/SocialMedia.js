export default function SocialMedia() {
  return (
    <section id="social-media" className="pt-16 pb-40 sm:pb-48 md:pb-56 lg:pb-64 px-4 bg-gradient-to-b from-burgundy-100 to-white relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-burgundy-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-burgundy-300/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif italic font-black text-burgundy-800 mb-4 leading-tight">
            Contenido Visual
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-burgundy-600 to-transparent mx-auto mb-4"></div>
          <p className="text-lg md:text-xl text-burgundy-600 italic font-light max-w-2xl mx-auto">
            Videos y gestión de perfiles de Instagram con diseño visual profesional
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Video de Servicio de PC */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-burgundy-100 w-full">
            <div className="bg-gradient-to-br from-burgundy-50 to-white p-3 sm:p-4 border-b border-burgundy-100">
              <h3 className="text-lg sm:text-xl md:text-2xl font-serif italic font-bold text-burgundy-800 mb-1">
                Servicio de PC
              </h3>
              <p className="text-burgundy-600 italic text-xs md:text-sm">
                Producción audiovisual publicitaria
              </p>
            </div>
            <div className="w-full bg-burgundy-900 relative overflow-hidden flex items-center justify-center min-h-[300px] sm:min-h-[400px] max-h-[600px] sm:max-h-[700px]">
              <video
                src="/videopc.mp4"
                className="w-full h-auto max-h-full object-contain"
                playsInline
                muted
                loop
                autoPlay
              >
                Tu navegador no soporta la reproducción de videos.
              </video>
            </div>
          </div>
          
          {/* Video de Vibero */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border-2 border-burgundy-100 w-full">
            <div className="bg-gradient-to-br from-burgundy-50 to-white p-3 sm:p-4 border-b border-burgundy-100">
              <h3 className="text-lg sm:text-xl md:text-2xl font-serif italic font-bold text-burgundy-800 mb-1">
                Vibero
              </h3>
              <p className="text-burgundy-600 italic text-xs md:text-sm">
                Producción audiovisual
              </p>
            </div>
            <div className="w-full bg-burgundy-900 relative overflow-hidden flex items-center justify-center min-h-[300px] sm:min-h-[400px] max-h-[600px] sm:max-h-[700px]">
              <video
                src="/video.mp4"
                className="w-full h-auto max-h-full object-contain"
                playsInline
                muted
                loop
                autoPlay
              >
                Tu navegador no soporta la reproducción de videos.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
