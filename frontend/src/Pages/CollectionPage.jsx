import React, { useEffect, useState, useRef } from 'react'
import { FaFilter } from "react-icons/fa";
import FilterSideBar from '../components/Products/filterSideBar';
import SortOptions from '../components/Products/SortOptions';
import ProductsGrid from '../components/Products/ProductsGrid';


const CollectionPage = () => {
    const [product , setProduct] = useState([]);
    const sideBarRef = useRef(null);
    const [isSidebarOpen , setIsSideBarOpen] = useState(false);

    const toogleSideBar = () => {
        setIsSideBarOpen(!isSidebarOpen);
    }
    const handleClickOutsie = (e) => {
        if(sideBarRef.current && !sideBarRef.current.contains(e.target)){
            setIsSideBarOpen(false);
        }
    }
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutsie);
        document.removeEventListener("mousedown", handleClickOutsie);
    })
    
    

    useEffect(() => {
          setTimeout(() => {
            const fetchProducts = [
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
              ];
              setProduct(fetchProducts);
              
          },1000)
      },[]);
  return (
    <div className='flex flex-col lg:flex-row'>
        <button
         onClick={toogleSideBar} 
         className='lg:hidden border bg-red-700  p-2 flex justify-center items-center'>
            < FaFilter className='m-2' />
        </button>
        {/* filter side bar */}
        <div ref={sideBarRef} className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 z-10 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0 `}>
            <FilterSideBar />
        </div>
        <div className='flex-grow p-4 text-left'>
            <h2 className='text-2xl uppercase mb-4'>All collection</h2>
            {/* sort Options */}
            < SortOptions />
            {/* product Grid */}
            < ProductsGrid products={product} />
        </div>
    </div>
  )
}

export default CollectionPage