import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import NotFound from './Error/NotFound'
import ProtectedRoute from './Components/ProtectedRoute'
import AddMoneyPage from './Components/AddMoneyPage'
function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
        <Route path="/add-money" element={<ProtectedRoute><AddMoneyPage/></ProtectedRoute>} />
 
        <Route path='*' element={<NotFound/>}/>
      </Routes>

      </BrowserRouter>


    </>

  )
}



export default App
