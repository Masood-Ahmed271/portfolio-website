import React from 'react'
// import useLocalStorage from 'use-local-storage'
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

  // const defaultlight = window.matchMedia('(prefers-color-scheme: light)').matches;
  // const [theme, setTheme] = useLocalStorage('theme', defaultlight ? 'light' : 'dark');

  // const switchTheme = () =>{
  //   const newTheme = theme === 'dark' ? 'light' : 'dark';
  //   setTheme(newTheme)
  // }
  return (
      <>
        {/* <ParticleBackground /> */}
        {/* <div className="app" data-theme={theme}>
          <button onClick={switchTheme}>
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
          </button>
        </div> */}
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