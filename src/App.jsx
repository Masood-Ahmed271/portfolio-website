import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Expereince'
import Education from './components/education/Education'
import Portfolio from './components/portfolio/Portfolio'
import Work from './components/work/Work'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
// import ParticleBackground from './components/particlejsconfig/ParticleBackground'


const App = () => {
  console.log("Testing")
  return (
      <>
        {/* <ParticleBackground /> */}
        <Header /> 
        <Nav />
        <About />
        <Experience />
        <Education />
        <Portfolio />
        <Work />
        <Contact />
        <Footer />
      </>
    
  )
}

export default App