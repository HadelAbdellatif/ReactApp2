import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import './App.css'
import Restaurant from './components/restaurant/Restaurant'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/products' element={<Products />} />
        <Route path='/restaurant' element={<Restaurant />} />
      </Routes>
    </>
  )
}

export default App
