import { useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation} from 'react-router'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Shop } from './components/Shop'
import { Events } from './components/Events'
import { Footer } from './components/Footer'
import { Login } from './components/Login'

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Shop />
      <Events />
    </>
  )
}
function App() {
  const navigate = useNavigate()

  function handleAuthClick(mode) {
    setAuthMode(mode)
    navigate('/login')
  }

  function ScrollToHash() {
    const { pathname, hash } = useLocation()
    useEffect(() => {
      if (hash) {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        window.scrollTo(0, 0)
      }
    }, [pathname, hash])
    return null
  }

  return (
    <>
      <Header onAuthClick={ handleAuthClick } />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login mode="signin" />} />
        <Route path="/signup" element={<Login mode="signup" />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App