import { useState } from 'react'
import {Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Products from './components/products/Products'
import './App.css'

function App() {

  return (
    <>
    <Navbar />
    <Products />
   </>
  )
}

export default App
