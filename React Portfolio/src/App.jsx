import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './components/Navbar/Home'
import About from './components/Navbar/About'
import Projects from './components/Navbar/Projects'
import PageNotFound from './components/PageNotFound'
import Skills from './components/Navbar/Skills'
const App = () => {
  return (
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/About' element={<About />}/>
    <Route path='/Skills' element={<Skills />}/>
    <Route path='/Projects' element={<Projects />}/>

    <Route path="*" element={<PageNotFound />} />
  </Routes>
  </BrowserRouter>
  )
}

export default App
