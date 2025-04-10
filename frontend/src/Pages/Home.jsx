import React from 'react'
import Hero from '../components/Layout/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrival from '../components/Products/NewArrival'
import ProductDetails from '../components/Products/ProductDetails'
import ProductsGrid from '../components/Products/ProductsGrid'
import FeaturedCollection from '../components/Products/FeaturedCollection'
import ProductSection from '../components/Products/FeaturedSection'

const placeHolderProducts = [
  {
      _id : 1,
      name : "product_1",
      price : 101,
      images : [{url : "https://picsum.photos/500/500?random=25"}]
  },
  {
      _id : 2,
      name : "product_2",
      price : 102,
      images : [{url : "https://picsum.photos/500/500?random=26"}]
  },
  {
      _id : 3,
      name : "product_3",
      price : 103,
      images : [{url : "https://picsum.photos/500/500?random=27"}]
  },
  {
      _id : 4,
      name : "product_4",
      price : 104,
      images : [{url : "https://picsum.photos/500/500?random=28"}]
  },
  {
      _id : 5,
      name : "product_5",
      price : 101,
      images : [{url : "https://picsum.photos/500/500?random=29"}]
  },
  {
      _id : 6,
      name : "product_6",
      price : 102,
      images : [{url : "https://picsum.photos/500/500?random=30"}]
  },
  {
      _id : 7,
      name : "product_7",
      price : 103,
      images : [{url : "https://picsum.photos/500/500?random=31"}]
  },
  {
      _id : 8,
      name : "product_8",
      price : 104,
      images : [{url : "https://picsum.photos/500/500?random=32"}]
  },
]

const Home = () => {
  return (
    <div>
        < Hero />
        < GenderCollectionSection />
        < NewArrival />
        {/* BestSeller */}
        <h3 className='text-2xl text-black py-2 px-4 font-bold'>Best Seller</h3>
        < ProductDetails />
        <div className='container'>
          <h2 className='text-3xl text-black py-2 px-4 font-bold'>
              Top wears women's clothes
          </h2>
          < ProductsGrid products={placeHolderProducts} />
        </div>
        < FeaturedCollection />
        < ProductSection />
    </div>
  )
}

export default Home