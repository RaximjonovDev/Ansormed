import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import Services from './components/Services'
import CTA from './components/CTA'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
    <Header/>
    <main>
    <Hero/>
    <Services/>
    <CTA/>  
    </main>
    <Footer/>
    </div>
  )
}

export default App