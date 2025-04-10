import React, { useRef, useState } from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const NewArrival = () => {
   
    const scrollRef = useRef(null);
    const [isDragging , setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(false);
    const [canScrollLeft , setCanScrollLeft] = useState(false);
    const [canScrollRight , setCanScrollRight] = useState(false); 
    
    const newArrival = [
        {
          _id : 1,
          name : "stylish jacket",
          price : 120,
          images : [
            {
              url : "https://picsum.photos/500/500?random=1",
              altText : "stlish jacket",
            }
          ]
        },
        {
          _id : 2,
          name : "stylish jacket",
          price : 120,
          images : [
            {
              url : "https://picsum.photos/500/500?random=2",
              altText : "stlish jacket",
            }
          ]
        },
        {
          _id : 3,
          name : "stylish jacket",
          price : 120,
          images : [
            {
              url : "https://picsum.photos/500/500?random=3",
              altText : "stlish jacket",
            }
          ]
        },
        {
          _id : 4,
          name : "stylish jacket",
          price : 120,
          images : [
            {
              url : "https://picsum.photos/500/500?random=4",
              altText : "stlish jacket",
            }
          ]
        },
        {
          _id : 5,
          name : "stylish jacket",
          price : 120,
          images : [
            {
              url : "https://picsum.photos/500/500?random=5",
              altText : "stlish jacket",
            }
          ]
        },
        {
          _id : 6,
          name : "stylish jacket",
          price : 120,
          images : [
            {
              url : "https://picsum.photos/500/500?random=6",
              altText : "stlish jacket",
            }
          ]
        },
        {
          _id : 7,
          name : "stylish jacket",
          price : 120,
          images : [
            {
              url : "https://picsum.photos/500/500?random=7",
              altText : "stlish jacket",
            }
          ]
        },
    ]
    const scroll = (direction) => {
        const scrollAmount = direction === "left" ? -300 : 300;
        scrollRef.current.scrollBy({left:scrollAmount,behavior:"smooth"});
    }
    const updateScrollButtons = () => {
        const container = scrollRef.current;

        if(container){
            const leftScroll = container.scrollLeft;
            const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth;
            const maxScrollLeft = container.scrollWidth - container.clientWidth;  
            setCanScrollLeft(leftScroll > 0);
            setCanScrollRight(leftScroll < maxScrollLeft);
        } 
    }
    useEffect(() => {
        const container = scrollRef.current;
        if(container){
            container.addEventListener("scroll",updateScrollButtons);
            updateScrollButtons();
        }
    },[]);

  return (
    <section>
        <div className='container mx-auto text-center mb-10 relative'>
            <h2 className='text-2xl font-bold mb-1'>Explore New Arrivals</h2>
            <p className='text-lg text-gray-600 mb-3'>Discover the latest styles straight off the runway, freshly add to keep your wardrobe on the cutting edge of faishion</p>
            <div className='absolute right-0 -bottom-6 flex space-x-2'>
                <button
                 onClick={()=>scroll("left")}
                 disabled = {!canScrollLeft} 
                 className={`p-2 border border-black rounded ${canScrollLeft ? "bg-white text-black" : "border-gray-400 bg-gray-200 text-gray-400 cursor-not-allowed  "}`}>
                    < FaAngleLeft />
                </button>
                <button
                 onClick={()=> scroll("right")}
                  
                 className={`p-2 border border-black rounded ${canScrollRight ? "bg-white text-black" : "border-gray-400 bg-gray-200 text-gray-400 cursor-not-allowed  "}`}
                 >
                    < FaChevronRight />
                </button>
            </div>
        </div>
        {/* scrollable content */}
        <div
            ref={scrollRef} 
            className='container mx-auto overflow-x-scroll flex space-x-6 relative scrollbar-hide'>
            {
                newArrival.map((product) => (
                    <div key={product._id} className='min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative'>
                        <img src={product.images[0]?.url}
                         alt={product.images[0]?.altText} 
                         className='w-full h-[400px] object-cover rounded-lg'
                         />
                        <div className='absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg border-t rounded-xl'>
                            <Link to={`product/${product._id}`} className="block" >
                                <h4 className='font-medium'>{product.name}</h4>
                                <p className='mt-1'>${product.price}</p>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default NewArrival