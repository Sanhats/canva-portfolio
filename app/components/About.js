export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Sobre Mí
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              Soy un diseñador gráfico apasionado por crear soluciones visuales
              que comuniquen ideas de manera efectiva y atractiva.
            </p>
            <p className="text-lg leading-relaxed">
              Mi trabajo combina creatividad, técnica y atención al detalle para
              producir diseños que no solo se ven bien, sino que también
              transmiten el mensaje correcto.
            </p>
          </div>
          <div className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Especialidades
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">✨</span>
                Diseño de marca e identidad visual
              </li>
              <li className="flex items-center">
                <span className="mr-2">🎨</span>
                Ilustración digital
              </li>
              <li className="flex items-center">
                <span className="mr-2">📱</span>
                Diseño para redes sociales
              </li>
              <li className="flex items-center">
                <span className="mr-2">🖼️</span>
                Diseño editorial
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
