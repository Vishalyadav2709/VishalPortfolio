import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Project'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AppNavbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <AppNavbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />

      </div>
    </>
  )
}

export default App
