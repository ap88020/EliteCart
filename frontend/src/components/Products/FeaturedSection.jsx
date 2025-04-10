import React from 'react'
import { RiShoppingBag4Fill } from "react-icons/ri";
import { HiArrowPath } from "react-icons/hi2";
import { HiOutlineCreditCard } from "react-icons/hi2";


const FeaturedSection = () => {
  return (
    <section className='px-4 bg-white'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
        {/* feature 1 */}
        <div className='flex flex-col items-center'>
          <div  className='p-4 rounded-full'>
            < RiShoppingBag4Fill className='text-xl' />
          </div>
          <h3 className='tracking-tighter mb-4 font-bold'>FREE INTERNATIONL SHIPPING</h3>
          <p className='text-gray-600 tracking-tighter mb-2'>On all orders $100.00</p>
        </div>
        {/* feature 2 */}
        <div className='flex flex-col items-center'>
          <div  className='p-4 rounded-full'>
            < HiArrowPath className='text-xl' />
          </div>
          <h3 className='tracking-tighter mb-4 font-bold'>45 DAYS RETURN</h3>
          <p className='text-gray-600 tracking-tighter mb-2'>Money back gurantee</p>
        </div>
        {/* feature 3 */}
        <div className='flex flex-col items-center'>
          <div  className='p-4 rounded-full'>
            < HiOutlineCreditCard className='text-xl' />
          </div>
          <h3 className='tracking-tighter mb-4 font-bold'>SECURE CHECKOUT</h3>
          <p className='text-gray-600 tracking-tighter mb-2'>100% Secure checkout process</p>
        </div>
      </div>
    </section>
  )
}

export default FeaturedSection