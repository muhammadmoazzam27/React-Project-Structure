import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import ResetPassword from './ResetPassword'
import ForgetPassword from './ForgetPassword'

const Auth = () => {
    return (
        <>
            <Routes>
                <Route path='register' element={<Register />} />
                <Route path='login' element={<Login />} />
                <Route path='forget-password' element={<ForgetPassword />} />
                <Route path='reset-password' element={<ResetPassword />} />
                <Route path='*' element={<h1 className='text-2xl text-center py-2'>Page Not Found</h1>} />
            </Routes>
        </>
    )
}

export default Auth