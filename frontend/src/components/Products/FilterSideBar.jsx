import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const filterSideBar = () => {
    const [searchParams , setSearParams] = useSearchParams();
    const [filters,setFilters] = useState({
        category:"",
        gender:"",
        color : "",
        size : [],
        material : [],
        brand : [],
        minPrice : 0,
        maxPrice : 100,
    });
    const [priceRange , setPriceRange] = useState([0,100]);
    const category = ["Top Wear","Bootom Wear",]
    const colors = [ 
        "Red",
        "Blue",
        "Black",
        "green",
        "Yellow",
        "Gray",
        "White",
        "pink",
        "Beige",
        "Navy",
    ]
    const sizes = ["XS","S","M","L","XL","XXL"];
    const materials = [
        "Cotton",
        "Wool",
        "Denim",
        "Polyester",
        "Lenin",
        "Silk",
        "Viscose",
        "Fleece",
    ]
    const brands = [
        "Urban Threads",
        "Modern Fit",
        "Streat Style",
        "Beach Breeze",
        "Fashionista",
        "ChicsStyle",
    ]
    const genders = ["Men","Women"];

    useEffect(() => {
        const params = Object.fromEntries([...searchParams]);

        setFilters({
            category : params.category || "",
            gender : params.genders || "",
            color : params.colors || "",
            size : params.size ? params.size.split(",") : [],
            material : params.material ? params.material.split(",") : [],
            brand : params.brand ? params.brand.split(",") : [],
            minPrice : params.minPrice || 0,
            maxPrice : params.maxPrice || 100,
        })
        setPriceRange([0,params.maxPrice || 100]);
    },[searchParams]);

    const handleFilterCheck = (e) => {
        const {name , value , checked , type} = e.target;
        console.log({name , value, checked , type})
    }

  return (
    <div className='p-2'>
        <h3 className='text-xl font-medium text-gray-400 mb-4'>Filter</h3>
        {/* Category */}
        <div className='mb-6'>
            <label className='text-left block text-gray-600 font-medium mb-2'>Category</label>
            {
                category.map((category) => (
                    <div key={category} className='flex items-center mb-1'>
                        <input 
                         type="radio" 
                         name='category' 
                         onChange={handleFilterCheck}
                         className='mr-2 h-4 w-4 text-blue-500 border-gray-300 focus:ring-blue-400' 
                        />
                        <span className='text-gray-700'>{category}</span>
                    </div>
                ))
            }
        </div>
        {/* Gender */}
        <div className='mb-6'>
            <label className='text-left block text-gray-600 font-medium mb-2'>Gender</label>
            {
                genders.map((gender) => (
                    <div key={gender} className='flex items-center mb-1'>
                        <input 
                         type="radio" 
                         name='gender' 
                         onChange={handleFilterCheck}
                         className='mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border border-black' 
                        />
                        <span className='text-gray-700'>{gender}</span>
                    </div>
                ))
            }
        </div>
        {/* Color filter */}
        <div className='mb-6'>
            <label className='block text-gray-600 font-medium mb-2 text-left'>Color</label>
            <div className='flex flex-wrap gap-2'>
                {
                    colors.map((color) => ( 
                        <button 
                         key={color} 
                         name="color"
                         onClick={handleFilterCheck}
                         className='w-4 h-4 border border-gray-300 cursor-pointer transition hover:scale-105 rounded text-left' 
                         style={{backgroundColor:color.toLowerCase()}}  
                        ></button>
                    ))
                }
            </div>
        </div>
        {/* size filter */}
        <div className='mb-6'>
            <label className='block text-gray-600 font-medium mb-2'>Size</label>
            {
                sizes.map((size) => (
                    <div key={size} className='flex items-center mb-1'>
                        <input 
                         type="checkbox" 
                         name="size"
                         onChange={handleFilterCheck}
                         className='mr-2 w-4 h-4 text-blue-500 focus:ring-blue-400 border-gray-300'
                        />
                        <span className='text-gray-700 text-left'>{size}</span>
                    </div>
                ))
            }
        </div>
        {/* Material filter */}
        <div className='mb-6'>
            <label className='block text-gray-600 font-medium mb-2'>Material</label>
            {
                materials.map((material) => (
                    <div key={material} className='flex items-center mb-1'>
                        <input 
                         type="checkbox" 
                         name="material"
                         onChange={handleFilterCheck}
                         className='mr-2 w-4 h-4 text-blue-500 focus:ring-blue-400 border-gray-300'
                        />
                        <span className='text-gray-700 text-left'>{material}</span>
                    </div>
                ))
            }
        </div>
        {/* size filter */}
        <div className='mb-6'>
            <label className='block text-gray-600 font-medium mb-2'>Brands</label>
            {
                brands.map((brand) => (
                    <div key={brand} className='flex items-center mb-1'>
                        <input 
                         type="checkbox" 
                         name="brand"
                         onChange={handleFilterCheck}
                         className='mr-2 w-4 h-4 text-blue-500 focus:ring-blue-400 border-gray-300'
                        />
                        <span className='text-gray-700 text-left'>{brand}</span>
                    </div>
                ))
            }
        </div>
        {/* price range  */}
        <div className='mb-4'>
            <label className='text-left block text-gray-600 font-medium mb-2'>
                Price Range
            </label>
            <input 
             type="range" 
             name="maxRange"
             min={0}
             max={100}
             onChange={handleFilterCheck}
             className='w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer'
            />
            <div className='flex justify-between text-gray-600'>
                <span>$0</span>
                <span>${priceRange[1]}</span>
            </div>
        </div>
    </div>
  )
}

export default filterSideBar