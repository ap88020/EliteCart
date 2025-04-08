import React from 'react'
import {Link} from 'react-router-dom'
import MensImg from '../../assets/mens-collection.webp'
import WomensImg from '../../assets/womens-collection.webp'


const GenderCollectionSection = () => {
  return (
    <section className='py-6 px-4 lg:px-0'>
        <div className='container mx-auto flex flex-col md:flex-row gap-8'>
            <div className='relative flex-1'>
                <img src={WomensImg} 
                  alt="WomenImg"
                  className='w-full h-[700px] object-cover'
                  />
                  <div className='text-left absolute bottom-5 left-4 bg-white opacity-50 px-5 py-2 rounded'>
                    <h3 className='text-2xl font-bold text-gray-900'>Women's collections</h3>
                    <Link 
                      to="/collections/all?gender=Women"
                      className='text-green-700 underline'
                      >
                        Shop Now
                    </Link>
                  </div>
            </div>
            <div className='relative flex-1'>
                <img src={MensImg} 
                  alt="MensImg"
                  className='w-full h-[700px] object-cover'
                  />
                  <div className='text-left absolute bottom-5 left-4 bg-white opacity-50 px-5 py-2 rounded'>
                    <h3 className='text-2xl font-bold text-gray-900'>Men's collections</h3>
                    <Link 
                      to="/collections/all?gender=Women"
                      className='text-green-700 underline'
                      >
                        Shop Now
                    </Link>
                  </div>
            </div>
        </div>
    </section>
  )
}

export default GenderCollectionSection