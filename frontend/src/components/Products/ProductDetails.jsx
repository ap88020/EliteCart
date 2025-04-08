import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import ProductsGrid from './ProductsGrid';

const selectProduct = {
    name : "Stylish Jacket",
    price : 120,
    originalPrice : 150,
    description : "This is stylish Jacket perfect for any occasion",
    brand : "FashionBrand",
    material : "Leather",
    sizes : ["S","M","L","X"],
    color : ["Red","Black"],
    images : [
        {
            url : "https://picsum.photos/500/500?random=1",
            altText : "Stylish Jacket 1",
        },
        {
            url : "https://picsum.photos/500/500?random=2",
            altText : "Stylish Jacket 2",
        }
    ],
}

const similarProduct =  [
    {
        _id : 1,
        name : "product_1",
        price : 101,
        images : [{url : "https://picsum.photos/500/500?random=21"}]
    },
    {
        _id : 2,
        name : "product_2",
        price : 102,
        images : [{url : "https://picsum.photos/500/500?random=22"}]
    },
    {
        _id : 3,
        name : "product_3",
        price : 103,
        images : [{url : "https://picsum.photos/500/500?random=23"}]
    },
    {
        _id : 4,
        name : "product_4",
        price : 104,
        images : [{url : "https://picsum.photos/500/500?random=24"}]
    },
]

const ProductDetails = () => {
    const [mainImage , setMainImage] = useState('');
    const [selectSize , setSelectSize] = useState("");
    const [selectColor , setSelectColor] = useState("");
    const [quantity , setQuantity] = useState(1);
    const [isButtionDisabled , setIsButtonDisabled] = useState(false);

    const handleChangeQuantity = (action) => {
        if(action == "plus") setQuantity((prev) => prev + 1);
        if(action == "minus" && quantity > 1) setQuantity((prev) => prev - 1);
    }

    const handleAddCart = () => {
        if(!selectColor || !selectSize){
            toast.error("before adding to cart please select color and size.", {
                duration:1000,
            });
            return;
        }
        setIsButtonDisabled(true);

        setTimeout(() => {
            toast.success("product added to cart",{
                duration:1000,
            });
            setIsButtonDisabled(false);   
        })
    }

    useEffect(() => {
        if(selectProduct?.images?.length > 0){
            setMainImage(selectProduct.images[0].url);
        }
    },[selectProduct]);

  return (
    <div className=' p-3'>
        <div className=' max-w-6xl mx-auto bg-white p-4 rounded-lg'>
            <div className='flex flex-col md:flex-row'>
                {/* left themnail */}
                <div className='hidden md:flex flex-col space-y-4 mr-6'>
                    {
                        selectProduct.images.map((image, index) => (
                            <img
                                key={index} 
                                src={image.url} 
                                alt={image.altText || `Thumbnail ${index}`} 
                                className={`w-20 h-20 object-cover rounded-lg border cursor-pointer ${mainImage === image.url ? " border-black" : "border-gray-300" }`}
                                onClick={() => setMainImage(image.url)}
                             />
                        ))
                    }
                </div>
                {/* main image */}
                <div className="md:w-1/2">
                    <div className='mb-4'>
                        <img
                            src={mainImage} 
                            alt="altProduct"
                            className='w-full h-auto object-cover rounded-lg'
                        />
                    </div>
                </div>
                {/* mobile Thumbnail */}
                <div className='md:hidden flex overscroll-x-scroll space-x-4 mb-4'>
                    {
                        selectProduct.images.map((image, index) => (
                            <img
                                key={index} 
                                src={image.url} 
                                alt={image.altText || `Thumbnail ${index}`} 
                                className={`w-20 h-20 object-cover rounded-lg border cursor-pointer ${mainImage === image.url ? " border-black" : "border-gray-300" } `} 
                                onClick={() => setMainImage(image.url)}
                             />
                        ))
                    }
                </div>
                <div className='text-left md:w-1/2 md:ml-10'>
                    <h1 className='text-2xl md:text-3xl font-semibold mb-2'>
                        {selectProduct.name}
                    </h1>
                    <p className='text-lg text-gray-600 mb-1 line-through'>
                        {selectProduct.originalPrice && `${selectProduct.originalPrice}`}
                    </p>
                    <p className='text-lg text-gray-500 mb-2'>
                        ${selectProduct.price}
                    </p>
                    <p className='text-lg text-gray-600 mb-4'>
                        {selectProduct.description}
                    </p>
                    <div className='flex gap-2 mt-2'>
                        {
                            selectProduct.color.map((color) => (
                                <button 
                                    key={color}
                                    style={{backgroundColor: color.toLocaleLowerCase(),
                                        filter:"brightness(0.5)" 
                                    }}
                                    onClick={() => setSelectColor(color)}
                                    className={`w-8 h-8 rounded-full border ${selectColor === color ? "border-4 border-black" : "border-gray-300"}`}
                                ></button>
                            ))
                        }
                    </div>
                    {/* clothes size */}
                    <div className='mb-4'>
                        <p className='text-gray-700'>Sizes :</p>
                        <div className='flex gap-2 mt-2'>
                            {
                                selectProduct.sizes.map((size) => (
                                    <button 
                                        key={size}
                                        onClick={()=> setSelectSize(size)}
                                        className={`px-4 py-2 rounded border ${selectSize === size ? "bg-black text-white" : "bg-gray-200"}`}
                                    >
                                        {size}
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                    <div className='mb-4'>
                        <p className='text-gray-700'>Quantity :</p>
                        <div className='flex space-x-4 items-center mt-2'>
                            <button 
                                onClick={() => handleChangeQuantity("minus")}
                                className='text-lg bg-gray-200 rounded py-1 px-2'>
                                -
                            </button>
                            <span className='text-lg'>{quantity}</span>
                            <button 
                                onClick={() => handleChangeQuantity("plus")}
                                className='text-lg bg-gray-200 rounded py-1 px-2'>
                                +
                            </button>
                        </div>
                    </div>
                    <button
                        onClick={handleAddCart}
                        disabled={isButtionDisabled} 
                        className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${isButtionDisabled ? "cursor-not-allowed opacity-50" : "hover:bg-gray-900"}`}>
                            {isButtionDisabled? "Adding..." : "Add to cart"}
                    </button>
                    <div className='mt-4 text-gray-700'>
                        <h3 className='text-xl font-bold mb-4'>Characteristics :</h3>
                        <table className='text-left w-full text-sm text-gray-600'>
                            <tbody>
                                <tr>
                                    <td className='py-1'>Brand</td>
                                    <td className='py-1'>{selectProduct.brand}</td>
                                </tr>
                                <tr>
                                    <td className='py-1'>Material</td>
                                    <td className='py-1'>{selectProduct.material}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <h2 className='text-2xl font-medium text-center mb-4'>You may also like</h2>
                < ProductsGrid products={similarProduct} />
            </div>
        </div>
    </div>
  )
}

export default ProductDetails