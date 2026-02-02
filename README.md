# Portfolio de Diseños Gráficos

Portfolio de una sola página desarrollado con Next.js, JavaScript y Tailwind CSS para mostrar diseños gráficos.

## 🚀 Inicio Rápido

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

### Producción

```bash
npm run build
npm start
```

## 📁 Estructura del Proyecto

```
canva-portfolio/
├── app/
│   ├── components/
│   │   ├── Hero.js          # Sección hero principal
│   │   ├── About.js          # Sección sobre mí
│   │   ├── Portfolio.js      # Galería de proyectos
│   │   └── Contact.js        # Sección de contacto
│   ├── globals.css           # Estilos globales con Tailwind
│   ├── layout.js             # Layout principal
│   └── page.js               # Página principal
├── next.config.js            # Configuración de Next.js
├── tailwind.config.js        # Configuración de Tailwind
└── package.json
```

## 🎨 Personalización

### Agregar tus proyectos

Edita el archivo `app/components/Portfolio.js` y actualiza el array `projects` con tus propios diseños:

```javascript
const projects = [
  {
    id: 1,
    title: 'Tu Proyecto',
    category: 'Categoría',
    image: '/ruta-a-tu-imagen.jpg',
    description: 'Descripción del proyecto',
  },
  // ... más proyectos
]
```

### Cambiar información de contacto

Edita `app/components/Contact.js` y actualiza:
- Email
- Enlaces a redes sociales

### Personalizar colores

Modifica `tailwind.config.js` para cambiar la paleta de colores del sitio.

## 📝 Tecnologías

- **Next.js 14** - Framework de React
- **React 18** - Biblioteca de UI
- **Tailwind CSS** - Framework de CSS utility-first
- **JavaScript** - Lenguaje de programación

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.
