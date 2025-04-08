import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/Layout/User_layout'
import './App.css'
import Home from './Pages/Home'
import {Toaster} from 'sonner'

function App() {
  return (
    <BrowserRouter>
      < Toaster position="top-right" />
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
