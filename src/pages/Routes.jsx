import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Auth from './Auth'
import Dashboard from './Dashboard'

const Index = () => {
  return (
    <>
    <Routes>
        <Route path='/*' element={<Frontend />} />
        <Route path='/auth/*' element={<Auth />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
        <Route path='*' element={<h1 className='text-2xl text-center py-2'>Page Not Found</h1>} />
    </Routes>
    </>
  )
}

export default Index