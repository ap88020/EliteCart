import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrival from '../components/Products/NewArrival'
import ProductDetails from '../components/Products/ProductDetails'

const Home = () => {


  return (
    <div>
        < Hero />
        < GenderCollectionSection />
        < NewArrival />
        {/* BestSeller */}
        <h3 className='text-2xl text-black py-2 px-4 font-bold'>Best Seller</h3>
        < ProductDetails />
    </div>
  )
}

export default Home