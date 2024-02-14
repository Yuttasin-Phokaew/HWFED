import React from 'react'

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'

import Signin from './components/Signin/Signin'
import MainLayout from './layout/MainLayout'
import AfterLogin from './components/AfterLogin/AfterLogin'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />} />
      <Route path="/register" element={<Signin />} />
      <Route path="/afterlogin" element={<AfterLogin />} />
    </>
  )
)

export default router
