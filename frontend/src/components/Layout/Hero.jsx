import React from 'react'
import heroImg from '../../assets/rabbit-hero.webp'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='relative'>
        <img src={heroImg} alt="hero-img" className='w-full sm:h-[400px] md:h-[600px] lg:h-[750px] object-cover' />
        <div className='absolute inset-0 bg-black bg-opacity-5 w-full flex justify-center items-center'>
            <div className='text-gray-200 text-center py-6'>
                <h3 className='text-94xl sm:text-9xl font-bold tracking-tighter uppercase mb-4'>Get.It</h3>
                <p className='text-sm tracking-tighter md:text-lg mb-6'>
                    Explore orur outfits with fast world wide shipping
                </p>
                <Link to="#" className='bg-white text-gray-950 rounded text-lg px-6 py-2 font-bold'>
                    shop
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Hero