import React from 'react'
import Add from './components/Add'
import Edit from './components/Edit'
import Dashboard from './components/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Add/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
