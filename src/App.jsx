import './App.css'
import './normalize.css'
import Classes from './components/Classes'
import Coaches from './components/Coaches'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Pricing from './components/Pricing'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80,
      easing: 'ease-out-cubic',
      anchorPlacement: 'top-bottom',
    })

    const refresh = window.setTimeout(() => {
      AOS.refreshHard()
    }, 250)

    window.addEventListener('load', AOS.refreshHard)

    return () => {
      window.clearTimeout(refresh)
      window.removeEventListener('load', AOS.refreshHard)
    }
  }, [])

  return (
    <main className="min-h-screen bg-[#080b0d]">
      <Navbar />
      <Hero />
      <Classes />
      <Coaches />
      <Pricing />
      <Footer />
    </main>
  )
}

export default App
