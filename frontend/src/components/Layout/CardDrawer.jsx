import React, { useState } from 'react'
import { CgCloseR } from "react-icons/cg";
import CartContent from '../Cart/CartContent';

const CardDrawer = ({drawerOpen,drawerToggle}) => {
    const [cartDrawerOpen, setcartDrawerOpen] = useState(false);
  return (
    <div className={`fixed top-0 right-0 sm:w-1/2 md:w-[25rem] h-full bg-gray-600   flex flex-col transform transition-transform duration-200 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"} `}>
        <button
         onClick={drawerToggle} 
         className='flex w-full justify-end items-start text-white hover:text-red-500'>
            <CgCloseR />
        </button>
        {/* {components of cart} */}
        <div className='flex-grow overflow-y-auto' >
            <h1 className='text-green-400 font-semibold flex pl-3'>Your Cart</h1>
            <CartContent/>
        </div>
        {/* bottom things */}
        <div className='p-4 sticky bottom-0'>
            <button className='bg-slate-400 w-full p-2 text-white font-semibold hover:bg-slate-800 transition'>Checkout</button>
            <p className='text-sm tracking-tighter text-white mt-2 text-center font-semibold'>Shipping, taxes and discount codes calculated at Checkout</p>
        </div>
    </div>
  )
}

export default CardDrawer