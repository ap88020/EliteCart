import {BrowserRouter,Routes,Route} from 'react-router-dom'
import UserLayout from './components/Layout/User_layout'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< UserLayout />}  ></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
