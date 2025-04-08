import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagram, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { MdOutlineAddIcCall } from "react-icons/md";


const Footer = () => {
  return (
    <footer className="border-t py-2 mt-3">  
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0 text-left">
        <div className='pl-3'>
          <h3 className="text-lg text-green-800 font-semibold mb-2 ">Newsletter</h3>
          <p className="text-gray-600 mb-2">
            Be the first to hear about products, exclusive events, and online updates.
          </p>
          <p className="text-gray-600  mb-2">Sign up and get 10% off your first order</p>
          <form className='flex'>
              <input 
              type="text" 
              placeholder='Enter your email' 
              className='p-3 w-full text-sm border-t border-l border-b border-green-600 rounded-l-md bg-transparent focus:outline-none focus:ring-0 focus:ring-green-500 transition-all text-green-500 placeholder:text-green-500'
              required
              />
              <button className='border border-green-600 rounded-r-md px-2 text-white bg-green-600'>Subscribe</button>
          </form>
        </div>
        {/* Shpos */}
        <div>
          <h3 className='text-xl text-green-800 mb-2'>Shops</h3>
          <ul>
            <li>
              <Link to="#" className='text-lg text-gray-500 hover:text-green-700 transition-colors'>
                Men's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className='text-lg text-gray-500 hover:text-green-700 transition-colors'>
                Women's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className='text-lg text-gray-500 hover:text-green-700 transition-colors'>
                Men's Bootom Wear
              </Link>
            </li>
            <li>
              <Link to="#" className='text-lg text-gray-500 hover:text-green-700 transition-colors'>
                Women's Bootom Wear
              </Link>
            </li>
          </ul>
        </div>
        {/* supports */}
        <div>
          <h3 className='text-xl text-green-800 mb-2'>Supports</h3>
          <ul>
            <li>
              <Link to="#" className='text-lg text-gray-500 hover:text-green-700 transition-colors'>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className='text-lg text-gray-500 hover:text-green-700 transition-colors'>
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className='text-lg text-gray-500 hover:text-green-700 transition-colors'>
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className='text-lg text-gray-500 hover:text-green-700 transition-colors'>
                Features
              </Link>
            </li>
          </ul>
        </div>
        {/* followers sectioin */}
        <div>
          <h3 className='text-xl text-green-800 mb-4'>Follow us</h3>
          <div className='flex items-center space-x-6 mb-6'>
            <a 
             href=""
             target='_blank'
             className='hover:text-green-400'
             >
               < IoLogoLinkedin />
             </a>

            <a 
             href=""
             target='_blank'
             className='hover:text-green-400'
             >
               < FaInstagram />
             </a>

            <a 
             href=""
             target='_blank'
             className='hover:text-green-400'
             >
               < FaXTwitter />
             </a>

            <a 
             href=""
             target='_blank'
             className='hover:text-green-400'
             >
               < FaWhatsapp />
             </a>
          </div>
          <div>
              {/* Cntact us */}
              <h3 className='text-gray-500'>
                Contact Us
              </h3>
              <p> < MdOutlineAddIcCall className='inline-block' /> +91 8866682434</p>
             </div>
        </div>
      </div>
      <div className='container mx-auto lg:px-0 px-4 border-t border-gray-500 pt-2 mt-2'>
        <p className='tracking-tighter text-center font-bold'>
            © 2025 All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
