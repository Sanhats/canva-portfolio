export default function Portfolio() {
  // Ejemplo de proyectos - reemplaza con tus propios diseños
  const projects = [
    {
      id: 1,
      title: 'Proyecto 1',
      category: 'Branding',
      image: '/placeholder-1.jpg',
      description: 'Descripción del proyecto de branding',
    },
    {
      id: 2,
      title: 'Proyecto 2',
      category: 'Ilustración',
      image: '/placeholder-2.jpg',
      description: 'Descripción del proyecto de ilustración',
    },
    {
      id: 3,
      title: 'Proyecto 3',
      category: 'Redes Sociales',
      image: '/placeholder-3.jpg',
      description: 'Descripción del proyecto de redes sociales',
    },
    {
      id: 4,
      title: 'Proyecto 4',
      category: 'Editorial',
      image: '/placeholder-4.jpg',
      description: 'Descripción del proyecto editorial',
    },
    {
      id: 5,
      title: 'Proyecto 5',
      category: 'Branding',
      image: '/placeholder-5.jpg',
      description: 'Descripción del proyecto de branding',
    },
    {
      id: 6,
      title: 'Proyecto 6',
      category: 'Ilustración',
      image: '/placeholder-6.jpg',
      description: 'Descripción del proyecto de ilustración',
    },
  ]

  return (
    <section id="portfolio" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Mi Portfolio
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
          Explora algunos de mis trabajos más recientes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-400 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold opacity-50">
                    {project.id}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-center px-4">{project.description}</p>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-purple-600 dark:text-purple-400 font-semibold">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-2 text-gray-900 dark:text-white">
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
