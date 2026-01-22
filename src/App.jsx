import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import NotFound from './Error/NotFound'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Dashboard/>} />

        <Route path='*' element={<NotFound/>}/>
      </Routes>

      </BrowserRouter>

    </>

  )
}



export default App
