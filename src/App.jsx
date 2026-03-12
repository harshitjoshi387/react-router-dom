import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Navbar from './Components/Navbar.jsx'
import Product from './Pages/Product.jsx'

const App = () => {
  return (
   <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/Product' element={<Product/>} />
    </Routes>
   </div>
  )
}

export default App