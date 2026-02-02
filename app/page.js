import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import About from './components/About'
import SocialMedia from './components/SocialMedia'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Portfolio />
      <SocialMedia />
      <Contact />
    </main>
  )
}
