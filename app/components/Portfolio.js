import Image from 'next/image'

export default function Portfolio() {
  // Proyectos con logos
  const projects = [
    {
      id: 1,
      title: 'Logo 1',
      category: 'Empresa de mermeladas',
      image: '/logo1.jpg',
      description: 'Diseño de logo personalizado',
    },
    {
      id: 5,
      title: 'Logo 5',
      category: 'Empresa de mermeladas',
      image: '/logo5.jpg',
      description: 'Diseño de logo personalizado',
    },
    {
      id: 2,
      title: 'Logo 2',
      category: 'Vibero',
      image: '/logo2.jpg',
      description: 'Identidad visual creativa',
    },
    {
      id: 3,
      title: 'Logo 3',
      category: 'Tienda virtual de ropa de segunda mano',
      image: '/logo3.jpg',
      description: 'Diseño de marca',
    },
    {
      id: 4,
      title: 'Logo 4',
      category: 'Restaurante de Sushi',
      image: '/logo4.jpg',
      description: 'Creación de identidad visual',
    },
    
    {
      id: 6,
      title: 'Logo 6',
      category: 'Insumos de repostería y forragería',
      image: '/logo6.jpg',
      description: 'Diseño de logo personalizado',
    },
  ]

  return (
    <section id="portfolio" className="py-16 sm:py-20 md:py-24 px-4 bg-gradient-to-b from-white to-burgundy-100 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-burgundy-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-burgundy-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif italic font-black text-burgundy-800 mb-4 sm:mb-6 leading-tight">
            Galeria 
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-transparent via-burgundy-600 to-transparent mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl md:text-2xl text-burgundy-600 italic font-light max-w-2xl mx-auto px-4">
            Explora algunos de mis trabajos más recientes
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover-lift group border-2 border-burgundy-100 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-burgundy-400/0 to-burgundy-600/0 group-hover:from-burgundy-400/10 group-hover:to-burgundy-600/10 transition-all duration-500 pointer-events-none"></div>
              
              <div className="aspect-square bg-white relative overflow-hidden">
                {/* Imagen del logo */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain p-8 group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Overlay en hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy-900/90 via-burgundy-800/80 to-burgundy-700/70 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <p className="text-white text-center text-lg italic font-light leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="w-16 h-px bg-white/50 mx-auto"></div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 relative z-10 bg-white">
                <span className="inline-block px-3 py-1 bg-burgundy-100 text-burgundy-700 text-xs font-bold italic rounded-full mb-3 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-2xl font-serif italic font-bold text-burgundy-800 group-hover:text-burgundy-600 transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
