import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Shop } from './components/Shop'
import { Events } from './components/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Shop />
      <Events />
    </div>
  )
}

export default App