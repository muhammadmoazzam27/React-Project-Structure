import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardHome from './Home'

const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path='home' element={<DashboardHome />} />
        <Route path='*' element={<h1 className='text-2xl text-center py-2'>Page Not Found</h1>} />
      </Routes>
    </>
  )
}

export default Dashboard