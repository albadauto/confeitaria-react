import React from 'react'
import { BrowserRouter, Routes as Rt, Route } from 'react-router-dom'
import Header from './components/Header/Index'
import Home from './pages/Home/Index'
import Login from './pages/Login/Index'

export default function Routes() {
  return (
    <BrowserRouter>
        <Rt>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
        </Rt>
    </BrowserRouter>
  )
}
