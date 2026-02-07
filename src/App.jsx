import { useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './Components/Login'
import Dashboard from './Components/Dashboard'
import NotFound from './Error/NotFound'
import ProtectedRoute from './Components/ProtectedRoute'
import AddMoney from './Components/AddMoney'
import Wallet from './Components/Wallet'
import Body from './Components/Body'
function App() {

  return (
    <div className='min-h-screen bg-[#020617] flex flex-col'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Body/>}>
        <Route index element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
        <Route path="wallet" element={<ProtectedRoute><Wallet/></ProtectedRoute>} />
        <Route path="add-money" element={<ProtectedRoute><AddMoney/></ProtectedRoute>} />
        </Route>
        
 
        <Route path='*' element={<NotFound/>}/>
      </Routes>

      </BrowserRouter>


    </div>

  )
}



export default App
