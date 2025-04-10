import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/Layout/User_layout'
import './App.css'
import Home from './Pages/Home'
import {Toaster} from 'sonner'
import Login from './Pages/Login'
import Register from './Pages/Register'

function App() {
  return (
    <BrowserRouter 
      future={{v7_relativeSplatPath:true , v7_startTransition:true}}
    >
      < Toaster position="top-right" />
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
