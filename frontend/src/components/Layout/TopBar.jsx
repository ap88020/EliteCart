import React from 'react'
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagram, FaXTwitter, FaWhatsapp } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className='bg-gray-600 text-green-400'>
      <div className='container mx-auto flex justify-between items-center py-3 px-4'>

        {/* Left - Social Media Icons */}
        <div className='hidden md:flex space-x-3 items-center'>
          <a href="#" className='text-xl'><IoLogoLinkedin /></a>
          <a href="#" className='text-xl'><FaInstagram /></a>
          <a href="#" className='text-xl'><FaXTwitter /></a>
          <a href="#" className='text-xl'><FaWhatsapp /></a>
        </div>

        {/* Center - Text */}
        <div className='text-sm font-semibold text-center'>
          <h1>We deliver clothes worldwide</h1>
        </div>

        {/* Right - Phone Number */}
        <div className='hidden text-sm font-semibold md:flex text-center'>
          <h1>+91 3883042483</h1>
        </div>

      </div>
    </div>
  )
}

export default TopBar;
