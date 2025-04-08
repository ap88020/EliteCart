import React from 'react'
import {Link} from 'react-router-dom'

const ProductsGrid = ({products}) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 '>
      {
        products.map((product,index) => (
          <Link key={index} to={`/products/${product._id}`} className='block' >
            <div className='p-4 bg-white rounded-lg' >
              <div className='w-full h-96 mb-4'>
                <img src={product.images[0].url} alt={product.images[0].url || product.name}  className='w-full h-full object-cover rounded-lg' /> 
              </div>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default ProductsGrid