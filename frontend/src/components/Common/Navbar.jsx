import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TiUser} from "react-icons/ti";
import { IoCartSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import SearchBar from './SearchBar';
import CardDrawer from '../Layout/CardDrawer';
import { IoCloseCircleSharp } from "react-icons/io5";
import { MdMenu } from "react-icons/md";


export const Navbar = () => {

const [drawerOpen, setDrawerOpen] = useState(false)
const [navDrawerOpen, setNavDrawerOpen] = useState(false)
const drawerToggle = () => {
  setDrawerOpen(!drawerOpen);
}

const navDrawerToggle = () => {
  setNavDrawerOpen(!navDrawerOpen);
}

return (
    <>
      <nav id='navbar' className='flex justify-between p-2'>
        {/* {left side Logo} */}
        <div>
            <Link to="/" className="text-green-600 text-2xl font-extralight">
              Ǝlite<span className='font-semibold'>C</span>art
            </Link>
        </div>
        {/* {center side} */}
        <div className='hidden md:flex space-x-6'>
          <Link 
            to="#"
            className="text-black font-medium hover:text-green-800 uppercase">
                Men
          </Link>
          <Link 
            to="#" 
            className="text-black font-medium hover:text-green-800 uppercase">
                Women
          </Link>
          <Link 
            to="#" 
            className="text-black font-medium hover:text-green-800 uppercase">
                top wear   
          </Link>
          <Link 
            to="#" 
            className="text-black font-medium hover:text-green-800 uppercase">
                Bottom wear
          </Link>
        </div>
        {/* {left side} */}
        <div className='flex space-x-4 justify-center items-center'>
            <Link to="#" className='hover:text-green-600'>
                < TiUser />
            </Link>
            <Link to="#"
                onClick={drawerToggle} 
                className='hover:text-green-600 relative'>
                < IoCartSharp  className='z-10'/>
                <span className="bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center absolute top-2 -right-4 z-[-1]">4</span>
            </Link>
            {/* {searchBar} */}
            < SearchBar />
            <button
              onClick={navDrawerToggle}
              className='md:hidden'>
                < MdMenu />
            </button>
        </div>
      </nav>
      <CardDrawer drawerOpen={drawerOpen} drawerToggle={drawerToggle} />
      <div className={`fixed top-0 left-0 sm:hidden shadow-lg h-full w-[70%] bg-gray-600 transfom transition-transform duration-300 z-50 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <button
            className='flex w-full justify-end text-red-300 px-3 py-2' 
            onClick={navDrawerToggle}>
              < IoCloseCircleSharp />
          </button>
          <div className='p-4'>
              <h2 className='flex justify-start text-xl font-semibold mb-4'>Menu</h2>
              <nav className='flex justify-start text-xl mb-4'>
                <Link
                  to="#"
                  onClick={navDrawerToggle}
                  className='block text-white hover:text-black'
                >
                  Men
                </Link>
              </nav>
              <nav className='flex justify-start text-xl mb-4'>
                <Link
                  to="#"
                  onClick={navDrawerToggle}
                  className='block text-white hover:text-black'
                >
                  Women
                </Link>
              </nav>
              <nav className='flex justify-start text-xl mb-4'>
                <Link
                  to="#"
                  onClick={navDrawerToggle}
                  className='block text-white hover:text-black'
                >
                  Top-Wear
                </Link>
              </nav>              
              <nav className='flex justify-start text-xl mb-4'>
                <Link
                  to="#"
                  onClick={navDrawerToggle}
                  className='block text-white hover:text-black'
                >
                  Bootom-Wear
                </Link>
              </nav>              
          </div>
      </div>
    </>
  )
}
