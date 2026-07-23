import React from 'react'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import HomeImage from '../../assets/banner.png'


const Home = () => {
  return (
    <div>
      <img style={{minHeight:"40vh", maxHeight:"625px"}} src={HomeImage} alt="" width="100%"/>
      <About />
      <Skills />
      <Projects />
    </div>
  )
}

export default Home
