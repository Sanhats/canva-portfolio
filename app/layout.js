import './globals.css'
import { Work_Sans, Playfair_Display } from 'next/font/google'

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-work-sans',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata = {
  title: 'Portfolio - Diseños Gráficos',
  description: 'Portfolio de diseños gráficos',
  icons: {
    icon: '/icon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${workSans.variable} ${playfairDisplay.variable}`}>
      <body className={workSans.className}>{children}</body>
    </html>
  )
}
