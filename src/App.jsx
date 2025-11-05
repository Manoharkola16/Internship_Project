import React from 'react'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes/Router.jsx'
import './App.css'

const App = () => {
  return (
    <div>
        <RouterProvider router={Routes}></RouterProvider>
    </div>
  )
}

export default App