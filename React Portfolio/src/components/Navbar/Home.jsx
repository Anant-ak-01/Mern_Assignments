import React from 'react'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'


const Home = () => {
  return (
    <div>
      <img src="../src/assets/banner.png" alt="" height="625" width="100%"/>
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default Home
