import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Common/Footer'
import Header from '../Common/Header'
import Home from '../../Pages/Home'

const User_layout = () => {
  return (
    <div>
      < Header />
        <main>
            <Outlet/>
        </main>
      <Footer/>
    </div>
  )
}

export default User_layout