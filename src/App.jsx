import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Social from './components/Social/Social'
import Mail from './components/Mail/Mail'
import Intro from './components/Intro/Intro'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Work from './components/Work/Work'
import './App.css';
import OtherProjects from './components/OtherProjects/OtherProjects'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <Social />

        <div className='main-content'>
          <Intro />
          <About />
          <Experience />
          <Work />
          <OtherProjects />
          <Contact />
        </div>
        
        <Mail />
      </main>
    </>
  )
}

export default App