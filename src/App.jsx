import React from 'react'
import Navbar from './componats/Navbar/Navbar.jsx'
import Home from './componats/home/Home.jsx'
import Products from './componats/products/Products.jsx'
import Pizza from './componats/pizza/Pizza.jsx'
import Salad from './componats/salad/Salad.jsx'
import Onion from './componats/onion/Onion.jsx'
import PageNotFound from './componats/PageNotFound/PageNotFound.jsx'
import { Routes , Route } from 'react-router-dom'

export default function App() {
  return (
    <>
     <Navbar />
     <Routes>
     <Route path='/' element = {<Home/>}/>
      <Route path='/products' element = {<Products/>}/>
      <Route path='/pizza' element = {<Pizza/>}/>
      <Route path='/salad' element = {<Salad/>}/>
      <Route path='/onion' element = {<Onion/>}/>
      <Route path='*' element = {<PageNotFound/>}/>
     </Routes>
    </>
  )
}