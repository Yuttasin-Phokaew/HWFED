import React from 'react'

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import Signin from './components/Signin/Signin'
import MainLayout from './layout/MainLayout'
import Login from './components/Login/Login'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />} />
      <Route path="/register" element={<Signin />} />
      <Route path="/login" element={<Login />} />
    </>
  )
)

export default router
