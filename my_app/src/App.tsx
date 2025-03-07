import React from 'react'
import { RouterProvider } from 'react-router-dom'
import routerConfig from './router'
import 'antd/dist/reset.css'
import './App.css'
import MainLayout from './layouts/MainLayout'
function App() {
  return (
    <>
      <RouterProvider router={routerConfig} />
    </>
  )
}

export default App
