import { useState } from 'react'
import { Header } from "./components/header/header-card"
import { Hero } from './components/hero/hero-card'
import { Service1 } from './components/service-1/service1-card'
import { Service2 } from './components/service-2/service2-card'
import { Service3 } from './components/service-3/service3-card'
import { Footer } from './components/footer/footer-card'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Service1 />
      <Service2 />
      <Service3 />
      <Footer />
    </>
  )
}

export default App
