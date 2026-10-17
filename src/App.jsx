import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Shop } from './components/Shop'
import { Events } from './components/Events'
import { Footer } from './components/Footer'

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Shop />
      <Events />
      <Footer />
    </div>
  )
}

export default App