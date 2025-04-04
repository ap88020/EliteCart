import React from 'react'
import TopBar from '../Layout/TopBar'
import { Navbar } from '../Common/Navbar'


const Header = () => {
  return (
    <header className='border-b border-zinc-500'>
        < TopBar />
        < Navbar className="text-white" />
    </header>
  )
}

export default Header