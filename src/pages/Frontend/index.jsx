import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Frontend = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<h1 className='text-2xl text-center py-2'>Page Not Found</h1>} />
      </Routes>
      <Footer />
    </>
  )
}

export default Frontend