import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/navbar/Navbar'
import './App.css'
import Products from './components/products/Products'

function App() {

  return (
    <>
    <Navbar />
    <Products />
   </>
  )
}

export default App
